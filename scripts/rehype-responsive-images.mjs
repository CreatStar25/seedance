import fs from 'node:fs';

const manifestPath = new URL('../src/generated/image-manifest.json', import.meta.url);

export default function responsiveImages() {
  const manifest = fs.existsSync(manifestPath)
    ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')).images
    : {};

  return function transform(tree) {
    function visit(node) {
      if (node?.type === 'element' && node.tagName === 'img') {
        const source = node.properties?.src;
        const image = typeof source === 'string' ? manifest[source] : undefined;
        if (image) {
          node.properties = {
            ...node.properties,
            src: image.src,
            srcSet: image.srcset,
            sizes: '(min-width: 768px) 768px, calc(100vw - 3rem)',
            width: image.width,
            height: image.height,
            loading: 'lazy',
            decoding: 'async',
          };
        }
      }
      if (Array.isArray(node?.children)) node.children.forEach(visit);
    }
    visit(tree);
  };
}
