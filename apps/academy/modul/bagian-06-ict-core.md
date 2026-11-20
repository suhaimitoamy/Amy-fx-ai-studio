# ICT Core
> Modul Edukasi Amy FX Pro — bagian-06-ict-core
> Total Bab: 11 Bab | Format: Editable Markdown for Google AI Studio

---

<!-- CHAPTER_START: apa-itu-ict.html | TITLE: Apa Itu ICT -->
## Apa Itu ICT

## Apa Itu ICT

> [!NOTE]
> IkhtisarBagi sebagian orang, mendengar kata "ICT" mungkin terdengar seperti belajar bahasa alien. Ada *Fair Value Gap* (FVG), *Order Block* (OB), *Liquidity Sweep*, dan banyak istilah lainnya. Tapi tenang, mari kita bahas pelan-pelan pakai bahasa tongkrongan.

### Mengenal ICT (Inner Circle Trader)

**ICT** singkatan dari *Inner Circle Trader*. Ini adalah metodologi trading yang diciptakan oleh **Michael J. Huddleston**. ICT bukanlah sekadar indikator atau garis support/resistance. ICT adalah cara pandang atau "kacamata" untuk melihat bagaimana pasar (terutama algoritma) memindahkan harga dari satu titik ke titik lainnya.

Dalam dunia ICT, harga tidak bergerak secara acak. Harga dikendalikan oleh sesuatu yang disebut algoritma pergerakan harga (*algorithmic Price Delivery*). Ibaratnya, harga itu seperti paket pengiriman; ia punya tujuan pasti, entah itu ke alamat A atau alamat B. Tugas kita bukan menyetir mobil pengirimannya, tapi menumpang di mobil tersebut saat ia mengarah ke tujuannya.

### Perbedaan ICT dan Retail Trading

Kalau kamu pernah belajar trading ritel biasa (Support & Resistance, Trendline, Indikator RSI/MACD), kamu mungkin sering mencari "titik pantul". Kalau harga kena Support, buy. Kena Resistance, sell.

Tapi dalam kacamata ICT, konsepnya dibalik. Level Support dan Resistance yang sering disentuh itu justru dipandang sebagai **Liquidity (Likuiditas)**. Apa Itu Liquidity? Anggap saja seperti bahan bakar. Kalau banyak trader ritel pasang *Stop Loss* (SL) di bawah Support, maka di bawah Support itu banyak "uang" yang menganggur. Algoritma institusi butuh uang itu untuk mengeksekusi order besar mereka. Jadi, harga akan dengan sengaja menembus Support (menjemput SL ritel) sebelum akhirnya terbang naik.

> [!NOTE]
> AnalogiBayangkan paus (institusi) ingin makan sekumpulan ikan teri (trader ritel). Ikan teri ini sering berkumpul di satu tempat perlindungan (Support/Resistance). Paus akan menabrak tempat perlindungan itu, memakan ikan terinya, lalu berenang menjauh. ICT mengajarkan kita untuk tidak menjadi ikan teri, melainkan berenang di samping paus.

### Konsep Inti dalam ICT

Ada beberapa pilar utama dalam ICT yang akan terus kita pelajari ke depannya:

- **Liquidity (Likuiditas):** Uang/order yang tertinggal di pasar. Tanpa likuiditas, market tidak bergerak. Harga selalu mencari likuiditas terdekat.
- **Displacement:** Pergerakan harga yang kuat dan tajam, menunjukkan niat institusi ikut campur tangan di pasar.
- **Fair Value Gap (FVG):** Celah harga yang tercipta saat pergerakan tajam. Ini ibarat "jejak kaki" raksasa (institusi) yang tertinggal.
- **Time and Price:** Waktu adalah hal yang krusial. ICT percaya bahwa algoritma bergerak berdasarkan waktu tertentu (misalnya sesi London atau New York), bukan cuma sekadar level harga.

### Kenapa Belajar ICT Terasa Susah Awalnya?

Karena kita harus memprogram ulang cara berpikir kita. Dulu mungkin kamu senang kalau melihat "Double Bottom" karena itu tanda mau naik. Sekarang, di ICT, kamu justru waspada melihat Double Bottom, karena di bawahnya adalah **Sell-side Liquidity (SSL)** yang rawan dimakan / disapu (*sweep*).

Di bab-bab selanjutnya, kita akan membedah konsep-konsep ini pelan-pelan. Mulai dari Context (Konteks), memahami kerangka waktu besar (HTF), hingga pola konfirmasi entry seperti CISD dan MSS. Nikmati prosesnya, jangan terburu-buru.

← Propulsion Block
Context is King →

<!-- CHAPTER_END: apa-itu-ict.html -->

---

<!-- CHAPTER_START: change-in-state-of-delivery-cisd.html | TITLE: Change in State of Delivery (CISD) -->
## Change in State of Delivery (CISD)

## Change in State of Delivery (CISD)

> [!NOTE]
> IkhtisarSetelah memahami bahwa algoritma itu "mengirimkan harga" (Price Delivery), pertanyaan selanjutnya adalah: **Kapan pengiriman itu berubah arah?** Di sinilah kita mempelajari salah satu konsep terpenting untuk mengidentifikasi awal mula pembalikan arah, yaitu **Change in State of Delivery (CISD)**.

### Apa Itu CISD?

Secara harfiah, CISD berarti "Perubahan Status Pengiriman". Ini adalah momen kritis ketika dominasi pembeli beralih ke penjual, atau sebaliknya. Dalam ICT, ini ditandai oleh bagaimana **candle terakhir sebelum pembalikan** dipecahkan (di-break) oleh harga yang berlawanan.

Kalau sebelumnya algoritma sedang dalam mode "Sell Program" (mengirim harga ke bawah untuk mencari diskon), lalu tiba-tiba terjadi CISD ke atas, maka algoritma telah berpindah ke "Buy Program" (mengirim harga ke atas untuk mencari premium/BSL).

> [!NOTE]
> AnalogiBayangkan sebuah kereta barang sedang melaju kencang ke Selatan. Tiba-tiba kereta itu direm mendadak di stasiun besar, lalu kepalanya diputar dan mulai melaju ke Utara. CISD adalah "momen tepat saat kepala kereta berhasil diputar dan mulai bergerak ke arah baru".

### Mendeteksi CISD di Chart

Bagaimana cara melihatnya secara visual? Kuncinya ada pada melihat *body candle*, bukan sekadar sumbu (*wick*/*tail*).

- **Jika harga sedang turun (Down Trend):** Perhatikan candle bearish (merah/hitam) terakhir. Saat ada candle bullish (hijau/putih) yang berhasil **ditutup (Close) di atas harga open/high candle bearish terakhir tersebut**, itulah yang disebut CISD Bullish. Algoritma telah berhenti menjual dan mulai membeli.
- **Jika harga sedang naik (Up Trend):** Perhatikan candle bullish terakhir. Saat ada candle bearish yang **ditutup (Close) di bawah harga open/low candle bullish terakhir tersebut**, itu adalah CISD Bearish. Algoritma beralih ke mode jual.

### Perbedaan CISD dan MSS (Market Structure Shift)

Banyak trader bingung antara CISD dan Market Structure Shift (MSS) yang akan kita pelajari nanti. Sederhananya:

**CISD terjadi LEBIH CEPAT daripada MSS.** CISD hanya melihat pecahnya satu atau dua candle spesifik (Order Block), sedangkan MSS harus menembus Swing High atau Swing Low (Struktur Pasar). Oleh karena itu, CISD adalah tanda-tanda pertama bahwa market ingin berbalik arah, sebelum strukturnya benar-benar bergeser.

### Cara Menggunakan CISD

- Tunggu harga masuk ke area FVG atau OB di Timeframe Besar (misal H1 atau H4).
- Turun ke Timeframe Kecil (misal M15 atau M5).
- Amati dengan sabar. Jangan langsung Buy saat harga menyentuh POI.
- Tunggu sampai terjadi **Change in State of Delivery** di Timeframe Kecil tersebut.
- Setelah CISD terkonfirmasi, barulah kamu mencari FVG kecil yang ditinggalkan untuk melakukan Entry yang presisi.

Di bab selanjutnya, kita akan membedah secara spesifik bagaimana bentuk CISD Bullish dan CISD Bearish di chart agar kamu lebih mahir mengenalinya.

← Price Delivery
CISD Bullish →

<!-- CHAPTER_END: change-in-state-of-delivery-cisd.html -->

---

<!-- CHAPTER_START: cisd-bearish.html | TITLE: CISD Bearish -->
## CISD Bearish

## CISD Bearish

> [!NOTE]
> IkhtisarKebalikan dari materi sebelumnya, sekarang kita bahas **CISD Bearish** (Change in State of Delivery ke arah turun). Ini adalah sinyal peringatan dini bahwa market mungkin sudah mencapai puncaknya (Premium) dan algoritma bersiap untuk mengirim harga turun (Sell Program).

### Syarat Terjadinya CISD Bearish

Prinsipnya sama persis dengan yang Bullish, hanya dibalik arahnya. Agar CISD Bearish valid, ikuti aturan ini:

- **Context (Lokasi yang Benar):** Harga harus sedang berada di area *Premium* pada Timeframe Besar (HTF), misalnya masuk ke FVG atau Order Block Resistance. Atau, harga baru saja menyapu Liquidity di atas (Buy-side Liquidity Sweep).
- **Candle Bullish Terakhir:** Saat harga sedang asyik naik menuju puncaknya, tandai candle bullish (naik) terakhir. Candle inilah yang merepresentasikan pesanan beli terakhir dari algoritma (yang sering menjebak trader ritel untuk ikut FOMO Buy).
- **Penembusan (Breakout) dengan Body:** Tunggu sampai ada candle bearish (turun) kuat yang meluncur ke bawah dan **Body (badan)-nya ditutup (Close) di bawah harga Open/Low dari candle bullish terakhir tadi.**

**Analogi Sederhana:** Bayangkan candle bullish terakhir adalah pijakan tangga tertinggi. Ketika ada candle bearish yang melompat dan menghancurkan pijakan tangga itu hingga hancur (ditutup di bawahnya), berarti tidak ada lagi jalan ke atas. Kita resmi masuk ke mode Bearish.

### Body vs Sumbu (Sekali Lagi)

Sama seperti saat mencari Buy, saat mencari Sell pun aturan **Body Close** mutlak diperlukan.

Kalau candle bearish meluncur ke bawah melewati candle bullish terakhir, tapi saat ditutup ternyata body-nya ditarik naik lagi dan hanya meninggalkan sumbu bawah panjang, maka **itu BUKAN CISD Bearish**. Harga masih memiliki energi untuk naik lebih tinggi, jadi jangan coba-coba memencet tombol Sell.

### Cara Eksekusi (Entry)

Skenario ideal untuk entry setelah melihat CISD Bearish di Timeframe Kecil (M5/M15):

- Setelah CISD Bearish terkonfirmasi (candle close di bawah), jangan langsung Sell. Biasanya harga akan bergerak terlalu cepat (Displacement).
- Perhatikan celah kosong atau **Fair Value Gap (FVG) Bearish** yang ditinggalkan oleh gerakan turun tersebut.
- Tempatkan *Sell Limit* di area FVG tersebut dengan Stop Loss (SL) sedikit di atas puncak (High) sebelumnya.
- Biarkan harga memantul naik sedikit (Retracement) ke FVG untuk menjemput order kamu, lalu menukik turun mencari Liquidity di bawah.

← CISD Bullish
MSS yang Valid →

<!-- CHAPTER_END: cisd-bearish.html -->

---

<!-- CHAPTER_START: cisd-bullish.html | TITLE: CISD Bullish -->
## CISD Bullish

## CISD Bullish

> [!NOTE]
> IkhtisarSekarang mari kita bedah bentuk spesifik dari **CISD Bullish** (Change in State of Delivery ke arah naik). Ini adalah sinyal pertama yang memberitahu kita bahwa market mungkin sudah lelah turun dan siap untuk memantul ke atas.

### Syarat Terjadinya CISD Bullish

Agar sebuah CISD Bullish dianggap valid dan bukan tipuan (fake out), ia harus memenuhi syarat-syarat berikut secara berurutan:

- **Lokasi Harus Benar (Context):** Harga harus berada di dalam area Point of Interest (POI) di Timeframe yang lebih besar (HTF), seperti FVG atau Order Block di area *Discount*. Atau, harga baru saja menyapu Liquidity di bawah (Sell-side Liquidity Sweep).
- **Candle Bearish Terakhir:** Saat harga turun ke area POI tersebut, perhatikan candle bearish (turun) terakhir yang terbentuk. Candle ini mewakili pesanan jual terakhir dari algoritma.
- **Penembusan (Breakout) dengan Body:** Segera setelah itu, muncul candle bullish (naik) yang pergerakannya cukup kuat (Displacement) hingga **Body (badan) candle tersebut ditutup (Close) di atas harga Open/High dari candle bearish terakhir tadi.**

**Analogi Sederhana:** Bayangkan candle bearish terakhir itu adalah "Tembok Pertahanan Terakhir" dari pasukan penjual (Seller). Ketika candle bullish berhasil ditutup di atas tembok itu, artinya markas penjual telah resmi direbut oleh pembeli (Buyer). Status pengiriman (State of Delivery) resmi berubah menjadi Bullish.

### Jangan Terkecoh oleh Sumbu (Wick)

Satu aturan emas dalam CISD: **Harus ditutup dengan Body Candle!**

Kalau harga hanya naik melewati candle bearish terakhir, tapi saat candle tersebut *Close* ternyata hanya meninggalkan sumbu panjang (wick) dan body-nya kembali turun ke bawah, **itu BUKAN CISD**. Itu hanyalah perburuan likuiditas tambahan (Liquidity Sweep), dan harga kemungkinan besar akan melanjutkan penurunannya.

### Cara Eksekusi (Entry)

Kalau kamu sudah melihat CISD Bullish yang valid di Timeframe Kecil (misal M5), apa yang harus dilakukan?

- Jangan langsung Buy (FOMO) saat candle tersebut ditutup. Harga biasanya sudah agak tinggi.
- Carilah **Fair Value Gap (FVG)** atau **Order Block (OB)** kecil yang baru saja tercipta dari gerakan naik (Displacement) tersebut.
- Pasang *Buy Limit* di area FVG atau OB tersebut, dengan Stop Loss (SL) di bawah Low terakhir.
- Tunggu harga melakukan *Retracement* (pullback) untuk menjemput order kamu, sebelum akhirnya terbang.

**Peringatan:** Kalau gerakan naik yang menembus candle bearish itu gerakannya pelan-pelan (cuma candle kecil-kecil, tidak ada FVG, tidak ada Displacement), lupakan saja. CISD yang bagus selalu ditandai dengan gerakan energi yang besar (Displacement) dari institusi.

← Change in State of Delivery
CISD Bearish →

<!-- CHAPTER_END: cisd-bullish.html -->

---

<!-- CHAPTER_START: context-is-king.html | TITLE: Context is King -->
## Context is King

## Context is King

> [!NOTE]
> IkhtisarDi dunia trading, apalagi saat belajar ICT, ada satu mantra sakti yang harus selalu kamu ingat: **"Context is King" (Konteks adalah Raja)**. Sebagus apa pun setup atau indikator yang kamu temukan, kalau konteks pasarnya tidak mendukung, kemungkinan besar kamu akan rugi.

### Apa Itu Konteks (Context) dalam Trading?

Konteks adalah **"cerita" besar di balik pergerakan harga saat ini**. Konteks menjawab pertanyaan-pertanyaan fundamental: Harga sedang berada di mana? Siapa yang sedang memegang kendali? Dan yang paling penting: Harga mau pergi ke mana?

Bayangkan kamu sedang menyetir mobil. "Setup" atau "Pola Entry" itu seperti menekan pedal gas. Tetapi "Konteks" adalah melihat jalan di depanmu: apakah jalanannya lurus, berlubang, atau ada tembok besar di depan? Percuma menekan pedal gas kuat-kuat kalau di depan ada jurang. Itulah mengapa Konteks lebih penting daripada sekadar mencari pola untuk masuk (entry).

### Kenapa Setup Bisa Gagal? Karena Konteksnya Salah

Banyak pemula di SMC atau ICT terjebak pada hafalan pola. Mereka melihat sebuah pola seperti *Fair Value Gap* (FVG) atau *Order Block* (OB), lalu langsung entry tanpa berpikir panjang.

Padahal, FVG atau OB hanyalah alat (tools). Tidak semua FVG harus di-trade. Tidak semua OB akan memantulkan harga.

- **Tanpa Konteks:** Kamu melihat FVG, langsung Buy. Ternyata harga bablas turun (SL).
- **Dengan Konteks:** Kamu melihat FVG. Tapi kamu sadar tren di Timeframe besar (HTF) sedang turun sangat kuat, dan harga sedang menuju area target (liquidity) di bawah. FVG yang kamu lihat hanyalah jebakan untuk merayu pembeli ritel. Kamu tidak jadi Buy, dan terhindar dari kerugian.

**Analogi Sederhana:** Setup / Pattern itu ibarat pisau dapur yang tajam. Sangat berguna kalau dipakai di dapur untuk memotong sayur (Konteks Benar). Tapi kalau dibawa ke kolam renang (Konteks Salah), pisau itu tidak ada gunanya sama sekali dan malah membahayakan dirimu.

### Tiga Pertanyaan Utama untuk Menentukan Konteks

Sebelum kamu mencari posisi Entry, pastikan kamu bisa menjawab 3 pertanyaan ini dengan melihat chart di Timeframe yang lebih besar (misal H4 atau Daily):

- **Ke mana harga sedang ditarik (Draw on Liquidity)?** Apakah harga sedang mengejar High sebelumnya, atau Low sebelumnya?
- **Apakah kita berada di area Diskon atau Premium?** Kalau kita yakin harga mau naik (Bullish), pastikan kita mencari buy di area Diskon (murah). Jangan buy di pucuk (Premium).
- **Apakah waktu eksekusinya tepat? (Time & Price)** Apakah ini terjadi saat sesi London atau New York Killzone, atau malah di jam-jam mati di mana market cuma sideways?

### Kesimpulan: Berhenti Menjadi "Pattern Hunter"

Trader yang sering rugi biasanya adalah *Pattern Hunter*—pencari pola. Mereka buka chart M15 atau M5, mencari pola FVG atau Engulfing, lalu langsung entry.

Mulai sekarang, ubah cara pandangmu. Jadilah **Context Reader (Pembaca Konteks)**. Baca dulu cerita besarnya di Timeframe besar (HTF). Kalau cerita besarnya mendukung harga untuk naik, baru turun ke Timeframe kecil (LTF) untuk mencari setup atau pola Buy.

**Ingat:** Setup yang jelek di dalam Konteks yang bagus masih bisa menghasilkan profit. Tapi Setup yang sempurna di dalam Konteks yang salah, hampir pasti berakhir Stop Loss (SL). **Context is King!**

← Apa Itu ICT
HTF dan LTF →

<!-- CHAPTER_END: context-is-king.html -->

---

<!-- CHAPTER_START: fvg-sebagai-entry-area.html | TITLE: FVG sebagai Entry Area -->
## FVG sebagai Entry Area

## FVG sebagai Entry Area

> [!NOTE]
> IkhtisarSetelah kita belajar mengenali arah (Context) dan tanda pembalikan arah (CISD & MSS), pertanyaan selanjutnya adalah: **Di mana tepatnya kita masuk (Entry)?** Salah satu senjata andalan di ICT adalah menggunakan **Fair Value Gap (FVG)** sebagai area Entry.

### Mengingat Kembali FVG

FVG adalah celah yang tercipta dari formasi 3 candle. Celah ini terjadi ketika candle kedua bergerak sangat panjang dan cepat (Displacement), sehingga sumbu dari candle pertama dan sumbu dari candle ketiga tidak saling bersentuhan.

Dalam kacamata algoritma, celah ini adalah area yang "tidak efisien" (Inefficiency). Harga melompat terlalu cepat, sehingga pesanan tidak terisi penuh. Oleh karena itu, **algoritma memiliki kecenderungan kuat untuk menarik harga kembali (retrace) ke area celah ini untuk menyeimbangkannya** sebelum melanjutkan perjalanan.

### Mengapa FVG Sangat Bagus untuk Entry?

- **Presisi Tinggi:** FVG memberikan batas area yang sangat jelas di chart, sehingga kamu tahu persis di mana harus meletakkan *Limit Order*.
- **Stop Loss Kecil:** Karena FVG seringkali terbentuk di Timeframe kecil setelah MSS, kamu bisa memasang Stop Loss (SL) tepat di bawah/di atas struktur ayunan (Swing) terakhir dengan jarak yang sangat tipis.
- **Konfirmasi Institusi:** FVG hanya terbentuk jika ada volume uang yang sangat besar masuk ke pasar secara tiba-tiba (Displacement). Dengan menumpang di FVG, kamu memastikan bahwa kamu berenang bersama paus, bukan ikan teri.

> [!NOTE]
> AnalogiBayangkan kamu sedang mengecat dinding rumah dengan kuas besar. Kalau kamu mengayunkan kuas terlalu cepat, pasti ada bagian dinding yang bolong-bolong tidak terkena cat (FVG). Mau tidak mau, kamu harus menarik kuasmu kembali ke area yang bolong itu untuk menambalnya, barulah kamu bisa lanjut mengecat bagian lain.

### Cara Entry menggunakan FVG

Mari kita rangkum SOP (Standar Operasional Prosedur) untuk Entry dengan FVG:

- **Tunggu Setup:** Pastikan harga sudah menyapu Likuiditas (Sweep) dan terjadi MSS yang Valid.
- **Cari FVG:** Temukan celah (FVG) yang tercipta di dalam kaki pergerakan MSS tersebut. Jika ada lebih dari satu FVG, pilih FVG yang berada di area *Discount* (untuk Buy) atau *Premium* (untuk Sell).
- **Pasang Order:** Pasang Buy Limit / Sell Limit tepat di ujung awal FVG. (Beberapa trader yang lebih konservatif membagi ordernya di 50% area FVG atau yang disebut *Consequent Encroachment*).
- **Pasang Stop Loss (SL):** Letakkan SL sedikit di bawah Low terakhir (untuk Buy) atau di atas High terakhir (untuk Sell).
- **Take Profit (TP):** Targetkan Likuiditas terdekat (Swing High / Swing Low berikutnya) yang belum tersapu.

**Jebakan Pemula:** Kesalahan fatal pemula adalah melihat FVG di tengah jalan (tanpa didahului Sweep atau MSS), lalu langsung pasang Limit Order di sana. Ingat, FVG di area yang salah sering kali digunakan algoritma sebagai "target penembusan", bukan tempat memantul. **Context is King!**

← Sweep lalu MSS
OB + FVG Combination →

<!-- CHAPTER_END: fvg-sebagai-entry-area.html -->

---

<!-- CHAPTER_START: htf-dan-ltf.html | TITLE: HTF dan LTF -->
## HTF dan LTF

## HTF dan LTF

> [!NOTE]
> IkhtisarDalam analisis teknikal, melihat chart dari satu sudut pandang saja sama seperti melihat dunia lewat lubang kunci. Kamu butuh kacamata pembesar dan teropong jarak jauh secara bergantian. Inilah pentingnya memahami **HTF (Higher Timeframe)** dan **LTF (Lower Timeframe)**.

### Apa itu HTF dan LTF?

**HTF (Higher Timeframe)** adalah kerangka waktu besar. Biasanya meliputi Daily (D1), 4 Jam (H4), atau 1 Jam (H1). Di HTF, kita bisa melihat gambaran besar atau "Hutan" secara keseluruhan.

**LTF (Lower Timeframe)** adalah kerangka waktu kecil, seperti 15 Menit (M15), 5 Menit (M5), atau bahkan 1 Menit (M1). Di LTF, kita bisa melihat detail mikroskopis dari pergerakan harga, atau ibaratnya melihat "Pohon" dan daun-daunnya.

> [!NOTE]
> AnalogiBayangkan kamu sedang berada di Google Maps. HTF adalah saat kamu zoom-out melihat seluruh peta kota (menentukan arah dari Jakarta ke Bandung). LTF adalah saat kamu zoom-in melihat jalan-jalan kecil, belokan, dan kemacetan secara detail untuk menentukan kapan harus berbelok masuk ke gang.

### Pembagian Tugas: HTF untuk Arah, LTF untuk Eksekusi

Kesalahan fatal pemula adalah mencari arah tren di LTF. Saat melihat M5 sedang naik tajam, mereka pikir harga akan terbang ke bulan. Padahal di Daily (HTF), harga baru saja menyentuh area *Resistance / Premium* yang sangat kuat dan siap untuk turun.

Berikut adalah cara kerja yang benar (Top-Down Analysis):

- **Gunakan HTF untuk menentukan Bias (Arah).** Cari tahu di mana Liquidity berada di Daily atau H4. Apakah harga sedang mengejar High (Bullish) atau Low (Bearish)?
- **Gunakan HTF untuk menandai POI (Point of Interest).** Tandai area FVG atau Order Block di H4 atau H1. Jangan lakukan apa-apa sampai harga menyentuh area tersebut.
- **Gunakan LTF untuk Konfirmasi dan Entry.** Setelah harga masuk ke POI HTF kamu, turunlah ke M15 atau M5. Tunggu sampai terjadi perubahan karakter (seperti MSS atau CISD) di LTF untuk mencari konfirmasi entry dengan risiko (SL) yang kecil.

### Kenapa Kita Butuh LTF?

Kalau kita sudah tahu arah dari HTF, kenapa tidak langsung entry saja di HTF?

Jawabannya: **Risk to Reward (R:R)**. Stop Loss (SL) di Timeframe H4 atau Daily sangatlah lebar. Kalau kamu salah, modalmu bisa tergerus habis. Dengan menggunakan LTF (misal M5) saat harga masuk ke area HTF, kamu bisa menemukan area FVG kecil yang membuat batas Stop Loss menjadi sangat sempit, sehingga potensi keuntungan (Reward) kamu bisa jauh lebih besar (misalnya 1:3 atau 1:5).

### Jebakan "Fractal"

Pasar itu bersifat **Fractal**. Artinya, pola yang terjadi di Daily juga akan terjadi di M1. Kamu akan melihat MSS, FVG, dan Order Block di semua timeframe.

**Awas Jebakan:** Jangan men-trade setiap FVG atau OB yang muncul di M1 atau M5! Tanpa dukungan cerita dari HTF, pola-pola di LTF itu hanyalah *noise* (kebisingan) belaka dan sangat mudah ditembus (disapu). Selalu ingat: **LTF harus tunduk pada narasi HTF.**

Mulai sekarang, biasakan diri: Buka chart D1 atau H4 dulu, baca ceritanya, baru turun ke H1 atau M15. Jangan terbalik!

← Context is King
Price Delivery →

<!-- CHAPTER_END: htf-dan-ltf.html -->

---

<!-- CHAPTER_START: mss-yang-valid.html | TITLE: MSS yang Valid -->
## MSS yang Valid

## MSS yang Valid

> [!NOTE]
> IkhtisarKalau CISD adalah tanda-tanda awal perubahan arah, maka **MSS (Market Structure Shift)** adalah konfirmasi resmi bahwa tren (struktur pasar) benar-benar telah bergeser. MSS adalah momen di mana harga tidak sekadar memecah satu candle, tapi memecah struktur Swing utuh.

### Apa Beda Break of Structure (BOS) dan MSS?

Di banyak materi SMC, kamu akan mendengar BOS dan CHoCH (Change of Character). Di dunia ICT, kita lebih sering menggunakan istilah **MSS (Market Structure Shift)** untuk menandakan perubahan tren yang sesungguhnya.

- **BOS (Break of Structure):** Harga menembus struktur searah dengan tren. Contoh: Tren sedang naik (Bullish), lalu harga menembus Swing High untuk membuat Higher High (HH) baru. Ini namanya BOS.
- **MSS (Market Structure Shift):** Harga menembus struktur berlawanan arah dari tren sebelumnya. Contoh: Tren sedang naik, membuat Higher Low (HL), lalu tiba-tiba harga terjun menembus HL tersebut. Ini adalah MSS Bearish.

### Syarat MSS yang Valid

Tidak semua tembusan itu MSS. Seringkali itu hanya Liquidity Sweep (harga menembus sedikit hanya untuk memakan Stop Loss, lalu kembali ke arah semula). Agar MSS valid, perhatikan 3 syarat ini:

- **Harus Terjadi Setelah Mengambil Liquidity:** MSS yang paling kuat adalah yang terjadi SETELAH harga menyapu *Liquidity Pool* utama atau menyentuh HTF POI. Kalau MSS terjadi di tengah-tengah tanpa tujuan jelas, itu kemungkinan MSS palsu.
- **Harus Ada Displacement (Gerakan Kuat):** Saat harga menembus Swing Low/High, gerakannya harus kencang. Harus ada candle-candle besar yang percaya diri (seringkali meninggalkan FVG). Kalau tembusnya pelan-pelan merayap, jangan dipercaya.
- **Harus Close Body (Opsional tapi Disarankan):** Untuk pemula, sangat disarankan mencari MSS yang mana body candle-nya ditutup (Close) melewati Swing point tersebut. Kalau cuma sumbu (Wick) yang lewat, anggap saja itu *Sweep*, bukan MSS.

> [!NOTE]
> AnalogiBayangkan tembok bendungan. Kalau air merembes pelan-pelan melewati batas tembok (tembus pelan), bendungan masih aman. Tapi kalau tiba-tiba ada ombak raksasa yang menjebol tembok sampai pecah berantakan (Displacement), itu berarti pertahanan bendungan sudah hancur total (MSS valid).

### Cara Menggunakan MSS untuk Entry

MSS bukanlah sinyal Entry langsung. MSS adalah tanda bahwa kamu sudah boleh **mencari setup**. Langkahnya:

- Tunggu sampai Swing High/Low ditembus dengan Displacement kuat (MSS Valid).
- Identifikasi **Fair Value Gap (FVG)** atau **Order Block (OB)** yang tercipta tepat sebelum atau di dalam gerakan Displacement tersebut.
- Pasang Limit Order di FVG/OB tersebut.
- Biarkan harga Retrace (kembali) menjemput order-mu dan saksikan harga melanjutkan tren barunya.

**Ingat:** MSS harus memecah Swing Point yang valid, bukan sekadar memecah sembarang candle. Cari pola "V" atau "Λ" yang jelas di chart untuk menentukan Swing Low dan Swing High.

← CISD Bearish
Sweep lalu MSS →

<!-- CHAPTER_END: mss-yang-valid.html -->

---

<!-- CHAPTER_START: ob-fvg-combination-kombinasi-maut.html | TITLE: OB + FVG Combination (Kombinasi Maut) -->
## OB + FVG Combination (Kombinasi Maut)

## OB + FVG Combination (Kombinasi Maut)

> [!NOTE]
> IkhtisarDi dunia ICT, mencari FVG untuk Entry itu bagus. Mencari Order Block (OB) untuk Entry juga bagus. Tapi, tahukah kamu apa yang jauh lebih bagus? Ketika Order Block (OB) dan Fair Value Gap (FVG) muncul secara bersamaan di tempat yang sama! Kombinasi inilah yang sering disebut sebagai setup "Kombinasi Maut" probabilitas tinggi.

### Mengingat Order Block (OB)

Order Block adalah candle berlawanan arah terakhir sebelum terjadinya pergerakan harga yang kuat (Displacement) yang menyebabkan struktur pasar pecah (MSS). Order Block menyimpan banyak pesanan (orders) institusi yang tertinggal.

Banyak trader yang mengeluh: *"Aku pasang Limit di Order Block, tapi harganya nggak pernah nyampe situ. Malah mantul duluan!"* atau sebaliknya, *"Aku pasang di Order Block, malah ditembus bablas sampai Stop Loss."*

### Kekuatan Gabungan: OB + FVG

Untuk menghindari masalah di atas, para trader ICT profesional biasanya memfilter Order Block mereka. Mereka **HANYA** memilih Order Block yang diikuti langsung oleh Fair Value Gap (FVG).

Jika setelah Order Block tercipta sebuah FVG, ini menandakan bahwa tekanan institusi sangat kuat (ada injeksi uang yang besar dan tiba-tiba). FVG ini bertindak seperti "magnet" yang akan menarik harga kembali (retrace), sementara Order Block bertindak sebagai "tembok beton" yang akan memantulkan harga tersebut.

> [!NOTE]
> AnalogiBayangkan sebuah trampolin. FVG adalah gravitasi yang menarikmu jatuh kembali setelah melompat. Sedangkan Order Block adalah jaring trampolin yang tebal di bawah sana. Begitu gravitasi (FVG) menarikmu ke bawah dan kakimu menyentuh jaring trampolin (Order Block), kamu akan langsung memantul tinggi ke atas. Keduanya bekerja sama dengan sempurna.

### Cara Menggunakan Kombinasi Ini

- **Konfirmasi Tren:** Pastikan kamu sudah berada di dalam POI Timeframe Besar dan sudah terjadi Sweep + MSS.
- **Temukan OB yang Valid:** Cari candle terakhir (Bearish untuk setup Buy, Bullish untuk setup Sell) sebelum terjadinya Displacement kuat.
- **Cek Ketersediaan FVG:** Pastikan tepat setelah candle OB tersebut, tercipta celah FVG yang jelas. (Candle yang menembus OB harus memiliki celah yang tidak tersentuh sumbu).
- **Eksekusi:**
Cara Agresif: Entry (Buy/Sell Limit) tepat di batas dimulainya FVG.
Cara Konservatif / Presisi: Entry (Buy/Sell Limit) di batas awal Order Block. Area di mana FVG bertemu (overlap) dengan Order Block adalah *sweet spot* untuk entry.
- Cara Agresif: Entry (Buy/Sell Limit) tepat di batas dimulainya FVG.
- Cara Konservatif / Presisi: Entry (Buy/Sell Limit) di batas awal Order Block. Area di mana FVG bertemu (overlap) dengan Order Block adalah *sweet spot* untuk entry.
- **Stop Loss:** Letakkan SL sedikit di bawah ujung dari Order Block (atau di bawah Swing Low terakhir).

Dengan menguasai kombinasi **Sweep + MSS + OB + FVG**, kamu telah mengantongi satu setup lengkap (A+ Setup) yang bisa kamu gunakan secara konsisten di chart apa pun, mulai dari Forex, Gold (XAUUSD), hingga Kripto.

← FVG sebagai Entry Area
Apa Itu Daily Bias →

<!-- CHAPTER_END: ob-fvg-combination-kombinasi-maut.html -->

---

<!-- CHAPTER_START: price-delivery.html | TITLE: Price Delivery -->
## Price Delivery

## Price Delivery

> [!NOTE]
> IkhtisarMari kita bahas tentang **Price Delivery** (Pengiriman Harga). Kalau kamu sudah paham Konteks (Context is King), kamu akan sadar bahwa pergerakan harga di chart itu tidak pernah kebetulan. Harga tidak sedang "menebak" arah, tapi sedang "dikirim" menuju target yang sudah ditentukan.

### Cara Algoritma Mengirimkan Harga

Konsep ICT percaya bahwa harga (Price) dikendalikan oleh algoritma. Algoritma ini memiliki satu tugas utama: **memberikan (deliver) harga dengan seefisien mungkin dan mencari likuiditas.**

Harga hanya akan bergerak dari dan ke dua tempat ini:

- **Liquidity (Likuiditas):** Area di mana banyak uang terkumpul (Stop Loss ritel di atas High atau di bawah Low).
- **Imbalance / Inefficiency (FVG):** Celah kosong di mana harga bergerak terlalu cepat (hanya ada pembeli, tidak ada penjual, atau sebaliknya), sehingga harga perlu kembali untuk "menyeimbangkan" area tersebut.

> [!NOTE]
> AnalogiBayangkan kurir paket. Dia mengambil barang di Gudang A (Premium/Resistance), lalu harus mengantarkannya ke Gudang B (Discount/Support). Di tengah jalan, mungkin dia mampir sebentar ke pom bensin (FVG) untuk isi bahan bakar. Tapi tujuan utamanya jelas: Gudang B. Harga juga seperti kurir itu, selalu punya titik tujuan (Draw on Liquidity).

### Siklus Price Delivery

Secara umum, Price Delivery selalu berputar pada siklus ini:

- **Consolidation (Konsolidasi):** Algoritma sedang menumpuk pesanan (build up orders). Trader ritel mulai menempatkan Support dan Resistance, mengumpulkan Liquidity di atas dan di bawah.
- **Expansion / Displacement:** Harga tiba-tiba bergerak sangat cepat menembus satu arah. Inilah saat algoritma mulai "mengirim" harga menuju target Likuiditas di sisi lainnya, seringkali meninggalkan FVG.
- **Retracement:** Harga kembali (pullback) sebentar, biasanya untuk menutupi FVG atau masuk ke area Order Block, sebelum melanjutkan perjalanannya.
- **Reversal:** Harga telah mencapai target akhirnya (misalnya mengambil Liquidity besar di Daily), lalu berbalik arah sepenuhnya.

### Dari BSL ke SSL

Algoritma memindahkan harga dari *Buy-Side Liquidity* (BSL) ke *Sell-Side Liquidity* (SSL), dan sebaliknya.

Kalau harga baru saja menyapu habis BSL (Liquidity yang ada di atas High sebelumnya), apa tujuan selanjutnya? Algoritma biasanya akan mencari SSL (Liquidity di bawah Low). Kalau kamu tahu ini, kamu tidak akan nekat *Buy* saat harga baru saja mengambil BSL di puncak, karena harga sedang bersiap dikirim (delivered) ke bawah.

### Kesimpulan

Memahami Price Delivery berarti memahami niat pasar. Tanyakan selalu saat membuka chart: *"Harga baru saja datang dari mana? Dan dia mau dikirim ke mana?"* Kalau kamu belum bisa menjawab dua pertanyaan itu, jangan memaksakan diri untuk menekan tombol Buy atau Sell.

← HTF dan LTF
Change in State of Delivery →

<!-- CHAPTER_END: price-delivery.html -->

---

<!-- CHAPTER_START: sweep-lalu-mss.html | TITLE: Sweep lalu MSS -->
## Sweep lalu MSS

## Sweep lalu MSS

> [!NOTE]
> IkhtisarSalah satu pola *setup* paling probabilitas tinggi (High Probability) dalam konsep ICT adalah pola **Sweep lalu MSS** (Menyapu Likuiditas, kemudian terjadi Market Structure Shift). Ini adalah pola yang sering dicari oleh para trader profesional.

### Mengapa Setup ini Sangat Kuat?

Market membutuhkan bahan bakar untuk bergerak. Bahan bakar itu bernama Likuiditas (Stop Loss dari trader ritel). Pola "Sweep lalu MSS" menceritakan kisah yang sempurna tentang bagaimana institusi / algoritma bekerja:

- **Tahap 1 - Jebakan (The Sweep):** Algoritma sengaja mendorong harga melewati level Support atau Resistance penting. Tujuannya memicu Stop Loss dan mengundang *breakout trader* untuk masuk. Di chart, ini terlihat seperti penembusan palsu (Fakeout), biasanya hanya meninggalkan sumbu panjang (Wick).
- **Tahap 2 - Perubahan Arah (The MSS):** Setelah berhasil mengumpulkan pesanan (bahan bakar), harga tiba-tiba berbalik arah dengan sangat keras (Displacement) dan memecah Swing Structure yang berlawanan (terjadi MSS).
- **Tahap 3 - Kesempatan Kita (The Retrace):** Trader ritel yang tadi terkena jebakan sedang panik. Saat harga kembali sedikit ke area FVG (Retrace), itulah tempat kita untuk masuk (Entry) dengan arah yang benar.

> [!NOTE]
> AnalogiBayangkan seorang pemanah. Untuk menembakkan anak panah ke depan (MSS), dia harus menarik tali busurnya jauh ke belakang terlebih dahulu (Sweep). Semakin kuat dia menarik tali ke belakang (menyapu banyak likuiditas), semakin kuat anak panah itu melesat ke depan (Displacement).

### Cara Mengidentifikasi di Chart

Untuk melatih mata, coba cari urutan kejadian ini di Timeframe Kecil (M5 atau M15), saat harga berada di dalam POI Timeframe Besar:

- **Untuk Setup Buy (Long):** Harga turun menembus *Previous Daily Low* atau *Asian Session Low*. Tapi saat candle ditutup, hanya berupa ekor (Wick Sweep). Tiba-tiba harga melesat naik dengan kuat dan memecah Swing High terakhir (MSS Valid). Tunggu harga turun ke FVG untuk Buy.
- **Untuk Setup Sell (Short):** Harga naik menembus *Previous Daily High* atau *Equal Highs* (Wick Sweep). Lalu harga jatuh keras memecah Swing Low terakhir (MSS Valid). Tunggu harga naik ke FVG untuk Sell.

### MSS Tanpa Sweep = Lemah

Apa jadinya kalau terjadi MSS, tapi sebelumnya harga tidak menyapu likuiditas apa pun (tidak ada Sweep)?

Biasanya, itu adalah MSS probabilitas rendah. Karena algoritma belum mengumpulkan cukup "bahan bakar", gerakan (Displacement) yang terjadi mungkin tidak akan jauh, dan harga justru akan kembali untuk melakukan Sweep yang sebenarnya (menjadikan posisi kamu sebagai bahan bakarnya).

**Rule Emas:** *No Sweep, No Trade.* Biasakan diri untuk mencari ekor (wick) yang menyapu level penting sebelum kamu mencari pola MSS atau FVG.

← MSS yang Valid
FVG sebagai Entry Area →

<!-- CHAPTER_END: sweep-lalu-mss.html -->

---
