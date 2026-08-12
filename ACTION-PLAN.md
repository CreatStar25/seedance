# Seedance22 SEO 整改行动计划

审计基线：2026-08-12，SEO Health Score 51/100。

## Critical：立即处理

当前未发现全站 robots/noindex、canonical 灾难或 sitemap 大面积缺页这类纯索引阻断项。以下问题虽然列为 High，但建议按事故优先级立即开始。

## High：1 周内

1. **消除内容集合重复 ID。** 升级/重构 Astro content collection 定义，移除产生重复 ID 的 slug 逻辑或迁移到正确 loader；构建必须达到 0 个 Duplicate id warning。完成后对 864 路径做 canonical/hreflang/sitemap 全量一致性测试。
2. **修复软 404。** 部署真实 `public/llms.txt`；把 Organization logo 指向真实文件；配置未知 URL 和缺失资源返回 404，而不是首页 HTML 200。
3. **修正全站 Schema 实体。** Article 加 publisher；作者数据与页面一致；用稳定 `@id/@graph` 连接实体；验证所有 sameAs。
4. **修复图片尺寸与加载策略。** 所有模板图片添加真实 width/height；首屏 LCP 图使用高优先级，其余 lazy + async；博客卡片引入 srcset/sizes。
5. **内容质量闸门。** 统计所有 indexable 页字数、语言质量、重复率与来源。薄且无新增价值的翻译先 noindex/撤出 sitemap；优先重写核心英文、中文及有搜索需求的市场页面。
6. **修复媒体标签。** 不再把 webp 放入 video src；静态素材使用 picture/img，动态素材使用 webm/mp4 + poster。

验收标准：构建无重复 ID；未知 URL 404；Schema logo 200 image/*；核心模板 CLS 占位完整；高优先级内容全部通过人工事实与语言 QA。

## Medium：30 天内

1. 重写过长 title（目标约 30–60 字符）与 description（约 120–160 字符），每页映射单一主意图，避免机械关键词串。
2. 建立实名作者页、资历、编辑政策、事实核验/更正流程；文章显示发布日期与真实修改日期。
3. 为“官方、第一、价格、免费额度、能力边界、合规”类断言补一手来源、核验日期和限定语。
4. 为博客与指南建立 hub、相关文章、面包屑和上下篇；实现 BreadcrumbList。
5. 只保留一个中文 sitemap，或按 zh-CN/zh-TW 真拆分；使用真实 lastmod，移除无效 priority/changefreq。
6. 将 CDN PNG 批量转 AVIF/WebP，准备 320/640/960/1280 等响应式宽度；优化 40×40 logo 和超大 favicon。
7. 修复 `test:blog` / `test:multilang`，让测试匹配根英文 URL 与 `en` hreflang 策略，并加入：互惠 hreflang、canonical 自引用、404、Schema 解析、sitemap 双向覆盖。
8. 补充有效 llms.txt、内容许可与核心栏目清单；教程增加可引用摘要、测试条件、版本、限制与来源。

## Low：季度优化

1. 在 GSC/GA4 接入后按 impressions、CTR、索引状态和转化淘汰低价值语言/主题页。
2. 用 CrUX/PSI 监测移动端 LCP ≤2.5s、INP ≤200ms、CLS ≤0.1；分别建立首页、列表、详情模板预算。
3. 验证并补齐 HSTS/CSP/Permissions-Policy；优化 Cloudflare 静态缓存。
4. 对真实视频内容补 VideoObject（仅在有 thumbnail、uploadDate、duration、content/embed URL 时）。
5. 建立季度内容刷新、过时断言与坏外链巡检。

## 建议实施顺序

第 1–2 天：重复 ID、404/llms/logo、Schema 作者/出版者。  
第 3–5 天：图片尺寸/媒体语义、响应式图片、测试基线。  
第 2–4 周：内容清理与重写、作者体系、内链与 sitemap lastmod。  
持续：接入 GSC/GA4/CrUX，以实际曝光、索引与转化验证整改收益。
