/** Translation pack: id */
const IMG = "https://img.seedance22.com/aiweb/seedance-260526-1.png";

export const id = {
  title: "Seedance 2.0: panduan lengkap input multimodal",
  description: "Teks, gambar, audio, dan video di Seedance 2.0, sistem @ dan hingga 12 file referensi. Tutorial Seedance untuk video AI multimodal.",
  tags: ["Seedance 2.0","Tutorial Seedance","Versi Tionghoa Seedance"],
  alt: "Seedance 2.0: panduan lengkap input multimodal",
  related: "**Pencarian terkait**: Seedance 2.0, tutorial Seedance, versi Tionghoa Seedance, video AI multimodal, prompt @ referensi.",
  closing: "Siap mencoba input multimodal? Gunakan tombol di bawah untuk membuka **Seedance 2.0** — alur kerja multimodal lengkap, termasuk UI **versi Tionghoa Seedance**.",
  main: [
    `Jika Anda masih membuat video AI dengan «prompt teks saja dan reroll tanpa henti», Anda mungkin melewatkan peningkatan inti **Seedance 2.0**. Dibangun di atas arsitektur audio-video multimodal terpadu, Seedance 2.0 menerima teks, gambar, audio, dan video dalam satu alur — hingga **12 file referensi** sekaligus (9 gambar + 3 video + 3 trek audio + instruksi bahasa alami). Bagi kreator yang perlu mengontrol penampilan karakter, gerakan kamera, dan sinkronisasi AV, input multimodal bukan tambahan — langsung memengaruhi kualitas output.

![Seedance 2.0: panduan lengkap input multimodal](https://img.seedance22.com/aiweb/seedance-260526-1.png)

**Tutorial Seedance** ini menjelaskan keempat modalitas input, sistem referensi @, dan skenario produksi umum — termasuk melalui antarmuka **versi Tionghoa Seedance**.`,
    `## 1. Mengapa input multimodal penting sekarang

Banyak alat sebelumnya hanya menerima teks. Semakin detail deskripsi, semakin banyak model menebak — penampilan, gerakan kamera, tempo musik. Di proyek nyata, tim sudah punya look frame, klip referensi, BGM, atau voiceover yang tidak bisa langsung dimasukkan ke model.

**Seedance 2.0** menempatkan empat modalitas dalam satu jalur generasi: model membaca semantik teks, visual gambar, gerakan video dan bahasa kamera, plus ritme audio, lalu menghasilkan video dengan trek audio native. Dibanding 1.5, adegan interaksi dan gerakan kompleks lebih dapat digunakan — lebih dekat ke alur iklan, drama pendek, dan sosial.`,
    `## 2. Empat modalitas input dijelaskan

### 2.1 Teks: nyatakan niat dengan jelas

Teks tetap fondasi; Seedance 2.0 menangani instruksi panjang, daftar shot, dan kata kunci gaya jauh lebih baik. Anda dapat:

- menulis narasi adegan lengkap (subjek, lingkungan, aksi, kamera, gaya);
- memakai deskripsi multi-shot ala storyboard;
- memasangkan referensi **@** untuk menetapkan peran setiap aset.

Contoh: «@Image1 untuk wajah protagonis, @Video1 untuk gerakan kamera follow, @Audio1 sebagai musik latar — karakter berjalan di pasar malam neon, kamera mengikuti dari belakang, lalu berbalik tersenyum ke lensa.»

### 2.2 Gambar: kunci karakter dan gaya visual

Gambar adalah referensi paling umum. Setelah unggah look frame, papan adegan, VI merek, atau style plate, model mengekstrak wajah, kostum, warna, dan komposisi serta menjaganya relatif stabil antar shot.

| Penggunaan umum | Catatan |
| :--- | :--- |
| Penampilan karakter | Replikasi wajah dan kostum antar shot |
| Referensi adegan | Kunci lingkungan, pencahayaan, palet |
| Style plate | Satukan visual iklan dan e-commerce |
| Frame pertama | Kontrol komposisi pembuka |

Hingga **9 gambar**; JPG, PNG, WebP.

### 2.3 Audio: ritme, dialog, dan suasana

Seedance 2.0 menerima audio unggahan dan dapat menghasilkan trek tersinkronisasi native. Audio dipakai untuk:

- **Musik latar**: editing dan pacing selaras beat;
- **Voiceover/dialog**: lip-sync (Mandarin, Kanton, Inggris, dll.);
- **SFX ambient**: atmosfer adegan lebih kuat.

Hingga **3 trek audio**, total durasi biasanya dalam 15 detik; MP3, WAV, M4A.

### 2.4 Video: referensi visual untuk kamera dan gerakan

Klip referensi memberikan gerakan kamera, aksi tubuh, ritme, dan gaya VFX — tanpa menerjemahkan semuanya ke teks. Kasus umum:

- kamera follow, orbit, dolly, atau push-pull;
- koreografi tari atau aksi;
- perpanjang atau lengkapi adegan dari footage existing.

Hingga **3 video**, batas per klip dan total (biasanya ≤ 15 d); MP4, MOV.

Dalam produksi nyata, gabungkan modalitas sesuai deliverable: iklan pendek sering butuh gambar + teks; klip musik prioritaskan @Audio1; urutan aksi gain dari @Video1. Tidak perlu 12 file — mulai minimal, tambah referensi hanya saat hasil drift.`,
    `## 3. Sistem referensi @: beri setiap aset satu tugas

**Referensi @** membuat input multimodal praktis. Setelah unggah, tandai \`@Image1\`, \`@Video1\`, \`@Audio1\` di prompt agar model tahu peran setiap file, bukan menebak.

| Tag | Peran umum |
| :--- | :--- |
| @Image1 | Wajah / kostum / adegan |
| @Video1 | Gerakan kamera / tempo aksi |
| @Audio1 | BGM / voiceover lip-sync |
| Teks | Cerita, gaya, durasi |

**Contoh kombinasi** (gambar + video + audio):

\`\`\`
Gunakan framing first-person @Video1 sepanjang klip.
@Audio1 sebagai musik latar, edit on the beat.
Karakter dari @Image1 di pasar malam neon, kamera ikuti dari belakang,
gaya gerakan seperti di @Video1 — jeda, putar, senyum.
Look malam sinematik, warna kaya, depth of field dangkal.
\`\`\`

Peran @ yang jelas meningkatkan kontrolabilitas secara dramatis.

Saat membangun prompt kompleks, daftar peran @ sebelum narasi untuk menambat referensi. Dalam deskripsi multi-shot, ulangi tag saat ganti adegan — mis. «@Image1 tetap di shot 2» — untuk kurangi drift. Jika audio mengatur ritme, sebut «@Audio1 on the beat»; untuk fokus kamera, buka dengan bahasa gerakan @Video1 sebelum aksi subjek. Uji klip 4–6 d dulu untuk validasi setiap @ sebelum perpanjang ke 15 d.`,
    `## 4. Spesifikasi inti sekilas

| Item | Spesifikasi |
| :--- | :--- |
| Modalitas input | Teks + gambar + video + audio |
| Batas file referensi | 12 total (9 gambar + 3 video + 3 audio) |
| Panjang klip | 4–15 detik |
| Resolusi | 480p / 720p / 1080p (Pro hingga 2K) |
| Rasio aspek | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Audio | Sync AV native, lip-sync multibahasa |
| Frame rate | 24fps |`,
    `## 5. Tiga skenario produksi umum

### 5.1 Konten pendek dan sosial

Tim sering butuh volume dengan IP dan look sama. Kunci karakter dengan gambar, bahasa kamera dengan referensi video, variasi skrip di teks — iterasi lebih cepat dengan reroll lebih sedikit.

### 5.2 Aset pemasaran merek

Merek menuntut konsistensi VI. Logo, key visual, dan style board plus prompt teks untuk klip iklan atau sosial dengan nada seragam — lebih andal daripada teks saja.

### 5.3 Video edukasi dan pengetahuan

Unggah audio kuliah atau narasi untuk visual lip-sync; tambah gambar referensi adegan — konten pengajaran multimodal berbiaya rendah.`,
    `## 6. Memulai: alur kerja empat langkah

1. **Tentukan deliverable**: iklan, drama pendek, klip sosial; durasi dan rasio aspek.
2. **Siapkan referensi**: karakter, kamera, BGM sesuai kebutuhan — tidak perlu 12 file setiap kali.
3. **Tulis prompt + @**: cerita dulu, lalu ikat setiap aset; hindari instruksi bertentangan.
4. **Iterasi kecil**: 4–6 d untuk validasi karakter dan kamera, lalu perpanjang ke 10–15 d.`,
    `## FAQ

**T: Haruskah saya pakai keempat modalitas?**  
J: Tidak. Teks saja cukup; satu atau dua gambar juga oke. Campur sesuai kebutuhan.

**T: Bagaimana pemetaan nomor @?**  
J: Urutan unggah — gambar pertama @Image1, video pertama @Video1, dll. Jaga nomor konsisten di prompt.

**T: Apakah gambar menjamin konsistensi 100%?**  
J: Konsistensi multi-shot jauh mengungguli teks saja; adegan multi-subjek atau sudut ekstrem masih bisa drift — pakai set uji tetap.

**T: Apakah audio unggahan muncul di klip final?**  
J: Model dapat mengikuti ritme audio dan juga menghasilkan dialog, SFX, dan musik native sesuai prompt dan mode.`,
  ],
};
