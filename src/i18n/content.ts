/**
 * Content strings for all locales. Keys: seo, hero, stats, product_features, features, comparison, showcase, testimonials, faq, legal.
 */

import type { Locale } from "./ui";

export type ContentLocale = {
  seo: { title: string; description: string; keywords?: string };
  blog: { 
    page_title: string; 
    description: string;
    keywords?: string;
  };
  guide: { 
    page_title: string; 
    description: string;
    keywords?: string;
  };
  hero: { title: string; highlight: string; subtitle: string; button: string; users: string; badge: string };
  stats: Array<{ value: string; label: string }>;
  product_features: {
    text_to_video: { title: string; desc: string; bullets: string[]; cta: string };
    image_to_video: { title: string; desc: string; bullets: string[]; cta: string };
    text_to_image: { title: string; desc: string };
    ai_tools: { title: string; desc: string; cards: Array<{ title: string; desc: string }>; grid: string[]; cta: string };
  };
  features: { title: string; subtitle: string; list: Array<{ title: string; desc: string }> };
  comparison: { title: string; headers: string[]; rows: Array<{ label: string; us: string; others: string }> };
  showcase: { title: string; items: Array<{ title: string; desc: string }> };
  testimonials: { title: string; list: Array<{ review: string; author: string; role: string }> };
  faq: { title: string; items: Array<{ q: string; a: string }> };
  legal: {
    about: { title: string; description: string; heading: string; content: string };
    privacy: { title: string; description: string; heading: string; content: string };
    terms: { title: string; description: string; heading: string; content: string };
  };
};

const EN_STATS = [
  { value: "SOTA", label: "Model Performance" },
  { value: "4", label: "Modalities Supported" },
  { value: "1080p", label: "HD Output" },
];

const EN_PRODUCT_FEATURES = {
  text_to_video: {
    title: "Text to Video AI",
    desc: "Describe scenes, characters and camera moves in natural language and let our Text to Video AI turn them into coherent multi-shot videos.",
    bullets: ["Cinematic Camera Control", "Multi-Shot Consistency", "Physics-Based Motion"],
    cta: "Create Video",
  },
  image_to_video: {
    title: "Image to Video AI",
    desc: "Upload a single reference photo and watch it become a short AI-generated video. Preserve identity and style with high fidelity.",
    bullets: ["Preserve Subject Identity", "Control Motion Strength"],
    cta: "Animate Image",
  },
  text_to_image: {
    title: "Text to Image AI",
    desc: "Turn text prompts into high-resolution images. Describe style, lighting and composition once, then generate multiple variations.",
  },
  ai_tools: {
    title: "AI Video Effects & Tools",
    desc: "Upload photos, choose an AI video effect template and let our system auto-generate a short stylized clip.",
    cards: [
      { title: "Face Swap", desc: "Perfect for memes & marketing" },
      { title: "Style Transfer", desc: "Anime, Clay, 3D Render..." },
    ],
    grid: ["Magic Edit", "Face Swap", "Restyle", "Upscale"],
    cta: "Explore Tools",
  },
};

const EN_FEATURES = {
  title: "Why Choose Seedance 2.0?",
  subtitle: "Break the boundaries of creativity with the most comprehensive multimodal content generation capabilities.",
  list: [
    { title: "Unified Multimodal Architecture", desc: "Supports text, image, audio, and video inputs. Integrated editing capabilities for seamless content creation." },
    { title: "Director-Level Control", desc: "Precise control over acting, lighting, and camera movement. Turn your creative vision into reality exactly as you imagined." },
    { title: "Hyper-Realistic Quality", desc: "Exceptional motion stability and physical law adherence. Native audio-visual synchronization for immersive experiences." },
    { title: "Industrial Grade Workflow", desc: "Tailored for advertising, film, and social media. Output quality meets industrial delivery standards." },
  ],
};

const EN_COMPARISON = {
  title: "Seedance 2.0 vs. Others",
  headers: ["Feature", "Seedance 2.0", "Other Models"],
  rows: [
    { label: "Instruction Following", us: "✅ High Precision", others: "⚠️ Inconsistent" },
    { label: "Motion Quality", us: "✅ Smooth & Realistic", others: "❌ Jittery" },
    { label: "Multi-Shot Consistency", us: "✅ Coherent", others: "❌ Fragmented" },
    { label: "Audio-Visual Sync", us: "✅ Native Support", others: "❌ Separate Tools" },
  ],
};

const EN_SHOWCASE = {
  title: "Limitless Creativity",
  items: [
    { title: "Film Production", desc: "Generate storyboards and final shots." },
    { title: "Advertising", desc: "Create high-converting video ads in minutes." },
    { title: "Social Media", desc: "Viral content creation with ease." },
    { title: "Game Design", desc: "Cutscenes and character animations." },
  ],
};

const EN_TESTIMONIALS = {
  title: "Industry Acclaim",
  list: [
    { review: "Seedance 2.0's controllability is a game changer. It's like having a virtual film crew.", author: "Alex Rivera", role: "Film Director" },
    { review: "The video quality and stability are unmatched. Perfect for our high-end commercial projects.", author: "Jessica Wu", role: "Creative Director" },
    { review: "Finally, an AI video tool that understands complex camera movements and lighting instructions.", author: "David Chen", role: "VFX Artist" },
  ],
};

const EN_FAQ = {
  title: "Frequently Asked Questions",
  items: [
    { q: "What is Seedance 2.0?", a: "Seedance 2.0 is a next-generation AI video model that generates high-quality videos from text, image, and audio inputs." },
    { q: "Can I use Seedance for commercial projects?", a: "Yes, our pro plans include full commercial rights for all generated content." },
    { q: "How does it compare to Sora or Kling?", a: "Seedance 2.0 excels in instruction following and motion stability, offering superior control for professional workflows." },
    { q: "Is there a free trial?", a: "Yes, you can try Seedance 2.0 for free with daily credits." },
  ],
};

const EN_LEGAL = {
  about: {
    title: "About",
    description: "About Seedance 2.0 - AI video generation platform.",
    heading: "About Seedance 2.0",
    content: "Seedance 2.0 is a unified multimodal AI video generation platform, empowering creators with director-level control and cinematic quality. We support text, image, audio, and video inputs for professional content creation.",
  },
  privacy: {
    title: "Privacy Policy",
    description: "Privacy Policy for Seedance 2.0.",
    heading: "Privacy Policy",
    content: "We respect your privacy. This policy describes how we collect, use, and protect your information when you use our services. We use data to improve our AI video platform and to provide you with a better experience. We do not sell your personal information to third parties.",
  },
  terms: {
    title: "Terms of Service",
    description: "Terms of Service for Seedance 2.0.",
    heading: "Terms of Service",
    content: "By using Seedance 2.0, you agree to these terms. Our service is provided for lawful use. You retain rights to content you create; we may use anonymized data to improve our models. We reserve the right to update these terms; continued use constitutes acceptance.",
  },
};

export const content: Record<Locale, ContentLocale> = {
  en: {
    seo: { 
      title: "Seedance 2.0 - Intelligent AI Video Generation Platform | Seedance English Version", 
      description: "Seedance 2.0 is a state-of-the-art AI video generation model supporting text, image, audio, and video inputs for cinematic quality content creation.",
      keywords: "Seedance, Seedance 2.0, AI video, AI video generator, text to video, image to video, multimodal AI, video AI model, AI video creation, ByteDance AI, AI filmmaking, cinematic AI, video generation, AI content creation"
    },
    blog: {
      page_title: "Seedance AI Video Generation Blog - Tutorials, Guides & News",
      description: "Read the latest tutorials, guides and news about AI video generation with Seedance 2.0. Learn tips and best practices for creating cinematic AI videos.",
      keywords: "Seedance blog, AI video tutorials, text to video guide, image to video tips, AI filmmaking blog, Seedance news"
    },
    guide: {
      page_title: "Seedance 2.0 Usage Guide - Official Documentation & Tutorials",
      description: "Official usage guide for Seedance 2.0. Complete documentation, step-by-step tutorials, and best practices for AI video creation.",
      keywords: "Seedance guide, Seedance documentation, Seedance tutorial, how to use Seedance, AI video creation guide"
    },
    hero: { title: "Director-Level Control with", highlight: "Seedance 2.0", subtitle: "The unified multimodal generation architecture. Create cinematic videos from text, images, and audio with unprecedented control and realism.", button: "Start Generating", users: "Trusted by Top Studios", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL,
  },
  "zh-cn": {
    seo: { 
      title: "Seedance 2.0 - 智能AI视频生成平台｜Seedance中文版", 
      description: "Seedance 2.0 是最先进的AI视频生成模型，支持文本、图像、音频和视频输入，创造电影级内容。",
      keywords: "Seedance, Seedance 2.0, AI视频, AI视频生成, 文本转视频, 图片转视频, 多模态AI, 视频AI模型, 中文AI视频, 字节跳动AI, AI电影制作, 影院级AI, 视频生成, AI内容创作"
    },
    blog: {
      page_title: "Seedance AI视频生成博客 - 教程指南与最新动态",
      description: "阅读最新的Seedance 2.0使用教程、创作指南和行业动态，学习如何使用AI创造高质量电影级视频。",
      keywords: "Seedance博客, AI视频教程, 文生视频指南, 图生视频技巧, AI电影制作博客, Seedance动态"
    },
    guide: {
      page_title: "Seedance 2.0 使用指南 - 官方文档与教程",
      description: "Seedance 2.0 官方使用指南，包含完整文档、分步教程和创作最佳实践，帮助你快速掌握AI视频创作。",
      keywords: "Seedance指南, Seedance文档, Seedance教程, 如何使用Seedance, AI视频创作指南"
    },
    hero: { title: "导演级控制力", highlight: "Seedance 2.0", subtitle: "统一多模态生成架构。通过文本、图像和音频创造电影级视频，拥有前所未有的控制力和真实感。", button: "开始创作", users: "顶级工作室信赖", badge: "🚀 New Release: Seedance 2.0" },
    stats: [{ value: "SOTA", label: "Model Performance" }, { value: "4", label: "Modalities Supported" }, { value: "1080p", label: "HD Output" }],
    product_features: {
      text_to_video: { title: "文生视频 AI", desc: "用自然语言描述场景、角色和运镜，让AI将其转化为连贯的多镜头视频。", bullets: ["Cinematic Camera Control", "Multi-Shot Consistency", "Physics-Based Motion"], cta: "Create Video" },
      image_to_video: { title: "图生视频 AI", desc: "上传一张参考图，让它变成短视频。保持高度一致的角色和风格。", bullets: ["Preserve Subject Identity", "Control Motion Strength"], cta: "Animate Image" },
      text_to_image: { title: "文生图 AI", desc: "将文本提示转化为高分辨率图像。描述风格、光照和构图，生成多种变体。" },
      ai_tools: { title: "AI 视频特效与工具", desc: "上传照片，选择AI视频特效模板，自动生成风格化短片。", cards: [{ title: "Face Swap", desc: "Perfect for memes & marketing" }, { title: "Style Transfer", desc: "Anime, Clay, 3D Render..." }], grid: ["Magic Edit", "Face Swap", "Restyle", "Upscale"], cta: "Explore Tools" },
    },
    features: { title: "Why Choose Seedance 2.0?", subtitle: "Break the boundaries of creativity with the most comprehensive multimodal content generation capabilities.", list: EN_FEATURES.list },
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: {
      about: { title: "关于", description: "关于 Seedance 2.0 - AI 视频生成平台。", heading: "关于 Seedance 2.0", content: "Seedance 2.0 是统一多模态 AI 视频生成平台，为创作者提供导演级控制与电影级画质。我们支持文本、图像、音频与视频输入，用于专业内容创作。" },
      privacy: { title: "隐私政策", description: "Seedance 2.0 隐私政策。", heading: "隐私政策", content: "我们尊重您的隐私。本政策说明我们如何收集、使用与保护您在使用我们服务时的信息。我们使用数据以改进 AI 视频平台并为您提供更好体验。我们不会向第三方出售您的个人信息。" },
      terms: { title: "服务条款", description: "Seedance 2.0 服务条款。", heading: "服务条款", content: "使用 Seedance 2.0 即表示您同意本条款。我们的服务仅供合法使用。您保留所创作内容的权利；我们可能使用匿名数据改进模型。我们保留更新本条款的权利；继续使用即视为接受。" },
    },
  },
  "zh-tw": {
    seo: { 
      title: "Seedance 2.0 - 智能AI視頻生成平台｜Seedance繁體中文版", 
      description: "Seedance 2.0 是最先進的AI視頻生成模型，支持文本、圖像、音頻和視頻輸入，創造電影級內容。",
      keywords: "Seedance, Seedance 2.0, AI視頻, AI視頻生成, 文本轉視頻, 圖片轉視頻, 多模態AI, 視頻AI模型, 繁體AI視頻, 字節跳動AI, AI電影製作, 影院級AI, 視頻生成, AI內容創作"
    },
    blog: {
      page_title: "Seedance AI視頻生成博客 - 教程指南與最新動態",
      description: "閱讀最新的Seedance 2.0使用教程、創作指南和行業動態，學習如何使用AI創造高質量電影級視頻。",
      keywords: "Seedance博客, AI視頻教程, 文本轉視頻指南, 圖片轉視頻技巧, AI電影製作博客, Seedance動態"
    },
    guide: {
      page_title: "Seedance 2.0 使用指南 - 官方文檔與教程",
      description: "Seedance 2.0 官方使用指南，包含完整文檔、分步教程和創作最佳實踐，幫助你快速掌握AI視頻創作。",
      keywords: "Seedance指南, Seedance文檔, Seedance教程, 如何使用Seedance, AI視頻創作指南"
    },
    hero: { title: "導演級控制力", highlight: "Seedance 2.0", subtitle: "統一多模態生成架構。通過文本、圖像和音頻創造電影級視頻，擁有前所未有的控制力和真實感。", button: "開始創作", users: "頂級工作室信賴", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: {
      text_to_video: { title: "文生視頻 AI", desc: "用自然語言描述場景、角色和運鏡，讓AI將其轉化為連貫的多鏡頭視頻。", bullets: ["Cinematic Camera Control", "Multi-Shot Consistency", "Physics-Based Motion"], cta: "Create Video" },
      image_to_video: { title: "圖生視頻 AI", desc: "上傳一張參考圖，讓它變成短視頻。保持高度一致的角色和風格。", bullets: ["Preserve Subject Identity", "Control Motion Strength"], cta: "Animate Image" },
      text_to_image: { title: "文生圖 AI", desc: "將文本提示轉化為高分辨率圖像。描述風格、光照和構圖，生成多種變體。" },
      ai_tools: { title: "AI 視頻特效與工具", desc: "上傳照片，選擇AI視頻特效模板，自動生成風格化短片。", cards: EN_PRODUCT_FEATURES.ai_tools.cards, grid: EN_PRODUCT_FEATURES.ai_tools.grid, cta: "Explore Tools" },
    },
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: {
      about: { title: "關於", description: "關於 Seedance 2.0 - AI 視頻生成平台。", heading: "關於 Seedance 2.0", content: "Seedance 2.0 是統一多模態 AI 視頻生成平台，為創作者提供導演級控制與電影級畫質。我們支持文本、圖像、音頻與視頻輸入，用於專業內容創作。" },
      privacy: { title: "隱私政策", description: "Seedance 2.0 隱私政策。", heading: "隱私政策", content: "我們尊重您的隱私。本政策說明我們如何收集、使用與保護您在使用我們服務時的資訊。我們使用數據以改進 AI 視頻平台並為您提供更好體驗。我們不會向第三方出售您的個人資訊。" },
      terms: { title: "服務條款", description: "Seedance 2.0 服務條款。", heading: "服務條款", content: "使用 Seedance 2.0 即表示您同意本條款。我們的服務僅供合法使用。您保留所創作內容的權利；我們可能使用匿名數據改進模型。我們保留更新本條款的權利；繼續使用即視為接受。" },
    },
  },
  es: {
    seo: { 
      title: "Seedance 2.0 - Plataforma Inteligente de Generación de Video AI | Seedance Versión en Español", 
      description: "Seedance 2.0 es un modelo de generación de video AI de última generación que soporta entradas de texto, imagen, audio y video para la creación de contenido de calidad cinematográfica.",
      keywords: "Seedance, Seedance 2.0, AI video, generador de video AI, texto a video, imagen a video, IA multimodal, modelo de video AI, creación de video AI, ByteDance AI, filmación con IA, IA cinematográfica, generación de video, creación de contenido con IA"
    },
    hero: { title: "Control a Nivel de Director con", highlight: "Seedance 2.0", subtitle: "La arquitectura de generación multimodal unificada. Crea videos cinematográficos a partir de texto, imágenes y audio con un control y realismo sin precedentes.", button: "Empezar a Generar", users: "Confiado por Estudios Top", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: {
      text_to_video: { title: "IA de Texto a Video", desc: "Describe escenas, personajes y movimientos de cámara en lenguaje natural y deja que nuestra IA los convierta en videos coherentes de múltiples tomas.", bullets: EN_PRODUCT_FEATURES.text_to_video.bullets, cta: "Create Video" },
      image_to_video: { title: "IA de Imagen a Video", desc: "Sube una foto de referencia y mira cómo se convierte en un video corto generado por IA. Preserva la identidad y el estilo con alta fidelidad.", bullets: EN_PRODUCT_FEATURES.image_to_video.bullets, cta: "Animate Image" },
      text_to_image: { title: "IA de Texto a Imagen", desc: "Convierte indicaciones de texto en imágenes de alta resolución. Describe estilo, iluminación y composición una vez, luego genera múltiples variaciones." },
      ai_tools: { title: "Efectos y Herramientas de Video AI", desc: "Sube fotos, elige una plantilla de efectos de video AI y deja que nuestro sistema genere automáticamente un clip estilizado.", cards: EN_PRODUCT_FEATURES.ai_tools.cards, grid: EN_PRODUCT_FEATURES.ai_tools.grid, cta: "Explore Tools" },
    },
    features: { title: "¿Por qué elegir Seedance 2.0?", subtitle: "Rompe los límites de la creatividad con capacidades multimodales completas.", list: [
      { title: "Arquitectura Multimodal Unificada", desc: "Soporta entradas de texto, imagen, audio y video. Edición integrada para una creación fluida." },
      { title: "Control a Nivel de Director", desc: "Control preciso de actuación, iluminación y movimiento de cámara. Tu visión creativa, tal como la imaginaste." },
      { title: "Calidad Hiperrealista", desc: "Estabilidad de movimiento y respeto por las leyes físicas. Sincronización nativa audio‑video." },
      { title: "Flujo de Trabajo de Grado Industrial", desc: "Ideal para publicidad, cine y redes sociales. Calidad de salida a nivel profesional." },
    ]},
    comparison: { title: "Seedance 2.0 vs. Otros", headers: ["Función", "Seedance 2.0", "Otros Modelos"], rows: [
      { label: "Seguimiento de Instrucciones", us: "✅ Alta Precisión", others: "⚠️ Inconsistente" },
      { label: "Calidad de Movimiento", us: "✅ Suave y Realista", others: "❌ Tembloroso" },
      { label: "Consistencia Multitoma", us: "✅ Coherente", others: "❌ Fragmentado" },
      { label: "Sincronización Audio‑Video", us: "✅ Soporte Nativo", others: "❌ Herramientas Separadas" },
    ]},
    showcase: { title: "Creatividad Ilimitada", items: [
      { title: "Producción Cinematográfica", desc: "Genera guiones gráficos y planos finales." },
      { title: "Publicidad", desc: "Crea anuncios de video de alta conversión en minutos." },
      { title: "Redes Sociales", desc: "Contenido viral con facilidad." },
      { title: "Diseño de Juegos", desc: "Cinemáticas y animaciones de personajes." },
    ]},
    testimonials: { title: "Reconocimiento de la Industria", list: [
      { review: "La controlabilidad de Seedance 2.0 es un cambio de juego. Es como tener un equipo de filmación virtual.", author: "Alex Rivera", role: "Director de Cine" },
      { review: "La calidad y estabilidad del video no tienen rival. Perfecto para nuestros proyectos comerciales de alto nivel.", author: "Jessica Wu", role: "Directora Creativa" },
      { review: "Por fin, una herramienta de video con IA que entiende movimientos de cámara y instrucciones de iluminación complejas.", author: "David Chen", role: "Artista de VFX" },
    ]},
    faq: { title: "Preguntas Frecuentes", items: [
      { q: "¿Qué es Seedance 2.0?", a: "Seedance 2.0 es un modelo de IA de nueva generación que genera videos de alta calidad a partir de texto, imágenes y audio." },
      { q: "¿Puedo usar Seedance en proyectos comerciales?", a: "Sí. Los planes Pro incluyen derechos comerciales completos para todo el contenido generado." },
      { q: "¿Cómo se compara con Sora o Kling?", a: "Seedance 2.0 destaca en seguimiento de instrucciones y estabilidad del movimiento, ofreciendo control superior para flujos profesionales." },
      { q: "¿Hay prueba gratuita?", a: "Sí. Puedes probar Seedance 2.0 gratis con créditos diarios." },
    ]},
    legal: EN_LEGAL, // 待翻译
  },
  ar: {
    seo: { title: "Seedance 2.0 - منصة إنشاء فيديو ذكية بالذكاء الاصطناعي | Seedance النسخة العربية", description: "Seedance 2.0 هو نموذج متطور لإنشاء الفيديو بالذكاء الاصطناعي يدعم إدخال النصوص والصور والصوت والفيديو لإنشاء محتوى بجودة سينمائية." },
    hero: { title: "تحكم بمستوى المخرج مع", highlight: "Seedance 2.0", subtitle: "بنية التوليد متعددة الوسائط الموحدة. أنشئ فيديوهات سينمائية من النصوص والصور والصوت بتحكم وواقعية غير مسبوقة.", button: "ابدأ التوليد", users: "موثوق به من قبل أفضل الاستوديوهات", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: { title: "لماذا تختار Seedance 2.0؟", subtitle: "اكسر حدود الإبداع بقدرات توليد متعددة الوسائط شاملة.", list: [
      { title: "بنية متعددة الوسائط موحدة", desc: "يدعم إدخال النصوص والصور والصوت والفيديو. تحرير مدمج لإنشاء سلس." },
      { title: "تحكم بمستوى المخرج", desc: "تحكم دقيق في الأداء والإضاءة وحركة الكاميرا. رؤيتك كما تخيلتها." },
      { title: "جودة فائقة الواقعية", desc: "ثبات حركة استثنائي وامتثال للقوانين الفيزيائية. تزامن صوتي بصري أصلي." },
      { title: "سير عمل بمستوى صناعي", desc: "ملائم للإعلانات والسينما والشبكات الاجتماعية. جودة مخرجات بمعايير احترافية." },
    ]},
    comparison: { title: "Seedance 2.0 مقابل الآخرين", headers: ["الميزة", "Seedance 2.0", "نماذج أخرى"], rows: [
      { label: "اتباع التعليمات", us: "✅ دقة عالية", others: "⚠️ غير ثابت" },
      { label: "جودة الحركة", us: "✅ سلس وواقعي", others: "❌ اهتزاز" },
      { label: "الاتساق عبر اللقطات", us: "✅ متماسك", others: "❌ مجزأ" },
      { label: "تزامن صوتي بصري", us: "✅ دعم أصلي", others: "❌ أدوات منفصلة" },
    ]},
    showcase: { title: "إبداع بلا حدود", items: [
      { title: "إنتاج الأفلام", desc: "توليد لوحات القصص واللقطات النهائية." },
      { title: "الإعلانات", desc: "إنشاء إعلانات فيديو عالية التحويل خلال دقائق." },
      { title: "وسائل التواصل", desc: "صناعة محتوى فيروسي بسهولة." },
      { title: "تصميم الألعاب", desc: "مشاهد سردية ورسوم شخصيات." },
    ]},
    testimonials: { title: "إشادة الصناعة", list: [
      { review: "قابلية التحكم في Seedance 2.0 تغير قواعد اللعبة. إنه كامتلاك فريق تصوير افتراضي.", author: "Alex Rivera", role: "مخرج أفلام" },
      { review: "جودة الفيديو واستقراره لا مثيل لهما. مثالي لمشاريعنا التجارية الراقية.", author: "Jessica Wu", role: "مديرة إبداعية" },
      { review: "أخيراً، أداة فيديو بالذكاء الاصطناعي تفهم حركات كاميرا وتعليمات إضاءة معقدة.", author: "David Chen", role: "فنان المؤثرات البصرية" },
    ]},
    faq: { title: "الأسئلة الشائعة", items: [
      { q: "ما هو Seedance 2.0؟", a: "Seedance 2.0 هو نموذج فيديو بالذكاء الاصطناعي من الجيل الجديد ينشئ فيديوهات عالية الجودة من النصوص والصور والصوت." },
      { q: "هل يمكن استخدامه في مشاريع تجارية؟", a: "نعم. تتضمن باقات Pro حقوقًا تجارية كاملة لكل المحتوى المُنشأ." },
      { q: "كيف يقارن بـ Sora أو Kling؟", a: "يتفوق Seedance 2.0 في اتباع التعليمات واستقرار الحركة، مما يوفر تحكمًا متقدمًا لعمليات احترافية." },
      { q: "هل توجد تجربة مجانية؟", a: "نعم. يمكنك تجربة Seedance 2.0 مجانًا مع أرصدة يومية." },
    ]},
    legal: EN_LEGAL, // 待翻译
  },
  pt: {
    seo: { title: "Seedance 2.0 - Plataforma Inteligente de Geração de Vídeo AI | Seedance Versão em Português", description: "Seedance 2.0 é um modelo de geração de vídeo AI de última geração que suporta entradas de texto, imagem, áudio e vídeo para criação de conteúdo de qualidade cinematográfica." },
    hero: { title: "Controle de Nível de Diretor com", highlight: "Seedance 2.0", subtitle: "A arquitetura de geração multimodal unificada. Crie vídeos cinematográficos a partir de texto, imagens e áudio com controle e realismo sem precedentes.", button: "Começar a Gerar", users: "Confiado por Estúdios Top", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: {
      text_to_video: { title: "IA de Texto para Vídeo", desc: "Descreva cenas, personagens e movimentos de câmera em linguagem natural e deixe nossa IA transformá-los em vídeos coerentes de várias tomadas.", bullets: EN_PRODUCT_FEATURES.text_to_video.bullets, cta: "Create Video" },
      image_to_video: { title: "IA de Imagem para Vídeo", desc: "Carregue uma foto de referência e veja-a se tornar um vídeo curto gerado por IA. Preserve a identidade e o estilo com alta fidelidade.", bullets: EN_PRODUCT_FEATURES.image_to_video.bullets, cta: "Animate Image" },
      text_to_image: { title: "IA de Texto para Imagem", desc: "Transforme prompts de texto em imagens de alta resolução. Descreva estilo, iluminação e composição uma vez, depois gere várias variações." },
      ai_tools: { title: "Efeitos e Ferramentas de Vídeo IA", desc: "Carregue fotos, escolha um modelo de efeito de vídeo IA e deixe nosso sistema gerar automaticamente um clipe estilizado.", cards: EN_PRODUCT_FEATURES.ai_tools.cards, grid: EN_PRODUCT_FEATURES.ai_tools.grid, cta: "Explore Tools" },
    },
    features: { title: "Por que escolher o Seedance 2.0?", subtitle: "Rompa limites criativos com capacidades multimodais completas.", list: [
      { title: "Arquitetura Multimodal Unificada", desc: "Suporta entradas de texto, imagem, áudio e vídeo. Edição integrada para criação fluida." },
      { title: "Controle em Nível de Diretor", desc: "Controle preciso de atuação, iluminação e movimentos de câmera. Sua visão exatamente como imaginou." },
      { title: "Qualidade Hiper‑Realista", desc: "Estabilidade de movimento excepcional e aderência às leis físicas. Sincronização nativa áudio‑vídeo." },
      { title: "Fluxo de Trabalho de Grau Industrial", desc: "Ideal para publicidade, cinema e redes sociais. Qualidade de saída em nível profissional." },
    ]},
    comparison: { title: "Seedance 2.0 vs. Outros", headers: ["Recurso", "Seedance 2.0", "Outros Modelos"], rows: [
      { label: "Seguimento de Instruções", us: "✅ Alta Precisão", others: "⚠️ Inconsistente" },
      { label: "Qualidade de Movimento", us: "✅ Suave e Realista", others: "❌ Trêmulo" },
      { label: "Consistência entre Tomadas", us: "✅ Coerente", others: "❌ Fragmentado" },
      { label: "Sincronização Áudio‑Vídeo", us: "✅ Suporte Nativo", others: "❌ Ferramentas Separadas" },
    ]},
    showcase: { title: "Criatividade Ilimitada", items: [
      { title: "Produção Cinematográfica", desc: "Gere storyboards e planos finais." },
      { title: "Publicidade", desc: "Crie anúncios de vídeo de alta conversão em minutos." },
      { title: "Redes Sociais", desc: "Criação de conteúdo viral com facilidade." },
      { title: "Design de Jogos", desc: "Cutscenes e animações de personagens." },
    ]},
    testimonials: { title: "Reconhecimento da Indústria", list: [
      { review: "A controlabilidade do Seedance 2.0 muda o jogo. É como ter uma equipe de filmagem virtual.", author: "Alex Rivera", role: "Diretor de Cinema" },
      { review: "Qualidade e estabilidade de vídeo incomparáveis. Perfeito para nossos projetos comerciais de alto padrão.", author: "Jessica Wu", role: "Diretora Criativa" },
      { review: "Finalmente, uma ferramenta de vídeo com IA que entende movimentos de câmera e instruções de iluminação complexas.", author: "David Chen", role: "Artista de VFX" },
    ]},
    faq: { title: "Perguntas Frequentes", items: [
      { q: "O que é o Seedance 2.0?", a: "Seedance 2.0 é um modelo de vídeo de IA de nova geração que gera vídeos de alta qualidade a partir de texto, imagens e áudio." },
      { q: "Posso usar o Seedance em projetos comerciais?", a: "Sim. Os planos Pro incluem direitos comerciais completos para todo o conteúdo gerado." },
      { q: "Como se compara ao Sora ou Kling?", a: "Seedance 2.0 se destaca em seguimento de instruções e estabilidade de movimento, oferecendo controle superior para fluxos profissionais." },
      { q: "Existe teste gratuito?", a: "Sim. Você pode experimentar o Seedance 2.0 gratuitamente com créditos diários." },
    ]},
    legal: EN_LEGAL, // 待翻译
  },
  id: {
    seo: { title: "Seedance 2.0 - Platform Pembuatan Video AI Cerdas | Seedance Versi Bahasa Indonesia", description: "Seedance 2.0 adalah model pembuatan video AI canggih yang mendukung input teks, gambar, audio, dan video untuk pembuatan konten berkualitas sinematik." },
    hero: { title: "Kontrol Tingkat Sutradara dengan", highlight: "Seedance 2.0", subtitle: "Arsitektur pembuatan multimoda terpadu. Buat video sinematik dari teks, gambar, dan audio dengan kontrol dan realisme yang belum pernah ada sebelumnya.", button: "Mulai Membuat", users: "Dipercaya oleh Studio Terkemuka", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL, // 待翻译
  },
  ms: {
    seo: { title: "Seedance 2.0 - Platform Penjanaan Video AI Pintar | Seedance Versi Bahasa Melayu", description: "Seedance 2.0 ialah model penjanaan video AI canggih yang menyokong input teks, imej, audio dan video untuk penciptaan kandungan kualiti sinematik." },
    hero: { title: "Kawalan Tahap Pengarah dengan", highlight: "Seedance 2.0", subtitle: "Senibina penjanaan multimodal bersepadu. Cipta video sinematik daripada teks, imej dan audio dengan kawalan dan realisme yang tidak pernah berlaku sebelum ini.", button: "Mula Menjana", users: "Dipercayai oleh Studio Terkemuka", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL, // 待翻译
  },
  fr: {
    seo: { title: "Seedance 2.0 - Plateforme de Génération Vidéo IA Intelligente | Seedance Version Française", description: "Seedance 2.0 est un modèle de génération vidéo IA de pointe prenant en charge les entrées texte, image, audio et vidéo pour la création de contenu de qualité cinématographique." },
    hero: { title: "Contrôle de Niveau Réalisateur avec", highlight: "Seedance 2.0", subtitle: "L'architecture de génération multimodale unifiée. Créez des vidéos cinématographiques à partir de texte, d'images et d'audio avec un contrôle et un réalisme sans précédent.", button: "Commencer à Générer", users: "Approuvé par les Meilleurs Studios", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: {
      text_to_video: { title: "IA Texte en Vidéo", desc: "Décrivez des scènes, des personnages et des mouvements de caméra en langage naturel et laissez notre IA les transformer en vidéos cohérentes à plusieurs plans.", bullets: EN_PRODUCT_FEATURES.text_to_video.bullets, cta: "Create Video" },
      image_to_video: { title: "IA Image en Vidéo", desc: "Téléchargez une photo de référence et regardez-la devenir une courte vidéo générée par IA. Préservez l'identité et le style avec une haute fidélité.", bullets: EN_PRODUCT_FEATURES.image_to_video.bullets, cta: "Animate Image" },
      text_to_image: { title: "IA Texte en Image", desc: "Transformez des invites textuelles en images haute résolution. Décrivez le style, l'éclairage et la composition une fois, puis générez plusieurs variations." },
      ai_tools: { title: "Effets et Outils Vidéo IA", desc: "Téléchargez des photos, choisissez un modèle d'effet vidéo IA et laissez notre système générer automatiquement un clip stylisé.", cards: EN_PRODUCT_FEATURES.ai_tools.cards, grid: EN_PRODUCT_FEATURES.ai_tools.grid, cta: "Explore Tools" },
    },
    features: { title: "Pourquoi choisir Seedance 2.0 ?", subtitle: "Repoussez les limites de la créativité avec des capacités multimodales complètes.", list: [
      { title: "Architecture Multimodale Unifiée", desc: "Prend en charge le texte, l'image, l'audio et la vidéo. Édition intégrée pour une création fluide." },
      { title: "Contrôle de Niveau Réalisateur", desc: "Contrôle précis du jeu, de l'éclairage et des mouvements de caméra. Votre vision créative, telle que vous l'aviez imaginée." },
      { title: "Qualité Hyper‑Réaliste", desc: "Grande stabilité des mouvements et respect des lois physiques. Synchronisation audio‑vidéo native." },
      { title: "Flux de Travail de Niveau Industriel", desc: "Adapté à la publicité, au cinéma et aux réseaux sociaux. Qualité d'export répondant aux standards professionnels." },
    ]},
    comparison: { title: "Seedance 2.0 vs. Les autres", headers: ["Fonction", "Seedance 2.0", "Autres modèles"], rows: [
      { label: "Suivi des instructions", us: "✅ Haute précision", others: "⚠️ Inconstant" },
      { label: "Qualité du mouvement", us: "✅ Fluide et réaliste", others: "❌ Tremblant" },
      { label: "Cohérence multi‑plans", us: "✅ Cohérent", others: "❌ Fragmenté" },
      { label: "Synchronisation audio‑vidéo", us: "✅ Support natif", others: "❌ Outils séparés" },
    ]},
    showcase: { title: "Créativité Illimitée", items: [
      { title: "Production Film", desc: "Générez des storyboards et des plans finaux." },
      { title: "Publicité", desc: "Créez des publicités vidéo performantes en quelques minutes." },
      { title: "Réseaux Sociaux", desc: "Création de contenus viraux en toute simplicité." },
      { title: "Conception de Jeux", desc: "Cinétiques et animations de personnages." },
    ]},
    testimonials: { title: "Reconnaissance de l'Industrie", list: [
      { review: "La contrôlabilité de Seedance 2.0 change la donne. C'est comme avoir une équipe de tournage virtuelle.", author: "Alex Rivera", role: "Réalisateur" },
      { review: "La qualité et la stabilité vidéo sont inégalées. Parfaites pour nos projets publicitaires haut de gamme.", author: "Jessica Wu", role: "Directrice Créative" },
      { review: "Enfin, un outil vidéo IA qui comprend les mouvements de caméra et les instructions d'éclairage complexes.", author: "David Chen", role: "Artiste VFX" },
    ]},
    faq: { title: "Questions Fréquemment Posées", items: [
      { q: "Qu'est‑ce que Seedance 2.0 ?", a: "Seedance 2.0 est un modèle vidéo IA de nouvelle génération, capable de générer des vidéos de haute qualité à partir de texte, d'images et d'audio." },
      { q: "Puis‑je l'utiliser pour des projets commerciaux ?", a: "Oui. Les offres Pro incluent des droits commerciaux complets sur tous les contenus générés." },
      { q: "Comment se compare‑t‑il à Sora ou Kling ?", a: "Seedance 2.0 excelle dans le suivi des instructions et la stabilité des mouvements, offrant un contrôle supérieur pour les workflows professionnels." },
      { q: "Y a‑t‑il un essai gratuit ?", a: "Oui. Essayez Seedance 2.0 gratuitement avec des crédits quotidiens." },
    ]},
    legal: EN_LEGAL, // 待翻译
  },
  ru: {
    seo: { title: "Seedance 2.0 - Интеллектуальная платформа генерации видео с ИИ | Seedance Русская версия", description: "Seedance 2.0 - это современная модель генерации видео ИИ, поддерживающая ввод текста, изображений, аудио и видео для создания контента кинематографического качества." },
    hero: { title: "Режиссерский контроль с", highlight: "Seedance 2.0", subtitle: "Единая архитектура мультимодальной генерации. Создавайте кинематографические видео из текста, изображений и аудио с беспрецедентным контролем и реализмом.", button: "Начать генерацию", users: "Доверяют лучшие студии", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: {
      text_to_video: { title: "ИИ Текст в Видео", desc: "Опишите сцены, персонажей и движения камеры на естественном языке, и позвольте нашему ИИ превратить их в связные многокадровые видео.", bullets: EN_PRODUCT_FEATURES.text_to_video.bullets, cta: "Create Video" },
      image_to_video: { title: "ИИ Изображение в Видео", desc: "Загрузите эталонное фото и посмотрите, как оно станет коротким видео, сгенерированным ИИ. Сохраняйте идентичность и стиль с высокой точностью.", bullets: EN_PRODUCT_FEATURES.image_to_video.bullets, cta: "Animate Image" },
      text_to_image: { title: "ИИ Текст в Изображение", desc: "Превращайте текстовые подсказки в изображения высокого разрешения. Опишите стиль, освещение и композицию один раз, затем генерируйте несколько вариантов." },
      ai_tools: { title: "ИИ Видеоэффекты и Инструменты", desc: "Загрузите фотографии, выберите шаблон видеоэффекта ИИ, и наша система автоматически сгенерирует стилизованный клип.", cards: EN_PRODUCT_FEATURES.ai_tools.cards, grid: EN_PRODUCT_FEATURES.ai_tools.grid, cta: "Explore Tools" },
    },
    features: { title: "Почему выбрать Seedance 2.0?", subtitle: "Разрушайте границы творчества благодаря полным мультимодальным возможностям.", list: [
      { title: "Единая мультимодальная архитектура", desc: "Поддержка текста, изображений, аудио и видео. Встроенное редактирование для плавного создания." },
      { title: "Контроль на уровне режиссера", desc: "Точный контроль актерской игры, света и движения камеры. Результат в точности как задумывалось." },
      { title: "Гиперреалистичное качество", desc: "Исключительная стабильность движения и соблюдение физических законов. Родная аудиовидеосинхронизация." },
      { title: "Промышленный рабочий процесс", desc: "Подходит для рекламы, кино и соцсетей. Качество выхода соответствует отраслевым стандартам." },
    ]},
    comparison: { title: "Seedance 2.0 против других", headers: ["Функция", "Seedance 2.0", "Другие модели"], rows: [
      { label: "Следование инструкциям", us: "✅ Высокая точность", others: "⚠️ Непоследовательно" },
      { label: "Качество движения", us: "✅ Плавно и реалистично", others: "❌ Дрожит" },
      { label: "Согласованность между кадрами", us: "✅ Коорентно", others: "❌ Фрагментарно" },
      { label: "Аудиовидеосинхронизация", us: "✅ Родная поддержка", others: "❌ Отдельные инструменты" },
    ]},
    showcase: { title: "Безграничное творчество", items: [
      { title: "Кинопроизводство", desc: "Генерация раскадровок и финальных кадров." },
      { title: "Реклама", desc: "Создание высококонверсионных видеореклам за минуты." },
      { title: "Социальные сети", desc: "Легкое создание вирусного контента." },
      { title: "Дизайн игр", desc: "Катсцены и анимации персонажей." },
    ]},
    testimonials: { title: "Признание индустрии", list: [
      { review: "Контролируемость Seedance 2.0 меняет правила игры. Как будто у вас есть виртуальная съемочная группа.", author: "Alex Rivera", role: "Режиссёр" },
      { review: "Качество и стабильность видео непревзойденны. Идеально для наших премиальных коммерческих проектов.", author: "Jessica Wu", role: "Креативный директор" },
      { review: "Наконец‑то инструмент ИИ‑видео, который понимает сложные движения камеры и световые инструкции.", author: "David Chen", role: "VFX‑художник" },
    ]},
    faq: { title: "Часто задаваемые вопросы", items: [
      { q: "Что такое Seedance 2.0?", a: "Seedance 2.0 — это видеомодель ИИ нового поколения, генерирующая высококачественные видео из текста, изображений и аудио." },
      { q: "Можно ли использовать Seedance в коммерческих проектах?", a: "Да. В тарифах Pro включены полные коммерческие права на весь сгенерированный контент." },
      { q: "Как он сравнивается с Sora или Kling?", a: "Seedance 2.0 превосходит в следовании инструкциям и стабильности движения, предоставляя превосходный контроль для профессиональных процессов." },
      { q: "Есть ли бесплатная пробная версия?", a: "Да. Вы можете попробовать Seedance 2.0 бесплатно благодаря ежедневным кредитам." },
    ]},
    legal: EN_LEGAL, // 待翻译
  },
  hi: {
    seo: { title: "Seedance 2.0 - बुद्धिमान एआई वीडियो निर्माण मंच | Seedance हिंदी संस्करण", description: "Seedance 2.0 एक अत्याधुनिक AI वीडियो जनरेशन मॉडल है जो सिनेमाई गुणवत्ता वाली सामग्री निर्माण के लिए टेक्स्ट, छवि, ऑडियो और वीडियो इनपुट का समर्थन करता है।" },
    hero: { title: "निर्देशक स्तर का नियंत्रण", highlight: "Seedance 2.0", subtitle: "एकीकृत मल्टीमोडल जनरेशन आर्किटेक्चर। अभूतपूर्व नियंत्रण और यथार्थवाद के साथ टेक्स्ट, छवियों और ऑडियो से सिनेमाई वीडियो बनाएं।", button: "बनाना शुरू करें", users: "शीर्ष स्टूडियो द्वारा विश्वसनीय", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL, // 待翻译
  },
  ja: {
    seo: { 
      title: "Seedance 2.0 - インテリジェントAI動画生成プラットフォーム | Seedance 日本語版", 
      description: "Seedance 2.0は、テキスト、画像、音声、動画入力をサポートし、映画品質のコンテンツを作成する最先端のAI動画生成モデルです。",
      keywords: "Seedance, Seedance 2.0, AI動画, AI動画生成, テキスト動画生成, 画像動画生成, マルチモーダルAI, 動画AIモデル, AI動画作成, バイトダンスAI, AI映画制作, シネマティックAI, 動画生成, AIコンテンツ作成"
    },
    hero: { title: "監督レベルの制御", highlight: "Seedance 2.0", subtitle: "統合マルチモーダル生成アーキテクチャ。テキスト、画像、音声から映画のような動画を作成し、前例のない制御とリアリズムを実現します。", button: "作成を開始", users: "トップスタジオが信頼", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: {
      text_to_video: { title: "テキスト動画生成 AI", desc: "自然言語でシーン、キャラクター、カメラワークを記述し、AIが一貫したマルチショット動画に変換します。", bullets: EN_PRODUCT_FEATURES.text_to_video.bullets, cta: "Create Video" },
      image_to_video: { title: "画像動画生成 AI", desc: "参照画像をアップロードして、短いAI生成動画にします。アイデンティティとスタイルを高精度に保持します。", bullets: EN_PRODUCT_FEATURES.image_to_video.bullets, cta: "Animate Image" },
      text_to_image: { title: "テキスト画像生成 AI", desc: "テキストプロンプトを高解像度画像に変換します。スタイル、照明、構図を記述し、複数のバリエーションを生成します。" },
      ai_tools: { title: "AI 動画エフェクト＆ツール", desc: "写真をアップロードし、AI動画エフェクトテンプレートを選択して、スタイリッシュなクリップを自動生成します。", cards: EN_PRODUCT_FEATURES.ai_tools.cards, grid: EN_PRODUCT_FEATURES.ai_tools.grid, cta: "Explore Tools" },
    },
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL, // 待翻译
  },
  de: {
    seo: { title: "Seedance 2.0 - Intelligente KI-Videogenerierungsplattform | Seedance Deutsche Version", description: "Seedance 2.0 ist ein hochmodernes KI-Videogenerierungsmodell, das Text-, Bild-, Audio- und Videoeingaben für die Erstellung von Inhalten in Kinoqualität unterstützt." },
    hero: { title: "Regie-Level Kontrolle mit", highlight: "Seedance 2.0", subtitle: "Die einheitliche multimodale Generierungsarchitektur. Erstellen Sie kinoreife Videos aus Text, Bildern und Audio mit beispielloser Kontrolle und Realismus.", button: "Generierung Starten", users: "Von Top-Studios Vertraut", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: {
      text_to_video: { title: "Text-zu-Video KI", desc: "Beschreiben Sie Szenen, Charaktere und Kamerabewegungen in natürlicher Sprache und lassen Sie unsere KI diese in kohärente Multi-Shot-Videos verwandeln.", bullets: EN_PRODUCT_FEATURES.text_to_video.bullets, cta: "Create Video" },
      image_to_video: { title: "Bild-zu-Video KI", desc: "Laden Sie ein Referenzfoto hoch und sehen Sie zu, wie es zu einem kurzen KI-generierten Video wird. Bewahren Sie Identität und Stil mit hoher Wiedergabetreue.", bullets: EN_PRODUCT_FEATURES.image_to_video.bullets, cta: "Animate Image" },
      text_to_image: { title: "Text-zu-Bild KI", desc: "Verwandeln Sie Textaufforderungen in hochauflösende Bilder. Beschreiben Sie Stil, Beleuchtung und Komposition einmal und generieren Sie dann mehrere Variationen." },
      ai_tools: { title: "KI-Videoeffekte & Tools", desc: "Laden Sie Fotos hoch, wählen Sie eine KI-Videoeffektvorlage und lassen Sie unser System automatisch einen stilisierten Clip generieren.", cards: EN_PRODUCT_FEATURES.ai_tools.cards, grid: EN_PRODUCT_FEATURES.ai_tools.grid, cta: "Explore Tools" },
    },
    features: { title: "Warum Seedance 2.0 wählen?", subtitle: "Sprengen Sie kreative Grenzen mit umfassenden multimodalen Fähigkeiten.", list: [
      { title: "Einheitliche Multimodale Architektur", desc: "Unterstützt Text-, Bild-, Audio- und Videoeingaben. Integrierte Bearbeitung für nahtlose Erstellung." },
      { title: "Regie‑Level Kontrolle", desc: "Präzise Steuerung von Schauspiel, Licht und Kamerabewegung. Ihre Vision exakt wie vorgestellt." },
      { title: "Hyper‑Realistische Qualität", desc: "Außergewöhnliche Bewegungsstabilität und physikalische Konsistenz. Native Audio‑Video‑Synchronisation." },
      { title: "Industrieller Workflow", desc: "Geeignet für Werbung, Film und Social Media. Ausgabestandard auf professionellem Niveau." },
    ]},
    comparison: { title: "Seedance 2.0 vs. Andere", headers: ["Funktion", "Seedance 2.0", "Andere Modelle"], rows: [
      { label: "Befolgen von Anweisungen", us: "✅ Hohe Präzision", others: "⚠️ Inkonsistent" },
      { label: "Bewegungsqualität", us: "✅ Sanft & Realistisch", others: "❌ Ruckelig" },
      { label: "Konsistenz über mehrere Aufnahmen", us: "✅ Kohärent", others: "❌ Fragmentiert" },
      { label: "Audio‑Video‑Synchronisation", us: "✅ Native Unterstützung", others: "❌ Separate Tools" },
    ]},
    showcase: { title: "Grenzenlose Kreativität", items: [
      { title: "Filmproduktion", desc: "Erstellen Sie Storyboards und finale Einstellungen." },
      { title: "Werbung", desc: "Erzeugen Sie leistungsstarke Videoanzeigen in Minuten." },
      { title: "Soziale Medien", desc: "Einfache Erstellung viraler Inhalte." },
      { title: "Spieldesign", desc: "Zwischensequenzen und Charakteranimationen." },
    ]},
    testimonials: { title: "Anerkennung der Branche", list: [
      { review: "Die Kontrollierbarkeit von Seedance 2.0 ist revolutionär. Es ist wie ein virtuelles Filmteam.", author: "Alex Rivera", role: "Filmregisseur" },
      { review: "Bildqualität und Stabilität sind unübertroffen. Perfekt für unsere hochwertigen Projekte.", author: "Jessica Wu", role: "Creative Director" },
      { review: "Endlich ein KI‑Videotool, das komplexe Kamerabewegungen und Lichtanweisungen versteht.", author: "David Chen", role: "VFX‑Künstler" },
    ]},
    faq: { title: "Häufig gestellte Fragen", items: [
      { q: "Was ist Seedance 2.0?", a: "Seedance 2.0 ist ein KI‑Videomodell der nächsten Generation, das hochwertige Videos aus Text, Bildern und Audio generiert." },
      { q: "Kann ich Seedance für kommerzielle Projekte verwenden?", a: "Ja. In den Pro‑Plänen sind umfassende kommerzielle Rechte für alle generierten Inhalte enthalten." },
      { q: "Wie schneidet es im Vergleich zu Sora oder Kling ab?", a: "Seedance 2.0 überzeugt beim Befolgen von Anweisungen und bei der Bewegungsstabilität und bietet überlegene Kontrolle für professionelle Workflows." },
      { q: "Gibt es eine kostenlose Testversion?", a: "Ja. Sie können Seedance 2.0 mit täglichen Credits kostenlos testen." },
    ]},
    legal: EN_LEGAL, // 待翻译
  },
  ko: {
    seo: { 
      title: "Seedance 2.0 - 지능형 AI 비디오 생성 플랫폼 | Seedance 한국어 버전", 
      description: "Seedance 2.0은 텍스트, 이미지, 오디오 및 비디오 입력을 지원하여 영화 품질의 콘텐츠를 제작하는 최첨단 AI 비디오 생성 모델입니다。",
      keywords: "Seedance, Seedance 2.0, AI 비디오, AI 비디오 생성, 텍스트 투 비디오, 이미지 투 비디오, 멀티모달 AI, 비디오 AI 모델, AI 비디오 제작, 바이트댄스 AI, AI 영화 제작, 시네마틱 AI, 비디오 생성, AI 콘텐츠 제작"
    },
    hero: { title: "감독 수준의 제어력", highlight: "Seedance 2.0", subtitle: "통합 멀티모달 생성 아키텍처. 텍스트, 이미지, 오디오로 영화 같은 비디오를 제작하며 전례 없는 제어력과 사실감을 제공합니다.", button: "생성 시작", users: "최고의 스튜디오들이 신뢰", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: {
      text_to_video: { title: "텍스트 투 비디오 AI", desc: "자연어로 장면, 캐릭터, 카메라 움직임을 설명하면 AI가 이를 일관된 멀티 샷 비디오로 변환합니다.", bullets: EN_PRODUCT_FEATURES.text_to_video.bullets, cta: "Create Video" },
      image_to_video: { title: "이미지 투 비디오 AI", desc: "참조 사진을 업로드하고 짧은 AI 생성 비디오로 변환되는 것을 지켜보세요. 정체성과 스타일을 고화질로 보존합니다.", bullets: EN_PRODUCT_FEATURES.image_to_video.bullets, cta: "Animate Image" },
      text_to_image: { title: "텍스트 투 이미지 AI", desc: "텍스트 프롬프트를 고해상도 이미지로 변환합니다. 스타일, 조명, 구도를 한 번 설명하고 다양한 변형을 생성하세요." },
      ai_tools: { title: "AI 비디오 효과 및 도구", desc: "사진을 업로드하고 AI 비디오 효과 템플릿을 선택하면 시스템이 자동으로 스타일리시한 클립을 생성합니다.", cards: EN_PRODUCT_FEATURES.ai_tools.cards, grid: EN_PRODUCT_FEATURES.ai_tools.grid, cta: "Explore Tools" },
    },
    features: { title: "왜 Seedance 2.0인가?", subtitle: "가장 포괄적인 멀티모달 생성 능력으로 창의성의 경계를 넘다.", list: [
      { title: "통합 멀티모달 아키텍처", desc: "텍스트·이미지·오디오·비디오 입력 지원. 통합 편집으로 매끄러운 제작." },
      { title: "감독 수준의 제어력", desc: "연기·조명·운镜을 정밀하게 통제. 상상한 그대로의 결과물." },
      { title: "초현실적 품질", desc: "탁월한 모션 안정성과 물리 법칙 준수. 네이티브 음영상 동기화." },
      { title: "산업급 워크플로우", desc: "광고·영화·소셜에 최적화. 산업交付 기준의 출력 품질." },
    ]},
    comparison: { title: "Seedance 2.0 vs. 기타", headers: ["기능", "Seedance 2.0", "타 모델"], rows: [
      { label: "지시 따르기", us: "✅ 고정밀", others: "⚠️ 불안정" },
      { label: "모션 품질", us: "✅ 부드럽고 현실적", others: "❌ 흔들림" },
      { label: "멀티샷 일관성", us: "✅ 일관됨", others: "❌ 단편적" },
      { label: "음영상 동기화", us: "✅ 네이티브 지원", others: "❌ 별도 도구" },
    ]},
    showcase: { title: "무한한 창의성", items: [
      { title: "영화 제작", desc: "스토리보드와 최종 샷 생성." },
      { title: "광고", desc: "분 단위로 전환률 높은 영상 광고 제작." },
      { title: "소셜 미디어", desc: "쉬운 바이럴 콘텐츠 제작." },
      { title: "게임 디자인", desc: "컷신과 캐릭터 애니메이션." },
    ]},
    testimonials: { title: "업계의 찬사", list: [
      { review: "Seedance 2.0의 제어력은 판도를 바꿉니다. 가상 촬영팀을 가진 것 같습니다.", author: "Alex Rivera", role: "영화 감독" },
      { review: "영상 품질과 안정성은 타의 추종을 불허합니다. 하이엔드 상업 프로젝트에 완벽합니다.", author: "Jessica Wu", role: "크리에이티브 디렉터" },
      { review: "복잡한 운镜과 조명 지시를 이해하는 최초의 AI 비디오 도구입니다.", author: "David Chen", role: "VFX 아티스트" },
    ]},
    faq: { title: "자주 묻는 질문", items: [
      { q: "Seedance 2.0란?", a: "Seedance 2.0은 텍스트·이미지·오디오 입력으로 고품질 영상을 생성하는 차세대 AI 영상 모델입니다." },
      { q: "상업 프로젝트에 사용 가능한가요?", a: "예. Pro 요금제는 생성 콘텐츠에 대한 상업적 권리를 포함합니다." },
      { q: "Sora/Kling과 비교하면?", a: "Seedance 2.0은 지시 추종성과 모션 안정성에서 탁월하여 전문 워크플로우에 적합한 제어력을 제공합니다." },
      { q: "무료 체험이 있나요?", a: "예. 일일 크레딧으로 무료로 체험할 수 있습니다." },
    ]},
    legal: EN_LEGAL, // 待翻译
  },
  tr: {
    seo: { title: "Seedance 2.0 - Akıllı Yapay Zeka Video Oluşturma Platformu | Seedance Türkçe Sürümü", description: "Seedance 2.0, sinematik kalitede içerik oluşturma için metin, görüntü, ses ve video girişlerini destekleyen son teknoloji bir AI video üretim modelidir." },
    hero: { title: "Yönetmen Seviyesinde Kontrol", highlight: "Seedance 2.0", subtitle: "Birleşik çok modlu üretim mimarisi. Metin, görüntü ve sesten, benzeri görülmemiş kontrol ve gerçekçilikle sinematik videolar oluşturun.", button: "Üretmeye Başla", users: "En İyi Stüdyolar Tarafından Güveniliyor", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL, // 待翻译
  },
  vi: {
    seo: { title: "Seedance 2.0 - Nền tảng tạo video AI thông minh | Seedance Phiên bản tiếng Việt", description: "Seedance 2.0 là mô hình tạo video AI hiện đại hỗ trợ đầu vào văn bản, hình ảnh, âm thanh và video để tạo nội dung chất lượng điện ảnh." },
    hero: { title: "Kiểm soát cấp đạo diễn với", highlight: "Seedance 2.0", subtitle: "Kiến trúc tạo đa phương thức hợp nhất. Tạo video điện ảnh từ văn bản, hình ảnh và âm thanh với khả năng kiểm soát và tính chân thực chưa từng có.", button: "Bắt đầu tạo", users: "Được tin cậy bởi các Studio hàng đầu", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL, // 待翻译
  },
  th: {
    seo: { title: "Seedance 2.0 - แพลตฟอร์มสร้างวิดีโอ AI อัจฉริยะ | Seedance เวอร์ชั่นภาษาไทย", description: "Seedance 2.0 เป็นโมเดลการสร้างวิดีโอ AI ที่ล้ำสมัย รองรับการป้อนข้อมูลทั้งข้อความ รูปภาพ เสียง และวิดีโอ เพื่อสร้างคอนเทนต์คุณภาพระดับภาพยนตร์" },
    hero: { title: "การควบคุมระดับผู้กำกับด้วย", highlight: "Seedance 2.0", subtitle: "สถาปัตยกรรมการสร้างหลายรูปแบบแบบครบวงจร สร้างวิดีโอระดับภาพยนตร์จากข้อความ รูปภาพ และเสียง ด้วยการควบคุมและความสมจริงที่ไม่เคยมีมาก่อน", button: "เริ่มสร้าง", users: "ได้รับความไว้วางใจจากสตูดิโอชั้นนำ", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL, // 待翻译
  },
  it: {
    seo: { title: "Seedance 2.0 - Piattaforma Intelligente di Generazione Video AI | Seedance Versione Italiana", description: "Seedance 2.0 è un modello di generazione video AI all'avanguardia che supporta input di testo, immagini, audio e video per la creazione di contenuti di qualità cinematografica." },
    hero: { title: "Controllo da Regista con", highlight: "Seedance 2.0", subtitle: "L'architettura di generazione multimodale unificata. Crea video cinematografici da testo, immagini e audio con un controllo e un realismo senza precedenti.", button: "Inizia a Generare", users: "Scelto dai Migliori Studi", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: {
      text_to_video: { title: "IA Testo a Video", desc: "Descrivi scene, personaggi e movimenti di macchina in linguaggio naturale e lascia che la nostra IA li trasformi in video coerenti a più inquadrature.", bullets: EN_PRODUCT_FEATURES.text_to_video.bullets, cta: "Create Video" },
      image_to_video: { title: "IA Immagine a Video", desc: "Carica una foto di riferimento e guardala diventare un breve video generato dall'IA. Preserva l'identità e lo stile con alta fedeltà.", bullets: EN_PRODUCT_FEATURES.image_to_video.bullets, cta: "Animate Image" },
      text_to_image: { title: "IA Testo a Immagine", desc: "Trasforma i prompt di testo in immagini ad alta risoluzione. Descrivi stile, illuminazione e composizione una volta, poi genera diverse varianti." },
      ai_tools: { title: "Effetti e Strumenti Video IA", desc: "Carica foto, scegli un modello di effetto video IA e lascia che il nostro sistema generi automaticamente una clip stilizzata.", cards: EN_PRODUCT_FEATURES.ai_tools.cards, grid: EN_PRODUCT_FEATURES.ai_tools.grid, cta: "Explore Tools" },
    },
    features: { title: "Perché scegliere Seedance 2.0?", subtitle: "Supera i limiti della creatività con capacità multimodali complete.", list: [
      { title: "Architettura Multimodale Unificata", desc: "Supporto per input di testo, immagini, audio e video. Editing integrato per una creazione fluida." },
      { title: "Controllo a Livello di Regista", desc: "Controllo preciso di recitazione, illuminazione e movimenti di camera. La tua visione esattamente come l'hai immaginata." },
      { title: "Qualità Iper‑Realistica", desc: "Stabilità del movimento eccezionale e rispetto delle leggi fisiche. Sincronizzazione nativa audio‑video." },
      { title: "Workflow di Grado Industriale", desc: "Ideale per pubblicità, cinema e social media. Qualità di output a livello professionale." },
    ]},
    comparison: { title: "Seedance 2.0 vs. Altri", headers: ["Funzione", "Seedance 2.0", "Altri Modelli"], rows: [
      { label: "Seguito delle Istruzioni", us: "✅ Alta Precisione", others: "⚠️ Incoerente" },
      { label: "Qualità del Movimento", us: "✅ Fluido e Realistico", others: "❌ Tremolante" },
      { label: "Coerenza Multi‑Shot", us: "✅ Coerente", others: "❌ Frammentato" },
      { label: "Sincronizzazione Audio‑Video", us: "✅ Supporto Nativo", others: "❌ Strumenti Separati" },
    ]},
    showcase: { title: "Creatività Senza Limiti", items: [
      { title: "Produzione Cinematografica", desc: "Genera storyboard e riprese finali." },
      { title: "Pubblicità", desc: "Crea video ads ad alta conversione in pochi minuti." },
      { title: "Social Media", desc: "Creazione di contenuti virali con facilità." },
      { title: "Game Design", desc: "Cutscene e animazioni dei personaggi." },
    ]},
    testimonials: { title: "Riconoscimento del Settore", list: [
      { review: "La controllabilità di Seedance 2.0 cambia le regole del gioco. È come avere una troupe virtuale.", author: "Alex Rivera", role: "Regista" },
      { review: "Qualità e stabilità video senza pari. Perfetto per i nostri progetti commerciali di alto livello.", author: "Jessica Wu", role: "Direttrice Creativa" },
      { review: "Finalmente uno strumento video AI che comprende movimenti di camera e istruzioni di illuminazione complesse.", author: "David Chen", role: "Artista VFX" },
    ]},
    faq: { title: "Domande Frequenti", items: [
      { q: "Cos'è Seedance 2.0?", a: "Seedance 2.0 è un modello video AI di nuova generazione che genera video di alta qualità da testo, immagini e audio." },
      { q: "Posso usarlo per progetti commerciali?", a: "Sì. I piani Pro includono pieni diritti commerciali per tutti i contenuti generati." },
      { q: "Come si confronta con Sora o Kling?", a: "Seedance 2.0 eccelle nel seguire le istruzioni e nella stabilità del movimento, offrendo un controllo superiore per workflow professionali." },
      { q: "Esiste una prova gratuita?", a: "Sì. Puoi provare Seedance 2.0 gratuitamente con crediti giornalieri." },
    ]},
    legal: EN_LEGAL, // 待翻译
  },
  fa: {
    seo: { title: "Seedance 2.0 - پلتفرم هوشمند تولید ویدئو با هوش مصنوعی | Seedance نسخه فارسی", description: "Seedance 2.0 یک مدل پیشرفته تولید ویدئو با هوش مصنوعی است که از ورودی‌های متن، تصویر، صدا و ویدئو برای ایجاد محتوای با کیفیت سینمایی پشتیبانی می‌کند." },
    hero: { title: "کنترل در سطح کارگردان با", highlight: "Seedance 2.0", subtitle: "معماری تولید چندوجهی یکپارچه. ایجاد ویدئوهای سینمایی از متن، تصاویر و صدا با کنترل و واقع‌گرایی بی‌سابقه.", button: "شروع تولید", users: "مورد اعتماد استودیوهای برتر", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL, // 待翻译
  },
  nl: {
    seo: { title: "Seedance 2.0 - Intelligent AI Video Generation Platform | Seedance Nederlandse Versie", description: "Seedance 2.0 is een state-of-the-art AI-videogeneratiemodel dat tekst-, beeld-, audio- en video-invoer ondersteunt voor het creëren van inhoud van bioscoopkwaliteit." },
    hero: { title: "Regisseur-Niveau Controle met", highlight: "Seedance 2.0", subtitle: "De geünificeerde multimodale generatie-architectuur. Maak filmische video's van tekst, afbeeldingen en audio met ongekende controle en realisme.", button: "Start Genereren", users: "Vertrouwd door Top Studio's", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL, // 待翻译
  },
  pl: {
    seo: { title: "Seedance 2.0 - Inteligentna Platforma Generowania Wideo AI | Seedance Wersja Polska", description: "Seedance 2.0 to najnowocześniejszy model generowania wideo AI obsługujący wprowadzanie tekstu, obrazu, dźwięku i wideo do tworzenia treści o jakości kinowej." },
    hero: { title: "Kontrola na Poziomie Reżysera z", highlight: "Seedance 2.0", subtitle: "Zunifikowana architektura generowania multimodalnego. Twórz kinowe filmy z tekstu, obrazów i dźwięku z niespotykaną kontrolą i realizmem.", button: "Rozpocznij Generowanie", users: "Zaufane przez Czołowe Studia", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL, // 待翻译
  },
  sv: {
    seo: { title: "Seedance 2.0 - Intelligent AI-videogenereringsplattform | Seedance Svensk Version", description: "Seedance 2.0 är en toppmodern AI-videogenereringsmodell som stöder text-, bild-, ljud- och videoinmatning för skapande av innehåll av biokvalitet." },
    hero: { title: "Regissörsnivå Kontroll med", highlight: "Seedance 2.0", subtitle: "Den enhetliga multimodala genereringsarkitekturen. Skapa filmiska videor från text, bilder och ljud med oöverträffad kontroll och realism.", button: "Börja Generera", users: "Betrodd av Toppstudior", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL, // 待翻译
  },
  uk: {
    seo: { title: "Seedance 2.0 - Інтелектуальна платформа генерації відео зі ШІ | Seedance Українська версія", description: "Seedance 2.0 - це найсучасніша модель генерації відео ШІ, що підтримує введення тексту, зображень, аудіо та відео для створення контенту кінематографічної якості." },
    hero: { title: "Режисерський контроль з", highlight: "Seedance 2.0", subtitle: "Єдина архітектура мультимодальної генерації. Створюйте кінематографічні відео з тексту, зображень та аудіо з безпрецедентним контролем і реалізмом.", button: "Почати генерацію", users: "Довіряють найкращі студії", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL, // 待翻译
  },
  ro: {
    seo: { title: "Seedance 2.0 - Platformă Inteligentă de Generare Video AI | Seedance Versiunea Română", description: "Seedance 2.0 este un model de generare video AI de ultimă generație care acceptă intrări text, imagine, audio și video pentru crearea de conținut de calitate cinematografică." },
    hero: { title: "Control la Nivel de Regizor cu", highlight: "Seedance 2.0", subtitle: "Arhitectura de generare multimodală unificată. Creați videoclipuri cinematografice din text, imagini și audio cu un control și realism fără precedent.", button: "Începe Generarea", users: "De Încredere pentru Studiouri de Top", badge: "🚀 New Release: Seedance 2.0" },
    stats: EN_STATS,
    product_features: EN_PRODUCT_FEATURES,
    features: EN_FEATURES,
    comparison: EN_COMPARISON,
    showcase: EN_SHOWCASE,
    testimonials: EN_TESTIMONIALS,
    faq: EN_FAQ,
    legal: EN_LEGAL, // 待翻译
  },
};
