import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import responsiveImages from './scripts/rehype-responsive-images.mjs';

const qualityReportPath = new URL('./src/generated/content-quality.json', import.meta.url);
const qualityReport = fs.existsSync(qualityReportPath)
  ? JSON.parse(fs.readFileSync(qualityReportPath, 'utf8'))
  : { entries: {} };
const noindexPaths = new Set(
  Object.entries(qualityReport.entries)
    .filter(([, value]) => !value.indexable)
    .map(([key]) => {
      const [collection, lang, ...slugParts] = key.split('/');
      const prefix = lang === 'en' ? '' : `/${lang}`;
      return `${prefix}/${collection}/${slugParts.join('/')}/`;
    })
);

export default defineConfig({
  // -------------------------------------------------
  // 关键修复：必须添加 site 属性，且必须带 https://
  // -------------------------------------------------
  site: 'https://seedance22.com',

  // 统一使用尾斜杠，与 sitemap/Google 抓取一致，避免「备用网页（有适当的规范标记）」因 canonical 与请求 URL 不一致
  trailingSlash: 'always',

  output: 'static',
  markdown: {
    rehypePlugins: [responsiveImages],
  },
  integrations: [
    tailwind(),
    sitemap({
      filter(page) {
        return !noindexPaths.has(new URL(page).pathname);
      },
      // 提高中文路径在 sitemap 中的优先级，便于百度/360 优先发现和收录
      serialize(item) {
        if (item.url && item.url.includes('/zh-cn/')) {
          item.priority = 0.95;
          item.changefreq = 'weekly';
        }
        return item;
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          'zh-cn': 'zh-CN',
          'zh-tw': 'zh-TW',
          es: 'es',
          ar: 'ar',
          pt: 'pt',
          id: 'id',
          ms: 'ms',
          fr: 'fr',
          ru: 'ru',
          hi: 'hi',
          ja: 'ja',
          de: 'de',
          ko: 'ko',
          tr: 'tr',
          vi: 'vi',
          th: 'th',
          it: 'it',
          fa: 'fa',
          nl: 'nl',
          pl: 'pl',
          sv: 'sv',
          uk: 'uk',
          ro: 'ro',
        },
      },
    }),
  ],
});
