import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // -------------------------------------------------
  // 关键修复：必须添加 site 属性，且必须带 https://
  // -------------------------------------------------
  site: 'https://seedance22.com', 
  
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-CN',
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