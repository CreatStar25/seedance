/** Translation pack: sv */
const IMG = "https://img.seedance22.com/aiweb/seedance-260526-1.png";

export const sv = {
  title: "Seedance 2.0: fullständig guide till multimodal inmatning",
  description: "Text, bild, ljud och video i Seedance 2.0, @-referenssystem och upp till 12 referensfiler. Seedance-handledning för multimodal AI-video.",
  tags: ["Seedance 2.0","Seedance-handledning","Seedance kinesiska versionen"],
  alt: "Seedance 2.0: fullständig guide till multimodal inmatning",
  related: "**Relaterade sökningar**: Seedance 2.0, Seedance-handledning, Seedance kinesiska versionen, multimodal AI-video, @-referensprompter.",
  closing: "Redo att testa multimodal inmatning? Använd knappen nedan för att öppna **Seedance 2.0** — fullständigt multimodalt arbetsflöde, inklusive **Seedance kinesiska versionen**-gränssnittet.",
  main: [
    `Om du fortfarande skapar AI-video med «endast textprompter och oändliga rerolls» missar du troligen kärnuppgraderingen i **Seedance 2.0**. Byggd på en enhetlig multimodal AV-arkitektur accepterar Seedance 2.0 text, bilder, ljud och video i ett flöde — upp till **12 referensfiler** samtidigt (9 bilder + 3 videor + 3 ljudspår + naturliga språkinstruktioner). För skapare som behöver kontrollera karaktärsutseende, kamerarörelse och AV-sync är multimodal inmatning inte en bonus — den påverkar outputkvaliteten direkt.

![Seedance 2.0: fullständig guide till multimodal inmatning](https://img.seedance22.com/aiweb/seedance-260526-1.png)

Denna **Seedance-handledning** går igenom alla fyra inmatningsmodaliteter, @-referenssystemet och vanliga produktionsscenarier — även via **Seedance kinesiska versionen**-gränssnittet.`,
    `## 1. Varför multimodal inmatning spelar roll nu

Många tidigare verktyg accepterade bara text. Ju finare beskrivning, desto mer måste modellen gissa — utseende, kamerarörelser, musiktempo. I verkliga projekt har team redan look frames, referensklipp, BGM eller voiceover som inte kunde matas direkt in i modellen.

**Seedance 2.0** sätter fyra modaliteter på en genereringsväg: modellen läser textsemantik, bildvisuals, videorörelse och kameraspråk plus ljudrytm och outputtar video med native ljudspår. Jämfört med 1.5 är komplexa interaktions- och rörelsescener mer användbara — närmare reklam-, kortdrama- och sociala arbetsflöden.`,
    `## 2. Fyra inmatningsmodaliteter förklarade

### 2.1 Text: ange avsikten tydligt

Text förblir grunden; Seedance 2.0 hanterar långa instruktioner, shotlistor och stilnyckelord mycket bättre. Du kan:

- skriva fullständiga scenberättelser (subjekt, miljö, handling, kamera, stil);
- använda storyboard-liknande multi-shotbeskrivningar;
- koppla **@**-referenser för att tilldela varje asset en roll.

Exempel: «@Image1 för huvudkaraktärens ansikte, @Video1 för follow-cam-rörelse, @Audio1 som bakgrundsmusik — karaktären går genom en neon-nattmarknad, kameran följer bakifrån, vänder sig sedan leende mot linsen.»

### 2.2 Bilder: lås karaktär och visuell stil

Bilder är den vanligaste referensen. Efter uppladdning av look frames, scenboards, varumärkes-VI eller style plates extraherar modellen ansikte, kläder, färg och komposition och håller dem relativt stabila mellan shots.

| Typisk användning | Anteckningar |
| :--- | :--- |
| Karaktärslook | Replikera ansikte och outfit mellan shots |
| Scenreferens | Fixera miljö, ljus och palett |
| Style plate | Enhetliggör reklam- och e-handelsvisuals |
| Första frame | Styr öppningskomposition |

Upp till **9 bilder**; JPG, PNG, WebP.

### 2.3 Ljud: rytm, dialog och stämning

Seedance 2.0 accepterar uppladdat ljud och kan outputta native synkroniserade spår. Ljud används för:

- **Bakgrundsmusik**: beat-synkad redigering och pacing;
- **Voiceover/dialog**: lip-sync (mandarin, kantonesiska, engelska m.fl.);
- **Ambient SFX**: starkare scenatmosfär.

Upp till **3 ljudspår**, total längd vanligtvis inom 15 sekunder; MP3, WAV, M4A.

### 2.4 Video: visuell referens för kamera och rörelse

Referensklipp ger kamerarörelse, kroppsaction, rytm och VFX-stil — utan att översätta allt till text. Vanliga fall:

- follow-, orbit-, dolly- eller push-pull-kamera;
- dans- eller actionkoreografi;
- förlänga eller komplettera scener från befintligt footage.

Upp till **3 videor**, gränser per klipp och totalt (vanligtvis ≤ 15 s); MP4, MOV.

I verklig produktion, kombinera modaliteter efter deliverable: korta reklamer behöver ofta bild + text; musikklipp prioriterar @Audio1; actionsekvenser gynnas av @Video1. Alla 12 filer behövs inte — börja minimalt, lägg till referenser vid drift.`,
    `## 3. @-referenssystem: ge varje asset ett jobb

**@-referenser** gör multimodal inmatning praktisk. Efter uppladdning, markera \`@Image1\`, \`@Video1\`, \`@Audio1\` i prompten så modellen känner varje fils roll istället för att gissa.

| Tag | Vanlig roll |
| :--- | :--- |
| @Image1 | Ansikte / kläder / scen |
| @Video1 | Kamerarörelse / actiontempo |
| @Audio1 | BGM / lip-sync voiceover |
| Text | Berättelse, stil, längd |

**Kombinationsexempel** (bild + video + ljud):

\`\`\`
Använd first-person framing från @Video1 genom hela klippet.
@Audio1 som bakgrundsmusik, redigering på beat.
Karaktär från @Image1 genom neon-nattmarknad, kamera följer bakifrån,
rörelsestil som i @Video1 — paus, vändning, leende.
Filmisk nattlook, rik färg, grund skärpedjup.
\`\`\`

Tydliga @-roller förbättrar kontrollerbarheten avsevärt.

I komplexa prompter, lista @-roller före berättelsen för att förankra referenser. I multi-shotbeskrivningar, upprepa taggar vid scenbyte — t.ex. «@Image1 kvar i shot 2» — för att minska drift. Om ljud styr rytmen, nämn «@Audio1 on the beat»; för kameracentrerat arbete, börja med @Video1-rörelsespråk före subjektets handling. Testa 4–6 s klipp per @ innan förlängning till 15 s.`,
    `## 4. Kärnspecifikationer i korthet

| Post | Specifikation |
| :--- | :--- |
| Inmatningsmodaliteter | Text + bild + video + ljud |
| Referensfilgräns | 12 totalt (9 bilder + 3 videor + 3 ljud) |
| Klipplängd | 4–15 sekunder |
| Upplösning | 480p / 720p / 1080p (Pro upp till 2K) |
| Bildförhållanden | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Ljud | Native AV-sync, flerspråkig lip-sync |
| Bildfrekvens | 24 fps |`,
    `## 5. Tre vanliga produktionsscenarier

### 5.1 Kortform och socialt innehåll

Team behöver ofta volym med samma IP och look. Lås karaktär med bilder, kameraspråk med videoreferens, variera manus i text — snabbare iteration med färre rerolls.

### 5.2 Varumärkesmarknadsföringsassets

Varumärken kräver VI-konsistens. Logotyp, key visuals och style boards plus textprompter för reklam- eller socialklipp med enhetlig ton — mer pålitligt än bara text.

### 5.3 Utbildnings- och kunskapsvideo

Ladda upp föreläsnings- eller narrationsljud för lip-sync visuals; lägg till scenreferensbilder — billigt multimodalt undervisningsinnehåll.`,
    `## 6. Kom igång: arbetsflöde i fyra steg

1. **Definiera deliverable**: reklam, kortdrama, socialklipp; längd och bildförhållande.
2. **Förbered referenser**: karaktär, kamera, BGM efter behov — behöver inte alla 12 filer varje gång.
3. **Skriv prompt + @**: berättelse först, bind sedan varje asset; undvik motsägande instruktioner.
4. **Iterera smått**: 4–6 s för att validera karaktär och kamera, förläng sedan till 10–15 s.`,
    `## FAQ

**F: Måste jag använda alla fyra modaliteter?**  
S: Nej. Bara text fungerar; en eller två bilder räcker. Mixa efter behov.

**F: Hur mappas @-nummer?**  
S: Efter uppladdningsordning — första bilden är @Image1, första videon @Video1, osv. Håll numrering konsekvent i prompten.

**F: Garanterar bilder 100 % konsistens?**  
S: Multi-shot-konsistens slår bara-text med råge; komplexa multi-subject eller extrema vinklar kan fortfarande drift — använd ett fast testset.

**F: Visas uppladdat ljud i slutklippet?**  
S: Modellen kan följa ljudrytm och även generera native dialog, SFX och musik beroende på prompt och läge.`,
  ],
};
