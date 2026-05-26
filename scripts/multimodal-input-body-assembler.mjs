/** @typedef {Record<string, string>} T */

export const IMG =
  "https://img.seedance22.com/aiweb/seedance-260526-1.png";

export const CTA_LABELS = {
  en: "Get Started with Seedance 2.0",
  "zh-cn": "开始使用Seedance 2.0",
  "zh-tw": "開始使用Seedance 2.0",
  ja: "Seedance 2.0 を始める",
  es: "Empieza con Seedance 2.0",
  de: "Mit Seedance 2.0 starten",
  fr: "Commencer avec Seedance 2.0",
  ar: "ابدأ استخدام Seedance 2.0",
  pt: "Comece a usar Seedance 2.0",
  id: "Mulai menggunakan Seedance 2.0",
  ms: "Mula menggunakan Seedance 2.0",
  ru: "Начать использовать Seedance 2.0",
  hi: "Seedance 2.0 का उपयोग शुरू करें",
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

export function ctaHtml(lang, label) {
  return `<div style="text-align:center; margin: 2rem 0;"><a href="https://app.seedance22.com/${lang}/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">${label}</a></div>`;
}

/**
 * @param {T} t
 * @param {string} lang
 * @param {string} alt
 */
export function assembleBody(t, lang, alt) {
  const cta = ctaHtml(lang, t.ctaLabel ?? CTA_LABELS[lang]);
  return `${t.intro}

![${alt}](${IMG})

${t.lead}

${t.s1h}

${t.s1p1}

${t.s1p2}

${t.s2h}

${t.s21h}

${t.s21p}

${t.s21ul}

${t.s21ex}

${t.s22h}

${t.s22p}

${t.s22table}

${t.s22end}

${t.s23h}

${t.s23p}

${t.s23ul}

${t.s23end}

${t.s24h}

${t.s24p}

${t.s24ul}

${t.s24end}

${t.s3h}

${t.s3p}

${t.s3table}

${t.s3combo}

${t.s3code}

${t.s3end}

${t.s4h}

${t.s4table}

${t.s5h}

${t.s51h}

${t.s51p}

${t.s52h}

${t.s52p}

${t.s53h}

${t.s53p}

${t.s6h}

${t.s6steps}

${t.faqh}

${t.faq}

${t.closing}

---

${cta}

${t.related}`;
}
