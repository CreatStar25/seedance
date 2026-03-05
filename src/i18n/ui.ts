/**
 * UI strings for all locales. Keys: navbar, footer, buttons, prompts, labels, blog.
 * Footer uses NEW structure: brand, ai_tools, ai_video, ai_image, company (with links: label + href or path).
 */

export type Locale =
  | "en"
  | "zh-cn"
  | "zh-tw"
  | "es"
  | "ar"
  | "pt"
  | "id"
  | "ms"
  | "fr"
  | "ru"
  | "hi"
  | "ja"
  | "de"
  | "ko"
  | "tr"
  | "vi"
  | "th"
  | "it"
  | "fa"
  | "nl"
  | "pl"
  | "sv"
  | "uk"
  | "ro";

export type FooterLink = { label: string; href?: string; path?: string };

export type UILocale = {
  navbar: {
    home: string;
    blog: string;
    text_to_video: string;
    image_to_video: string;
    ai_tools: string;
    cta: string;
  };
  footer: {
    brand: { title: string; intro: string; email: string };
    ai_tools: { title: string; links: FooterLink[] };
    ai_video: { title: string; links: FooterLink[] };
    ai_image: { title: string; links: FooterLink[] };
    company: { title: string; links: FooterLink[] };
    copyright: string;
  };
  buttons: {
    start: string;
    learn_more: string;
    view_detail: string;
    submit: string;
    back: string;
  };
  prompts: {
    loading: string;
    success: string;
    placeholder_input: string;
  };
  labels: {
    search: string;
    filter: string;
    pagination: string;
  };
  blog: {
    read: string;
    no_posts: string;
  };
};

const EN_FOOTER_LINKS = {
  ai_tools: [
    { label: "LimaxAI", href: "https://www.limaxai.com/" },
    { label: "Suno", href: "https://suno.hk/" },
    { label: "deepseek 4", href: "https://deepseek4.hk/" },
    { label: "Notebooklm", href: "https://notebooklm.vip/" },
    { label: "Openclaw", href: "https://openclawd.hk/" },
    { label: "Gemini 3.0", href: "https://gemini3.hk/" },
  ],
  ai_video: [
    { label: "Seedance 2.0", href: "https://seedance22.com/" },
    { label: "Seedance 1.5", href: "https://seedance2.hk/" },
    { label: "Veo 3.1", href: "https://veo3.hk/" },
    { label: "Veo 3", href: "https://veo3.hk/" },
    { label: "Sora", href: "https://www.limaxai.com/generate/video-tools/so" },
    { label: "Sora 2", href: "https://www.limaxai.com/generate/video-tools/so" },
  ],
  ai_image: [
    { label: "Midjourney", href: "https://www.limaxai.com/generate/image-tools/mjpro" },
    { label: "Nano Banana 2", href: "https://nanobananapro.hk/" },
    { label: "Nano Banana Pro", href: "https://nanobanana-pro.vip/" },
    { label: "Nano Banana 3", href: "https://nanobanana3.top/" },
  ],
};

const EN_BUTTONS = { start: "Start", learn_more: "Learn More", view_detail: "View Detail", submit: "Submit", back: "Back" };
const EN_PROMPTS = { loading: "Loading...", success: "Success!", placeholder_input: "Enter here..." };
const EN_LABELS = { search: "Search", filter: "Filter", pagination: "Pagination" };

export const ui: Record<Locale, UILocale> = {
  en: {
    navbar: { home: "Home", blog: "Blog", text_to_video: "Text to Video", image_to_video: "Image to Video", ai_tools: "AI Tools", cta: "Try Seedance Free" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "AI Tools", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI Video", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI Image", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Company", links: [{ label: "Blog", path: "blog" }, { label: "About", path: "about" }, { label: "Privacy", path: "privacy" }, { label: "Terms", path: "terms" }] },
      copyright: "© 2026 Seedance AI. All rights reserved.",
    },
    buttons: EN_BUTTONS,
    prompts: EN_PROMPTS,
    labels: EN_LABELS,
    blog: { read: "Read Article →", no_posts: "No posts found for this language yet." },
  },
  "zh-cn": {
    navbar: { home: "首页", blog: "博客", text_to_video: "文生视频", image_to_video: "图生视频", ai_tools: "AI工具箱", cta: "免费试用" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "统一多模态 AI 视频生成平台。为创作者提供导演级控制与电影级画质。", email: "starwk@gmx.com" },
      ai_tools: { title: "AI 工具", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI 视频", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI 图像", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "公司", links: [{ label: "博客", path: "blog" }, { label: "关于", path: "about" }, { label: "隐私", path: "privacy" }, { label: "条款", path: "terms" }] },
      copyright: "© 2026 Seedance AI. 保留所有权利。",
    },
    buttons: { start: "开始", learn_more: "了解更多", view_detail: "查看详情", submit: "提交", back: "返回" },
    prompts: { loading: "加载中...", success: "成功！", placeholder_input: "在此输入..." },
    labels: { search: "搜索", filter: "筛选", pagination: "分页" },
    blog: { read: "阅读文章 →", no_posts: "暂无该语言的文章。" },
  },
  "zh-tw": {
    navbar: { home: "首頁", blog: "博客", text_to_video: "文生視頻", image_to_video: "圖生視頻", ai_tools: "AI工具箱", cta: "免費試用" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "統一多模態 AI 視頻生成平台。為創作者提供導演級控制與電影級畫質。", email: "starwk@gmx.com" },
      ai_tools: { title: "AI 工具", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI 視頻", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI 圖像", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "公司", links: [{ label: "博客", path: "blog" }, { label: "關於", path: "about" }, { label: "隱私", path: "privacy" }, { label: "條款", path: "terms" }] },
      copyright: "© 2026 Seedance AI. 保留所有權利。",
    },
    buttons: { start: "開始", learn_more: "了解更多", view_detail: "查看詳情", submit: "提交", back: "返回" },
    prompts: { loading: "載入中...", success: "成功！", placeholder_input: "請輸入..." },
    labels: { search: "搜尋", filter: "篩選", pagination: "分頁" },
    blog: { read: "閱讀文章 →", no_posts: "暫無該語言的文章。" },
  },
  es: {
    navbar: { home: "Inicio", blog: "Blog", text_to_video: "Texto a Video", image_to_video: "Imagen a Video", ai_tools: "Herramientas AI", cta: "Prueba Gratis" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "Herramientas AI", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI Video", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI Image", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Compañía", links: [{ label: "Blog", path: "blog" }, { label: "Sobre Nosotros", path: "about" }, { label: "Privacidad", path: "privacy" }, { label: "Términos", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Todos los derechos reservados.",
    },
    buttons: { start: "Empezar", learn_more: "Saber más", view_detail: "Ver detalle", submit: "Enviar", back: "Volver" },
    prompts: { loading: "Cargando...", success: "¡Éxito!", placeholder_input: "Escriba aquí..." },
    labels: { search: "Buscar", filter: "Filtrar", pagination: "Paginación" },
    blog: { read: "Leer artículo →", no_posts: "No hay entradas en este idioma aún." },
  },
  ar: {
    navbar: { home: "الرئيسية", blog: "المدونة", text_to_video: "نص إلى فيديو", image_to_video: "صورة إلى فيديو", ai_tools: "أدوات الذكاء الاصطناعي", cta: "جرب مجاناً" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "أدوات الذكاء الاصطناعي", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "فيديو AI", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "صورة AI", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "الشركة", links: [{ label: "المدونة", path: "blog" }, { label: "عنا", path: "about" }, { label: "الخصوصية", path: "privacy" }, { label: "الشروط", path: "terms" }] },
      copyright: "© 2026 Seedance AI. جميع الحقوق محفوظة.",
    },
    buttons: { start: "ابدأ", learn_more: "اعرف المزيد", view_detail: "عرض التفاصيل", submit: "إرسال", back: "رجوع" },
    prompts: { loading: "جاري التحميل...", success: "تم بنجاح!", placeholder_input: "أدخل هنا..." },
    labels: { search: "بحث", filter: "تصفية", pagination: "ترقيم الصفحات" },
    blog: { read: "قراءة المقال ←", no_posts: "لا توجد مقالات بهذه اللغة بعد." },
  },
  pt: {
    navbar: { home: "Início", blog: "Blog", text_to_video: "Texto para Vídeo", image_to_video: "Imagem para Vídeo", ai_tools: "Ferramentas AI", cta: "Teste Grátis" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "Ferramentas AI", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI Video", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI Image", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Empresa", links: [{ label: "Blog", path: "blog" }, { label: "Sobre Nós", path: "about" }, { label: "Privacidade", path: "privacy" }, { label: "Termos", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Todos os direitos reservados.",
    },
    buttons: { start: "Começar", learn_more: "Saiba mais", view_detail: "Ver detalhe", submit: "Enviar", back: "Voltar" },
    prompts: { loading: "Carregando...", success: "Sucesso!", placeholder_input: "Digite aqui..." },
    labels: { search: "Pesquisar", filter: "Filtrar", pagination: "Paginação" },
    blog: { read: "Ler artigo →", no_posts: "Nenhum post encontrado para este idioma." },
  },
  id: {
    navbar: { home: "Beranda", blog: "Blog", text_to_video: "Teks ke Video", image_to_video: "Gambar ke Video", ai_tools: "Alat AI", cta: "Coba Gratis" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "Alat AI", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI Video", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI Image", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Perusahaan", links: [{ label: "Blog", path: "blog" }, { label: "Tentang Kami", path: "about" }, { label: "Privasi", path: "privacy" }, { label: "Ketentuan", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Hak cipta dilindungi undang-undang.",
    },
    buttons: { start: "Mulai", learn_more: "Pelajari lebih lanjut", view_detail: "Lihat detail", submit: "Kirim", back: "Kembali" },
    prompts: { loading: "Memuat...", success: "Berhasil!", placeholder_input: "Masukkan di sini..." },
    labels: { search: "Cari", filter: "Filter", pagination: "Halaman" },
    blog: { read: "Baca artikel →", no_posts: "Belum ada artikel dalam bahasa ini." },
  },
  ms: {
    navbar: { home: "Laman Utama", blog: "Blog", text_to_video: "Teks ke Video", image_to_video: "Imej ke Video", ai_tools: "Alat AI", cta: "Cuba Percuma" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "Alat AI", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI Video", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI Image", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Syarikat", links: [{ label: "Blog", path: "blog" }, { label: "Tentang Kami", path: "about" }, { label: "Privasi", path: "privacy" }, { label: "Terma", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Hak cipta terpelihara.",
    },
    buttons: { start: "Mula", learn_more: "Ketahui lebih lanjut", view_detail: "Lihat butiran", submit: "Hantar", back: "Kembali" },
    prompts: { loading: "Memuatkan...", success: "Berjaya!", placeholder_input: "Masukkan di sini..." },
    labels: { search: "Cari", filter: "Tapis", pagination: "Halaman" },
    blog: { read: "Baca artikel →", no_posts: "Tiada siaran dalam bahasa ini lagi." },
  },
  fr: {
    navbar: { home: "Accueil", blog: "Blog", text_to_video: "Texte en Vidéo", image_to_video: "Image en Vidéo", ai_tools: "Outils IA", cta: "Essai Gratuit" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "Outils IA", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI Video", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI Image", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Entreprise", links: [{ label: "Blog", path: "blog" }, { label: "À propos", path: "about" }, { label: "Confidentialité", path: "privacy" }, { label: "Mentions légales", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Tous droits réservés.",
    },
    buttons: { start: "Commencer", learn_more: "En savoir plus", view_detail: "Voir le détail", submit: "Envoyer", back: "Retour" },
    prompts: { loading: "Chargement...", success: "Succès !", placeholder_input: "Entrez ici..." },
    labels: { search: "Rechercher", filter: "Filtrer", pagination: "Pagination" },
    blog: { read: "Lire l'article →", no_posts: "Aucun article dans cette langue pour le moment." },
  },
  ru: {
    navbar: { home: "Главная", blog: "Блог", text_to_video: "Текст в Видео", image_to_video: "Изображение в Видео", ai_tools: "ИИ Инструменты", cta: "Попробовать бесплатно" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "ИИ Инструменты", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "ИИ Видео", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "ИИ Изображения", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Компания", links: [{ label: "Блог", path: "blog" }, { label: "О нас", path: "about" }, { label: "Конфиденциальность", path: "privacy" }, { label: "Условия", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Все права защищены.",
    },
    buttons: { start: "Начать", learn_more: "Подробнее", view_detail: "Подробности", submit: "Отправить", back: "Назад" },
    prompts: { loading: "Загрузка...", success: "Успешно!", placeholder_input: "Введите здесь..." },
    labels: { search: "Поиск", filter: "Фильтр", pagination: "Страницы" },
    blog: { read: "Читать статью →", no_posts: "Записей на этом языке пока нет." },
  },
  hi: {
    navbar: { home: "होम", blog: "ब्लॉग", text_to_video: "टेक्स्ट से वीडियो", image_to_video: "इमेज से वीडियो", ai_tools: "AI टूल्स", cta: "मुफ्त में आजमाएं" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "AI टूल्स", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI वीडियो", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI इमेज", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "कंपनी", links: [{ label: "ब्लॉग", path: "blog" }, { label: "हमारे बारे में", path: "about" }, { label: "गोपनीयता", path: "privacy" }, { label: "नियम और शर्तें", path: "terms" }] },
      copyright: "© 2026 Seedance AI. सर्वाधिकार सुरक्षित।",
    },
    buttons: { start: "शुरू करें", learn_more: "और जानें", view_detail: "विवरण देखें", submit: "भेजें", back: "वापस" },
    prompts: { loading: "लोड हो रहा है...", success: "सफल!", placeholder_input: "यहाँ दर्ज करें..." },
    labels: { search: "खोज", filter: "फ़िल्टर", pagination: "पृष्ठांकन" },
    blog: { read: "लेख पढ़ें →", no_posts: "इस भाषा में अभी तक कोई पोस्ट नहीं मिली।" },
  },
  ja: {
    navbar: { home: "ホーム", blog: "ブログ", text_to_video: "テキスト動画生成", image_to_video: "画像動画生成", ai_tools: "AIツール", cta: "無料で試す" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "AIツール", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI動画", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI画像", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "会社", links: [{ label: "ブログ", path: "blog" }, { label: "私たちについて", path: "about" }, { label: "プライバシー", path: "privacy" }, { label: "利用規約", path: "terms" }] },
      copyright: "© 2026 Seedance AI. All rights reserved.",
    },
    buttons: { start: "開始", learn_more: "詳しく見る", view_detail: "詳細を見る", submit: "送信", back: "戻る" },
    prompts: { loading: "読み込み中...", success: "成功！", placeholder_input: "ここに入力..." },
    labels: { search: "検索", filter: "フィルター", pagination: "ページ" },
    blog: { read: "記事を読む →", no_posts: "この言語の記事はまだありません。" },
  },
  de: {
    navbar: { home: "Startseite", blog: "Blog", text_to_video: "Text zu Video", image_to_video: "Bild zu Video", ai_tools: "KI-Tools", cta: "Kostenlos Testen" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "KI-Tools", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "KI-Video", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "KI-Bild", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Unternehmen", links: [{ label: "Blog", path: "blog" }, { label: "Über uns", path: "about" }, { label: "Datenschutz", path: "privacy" }, { label: "Rechtliches", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Alle Rechte vorbehalten.",
    },
    buttons: { start: "Starten", learn_more: "Mehr erfahren", view_detail: "Details anzeigen", submit: "Absenden", back: "Zurück" },
    prompts: { loading: "Laden...", success: "Erfolg!", placeholder_input: "Hier eingeben..." },
    labels: { search: "Suchen", filter: "Filter", pagination: "Seiten" },
    blog: { read: "Artikel lesen →", no_posts: "Noch keine Beiträge in dieser Sprache." },
  },
  ko: {
    navbar: { home: "홈", blog: "블로그", text_to_video: "텍스트 비디오 변환", image_to_video: "이미지 비디오 변환", ai_tools: "AI 도구", cta: "무료 체험" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "AI 도구", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI 비디오", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI 이미지", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "회사", links: [{ label: "블로그", path: "blog" }, { label: "소개", path: "about" }, { label: "개인정보", path: "privacy" }, { label: "이용약관", path: "terms" }] },
      copyright: "© 2026 Seedance AI. 판권 소유.",
    },
    buttons: { start: "시작", learn_more: "자세히 보기", view_detail: "상세 보기", submit: "제출", back: "뒤로" },
    prompts: { loading: "로딩 중...", success: "성공!", placeholder_input: "여기에 입력..." },
    labels: { search: "검색", filter: "필터", pagination: "페이지" },
    blog: { read: "글 읽기 →", no_posts: "이 언어로 된 글이 아직 없습니다." },
  },
  tr: {
    navbar: { home: "Anasayfa", blog: "Blog", text_to_video: "Metinden Videoya", image_to_video: "Görüntüden Videoya", ai_tools: "AI Araçları", cta: "Ücretsiz Dene" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "AI Araçları", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI Video", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI Görsel", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Şirket", links: [{ label: "Blog", path: "blog" }, { label: "Hakkımızda", path: "about" }, { label: "Gizlilik", path: "privacy" }, { label: "Koşullar", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Tüm hakları saklıdır.",
    },
    buttons: { start: "Başla", learn_more: "Daha fazla bilgi", view_detail: "Ayrıntıları gör", submit: "Gönder", back: "Geri" },
    prompts: { loading: "Yükleniyor...", success: "Başarılı!", placeholder_input: "Buraya girin..." },
    labels: { search: "Ara", filter: "Filtrele", pagination: "Sayfalama" },
    blog: { read: "Makaleyi oku →", no_posts: "Bu dilde henüz yazı bulunamadı." },
  },
  vi: {
    navbar: { home: "Trang chủ", blog: "Blog", text_to_video: "Văn bản sang Video", image_to_video: "Hình ảnh sang Video", ai_tools: "Công cụ AI", cta: "Dùng thử miễn phí" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "Công cụ AI", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI Video", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI Hình ảnh", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Công ty", links: [{ label: "Blog", path: "blog" }, { label: "Về chúng tôi", path: "about" }, { label: "Quyền riêng tư", path: "privacy" }, { label: "Điều khoản", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Đã đăng ký bản quyền.",
    },
    buttons: { start: "Bắt đầu", learn_more: "Tìm hiểu thêm", view_detail: "Xem chi tiết", submit: "Gửi", back: "Quay lại" },
    prompts: { loading: "Đang tải...", success: "Thành công!", placeholder_input: "Nhập tại đây..." },
    labels: { search: "Tìm kiếm", filter: "Lọc", pagination: "Phân trang" },
    blog: { read: "Đọc bài viết →", no_posts: "Chưa có bài viết nào bằng ngôn ngữ này." },
  },
  th: {
    navbar: { home: "หน้าแรก", blog: "บล็อก", text_to_video: "ข้อความเป็นวิดีโอ", image_to_video: "รูปภาพเป็นวิดีโอ", ai_tools: "เครื่องมือ AI", cta: "ทดลองฟรี" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "เครื่องมือ AI", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI วิดีโอ", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI รูปภาพ", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "บริษัท", links: [{ label: "บล็อก", path: "blog" }, { label: "เกี่ยวกับเรา", path: "about" }, { label: "ความเป็นส่วนตัว", path: "privacy" }, { label: "ข้อกำหนด", path: "terms" }] },
      copyright: "© 2026 Seedance AI. สงวนลิขสิทธิ์.",
    },
    buttons: { start: "เริ่มต้น", learn_more: "เรียนรู้เพิ่มเติม", view_detail: "ดูรายละเอียด", submit: "ส่ง", back: "กลับ" },
    prompts: { loading: "กำลังโหลด...", success: "สำเร็จ!", placeholder_input: "กรอกที่นี่..." },
    labels: { search: "ค้นหา", filter: "กรอง", pagination: "หน้า" },
    blog: { read: "อ่านบทความ →", no_posts: "ยังไม่มีโพสต์ในภาษานี้" },
  },
  it: {
    navbar: { home: "Home", blog: "Blog", text_to_video: "Testo a Video", image_to_video: "Immagine a Video", ai_tools: "Strumenti AI", cta: "Prova Gratis" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "Strumenti AI", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI Video", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI Immagine", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Azienda", links: [{ label: "Blog", path: "blog" }, { label: "Chi Siamo", path: "about" }, { label: "Privacy", path: "privacy" }, { label: "Legale", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Tutti i diritti riservati.",
    },
    buttons: { start: "Inizia", learn_more: "Scopri di più", view_detail: "Vedi dettaglio", submit: "Invia", back: "Indietro" },
    prompts: { loading: "Caricamento...", success: "Successo!", placeholder_input: "Inserisci qui..." },
    labels: { search: "Cerca", filter: "Filtra", pagination: "Paginazione" },
    blog: { read: "Leggi articolo →", no_posts: "Nessun post in questa lingua." },
  },
  fa: {
    navbar: { home: "خانه", blog: "بلاگ", text_to_video: "متن به ویدئو", image_to_video: "تصویر به ویدئو", ai_tools: "ابزارهای هوش مصنوعی", cta: "امتحان رایگان" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "ابزارهای هوش مصنوعی", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "ویدئو AI", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "تصویر AI", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "شرکت", links: [{ label: "بلاگ", path: "blog" }, { label: "درباره ما", path: "about" }, { label: "حریم خصوصی", path: "privacy" }, { label: "قوانین", path: "terms" }] },
      copyright: "© 2026 Seedance AI. تمامی حقوق محفوظ است.",
    },
    buttons: { start: "شروع", learn_more: "بیشتر بدانید", view_detail: "مشاهده جزئیات", submit: "ارسال", back: "بازگشت" },
    prompts: { loading: "در حال بارگذاری...", success: "موفق!", placeholder_input: "اینجا وارد کنید..." },
    labels: { search: "جستجو", filter: "فیلتر", pagination: "صفحه\u200cبندی" },
    blog: { read: "خواندن مقاله ←", no_posts: "هنوز پستی به این زبان یافت نشد." },
  },
  nl: {
    navbar: { home: "Home", blog: "Blog", text_to_video: "Tekst naar Video", image_to_video: "Afbeelding naar Video", ai_tools: "AI Tools", cta: "Probeer Gratis" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "AI Tools", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI Video", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI Afbeelding", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Bedrijf", links: [{ label: "Blog", path: "blog" }, { label: "Over Ons", path: "about" }, { label: "Privacy", path: "privacy" }, { label: "Juridisch", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Alle rechten voorbehouden.",
    },
    buttons: { start: "Starten", learn_more: "Meer info", view_detail: "Details bekijken", submit: "Verzenden", back: "Terug" },
    prompts: { loading: "Laden...", success: "Gelukt!", placeholder_input: "Voer hier in..." },
    labels: { search: "Zoeken", filter: "Filter", pagination: "Paginering" },
    blog: { read: "Artikel lezen →", no_posts: "Nog geen berichten in deze taal." },
  },
  pl: {
    navbar: { home: "Strona główna", blog: "Blog", text_to_video: "Tekst na Wideo", image_to_video: "Obraz na Wideo", ai_tools: "Narzędzia AI", cta: "Wypróbuj za darmo" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "Narzędzia AI", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI Wideo", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI Obraz", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Firma", links: [{ label: "Blog", path: "blog" }, { label: "O nas", path: "about" }, { label: "Prywatność", path: "privacy" }, { label: "Prawne", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Wszelkie prawa zastrzeżone.",
    },
    buttons: { start: "Rozpocznij", learn_more: "Dowiedz się więcej", view_detail: "Zobacz szczegóły", submit: "Wyślij", back: "Wstecz" },
    prompts: { loading: "Ładowanie...", success: "Sukces!", placeholder_input: "Wpisz tutaj..." },
    labels: { search: "Szukaj", filter: "Filtruj", pagination: "Strony" },
    blog: { read: "Czytaj artykuł →", no_posts: "Brak postów w tym języku." },
  },
  sv: {
    navbar: { home: "Hem", blog: "Blogg", text_to_video: "Text till Video", image_to_video: "Bild till Video", ai_tools: "AI-verktyg", cta: "Prova Gratis" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "AI-verktyg", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI-video", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI-bild", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Företag", links: [{ label: "Blogg", path: "blog" }, { label: "Om oss", path: "about" }, { label: "Integritet", path: "privacy" }, { label: "Juridiskt", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Alla rättigheter förbehållna.",
    },
    buttons: { start: "Starta", learn_more: "Läs mer", view_detail: "Visa detaljer", submit: "Skicka", back: "Tillbaka" },
    prompts: { loading: "Laddar...", success: "Klart!", placeholder_input: "Ange här..." },
    labels: { search: "Sök", filter: "Filtrera", pagination: "Sidnumrering" },
    blog: { read: "Läs artikel →", no_posts: "Inga inlägg på detta språk än." },
  },
  uk: {
    navbar: { home: "Головна", blog: "Блог", text_to_video: "Текст у Відео", image_to_video: "Зображення у Відео", ai_tools: "Інструменти ШІ", cta: "Спробувати безкоштовно" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "Інструменти ШІ", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "ШІ Відео", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "ШІ Зображення", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Компанія", links: [{ label: "Блог", path: "blog" }, { label: "Про нас", path: "about" }, { label: "Конфіденційність", path: "privacy" }, { label: "Умови", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Всі права захищені.",
    },
    buttons: { start: "Почати", learn_more: "Детальніше", view_detail: "Переглянути деталі", submit: "Надіслати", back: "Назад" },
    prompts: { loading: "Завантаження...", success: "Успішно!", placeholder_input: "Введіть тут..." },
    labels: { search: "Пошук", filter: "Фільтр", pagination: "Сторінки" },
    blog: { read: "Читати статтю →", no_posts: "Записів цією мовою поки немає." },
  },
  ro: {
    navbar: { home: "Acasă", blog: "Blog", text_to_video: "Text în Video", image_to_video: "Imagine în Video", ai_tools: "Instrumente AI", cta: "Încearcă Gratuit" },
    footer: {
      brand: { title: "Seedance 2.0", intro: "The unified multimodal AI video generation platform. Empowering creators with director-level control and cinematic quality.", email: "starwk@gmx.com" },
      ai_tools: { title: "Instrumente AI", links: EN_FOOTER_LINKS.ai_tools },
      ai_video: { title: "AI Video", links: EN_FOOTER_LINKS.ai_video },
      ai_image: { title: "AI Imagine", links: EN_FOOTER_LINKS.ai_image },
      company: { title: "Companie", links: [{ label: "Blog", path: "blog" }, { label: "Despre Noi", path: "about" }, { label: "Confidențialitate", path: "privacy" }, { label: "Legal", path: "terms" }] },
      copyright: "© 2026 Seedance AI. Toate drepturile rezervate.",
    },
    buttons: { start: "Începe", learn_more: "Află mai multe", view_detail: "Vezi detaliile", submit: "Trimite", back: "Înapoi" },
    prompts: { loading: "Se încarcă...", success: "Succes!", placeholder_input: "Introdu aici..." },
    labels: { search: "Caută", filter: "Filtrează", pagination: "Paginare" },
    blog: { read: "Citește articolul →", no_posts: "Nu există încă articole în acest limbaj." },
  },
};
