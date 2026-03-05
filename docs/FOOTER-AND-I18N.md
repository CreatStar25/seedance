# 底部栏与多语种说明

## 1. 多语种文本存储位置

本项目**未使用 ui.ts**，多语种文案存放在 **JSON 文件** 中：

- **路径**：`src/i18n/<locale>.json`（如 `en.json`、`zh-cn.json`）
- **底部栏相关键**：
  - `footer.brand`：品牌区（title、intro、email）
  - `footer.ai_tools`：AI Tools 列（title、links[]，每项 label + href）
  - `footer.ai_video`：AI Video 列（title、links[]）
  - `footer.ai_image`：AI Image 列（title、links[]）
  - `footer.company`：Company 列（title、links[]，每项 label + path，path 为站点内路径名）
  - `footer.copyright`：版权文案
- **关于/隐私/条款页**：
  - `about.title`、`about.description`、`about.heading`、`about.content`
  - `privacy.*`、`terms.*` 同上结构

切换语种时，页面传入的 `t` 会变为对应 locale 的 JSON，Footer 与 about/privacy/terms 页从 `t` 读取上述键，因此**底部栏与法律页的文案会随语种同步切换**；**链接 URL 不变**（外链为固定 href，站内为根据 `lang` 生成的 path）。

## 2. 语种切换时底部栏同步逻辑

- 各页（如 `index.astro`、`[lang]/index.astro`）根据当前路由或 `[lang]` 参数决定 `lang`（如 `en`、`zh-cn`）。
- 页面加载对应翻译：`import(\`../i18n/${lang}.json\`)` 得到 `t`。
- 页面将 **`lang`** 与 **`t`** 传入底部栏：`<Footer lang={lang} t={t} />`。
- Footer 组件用 `t.footer.*` 渲染品牌区与四列（标题、链接文案）；站内链接用 `companyHref(link.path)` 根据 `lang` 生成 `/about/` 或 `/${lang}/about/` 等。
- 因此：**切换语种 → 路由变为 /zh-cn/ 等 → 该页加载 zh-cn.json → 同一 Footer 收到新的 t → 标题与链接文案变为中文，链接仍指向正确 URL。**

## 3. 底部栏链接与目标 URL 对照表

| 列 | 文案（示例） | 目标 URL |
|----|--------------|----------|
| **AI Tools** | LimaxAI | https://www.limaxai.com/ |
| | Suno | https://suno.hk/ |
| | deepseek 4 | https://deepseek4.hk/ |
| | Notebooklm | https://notebooklm.vip/ |
| | Openclaw | https://openclawd.hk/ |
| | Gemini 3.0 | https://gemini3.hk/ |
| **AI Video** | Seedance 2.0 | https://seedance22.com/ |
| | Seedance 1.5 | https://seedance2.hk/ |
| | Veo 3.1 / Veo 3 | https://veo3.hk/ |
| | Sora / Sora 2 | https://www.limaxai.com/generate/video-tools/so |
| **AI Image** | Midjourney | https://www.limaxai.com/generate/image-tools/mjpro |
| | Nano Banana 2 | https://nanobananapro.hk/ |
| | Nano Banana Pro | https://nanobanana-pro.vip/ |
| | Nano Banana 3 | https://nanobanana3.top/ |
| **Company** | Blog | 站点 `/en/blog/` 或 `/${lang}/blog/` |
| | About | 站点 `/about/`（en）或 `/${lang}/about/` |
| | Privacy | 站点 `/privacy/` 或 `/${lang}/privacy/` |
| | Terms | 站点 `/terms/` 或 `/${lang}/terms/` |

外链均 `target="_blank"`、`rel="noopener noreferrer"`；站内链接为相对路径，与当前部署域名一致。

## 4. 缺失 locale 的 fallback

- **Footer**：若某 locale 的 JSON 中无 `footer.brand`（仍为旧 product/resources 结构），组件内使用默认英文品牌与四列链接（见 `Footer.astro` 中 `defaultBrand`、`defaultColumns`），保证四列均有内容。
- **About / Privacy / Terms**：若某 locale 的 JSON 中无 `about` / `privacy` / `terms`，`[lang]/about.astro` 等会合并 `en.json` 的对应键，页面显示英文内容。
