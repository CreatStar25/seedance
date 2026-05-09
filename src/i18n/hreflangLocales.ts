import type { CollectionEntry } from 'astro:content';

type BlogOrGuide = CollectionEntry<'blog'> | CollectionEntry<'guide'>;

/** 与给定 slug 对应的已发布内容语种（用于 hreflang，避免指向未构建的 URL） */
export function localesForContentSlug(entries: BlogOrGuide[], slug: string): string[] {
  const set = new Set<string>();
  for (const e of entries) {
    const [loc, ...rest] = e.id.split('/');
    const s = rest.join('/').replace(/\.md$/, '');
    if (s === slug) set.add(loc);
  }
  return [...set].sort();
}
