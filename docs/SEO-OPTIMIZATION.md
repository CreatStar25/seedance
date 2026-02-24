# Seedance 项目 SEO 优化建议

基于对当前 Astro 多语言站点的分析，从技术 SEO、内容与结构化数据、多语言与抓取四方面给出可执行建议。

---

## 一、项目现状概览

- **技术栈**：Astro 5 + 静态输出 + Cloudflare + @astrojs/sitemap  
- **多语言**：25 种语言，英文为默认（根路径 `/`），其他语言为 `/{lang}/`  
- **已有能力**：`SEOHead`（title/description/canonical/hreflang/og）、百度验证、GA4、robots.txt、FAQ 的 schema.org 微数据、博客 content 的 title/description  

以下建议按优先级与实现成本分类，便于分阶段落地。

---

## 二、高优先级（建议优先做）

### 1. 补充 Open Graph 图片（og:image）

**现状**：`SEOHead.astro` 未输出 `og:image`，分享到社交平台时无缩略图。

**建议**：

- 在 `SEOHead` 中增加可选 `image` 参数（绝对 URL）。
- 首页/列表页使用统一品牌图（如 `https://img.seedance22.com/seedance/seedance-2-cover.webp` 或专做的 1200×630 OG 图）。
- 博客详情页使用文章 `frontmatter` 的 `image`，若无则回退到默认 OG 图。

**示例（SEOHead 新增）**：

```html
<meta property="og:image" content={image ?? defaultOgImage} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content={image ?? defaultOgImage} />
```

**注意**：OG 图建议 1200×630，且使用绝对 URL。

---

### 2. 修正英文版 alternate / canonical 路径

**现状**：英文首页在根路径 `/`，但博客在 `/en/blog/`。`SEOHead` 里对 `en` 的 alternate 使用 `prefix = ''`，导致英文 alternate 被算成 `/blog/` 而非 `/en/blog/`，与真实 URL 不一致。

**建议**：

- 在生成 alternate 时，对 `en` 做区分：
  - 当前页为「根路径」时（如 `/`、`/ja/` 下的逻辑对应英文首页），英文 alternate 用 `/`。
  - 当前页为「非根路径」（如 `/ja/blog/`、`/ja/blog/xxx/`）时，英文对应页是 `/en/blog/`、`/en/blog/xxx/`，即英文 prefix 应为 `'/en'`，而不是 `''`。

这样可保证 hreflang 与 canonical 指向真实存在的英文 URL，避免 404 或重复内容问题。

---

### 3. 完善 hreflang 覆盖的语言代码

**现状**：`SEOHead` 中 `localeMap` 仅包含 `en`、`zh-cn`、`zh-tw`，其余语言（如 `ja`、`es`、`fr`、`de` 等）直接使用 key 作为 hreflang，与 sitemap 的 i18n 配置可能不一致。

**建议**：

- 为 sitemap 中配置的所有 locale 在 `localeMap` 中增加标准 hreflang（如 `ja` → `ja`，`ko` → `ko`），与 `astro.config.mjs` 里 sitemap i18n 的 `locales` 一致。
- 确保 `x-default` 指向默认语言（英文）的 URL（根或 `/en/...`，与上一条逻辑一致）。

---

### 4. 添加 robots meta 与可选 noindex

**建议**：

- 在 `SEOHead` 中预留 `robots` 能力（如 `noindex, nofollow`），用于未来对「仅站内用、不想被收录」的页面做控制。
- 正常内容页不输出 `noindex`，保持当前「允许收录」行为即可。

---

## 三、中优先级（技术 SEO 与体验）

### 5. 添加 JSON-LD 结构化数据

**现状**：FAQ 已用微数据（itemscope/itemtype），利于 SEO；但缺少整站级的 Organization/WebSite 和文章页的 Article。

**建议**：

- **全站**（Layout 或 SEOHead）：  
  - `WebSite`：`url`、`name`、`description`、可选 `potentialAction`（SearchAction，若以后有站内搜索）。  
  - `Organization`：logo、sameAs（社交媒体链接）、可选 contactPoint。
- **博客详情页**：  
  - `Article` 或 `BlogPosting`：`headline`、`description`、`image`、`datePublished`/`dateModified`、`author`（Person）。

这样可提升富媒体结果（如 FAQ、站点链接）的展示机会，并利于理解站点与文章类型。

---

### 6. 博客列表页的专属 title/description

**现状**：`[lang]/blog/index.astro` 使用 `title={t.nav.blog} - Seedance` 和 `description={t.seo.description}`，与首页一致，不利于区分列表页与首页。

**建议**：

- 在各语言文案（如 `en.json`）中增加 `blog_list` 的 `title` 和 `description`，例如：
  - title: "Blog - Seedance 2.0 Tips & Guides | Seedance"
  - description: "Articles and guides about Seedance 2.0, AI video generation, text-to-video, and image-to-video."
- 列表页使用上述字段，便于在搜索结果中更准确描述「博客列表」而非首页。

---

### 7. 博客文章 SEO 增强

- **image**：每篇博客 frontmatter 尽量有 `image`（绝对 URL），并在 `SEOHead` 中作为 og:image 和 Article 的 image。
- **dateModified**：若有更新日期，可在 frontmatter 增加 `updatedDate`，并用于 Article 的 `dateModified`。
- **keywords**：可在 frontmatter 增加可选 `keywords`，输出到 meta keywords（若仍希望保留该标签）或仅用于 JSON-LD。

---

### 8. 语义化与可访问性（间接利于 SEO）

- 确保每页只有一个 `<h1>`，且与 `title` 语义一致。
- 首页主标题、博客文章标题已为 `<h1>`，保持即可。
- 图片：所有重要图片均有有意义的 `alt`（包括 OG 图在正文中的占位图）。

---

## 四、站内与多语言

### 9. 内部链接与锚点

- 导航已使用 `#text-to-video`、`#image-to-video`、`#ai-tools`，有利于站内跳转与部分关键词对应。
- 可考虑在首页或 Footer 增加「博客」的显眼链接，强化博客在站内权重。

---

### 10. Sitemap 与 robots 一致性

**现状**：`robots.txt` 已有 `Sitemap: https://seedance22.com/sitemap-index.xml`，sitemap 集成配置了多语言。

**建议**：

- 确认 `astro.config.mjs` 中 `site: 'https://seedance22.com'` 与线上一致。
- 若存在「仅开发/预览用」的路径，可用 robots meta 或 sitemap 过滤，避免被收录。

---

### 11. 多语言 URL 与重定向

- 当前英文首页为 `/`，其他语言为 `/{lang}/`，结构清晰。
- 若未来希望「带语言前缀」的英文首页（如 `/en/`）也可访问，建议用 301 重定向到 `/`，避免重复内容；或明确只保留一种英文首页 URL 并在 sitemap/hreflang 中只暴露该 URL。

---

## 五、内容与关键词（建议与产品/运营一起做）

### 12. Title / Description 长度与关键词

- **Title**：控制约 50–60 字符（中文可略多），核心品牌词与主关键词前置（如 "Seedance 2.0 - 文生视频 | AI 视频生成"）。
- **Description**：150–160 字符内，包含主关键词与行动号召，与当前各语言 `seo.description` 对齐优化。

---

### 13. 关键词与文案

- 在 `SEOHead` 的 meta keywords 或各语言 seo 中，可系统化加入：Seedance、Seedance 2.0、AI 视频生成、文生视频、图生视频、AI 视频工具 等，并随产品词扩展。
- 博客标题与摘要中自然融入目标关键词，避免堆砌。

---

## 六、实施检查清单（可复制到 issue/看板）

| 项 | 说明 | 优先级 |
|----|------|--------|
| OG/Twitter 图片 | SEOHead 支持 og:image、twitter:card，首页/博客用图 | 高 |
| 英文 alternate | 非根路径时英文用 /en/... | 高 |
| hreflang 覆盖 | localeMap 与 sitemap 语言一致 | 高 |
| robots meta | 预留 noindex 等能力 | 高 |
| JSON-LD | WebSite + Organization；博客 Article | 中 |
| 博客列表 title/description | 独立于首页的列表页 SEO 文案 | 中 |
| 博客 image/dateModified | frontmatter 与 Article 结构化数据 | 中 |
| 标题层级与 alt | 单 h1、图片 alt | 中 |
| Title/Description 长度与关键词 | 各语言统一规范 | 中 |

---

## 七、小结

项目已有较好的基础：多语言、canonical、hreflang、sitemap、FAQ 微数据、百度与 GA。优先建议补齐 **og:image/twitter:card**、**修正英文 alternate 与 hreflang**，再逐步加入 **JSON-LD** 与 **博客/列表页专属 SEO 与结构化数据**，即可在不大改架构的前提下明显提升搜索与分享表现。若你希望，我可以按「仅改 SEOHead」「仅改博客页」等范围给出具体补丁式修改示例（直接对应到仓库文件与行号）。
