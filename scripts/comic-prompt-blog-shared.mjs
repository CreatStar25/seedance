/** @typedef {Record<string, string>} LocaleStrings */

export const SLUG = "seedance-2-0-live-action-comic-prompts";
export const PUB = "2026-06-17";
export const IMG = "https://img.seedance22.com/aiweb/seedance-260617-1.png";
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

## ${t.hWhat}

${t.hWhatP}

## ${t.hFormula}

${t.hFormulaP}

| ${t.thBlock} | ${t.thContent} |
| :--- | :--- |
| ${t.f1a} | ${t.f1b} |
| ${t.f2a} | ${t.f2b} |
| ${t.f3a} | ${t.f3b} |
| ${t.f4a} | ${t.f4b} |

## ${t.hTypes}

| ${t.thType} | ${t.thScene} | ${t.thDuration} |
| :--- | :--- | :--- |
| ${t.t1a} | ${t.t1b} | ${t.t1c} |
| ${t.t2a} | ${t.t2b} | ${t.t2c} |
| ${t.t3a} | ${t.t3b} | ${t.t3c} |
| ${t.t4a} | ${t.t4b} | ${t.t4c} |
| ${t.t5a} | ${t.t5b} | ${t.t5c} |
| ${t.t6a} | ${t.t6b} | ${t.t6c} |

## ${t.hExamples}

### ${t.ex1Title}

${t.ex1Desc}

${t.ex1Prompt}

### ${t.ex2Title}

${t.ex2Desc}

${t.ex2Prompt}

### ${t.ex3Title}

${t.ex3Desc}

${t.ex3Prompt}

### ${t.ex4Title}

${t.ex4Desc}

${t.ex4Prompt}

### ${t.ex5Title}

${t.ex5Desc}

${t.ex5Prompt}

### ${t.ex6Title}

${t.ex6Desc}

${t.ex6Prompt}

## ${t.hHow}

1. ${t.how1}  
2. ${t.how2}  
3. ${t.how3}  
4. ${t.how4}

## ${t.hTips}

- ${t.tip1}  
- ${t.tip2}  
- ${t.tip3}

## ${t.hFaq}

**${t.faq1q}**  
${t.faq1a}

**${t.faq2q}**  
${t.faq2a}

**${t.faq3q}**  
${t.faq3a}

## ${t.hSum}

${t.sumP}

---

${t.ctaLead}

${c()}

${t.related}`;
}
