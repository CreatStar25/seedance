import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import sharp from 'sharp';

const root = new URL('..', import.meta.url).pathname;
const sourceRoots = [join(root, 'src')];
const outputDir = join(root, 'public', '_responsive-images');
const cacheDir = join(root, '.seo-cache', 'source-images');
const manifestFile = join(root, 'src', 'generated', 'image-manifest.json');
const widths = [480, 768, 1200];

async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else if (/\.(astro|md|mdx)$/.test(entry.name)) files.push(path);
  }
  return files;
}

const urls = new Set();
for (const sourceRoot of sourceRoots) {
  for (const file of await walk(sourceRoot)) {
    const source = await readFile(file, 'utf8');
    for (const match of source.matchAll(/!\[[^\]]*\]\((https:\/\/img\.seedance22\.com\/[A-Za-z0-9_./-]+\.(?:png|jpe?g|webp|avif|gif))\)/gi)) {
      urls.add(match[1]);
    }
    for (const match of source.matchAll(/<(?:img|ResponsiveImage)\b[^>]*\bsrc=["'](https:\/\/img\.seedance22\.com\/[A-Za-z0-9_./-]+\.(?:png|jpe?g|webp|avif|gif))["']/gi)) {
      urls.add(match[1]);
    }
    for (const line of source.split('\n')) {
      if (!/<ResponsiveImage\b/.test(line) && !/^(?:image|heroImage):\s*["']/.test(line)) continue;
      for (const match of line.matchAll(/https:\/\/img\.seedance22\.com\/[A-Za-z0-9_./-]+\.(?:png|jpe?g|webp|avif|gif)/gi)) {
        urls.add(match[0]);
      }
    }
  }
}

await mkdir(outputDir, { recursive: true });
await mkdir(cacheDir, { recursive: true });
await mkdir(join(root, 'src', 'generated'), { recursive: true });

const images = {};
const failures = [];
for (const url of [...urls].sort()) {
  const hash = createHash('sha256').update(url).digest('hex').slice(0, 16);
  const sourcePath = join(cacheDir, `${hash}${extname(new URL(url).pathname).toLowerCase() || '.img'}`);
  try {
    try {
      await stat(sourcePath);
    } catch {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      await writeFile(sourcePath, Buffer.from(await response.arrayBuffer()));
    }

    const metadata = await sharp(sourcePath).metadata();
    if (!metadata.width || !metadata.height) throw new Error('missing intrinsic dimensions');
    const candidates = [...new Set(widths.filter((width) => width < metadata.width).concat(metadata.width))];
    const srcset = [];
    for (const width of candidates) {
      const fileName = `${hash}-${width}.webp`;
      const filePath = join(outputDir, fileName);
      try {
        await stat(filePath);
      } catch {
        await sharp(sourcePath).resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(filePath);
      }
      srcset.push(`/_responsive-images/${fileName} ${width}w`);
    }
    images[url] = {
      src: srcset.at(-1).split(' ')[0],
      srcset: srcset.join(', '),
      width: metadata.width,
      height: metadata.height,
    };
  } catch (error) {
    failures.push(`${url}: ${error.message}`);
  }
}

await writeFile(manifestFile, `${JSON.stringify({ generatedAt: new Date().toISOString(), images }, null, 2)}\n`);
console.log(`[responsive-images] ${Object.keys(images).length} unique sources optimized; ${failures.length} failed.`);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
}
