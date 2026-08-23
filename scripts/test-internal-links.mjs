import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.cwd();
const distDir = join(root, 'dist');

if (!existsSync(distDir)) {
  console.error('dist/ does not exist. Run pnpm build before this check.');
  process.exit(1);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function pageInfo(file) {
  const parts = relative(distDir, file).split(sep);
  if (parts.length === 3 && ['blog', 'guide'].includes(parts[0]) && parts[2] === 'index.html') {
    return { lang: 'en', collection: parts[0], slug: parts[1] };
  }
  if (parts.length === 4 && ['blog', 'guide'].includes(parts[1]) && parts[3] === 'index.html') {
    return { lang: parts[0], collection: parts[1], slug: parts[2] };
  }
  return null;
}

function targetFile(href) {
  const cleanPath = href.split(/[?#]/, 1)[0].replace(/^\//, '').replace(/\/$/, '');
  return join(distDir, cleanPath, 'index.html');
}

const articlePages = walk(distDir)
  .filter((file) => file.endsWith('index.html'))
  .map((file) => ({ file, info: pageInfo(file) }))
  .filter(({ info }) => info);

const errors = [];

for (const { file, info } of articlePages) {
  const html = readFileSync(file, 'utf8');
  const pagePath = info.lang === 'en'
    ? `/${info.collection}/${info.slug}/`
    : `/${info.lang}/${info.collection}/${info.slug}/`;
  const cardLinks = [...html.matchAll(/<a\b(?=[^>]*\bclass="[^"]*\brelated-card\b)[^>]*\bhref="([^"]+)"[^>]*>/g)]
    .map((match) => match[1]);

  if (!html.includes('class="related-content"')) {
    errors.push(`${pagePath}: missing related-content navigation`);
    continue;
  }
  if (cardLinks.length !== 4) {
    errors.push(`${pagePath}: expected 4 related cards, found ${cardLinks.length}`);
  }
  if (new Set(cardLinks).size !== cardLinks.length) {
    errors.push(`${pagePath}: duplicate related links found`);
  }

  const collectionPattern = info.lang === 'en'
    ? /^\/(blog|guide)\//
    : new RegExp(`^/${info.lang}/(blog|guide)/`);
  const linkedCollections = cardLinks.map((href) => href.match(collectionPattern)?.[1]);
  const sameSiloCount = linkedCollections.filter((collection) => collection === info.collection).length;
  const crossSiloCount = linkedCollections.filter((collection) => collection && collection !== info.collection).length;
  if (sameSiloCount !== 3 || crossSiloCount !== 1) {
    errors.push(`${pagePath}: expected 3 same-silo and 1 cross-silo links, found ${sameSiloCount}+${crossSiloCount}`);
  }

  const expectedPrefix = info.lang === 'en' ? /^\/(blog|guide)\// : new RegExp(`^/${info.lang}/(blog|guide)/`);
  for (const href of cardLinks) {
    if (!expectedPrefix.test(href)) errors.push(`${pagePath}: cross-locale link ${href}`);
    if (href === pagePath) errors.push(`${pagePath}: self-link found`);

    const destination = targetFile(href);
    if (!existsSync(destination)) {
      errors.push(`${pagePath}: missing target ${href}`);
      continue;
    }
    const targetHtml = readFileSync(destination, 'utf8');
    if (/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(targetHtml)) {
      errors.push(`${pagePath}: points to noindex target ${href}`);
    }
  }

  const hubPrefix = info.lang === 'en' ? '' : `/${info.lang}`;
  for (const hub of [`${hubPrefix}/blog/`, `${hubPrefix}/guide/`]) {
    if (!html.includes(`href="${hub}"`)) errors.push(`${pagePath}: missing hub link ${hub}`);
  }
}

if (errors.length) {
  console.error(`Internal-link check failed with ${errors.length} issue(s):`);
  errors.slice(0, 100).forEach((error) => console.error(`- ${error}`));
  if (errors.length > 100) console.error(`- ...and ${errors.length - 100} more`);
  process.exit(1);
}

console.log(`Internal-link check passed for ${articlePages.length} article pages.`);
