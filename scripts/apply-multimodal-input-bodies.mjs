/**
 * Writes seedance-2-0-multimodal-input-guide.md for all 24 locales from JSON bodies.
 * Run: node scripts/apply-multimodal-input-bodies.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const blogRoot = path.join(root, "src/content/blog");
const jsonPath = path.join(__dirname, "seedance-multimodal-input-bodies.json");

const SLUG = "seedance-2-0-multimodal-input-guide";
const KEY = "seedance-2-0-multimodal-input-guide";
const PUB = "2026-05-26";
const IMG = "https://img.seedance22.com/aiweb/seedance-260526-1.png";

const LOCALES = [
  "en",
  "zh-cn",
  "zh-tw",
  "es",
  "ar",
  "pt",
  "id",
  "ms",
  "fr",
  "ru",
  "hi",
  "ja",
  "de",
  "ko",
  "tr",
  "vi",
  "th",
  "it",
  "fa",
  "nl",
  "pl",
  "sv",
  "uk",
  "ro",
];

function buildFrontmatter(entry, lang) {
  const tagsJson = JSON.stringify(entry.tags);
  return `---
title: ${JSON.stringify(entry.title)}
description: ${JSON.stringify(entry.description)}
tags: ${tagsJson}
pubDate: ${JSON.stringify(PUB)}
heroImage: ${JSON.stringify(IMG)}
author: "Seedance"
translationKey: ${JSON.stringify(KEY)}
lang: ${JSON.stringify(lang)}
---

`;
}

const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
const counts = [];

for (const lang of LOCALES) {
  const entry = data[lang];
  if (!entry) {
    console.error("Missing locale in JSON:", lang);
    process.exit(1);
  }
  const dir = path.join(blogRoot, lang);
  fs.mkdirSync(dir, { recursive: true });
  const mdPath = path.join(dir, `${SLUG}.md`);
  const content = buildFrontmatter(entry, lang) + entry.body.trim() + "\n";
  fs.writeFileSync(mdPath, content, "utf8");
  const lines = content.split(/\r?\n/).length;
  counts.push({ lang, lines });
  console.log(`Wrote ${lang} (${lines} lines)`);
}

console.log("\n--- Line counts ---");
for (const { lang, lines } of counts) {
  console.log(`${lang}: ${lines}`);
}
