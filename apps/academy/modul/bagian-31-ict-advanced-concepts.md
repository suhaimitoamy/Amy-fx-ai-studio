# ICT Advanced Concepts
> Modul Edukasi Amy FX Pro — bagian-31-ict-advanced-concepts
> Total Bab: 20 Bab | Format: Editable Markdown for Google AI Studio

---

<!-- CHAPTER_START: amdx-weekly-model.html | TITLE: AMDX Weekly Model -->
## AMDX Weekly Model

## AMDX Weekly Model

> [!NOTE]
> IkhtisarModel AMDX Mingguan (Accumulation, Manipulation, Distribution, X-Reversal) adalah spesifikasi harian dari siklus mingguan. Ini menjabarkan "apa tugas algoritma pada setiap hari" dalam sepekan.

#### Apa itu AMDX Mingguan?

Ini adalah "jadwal kerja" dari algoritma pengiriman harga (IPDA).
- **Senin = Accumulation (Akumulasi)**: Konsolidasi lambat. Membangun posisi di kedua sisi harga pembukaan mingguan.
- **Selasa = Manipulation (Manipulasi)**: Menembus ke luar dari rentang akumulasi Senin (sering disebut *Judas Swing*). Tujuannya menjemput Stop Loss trader yang terjebak di hari Senin.
- **Rabu = Distribution (Distribusi)**: Ekspansi masif. Bergerak agresif menjauhi titik manipulasi menuju ke target sesungguhnya.
- **Kamis = Distribution / Continuation**: Melanjutkan pergerakan dari hari Rabu. Sering memberikan setup *entry* paling bersih.
- **Jumat = X (Reversal / Consolidation)**: Mengambil likuiditas akhir pekan (Friday Reversal) akibat para institusi yang menutup posisi mereka, atau sekadar konsolidasi mati.

#### Mengapa Model Ini Akurat?

Pasar tidak bisa tren secara lurus selama 5 hari berturut-turut. Harus ada rekayasa likuiditas (Senin/Selasa) agar bank besar bisa masuk dengan posisi raksasa (Rabu/Kamis), dan keluar (Jumat).

#### Bagaimana Identifikasinya?

- Kotak/tandai rentang pergerakan (High dan Low) dari sepanjang hari **Senin**.
- Tunggu hari **Selasa**. Jika bias Anda *Bullish*, biarkan Selasa menembus *Low* hari Senin.
- Setelah Selasa menunjukkan penolakan (*rejection*) yang kuat (menciptakan manipulasi), bersiaplah untuk pergerakan utama.
- **Rabu dan Kamis** adalah hari di mana Anda akan menahan posisi (Hold) karena ini adalah fase Ekspansi murni.

> [!NOTE]
> Kriteria TradingRabu sering kali menjadi hari paling mudah untuk ditradingkan karena arah minggu tersebut (biasanya) sudah ditetapkan oleh manipulasi hari Selasa.

- **Entry**: Bergabung dengan tren pada hari Rabu dengan mencari *Fair Value Gap* (FVG) atau sentuhan pada *Order Block* di sesi London atau New York.
- **Invalidasi (SL)**: Titik balik (*extremes*) yang diciptakan pada fase Manipulasi (Selasa). Jika level ini ditembus di hari Rabu/Kamis, AMDX model tersebut gagal.
- **Target (DOL)**: Draw on Liquidity utama pada kerangka waktu makro (Harian / Mingguan). Pada hari Jumat siang, sangat disarankan untuk mengambil sebagian besar atau seluruh *Take Profit* (TP).

<!-- CHAPTER_END: amdx-weekly-model.html -->

---

<!-- CHAPTER_START: balanced-price-range-bpr.html | TITLE: Balanced Price Range (BPR) -->
## Balanced Price Range (BPR)

## Balanced Price Range (BPR)

## Balanced Price Range (BPR)

> [!NOTE]
> IkhtisarBalanced Price Range (BPR) atau Rentang Harga Seimbang adalah konsep penyempurnaan dari Fair Value Gap (FVG) yang sangat mematikan. Sementara FVG adalah jejak kaki ketidakseimbangan harga yang ditinggalkan oleh satu pihak (misal: Buy Side Imbalance), BPR adalah bukti terjadinya pertempuran brutal dua sisi yang berakhir dengan dominasi absolut secara instan.

BPR adalah salah satu dari sedikit *PD Array* tingkat atas dalam ekosistem *Inner Circle Trader (ICT)* yang jarang dipahami oleh trader amatir.

### Anatomi Terjadinya BPR

BPR terjadi saat dua buah FVG yang berbeda arah tercipta secara beruntun dan saling menumpuk satu sama lain pada area harga yang persis sama.

Langkah penciptaannya (Contoh BPR Bearish):
1. Algoritma menciptakan sebuah lilin/candle agresif ke atas (Lilin Bullish besar), yang meninggalkan sebuah celah **FVG Bullish**.
2. Normalnya, saat harga kembali ke FVG Bullish ini, ia akan memantul naik. Ini adalah ekspektasi *trader*.
3. Namun tepat sesaat setelah penciptaannya, atau tak lama kemudian, harga tiba-tiba dihancurkan ke bawah dengan sebuah *candle* merah raksasa (Lilin Bearish agresif) yang **menembus dan menghancurkan seluruh area FVG Bullish** tadi.
4. Parahnya, penurunan tersebut begitu cepat sehingga ia sendiri meninggalkan celah kosong di tempat jatuhnya, yakni sebuah **FVG Bearish**.
5. Di area perpotongan *overlap* yang spesifik tempat berdirinya bekas FVG Bullish dan FVG Bearish yang baru, harga kini telah diantar ke atas dengan cepat, lalu dibanting ke bawah dengan cepat pula. Area spesifik yang tumpang tindih ini dinamakan **Balanced Price Range (BPR)**.

### Psikologi di Balik BPR

Ketika harga menari agresif ke atas dan ke bawah meninggalkan dua celah, algoritma IPDA telah **menyeimbangkan** zona tersebut dari kedua sisi. Tidak ada lagi kepentingan algoritma untuk kembali berlama-lama di dalam zona tersebut.

Akibatnya, BPR menjadi seperti tembok beton.

### Cara Entry Menggunakan BPR

- BPR sangat sering berfungsi sebagai titik penolakan tajam (*sharp rejection*).
- Ketika harga perlahan-lahan mencoba kembali naik ke area BPR Bearish yang tercipta, harga seringkali tidak akan menembus ke tengah-tengahnya apalagi menutupnya secara penuh (seperti sifat FVG biasa).
- Harga akan menyentuh **ambang batas (ujung) area perpotongan** dari BPR tersebut, dan langsung bereaksi agresif menolak ke bawah seketika (sering meninggalkan *wick/ekor* panjang).

### Kekuatan Ekstrem BPR

BPR memiliki hierarki respek yang jauh lebih tinggi dibandingkan FVG standar. Jika Anda melihat sebuah FVG biasa, harga mungkin akan menembusnya separuh jalan (zona *consequent encroachment* / 50%) sebelum berbalik. Namun jika area itu adalah sebuah BPR, penolakannya bisa terjadi hanya dengan sentuhan satu *tick* harga pada garis awalnya saja.

BPR adalah pertanda nyata pergeseran besar narasi institusional (*Institutional Narrative Shift*).

<!-- CHAPTER_END: balanced-price-range-bpr.html -->

---

<!-- CHAPTER_START: breaker-blocks-dan-mitigation-blocks.html | TITLE: Breaker Blocks dan Mitigation Blocks -->
## Breaker Blocks dan Mitigation Blocks

## Breaker Blocks dan Mitigation Blocks

## Breaker Blocks dan Mitigation Blocks

> [!NOTE]
> IkhtisarDalam konsep SMC dasar, kita diajarkan bahwa Order Block (OB) adalah benteng pertahanan yang kuat. Harga akan memantul ketika kembali ke area tersebut. Namun, bagaimana jika benteng tersebut hancur? Bagaimana jika sebuah OB yang sangat jelas justru ditembus (break) dengan telak oleh harga?

Bagi *trader* ritel pemula, ini disebut *Stop Out* (kerugian). Namun dalam konsep ICT tingkat lanjut, **sebuah Order Block yang gagal adalah pintu masuk baru**. Konsep inilah yang melahirkan *Breaker Blocks* dan *Mitigation Blocks*.

### 1. Breaker Block (BRK)

!breaker_block.svg

Sebuah *Breaker Block* adalah Order Block yang gagal menahan harga, di mana kegagalan tersebut sekaligus menciptakan sebuah *Market Structure Shift* (MSS) dengan terlebih dahulu menyapu likuiditas (Liquidity Sweep).

#### Anatomi Bullish Breaker:

- Harga bergerak naik membentuk sebuah puncak baru (*High*), lalu turun. Penurunan ini adalah tempat di mana *Bullish Order Block* klasik terbentuk.
- Harga mencoba naik lagi tapi tertahan, lalu tiba-tiba turun tajam menembus lembah terendah sebelumnya (**Lower Low**), menyapu likuiditas (*Sell Side Liquidity Grab*).
- Setelah menyapu likuiditas di bawah, harga berbalik arah dan **naik secara agresif dengan momentum yang kuat**, menembus puncak tertinggi sebelumnya (menciptakan Market Structure Shift ke arah atas).
- Penembusan ke atas ini secara otomatis **menghancurkan Bearish Order Block terakhir** yang berada di puncak (yang awalnya bertanggung jawab atas penurunan tadi).
- **Bearish Order Block yang hancur inilah yang kini berubah wujud menjadi Bullish Breaker Block.**
- Ketika harga kembali turun (*pullback*) menguji balok yang hancur ini, balok tersebut kini berfungsi sebagai pijakan *support* yang sangat kuat untuk *Buy*.

Kunci utama sebuah Breaker Block adalah **harus ada penyapuan likuiditas (Sweep) sebelum struktur pasar berubah.**

### 2. Mitigation Block (MB)

*Mitigation Block* memiliki konsep yang hampir identik dengan *Breaker Block*, tetapi dengan satu perbedaan fundamental yang sangat penting: **Tidak ada penyapuan likuiditas (Sweep) pada puncak/lembah sebelumnya.**

#### Anatomi Bullish Mitigation:

- Harga membentuk sebuah puncak (*High*).
- Harga turun membentuk lembah (*Low*).
- Harga mencoba naik lagi, namun gagal menembus puncak sebelumnya, sehingga hanya menciptakan **Lower High** (*Failure Swing*).
- Harga kemudian turun dan menembus lembah sebelumnya, menyebabkan Bearish MSS (perubahan struktur ke bawah).
- Bullish Order Block terakhir di area lembah yang ditembus tadi kini menjadi **Mitigation Block**.
- Ketika harga kembali naik menyentuh area yang ditembus ini, *Smart Money* akan melakukan "Mitigasi" (menutup posisi *Buy* lama mereka yang terjebak dalam kondisi rugi menjadi *Break Even*), dan harga akan memantul kembali ke bawah (Peluang *Sell*).

### Perbedaan Utama dan Hierarki Kekuatan

- **Breaker Block (BRK)** adalah hasil dari *Stop Hunt* / Manipulasi. Karena *Smart Money* baru saja menjebak banyak orang dan mengumpulkan banyak pesanan dari *Liquidity Sweep*, dorongan setelahnya akan sangat agresif. Oleh karena itu, **Breaker Block adalah PD Array probabilitas tinggi.**
- **Mitigation Block (MB)** terjadi saat pasar kehabisan tenaga (*Failure Swing*) dan tidak berhasil mengambil likuiditas eksternal. Karena tidak ada bahan bakar dari jebakan, level ini secara probabilitas **lebih lemah dibandingkan Breaker Block**.

*Pro Tip:*
Sebuah Breaker Block akan menjadi setup level *A+* (Sangat Akurat) jika ia bertepatan lokasinya dengan area Fair Value Gap (FVG). Penyatuan antara Breaker dan FVG di zona harga yang sama sering disebut oleh ICT sebagai **Unicorn Setup**.

<!-- CHAPTER_END: breaker-blocks-dan-mitigation-blocks.html -->

---

<!-- CHAPTER_START: fvg-presisi-vs-fvg-luas.html | TITLE: FVG Presisi vs FVG Luas -->
## FVG Presisi vs FVG Luas

## FVG Presisi vs FVG Luas

> [!NOTE]
> IkhtisarCatatan ringkas tentang dua cara menandai area FVG.

### Catatan

- FVG presisi memakai area lebih sempit.
- FVG luas memakai area observasi yang lebih besar.
- Keduanya perlu dibaca bersama struktur harga.

### Latihan

Cari 5 FVG di XAUUSD dan bandingkan versi sempit serta luas.

<!-- CHAPTER_END: fvg-presisi-vs-fvg-luas.html -->

---

<!-- CHAPTER_START: ipda-data-ranges-dan-daily-profiles.html | TITLE: IPDA Data Ranges dan Daily Profiles -->
## IPDA Data Ranges dan Daily Profiles

## IPDA Data Ranges dan Daily Profiles

## IPDA Data Ranges dan Daily Profiles

> [!NOTE]
> IkhtisarUntuk menangkap tren besar dan terhindar dari choppy market (pasar membingungkan) pada timeframe kecil, seorang trader tingkat lanjut wajib melihat kalender algoritma dari lensa sudut lebar. ICT mengenalkan dua elemen prediktif dalam top-down analysis: IPDA Data Ranges (Rentang Data Algoritma) dan Daily Profiles (Model Profil Harian).

### 1. IPDA Data Ranges (Lookback Periods)

Algoritma antar bank tidak melihat chart dalam rentang 1 tahun atau 5 tahun seperti *swing trader* teknikal. Algoritma (IPDA) diprogram pada matriks *lookback* tetap. Mereka melihat kembali riwayat harga pada hitungan mundur 20 hari, 40 hari, dan 60 hari dari hari kalender saat ini (tidak termasuk akhir pekan).

#### Aturan 20-40-60:

- **Rentang 20 Hari:** Menentukan tren jangka pendek yang sangat agresif. Jika dalam siklus 20 hari terakhir pasar terus naik, maka setiap penurunan adalah rejeki mencari posisi beli (*Discount*).
- **Rentang 40 Hari:** Menentukan tren jangka menengah yang mengendalikan alur narasi bulanan (*Institutional Narrative*). Ini acuan utama *swing trader*.
- **Rentang 60 Hari:** Siklus makro teratas.

Setiap kali Anda menganalisis *Daily Timeframe* (D1), hitunglah mundur 20 *candle* ke belakang dan tandai titik *Highest High* dan *Lowest Low*-nya. Algoritma saat ini hampir dipastikan tertarik secara magnetis pada salah satu sisi likuiditas dari 20 hari terakhir (tergantung dari konteks Market Maker Models (MMXM) Peta Besar Pengiriman Harga).

### 2. Daily Profiles (Model Profil Pembentukan Harga Harian)

Hari pergerakan harga tidak terbentuk secara acak. ICT memetakan beberapa pola profil yang berulang setiap harinya berdasar bias struktur.

#### Standard Trend Profile (Buy/Sell Day)

- Jika bias dari *IPDA 20-day* adalah **Bullish**, maka model hari standar adalah: Harga dibuka (Midnight NY), harga turun tipis memburu stoploss awal pagi (membentuk *Low of the Day* di sesi London - Killzones dan True Day Open), lalu berekspansi memanjang naik sisa hari, dan ditutup di dekat harga tertingginya.

#### Seek and Destroy Profile

- Ini adalah kondisi "Hari Penghancur". Profil ini sering muncul sebelum berita besar rilis (seperti NFP) atau di tengah konsolidasi HTF.
- Karakteristik: Harga akan naik membobol *Buy Side Liquidity*, lalu seketika berbalik turun menghancurkan *Sell Side Liquidity*, lalu naik lagi.
- *Rule:* Jika Anda mendeteksi profil ini (harga hanya naik-turun kencang tanpa arah menembus batas), **JANGAN TRADE**. Profil ini diprogram algoritma untuk melikuidasi *trader* ritel dari kedua sisi, tak peduli Anda Buy atau Sell.

#### Konsolidasi Expansion (Accumulation-Manipulation-Distribution)

Model tertua dari konsep dasar ICT, yakni kerangka Power of Three. Profil ini sangat stabil untuk diperdagangkan karena memiliki ciri urutan: Range Asia sempit, manipulasi palsu di London, pengeboman arah asli di sesi New York.

Dengan memadukan *IPDA Lookback 20-day* untuk menentukan arah (*Bias*), dan mencocokkan *Daily Profiles* untuk hari itu, eksekusi masuk *entry* Anda pada sesi yang tepat tak akan pernah meleset jauh dari bayangan para institusi perbankan.

<!-- CHAPTER_END: ipda-data-ranges-dan-daily-profiles.html -->

---

<!-- CHAPTER_START: ipda-data-ranges.html | TITLE: IPDA Data Ranges -->
## IPDA Data Ranges

## IPDA Data Ranges

## IPDA Data Ranges (Interbank Price Delivery Algorithm)

> [!NOTE]
> IkhtisarAlgoritma Interbank (IPDA) tidak melihat grafik tanpa akhir; ia menggunakan periode waktu "look-back" (kilas balik) spesifik untuk menentukan di mana Likuiditas dan Inefisiensi berada. Konsep IPDA Data Ranges adalah bagaimana kita mensinkronkan kalender kita dengan kalender algoritma.

### Apa itu IPDA Data Range?

Data Range adalah jendela waktu spesifik ke belakang yang ditinjau oleh IPDA dari hari ini (Current Day) untuk mencari level referensi PD Array (Order Block, FVG, Liquidity Pool).
ICT membaginya dalam rentang hari lookback utama:
- **20 Hari (20-Day Lookback):** Digunakan untuk mencari inefisiensi harga (FVG) atau likuiditas jangka pendek.
- **40 Hari (40-Day Lookback):** Titik rujukan jangka menengah.
- **60 Hari (60-Day Lookback):** Referensi harga institusional jangka panjang yang sangat kuat (Makro).

### Mengapa Lookback Period Ini Penting?

Pasar bergerak dari masa kini menuju target di masa depan dengan berpatokan pada masa lalu. Jika harga berada di kondisi Premium pada Data Range 20 hari, tetapi algoritma melihat adanya Liquidity Pool yang belum tersentuh di dasar Data Range 60 hari, pergerakan jangka panjang mungkin akan menargetkan dasar 60 hari tersebut.

### Kapan & Bagaimana Mengidentifikasinya?

- Tandai hari trading saat ini.
- Hitung mundur sejauh 20, 40, dan 60 hari perdagangan (trading days, bukan hari kalender).
- Identifikasi **High dan Low absolut** dalam rentang waktu tersebut.
- Temukan PD Array yang belum termitigasi dalam rentang ini (contoh: FVG harian (Daily) 20 hari lalu).

> [!NOTE]
> Matriks Premium/Discount SejatiTarik Fibonacci dari Low terendah hingga High tertinggi dalam IPDA Data Range (20/40/60). Inilah area Premium dan Discount sejati yang sedang dimanipulasi oleh algo.

### Kriteria Eksekusi (Aplikasi)

- **Entry:** Jangan langsung Entry hanya berdasarkan lookback. Gunakan level dari Data Range (misal: Discount FVG dari 40-day lookback) sebagai *Higher Timeframe Point of Interest (HTF POI)* Anda.
- **Invalidasi (SL):** Bergantung pada setup lower timeframe (LTF) ketika harga merespons level Data Range tersebut.
- **Target (DOL):** Jika Anda entry dari Discount 20-hari, targetkan Equilibrium (50%) atau Premium Array dari rentang 20-hari tersebut.

<!-- CHAPTER_END: ipda-data-ranges.html -->

---

<!-- CHAPTER_START: ipda.html | TITLE: IPDA -->
## IPDA

## IPDA

## IPDA (Interbank Price Delivery Algorithm)

> [!NOTE]
> IkhtisarIPDA (Interbank Price Delivery Algorithm) adalah otak di balik pergerakan harga. Menurut ICT, pasar tidak bergerak karena tekanan beli dan jual (buying/selling pressure) dari ritel, melainkan dikendalikan oleh algoritma kecerdasan buatan bank sentral yang sangat canggih. IPDA bertugas mengantarkan harga secara efisien, mencari likuiditas, dan menyeimbangkan ketidakseimbangan harga (imbalance).

### 1. Apa Itu IPDA?

IPDA adalah algoritma yang mengontrol *price action* di pasar finansial (khususnya Forex, Futures, dan Indeks). Algoritma ini berjalan berdasarkan **Waktu (Time)** dan **Harga (Price)**. Harga yang kita lihat di chart bukanlah hasil dari pertarungan *bulls vs bears*, melainkan harga sedang di-"deliver" (diantarkan) ke level-level tertentu oleh IPDA.

### 2. Mengapa Memahami IPDA Penting?

Karena jika kamu percaya harga itu acak, kamu akan selalu stres. Jika kamu paham IPDA, kamu tahu bahwa market beroperasi di bawah aturan algoritma yang sangat presisi. Tugas IPDA hanya dua:
1. **Mencari Likuiditas (Liquidity Runs):** Menembus Old High/Old Low untuk mengambil stop loss.
2. **Menyeimbangkan Harga (Rebalancing):** Mengisi Fair Value Gap (FVG) atau memitigasi Order Block yang ditinggalkan sebelumnya.

### 3. Komponen Utama IPDA

IPDA memiliki siklus atau rentang tinjauan balik (*look-back periods*) untuk menentukan signifikansi level harga yang dikenal sebagai **IPDA Data Ranges**:
- **20 hari:** Likuiditas jangka pendek.
- **40 hari:** Likuiditas jangka menengah.
- **60 hari:** Likuiditas jangka panjang.
Algoritma selalu melihat ke belakang selama 20, 40, dan 60 hari untuk menentukan ke mana arah (DOL) harga selanjutnya.

### 4. Kapan Algoritma Paling Aktif (Time)?

Algoritma tidak selalu dalam mode agresif. Ada waktu-waktu khusus yang diprogram atau dijadwalkan (disebut Killzones):
- London Open Killzone (02:00 - 05:00 AM NY time)
- New York Open Killzone (07:00 - 10:00 AM NY time)
- Waktu rilis berita ekonomi makro tinggi (lihat *News Driver Model*).

### 5. Bagaimana Identifikasi dan Implementasinya?

- **Tentukan Harga:** Temukan Premium & Discount menggunakan rentang pergerakan saat ini. IPDA memprogram harga untuk turun ke area Discount untuk Buy, dan naik ke Premium untuk Sell.
- **Tentukan Waktu:** Jangan mengambil posisi jika tidak ada jadwal "pengantaran harga" (contohnya di Dead Zone Asia atau makan siang NY).
- Selalu tanyakan: "Apakah IPDA sedang mencari Likuiditas atau sedang mengisi Inefisiensi (FVG)?"

> [!NOTE]
> Pesan MentorTime and Price. IPDA tidak akan memberikan harga yang bagus jika waktunya tidak tepat. Harga di level Order Block yang sempurna tidak ada artinya jika dicapai di luar Killzone, karena algoritma belum dihidupkan untuk merespons level tersebut. Selalu sinkronkan POI (Price) dengan Killzone (Time).

<!-- CHAPTER_END: ipda.html -->

---

<!-- CHAPTER_START: killzones-dan-true-day-open.html | TITLE: Killzones dan True Day Open -->
## Killzones dan True Day Open

## Killzones dan True Day Open

## Killzones dan True Day Open

> [!NOTE]
> IkhtisarAlgoritma pergerakan harga (Interbank Price Delivery Algorithm / IPDA) tidak berjalan secara acak sepanjang waktu. Dalam konsep ICT, waktu dan harga (Time & Price) adalah raja, namun Waktu selalu mendahului Harga. Sebagus apa pun setup Order Block atau Fair Value Gap yang Anda temukan, jika itu terjadi di zona waktu yang salah, probabilitasnya akan sangat rendah.

Di sinilah konsep **Killzones** dan **True Day Open** bermain. Konsep ini membagi waktu dalam sehari ke dalam jendela-jendela operasi spesifik tempat institusi menyuntikkan volume besar.

### True Day Open (Harga Buka Harian)

Meskipun sesi harian Forex secara teknikal dihitung berdasarkan waktu Sydney/Wellington, ICT memiliki dua garis waktu "Open" yang menjadi tolok ukur utama (berpatokan pada Waktu New York / EST):

- **Midnight New York Open (00:00 EST / 12:00 WIB)**
   Harga pada tepat tengah malam waktu NY adalah harga keseimbangan harian sejati.
- Jika bias harian Anda adalah **Bullish**, Anda HANYA ingin mencari posisi **Buy di bawah harga Midnight Open** (zona *Discount*).
- Jika bias harian Anda adalah **Bearish**, Anda HANYA ingin mencari posisi **Sell di atas harga Midnight Open** (zona *Premium*).
- **8:30 AM EST Open (20:30 WIB)**
   Waktu ini sangat sakral karena bertepatan dengan rilis sebagian besar berita ekonomi penting AS (NFP, CPI, PPI). Seringkali, manipulasi pembukaan sesi New York (Judas Swing) diukur dari garis 8:30 AM EST ini.

### ICT Killzones

*Killzones* adalah jendela waktu volatilitas tinggi tempat *Smart Money* mengeksekusi volume. Setup yang muncul di dalam jendela ini adalah setup probabilitas tinggi. (*Semua waktu dalam EST / Waktu New York*).

#### 1. Asian Range (20:00 - 00:00 EST)

- **Karakteristik:** Pergerakan harga cenderung lambat dan *sideways* (konsolidasi).
- **Fungsi:** Sesuai dengan konsep Power of Three, sesi Asia adalah tahap **Akumulasi**. *Smart Money* sedang mengumpulkan pesanan. Area puncak dan lembah dari *Asian Range* menjadi target likuiditas (Asian High & Asian Low) yang akan disapu di sesi berikutnya.

#### 2. London Killzone (02:00 - 05:00 EST)

- **Karakteristik:** Sesi paling volatil pertama dalam sehari, sering menjadi pencipta titik tertinggi (*High of the Day*) atau titik terendah harian (*Low of the Day*).
- **Fungsi:** Dalam struktur Power of Three, sesi London sering bertindak sebagai tahap **Manipulasi** (*Judas Swing*). Misalnya, harga akan bergerak turun secara agresif menyapu *Asian Low*, sebelum akhirnya berbalik arah (*reversal*) membentuk tren naik (tahap *Distribusi*) yang sebenarnya untuk sisa hari itu.

#### 3. New York Killzone (07:00 - 10:00 EST)

- **Karakteristik:** Sesi masuknya institusi Amerika dan dirilisnya berita major.
- **Fungsi:** NY Killzone bisa bertindak sebagai penerus tren dari London (Ekspansi kelanjutan), atau bisa menjadi pembalikan arah total (*New York Reversal*) jika London telah mencapai target likuiditas HTF (*Higher Time Frame*).

#### 4. London Close Killzone (10:00 - 12:00 EST)

- **Karakteristik:** Menjelang penutupan sesi London di siang hari NY.
- **Fungsi:** Sering memberikan *setup reversal* kecil untuk mengambil *Take Profit* sebagian dari tren pagi, di mana harga akan bergerak retracement melawan tren utama hari itu.

### Menggabungkan Waktu dan Harga

Selalu tanyakan pada diri Anda sebelum masuk ke pasar:
- *"Apakah kita sedang berada di dalam Killzone?"*
- *"Di manakah posisi harga saat ini terhadap Midnight Open? Apakah saya membeli di area Premium (terlalu mahal) atau menjual di area Discount (terlalu murah)?"*

<!-- CHAPTER_END: killzones-dan-true-day-open.html -->

---

<!-- CHAPTER_START: macro-times-dan-algorithmic-time.html | TITLE: Macro Times dan Algorithmic Time -->
## Macro Times dan Algorithmic Time

## Macro Times dan Algorithmic Time

## Macro Times dan Algorithmic Time

> [!NOTE]
> IkhtisarMeskipun kita sudah memahami sesi utama menggunakan Killzones dan True Day Open, pergerakan algoritma institusional (Interbank Price Delivery Algorithm / IPDA) sebetulnya berjalan pada tingkat presisi yang jauh lebih mikroskopis. Salah satu rahasia paling mematikan dari kalender harian Smart Money adalah konsep Macro Times.

### Apa Itu Macro?

*Macro* adalah jendela waktu yang sangat spesifik dan berulang (biasanya berdurasi 20 menit) setiap hari. Dalam rentang waktu 20 menit ini, IPDA diprogram secara sistematis untuk menjalankan tugas utamanya:
1. Mencari likuiditas (memburu *Stop Loss* / Liquidity Sweep).
2. Menyeimbangkan ketidakefisienan harga (bergerak menutup Fair Value Gap / BPR).

Selama jendela Macro ini berlangsung, pergerakan harga sering bertentangan dengan gravitasi normal, bergerak tajam dan tak masuk akal dengan tujuan murni menyapu area target yang belum terselesaikan.

### Daftar Waktu Macro Utama ICT

*(Semua dalam Waktu New York / EST)*

Setiap sesi besar memiliki jendela eksekusi algoritmiknya sendiri:

- **London Macro (Pagi Buta NY)**
- 02:33 - 03:00 EST
- 04:00 - 04:30 EST
- **New York AM Macros (Paling Populer)**
- **08:50 - 09:10 EST** (Macro persiapan setelah Open Equities)
- **09:50 - 10:10 EST** (Sering dijuluki Silver Bullet Macro - Momen terbaik untuk mencari entri)
- **10:50 - 11:10 EST** (Macro menjelang tutup sesi pagi Eropa)
- **New York PM Macros (Sesi Siang/Sore)**
- **13:10 - 13:40 EST**
- **15:15 - 15:45 EST** (Macro penutupan pasar, sering terjadi lonjakan gila di indeks saham)

### Cara Menggunakan Macros dalam Trading

- **Antisipasi, Bukan Reaksi Spontan:** Jangan mulai menganalisis chart persis di detik Macro dimulai. Anda harus sudah melakukan top-down analysis, menandai *Draw on Liquidity* (DOL) atau sasaran harga terdekat SEBELUM jam 09:50 EST.
- **Katalis Pergerakan:** Jika harga sedang bergerak lambat (*consolidation*) pada jam 09:30 EST, ketahuilah bahwa saat jam menyentuh 09:50 EST, algoritma akan "dibangunkan" dan langsung menembak ke area likuiditas (membuat Market Structure Shift palsu).
- **Konfirmasi Entry:** *Trader* profesional ICT biasanya akan menunggu sebuah FVG tercipta *tepat di dalam rentang* Macro (misal di jam 09:55), lalu melakukan *entry* saat harga masuk ke area tersebut, karena mereka sadar algoritma sedang aktif merekam jejak.

Menguasai waktu adalah langkah pertama menundukkan harga. Jika sebuah setup teknikal cantik terbentuk di jam 11:45 EST, abaikan. Itu algoritma jebakan. Tapi jika setup identik terbentuk di jam 09:55 EST, itu adalah algoritma distribusi. Waktu adalah raja.

<!-- CHAPTER_END: macro-times-dan-algorithmic-time.html -->

---

<!-- CHAPTER_START: market-maker-x-model-mmxm.html | TITLE: Market Maker X Model (MMXM) -->
## Market Maker X Model (MMXM)

## Market Maker X Model (MMXM)

## Market Maker X Model (MMXM)

> [!NOTE]
> IkhtisarMMXM terdiri dari Market Maker Buy Model (MMBM) dan Market Maker Sell Model (MMSM). Ini adalah cetak biru sejati tentang bagaimana algoritma (IPDA) merekayasa harga. Pasar bergerak dari konsolidasi awal, manipulasi, hingga akhirnya membalikkan arah untuk kembali ke konsolidasi awal tadi (Original Consolidation).

### Apa itu MMXM?

Ini adalah siklus pengiriman harga lengkap yang menggambarkan bagaimana Smart Money membangun posisi. Model ini berbentuk kurva atau parabola dan dibagi menjadi dua sisi: **Buy Side of the Curve (BSoC)** dan **Sell Side of the Curve (SSoC)**.

Untuk **MMSM (Sell Model)**:
1. **Original Consolidation:** Harga berada di kisaran (range) akumulasi awal.
2. **Buy Side of the Curve:** Harga perlahan naik, menciptakan serangkaian higher highs, mengundang retail untuk membeli. Sering ditandai dengan Reaccumulation.
3. **Smart Money Reversal (SMR):** Harga mencapai POI HTF (Premium PD Array) dan berbalik arah. Sering disertai SMT Divergence.
4. **Sell Side of the Curve:** Harga mulai turun secara agresif. FVG dan Order Block ditembus (menjadi Inversion).
5. **Draw on Liquidity (Target Utama):** Harga kembali ke Original Consolidation dan mengambil likuiditas di bawahnya.

### Mengapa MMXM Sangat Kuat?

Karena ia menceritakan narasi yang lengkap. Retail trader sering terjebak membeli di puncak SSoC, padahal Smart Money sedang membongkar posisi beli mereka (distribusi) untuk mulai menjual. Dengan memahami MMXM, kita tidak menebak arah, melainkan menyelaraskan diri di fase yang tepat.

### Kapan & Bagaimana Mengidentifikasinya?

Cari Original Consolidation di timeframe H1 atau M15. Saat harga bergerak menjauh dan mendekati Key Level HTF, bersiaplah mencari **Smart Money Reversal**.

> [!NOTE]
> Low Risk EntryJangan pernah mencoba menebak SMR. Tunggu hingga SMR terbentuk, lalu cari Low Risk Sell (LRS) di kaki pertama SSoC, setelah Market Structure Shift (MSS) terjadi.

### Kriteria Eksekusi (Contoh MMSM)

- **Entry:** Masuk pada **Low Risk Sell** (FVG/OB pertama yang terbentuk setelah SMR) atau pada fase Redistribusi di Sell Side of the Curve.
- **Invalidasi (SL):** Di atas SMR High atau di atas struktur redistribusi terakhir.
- **Target (DOL):** Secara bertahap, targetkan level likuiditas di BSoC, namun target pamungkasnya selalu berada di **Original Consolidation**.

<!-- CHAPTER_END: market-maker-x-model-mmxm.html -->

---

<!-- CHAPTER_START: monthly-cycle-ict.html | TITLE: Monthly Cycle ICT -->
## Monthly Cycle ICT

## Monthly Cycle ICT

> [!NOTE]
> IkhtisarMonthly Cycle (Siklus Bulanan) menjelaskan bagaimana sebuah candle bulanan (Monthly Candle) membentuk anatominya: Open, High, Low, Close (Power of Three) sepanjang 4 minggu dalam satu bulan kalender.

#### Apa itu Monthly Cycle?

Sama seperti kuartal memiliki siklus, pergerakan di dalam satu bulan tunggal juga memiliki ritme algoritmik (biasanya terbagi dalam 4 minggu).
- **Minggu ke-1**: **Opening & Accumulation**. Menentukan harga pembukaan bulan (*True Month Open*). Biasanya minggu ini cenderung membangun likuiditas.
- **Minggu ke-2**: **Manipulation (Judas Swing)**. Seringkali bertepatan dengan rilis NFP (Non-Farm Payrolls). Minggu ini sering kali menciptakan ujung sumbu (Wick) dari *candle* bulanan, yaitu Monthly High atau Monthly Low.
- **Minggu ke-3**: **Expansion / Distribution**. Setelah manipulasi selesai di minggu ke-2, harga berekspansi cepat menuju target makro (DOL). Ini adalah minggu paling mudah untuk trading tren.
- **Minggu ke-4**: **Consolidation / Reversal (X)**. Harga mendekati akhir bulan, institusi melakukan *profit taking*, harga melambat, dan mulai berbalik (retracement) untuk menutup *candle* bulanan.

#### Mengapa Harus Dipahami?

Banyak trader ritel terjebak saat NFP di awal bulan karena mengira itu adalah tren asli, padahal itu hanyalah manipulasi algoritma untuk menjemput likuiditas (Stop Loss) sebelum berekspansi ke arah sebenarnya.

#### Kapan Menggunakannya?

Setiap awal bulan kalender. Sangat penting bagi Swing Trader dan Day Trader untuk mengetahui di minggu ke berapa mereka berada saat ini.

#### Bagaimana Identifikasinya?

- Tarik garis horizontal di **Harga Pembukaan (Open) tanggal 1**.
- Jika bias bulanan Anda **Bullish**, Anda ingin melihat pergerakan harga turun ke bawah harga pembukaan di **Minggu ke-1 atau ke-2** (Manipulasi).
- Setelah tanda-tanda penolakan (*rejection*) di level *Discount* terlihat (misalnya menyentuh HTF Order Block), Anda bersiap untuk posisi Buy besar-besaran untuk memasuki **Minggu ke-3**.

> [!NOTE]
> Kriteria TradingPahami bahwa pergerakan arah harian akan dikendalikan oleh "Di fase apa bulan ini berada sekarang?".

- **Entry**: Cari setup harian yang sejajar dengan siklus. Jika kita berada di Minggu ke-3 dalam bulan yang Bullish, cari skenario beli (*long*) secara agresif.
- **Invalidasi Bias**: Jika di Minggu ke-3 harga tidak melakukan ekspansi dan malah menembus titik terendah (Low) yang dibuat di Minggu ke-2, narasi bulanan Anda kemungkinan besar salah.
- **Target (DOL)**: Targetkan pencapaian (Run) likuiditas pada level High/Low bulanan bulan sebelumnya (Previous Month High/Low) atau Inefisiensi Makro yang ada.

<!-- CHAPTER_END: monthly-cycle-ict.html -->

---

<!-- CHAPTER_START: news-driver-model.html | TITLE: News Driver Model -->
## News Driver Model

## News Driver Model

## News Driver Model

> [!NOTE]
> IkhtisarDi dalam konsep ICT, News Driver Model mengajarkan bahwa berita berdampak tinggi (High Impact News seperti NFP, CPI, FOMC) bukanlah penyebab acak yang menggerakkan market tanpa arah. Berita hanyalah katalis atau "alasan" bagi Smart Money untuk menyuntikkan volatilitas dan memindahkan harga ke level likuiditas yang sudah ditentukan sebelumnya oleh algoritma (IPDA).

### 1. Apa Itu News Driver Model?

News Driver Model adalah pemahaman bahwa rilis berita ekonomi digunakan untuk memberikan **volatilitas instan** agar harga bisa segera mencapai target (Draw on Liquidity/DOL). Seringkali, sebelum berita dirilis, harga akan dikonsolidasikan. Saat berita keluar, harga akan melakukan pergerakan agresif untuk menyapu likuiditas ritel (stop loss), lalu berbalik arah ke target sebenarnya.

### 2. Mengapa Ini Terjadi?

Market butuh likuiditas untuk mengeksekusi pesanan besar (Smart Money). Rilis berita menarik partisipasi ritel secara masif. Ritel biasanya menempatkan Buy Stop/Sell Stop breakout, atau mencoba menebak arah. Smart Money menggunakan momentum ini untuk menjebak ritel dan mendapatkan harga terbaik.

### 3. Kapan Harus Mengantisipasi?

- Perhatikan kalender ekonomi (Forex Factory dll). Fokus pada kalender **Folder Merah** (High Impact).
- Biasanya terjadi pada zona waktu **New York Session** (08:30 AM atau 10:00 AM NY time).
- Saat rilis suku bunga (FOMC) pada jam 14:00 NY time.

### 4. Bagaimana Cara Identifikasinya (Set-Up)?

- **Identifikasi POI dan Likuiditas:** Sebelum berita, tandai Buy Side Liquidity (BSL) dan Sell Side Liquidity (SSL), serta POI (Order Block, FVG) di Timeframe lebih tinggi (HTF).
- **Tunggu Rilis Berita:** Jangan entry *sebelum* berita keluar. Biarkan volatilitas awal terjadi (biasanya manipulasi).
- **Lihat Reaksi pada Level Kunci:** Apakah rilis berita mendorong harga untuk menembus BSL/SSL secara agresif namun gagal tutup di atas/bawahnya (hanya wick / sumbu)?
- **Market Structure Shift (MSS):** Setelah manipulasi (Turtle Soup), tunggu harga berbalik arah dan mematahkan struktur berlawanan di Timeframe lebih rendah (LTF).

### 5. Kriteria Entry, Invalidasi (SL), dan Target (DOL)

- **Entry:** Masuk pada **Fair Value Gap (FVG)** atau **Breaker Block** yang tercipta saat harga berbalik setelah menyapu likuiditas lewat rilis berita.
- **Invalidasi (SL):** Stop loss diletakkan tepat di atas/bawah swing high/low yang dibentuk *saat* rilis berita (titik manipulasi ekstrem).
- **Target (DOL):** Opposing Liquidity. Jika harga baru saja menyapu BSL (manipulasi atas), maka targetkan SSL di bawah (seperti swing low harian/mingguan).

> [!NOTE]
> Pesan MentorJangan pernah trading dengan cara menebak arah sebelum berita rilis ("judi berita"). Profesional sejati membiarkan rilis berita melakukan tugas kotornya (sapu stop loss ritel), lalu kita masuk saat debu mulai mereda dan arah algoritma sebenarnya sudah terlihat.

<!-- CHAPTER_END: news-driver-model.html -->

---

<!-- CHAPTER_START: nwog-dan-ndog.html | TITLE: NWOG dan NDOG -->
## NWOG dan NDOG

## NWOG dan NDOG

> [!NOTE]
> IkhtisarNWOG (New Week Opening Gap) dan NDOG (New Day Opening Gap) adalah gap pembukaan minggu/hari baru yang sering dipakai dalam pembacaan ICT sebagai area referensi algoritmik. Gap ini tidak selalu harus langsung tertutup, tetapi sering menjadi magnet, batas rebalancing, atau level reaksi harga.

### Apa Itu NWOG?

**NWOG** adalah selisih harga antara penutupan minggu sebelumnya dan pembukaan minggu baru. Pada market yang aktif 24 jam seperti forex dan gold CFD, gap ini biasanya muncul di awal minggu ketika market kembali dibuka.

NWOG penting karena:
- Menjadi referensi pembukaan mingguan.
- Sering dipakai sebagai area rebalancing.
- Dapat menjadi magnet harga jika market membutuhkan efisiensi.
- Membantu membaca bias mingguan.

### Apa Itu NDOG?

**NDOG** adalah gap antara penutupan hari sebelumnya dan pembukaan hari baru. Pada chart intraday, NDOG dapat menjadi area penting untuk melihat apakah harga sedang mencari rebalancing harian atau justru melanjutkan ekspansi.

NDOG biasanya diperhatikan bersama:
- Daily Open.
- Previous Day High/Low.
- Asian Range.
- Killzone London dan New York.

### Kenapa Gap Ini Penting?

Dalam perspektif ICT, harga sering bergerak untuk menyeimbangkan area yang belum efisien. NWOG/NDOG dapat menjadi area yang ditinggalkan oleh pembukaan harga dan kemudian dipakai ulang oleh algoritma sebagai titik referensi.

Namun, tidak semua gap wajib tertutup. Gap yang tidak tertutup bisa menjadi tanda bahwa market sedang kuat ke satu arah dan belum berniat melakukan rebalancing.

### Cara Menandai NWOG

- Tandai harga penutupan minggu sebelumnya.
- Tandai harga pembukaan minggu baru.
- Area di antara dua level itu adalah NWOG.
- Simpan level midpoint 50% gap sebagai referensi tambahan.

### Cara Menandai NDOG

- Tandai harga penutupan hari sebelumnya.
- Tandai harga pembukaan hari baru.
- Area di antaranya adalah NDOG.
- Perhatikan apakah harga menolak, menutup, atau menembus gap tersebut.

### Fungsi NWOG/NDOG

#### 1. Magnet Rebalance

Jika harga kembali ke gap dan mulai mengisi area tersebut, market sedang melakukan rebalancing.

#### 2. Support/Resistance Algoritmik

Gap bisa bertindak sebagai batas reaksi harga, terutama jika selaras dengan PD Array HTF.

#### 3. Validasi Bias

Jika harga terus menjauh dari gap tanpa kembali, itu bisa menunjukkan momentum yang kuat.

#### 4. Area Observasi Intraday

Untuk XAUUSD, NDOG bisa dipakai sebagai referensi tambahan saat membaca Daily Open dan sesi Asia.

### Kesalahan Umum

- Menganggap semua gap wajib tertutup.
- Menggunakan NWOG/NDOG tanpa melihat HTF bias.
- Menjadikan gap sebagai entry tunggal tanpa konfirmasi struktur.
- Mengabaikan konteks news dan volatilitas.

### Checklist Belajar

- Apakah gap berada dekat PDH/PDL atau PWH/PWL?
- Apakah gap selaras dengan bias weekly/daily?
- Apakah harga menolak gap atau menutup gap?
- Apakah ada displacement setelah reaksi di gap?

### 🧩 Latihan Mandiri

**A. Identifikasi**
Buka XAUUSD H1 dan tandai 3 NWOG dari 3 minggu terakhir.

**B. Studi Kasus Mini**
Pilih 1 NWOG. Jawab:
1. Apakah gap tertutup penuh, sebagian, atau tidak tertutup?
2. Apa reaksi harga di midpoint gap?
3. Apakah gap membantu membaca bias mingguan?

**C. Kuis Konsep**
- Apa beda NWOG dan NDOG?
- Kenapa gap tidak selalu wajib tertutup?
- Apa fungsi midpoint gap?

**D. Refleksi Jurnal**
Tulis satu kondisi saat kamu terlalu cepat menganggap gap pasti tertutup. Apa yang seharusnya kamu tunggu sebelum menyimpulkan?

<!-- CHAPTER_END: nwog-dan-ndog.html -->

---

<!-- CHAPTER_START: optimal-trade-entry-ote.html | TITLE: Optimal Trade Entry (OTE) -->
## Optimal Trade Entry (OTE)

## Optimal Trade Entry (OTE)

## Optimal Trade Entry (OTE)

> [!NOTE]
> IkhtisarOptimal Trade Entry (OTE) adalah salah satu pola entry tertua, paling murni, dan paling sering dibahas oleh pencipta ICT. Di saat trader ritel menggunakan alat Fibonacci Retracement secara acak untuk memprediksi pantulan harga, ICT menspesifikasikan zona emas tertentu yang disebut OTE, di mana institusi Smart Money selalu menempatkan pesanan limit mereka secara mekanis.

### Rentang Fibonacci OTE

Dalam penggunaan OTE, Anda harus menarik Fibonacci Retracement dari ayunan terendah (*Swing Low*) ke ayunan tertinggi (*Swing High*) untuk tren Bullish, atau sebaliknya dari *Swing High* ke *Swing Low* untuk tren Bearish.

Level kunci yang digunakan dalam matriks OTE ICT adalah:
1. **0.00** (Target Akhir - *Take Profit* 1)
2. **0.50** (*Equilibrium* / Titik Keseimbangan Keadilan Harga)
3. **0.62 (62%)** - *Discount Level*
4. **0.705 (70.5%)** - **Titik Inti OTE (Sweet Spot)**
5. **0.79 (79%)** - *Deep Discount Level*
6. **1.00** (Level Invalidation / *Stop Loss*)

Zona yang terbentang antara **62% hingga 79%** adalah Zona OTE. Sedangkan angka **70.5%** adalah titik akurasi tertingginya.

### Aturan Emas OTE

- **Aturan Paruh Waktu:** Anda sama sekali DILARANG melakukan *buy* jika harga belum turun melewati level **0.50 (Equilibrium)** ke arah bawah. Begitu juga, jangan melakukan *sell* jika harga belum naik melewati 0.50 ke arah atas.
- *Smart Money* hanya membeli barang saat sedang diskon (*Discount Market* < 0.50) dan hanya menjual saat harga terlalu mahal (*Premium Market* > 0.50).

### Konfirmasi Entry OTE

Meskipun harga memasuki zona Fibonacci 62% - 79%, Anda tidak disarankan menaruh pending order (*Buy Limit* / *Sell Limit*) secara membabi buta. OTE adalah sebuah **Area of Interest (POI)**.

Untuk mengubahnya menjadi setup *A+* (*high probability*), sebuah zona OTE harus memiliki pertemuan (*confluence*) dengan setidaknya satu, atau lebih baik dua, *PD Arrays* di dalam zona 62%-79% tersebut:
- Sebuah Order Block yang belum dimitigasi.
- Sebuah Fair Value Gap (FVG) yang masih terbuka (sering disebut *OTE to FVG*).
- Sebuah level Breaker Blocks dan Mitigation Blocks (Sangat kuat jika terbentuk sebagai Unicorn Setup).

### Sinkronisasi dengan Waktu

Seperti hukum mutlak ICT lainnya (lihat Killzones dan True Day Open), pola OTE paling mematikan terjadi pada waktu-waktu spesifik. Jika Anda menemukan formasi pergerakan *Impulse* dan Anda menarik fibonacci, pastikan bahwa *Retracement* (penurunan ke area 70.5%) **terjadi tepat saat salah satu Killzone terbuka** (misalnya pada 08:30 AM EST atau di dalam rentang waktu London).

*(Waktu + Harga OTE + FVG = Precision Strike)*.

<!-- CHAPTER_END: optimal-trade-entry-ote.html -->

---

<!-- CHAPTER_START: power-of-three-weekly.html | TITLE: Power of Three Weekly -->
## Power of Three Weekly

## Power of Three Weekly

> [!NOTE]
> IkhtisarPower of Three (PO3) adalah inti fundamental dari seluruh konsep ICT, yaitu singkatan dari AMD (Accumulation, Manipulation, Distribution). Ketika diterapkan secara khusus pada skala mingguan, ini berpusat secara mutlak pada Harga Pembukaan Mingguan (Weekly Open Price).

#### Apa itu Power of Three (PO3) Mingguan?

Setiap *candle* (lilin) memiliki anatomi: **Open, High, Low, Close**.
- Jarak antara Open ke Low (pada candle Bullish) disebut **Wick (Sumbu)** bawah.
- Dalam ICT, *Wick* ini BUKAN kebetulan; *wick* itu adalah fase **Manipulasi**.
- PO3 Mingguan menegaskan bahwa **Uang Pintar (Smart Money)** HANYA membeli aset di harga diskon dari Pembukaan Mingguan, dan menjual di harga premium dari Pembukaan Mingguan.

#### Mengapa Penting?

Ini memberikan Anda batas (Parameter) yang jelas, hitam dan putih, tanpa keraguan:
- Jika bias Anda naik (*Bullish*), Anda **DILARANG** membeli (Buy) jika harga saat ini berada DI ATAS harga pembukaan mingguan.
- Institusi tidak membeli di harga mahal (Premium); mereka menunggu harga turun di bawah pembukaan (Diskon), baru membeli.

#### Bagaimana Identifikasinya?

- Catat harga pembukaan minggu pada hari **Minggu 18:00 EST / Senin 00:00 EST**. Tarik garis horizontal melintasi keseluruhan minggu (ke kanan).
- Tentukan Bias Mingguan Anda. (Anggaplah *Bearish*/Turun).
- Karena *Bearish*, Anda harus menunggu harga naik **di atas** garis pembukaan tersebut. (Ini adalah fase pembentukan Sumbu Atas / *Manipulation*).
- Ketika harga berada di atas garis (Premium) dan menyentuh zona *Resistance/FVG*, cari konfirmasi turun di *Lower Timeframe* (M15).

> [!NOTE]
> Kriteria TradingIni adalah filter terbaik untuk menghindari "FOMO" (Takut Ketinggalan). Pembukaan Mingguan memisahkan posisi probabilitas rendah dan probabilitas tinggi.

- **Entry**: Cari setup *entry* standar (seperti MSS & kembali ke FVG) HANYA ketika harga berada di zona yang tepat terhadap Pembukaan Mingguan (di bawah Open untuk Long; di atas Open untuk Short).
- **Invalidasi (SL)**: Swing yang menciptakan ujung sumbu mingguan tersebut. Jika harga menembus level ini berlawanan dengan arah bias, artinya ekspansi bergeser ke arah yang salah.
- **Target (DOL)**: Targetkan likuiditas jangka menengah (Liquidity Pools Harian). Setelah harga bergerak tajam menjauhi Harga Pembukaan (Distribution), jangan serakah, ini adalah waktu untuk taking profit sebelum pasar tutup (Close).

<!-- CHAPTER_END: power-of-three-weekly.html -->

---

<!-- CHAPTER_START: quarterly-theory-ict.html | TITLE: Quarterly Theory ICT -->
## Quarterly Theory ICT

## Quarterly Theory ICT

> [!NOTE]
> IkhtisarQuarterly Theory adalah konsep tingkat lanjut di mana siklus pergerakan harga setahun (Macro Cycle) dibagi menjadi 4 kuartal. Teori ini didasarkan pada model AMDX (Accumulation, Manipulation, Distribution, X/Reversal) dalam skala makro.

#### Apa itu Quarterly Theory?

Pasar tidak bergerak secara acak. Institusi besar dan bank sentral beroperasi dengan siklus kuartalan yang terikat pada laporan pendapatan (earnings), pajak, dan penyesuaian suku bunga.
Kuartal dalam setahun dibagi menjadi:
- **Q1 (Januari - Maret)**: Biasanya merupakan fase **Accumulation** (Akumulasi). Pasar mencari pijakan awal.
- **Q2 (April - Juni)**: Sering menjadi fase **Manipulation** (Manipulasi). Q2 kerap kali mencetak Titik Tertinggi atau Terendah untuk tahun tersebut (Yearly High / Yearly Low).
- **Q3 (Juli - September)**: Fase **Distribution** (Distribusi). Trend sebenarnya dari tahun tersebut terjadi dengan sangat jelas dan terarah.
- **Q4 (Oktober - Desember)**: Fase **X (Reversal/Continuation)**. Harga akan mengambil likuiditas akhir tahun, melakukan konsolidasi, atau berbalik arah untuk bersiap masuk ke tahun baru.

#### Mengapa Konsep Ini Penting?

Karena institusi besar tidak bisa membeli/menjual semua posisi dalam satu hari. Mereka butuh hitungan bulan untuk mengakumulasi posisi. Memahami siklus ini memberi Anda **Bias Jangka Panjang (Macro Bias)** yang luar biasa kuat.

#### Kapan dan Bagaimana Menggunakannya?

- Tandai **Yearly Open** (Harga pembukaan awal Januari).
- Perhatikan perilaku **Q1**. Apakah ia berkonsolidasi atau mulai membentuk tren kecil?
- Waspadai **Q2**. Jika Q1 konsolidasi dan Q2 tiba-tiba bergerak agresif ke satu sisi, tanyakan pada diri sendiri: *"Apakah ini Judas Swing makro untuk menjebak retail sebelum Q3 mendistribusikan harga ke arah sebaliknya?"*
- Jika Q2 membentuk Yearly High/Low yang valid, maka fokus **Q3** adalah trading searah dengan trend utama yang baru terbentuk, menargetkan likuiditas besar (HTF Liquidity).

> [!NOTE]
> Aplikasi TradingAnda tidak menggunakan Quarterly Theory untuk menekan tombol Buy/Sell langsung di MetaTrader Anda.

- **Kriteria Penggunaan**: Gunakan ini untuk menentukan *Directional Bias* pada chart **Monthly (Bulanan)** atau **Weekly (Mingguan)**.
- **Targeting Makro**: Menargetkan kumpulan *Buy Stop* atau *Sell Stop* dari tahun-tahun sebelumnya.
- **Keselarasan**: Jika Anda berada di Q3 dan bias makro adalah Bearish, semua setup posisi Jual (Short) pada grafik harian/H4 akan memiliki tingkat keberhasilan (win-rate) yang jauh lebih tinggi.

<!-- CHAPTER_END: quarterly-theory-ict.html -->

---

<!-- CHAPTER_START: smt-divergence-smart-money-tool.html | TITLE: SMT Divergence (Smart Money Tool) -->
## SMT Divergence (Smart Money Tool)

## SMT Divergence (Smart Money Tool)

## SMT Divergence (Smart Money Tool)

> [!NOTE]
> IkhtisarSMT Divergence (Smart Money Tool) adalah konsep analisis korelasi tingkat lanjut dari ICT yang digunakan untuk memvalidasi jebakan pergerakan Smart Money. SMT Divergence membantu kita memastikan apakah sebuah pergerakan harga menembus titik High atau Low itu benar-benar valid (pertanda penerusan tren) atau hanya sekadar jebakan likuiditas (Liquidity Sweep / Turtle Soup).

### Dasar Logika SMT

Pasar finansial bergerak secara sinkron pada aset-aset yang memiliki korelasi tinggi.
- **Korelasi Positif (Searah):** Contoh paling umum adalah **EURUSD** dan **GBPUSD**, atau **Nasdaq (NQ)** dan **S&P 500 (ES)**. Jika EURUSD membuat *Higher High*, secara normal GBPUSD juga harus membuat *Higher High*.
- **Korelasi Negatif (Berlawanan):** Contoh paling umum adalah **DXY** (Indeks Dolar AS) berbanding terbalik dengan EURUSD. Jika DXY membuat *Higher High*, EURUSD normalnya membuat *Lower Low*.

### Bagaimana SMT Divergence Terjadi?

!smt_divergence.svg

*SMT Divergence* terjadi ketika korelasi sinkron tersebut **patah** atau **gagal** terbentuk di area level likuiditas penting.

#### Contoh SMT Bearish (Di Area Resistance / Premium)

Misalkan EURUSD dan GBPUSD sama-sama sedang naik mendekati level *Resistance* kuat atau area *Buy Side Liquidity*.
1. EURUSD berhasil menembus puncak sebelumnya dan mencetak **Higher High (HH)**.
2. Namun di saat yang sama, GBPUSD terlihat tertahan, melemah, dan gagal menembus puncaknya sendiri, sehingga hanya mencetak **Lower High (LH)**.

Ketidakmampuan GBPUSD untuk mengikuti jejak EURUSD ini adalah *SMT Divergence*. Ini menandakan bahwa pergerakan naik (Higher High) pada EURUSD kemungkinan besar **palsu** dan hanya sekadar manuver pencarian likuiditas (*Liquidity Grab*). *Smart Money* sedang melakukan distribusi (menjual) secara diam-diam. Setelah SMT ini terkonfirmasi, kita akan mencari konfirmasi Market Structure Shift (MSS) ke arah bawah untuk melakukan *entry Sell*.

#### Contoh SMT Bullish (Di Area Support / Discount)

Misalkan NQ (Nasdaq) dan ES (S&P 500) sama-sama sedang turun tajam mendekati area *Sell Side Liquidity*.
1. NQ menembus lembah sebelumnya dan mencetak **Lower Low (LL)**.
2. Di waktu yang bersamaan, ES tertahan dan gagal menembus lembah sebelumnya, mencetak **Higher Low (HL)**.

Ini adalah *SMT Divergence Bullish*. Penurunan pada NQ kemungkinan hanyalah jebakan *Stop Hunt*. *Smart Money* sebenarnya sedang melakukan akumulasi pembelian. Kita akan bersiap mencari konfirmasi Market Structure Shift ke arah atas untuk melakukan *entry Buy*.

### Mengapa SMT Sangat Penting?

Sebagai *trader*, kita sering kebingungan membedakan apakah sebuah *breakout* itu asli (BOS) atau palsu (Sweep). Dengan mengamati SMT Divergence pada aset berkorelasi, kita seolah mendapatkan "sinyal bocoran" dari balik layar bahwa institusi sedang mendistribusikan pesanan di arah sebaliknya.

SMT adalah *filter* tambahan yang sangat mematikan. Ketika digabungkan dengan Order Block atau Fair Value Gap (FVG) yang berkualitas tinggi, tingkat *win rate* Anda dapat meningkat drastis.

<!-- CHAPTER_END: smt-divergence-smart-money-tool.html -->

---

<!-- CHAPTER_START: smt-divergence.html | TITLE: SMT Divergence -->
## SMT Divergence

## SMT Divergence

> [!NOTE]
> IkhtisarSMT Divergence (Smart Money Tool Divergence) adalah perbedaan struktur harga antar-aset yang biasanya bergerak selaras. Dalam ICT, SMT bukan indikator seperti RSI/MACD, melainkan cara membaca retakan korelasi antar instrumen.

### Apa Itu SMT Divergence?

SMT terjadi ketika dua aset yang berkorelasi tidak lagi membentuk high/low yang sinkron.

Contoh korelasi positif:
- EURUSD vs GBPUSD
- AUDUSD vs NZDUSD
- NQ vs ES vs YM

Contoh korelasi negatif:
- DXY vs EURUSD
- DXY vs XAUUSD

Dalam XAUUSD, DXY sering dipakai sebagai pembanding. Jika DXY melemah tetapi XAUUSD gagal menguat, itu menunjukkan gold sedang lemah secara relatif. Jika DXY menguat tetapi XAUUSD tidak ikut turun, itu menunjukkan gold sedang kuat secara relatif.

### Logika Dasar

Market bergerak dari satu area Liquidity ke area liquidity lain. Saat satu aset mengambil liquidity tetapi aset pembanding gagal melakukan hal yang sama, muncul ketidakseimbangan korelasi.

Contoh bullish SMT:
1. Aset A membuat lower low.
2. Aset B gagal membuat lower low.
3. Aset B relatif lebih kuat.
4. Validasi tetap menunggu perubahan struktur seperti Market Structure Shift.

Contoh bearish SMT:
1. Aset A membuat higher high.
2. Aset B gagal membuat higher high.
3. Aset B relatif lebih lemah.
4. Validasi tetap menunggu displacement dan perubahan struktur.

### Lokasi SMT yang Valid

SMT paling berguna jika muncul di lokasi penting, bukan di tengah chart tanpa konteks.

SMT yang layak diperhatikan biasanya muncul di:
- Area PD Array HTF.
- Area Buy Side Liquidity atau Sell Side Liquidity.
- Dekat PDH/PDL, PWH/PWL, Asian High/Low, atau Equal High/Low.
- Saat sesi aktif seperti Killzone (Asia, London, New York).

### Cara Membaca Kekuatan

- Aset yang gagal membuat higher high saat aset pembanding berhasil membuat high baru biasanya lebih lemah.
- Aset yang gagal membuat lower low saat aset pembanding berhasil membuat low baru biasanya lebih kuat.
- Untuk XAUUSD, bandingkan reaksi gold terhadap pergerakan DXY.

### SOP Belajar SMT

- Tentukan bias HTF.
- Tandai draw on liquidity utama.
- Pilih aset pembanding yang relevan.
- Tunggu harga masuk ke area penting.
- Bandingkan high/low antar-aset.
- Tunggu konfirmasi struktur seperti MSS/CISD.
- Catat hasilnya di jurnal.

### Kesalahan Umum

- Mencari SMT di semua tempat.
- Mengabaikan HTF.
- Menganggap SMT sebagai trigger entry tunggal.
- Salah memilih aset pembanding.
- Memaksakan narasi karena sudah ingin entry.

### 🧩 Latihan Mandiri

**A. Identifikasi (Chart Marking)**
Buka XAUUSD dan DXY. Cari 3 contoh ketika DXY membuat high/low baru tetapi XAUUSD gagal merespons secara normal.

Tandai:
- Level liquidity yang diambil.
- Reaksi XAUUSD.
- Apakah gold terlihat kuat atau lemah secara relatif.

**B. Studi Kasus Mini**
Pilih 1 contoh terbaik. Jawab:
1. Apakah SMT muncul di area HTF yang jelas?
2. Apakah setelah SMT muncul ada MSS/CISD?
3. Apakah setup tetap masuk akal jika SMT diabaikan?

**C. Kuis Konsep**
- Apa beda SMT dengan divergence indikator?
- Dalam XAUUSD vs DXY, kapan gold dianggap lemah?
- Kenapa SMT tidak boleh dipakai sendiri?

**D. Refleksi Jurnal**
Tulis satu contoh ketika kamu pernah memaksakan korelasi DXY-XAUUSD. Jelaskan apa yang seharusnya ditunggu sebelum mengambil keputusan.

Materi ini adalah hasil konsolidasi dari file SMT lama di bagian-11 dan versi lanjutan di bagian-31 agar pembelajaran tidak duplikatif.

<!-- CHAPTER_END: smt-divergence.html -->

---

<!-- CHAPTER_START: standard-deviation-projections.html | TITLE: Standard Deviation Projections -->
## Standard Deviation Projections

## Standard Deviation Projections

## Standard Deviation Projections

> [!NOTE]
> IkhtisarProyeksi Standar Deviasi adalah cara matematis rahasia ICT untuk menemukan sejauh mana harga akan bergerak setelah sebuah periode manipulasi atau konsolidasi selesai. Ini adalah alat pamungkas untuk menentukan "Kapan pergerakan tren ini akan berakhir?".

### Apa itu Standard Deviation Projections?

Ini adalah metode menggunakan Fibonacci Extension untuk memproyeksikan target pergerakan harga. Alih-alih menebak di mana harga berhenti, kita mengukur ukuran spesifik dari "fase manipulasi" dan melipatgandakannya menggunakan koefisien standar deviasi (-1, -1.5, -2, -2.5, -3, hingga maksimal biasanya -4).

### Mengapa Alat Ini Digunakan?

Algoritma IPDA memindahkan harga secara simetris. Jarak harga dimanipulasi keluar dari range konsolidasi sering kali sama dengan blok-blok (kelipatan) ekspansi yang akan datang. Alat ini memberikan kita titik keluar (Take Profit) presisi-tinggi sebelum pasar tiba di sana.

### Kapan & Bagaimana Mengidentifikasinya?

Proyeksi ini digunakan ketika kita memiliki dua hal:
1. **Central Bank Dealers Range (CBDR) / Asian Range** atau **Accumulation/Consolidation** apa pun yang rapi.
2. **Manipulation Phase / Judas Swing:** Harga menembus rentang konsolidasi ke satu arah (untuk memicu SL/breakout trader), lalu berbalik arah sepenuhnya.

**Langkah Menarik Fibonacci:**
- Temukan Swing High dan Swing Low dari **fase manipulasi (Judas Swing)** atau rentang konsolidasi terakhir.
- Tarik Fibonacci dari Swing Low ke Swing High (jika antisipasi harga akan turun / Bearish) atau dari Swing High ke Swing Low (jika antisipasi harga akan naik / Bullish).
- Setel level Fibonacci Anda pada:
  - `-1.0` (Standar Deviasi ke-1)
  - `-1.5`
  - `-2.0` (Standar Deviasi ke-2)
  - `-2.5` (Target yang paling umum dicapai)
  - `-4.0` (Pergerakan ekstrem/maksimal)

> [!NOTE]
> Konfluensi PresisiProyeksi Standard Deviation tidak berdiri sendiri. Level -2.0 atau -2.5 yang bertepatan dengan HTF Liquidity Pool atau HTF FVG adalah magnet sejati. Itulah Draw on Liquidity probabilitas tinggi!

### Kriteria Eksekusi

- **Entry:** Masuk menggunakan model biasa (MSS + FVG di dalam kisaran harga setelah manipulasi selesai).
- **Invalidasi (SL):** Di ujung titik manipulasi ekstrem (swing High/Low dari Judas Swing).
- **Target (DOL):**
- TP 1 (Parsial): Level -1.0 hingga -1.5.
- TP Utama: Level -2.0 hingga -2.5.
- Jika ini hari tren besar (Trending Day), pegang sisa posisi hingga level -4.0.

<!-- CHAPTER_END: standard-deviation-projections.html -->

---

<!-- CHAPTER_START: weekly-cycle-ict.html | TITLE: Weekly Cycle ICT -->
## Weekly Cycle ICT

## Weekly Cycle ICT

> [!NOTE]
> IkhtisarWeekly Cycle (Siklus Mingguan) adalah kerangka kerja (framework) yang memetakan bagaimana profil candle mingguan biasanya terbentuk dari Senin hingga Jumat.

#### Apa itu Weekly Cycle?

Siklus pergerakan yang memprediksi hari apa *High* (Titik Tertinggi) atau *Low* (Titik Terendah) mingguan akan terbentuk. Model paling klasik dan akurat dalam ICT adalah:
- **Tuesday / Wednesday Low of the Week** (Untuk kondisi pasar Bullish).
- **Tuesday / Wednesday High of the Week** (Untuk kondisi pasar Bearish).

#### Mengapa Berpola Seperti Ini?

Algoritma membutuhkan waktu (biasanya 24 hingga 48 jam pertama dalam seminggu) untuk menjebak uang ritel ke arah yang salah (manipulasi) sebelum institusi melepaskan volume sebenarnya untuk mendistribusikan harga ke arah tren yang asli di pertengahan minggu.

#### Kapan Menggunakannya?

Siklus ini dipantau dari **Senin hingga Rabu**. Jika titik ekstrem mingguan belum terbentuk pada hari Rabu, maka hari Kamis memiliki probabilitas tinggi untuk membentuknya.

#### Bagaimana Identifikasinya (Contoh Bullish)?

- Tentukan Bias Makro Anda (Misal: Naik/Bullish).
- Perhatikan hari **Senin**. Senin biasanya membentuk rentang harga awal (Initial Range).
- Perhatikan hari **Selasa**. Harga turun menembus titik terendah Senin (*Monday's Low*) dan masuk ke area **Discount (FVG/Order Block) pada kerangka waktu H4/Daily**.
- Terjadi penolakan harga pada hari Selasa atau Rabu (London Session). Inilah indikasi bahwa **Low of the Week** telah terbentuk.

> [!NOTE]
> Kriteria TradingJangan panik jika awal minggu (Senin/Selasa) harga bergerak berlawanan dengan analisa makro Anda. Itu adalah fase manipulasi.

- **Entry**: Cari model *entry* (seperti MSS) pada M15 atau M5 di sesi London/NY pada hari Selasa atau Rabu setelah harga masuk ke area *Discount*.
- **Invalidasi (SL)**: Jika hari Kamis harga malah turun tajam melewati titik terendah hari Selasa, maka siklus mingguan (narasi) Anda batal atau *Market* sedang berada dalam kondisi yang sangat tidak teratur (*choppy*).
- **Target (DOL)**: Targetkan likuiditas di atas titik tertinggi minggu sebelumnya (Previous Week High) atau level resistensi/ketidakseimbangan pada chart Mingguan/Harian.

<!-- CHAPTER_END: weekly-cycle-ict.html -->

---
