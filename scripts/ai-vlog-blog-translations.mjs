import { enT } from "./ai-vlog-blog-en-template.mjs";

/** 各语种完整正文文案（与 zh-cn 结构一致） */
export const ctaLabel = {
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

export function ctaHtml(lang) {
  return `<div style="text-align:center; margin: 2rem 0;">
  <a href="https://app.seedance22.com/${lang}/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">${ctaLabel[lang]}</a>
</div>`;
}

/**
 * @param {string} lang
 * @param {string} IMG
 * @param {string} alt
 * @param {Record<string, Record<string, string>>} T
 */
export function buildFullBody(lang, IMG, alt, T) {
  const t = T[lang];
  const c = (x) => ctaHtml(lang);
  return `${t.intro}

![${alt}](${IMG})

${t.introLead}

${c()}

## ${t.h1}

${t.h1p}

**${t.stepsLabel}**

1. ${t.s1}  
2. ${t.s2}  
3. ${t.s3}

${t.quoteStory}

4. ${t.s4}

**${t.tableLabel}**

| ${t.th1} | ${t.th2} | ${t.th3} | ${t.th4} | ${t.th5} |
| :--- | :--- | :--- | :--- | :--- |
| 0–3s | ${t.r1a} | ${t.r1b} | ${t.r1c} | ${t.r1d} |
| 3–7s | ${t.r2a} | ${t.r2b} | ${t.r2c} | ${t.r2d} |
| 7–12s | ${t.r3a} | ${t.r3b} | ${t.r3c} | ${t.r3d} |
| 12–15s | ${t.r4a} | ${t.r4b} | ${t.r4c} | ${t.r4d} |

## ${t.h2}

${t.h2p}

**${t.exampleLabel}**

${t.quoteChar}

${t.h2save}

![${t.imgMid}](${IMG})

## ${t.h3}

1. ${t.setup1}  
2. ${t.setup2}  
3. ${t.setup3}  
4. ${t.setup4}

## ${t.h4}

1. ${t.up1}  
2. ${t.up2}

${t.quoteGen}

3. ${t.up3}  
4. ${t.up4}

**${t.noteLabel}** ${t.note}

## ${t.h5}

${t.h5p}

## ${t.h6}

| ${t.sumTh1} | ${t.sumTh2} | ${t.sumTh3} |
| :--- | :--- | :--- |
| ${t.sum1a} | ${t.sum1b} | ${t.sum1c} |
| ${t.sum2a} | ${t.sum2b} | ${t.sum2c} |
| ${t.sum3a} | ${t.sum3b} | ${t.sum3c} |
| ${t.sum4a} | ${t.sum4b} | ${t.sum4c} |
| ${t.sum5a} | ${t.sum5b} | ${t.sum5c} |

${t.sumClose}

---

${t.ctaLead}

${c()}

**${t.related}**`;
}

export const META = {
  "zh-cn": {
    title: "Seedance2.0进阶玩法！AI vlog保姆级教程来了！！",
    description:
      "用 Seedance 2.0 做 AI vlog：表格分镜、人设定妆、全能参考模式与提示词写法，从脚本到成片保姆级步骤。Seedance 教程与中文版界面可直接实操。",
    tags: ["Seedance 2.0", "Seedance 教程", "Seedance 中文版"],
    imgMid: "Seedance 2.0 分镜与人设参考示意",
  },
  "zh-tw": {
    title: "Seedance2.0 進階玩法！AI vlog 保姆級教學來了！！",
    description:
      "用 Seedance 2.0 做 AI vlog：表格分鏡、人設定妝、全能參考模式與提示詞寫法，從腳本到成片保姆級步驟。Seedance 教程與中文版介面可直接實操。",
    tags: ["Seedance 2.0", "Seedance 教程", "Seedance 中文版"],
    imgMid: "Seedance 2.0 分鏡與人設參考示意",
  },
  en: {
    title: "Seedance 2.0 Advanced: Step-by-Step AI Vlog Tutorial",
    description:
      "Create AI vlogs with Seedance 2.0: table storyboards, character sheets, Full Reference mode, and prompts—from script to export. A practical Seedance tutorial with multilingual UI support.",
    tags: ["Seedance 2.0", "Seedance Tutorial", "Seedance Chinese Version"],
    imgMid: "Seedance 2.0 storyboard and character reference",
  },
  es: {
    title: "Seedance 2.0 avanzado: tutorial paso a paso de vlog con IA",
    description:
      "Crea vlogs con IA en Seedance 2.0: storyboard en tabla, personaje, modo Referencia completa y prompts. Tutorial Seedance de guion a exportación.",
    tags: ["Seedance 2.0", "Tutorial Seedance", "Versión china Seedance"],
    imgMid: "Referencia de storyboard y personaje en Seedance 2.0",
  },
  ja: {
    title: "Seedance 2.0 応用：AI vlog 完全チュートリアル",
    description:
      "Seedance 2.0 で AI vlog：表形式の絵コンテ、キャラ設定、フルリファレンスとプロンプト。脚本から書き出しまでの Seedance 教程。",
    tags: ["Seedance 2.0", "Seedance 教程", "Seedance 中文版"],
    imgMid: "Seedance 2.0 絵コンテとキャラ参考",
  },
  ko: {
    title: "Seedance 2.0 고급: AI vlog 단계별 튜토리얼",
    description:
      "Seedance 2.0으로 AI vlog: 스토리보드 표, 캐릭터 시트, 풀 레퍼런스와 프롬프트. 스크립트부터보내기까지 Seedance 튜토리얼.",
    tags: ["Seedance 2.0", "Seedance 튜토리얼", "Seedance 中文版"],
    imgMid: "Seedance 2.0 스토리보드 및 캐릭터 참고",
  },
  fr: {
    title: "Seedance 2.0 avancé : tutoriel vlog IA pas à pas",
    description:
      "Créez des vlogs IA avec Seedance 2.0 : storyboard, personnage, Référence complète et prompts. Tutoriel Seedance du script à l'export.",
    tags: ["Seedance 2.0", "Tutoriel Seedance", "Version chinoise Seedance"],
    imgMid: "Storyboard et personnage Seedance 2.0",
  },
  de: {
    title: "Seedance 2.0 Advanced: KI-Vlog-Schritt-für-Schritt",
    description:
      "KI-Vlogs mit Seedance 2.0: Storyboard-Tabelle, Charakter, Full Reference und Prompts. Seedance-Tutorial vom Skript zum Export.",
    tags: ["Seedance 2.0", "Seedance-Tutorial", "Chinesische Seedance-Version"],
    imgMid: "Storyboard und Charakterreferenz Seedance 2.0",
  },
  pt: {
    title: "Seedance 2.0 avançado: tutorial de vlog com IA",
    description:
      "Vlogs com IA no Seedance 2.0: storyboard, personagem, Referência completa e prompts. Tutorial Seedance do roteiro à exportação.",
    tags: ["Seedance 2.0", "Tutorial Seedance", "Versão chinesa Seedance"],
    imgMid: "Storyboard e personagem Seedance 2.0",
  },
  ru: {
    title: "Seedance 2.0: пошаговый AI vlog-туториал",
    description:
      "AI vlog в Seedance 2.0: раскадровка, персонаж, полная ссылка и промпты. Урок Seedance от сценария до экспорта.",
    tags: ["Seedance 2.0", "Урок Seedance", "Seedance 中文版"],
    imgMid: "Раскадровка и персонаж Seedance 2.0",
  },
  ar: {
    title: "Seedance 2.0 المتقدم: دليل vlog بالذكاء الاصطناعي",
    description:
      "أنشئ vlog متحركًا بـ Seedance 2.0: لوحة قصة، شخصية، وضع المرجع الكامل. دليل Seedance من الفكرة إلى التصدير.",
    tags: ["Seedance 2.0", "دليل Seedance", "Seedance 中文版"],
    imgMid: "لوحة القصة والشخصية في Seedance 2.0",
  },
  hi: {
    title: "Seedance 2.0 उन्नत: AI vlog ट्यूटोरियल",
    description:
      "Seedance 2.0 से AI vlog: स्टोरीबोर्ड, कैरेक्टर, Full Reference मोड और प्रॉम्प्ट। Seedance ट्यूटोरियल स्क्रिप्ट से एक्सपोर्ट तक।",
    tags: ["Seedance 2.0", "Seedance ट्यूटोरियल", "Seedance 中文版"],
    imgMid: "Seedance 2.0 स्टोरीबोर्ड और कैरेक्टर संदर्भ",
  },
  id: {
    title: "Seedance 2.0 lanjutan: tutorial vlog AI langkah demi langkah",
    description:
      "Buat vlog AI dengan Seedance 2.0: storyboard tabel, karakter, Referensi penuh, dan prompt. Tutorial Seedance dari naskah ke ekspor.",
    tags: ["Seedance 2.0", "Tutorial Seedance", "Versi China Seedance"],
    imgMid: "Storyboard dan karakter Seedance 2.0",
  },
  ms: {
    title: "Seedance 2.0 lanjutan: tutorial vlog AI langkah demi langkah",
    description:
      "Cipta vlog AI dengan Seedance 2.0: papan cerita, watak, Rujukan penuh dan prompt. Tutorial Seedance dari skrip ke eksport.",
    tags: ["Seedance 2.0", "Tutorial Seedance", "Versi Cina Seedance"],
    imgMid: "Papan cerita dan watak Seedance 2.0",
  },
  tr: {
    title: "Seedance 2.0 ileri: AI vlog adım adım eğitim",
    description:
      "Seedance 2.0 ile AI vlog: storyboard, karakter, Tam Referans ve promptlar. Seedance eğitimi senaryodan dışa aktarmaya.",
    tags: ["Seedance 2.0", "Seedance Eğitimi", "Seedance 中文版"],
    imgMid: "Seedance 2.0 storyboard ve karakter referansı",
  },
  vi: {
    title: "Seedance 2.0 nâng cao: hướng dẫn vlog AI từng bước",
    description:
      "Tạo vlog AI với Seedance 2.0: storyboard bảng, nhân vật, Tham chiếu đầy đủ và prompt. Hướng dẫn Seedance từ kịch bản đến xuất file.",
    tags: ["Seedance 2.0", "Hướng dẫn Seedance", "Seedance 中文版"],
    imgMid: "Storyboard và nhân vật Seedance 2.0",
  },
  th: {
    title: "Seedance 2.0 ขั้นสูง: บทช่วยสอน vlog AI ทีละขั้น",
    description:
      "สร้าง vlog AI ด้วย Seedance 2.0: สตอรี่บอร์ด ตัวละคร โหมดอ้างอิงเต็มรูปแบบ และพรอมป์ บทช่วยสอน Seedance ครบวงจร",
    tags: ["Seedance 2.0", "บทช่วยสอน Seedance", "Seedance 中文版"],
    imgMid: "สตอรี่บอร์ดและตัวละคร Seedance 2.0",
  },
  it: {
    title: "Seedance 2.0 avanzato: tutorial vlog IA passo passo",
    description:
      "Vlog IA con Seedance 2.0: storyboard, personaggio, Riferimento completo e prompt. Tutorial Seedance dallo script all'export.",
    tags: ["Seedance 2.0", "Tutorial Seedance", "Versione cinese Seedance"],
    imgMid: "Storyboard e personaggio Seedance 2.0",
  },
  fa: {
    title: "Seedance 2.0 پیشرفته: آموزش گام‌به‌گام vlog هوش مصنوعی",
    description:
      "ساخت vlog با Seedance 2.0: استوری‌بورد، شخصیت، مرجع کامل و پرامپت. آموزش Seedance از سناریو تا خروجی.",
    tags: ["Seedance 2.0", "آموزش Seedance", "Seedance 中文版"],
    imgMid: "استوری‌بورد و شخصیت Seedance 2.0",
  },
  nl: {
    title: "Seedance 2.0 gevorderd: AI-vlog stap voor stap",
    description:
      "AI-vlogs met Seedance 2.0: storyboard-tabel, personage, volledige referentie en prompts. Seedance-tutorial van script tot export.",
    tags: ["Seedance 2.0", "Seedance-tutorial", "Chinese Seedance-versie"],
    imgMid: "Storyboard en personage Seedance 2.0",
  },
  pl: {
    title: "Seedance 2.0 zaawansowany: samouczek vlog AI",
    description:
      "Vlog AI w Seedance 2.0: storyboard, postać, pełne odniesienie i prompty. Samouczek Seedance od scenariusza do eksportu.",
    tags: ["Seedance 2.0", "Samouczek Seedance", "Chińska wersja Seedance"],
    imgMid: "Storyboard i postać Seedance 2.0",
  },
  sv: {
    title: "Seedance 2.0 avancerat: AI-vlog steg för steg",
    description:
      "AI-vloggar med Seedance 2.0: storyboard, karaktär, full referens och prompts. Seedance-handledning från manus till export.",
    tags: ["Seedance 2.0", "Seedance-handledning", "Seedance kinesiska versionen"],
    imgMid: "Storyboard och karaktär Seedance 2.0",
  },
  uk: {
    title: "Seedance 2.0 просунутий: покроковий AI vlog",
    description:
      "AI vlog у Seedance 2.0: розкадровка, персонаж, повний референс і промпти. Посібник Seedance від сценарію до експорту.",
    tags: ["Seedance 2.0", "Посібник Seedance", "Seedance 中文版"],
    imgMid: "Розкадровка та персонаж Seedance 2.0",
  },
  ro: {
    title: "Seedance 2.0 avansat: tutorial vlog AI pas cu pas",
    description:
      "Vlog AI cu Seedance 2.0: storyboard, personaj, referință completă și prompturi. Tutorial Seedance de la scenariu la export.",
    tags: ["Seedance 2.0", "Tutorial Seedance", "Versiunea chineză Seedance"],
    imgMid: "Storyboard și personaj Seedance 2.0",
  },
};

/** @type {Record<string, Record<string, string>>} */
export const T = {
  "zh-cn": {
    intro:
      "想做一条不用真人出镜的动画 vlog，又不想搭拍摄团队？**Seedance 2.0** 已经能按分镜脚本和人设图，在「全能参考」模式下稳定出片。这篇 **Seedance 教程** 把从写分镜到导入剪辑的完整流程拆开讲，**Seedance 中文版** 界面里跟着做即可。",
    introLead: "下面按步骤说明。若你只想先上手生成页，可直接点按钮进入站点。",
    h1: "一、先做分镜脚本",
    h1p: "分镜是整条片的骨架。表格写清楚每个镜头的时长、画面、运镜和音效，模型才不容易「猜画面」跑偏。",
    stepsLabel: "操作步骤：",
    s1: "先定赛道与内容方向（例如下班日常、旅行记录、职场小故事）。",
    s2: "用任意 AI 对话工具生成分镜，要求输出为**表格**，字段至少包含：时长、画面描述、运镜、光线/特效、音效。",
    s3: "示例提示词（可按需改主题与风格）：",
    quoteStory:
      "> 参考常见动画 vlog 的叙事节奏，写一条【下班生活日常 vlog】分镜脚本，内容为【主角回到公寓、做饭、看书、入睡】，整体氛围温暖治愈。要求：表格形式，总时长 15 秒以内，列包含：时长、画面、运镜、光线/特效、音效。",
    s4: "将生成的分镜表格**截图保存为一张图**，后面要上传到 Seedance 2.0 作为参考。",
    tableLabel: "分镜表示例（结构参考）：",
    th1: "时长", th2: "画面", th3: "运镜", th4: "光线/特效", th5: "音效",
    r1a: "主角推门进公寓，玄关暖灯亮起", r1b: "固定机位，轻微推近", r1c: "暖色室内光", r1d: "开门声、轻音乐起",
    r2a: "厨房切菜、炉灶开火", r2b: "俯拍转侧面跟拍", r2c: "灶台暖光、轻微蒸汽", r2d: "切菜声、油锅声",
    r3a: "沙发看书，台灯侧光", r3b: "缓慢横移", r3c: "柔和侧光、书页高光", r3d: "翻书声、环境白噪",
    r4a: "关灯入睡，画面渐暗", r4b: "拉远至全景", r4c: "渐隐", r4d: "音乐收束",
    h2: "二、生成主角人设图",
    h2p: "AI 视频最怕「每张脸都不一样」。没有现成角色图时，先用文生图做一张**固定人设**，后续所有镜头都引用它。",
    exampleLabel: "示例提示词：",
    quoteChar:
      "> 你是一名动漫角色设计师。请设计一位 25 岁左右的都市职场女性：短发、高鼻梁、大眼睛、身高约 165cm、正常肤色，穿浅灰色休闲西装套装，半身漫画立绘，背景简洁，便于后续做视频参考。",
    h2save: "生成满意后保存 PNG/JPG，与分镜截图放在同一文件夹，避免生成时漏传。",
    imgMid: "Seedance 2.0 分镜与人设参考示意",
    h3: "三、在 Seedance 2.0 里完成设置",
    setup1: "打开视频生成，模型选择 **Seedance 2.0**。",
    setup2: "模式务必选 **「全能参考」**（Full Reference）——只有该模式才能同时吃「人设图 + 分镜图」。",
    setup3: "时长与画幅：竖屏短视频建议 **9:16** 或 **3:4**；若做横屏片头可改 16:9。",
    setup4: "分辨率按账号权限选 1080P，社媒发布一般够用。",
    h4: "四、上传参考素材并生成",
    up1: "在「参考内容」区域上传：**人物形象图** + **分镜脚本截图**（顺序上传即可，记住编号便于写 @ 引用）。",
    up2: "在提示词框用一句话约束生成逻辑，例如：",
    quoteGen:
      "> 严格参考 @图片1 的人物形象，按照 @图片2 的分镜顺序生成，整体风格温暖治愈，人物面部稳定，画面不抖动，1080P。",
    up3: "点击生成，常见等待约 **40–90 秒**（视队列与时长而定）。",
    up4: "若某一镜不满意，可只改对应分镜格或加强该镜描述后重试，不必整条重来。",
    noteLabel: "注意：",
    note: "每次生成会消耗积分；新账号通常有每日免费额度。生成过程中请勿反复点击，避免重复扣费。",
    h5: "五、后期与发布",
    h5p: "导出视频后，用任意剪辑软件（如 CapCut、Premiere）加字幕、贴纸和 BGM 即可。动画 vlog 的「生活感」往往来自字幕节奏与环境音，这一步建议保留 10–15 分钟精修时间。",
    h6: "六、流程小结",
    sumTh1: "阶段", sumTh2: "产出物", sumTh3: "要点",
    sum1a: "策划", sum1b: "赛道与主题", sum1c: "先窄后宽，便于系列化",
    sum2a: "分镜", sum2b: "表格截图", sum2c: "控制总时长，写清运镜",
    sum3a: "人设", sum3b: "角色立绘", sum3c: "一张图贯穿全片",
    sum4a: "生成", sum4b: "Seedance 2.0 成片", sum4c: "全能参考 + 明确 @ 引用",
    sum5a: "后期", sum5b: "字幕与音效", sum5c: "提升完播率",
    sumClose:
      "**Seedance 2.0** 做 AI vlog 的核心链路就是：**分镜脚本 → 人设图 → 全能参考 → 写清提示词 → 生成与后期**。按表走一遍，新手也能在较短时间内出一条可发布的竖屏 vlog。",
    ctaLead: "想直接开做，可在站点上传分镜与人设试生成一轮，**Seedance 中文版** 与多语言界面均已支持该工作流。",
    related: "**相关检索**：Seedance 2.0、Seedance 教程、Seedance 中文版、AI vlog、动画短剧、全能参考模式。",
  },
};

T.en = enT;

T["zh-tw"] = {
  ...T["zh-cn"],
  intro:
    "想做一條不用真人出鏡的動畫 vlog，又不想架設複雜拍攝？**Seedance 2.0** 已能依分鏡腳本與人設圖，在「全能參考」模式下穩定出片。本篇 **Seedance 教程** 把從寫分鏡到匯入剪輯的完整流程拆開說明，**Seedance 中文版** 介面裡跟著做即可。",
  introLead: "以下按步驟說明。若只想先進生成頁，可直接點按鈕。",
  h1: "一、先做分鏡腳本",
  h1p: "分鏡是整條片的骨架。表格寫清楚每個鏡頭的時長、畫面、運鏡與音效，模型才不容易跑偏。",
  stepsLabel: "操作步驟：",
  s1: "先定賽道與內容方向（例如下班日常、旅行記錄、職場小故事）。",
  s2: "用任意 AI 對話工具生成分鏡，要求輸出為**表格**，欄位至少包含：時長、畫面描述、運鏡、光線/特效、音效。",
  s3: "示例提示詞（可按需改主題與風格）：",
  quoteStory:
    "> 參考常見動畫 vlog 的敘事節奏，寫一條【下班生活日常 vlog】分鏡腳本，內容為【主角回到公寓、做飯、看書、入睡】，整體氛圍溫暖治癒。要求：表格形式，總時長 15 秒以內，列包含：時長、畫面、運鏡、光線/特效、音效。",
  s4: "將分鏡表格**截圖存檔**，後續上傳至 Seedance 2.0。",
  tableLabel: "分鏡表示例（結構參考）：",
  th1: "時長", th2: "畫面", th3: "運鏡", th4: "光線/特效", th5: "音效",
  r1a: "主角進公寓，玄關暖燈", r1b: "固定機位，輕微推近", r1c: "暖色室內光", r1d: "開門聲、輕音樂",
  r2a: "廚房備餐", r2b: "俯拍轉側跟", r2c: "灶光、蒸氣", r2d: "切菜、油鍋聲",
  r3a: "沙發閱讀", r3b: "緩慢橫移", r3c: "台燈側光", r3d: "翻書、環境白噪",
  r4a: "關燈入睡", r4b: "拉遠全景", r4c: "漸隱", r4d: "音樂收束",
  h2: "二、生成主角人設圖",
  h2p: "AI 影片最怕每鏡臉部不一致。沒有現成角色圖時，先用文生圖做**固定人設**。",
  exampleLabel: "示例提示詞：",
  quoteChar:
    "> 你是動漫角色設計師。請設計一位 25 歲左右的都市職場女性：短髮、高鼻樑、大眼睛、身高約 165cm、正常膚色，穿淺灰色休閒西裝套裝，半身漫畫立繪，背景簡潔。",
  h2save: "滿意後存 PNG/JPG，與分鏡截圖放在同一資料夾。",
  imgMid: "Seedance 2.0 分鏡與人設參考示意",
  h3: "三、在 Seedance 2.0 裡設定",
  setup1: "開啟影片生成，模型選 **Seedance 2.0**。",
  setup2: "模式務必選 **「全能參考」**（Full Reference）。",
  setup3: "畫幅建議 **9:16** 或 **3:4**；橫屏可改 16:9。",
  setup4: "解析度選 1080P（依帳號權限）。",
  h4: "四、上傳素材並生成",
  up1: "在「參考內容」上傳：**人物形象圖** + **分鏡截圖**。",
  up2: "提示詞示例：",
  quoteGen:
    "> 嚴格參考 @圖片1 人物形象，按 @圖片2 分鏡順序生成，溫暖治癒，人物面部穩定，畫面不抖動，1080P。",
  up3: "生成約 **40–90 秒**。",
  up4: "單鏡不滿意可只改該格分鏡後重試。",
  noteLabel: "注意：",
  note: "每次生成消耗積分；新帳號常有每日免費額度。勿重複點擊生成。",
  h5: "五、後期與發布",
  h5p: "匯入剪輯軟體加字幕、貼紙與 BGM，建議留 10–15 分鐘精修。",
  h6: "六、流程小結",
  sumTh1: "階段", sumTh2: "產出物", sumTh3: "要點",
  sum1a: "策劃", sum1b: "賽道與主題", sum1c: "先窄後寬",
  sum2a: "分鏡", sum2b: "表格截圖", sum2c: "控制總時長",
  sum3a: "人設", sum3b: "角色立繪", sum3c: "一張圖貫穿全片",
  sum4a: "生成", sum4b: "Seedance 2.0 成片", sum4c: "全能參考 + @ 引用",
  sum5a: "後期", sum5b: "字幕與音效", sum5c: "提升完播率",
  sumClose:
    "**Seedance 2.0** AI vlog 鏈路：**分鏡腳本 → 人設圖 → 全能參考 → 提示詞 → 生成與後製**。",
  ctaLead: "可在站點上傳分鏡與人設試生成，支援多語介面。",
  related: "**相關檢索**：Seedance 2.0、Seedance 教程、Seedance 中文版、AI vlog、全能參考模式。",
};

