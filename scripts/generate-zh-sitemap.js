/**
 * 生成仅包含中文（zh-cn）URL 的 sitemap，供百度/360 等中文搜索引擎提交使用。
 * 在 npm run build 之后执行，从 dist 内已有 sitemap 中筛选 /zh-cn/ 链接。
 *
 * 用法：node scripts/generate-zh-sitemap.js
 * 要求：先执行 astro build，且 dist 目录下已有 sitemap-*.xml
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = process.env.OUT_DIR || path.join(root, 'dist');
const siteBase = 'https://seedance22.com';

function extractLocUrls(xml) {
  const urls = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(xml)) !== null) urls.push(m[1].trim());
  return urls;
}

function main() {
  if (!fs.existsSync(distDir)) {
    console.warn('[generate-zh-sitemap] dist 不存在，跳过。请先执行 astro build。');
    process.exit(0);
  }

  const indexPath = path.join(distDir, 'sitemap-index.xml');
  let sitemapFiles = [];

  if (fs.existsSync(indexPath)) {
    const indexXml = fs.readFileSync(indexPath, 'utf8');
    const locs = extractLocUrls(indexXml);
    for (const loc of locs) {
      const name = path.basename(new URL(loc).pathname);
      if (name && name.startsWith('sitemap-') && name !== 'sitemap-zh-cn.xml' && name.endsWith('.xml')) {
        sitemapFiles.push(path.join(distDir, name));
      }
    }
  }

  if (sitemapFiles.length === 0) {
    const fallback = path.join(distDir, 'sitemap-0.xml');
    if (fs.existsSync(fallback)) sitemapFiles = [fallback];
  }

  const allUrls = new Set();
  for (const f of sitemapFiles) {
    if (!fs.existsSync(f)) continue;
    const xml = fs.readFileSync(f, 'utf8');
    const urls = extractLocUrls(xml);
    urls.filter((u) => u.includes('/zh-cn/')).forEach((u) => allUrls.add(u));
  }

  const zhUrls = Array.from(allUrls).sort();
  const urlset = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...zhUrls.map(
      (u) =>
        `  <url><loc>${u}</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod><changefreq>weekly</changefreq><priority>0.95</priority></url>`
    ),
    '</urlset>',
  ].join('\n');

  const outPath = path.join(distDir, 'sitemap-zh-cn.xml');
  fs.writeFileSync(outPath, urlset, 'utf8');
  console.log('[generate-zh-sitemap] 已生成', outPath, '共', zhUrls.length, '个中文 URL');
}

main();
