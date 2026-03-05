// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    translationKey: z.string().optional(),
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
};
