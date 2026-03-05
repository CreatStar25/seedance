# 多语种文本拆分说明（ui.ts + content.ts）

## 1. 24 种语种列表

与 `src/i18n/locales.ts` 一致，共 **24 种**：

| 代码 | 语言 |
|------|------|
| en | English |
| zh-cn | 简体中文 |
| zh-tw | 繁體中文 |
| es | Español |
| ar | العربية |
| pt | Português |
| id | Bahasa Indonesia |
| ms | Bahasa Melayu |
| fr | Français |
| ru | Русский |
| hi | हिन्दी |
| ja | 日本語 |
| de | Deutsch |
| ko | 한국어 |
| tr | Türkçe |
| vi | Tiếng Việt |
| th | ไทย |
| it | Italiano |
| fa | فارسی |
| nl | Nederlands |
| pl | Polski |
| sv | Svenska |
| uk | Українська |
| ro | Română |

---

## 2. 模块归属依据

### 2.1 归入 `ui.ts`（全站通用 UI，与具体页面无关）

| 模块 | 键/内容 | 归属依据 |
|------|----------|----------|
| **navbar** | home, blog, text_to_video, image_to_video, ai_tools, cta | 导航栏菜单与 CTA 按钮文案，全站通用 |
| **footer** | brand（title, intro, email）, ai_tools, ai_video, ai_image, company（title + links）, copyright | 底部栏品牌区、四列导航标题与链接文案、版权，全站通用 |
| **buttons** | start, learn_more, view_detail, submit, back | 通用按钮：「立即开始」「了解更多」「查看详情」「提交」「返回」 |
| **prompts** | loading, success, placeholder_input | 通用提示：「加载中」「操作成功」「请输入」 |
| **labels** | search, filter, pagination | 通用标签：「搜索」「筛选」「页码」 |
| **blog** | read, no_posts | 博客列表/空状态等通用文案，多页复用 |

### 2.2 归入 `content.ts`（仅首页及法律页专属业务内容）

| 模块 | 键/内容 | 归属依据 |
|------|----------|----------|
| **seo** | title, description | 首页 SEO 标题与描述 |
| **hero** | title, highlight, subtitle, button, users, badge | Hero 区标题、副标题、描述、主按钮、信任文案、角标 |
| **stats** | 数值与标签数组 | 首页数据展示区 |
| **product_features** | text_to_video, image_to_video, text_to_image, ai_tools（含 cards, grid, cta） | 首页功能介绍卡片（名称、描述、要点、CTA） |
| **features** | title, subtitle, list[] | 首页「核心优势」区标题与列表 |
| **comparison** | title, headers, rows[] | 首页对比表 |
| **showcase** | title, items[] | 首页「应用场景」等展示 |
| **testimonials** | title, list[] | 首页用户评论区 |
| **faq** | title, items[]（q, a） | 首页 FAQ 区 |
| **legal** | about, privacy, terms（各含 title, description, heading, content） | 关于 / 隐私 / 条款页的专属正文内容（非底部栏链接文案） |

---

## 3. 未翻译文本的兜底规则

- **语种键一致**：`ui.ts` 与 `content.ts` 的 24 个 locale 键完全一致，无遗漏、无多余。
- **缺失时**：若某语种的某模块或某键暂无翻译，使用**英文（en）**对应键的值兜底；此前在代码中已用 `// 待翻译` 标注的位置，已为所有非英语语种补全（导航栏、底部栏、通用按钮/提示/标签、博客文案；首页内容与法律页由 content 提供）。
- **类型安全**：通过 TypeScript 的 `Record<Locale, UILocale>` / `Record<Locale, ContentLocale>` 保证每个 locale 都具备完整结构。

---

## 4. Astro 组件中导入与使用示例

### 4.1 按当前语种取 UI 与首页内容

```typescript
// 在 .astro 或 .ts 中
import type { Locale } from "../i18n/ui";
import { ui } from "../i18n/ui";
import { content } from "../i18n/content";

// 假设当前语种为 lang（来自路由或 props）
const lang: Locale = "zh-cn";

// 使用 UI 文案
const nav = ui[lang].navbar;
const footer = ui[lang].footer;
const t = ui[lang];
// 例如：t.navbar.home, t.footer.brand.intro, t.buttons.submit, t.blog.read

// 使用首页专属内容
const home = content[lang];
// 例如：home.hero.title, home.product_features.text_to_video.title, home.faq.title, home.legal.about.heading
```

### 4.2 在 Astro 页面中传入组件

```astro
---
// src/pages/[lang]/index.astro
import type { Locale } from "../../i18n/ui";
import { ui } from "../../i18n/ui";
import { content } from "../../i18n/content";
import Header from "../../components/Header.astro";
import Footer from "../../components/Footer.astro";

const { lang } = Astro.params as { lang: Locale };
const t = ui[lang];
const c = content[lang];
---
<html>
  <body>
    <Header lang={lang} t={t} />
    <main>
      <h1>{c.hero.title} {c.hero.highlight}</h1>
      <p>{c.hero.subtitle}</p>
      <a href="...">{c.hero.button}</a>
      <!-- 功能介绍卡片等使用 c.product_features, c.features, c.faq 等 -->
    </main>
    <Footer lang={lang} t={t} />
  </body>
</html>
```

### 4.3 与现有 JSON 并存时的迁移

若当前页面仍从 `import(\`../i18n/${lang}.json\`)` 取 `t`，可逐步迁移：

- **方案 A**：用 `ui[lang]` 和 `content[lang]` 拼出与现有 `t` 同结构的对象，再传给现有 Header/Footer/首页组件，避免一次改太多组件。
- **方案 B**：将 Header/Footer 改为只接收 `ui[lang]`，首页区块改为只接收 `content[lang]`，再删除对 JSON 的依赖。

---

## 5. 文件位置与导出

| 文件 | 路径 | 导出 |
|------|------|------|
| 通用 UI 文本 | `src/i18n/ui.ts` | `export type Locale` \| `export type FooterLink` \| `export type UILocale` \| `export const ui` |
| 首页与法律页内容 | `src/i18n/content.ts` | `export type ContentLocale` \| `export const content`（并 `import type { Locale } from "./ui"`） |

所有多语种文案均字符串类型，嵌套不超过 3 层（如 `ui.en.navbar.home`、`content["zh-cn"].hero.title`）。
