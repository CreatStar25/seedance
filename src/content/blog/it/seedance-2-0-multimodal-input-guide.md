---
title: "Seedance 2.0: guida completa all'input multimodale"
description: "Testo, immagine, audio e video in Seedance 2.0, sistema @ e fino a 12 file di riferimento. Tutorial Seedance per video IA multimodale."
tags: ["Seedance 2.0","Tutorial Seedance","Versione cinese Seedance"]
pubDate: "2026-05-26"
heroImage: "https://img.seedance22.com/aiweb/seedance-260526-1.png"
author: "Seedance"
translationKey: "seedance-2-0-multimodal-input-guide"
lang: "it"
---

Se crei ancora video IA con «solo prompt testuali e reroll infiniti», probabilmente ti stai perdendo l'upgrade centrale di **Seedance 2.0**. Costruito su un'architettura audio-video multimodale unificata, Seedance 2.0 accetta testo, immagini, audio e video in un unico flusso — fino a **12 file di riferimento** contemporaneamente (9 immagini + 3 video + 3 tracce audio + istruzioni in linguaggio naturale). Per i creator che devono controllare aspetto del personaggio, movimento camera e sync AV, l'input multimodale non è un optional — influisce direttamente sulla qualità dell'output.

![Seedance 2.0: guida completa all'input multimodale](https://img.seedance22.com/aiweb/seedance-260526-1.png)

Questo **tutorial Seedance** spiega le quattro modalità di input, il sistema di riferimenti @ e gli scenari di produzione comuni — anche tramite l'interfaccia **versione cinese Seedance**.

## 1. Perché l'input multimodale conta ora

Molti strumenti precedenti accettavano solo testo. Più fine la descrizione, più il modello doveva indovinare — aspetto, movimenti camera, tempo musicale. Nei progetti reali i team hanno già look frame, clip di riferimento, BGM o voiceover che non potevano inserire direttamente nel modello.

**Seedance 2.0** mette quattro modalità su un unico percorso di generazione: il modello legge semantica testuale, visual immagine, movimento video e linguaggio camera, più ritmo audio, e produce video con tracce audio native. Rispetto a 1.5, scene di interazione e movimento complesse sono più utilizzabili — più vicine a flussi pubblicitari, cortometraggi e social.

## 2. Quattro modalità di input spiegate

### 2.1 Testo: esprimere chiaramente l'intento

Il testo resta la base; Seedance 2.0 gestisce molto meglio istruzioni lunghe, liste di inquadrature e parole chiave di stile. Puoi:

- scrivere narrative di scena complete (soggetto, ambiente, azione, camera, stile);
- usare descrizioni multi-shot tipo storyboard;
- abbinare riferimenti **@** per assegnare un ruolo a ogni asset.

Esempio: «@Image1 per il volto del protagonista, @Video1 per il movimento camera in follow, @Audio1 come musica di sottofondo — il personaggio attraversa un mercato notturno al neon, la camera segue da dietro, poi si gira sorridendo verso l'obiettivo.»

### 2.2 Immagini: bloccare personaggio e stile visivo

Le immagini sono il riferimento più comune. Dopo l'upload di look frame, board di scena, VI del brand o style plate, il modello estrae volto, abbigliamento, colore e composizione e li mantiene relativamente stabili tra le inquadrature.

| Uso tipico | Note |
| :--- | :--- |
| Look personaggio | Replicare volto e outfit tra le inquadrature |
| Riferimento scena | Fissare ambiente, luce e palette |
| Style plate | Unificare visual pubblicitari e e-commerce |
| Primo frame | Controllare composizione di apertura |

Fino a **9 immagini**; JPG, PNG, WebP.

### 2.3 Audio: ritmo, dialogo e atmosfera

Seedance 2.0 accetta audio caricato e può produrre tracce sincronizzate native. L'audio serve per:

- **Musica di sottofondo**: montaggio e ritmo sul beat;
- **Voiceover/dialogo**: lip-sync (mandarino, cantonese, inglese, ecc.);
- **SFX ambientali**: atmosfera di scena più forte.

Fino a **3 tracce audio**, durata totale tipicamente entro 15 secondi; MP3, WAV, M4A.

### 2.4 Video: riferimento visivo per camera e movimento

I clip di riferimento forniscono movimento camera, azione corporea, ritmo e stile VFX — senza tradurre tutto in testo. Casi comuni:

- camera follow, orbit, dolly o push-pull;
- coreografia danza o action;
- estendere o completare scene da footage esistente.

Fino a **3 video**, limiti per clip e totale (tipicamente ≤ 15 s); MP4, MOV.

In produzione reale, combina le modalità in base al deliverable: spot brevi spesso richiedono immagine + testo; clip musicali prioritizzano @Audio1; sequenze action beneficiano di @Video1. Non servono tutti i 12 file — parti dal minimo e aggiungi riferimenti solo se il risultato deriva.

## 3. Sistema di riferimenti @: assegnare un compito a ogni asset

I **riferimenti @** rendono pratico l'input multimodale. Dopo l'upload, marca `@Image1`, `@Video1`, `@Audio1` nel prompt così il modello conosce il ruolo di ogni file invece di indovinare.

| Tag | Ruolo comune |
| :--- | :--- |
| @Image1 | Volto / abbigliamento / scena |
| @Video1 | Movimento camera / tempo azione |
| @Audio1 | BGM / voiceover lip-sync |
| Testo | Storia, stile, durata |

**Esempio combinato** (immagine + video + audio):

```
Usa il framing in prima persona di @Video1 per tutto il clip.
@Audio1 come musica di sottofondo, montaggio sul beat.
Personaggio da @Image1 attraversa mercato neon notturno, camera segue da dietro,
stile movimento come in @Video1 — pausa, giro, sorriso.
Look notturno cinematografico, colori ricchi, profondità di campo ridotta.
```

Ruoli @ chiari migliorano notevolmente la controllabilità.

Nei prompt complessi, elenca i ruoli @ prima della narrativa per ancorare i riferimenti. Nelle descrizioni multi-shot, ripeti i tag al cambio scena — es. «@Image1 resta nello shot 2» — per ridurre il drift. Se l'audio guida il ritmo, menziona «@Audio1 on the beat»; per lavoro camera-centric, apri con il linguaggio di movimento di @Video1 prima dell'azione del soggetto. Prova clip da 4–6 s per validare ogni @ prima di estendere a 15 s.

## 4. Specifiche principali a colpo d'occhio

| Voce | Specifica |
| :--- | :--- |
| Modalità di input | Testo + immagine + video + audio |
| Limite file di riferimento | 12 totali (9 immagini + 3 video + 3 audio) |
| Durata clip | 4–15 secondi |
| Risoluzione | 480p / 720p / 1080p (Pro fino a 2K) |
| Proporzioni | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Audio | Sync AV nativo, lip-sync multilingue |
| Frame rate | 24 fps |

## 5. Tre scenari di produzione comuni

### 5.1 Contenuti brevi e social

I team spesso servono volume con la stessa IP e look. Blocca il personaggio con immagini, linguaggio camera con riferimento video, varia script nel testo — iterazione più rapida con meno reroll.

### 5.2 Asset marketing del brand

I brand richiedono coerenza VI. Logo, key visual e style board più prompt testuali per clip pubblicitari o social a tono unificato — più affidabile del solo testo.

### 5.3 Video educativi e knowledge

Carica audio di lezione o narrazione per visual lip-sync; aggiungi immagini di riferimento scena — contenuto didattico multimodale a basso costo.

## 6. Iniziare: workflow in quattro passi

1. **Definisci il deliverable**: spot, corto, clip social; durata e proporzioni.
2. **Prepara i riferimenti**: personaggio, camera, BGM secondo necessità — non servono tutti i 12 file ogni volta.
3. **Scrivi prompt + @**: prima la storia, poi lega ogni asset; evita istruzioni contraddittorie.
4. **Itera in piccolo**: 4–6 s per validare personaggio e camera, poi estendi a 10–15 s.

## FAQ

**D: Devo usare tutte e quattro le modalità?**  
R: No. Solo testo funziona; una o due immagini bastano. Combina secondo necessità.

**D: Come si mappano i numeri @?**  
R: Per ordine di upload — prima immagine @Image1, primo video @Video1, ecc. Mantieni numerazione coerente nel prompt.

**D: Le immagini garantiscono coerenza al 100%?**  
R: La coerenza multi-shot supera di gran lunga il solo testo; scene multi-soggetto o angoli estremi possono ancora derivare — usa un set di test fisso.

**D: L'audio caricato appare nel clip finale?**  
R: Il modello può seguire il ritmo audio e anche generare dialogo, SFX e musica nativi secondo prompt e modalità.

---

Pronto a provare l'input multimodale? Usa il pulsante qui sotto per aprire **Seedance 2.0** — workflow multimodale completo, inclusa l'interfaccia **versione cinese Seedance**.

---

<div style="text-align:center; margin: 2rem 0;"><a href="https://app.seedance22.com/it/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">Inizia con Seedance 2.0</a></div>

**Ricerche correlate**: Seedance 2.0, tutorial Seedance, versione cinese Seedance, video IA multimodale, prompt @ riferimento.
