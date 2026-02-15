import fs from 'fs';
import path from 'path';

const dist = path.resolve(process.cwd(), 'dist');
const langs = ['en','zh-cn','zh-tw','es','ar','pt','id','ms','fr','ru','hi','ja','de','ko','tr','vi','th','it','fa','nl','pl','sv','uk','ro'];

function checkExists(filePath) {
  try {
    fs.accessSync(filePath, fs.constants.R_OK);
    return true;
  } catch {
    return false;
  }
}

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return '';
  }
}

let failures = [];

for (const l of langs) {
  const rel = l === 'en' ? 'en/blog/index.html' : `${l}/blog/index.html`;
  const p = path.join(dist, rel);
  const ok = checkExists(p);
  if (!ok) {
    failures.push(`[missing] ${rel}`);
    continue;
  }
  const html = readFile(p);
  // English canonical and en hreflang
  if (l === 'en') {
    if (!html.includes('link rel="canonical" href="https://seedance22.com/en/blog/"')) {
      failures.push('[bad-canonical] en/blog missing or incorrect canonical');
    }
    if (!html.includes('hreflang="en" href="https://seedance22.com/en/blog/"')) {
      failures.push('[bad-hreflang] en self hreflang not found');
    }
  }
  // All pages must not include duplicated lang segments like "/<lang>/en/blog/"
  const dupPattern = new RegExp(`/${l}/en/blog/`);
  if (dupPattern.test(html)) {
    failures.push(`[duplicate-path] ${rel} contains /${l}/en/blog/`);
  }
  // Alternate en link must be present for non-en pages
  if (l !== 'en') {
    if (!html.includes('hreflang="en" href="https://seedance22.com/en/blog/"')) {
      failures.push(`[bad-hreflang] ${l} missing en alternate link`);
    }
  }
  // zh-cn 列表页需包含两篇中文文章链接
  if (l === 'zh-cn') {
    if (!html.includes('/zh-cn/blog/seedance-2-0-guide-tutorial/')) {
      failures.push('[missing-link] zh-cn list missing seedance-2-0-guide-tutorial link');
    }
    if (!html.includes('/zh-cn/blog/2-seedance-2-0-guide-tutorial_2/')) {
      failures.push('[missing-link] zh-cn list missing 2-seedance-2-0-guide-tutorial_2 link');
    }
  }
}

if (failures.length) {
  console.error('Blog route tests FAILED:');
  for (const f of failures) console.error(' -', f);
  process.exit(1);
} else {
  console.log('Blog route tests PASSED for all languages.');
}
