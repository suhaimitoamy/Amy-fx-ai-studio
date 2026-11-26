/* Amy FX Academy — Deep Mastery Enrichment Layer (Modul 01–36)
 * Memperdalam seluruh 36 modul inti agar bebas kebingungan saat mapping nyata:
 * - extraConceptBlocks: bedah logika mendalam pada topik paling membingungkan (DOL, FVG, OB, Dealing Range, Sweep vs Liquidity Run, CISD, MTF, AMD, dll.)
 * - mappingSteps: panduan mekanis langkah demi langkah menggambar langsung di chart kosong
 * - decisionTree: pohon keputusan IF -> THEN untuk kasus abu-abu di chart nyata
 * - failedCase: bedah kasus gagal (kenapa setup yang terlihat mirip malah kena SL)
 * - extraQuiz: tambahan soal skenario nyata untuk gerbang Uji Paham (Locking >= 80%)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.AmyAcademyEnrichment = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : window, function () {
  'use strict';

  const ENRICHMENTS = {
    'kenal-trading-broker-akun': {
      mappingSteps: [
        'Buka aplikasi broker teregulasi dan buat **Akun Demo** dengan modal realistis ($100 atau $500 — jangan $100.000 agar mental tidak rusak).',
        'Catat nama simbol Gold di broker (biasanya `XAUUSD`, `XAUUSDm`, atau `XAUUSDc` untuk Cent) lalu masukkan ke daftar favorit Market Watch.',
        'Cek ukuran 1 lot kontrak Gold di menu *Specification* MT5 (Standard = 100 oz; Cent = 1/100 nilai dolar).'
      ],
      decisionTree: [
        {
          condition: 'Saya cuma punya modal latihan $15–$50 tapi ingin merasakan emosi uang asli. Pilih Standard atau Cent?',
          action: 'Wajib **Akun Cent (USC)**! Modal $20 menjadi 2.000 USC sehingga risiko 1% per trade tetap masuk akal tanpa langsung margin call.'
        },
        {
          condition: 'Sudah 2 minggu profit di Demo, apakah boleh langsung deposit besar di akun Standard?',
          action: 'Belum. Tuntaskan minimal 30–50 transaksi terukur di Jurnal dengan disiplin SL, baru pindah bertahap ke Cent lalu Standard.'
        }
      ],
      failedCase: {
        title: 'Kesalahan Klasik Pemula',
        context: 'Deposit $30 langsung ke Akun Standard lalu buka 0.03 lot XAU/USD karena tergiur cepat balik modal.',
        whyFailed: 'Gold bergerak mundur hanya $10 (100 pips — gerak normal harian) dan saldo $30 langsung ludes terkena Stop Out dalam 15 menit.'
      }
    },

    'bid-ask-spread-pips-gold': {
      mappingSteps: [
        'Buka MT5 → Settings/Properties Chart → aktifkan centang **Show Ask Price Line** agar garis Bid dan Ask terlihat bersamaan.',
        'Ukur jarak selisih garis Ask dan Bid saat sesi London/NY (normal $0.15–$0.35) lalu bandingkan saat rollover jam 05:00 WITA (bisa melebar >$1.50).',
        'Latih konversi cepat: setiap harga Gold naik/turun `$1.00` = `10 pips` = `100 points`.'
      ],
      decisionTree: [
        {
          condition: 'Saya pasang posisi SELL dengan SL di 2.655,00. Harga di chart baru menyentuh 2.654,60 tapi posisi sudah kena SL. Apakah broker curang?',
          action: 'Bukan curang — chart default hanya menampilkan garis **BID**, sedangkan posisi **SELL ditutup oleh garis ASK**! Jika spread sedang $0.40, garis Ask sudah menyentuh 2.655,00.'
        },
        {
          condition: 'Spread Gold tiba-tiba melebar di atas $0.80 (8 pips) menjelang berita atau pergantian hari.',
          action: 'Tutup tangan (NO ENTRY). Spread lebar memakan R:R dan membuat SL sangat mudah tersambar tanpa menyentuh harga sebenarnya.'
        }
      ],
      failedCase: {
        title: 'Terjebak SL Tipis Tanpa Napas Spread',
        context: 'Pasang Sell Limit di 2.650,00 dengan SL pas di puncak wick 2.651,00 (hanya $1) saat spread $0.40.',
        whyFailed: 'Harga hanya naik ke 2.650,65 (belum menembus wick), tapi garis Ask menyentuh 2.651,05 → SL tersambar duluan sebelum harga jatuh -100 pips.'
      }
    },

    'lot-leverage-margin-equity': {
      mappingSteps: [
        'Tentukan dulu 3 angka sebelum klik order: **Modal ($)**, **Batas Risiko (%) maksimal 1%**, dan **Jarak SL dalam dolar ($)**.',
        'Hitung memakai rumus wajib: `Lot Standard = Risiko ($) ÷ (Jarak SL $ × 100)`. Jika hasilnya < 0.01 lot, berarti modalmu wajib memakai Akun Cent.',
        'Cek angka **Margin Level** di tab Trade MT5 — jaga selalu jauh di atas 500% dengan tidak membuka posisi berlapis (over-layer).'
      ],
      decisionTree: [
        {
          condition: 'Hasil hitung rumus lot adalah 0.004 lot di Akun Standard, tapi minimal broker adalah 0.01 lot. Boleh dibulatkan naik ke 0.01?',
          action: 'Hati-hati! Membulatkan 0.004 → 0.01 artinya kamu menaikkan risiko 2.5x lipat dari rencana. Solusi sehat: pindah ke **Akun Cent** atau cari setup dengan jarak SL lebih ringkas.'
        },
        {
          condition: 'Balance tertulis $500 tapi Equity tinggal $410. Mana angka sejati uangku sekarang?',
          action: '**Equity ($410)**! Balance belum menghitung posisi rugi yang masih terbuka (floating loss).'
        }
      ],
      failedCase: {
        title: 'Jebakan Leverage Tinggi 1:1000',
        context: 'Modal $100 dengan leverage 1:1000 membuat trader bisa membuka 0.20 lot XAU/USD (margin terpakai kecil).',
        whyFailed: 'Leverage besar hanya mengecilkan margin, BUKAN mengecilkan risiko per pips! Gerak -$5 di 0.20 lot = rugi -$100 (habis total dalam 1 candle M5).'
      }
    },

    'panduan-mt5-lima-jenis-order': {
      mappingSteps: [
        'Saat harga masih di atas area Discount pilihanmu (misal harga 2.655, kamu mau beli murah di 2.648), pilih **Buy Limit**.',
        'Saat harga masih di bawah area premium pilihanmu (misal harga 2.645, kamu mau jual mahal di 2.652), pilih **Sell Limit**.',
        'Selalu isi kolom **Stop Loss** dan **Take Profit** SEBELUM menekan tombol Place/Order — jangan pernah menunda pasang SL.'
      ],
      decisionTree: [
        {
          condition: 'Bingung membedakan Buy Limit vs Buy Stop saat pasang order di MT5?',
          action: 'Ingat kalimat sederhana: **LIMIT = Nunggu harga Discount/mahal lalu memantul balik** (Buy Limit di bawah harga sekarang, Sell Limit di atas). **STOP = Ikut tembusan/breakout** (Buy Stop di atas harga sekarang).'
        },
        {
          condition: 'Order Buy Limit gagal dipasang dengan pesan "Invalid S/L or T/P" di MT5.',
          action: 'Cek dua hal: (1) harga entry Buy Limit harus lebih rendah dari Ask sekarang, dan (2) SL harus lebih rendah dari entry, TP lebih tinggi dari entry, minimal di luar jarak *Stops Level* broker.'
        }
      ],
      failedCase: {
        title: 'Salah Pilih Buy Stop Jadi Beli di Pucuk',
        context: 'Ingin beli murah di FVG bawah tapi salah pilih Market Execution / Buy Stop di atas puncak.',
        whyFailed: 'Posisi langsung terbuka di harga paling mahal tepat sebelum harga retrace turun menuju SL.'
      }
    },

    'membaca-chart-candlestick-nol': {
      mappingSteps: [
        'Buka chart polos tanpa indikator, fokus membaca 4 titik setiap candle: **Open, High, Low, Close (OHLC)**.',
        'Bandingkan ukuran **Body** (jarak Open–Close = tenaga real) vs **Wick/Wick** (jarak ekstrem = penolakan harga).',
        'Latih berpindah TF dari **H1 → M15 → M5**: ingat 1 candle H1 berisi 4 candle M15 dan 12 candle M5.'
      ],
      decisionTree: [
        {
          condition: 'Candle M5 sedang membentuk batang hijau raksasa padahal baru berjalan 1 menit (sisa 4 menit). Boleh langsung anggap breakout valid?',
          action: '**JANGAN!** Candle belum sah sebelum **Close (menit ke-5 selesai)**. Sangat sering di XAU/USD candle hijau raksasa berubah jadi wick panjang merah dalam 30 detik terakhir.'
        },
        {
          condition: 'Candle H1 menunjukkan hijau kuat tapi saat dibuka di M5 tampak ada 3 candle merah turun. Mana yang benar?',
          action: 'Keduanya benar — 3 candle merah M5 hanyalah gerak naik-turun di dalam **15 menit pertama** pembentuk wick bawah candle H1. Selalu baca M5 dalam konteks H1.'
        }
      ],
      failedCase: {
        title: 'Terjebak Candle Belum Close',
        context: 'Melihat candle M15 menjebol resistance di menit ke-4 lalu buru-buru Buy.',
        whyFailed: 'Saat candle M15 benar-benar tutup di menit ke-15, harga sudah ditarik turun membentuk pin bar penolakan — breakout tadi hanyalah wick sweep.'
      }
    },

    'dasar-tren-sr-rencana-14-hari': {
      mappingSteps: [
        'Tandai titik puncak dan lembah paling mencolok di H1: naik berurutan (**HH–HL**) = Uptrend, turun berurutan (**LH–LL**) = Downtrend.',
        'Gambar area Support/Resistance horizontal yang pernah disentuh minimal 2 kali — tapi mulai latih mata bahwa area S/R "terlalu rapi" kelak adalah tempat tumpukan stop loss (Liquidity) di ICT!',
        'Jalankan disiplin 14 hari: 7 hari pertama fokus tandai chart & latihan eksekusi Demo, 7 hari berikutnya catat minimal 10 trade dengan SL/TP baku ke Jurnal.'
      ],
      decisionTree: [
        {
          condition: 'Harga bolak-balik di kotak sempit tanpa membuat puncak baru maupun lembah baru.',
          action: 'Itu pasar **Sideways / Konsolidasi**. Jangan menebak tren di tengah kotak — tunggu harga keluar sweep salah satu ujungnya dulu.'
        },
        {
          condition: 'Baru hari ke-5 latihan Demo tapi sudah ingin langsung deposit akun Real karena merasa sudah paham.',
          action: '**Tahan dulu!** Selesaikan minimal 14 hari + 15 transaksi tercatat di Jurnal agar refleks pasang SL/Lot sudah otomatis tanpa salah tombol.'
        }
      ],
      failedCase: {
        title: 'Melompat ke Uang Besar Sebelum Lulus 14 Hari',
        context: 'Baru baca 1 bab langsung masuk akun Real tanpa tahu cara pasang SL/Limit order dengan cepat.',
        whyFailed: 'Panik saat floating minus sedikit, salah tekan tombol close, dan trauma sebelum benar-benar memahami struktur ICT.'
      }
    },

    'logika-trading-probabilitas': {
      mappingSteps: [
        'Ubah cara menilai hasil dari **1 transaksi** menjadi **blok 20 transaksi** dengan 1 aturan yang sama persis.',
        'Sebelum masuk pasar, tetapkan rasio minimal **1:2 R:R** — artinya 1 kali TP menutup 2 kali SL, sehingga win-rate 45% saja sudah sangat profitabel.',
        'Tulis probabilitas di catatan Jurnal: *"Setup ini tetap bisa kena SL meski 100% sesuai SOP — dan itu biaya operasional normal."*'
      ],
      decisionTree: [
        {
          condition: 'Saya baru saja kena 2 kali SL beruntun padahal sudah sesuai aturan ICT. Apakah strateginya gagal dan harus ganti strategi?',
          action: '**TIDAK.** Dengan win-rate 55%, peluang kena 2–3 SL beruntun adalah wajar secara matematika. Ganti-ganti strategi setiap 2 kali SL justru menjamin gagal jangka panjang.'
        },
        {
          condition: 'Trade barusan menang besar padahal aku melanggar SOP (tanpa SL & entry FOMO). Apakah itu trade yang bagus?',
          action: '**BUKAN!** Itu *Bad Win* — racun paling berbahaya karena memberi hadiah pada kebiasaan buruk yang kelak menghancurkan akun dalam 1 kali salah.'
        }
      ],
      failedCase: {
        title: 'Mencari Win-Rate 95% dengan R:R Terbalik',
        context: 'Mengambil profit cepat $1 (TP 10 pips) tapi membiarkan rugi mengambang -$15 tanpa SL agar "jarang rugi".',
        whyFailed: '9 kali menang (+$9) langsung hancur lebur hanya oleh 1 kali kalah (-$15). Ini jebakan win-rate tinggi tapi ekspektansi negatif.'
      }
    },

    'membaca-candlestick-body-wick': {
      mappingSteps: [
        'Pegang hukum emas ICT: **Body tells the story (cerita arah sejati), Wick does the damage (tugas wick hanya sweep SL)**.',
        'Untuk setiap break level penting (BOS, MSS, atau level PDH/PDL), periksa **di mana BODY ditutup**, bukan seberapa panjang wick yang menusuk.',
        'Gunakan **Consequent Encroachment (titik tengah 50%) dari wick panjang** di H1/Daily sebagai batas reaksi: jika candle berikut menghormati 50% wick, arah penolakan sangat kuat.'
      ],
      decisionTree: [
        {
          condition: 'Sebuah wick panjang menusuk jauh di atas PDH lalu body ditutup kembali di bawah PDH. Apakah tren berubah Bullish?',
          action: '**TIDAK!** Justru sebaliknya: itu tanda **penolakan / Liquidity Sweep** (damage done by wick), bukan konfirmasi breakout naik.'
        },
        {
          condition: 'Body candle tebal ditutup penuh di luar level Swing High, bukan sekadar wick.',
          action: 'Baru sah disebut **energi break nyata (BOS/Displacement)** searah body close tersebut.'
        }
      ],
      failedCase: {
        title: 'Menganggap Wick Panjang Sebagai Break of Structure',
        context: 'Wick M15 menusuk 8 pips di atas High lama lalu ditutup merah panjang di bawah High.',
        whyFailed: 'Trader mengira sudah BOS Bullish dan mencari Buy saat retrace — padahal wick tersebut adalah jebakan sweep BSL sebelum harga terjun.'
      }
    },

    'karakter-xauusd-spread-wita': {
      mappingSteps: [
        'Tandai pembagian jam emas di chart XAU/USD (WITA / UTC+8): **Asia (06:00–14:00)** untuk membentuk range, **London (14:00–17:00)** & **NY AM (19:30–23:00)** untuk eksekusi utama.',
        'Pasang alarm pengingat **Dead Zone Rollover (04:45–06:15 WITA)** agar tidak membuka posisi baru saat spread melebar ekstrem.',
        'Ukur rata-rata gerak harian XAU/USD (ADR ~ $25–$50/hari) agar ekspektasi SL ($2.5–$5) dan TP ($6–$15) realistis terhadap karakter Gold.'
      ],
      decisionTree: [
        {
          condition: 'Jam 10:30 WITA (tengah sesi Asia), Gold bergerak lambat naik turun $3. Apakah layak scalping besar?',
          action: '**SKIP.** Sesi Asia di XAU/USD lebih sering menjadi zona akumulasi/jebakan. Tugasmu di sesi Asia hanya menandai **Asia High** dan **Asia Low** sebagai bahan bakar untuk sesi London/NY.'
        },
        {
          condition: 'Pukul 05:15 WITA aku melihat posisi yang terlihat cantik di M5 tetapi spread tiba-tiba melebar jadi $1.80.',
          action: '**DILARANG ENTRY!** Itu jam Rollover antar-bank harian; spread lebar akan langsung menggerus R:R dan rawan menyambar SL secara artifisial.'
        }
      ],
      failedCase: {
        title: 'Trading Agresif Jam 11 Siang WITA (Sesi Mati)',
        context: 'Masuk 4 kali entry di M5 pada pukul 10:00–12:30 WITA karena bosan menunggu London.',
        whyFailed: 'Kena kocok SL bolak-balik di range sempit sehingga saat sesi London benar-benar memberi setup A+ pukul 14:30 WITA, modal dan mental sudah habis.'
      }
    },

    'struktur-pasar-dasar': {
      mappingSteps: [
        'Buka **H1** terlebih dahulu (jangan M5!). Cari swing yang paling terlihat jelas dari kejauhan (**Major Swing High & Major Swing Low**) — tandai hanya titik yang benar-benar mengubah arah gerak minimal 5–10 candle.',
        'Hubungkan puncak ke puncak dan lembah ke lembah: selama **Higher Low (HL) mayor** belum ditembus oleh **Body Close**, struktur tetap Bullish (begitu pula **Lower High (LH) mayor** untuk Bearish).',
        'Abaikan riak-riak 1–2 candle kecil di dalam satu gelombang besar — itu hanya **sub-struktur internal**, bukan pergantian tren!'
      ],
      decisionTree: [
        {
          condition: 'Di H1 ada banyak puncak dan lembah kecil. Bagaimana tahu mana Swing Mayor (External) dan mana riak kecil (Internal)?',
          action: 'Gunakan **Aturan 3-Candle + Reaksi Nyata**: Swing High valid adalah candle yang diapit minimal 1 candle lebih rendah di kiri dan kanan **DAN** diikuti dorongan turun nyata (atau sweep Liquidity / retrace minimal 30%–50% dari leg sebelumnya).'
        },
        {
          condition: 'Di M5 harga sudah bikin LH-LL turun, tapi di H1 harga baru saja menyentuh HL mayor Bullish. Tren sebenarnya naik atau turun?',
          action: '**Tren sejati tetap NAIK (H1 menang)!** Turunnya M5 hanyalah fase koreksi internal (pullback) menuju zona Discount H1.'
        }
      ],
      failedCase: {
        title: 'Salah Menandai Micro-Pullback Sebagai Perubahan Tren',
        context: 'Di tengah uptrend kuat H1, harga turun 2 candle M5 lalu menembus micro-low kecil; trader mengira tren berbalik Bearish dan pasang Sell.',
        whyFailed: 'Struktur mayor H1 sama sekali belum berubah — HL mayor tetap utuh dan harga langsung meledak naik melanjutkan HH baru.'
      }
    },

    'multi-timeframe-h1-m15-m5': {
      mappingSteps: [
        'Bagi peran 3 timeframe secara kaku (jangan ditukar!): **H1 = Peta Arah & Zona Besar (Bias + HTF POI)**, **M15 = Peta Liquidity & Persiapan (Asia Range, EQH/EQL, M15 POI)**, **M5 = Pelatuk Eksekusi (Sweep + CISD/MSS + Entry)**.',
        'Aturan **Top-Down 100%**: selalu mulai menggambar dari H1 → turun ke M15 → terakhir baru buka M5 saat harga SUDAH tiba di POI H1/M15.',
        'Jika harga belum menyentuh zona pilihan di H1/M15, **dilarang menatap M5** agar tidak tergoda entry acak di tengah jalan.'
      ],
      decisionTree: [
        {
          condition: 'H1 sedang Bullish, tapi M15 sedang Bearish turun menuju Discount H1. Saya harus ikut H1 (Buy) atau ikut M15 (Sell)?',
          action: '**Prioritas utama tetap ikuti H1 (Buy)** dengan menunggu M15 sampai di zona Discount/POI H1 lalu berbalik MSS Bullish (M15 kembali selaras dengan H1 = *MTF Alignment*!). Counter-trend Sell mengikuti M15 hanya opsional untuk trader sangat berpengalaman dengan target pendek di POI H1.'
        },
        {
          condition: 'H1 Bullish, M15 Bullish, M5 baru saja selesai sweep SSL lalu MSS Bullish.',
          action: 'Ini kondisi **Tri-Timeframe Alignment (A+)**. Probabilitas tertinggi untuk eksekusi searah tren!'
        }
      ],
      failedCase: {
        title: 'Sindrom "Terjebak di M1/M5"',
        context: 'Membuka chart langsung di M5, melihat struktur turun rapi, lalu Sell tanpa tahu 2 dolar di bawahnya ada H1 Bullish Order Block raksasa.',
        whyFailed: 'Begitu menyentuh H1 OB, arus institusi H1 langsung sweep habis seluruh struktur Bearish M5 dalam 1 candle hijau besar.'
      }
    },

    'bos-valid-vs-sweep-palsu': {
      mappingSteps: [
        'Tarik garis horizontal tepat di ujung **Swing High** atau **Swing Low** signifikan yang sedang diuji.',
        'Tunggu candle benar-benar **CLOSE**. Periksa apakah yang melewati garis adalah **BODY penuh** (kandidat BOS) atau hanya **WICK** (Sweep Palsu).',
        'Untuk BOS valid: idealnya candle penembus memiliki body tegas (**Displacement**) dan diikuti penutupan candle berikutnya yang tidak langsung dibanting balik masuk ke dalam range lama.'
      ],
      decisionTree: [
        {
          condition: 'Body candle M5 ditutup hanya $0.20 (2 pips) tipis sekali di atas Swing High, lalu candle berikutnya langsung merah besar jatuh masuk kembali ke bawah garis.',
          action: 'Itu **Fakeout / Sweep terselubung**, BUKAN BOS berkualitas! BOS yang sehat selalu punya tenaga (**Displacement / FVG**), bukan penutupan body ragu-ragu setipis kertas.'
        },
        {
          condition: 'Wick menusuk $4 di atas PDH lalu body ditutup kembali di bawah PDH.',
          action: '100% **Liquidity Sweep (Breakout Trap)** — bersiap mencari tanda reversal turun (CISD/MSS Bearish) jika selaras konteks.'
        }
      ],
      failedCase: {
        title: 'Buy Breakout Tepat di Pucuk Sweep',
        context: 'Melihat harga menembus High kemarin dengan lonjakan cepat, trader langsung klik Buy tanpa menunggu close.',
        whyFailed: 'Candle tutup menjadi wick panjang di bawah High (sweep BSL). Trader menjadi "Liquidity penutup" bagi institusi yang menjual tepat di puncak.'
      }
    },

    'internal-external-dealing-range': {
      extraConceptBlocks: [
        {
          heading: 'Kenapa Memahami Dealing Range Menghilangkan 70% Kebingungan Mapping?',
          paragraphs: [
            'Kebanyakan trader bingung karena menganggap semua area di chart punya bobot sama. **Dealing Range** membatasi arena permainanmu hanya antara **1 Swing Low Mayor (0%)** dan **1 Swing High Mayor (100%)** yang melahirkan pergerakan terakhir (ditandai oleh BOS valid).',
            'Hukum siklus pasar ICT hanya berputar di dua hal tanpa henti:\n• **ERL → IRL:** Setelah harga sweep Liquidity luar (**External Range Liquidity** = ujung High/Low Dealing Range), harga hampir pasti retrace masuk ke dalam untuk mengambil **Internal Range Liquidity (IRL)** berupa FVG/OB di dalam range.\n• **IRL → ERL:** Setelah harga menyentuh dan memantul dari FVG/OB di dalam range (**IRL**), magnet tujuan berikutnya (**Draw on Liquidity**) adalah sweep ujung luar **ERL** seberangnya!'
          ]
        }
      ],
      mappingSteps: [
        'Di H1 atau M15, identifikasi dorongan terakhir yang menghasilkan **BOS valid** (body close menembus swing lama).',
        'Tarik tool Fibonacci (0% – 50% – 100%) dari **titik asal dorongan (Swing Low untuk Bullish)** sampai **puncak terjauh yang tercipta setelah BOS (Swing High)** — kotak 0%–100% itulah **Dealing Range Aktif**.',
        'Tandai garis **50% (Equilibrium)**: di bawah 50% = Discount (area cari Buy), di atas 50% = Premium (area cari Sell).',
        'Catat dua magnetnya: **IRL** = FVG/OB segar di dalam range; **ERL** = ujung 100% (Swing High) dan 0% (Swing Low) range.'
      ],
      decisionTree: [
        {
          condition: 'Kapan Dealing Range resmi bergeser (harus ditarik ulang)?',
          action: 'Dealing Range HANYA bergeser ketika salah satu ujung luar (ERL 0% atau 100%) **ditembus dengan Body Close valid (BOS/MSS baru)**, lalu harga selesai membentuk puncak/lembah baru.'
        },
        {
          condition: 'Harga baru saja memantul dari H1 Bullish FVG (IRL) di zona Discount. Ke mana target logis berikutnya?',
          action: 'Ikuti hukum **IRL → ERL**: target logisnya adalah **Swing High ujung atas Dealing Range (ERL 100%)**!'
        },
        {
          condition: 'Harga baru saja sweep Swing High 100% (ERL) dengan wick, lalu mulai turun. Ke mana tujuan retrace-nya?',
          action: 'Ikuti hukum **ERL → IRL**: harga tertarik masuk kembali ke **FVG/OB segar (IRL)** di zona Discount sebelum memutuskan lanjut naik atau balik arah.'
        }
      ],
      failedCase: {
        title: 'Mencari Entry Buy di Tengah-Tengah 55% Tanpa Mengukur Dealing Range',
        context: 'Tidak menarik garis 0%–50%–100%, trader asal Buy di FVG mikro yang ternyata berada di posisi 72% Premium.',
        whyFailed: 'Institusi masih menurunkan harga ke area murah (<50% Discount) untuk mengisi FVG utama — Buy di 72% langsung kena sweep SL sebelum harga akhirnya terbang dari zona 30% Discount.'
      },
      extraQuiz: [
        {
          question: 'Menurut hukum siklus **IRL ↔ ERL** dalam Dealing Range Bullish, setelah harga baru saja memantul kuat dari Bullish FVG H1 di zona Discount (IRL), ke mana target Draw on Liquidity berikutnya?',
          options: [
            'Ke tengah 50% saja lalu berhenti',
            'Menuju ujung atas Dealing Range / Swing High lama (ERL)',
            'Turun terus menembus Swing Low 0%',
            'Tidak bisa diprediksi sama sekali'
          ],
          answerIndex: 1,
          explanation: 'Pasar ICT bergerak berulang dalam siklus IRL ↔ ERL. Setelah mengambil bahan bakar di IRL (FVG/OB Discount), target magnet berikutnya adalah ERL (ujung Swing High).'
        },
        {
          question: 'Kapan garis Dealing Range yang kamu gambar di H1 resmi harus ditarik ulang?',
          options: [
            'Setiap 5 menit sekali',
            'Hanya ketika ujung luar (ERL) ditembus valid oleh Body Close (BOS/MSS baru) dan terbentuk swing baru',
            'Setiap kali muncul 1 candle Doji di tengah range',
            'Tidak perlu ditarik ulang sepanjang tahun'
          ],
          answerIndex: 1,
          explanation: 'Dealing Range tetap berlaku selama harga masih bermain di dalamnya; ia baru berpindah setelah terjadi break struktur (BOS/MSS) yang valid.'
        }
      ]
    },

    'bsl-dan-ssl-liquidity': {
      mappingSteps: [
        'Ubah kacamata saat melihat chart: di atas setiap puncak rapi (Swing High / Resistance) tandai tulisan **$$$ BSL (Buy-Side Liquidity)** — di situlah Stop Loss para Seller dan Buy Stop para Breakout Trader menumpuk.',
        'Di bawah setiap lembah rapi (Swing Low / Support) tandai **$$$ SSL (Sell-Side Liquidity)** — di situlah Stop Loss para Buyer menumpuk.',
        'Selalu cek sebelum entry: *"Apakah di belakang area entry-ku masih ada Liquidity Pool ($$) yang belum di-sweep?"* Jika YA, tunggu pool itu di-sweep dulu!'
      ],
      decisionTree: [
        {
          condition: 'Ada dua Liquidity Pool BSL di atas harga: satu adalah puncak kecil M5 10 menit lalu, satu lagi adalah Swing High H1 / PDH. Mana magnet yang lebih kuat?',
          action: '**BSL H1 / PDH jauh lebih kuat!** Semakin tinggi timeframe Liquidity Pool dan semakin bersih/rapi bentuknya, semakin besar tumpukan order di sana.'
        },
        {
          condition: 'Harga baru saja sweep SSL di bawah Double Bottom rapi, lalu langsung memantul naik tajam. Apakah SSL itu masih bisa dijadikan target Sell lagi?',
          action: '**TIDAK!** SSL Pool tersebut sudah di-sweep (**SWEPT**) dan bahan bakarnya sudah diambil institusi — fokus berpindah ke magnet baru di sisi seberang (BSL).'
        }
      ],
      failedCase: {
        title: 'Menaruh Stop Loss Tepat di Bawah Support Rapi (Menjadi Bahan Bakar SSL)',
        context: 'Buyer ritel menaruh SL rapat persis di bawah double bottom rapi di 2.640,00.',
        whyFailed: 'Double bottom itu adalah magnet SSL terbesar! Institusi sengaja menurunkan harga ke 2.638,50 untuk sweep seluruh SL tersebut sebelum menerbangkan harga ke 2.665.'
      }
    },

    'level-likuiditas-kunci-xauusd': {
      mappingSteps: [
        'Setiap pagi (07:00–08:00 WITA), tarik 4 garis wajib dengan label jelas: **PWH/PWL** (Minggu lalu), **PDH/PDL** (Kemarin), dan nanti pukul 14:00 WITA tambahkan **Asia High / Asia Low**.',
        'Cari **EQH (Equal Highs / Double Top sejajar)** dan **EQL (Equal Lows / Double Bottom sejajar)** di H1/M15 — tandai dengan garis putus-putus + tanda `$$$`.',
        'Begitu salah satu level sudah kena sweep harga, ubah statusnya menjadi **SWEPT** agar kamu tidak lagi mengira itu target baru.'
      ],
      decisionTree: [
        {
          condition: 'Antara PDH (masih utuh) dan Asia High (masih utuh), mana yang biasanya diambil duluan?',
          action: 'Biasanya **Asia High/Low diambil duluan** pada pembukaan London (karena paling dekat sebagai pemicu manipulasi), lalu baru harga meluncur menuju **PDH/PDL** sebagai target utama (DOL).'
        },
        {
          condition: 'PDH sudah di-sweep pagi tadi di sesi London. Apakah PDH masih jadi magnet utama di sesi NY?',
          action: '**TIDAK.** Level yang sudah **SWEPT** sudah kehilangan tumpukan stop loss utamanya. Cari magnet berikutnya yang masih **FRESH** (misal PWH, EQH H1, atau PDL di sisi bawah).'
        }
      ],
      failedCase: {
        title: 'Mengincar Target di Level yang Sudah Swept',
        context: 'PDH sudah di-sweep pukul 15:00 WITA lalu harga mulai melemah, tapi pukul 20:00 WITA trader masih Buy dengan harapan tembus PDH lagi.',
        whyFailed: 'Bahan bakar di atas PDH sudah habis diambil sesi London — sesi NY justru berbalik membidik SSL/London Low yang masih segar.'
      }
    },

    'inducement-idm-umpan-ritel': {
      extraConceptBlocks: [
        {
          heading: 'Cara Mekanis Menguji Aftermath 1–3 Candle Pasca-Tembusan Liquidity',
          paragraphs: [
            'Kebingungan terbesar saat level `PDH/PDL` atau `Asia High/Low` tertembus adalah memutuskan apakah itu **Liquidity Sweep (Purge & Revert)** atau **Liquidity Run (Expansion)**. Aturan praktis ICT: **jangan pernah mengambil keputusan di detik candle sedang menembus level.**',
            'Tunggu penutupan candle M15/H1 lalu evaluasi 1–3 candle M5 berikutnya: jika harga kembali masuk range disertai **Displacement berlawanan + FVG + CISD/MSS** (apalagi melawan HTF Bias di awal London/NY), maka itu **Purge & Revert** yang sah. Jika candle justru menutup body solid di luar level dan terus mempertahankan FVG searah menuju DOL lebih jauh, itu **Liquidity Run** — jangan pernah melawannya.'
          ]
        }
      ],
      mappingSteps: [
        'Klasifikasikan setiap level kunci sebelum tersentuh: sisi yang berlawanan dengan HTF Bias = kandidat **Purge & Revert (Sweep)**; sisi yang searah menuju DOL utama = kandidat **Liquidity Run**.',
        'Saat harga menembus level, baca penutupan body M15/H1 (*wick rejection* kembali ke dalam range vs *body close* penuh di luar level).',
        'Konfirmasi lewat 1–3 candle aftermath di M5: wajib muncul **Displacement balik + CISD/MSS** sebelum mengambil posisi reversal.'
      ],
      decisionTree: [
        {
          condition: 'Harga menyapu Asia Low saat Daily/H1 Bullish dan masuk ke H1 Discount FVG, lalu M5 mencetak Displacement naik + CISD.',
          action: '**Liquidity Sweep (Purge & Revert) terkonfirmasi!** Valid menyusun entry BUY menuju Asia High dan PDH.'
        },
        {
          condition: 'Daily/H1 Bullish menuju PDH yang masih $15 di atas; harga baru saja menembus Asia High dengan Body Close penuh tanpa wick penolakan.',
          action: '**Liquidity Run (Expansion)!** Dilarang SELL counter-trend hanya karena BSL Asia High disentuh — biarkan harga melaju menuju DOL PDH atau cari pullback searah tren.'
        }
      ],
      failedCase: {
        title: 'Menjual di Tengah Liquidity Run Karena Salah Mengira Setiap BSL Pasti Berbalik',
        context: 'Pada hari Bullish menuju PDH 2.670 (setelah Asia Low sudah di-sweep), trader langsung SELL saat Asia High 2.654 ditembus body penuh M15 tanpa ada CISD turun.',
        whyFailed: 'Tembusan searah HTF Bias menuju DOL jauh adalah Liquidity Run (Expansion), bukan Purge & Revert — posisi SELL counter-trend langsung tersapu menuju PDH.'
      },
      extraQuiz: [
        {
          question: 'Pada hari Daily & H1 Bullish dengan DOL di `PDH 2.670`, London Open menyapu `Asia Low 2.646` lalu M5 mencetak Displacement naik + CISD. Satu jam kemudian `Asia High 2.654` ditembus oleh Body Close M15 penuh. Apa perbedaan fungsi kedua kejadian tersebut dalam ICT?',
          options: [
            'Keduanya sama-sama sinyal wajib SELL',
            'Tembusan `Asia Low 2.646` adalah **Liquidity Sweep (Purge & Revert)**, sedangkan tembusan `Asia High 2.654` searah menuju PDH adalah **Liquidity Run (Expansion)**',
            'Tembusan `Asia Low` adalah tren turun permanen, sedangkan `Asia High` adalah konsolidasi Asia',
            'Keduanya harus diabaikan karena terjadi di dalam London Killzone'
          ],
          answerIndex: 1,
          explanation: 'Sapu sisi berlawanan Bias di awal sesi (Asia Low) = Purge & Revert; tembusan sisi searah Bias menuju DOL lebih tinggi (Asia High → PDH) = Liquidity Run.'
        }
      ]
    },

    'displacement-jejak-institusi': {
      mappingSteps: [
        'Cek 3 bukti fisik pada dorongan harga: (1) **Body candle besar & dominan** (>70% tinggi candle adalah body, wick sangat kecil), (2) **Meninggalkan celah FVG jelas**, (3) **Memecahkan struktur (MSS/BOS) dengan tegas**.',
        'Bandingkan ukuran candle Displacement dengan rata-rata 5 candle sebelumnya: Displacement sejati minimal **1.5× hingga 2× lebih besar** dari candle biasa.',
        'Tandai FVG atau OB yang lahir dari dorongan Displacement tersebut sebagai zona tunggu (**POI**) — abaikan candle merayap yang tidak punya FVG.'
      ],
      decisionTree: [
        {
          condition: 'Harga memang menembus Swing High, tapi lewat 6 candle kecil naik merayap tanpa meninggalkan FVG sama sekali. Apakah ini Displacement?',
          action: '**BUKAN!** Itu gerak ritel lemah (*grinding/creeping*). FVG atau OB yang ditarik dari gerak merayap seperti ini sangat mudah jebol — lebih baik skip.'
        },
        {
          condition: 'Muncul 1 candle raksasa +$18 tepat di detik rilis berita merah CPI. Apakah itu langsung di-entry sebagai Displacement normal?',
          action: '**Tunggu dulu!** Lonjakan 1 detik berita sering diikuti sweep balik ekstrem. Tunggu +30 menit pasca-berita hingga spread normal dan struktur M5 tenang sebelum menilai apakah FVG-nya dihormati.'
        }
      ],
      failedCase: {
        title: 'Menganggap Gerak Merayap Sebagai Displacement',
        context: 'Harga naik pelan 5 candle kecil menembus micro-high tanpa FVG lalu trader mencari OB di bawahnya.',
        whyFailed: 'Tidak ada tanda partisipasi institusi (tidak ada energi Displacement) — begitu seller masuk, zona tersebut ditembus lurus tanpa pantulan.'
      }
    },

    'fvg-bisi-sibi-ce-50': {
      extraConceptBlocks: [
        {
          heading: 'Cara Memilih Jika Ada 2–3 FVG Bertumpuk dalam Satu Dorongan (Solusi Kebingungan Terbesar!)',
          paragraphs: [
            'Di XAU/USD, satu leg Displacement sering meninggalkan **2 sampai 3 kotak FVG sekaligus** (atas, tengah, bawah). Trader akhirnya bingung mau tunggu yang mana. Gunakan **Aturan 3 Jenis Gap ICT**:\n1. **Breakaway Gap (FVG paling awal dekat asal breakout):** Sering **TIDAK disentuh lagi** karena momentum terlalu kuat — jangan memaksa menunggu terlalu dalam jika struktur sudah lari.\n2. **Measuring / Runaway Gap (FVG di tengah dorongan, dekat Discount/Premium 50%–62%):** Ini **FVG paling ideal untuk retest entry** dan sering menjadi titik tengah seluruh jarak ekspansi!\n3. **Exhaustion Gap (FVG paling ujung setelah harga sudah sangat jauh/dekat DOL):** **JANGAN DI-ENTRY!** Ini sering menjadi celah terakhir sebelum harga berbalik.\n\nJika ada 2 FVG di dalam zona Discount (untuk Buy): prioritaskan **FVG yang memiliki konfluensi (overlap OB / OTE 62%–79% / dekat SSL segar yang siap di-sweep)** atau tunggu reaksi penolakan M5 saat harga masuk FVG pertama vs kedua.'
          ]
        }
      ],
      mappingSteps: [
        'Temukan 3 candle berurutan dalam dorongan Displacement: **Candle 1, Candle 2 (batang besar), Candle 3**.',
        'Untuk **Bullish FVG (BISI)**: tarik kotak dari **High wick Candle 1** sampai **Low wick Candle 3**. Untuk **Bearish FVG (SIBI)**: dari **Low wick Candle 1** sampai **High wick Candle 3**.',
        'Tarik garis putus-putus tepat di tengah kotak **50% Consequent Encroachment (CE)**.',
        'Pastikan lebar celah FVG di XAU/USD minimal **$0.80 – $1.00** (bukan celah mikro tipis $0.10 yang hanya kebisingan).'
      ],
      decisionTree: [
        {
          condition: 'Ada 3 Bullish FVG bertumpuk dari bawah (2.640) sampai atas (2.656), garis 50% Dealing Range ada di 2.648. Mana yang dipilih?',
          action: 'Coret FVG di atas 2.648 (karena masuk zona mahal/Premium). Fokus hanya pada FVG di **bawah 2.648 (Discount)** — jika ada dua di Discount, pilih yang paling dekat dengan **OTE (62%–79%)** atau yang berkonfluensi dengan Order Block.'
        },
        {
          condition: 'Wick candle M5 menusuk melewati garis 50% CE sampai hampir menyentuh dasar FVG, tetapi **Body Close kembali di atas 50% CE**. Valid atau gagal?',
          action: '**MASIH VALID KUAT!** Aturan CE ICT tegas: *wick boleh menusuk, yang menentukan batal hanyalah BODY CLOSE yang tembus melewati 50% CE / keluar sisi seberang kotak*.'
        }
      ],
      failedCase: {
        title: 'Entry di Exhaustion FVG (Pucuk 90% Premium)',
        context: 'Gold sudah melesat +$18 menuju PDH lalu mencetak 1 FVG baru tepat $2 di bawah PDH; trader langsung Buy Limit di FVG tersebut.',
        whyFailed: 'Itu **Exhaustion Gap** di ujung Premium, bukan tempat institusi mengakumulasi Buy baru. Harga sweep PDH lalu langsung menghancurkan FVG tersebut dalam 2 candle.'
      },
      extraQuiz: [
        {
          question: 'Dalam satu leg kenaikan XAU/USD terdapat 3 Bullish FVG: FVG A di 85% Premium, FVG B di 58% Premium, dan FVG C di 32% Discount (bertepatan dengan zona OTE). Mana FVG prioritas utama untuk Buy?',
          options: [
            'FVG A di 85% karena paling dekat harga sekarang',
            'FVG C di 32% Discount karena berada di area beli murah + konfluensi OTE',
            'Pasang Buy serentak di ketiga FVG dengan lot penuh',
            'Semua FVG tidak boleh dipakai'
          ],
          answerIndex: 1,
          explanation: 'Prinsip Premium/Discount menyaring FVG di zona mahal (Premium) dan memfokuskan Buy pada FVG segar di zona Discount + OTE.'
        },
        {
          question: 'Saat harga retrace masuk ke Bullish FVG (2.644–2.648, CE 50% di 2.646), wick bawah menusuk ke 2.644,80 tetapi Body candle M5 ditutup kuat di 2.647,20. Bagaimana status FVG tersebut?',
          options: [
            'Batal total karena wick menyentuh di bawah 2.646',
            'Tetap **VALID KUAT** karena aturan Consequent Encroachment menilai **Body Close** yang menghormati garis 50% CE',
            'Langsung berubah menjadi Bearish IFVG',
            'Harus langsung entry Sell'
          ],
          answerIndex: 1,
          explanation: 'Dalam hukum 50% CE ICT, wick diperbolehkan menembus sementara selama penutupan Body menghormati level 50% CE.'
        }
      ]
    },

    'order-block-valid-mean-threshold': {
      extraConceptBlocks: [
        {
          heading: 'Cara Membedakan High-Probability OB vs Trap OB (Kenapa Banyak OB Jebol?)',
          paragraphs: [
            'Alasan terbesar trader kecewa dengan Order Block adalah menganggap **semua** candle merah terakhir sebelum naik sebagai Order Block! Dalam ICT, hanya **High-Probability Order Block (HP-OB)** yang layak dipakai — wajib memenuhi 3 syarat sekaligus:\n1. **Lahir tepat setelah Liquidity Sweep** (candle OB itu sendiri atau rangkaiannya sweep SSL/BSL lama).\n2. **Langsung diikuti Displacement yang meninggalkan FVG** + memecahkan struktur (BOS/MSS).\n3. **Berada di lokasi tepat** (Discount untuk Bullish OB, Premium untuk Bearish OB).\n\nTanpa syarat #1 dan #2, kotak itu hanyalah **Trap OB (trap ritel)** yang akan ditembus begitu saja.'
          ]
        }
      ],
      mappingSteps: [
        'Cari titik reversal yang baru saja **sweep Liquidity** lalu langsung diikuti **Displacement + FVG**.',
        'Untuk **Bullish OB**: tandai **seluruh rangkaian candle bearish berurutan terakhir** (body/open sampai low) tepat sebelum dorongan naik dimulai — bukan hanya 1 candle jika ada 2–3 candle turun beruntun membentuk 1 blok.',
        'Tarik 2 garis krusial di dalam OB: garis **Open (tepi masuk utama)** dan garis **50% Mean Threshold (titik tengah body OB)**.',
        'Aturan keamanan OB: **Body candle tidak boleh ditutup menembus melewati 50% Mean Threshold**.'
      ],
      decisionTree: [
        {
          condition: 'Ada 3 candle merah berurutan sebelum harga melesat naik. Apakah OB cuma candle merah paling terakhir atau ketiganya?',
          action: 'Dalam ICT, **rangkaian candle berlawanan yang berurutan (consecutive down-close candles)** dihitung sebagai **1 kesatuan Order Block** (Open diambil dari candle merah pertama rangkaian itu, Low di titik terbawah). Jika terlalu lebar, pakai 50% Mean Threshold-nya untuk memperketat SL.'
        },
        {
          condition: 'Harga menyentuh tepi Open OB lalu memantul naik tanpa pernah menyentuh 50% Mean Threshold. Apakah itu normal?',
          action: '**Sangat normal!** Di tren kuat XAU/USD, harga sering hanya mencium Open OB lalu langsung terbang. Itulah sebabnya entry utama ditaruh di **Open OB** (bukan selalu menunggu 50% MT), sementara 50% MT dipakai sebagai alat ukur validitas.'
        }
      ],
      failedCase: {
        title: 'Memakai "Trap OB" di Tengah Tren Tanpa Sweep & Tanpa FVG',
        context: 'Trader menggambar kotak pada 1 candle merah acak di tengah konsolidasi tanpa adanya FVG maupun sweep Liquidity.',
        whyFailed: 'Tidak ada bukti akumulasi institusi di candle tersebut — saat harga turun, kotak "OB" itu dilibas mulus tanpa sedikit pun penolakan.'
      },
      extraQuiz: [
        {
          question: 'Tiga syarat mutlak yang membedakan **High-Probability Order Block** dari **Trap OB (trap ritel)** adalah...',
          options: [
            'Candle paling kecil, di sesi Asia, tanpa FVG',
            'Didahului Liquidity Sweep, diikuti Displacement yang meninggalkan FVG + break struktur, dan berada di lokasi Discount/Premium',
            'Berwarna sama dengan 10 candle sebelumnya',
            'Muncul tepat di tengah garis 50% Equilibrium tanpa sweep'
          ],
          answerIndex: 1,
          explanation: 'HP-OB sejati selalu memiliki sidik jari institusi lengkap: Sweep Liquidity + Displacement + FVG + Lokasi tepat.'
        }
      ]
    },

    'cisd-vs-mss-sinyal-awal': {
      mappingSteps: [
        'Tunggu harga masuk dulu ke **HTF POI / Sweep Liquidity** (jangan cari CISD di ruang kosong!).',
        'Untuk **Bullish CISD**: tandai **harga OPEN dari candle bearish pertama** dalam rangkaian candle turun terakhir yang sweep Liquidity. Begitu 1 candle bullish menutup **Body di atas garis Open tersebut** → **CISD Bullish aktif!**',
        'Untuk **MSS**: tandai **Swing High internal** sebelumnya; begitu candle menutup body di atas Swing High dengan Displacement → **MSS Bullish terkonfirmasi** (lebih kuat dari CISD).'
      ],
      decisionTree: [
        {
          condition: 'CISD sudah muncul lebih cepat, tapi Swing High untuk MSS masih jauh $6 di atas. Masuk setelah CISD atau tunggu MSS?',
          action: 'Jika **semua konteks HTF mendukung** (Sweep PDH/PDL atau HTF POI + dalam Killzone + ada FVG baru pasca-CISD), **CISD sudah cukup untuk entry awal dengan R:R besar**. Jika konteks agak ragu / counter-trend, wajib tunggu **MSS penuh**!'
        },
        {
          condition: 'Candle hanya menusuk garis Open candle bearish pertama dengan wick lalu tutup kembali di bawahnya. Apakah CISD sudah sah?',
          action: '**BELUM SAH!** CISD wajib dikonfirmasi oleh **BODY CLOSE penuh** melewati garis Open rangkaian candle lawan tersebut.'
        }
      ],
      failedCase: {
        title: 'Mencari CISD di Tengah Ruang Kosong Tanpa Sweep/POI',
        context: 'Setiap kali 1 candle hijau menutup di atas 1 candle merah di M5, trader menyebutnya CISD lalu langsung Buy.',
        whyFailed: 'CISD hanya valid jika terjadi **SETELAH harga menyentuh HTF PD Array atau sweep Liquidity Pool**. Di ruang kosong, itu hanyalah fluktuasi candle biasa.'
      }
    },

    'premium-discount-equilibrium': {
      mappingSteps: [
        'Tarik Fibonacci dari ujung Low (0%) ke ujung High (100%) pada leg Dealing Range terakhir.',
        'Setel level penting saja agar chart bersih: `0`, `0.5` (Equilibrium), `0.618`, `0.705` (**Titik Emas OTE**), `0.79`, dan `1`.',
        'Disiplin absolut: **Hanya cari Buy di area 0%–50% (terbaik di OTE 62%–79% retracement dari atas)**, dan **Hanya cari Sell di area 50%–100% (terbaik di OTE 62%–79% retracement dari bawah)**.'
      ],
      decisionTree: [
        {
          condition: 'Ada setup Sweep + MSS + FVG yang sangat cantik, tetapi posisinya tepat di garis 50% Equilibrium (bukan di bawah 50% Discount). Boleh Buy?',
          action: 'Tunggu minimal menyentuh atau sedikit masuk ke bawah **50% Discount** (atau cek apakah ada FVG lain di zona OTE 62%–79%). Jangan membayar harga "mahal" untuk Buy di atas 55%–60%.'
        },
        {
          condition: 'Harga sudah masuk ke zona OTE 70.5% Discount, tapi tidak ada FVG maupun OB sama sekali di sana. Tetap pasang Limit Buy buta?',
          action: '**JANGAN!** OTE (62%–79%) adalah filter *lokasi*, bukan sinyal berdiri sendiri. Wajib ada **PD Array nyata (FVG/OB/Breaker)** atau konfirmasi MSS M5 di dalam zona OTE tersebut.'
        }
      ],
      failedCase: {
        title: 'Membeli di 80% Premium Karena FOMO',
        context: 'Melihat tren naik kuat, trader Buy tepat di pucuk 82% Premium hanya karena takut tertinggal.',
        whyFailed: 'Retrace normal pasar menuju zona OTE 70.5% langsung sweep Stop Loss-nya sebelum harga akhirnya melanjutkan tren naik.'
      }
    },

    'model-sweep-mss-fvg': {
      mappingSteps: [
        'Tandai 1 level Liquidity kunci (Asia High/Low, PDH/PDL, atau Swing H1) di jam Killzone.',
        'Tunggu harga **1) Sweep** level tersebut (wick sweep).',
        'Tunggu **2) Displacement + MSS/CISD** berlawanan arah di M5 yang meninggalkan **3) FVG segar**.',
        'Pasang **4) Limit Order** di tepi FVG atau 50% CE, SL di belakang titik sweep, TP1 1:2 dan TP2 di Liquidity Pool seberang.'
      ],
      decisionTree: [
        {
          condition: 'Sweep dan MSS sudah terjadi, tetapi dorongannya tidak meninggalkan FVG sama sekali. Tetap paksa entry?',
          action: '**SKIP.** Tanpa FVG (Imbalance), tidak ada bukti Displacement kuat. Jika ada Order Block bersih di pangkal leg, beralih ke Model 2 (OB Sniper); jika tidak ada, tunggu peluang berikutnya.'
        },
        {
          condition: 'FVG sudah terbentuk rapi pasca-MSS, tapi harga langsung lari menuju TP tanpa pernah retrace menjemput Limit Order-ku.',
          action: '**IKHLASKAN & BATALKAN LIMIT!** Jangan mengejar harga yang sudah dekat target — membatalkan order saat harga sudah menyentuh DOL adalah disiplin wajib Model 2022.'
        }
      ],
      failedCase: {
        title: 'Mengabaikan Langkah 1 (Langsung Cari FVG Tanpa Sweep)',
        context: 'Melihat MSS + FVG kecil di tengah range tanpa ada Liquidity Pool apa pun yang di-sweep sebelumnya.',
        whyFailed: 'Tanpa Sweep di langkah pertama, tidak ada bahan bakar order lawan yang terkumpul — FVG langsung ditembus begitu sesi utama masuk.'
      }
    },

    'model-order-block-sniper': {
      mappingSteps: [
        'Konfirmasi dulu **Bias H1** dan lokasi **Discount/Premium**.',
        'Pastikan **High-Probability OB** sweep Liquidity + melahirkan FVG + memecahkan struktur.',
        'Pasang rencana entry di **Open OB** (konservatif) atau **50% Mean Threshold** (sniper R:R tinggi), SL tepat di balik ujung wick OB + napas spread $0.40–$0.60.'
      ],
      decisionTree: [
        {
          condition: 'Antara FVG dan OB yang berada di satu leg, mana yang di-entry duluan?',
          action: 'Jika FVG berada tepat di depan OB, harga sering bereaksi dulu di FVG lalu baru menusuk Open OB. Cara paling aman: **split risiko** atau tunggu konfirmasi candle penolakan M5 di area pertemuan FVG + Open OB.'
        },
        {
          condition: 'Order Block H1/M15 yang kucari ternyata sudah pernah disentuh 2 kali sebelumnya. Masih sekuat OB fresh?',
          action: '**Sudah melemah!** Setiap sentuhan menyerap order institusi di dalam OB. Prioritaskan **OB Fresh (sentuhan pertama)**; jika sudah disentuh berkali-kali, waspada justru menjadi bahan bakar untuk dijebol.'
        }
      ],
      failedCase: {
        title: 'Terlalu Serakah Menunggu 50% Mean Threshold Padahal Open OB Sudah Menolak Keras',
        context: 'Memasang Limit tepat di 50% MT padahal harga sudah menyentuh Open OB dan membentuk engulfing bullish, lalu mengejar entry terlambat $8 di atas.',
        whyFailed: 'Akibat FOMO mengejar setelah ketinggalan, SL menjadi super lebar dan harga retrace kecil langsung sweep SL.'
      }
    },

    'model-ifvg-inversion': {
      mappingSteps: [
        'Tunggu harga masuk ke **HTF Liquidity Sweep** (misal sweep PDH/PDL atau Asia High/Low).',
        'Perhatikan FVG terakhir yang mendorong harga menuju sweep tersebut (misal Bullish FVG terakhir saat naik sweep PDH).',
        'Begitu 1 candle M5 menutup **Body penuh menembus keluar sisi seberang FVG tersebut** → FVG itu resmi berubah kutub menjadi **Inversion FVG (IFVG)**!',
        'Entry langsung saat retest ringan ke kotak IFVG (atau langsung saat body close konfirmasi IFVG jika momentum sangat kuat), SL tepat di puncak sweep.'
      ],
      decisionTree: [
        {
          condition: 'FVG yang gagal itu baru ditembus oleh wick panjang saja, body masih tutup di dalam FVG. Sudah sah jadi IFVG?',
          action: '**BELUM SAH!** Syarat mutlak perubahan kutub IFVG adalah **BODY CLOSE penuh melewati seluruh kotak FVG** — bukan sekadar tusukan wick.'
        },
        {
          condition: 'Ada 2 FVG lawan yang tertembus sekaligus pasca-sweep PDH. Mana IFVG yang dipakai untuk entry?',
          action: 'Gunakan **IFVG pertama yang paling dekat dengan titik sweep** (jika R:R ke DOL masih ≥ 1:2), karena saat momentum balik cepat harga sering hanya retest tipis ke tepi IFVG teratas sebelum terjun.'
        }
      ],
      failedCase: {
        title: 'Memakai IFVG di Tengah Range Tanpa Sweep Liquidity Sebelumnya',
        context: 'Di pasar sideways Asia, FVG kecil ditembus bolak-balik lalu trader menyebutnya IFVG dan langsung entry.',
        whyFailed: 'IFVG adalah model reversal cepat yang WAJIB didahului Liquidity Sweep signifikan (atau HTF POI). Di tengah sideways, semua FVG ditembus tanpa arti.'
      }
    },

    'model-turtle-soup-smr': {
      mappingSteps: [
        'Tandai level ekstrem besar yang menjadi target utama: **PDH/PDL, PWH/PWL, atau London/Asia High-Low** yang berhimpitan dengan POI H1/H4.',
        'Tunggu harga menembus level tersebut di jam Killzone lalu **cepat ditolak kembali** membentuk Absorption Wick dan menutup body di dalam range lama.',
        'Konfirmasi dengan **CISD M5** (atau tambahan **SMT Divergence**) sebelum membuka posisi — hindari entry melawan candle impulsif yang masih bergerak kuat.'
      ],
      decisionTree: [
        {
          condition: 'Harga menembus PDL lalu 3 candle M5 berturut-turut menutup body bearish tebal di bawah PDL. Apakah masih valid untuk Turtle Soup Buy?',
          action: '**BATAL.** Penutupan body tegas di luar level menandakan ekspansi lanjutan, bukan Turtle Soup. Turtle Soup mensyaratkan penolakan cepat kembali masuk ke dalam range.'
        },
        {
          condition: 'Turtle Soup sudah menunjukkan sweep + tutup kembali ke dalam range, tetapi berlawanan dengan tren utama H1.',
          action: 'Perkecil target profit (**ambil TP1 konservatif di IRL/Equilibrium 50%**) atau tambahkan konfluensi **SMT Divergence** agar tidak terseret kelanjutan tren H1.'
        }
      ],
      failedCase: {
        title: 'Melawan Candle Ekspansi Saat Rilis Berita Besar',
        context: 'Saat rilis NFP, harga turun menembus PDL -$15 dalam 2 menit lalu trader langsung membuka Buy dengan asumsi Turtle Soup.',
        whyFailed: 'Tanpa penutupan balik ke dalam range dan dilakukan di tengah rilis berita berdampak tinggi, harga melanjutkan penurunan -$25 menembus Stop Loss.'
      }
    },

    'memilih-1-model-dan-filter-gagal': {
      mappingSteps: [
        'Tetapkan **1 Model Utama** (rekomendasi terbaik untuk sebagian besar trader: **Model ICT 2022: Sweep → MSS → FVG**) untuk 30–50 transaksi pertama.',
        'Periksa **5 Bendera Merah Auto-Skip**: (1) tengah range 40%–60% tanpa sweep, (2) berhadapan langsung dengan POI H1/H4 lawan, (3) dalam jendela News Lock, (4) R:R < 1:1,8, (5) batas rugi harian 2× SL sudah tercapai.',
        'Apabila **satu saja** bendera merah aktif, batalkan setup dan catat NO SETUP di jurnal.'
      ],
      decisionTree: [
        {
          condition: 'Model utama tidak muncul seharian, tetapi variasi model lain terlihat di M5. Ambil atau lewatkan?',
          action: '**Lewatkan.** Disiplin menjalankan 1 model selama 30–50 transaksi menjaga kemurnian data Win Rate dan Expectancy pada jurnal evaluasi.'
        },
        {
          condition: 'Dari 5 poin Checklist 30 Detik, 4 poin terpenuhi tetapi 1 poin gagal (berita CPI 10 menit lagi). Apakah boleh masuk dengan lot kecil?',
          action: '**TIDAK BOLEH.** Aturan filter gagal bersifat mutlak — satu syarat yang gagal cukup untuk membatalkan setup sepenuhnya.'
        }
      ],
      failedCase: {
        title: 'System Hopping (Berpindah Model Setiap Sesi)',
        context: 'Pagi memakai Turtle Soup, siang memakai Order Block, malam beralih ke iFVG setelah mengalami 2 kali Stop Loss.',
        whyFailed: 'Tidak ada satu pun model yang memiliki sampel statistik memadai sehingga hasil evaluasi di jurnal tidak terukur.'
      }
    },

    'siklus-amd-judas-swing': {
      mappingSteps: [
        'Tandai garis horizontal **Midnight Open New York (00:00 NY = 12:00 WITA)** atau **Daily Open** sebagai jangkar Power of 3.',
        'Amati **Fase A (Accumulation)** di sesi Asia (06:00–14:00 WITA) → kotak sempit.',
        'Waspadai **Fase M (Manipulation / Judas Swing)** di pembukaan London (14:00–15:30 WITA) atau NY Open (19:30–20:30 WITA): gerak palsu melawan bias sejati untuk sweep Asia High/Low.',
        'Eksekusi pada transisi **Fase M → Fase D (Distribution)**: begitu Judas Swing sweep Liquidity dan cetak MSS searah Bias H1, itulah pergerakan ekspansi sesungguhnya!'
      ],
      decisionTree: [
        {
          condition: 'Bias harian Bullish, lalu pukul 14:15 WITA (London Open) harga tiba-tiba jatuh tajam ke bawah Midnight Open sweep Asia Low. Panik ganti jadi Bearish?',
          action: '**JUSTU INILAH JUDAS SWING YANG KAMU TUNGGU!** Selama level Invalidasi H1 tidak jebol, penurunan di bawah Midnight Open / Asia Low adalah fase manipulasi beli murah sebelum distribusi naik.'
        },
        {
          condition: 'Sesi Asia sudah melesat +$20 satu arah tanpa konsolidasi (range Asia sangat lebar). Apakah pola AMD klasik masih berlaku di London?',
          action: '**Waspada tinggi!** Jika Asia sudah berekspansi terlalu lebar, London sering berubah menjadi **konsolidasi / retracement dalam** ketimbang distribusi lanjutan. Tunggu sesi NY AM atau cari konfirmasi ekstra ketat.'
        }
      ],
      failedCase: {
        title: 'Ikut Mengejar Gerakan Pertama London Open (Korban Judas Swing)',
        context: 'Pukul 14:10 WITA harga langsung breakout ke bawah Asia Low, trader langsung Sell mengejar momentum.',
        whyFailed: 'Pukul 14:40 WITA harga langsung berbalik melesat naik +$22 — gerak pukul 14:10 tadi adalah Judas Swing klasik!'
      }
    },

    'jadwal-killzone-wita-silver-bullet': {
      mappingSteps: [
        'Pasang zona waktu vertikal permanen di chart (WITA / UTC+8): **London Killzone (14:00–17:00 WITA)** dan **NY AM Killzone (19:30–23:00 WITA)**.',
        'Tandai jendela khusus **ICT Silver Bullet (1 Jam)** di NY AM: **22:00 – 23:00 WITA** (10:00–11:00 NY EDT) — fokus mencari **1 FVG bersih pertama** setelah Liquidity jam sebelumnya di-sweep.',
        'Di luar jam Killzone, tutup chart eksekusi dan gunakan waktu hanya untuk Jurnal / Review.'
      ],
      decisionTree: [
        {
          condition: 'Di jendela Silver Bullet (22:00–23:00 WITA), harga sudah melaju sangat kencang sejak jam 20:00 WITA dan sudah mencapai target PDH. Tetap cari entry Silver Bullet?',
          action: '**SKIP!** Silver Bullet butuh **ruang gerak tersisa (minimal 10–15 poin / $10–$15 menuju DOL)** yang belum tercapai. Jika target harian sudah selesai di jam 21:00, pasar jam 22:00 biasanya hanya berkonsolidasi.'
        },
        {
          condition: 'Pukul 18:15 WITA (jeda antara London dan NY) muncul setup FVG terlihat rapi. Masuk atau tunggu NY AM?',
          action: '**Tunggu NY AM (19:30+ WITA)!** Setup yang muncul di jam mati sering hanya dijadikan bahan bakar sweep oleh pembukaan New York.'
        }
      ],
      failedCase: {
        title: 'Trading di "Lunch Chop" (00:00–01:30 WITA)',
        context: 'Mencari entry baru saat NY Lunch (12:00–13:30 NY) ketika Liquidity bank menipis.',
        whyFailed: 'Harga bolak-balik sweep High dan Low mikro tanpa arah pasti hingga menguras profit sesi NY AM.'
      }
    },

    'protokol-news-lock-usd': {
      mappingSteps: [
        'Setiap pagi cek modul **Market Intel / Kalender Ekonomi** Amy FX Pro khusus berita **USD High Impact (Merah)**: CPI, NFP, FOMC, PPI, Core PCE, dan Powell Speech.',
        'Tandai jendela **News Lock (-15 menit sebelum s.d. +30 menit sesudah rilis)** langsung dengan garis vertikal merah di chart.',
        'Jika sudah punya posisi berjalan sebelum berita: amankan minimal **Partial + geser SL ke BEP**, atau tutup sebelum rilis agar tidak terkena slippage ekstrem.'
      ],
      decisionTree: [
        {
          condition: 'Berita CPI sudah lewat 30 menit, spread kembali normal ($0.25), dan wick CPI baru saja sweep PDL lalu terbentuk MSS Bullish rapi. Boleh entry?',
          action: '**BOLEH!** Justru pasca-berita (+30 menit) setelah manipulasi wick selesai dan spread normal, sering lahir setup A+ paling bersih sepanjang minggu.'
        },
        {
          condition: 'Hari ini ada FOMC Rate Decision pukul 02:00 WITA dini hari. Apakah sesi London siang aman untuk scalping normal?',
          action: 'Waspadai **Seek & Destroy**! Pada hari FOMC, sesi pagi–siang sering bergerak bolak-balik (chop) menunggu keputusan bank sentral — turunkan risiko ke **0.5%** atau pilih **No-Trade Day**.'
        }
      ],
      failedCase: {
        title: 'Memasang Stop Loss Ketat 5 Menit Sebelum Rilis NFP',
        context: 'Posisi sudah profit tipis lalu dibiarkan terbuka melewati rilis NFP dengan harapan "kan ada SL".',
        whyFailed: 'Slippage saat NFP melompati harga SL sejauh -$8 ekstra — kerugian aktual 3× lebih besar dari rencana risiko!'
      }
    },

    'daily-bias-draw-on-liquidity': {
      extraConceptBlocks: [
        {
          heading: 'Bedah Total Draw on Liquidity (DOL): Jawaban Kenapa Kamu Sering Bingung Pilih Atas atau Bawah!',
          paragraphs: [
            'Inilah pertanyaan #1 yang bikin hampir semua pelajar ICT bingung: **"Di atas ada PDH, di bawah ada PDL & FVG H1 — jadi mana yang sebenarnya Draw on Liquidity (DOL) hari ini?"**\n\nGunakan **4 Aturan Hierarki DOL Objektif** (urutkan dari #1 sampai #4, jangan loncat!):\n1. **Aturan Origin / Pantulan Terakhir (Siapa yang Baru Saja Disentuh?):** Lihat candle Daily/H4 terakhir. Jika harga **baru saja sweep PDL atau memantul kuat dari Daily/H1 Bullish FVG/OB**, maka bahan bakar bawah sudah diambil → **DOL otomatis berpindah ke ATAS (PDH / BSL terdekat)**! Sebaliknya, jika baru saja sweep PDH atau menolak Bearish FVG H1, **DOL berpindah ke BAWAH (PDL / SSL terdekat)**.\n2. **Aturan Previous Day Candle Close (PDCC — Penutupan Candle Kemarin):**\n   • Jika candle Daily kemarin **menutup BODY kuat menembus di atas PDH 2 hari lalu** → momentum ekspansi lanjut naik, **DOL hari ini = High baru / PWH** (tunggu retrace dulu ke Discount!).\n   • Jika candle Daily kemarin hanya **sweep High dengan WICK panjang lalu body tutup kembali di bawah High** → penolakan kuat, **DOL hari ini = PDL kemarin (reversal turun)**!\n3. **Aturan Siklus IRL ↔ ERL:** Jika harga sedang berada di dalam **IRL (FVG/OB H1)** → DOL adalah **ERL (Swing High/Low luar)**. Jika harga baru saja mengambil **ERL (PDH/PDL)** → DOL jangka pendek adalah **IRL (FVG/OB di dalam range)**.\n4. **Aturan Jarak & Ruang Bersih (Path of Least Resistance):** Jika secara struktur sama kuat, cek mana Liquidity Pool terdekat yang tidak terhalang benteng HTF PD Array besar dan selaras dengan arah terbalik **DXY**.'
          ]
        },
        {
          heading: 'Cara Membaca Daily Bias Dalam 60 Detik Tanpa Menebak',
          paragraphs: [
            'Selalu tuliskan Daily Bias dalam **Format 3 Bagian Wajib**:\n• **Origin (Asal):** *"Harga baru sweep / memantul dari [Level A]."* \n• **DOL (Magnet Tujuan):** *"Target magnet berikutnya yang masih segar adalah [Level B]."* \n• **Titik Batal (Invalidasi):** *"Bias ini BATAL jika candle H1 menutup body melewati [Level C]."* \n\nKalau kamu tidak bisa mengisi bagian Origin & DOL dengan jelas (misalnya candle kemarin *Inside Bar* terjepit di tengah tanpa menyentuh apa pun), itu BUKAN berarti kamu bodoh — artinya hari itu memang **BIAS NETRAL**, dan kamu tinggal menunggu sesi London sweep Asia High atau Asia Low dulu untuk memberi tahu siapa Origin hari ini!'
          ]
        }
      ],
      mappingSteps: [
        'Buka chart **Daily** XAU/USD: tandai **PDH (High kemarin)** dan **PDL (Low kemarin)** serta **PWH/PWL**.',
        'Periksa **candle Daily kemarin (PDCC)**: apakah ia (A) menembus & menutup body keluar (lanjut searah), (B) sweep ujung dengan wick panjang lalu tutup kembali di dalam (siap balik arah), atau (C) Inside Bar di tengah (Bias Netral)?',
        'Turun ke **H1**: cek apakah harga baru saja menyentuh **ERL** (PDH/PDL) atau **IRL** (H1 FVG/OB) untuk mengunci **Origin → DOL**.',
        'Cek cepat arah **DXY** sebagai konfirmasi terbalik (DXY menuju SSL mendukung XAU menuju BSL).',
        'Tulis 1 kalimat final di catatan pagimu: *"Bias [BULLISH/BEARISH/NETRAL] · Origin [X] → DOL [Y] · Batal jika H1 close melewati [Z]."*'
      ],
      decisionTree: [
        {
          condition: 'Di atas ada PDH ($12 lagi) dan di bawah ada PDL ($10 lagi). Kemarin candle Daily menutup hijau tebal menembus High 2 hari lalu, tapi pagi ini harga belum retrace ke mana-mana. DOL ke atas atau ke bawah?',
          action: '**DOL Utama = ATAS (PDH / Ekspansi lanjut)** karena PDCC kemarin menutup body kuat ke atas. Namun **JANGAN kejar Buy di pucuk** — biarkan harga retrace dulu mengambil **IRL (H1/M15 Bullish FVG / Asia Low)** pada sesi London, lalu Buy membidik PDH!'
        },
        {
          condition: 'Kemarin candle Daily menusuk jauh di atas High 2 hari lalu dengan wick panjang, lalu menutup body merah di bawah High tersebut. Bias & DOL hari ini apa?',
          action: '**Bias BEARISH** dengan **Origin = Sweep High kemarin** dan **DOL Utama = PDL kemarin** (atau H1 Bullish FVG terdekat di bawahnya sebagai TP1).'
        },
        {
          condition: 'Candle Daily kemarin adalah Inside Bar (High & Low kemarin berada sepenuhnya di dalam tubuh candle 2 hari lalu). Bagaimana menentukan DOL?',
          action: 'Tetapkan **Bias NETRAL**. Pada hari Inside Bar, jangan menebak di pagi hari! Tunggu sesi London sweep salah satu sisi (Asia High atau Asia Low) terlebih dahulu — sisi yang di-sweep menjadi Origin, dan sisi seberangnya menjadi DOL.'
        },
        {
          condition: 'Pagi hari aku menetapkan Bias Bullish menuju PDH, tapi jam 15:00 WITA candle H1 menutup body tebal di bawah garis Invalidasi yang kutulis.',
          action: 'Ikuti fakta, bukan ego! **Bias Bullish resmi BATAL.** Hapus rencana Buy, diam 15–30 menit untuk reset kepala, lalu evaluasi ulang apakah DOL baru kini mengarah ke PDL.'
        }
      ],
      failedCase: {
        title: 'Jebakan "Narrative Bias" (Menolak Fakta PDCC & Invalidasi)',
        context: 'Karena 3 hari sebelumnya Gold terus naik, trader yakin hari ke-4 pasti naik lagi meski candle kemarin sudah sweep PWH dengan wick panjang dan H1 sudah menembus Swing Low (garis invalidasi).',
        whyFailed: 'Ia mengabaikan fakta bahwa **Origin** baru saja berubah menjadi Sweep PWH sehingga **DOL** kini berbalik turun ke PDL. Tiga kali mencoba Buy di tengah kejatuhan langsung berujung 3× SL berturut-turut.'
      },
      extraQuiz: [
        {
          question: 'Candle Daily kemarin sweep High 2 hari lalu hanya dengan **wick panjang**, lalu menutup body merah di dalam range lama. Sementara di bawah ada PDL segar. Menurut aturan **PDCC & DOL**, apa bias dan magnet utama hari ini?',
          options: [
            'Bias Bullish kuat karena wick sempat menyentuh harga tinggi',
            'Bias **Bearish** dengan Origin = Sweep High kemarin dan **DOL = PDL** (atau IRL Bullish terdekat di bawah)',
            'Wajib langsung Buy di pembukaan pasar Asia',
            'Tidak ada hubungan antara penutupan candle Daily dengan DOL'
          ],
          answerIndex: 1,
          explanation: 'Sweep dengan wick panjang lalu body tutup kembali di dalam menandakan penolakan BSL — sehingga arus institusi berbalik mengincar Liquidity sisi bawah (PDL).'
        },
        {
          question: 'Di pagi hari, candle Daily kemarin adalah **Inside Bar** (terjepit sepenuhnya di dalam candle sebelumnya) tanpa sweep PDH maupun PDL. Keputusan Daily Bias paling profesional adalah...',
          options: [
            'Memaksa Bias Bullish karena Gold biasanya naik',
            'Memilih **Bias NETRAL** dan menunggu sesi London sweep Asia High/Low terlebih dahulu untuk membuka Origin dan DOL hari ini',
            'Memasang Buy dan Sell bersamaan di pembukaan pagi',
            'Menggunakan tebakan koin'
          ],
          answerIndex: 1,
          explanation: 'Hari Inside Bar belum menunjukkan komitmen arah; menunggu sweep sesi London memberi konfirmasi objektif siapa Origin dan ke mana DOL-nya.'
        }
      ]
    },

    'sop-playbook-harian-xauusd': {
      mappingSteps: [
        '**Fase 1 — Persiapan Pagi (08:00 WITA / 5 Menit):** Cek News Lock di Market Intel, gambar PDH/PDL & Bias+DOL+Invalidasi.',
        '**Fase 2 — Peta Pra-Sesi (13:45 WITA):** Tandai Asia High/Low + maksimal 1–2 POI di Discount/Premium + alarm harga.',
        '**Fase 3 — Eksekusi Terbatas (London 14:00–17:00 atau NY 19:30–23:00 WITA):** Maksimal 1–2 setup A+ per hari sesuai 1 model andalan.',
        '**Fase 4 — Penutupan & Jurnal (23:15 WITA):** Screenshot hasil (win/loss/skip), catat ke Jurnal, dan tutup MT5!'
      ],
      decisionTree: [
        {
          condition: 'Sudah profit 1 kali R:R 1:3 di sesi London (target harian tercapai). Apakah wajib lanjut trade lagi di sesi NY malam?',
          action: '**TIDAK WAJIB — bahkan sangat disarankan STOP!** Menjaga profit harian dari godaan overtrading malam hari adalah ciri scalper profesional.'
        },
        {
          condition: 'Sampai pukul 22:30 WITA tidak ada satu pun setup yang memenuhi seluruh checklist SOP. Apakah aku gagal hari ini?',
          action: '**SELAMAT — kamu menang 100% disiplin!** Melindungi modal di hari tanpa setup A+ adalah keunggulan profesional yang tidak dimiliki 90% trader ritel.'
        }
      ],
      failedCase: {
        title: 'Memantau Chart 14 Jam Nonstop Tanpa Playbook',
        context: 'Duduk menatap M5 dari jam 09:00 pagi sampai 01:00 malam WITA.',
        whyFailed: 'Kelelahan mental (*decision fatigue*) membuat trader mengambil setup berkualitas C di malam hari yang menghapus semua profit bersih sesi London.'
      }
    },

    'sizing-lot-xauusd-risiko': {
      mappingSteps: [
        'Kunci aturan risiko tetap per transaksi: **0.5% (defensif / sedang drawdown)** atau **1.0% (standar optimal)** — DILARANG di atas 2%.',
        'Ukur jarak Entry ke SL struktural (dalam dolar, misal `$3.50`), lalu masukkan ke Kalkulator Lot Amy FX Pro (atau rumus `Risiko $ ÷ (Jarak SL $ × 100)`).',
        'Jika SL melebar (misal $6), **lot WAJIB mengecil otomatis** — bukan memperkecil SL secara paksa!'
      ],
      decisionTree: [
        {
          condition: 'Aku sangat yakin 99% dengan setup Unicorn ini. Boleh naikkan risiko dari 1% jadi 5% khusus kali ini?',
          action: '**DILARANG!** Tidak ada setup 100% di pasar. Begitu 1 trade "sangat yakin" itu kena SL -5%, kamu butuh mental ekstra keras untuk memulihkannya dan merusak kurva ekuitas.'
        },
        {
          condition: 'Akun sedang mengalami drawdown -4% minggu ini. Tetap pakai risiko 1% atau diturunkan?',
          action: '**Turunkan separuh ke 0.5% per trade!** Mode defensif melindungi psikologi dan modal sampai akun pulih minimal separuh drawdown, baru kembali ke 1%.'
        }
      ],
      failedCase: {
        title: 'Memakai "Lot Tetap" 0.05 Lot di Semua Jarak SL',
        context: 'Trade pertama SL $2 (risiko $10), trade kedua SL $8 tetap pakai 0.05 lot (risiko melonjak jadi $40!).',
        whyFailed: 'Satu kali kalah di SL lebar langsung menghapus 4 kali kemenangan di SL pendek. Lot wajib dinamis mengikuti jarak SL.'
      }
    },

    'sl-struktural-napas-spread-tp': {
      mappingSteps: [
        'Tentukan **Titik Invalidasi Struktural** (di balik ujung wick sweep / Swing ekstrem — bukan jarak tetap arbitrer).',
        'Tambahkan **Buffer Spread & Wick Gold** (`$0,60–$1,20`) — khususnya pada posisi SELL karena dieksekusi oleh garis ASK.',
        'Petakan target 2 tingkat: **TP1 (Liquidity Pool terdekat / minimal 1,5R–2R)** untuk pengamanan profit, dan **TP2 (DOL H1 / PDH–PDL)** untuk sisa posisi.'
      ],
      decisionTree: [
        {
          condition: 'SL struktural berjarak $6,00, sementara target terdekat (DOL) hanya berjarak $7,00 (R:R 1:1,17). Apakah layak diambil?',
          action: '**SKIP.** Setup dengan R:R di bawah **1:1,8–1:2** tidak sepadan secara matematis. Tunggu retracement lebih dalam atau lewati setup tersebut.'
        },
        {
          condition: 'Apakah TP2 sebaiknya ditempatkan tepat pada garis PDH/PDL atau sedikit di dalamnya?',
          action: 'Tempatkan **TP sedikit di dalam (`$0,30–$0,60` sebelum ujung PDH/PDL)** dan perhitungkan garis Ask pada posisi SELL agar eksekusi target tidak terlewat.'
        }
      ],
      failedCase: {
        title: 'Mempersempit SL ke Tengah FVG Demi Memperbesar Lot',
        context: 'Agar dapat membuka 0,10 lot, trader mempersempit SL menjadi $1,20 di dalam area retracement normal Gold.',
        whyFailed: 'Retracement normal ke 50% CE menyentuh SL terlebih dahulu sebelum harga bergerak +120 pips sesuai arah analisis.'
      }
    },

    'manajemen-trade-partial-bep-notrade': {
      mappingSteps: [
        'Tetapkan aturan Partial & BEP sebelum membuka posisi: saat menyentuh **TP1 (`≥ 1,5R–2R`)**, tutup **60%–75% lot** lalu geser SL sisa lot ke **BEP+ (`+$0,30–$0,50`)**.',
        'Setelah posisi menjadi **bebas risiko (BEP+)**, biarkan sisa volume menuju TP2 (DOL) tanpa memantau setiap detik candle M1.',
        'Patuhi **Daily Loss Guard (`Maks 2× SL/hari`)** dan hindari **No-Trade Days** (US Bank Holiday, Pra-FOMC, dan Seek & Destroy).'
      ],
      decisionTree: [
        {
          condition: 'Posisi baru floating profit +0,5R dan muncul dorongan segera memindahkan SL ke BEP.',
          action: '**Jangan geser BEP terlalu dini.** Retracement normal XAU/USD sering menyentuh BEP yang terlalu cepat — tunggu minimal TP1 (`≥ 1,5R–2R`) atau terbentuk struktur baru.'
        },
        {
          condition: 'Harga sudah menyentuh TP1 (2R) lalu mulai menunjukkan penolakan keras di POI HTF lawan.',
          action: 'Amankan **Partial Close 60%–75%** dan geser SL sisa lot ke **BEP+** agar keuntungan tidak berbalik menjadi kerugian.'
        }
      ],
      failedCase: {
        title: 'Menggeser Stop Loss Menjauh Saat Harga Mendekati SL',
        context: 'Trader menggeser SL menjauh dua kali ketika harga bergerak berlawanan karena enggan menerima rugi -1%.',
        whyFailed: 'Satu pelanggaran tersebut mengubah kerugian terukur -1% menjadi drawdown berat -12%.'
      }
    },

    'psikologi-scalper-anti-fomo': {
      mappingSteps: [
        'Aktifkan **Daily Loss Guard** di Jurnal Amy FX Pro (batas maksimal **-2% atau 2× SL per hari**).',
        'Setiap kali terkena SL, terapkan **Jeda Wajib 30 Menit**: tutup chart dan catat di Jurnal apakah SL tersebut sesuai SOP atau melanggar aturan.',
        'Atasi **FOMO** dengan mengingat probabilitas sesi: terdapat ratusan sesi London dan NY per tahun sehingga melewatkan satu peluang menjaga modal tetap utuh.'
      ],
      decisionTree: [
        {
          condition: 'Baru terkena SL, lalu 3 menit kemudian muncul dorongan membuka posisi baru agar segera balik modal.',
          action: '**STOP — itu merupakan Revenge Trading.** Patuhi jeda wajib 30 menit sebelum mengevaluasi pasar kembali.'
        },
        {
          condition: 'Kondisi fisik kurang tidur atau sedang lelah saat sesi London dibuka.',
          action: '**Tetapkan sebagai No-Trade Day.** Kondisi mental yang tidak optimal meningkatkan risiko kesalahan eksekusi.'
        }
      ],
      failedCase: {
        title: 'Revenge Trading Setelah 1 Kali SL',
        context: 'Setelah terkena SL disiplin -1%, trader langsung masuk 3 kali berturut-turut dengan lot 2× lebih besar di luar Killzone.',
        whyFailed: 'Kerugian normal -1% berkembang menjadi -9% dalam 45 menit akibat keputusan emosional.'
      }
    },

    'protokol-100-sample-mandiri': {
      mappingSteps: [
        'Kumpulkan **100 Sample Terukur** (50 Backtest Replay → 30 Forward Test Demo/Cent → 20 Live Terukur) memakai **1 Model Utama** secara konsisten.',
        'Evaluasi data setiap **20–30 transaksi**: periksa Profit Factor, Expectancy, Max Drawdown, sesi terbaik, dan tingkat pelanggaran SOP.',
        'Lakukan scaling modal secara bertahap hanya setelah rapor memenuhi **Profit Factor ≥ 1,40**, **Max Drawdown < 8%**, dan **pelanggaran SOP < 10%**.'
      ],
      decisionTree: [
        {
          condition: 'Dari 20 transaksi di Jurnal, 70% kerugian berasal dari sesi Asia dan transaksi ke-3 di hari yang sama.',
          action: 'Hapus kedua sumber kebocoran tersebut (fokus hanya Killzone London/NY dan batasi maksimal 2 transaksi/hari) tanpa perlu mengganti strategi.'
        },
        {
          condition: 'Setelah 100 sample Demo/Cent konsisten, bagaimana cara menaikkan modal yang aman?',
          action: 'Naikkan ukuran akun secara bertahap dan awali di akun Standard dengan risiko **0,5%** selama 30 transaksi pertama.'
        }
      ],
      failedCase: {
        title: 'Menilai Strategi Hanya Dari 3 Transaksi',
        context: 'Setelah 3 transaksi dengan 2 kali SL, trader langsung menyimpulkan strategi tidak bekerja dan berpindah metode.',
        whyFailed: 'Sampel 3 transaksi tidak memiliki signifikansi statistik; keunggulan probabilitas baru terlihat pada 30–100 transaksi disiplin.'
      }
    }
  };

  return Object.freeze(ENRICHMENTS);
});
