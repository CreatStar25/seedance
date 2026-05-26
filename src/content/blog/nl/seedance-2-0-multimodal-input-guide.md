---
title: "Seedance 2.0: volledige gids voor multimodale invoer"
description: "Tekst, beeld, audio en video in Seedance 2.0, @-referentiesysteem en tot 12 referentiebestanden. Seedance-tutorial voor multimodale AI-video."
tags: ["Seedance 2.0","Seedance-tutorial","Seedance Chinese versie"]
pubDate: "2026-05-26"
heroImage: "https://img.seedance22.com/aiweb/seedance-260526-1.png"
author: "Seedance"
translationKey: "seedance-2-0-multimodal-input-guide"
lang: "nl"
---

Als u AI-video nog maakt met «alleen tekstprompts en eindeloze rerolls», mist u waarschijnlijk de kernupgrade van **Seedance 2.0**. Gebouwd op een uniforme multimodale AV-architectuur accepteert Seedance 2.0 tekst, beelden, audio en video in één workflow — tot **12 referentiebestanden** tegelijk (9 beelden + 3 video's + 3 audiotracks + natuurlijke taalinstructies). Voor creators die uiterlijk van personages, camerabeweging en AV-sync moeten sturen, is multimodale invoer geen luxe — het beïnvloedt de outputkwaliteit direct.

![Seedance 2.0: volledige gids voor multimodale invoer](https://img.seedance22.com/aiweb/seedance-260526-1.png)

Deze **Seedance-tutorial** behandelt alle vier invoermodaliteiten, het @-referentiesysteem en veelvoorkomende productiescenario's — ook via de **Seedance Chinese versie**-interface.

## 1. Waarom multimodale invoer nu telt

Veel eerdere tools accepteerden alleen tekst. Hoe fijner de beschrijving, hoe meer het model moest raden — uiterlijk, camerabewegingen, muziektempo. In echte projecten hebben teams al lookframes, referentieclips, BGM of voice-over die niet direct in het model konden.

**Seedance 2.0** plaatst vier modaliteiten op één generatiepad: het model leest tekstsemantiek, beeldvisuals, videobeweging en camerataal, plus audioritme, en levert video met native audiotracks. T.o.v. 1.5 zijn complexe interactie- en bewegingsscènes beter bruikbaar — dichter bij advertentie-, kortdrama- en social workflows.

## 2. Vier invoermodaliteiten uitgelegd

### 2.1 Tekst: intentie duidelijk formuleren

Tekst blijft de basis; Seedance 2.0 verwerkt lange instructies, shotlijsten en stijlkeywords veel beter. U kunt:

- volledige scènenarratieven schrijven (subject, omgeving, actie, camera, stijl);
- storyboard-achtige multi-shotbeschrijvingen gebruiken;
- **@**-referenties koppelen om elk asset een rol te geven.

Voorbeeld: «@Image1 voor het gezicht van de hoofdrol, @Video1 voor follow-cambeweging, @Audio1 als achtergrondmuziek — het personage loopt door een neon-nachtmarkt, de camera volgt van achteren, draait dan glimlachend naar de lens.»

### 2.2 Beelden: personage en visuele stijl vastzetten

Beelden zijn de meest gebruikte referentie. Na upload van lookframes, scèneboards, merk-VI of style plates extraheert het model gezicht, kleding, kleur en compositie en houdt die relatief stabiel tussen shots.

| Typisch gebruik | Opmerkingen |
| :--- | :--- |
| Personage-look | Gezicht en outfit over shots heen |
| Scènereferentie | Omgeving, licht en palet vastzetten |
| Style plate | Advertentie- en e-commercevisuals unificeren |
| Eerste frame | Openingscompositie sturen |

Tot **9 beelden**; JPG, PNG, WebP.

### 2.3 Audio: ritme, dialoog en sfeer

Seedance 2.0 accepteert geüploade audio en kan native gesynchroniseerde tracks outputten. Audio wordt gebruikt voor:

- **Achtergrondmuziek**: beat-gesynchroniseerde montage en pacing;
- **Voice-over/dialoog**: lip-sync (Mandarijn, Kantonees, Engels, enz.);
- **Omgevings-SFX**: sterkere scènesfeer.

Tot **3 audiotracks**, totale lengte meestal binnen 15 seconden; MP3, WAV, M4A.

### 2.4 Video: visuele referentie voor camera en beweging

Referentieclips leveren camerabeweging, lichaamsactie, ritme en VFX-stijl — zonder alles in tekst te vertalen. Veelvoorkomende gevallen:

- follow-, orbit-, dolly- of push-pullcamera;
- dans- of actionchoreografie;
- scènes verlengen of aanvullen vanuit bestaand footage.

Tot **3 video's**, limieten per clip en totaal (meestal ≤ 15 s); MP4, MOV.

In echte productie combineert u modaliteiten per deliverable: korte spots hebben vaak beeld + tekst nodig; muziekclips prioriteren @Audio1; actionsequenties profiteren van @Video1. Niet alle 12 bestanden nodig — begin minimaal en voeg referenties toe bij drift.

## 3. @-referentiesysteem: elke asset een taak geven

**@-referenties** maken multimodale invoer praktisch. Markeer na upload `@Image1`, `@Video1`, `@Audio1` in de prompt zodat het model de rol van elk bestand kent in plaats van te raden.

| Tag | Veelvoorkomende rol |
| :--- | :--- |
| @Image1 | Gezicht / kleding / scène |
| @Video1 | Camerabeweging / actietempo |
| @Audio1 | BGM / lip-sync voice-over |
| Tekst | Verhaal, stijl, duur |

**Combinatievoorbeeld** (beeld + video + audio):

```
Gebruik first-person framing van @Video1 door de hele clip.
@Audio1 als achtergrondmuziek, montage op de beat.
Personage uit @Image1 door neon-nachtmarkt, camera volgt van achteren,
bewegingsstijl zoals in @Video1 — pauze, draai, glimlach.
Filmische nachtlook, rijke kleur, geringe scherptediepte.
```

Duidelijke @-rollen verbeteren de controleerbaarheid sterk.

Bij complexe prompts, lijst @-rollen vóór de narratief om referenties te verankeren. In multi-shotbeschrijvingen, herhaal tags bij scènewissel — bv. «@Image1 blijft in shot 2» — om drift te verminderen. Als audio het ritme bepaalt, vermeld «@Audio1 on the beat»; voor cameracentrisch werk, begin met @Video1-bewegingstaal vóór subjectactie. Test eerst 4–6 s clips per @ voordat u naar 15 s gaat.

## 4. Kerncspecificaties in één oogopslag

| Item | Specificatie |
| :--- | :--- |
| Invoermodaliteiten | Tekst + beeld + video + audio |
| Referentiebestandslimiet | 12 totaal (9 beelden + 3 video's + 3 audio) |
| Cliplengte | 4–15 seconden |
| Resolutie | 480p / 720p / 1080p (Pro tot 2K) |
| Beeldverhoudingen | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Audio | Native AV-sync, meertalige lip-sync |
| Framerate | 24 fps |

## 5. Drie veelvoorkomende productiescenario's

### 5.1 Korte content en social

Teams hebben vaak volume nodig met dezelfde IP en look. Personage met beelden vastzetten, camerataal met videoreferentie, scripts variëren in tekst — sneller itereren met minder rerolls.

### 5.2 Merkmarketingassets

Merken eisen VI-consistentie. Logo, key visuals en style boards plus tekstprompts voor advertentie- of socialclips met uniforme toon — betrouwbaarder dan alleen tekst.

### 5.3 Onderwijs- en kennisvideo

Upload les- of narratie-audio voor lip-sync visuals; voeg scènereferentiebeelden toe — goedkope multimodale leercontent.

## 6. Aan de slag: workflow in vier stappen

1. **Definieer het deliverable**: advertentie, kort drama, socialclip; duur en beeldverhouding.
2. **Bereid referenties voor**: personage, camera, BGM naar behoefte — niet elke keer alle 12 bestanden nodig.
3. **Schrijf prompt + @**: eerst verhaal, dan elk asset koppelen; vermijd tegenstrijdige instructies.
4. **Klein itereren**: 4–6 s om personage en camera te valideren, daarna uitbreiden naar 10–15 s.

## FAQ

**V: Moet ik alle vier modaliteiten gebruiken?**  
A: Nee. Alleen tekst werkt; één of twee beelden volstaan. Mix naar behoefte.

**V: Hoe worden @-nummers toegewezen?**  
A: Op uploadvolgorde — eerste beeld is @Image1, eerste video @Video1, enz. Houd nummering consistent in de prompt.

**V: Garanderen beelden 100% consistentie?**  
A: Multi-shotconsistentie overtreft alleen-tekst ruimschoots; complexe multi-subject of extreme hoeken kunnen nog drift — gebruik een vaste testset.

**V: Verschijnt geüploade audio in de finale clip?**  
A: Het model kan audioritme volgen en ook native dialoog, SFX en muziek genereren afhankelijk van prompt en modus.

---

Klaar om multimodale invoer zelf te testen? Gebruik de knop hieronder om **Seedance 2.0** te openen — volledige multimodale workflow, inclusief **Seedance Chinese versie**-interface.

---

<div style="text-align:center; margin: 2rem 0;"><a href="https://app.seedance22.com/nl/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">Aan de slag met Seedance 2.0</a></div>

**Gerelateerde zoekopdrachten**: Seedance 2.0, Seedance-tutorial, Seedance Chinese versie, multimodale AI-video, @-referentieprompts.
