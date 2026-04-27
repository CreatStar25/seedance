type JsonObject = Record<string, any>;

function isObject(value: unknown): value is JsonObject {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function mergeWithFallback(base: JsonObject, target: JsonObject, path = ""): JsonObject {
  const merged: JsonObject = { ...target };
  for (const key of Object.keys(base)) {
    const nextPath = path ? `${path}.${key}` : key;
    if (!(key in target)) {
      console.warn(`[i18n] Missing key "${nextPath}", fallback to en.`);
      merged[key] = base[key];
      continue;
    }

    const baseValue = base[key];
    const targetValue = target[key];
    if (isObject(baseValue) && isObject(targetValue)) {
      merged[key] = mergeWithFallback(baseValue, targetValue, nextPath);
    }
  }
  return merged;
}

const localeModules = import.meta.glob<{ default: JsonObject }>("./*.json");

/** 加载合并后的文案（非英文在缺 key 时回退到 en）。使用 glob 以便静态打包，避免 Cloudflare 预渲染时动态 import 路径失败。 */
export async function loadTranslations(lang: string): Promise<JsonObject> {
  const enLoader = localeModules["./en.json"];
  if (!enLoader) {
    throw new Error("[i18n] en.json not found via import.meta.glob");
  }
  const en = (await enLoader()).default;

  if (lang === "en") return en;

  const path = `./${lang}.json`;
  const loader = localeModules[path];
  if (!loader) {
    console.warn(`[i18n] Missing locale file "${lang}.json", fallback to en.`);
    return en;
  }

  try {
    const locale = (await loader()).default;
    return mergeWithFallback(en, locale);
  } catch (error) {
    console.warn(`[i18n] Failed to load "${lang}.json", fallback to en.`, error);
    return en;
  }
}
