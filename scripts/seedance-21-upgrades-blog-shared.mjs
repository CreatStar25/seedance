/** @typedef {Record<string, string>} LocaleStrings */

export const SLUG = "seedance-2-1-six-upgrades-preview-guide";
export const PUB = "2026-06-17";
export const IMG = "https://img.seedance22.com/aiweb/seedance-260617-3.png";
export const SITE = "seedance22.com";

export const locales = [
  "en", "zh-cn", "zh-tw", "es", "ar", "pt", "id", "ms", "fr", "ru", "hi", "ja", "de", "ko", "tr", "vi", "th", "it", "fa", "nl", "pl", "sv", "uk", "ro",
];

export const ctaLabel = {
  en: "Get Started with Seedance 2.0",
  "zh-cn": "开始使用Seedance 2.0",
  "zh-tw": "開始使用Seedance 2.0",
  es: "Empieza con Seedance 2.0",
  ar: "ابدأ استخدام Seedance 2.0",
  pt: "Comece a usar Seedance 2.0",
  id: "Mulai menggunakan Seedance 2.0",
  ms: "Mula menggunakan Seedance 2.0",
  fr: "Commencer avec Seedance 2.0",
  ru: "Начать использовать Seedance 2.0",
  hi: "Seedance 2.0 का उपयोग शुरू करें",
  ja: "Seedance 2.0 を始める",
  de: "Mit Seedance 2.0 starten",
  ko: "Seedance 2.0 시작하기",
  tr: "Seedance 2.0 ile Başlayın",
  vi: "Bắt đầu với Seedance 2.0",
  th: "เริ่มใช้ Seedance 2.0",
  it: "Inizia con Seedance 2.0",
  fa: "شروع استفاده از Seedance 2.0",
  nl: "Aan de slag met Seedance 2.0",
  pl: "Rozpocznij z Seedance 2.0",
  sv: "Kom igång med Seedance 2.0",
  uk: "Почніть використовувати Seedance 2.0",
  ro: "Începe cu Seedance 2.0",
};

/** @param {string} lang */
export function ctaHtml(lang) {
  return `<div style="text-align:center; margin: 2rem 0;">
  <a href="https://app.${SITE}/${lang}/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">${ctaLabel[lang]}</a>
</div>`;
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

| ${t.thDir} | ${t.thChange} | ${t.thMeaning} |
| :--- | :--- | :--- |
| ${t.r1a} | ${t.r1b} | ${t.r1c} |
| ${t.r2a} | ${t.r2b} | ${t.r2c} |
| ${t.r3a} | ${t.r3b} | ${t.r3c} |
| ${t.r4a} | ${t.r4b} | ${t.r4c} |
| ${t.r5a} | ${t.r5b} | ${t.r5c} |
| ${t.r6a} | ${t.r6b} | ${t.r6c} |

${t.overviewNote}

## ${t.hFeature1}

${t.feature1p1}

${t.feature1p2}

## ${t.hFeature2}

${t.feature2p1}

${t.feature2p2}

## ${t.hOthers}

### ${t.other1Title}

${t.other1p}

### ${t.other2Title}

${t.other2p}

### ${t.other3Title}

${t.other3p}

### ${t.other4Title}

${t.other4p}

## ${t.hAdvice}

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
