import { createRequire } from "module";
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const locales = [
  'zh', 'zh-tw', 'es', 'ar', 'pt', 'id', 'ms', 'fr', 'ru', 'hi', 
  'ja', 'de', 'ko', 'tr', 'vi', 'th', 'it', 'fa', 'nl', 'pl', 'sv', 'uk', 'ro'
];

const en = require('../src/i18n/en.json');

const translations = {
  zh: {
    seo: { title: "Seedance 2.0 - 智能AI视频生成平台｜Seedance中文版", description: "Seedance 2.0 是最先进的AI视频生成模型，支持文本、图像、音频和视频输入，创造电影级内容。" },
    nav: { home: "首页", blog: "博客", text_to_video: "文生视频", image_to_video: "图生视频", ai_tools: "AI工具箱", cta: "免费试用" },
    hero: { title: "导演级控制力", highlight: "Seedance 2.0", subtitle: "统一多模态生成架构。通过文本、图像和音频创造电影级视频，拥有前所未有的控制力和真实感。", button: "开始创作", users: "顶级工作室信赖" },
    product_features: {
      text_to_video: { title: "文生视频 AI", desc: "用自然语言描述场景、角色和运镜，让AI将其转化为连贯的多镜头视频。" },
      image_to_video: { title: "图生视频 AI", desc: "上传一张参考图，让它变成短视频。保持高度一致的角色和风格。" },
      text_to_image: { title: "文生图 AI", desc: "将文本提示转化为高分辨率图像。描述风格、光照和构图，生成多种变体。" },
      ai_tools: { title: "AI 视频特效与工具", desc: "上传照片，选择AI视频特效模板，自动生成风格化短片。" }
    },
    footer: {
      product: { title: "产品", items: ["文生视频", "图生视频", "视频编辑", "价格"] },
      resources: { title: "资源", items: ["博客", "社区", "帮助中心", "API文档"] },
      company: { title: "公司", items: ["关于我们", "招聘", "联系方式", "法律"] },
      copyright: "© 2026 Seedance AI. 保留所有权利。"
    }
  },
  'zh-tw': {
    seo: { title: "Seedance 2.0 - 智能AI視頻生成平台｜Seedance繁體中文版", description: "Seedance 2.0 是最先進的AI視頻生成模型，支持文本、圖像、音頻和視頻輸入，創造電影級內容。" },
    nav: { home: "首頁", blog: "博客", text_to_video: "文生視頻", image_to_video: "圖生視頻", ai_tools: "AI工具箱", cta: "免費試用" },
    hero: { title: "導演級控制力", highlight: "Seedance 2.0", subtitle: "統一多模態生成架構。通過文本、圖像和音頻創造電影級視頻，擁有前所未有的控制力和真實感。", button: "開始創作", users: "頂級工作室信賴" },
    product_features: {
      text_to_video: { title: "文生視頻 AI", desc: "用自然語言描述場景、角色和運鏡，讓AI將其轉化為連貫的多鏡頭視頻。" },
      image_to_video: { title: "圖生視頻 AI", desc: "上傳一張參考圖，讓它變成短視頻。保持高度一致的角色和風格。" },
      text_to_image: { title: "文生圖 AI", desc: "將文本提示轉化為高分辨率圖像。描述風格、光照和構圖，生成多種變體。" },
      ai_tools: { title: "AI 視頻特效與工具", desc: "上傳照片，選擇AI視頻特效模板，自動生成風格化短片。" }
    },
    footer: {
      product: { title: "產品", items: ["文生視頻", "圖生視頻", "視頻編輯", "價格"] },
      resources: { title: "資源", items: ["博客", "社區", "幫助中心", "API文檔"] },
      company: { title: "公司", items: ["關於我們", "招聘", "聯繫方式", "法律"] },
      copyright: "© 2026 Seedance AI. 保留所有權利。"
    }
  },
  ja: {
    seo: { title: "Seedance 2.0 - インテリジェントAI動画生成プラットフォーム | Seedance 日本語版", description: "Seedance 2.0は、テキスト、画像、音声、動画入力をサポートし、映画品質のコンテンツを作成する最先端のAI動画生成モデルです。" },
    nav: { home: "ホーム", blog: "ブログ", text_to_video: "テキスト動画生成", image_to_video: "画像動画生成", ai_tools: "AIツール", cta: "無料で試す" },
    hero: { title: "監督レベルの制御", highlight: "Seedance 2.0", subtitle: "統合マルチモーダル生成アーキテクチャ。テキスト、画像、音声から映画のような動画を作成し、前例のない制御とリアリズムを実現します。", button: "作成を開始", users: "トップスタジオが信頼" },
    product_features: {
      text_to_video: { title: "テキスト動画生成 AI", desc: "自然言語でシーン、キャラクター、カメラワークを記述し、AIが一貫したマルチショット動画に変換します。" },
      image_to_video: { title: "画像動画生成 AI", desc: "参照画像をアップロードして、短いAI生成動画にします。アイデンティティとスタイルを高精度に保持します。" },
      text_to_image: { title: "テキスト画像生成 AI", desc: "テキストプロンプトを高解像度画像に変換します。スタイル、照明、構図を記述し、複数のバリエーションを生成します。" },
      ai_tools: { title: "AI 動画エフェクト＆ツール", desc: "写真をアップロードし、AI動画エフェクトテンプレートを選択して、スタイリッシュなクリップを自動生成します。" }
    },
    footer: {
      product: { title: "製品", items: ["テキスト動画生成", "画像動画生成", "動画編集", "価格"] },
      resources: { title: "リソース", items: ["ブログ", "コミュニティ", "ヘルプセンター", "APIドキュメント"] },
      company: { title: "会社", items: ["私たちについて", "採用情報", "お問い合わせ", "法務"] },
      copyright: "© 2026 Seedance AI. All rights reserved."
    }
  },
  es: {
    seo: { title: "Seedance 2.0 - Plataforma Inteligente de Generación de Video AI | Seedance Versión en Español", description: "Seedance 2.0 es un modelo de generación de video AI de última generación que soporta entradas de texto, imagen, audio y video para la creación de contenido de calidad cinematográfica." },
    nav: { home: "Inicio", blog: "Blog", text_to_video: "Texto a Video", image_to_video: "Imagen a Video", ai_tools: "Herramientas AI", cta: "Prueba Gratis" },
    hero: { title: "Control a Nivel de Director con", highlight: "Seedance 2.0", subtitle: "La arquitectura de generación multimodal unificada. Crea videos cinematográficos a partir de texto, imágenes y audio con un control y realismo sin precedentes.", button: "Empezar a Generar", users: "Confiado por Estudios Top" },
    product_features: {
      text_to_video: { title: "IA de Texto a Video", desc: "Describe escenas, personajes y movimientos de cámara en lenguaje natural y deja que nuestra IA los convierta en videos coherentes de múltiples tomas." },
      image_to_video: { title: "IA de Imagen a Video", desc: "Sube una foto de referencia y mira cómo se convierte en un video corto generado por IA. Preserva la identidad y el estilo con alta fidelidad." },
      text_to_image: { title: "IA de Texto a Imagen", desc: "Convierte indicaciones de texto en imágenes de alta resolución. Describe estilo, iluminación y composición una vez, luego genera múltiples variaciones." },
      ai_tools: { title: "Efectos y Herramientas de Video AI", desc: "Sube fotos, elige una plantilla de efectos de video AI y deja que nuestro sistema genere automáticamente un clip estilizado." }
    },
    footer: {
      product: { title: "Producto", items: ["Texto a Video", "Imagen a Video", "Edición de Video", "Precios"] },
      resources: { title: "Recursos", items: ["Blog", "Comunidad", "Centro de Ayuda", "Documentación API"] },
      company: { title: "Compañía", items: ["Sobre Nosotros", "Carreras", "Contacto", "Legal"] },
      copyright: "© 2026 Seedance AI. Todos los derechos reservados."
    }
  },
  fr: {
    seo: { title: "Seedance 2.0 - Plateforme de Génération Vidéo IA Intelligente | Seedance Version Française", description: "Seedance 2.0 est un modèle de génération vidéo IA de pointe prenant en charge les entrées texte, image, audio et vidéo pour la création de contenu de qualité cinématographique." },
    nav: { home: "Accueil", blog: "Blog", text_to_video: "Texte en Vidéo", image_to_video: "Image en Vidéo", ai_tools: "Outils IA", cta: "Essai Gratuit" },
    hero: { title: "Contrôle de Niveau Réalisateur avec", highlight: "Seedance 2.0", subtitle: "L'architecture de génération multimodale unifiée. Créez des vidéos cinématographiques à partir de texte, d'images et d'audio avec un contrôle et un réalisme sans précédent.", button: "Commencer à Générer", users: "Approuvé par les Meilleurs Studios" },
    product_features: {
      text_to_video: { title: "IA Texte en Vidéo", desc: "Décrivez des scènes, des personnages et des mouvements de caméra en langage naturel et laissez notre IA les transformer en vidéos cohérentes à plusieurs plans." },
      image_to_video: { title: "IA Image en Vidéo", desc: "Téléchargez une photo de référence et regardez-la devenir une courte vidéo générée par IA. Préservez l'identité et le style avec une haute fidélité." },
      text_to_image: { title: "IA Texte en Image", desc: "Transformez des invites textuelles en images haute résolution. Décrivez le style, l'éclairage et la composition une fois, puis générez plusieurs variations." },
      ai_tools: { title: "Effets et Outils Vidéo IA", desc: "Téléchargez des photos, choisissez un modèle d'effet vidéo IA et laissez notre système générer automatiquement un clip stylisé." }
    },
    footer: {
      product: { title: "Produit", items: ["Texte en Vidéo", "Image en Vidéo", "Édition Vidéo", "Tarification"] },
      resources: { title: "Ressources", items: ["Blog", "Communauté", "Centre d'aide", "Documentation API"] },
      company: { title: "Entreprise", items: ["À propos", "Carrières", "Contact", "Légal"] },
      copyright: "© 2026 Seedance AI. Tous droits réservés."
    }
  },
  de: {
    seo: { title: "Seedance 2.0 - Intelligente KI-Videogenerierungsplattform | Seedance Deutsche Version", description: "Seedance 2.0 ist ein hochmodernes KI-Videogenerierungsmodell, das Text-, Bild-, Audio- und Videoeingaben für die Erstellung von Inhalten in Kinoqualität unterstützt." },
    nav: { home: "Startseite", blog: "Blog", text_to_video: "Text zu Video", image_to_video: "Bild zu Video", ai_tools: "KI-Tools", cta: "Kostenlos Testen" },
    hero: { title: "Regie-Level Kontrolle mit", highlight: "Seedance 2.0", subtitle: "Die einheitliche multimodale Generierungsarchitektur. Erstellen Sie kinoreife Videos aus Text, Bildern und Audio mit beispielloser Kontrolle und Realismus.", button: "Generierung Starten", users: "Von Top-Studios Vertraut" },
    product_features: {
      text_to_video: { title: "Text-zu-Video KI", desc: "Beschreiben Sie Szenen, Charaktere und Kamerabewegungen in natürlicher Sprache und lassen Sie unsere KI diese in kohärente Multi-Shot-Videos verwandeln." },
      image_to_video: { title: "Bild-zu-Video KI", desc: "Laden Sie ein Referenzfoto hoch und sehen Sie zu, wie es zu einem kurzen KI-generierten Video wird. Bewahren Sie Identität und Stil mit hoher Wiedergabetreue." },
      text_to_image: { title: "Text-zu-Bild KI", desc: "Verwandeln Sie Textaufforderungen in hochauflösende Bilder. Beschreiben Sie Stil, Beleuchtung und Komposition einmal und generieren Sie dann mehrere Variationen." },
      ai_tools: { title: "KI-Videoeffekte & Tools", desc: "Laden Sie Fotos hoch, wählen Sie eine KI-Videoeffektvorlage und lassen Sie unser System automatisch einen stilisierten Clip generieren." }
    },
    footer: {
      product: { title: "Produkt", items: ["Text zu Video", "Bild zu Video", "Videobearbeitung", "Preise"] },
      resources: { title: "Ressourcen", items: ["Blog", "Community", "Hilfe-Center", "API-Dokumentation"] },
      company: { title: "Unternehmen", items: ["Über uns", "Karriere", "Kontakt", "Rechtliches"] },
      copyright: "© 2026 Seedance AI. Alle Rechte vorbehalten."
    }
  },
  pt: {
    seo: { title: "Seedance 2.0 - Plataforma Inteligente de Geração de Vídeo AI | Seedance Versão em Português", description: "Seedance 2.0 é um modelo de geração de vídeo AI de última geração que suporta entradas de texto, imagem, áudio e vídeo para criação de conteúdo de qualidade cinematográfica." },
    nav: { home: "Início", blog: "Blog", text_to_video: "Texto para Vídeo", image_to_video: "Imagem para Vídeo", ai_tools: "Ferramentas AI", cta: "Teste Grátis" },
    hero: { title: "Controle de Nível de Diretor com", highlight: "Seedance 2.0", subtitle: "A arquitetura de geração multimodal unificada. Crie vídeos cinematográficos a partir de texto, imagens e áudio com controle e realismo sem precedentes.", button: "Começar a Gerar", users: "Confiado por Estúdios Top" },
    product_features: {
      text_to_video: { title: "IA de Texto para Vídeo", desc: "Descreva cenas, personagens e movimentos de câmera em linguagem natural e deixe nossa IA transformá-los em vídeos coerentes de várias tomadas." },
      image_to_video: { title: "IA de Imagem para Vídeo", desc: "Carregue uma foto de referência e veja-a se tornar um vídeo curto gerado por IA. Preserve a identidade e o estilo com alta fidelidade." },
      text_to_image: { title: "IA de Texto para Imagem", desc: "Transforme prompts de texto em imagens de alta resolução. Descreva estilo, iluminação e composição uma vez, depois gere várias variações." },
      ai_tools: { title: "Efeitos e Ferramentas de Vídeo IA", desc: "Carregue fotos, escolha um modelo de efeito de vídeo IA e deixe nosso sistema gerar automaticamente um clipe estilizado." }
    },
    footer: {
      product: { title: "Produto", items: ["Texto para Vídeo", "Imagem para Vídeo", "Edição de Vídeo", "Preços"] },
      resources: { title: "Recursos", items: ["Blog", "Comunidade", "Centro de Ajuda", "Documentação API"] },
      company: { title: "Empresa", items: ["Sobre Nós", "Carreiras", "Contato", "Legal"] },
      copyright: "© 2026 Seedance AI. Todos os direitos reservados."
    }
  },
  ko: {
    seo: { title: "Seedance 2.0 - 지능형 AI 비디오 생성 플랫폼 | Seedance 한국어 버전", description: "Seedance 2.0은 텍스트, 이미지, 오디오 및 비디오 입력을 지원하여 영화 품질의 콘텐츠를 제작하는 최첨단 AI 비디오 생성 모델입니다." },
    nav: { home: "홈", blog: "블로그", text_to_video: "텍스트 비디오 변환", image_to_video: "이미지 비디오 변환", ai_tools: "AI 도구", cta: "무료 체험" },
    hero: { title: "감독 수준의 제어력", highlight: "Seedance 2.0", subtitle: "통합 멀티모달 생성 아키텍처. 텍스트, 이미지, 오디오로 영화 같은 비디오를 제작하며 전례 없는 제어력과 사실감을 제공합니다.", button: "생성 시작", users: "최고의 스튜디오들이 신뢰" },
    product_features: {
      text_to_video: { title: "텍스트 투 비디오 AI", desc: "자연어로 장면, 캐릭터, 카메라 움직임을 설명하면 AI가 이를 일관된 멀티 샷 비디오로 변환합니다." },
      image_to_video: { title: "이미지 투 비디오 AI", desc: "참조 사진을 업로드하고 짧은 AI 생성 비디오로 변환되는 것을 지켜보세요. 정체성과 스타일을 고화질로 보존합니다." },
      text_to_image: { title: "텍스트 투 이미지 AI", desc: "텍스트 프롬프트를 고해상도 이미지로 변환합니다. 스타일, 조명, 구도를 한 번 설명하고 다양한 변형을 생성하세요." },
      ai_tools: { title: "AI 비디오 효과 및 도구", desc: "사진을 업로드하고 AI 비디오 효과 템플릿을 선택하면 시스템이 자동으로 스타일리시한 클립을 생성합니다." }
    },
    footer: {
      product: { title: "제품", items: ["텍스트 비디오 변환", "이미지 비디오 변환", "비디오 편집", "가격"] },
      resources: { title: "리소스", items: ["블로그", "커뮤니티", "도움말 센터", "API 문서"] },
      company: { title: "회사", items: ["소개", "채용", "연락처", "법적 고지"] },
      copyright: "© 2026 Seedance AI. 판권 소유."
    }
  },
  ru: {
    seo: { title: "Seedance 2.0 - Интеллектуальная платформа генерации видео с ИИ | Seedance Русская версия", description: "Seedance 2.0 - это современная модель генерации видео ИИ, поддерживающая ввод текста, изображений, аудио и видео для создания контента кинематографического качества." },
    nav: { home: "Главная", blog: "Блог", text_to_video: "Текст в Видео", image_to_video: "Изображение в Видео", ai_tools: "ИИ Инструменты", cta: "Попробовать бесплатно" },
    hero: { title: "Режиссерский контроль с", highlight: "Seedance 2.0", subtitle: "Единая архитектура мультимодальной генерации. Создавайте кинематографические видео из текста, изображений и аудио с беспрецедентным контролем и реализмом.", button: "Начать генерацию", users: "Доверяют лучшие студии" },
    product_features: {
      text_to_video: { title: "ИИ Текст в Видео", desc: "Опишите сцены, персонажей и движения камеры на естественном языке, и позвольте нашему ИИ превратить их в связные многокадровые видео." },
      image_to_video: { title: "ИИ Изображение в Видео", desc: "Загрузите эталонное фото и посмотрите, как оно станет коротким видео, сгенерированным ИИ. Сохраняйте идентичность и стиль с высокой точностью." },
      text_to_image: { title: "ИИ Текст в Изображение", desc: "Превращайте текстовые подсказки в изображения высокого разрешения. Опишите стиль, освещение и композицию один раз, затем генерируйте несколько вариантов." },
      ai_tools: { title: "ИИ Видеоэффекты и Инструменты", desc: "Загрузите фотографии, выберите шаблон видеоэффекта ИИ, и наша система автоматически сгенерирует стилизованный клип." }
    },
    footer: {
      product: { title: "Продукт", items: ["Текст в Видео", "Изображение в Видео", "Видеомонтаж", "Цены"] },
      resources: { title: "Ресурсы", items: ["Блог", "Сообщество", "Центр помощи", "API Документация"] },
      company: { title: "Компания", items: ["О нас", "Карьера", "Контакты", "Правовая информация"] },
      copyright: "© 2026 Seedance AI. Все права защищены."
    }
  },
  it: {
    seo: { title: "Seedance 2.0 - Piattaforma Intelligente di Generazione Video AI | Seedance Versione Italiana", description: "Seedance 2.0 è un modello di generazione video AI all'avanguardia che supporta input di testo, immagini, audio e video per la creazione di contenuti di qualità cinematografica." },
    nav: { home: "Home", blog: "Blog", text_to_video: "Testo a Video", image_to_video: "Immagine a Video", ai_tools: "Strumenti AI", cta: "Prova Gratis" },
    hero: { title: "Controllo da Regista con", highlight: "Seedance 2.0", subtitle: "L'architettura di generazione multimodale unificata. Crea video cinematografici da testo, immagini e audio con un controllo e un realismo senza precedenti.", button: "Inizia a Generare", users: "Scelto dai Migliori Studi" },
    product_features: {
      text_to_video: { title: "IA Testo a Video", desc: "Descrivi scene, personaggi e movimenti di macchina in linguaggio naturale e lascia che la nostra IA li trasformi in video coerenti a più inquadrature." },
      image_to_video: { title: "IA Immagine a Video", desc: "Carica una foto di riferimento e guardala diventare un breve video generato dall'IA. Preserva l'identità e lo stile con alta fedeltà." },
      text_to_image: { title: "IA Testo a Immagine", desc: "Trasforma i prompt di testo in immagini ad alta risoluzione. Descrivi stile, illuminazione e composizione una volta, poi genera diverse varianti." },
      ai_tools: { title: "Effetti e Strumenti Video IA", desc: "Carica foto, scegli un modello di effetto video IA e lascia che il nostro sistema generi automaticamente una clip stilizzata." }
    },
    footer: {
      product: { title: "Prodotto", items: ["Testo a Video", "Immagine a Video", "Montaggio Video", "Prezzi"] },
      resources: { title: "Risorse", items: ["Blog", "Community", "Centro Assistenza", "Documentazione API"] },
      company: { title: "Azienda", items: ["Chi Siamo", "Carriere", "Contatti", "Legale"] },
      copyright: "© 2026 Seedance AI. Tutti i diritti riservati."
    }
  },
  ar: {
    seo: { title: "Seedance 2.0 - منصة إنشاء فيديو ذكية بالذكاء الاصطناعي | Seedance النسخة العربية", description: "Seedance 2.0 هو نموذج متطور لإنشاء الفيديو بالذكاء الاصطناعي يدعم إدخال النصوص والصور والصوت والفيديو لإنشاء محتوى بجودة سينمائية." },
    nav: { home: "الرئيسية", blog: "المدونة", text_to_video: "نص إلى فيديو", image_to_video: "صورة إلى فيديو", ai_tools: "أدوات الذكاء الاصطناعي", cta: "جرب مجاناً" },
    hero: { title: "تحكم بمستوى المخرج مع", highlight: "Seedance 2.0", subtitle: "بنية التوليد متعددة الوسائط الموحدة. أنشئ فيديوهات سينمائية من النصوص والصور والصوت بتحكم وواقعية غير مسبوقة.", button: "ابدأ التوليد", users: "موثوق به من قبل أفضل الاستوديوهات" },
    footer: { product: { title: "المنتج", items: ["نص إلى فيديو", "صورة إلى فيديو", "تحرير الفيديو", "الأسعار"] }, resources: { title: "الموارد", items: ["المدونة", "المجتمع", "مركز المساعدة", "وثائق API"] }, company: { title: "الشركة", items: ["عنا", "وظائف", "اتصال", "قانوني"] }, copyright: "© 2026 Seedance AI. جميع الحقوق محفوظة." }
  },
  id: {
    seo: { title: "Seedance 2.0 - Platform Pembuatan Video AI Cerdas | Seedance Versi Bahasa Indonesia", description: "Seedance 2.0 adalah model pembuatan video AI canggih yang mendukung input teks, gambar, audio, dan video untuk pembuatan konten berkualitas sinematik." },
    nav: { home: "Beranda", blog: "Blog", text_to_video: "Teks ke Video", image_to_video: "Gambar ke Video", ai_tools: "Alat AI", cta: "Coba Gratis" },
    hero: { title: "Kontrol Tingkat Sutradara dengan", highlight: "Seedance 2.0", subtitle: "Arsitektur pembuatan multimoda terpadu. Buat video sinematik dari teks, gambar, dan audio dengan kontrol dan realisme yang belum pernah ada sebelumnya.", button: "Mulai Membuat", users: "Dipercaya oleh Studio Terkemuka" },
    footer: { product: { title: "Produk", items: ["Teks ke Video", "Gambar ke Video", "Pengeditan Video", "Harga"] }, resources: { title: "Sumber Daya", items: ["Blog", "Komunitas", "Pusat Bantuan", "Dokumentasi API"] }, company: { title: "Perusahaan", items: ["Tentang Kami", "Karir", "Kontak", "Legal"] }, copyright: "© 2026 Seedance AI. Hak cipta dilindungi undang-undang." }
  },
  ms: {
    seo: { title: "Seedance 2.0 - Platform Penjanaan Video AI Pintar | Seedance Versi Bahasa Melayu", description: "Seedance 2.0 ialah model penjanaan video AI canggih yang menyokong input teks, imej, audio dan video untuk penciptaan kandungan kualiti sinematik." },
    nav: { home: "Laman Utama", blog: "Blog", text_to_video: "Teks ke Video", image_to_video: "Imej ke Video", ai_tools: "Alat AI", cta: "Cuba Percuma" },
    hero: { title: "Kawalan Tahap Pengarah dengan", highlight: "Seedance 2.0", subtitle: "Senibina penjanaan multimodal bersepadu. Cipta video sinematik daripada teks, imej dan audio dengan kawalan dan realisme yang tidak pernah berlaku sebelum ini.", button: "Mula Menjana", users: "Dipercayai oleh Studio Terkemuka" },
    footer: { product: { title: "Produk", items: ["Teks ke Video", "Imej ke Video", "Penyuntingan Video", "Harga"] }, resources: { title: "Sumber", items: ["Blog", "Komuniti", "Pusat Bantuan", "Dokumentasi API"] }, company: { title: "Syarikat", items: ["Tentang Kami", "Kerjaya", "Hubungi", "Undang-undang"] }, copyright: "© 2026 Seedance AI. Hak cipta terpelihara." }
  },
  hi: {
    seo: { title: "Seedance 2.0 - बुद्धिमान एआई वीडियो निर्माण मंच | Seedance हिंदी संस्करण", description: "Seedance 2.0 एक अत्याधुनिक AI वीडियो जनरेशन मॉडल है जो सिनेमाई गुणवत्ता वाली सामग्री निर्माण के लिए टेक्स्ट, छवि, ऑडियो और वीडियो इनपुट का समर्थन करता है।" },
    nav: { home: "होम", blog: "ब्लॉग", text_to_video: "टेक्स्ट से वीडियो", image_to_video: "इमेज से वीडियो", ai_tools: "AI टूल्स", cta: "मुफ्त में आजमाएं" },
    hero: { title: "निर्देशक स्तर का नियंत्रण", highlight: "Seedance 2.0", subtitle: "एकीकृत मल्टीमो달 जनरेशन आर्किटेक्चर। अभूतपूर्व नियंत्रण और यथार्थवाद के साथ टेक्स्ट, छवियों और ऑडियो से सिनेमाई वीडियो बनाएं।", button: "बनाना शुरू करें", users: "शीर्ष स्टूडियो द्वारा विश्वसनीय" },
    footer: { product: { title: "उत्पाद", items: ["टेक्स्ट से वीडियो", "इमेज से वीडियो", "वीडियो संपादन", "मूल्य निर्धारण"] }, resources: { title: "संसाधन", items: ["ब्लॉग", "समुदाय", "सहायता केंद्र", "API दस्तावेज़"] }, company: { title: "कंपनी", items: ["हमारे बारे में", "करियर", "संपर्क", "कानूनी"] }, copyright: "© 2026 Seedance AI. सर्वाधिकार सुरक्षित।" }
  },
  tr: {
    seo: { title: "Seedance 2.0 - Akıllı Yapay Zeka Video Oluşturma Platformu | Seedance Türkçe Sürümü", description: "Seedance 2.0, sinematik kalitede içerik oluşturma için metin, görüntü, ses ve video girişlerini destekleyen son teknoloji bir AI video üretim modelidir." },
    nav: { home: "Anasayfa", blog: "Blog", text_to_video: "Metinden Videoya", image_to_video: "Görüntüden Videoya", ai_tools: "AI Araçları", cta: "Ücretsiz Dene" },
    hero: { title: "Yönetmen Seviyesinde Kontrol", highlight: "Seedance 2.0", subtitle: "Birleşik çok modlu üretim mimarisi. Metin, görüntü ve sesten, benzeri görülmemiş kontrol ve gerçekçilikle sinematik videolar oluşturun.", button: "Üretmeye Başla", users: "En İyi Stüdyolar Tarafından Güveniliyor" },
    footer: { product: { title: "Ürün", items: ["Metinden Videoya", "Görüntüden Videoya", "Video Düzenleme", "Fiyatlandırma"] }, resources: { title: "Kaynaklar", items: ["Blog", "Topluluk", "Yardım Merkezi", "API Dokümantasyonu"] }, company: { title: "Şirket", items: ["Hakkımızda", "Kariyer", "İletişim", "Yasal"] }, copyright: "© 2026 Seedance AI. Tüm hakları saklıdır." }
  },
  vi: {
    seo: { title: "Seedance 2.0 - Nền tảng tạo video AI thông minh | Seedance Phiên bản tiếng Việt", description: "Seedance 2.0 là mô hình tạo video AI hiện đại hỗ trợ đầu vào văn bản, hình ảnh, âm thanh và video để tạo nội dung chất lượng điện ảnh." },
    nav: { home: "Trang chủ", blog: "Blog", text_to_video: "Văn bản sang Video", image_to_video: "Hình ảnh sang Video", ai_tools: "Công cụ AI", cta: "Dùng thử miễn phí" },
    hero: { title: "Kiểm soát cấp đạo diễn với", highlight: "Seedance 2.0", subtitle: "Kiến trúc tạo đa phương thức hợp nhất. Tạo video điện ảnh từ văn bản, hình ảnh và âm thanh với khả năng kiểm soát và tính chân thực chưa từng có.", button: "Bắt đầu tạo", users: "Được tin cậy bởi các Studio hàng đầu" },
    footer: { product: { title: "Sản phẩm", items: ["Văn bản sang Video", "Hình ảnh sang Video", "Chỉnh sửa Video", "Bảng giá"] }, resources: { title: "Tài nguyên", items: ["Blog", "Cộng đồng", "Trung tâm trợ giúp", "Tài liệu API"] }, company: { title: "Công ty", items: ["Về chúng tôi", "Nghề nghiệp", "Liên hệ", "Pháp lý"] }, copyright: "© 2026 Seedance AI. Đã đăng ký bản quyền." }
  },
  th: {
    seo: { title: "Seedance 2.0 - แพลตฟอร์มสร้างวิดีโอ AI อัจฉริยะ | Seedance เวอร์ชั่นภาษาไทย", description: "Seedance 2.0 เป็นโมเดลการสร้างวิดีโอ AI ที่ล้ำสมัย รองรับการป้อนข้อมูลทั้งข้อความ รูปภาพ เสียง และวิดีโอ เพื่อสร้างคอนเทนต์คุณภาพระดับภาพยนตร์" },
    nav: { home: "หน้าแรก", blog: "บล็อก", text_to_video: "ข้อความเป็นวิดีโอ", image_to_video: "รูปภาพเป็นวิดีโอ", ai_tools: "เครื่องมือ AI", cta: "ทดลองฟรี" },
    hero: { title: "การควบคุมระดับผู้กำกับด้วย", highlight: "Seedance 2.0", subtitle: "สถาปัตยกรรมการสร้างหลายรูปแบบแบบครบวงจร สร้างวิดีโอระดับภาพยนตร์จากข้อความ รูปภาพ และเสียง ด้วยการควบคุมและความสมจริงที่ไม่เคยมีมาก่อน", button: "เริ่มสร้าง", users: "ได้รับความไว้วางใจจากสตูดิโอชั้นนำ" },
    footer: { product: { title: "ผลิตภัณฑ์", items: ["ข้อความเป็นวิดีโอ", "รูปภาพเป็นวิดีโอ", "ตัดต่อวิดีโอ", "ราคา"] }, resources: { title: "ทรัพยากร", items: ["บล็อก", "ชุมชน", "ศูนย์ช่วยเหลือ", "เอกสาร API"] }, company: { title: "บริษัท", items: ["เกี่ยวกับเรา", "ร่วมงานกับเรา", "ติดต่อ", "กฎหมาย"] }, copyright: "© 2026 Seedance AI. สงวนลิขสิทธิ์." }
  },
  fa: {
    seo: { title: "Seedance 2.0 - پلتفرم هوشمند تولید ویدئو با هوش مصنوعی | Seedance نسخه فارسی", description: "Seedance 2.0 یک مدل پیشرفته تولید ویدئو با هوش مصنوعی است که از ورودی‌های متن، تصویر، صدا و ویدئو برای ایجاد محتوای با کیفیت سینمایی پشتیبانی می‌کند." },
    nav: { home: "خانه", blog: "بلاگ", text_to_video: "متن به ویدئو", image_to_video: "تصویر به ویدئو", ai_tools: "ابزارهای هوش مصنوعی", cta: "امتحان رایگان" },
    hero: { title: "کنترل در سطح کارگردان با", highlight: "Seedance 2.0", subtitle: "معماری تولید چندوجهی یکپارچه. ایجاد ویدئوهای سینمایی از متن، تصاویر و صدا با کنترل و واقع‌گرایی بی‌سابقه.", button: "شروع تولید", users: "مورد اعتماد استودیوهای برتر" },
    footer: { product: { title: "محصول", items: ["متن به ویدئو", "تصویر به ویدئو", "ویرایش ویدئو", "قیمت‌گذاری"] }, resources: { title: "منابع", items: ["بلاگ", "جامعه", "مرکز راهنما", "مستندات API"] }, company: { title: "شرکت", items: ["درباره ما", "شغل‌ها", "تماس", "حقوقی"] }, copyright: "© 2026 Seedance AI. تمامی حقوق محفوظ است." }
  },
  nl: {
    seo: { title: "Seedance 2.0 - Intelligent AI Video Generation Platform | Seedance Nederlandse Versie", description: "Seedance 2.0 is een state-of-the-art AI-videogeneratiemodel dat tekst-, beeld-, audio- en video-invoer ondersteunt voor het creëren van inhoud van bioscoopkwaliteit." },
    nav: { home: "Home", blog: "Blog", text_to_video: "Tekst naar Video", image_to_video: "Afbeelding naar Video", ai_tools: "AI Tools", cta: "Probeer Gratis" },
    hero: { title: "Regisseur-Niveau Controle met", highlight: "Seedance 2.0", subtitle: "De geünificeerde multimodale generatie-architectuur. Maak filmische video's van tekst, afbeeldingen en audio met ongekende controle en realisme.", button: "Start Genereren", users: "Vertrouwd door Top Studio's" },
    footer: { product: { title: "Product", items: ["Tekst naar Video", "Afbeelding naar Video", "Video Bewerking", "Prijzen"] }, resources: { title: "Bronnen", items: ["Blog", "Gemeenschap", "Helpcentrum", "API Documentatie"] }, company: { title: "Bedrijf", items: ["Over Ons", "Carrières", "Contact", "Juridisch"] }, copyright: "© 2026 Seedance AI. Alle rechten voorbehouden." }
  },
  pl: {
    seo: { title: "Seedance 2.0 - Inteligentna Platforma Generowania Wideo AI | Seedance Wersja Polska", description: "Seedance 2.0 to najnowocześniejszy model generowania wideo AI obsługujący wprowadzanie tekstu, obrazu, dźwięku i wideo do tworzenia treści o jakości kinowej." },
    nav: { home: "Strona główna", blog: "Blog", text_to_video: "Tekst na Wideo", image_to_video: "Obraz na Wideo", ai_tools: "Narzędzia AI", cta: "Wypróbuj za darmo" },
    hero: { title: "Kontrola na Poziomie Reżysera z", highlight: "Seedance 2.0", subtitle: "Zunifikowana architektura generowania multimodalnego. Twórz kinowe filmy z tekstu, obrazów i dźwięku z niespotykaną kontrolą i realizmem.", button: "Rozpocznij Generowanie", users: "Zaufane przez Czołowe Studia" },
    footer: { product: { title: "Produkt", items: ["Tekst na Wideo", "Obraz na Wideo", "Edycja Wideo", "Cennik"] }, resources: { title: "Zasoby", items: ["Blog", "Społeczność", "Centrum Pomocy", "Dokumentacja API"] }, company: { title: "Firma", items: ["O nas", "Kariera", "Kontakt", "Prawne"] }, copyright: "© 2026 Seedance AI. Wszelkie prawa zastrzeżone." }
  },
  sv: {
    seo: { title: "Seedance 2.0 - Intelligent AI-videogenereringsplattform | Seedance Svensk Version", description: "Seedance 2.0 är en toppmodern AI-videogenereringsmodell som stöder text-, bild-, ljud- och videoinmatning för skapande av innehåll av biokvalitet." },
    nav: { home: "Hem", blog: "Blogg", text_to_video: "Text till Video", image_to_video: "Bild till Video", ai_tools: "AI-verktyg", cta: "Prova Gratis" },
    hero: { title: "Regissörsnivå Kontroll med", highlight: "Seedance 2.0", subtitle: "Den enhetliga multimodala genereringsarkitekturen. Skapa filmiska videor från text, bilder och ljud med oöverträffad kontroll och realism.", button: "Börja Generera", users: "Betrodd av Toppstudior" },
    footer: { product: { title: "Produkt", items: ["Text till Video", "Bild till Video", "Videoredigering", "Priser"] }, resources: { title: "Resurser", items: ["Blogg", "Community", "Hjälpcenter", "API-dokumentation"] }, company: { title: "Företag", items: ["Om oss", "Karriär", "Kontakt", "Juridiskt"] }, copyright: "© 2026 Seedance AI. Alla rättigheter förbehållna." }
  },
  uk: {
    seo: { title: "Seedance 2.0 - Інтелектуальна платформа генерації відео зі ШІ | Seedance Українська версія", description: "Seedance 2.0 - це найсучасніша модель генерації відео ШІ, що підтримує введення тексту, зображень, аудіо та відео для створення контенту кінематографічної якості." },
    nav: { home: "Головна", blog: "Блог", text_to_video: "Текст у Відео", image_to_video: "Зображення у Відео", ai_tools: "Інструменти ШІ", cta: "Спробувати безкоштовно" },
    hero: { title: "Режисерський контроль з", highlight: "Seedance 2.0", subtitle: "Єдина архітектура мультимодальної генерації. Створюйте кінематографічні відео з тексту, зображень та аудіо з безпрецедентним контролем і реалізмом.", button: "Почати генерацію", users: "Довіряють найкращі студії" },
    footer: { product: { title: "Продукт", items: ["Текст у Відео", "Зображення у Відео", "Відеомонтаж", "Ціни"] }, resources: { title: "Ресурси", items: ["Блог", "Спільнота", "Центр допомоги", "API Документація"] }, company: { title: "Компанія", items: ["Про нас", "Кар'єра", "Контакти", "Юридична інформація"] }, copyright: "© 2026 Seedance AI. Всі права захищені." }
  },
  ro: {
    seo: { title: "Seedance 2.0 - Platformă Inteligentă de Generare Video AI | Seedance Versiunea Română", description: "Seedance 2.0 este un model de generare video AI de ultimă generație care acceptă intrări text, imagine, audio și video pentru crearea de conținut de calitate cinematografică." },
    nav: { home: "Acasă", blog: "Blog", text_to_video: "Text în Video", image_to_video: "Imagine în Video", ai_tools: "Instrumente AI", cta: "Încearcă Gratuit" },
    hero: { title: "Control la Nivel de Regizor cu", highlight: "Seedance 2.0", subtitle: "Arhitectura de generare multimodală unificată. Creați videoclipuri cinematografice din text, imagini și audio cu un control și realism fără precedent.", button: "Începe Generarea", users: "De Încredere pentru Studiouri de Top" },
    footer: { product: { title: "Produs", items: ["Text în Video", "Imagine în Video", "Editare Video", "Prețuri"] }, resources: { title: "Resurse", items: ["Blog", "Comunitate", "Centru de Ajutor", "Documentație API"] }, company: { title: "Companie", items: ["Despre Noi", "Cariere", "Contact", "Legal"] }, copyright: "© 2026 Seedance AI. Toate drepturile rezervate." }
  }
};

const defaultTranslations = {
  seo: en.seo,
  nav: en.nav,
  hero: en.hero,
  product_features: en.product_features,
  footer: en.footer,
  features: en.features,
  comparison: en.comparison,
  showcase: en.showcase,
  testimonials: en.testimonials,
  faq: en.faq
};

function deepMerge(target, source) {
  const result = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(result[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

locales.forEach(lang => {
  // Use English as base, override with specific language translations if available
  let content = JSON.parse(JSON.stringify(defaultTranslations)); // Deep clone English
  
  if (translations[lang]) {
    content = deepMerge(content, translations[lang]);
    console.log(`Applying translations for ${lang}`);
  } else {
    console.log(`Using English fallback for ${lang}`);
  }
  
  const filePath = path.join(__dirname, `../src/i18n/${lang}.json`);
  fs.writeFileSync(filePath, JSON.stringify(content, null, 2));
});

console.log('All locales generated successfully.');
