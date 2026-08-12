const CURRENT_HOME_VERSION = 'Seedance 2.5';

/**
 * 首页展示当前产品版本；内容页和历史文章仍可保留其原始版本号。
 */
export function updateHomeVersion<T>(translations: T): T {
  if (typeof translations === 'string') {
    return translations.replaceAll('Seedance 2.0', CURRENT_HOME_VERSION) as T;
  }

  if (Array.isArray(translations)) {
    return translations.map((item) => updateHomeVersion(item)) as T;
  }

  if (translations && typeof translations === 'object') {
    return Object.fromEntries(
      Object.entries(translations).map(([key, value]) => [key, updateHomeVersion(value)])
    ) as T;
  }

  return translations;
}
