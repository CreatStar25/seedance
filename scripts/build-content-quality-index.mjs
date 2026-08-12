import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const contentRoot = join(root, 'src', 'content');
const outputDir = join(root, 'src', 'generated');
const outputFile = join(outputDir, 'content-quality.json');

async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (/\.mdx?$/.test(entry.name)) files.push(path);
  }
  return files;
}

function parseFrontmatter(source) {
  const match = source.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
  const raw = match?.[1] ?? '';
  const data = {};
  for (const line of raw.split('\n')) {
    const field = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
    if (!field) continue;
    data[field[1]] = field[2].trim().replace(/^(["'])([\s\S]*)\1$/, '$2');
  }
  return { data, body: source.slice(match?.[0].length ?? 0) };
}

function visibleText(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/<video[\s\S]*?<\/video>/gi, ' ')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/[#>*_`~|=-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function countWords(text, lang) {
  try {
    const segmenter = new Intl.Segmenter(lang, { granularity: 'word' });
    return [...segmenter.segment(text)].filter((part) => part.isWordLike).length;
  } catch {
    return text.split(/\s+/).filter(Boolean).length;
  }
}

function normalizedFingerprint(text) {
  const normalized = text
    .toLocaleLowerCase()
    .replace(/seedance\s*2(?:[.,]\d)?/g, 'seedance')
    .replace(/[\p{P}\p{S}\s\d]+/gu, '');
  return createHash('sha256').update(normalized).digest('hex');
}

const records = [];
for (const file of await walk(contentRoot)) {
  const parts = relative(contentRoot, file).split(sep);
  const [collection, lang, ...rest] = parts;
  if (!['blog', 'guide'].includes(collection) || !lang || rest.length === 0) continue;
  const slug = rest.join('/').replace(/\.mdx?$/, '');
  const source = await readFile(file, 'utf8');
  const { data, body } = parseFrontmatter(source);
  const text = visibleText(body);
  const words = countWords(text, lang);
  const characters = text.replace(/\s/g, '').length;
  const headings = (body.match(/^#{2,4}\s+\S/gm) ?? []).length;
  const paragraphs = body.split(/\n\s*\n/).filter((block) => visibleText(block).length >= 80).length;
  records.push({
    key: `${collection}/${lang}/${slug}`,
    collection,
    lang,
    slug,
    title: data.title ?? slug,
    seoIndex: data.seoIndex,
    words,
    characters,
    headings,
    paragraphs,
    fingerprint: normalizedFingerprint(text),
  });
}

const fingerprints = new Map();
for (const record of records) {
  if (!fingerprints.has(record.fingerprint)) fingerprints.set(record.fingerprint, []);
  fingerprints.get(record.fingerprint).push(record);
}

const entries = {};
for (const record of records) {
  const reasons = [];
  const exactCopies = fingerprints.get(record.fingerprint) ?? [];
  const explicitNoindex = record.seoIndex === 'noindex';
  const severeThin = record.characters < 500 || record.words < 100 || record.headings < 2 || record.paragraphs < 3;
  const crossLocaleExactCopy = exactCopies.some((other) => other.lang !== record.lang);

  if (explicitNoindex) reasons.push('frontmatter-noindex');
  if (severeThin) reasons.push('severe-thin-content');
  if (crossLocaleExactCopy) reasons.push('cross-locale-exact-copy');

  entries[record.key] = {
    indexable: record.seoIndex === 'index' ? true : reasons.length === 0,
    reasons: record.seoIndex === 'index' ? ['frontmatter-index-override'] : reasons,
    metrics: {
      words: record.words,
      characters: record.characters,
      headings: record.headings,
      substantialParagraphs: record.paragraphs,
    },
  };
}

const noindexCount = Object.values(entries).filter((entry) => !entry.indexable).length;
const report = {
  generatedAt: new Date().toISOString(),
  policyVersion: 1,
  summary: { total: records.length, indexable: records.length - noindexCount, noindex: noindexCount },
  entries,
};

await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, `${JSON.stringify(report, null, 2)}\n`);
console.log(`[content-quality] ${records.length} entries checked; ${noindexCount} set to noindex.`);
