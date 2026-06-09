/**
 * Regenerates blog: seedance-2-0-generation-quality-guide × 24 locales
 * Run: node scripts/generate-quality-blog.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { META } from "./quality-blog-meta.mjs";
import { T } from "./quality-blog-translations.mjs";
import { localeT } from "./quality-blog-translations-locales.mjs";
import {
  SLUG,
  PUB,
  IMG,
  locales,
  buildFullBody,
} from "./quality-blog-shared.mjs";

Object.assign(T, localeT);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogRoot = path.join(__dirname, "../src/content/blog");

/** @param {string} lang @param {{ title: string; description: string; tags: string[] }} meta */
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
  if (!META[lang]) throw new Error(`Missing META[${lang}]`);
  const meta = META[lang];
  const body = buildFullBody(lang, IMG, meta.imgAlt, T);
  const dir = path.join(blogRoot, lang);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, `${SLUG}.md`), yaml(lang, meta) + body, "utf8");
  console.log("Wrote", lang);
}

console.log("Done:", SLUG);
