---
title: "Seedance 2.0 nâng cao: hướng dẫn vlog AI từng bước"
description: "Tạo vlog AI với Seedance 2.0: storyboard bảng, nhân vật, Tham chiếu đầy đủ và prompt. Hướng dẫn Seedance từ kịch bản đến xuất file."
tags: ["Seedance 2.0", "Hướng dẫn Seedance", "Seedance 中文版"]
pubDate: "2026-06-03"
heroImage: "https://img.seedance22.com/aiweb/seedance-260603-1.png"
author: "Seedance"
translationKey: "seedance-2-0-ai-vlog-advanced-tutorial"
lang: "vi"
---

Vlog hoạt hình không cần quay hay dựng bối cảnh? **Seedance 2.0** đọc ảnh storyboard và sheet nhân vật ở chế độ **Tham chiếu đầy đủ (全能参考)** để ra clip nhất quán. **Hướng dẫn Seedance** này đi từ kịch bản đến hậu kỳ.

![Storyboard và nhân vật Seedance 2.0](https://img.seedance22.com/aiweb/seedance-260603-1.png)

Làm theo các bước dưới đây. Muốn vào trang tạo video ngay, bấm nút.

<div style="text-align:center; margin: 2rem 0;">
  <a href="https://app.seedance22.com/vi/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">Bắt đầu với Seedance 2.0</a>
</div>

## 1. Storyboard dạng bảng

Storyboard là xương sống video. Bảng (thời lượng, khung hình, camera, ánh sáng/FX, âm thanh) giúp model không đoán sai.

**Các bước:**

1. Chọn niche và góc nội dung (thói quen sau giờ làm, nhật ký du lịch, slice-of-life văn phòng…).  
2. Nhờ trợ lý AI tạo storyboard **dạng bảng**: thời lượng, shot, camera, ánh sáng/hiệu ứng, âm thanh.  
3. Ví dụ prompt:

> Tham chiếu nhịp vlog hoạt hình thường gặp, viết storyboard [vlog sau giờ làm]: [về nhà, nấu ăn, đọc sách, ngủ]. Giọng ấm áp. Bảng, dưới 15 giây, cột: thời lượng, shot, camera, ánh sáng/hiệu ứng, âm thanh.

4. **Chụp màn hình bảng** và lưu để upload lên Seedance 2.0.

**Ví dụ cấu trúc:**

| Thời lượng | Khung hình | Camera | Ánh sáng/FX | Âm thanh |
| :--- | :--- | :--- | :--- | :--- |
| 0–3s | Vào căn hộ, đèn ấm | Cố định, push nhẹ | Nội thất ấm | Cửa, nhạc nhẹ |
| 3–7s | Bếp nấu, bật bếp | Top xuống ngang | Lửa, hơi | Thái, chảo |
| 7–12s | Đọc sách sofa, đèn bàn | Pan chậm | Ánh sáng bên | Lật trang, ambient |
| 12–15s | Tắt đèn ngủ | Kéo ra toàn cảnh | Fade | Nhạc kết |

## 2. Thiết kế nhân vật chính

Video AI hỏng nếu mặt đổi mỗi shot. Tạo **nhân vật cố định** bằng text-to-image.

**Ví dụ prompt:**

> Bạn là designer nhân vật anime. Nữ ~25 tuổi, dân văn phòng: tóc ngắn, mũi cao, mắt to, ~165 cm, da thường, suit xám nhạt, minh họa nửa người, nền gọn.

Lưu PNG/JPG cùng ảnh storyboard.

![Storyboard và nhân vật Seedance 2.0](https://img.seedance22.com/aiweb/seedance-260603-1.png)

## 3. Cấu hình Seedance 2.0

1. Mở tạo video, chọn **Seedance 2.0**.  
2. Chế độ **Tham chiếu đầy đủ (全能参考)**—bắt buộc cho nhân vật + storyboard.  
3. Tỷ lệ **9:16** hoặc **3:4** dọc; **16:9** ngang.  
4. 1080P nếu gói hỗ trợ.

## 4. Upload và tạo

1. Khu vực tham chiếu: **ảnh nhân vật** + **screenshot storyboard**.  
2. Prompt một dòng, ví dụ:

> Bám @Image1 cho khuôn mặt. Theo thứ tự storyboard @Image2. Phong cách ấm, mặt ổn định, ít rung, 1080P.

3. Tạo—thường chờ **40–90 giây**.  
4. Một shot lỗi? Sửa dòng bảng hoặc prompt, không làm lại cả clip.

**Lưu ý:** Mỗi lần tạo tốn credit; tài khoản mới thường có credit miễn phí hàng ngày. Không bấm tạo liên tục.

## 5. Hậu kỳ

Import editor (CapCut, Premiere…), phụ đề, sticker, BGM. Dành 10–15 phút cho nhịp phụ đề.

## 6. Tóm tắt

| Giai đoạn | Đầu ra | Mẹo |
| :--- | :--- | :--- |
| Kế hoạch | Chủ đề | Bắt đầu hẹp để làm series |
| Storyboard | Screenshot bảng | Giới hạn thời lượng, ghi camera |
| Nhân vật | Sheet hero | Một khuôn mặt xuyên suốt |
| Tạo | Clip Seedance 2.0 | Tham chiếu đầy đủ + @ rõ |
| Biên tập | Phụ đề & SFX | Tăng tỷ lệ xem hết |

Vòng **Seedance 2.0**: **storyboard → nhân vật → Tham chiếu đầy đủ → prompt → tạo & hậu kỳ**.

---

Upload storyboard và nhân vật trên site để thử.

<div style="text-align:center; margin: 2rem 0;">
  <a href="https://app.seedance22.com/vi/generate/video-tools/seedance/" target="_blank" rel="noopener noreferrer" style="display:inline-block; padding: 1rem 2.5rem; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: #fff; font-weight: 800; font-size: 1.125rem; border-radius: 9999px; text-decoration: none; box-shadow: 0 4px 20px rgba(99,102,241,0.4);">Bắt đầu với Seedance 2.0</a>
</div>

****Tìm kiếm**: Seedance 2.0, hướng dẫn Seedance, vlog AI, phim ngắn hoạt hình, Tham chiếu đầy đủ.**