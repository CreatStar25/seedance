import qualityReport from '../generated/content-quality.json';

type ContentCollection = 'blog' | 'guide';

export function contentRobots(collection: ContentCollection, entryId: string): string {
  const key = `${collection}/${entryId.replace(/\.mdx?$/, '')}`;
  const entry = qualityReport.entries[key as keyof typeof qualityReport.entries];
  return entry && !entry.indexable ? 'noindex, follow' : 'index, follow';
}
