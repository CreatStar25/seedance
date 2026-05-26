/** Translation pack: pl */
const IMG = "https://img.seedance22.com/aiweb/seedance-260526-1.png";

export const pl = {
  title: "Seedance 2.0: pełny przewodnik po wejściu multimodalnym",
  description: "Tekst, obraz, audio i wideo w Seedance 2.0, system @ i do 12 plików referencyjnych. Samouczek Seedance dla multimodalnego wideo AI.",
  tags: ["Seedance 2.0","Samouczek Seedance","Chińska wersja Seedance"],
  alt: "Seedance 2.0: pełny przewodnik po wejściu multimodalnym",
  related: "**Powiązane wyszukiwania**: Seedance 2.0, samouczek Seedance, chińska wersja Seedance, multimodalne wideo AI, prompty @ referencja.",
  closing: "Gotowy przetestować wejście multimodalne? Użyj przycisku poniżej, aby otworzyć **Seedance 2.0** — pełny workflow multimodalny, w tym interfejs **chińskiej wersji Seedance**.",
  main: [
    `Jeśli nadal tworzysz wideo AI z «samymi promptami tekstowymi i nieskończonymi rerollami», prawdopodobnie omijasz kluczową aktualizację **Seedance 2.0**. Zbudowany na zunifikowanej multimodalnej architekturze AV, Seedance 2.0 przyjmuje tekst, obrazy, audio i wideo w jednym workflow — do **12 plików referencyjnych** naraz (9 obrazów + 3 wideo + 3 ścieżki audio + instrukcje w języku naturalnym). Dla twórców, którzy muszą kontrolować wygląd postaci, ruch kamery i sync AV, wejście multimodalne to nie dodatek — bezpośrednio wpływa na jakość wyniku.

![Seedance 2.0: pełny przewodnik po wejściu multimodalnym](https://img.seedance22.com/aiweb/seedance-260526-1.png)

Ten **samouczek Seedance** omawia cztery modalności wejścia, system referencji @ i typowe scenariusze produkcji — także przez interfejs **chińskiej wersji Seedance**.`,
    `## 1. Dlaczego wejście multimodalne ma teraz znaczenie

Wcześniejsze narzędzia często przyjmowały tylko tekst. Im dokładniejszy opis, tym więcej model musiał zgadywać — wygląd, ruchy kamery, tempo muzyki. W realnych projektach zespoły mają look frame'y, klipy referencyjne, BGM lub voice-over, których nie dało się wprowadzić bezpośrednio do modelu.

**Seedance 2.0** łączy cztery modalności w jednej ścieżce generacji: model czyta semantykę tekstu, wizualia obrazu, ruch wideo i język kamery oraz rytm audio, a następnie generuje wideo z natywnymi ścieżkami audio. W porównaniu z 1.5 złożone sceny interakcji i ruchu są bardziej użyteczne — bliżej workflow reklam, krótkich dram i social.`,
    `## 2. Cztery modalności wejścia wyjaśnione

### 2.1 Tekst: jasno określ intencję

Tekst pozostaje podstawą; Seedance 2.0 znacznie lepiej obsługuje długie instrukcje, listy ujęć i słowa kluczowe stylu. Możesz:

- pisać pełne narracje scen (podmiot, otoczenie, akcja, kamera, styl);
- używać opisów multi-shot w stylu storyboard;
- łączyć referencje **@**, aby przypisać rolę każdemu assetowi.

Przykład: «@Image1 dla twarzy bohatera, @Video1 dla ruchu kamery follow, @Audio1 jako muzyka w tle — postać przechodzi przez neonowy nocny targ, kamera podąża z tyłu, potem odwraca się uśmiechając do obiektywu.»

### 2.2 Obrazy: blokada postaci i stylu wizualnego

Obrazy to najczęstszy typ referencji. Po wgraniu look frame'ów, tablic scen, VI marki lub style plates model wyciąga twarz, strój, kolor i kompozycję i utrzymuje je względnie stabilne między ujęciami.

| Typowe zastosowanie | Uwagi |
| :--- | :--- |
| Wygląd postaci | Powtarzanie twarzy i stroju między ujęciami |
| Referencja sceny | Ustalenie otoczenia, światła i palety |
| Style plate | Ujednolicenie wizualiów reklam i e-commerce |
| Pierwsza klatka | Kontrola kompozycji otwarcia |

Do **9 obrazów**; JPG, PNG, WebP.

### 2.3 Audio: rytm, dialog i nastrój

Seedance 2.0 przyjmuje wgrane audio i może generować natywne zsynchronizowane ścieżki. Audio służy do:

- **Muzyki w tle**: montaż i pacing zsynchronizowany z beatem;
- **Voice-over/dialogu**: lip-sync (mandaryński, kantoński, angielski itd.);
- **Ambient SFX**: silniejsza atmosfera sceny.

Do **3 ścieżek audio**, łączna długość zwykle w 15 sekund; MP3, WAV, M4A.

### 2.4 Wideo: wizualna referencja kamery i ruchu

Klipy referencyjne dostarczają ruchu kamery, akcji ciała, rytmu i stylu VFX — bez tłumaczenia wszystkiego na tekst. Typowe przypadki:

- kamera follow, orbit, dolly lub push-pull;
- choreografia tańca lub akcji;
- rozszerzanie lub uzupełnianie scen z istniejącego footage.

Do **3 wideo**, limity na klip i łącznie (zwykle ≤ 15 s); MP4, MOV.

W realnej produkcji łącz modalności według deliverable: krótkie reklamy często wymagają obraz + tekst; klipy muzyczne priorytetyzują @Audio1; sekwencje action korzystają z @Video1. Nie trzeba 12 plików — zacznij od minimum, dodawaj referencje przy drift.`,
    `## 3. System referencji @: przypisz zadanie każdemu assetowi

**Referencje @** czynią wejście multimodalne praktycznym. Po wgraniu oznacz \`@Image1\`, \`@Video1\`, \`@Audio1\` w prompcie, aby model znał rolę każdego pliku zamiast zgadywać.

| Tag | Typowa rola |
| :--- | :--- |
| @Image1 | Twarz / strój / scena |
| @Video1 | Ruch kamery / tempo akcji |
| @Audio1 | BGM / voice-over lip-sync |
| Tekst | Historia, styl, czas trwania |

**Przykład kombinowany** (obraz + wideo + audio):

\`\`\`
Użyj kadrowania first-person @Video1 przez cały klip.
@Audio1 jako muzyka w tle, montaż na beat.
Postać z @Image1 na neonowym nocnym targu, kamera podąża z tyłu,
styl ruchu jak w @Video1 — pauza, obrót, uśmiech.
Filmowy nocny look, bogaty kolor, mała głębia ostrości.
\`\`\`

Jasne role @ znacznie poprawiają kontrolowalność.

W złożonych promptach wymień role @ przed narracją, by zakotwiczyć referencje. W opisach multi-shot powtarzaj tagi przy zmianie sceny — np. «@Image1 w shot 2» — by zmniejszyć drift. Gdy audio wyznacza rytm, napisz «@Audio1 on the beat»; przy pracy camera-centric zacznij od języka ruchu @Video1 przed akcją postaci. Najpierw testuj 4–6 s na każdy @, potem rozszerz do 15 s.`,
    `## 4. Kluczowe specyfikacje w skrócie

| Pozycja | Specyfikacja |
| :--- | :--- |
| Modalności wejścia | Tekst + obraz + wideo + audio |
| Limit plików referencyjnych | 12 łącznie (9 obrazów + 3 wideo + 3 audio) |
| Długość klipu | 4–15 sekund |
| Rozdzielczość | 480p / 720p / 1080p (Pro do 2K) |
| Proporcje | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Audio | Natywny sync AV, wielojęzyczny lip-sync |
| Liczba klatek | 24 fps |`,
    `## 5. Trzy typowe scenariusze produkcji

### 5.1 Krótka forma i social

Zespoły często potrzebują wolumenu z tą samą IP i lookiem. Zablokuj postać obrazami, język kamery referencją wideo, warianty skryptów w tekście — szybsza iteracja z mniejszą liczbą reroll.

### 5.2 Assety marketingowe marki

Marki wymagają spójności VI. Logo, key visuals i style boards plus prompty tekstowe dla reklam lub social clips w jednolitym tonie — bardziej niezawodne niż sam tekst.

### 5.3 Wideo edukacyjne i knowledge

Wgraj audio wykładu lub narracji dla visuali lip-sync; dodaj referencyjne obrazy scen — tani multimodalny content edukacyjny.`,
    `## 6. Start: workflow w czterech krokach

1. **Zdefiniuj deliverable**: reklama, krótki dram, social clip; czas trwania i proporcje.
2. **Przygotuj referencje**: postać, kamera, BGM według potrzeb — nie trzeba wszystkich 12 plików za każdym razem.
3. **Napisz prompt + @**: najpierw historia, potem powiąż asset; unikaj sprzecznych instrukcji.
4. **Iteruj małymi krokami**: 4–6 s do walidacji postaci i kamery, potem rozszerz do 10–15 s.`,
    `## FAQ

**P: Czy muszę używać wszystkich czterech modalności?**  
O: Nie. Wystarczy sam tekst; jeden lub dwa obrazy też ok. Łącz według potrzeb.

**P: Jak mapowane są numery @?**  
O: Według kolejności wgrywania — pierwszy obraz to @Image1, pierwsze wideo @Video1 itd. Utrzymuj numerację spójną w prompcie.

**P: Czy obrazy gwarantują 100% spójności?**  
O: Spójność multi-shot znacznie przewyższa sam tekst; złożone multi-subject lub ekstremalne kąty mogą nadal drift — użyj stałego zestawu testowego.

**P: Czy wgrane audio pojawia się w finalnym klipie?**  
O: Model może podążać za rytmem audio i też generować natywny dialog, SFX i muzykę w zależności od promptu i trybu.`,
  ],
};
