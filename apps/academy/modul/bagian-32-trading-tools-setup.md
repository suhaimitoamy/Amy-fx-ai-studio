# Trading Tools & Setup
> Modul Edukasi Amy FX Pro — bagian-32-trading-tools-setup
> Total Bab: 2 Bab | Format: Editable Markdown for Google AI Studio

---

<!-- CHAPTER_START: cara-setting-tradingview-untuk-smc.html | TITLE: Cara Setting TradingView untuk SMC -->
## Cara Setting TradingView untuk SMC

## Cara Setting TradingView untuk SMC

> [!NOTE]
> IkhtisarAgar analisa Smart Money Concept (SMC) dan ICT Anda presisi, workspace TradingView Anda harus bersih dan objektif.

### 1. Bersihkan Chart (Naked Chart)

Trader institusi tidak menggunakan indikator osilator seperti RSI, MACD, atau Stochastic.

- Hapus semua indikator *lagging*.
- Sisakan hanya pergerakan harga (*price action*) berupa Candlestick.

### 2. Pengaturan Warna Candlestick

Gunakan warna yang tidak memicu emosi (seperti merah terang atau hijau menyala). Warna netral membantu psikologi Anda tetap stabil.

- **Bullish Candle**: Biru pastel, putih, atau abu-abu terang.
- **Bearish Candle**: Hitam, abu-abu gelap, atau biru tua.
- **Background**: Abu-abu solid atau hitam (Dark Mode) tanpa *grid lines* (garis-garis latar belakang). Matikan grid lines di Settings > Appearance > Grid lines (opacity 0%).

### 3. Simpan Template Drawing Tools

Buat *favorite toolbar* untuk alat gambar yang sering digunakan:

- **Trendline**: Gunakan untuk menandai *Liquidity* (BSL/SSL).
- **Horizontal Ray**: Untuk menandai level penting seperti PDH/PDL (Previous Day High/Low).
- **Rectangle**: Untuk menggambar Order Block (OB) dan Fair Value Gap (FVG).
   
*Tips*: Simpan template warna berbeda (misal: FVG Biru untuk Bullish, FVG Merah untuk Bearish).
- *Tips*: Simpan template warna berbeda (misal: FVG Biru untuk Bullish, FVG Merah untuk Bearish).
- **Fibonacci Retracement**: Setting hanya level 0, 0.5 (Equilibrium), 1, dan level OTE (0.62, 0.705, 0.79).
- **Text Tool**: Untuk memberikan anotasi CHoCH, MSS, BOS, atau IDM.

### 4. Pengaturan Zona Waktu (Timezone)

Sangat krusial dalam konsep ICT:

- Ubah zona waktu TradingView Anda di pojok kanan bawah ke **UTC-4 (New York)**.
- Ini wajib agar Anda bisa selaras dengan waktu pembukaan dan penutupan *Session* New York, serta menentukan *True Day Open* dan *Midnight Open*.

**Selanjutnya:** Rekomendasi Indikator ICT Killzones

<!-- CHAPTER_END: cara-setting-tradingview-untuk-smc.html -->

---

<!-- CHAPTER_START: rekomendasi-indikator-ict-killzones.html | TITLE: Rekomendasi Indikator ICT Killzones -->
## Rekomendasi Indikator ICT Killzones

## Rekomendasi Indikator ICT Killzones

> [!NOTE]
> IkhtisarMeskipun SMC berfokus pada naked chart, ada beberapa indikator utilitas di TradingView yang sangat membantu untuk memetakan waktu (Time). Dalam ICT, Time > Price.

### 1. Asian Range & Killzones (oleh cja)

Indikator ini secara otomatis akan mewarnai latar belakang chart pada jam-jam spesifik.

- **Fungsi**: Menandai *Asian Range* (konsolidasi awal hari), *London Killzone*, dan *New York Killzone*.
- **Cara Setting**: Sesuaikan warna agar transparan dan tidak mengganggu visual candlestick. Pastikan rentang waktunya diset ke UTC-4 (New York Time).

### 2. ICT Midnight Open & True Day Open

Harga pembukaan (*Opening Price*) adalah level institusional yang sangat penting.

- **Fungsi**: Menggambar garis horizontal statis dari harga buka jam 00:00 EST (Midnight) dan 08:30 EST (True Day Open).
- **Penggunaan**: Jika Anda *Bullish*, Anda ingin membeli di **bawah** Midnight Open (di area Discount harian).

### 3. FXN - Previous Day High/Low

- **Fungsi**: Menandai otomatis titik tertinggi dan terendah dari hari, minggu, atau bulan sebelumnya.
- **Penggunaan**: PDH dan PDL adalah *Draw on Liquidity* (Target Likuiditas) utama. Algoritma akan sering bergerak untuk menyapu level-level ini.

### Peringatan Penggunaan Indikator

- **Jangan bergantung pada Indikator Entry**: Jangan gunakan indikator SMC otomatis yang melabeli CHoCH/BOS. Indikator tersebut sering keliru membaca konteks (seperti *Inducement* palsu). Latihlah mata Anda untuk melihat struktur secara manual.
- **Gunakan hanya untuk Waktu dan Level Statis**: Jadikan indikator hanya sebagai pembatas waktu dan penanda garis awal, bukan pengambil keputusan.

**Terkait:** Asia Range dan Liquidity, Killzone

<!-- CHAPTER_END: rekomendasi-indikator-ict-killzones.html -->

---
