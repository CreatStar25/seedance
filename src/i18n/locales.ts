export const languages = {
  en: "English",
  zh: "简体中文",
  "zh-tw": "繁體中文",
  es: "Español",
  ar: "العربية",
  pt: "Português",
  id: "Bahasa Indonesia",
  ms: "Bahasa Melayu",
  fr: "Français",
  ru: "Русский",
  hi: "हिन्दी",
  ja: "日本語",
  de: "Deutsch",
  ko: "한국어",
  tr: "Türkçe",
  vi: "Tiếng Việt",
  th: "ไทย",
  it: "Italiano",
  fa: "فارسی",
  nl: "Nederlands",
  pl: "Polski",
  sv: "Svenska",
  uk: "Українська",
  ro: "Română"
};

export const defaultLang = 'en';

// 辅助函数：生成不带语言前缀的路径
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang;
  return defaultLang;
}