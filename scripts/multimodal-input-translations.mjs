import { PACKS } from "./translation-packs/index.mjs";

/** @type {Record<string, { title: string; description: string; tags: string[]; alt?: string; ctaLabel?: string }>} */
export const LOCALE_META = {};

/** @type {Record<string, { main: string[]; closing: string; related: string }>} */
export const LOCALE_SECTIONS = {};

for (const [lang, pack] of Object.entries(PACKS)) {
  LOCALE_META[lang] = {
    title: pack.title,
    description: pack.description,
    tags: pack.tags,
    alt: pack.alt,
    ctaLabel: pack.ctaLabel,
  };
  LOCALE_SECTIONS[lang] = {
    main: pack.main,
    closing: pack.closing,
    related: pack.related,
  };
}
