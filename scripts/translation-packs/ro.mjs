/** Translation pack: ro */
const IMG = "https://img.seedance22.com/aiweb/seedance-260526-1.png";

export const ro = {
  title: "Seedance 2.0: ghid complet pentru intrarea multimodală",
  description: "Text, imagine, audio și video în Seedance 2.0, sistem @ și până la 12 fișiere de referință. Tutorial Seedance pentru video AI multimodal.",
  tags: ["Seedance 2.0","Tutorial Seedance","Versiunea chineză Seedance"],
  alt: "Seedance 2.0: ghid complet pentru intrarea multimodală",
  related: "**Căutări asociate**: Seedance 2.0, tutorial Seedance, versiunea chineză Seedance, video AI multimodal, prompturi @ referință.",
  closing: "Gata să testați intrarea multimodală? Folosiți butonul de mai jos pentru a deschide **Seedance 2.0** — flux multimodal complet, inclusiv interfața **versiunea chineză Seedance**.",
  main: [
    `Dacă încă creați video AI cu «doar prompturi text și reroll-uri infinite», probabil pierdeți upgrade-ul central al **Seedance 2.0**. Construit pe o arhitectură AV multimodală unificată, Seedance 2.0 acceptă text, imagini, audio și video într-un singur flux — până la **12 fișiere de referință** simultan (9 imagini + 3 video + 3 piste audio + instrucțiuni în limbaj natural). Pentru creatorii care trebuie să controleze aspectul personajului, mișcarea camerei și sync AV, intrarea multimodală nu e opțională — afectează direct calitatea outputului.

![Seedance 2.0: ghid complet pentru intrarea multimodală](https://img.seedance22.com/aiweb/seedance-260526-1.png)

Acest **tutorial Seedance** explică cele patru modalități de intrare, sistemul de referințe @ și scenariile comune de producție — inclusiv prin interfața **versiunea chineză Seedance**.`,
    `## 1. De ce contează intrarea multimodală acum

Multe instrumente anterioare acceptau doar text. Cu cât descrierea e mai fină, cu atât modelul trebuia să ghicească mai mult — aspect, mișcări cameră, tempo muzical. În proiecte reale, echipele au deja look frame-uri, clipuri de referință, BGM sau voiceover pe care nu le puteau alimenta direct în model.

**Seedance 2.0** pune patru modalități pe o cale de generare: modelul citește semantica textului, vizualul imaginii, mișcarea video și limbajul camerei, plus ritmul audio, apoi produce video cu piste audio native. Față de 1.5, scenele complexe de interacțiune și mișcare sunt mai utilizabile — mai aproape de fluxuri publicitate, scurtmetraj și social.`,
    `## 2. Patru modalități de intrare explicate

### 2.1 Text: exprimați clar intenția

Textul rămâne baza; Seedance 2.0 gestionează mult mai bine instrucțiuni lungi, liste de cadre și cuvinte cheie de stil. Puteți:

- scrie narațiuni complete de scenă (subiect, mediu, acțiune, cameră, stil);
- folosi descrieri multi-shot tip storyboard;
- asocia referințe **@** pentru a atribui un rol fiecărui asset.

Exemplu: «@Image1 pentru fața protagonistului, @Video1 pentru mișcarea camerei follow, @Audio1 ca muzică de fundal — personajul traversează o piață de noapte neon, camera urmărește din spate, apoi se întoarce zâmbind spre obiectiv.»

### 2.2 Imagini: blocarea personajului și stilului vizual

Imaginile sunt referința cea mai comună. După upload de look frame-uri, board-uri de scenă, VI de brand sau style plates, modelul extrage fața, ținuta, culoarea și compoziția și le menține relativ stabile între cadre.

| Utilizare tipică | Note |
| :--- | :--- |
| Aspect personaj | Replică față și ținută între cadre |
| Referință scenă | Fixează mediu, lumină și paletă |
| Style plate | Unifică vizualuri publicitate și e-commerce |
| Primul cadru | Controlează compoziția de deschidere |

Până la **9 imagini**; JPG, PNG, WebP.

### 2.3 Audio: ritm, dialog și atmosferă

Seedance 2.0 acceptă audio încărcat și poate produce piste sincronizate native. Audioul servește pentru:

- **Muzică de fundal**: montaj și pacing pe beat;
- **Voiceover/dialog**: lip-sync (mandarină, cantoneză, engleză etc.);
- **SFX ambient**: atmosferă de scenă mai puternică.

Până la **3 piste audio**, durată totală de obicei în 15 secunde; MP3, WAV, M4A.

### 2.4 Video: referință vizuală pentru cameră și mișcare

Clipurile de referință oferă mișcare cameră, acțiune corporală, ritm și stil VFX — fără a traduce totul în text. Cazuri comune:

- cameră follow, orbit, dolly sau push-pull;
- coregrafie dans sau acțiune;
- extindere sau completare scene din footage existent.

Până la **3 video**, limite per clip și total (de obicei ≤ 15 s); MP4, MOV.

În producție reală, combinați modalitățile după deliverable: spoturi scurte au nevoie adesea de imagine + text; clipuri muzicale prioritizează @Audio1; secvențe action beneficiază de @Video1. Nu e nevoie de toate cele 12 fișiere — începeți minimal, adăugați referințe doar la drift.`,
    `## 3. Sistem de referințe @: atribuiți o sarcină fiecărui asset

**Referințele @** fac intrarea multimodală practică. După upload, marcați \`@Image1\`, \`@Video1\`, \`@Audio1\` în prompt ca modelul să cunoască rolul fiecărui fișier, nu să ghicească.

| Tag | Rol comun |
| :--- | :--- |
| @Image1 | Față / ținută / scenă |
| @Video1 | Mișcare cameră / tempo acțiune |
| @Audio1 | BGM / voiceover lip-sync |
| Text | Poveste, stil, durată |

**Exemplu combinat** (imagine + video + audio):

\`\`\`
Folosiți framing first-person @Video1 pe tot clipul.
@Audio1 ca muzică de fundal, montaj pe beat.
Personaj din @Image1 prin piață neon de noapte, camera urmărește din spate,
stil mișcare ca în @Video1 — pauză, întoarcere, zâmbet.
Look nocturn cinematic, culoare bogată, adâncime de câmp redusă.
\`\`\`

Roluri @ clare îmbunătățesc semnificativ controlabilitatea.

În prompturi complexe, listați rolurile @ înainte de narațiune pentru ancorare. În descrieri multi-shot, repetați tagurile la schimbarea scenei — ex. «@Image1 rămâne în shot 2» — pentru a reduce driftul. Dacă audio setează ritmul, menționați «@Audio1 on the beat»; pentru lucru centrat pe cameră, începeți cu limbajul de mișcare @Video1 înainte de acțiunea subiectului. Testați clipuri 4–6 s per @ înainte de extindere la 15 s.`,
    `## 4. Specificații cheie dintr-o privire

| Element | Specificație |
| :--- | :--- |
| Modalități de intrare | Text + imagine + video + audio |
| Limită fișiere referință | 12 total (9 imagini + 3 video + 3 audio) |
| Durată clip | 4–15 secunde |
| Rezoluție | 480p / 720p / 1080p (Pro până la 2K) |
| Rapoarte de aspect | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Audio | Sync AV native, lip-sync multilingv |
| Rată cadre | 24 fps |`,
    `## 5. Trei scenarii comune de producție

### 5.1 Conținut scurt și social

Echipele au adesea nevoie de volum cu aceeași IP și look. Blocați personajul cu imagini, limbaj cameră cu referință video, variați scripturi în text — iterare mai rapidă cu mai puține reroll-uri.

### 5.2 Asset-uri marketing de brand

Brandurile cer consistență VI. Logo, key visuals și style boards plus prompturi text pentru clipuri publicitate sau social cu ton unificat — mai fiabil decât doar text.

### 5.3 Video educațional și knowledge

Încărcați audio de curs sau narațiune pentru vizualuri lip-sync; adăugați imagini de referință scenă — conținut didactic multimodal cu cost redus.`,
    `## 6. Început: flux în patru pași

1. **Definiți deliverable-ul**: reclamă, scurtmetraj, clip social; durată și raport de aspect.
2. **Pregătiți referințele**: personaj, cameră, BGM după nevoie — nu e nevoie de toate cele 12 fișiere de fiecare dată.
3. **Scrieți prompt + @**: mai întâi povestea, apoi legați fiecare asset; evitați instrucțiuni contradictorii.
4. **Iterați mic**: 4–6 s pentru validare personaj și cameră, apoi extindeți la 10–15 s.`,
    `## Întrebări frecvente

**Î: Trebuie să folosesc toate cele patru modalități?**  
R: Nu. Doar textul funcționează; una sau două imagini sunt suficiente. Combinați după nevoie.

**Î: Cum se mapează numerele @?**  
R: După ordinea uploadului — prima imagine e @Image1, primul video @Video1 etc. Păstrați numerotarea consistentă în prompt.

**Î: Imaginile garantează consistență 100%?**  
R: Consistența multi-shot depășește larg doar textul; scene multi-subject sau unghiuri extreme pot încă deriva — folosiți un set de test fix.

**Î: Apare audio încărcat în clipul final?**  
R: Modelul poate urma ritmul audio și poate genera dialog, SFX și muzică native în funcție de prompt și mod.`,
  ],
};
