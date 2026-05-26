/**
 * Generates translation-packs/*.mjs from locale pack definitions.
 * Run: node scripts/generate-translation-packs.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { writePackFile } from "./write-pack-file.mjs";
import { LOCALE_PACKS } from "./locale-packs-data.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "translation-packs");

for (const [lang, pack] of Object.entries(LOCALE_PACKS)) {
  if (lang === "de") continue;
  writePackFile(lang, pack, outDir);
  console.log("Wrote", lang);
}

console.log("Done (de.mjs kept as hand-written source).");
