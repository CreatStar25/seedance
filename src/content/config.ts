// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    /** SEO title 是否追加品牌名；较长或已包含品牌的标题可关闭 */
    appendBrandToTitle: z.boolean().optional(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    lastModified: z.coerce.date().optional(),
    author: z.string().optional(),
    /** 封面图 URL，用于列表卡片与 og:image。与 heroImage 二选一即可，展示时优先 image */
    image: z.string().optional(),
    /** 同上，兼容部分文章使用的 heroImage 字段 */
    heroImage: z.string().optional(),
    translationKey: z.string().optional(),
    /** 编辑覆写索引质量门槛；通常应让构建脚本自动判断 */
    seoIndex: z.enum(['index', 'noindex']).optional(),
  }),
});

const guideCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    appendBrandToTitle: z.boolean().optional(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    date: z.coerce.date().optional(),
    lastModified: z.coerce.date().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    heroImage: z.string().optional(),
    seoIndex: z.enum(['index', 'noindex']).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'guide': guideCollection,
};
