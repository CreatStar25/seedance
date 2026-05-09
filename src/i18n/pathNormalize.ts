import { languages } from './locales';

const langSegmentSet = new Set(Object.keys(languages));

function canStripTrailingLang(parts: string[]): boolean {
  if (parts.length < 2) return false;
  const last = parts[parts.length - 1]!;
  if (!langSegmentSet.has(last)) return false;

  // /blog/{slug}/ 两段时末段视为 slug（可能与语言码同名，如 /blog/ro/）
  if (parts[0] === 'blog' && parts.length === 2) return false;
  if (parts[0] === 'guide' && parts.length === 2) return false;

  // /{lang}/blog/{slug}/ 勿把 slug 当尾随语言码删除
  if (parts.length === 3 && parts[1] === 'blog' && langSegmentSet.has(parts[0]!)) return false;
  if (parts.length === 3 && parts[1] === 'guide' && langSegmentSet.has(parts[0]!)) return false;

  return true;
}

/**
 * 移除路径末尾误入的语种片段（例如历史错误链接 /guide/slug/vi/、切换语言时未清理的尾段）。
 * 仅当「最后一个路径段」为已注册语言代码时移除，避免破坏合法单段路径（如 /vi/ 首页）。
 */
export function stripTrailingLangSegments(path: string): string {
  if (!path || path === '/') return '/';

  let normalized = path.replace(/\/+/g, '/');
  if (!normalized.startsWith('/')) normalized = `/${normalized}`;
  if (normalized !== '/' && !normalized.endsWith('/')) normalized = `${normalized}/`;

  const inner = normalized.endsWith('/') ? normalized.slice(0, -1) : normalized;
  const parts = inner.split('/').filter(Boolean);

  let guard = 0;
  while (guard < 32 && parts.length > 1 && langSegmentSet.has(parts[parts.length - 1]!)) {
    if (!canStripTrailingLang(parts)) break;
    parts.pop();
    guard++;
  }

  if (parts.length === 0) return '/';
  const rebuilt = `/${parts.join('/')}/`;
  return rebuilt.replace(/\/\/+/g, '/');
}
