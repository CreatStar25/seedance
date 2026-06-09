export const enT = {
  intro:
    "Blurry on-screen text kills comprehension in short video, posters, and live captions. **Seedance 2.0** ships targeted text-rendering improvements that reduce fuzz and jagged edges. This **Seedance tutorial** walks through how clarity is tuned—from engine behavior to knobs you can change in the **Seedance Chinese version** UI or any supported locale.",
  introLead: "The sections below cover theory and settings. To try generation right away, use the button.",
  hTech: "Core text-rendering strengths in Seedance 2.0",
  hTech1: "1. AI-driven smart rendering",
  hTech1p:
    "The engine reads font family, size, and usage context, then picks a rendering path that fits. Unlike one-size-fits-all tools, it adjusts edge smoothing and contrast for the target resolution so blur is less likely at export.",
  hTech2: "2. Scene-aware clarity tuning",
  hTech2p:
    "Short clips, live captions, and poster copy need different treatment. Seedance 2.0 switches strategies by scene: high-frame-rate video gets inter-frame stability to cut motion smear; static posters get sharper edge handling.",
  thScene: "Scene", thPain: "Typical issue", thFocus: "Seedance 2.0 focus",
  r1a: "Short-video captions", r1b: "Smear when playback is fast", r1c: "Frame stability, motion-blur control",
  r2a: "Static poster / cover", r2b: "Jagged small type", r2c: "Anti-aliasing, contrast boost",
  r3a: "Live captions", r3b: "Lag or broken strokes", r3c: "Low-latency render, stroke continuity",
  hPractice: "Hands-on: steps to sharpen on-screen text",
  hPractice1: "1. Fine-tune clarity parameters",
  p1: "Open text/subtitle settings in Seedance 2.0 and locate **Clarity enhancement** (or the equivalent in your locale).",
  p2: "Pick a preset that matches output: vertical short, horizontal opener, or print-ready asset.",
  p3: "For small type, enable **edge anti-aliasing**—jaggies usually drop noticeably.",
  p4: "Match **resolution adaptation** to your delivery target (1080p, 4K, etc.) so downscaling does not eat detail.",
  hPractice2: "2. State text requirements in prompts",
  hPractice2p: "When generating video, spell out caption or on-screen copy style so the pipeline can cooperate with the renderer. Example:",
  quotePrompt:
    "> White captions with black outline at the bottom, medium size, crisp strokes, no motion smear, 1080p output.",
  pPractice2Note:
    "Still soft after retries? Check whether reference images already contain blurry text, export resolution is below preview, or a speed mode disabled quality enhancement.",
  hApps: "Where this pays off",
  thApp: "Use case", thValue: "Why it matters",
  app1a: "E-commerce / edu shorts", app1b: "Product names and key lines stay readable—better completion and conversion",
  app2a: "Brand collateral", app2b: "Sharp headlines in posters and deck stills keep visual quality consistent",
  app3a: "Training / corporate live", app3b: "Readable real-time captions lower viewer friction",
  hFaq: "FAQ",
  faq1q: "Q: Which fonts benefit from clarity optimization?",
  faq1a:
    "A: Common serif/sans styles (Song, Hei, Kai equivalents) and most display faces used in marketing. Very thin or heavily decorative fonts—preview once before batch export.",
  faq2q: "Q: Do I need special hardware?",
  faq2a:
    "A: A normal desktop browser handles routine single clips. Large batches can queue on the generator page—no self-hosted render farm required.",
  faq3q: "Q: Does clarity enhancement slow rendering a lot?",
  faq3a:
    "A: Standard presets add little time. For maximum sharpness at scale, stagger jobs or split into shorter segments.",
  hSum: "Wrap-up",
  sumP:
    "**Seedance 2.0** combines AI rendering, scene presets, and adjustable enhancement for shorts captions, marketing assets, and live subtitles. Match presets to your scene, write explicit text constraints in prompts, and use the localized generator—readability usually improves on the first sensible pass.",
  ctaLead: "Ready to test? Open the generator below.",
  related: "**Related searches**: Seedance 2.0, Seedance tutorial, Seedance Chinese version, sharp video captions, text rendering.",
};
