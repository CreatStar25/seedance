/** Translation pack: vi */
const IMG = "https://img.seedance22.com/aiweb/seedance-260526-1.png";

export const vi = {
  title: "Seedance 2.0: hướng dẫn đầy đủ đầu vào đa phương thức",
  description: "Văn bản, hình ảnh, âm thanh và video trong Seedance 2.0, hệ thống @ và tới 12 tệp tham chiếu. Hướng dẫn Seedance cho video AI đa phương thức.",
  tags: ["Seedance 2.0","Hướng dẫn Seedance","Phiên bản tiếng Trung Seedance"],
  alt: "Seedance 2.0: hướng dẫn đầy đủ đầu vào đa phương thức",
  related: "**Tìm kiếm liên quan**: Seedance 2.0, hướng dẫn Seedance, phiên bản tiếng Trung Seedance, video AI đa phương thức, prompt @ tham chiếu.",
  closing: "Sẵn sàng thử đầu vào đa phương thức? Dùng nút bên dưới để mở **Seedance 2.0** — quy trình đa phương thức đầy đủ, gồm giao diện **phiên bản tiếng Trung Seedance**.",
  main: [
    `Nếu bạn vẫn tạo video AI bằng «chỉ prompt văn bản và reroll vô hạn», bạn có thể đang bỏ lỡ nâng cấp cốt lõi của **Seedance 2.0**. Xây trên kiến trúc AV đa phương thức thống nhất, Seedance 2.0 chấp nhận văn bản, hình ảnh, âm thanh và video trong một quy trình — tới **12 tệp tham chiếu** cùng lúc (9 hình + 3 video + 3 track audio + hướng dẫn ngôn ngữ tự nhiên). Với creator cần kiểm soát ngoại hình nhân vật, chuyển động camera và đồng bộ AV, đầu vào đa phương thức không phải tùy chọn — trực tiếp ảnh hưởng chất lượng đầu ra.

![Seedance 2.0: hướng dẫn đầy đủ đầu vào đa phương thức](https://img.seedance22.com/aiweb/seedance-260526-1.png)

**Hướng dẫn Seedance** này giải thích bốn phương thức đầu vào, hệ thống tham chiếu @ và các kịch bản sản xuất phổ biến — kể cả qua giao diện **phiên bản tiếng Trung Seedance**.`,
    `## 1. Vì sao đầu vào đa phương thức quan trọng ngay bây giờ

Nhiều công cụ trước chỉ nhận văn bản. Mô tả càng chi tiết, model càng phải đoán — ngoại hình, chuyển động camera, tempo nhạc. Trong dự án thực, team đã có look frame, clip tham chiếu, BGM hoặc voiceover nhưng không đưa trực tiếp vào model.

**Seedance 2.0** đặt bốn phương thức trên một đường tạo sinh: model đọc ngữ nghĩa văn bản, hình ảnh, chuyển động video và ngôn ngữ camera, cùng nhịp audio, rồi xuất video có track audio native. So với 1.5, cảnh tương tác và chuyển động phức tạp dùng được hơn — gần quy trình quảng cáo, phim ngắn và mạng xã hội.`,
    `## 2. Bốn phương thức đầu vào giải thích

### 2.1 Văn bản: nêu rõ ý định

Văn bản vẫn là nền tảng; Seedance 2.0 xử lý hướng dẫn dài, danh sách shot và từ khóa phong cách tốt hơn nhiều. Bạn có thể:

- viết tường thuật cảnh đầy đủ (chủ thể, môi trường, hành động, camera, phong cách);
- dùng mô tả multi-shot kiểu storyboard;
- ghép tham chiếu **@** để gán vai trò cho từng asset.

Ví dụ: «@Image1 cho khuôn mặt nhân vật chính, @Video1 cho chuyển động camera theo sau, @Audio1 làm nhạc nền — nhân vật đi qua chợ đêm neon, camera theo sau, rồi quay lại mỉm cười về ống kính.»

### 2.2 Hình ảnh: khóa nhân vật và phong cách hình ảnh

Hình ảnh là tham chiếu phổ biến nhất. Sau khi tải look frame, bảng cảnh, VI thương hiệu hoặc style plate, model trích xuất khuôn mặt, trang phục, màu và bố cục, giữ tương đối ổn định giữa các shot.

| Dùng thường gặp | Ghi chú |
| :--- | :--- |
| Ngoại hình nhân vật | Tái tạo mặt và trang phục giữa các shot |
| Tham chiếu cảnh | Cố định môi trường, ánh sáng, bảng màu |
| Style plate | Thống nhất hình ảnh quảng cáo và thương mại |
| Khung đầu | Kiểm soát bố cục mở đầu |

Tới **9 hình**; JPG, PNG, WebP.

### 2.3 Âm thanh: nhịp, thoại và không khí

Seedance 2.0 nhận audio tải lên và có thể xuất track đồng bộ native. Audio dùng cho:

- **Nhạc nền**: dựng và nhịp theo beat;
- **Voiceover/thoại**: lip-sync (Quan thoại, Quảng, Anh, v.v.);
- **SFX môi trường**: không khí cảnh mạnh hơn.

Tới **3 track audio**, tổng độ dài thường trong 15 giây; MP3, WAV, M4A.

### 2.4 Video: tham chiếu hình ảnh cho camera và chuyển động

Clip tham chiếu cung cấp chuyển động camera, hành động cơ thể, nhịp và phong cách VFX — không cần dịch hết sang văn bản. Trường hợp phổ biến:

- camera theo sau, orbit, dolly hoặc push-pull;
- biên đạo nhảy hoặc hành động;
- mở rộng hoặc hoàn thiện cảnh từ footage có sẵn.

Tới **3 video**, giới hạn mỗi clip và tổng (thường ≤ 15 giây); MP4, MOV.

Trong sản xuất thực, kết hợp phương thức theo deliverable: quảng cáo ngắn thường cần hình + văn bản; clip nhạc ưu tiên @Audio1; chuỗi hành động hưởng lợi từ @Video1. Không cần 12 tệp — bắt đầu tối thiểu, thêm tham chiếu khi drift.`,
    `## 3. Hệ thống tham chiếu @: gán việc cho mỗi asset

**Tham chiếu @** làm đầu vào đa phương thức thực tế. Sau khi tải lên, đánh dấu \`@Image1\`, \`@Video1\`, \`@Audio1\` trong prompt để model biết vai trò từng tệp thay vì đoán.

| Thẻ | Vai trò thường gặp |
| :--- | :--- |
| @Image1 | Mặt / trang phục / cảnh |
| @Video1 | Chuyển động camera / tempo hành động |
| @Audio1 | BGM / voiceover lip-sync |
| Văn bản | Cốt truyện, phong cách, thời lượng |

**Ví dụ kết hợp** (hình + video + audio):

\`\`\`
Dùng khung góc nhìn thứ nhất của @Video1 xuyên suốt clip.
@Audio1 làm nhạc nền, dựng theo beat.
Nhân vật từ @Image1 đi chợ đêm neon, camera theo sau,
phong cách chuyển động như @Video1 — dừng, quay, mỉm cười.
Look đêm điện ảnh, màu phong phú, độ sâu trường ảnh nông.
\`\`\`

Vai trò @ rõ ràng cải thiện đáng kể khả năng kiểm soát.

Với prompt phức tạp, liệt kê vai trò @ trước câu chuyện để neo tham chiếu. Trong mô tả multi-shot, lặp tag khi đổi cảnh — vd. «@Image1 giữ ở shot 2» — giảm drift. Nếu audio định nhịp, nêu «@Audio1 on the beat»; công việc tập trung camera, mở bằng ngôn ngữ chuyển động @Video1 trước hành động chủ thể. Thử clip 4–6 giây trước để xác nhận từng @ rồi mở rộng 15 giây.`,
    `## 4. Thông số cốt lõi một cái nhìn

| Mục | Thông số |
| :--- | :--- |
| Phương thức đầu vào | Văn bản + hình + video + audio |
| Giới hạn tệp tham chiếu | 12 tổng (9 hình + 3 video + 3 audio) |
| Độ dài clip | 4–15 giây |
| Độ phân giải | 480p / 720p / 1080p (Pro tới 2K) |
| Tỷ lệ khung hình | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |
| Âm thanh | Đồng bộ AV native, lip-sync đa ngôn ngữ |
| Tốc độ khung hình | 24fps |`,
    `## 5. Ba kịch bản sản xuất phổ biến

### 5.1 Nội dung ngắn và mạng xã hội

Team thường cần sản lượng với cùng IP và look. Khóa nhân vật bằng hình, ngôn ngữ camera bằng video tham chiếu, đổi kịch bản bằng văn bản — lặp nhanh hơn với ít reroll.

### 5.2 Tài sản marketing thương hiệu

Thương hiệu đòi hỏi nhất quán VI. Logo, key visual và style board cộng prompt văn bản tạo clip quảng cáo hoặc social thống nhất — đáng tin hơn chỉ văn bản.

### 5.3 Video giáo dục và tri thức

Tải audio bài giảng hoặc thuyết minh cho hình ảnh lip-sync; thêm hình tham chiếu cảnh — nội dung giảng dạy đa phương thức chi phí thấp.`,
    `## 6. Bắt đầu: quy trình bốn bước

1. **Xác định deliverable**: quảng cáo, phim ngắn, clip social; thời lượng và tỷ lệ khung hình.
2. **Chuẩn bị tham chiếu**: nhân vật, camera, BGM theo nhu cầu — không cần 12 tệp mỗi lần.
3. **Viết prompt + @**: câu chuyện trước, rồi gắn asset; tránh chỉ dẫn mâu thuẫn.
4. **Lặp nhỏ**: 4–6 giây xác nhận nhân vật và camera, rồi mở rộng 10–15 giây.`,
    `## Câu hỏi thường gặp

**H: Có cần dùng cả bốn phương thức không?**  
Đ: Không. Chỉ văn bản cũng được; một hoặc hai hình cũng đủ. Kết hợp theo nhu cầu.

**H: Số @ được ánh xạ thế nào?**  
Đ: Theo thứ tự tải lên — hình đầu là @Image1, video đầu @Video1, v.v. Giữ số nhất quán trong prompt.

**H: Hình ảnh có đảm bảo nhất quán 100% không?**  
Đ: Nhất quán multi-shot vượt xa chỉ văn bản; cảnh đa chủ thể hoặc góc cực đoan vẫn có thể lệch — dùng bộ test cố định.

**H: Audio tải lên có xuất hiện trong clip cuối không?**  
Đ: Model có thể theo nhịp audio và cũng tạo thoại, SFX, nhạc native tùy prompt và chế độ.`,
  ],
};
