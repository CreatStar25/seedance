import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // -------------------------------------------------
  // 关键修复：必须添加 site 属性，且必须带 https://
  // -------------------------------------------------
  site: 'https://nanobanana.com', 
  
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en', zh: 'zh-CN', // ... 其他语言配置保持不变
        },
      },
    }),
  ],
});