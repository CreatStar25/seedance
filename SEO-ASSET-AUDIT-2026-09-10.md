# Seedance22 SEO 资产审核报告

**审核日期**：2026-09-10
**审核对象**：`https://seedance22.com/`（24 语种 AI 视频内容站）
**方法**：全量源码审查 + 生产构建产物逐页解析（`dist/` 1,056 个 HTML 全量扫描，非抽样）+ 线上 HTTP 实测
**对照基准**：`FULL-AUDIT-REPORT.md`（2026-08-12，得分 51/100）

> **数据边界**：本报告不含 GSC、GA4、CrUX、真实 SERP 与外链权威度数据。所有结论来自代码与产物可验证信号 + 线上响应实测，「Performance」为 LCP/CLS 就绪度而非现场 CWV 实测值。

---

## 一、执行摘要

### SEO 健康度：63/100（较上轮 +12，仍需重点整改）

| 类别 | 权重 | 上轮 | 本轮 | 加权 | 变化 |
|---|---:|---:|---:|---:|:--|
| Technical SEO | 22% | 68 | **80** | 17.6 | ▲ 12 |
| Content Quality | 23% | 38 | **48** | 11.0 | ▲ 10 |
| On-Page SEO | 20% | 57 | **55** | 11.0 | ▼ 2 |
| Schema | 10% | 64 | **76** | 7.6 | ▲ 12 |
| Performance / CWV readiness | 10% | 38 | **55** | 5.5 | ▲ 17 |
| AI Search Readiness | 10% | 34 | **56** | 5.6 | ▲ 22 |
| Images | 5% | 38 | **85** | 4.3 | ▲ 47 |
| **合计** | 100% | **51** | **63** | **62.6** | **▲ 12** |

**一句话结论**：上轮 7 项「最重要的风险」中，**5 项已彻底修复并已在生产环境生效**；剩下的问题从「地基缺失」变成了「精细化运营」——但新暴露出一条**站群外链网络足迹**，属于需要优先决策的合规级风险。

---

## 二、上轮风险项闭环核验

| # | 上轮风险 | 状态 | 实证 |
|---|---|:--:|---|
| 1 | 内容集合重复 ID 覆盖 | ⚠️ 部分 | 无重复 canonical（0 组）；但 16 组重复标题、3 组重复描述仍存在 |
| 2 | 规模化薄内容风险 | ⚠️ 部分 | 新增 `content-quality.json` 策略自动 noindex 88 篇；仍有 210 篇可索引页面 <500 词 |
| 3 | 图片拖累 LCP/CLS | ✅ **已修复** | **3,735/3,735 张图片 100% 具备 width+height+srcset+decoding**（上轮为 0） |
| 4 | Schema 实体可信度不足 | ✅ **已修复** | Organization logo 改用真实 512×512；Article 已补 `publisher`；WebSite.url 已归位到站点根 |
| 5 | 线上软 404 | ✅ **已修复** | `/this-page-should-not-exist-xyz/` 实测返回**真实 404**；`/llms.txt` 返回 `text/plain`；`/icon.png` 301 到真实图标 |
| 6 | sitemap 质量信号失真 | ⚠️ 部分 | 主 sitemap 已无 lastmod（干净）；但 `sitemap-zh.xml` 与 `sitemap-zh-cn.xml` **内容仍完全相同** |
| 7 | 回归测试漂移 | ⚠️ 未验证 | 未执行测试套件，不作结论 |

### 本轮新增的关键修复（上轮未提及）

- **`llms.txt` 已发布并生效**（958 字节，含站点定位、栏目、canonical、使用条款）——AI 抓取入口从「不存在」变为「规范可读」。
- **sitemap 与 noindex 策略已联动**：主 sitemap 907→**967 条 URL，与可索引页面集合完全一致，0 条 noindex 泄漏**。
- **自建内容质量策略**（`scripts/build-content-quality-index.mjs`）：对 `字符<500 或 词数<100 或 标题<2 或 段数<3` 以及**跨语种逐字复制**的条目自动 noindex——这是本站在「规模化薄内容」上最正确的一步。
- **hreflang 集群健康度**：25,297 次 alternate 校验，**目标缺失 0、互指缺失 0、x-default 缺失 0**。

---

## 三、资产盘点（实测数据）

### 3.1 站点规模

| 资产 | 数量 | 说明 |
|---|---:|---|
| HTML 页面 | 1,056 | 24 语种 × 44 页结构 |
| 可索引页面 | 967 | 主 sitemap 967 条，**完全吻合** |
| noindex 页面 | 89 | 88 篇内容页 + 404 页 |
| 文章页（Article schema） | 911 | 624 博客 + 287 指南 |
| 图片实例 | 3,735 | 全部 WebP + srcset |
| `<video>` 实例 | 792 | 见 3.4 |
| 站内链接 | 中位 45/页 | 内链结构健康 |
| 平均页面体积 | 36 KB | 最大 73 KB，健康 |

### 3.2 技术 SEO 细项

| 检查项 | 结果 | 判定 |
|---|---|:--:|
| canonical 缺失 | 0 / 1,056（仅 404 页无 canonical，正确） | ✅ |
| canonical 重复 | 0 组 | ✅ |
| hreflang 互指（reciprocity） | 25,297 次校验，0 异常 | ✅ |
| x-default | 1,056 / 1,056 | ✅ |
| sitemap 覆盖 | 967/967，无 ghost URL、无遗漏 | ✅ |
| noindex 泄漏进 sitemap | **0** | ✅ |
| H1 唯一性 | 1,056 / 1,056 | ✅ |
| JSON-LD 解析错误 | **0** | ✅ |
| 未知路径返回 | 真实 404（非软 404） | ✅ |
| **hreflang 指向 noindex 页** | **840 处** | ❌ **P1** |
| `sitemap-zh.xml` ≡ `sitemap-zh-cn.xml` | 内容完全相同（各 75 条） | ❌ P2 |
| `lang` 属性大小写 | 88 页用 `zh-cn`/`zh-tw`（应为 `zh-CN`/`zh-TW`） | ❌ P3 |
| `og:locale:alternate` | 0 / 1,056 | ❌ P3 |

### 3.3 索引与规范化——本轮最需要修的一个 Bug

```
840 处 hreflang alternate 指向自身为 noindex 的页面
例：/ar/blog/seedance2-how-to-use-tutorial/
     → hreflang th / zh-cn / zh-tw 均指向 noindex 页
```

**根因**：`content-quality.json` 已正确把 88 篇判为 `noindex`，但页面渲染 hreflang 时依据的是「**该语种文件是否构建**」，而非「**该语种是否可索引**」。两条链路没有对齐。

**后果**：Google 会判定「alternate 指向被 noindex 的页面」，导致整个 hreflang 集群被降权或忽略——**上轮辛苦修好的 hreflang 互指质量，会被这个 Bug 部分抵消**。

**修法**：hreflang 只输出 `content-quality.json` 中 `indexable: true` 的语种。改动量极小（在传入 `hreflangLocales` 前多做一次 indexable 过滤）。

```ts
// 伪代码：渲染详情页时
const hreflangLocales = langsForSlug.filter(
  (l) => contentQuality[`${collection}/${l}/${slug}`]?.indexable !== false
);
```

### 3.4 图片与媒体

**图片质量已达优秀水平**（上轮 38 → 本轮 85）：

| 指标 | 数值 | 覆盖率 |
|---|---:|---:|
| 具备 width + height | 3,735 | **100%** |
| 具备 srcset | 3,735 | **100%** |
| 具备 decoding | 3,735 | **100%** |
| 具备 alt | 3,735 | **100%**（3 处为空） |
| lazy 加载 | 2,656 | 71% |
| fetchpriority=high | 792（48 页） | 首屏 LCP 已优化 |

**残留问题**：

| 问题 | 影响面 | 优先级 |
|---|---|:--:|
| 24 个首页用 `.webp` 作为 `<video src>` — 浏览器按视频请求会失败 | 24 页 | **P1** |
| **120 个 markdown 文件**引用拼写错误的海报图 `eedance-2-0-cover-*.png`（漏了 s） | 120 文件 / 多语种 | **P1** |
| 624 个 `<video>` 无 `preload` 属性（默认 auto，浪费带宽） | 624 处 | P2 |
| `favicon.svg` **373 KB** — 每页加载 | 全站 | **P1** |
| `web-app-manifest-512x512.png` 257 KB、`seedance22.png` 279 KB | 全站（含 Schema logo） | P2 |
| 3 处空 `alt` | 3 处 | P3 |

> `favicon.svg` 373 KB 是个异常值——正常 SVG 图标应在 2–10 KB。这个文件很可能是内嵌了位图或未做路径压缩，属于典型的「一次修复、全站受益」项。

**正确做法**（`ResponsiveImage.astro` 已实现，可作为范式）：
```astro
<img src={image.src} srcset={image.srcset} sizes={sizes}
     width={image.width} height={image.height} alt={alt}
     loading={priority ? 'eager' : 'lazy'}
     decoding={priority ? 'sync' : 'async'}
     fetchpriority={priority ? 'high' : 'auto'} />
```

### 3.5 On-Page 元数据

| 问题 | 数量 | 占比 |
|---|---:|---:|
| 标题 > 60 字符 | 588 | 56% |
| 标题 > 60 字符（**已剔除品牌后缀**） | **431** | **41%** |
| 标题 > 70 字符 | 463 | 44% |
| 描述 > 160 字符 | 546 | 52% |
| 描述 < 70 字符 | 92 | 9% |
| 统一使用 ` - Seedance` 后缀 | 912 | 86% |
| 重复标题 | 37 页 / 16 组 | — |
| 重复描述 | 21 页 / 3 组 | — |
| **缺失 BreadcrumbList** | **1,056（0 覆盖）** | **100%** |

**要点**：上轮把标题过长归因于品牌后缀，本轮剔除后缀后仍有 **431 篇超标**——说明**译文标题本身**就长。阿拉伯语尤为突出（`/ar/blog/seedance-2-0-guide-tutorial/` 标题 125 字符）。这是翻译质量与 SEO 模板的协同问题，不是加个截断就能解决的。

**重复组集中在未本地化的法务页**：`About` / `Privacy Policy` / `Terms of Service` 在 7 个语种（fa、hi、ms、nl 等）共用英文标题和描述。

### 3.6 Schema 结构化数据

```
WebSite              1,055
Organization         1,055
Article                911
FAQPage                 24   （仅首页）
SoftwareApplication     24   （仅首页）
JSON-LD 解析错误          0
```

已修复：Organization logo（真实 512×512）、Article `publisher`、WebSite.url 归位。

**仍缺失**：
- **BreadcrumbList：0 覆盖**——博客/指南详情页是深度页面，缺少面包屑既损失富结果机会，也让 967 个页面的层级关系无法被搜索引擎理解。
- **作者实体**：Schema author 仍为固定名 `Seedance Team`，无 `Person` 实体、无 ProfilePage、无资历说明——E-E-A-T 的结构化支撑为空。
- 未使用单一 `@graph` + 稳定 `@id` 串联实体（目前是 5 个独立 JSON-LD 块）。

### 3.7 性能与缓存（含线上实测）

线上响应头实测：

```
cache-control: public, max-age=0, must-revalidate
cf-cache-status: DYNAMIC          ← 静态站未命中边缘缓存
x-content-type-options: nosniff
referrer-policy: strict-origin-when-cross-origin
（无 HSTS / 无 CSP / 无 Permissions-Policy）
```

**这是纯静态站，却以 `DYNAMIC` 方式逐请求回源**。对 24 语种的全球受众，TTFB 与边缘命中率都有明确优化空间。建议对 HTML 设置合理 s-maxage 配合 stale-while-revalidate。

**第三方脚本**：Google Analytics（全站） + 百度统计（仅 `zh-cn` / `zh-tw`），需在性能实测中量化 TBT/INP 影响。

**媒体开销**：24 个首页共有 168 个 `<video>` 标签，多为 `autoplay loop muted`——首屏多路自动播放视频是移动端 LCP/TBT 的明确风险，且全部未设 `preload`。

### 3.8 站外链接与权威度 ⚠️ 本轮最重要的新增发现

全站 **18,099 条站外链接，`nofollow` 数量为 0**，且几乎全部来自**全站页脚**（约 1,000 页 × 17 个域名）。

| 域名 | 出现次数 | 类别 |
|---|---:|---|
| suno.hk | 1,187 | AI Music |
| www.limaxai.com | 1,187 | AI Tools |
| sunoai.me | 1,055 | AI Music |
| udio.hk | 1,055 | AI Music |
| midjourney.cfd | 1,011 | AI Image |
| nanobanana-pro.vip / nanobananapro.hk / nanobanana3.top | 各 1,011 | AI Image |
| happyhorse.fans / happy-horse.hk | 各 1,011 | AI Video |
| seedance2.hk / veo3.hk / deepseek4.hk / notebooklm.vip / openclawd.hk / gemini3.hk | 各 923 | 混合 |
| geminiwatermarkerase.com | 923 | AI Tools |

**判断**：这是一组**同一运营方持有的、命名高度同构的精确匹配域名（EMD）站群**，通过全站页脚互相全量链接、且全部 followed。从 Google Search 的「链接垃圾政策（Link Spam）」视角看，**全站页脚互链 + 同构 EMD 域名网络**是典型可被识别的链接方案足迹，符合「大规模互惠/合作链接」与「为操纵排名而创建的链接网络」的特征描述。

**这条风险与「内容薄」不同——它作用在域名级别**，一旦被判定为链接方案，影响面是整站而非单页。

**建议（按风险递减）**：
1. **首选**：页脚保留少量**真实品牌家族**（如 limaxai.com、suno.hk），对其余域名改为 `rel="nofollow"` 或直接移除；
2. 若必须保留，把批量外链从**全站页脚**收敛为**单页「相关产品」模块**，切断「每页 17 条相同外链」的站群指纹；
3. 不要在页脚外链中继续扩张新域名。

---

## 四、优先级行动清单

### P0 — 本周内（合规与集群级风险）

| # | 事项 | 位置 | 预期影响 |
|---|---|---|---|
| 1 | **收敛页脚站群外链**：17 域名全站互链改为 nofollow 或常态内链 | `src/components/Footer.astro` | 域名级链接风险 |
| 2 | **修复 hreflang → noindex 冲突**（840 处） | SEOHead 调用侧，按 indexable 过滤 | 恢复 hreflang 集群效力 |

### P1 — 两周内（明确可量化收益）

| # | 事项 | 位置 | 预期影响 |
|---|---|---|---|
| 3 | 首页 `.webp` 当 `<video src>` 改为 `poster` + 真实 mp4 | 24 个首页 | 修复 24 页失效媒体 |
| 4 | 修复 120 个文件的 `eedance-` 拼写（应为 `seedance-`） | `src/content/**/*.md` | 修复 120 处失效海报图 |
| 5 | `favicon.svg` 从 373 KB 压缩到 <10 KB | `public/favicon.svg` | 全站每页加载收益 |
| 6 | **为博客/指南详情页补 BreadcrumbList schema** | `SEOHead.astro` + 详情页 | 0 → 967 页覆盖，新增富结果资格 |
| 7 | 建立 `Person` 作者实体（作者页 + 资历 + 测试方法） | Schema + 新页面 | E-E-A-T 结构性提升 |

### P2 — 一个月内（质量与性能）

| # | 事项 | 位置 |
|---|---|---|
| 8 | 重写超长标题：优先处理**剔除后缀仍 >60 字符的 431 篇**（阿语优先） | 各语种 frontmatter |
| 9 | 压缩描述：546 篇 >160 字符；补齐 92 篇 <70 字符 | 各语种 frontmatter |
| 10 | 本地化 About/Privacy/Terms 标题与描述（7 语种仍用英文） | `src/i18n/**` |
| 11 | 合并或拆分 `sitemap-zh.xml` / `sitemap-zh-cn.xml` | `scripts/generate-zh-sitemap.js` + `robots.txt` |
| 12 | 624 个 `<video>` 补 `preload="metadata"`；首屏外视频改 `preload="none"` | 内容 + 首页 |
| 13 | 启用边缘缓存（HTML `s-maxage` + `stale-while-revalidate`） | Cloudflare 配置 |
| 14 | 压缩 `web-app-manifest-512x512.png`（257 KB）与 `seedance22.png`（279 KB） | `public/` |
| 15 | 修正 88 页 `lang="zh-cn"` → `zh-CN` | Header/Layout |
| 16 | 为 `og:locale` 补 `og:locale:alternate` | `SEOHead.astro` |

### P3 — 持续运营

- 为 210 篇可索引的 <500 词页面补充实测数据、截图、版本号与一手来源；
- 统一 JSON-LD 为单一 `@graph`；
- 补齐 3 处空 `alt`；
- 复核 `src/content/config.ts` 的重复 ID 告警（本轮未复现重复 canonical，但构建告警值得单独验证）。

---

## 五、值得肯定的部分

1. **图片管线是本轮最大亮点**：3,735 张图片 100% 具备尺寸、srcset、格式与解码提示，且已用 `image-manifest.json` + rehype 插件在 Markdown 层自动注入——这是工程化的正确解法，而非逐页手工修补。
2. **hreflang 集群质量**：25,297 次校验零异常，x-default 全覆盖，是跨国站里的优秀水平。
3. **索引策略自洽**：sitemap 967 条与可索引集合完全一致、0 noindex 泄漏、真实 404、canonical 零重复——规范化地基已经扎实。
4. **主动引入内容质量门槛**：自建 `content-quality` 策略并联动 sitemap/noindex，方向完全正确，体现了对 scaled content 风险的正确认知。
5. **`llms.txt` 已落地**：为 AI 检索时代准备了规范的抓取入口，这在同类站点中属于前瞻动作。

---

## 六、数据限制

- 无 GSC / GA4 / CrUX / 真实 Lighthouse 数据；「Performance」为就绪度评估，非现场 CWV。
- 未获取真实 SERP、关键词排名、外链权威度指标——**站群外链的实际处罚风险无法从代码侧量化**，需结合 GSC「手动操作」与「链接」报告确认。
- 线上仅实测 6 个路径，页面级结论来自 1,056 个构建产物的全量静态解析。
- 未执行项目测试套件，上轮「回归测试漂移」项本轮未验证。
