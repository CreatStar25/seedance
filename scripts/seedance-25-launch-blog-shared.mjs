/** @typedef {Record<string, string>} LocaleStrings */

export const SLUG = "seedance-2-5-launch-30s-50-assets-preview";
export const PUB = "2026-06-23";
export const IMG = "https://img.seedance22.com/aiweb/seedance2-5-260623-1.png";
export const VID1 = "https://img.seedance22.com/aiweb/seedance2-5-260623-1.mp4";
export const VID2 = "https://img.seedance22.com/aiweb/seedance2-5-260623-2.mp4";
export const SITE = "seedance22.com";

export const locales = [
  "en", "zh-cn", "zh-tw", "es", "ar", "pt", "id", "ms", "fr", "ru", "hi", "ja", "de", "ko", "tr", "vi", "th", "it", "fa", "nl", "pl", "sv", "uk", "ro",
];

export const ctaLabel = {
  en: "Get Started with Seedance",
  "zh-cn": "开始使用Seedance",
  "zh-tw": "開始使用Seedance",
  es: "Empezar con Seedance",
  ar: "ابدأ استخدام Seedance",
  pt: "Começar a usar Seedance",
  id: "Mulai menggunakan Seedance",
  ms: "Mula menggunakan Seedance",
  fr: "Commencer avec Seedance",
  ru: "Начать использовать Seedance",
  hi: "Seedance का उपयोग शुरू करें",
  ja: "Seedance を始める",
  de: "Mit Seedance starten",
  ko: "Seedance 시작하기",
  tr: "Seedance ile Başlayın",
  vi: "Bắt đầu với Seedance",
  th: "เริ่มใช้ Seedance",
  it: "Inizia con Seedance",
  fa: "شروع استفاده از Seedance",
  nl: "Aan de slag met Seedance",
  pl: "Rozpocznij z Seedance",
  sv: "Kom igång med Seedance",
  uk: "Почніть використовувати Seedance",
  ro: "Începe cu Seedance",
};

/** @param {string} lang */
export function ctaHtml(lang) {
  return `<div style="text-align:center; margin: 2rem 0;">
  <a href="https://app.${SITE}/${lang}/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">${ctaLabel[lang]}</a>
</div>`;
}

/** @param {string} src @param {string} poster */
export function videoHtml(src, poster) {
  return `<video width="100%" controls poster="${poster}">
  <source src="${src}" type="video/mp4">
</video>`;
}

/**
 * @param {string} lang
 * @param {string} img
 * @param {string} alt
 * @param {Record<string, LocaleStrings>} T
 */
export function buildFullBody(lang, img, alt, T) {
  const t = T[lang];
  const c = () => ctaHtml(lang);
  return `${t.intro}

![${alt}](${img})

${t.introLead}

${c()}

## ${t.hOverview}

| ${t.thUpgrade} | ${t.thDetail} | ${t.thMeaning} |
| :--- | :--- | :--- |
| ${t.r1a} | ${t.r1b} | ${t.r1c} |
| ${t.r2a} | ${t.r2b} | ${t.r2c} |
| ${t.r3a} | ${t.r3b} | ${t.r3c} |

## ${t.hFeature1}

${t.feature1p1}

${t.feature1p2}

${videoHtml(VID1, IMG)}

*${t.video1Caption}*

## ${t.hFeature2}

${t.feature2p1}

${t.feature2p2}

${videoHtml(VID2, IMG)}

*${t.video2Caption}*

## ${t.hFeature3}

${t.feature3p1}

${t.feature3p2}

## ${t.hCreator}

${t.creatorP1}

${t.creatorP2}

## ${t.hTimeline}

1. ${t.advice1}  
2. ${t.advice2}  
3. ${t.advice3}

## ${t.hSum}

${t.sumP}

---

${t.ctaLead}

${c()}

${t.related}`;
}
