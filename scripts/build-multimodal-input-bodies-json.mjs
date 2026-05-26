/**
 * Builds scripts/seedance-multimodal-input-bodies.json from translation packs + md sources.
 * Run: node scripts/build-multimodal-input-bodies-json.mjs
 */
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const node = process.execPath;

function run(script) {
  const r = spawnSync(node, [path.join(__dirname, script)], {
    stdio: "inherit",
    cwd: path.join(__dirname, ".."),
  });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

run("generate-all-packs.mjs");
run("packs-to-json.mjs");
