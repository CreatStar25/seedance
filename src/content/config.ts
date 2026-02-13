// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    translationKey: z.string().optional(), // 用于关联不同语言
  }),
});

export const collections = {
  'blog': blogCollection,
};