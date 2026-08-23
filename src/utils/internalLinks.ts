import { contentRobots } from './contentQuality';

type CollectionName = 'blog' | 'guide';

interface ContentEntryLike {
  id: string;
  data: {
    title: string;
    description: string;
  };
}

export interface InternalLink {
  collection: CollectionName;
  href: string;
  title: string;
  description: string;
  topic: string;
}

const topicRules: Array<[string, RegExp]> = [
  ['updates', /(?:2-5|2-1|launch|release|upgrade|update|preview|version)/],
  ['prompt-camera', /(?:prompt|camera|movement|director|physics|cinematic)/],
  ['multimodal', /(?:multimodal|reference|multi-shot|multi-image|consistency|batch|asset)/],
  ['use-cases', /(?:vlog|comic|advert|\bad\b|storytelling|live-action)/],
  ['quality-features', /(?:quality|feature|model|world-leading|beyond|generation)/],
  ['access-platform', /(?:official|website|platform|entry|china)/],
  ['comparison', /(?:\bvs\b|comparison|sundance|sandance|gemini|correction)/],
  ['tutorial', /(?:tutorial|how-to|manual|usage|three-step|complete|tips)/],
];

const stopWords = new Set([
  'seedance', 'ai', 'video', 'the', 'and', 'for', 'with', 'from', 'your',
  'guide', 'tutorial', '2', '0', '1', '5',
]);

function slugFromId(id: string): string {
  return id.split('/').slice(1).join('/').replace(/\.mdx?$/, '');
}

function topicsFor(entry: ContentEntryLike): Set<string> {
  const haystack = `${slugFromId(entry.id)} ${entry.data.title} ${entry.data.description}`.toLowerCase();
  return new Set(topicRules.filter(([, pattern]) => pattern.test(haystack)).map(([topic]) => topic));
}

function tokensFor(entry: ContentEntryLike): Set<string> {
  return new Set(
    `${slugFromId(entry.id)} ${entry.data.title}`
      .toLowerCase()
      .normalize('NFKD')
      .replace(/[^\p{L}\p{N}]+/gu, ' ')
      .split(/\s+/)
      .filter((token) => token.length > 1 && !stopWords.has(token))
  );
}

function versionFor(entry: ContentEntryLike): string {
  return slugFromId(entry.id).match(/(?:seedance-?)?(2-[015])/i)?.[1] ?? 'general';
}

function scoreRelated(current: ContentEntryLike, candidate: ContentEntryLike): number {
  const currentTopics = topicsFor(current);
  const candidateTopics = topicsFor(candidate);
  const topicOverlap = [...currentTopics].filter((topic) => candidateTopics.has(topic)).length;

  const currentTokens = tokensFor(current);
  const candidateTokens = tokensFor(candidate);
  const tokenOverlap = [...currentTokens].filter((token) => candidateTokens.has(token)).length;
  const tokenUnion = new Set([...currentTokens, ...candidateTokens]).size || 1;

  return (
    topicOverlap * 100 +
    (tokenOverlap / tokenUnion) * 60 +
    (versionFor(current) === versionFor(candidate) ? 18 : 0)
  );
}

function hrefFor(collection: CollectionName, entryId: string, lang: string): string {
  const slug = slugFromId(entryId);
  const prefix = lang === 'en' ? '' : `/${lang}`;
  return `${prefix}/${collection}/${slug}/`;
}

function rank(
  collection: CollectionName,
  current: ContentEntryLike,
  entries: ContentEntryLike[],
  lang: string,
  limit: number
): InternalLink[] {
  return entries
    .filter((entry) => entry.id.startsWith(`${lang}/`))
    .filter((entry) => entry.id !== current.id)
    .filter((entry) => contentRobots(collection, entry.id) === 'index, follow')
    .map((entry) => ({ entry, score: scoreRelated(current, entry) }))
    .sort((a, b) => b.score - a.score || a.entry.id.localeCompare(b.entry.id))
    .slice(0, limit)
    .map(({ entry }) => ({
      collection,
      href: hrefFor(collection, entry.id, lang),
      title: entry.data.title,
      description: entry.data.description,
      topic: [...topicsFor(entry)][0] ?? 'general',
    }));
}

/**
 * Builds a deterministic link set: three links reinforce the current content silo,
 * while one cross-links blog and guide content. All targets are same-locale and indexable.
 */
export function getRelatedContent(
  currentCollection: CollectionName,
  current: ContentEntryLike,
  blogEntries: ContentEntryLike[],
  guideEntries: ContentEntryLike[],
  lang: string
): InternalLink[] {
  const sameCollection = currentCollection === 'blog' ? blogEntries : guideEntries;
  const crossCollection = currentCollection === 'blog' ? guideEntries : blogEntries;
  const crossName: CollectionName = currentCollection === 'blog' ? 'guide' : 'blog';

  const same = rank(currentCollection, current, sameCollection, lang, 3);
  const cross = rank(crossName, current, crossCollection, lang, 1);
  return [...same.slice(0, 2), ...cross, ...same.slice(2)].slice(0, 4);
}
