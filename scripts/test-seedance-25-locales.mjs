import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = path.resolve(import.meta.dirname, '..');
const slug = 'seedance-2-5-version-update-use-cases';
const locales = ['en','zh-cn','zh-tw','es','ar','pt','id','ms','fr','ru','hi','ja','de','ko','tr','vi','th','it','fa','nl','pl','sv','uk','ro'];
const ctas = {
  en:'Start using Seedance','zh-cn':'开始使用Seedance','zh-tw':'開始使用Seedance',es:'Empezar a usar Seedance',ar:'ابدأ استخدام Seedance',pt:'Começar a usar o Seedance',id:'Mulai gunakan Seedance',ms:'Mula gunakan Seedance',fr:'Commencer à utiliser Seedance',ru:'Начать работу с Seedance',hi:'Seedance का उपयोग शुरू करें',ja:'Seedanceを使い始める',de:'Seedance jetzt verwenden',ko:'Seedance 시작하기',tr:'Seedance kullanmaya başla',vi:'Bắt đầu sử dụng Seedance',th:'เริ่มใช้ Seedance',it:'Inizia a usare Seedance',fa:'استفاده از Seedance را شروع کنید',nl:'Seedance gaan gebruiken',pl:'Zacznij korzystać z Seedance',sv:'Börja använda Seedance',uk:'Почати роботу з Seedance',ro:'Începe să folosești Seedance'
};
const scriptChecks = {
  ar:/[\u0600-\u06ff]/, fa:/[\u0600-\u06ff]/, hi:/[\u0900-\u097f]/, ja:/[\u3040-\u30ff\u4e00-\u9faf]/,
  ko:/[\uac00-\ud7af]/, th:/[\u0e00-\u0e7f]/, ru:/[\u0400-\u04ff]/, uk:/[іїєґІЇЄҐ]/,
  'zh-cn':/[\u4e00-\u9fff]/, 'zh-tw':/[\u4e00-\u9fff]/,
};
const errors=[];
const hashes=new Set();
for (const locale of locales) {
  const file=path.join(root,'src/content/blog',locale,`${slug}.md`);
  if(!fs.existsSync(file)){errors.push(`${locale}: missing source`);continue;}
  const source=fs.readFileSync(file,'utf8');
  const body=source.split('\n---\n')[1] ?? '';
  hashes.add(crypto.createHash('sha256').update(body).digest('hex'));
  if((body.match(/^## /gm)||[]).length!==5) errors.push(`${locale}: expected 5 H2 sections`);
  if((body.match(/^### /gm)||[]).length!==10) errors.push(`${locale}: expected 10 H3 sections`);
  if((body.match(/^\|/gm)||[]).length!==14) errors.push(`${locale}: expected complete tables`);
  if(!source.includes('pubDate: "2026-08-12"')) errors.push(`${locale}: wrong date`);
  if(!source.includes('appendBrandToTitle: false')) errors.push(`${locale}: SEO title branding flag missing`);
  const expectedHref=`https://app.seedance22.com/${locale}/generate/video-tools/seedance/`;
  if(!body.includes(`href="${expectedHref}"`)) errors.push(`${locale}: CTA URL mismatch`);
  if(!body.includes(`>${ctas[locale]}</a>`)) errors.push(`${locale}: CTA text mismatch`);
  if(scriptChecks[locale] && !scriptChecks[locale].test(body)) errors.push(`${locale}: expected native script not found`);
  const htmlPath=path.join(root,'dist',...(locale==='en'?['blog',slug,'index.html']:[locale,'blog',slug,'index.html']));
  if(!fs.existsSync(htmlPath)){errors.push(`${locale}: built HTML missing`);continue;}
  const html=fs.readFileSync(htmlPath,'utf8');
  const canonical=locale==='en'?`https://seedance22.com/blog/${slug}/`:`https://seedance22.com/${locale}/blog/${slug}/`;
  if(!html.includes(`<link rel="canonical" href="${canonical}">`)) errors.push(`${locale}: canonical mismatch`);
  if(!html.includes(expectedHref) || !html.includes(ctas[locale])) errors.push(`${locale}: rendered CTA mismatch`);
  const alternates=(html.match(/rel="alternate" hreflang=/g)||[]).length;
  if(alternates!==25) errors.push(`${locale}: expected 24 locale alternates + x-default, got ${alternates}`);
}
if(hashes.size!==locales.length) errors.push(`native content uniqueness failed: ${hashes.size}/${locales.length}`);
if(errors.length){console.error('Seedance 2.5 locale validation FAILED:\n - '+errors.join('\n - '));process.exit(1);}
console.log(`Seedance 2.5 locale validation passed: ${locales.length}/${locales.length} native source files and built pages; structure, SEO, hreflang and localized CTAs verified.`);
