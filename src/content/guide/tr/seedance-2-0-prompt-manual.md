---
title: "Seedance 2.0 Prompt Rehberi ve Kullanım Kılavuzu"
description: "Seedance 2.0 prompt'ları nasıl yazılır? Tam kılavuz: çok modlu referans, @ sözdizimi, kamera ve hareket, video uzatma ve düzenleme. Seedance 2.0 prompt en iyi uygulamaları."
pubDate: "2026-03-15"
heroImage: "https://img.seedance22.com/aiweb/seedance-1.mp4"
---

Seedance 2.0, daha zengin kontrol için görüntü, video, ses ve metin girişlerini destekleyen bir AI video üretim modelidir. Bu rehber **Seedance 2.0 prompt'larının nasıl yazılacağını** ve en iyi sonuçların nasıl alınacağını açıklar.

## 1. Seedance 2.0 Parametreleri ve Yetenekleri

| Boyut | Özellik |
|-------|---------|
| Görüntü girişi | ≤ 9 görsel |
| Video girişi | ≤ 3 klip, toplam ≤ 15 sn |
| Ses girişi | MP3, ≤ 3 dosya, toplam ≤ 15 sn |
| Metin girişi | Doğal dil prompt'ları |
| Çıktı süresi | 4–15 sn seçilebilir |
| Ses çıktısı | SFX/müzik dahil |

Karışık girişler toplam 12 dosya ile sınırlıdır; görünüm ve ritmi en çok etkileyen varlıkları önceliklendirin.

<video src="https://img.seedance22.com/aiweb/seedance-1.mp4" controls width="100%"></video>

## 2. Temel Yetenekler: Kararlı, Akıcı, Gerçekçi

Seedance 2.0 fizik, hareket akıcılığı, talimat takibi ve stil tutarlılığını iyileştirir; karmaşık ve sürekli hareketi iyi yönetir.

**Örnek prompt:** Bir kız çamaşırları zarifçe asar, sonra kovadan bir parça daha alıp sıkıca sallar.

<video src="https://img.seedance22.com/aiweb/seedance-2.mp4" controls width="100%"></video>

## 3. Çok Modlu ve Seedance 2.0 Prompt Yazımı

### 3.1 Çok modlu referans

Metin, görsel, video ve sesi ana veya referans varlık olarak yükleyebilirsiniz. **Seedance 2.0 prompt'unuzda** neye referans verileceğini (hareket, efektler, kamera, karakter, sahne, ses) net açıklayın.

- Referans görseller: kompozisyon ve karakter detayı  
- Referans video: kamera dili, hareket ritmi, yaratıcı efektler  
- Video uzatılabilir ve akıcı devam ettirilebilir (“çekime devam”)  
- Düzenleme: karakter değiştirme, kırpma, ekleme

Çok varlık kullanırken prompt'ta **@image1**, **@video1** vb. kullanın ki model hangisinin ne olduğunu bilsin.

### 3.2 Yaygın prompt kalıpları

- **İlk/son kare + referans video hareketi**  
  “@image1 ilk kare olarak, @video1 dövüş hareketine referans ver”

- **Mevcut videoyu uzat**  
  “@video1'i 5 saniye uzat” (çıktı süresini sadece yeni kısım için ayarlayın, örn. 5 sn)

- **Birden fazla videoyu birleştir**  
  “@video1 ile @video2 arasına sahne ekle, içerik: …”

- **Sürekli aksiyon**  
  “Karakter zıplamadan doğrudan taklaya geçsin, hareketi akıcı tut, @image1 @image2 @image3”

### 3.3 Tutarlılık, kamera ve yaratıcı çoğaltma

Seedance 2.0 yüzleri, kıyafetleri, sahneleri ve kamera stilini tutarlı tutar; referanslardan zorlu kamera işi ve karmaşık hareketi çoğaltabilir. Yaratıcı geçişler, reklam tarzı çekimler veya film klipleri için prompt'ta “@video1 ritim ve kameraya referans ver, @image1 karakter” yazın.

## 4. Özet

**Seedance 2.0 prompt yazımı** özetle: neye referans verileceğini ve ne yapılacağını net belirtin, varlıkları bağlamak için @ kullanın. Çok modlu girişler artı net talimatlar üretimi daha kontrollü ve verimli yapar.

<div style="text-align:center; margin: 2rem 0;">
  <a href="https://app.seedance22.com/generate/video-tools/seedance2.0" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, #eab308 0%, #f59e0b 100%); color: #000; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 14px rgba(234,179,8,0.4);">Seedance ile Başla</a>
</div>
