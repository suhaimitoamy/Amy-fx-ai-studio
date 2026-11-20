# Backtesting dan Jurnal
> Modul Edukasi Amy FX Pro — bagian-14-backtesting-dan-jurnal
> Total Bab: 11 Bab | Format: Editable Markdown for Google AI Studio

---

<!-- CHAPTER_START: apa-itu-backtesting.html | TITLE: Apa Itu Backtesting -->
## Apa Itu Backtesting

## Apa Itu Backtesting

> [!NOTE]
> IkhtisarBayangkan kamu adalah seorang pelatih sepak bola yang sedang menyusun strategi untuk pertandingan final. Apakah kamu akan langsung menyuruh pemainmu turun ke lapangan tanpa pernah mencoba strategi tersebut saat latihan? Tentu saja tidak! Kamu pasti akan menguji strategi tersebut, melihat rekaman pertandingan lama, dan menganalisis apakah formasi yang kamu buat benar-benar efektif melawan pola serangan lawan.

Dalam dunia trading, proses menguji strategi pada data masa lalu itulah yang disebut dengan **Backtesting**. Backtesting adalah jembatan antara sekadar belajar teori dan menjadi trader yang benar-benar berkembang serta mandiri. Tanpa melakukan backtesting, kamu seolah-olah sedang bermain tebak-tebakan di pasar finansial yang keras.

### Memahami Konsep Dasar Backtesting

Secara sederhana, backtesting adalah proses pengujian sebuah sistem atau strategi trading menggunakan data historis (data harga di masa lalu) untuk melihat bagaimana performa strategi tersebut seandainya kamu menerapkannya di masa itu. Kita "memutar kembali waktu" pada chart, lalu menjalankan rule trading kita seolah-olah kita sedang trading secara langsung (live).

Banyak trader pemula hanya mengandalkan ingatan atau sekadar "melihat sekilas" pada chart lalu menyimpulkan, *"Oh, kalau ada pola ini, harga pasti naik!"* Ini adalah kesalahan fatal. Memori trader itu sangat subjektif dan seringkali tidak jujur. Saat kita profit, kita merasa strategi kita paling hebat sedunia. Saat kita loss, kita merasa pasar sengaja memanipulasi kita (atau menyalahkan broker). Padahal, yang sebenarnya kita butuhkan adalah **data objektif**.

> [!NOTE]
> NoteYang tidak dicatat akan sangat sulit diperbaiki. Yang tidak diukur akan mustahil untuk dikembangkan. Backtesting memberikan angka pasti, bukan sekadar perasaan.

### Mengapa Backtesting Adalah "Cheat Code" dalam Trading?

Jika kamu bertanya kepada trader-trader profesional apa rahasia mereka bisa konsisten, hampir semuanya akan menjawab bahwa mereka sangat mengenal strategi yang mereka gunakan luar dan dalam. Bagaimana mereka bisa sangat mengenalnya? Jawabannya adalah ribuan jam melakukan backtesting.

#### 1. Membangun Kepercayaan Diri (Confidence)

Ketika kamu mengalami tiga kali loss beruntun (losing streak), apa yang biasanya kamu rasakan? Panik? Ingin ganti strategi? Atau malah balas dendam ke pasar (revenge trading)? Hal ini terjadi karena kamu tidak tahu statistik strategi kamu.

Jika kamu sudah melakukan backtesting pada 100 setup, dan data menunjukkan bahwa probabilitas menangnya (win rate) adalah 60% dan sangat wajar terjadi 4 kali loss beruntun sebelum akhirnya profit besar menutupi semua kerugian, maka saat kamu mengalami 3 kali loss beruntun di live account, kamu akan tetap tenang. Kamu tahu bahwa itu hanyalah bagian dari statistik. Kepercayaan diri ini hanya bisa didapat dari melihat data hasil backtesting.

#### 2. Menemukan Kelemahan Strategi Tanpa Risiko Kehilangan Uang

Backtesting adalah tempat yang aman untuk salah. Kamu bisa menguji berbagai macam ide liar, mengubah aturan Stop Loss, menyesuaikan jam trading, tanpa harus kehilangan satu sen pun uang sungguhan. Kamu bisa tahu bahwa strategi A ternyata hancur lebur jika dipakai saat sesi Asia, dan sangat profitable jika dipakai di sesi New York. Informasi mahal ini kamu dapatkan secara gratis hanya dengan meluangkan waktu.

#### 3. Melatih Mata dan Pengenalan Pola (Pattern Recognition)

Semakin sering kamu melihat setup strategi kamu terbentuk di chart masa lalu, semakin tajam mata kamu dalam mengenali setup tersebut secara real-time. Ini seperti *muscle memory*. Saat momen itu muncul di live market, kamu tidak lagi ragu-ragu atau berpikir terlalu panjang karena otakmu sudah melihat pola yang sama ratusan kali saat backtesting.

### Cara Pandang yang Benar Saat Melakukan Backtesting

Banyak orang gagal melakukan backtesting dengan benar karena mereka bias. Mereka hanya memilih-milih (cherry-picking) contoh-contoh chart di mana strategi mereka bekerja dengan sempurna, dan secara sengaja mengabaikan momen di mana strategi mereka gagal atau terkena Stop Loss.

Ketika kamu melakukan backtesting, kamu harus menjadi seorang ilmuwan yang objektif. Ambil data secara berurutan, dari bulan Januari sampai Desember misalnya. Jangan lompati hari-hari di mana pasar sedang jelek. Ikuti aturan (rules) strategimu dengan sangat kaku. Catat hasilnya apa adanya. Di situlah kamu baru bisa melihat apakah strategi tersebut benar-benar memiliki "edge" (keunggulan matematis) atau cuma kebetulan terlihat bagus pada tren tertentu saja.

### Apa Saja yang Harus Dicatat Saat Backtesting?

Jangan hanya mencatat apakah setup itu "Win" atau "Loss". Catatan yang baik harus menceritakan keseluruhan kronologi. Berikut adalah beberapa elemen penting yang harus kamu catat:

* **Tanggal dan Jam:** Kapan setup ini muncul? Ini berguna untuk mengetahui di sesi mana strategi ini paling efektif.

* **Timeframe dan Kondisi Market:** Apakah pasar sedang trending, ranging, atau choppy? Apa bias di timeframe besar (HTF)?

* **Alasan Entry:** Tuliskan dengan jelas kenapa kamu mengambil posisi tersebut. (Misal: Harga masuk ke zona Order Block M15 setelah mengambil liquidity, lalu ada konfirmasi perubahan karakter/CHoCH di M1).

* **Parameter Risiko:** Berapa pips Stop Loss-nya? Berapa pips Take Profit-nya? Berapa rasio Risk:Reward (RR) yang didapat?

* **Hasil (Outcome):** Apakah terkena TP penuh, terkena SL, atau ditutup manual (breakeven)?

### Kesimpulan

Tujuan utama dari mempelajari Apa Itu Backtesting bukan untuk membuat kamu sibuk dengan tugas administrasi mencatat angka-angka. Tujuannya adalah untuk mengubahmu dari seorang penjudi yang hanya menebak arah pasar, menjadi seorang pengusaha trading yang mengambil keputusan berdasarkan data statistik yang solid.

Jika data backtesting menunjukkan hasil yang bagus, kamu bisa melangkah ke tahap selanjutnya dengan yakin. Jika datanya buruk, kamu bisa memperbaiki rules tanpa harus kehilangan modal. Jadi, mulai sekarang, berhentilah berasumsi dan mulailah mengumpulkan datamu sendiri!

<!-- CHAPTER_END: apa-itu-backtesting.html -->

---

<!-- CHAPTER_START: cara-backtest-manual.html | TITLE: Cara Backtest Manual -->
## Cara Backtest Manual

## Cara Backtest Manual

> [!NOTE]
> IkhtisarSetelah kamu mengerti mengapa backtesting itu wajib, pertanyaan selanjutnya adalah: "Lalu, bagaimana cara memulainya?" Bagi pemula, tidak perlu langsung membeli perangkat lunak (software) backtesting yang mahal atau belajar coding untuk membuat robot. Cara paling efektif untuk belajar di awal adalah dengan Backtest Manual.

Backtest manual berarti kamu sendiri yang menggeser chart ke masa lalu, mengamati pergerakan harga satu per satu (seolah-olah sedang *live*), mencari setup sesuai dengan strategi kamu, lalu mencatat hasilnya. Proses ini sedikit memakan waktu, tapi dampaknya terhadap "jam terbang" visualmu (screen time) sangatlah luar biasa.

### Persiapan Sebelum Memulai

Sebelum kamu membuka chart, pastikan tiga hal ini sudah siap:

- **Platform Charting:** Gunakan TradingView. Kamu bisa menggunakan fitur *Bar Replay* (memotong chart masa depan) jika kamu pengguna berbayar. Jika gratisan, kamu cukup menggeser chart ke kiri secara manual dan perlahan menggesernya ke kanan dengan tombol panah (Arrow Right) di keyboard.
- **SOP (Standard Operating Procedure) yang Jelas:** Jangan backtest hanya berdasarkan insting (feeling). Kamu harus punya aturan tertulis: Bagaimana cara menentukan arah (bias)? Apa konfirmasi entry-nya? Di mana letak SL dan TP? Jika aturannya masih mengambang, hasil backtest-mu tidak akan valid.
- **Alat Pencatat (Jurnal):** Siapkan Spreadsheet (Excel / Google Sheets) atau minimal buku catatan kosong.

### Langkah-langkah Eksekusi Backtest Manual

#### Langkah 1: Tentukan Batas Waktu Mundur

Pilih satu pair, misalnya EURUSD. Geser chart ke masa lalu (misal 3 bulan atau 6 bulan yang lalu). Jangan pilih-pilih bulan tertentu hanya karena grafiknya terlihat bagus. Turun di tanggal acak, lalu potong chart di area tersebut menggunakan *Bar Replay* (jika ada), atau sembunyikan sisi kanan layar dengan kertas agar matamu tidak "mencuri pandang" ke masa depan.

#### Langkah 2: Lakukan Analisa Top-Down

Mulailah dari Timeframe Besar (misalnya Daily atau H4) untuk menentukan Bias Harian. Apakah harga sedang tren naik (bullish), turun (bearish), atau ranging? Tentukan di mana area Liquidity atau Order Block yang mungkin dituju harga.

#### Langkah 3: Geser Harga Candle Demi Candle

Turun ke Timeframe eksekusi kamu (misalnya M15 atau M5). Tekan panah kanan (Right Arrow) di keyboard perlahan untuk memunculkan satu per satu candle baru. Amati bagaimana harga bergerak. Perhatikan waktu (sesi trading). Ingat, jika strategi kamu hanya beroperasi di Sesi London dan New York, abaikan pergerakan di Sesi Asia.

#### Langkah 4: Temukan Setup dan Ambil Keputusan

Ketika harga membentuk kriteria entry sesuai dengan SOP kamu, berhentilah menggeser chart! Gunakan *Long Position* atau *Short Position tool* di TradingView. Letakkan level Entry, Stop Loss, dan Take Profit di chart secara presisi sesuai aturanmu.

Setelah terpasang, barulah lanjutkan menggeser candle ke kanan untuk melihat apakah harga mengenai Entry kamu, lalu apakah berakhir menyentuh SL atau TP.

#### Langkah 5: Catat dan Evaluasi (Journaling)

Apapun hasilnya, **catat di jurnalmu**. Jangan abaikan trade yang rugi dengan alasan, *"Ah, yang ini nggak kehitung, aku salah lihat."* Masukkan ke data!

Catat tanggal, jam, RR, hasil akhir, serta ambil *screenshot* sebelum entry dan sesudah hasilnya keluar. Kamu butuh data mentah ini untuk dievaluasi nantinya.

> [!NOTE]
> TipSaat manual backtest, sangat wajar jika kamu menemukan "kebingungan" di awal. "Ini masuk setup nggak ya?" Kalau kamu bingung, berarti SOP strategimu kurang spesifik. Perjelas lagi aturannya.

### Target dari Latihan Ini

Lakukan proses ini secara berulang minimal untuk 100 kali setup (bukan 100 hari, tapi 100 kali mengambil peluang trading). Saat kamu sudah mencatat 100 *trades* dengan aturan yang persis sama, kamu baru bisa menilai apakah sistem trading tersebut layak dilanjutkan (profitable) atau harus dibuang.

Melalui Cara Backtest Manual, matamu akan sangat terbiasa mengenali pola (pattern recognition). Nantinya, saat kamu melihat pergerakan harga di *live market*, otakmu secara otomatis akan merespons dengan cepat karena sudah melihat pola yang sama terbentuk berulang-ulang di masa lalu.

<!-- CHAPTER_END: cara-backtest-manual.html -->

---

<!-- CHAPTER_START: cara-memasukkan-screenshot-di-jurnal.html | TITLE: Cara Memasukkan Screenshot di Jurnal -->
## Cara Memasukkan Screenshot di Jurnal

## Cara Memasukkan Screenshot di Jurnal

> [!NOTE]
> IkhtisarSebagai seorang trader, menyimpan screenshot dari chart (TradingView/MT4) adalah kewajiban mutlak. Untungnya, Obsidian dirancang sangat ramah untuk hal ini.

### ⚠️ PENTING: Atur Agar Gambar Masuk ke Folder 'images' Dulu!

Sebelum mulai *paste* gambar, Anda harus memastikan Obsidian secara otomatis melempar gambar baru ke folder `images` agar Vault Anda tidak berantakan.

- Buka **Settings** (Pengaturan ⚙️) di Obsidian.
- Pilih menu **Files and links** (File dan tautan).
- Cari opsi **Default location for new attachments** (Lokasi default untuk lampiran baru).
- Ubah opsinya menjadi **"In the folder specified below"** (Di dalam folder yang ditentukan di bawah ini).
- Pada kolom *Attachment folder path* yang muncul di bawahnya, ketik: **`images`** atau **`images/materi`**.

---

### Cara Memasukkan Gambarnya

#### Cara 1: Copy-Paste Langsung (Paling Cepat! ⚡)

Ini adalah cara yang paling sering digunakan para trader.

- Lakukan *Screenshot* atau klik tombol "Copy Chart Image" di TradingView.
- Buka catatan Obsidian Anda.
- Sentuh (atau klik kanan) di mana Anda ingin menaruh gambarnya, lalu pilih **Paste** (Tempel).

#### Cara 2: Pilih dari Galeri HP / Komputer (Insert Attachment)

Jika gambar sudah tersimpan di galeri HP Anda:

- Saat sedang mengedit catatan di Obsidian, perhatikan barisan tombol (menu) di atas keyboard Anda.
- Cari ikon **Klip Kertas (Paperclip)** 📎 atau ikon **Gambar** 🖼️.
- Klik ikon tersebut, lalu pilih gambar dari galeri HP Anda.
- Obsidian akan memasukkan kode seperti ini: ``. Saat Anda beralih ke mode baca, kode ini berubah jadi gambar asli.

---

> [!NOTE]
> Cara Mengatur Ukuran GambarTerkadang gambar yang dimasukkan terlalu besar hingga memenuhi layar. Anda bisa mengecilkan ukurannya dengan menambahkan garis tegak lurus `|` dan angka di dalam kurungnya.
> Contoh:
> Awalnya: ``
> Diubah jadi: `` (Ini akan membuat lebarnya menjadi 300 pixel, sehingga lebih rapi).

<!-- CHAPTER_END: cara-memasukkan-screenshot-di-jurnal.html -->

---

<!-- CHAPTER_START: demo-sebelum-live.html | TITLE: Demo Sebelum Live -->
## Demo Sebelum Live

## Demo Sebelum Live

> [!NOTE]
> IkhtisarBanyak trader pemula menganggap akun Demo (uang virtual) hanyalah mainan untuk anak-anak atau orang yang penakut. Mereka berpikir, "Saya tidak akan serius kalau pakai uang bohong. Langsung deposit saja supaya mental saya terbentuk!" Ini adalah salah satu kebohongan terbesar yang sering diyakini di dunia trading, dan biasanya berujung pada kebangkrutan akun (Margin Call) dalam hitungan minggu.

Kenyataannya, **Demo Sebelum Live** adalah tahapan krusial yang digunakan bahkan oleh trader institusional (bank atau *hedge fund*) sebelum mereka menerapkan algoritma atau strategi baru. Menggunakan akun demo bukanlah tanda kelemahan, melainkan tanda kedewasaan dan kecerdasan dalam mengelola risiko bisnis.

### Mengapa Harus Demo Dulu?

Bayangkan kamu sedang belajar mengendarai mobil balap. Apakah kamu akan langsung turun ke sirkuit Formula 1 bersama pembalap profesional lainnya di hari pertamamu? Pasti kamu akan masuk ke simulator dulu. Trading adalah profesi *high-performance*. Pasar (Market) adalah tempat yang kejam dan tidak kenal ampun. Berikut alasan mengapa kamu wajib pakai demo dulu:

#### 1. Menguasai Platform Trading Tanpa "Biaya Bodoh"

Banyak trader kehilangan uang bukan karena analisa mereka salah, tapi karena mereka **salah pencet**. Mereka ingin Buy, malah pencet Sell. Mereka ingin pasang Stop Loss di angka tertentu, tapi salah hitung desimal (Lot/Pipette) sehingga SL-nya jadi 10 kali lebih besar. Menggunakan akun demo (misalnya di MetaTrader 4/5 atau platform *Prop Firm*) memastikan jari dan matamu terbiasa dengan *interface* aplikasi, cara mengatur lot, dan cara memodifikasi order tanpa risiko kehilangan uang jajanmu.

#### 2. Memisahkan Proses Belajar dari Tekanan Uang

Saat kamu masih tahap belajar membaca *Order Block*, *Fair Value Gap (FVG)*, atau *Liquidity*, otakmu membutuhkan ketenangan untuk mencerna informasi. Jika kamu belajar menggunakan uang sungguhan, fokusmu tidak lagi pada *"Apakah setup ini valid?"*, melainkan berubah menjadi kepanikan *"Duh, uangku minus $10, minus $20, aduh bagaimana ini!"* Rasa takut kehilangan uang akan membuatmu buta terhadap chart.

Emosi (serakah dan takut) akan mematikan logika. Akun demo membantumu fokus 100% pada logika dan eksekusi strategi.

#### 3. Membuktikan Diri Sendiri (Self-Validation)

Jika kamu tidak bisa menghasilkan profit di akun demo di mana tidak ada tekanan emosional, **apa yang membuatmu berpikir kamu bisa profit di akun live?** Akun live jauh lebih berat karena ada tekanan psikologis. Akun demo adalah syarat kelulusan minimum.

### Cara Menggunakan Akun Demo dengan Benar

Banyak yang gagal di akun live padahal di akun demo mereka profit ribuan dolar. Masalahnya bukan pada akun demonya, tapi *cara* mereka menggunakannya. Agar latihanmu di akun demo efektif, ikuti aturan ini:

"Ah, akun $100,000 ini, lot 1.0 saja nggak kerasa"* akan merusak sistem Money Management-mu.
* **Gunakan Lot Sesuai Rencana:** Jangan gunakan lot sembarangan karena "uang virtual". Jika rencanamu adalah merisikokan 1% per trade, hitung lot-nya persis seperti kamu akan trading di akun live.

* **Catat Jurnalnya:** Perlakukan trade di akun demo layaknya akun live. Catat alasannya, ambil screenshot-nya, dan hitung persentase pertumbuhannya.

### Kapan Harus Pindah ke Akun Live?

Jangan berdiam di akun demo selamanya, karena akun demo tidak melatih emosimu secara maksimal. Kamu harus pindah ke akun live (atau akun Prop Firm kecil) **KETIKA** kamu sudah membuktikan 3 hal ini di akun demo:

- Kamu sudah melakukan minimal 30 - 50 trade di akun demo.
- Persentase kemenangan (Win Rate) dan Risk:Reward (RR) kamu menunjukkan hasil yang positif (kamu *profitable* di akhir bulan).
- Kamu merasa bosan. Ya, bosan! Saat eksekusi trading terasa membosankan karena kamu hanya melakukan rutinitas *"Tunggu setup -> Entry -> Pasang SL -> Tinggalkan"* tanpa rasa deg-degan, itu artinya kamu sudah siap mental.

### Kesimpulan

Akun demo adalah laboratorium tempat kamu meracik dan menyempurnakan strategimu. Jangan biarkan ego membuatmu melompati fase ini. Trader yang bijak akan menghabiskan waktu berbulan-bulan di akun demo untuk mengamankan uangnya, sedangkan trader amatir akan langsung deposit dan menghabiskan uangnya dalam beberapa hari. Pilih kamu mau jadi yang mana.

<!-- CHAPTER_END: demo-sebelum-live.html -->

---

<!-- CHAPTER_START: forward-testing.html | TITLE: Forward Testing -->
## Forward Testing

## Forward Testing

> [!NOTE]
> IkhtisarJika Backtesting adalah simulasi penerbangan di ruang kelas, maka Forward Testing adalah menerbangkan pesawat sungguhan di kondisi cuaca nyata, meskipun masih menggunakan simulator (akun demo) atau pesawat ringan (lot sangat kecil). Banyak trader merasa strategi mereka sudah sempurna saat backtesting, namun hancur berantakan saat dibawa ke dunia nyata. Mengapa? Karena ada satu variabel besar yang tidak ada di backtesting: Waktu Tunggu (Patience).

Saat backtesting manual, kamu bisa mempercepat waktu (fast forward) jika pasar sedang sepi. Kamu tidak merasakan kebosanan menunggu harga bergerak selama 4 jam. Namun di *live market*, satu candle H4 benar-benar butuh 4 jam untuk terbentuk! Di sinilah Forward Testing mengambil peran krusial.

### Apa Itu Forward Testing?

Forward Testing adalah proses menguji strategi trading kamu di kondisi pasar saat ini (real-time). Kamu melihat chart yang sedang berjalan (live data), menunggu setup muncul sesuai aturanmu, dan mencatat hasilnya. Forward Testing biasanya dilakukan di Akun Demo (Demo Account) atau di Akun Live namun dengan risiko paling minimal (Micro Lot / 0.01 lot).

Jangan pernah mempertaruhkan uang dalam jumlah besar pada strategi yang belum melewati tahap Forward Testing minimal 1-2 bulan.

### Perbedaan Mencolok Backtesting vs Forward Testing

Kenapa hasil backtesting seringkali jauh lebih bagus daripada Forward Testing? Ini adalah fenomena umum. Berikut alasannya:

* **Sisi Emosional (Psikologi):** Saat backtesting, kamu tidak takut untuk klik "Buy" setelah kalah 3 kali karena kamu tahu tidak ada uang sungguhan yang hilang. Saat Forward Testing (terutama jika menggunakan uang kecil), tekanan emosional mulai muncul. Kamu mulai ragu, tanganmu gemetar untuk klik "Buy", atau kamu menutup posisi terlalu cepat karena takut harga berbalik.

"sit on your hands"
entry* karena bosan.
live market
Spread
Slippage* (loncatan harga saat berita besar). Forward Testing akan menunjukkan apakah strategimu bisa bertahan menghadapi biaya transaksi nyata ini.

### Langkah-langkah Melakukan Forward Testing

Bagaimana cara Forward Testing yang benar agar datanya seakurat backtesting?

#### 1. Gunakan Akun Demo atau Cent/Micro Account

Banyak profesional menyarankan menggunakan akun *Micro/Cent* dengan modal kecil (misal $10-$50) daripada akun Demo. Kenapa? Karena kehilangan $1 sungguhan memberikan efek psikologis yang lebih nyata daripada kehilangan $10,000 uang monopoli di akun Demo. Namun jika kamu benar-benar belum punya dana, akun Demo jauh lebih baik daripada nekat langsung menggunakan modal besar.

#### 2. Tetapkan Jadwal Trading yang Realistis

Saat backtesting, kamu mungkin menguji Sesi Asia, London, dan New York sekaligus. Di dunia nyata, kamu tidak bisa begadang 24 jam. Tentukan jam kerjamu. Misalnya, kamu hanya akan Forward Testing dari jam 19.00 - 22.00 WIB (Sesi New York). Jika ada setup bagus di luar jam itu, abaikan. Ini melatih kedisiplinan hidupmu.

#### 3. Catat di Jurnal yang Sama

Gunakan *template spreadsheet* yang sudah kamu buat dari bab sebelumnya. Catat setiap setup yang kamu ambil secara *real-time*. Jangan menunda pencatatan hingga akhir minggu, karena kamu akan lupa apa yang kamu rasakan saat mengeksekusi *trade* tersebut.

### Berapa Lama Harus Forward Testing?

Tidak ada angka pasti, namun patokan yang wajar adalah **minimal 20 hingga 50 kali trade**, atau sekitar **1 hingga 2 bulan**. Jika dalam 1 bulan kamu mengambil 30 trade secara real-time dan hasilnya masih konsisten (meskipun profitnya tidak sebesar saat backtesting), maka strategimu siap dinaikkan "pangkatnya" ke akun Live sesungguhnya.

### Kesimpulan

Forward Testing adalah filter terakhir sebelum kamu terjun ke medan perang sesungguhnya. Proses ini akan menelanjangi semua kelemahanmu: apakah kamu kurang sabar, apakah kamu sering balas dendam, atau apakah kamu sering mengubah aturan di tengah jalan. Jangan buru-buru. *Market* tidak akan lari kemana-mana. Persiapkan senjatamu dengan matang melalui Forward Testing.

<!-- CHAPTER_END: forward-testing.html -->

---

<!-- CHAPTER_START: jurnal-trading.html | TITLE: Jurnal Trading -->
## Jurnal Trading

## Jurnal Trading

> [!NOTE]
> IkhtisarJika kamu pernah berolahraga dan mencoba menurunkan berat badan, kamu pasti tahu pentingnya mencatat apa saja yang kamu makan setiap hari. Di dunia trading, Jurnal Trading memiliki fungsi yang sama persis. Ini bukan sekadar buku catatan profit dan loss, melainkan cermin paling jujur yang akan merekam semua kebiasaan, emosi, dan kesalahanmu di depan chart.

Banyak trader menghindari membuat jurnal karena mereka tidak siap menghadapi kenyataan bahwa mereka sering melanggar aturan (rules) mereka sendiri. Padahal, rahasia untuk berhenti mengulangi kesalahan yang sama adalah dengan menuliskannya dan mengevaluasinya.

### Apa Beda Jurnal Trading dengan Jurnal Backtesting?

Format Jurnal Trading (saat live atau demo) hampir mirip dengan *Template Backtesting*, tetapi dengan satu tambahan besar: **Faktor Psikologis dan Emosi**.

Saat backtesting, kamu tidak merasakan *Fear of Missing Out (FOMO)* karena chart bisa kamu hentikan kapan saja. Di live trading, kamu mungkin *entry* terlalu cepat karena panik melihat candle besar, atau menutup posisi sebelum sampai *Take Profit (TP)* karena takut harganya berbalik. Hal-hal seperti inilah yang harus masuk ke dalam Jurnal Trading.

### Elemen Wajib dalam Jurnal Trading (Live/Demo)

#### 1. Kondisi Psikologis Sebelum Entry

Sebelum kamu klik *Buy* atau *Sell*, jujurlah pada diri sendiri. Catat skala emosimu (1-10) atau tuliskan secara singkat apa yang kamu rasakan.

Contoh: *"Merasa agak FOMO karena melihat emas naik tajam di M5, jadi nekat masuk walaupun belum ada konfirmasi Order Block."*

#### 2. Kepatuhan pada SOP (Trading Plan)

Buat kolom khusus berupa *Checklist* (Ya/Tidak) apakah *trade* ini 100% mengikuti aturan yang sudah kamu tetapkan di Backtesting.

Jika jawabannya "Tidak", tetapi kamu tetap *entry*, maka meskipun *trade* itu profit, secara sistematis itu adalah "Bad Trade" (Trade yang buruk). Profit karena melanggar aturan hanya akan memperkuat kebiasaan buruk di masa depan.

#### 3. Manajemen Posisi Saat Sedang Berjalan (Trade Management)

Catat apa yang kamu lakukan setelah posisi terbuka. Apakah kamu menggeser Stop Loss (SL) menjadi lebih lebar karena tidak rela rugi? Apakah kamu menutup posisi di tengah jalan karena panik?

Contoh: *"Harga hampir kena SL, saya geser SL lebih jauh sedikit. Akhirnya malah kena SL yang lebih besar. Harusnya saya biarkan saja sesuai rencana awal."*

#### 4. Jurnal Gambar (Screenshot) yang Lengkap

Di jurnal live trading, pastikan kamu menyimpan setidaknya tiga gambar untuk setiap posisi:

- **Gambar HTF (Higher Timeframe):** Untuk menunjukkan dari mana asal Bias atau arahmu.
- **Gambar Saat Entry (LTF):** Untuk membuktikan bahwa memang ada konfirmasi (misal CHoCH atau FVG) saat kamu masuk pasar.
- **Gambar Hasil Akhir:** Menunjukkan di mana posisi tertutup, apakah kena TP, kena SL, atau Break-Even.

### Cara Membaca Data dari Jurnalmu

Jurnal hanya akan menjadi tumpukan teks jika tidak dianalisis. Cobalah baca ulang jurnalmu setiap akhir pekan (*Weekend Review*). Kamu akan mulai menyadari pola kelemahanmu sendiri. Misalnya:

"Ternyata 80% loss saya terjadi di hari Jumat sore. Berarti sebaiknya saya tidak trading di hari Jumat."*
"Saya sering profit, tapi karena sering tutup posisi terlalu cepat, profit saya jadi kecil dan tidak bisa menutupi loss saya sebelumnya. Saya harus melatih kesabaran untuk hold sampai target."*

### Kesimpulan

Memiliki Jurnal Trading adalah tanda bahwa kamu menganggap trading sebagai sebuah bisnis serius, bukan sekadar hobi membuang-buang uang. Bisnis yang baik selalu memiliki pembukuan yang jelas. Jurnal Trading adalah "pembukuan" emosi, logika, dan uangmu. Jika kamu malas mencatat, maka bersiaplah untuk selalu berjalan di tempat dalam karir tradingmu.

<!-- CHAPTER_END: jurnal-trading.html -->

---

<!-- CHAPTER_START: kenapa-backtesting-wajib.html | TITLE: Kenapa Backtesting Wajib -->
## Kenapa Backtesting Wajib

## Kenapa Backtesting Wajib

> [!NOTE]
> IkhtisarBanyak trader yang merasa malas melakukan backtesting. Mereka berpikir, "Buat apa lihat masa lalu? Yang penting kan cuan di masa depan!" Padahal, mengabaikan backtesting ibarat seorang dokter bedah yang menolak belajar anatomi dari buku, tapi langsung ingin mengoperasi pasien.

Dalam trading, tidak ada yang namanya kepastian. Yang ada hanyalah probabilitas. Lalu, bagaimana kamu bisa tahu probabilitas keberhasilan strategimu kalau kamu tidak pernah mengujinya secara matematis? Itulah alasan paling mendasar kenapa backtesting bukan sekadar opsi, melainkan **kewajiban mutlak** bagi siapapun yang ingin bertahan lama di market.

### Alasan Utama Kenapa Kamu WAJIB Backtesting

#### 1. Menghindari Menjadi "Pendonor Dana" ke Market

Mayoritas trader pemula hanya menjadi penyumbang likuiditas bagi institusi besar atau trader profesional. Mereka sering mengganti strategi setiap kali mengalami kerugian (System Hopping). Hari ini pakai indikator RSI, besok pindah ke Bollinger Bands, lusa beralih ke Smart Money Concepts (SMC).

Kenapa mereka terus berpindah-pindah? Karena mereka tidak punya keyakinan pada sistem mereka. Dan keyakinan itu tidak datang dari menonton video YouTube, melainkan dari pembuktian data lewat backtesting. Jika kamu tahu strategimu punya *edge*, kamu tidak akan mudah menyerah saat terkena *Drawdown* (penurunan modal) sementara.

#### 2. Mengenal Karakter Market (Market Behavior)

Setiap aset atau pair (misal: XAUUSD, EURUSD, GBPJPY) memiliki "kepribadian" atau karakter yang berbeda-beda. XAUUSD (Gold) mungkin sangat fluktuatif dan sering membuat *fakeout* atau manipulasi sebelum bergerak sesuai tren, sedangkan EURUSD cenderung bergerak lebih mulus dan teknikal.

Dengan backtesting, kamu jadi terbiasa dengan karakter pair yang kamu perdagangkan. Kamu mulai sadar bahwa, *"Oh, Gold ini sering ambil Liquidity (Stop Hunt) di sesi London sebelum akhirnya rally di sesi New York."* Pengamatan seperti ini sangat sulit kamu sadari jika kamu hanya trading sesekali dan tidak pernah melakukan riset mendalam pada data historis.

Trader profesional biasanya sangat ahli di 1 atau 2 pair saja, karena mereka sudah mem-backtest pair tersebut ribuan kali dan sangat paham karakternya.

#### 3. Mendapatkan Harapan yang Realistis (Realistic Expectations)

Banyak yang masuk dunia trading dengan harapan bisa menang 90% dan menggandakan uang setiap bulan. Backtesting akan menamparmu dengan realita secara halus. Kamu akan melihat bahwa strategi terbaik di dunia pun masih bisa mengalami kekalahan berturut-turut.

Ketika kamu melihat secara nyata dari data 100 *trades* bahwa kamu "hanya" menang 45 kali, tapi karena rasio Risk:Reward (RR) kamu adalah 1:3, kamu tetap berakhir dengan profit yang sangat besar. Kesadaran ini akan membunuh sifat serakah dan ketidaksabaranmu. Kamu mulai menerima *loss* sebagai biaya bisnis (cost of doing business), bukan sebagai kiamat.

#### 4. Membantu Merancang Money Management yang Tepat

Apakah aman merisikokan 2% dari modal per trade? Atau sebaiknya 0.5% saja? Jawabannya **tergantung dari data backtesting-mu**.

Jika dari hasil backtesting kamu menemukan bahwa strategimu memiliki kemungkinan *losing streak* (kalah berturut-turut) maksimal sebanyak 8 kali, maka kamu tahu merisikokan 5% per trade adalah bunuh diri (5% x 8 = 40% Drawdown!). Kamu mungkin akan memutuskan untuk hanya merisikokan 1% agar saat terpuruk sekalipun, kamu hanya kehilangan 8% dan mentalmu tetap stabil.

### Bahaya Mengerikan Jika Tidak Melakukan Backtesting

Tanpa backtesting, setiap entry yang kamu lakukan didasari oleh harapan (hope) dan ketakutan (fear). Saat harga bergerak sedikit melawanmu, kamu langsung cut loss karena takut (meskipun belum kena SL). Saat harga mendekati TP, kamu buru-buru tutup posisi karena takut harganya berbalik (meskipun belum sampai target).

Trading dengan tebak-tebakan tanpa data adalah judi. Backtesting adalah garis batas tegas yang memisahkan antara penjudi dan trader profesional.

### Kesimpulan: Bayar Harganya Sekarang

Ya, backtesting itu membosankan. Backtesting itu butuh waktu dan tenaga. Tidak ada sensasi adrenalin seperti saat live trading. Tetapi, keringat yang kamu keluarkan saat "latihan" (backtesting) akan mencegahmu berdarah-darah di medan "pertempuran" (live market).

Jadikan backtesting sebagai ritual wajibmu. Jika kamu malas mem-backtest sebuah strategi sebanyak 100 kali, maka kamu sama sekali belum berhak menggunakan strategi tersebut dengan uang sungguhan.

<!-- CHAPTER_END: kenapa-backtesting-wajib.html -->

---

<!-- CHAPTER_START: menentukan-apakah-strategi-layak.html | TITLE: Menentukan Apakah Strategi Layak -->
## Menentukan Apakah Strategi Layak

## Menentukan Apakah Strategi Layak

> [!NOTE]
> IkhtisarSetelah melakukan backtesting ratusan kali, mencatat di jurnal, dan menghitung Winrate serta RR, tiba saatnya untuk mengambil keputusan final: Apakah strategi ini layak dipakai untuk mempertaruhkan uang sungguhan?

Banyak trader yang ragu-ragu di tahap ini. Mereka terus mencari "kesempurnaan" dan merevisi strategi setiap kali menemukan kelemahan kecil, hingga akhirnya mengalami *Analysis Paralysis* (kelumpuhan analisa). Padahal, tidak ada strategi yang 100% sempurna. Yang ada hanyalah strategi yang memiliki *Positive Expectancy* (Harapan Keuntungan Positif).

### Apa Itu Positive Expectancy (Ekspektasi Positif)?

Sebuah strategi dikatakan layak **BUKAN** karena dia tidak pernah loss, melainkan karena secara matematis, jika diulang ratusan kali, sistem tersebut akan menghasilkan uang lebih banyak daripada uang yang hilang. Inilah yang disebut *Positive Expectancy*.

Ada rumus sederhana untuk menghitung kelayakan sistemmu:

(Winrate x Rata-rata Profit) - (Loss Rate x Rata-rata Loss)

Misalnya, dari data backtest 100 trade, kamu merisikokan rata-rata $100 per trade (SL) dan target profit rata-rata $200 (TP). Winrate kamu adalah 40%. Maka hitungannya:

* Winrate: 40% (0.4)

* Loss Rate: 60% (0.6)

* Rata-rata Profit: $200

* Rata-rata Loss: $100

Expectancy = (0.4 x 200) - (0.6 x 100)

Expectancy = (80) - (60) = **+$20 per trade**.

Artinya, secara matematis, **setiap kali kamu klik entry, kamu "dibayar" $20**, terlepas dari apakah trade spesifik itu nantinya menang atau kalah. Sistem ini memiliki *Positive Expectancy* dan **sangat layak digunakan!**

### Tanda-tanda Strategi Harus Dibuang (Atau Direvisi)

Lalu, kapan kita harus membuang sebuah strategi? Jika perhitungan *Expectancy*-mu menghasilkan angka negatif (misal -$5 per trade), maka sistem itu akan menghancurkan akunmu secara perlahan. Selain itu, perhatikan tanda-tanda "Red Flag" berikut:

#### 1. Drawdown Terlalu Besar untuk Mentalmu

Secara matematika, sistemmu mungkin profitable. Tapi jika *Historical Drawdown* (penurunan modal terparah di masa lalu) mencapai 30% - 40%, tanyakan pada dirimu sendiri: *"Apakah saya sanggup melihat uang saya berkurang 40% tanpa panik dan menutup akun?"* Jika jawabannya "Tidak", maka strategi itu tidak layak untuk **profil risikomu**, meskipun strateginya bagus. Kamu harus menurunkan lot, atau mencari strategi dengan *winrate* lebih tinggi.

#### 2. Frekuensi Trade Terlalu Sedikit atau Terlalu Banyak

Jika dari backtest selama 1 tahun penuh strategi kamu hanya muncul 5 kali, maka *sample size*-nya terlalu kecil. Menunggu berbulan-bulan untuk 1 kali entry sangat tidak realistis secara psikologis. Sebaliknya, jika dalam sehari ada 20 sinyal entry, kamu berisiko tinggi terkena *overtrading* dan kelelahan mental.

#### 3. Aturan Entry Terlalu Subjektif

Jika saat membaca jurnal, kamu sering berkata, *"Di sini aku buy karena perasaanku harganya sudah terlalu murah,"* maka kamu tidak punya strategi. Strategi yang layak harus **mekanis**. Maksudnya, jika kamu memberikan catatan rulismu ke orang lain, orang itu akan mengambil entry persis di titik yang sama denganmu. Jika aturannya masih "abu-abu", perbaiki SOP-nya.

### Jangan Terjebak dalam "Curve Fitting"

Satu kesalahan besar saat merevisi strategi adalah **Curve Fitting** (mencocok-cocokkan data). Saat kamu melihat hasil backtest-mu jelek di bulan Maret, kamu tiba-tiba menambahkan aturan: *"Oke, jangan trading di hari Selasa minggu ketiga."*

Ini adalah kebohongan statistik! Kamu mengubah aturan hanya untuk menghindari loss di masa lalu yang sudah terjadi. Padahal di masa depan, kondisi market akan selalu berbeda. Strategi yang baik harus cukup fleksibel untuk bertahan di berbagai kondisi market, bukan strategi yang diedit secara paksa agar terlihat sempurna di masa lalu.

### Kesimpulan Akhir

Menentukan kelayakan strategi adalah tentang menemukan keseimbangan antara **Angka (Matematika) dan Kenyamanan Diri (Psikologi)**. Jika angkanya positif, drawdown-nya bisa kamu terima tanpa kehilangan tidur di malam hari, dan aturan entry-nya jelas (mekanis), maka selamat: **Kamu sudah memiliki "Mesin Uang" (Edge) milikmu sendiri!** Langkah selanjutnya hanyalah disiplin mengeksekusinya tanpa ragu.

<!-- CHAPTER_END: menentukan-apakah-strategi-layak.html -->

---

<!-- CHAPTER_START: mengukur-winrate-rr-dan-drawdown.html | TITLE: Mengukur Winrate, RR, dan Drawdown -->
## Mengukur Winrate, RR, dan Drawdown

## Mengukur Winrate, RR, dan Drawdown

> [!NOTE]
> IkhtisarSetelah kamu memiliki 100 data trade dari hasil backtesting atau Forward Testing, apa yang harus dilakukan dengan data tersebut? Angka-angka mentah itu tidak akan berarti apa-apa sampai kamu menerjemahkannya menjadi tiga indikator kesehatan sistem trading: Winrate, Risk-to-Reward (RR), dan Drawdown. Ketiga elemen ini adalah "rapor" dari strategimu.

Sebagian besar pemula biasanya hanya peduli pada "Winrate" (seberapa sering mereka menang), lalu membuang strategi tersebut jika sering loss. Ini adalah pemikiran yang salah kaprah. Mari kita bongkar satu per satu cara mengukurnya dan mengapa ketiganya saling berhubungan erat.

### 1. Winrate (Tingkat Kemenangan)

adalah persentase jumlah trade yang profit dibandingkan total trade. Cara menghitungnya sangat mudah:
Misalnya, dari 100 kali trade, kamu menang 40 kali dan kalah 60 kali. Maka Winrate kamu adalah **40%**.

"Saya butuh winrate 80%-90% untuk bisa untung." Ini SALAH BESAR! Banyak trader institusional sangat sukses hanya dengan winrate 35% - 45%. Mengapa? Jawabannya ada pada elemen kedua, yaitu RR.

### 2. Risk-to-Reward Ratio (RR)

adalah perbandingan antara jumlah uang yang kamu pertaruhkan (Risk) dengan jumlah uang yang kamu targetkan untuk dimenangkan (Reward).
Jika kamu merisikokan $10 (Stop Loss) untuk mendapatkan $30 (Take Profit), maka RR kamu adalah **1:3**. Artinya, satu kali kemenangan bisa menutupi tiga kali kekalahan berturut-turut!

Di sinilah keajaiban matematika trading terjadi (*Edge*). Mari kita kombinasikan Winrate dan RR dalam sebuah contoh simulasi dari 100 trade:

* **Skenario A (Trader Winrate Tinggi, RR Rendah):** Winrate 80%, RR 1:0.5 (Risk $10, Reward $5).

Menang: 80 trade x $5 = $400

Kalah: 20 trade x $10 = -$200

(Meski menangnya sering, untungnya lambat).
* **Skenario B (Trader Winrate Rendah, RR Tinggi):** Winrate 40%, RR 1:3 (Risk $10, Reward $30).

Menang: 40 trade x $30 = $1,200

Kalah: 60 trade x $10 = -$600

(Menangnya sedikit, tapi sekali menang panen besar).

### 3. Drawdown (Penurunan Modal Maksimal)

Ini adalah metrik yang paling sering diabaikan pemula, padahal ini yang menentukan apakah kamu akan stres atau santai saat trading. **Drawdown (DD)** adalah penurunan terdalam dari titik puncak saldo (balance) tertinggimu sebelum akhirnya naik kembali. Drawdown biasanya dinyatakan dalam persentase.

Misal, kamu mulai dengan saldo $1,000. Lalu kamu profit hingga $1,200. Tiba-tiba kamu mengalami kekalahan beruntun (*losing streak*) dan saldo turun menjadi $1,050, sebelum akhirnya profit lagi menjadi $1,300.

Penurunan dari $1,200 ke $1,050 adalah sebesar $150.

Drawdown = ($150 / $1,200) x 100% = **12.5%**.

Untuk mengatur ekspektasi emosimu! Dari 100 trade hasil backtest, kamu harus melihat, *"Berapa kali sih sistem saya ini mengalami SL berturut-turut yang paling parah?"*

Jika dari data sejarah sistemmu pernah mengalami 8 kali SL berturut-turut, kamu **TIDAK BOLEH** merisikokan 5% per trade. Karena jika fase 8x SL itu datang (dan pasti akan datang), Drawdown kamu akan mencapai 40% (8 x 5%). Mayoritas orang akan hancur mentalnya jika melihat modalnya hilang 40% dan akhirnya menyerah atau balas dendam.

Tetapi jika kamu merisikokan 1% per trade, fase terburuk itu hanya akan memberimu 8% Drawdown. Kamu akan tetap tenang, dan membiarkan sisi probabilitas menangmu (Edge) bekerja di trade-trade selanjutnya.

### Kesimpulan

Jangan pernah menilai sebuah strategi hanya dari seberapa sering dia menebak harga dengan benar (Winrate). Nilailah dari seberapa banyak uang yang dihasilkan saat benar dibandingkan saat salah (RR), dan seberapa dalam sistem itu bisa menjatuhkan modalmu di masa-masa sulit (Drawdown). Jika ketiga pilar ini sudah kamu kuasai secara matematis, kamu secara resmi telah lulus dari fase "berjudi" dan masuk ke fase "berbisnis".

<!-- CHAPTER_END: mengukur-winrate-rr-dan-drawdown.html -->

---

<!-- CHAPTER_START: review-mingguan.html | TITLE: Review Mingguan -->
## Review Mingguan

## Review Mingguan

> [!NOTE]
> IkhtisarBanyak trader yang rajin mencatat jurnal dari Senin sampai Jumat, namun ketika hari Sabtu tiba, mereka menutup laptop dan melupakan semuanya. Baru di hari Senin berikutnya, mereka kembali ke market dan mengulangi kesalahan yang sama. Membuat jurnal tanpa melakukan Review Mingguan (Weekly Review) ibarat merekam pertandingan sepak bola tapi tidak pernah menonton ulang rekamannya untuk mengevaluasi strategi.

Pasar forex, crypto, maupun saham tutup di akhir pekan (kecuali crypto). Waktu luang di hari Sabtu atau Minggu adalah saat yang paling krusial bagi seorang trader profesional. Di sinilah proses pendewasaan (growth) benar-benar terjadi.

### Mengapa Harus Akhir Pekan (Weekend)?

Saat market sedang bergerak (Senin-Jumat), otakmu dipenuhi oleh emosi: antisipasi, ketakutan, keserakahan, dan *adrenaline rush*. Sangat sulit untuk menilai kinerjamu sendiri secara objektif dalam kondisi tersebut. Di akhir pekan, saat market berhenti bergerak (chart membeku), otak logismu kembali mengambil alih. Kamu bisa melihat *chart* tanpa tekanan emosional.

Trader amatir beristirahat di akhir pekan untuk melupakan kekalahan mereka. Trader profesional bekerja di akhir pekan untuk memastikan mereka tidak kalah lagi dengan cara yang sama di minggu depan.

### Apa Saja yang Harus Dilakukan Saat Review Mingguan?

Proses Review Mingguan tidak harus memakan waktu seharian. Luangkan waktu 1-2 jam saja, dan ikuti langkah-langkah berikut:

#### 1. Mengelompokkan Trade (Win, Loss, Break-Even)

Buka Jurnal Trading yang sudah kamu isi selama seminggu. Kelompokkan trade kamu. Berapa banyak yang *Win*? Berapa yang *Loss*?

Jangan hanya melihat hasil akhir, tapi tanyakan: **"Apakah trade ini mengikuti aturan (SOP)?"**

* **Good Win:** Profit dan mengikuti aturan. (Bagus!)

* **Good Loss:** Kena SL, tapi sudah 100% mengikuti aturan. (Ini adalah bagian dari bisnis, jangan disesali).

feeling* atau melanggar aturan. (Ini berbahaya, karena akan memupuk kebiasaan judi).
* **Bad Loss:** Kena SL, dan melanggar aturan (misal: FOMO, lot terlalu besar). (Ini yang harus segera dihentikan!).

#### 2. Analisa Visual (Membandingkan Screenshot)

Buka semua *screenshot* dari trade yang *Win* dan jejerkan di layarmu. Carilah kesamaan dari setup-setup yang berhasil tersebut. Apakah semuanya terjadi setelah mengambil likuiditas utama? Apakah semuanya terjadi di Sesi London?

Lalu, lakukan hal yang sama pada *screenshot* trade yang *Loss*. Biasanya, kamu akan menemukan pola yang sangat jelas. Mungkin kamu sering kalah jika memaksakan trading saat market sedang *choppy* (sideways kecil) atau saat mencoba melawan tren besar.

#### 3. Review Emosi dan Perilaku

Baca kembali catatan psikologimu. Apakah minggu ini kamu sering merasa marah? Apakah kamu melakukan *Overtrading* (masuk posisi berkali-kali dalam sehari) karena ingin balas dendam (Revenge Trading)? Kesadaran (awareness) adalah langkah pertama untuk menyembuhkan kebiasaan buruk ini.

### Membuat Rencana untuk Minggu Depan (Playbook)

Review Mingguan tidak hanya soal melihat ke belakang, tapi juga mempersiapkan diri ke depan. Setelah mengevaluasi minggu lalu, buatlah **1 atau 2 aturan baru** untuk memperbaiki kesalahanmu di minggu depan.

Misalnya, dari review minggu ini kamu menyadari bahwa kamu rugi besar karena nekat trading 15 menit sebelum berita *Non-Farm Payroll (NFP)* rilis. Maka, *Action Plan* kamu untuk minggu depan adalah: *"Saya tidak akan membuka posisi baru 1 jam sebelum berita warna merah (High Impact) rilis."* Tulis aturan ini besar-besar dan tempel di dekat monitormu!

### Kesimpulan

Tidak ada strategi yang sempurna, dan tidak ada trader yang tidak pernah melakukan kesalahan. Pembeda antara trader yang sukses bertahan 10 tahun dan yang hancur dalam 1 bulan adalah kemampuan mereka untuk mengevaluasi diri. Review Mingguan adalah *feedback loop* (putaran umpan balik) yang akan terus menyempurnakan strategi dan psikologimu seiring berjalannya waktu. Jadikan ini sebagai rutinitas suci setiap akhir pekan.

<!-- CHAPTER_END: review-mingguan.html -->

---

<!-- CHAPTER_START: template-backtesting.html | TITLE: Template Backtesting -->
## Template Backtesting

## Template Backtesting

> [!NOTE]
> IkhtisarSalah satu kendala terbesar saat memulai backtesting adalah kebingungan mengenai apa saja yang harus dicatat. Jika kamu hanya mencatat "Profit $10" atau "Loss $5", data tersebut sama sekali tidak berguna untuk dianalisis di masa depan. Sebuah Template Backtesting yang baik harus bisa menceritakan "apa, mengapa, dan bagaimana" suatu trade dieksekusi.

Dalam bab ini, kita akan membahas kolom-kolom esensial yang wajib ada di dalam *spreadsheet* backtesting kamu. Kamu tidak harus menggunakan *software* berbayar; cukup gunakan Google Sheets, Microsoft Excel, atau Notion. Yang terpenting adalah kedisiplinanmu dalam mengisi data tersebut.

### Struktur Dasar Jurnal Backtesting

Sebuah tabel backtesting setidaknya harus dibagi menjadi tiga fase: **Informasi Umum, Eksekusi, dan Hasil Akhir**. Mari kita bedah satu per satu kolom yang dibutuhkan.

#### 1. Kolom Informasi Umum

Bagian ini mencatat konteks *market* saat peluang tersebut muncul. Ini sangat berguna untuk melihat pola: di waktu kapan strategimu paling sering bekerja.

* **No / ID Trade:** Angka urut (1, 2, 3...) untuk memudahkan perhitungan statistik.

* **Tanggal & Jam (Waktu Broker):** Kapan setup ini terjadi? Waktu ini penting untuk melihat sesi mana (Asia, London, New York) yang paling cocok dengan strategimu.

* **Pair / Aset:** Aset apa yang sedang kamu tes? (Misal: XAUUSD, EURUSD, BTCUSD).

* **Sesi Trading:** Tuliskan dengan jelas apakah itu Sesi London, Sesi New York, atau masa transisi (Overlap).

#### 2. Kolom Eksekusi (Alasan Entry)

Bagian ini memaksa kamu untuk selalu patuh pada Standard Operating Procedure (SOP). Jika kolom ini tidak bisa diisi, berarti trade tersebut tidak valid dan tidak boleh diambil!

* **Arah (Direction):** Apakah kamu mengambil posisi Long (Buy) atau Short (Sell)?

* **Timeframe HTF Bias:** Apa bias dari Timeframe Besar? (Misal: H4 Bullish).

* **Timeframe LTF Entry:** Di Timeframe berapa kamu mengeksekusi entry? (Misal: M15 atau M5).

"Harga menyentuh Order Block M15 setelah mengambil Asian High Liquidity, lalu membentuk konfirmasi CHoCH di M5."*

> [!NOTE]
> TipJika kamu mengisi kolom "Kriteria Entry" hanya dengan kata "Feeling" atau "Kayaknya mau naik", itu tanda bahaya bahwa kamu sedang berjudi.

#### 3. Kolom Parameter Risiko

Sebelum tahu apakah trade ini menang atau kalah, kamu harus mengukur risikonya.

* **Entry Price:** Harga di mana kamu masuk pasar.

* **Stop Loss (Pips/Poin):** Jarak antara Entry dan level Stop Loss. Ini berguna untuk melihat apakah rata-rata SL-mu terlalu sempit atau terlalu lebar.

* **Take Profit (Pips/Poin):** Jarak target keuntunganmu.

* **Rasio Risk:Reward (RR):** Berapa target perbandingannya? (Misal: 1:3, 1:2).

#### 4. Kolom Hasil dan Visual

Inilah tempat kamu mencatat *outcome* secara jujur dan melampirkan "barang bukti".

Win
Loss
BE* (Break-Even / Balik Modal).
"Kena SL karena entry terlalu cepat sebelum candle konfirmasi tertutup (close)."*
Copy Link to Chart* di TradingView, atau gunakan aplikasi seperti Lightshot untuk menyimpan link gambar chart. Minimal simpan 2 gambar per trade:
dan
.

### Contoh Baris (Row) dalam Spreadsheet

| No | Tanggal/Jam | Pair | Sesi | Arah | Kriteria Entry | RR | Hasil | Link Gambar |

| --- | --- | --- | --- | --- | --- | --- | --- | --- |

| 1 | 12 Ags, 14:30 WIB | EURUSD | London | Short | Sweep London High + M5 CHoCH | 1:3 | Win | [Link TV](#) |

| 2 | 12 Ags, 20:00 WIB | XAUUSD | New York | Long | M15 FVG + Liquidity Grab | 1:2 | Loss | [Link TV](#) |

### Kekuatan Sebuah Catatan Visual

Mencatat angka itu penting untuk menghitung persentase menang (win rate). Namun, **menyimpan Link Screenshot jauh lebih penting untuk melatih mata (Pattern Recognition)**.

Bayangkan jika kamu punya 100 gambar dari setup yang Win, dan 100 gambar dari setup yang Loss. Saat akhir minggu, kamu bisa menjejerkan semua gambar yang Win. Otakmu akan secara otomatis mencari kesamaan dari gambar-gambar tersebut. *"Oh, ternyata semua trade Win saya terjadi saat harga sudah mengambil liquidity besar."* Hal semacam ini tidak akan kamu temukan hanya dengan melihat tabel berisi angka.

<!-- CHAPTER_END: template-backtesting.html -->

---
