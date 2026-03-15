// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    author: z.string().optional(),
    /** 封面图 URL，用于列表卡片与 og:image。与 heroImage 二选一即可，展示时优先 image */
    image: z.string().optional(),
    /** 同上，兼容部分文章使用的 heroImage 字段 */
    heroImage: z.string().optional(),
    translationKey: z.string().optional(),
  }),
  slug: ({ id }: { id: string }) => {
    const [lang, ...rest] = id.split('/');
    const file = rest.join('/');
    const base = file.replace(/\.md$/, '');
    return `${lang}/${base}`;
  },
} as any);

const guideCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    heroImage: z.string().optional(),
  }),
  slug: ({ id }: { id: string }) => {
    const [lang, ...rest] = id.split('/');
    const file = rest.join('/');
    const base = file.replace(/\.md$/, '');
    return `${lang}/${base}`;
  },
} as any);

export const collections = {
  'blog': blogCollection,
  'guide': guideCollection,
};
