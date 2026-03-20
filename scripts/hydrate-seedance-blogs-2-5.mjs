/**
 * Writes blog posts 2–5 from English source into 21 locale folders with localized frontmatter + CTA label.
 * Run: node scripts/hydrate-seedance-blogs-2-5.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const blogRoot = path.join(root, "src/content/blog");
const i18nPath = path.join(__dirname, "seedance-blogs-2-5-i18n.json");

const locales = [
  "es", "ar", "pt", "id", "ms", "fr", "ru", "hi", "ja", "de", "ko", "tr", "vi", "th", "it", "fa", "nl", "pl", "sv", "uk", "ro",
];

const btn = {
  es: "Empezar a usar Seedance",
  ar: "ابدأ استخدام Seedance",
  pt: "Começar a usar Seedance",
  id: "Mulai menggunakan Seedance",
  ms: "Mula menggunakan Seedance",
  fr: "Commencer avec Seedance",
  ru: "Начать использовать Seedance",
  hi: "Seedance का उपयोग शुरू करें",
  ja: "Seedance を始める",
  de: "Seedance jetzt nutzen",
  ko: "Seedance 시작하기",
  tr: "Seedance kullanmaya başla",
  vi: "Bắt đầu dùng Seedance",
  th: "เริ่มใช้ Seedance",
  it: "Inizia a usare Seedance",
  fa: "شروع استفاده از Seedance",
  nl: "Aan de slag met Seedance",
  pl: "Zacznij korzystać z Seedance",
  sv: "Börja använda Seedance",
  uk: "Почніть користуватися Seedance",
  ro: "Începe să folosești Seedance",
};

const slugs = [
  "seedance-2-0-director-level-control",
  "seedance-2-0-global-expansion-compliance",
  "seedance-2-0-world-leading-model",
  "seedance-2-0-beyond-video-model",
];

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) throw new Error("Invalid frontmatter");
  const lines = m[1].split(/\r?\n/);
  const fm = {};
  for (const line of lines) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith("[") && val.endsWith("]")) {
      try {
        fm[key] = JSON.parse(val.replace(/'/g, '"'));
      } catch {
        fm[key] = val;
      }
    } else if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      fm[key] = val.slice(1, -1);
    } else {
      fm[key] = val;
    }
  }
  if (Array.isArray(fm.tags) === false && typeof fm.tags === "string") {
    try {
      fm.tags = JSON.parse(fm.tags.replace(/'/g, '"'));
    } catch {
      fm.tags = [fm.tags];
    }
  }
  return { fm, body: m[2] };
}

function buildYaml(fm) {
  const tagsJson = JSON.stringify(fm.tags);
  return `---
title: ${JSON.stringify(fm.title)}
description: ${JSON.stringify(fm.description)}
tags: ${tagsJson}
pubDate: ${JSON.stringify(fm.pubDate)}
heroImage: ${JSON.stringify(fm.heroImage)}
author: ${JSON.stringify(fm.author ?? "Seedance")}
translationKey: ${JSON.stringify(fm.translationKey)}
lang: ${JSON.stringify(fm.lang)}
---

`;
}

const i18n = JSON.parse(fs.readFileSync(i18nPath, "utf8"));

for (const slug of slugs) {
  const enPath = path.join(blogRoot, "en", `${slug}.md`);
  const raw = fs.readFileSync(enPath, "utf8");
  const { fm: baseFm, body: baseBody } = parseFrontmatter(raw);
  const ctaBody = baseBody.replace(/>Start using Seedance</g, (m) => m.replace("Start using Seedance", "__BTN__"));

  for (const loc of locales) {
    const patch = i18n[slug]?.[loc];
    const fm = {
      ...baseFm,
      lang: loc,
      ...(patch || {}),
    };
    let body = ctaBody.replace(/__BTN__/g, btn[loc]);
    const out = buildYaml(fm) + body;
    const dir = path.join(blogRoot, loc);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${slug}.md`), out, "utf8");
  }
}

console.log("Hydrated articles 2–5 for", locales.length, "locales.");
