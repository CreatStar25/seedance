/**
 * Dummy Translation Audit Script
 * Finds cases where non-English language files have values identical to English text.
 * READ ONLY - does not modify any files.
 */

import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';

const I18N_DIR = './src/i18n';

// Proper nouns, brand names, URLs, and generic terms to exclude
const EXCLUDED_PATTERNS = [
  // Brand names
  'seedance', 'midjourney', 'suno', 'sunoHK', 'veo', 'udio',
  'nano banana', 'limaxai', 'deepseek', 'notebooklm', 'openclaw',
  'gemini', 'happyhorse', 'happy horse',
  // Technical terms
  'api', 'blog', 'sota', 'hd', '1080p', '4k', 'png', 'jpg', 'webp', 'mp3',
  'ai', 'ui', 'ux', 'seo', 'bgm', 'vfx', 'cta',
  // URLs and paths
  'https://', 'http://', '.com', '.hk', '.vip', '.fans', '.me', '.top',
  // Short generic terms (4 chars or less)
  'home', 'blog', 'api', 'about', 'privacy', 'terms', 'read',
  // Aspect ratios and technical values
  '16:9', '9:16', '4:3', '3:4', '21:9', '1:1',
  // Numbers and short codes
  '1.0', '1.5', '2.0', '3.0', '4',
  // Emoji patterns
  '✅', '⚠️', '❌', '🚀',
];

// Thresholds for similarity
const SIMILARITY_THRESHOLD = 0.85; // 85% similar = likely dummy
const SHORT_STRING_THRESHOLD = 0.95; // Short strings need higher threshold

/**
 * Calculate Levenshtein distance between two strings
 */
function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

/**
 * Calculate similarity ratio (0 to 1)
 */
function similarity(a, b) {
  if (a === b) return 1;
  if (a.length === 0 || b.length === 0) return 0;
  const maxLen = Math.max(a.length, b.length);
  const dist = levenshtein(a.toLowerCase(), b.toLowerCase());
  return 1 - dist / maxLen;
}

/**
 * Check if string is primarily emoji
 */
function isPrimarilyEmoji(str) {
  const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{FE00}-\u{FE0F}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{200D}\u{20E3}\u{231A}-\u{231B}\u{23E9}-\u{23F3}\u{23F8}-\u{23FA}\u{25AA}-\u{25AB}\u{25B6}\u{25C0}\u{25FB}-\u{25FE}]/gu;
  const emojis = str.match(emojiRegex);
  if (!emojis) return false;
  const nonSpace = str.replace(/\s/g, '');
  return emojis.length / nonSpace.length > 0.5;
}

/**
 * Check if a key path represents non-translatable content
 */
function isNonTranslatableKey(keyPath) {
  // CSS/Tailwind color classes
  if (keyPath.endsWith('.iconColor') || keyPath.endsWith('.iconBg') ||
      keyPath.endsWith('.iconHover') || keyPath.endsWith('.iconText') ||
      keyPath.endsWith('.tagBg') || keyPath.endsWith('.tagText')) {
    return true;
  }
  // SVG path data
  if (keyPath.endsWith('.iconSvg')) {
    return true;
  }
  // Person names in testimonials
  if (keyPath.includes('testimonials') && (keyPath.endsWith('.author') || keyPath.endsWith('.role'))) {
    return true;
  }
  return false;
}

/**
 * Check if string should be excluded (proper nouns, URLs, etc.)
 */
function shouldExclude(value) {
  const lower = value.toLowerCase().trim();

  // Check against excluded patterns
  for (const pattern of EXCLUDED_PATTERNS) {
    if (lower === pattern || lower.startsWith(pattern) || lower.endsWith(pattern)) {
      return true;
    }
  }

  // URLs
  if (lower.includes('http://') || lower.includes('https://') || lower.match(/^https?:\/\//)) {
    return true;
  }

  // Pure numbers or very short strings (3 chars or less)
  if (lower.length <= 3) return true;

  // Email addresses
  if (lower.includes('@') && lower.includes('.')) {
    return true;
  }

  // SVG paths (long strings with only certain characters)
  if (lower.match(/^[mz0-9.,\s]+$/) && lower.length > 20) {
    return true;
  }

  // CSS class patterns (single or compound with spaces)
  const cssParts = lower.split(/\s+/);
  if (cssParts.every(part =>
    part.match(/^bg-\w+-\d+$/) ||
    part.match(/^text-\w+-\d+$/) ||
    part.match(/^from-\w+-\d+$/) ||
    part.match(/^to-\w+-\d+$/)
  )) {
    return true;
  }

  return false;
}

/**
 * Flatten nested object to dot-notation paths
 */
function flatten(obj, prefix = '') {
  const result = {};
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(result, flatten(obj[key], fullKey));
    } else {
      result[fullKey] = obj[key];
    }
  }
  return result;
}

/**
 * Extract string values from arrays in flattened object
 */
function flattenWithArrays(obj, prefix = '') {
  const result = {};
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    const value = obj[key];

    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(result, flattenWithArrays(value, fullKey));
    } else if (Array.isArray(value)) {
      // Handle arrays - store as string or check each item
      result[fullKey] = value;
    } else {
      result[fullKey] = value;
    }
  }
  return result;
}

/**
 * Main audit function
 */
function auditTranslations() {
  // Read English file
  const enPath = join(I18N_DIR, 'en.json');
  const enData = JSON.parse(readFileSync(enPath, 'utf-8'));
  const enFlat = flattenWithArrays(enData);

  // Get all language files except English
  const files = readdirSync(I18N_DIR)
    .filter(f => f.endsWith('.json') && f !== 'en.json')
    .sort();

  const results = [];

  for (const file of files) {
    const langCode = file.replace('.json', '');
    const langPath = join(I18N_DIR, file);

    try {
      const langData = JSON.parse(readFileSync(langPath, 'utf-8'));
      const langFlat = flattenWithArrays(langData);

      const dummies = [];

      for (const [keyPath, enValue] of Object.entries(enFlat)) {
        const langValue = langFlat[keyPath];

        // Skip non-translatable keys (CSS, SVG, person names)
        if (isNonTranslatableKey(keyPath)) continue;

        // Skip if key doesn't exist in language file
        if (langValue === undefined) {
          dummies.push({
            key: keyPath,
            type: 'missing',
            enValue: String(enValue).substring(0, 80),
            langValue: '(missing)',
            similarity: 0,
          });
          continue;
        }

        // Handle arrays
        if (Array.isArray(enValue)) {
          if (Array.isArray(langValue)) {
            // Check each item in the array
            const arrayDummies = [];
            for (let i = 0; i < Math.min(enValue.length, langValue.length); i++) {
              const enItem = enValue[i];
              const langItem = langValue[i];

              if (typeof enItem === 'string' && typeof langItem === 'string') {
                if (shouldExclude(enItem.trim())) continue;
                if (isPrimarilyEmoji(enItem.trim())) continue;

                const sim = similarity(enItem.trim(), langItem.trim());
                const isShort = enItem.trim().length < 20;
                const threshold = isShort ? SHORT_STRING_THRESHOLD : SIMILARITY_THRESHOLD;

                if (sim >= threshold) {
                  arrayDummies.push({
                    index: i,
                    similarity: sim,
                    enValue: enItem.substring(0, 80),
                    langValue: langItem.substring(0, 80),
                  });
                }
              } else if (typeof enItem === 'object' && typeof langItem === 'object') {
                // Handle array of objects
                for (const objKey of Object.keys(enItem)) {
                  // Skip non-translatable sub-keys
                  const subKeyPath = `${keyPath}[${i}].${objKey}`;
                  if (isNonTranslatableKey(subKeyPath)) continue;

                  if (typeof enItem[objKey] === 'string' && typeof langItem[objKey] === 'string') {
                    if (shouldExclude(enItem[objKey].trim())) continue;
                    if (isPrimarilyEmoji(enItem[objKey].trim())) continue;

                    const sim = similarity(enItem[objKey].trim(), langItem[objKey].trim());
                    const isShort = enItem[objKey].trim().length < 20;
                    const threshold = isShort ? SHORT_STRING_THRESHOLD : SIMILARITY_THRESHOLD;

                    if (sim >= threshold) {
                      arrayDummies.push({
                        index: i,
                        key: objKey,
                        similarity: sim,
                        enValue: enItem[objKey].substring(0, 80),
                        langValue: langItem[objKey].substring(0, 80),
                      });
                    }
                  }
                }
              }
            }

            if (arrayDummies.length > 0) {
              dummies.push({
                key: keyPath,
                type: 'array',
                items: arrayDummies,
              });
            }
          }
          continue;
        }

        // Handle string values
        if (typeof enValue === 'string' && typeof langValue === 'string') {
          const enTrimmed = enValue.trim();
          const langTrimmed = langValue.trim();

          // Skip excluded patterns
          if (shouldExclude(enTrimmed)) continue;

          // Skip emoji strings
          if (isPrimarilyEmoji(enTrimmed)) continue;

          // Calculate similarity
          const sim = similarity(enTrimmed, langTrimmed);

          // Different thresholds based on string length
          const isShort = enTrimmed.length < 20;
          const threshold = isShort ? SHORT_STRING_THRESHOLD : SIMILARITY_THRESHOLD;

          if (sim >= threshold) {
            dummies.push({
              key: keyPath,
              type: 'string',
              enValue: enTrimmed.substring(0, 100),
              langValue: langTrimmed.substring(0, 100),
              similarity: sim,
            });
          }
        }
      }

      results.push({
        langCode,
        file,
        dummies,
        totalKeys: Object.keys(enFlat).length,
        dummyCount: dummies.length,
      });
    } catch (error) {
      console.error(`Error reading ${file}: ${error.message}`);
    }
  }

  // Sort by most dummies first
  results.sort((a, b) => b.dummyCount - a.dummyCount);

  return results;
}

/**
 * Format and display results
 */
function displayResults(results) {
  console.log('\n' + '='.repeat(80));
  console.log('🔍 DUMMY TRANSLATION AUDIT REPORT');
  console.log('='.repeat(80));
  console.log(`Total languages audited: ${results.length}`);
  console.log(`Benchmark: en.json`);
  console.log('='.repeat(80));

  let totalDummies = 0;

  for (const result of results) {
    totalDummies += result.dummyCount;

    console.log(`\n${'-'.repeat(80)}`);
    console.log(`📁 ${result.file} (${result.langCode})`);
    console.log(`   Dummy/placeholder translations: ${result.dummyCount} / ${result.totalKeys} keys`);
    console.log(`${'-'.repeat(80)}`);

    if (result.dummies.length === 0) {
      console.log('   ✅ No dummy translations found!');
      continue;
    }

    // Group by type
    const stringDummies = result.dummies.filter(d => d.type === 'string');
    const arrayDummies = result.dummies.filter(d => d.type === 'array');
    const missingKeys = result.dummies.filter(d => d.type === 'missing');

    if (missingKeys.length > 0) {
      console.log(`\n   ⚠️  Missing keys: ${missingKeys.length}`);
      for (const dummy of missingKeys) {
        console.log(`      • ${dummy.key}`);
      }
    }

    if (stringDummies.length > 0) {
      console.log(`\n   📝 Identical/similar strings: ${stringDummies.length}`);
      for (const dummy of stringDummies) {
        const pct = (dummy.similarity * 100).toFixed(0);
        console.log(`      • ${dummy.key}`);
        console.log(`        EN: "${dummy.enValue}"`);
        console.log(`        ${result.langCode}: "${dummy.langValue}"`);
        console.log(`        Similarity: ${pct}%`);
      }
    }

    if (arrayDummies.length > 0) {
      console.log(`\n   📦 Array items: ${arrayDummies.length}`);
      for (const dummy of arrayDummies) {
        console.log(`      • ${dummy.key}`);
        for (const item of dummy.items) {
          const pct = (item.similarity * 100).toFixed(0);
          if (item.key) {
            console.log(`        [${item.index}].${item.key}: "${item.langValue}" (${pct}% similar)`);
          } else {
            console.log(`        [${item.index}]: "${item.langValue}" (${pct}% similar)`);
          }
        }
      }
    }
  }

  console.log(`\n${'='.repeat(80)}`);
  console.log(`📊 SUMMARY`);
  console.log(`${'='.repeat(80)}`);
  console.log(`Total dummy/placeholder translations found: ${totalDummies}`);
  console.log(`\nLanguages ranked by most dummies:`);

  for (let i = 0; i < results.length; i++) {
    const r = results[i];
    const pct = ((r.dummyCount / r.totalKeys) * 100).toFixed(1);
    console.log(`  ${i + 1}. ${r.file}: ${r.dummyCount} dummies (${pct}%)`);
  }

  console.log('\n' + '='.repeat(80));
  console.log('⚠️  Note: This audit uses similarity thresholds:');
  console.log('   - Short strings (<20 chars): 95% similarity');
  console.log('   - Longer strings: 85% similarity');
  console.log('   - Excluded: proper nouns, URLs, brand names, short terms, emojis');
  console.log('='.repeat(80) + '\n');
}

// Run the audit
const results = auditTranslations();
displayResults(results);
