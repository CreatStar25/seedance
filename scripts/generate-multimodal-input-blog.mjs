/**
 * Generates blog: seedance-2-0-multimodal-input-guide × 24 locales
 * Run: node scripts/generate-multimodal-input-blog.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogRoot = path.join(__dirname, "../src/content/blog");

const SLUG = "seedance-2-0-multimodal-input-guide";
const KEY = "seedance-2-0-multimodal-input-guide";
const PUB = "2026-05-26";
const IMG = "https://img.seedance22.com/aiweb/seedance-260526-1.png";

const locales = [
  "en", "zh-cn", "zh-tw", "es", "ar", "pt", "id", "ms", "fr", "ru", "hi", "ja", "de", "ko", "tr", "vi", "th", "it", "fa", "nl", "pl", "sv", "uk", "ro",
];

const ctaLabel = {
  en: "Get Started with Seedance 2.0",
  "zh-cn": "开始使用Seedance 2.0",
  "zh-tw": "開始使用Seedance 2.0",
  es: "Empieza con Seedance 2.0",
  ar: "ابدأ استخدام Seedance 2.0",
  pt: "Comece a usar Seedance 2.0",
  id: "Mulai menggunakan Seedance 2.0",
  ms: "Mula menggunakan Seedance 2.0",
  fr: "Commencer avec Seedance 2.0",
  ru: "Начать использовать Seedance 2.0",
  hi: "Seedance 2.0 का उपयोग शुरू करें",
  ja: "Seedance 2.0 を始める",
  de: "Mit Seedance 2.0 starten",
  ko: "Seedance 2.0 시작하기",
  tr: "Seedance 2.0 ile Başlayın",
  vi: "Bắt đầu với Seedance 2.0",
  th: "เริ่มใช้ Seedance 2.0",
  it: "Inizia con Seedance 2.0",
  fa: "شروع استفاده از Seedance 2.0",
  nl: "Aan de slag met Seedance 2.0",
  pl: "Rozpocznij z Seedance 2.0",
  sv: "Kom igång med Seedance 2.0",
  uk: "Почніть використовувати Seedance 2.0",
  ro: "Începe cu Seedance 2.0",
};

function cta(lang) {
  return `<div style="text-align:center; margin: 2rem 0;">
  <a href="https://app.seedance22.com/${lang}/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">${ctaLabel[lang]}</a>
</div>`;
}

/** @type {Record<string, { title: string; description: string; tags: string[]; alt: string; related: string; body: string }>} */
const ART = {
  "zh-cn": {
    title: "Seedance 2.0多模态输入能力全面解析",
    description: "详解 Seedance 2.0 文本、图片、音频、视频四种模态输入与 @ 引用系统，最多 12 个参考文件。Seedance 教程入门，中文版用户可直接上手多模态 AI 视频创作。",
    tags: ["Seedance 2.0", "Seedance 教程", "Seedance 中文版"],
    alt: "Seedance 2.0多模态输入能力全面解析",
    related: "**相关检索**：Seedance 2.0、Seedance 教程、Seedance 中文版、多模态 AI 视频、@ 引用提示词。",
    body: `如果你还在用「纯文字提示词 + 反复抽卡」的方式做 AI 视频，很可能已经错过了 **Seedance 2.0** 的核心升级。Seedance 2.0 采用统一的多模态音视频联合生成架构，支持文字、图片、音频、视频四种模态混合输入，最多可同时上传 **12 个参考文件**（9 张图片 + 3 段视频 + 3 段音频 + 自然语言指令）。对需要控制角色形象、运镜节奏和音画同步的创作者来说，多模态输入不是锦上添花，而是能直接决定成片质量的关键能力。

![Seedance 2.0多模态输入能力全面解析](${IMG})

本文按 **Seedance 教程** 的写法，把四种模态输入、@ 引用系统和常见落地场景拆开讲清楚，方便 **Seedance 中文版** 用户快速上手。

## 一、为什么多模态输入成了刚需

过去很多 AI 视频工具只接受文字。你描述得越细，模型猜得越多——角色长什么样、镜头怎么动、配乐什么节奏，全靠运气。实际做片时，创作者手里往往已经有定妆照、参考片段、BGM 或旁白，这些素材没法直接喂给模型，只能反复改 prompt 碰概率。

**Seedance 2.0** 把四种模态放在同一套生成链路里：模型可以同时读取文本语义、图片视觉特征、视频运镜与动作、音频节奏与音色，再按你的指令把它们组合成一段带原生音轨的视频。相比 1.5 版本，复杂交互和运动场景的可用率更高，也更贴近广告、短剧、社媒等工业级需求。

## 二、四种模态输入能力详解

### 2.1 文本输入：把创作意图说清楚

文本仍然是最基础的输入方式，但 Seedance 2.0 对长指令、分镜描述和风格关键词的理解明显更强。你可以：

- 写完整的场景叙事（主体、环境、动作、镜头、风格）；
- 用分镜式描述指定多镜头结构；
- 配合 **@** 引用，告诉模型每个素材该起什么作用。

示例：「@Image1 作为主角面部参考，@Video1 参考跟拍运镜，@Audio1 作为背景音乐，主角在霓虹灯夜市中穿行，镜头从背后跟随，最后转身面向镜头微笑。」

### 2.2 图片输入：锁定角色与视觉风格

图片是最常用的参考模态。上传定妆照、场景板、品牌 VI 或风格样图后，模型能提取面部特征、服装纹理、色调与构图，并在多镜头中尽量保持一致。

| 典型用途 | 说明 |
| :--- | :--- |
| 角色定妆 | 1:1 复刻面部与服装，跨镜头保持形象稳定 |
| 场景参考 | 固定环境风格、光影与色调 |
| 风格样图 | 统一广告、电商物料的视觉调性 |
| 首帧控制 | 指定视频开场画面构图 |

最多支持 **9 张图片**，常见格式包括 JPG、PNG、WebP。

### 2.3 音频输入：节奏、对白与氛围

Seedance 2.0 支持上传音频素材，也支持在生成流程中输出原生音轨。音频输入主要用于：

- **背景音乐**：模型参考 BGM 节奏做剪辑与画面起伏；
- **旁白/对白**：驱动口型同步（支持普通话、粤语、英语等多种语言）；
- **环境音效**：强化场景氛围。

最多 **3 段音频**，总长建议控制在 15 秒以内，格式支持 MP3、WAV、M4A 等。

### 2.4 视频输入：运镜与动作的可视化参考

上传参考视频后，模型可以提取镜头运动、人物动作、节奏和特效风格，而不必用大量文字去「翻译」画面。典型场景包括：

- 参考某段跟拍、环绕、推拉镜头；
- 复刻舞蹈或动作编排；
- 基于已有片段补全缺失场景或延长叙事。

最多 **3 段视频**，单段与总时长均有限制（通常 ≤ 15 秒），格式支持 MP4、MOV。

## 三、@ 引用系统：给每个素材分配任务

Seedance 2.0 的 **@ 引用** 是多模态输入真正好用的关键。上传素材后，在 prompt 里用 \`@Image1\`、\`@Video1\`、\`@Audio1\` 等标记，明确每个文件的职责，避免模型自行猜测。

| 引用标记 | 常见用途 |
| :--- | :--- |
| @Image1 | 角色面部 / 服装 / 场景 |
| @Video1 | 运镜方式 / 动作节奏 |
| @Audio1 | 背景音乐 / 旁白口型 |
| 文本指令 | 叙事主线、风格、时长 |

**组合示例**（图片 + 视频 + 音频）：

\`\`\`
全程采用 @Video1 的第一人称构图。
@Audio1 作为背景音乐，剪辑与鼓点对齐。
@Image1 中的角色走过霓虹灯夜市，镜头从背后跟随，
在 @Video1 的运动风格下停步、转身、微笑。
电影感夜景，饱和色彩，浅景深。
\`\`\`

每个 @ 都有明确分工，生成结果的可控性会高很多。

## 四、核心规格一览

| 项目 | 规格 |
| :--- | :--- |
| 输入模态 | 文本 + 图片 + 视频 + 音频 |
| 参考文件上限 | 共 12 个（9 图 + 3 视频 + 3 音频） |
| 视频时长 | 4–15 秒 |
| 分辨率 | 480p / 720p / 1080p（Pro 模式支持 2K） |
| 宽高比 | 16:9、9:16、1:1、4:3、3:4、21:9 |
| 音频 | 原生音画同步，多语言口型 |
| 帧率 | 24fps |

## 五、三类常见落地场景

### 5.1 短视频与社媒内容

运营团队常需要同一 IP、同一视觉风格批量出片。用图片锁定角色，用视频参考固定镜头语言，用文本写不同脚本，可以在同一套资产下快速迭代，减少「抽卡」次数。

### 5.2 品牌营销物料

品牌对 VI 一致性要求高。上传 LOGO、主视觉和风格板，配合文本指令生成系列短视频或广告片段，比纯文字生成更容易保持调性统一。

### 5.3 教育与知识类视频

上传课程旁白或讲解音频，模型可生成匹配口型的画面；再补场景参考图，就能较低成本产出多模态教学内容。

## 六、上手建议：四步工作流

1. **先定目标**：明确成片类型（广告 / 短剧 / 社媒）、时长和画幅。
2. **备齐参考**：角色图、运镜参考、BGM 按需准备，不必每次塞满 12 个文件。
3. **写 prompt + @**：先叙事，再逐个绑定素材职责，避免矛盾指令。
4. **小步迭代**：先生成 4–6 秒验证角色与运镜，满意后再加长到 10–15 秒。

## 常见问题

**Q：四种模态必须同时用吗？**  
A：不必。可以纯文字生成，也可以只加 1–2 张图片。多模态是按需组合，不是硬性要求。

**Q：@ 引用序号怎么对应？**  
A：按上传顺序，第一张图为 @Image1，第一段视频为 @Video1，以此类推。建议在 prompt 里写清楚，不要跳号。

**Q：图片参考能保证 100% 一致吗？**  
A：多镜头一致性已明显优于纯文字方案，但在复杂多人、大角度转面等场景仍可能有偏差，建议固定测试集迭代。

**Q：音频上传后会直接出现在成片里吗？**  
A：可以。模型既参考音频节奏，也支持原生生成对白、音效与配乐，具体取决于你的指令与模式设置。

---

想亲自验证多模态输入的效果，可以直接在站点里上传参考素材试一轮。下面入口进入 **Seedance 2.0** 生成页，支持 **Seedance 中文版** 界面与完整多模态工作流。

---

${cta("zh-cn")}

${""}${""}`,
  },
};

// English base — other locales derive structure from this pattern
ART.en = {
  title: "Seedance 2.0 Multimodal Input: A Complete Breakdown",
  description: "Explore Seedance 2.0 text, image, audio, and video inputs, the @ reference system, and up to 12 reference files. A practical Seedance tutorial for multimodal AI video creation.",
  tags: ["Seedance 2.0", "Seedance Tutorial", "Seedance Chinese Version"],
  alt: "Seedance 2.0 Multimodal Input Complete Breakdown",
  related: "**Related searches**: Seedance 2.0, Seedance tutorial, Seedance Chinese version, multimodal AI video, @ reference prompts.",
  body: `If you are still making AI video with "text-only prompts and endless rerolls," you are likely missing the core upgrade in **Seedance 2.0**. Built on a unified multimodal audio-video architecture, Seedance 2.0 accepts text, images, audio, and video in a single workflow—up to **12 reference files** at once (9 images + 3 videos + 3 audio tracks + natural-language instructions). For creators who need control over character look, camera motion, and AV sync, multimodal input is not a nice-to-have—it directly affects output quality.

![Seedance 2.0 Multimodal Input Complete Breakdown](${IMG})

This **Seedance tutorial** walks through all four input modalities, the @ reference system, and common production scenarios so you can start quickly—even via the **Seedance Chinese version** interface.

## 1. Why Multimodal Input Matters Now

Many earlier tools accepted text only. The finer your description, the more the model had to guess—character appearance, camera moves, music tempo. In real projects, teams already have look frames, reference clips, BGM, or voiceover that could not be fed directly into the model.

**Seedance 2.0** puts four modalities on one generation path: the model reads text semantics, image visuals, video motion and camera language, and audio rhythm together, then outputs video with native audio tracks. Compared with 1.5, complex interaction and motion scenes are more usable and closer to ad, short-drama, and social workflows.

## 2. Four Input Modalities Explained

### 2.1 Text: State Your Intent Clearly

Text remains the foundation, but Seedance 2.0 handles long instructions, shot lists, and style keywords much better. You can:

- Write full scene narratives (subject, environment, action, camera, style);
- Use storyboard-style multi-shot descriptions;
- Pair with **@** references to assign each asset a role.

Example: "@Image1 for the lead's face, @Video1 for follow-cam motion, @Audio1 as background music—the character walks through a neon night market, camera follows from behind, then turns to smile at lens."

### 2.2 Images: Lock Character and Visual Style

Images are the most common reference type. Upload look frames, scene boards, brand VI, or style plates—the model extracts face, wardrobe, color, and composition and keeps them relatively stable across shots.

| Typical Use | Notes |
| :--- | :--- |
| Character look | Replicate face and outfit across shots |
| Scene reference | Fix environment, lighting, and palette |
| Style plate | Unify ad and e-commerce visuals |
| First frame | Control opening composition |

Up to **9 images**; JPG, PNG, WebP supported.

### 2.3 Audio: Rhythm, Dialogue, and Mood

Seedance 2.0 accepts uploaded audio and can output native synchronized tracks. Audio input is used for:

- **Background music**: beat-synced editing and pacing;
- **Voiceover/dialogue**: lip-sync (Mandarin, Cantonese, English, and more);
- **Ambient SFX**: stronger scene atmosphere.

Up to **3 audio tracks**, total length typically within 15 seconds; MP3, WAV, M4A supported.

### 2.4 Video: Visual Reference for Camera and Motion

Upload reference clips and the model extracts camera movement, body motion, rhythm, and VFX style—without translating everything into text. Common cases:

- Follow, orbit, dolly, or push-pull camera references;
- Dance or action choreography;
- Extend or complete scenes from existing footage.

Up to **3 videos**, per-clip and total duration limits (typically ≤ 15s); MP4, MOV supported.

## 3. The @ Reference System: Assign Every Asset a Job

**@ references** are what make multimodal input practical. After upload, mark \`@Image1\`, \`@Video1\`, \`@Audio1\` in your prompt so the model knows each file's role instead of guessing.

| Tag | Common Role |
| :--- | :--- |
| @Image1 | Face / wardrobe / scene |
| @Video1 | Camera motion / action tempo |
| @Audio1 | BGM / lip-sync voiceover |
| Text | Story, style, duration |

**Combo example** (image + video + audio):

\`\`\`
Use @Video1 first-person framing throughout.
@Audio1 as background music, edits on the beat.
Character from @Image1 walks a neon night market, camera follows from behind,
matching movement style in @Video1—pause, turn, smile.
Cinematic night look, rich color, shallow depth of field.
\`\`\`

Clear @ roles dramatically improve controllability.

## 4. Core Specs at a Glance

| Item | Spec |
| :--- | :--- |
| Input modalities | Text + image + video + audio |
| Reference file cap | 12 total (9 images + 3 videos + 3 audio) |
| Clip length | 4–15 seconds |
| Resolution | 480p / 720p / 1080p (Pro up to 2K) |
| Aspect ratios | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Audio | Native AV sync, multilingual lip-sync |
| Frame rate | 24fps |

## 5. Three Common Production Scenarios

### 5.1 Short-Form and Social Content

Teams often need volume with the same IP and look. Lock character with images, camera language with video references, and vary scripts in text—iterate faster with fewer rerolls.

### 5.2 Brand Marketing Assets

Brands demand VI consistency. Upload logo, key visuals, and style boards plus text prompts to generate ad or social clips with unified tone—more reliable than text-only generation.

### 5.3 Education and Knowledge Video

Upload lecture or narration audio for lip-synced visuals; add scene reference images for low-cost multimodal teaching content.

## 6. Getting Started: A Four-Step Workflow

1. **Define the deliverable**: ad, short drama, social clip; duration and aspect ratio.
2. **Prepare references**: character, camera, BGM as needed—you do not need all 12 files every time.
3. **Write prompt + @**: story first, then bind each asset; avoid conflicting instructions.
4. **Iterate small**: generate 4–6s to validate character and camera, then extend to 10–15s.

## FAQ

**Q: Must I use all four modalities?**  
A: No. Text-only works; one or two images are fine. Mix as needed.

**Q: How do @ numbers map?**  
A: By upload order—first image is @Image1, first video @Video1, etc. Keep numbering consistent in the prompt.

**Q: Do images guarantee 100% consistency?**  
A: Multi-shot consistency beats text-only by a wide margin, but complex multi-subject or extreme angle changes can still drift—use a fixed test set.

**Q: Does uploaded audio appear in the final clip?**  
A: The model can follow audio rhythm and also generate native dialogue, SFX, and music depending on your prompt and mode.

---

Ready to test multimodal input yourself? Use the entry below to open **Seedance 2.0**—full multimodal workflow, including the **Seedance Chinese version** UI.

---

${cta("en")}

**Related searches**: Seedance 2.0, Seedance tutorial, Seedance Chinese version, multimodal AI video, @ reference prompts.`,
};

// Fix zh-cn related line
ART["zh-cn"].body = ART["zh-cn"].body.replace(
  `${cta("zh-cn")}\n\n${""}${""}`,
  `${cta("zh-cn")}\n\n${ART["zh-cn"].related}`
);

// zh-tw
const zhTwRelated = "**相關檢索**：Seedance 2.0、Seedance 教程、Seedance 中文版、多模態 AI 影片、@ 引用提示詞。";
ART["zh-tw"] = {
  title: "Seedance 2.0 多模態輸入能力全面解析",
  description: "詳解 Seedance 2.0 文字、圖片、音訊、影片四種模態輸入與 @ 引用系統，最多 12 個參考檔。Seedance 教程入門，中文版介面可直接上手多模態 AI 影片創作。",
  tags: ["Seedance 2.0", "Seedance 教程", "Seedance 中文版"],
  alt: "Seedance 2.0 多模態輸入能力全面解析",
  related: zhTwRelated,
  body: ART["zh-cn"].body
    .replace(/如果你还在用「纯文字提示词 \+ 反复抽卡」的方式做 AI 视频，很可能已经错过了 \*\*Seedance 2\.0\*\* 的核心升级。Seedance 2\.0 采用统一的多模态音视频联合生成架构，支持文字、图片、音频、视频四种模态混合输入，最多可同时上传 \*\*12 个参考文件\*\*（9 张图片 \+ 3 段视频 \+ 3 段音频 \+ 自然语言指令）。对需要控制角色形象、运镜节奏和音画同步的创作者来说，多模态输入不是锦上添花，而是能直接决定成片质量的关键能力。/,
      "若你仍用「純文字提示詞 + 反覆抽卡」做 AI 影片，可能已錯過 **Seedance 2.0** 的核心升級。Seedance 2.0 採用統一的多模態音視訊聯合生成架構，支援文字、圖片、音訊、影片四種模態混合輸入，最多可同時上傳 **12 個參考檔**（9 張圖片 + 3 段影片 + 3 段音訊 + 自然語言指令）。對需控制角色形象、運鏡節奏與音畫同步的創作者，多模態輸入直接決定成片品質。")
    .replace(/Seedance 2\.0多模态输入能力全面解析/g, "Seedance 2.0 多模態輸入能力全面解析")
    .replace(/本文按 \*\*Seedance 教程\*\* 的写法，把四种模态输入、@ 引用系统和常见落地场景拆开讲清楚，方便 \*\*Seedance 中文版\*\* 用户快速上手。/, "本文依 **Seedance 教程** 寫法，拆解四種模態輸入、@ 引用系統與常見落地場景，方便 **Seedance 中文版** 用戶快速上手。")
    .replace(/## 一、为什么多模态输入成了刚需/, "## 一、為什麼多模態輸入成了剛需")
    .replace(/过去很多 AI 视频工具只接受文字。你描述得越细，模型猜得越多——角色长什么样、镜头怎么动、配乐什么节奏，全靠运气。实际做片时，创作者手里往往已经有定妆照、参考片段、BGM 或旁白，这些素材没法直接喂给模型，只能反复改 prompt 碰概率。/, "過去許多 AI 影片工具只接受文字。描述越細，模型猜得越多——角色長相、鏡頭運動、配樂節奏全靠運氣。實務上創作者常已有定妝照、參考片段、BGM 或旁白，卻無法直接餵給模型。")
    .replace(/## 二、四种模态输入能力详解/, "## 二、四種模態輸入能力詳解")
    .replace(/### 2\.1 文本输入：把创作意图说清楚/, "### 2.1 文字輸入：把創作意圖說清楚")
    .replace(/### 2\.2 图片输入：锁定角色与视觉风格/, "### 2.2 圖片輸入：鎖定角色與視覺風格")
    .replace(/### 2\.3 音频输入：节奏、对白与氛围/, "### 2.3 音訊輸入：節奏、對白與氛圍")
    .replace(/### 2\.4 视频输入：运镜与动作的可视化参考/, "### 2.4 影片輸入：運鏡與動作的可視化參考")
    .replace(/## 三、@ 引用系统：给每个素材分配任务/, "## 三、@ 引用系統：為每個素材分配任務")
    .replace(/## 四、核心规格一览/, "## 四、核心規格一覽")
    .replace(/## 五、三类常见落地场景/, "## 五、三類常見落地場景")
    .replace(/## 六、上手建议：四步工作流/, "## 六、上手建議：四步工作流")
    .replace(/## 常见问题/, "## 常見問題")
    .replace(cta("zh-cn"), cta("zh-tw"))
    .replace(ART["zh-cn"].related, zhTwRelated),
};

// For remaining 21 locales: use English body with localized frontmatter + CTA + localized section headers via full translations
const localeBodies = {
  ja: `まだ「テキストだけのプロンプト + 何度も抽選」で AI 動画を作っているなら、**Seedance 2.0** の核心アップグレードを見逃している可能性があります。Seedance 2.0 は統一されたマルチモーダル音声動画アーキテクチャ上に構築され、テキスト・画像・音声・動画を 1 つのワークフローで受け付け、最大 **12 個の参照ファイル**（画像 9 + 動画 3 + 音声 3 + 自然言語指示）を同時に扱えます。

![Seedance 2.0 マルチモーダル入力の完全解説](${IMG})

本 **Seedance 教程**（チュートリアル）では、4 つの入力モダリティ、@ 参照システム、実践シーンを整理し、**Seedance 中文版** インターフェースからもすぐ始められます。

## 1. マルチモーダル入力が必要な理由

従来ツールはテキストのみが多く、キャラ外見・カメラ・BGM テンポはモデルの推測任せ。**Seedance 2.0** は 4 モダリティを 1 本の生成パイプラインに統合し、広告・ショートドラマ・SNS 向けの工业级ニーズに近づきます。

## 2. 4 つの入力モダリティ

### 2.1 テキスト：意図を明確に

長い指示、ショットリスト、スタイルキーワードに強い。**@** と組み合わせて各素材の役割を指定。

### 2.2 画像：キャラとビジュアルを固定

| 用途 | 説明 |
| :--- | :--- |
| キャラルック | 顔・衣装の一貫性 |
| シーン参考 | 環境・光・色調 |
| スタイル板 | 広告・EC の統一感 |
| 先頭フレーム | 開始構図の制御 |

最大 **9 枚**（JPG / PNG / WebP）。

### 2.3 音声：リズム・セリフ・雰囲気

BGM のビート同期、ナレーション口型（中国語・英語など）、環境 SE。最大 **3 トラック**。

### 2.4 動画：カメラと動作の参照

フォロー、オービット、ダンス参照、シーン拡張。最大 **3 本**（通常各 ≤15 秒）。

## 3. @ 参照システム

\`@Image1\` \`@Video1\` \`@Audio1\` で各ファイルの役割を明示。推測に頼らず制御性が向上します。

## 4. 主要スペック

| 項目 | 仕様 |
| :--- | :--- |
| 入力 | テキスト + 画像 + 動画 + 音声 |
| 参照上限 | 合計 12（9 図 + 3 動画 + 3 音声） |
| 長さ | 4–15 秒 |
| 解像度 | 480p / 720p / 1080p（Pro は 2K） |
| 音声 | ネイティブ AV 同期、多言語リップシンク |

## 5. よくあるシーン

短尺 SNS、ブランドマーケ、教育コンテンツ——画像でキャラ固定、動画でカメラ言語、テキストで脚本差し替え。

## 6. 四ステップ

1. 成果物を定義 2. 参照素材を準備 3. プロンプト + @ 4. 4–6 秒で検証後に延長

## FAQ

**Q: 4 モダリティ全部必須？** A: いいえ。テキストのみ、画像 1–2 枚でも可。

**Q: @ の番号は？** A: アップロード順。@Image1 が最初の画像。

---

下のボタンから **Seedance 2.0** を開き、マルチモーダルワークフローを試してください。

---

${cta("ja")}

**関連検索**: Seedance 2.0、Seedance 教程、Seedance 中文版、マルチモーダル AI 動画。`,

  es: `Si aún haces vídeo IA con «solo texto y rerolls infinitos», probablemente te pierdes la mejora central de **Seedance 2.0**. Acepta texto, imágenes, audio y vídeo en un solo flujo—hasta **12 archivos de referencia** (9 imágenes + 3 vídeos + 3 audios + instrucciones).

![Análisis completo de entrada multimodal Seedance 2.0](${IMG})

Este **tutorial Seedance** explica las cuatro modalidades, el sistema @ y escenarios reales, también accesible en la **versión china de Seedance**.

## 1. Por qué importa la entrada multimodal

Herramientas antiguas solo aceptaban texto; apariencia, cámara y BGM eran adivinanzas. **Seedance 2.0** unifica cuatro modalidades en una tubería de generación.

## 2. Cuatro modalidades

### 2.1 Texto
Instrucciones largas, storyboards, palabras clave de estilo; combina con **@**.

### 2.2 Imágenes
| Uso | Notas |
| :--- | :--- |
| Personaje | Rostro y vestuario consistentes |
| Escena | Entorno y paleta |
| Estilo | VI de marca |
| Primer fotograma | Composición inicial |

Hasta **9 imágenes** (JPG, PNG, WebP).

### 2.3 Audio
Música de fondo, voz en off con lip-sync, SFX. Hasta **3 pistas**.

### 2.4 Vídeo
Referencia de cámara, coreografía, extensión de escena. Hasta **3 clips**.

## 3. Sistema @

Marca \`@Image1\`, \`@Video1\`, \`@Audio1\` para asignar roles y reducir adivinanzas.

## 4. Especificaciones

| Ítem | Spec |
| :--- | :--- |
| Modalidades | Texto + imagen + vídeo + audio |
| Límite | 12 archivos |
| Duración | 4–15 s |
| Resolución | 480p–1080p (Pro 2K) |
| Audio | AV nativo, lip-sync multilingüe |

## 5. Escenarios

Contenido social, marketing de marca, vídeo educativo.

## 6. Flujo en cuatro pasos

Define entregable → prepara referencias → prompt + @ → itera en 4–6 s antes de alargar.

## FAQ

**¿Debo usar las cuatro modalidades?** No, combina según necesidad.

**¿Cómo mapean los @?** Por orden de subida.

---

Prueba la entrada multimodal con el botón inferior.

---

${cta("es")}

**Búsquedas relacionadas**: Seedance 2.0, tutorial Seedance, versión china Seedance, vídeo IA multimodal.`,
};

// Generate remaining locales from English template with localized meta + CTA
const metaOnly = {
  "zh-tw": ART["zh-tw"],
  ja: {
    title: "Seedance 2.0 マルチモーダル入力能力の完全解説",
    description: "Seedance 2.0 のテキスト・画像・音声・動画入力と @ 参照システム、最大12参照ファイルを解説。Seedance 教程でマルチモーダル AI 動画制作を始めよう。",
    tags: ["Seedance 2.0", "Seedance 教程", "Seedance 中文版"],
    alt: "Seedance 2.0 マルチモーダル入力能力の完全解説",
    body: localeBodies.ja,
  },
  es: {
    title: "Seedance 2.0: análisis completo de entrada multimodal",
    description: "Texto, imagen, audio y vídeo en Seedance 2.0, sistema @ y hasta 12 referencias. Tutorial Seedance para crear vídeo IA multimodal desde cero.",
    tags: ["Seedance 2.0", "Tutorial Seedance", "Versión china Seedance"],
    alt: "Análisis completo de entrada multimodal Seedance 2.0",
    body: localeBodies.es,
  },
};

// Helper to build from English with replacements for major languages
function fromEn(lang, { title, description, tags, alt, bodyOverride }) {
  return {
    title,
    description,
    tags,
    alt,
    body: bodyOverride ?? ART.en.body.replace(cta("en"), cta(lang)).replace(
      "**Related searches**: Seedance 2.0, Seedance tutorial, Seedance Chinese version, multimodal AI video, @ reference prompts.",
      ctaLabel[lang] ? `**Related searches**: Seedance 2.0, Seedance tutorial, Seedance Chinese version, multimodal AI video.` : ""
    ),
  };
}

const allMeta = {
  ...metaOnly,
  ar: fromEn("ar", {
    title: "Seedance 2.0: تحليل شامل لقدرات الإدخال متعدد الوسائط",
    description: "شرح إدخال النص والصورة والصوت والفيديو في Seedance 2.0، نظام @ وحتى 12 ملف مرجعي. دليل Seedance لإنشاء فيديو AI متعدد الوسائط.",
    tags: ["Seedance 2.0", "دليل Seedance", "النسخة الصينية Seedance"],
    alt: "تحليل شامل لقدرات الإدخال متعدد الوسائط Seedance 2.0",
    bodyOverride: ART.en.body.replace(cta("en"), cta("ar")).replace("If you are still making AI video", "إذا كنت ما زلت تصنع فيديو AI").replace("This **Seedance tutorial**", "هذا **دليل Seedance**").replace("**Related searches**", "**عمليات بحث ذات صلة**"),
  }),
  pt: fromEn("pt", {
    title: "Seedance 2.0: análise completa da entrada multimodal",
    description: "Texto, imagem, áudio e vídeo no Seedance 2.0, sistema @ e até 12 referências. Tutorial Seedance para vídeo IA multimodal.",
    tags: ["Seedance 2.0", "Tutorial Seedance", "Versão chinesa Seedance"],
    alt: "Análise completa da entrada multimodal Seedance 2.0",
    bodyOverride: localeBodies.es.replace(/es/g, "pt").replace(cta("es"), cta("pt")).replace(/vídeo/g, "vídeo").replace(/tutorial Seedance/g, "tutorial Seedance"),
  }),
};

// Simpler approach: write full files for zh-cn, en, zh-tw, ja, es manually; for others use English body with localized frontmatter + CTA
function yaml(fm) {
  return `---
title: ${JSON.stringify(fm.title)}
description: ${JSON.stringify(fm.description)}
tags: ${JSON.stringify(fm.tags)}
pubDate: ${JSON.stringify(PUB)}
heroImage: ${JSON.stringify(IMG)}
author: "Seedance"
translationKey: ${JSON.stringify(KEY)}
lang: ${JSON.stringify(fm.lang)}
---

`;
}

const fullArticles = {
  "zh-cn": ART["zh-cn"],
  en: ART.en,
  "zh-tw": ART["zh-tw"],
  ja: metaOnly.ja,
  es: metaOnly.es,
};

// Extended translations for remaining languages - compact but complete structure
const compact = (lang, title, description, tags, intro, relatedLabel) => {
  const L = ctaLabel[lang];
  return `${intro}

![${title}](${IMG})

## ${lang === "de" ? "1. Warum multimodale Eingabe wichtig ist" : lang === "ko" ? "1. 멀티모달 입력이 중요한 이유" : "1. Why multimodal input matters"}

**Seedance 2.0** accepts text, images, audio, and video in one workflow—up to **12 reference files** (9 images + 3 videos + 3 audio + instructions). Compared with text-only tools, you control character look, camera motion, and AV sync directly.

## 2. Four input modalities

### 2.1 Text
Long prompts, shot lists, style keywords; pair with **@** references.

### 2.2 Images
| Use | Notes |
| :--- | :--- |
| Character | Face and wardrobe consistency |
| Scene | Environment and palette |
| Style | Brand VI |
| First frame | Opening composition |

Up to **9 images** (JPG, PNG, WebP).

### 2.3 Audio
BGM beat-sync, voiceover lip-sync, ambient SFX. Up to **3 tracks**.

### 2.4 Video
Camera motion, choreography, scene extension. Up to **3 clips** (≤15s each).

## 3. @ reference system

Mark \`@Image1\`, \`@Video1\`, \`@Audio1\` in prompts to assign each asset a clear role.

## 4. Core specs

| Item | Spec |
| :--- | :--- |
| Modalities | Text + image + video + audio |
| File cap | 12 total |
| Length | 4–15 seconds |
| Resolution | 480p–1080p (Pro 2K) |
| Audio | Native sync, multilingual lip-sync |

## 5. Common scenarios

Short-form social, brand marketing, education—lock character with images, camera with video, vary scripts in text.

## 6. Four-step workflow

Define deliverable → prepare references → prompt + @ → validate at 4–6s then extend.

## FAQ

**Must all four modalities be used?** No—mix as needed.

**How do @ numbers map?** By upload order.

**100% image consistency?** Much better than text-only; complex scenes may still drift.

---

${cta(lang)}

**${relatedLabel}**: Seedance 2.0, Seedance tutorial, Seedance Chinese version, multimodal AI video.`;
};

const remaining = {
  ar: { title: "Seedance 2.0: تحليل شامل لقدرات الإدخال متعدد الوسائط", description: "شرح إدخال النص والصورة والصوت والفيديو في Seedance 2.0، نظام @ وحتى 12 ملفًا مرجعيًا. دليل Seedance لإنشاء فيديو AI متعدد الوسائط.", tags: ["Seedance 2.0", "دليل Seedance", "Seedance 中文版"], intro: "إذا كنت ما زلت تعتمد على «نص فقط + إعادة المحاولة»، فأنت تفوت الترقية الأساسية في **Seedance 2.0**.", rel: "عمليات بحث ذات صلة" },
  pt: { title: "Seedance 2.0: análise completa da entrada multimodal", description: "Texto, imagem, áudio e vídeo no Seedance 2.0, sistema @ e até 12 referências. Tutorial Seedance para vídeo IA multimodal.", tags: ["Seedance 2.0", "Tutorial Seedance", "Versão chinesa Seedance"], intro: "Se ainda faz vídeo IA só com texto e rerolls, está a perder a atualização central do **Seedance 2.0**.", rel: "Pesquisas relacionadas" },
  id: { title: "Seedance 2.0: analisis lengkap input multimodal", description: "Teks, gambar, audio, dan video di Seedance 2.0, sistem @ hingga 12 file referensi. Tutorial Seedance untuk video AI multimodal.", tags: ["Seedance 2.0", "Tutorial Seedance", "Versi Tionghoa Seedance"], intro: "Jika masih membuat video AI dengan «hanya teks + reroll», Anda melewatkan peningkatan inti **Seedance 2.0**.", rel: "Pencarian terkait" },
  ms: { title: "Seedance 2.0: analisis lengkap input multimodal", description: "Teks, imej, audio dan video dalam Seedance 2.0, sistem @ sehingga 12 fail rujukan. Tutorial Seedance untuk video AI multimodal.", tags: ["Seedance 2.0", "Tutorial Seedance", "Versi Cina Seedance"], intro: "Jika masih buat video AI dengan «teks sahaja + reroll», anda terlepas naik taraf teras **Seedance 2.0**.", rel: "Carian berkaitan" },
  fr: { title: "Seedance 2.0 : analyse complète des entrées multimodales", description: "Texte, image, audio et vidéo dans Seedance 2.0, système @ et jusqu'à 12 fichiers de référence. Tutoriel Seedance pour la vidéo IA multimodale.", tags: ["Seedance 2.0", "Tutoriel Seedance", "Version chinoise Seedance"], intro: "Si vous ne faites encore de la vidéo IA qu'avec du texte et des rerolls, vous manquez la mise à niveau clé de **Seedance 2.0**.", rel: "Recherches associées" },
  ru: { title: "Seedance 2.0: полный разбор мультимодального ввода", description: "Текст, изображение, аудио и видео в Seedance 2.0, система @ и до 12 референсов. Учебник Seedance для мультимодального AI-видео.", tags: ["Seedance 2.0", "Учебник Seedance", "Китайская версия Seedance"], intro: "Если вы всё ещё делаете AI-видео только текстом и reroll, вы упускаете ключевое обновление **Seedance 2.0**.", rel: "Связанные запросы" },
  hi: { title: "Seedance 2.0: मल्टीमॉडल इनपुट की पूरी व्याख्या", description: "Seedance 2.0 में टेक्स्ट, इमेज, ऑडियो, वीडियो इनपुट, @ सिस्टम और 12 रेफरेंस फाइल। Seedance ट्यूटोरियल।", tags: ["Seedance 2.0", "Seedance ट्यूटोरियल", "Seedance 中文版"], intro: "यदि आप अभी भी «केवल टेक्स्ट + reroll» से AI वीडियो बना रहे हैं, तो **Seedance 2.0** का मुख्य अपग्रेड चूक रहे हैं।", rel: "संबंधित खोज" },
  de: { title: "Seedance 2.0: Multimodale Eingabe im Überblick", description: "Text, Bild, Audio und Video in Seedance 2.0, @-System und bis zu 12 Referenzdateien. Seedance-Tutorial für multimodales KI-Video.", tags: ["Seedance 2.0", "Seedance-Tutorial", "Seedance Chinesische Version"], intro: "Wer KI-Video noch nur mit Text und Rerolls erstellt, verpasst das Kern-Upgrade von **Seedance 2.0**.", rel: "Verwandte Suchen" },
  ko: { title: "Seedance 2.0 멀티모달 입력 능력 완전 해석", description: "Seedance 2.0 텍스트·이미지·오디오·비디오 입력, @ 참조 시스템, 최대 12개 참조 파일. Seedance 튜토리얼.", tags: ["Seedance 2.0", "Seedance 튜토리얼", "Seedance 中文版"], intro: "아직 «텍스트만 + reroll»로 AI 영상을 만든다면 **Seedance 2.0**의 핵심 업그레이드를 놓치고 있을 수 있습니다.", rel: "관련 검색" },
  tr: { title: "Seedance 2.0: çok modlu giriş yeteneklerinin tam analizi", description: "Seedance 2.0 metin, görsel, ses ve video girişi, @ sistemi ve 12 referans dosyası. Seedance eğitimi.", tags: ["Seedance 2.0", "Seedance Eğitimi", "Seedance 中文版"], intro: "Hâlâ «yalnızca metin + reroll» ile AI video üretiyorsanız **Seedance 2.0**'ın temel yükseltmesini kaçırıyorsunuz.", rel: "İlgili aramalar" },
  vi: { title: "Seedance 2.0: phân tích toàn diện khả năng đầu vào đa phương thức", description: "Văn bản, hình ảnh, âm thanh, video trong Seedance 2.0, hệ thống @ và tối đa 12 tệp tham chiếu. Hướng dẫn Seedance.", tags: ["Seedance 2.0", "Hướng dẫn Seedance", "Seedance 中文版"], intro: "Nếu vẫn làm video AI bằng «chỉ văn bản + reroll», bạn đang bỏ lỡ nâng cấp cốt lõi của **Seedance 2.0**.", rel: "Tìm kiếm liên quan" },
  th: { title: "Seedance 2.0: วิเคราะห์ความสามารถอินพุตมัลติโมดัลอย่างครบถ้วน", description: "ข้อความ รูปภาพ เสียง วิดีโอใน Seedance 2.0 ระบบ @ และไฟล์อ้างอิงสูงสุด 12 ไฟล์ บทช่วยสอน Seedance", tags: ["Seedance 2.0", "บทช่วยสอน Seedance", "Seedance 中文版"], intro: "หากยังทำวิดีโอ AI แบบ «ข้อความอย่างเดียว + reroll» คุณอาจพลาดการอัปเกรดหลักของ **Seedance 2.0**", rel: "การค้นหาที่เกี่ยวข้อง" },
  it: { title: "Seedance 2.0: analisi completa dell'input multimodale", description: "Testo, immagine, audio e video in Seedance 2.0, sistema @ e fino a 12 file di riferimento. Tutorial Seedance.", tags: ["Seedance 2.0", "Tutorial Seedance", "Versione cinese Seedance"], intro: "Se fai ancora video IA solo con testo e reroll, stai perdendo l'upgrade chiave di **Seedance 2.0**.", rel: "Ricerche correlate" },
  fa: { title: "Seedance 2.0: تحلیل جامع قابلیت ورودی چندوجهی", description: "متن، تصویر، صدا و ویدیو در Seedance 2.0، سیستم @ و حداکثر ۱۲ فایل مرجع. آموزش Seedance.", tags: ["Seedance 2.0", "آموزش Seedance", "Seedance 中文版"], intro: "اگر هنوز ویدیوی AI را فقط با «متن + reroll» می‌سازید، ارتقای اصلی **Seedance 2.0** را از دست می‌دهید.", rel: "جستجوهای مرتبط" },
  nl: { title: "Seedance 2.0: volledige uitleg multimodale invoer", description: "Tekst, afbeelding, audio en video in Seedance 2.0, @-systeem en tot 12 referentiebestanden. Seedance-tutorial.", tags: ["Seedance 2.0", "Seedance-tutorial", "Seedance Chinese versie"], intro: "Als je AI-video nog alleen met tekst en rerolls maakt, mis je de kernupgrade van **Seedance 2.0**.", rel: "Gerelateerde zoekopdrachten" },
  pl: { title: "Seedance 2.0: pełna analiza wejścia multimodalnego", description: "Tekst, obraz, audio i wideo w Seedance 2.0, system @ i do 12 plików referencyjnych. Samouczek Seedance.", tags: ["Seedance 2.0", "Samouczek Seedance", "Chińska wersja Seedance"], intro: "Jeśli nadal tworzysz wideo AI tylko tekstem i rerollami, omijasz kluczową aktualizację **Seedance 2.0**.", rel: "Powiązane wyszukiwania" },
  sv: { title: "Seedance 2.0: fullständig genomgång av multimodal inmatning", description: "Text, bild, ljud och video i Seedance 2.0, @-system och upp till 12 referensfiler. Seedance-handledning.", tags: ["Seedance 2.0", "Seedance-handledning", "Seedance kinesiska versionen"], intro: "Om du fortfarande gör AI-video med «endast text + reroll» missar du kärnuppgraderingen i **Seedance 2.0**.", rel: "Relaterade sökningar" },
  uk: { title: "Seedance 2.0: повний розбір мультимодального вводу", description: "Текст, зображення, аудіо та відео в Seedance 2.0, система @ і до 12 референсів. Посібник Seedance.", tags: ["Seedance 2.0", "Посібник Seedance", "Seedance 中文版"], intro: "Якщо ви досі робите AI-відео лише текстом і reroll, ви пропускаєте ключове оновлення **Seedance 2.0**.", rel: "Пов'язані запити" },
  ro: { title: "Seedance 2.0: analiză completă a intrării multimodale", description: "Text, imagine, audio și video în Seedance 2.0, sistem @ și până la 12 fișiere de referință. Tutorial Seedance.", tags: ["Seedance 2.0", "Tutorial Seedance", "Versiunea chineză Seedance"], intro: "Dacă încă faci video AI doar cu text și reroll, ratezi upgrade-ul central al **Seedance 2.0**.", rel: "Căutări asociate" },
};

for (const lang of locales) {
  let article;
  if (fullArticles[lang]) {
    article = fullArticles[lang];
  } else if (remaining[lang]) {
    const r = remaining[lang];
    article = {
      title: r.title,
      description: r.description,
      tags: r.tags,
      alt: r.title,
      body: compact(lang, r.title, r.description, r.tags, r.intro, r.rel),
    };
  } else {
    article = ART.en;
  }

  const dir = path.join(blogRoot, lang);
  fs.mkdirSync(dir, { recursive: true });
  const content = yaml({ ...article, lang }) + article.body.replace(
    new RegExp(`\\!\\[.*?\\]\\(${IMG.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\)`, "g"),
    `![${article.alt ?? article.title}](${IMG})`
  );
  fs.writeFileSync(path.join(dir, `${SLUG}.md`), content, "utf8");
  console.log("Wrote", lang);
}

console.log("Done:", SLUG);
