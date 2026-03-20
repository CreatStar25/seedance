/**
 * Merges translated markdown bodies into blog posts (keeps each file's frontmatter).
 * Reads and deep-merges all scripts/seedance-blogs-2-5-bodies*.json
 * Run: node scripts/merge-blog-localized-bodies.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const blogRoot = path.join(root, "src/content/blog");

function deepMergeSlug(target, patch) {
  for (const [lang, body] of Object.entries(patch)) {
    target[lang] = body;
  }
  return target;
}

const files = fs
  .readdirSync(__dirname)
  .filter(
    (f) =>
      f.endsWith(".json") &&
      (f.startsWith("seedance-blogs-2-5-bodies") ||
        f.startsWith("seedance-bodies-")),
  )
  .sort();

if (!files.length) {
  console.error(
    "No seedance-blogs-2-5-bodies*.json or seedance-bodies-*.json found.",
  );
  process.exit(1);
}

const data = {};
for (const f of files) {
  const j = JSON.parse(fs.readFileSync(path.join(__dirname, f), "utf8"));
  for (const [slug, byLang] of Object.entries(j)) {
    if (!data[slug]) data[slug] = {};
    deepMergeSlug(data[slug], byLang);
  }
}

for (const [slug, byLang] of Object.entries(data)) {
  for (const [lang, body] of Object.entries(byLang)) {
    const mdPath = path.join(blogRoot, lang, `${slug}.md`);
    if (!fs.existsSync(mdPath)) {
      console.warn("Missing file:", mdPath);
      continue;
    }
    const raw = fs.readFileSync(mdPath, "utf8");
    const fmMatch = raw.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n/);
    if (!fmMatch) {
      console.warn("Bad frontmatter:", mdPath);
      continue;
    }
    fs.writeFileSync(mdPath, fmMatch[0] + body.trim() + "\n", "utf8");
  }
}
console.log("Merged from:", files.join(", "));
console.log("Slugs:", Object.keys(data).join(", "));
