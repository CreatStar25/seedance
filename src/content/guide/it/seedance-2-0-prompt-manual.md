---
title: "Guida ai Prompt Seedance 2.0 e Manuale d'Uso"
description: "Come scrivere i prompt Seedance 2.0? Manuale completo: riferimento multimodale, sintassi @, camera e movimento, estensione e modifica video. Best practice per i prompt Seedance 2.0."
pubDate: "2026-03-15"
heroImage: "https://img.seedance22.com/aiweb/seedance-1.mp4"
---

Seedance 2.0 è un modello di generazione video IA che supporta immagine, video, audio e testo per un controllo più ricco. Questa guida spiega **come scrivere i prompt Seedance 2.0** e ottenere i migliori risultati.

## 1. Parametri e capacità Seedance 2.0

| Dimensione | Specifica |
|------------|-----------|
| Input immagine | ≤ 9 immagini |
| Input video | ≤ 3 clip, totale ≤ 15 s |
| Input audio | MP3, ≤ 3 file, totale ≤ 15 s |
| Input testo | Prompt in linguaggio naturale |
| Durata output | 4–15 s selezionabile |
| Output audio | SFX/musica integrati |

Gli input misti sono limitati a 12 file totali; dai priorità agli asset che influenzano di più look e ritmo.

<video src="https://img.seedance22.com/aiweb/seedance-1.mp4" controls width="100%"></video>

## 2. Capacità principali: stabile, fluido, realistico

Seedance 2.0 migliora fisica, fluidità del movimento, rispetto delle istruzioni e coerenza stilistica, gestendo bene movimenti complessi e continui.

**Esempio di prompt:**  
Una ragazza stende il bucato con eleganza, poi prende un altro capo dal secchio e lo scrolla con decisione.

<video src="https://img.seedance22.com/aiweb/seedance-2.mp4" controls width="100%"></video>

## 3. Multimodale e scrittura prompt Seedance 2.0

### 3.1 Riferimento multimodale

Puoi caricare testo, immagini, video e audio come asset principale o di riferimento. Descrivi chiaramente nel tuo **prompt Seedance 2.0** cosa referenziare (movimento, effetti, camera, personaggio, scena, suono).

- Immagini di riferimento: composizione e dettaglio personaggio  
- Video di riferimento: linguaggio camera, ritmo movimento, effetti creativi  
- Il video può essere esteso e continuato in modo fluido (“continua a girare”)  
- Modifica: sostituzione personaggio, taglio, aggiunta

Con molti asset usa **@image1**, **@video1** ecc. nel prompt così il modello sa quale è quale.

### 3.2 Pattern comuni di prompt

- **Primo/ultimo frame + movimento video di riferimento**  
  “@image1 come primo frame, referenzia movimento di lotta @video1”

- **Estendere video esistente**  
  “Estendi @video1 di 5 secondi” (imposta durata output solo per la parte nuova, es. 5 s)

- **Unire più video**  
  “Aggiungi una scena tra @video1 e @video2, contenuto: …”

- **Azione continua**  
  “Il personaggio passa dal salto direttamente alla capriola, mantieni movimento fluido, @image1 @image2 @image3”

### 3.3 Coerenza, camera e replicazione creativa

Seedance 2.0 mantiene volti, abbigliamento, scene e stile camera coerenti e può replicare riprese impegnative e movimento complesso dalle referenze. Per transizioni creative, inquadrature stile spot o clip da film, descrivi nel prompt “referenzia ritmo e camera @video1, personaggio @image1”.

## 4. Riassunto

**Scrivere prompt Seedance 2.0** si riduce a: indicare chiaramente cosa referenziare e cosa fare, e usare @ per collegare gli asset. Input multimodali più istruzioni precise rendono la creazione più controllabile ed efficiente.

<div style="text-align:center; margin: 2rem 0;">
  <a href="https://app.seedance22.com/generate/video-tools/seedance2.0" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #eab308 0%, #f59e0b 100%); color: #000; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 14px rgba(234,179,8,0.4);">Inizia con Seedance</a>
</div>
