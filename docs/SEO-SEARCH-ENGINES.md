# 多搜索引擎提交说明（中英兼容）

本站同时面向**中文搜索引擎**（百度、360 等）与**英文/全球搜索引擎**（Google、Bing 等），通过技术配置与不同提交方式实现兼容。

## 一、技术策略概览

| 对象 | 策略 |
|------|------|
| **Google / Bing** | 使用标准 hreflang，`x-default` 指向英文版；提交主 sitemap。 |
| **百度 / 360** | 不依赖 hreflang（百度不识别），依赖页面 `content-language` meta；单独提交「仅中文」sitemap。 |

- **x-default**：保持指向**英文**（根路径或 `/en/`），作为“未匹配语言时的默认版本”，符合 Google/Bing 的推荐用法。
- **百度/360**：通过每个页面的 `<meta http-equiv="content-language" content="zh-CN">`（或对应语言）声明语言；通过单独的中文 sitemap 强化中文收录。

## 二、Sitemap 与提交方式

| 搜索引擎 | 建议提交的 Sitemap | 说明 |
|----------|--------------------|------|
| **Google** | `https://seedance22.com/sitemap-index.xml` | 全站索引，含多语言；Google 依 hreflang 展示对应语言。 |
| **Bing** | `https://seedance22.com/sitemap-index.xml` | 同 Google。 |
| **百度** | `https://seedance22.com/sitemap-zh-cn.xml` | 仅含 `/zh-cn/` URL，便于优先收录中文版。 |
| **360** | `https://seedance22.com/sitemap-zh-cn.xml` | 同百度。 |

- 构建后会在 `dist/` 生成 `sitemap-zh-cn.xml`（仅中文 URL），部署后可通过上述 URL 访问。
- 百度/360 站长平台中可**仅提交** `sitemap-zh-cn.xml`，或同时提交主 sitemap；优先提交中文 sitemap 更利于中文收录。

## 三、站长平台操作建议

1. **百度站长**（ziyuan.baidu.com）  
   - 提交 sitemap：`https://seedance22.com/sitemap-zh-cn.xml`  
   - 可再提交：`https://seedance22.com/sitemap-index.xml`  
   - 使用「链接提交」时，可优先提交重要中文页（如 `https://seedance22.com/zh-cn/`）。

2. **360 站长**（zhanzhang.so.com）  
   - 同上，优先提交 `https://seedance22.com/sitemap-zh-cn.xml`。

3. **Google Search Console**  
   - 提交 `https://seedance22.com/sitemap-index.xml` 即可。

4. **Bing Webmaster**  
   - 提交 `https://seedance22.com/sitemap-index.xml` 即可。

## 四、本仓库中的实现要点

- **SEOHead.astro**：`x-default` 指向英文；为每个页面输出 `<meta http-equiv="content-language" content="...">`（如 zh-CN、en-US）。
- **astro.config.mjs**：主 sitemap 中为 `/zh-cn/` URL 设置较高 priority，便于全站 sitemap 中突出中文。
- **scripts/generate-zh-sitemap.js**：在 `astro build` 之后从主 sitemap 中筛选 `/zh-cn/` 链接，生成 `sitemap-zh-cn.xml`。
- **package.json**：`build` 脚本为 `astro build && node scripts/generate-zh-sitemap.js`，保证每次构建都生成中文 sitemap。

参考：[Baidu and International Websites (Martin Kůra)](https://martinkura.com/baidu-international-websites-hreflang-geographic-target-meta-language-tag/)。
