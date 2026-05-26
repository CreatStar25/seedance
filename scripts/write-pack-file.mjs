import fs from "node:fs";
import path from "node:path";

const IMG = "https://img.seedance22.com/aiweb/seedance-260526-1.png";

function escapeTemplate(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

/**
 * @param {string} lang
 * @param {{ title: string; description: string; tags: string[]; alt: string; related: string; closing: string; main: string[] }} pack
 * @param {string} outDir
 */
export function writePackFile(lang, pack, outDir) {
  const varName = lang.replace(/-/g, "_");
  const mainBlocks = pack.main
    .map((s) => `    \`${escapeTemplate(s)}\`,`)
    .join("\n");

  const content = `/** Translation pack: ${lang} */
const IMG = "${IMG}";

export const ${varName} = {
  title: ${JSON.stringify(pack.title)},
  description: ${JSON.stringify(pack.description)},
  tags: ${JSON.stringify(pack.tags)},
  alt: ${JSON.stringify(pack.alt)},
  related: ${JSON.stringify(pack.related)},
  closing: ${JSON.stringify(pack.closing)},
  main: [
${mainBlocks}
  ],
};
`;

  fs.writeFileSync(path.join(outDir, `${lang}.mjs`), content, "utf8");
}
