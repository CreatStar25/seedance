---
title: "Seedance 2.0: çok modlu girişin tam rehberi"
description: "Seedance 2.0'da metin, görüntü, ses ve video, @ referans sistemi ve 12'ye kadar referans dosyası. Çok modlu AI video için Seedance eğitimi."
tags: ["Seedance 2.0","Seedance Eğitimi","Seedance Çince Sürüm"]
pubDate: "2026-05-26"
heroImage: "https://img.seedance22.com/aiweb/seedance-260526-1.png"
author: "Seedance"
translationKey: "seedance-2-0-multimodal-input-guide"
lang: "tr"
---

Hâlâ «yalnızca metin promptları ve sonsuz yeniden üretim» ile AI video yapıyorsanız, **Seedance 2.0**'ın temel yükseltmesini kaçırıyor olabilirsiniz. Birleşik çok modlu AV mimarisi üzerinde Seedance 2.0, tek iş akışında metin, görüntü, ses ve video kabul eder — aynı anda **12 referans dosyası** (9 görüntü + 3 video + 3 ses parçası + doğal dil talimatları). Karakter görünümü, kamera hareketi ve AV senkronunu kontrol etmesi gereken yaratıcılar için çok modlu giriş lüks değil — çıktı kalitesini doğrudan etkiler.

![Seedance 2.0: çok modlu girişin tam rehberi](https://img.seedance22.com/aiweb/seedance-260526-1.png)

Bu **Seedance eğitimi** dört giriş modalitesini, @ referans sistemini ve yaygın üretim senaryolarını anlatır — **Seedance Çince sürüm** arayüzü üzerinden de başlayabilirsiniz.

## 1. Çok modlu giriş neden şimdi önemli

Önceki birçok araç yalnızca metin kabul ediyordu. Açıklama ne kadar ince olursa model o kadar tahmin etmek zorundaydı — görünüm, kamera, müzik temposu. Gerçek projelerde ekiplerin look kareleri, referans klipleri, BGM veya seslendirme zaten vardı ama modele doğrudan verilemiyordu.

**Seedance 2.0** dört modaliteyi tek üretim yolunda birleştirir: model metin anlamı, görüntü görselleri, video hareketi ve kamera dilini, ses ritmiyle birlikte okur ve yerel ses parçalı video üretir. 1.5'e kıyasla karmaşık etkileşim ve hareket sahneleri daha kullanılabilir — reklam, kısa drama ve sosyal iş akışlarına daha yakın.

## 2. Dört giriş modalitesi açıklaması

### 2.1 Metin: niyeti net ifade edin

Metin temel kalır; Seedance 2.0 uzun talimatları, plan listelerini ve stil anahtar kelimelerini çok daha iyi işler. Şunları yapabilirsiniz:

- tam sahne anlatıları (özne, ortam, eylem, kamera, stil);
- storyboard tarzı çoklu plan açıklamaları;
- **@** referanslarıyla her varlığa rol atama.

Örnek: «@Image1 baş karakterin yüzü için, @Video1 takip kamerası hareketi için, @Audio1 arka plan müziği — karakter neon gece pazarından geçer, kamera arkadan takip eder, sonra gülümseyerek objektife döner.»

### 2.2 Görüntüler: karakter ve görsel stili kilitleme

Görüntüler en yaygın referanstır. Look kareleri, sahne panoları, marka VI veya stil plakaları yükledikten sonra model yüz, kıyafet, renk ve kompozisyonu çıkarır ve planlar arasında görece sabit tutar.

| Tipik kullanım | Notlar |
| :--- | :--- |
| Karakter görünümü | Planlar arasında yüz ve kıyafet |
| Sahne referansı | Ortam, ışık ve palet sabitleme |
| Stil plakası | Reklam ve e-ticaret görsellerini birleştirme |
| İlk kare | Açılış kompozisyonu kontrolü |

**9 görüntüye** kadar; JPG, PNG, WebP.

### 2.3 Ses: ritim, diyalog ve atmosfer

Seedance 2.0 yüklenen sesi kabul eder ve yerel senkronize parçalar üretebilir. Ses şunlar için kullanılır:

- **Arka plan müziği**: beat'e uyumlu kurgu ve pacing;
- **Seslendirme/diyalog**: lip-sync (Mandarin, Kantonca, İngilizce vb.);
- **Ortam SFX**: daha güçlü sahne atmosferi.

**3 ses parçasına** kadar, toplam süre genelde 15 saniye içinde; MP3, WAV, M4A.

### 2.4 Video: kamera ve hareket için görsel referans

Referans klipler kamera hareketi, beden aksiyonu, ritim ve VFX stili sağlar — her şeyi metne çevirmeden. Yaygın durumlar:

- takip, orbit, dolly veya push-pull kamera;
- dans veya aksiyon koreografisi;
- mevcut görüntüden sahne uzatma veya tamamlama.

**3 videoya** kadar, klip ve toplam süre limitleri (genelde ≤ 15 sn); MP4, MOV.

Gerçek üretimde deliverable'a göre modaliteleri birleştirin: kısa reklamlar genelde görüntü + metin; müzik klipleri @Audio1; aksiyon sekansları @Video1'den faydalanır. 12 dosya şart değil — minimalden başlayın, drift olunca referans ekleyin.

## 3. @ referans sistemi: her varlığa bir görev

**@ referansları** çok modlu girişi pratik kılar. Yüklemeden sonra prompt'ta `@Image1`, `@Video1`, `@Audio1` işaretleyin; model tahmin etmek yerine her dosyanın rolünü bilir.

| Etiket | Yaygın rol |
| :--- | :--- |
| @Image1 | Yüz / kıyafet / sahne |
| @Video1 | Kamera hareketi / aksiyon temposu |
| @Audio1 | BGM / lip-sync seslendirme |
| Metin | Hikâye, stil, süre |

**Kombine örnek** (görüntü + video + ses):

```
Tüm klip boyunca @Video1 birinci şahıs kadrajı kullan.
@Audio1 arka plan müziği, beat'e göre kurgu.
@Image1 karakteri neon gece pazarında, kamera arkadan takip,
@Video1'deki hareket stili — dur, dön, gülümse.
Sinematik gece görünümü, zengin renk, sığ alan derinliği.
```

Net @ rolleri kontrol edilebilirliği belirgin artırır.

Karmaşık promptlarda anlatıdan önce @ rollerini listeleyin. multi-shot açıklamalarda sahne değişince etiketleri tekrarlayın — örn. «shot 2'de de @Image1» — drift azaltmak için. Ses ritmi belirliyorsa «@Audio1 on the beat» deyin; kamera odaklı işte özne aksiyonundan önce @Video1 hareket dili. Önce 4–6 sn ile her @ doğrulayın, sonra 15 sn'ye uzatın.

## 4. Temel özellikler bir bakışta

| Öğe | Özellik |
| :--- | :--- |
| Giriş modaliteleri | Metin + görüntü + video + ses |
| Referans dosya limiti | Toplam 12 (9 görüntü + 3 video + 3 ses) |
| Klip süresi | 4–15 saniye |
| Çözünürlük | 480p / 720p / 1080p (Pro 2K'ya kadar) |
| En-boy oranları | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Ses | Yerel AV senkron, çok dilli lip-sync |
| Kare hızı | 24 fps |

## 5. Üç yaygın üretim senaryosu

### 5.1 Kısa form ve sosyal içerik

Ekipler sıkça aynı IP ve look ile hacim ister. Görüntüyle karakter kilitleme, video referansıyla kamera dili, metinde senaryo varyasyonu — daha az reroll ile hızlı iterasyon.

### 5.2 Marka pazarlama varlıkları

Markalar VI tutarlılığı ister. Logo, key visual ve stil panoları artı metin promptları ile birleşik tonda reklam veya sosyal klipler — yalnızca metinden daha güvenilir.

### 5.3 Eğitim ve bilgi videosu

Ders veya anlatım sesi yükleyerek lip-sync görseller; sahne referans görüntüleri ekleyerek düşük maliyetli çok modlu eğitim içeriği.

## 6. Başlangıç: dört adımlı iş akışı

1. **Teslimi tanımlayın**: reklam, kısa drama, sosyal klip; süre ve en-boy oranı.
2. **Referansları hazırlayın**: karakter, kamera, BGM gerektiğinde — her seferinde 12 dosya şart değil.
3. **Prompt + @ yazın**: önce hikâye, sonra varlık bağlama; çelişkili talimatlardan kaçının.
4. **Küçük iterasyon**: 4–6 sn ile karakter ve kamera doğrulama, sonra 10–15 sn'ye uzatma.

## SSS

**S: Dört modaliteyi de kullanmalı mıyım?**  
C: Hayır. Yalnızca metin yeter; bir veya iki görüntü de olur. İhtiyaca göre karıştırın.

**S: @ numaraları nasıl eşlenir?**  
C: Yükleme sırasına göre — ilk görüntü @Image1, ilk video @Video1 vb. Prompt'ta numaralandırmayı tutarlı tutun.

**S: Görüntüler %100 tutarlılık garanti eder mi?**  
C: Çoklu plan tutarlılığı yalnızca metinden çok üstündür; karmaşık çoklu özne veya aşırı açılarda sapma olabilir — sabit test seti kullanın.

**S: Yüklenen ses final klipte görünür mü?**  
C: Model ses ritmini takip edebilir ve prompt/moda göre yerel diyalog, SFX ve müzik de üretebilir.

---

Çok modlu girişi kendiniz denemeye hazır mısınız? Aşağıdaki düğmeyle **Seedance 2.0**'ı açın — **Seedance Çince sürüm** arayüzü dahil tam çok modlu iş akışı.

---

<div style="text-align:center; margin: 2rem 0;"><a href="https://app.seedance22.com/tr/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">Seedance 2.0 ile Başlayın</a></div>

**İlgili aramalar**: Seedance 2.0, Seedance eğitimi, Seedance Çince sürüm, çok modlu AI video, @ referans promptları.
