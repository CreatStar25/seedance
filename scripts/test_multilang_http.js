import fs from 'fs';
import path from 'path';

const distDir = path.resolve(process.cwd(), 'dist');
const langs = ['en','zh-cn','zh-tw','es','ar','pt','id','ms','fr','ru','hi','ja','de','ko','tr','vi','th','it','fa','nl','pl','sv','uk','ro'];

function readHtml(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return '';
  }
}

const failures = [];

for (const lang of langs) {
  const base = lang === 'en' ? 'en' : lang;
  const indexPath = path.join(distDir, `${base}/blog/index.html`);
  const html = readHtml(indexPath);
  if (!html) {
    failures.push(`[missing] ${base}/blog/index.html not found or unreadable`);
    continue;
  }

  if (!html.includes(`<html lang="${lang}"`)) {
    failures.push(`[lang-attr] ${base}/blog/index.html missing lang="${lang}"`);
  }

  const keyword = `"${lang}"`;
  if (!html.toLowerCase().includes('<body')) {
    failures.push(`[invalid-html] ${base}/blog/index.html missing <body> tag`);
  }
}

if (failures.length) {
  console.error('Multilingual HTTP tests FAILED:');
  for (const f of failures) console.error(' -', f);
  process.exit(1);
} else {
  console.log('Multilingual HTTP tests PASSED for all blog index pages.');
}

