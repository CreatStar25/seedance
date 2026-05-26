/** German — full multimodal input guide sections */
const IMG = "https://img.seedance22.com/aiweb/seedance-260526-1.png";

export const de = {
  title: "Seedance 2.0: Multimodale Eingabe im Überblick",
  description:
    "Text, Bild, Audio und Video in Seedance 2.0, @-Referenzsystem und bis zu 12 Referenzdateien. Seedance-Tutorial für multimodales KI-Video.",
  tags: ["Seedance 2.0", "Seedance-Tutorial", "Seedance Chinesische Version"],
  alt: "Seedance 2.0: Multimodale Eingabe im Überblick",
  related:
    "**Verwandte Suchen**: Seedance 2.0, Seedance-Tutorial, Seedance Chinesische Version, multimodales KI-Video, @-Referenz-Prompts.",
  closing:
    "Bereit, multimodale Eingaben selbst zu testen? Über den Button unten gelangen Sie zu **Seedance 2.0** — vollständiger multimodaler Workflow inklusive **Seedance Chinesische Version**-Oberfläche.",
  main: [
    `Wenn Sie KI-Video noch mit „nur Text-Prompts und endlosen Rerolls“ erstellen, verpassen Sie vermutlich das Kern-Upgrade von **Seedance 2.0**. Auf einer einheitlichen multimodalen Audio-Video-Architektur akzeptiert Seedance 2.0 Text, Bilder, Audio und Video in einem Workflow — bis zu **12 Referenzdateien** gleichzeitig (9 Bilder + 3 Videos + 3 Audiospuren + natürlichsprachliche Anweisungen). Für Creator, die Charakterlook, Kamerabewegung und AV-Sync steuern müssen, ist multimodale Eingabe kein Nice-to-have — sie beeinflusst die Ausgabequalität direkt.

![Seedance 2.0: Multimodale Eingabe im Überblick](${IMG})

Dieses **Seedance-Tutorial** erklärt alle vier Eingabemodalitäten, das @-Referenzsystem und typische Produktionsszenarien — auch über die **Seedance Chinesische Version**-Oberfläche.`,

    `## 1. Warum multimodale Eingabe jetzt wichtig ist

Viele frühere Tools akzeptierten nur Text. Je feiner die Beschreibung, desto mehr musste das Modell raten — Aussehen, Kameraführung, Musiktempo. In echten Projekten liegen Lookframes, Referenzclips, BGM oder Voiceover oft schon vor, konnten aber nicht direkt ins Modell.

**Seedance 2.0** vereint vier Modalitäten auf einem Generierungspfad: Das Modell liest Textsemantik, Bildvisuals, Videobewegung und Kamera-Sprache sowie Audiorhythmus gemeinsam und erzeugt Video mit nativen Audiospuren. Gegenüber 1.5 sind komplexe Interaktionen und Bewegungsszenen besser nutzbar — näher an Werbung, Kurzdrama und Social Workflows.`,

    `## 2. Vier Eingabemodalitäten im Detail

### 2.1 Text: Absicht klar formulieren

Text bleibt die Basis; Seedance 2.0 versteht lange Anweisungen, Shotlisten und Stil-Keywords deutlich besser. Sie können:

- vollständige Szenennarrative schreiben (Subjekt, Umgebung, Aktion, Kamera, Stil);
- storyboardartige Mehrfachshot-Beschreibungen nutzen;
- mit **@**-Referenzen jedem Asset eine Rolle zuweisen.

Beispiel: „@Image1 für das Gesicht der Hauptfigur, @Video1 für Follow-Cam-Bewegung, @Audio1 als Hintergrundmusik — die Figur läuft durch einen Neon-Nachtmarkt, die Kamera folgt von hinten, dreht sich dann lächelnd zur Linse.“

### 2.2 Bilder: Charakter und visuellen Stil fixieren

Bilder sind die häufigste Referenz. Nach Upload von Lookframes, Szenenboards, Marken-VI oder Styleplates extrahiert das Modell Gesicht, Kleidung, Farbe und Komposition und hält sie über Einstellungen relativ stabil.

| Typischer Einsatz | Hinweise |
| :--- | :--- |
| Charakter-Look | Gesicht und Outfit über Shots hinweg |
| Szenenreferenz | Umgebung, Licht und Palette fixieren |
| Styleplate | Werbe- und E-Commerce-Visuals vereinheitlichen |
| Erstes Frame | Eröffnungskomposition steuern |

Bis zu **9 Bilder**; JPG, PNG, WebP.

### 2.3 Audio: Rhythmus, Dialog und Stimmung

Seedance 2.0 akzeptiert hochgeladenes Audio und kann native synchronisierte Spuren ausgeben. Audio dient für:

- **Hintergrundmusik**: beat-synchroner Schnitt und Pacing;
- **Voiceover/Dialog**: Lip-Sync (Mandarin, Kantonesisch, Englisch u. a.);
- **Umgebungs-SFX**: stärkere Atmosphäre.

Bis zu **3 Audiospuren**, Gesamtlänge typisch innerhalb 15 Sekunden; MP3, WAV, M4A.

### 2.4 Video: Visuelle Referenz für Kamera und Bewegung

Referenzclips liefern Kamerabewegung, Körpersprache, Rhythmus und VFX-Stil — ohne alles in Text zu „übersetzen“. Typisch:

- Follow-, Orbit-, Dolly- oder Push-Pull-Kamera;
- Tanz- oder Action-Choreografie;
- Szenen aus vorhandenem Material verlängern oder ergänzen.

Bis zu **3 Videos**, Längenlimits pro Clip und gesamt (typisch ≤ 15 s); MP4, MOV.`,

    `## 3. @-Referenzsystem: Jedem Asset eine Aufgabe

**@-Referenzen** machen multimodale Eingabe praktikabel. Nach dem Upload markieren Sie \`@Image1\`, \`@Video1\`, \`@Audio1\` im Prompt, damit das Modell die Rolle kennt statt zu raten.

| Tag | Typische Rolle |
| :--- | :--- |
| @Image1 | Gesicht / Kleidung / Szene |
| @Video1 | Kamerabewegung / Aktionsrhythmus |
| @Audio1 | BGM / Lip-Sync-Voiceover |
| Text | Story, Stil, Dauer |

**Kombibeispiel** (Bild + Video + Audio):

\`\`\`
Durchgehend die Ego-Perspektive von @Video1 verwenden.
@Audio1 als Hintergrundmusik, Schnitt im Takt.
Figur aus @Image1 durch Neon-Nachtmarkt, Kamera folgt von hinten,
Bewegungsstil wie in @Video1 — Stopp, Drehung, Lächeln.
Filmische Nachtaufnahme, satte Farben, geringe Schärfentiefe.
\`\`\`

Klare @-Rollen verbessern die Steuerbarkeit deutlich.`,

    `## 4. Kerndaten auf einen Blick

| Punkt | Spezifikation |
| :--- | :--- |
| Eingabemodalitäten | Text + Bild + Video + Audio |
| Referenz-Obergrenze | 12 gesamt (9 Bilder + 3 Videos + 3 Audio) |
| Clip-Länge | 4–15 Sekunden |
| Auflösung | 480p / 720p / 1080p (Pro bis 2K) |
| Seitenverhältnisse | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Audio | Native AV-Sync, mehrsprachiges Lip-Sync |
| Bildrate | 24 fps |`,

    `## 5. Drei typische Produktionsszenarien

### 5.1 Kurzform und Social Content

Teams brauchen oft Volumen mit gleicher IP und Look. Charakter per Bild fixieren, Kamera-Sprache per Video-Referenz, Skripte im Text variieren — schneller iterieren mit weniger Rerolls.

### 5.2 Marken-Marketing-Assets

Marken verlangen VI-Konsistenz. Logo, Key Visuals und Styleboards plus Text-Prompts erzeugen Werbe- oder Social-Clips mit einheitlichem Ton — zuverlässiger als nur Text.

### 5.3 Bildungs- und Wissensvideo

Vorlesungs- oder Erzählaudio für lip-synced Visuals hochladen; Szenenreferenzbilder ergänzen — kostengünstiger multimodaler Lehrinhalt.`,

    `## 6. Einstieg: Vier-Schritte-Workflow

1. **Lieferobjekt definieren**: Werbung, Kurzdrama, Social-Clip; Dauer und Seitenverhältnis.
2. **Referenzen vorbereiten**: Charakter, Kamera, BGM nach Bedarf — nicht jedes Mal alle 12 Dateien.
3. **Prompt + @ schreiben**: zuerst Story, dann Assets binden; widersprüchliche Anweisungen vermeiden.
4. **Klein iterieren**: 4–6 s zur Validierung von Charakter und Kamera, dann auf 10–15 s verlängern.`,

    `## FAQ

**F: Muss ich alle vier Modalitäten nutzen?**  
A: Nein. Nur Text funktioniert; ein oder zwei Bilder reichen. Nach Bedarf mischen.

**F: Wie werden @-Nummern zugeordnet?**  
A: Nach Upload-Reihenfolge — erstes Bild ist @Image1, erstes Video @Video1 usw. Nummerierung im Prompt konsistent halten.

**F: Garantieren Bilder 100 % Konsistenz?**  
A: Mehreinstellungs-Konsistenz schlägt Nur-Text deutlich; bei komplexen Multi-Subject- oder Extremwinkeln kann es abweichen — festes Testset nutzen.

**F: Erscheint hochgeladenes Audio im finalen Clip?**  
A: Das Modell kann Rhythmus folgen und je nach Prompt/Modus auch native Dialoge, SFX und Musik erzeugen.`,
  ],
};
