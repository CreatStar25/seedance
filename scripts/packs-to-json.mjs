/**
 * Builds seedance-multimodal-input-bodies.json from md sources + translation packs.
 * Run: node scripts/packs-to-json.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { ctaHtml, CTA_LABELS } from "./multimodal-input-body-assembler.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const blogRoot = path.join(root, "src/content/blog");
const outPath = path.join(__dirname, "seedance-multimodal-input-bodies.json");
const SLUG = "seedance-2-0-multimodal-input-guide";
const IMG = "https://img.seedance22.com/aiweb/seedance-260526-1.png";

const FROM_MD = ["en", "zh-cn", "zh-tw"];
const PACK_LANGS = [
  "de",
  "fr",
  "es",
  "ja",
  "ko",
  "ar",
  "pt",
  "id",
  "ms",
  "ru",
  "hi",
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

function parseMd(raw, lang) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!m) throw new Error("Invalid frontmatter");
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith("[") && val.endsWith("]")) {
      try {
        fm[key] = JSON.parse(val);
      } catch {
        fm[key] = val;
      }
    } else if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      fm[key] = val.slice(1, -1);
    } else {
      fm[key] = val;
    }
  }
  const body = m[2].trimEnd();
  const relatedLine =
    body
      .split("\n")
      .filter((l) => /^\*\*/.test(l.trim()))
      .pop() ?? "";
  return {
    title: fm.title,
    description: fm.description,
    tags: fm.tags,
    alt: fm.title,
    ctaLabel: CTA_LABELS[lang] ?? CTA_LABELS.en,
    related: relatedLine,
    body,
  };
}

function bodyFromPack(lang, pack) {
  const main = pack.main.join("\n\n");
  return `${main}\n\n---\n\n${pack.closing.trim()}\n\n---\n\n${ctaHtml(lang, CTA_LABELS[lang])}\n\n${pack.related.trim()}`;
}

const out = {};

for (const lang of FROM_MD) {
  const raw = fs.readFileSync(
    path.join(blogRoot, lang, `${SLUG}.md`),
    "utf8",
  );
  out[lang] = parseMd(raw, lang);
}

for (const lang of PACK_LANGS) {
  const modPath = path.join(__dirname, "translation-packs", `${lang}.mjs`);
  if (!fs.existsSync(modPath)) {
    console.error("Missing pack:", modPath);
    process.exit(1);
  }
  const mod = await import(pathToFileURL(modPath).href);
  const varName = lang.replace(/-/g, "_");
  const pack = mod[varName] ?? mod[lang] ?? mod.default;
  if (!pack) {
    console.error("No export in", modPath, Object.keys(mod));
    process.exit(1);
  }
  out[lang] = {
    title: pack.title,
    description: pack.description,
    tags: pack.tags,
    alt: pack.alt ?? pack.title,
    ctaLabel: CTA_LABELS[lang],
    related: pack.related,
    body: bodyFromPack(lang, pack),
  };
}

fs.writeFileSync(outPath, `${JSON.stringify(out, null, 2)}\n`, "utf8");
console.log("Wrote", outPath, "locales:", Object.keys(out).length);
