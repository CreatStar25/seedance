#!/usr/bin/env python3
"""Parse LANGUAGE:-delimited body chunks and emit merge JSON files."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent

CTA_PREFIX = (
    "---\n\n"
    '<div style="text-align:center; margin: 2rem 0;">\n'
    '  <a href="https://app.seedance22.com/generate/video-tools/seedance2.0" '
    'target="_blank" rel="noopener noreferrer" '
    'style="display:inline-block; padding: 1rem 2rem; '
    "background: linear-gradient(135deg, #eab308 0%, #f59e0b 100%); "
    'color: #000; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; '
    "text-decoration: none; box-shadow: 0 4px 14px rgba(234,179,8,0.4);\">"
)

CTA_SUFFIX = "</a>\n</div>\n\n"

BUTTONS = {
    "es": "Empezar a usar Seedance",
    "fr": "Commencer avec Seedance",
    "de": "Seedance jetzt nutzen",
    "pt": "Começar a usar Seedance",
    "it": "Inizia a usare Seedance",
    "nl": "Aan de slag met Seedance",
    "pl": "Zacznij korzystać z Seedance",
    "sv": "Börja använda Seedance",
    "ro": "Începe să folosești Seedance",
    "uk": "Почніть користуватися Seedance",
    "ru": "Начать использовать Seedance",
    "ar": "ابدأ استخدام Seedance",
    "fa": "شروع استفاده از Seedance",
    "hi": "Seedance का उपयोग शुरू करें",
    "ja": "Seedance を始める",
    "ko": "Seedance 시작하기",
    "tr": "Seedance kullanmaya başla",
    "vi": "Bắt đầu dùng Seedance",
    "th": "เริ่มใช้ Seedance",
    "id": "Mulai menggunakan Seedance",
    "ms": "Mula menggunakan Seedance",
}

SEO_COMPLIANCE = {
    "es": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, cumplimiento Seedance 2.0, regiones de vídeo con IA.",
    "fr": "**SEO** : tutoriel Seedance, prompts Seedance, Seedance news, conformité Seedance 2.0, régions vidéo IA.",
    "de": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0 Compliance, KI-Video-Regionen.",
    "pt": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, conformidade Seedance 2.0, regiões de vídeo com IA.",
    "it": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, conformità Seedance 2.0, regioni video IA.",
    "nl": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0 compliance, AI-videoregio’s.",
    "pl": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, zgodność Seedance 2.0, regiony wideo AI.",
    "sv": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0-efterlevnad, AI-videoregioner.",
    "ro": "**SEO**: tutorial Seedance, prompturi Seedance, Seedance news, conformitate Seedance 2.0, regiuni video IA.",
    "uk": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, комплаєнс Seedance 2.0, регіони AI-відео.",
    "ru": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, комплаенс Seedance 2.0, регионы AI-видео.",
    "ar": "**SEO**: Seedance tutorial، Seedance prompts، Seedance news، امتثال Seedance 2.0، مناطق فيديو بالذكاء الاصطناعي.",
    "fa": "**SEO**: Seedance tutorial، Seedance prompts، Seedance news، انطباق Seedance 2.0، مناطق ویدیوی هوش مصنوعی.",
    "hi": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0 अनुपालन, AI वीडियो क्षेत्र.",
    "ja": "**SEO**: Seedance tutorial、Seedance prompts、Seedance news、Seedance 2.0 コンプライアンス、AI動画リージョン。",
    "ko": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0 컴플라이언스, AI 비디오 지역.",
    "tr": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0 uyumluluğu, yapay zekâ video bölgeleri.",
    "vi": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, tuân thủ Seedance 2.0, khu vực video AI.",
    "th": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, การปฏิบัติตาม Seedance 2.0, พื้นที่วิดีโอ AI",
    "id": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, kepatuhan Seedance 2.0, wilayah video AI.",
    "ms": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, pematuhan Seedance 2.0, wilayah video AI.",
}

SEO_WORLD = {
    "es": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, vídeo multimodal con IA.",
    "fr": "**SEO** : tutoriel Seedance, prompts Seedance, Seedance news, Seedance 2.0, vidéo multimodale IA.",
    "de": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, multimodales KI-Video.",
    "pt": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, vídeo multimodal com IA.",
    "it": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, video multimodale IA.",
    "nl": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, multimodale AI-video.",
    "pl": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, wideo multimodalne AI.",
    "sv": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, multimodal AI-video.",
    "ro": "**SEO**: tutorial Seedance, prompturi Seedance, Seedance news, Seedance 2.0, video multimodal IA.",
    "uk": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, мультимодальне AI-відео.",
    "ru": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, мультимодальное AI-видео.",
    "ar": "**SEO**: Seedance tutorial، Seedance prompts، Seedance news، Seedance 2.0، فيديو متعدد الوسائط بالذكاء الاصطناعي.",
    "fa": "**SEO**: Seedance tutorial، Seedance prompts، Seedance news، Seedance 2.0، ویدیوی چندوجهی هوش مصنوعی.",
    "hi": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, मल्टीमोडल AI वीडियो.",
    "ja": "**SEO**: Seedance tutorial、Seedance prompts、Seedance news、Seedance 2.0、マルチモーダルAI動画。",
    "ko": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, 멀티모달 AI 비디오.",
    "tr": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, çok modlu yapay zekâ videosu.",
    "vi": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, video AI đa phương thức.",
    "th": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, วิดีโอ AI แบบมัลติโมดัล",
    "id": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, video AI multimodal.",
    "ms": "**SEO**: Seedance tutorial, Seedance prompts, Seedance news, Seedance 2.0, video AI multimodal.",
}


def parse_section(text: str) -> dict[str, str]:
    out: dict[str, str] = {}
    blocks = re.split(r"(?m)^LANGUAGE:([a-z]{2})\s*$", text)
    it = iter(blocks[1:])
    for lang, body in zip(it, it):
        out[lang.strip()] = body.strip()
    return out


def finalize_body(main: str, lang: str, *, compliance: bool) -> str:
    btn = BUTTONS[lang]
    seo = SEO_COMPLIANCE[lang] if compliance else SEO_WORLD[lang]
    return main.rstrip() + "\n\n" + CTA_PREFIX + btn + CTA_SUFFIX + seo


def write_json(
    path: Path,
    slug: str,
    langs: list[str],
    bodies: dict[str, str],
    *,
    compliance: bool,
) -> None:
    missing = [L for L in langs if L not in bodies]
    if missing:
        raise SystemExit(f"Missing langs for {slug} -> {path}: {missing}")
    obj = {
        slug: {
            L: finalize_body(bodies[L], L, compliance=compliance) for L in langs
        }
    }
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> None:
    compliance = parse_section(
        (ROOT / "seedance-bodies-compliance-raw.txt").read_text(encoding="utf-8")
    )
    world = parse_section((ROOT / "seedance-bodies-world-raw.txt").read_text(encoding="utf-8"))

    slug_c = "seedance-2-0-global-expansion-compliance"
    slug_w = "seedance-2-0-world-leading-model"

    a = ["es", "fr", "de", "pt", "it", "nl", "pl"]
    b = ["sv", "ro", "uk", "ru", "ar", "fa", "hi"]
    c = ["ja", "ko", "tr", "vi", "th", "id", "ms"]

    write_json(
        ROOT / "seedance-bodies-compliance-a.json",
        slug_c,
        a,
        compliance,
        compliance=True,
    )
    write_json(
        ROOT / "seedance-bodies-compliance-b.json",
        slug_c,
        b,
        compliance,
        compliance=True,
    )
    write_json(
        ROOT / "seedance-bodies-compliance-c.json",
        slug_c,
        c,
        compliance,
        compliance=True,
    )
    write_json(
        ROOT / "seedance-bodies-world-a.json", slug_w, a, world, compliance=False
    )
    write_json(
        ROOT / "seedance-bodies-world-b.json", slug_w, b, world, compliance=False
    )
    write_json(
        ROOT / "seedance-bodies-world-c.json", slug_w, c, world, compliance=False
    )
    print("Wrote 6 JSON files.")


if __name__ == "__main__":
    main()
