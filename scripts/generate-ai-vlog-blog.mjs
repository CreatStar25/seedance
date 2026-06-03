/**
 * Regenerates blog: seedance-2-0-ai-vlog-advanced-tutorial × 24 locales
 * Run: node scripts/generate-ai-vlog-blog.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  META,
  T,
  buildFullBody,
} from "./ai-vlog-blog-translations.mjs";
import { localeT } from "./ai-vlog-blog-translations-locales.mjs";

Object.assign(T, localeT);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogRoot = path.join(__dirname, "../src/content/blog");
const SLUG = "seedance-2-0-ai-vlog-advanced-tutorial";
const PUB = "2026-06-03";
const IMG = "https://img.seedance22.com/aiweb/seedance-260603-1.png";

const locales = [
  "en", "zh-cn", "zh-tw", "es", "ar", "pt", "id", "ms", "fr", "ru", "hi", "ja", "de", "ko", "tr", "vi", "th", "it", "fa", "nl", "pl", "sv", "uk", "ro",
];

function yaml(lang, meta) {
  const tags = meta.tags.map((t) => `"${t}"`).join(", ");
  return `---
title: "${meta.title.replace(/"/g, '\\"')}"
description: "${meta.description.replace(/"/g, '\\"')}"
tags: [${tags}]
pubDate: "${PUB}"
heroImage: "${IMG}"
author: "Seedance"
translationKey: "${SLUG}"
lang: "${lang}"
---

`;
}

for (const lang of locales) {
  if (!T[lang]) throw new Error(`Missing translation T[${lang}]`);
  const meta = META[lang];
  const alt = meta.imgMid || meta.title;
  const body = buildFullBody(lang, IMG, alt, T);
  const dir = path.join(blogRoot, lang);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${SLUG}.md`), yaml(lang, meta) + body, "utf8");
  console.log("Wrote", lang, "lines", body.split("\n").length);
}

console.log("Done:", SLUG);
