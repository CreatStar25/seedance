# Seedance22 完整 SEO 审计报告

审计日期：2026-08-12  
审计对象：`https://seedance22.com/` 与当前 Astro 源码/生产构建  
业务类型：AI 视频生成 SaaS / 多语言内容发布站  
方法：源码审查、生产构建、864 页静态产物扫描、线上 HTTP 抽查、项目测试；未取得 GSC/GA4/CrUX、真实 SERP 与外链数据。

## 执行摘要

**SEO Health Score：51/100（需重点整改）**

| 类别 | 权重 | 得分 | 加权 |
|---|---:|---:|---:|
| Technical SEO | 22% | 68 | 15.0 |
| Content Quality | 23% | 38 | 8.7 |
| On-Page SEO | 20% | 57 | 11.4 |
| Schema | 10% | 64 | 6.4 |
| Performance / CWV readiness | 10% | 38 | 3.8 |
| AI Search Readiness | 10% | 34 | 3.4 |
| Images | 5% | 38 | 1.9 |

总分为代码与实验室可验证信号的保守评分；没有 CrUX/GSC 数据，Performance 与索引效果不能视为现场实测。

### 做得好的部分

- 生产构建成功，共生成 864 个 HTML；主 sitemap 也包含 864 个唯一 HTTPS URL，与构建路径双向 100% 匹配。
- 全站统一 HTTPS canonical 与尾斜杠；博客/指南详情页的 hreflang 只指向实际存在语种。
- JSON-LD 均可解析；Article、Organization、WebSite、SoftwareApplication 已有基础实现。
- 2947 个渲染图片实例均有 `alt` 属性（仅 3 个最终为空），基础可访问性覆盖良好。
- robots.txt 允许正常抓取且声明 sitemap；线上首页返回 200，并有 `nosniff` 与严格 referrer policy。

### 最重要的风险

1. **内容集合重复 ID 覆盖。** 构建产生大量 `Duplicate id` 警告，部分语种内容在构建时被后加载项覆盖；这会导致正文、hreflang、列表和 sitemap 对应关系不稳定。根因与内容集合自定义 slug/旧式内容 API 组合有关，见 `src/content/config.ts`。
2. **规模化薄内容风险。** 749 篇 Markdown 扩展成 720 个 Article 页面；多篇本地化文章仅约 88–200 词，远低于审计门槛的 1500 词博客 / 800 词指南。内容矩阵高度模板化，缺少原创数据、截图、实测与实名作者，是 scaled-content 与 E-E-A-T 风险。
3. **图片交付会拖累 LCP/CLS。** 2947 个 `<img>` 全部没有原生 `width`/`height`，全站无 `srcset`，只有 72 个 lazy-load；多数实例仍为 PNG。首页还把 `.webp` 作为 `<video src>`，属于无效媒体语义。
4. **Schema 的实体可信度不足。** 全部 864 页 Organization logo 指向不存在的 `/icon.png`；Article 缺 publisher，Schema 作者被固定为 `Seedance Team`，可能与页面可见作者不一致；sameAs 链接也需要逐一验证真实性。
5. **线上存在软 404。** `/llms.txt` 和 `/icon.png` 都返回首页 HTML 的 200，而非相应资源。前者意味着没有有效的 AI crawler 入口，后者让 Organization logo 无效。
6. **sitemap 质量信号失真。** 两份中文 sitemap 内容完全相同；中文页面的 lastmod 每次构建都被写成当天，无法表达真实更新。
7. **项目回归测试已经漂移。** `pnpm test:blog` 与 `pnpm test:multilang` 均失败；测试仍期待 `/en/blog/` 和 `en-US`，而实现使用根英文路径和 `en`。这不代表当前 hreflang 必然无效，但意味着 CI 无法保护实际策略。

## 技术 SEO

### 抓取、索引与 URL

- `astro.config.mjs` 设置正式站点、`trailingSlash: 'always'`，canonical 与 sitemap 路径规则一致。
- `public/robots.txt` 只阻止 `/api/`，并声明主 sitemap 与两份中文 sitemap。
- `public/_redirects` 将 `/en/`、`/en/blog/`、`.html` 历史入口收敛到默认英文根路径，方向合理。
- 864 个构建 HTML 均进入主 sitemap；无孤立的“构建但未提交”URL，也无 sitemap ghost URL。
- 风险：Cloudflare 当前对未知路径回退首页 HTML 200（已在 `/llms.txt`、`/icon.png` 观察到），可能让大量不存在 URL 成为 soft 404。应确保静态缺失资源与未知路由返回真实 404。

### 国际化

- 24 个语言版本加 x-default；首页输出 25 条 alternate link。
- 英文默认路径为 `/`，其他语种使用 `/{lang}/`，canonical 为自引用。
- 博客/指南用 `localesForContentSlug` 过滤未构建翻译，避免 hreflang 指向 404，这是正确做法。
- 需要修复重复内容 ID 后，再做 hreflang reciprocity 自动验证；当前自带测试的 `en-US` 预期与实现 `en` 不一致。
- `src/i18n/zh.json` 不在公开语言集合中，应确认它只是遗留资源，避免未来意外生成 `/zh/` 与 `/zh-cn/` 竞争。

### 安全与响应头

- 线上有 HTTPS、`X-Content-Type-Options: nosniff`、`Referrer-Policy: strict-origin-when-cross-origin`。
- 首页 `Cache-Control: public, max-age=0, must-revalidate` 且 Cloudflare 状态为 DYNAMIC，静态站未充分使用边缘缓存。
- 本次未见 CSP、HSTS、Permissions-Policy 证据；它们主要是安全/信任加固，不是直接排名因素。

## 内容质量、On-page 与 SXO

- 首页价值主张、H1、CTA、功能区、案例/FAQ 结构完整，用户可直接进入生成工具。
- 主题覆盖围绕 Seedance 教程、提示词、镜头、对比与新闻形成集群，方向集中。
- 但大量页面标题过长；模板还统一追加 ` - Seedance`，搜索结果截断风险高。Frontmatter 中已有 268/456 篇博客、132/287 篇指南超过 60 字符。
- description 中 273/456 篇博客、228/287 篇指南超过 160 字符，且存在机械重复的关键词串（Seedance tutorial / prompts / news），需要按搜索意图重写。
- 许多本地化正文非常薄；最短样本不足 100 词。批量翻译页面应先过“有无新增价值”门槛，再决定 index/noindex。
- 文章作者多为 `Seedance` / `Seedance Team`，没有作者详情页、资历、测试方法、编辑规范或更正记录。新闻、产品能力和合规类断言缺少一手来源链接。
- E-E-A-T 专项得分仅 31/100（Experience 7/20、Expertise 10/25、Authoritativeness 5/25、Trustworthiness 9/30）。287/287 篇指南没有 author frontmatter，456 篇博客中 72 篇没有 author。
- 关于页、隐私与条款存在，但联系邮箱是通用 GMX 地址；缺少清晰公司主体、运营者、正式支持域名和所有权声明，Trust 信号偏弱。
- 内容里的“官方入口”“世界第一”“免费额度”“价格不变”等高强度声明需要来源、验证日期和免责声明，避免误导与时效性问题。
- 博客/指南详情页应加入相关文章、上下篇、专题 hub 链接和可见面包屑，降低深层页面成为弱内链节点的概率。

## Schema

检测到：WebSite 864、Organization 864、Article 720、FAQPage 24、SoftwareApplication 24；JSON 解析错误为 0。

- 修正 `SEOHead.astro` 中 Organization logo，从不存在的 `/icon.png` 改为真实 512×512 文件。
- Article 添加 `publisher`，并让 Schema author 与可见作者完全一致；为作者建立可索引 Person/ProfilePage。
- 用单一 `@graph` 和稳定 `@id` 连接 Organization、WebSite、WebPage、Article 与 SoftwareApplication。
- SoftwareApplication 只有在存在真实、可验证价格时加入 Offer；不得虚构 rating/review。
- 首页 FAQ 同时有 JSON-LD 与 Microdata，应只保留 JSON-LD。商业站 FAQ 富结果通常不可得，保留它只能视为语义/GEO 辅助。
- 为博客/指南与索引页加入 BreadcrumbList；About/Privacy/Terms 可分别使用合适的 WebPage 子类。

## Sitemap

- 主 sitemap 覆盖优秀：864/864。
- `sitemap-zh.xml` 与 `sitemap-zh-cn.xml` 内容相同且都在 robots 声明，应保留一份，或真正拆成简繁两份。
- 生成脚本用构建日期作为所有中文 URL 的 lastmod；应改为 frontmatter/Git/CMS 的真实修改时间，无法保证时宁可省略。
- 主 sitemap 没有 lastmod；内容页有可靠日期后可补充。
- `priority` 与 `changefreq` 对 Google 无实际作用，可删除；不要给全部中文页相同的 0.95 优先级。

## 性能与图片

- PageSpeed API 本次超时，且未取得 CrUX，因此不能给出真实 LCP/INP/CLS。
- 代码风险很明确：2947 个 img 全部缺 width/height、无 srcset/sizes、无 decoding=async，只有 72 个 lazy-load。
- 2761 个渲染实例引用 PNG；应优先转 AVIF/WebP 并提供宽度候选。
- 博客列表图片和首页非首屏功能图默认 eager；首屏 LCP 图应 eager + `fetchpriority=high`，其余 lazy。
- Header/Footer 的 40×40 logo 加载约 279 KB 的 1024×1024 PNG；favicon.svg 也约 373 KB，均应压缩/重制。
- 首页 `<video>` 的 src 多处实际为 `.webp`，浏览器会按视频请求失败；若是静态图用 `<picture>/<img>`，若是视频则使用 mp4/webm 和 poster，并提供尺寸。
- Google Analytics 在每页加载，中文页另加百度统计；应在性能实测中量化第三方脚本的 TBT/INP 影响。

## AI Search / GEO

- 优点：内容有问答、表格、分级标题，段落可抽取性尚可；基础 Article 和 Organization schema 已存在。
- 缺失有效 `/llms.txt`；线上当前返回 HTML 200。应发布文本文件，列出站点定位、关键栏目、canonical、内容许可和联系方式。
- 没有明确原创研究、模型测试数据、提示词实验条件、版本号、结果对比或引用清单，答案可引用性弱。
- 建议每篇核心教程加入“适用版本 / 测试日期 / 输入参数 / 输出结果 / 限制 / 来源”，并给关键断言附近放置一手来源链接。
- 可考虑 RSL/内容许可声明，但应先由业务确认训练与抓取政策。

## 数据限制

- 没有 GSC、GA4、Google URL Inspection、CrUX、真实 Lighthouse、SERP/关键词、GBP 或外链数据。
- PageSpeed Insights 调用在 60 秒内超时；性能分数表示代码 readiness，不是 Google 的现场 CWV。
- 线上仅抽查首页、robots、llms 与 logo URL；未在线抓取 864 页，页面覆盖结论来自生产构建产物。
- 本项目不是本地实体业务，也无购物目录，未触发 Local/Maps/E-commerce 专项。
