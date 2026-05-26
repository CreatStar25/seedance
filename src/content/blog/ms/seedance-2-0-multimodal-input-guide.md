---
title: "Seedance 2.0: panduan lengkap input multimodal"
description: "Teks, imej, audio dan video dalam Seedance 2.0, sistem @ dan sehingga 12 fail rujukan. Tutorial Seedance untuk video AI multimodal."
tags: ["Seedance 2.0","Tutorial Seedance","Versi Cina Seedance"]
pubDate: "2026-05-26"
heroImage: "https://img.seedance22.com/aiweb/seedance-260526-1.png"
author: "Seedance"
translationKey: "seedance-2-0-multimodal-input-guide"
lang: "ms"
---

Jika anda masih mencipta video AI dengan «prompt teks sahaja dan reroll tanpa henti», anda mungkin terlepas peningkatan teras **Seedance 2.0**. Dibina atas seni bina audio-video multimodal bersatu, Seedance 2.0 menerima teks, imej, audio dan video dalam satu aliran — sehingga **12 fail rujukan** serentak (9 imej + 3 video + 3 trek audio + arahan bahasa semula jadi). Bagi pencipta yang perlu mengawal rupa watak, pergerakan kamera dan sync AV, input multimodal bukan tambahan — ia terus menjejaskan kualiti output.

![Seedance 2.0: panduan lengkap input multimodal](https://img.seedance22.com/aiweb/seedance-260526-1.png)

**Tutorial Seedance** ini menerangkan empat modaliti input, sistem rujukan @ dan senario produksi biasa — termasuk melalui antara muka **versi Cina Seedance**.

## 1. Mengapa input multimodal penting sekarang

Banyak alat terdahulu hanya menerima teks. Semakin halus penerangan, semakin banyak model perlu meneka — rupa, pergerakan kamera, tempo muzik. Dalam projek sebenar, pasukan sudah ada look frame, klip rujukan, BGM atau voiceover yang tidak boleh dimasukkan terus ke model.

**Seedance 2.0** meletakkan empat modaliti dalam satu laluan penjanaan: model membaca semantik teks, visual imej, pergerakan video dan bahasa kamera, serta irama audio, kemudian output video dengan trek audio native. Berbanding 1.5, adegan interaksi dan pergerakan kompleks lebih boleh digunakan — lebih hampir aliran iklan, drama pendek dan sosial.

## 2. Empat modaliti input dijelaskan

### 2.1 Teks: nyatakan niat dengan jelas

Teks kekal asas; Seedance 2.0 mengendalikan arahan panjang, senarai shot dan kata kunci gaya jauh lebih baik. Anda boleh:

- menulis naratif adegan penuh (subjek, persekitaran, aksi, kamera, gaya);
- menggunakan penerangan multi-shot gaya storyboard;
- memadankan rujukan **@** untuk menetapkan peranan setiap aset.

Contoh: «@Image1 untuk wajah protagonis, @Video1 untuk pergerakan kamera follow, @Audio1 sebagai muzik latar — watak berjalan di pasar malam neon, kamera mengikuti dari belakang, kemudian berpaling tersenyum ke lensa.»

### 2.2 Imej: kunci watak dan gaya visual

Imej ialah rujukan paling biasa. Selepas muat naik look frame, papan adegan, VI jenama atau style plate, model mengekstrak muka, pakaian, warna dan komposisi serta mengekalkannya relatif stabil merentas shot.

| Kegunaan biasa | Nota |
| :--- | :--- |
| Rupa watak | Replikasi muka dan pakaian merentas shot |
| Rujukan adegan | Kunci persekitaran, pencahayaan, palet |
| Style plate | Satukan visual iklan dan e-dagang |
| Frame pertama | Kawal komposisi pembukaan |

Sehingga **9 imej**; JPG, PNG, WebP.

### 2.3 Audio: irama, dialog dan suasana

Seedance 2.0 menerima audio muat naik dan boleh output trek disegerakkan native. Audio digunakan untuk:

- **Muzik latar**: suntingan dan pacing selaras beat;
- **Voiceover/dialog**: lip-sync (Mandarin, Kantonis, Inggeris, dll.);
- **SFX persekitaran**: atmosfera adegan lebih kuat.

Sehingga **3 trek audio**, jumlah tempoh biasanya dalam 15 saat; MP3, WAV, M4A.

### 2.4 Video: rujukan visual untuk kamera dan pergerakan

Klip rujukan memberikan pergerakan kamera, aksi badan, irama dan gaya VFX — tanpa menterjemah semuanya ke teks. Kes biasa:

- kamera follow, orbit, dolly atau push-pull;
- koreografi tarian atau aksi;
- lanjutkan atau lengkapkan adegan dari footage sedia ada.

Sehingga **3 video**, had per klip dan jumlah (biasanya ≤ 15 s); MP4, MOV.

Dalam produksi sebenar, gabungkan modaliti mengikut deliverable: iklan pendek selalu perlukan imej + teks; klip muzik utamakan @Audio1; urutan aksi gain dari @Video1. Tidak perlu 12 fail — mula minimal, tambah rujukan hanya bila hasil drift.

## 3. Sistem rujukan @: beri setiap aset satu tugas

**Rujukan @** menjadikan input multimodal praktikal. Selepas muat naik, tandakan `@Image1`, `@Video1`, `@Audio1` dalam prompt supaya model tahu peranan setiap fail, bukan meneka.

| Tag | Peranan biasa |
| :--- | :--- |
| @Image1 | Muka / pakaian / adegan |
| @Video1 | Pergerakan kamera / tempo aksi |
| @Audio1 | BGM / voiceover lip-sync |
| Teks | Cerita, gaya, tempoh |

**Contoh gabungan** (imej + video + audio):

```
Guna framing first-person @Video1 sepanjang klip.
@Audio1 sebagai muzik latar, suntingan on the beat.
Watak dari @Image1 di pasar malam neon, kamera ikut dari belakang,
gaya pergerakan seperti dalam @Video1 — jeda, pusing, senyum.
Look malam sinematik, warna kaya, depth of field cetek.
```

Peranan @ yang jelas meningkatkan keboleh kawalan dengan ketara.

Bina prompt kompleks: senaraikan peranan @ sebelum naratif untuk sauh rujukan. Dalam penerangan multi-shot, ulang tag bila tukar adegan — cth. «@Image1 kekal di shot 2» — kurangkan drift. Jika audio tentukan irama, sebut «@Audio1 on the beat»; untuk fokus kamera, mula dengan bahasa pergerakan @Video1 sebelum aksi subjek. Uji klip 4–6 s dahulu sebelum lanjut ke 15 s.

## 4. Spesifikasi teras sepintas lalu

| Item | Spesifikasi |
| :--- | :--- |
| Modaliti input | Teks + imej + video + audio |
| Had fail rujukan | 12 jumlah (9 imej + 3 video + 3 audio) |
| Panjang klip | 4–15 saat |
| Resolusi | 480p / 720p / 1080p (Pro sehingga 2K) |
| Nisbah aspek | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Audio | Sync AV native, lip-sync pelbagai bahasa |
| Kadar bingkai | 24fps |

## 5. Tiga senario produksi biasa

### 5.1 Kandungan pendek dan sosial

Pasukan sering perlukan volum dengan IP dan look sama. Kunci watak dengan imej, bahasa kamera dengan rujukan video, variasi skrip dalam teks — iterasi lebih pantas dengan reroll lebih sedikit.

### 5.2 Aset pemasaran jenama

Jenama menuntut konsistensi VI. Logo, key visual dan style board plus prompt teks untuk klip iklan atau sosial dengan nada seragam — lebih dipercayai daripada teks sahaja.

### 5.3 Video pendidikan dan pengetahuan

Muat naik audio kuliah atau naratif untuk visual lip-sync; tambah imej rujukan adegan — kandungan pengajaran multimodal kos rendah.

## 6. Bermula: aliran kerja empat langkah

1. **Tentukan deliverable**: iklan, drama pendek, klip sosial; tempoh dan nisbah aspek.
2. **Sediakan rujukan**: watak, kamera, BGM mengikut keperluan — tidak perlu 12 fail setiap kali.
3. **Tulis prompt + @**: cerita dulu, kemudian ikat setiap aset; elak arahan bercanggah.
4. **Iterasi kecil**: 4–6 s untuk sahkan watak dan kamera, kemudian lanjutkan ke 10–15 s.

## Soalan lazim

**S: Perlu guna keempat-empat modaliti?**  
J: Tidak. Teks sahaja sudah cukup; satu atau dua imej pun ok. Campur mengikut keperluan.

**S: Bagaimana nombor @ dipetakan?**  
J: Ikut turutan muat naik — imej pertama @Image1, video pertama @Video1, dll. Kekalkan penomboran konsisten dalam prompt.

**S: Adakah imej menjamin konsistensi 100%?**  
J: Konsistensi multi-shot jauh mengatasi teks sahaja; adegan multi-subjek atau sudut melampau masih boleh drift — guna set ujian tetap.

**S: Adakah audio muat naik muncul dalam klip akhir?**  
J: Model boleh ikut irama audio dan juga jana dialog, SFX dan muzik native mengikut prompt dan mod.

---

Bersedia untuk mencuba input multimodal? Gunakan butang di bawah untuk membuka **Seedance 2.0** — aliran kerja multimodal penuh, termasuk UI **versi Cina Seedance**.

---

<div style="text-align:center; margin: 2rem 0;"><a href="https://app.seedance22.com/ms/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">Mula menggunakan Seedance 2.0</a></div>

**Carian berkaitan**: Seedance 2.0, tutorial Seedance, versi Cina Seedance, video AI multimodal, prompt @ rujukan.
