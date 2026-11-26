/* Amy FX Academy — Level 5 & Level 6 (Pelajaran 21–30)
 * Kurikulum Zero to Scalper ICT XAU/USD (Standar Waktu WITA)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.AmyAcademyPart3 = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : window, function () {
  'use strict';

  const LEVELS = [
    {
      id: 5,
      code: 'Level 05',
      title: 'Waktu, Killzone WITA & Playbook Harian',
      tagline: 'Dalam ICT, Time > Price. Kuasai siklus AMD, jam emas Killzone WITA, proteksi News Lock, Daily Bias, dan SOP harian.'
    },
    {
      id: 6,
      code: 'Level 06',
      title: 'Risiko, Psikologi & Konsistensi Profit',
      tagline: 'Kunci terakhir scalper profesional: sizing lot matematis, manajemen posisi anti-panik, psikologi baja, dan protokol 100 sample.'
    }
  ];

  const LESSONS = [
    // =========================================================================
    // BAB 15 (BAGIAN III) — SIKLUS HARIAN ICT: POWER OF THREE (AMD) & JUDAS SWING
    // =========================================================================
    {
      id: 'siklus-amd-judas-swing',
      number: 15,
      levelId: 2,
      bookFormat: true,
      title: 'Siklus Harian ICT: Power of Three (AMD), NY Midnight Open & Judas Swing',
      subtitle: 'Memahami tiga fase pembentukan satu candle harian (Daily) pada XAU/USD, fungsi garis NY Midnight Open, serta cara mengenali gerakan tipuan awal sesi (Judas Swing).',
      readMinutes: 10,
      diagramId: 'amd-power-of-three',
      diagramAfterSection: 1,
      summary: 'Struktur Power of Three (Accumulation, Manipulation/Judas Swing, Distribution), peran NY Midnight Open (00:00 NY = 12:00 WITA EDT / 13:00 WITA EST), kronologi intraday XAU/USD, dan pengecualian pada hari tren ekstrem atau pra-berita besar.',
      bookSections: [
        {
          number: '15.1',
          heading: 'Struktur Pembentukan Candle Harian: Power of Three (AMD)',
          paragraphs: [
            'Pada Bab 14, kamu mempelajari cara menentukan apakah candle harian (Daily) hari ini cenderung ditutup Bullish atau Bearish. Pada bab ini, kita membedah bagaimana satu batang candle Daily tersebut terbentuk dari sesi ke sesi.',
            'Sebuah candle Daily Bullish memiliki harga pembukaan (*Open*), wick bawah (*Low*), body naik, dan harga penutupan (*Close*) dekat puncak (*High*). Dalam kerangka ICT, urutan pembentukan bagian-bagian candle harian tersebut dikenal sebagai **Power of Three (AMD)** yang terdiri dari tiga fase:',
            '1. **Accumulation (Akumulasi):** Setelah hari perdagangan baru dimulai, harga cenderung bergerak dalam rentang sempit di sekitar harga pembukaan (umumnya sepanjang sesi Asia). Pada fase ini, order ritel dan Stop Loss menumpuk di atas serta di bawah rentang tersebut.',
            '2. **Manipulation (Manipulasi / Judas Swing):** Saat likuiditas sesi London atau awal sesi New York masuk, harga terlebih dahulu didorong ke arah yang berlawanan dengan arah utama harian. Pada hari Bullish, harga turun lebih dulu membentuk wick bawah candle Daily. Gerakan awal berlawanan arah ini disebut **Judas Swing**.',
            '3. **Distribution (Distribusi):** Setelah Liquidity di sisi berlawanan diambil melalui sweep dan order institusi terisi pada harga yang lebih menguntungkan, harga berbalik dan bergerak ekspansif menuju target DOL sepanjang sisa hari — membentuk body utama candle Daily.'
          ]
        },
        {
          number: '15.2',
          heading: 'Garis NY Midnight Open (00:00 NY) dan Aturan Eksekusi Harian',
          paragraphs: [
            'Untuk membedakan apakah harga intraday sedang berada di area murah (*Discount*) atau mahal (*Premium*) terhadap pembukaan hari New York, trader ICT menggunakan patokan horizontal **New York Midnight Open (`00:00 NY`)**.',
            'Dalam waktu lokal **WITA (UTC+8)**, harga pembukaan `00:00 NY` terbentuk tepat pada pukul **`12:00 WITA` saat Musim Panas AS (`EDT`, Mar–Nov)** dan pukul **`13:00 WITA` saat Musim Dingin AS (`EST`, Nov–Mar)**. Tarik garis horizontal dari harga Open candle tersebut ke kanan sepanjang hari sebagai acuan.'
          ],
          table: {
            caption: 'Aturan Penggunaan NY Midnight Open (00:00 NY) Sesuai Daily Bias',
            headers: ['Daily Bias Hari Ini', 'Lokasi Ideal Fase Manipulasi (Judas Swing)', 'Aturan Eksekusi Disiplin', 'Kesalahan yang Harus Dihindari'],
            rows: [
              ['BULLISH (Target ke Atas)', 'Harga turun **di bawah** garis `NY Midnight Open` (membentuk wick bawah Daily)', 'Prioritaskan peluang **BUY di bawah atau dekat NY Midnight Open** setelah sweep `Asia Low` / `SSL`', 'Mengejar BUY jauh di atas Midnight Open setelah harga sudah naik +$18'],
              ['BEARISH (Target ke Bawah)', 'Harga naik **di atas** garis `NY Midnight Open` (membentuk wick atas Daily)', 'Prioritaskan peluang **SELL di atas atau dekat NY Midnight Open** setelah sweep `Asia High` / `BSL`', 'Mengejar SELL jauh di bawah Midnight Open setelah harga sudah turun -$18']
            ]
          }
        },
        {
          number: '15.3',
          heading: 'Kronologi Intraday Power of Three pada XAU/USD (Contoh Hari Bullish)',
          paragraphs: [
            'Berikut urutan pergerakan tiga fase AMD pada skenario hari Bullish XAU/USD menggunakan standar **WITA Musim Panas (EDT)**:'
          ],
          exampleBox: {
            title: 'Kronologi Hari Bullish XAU/USD (WITA EDT)',
            rows: [
              {
                label: '08:00 – 12:00 WITA (Fase 1 · Akumulasi Asia)',
                detail: 'XAU/USD bergerak dalam kotak sempit `2.646,00` (`Asia Low`) hingga `2.652,00` (`Asia High`). Tepat pukul `12:00 WITA`, garis **NY Midnight Open** terbentuk pada `2.649,00`.'
              },
              {
                label: '14:15 – 15:15 WITA (Fase 2 · Manipulasi / Judas Swing London)',
                detail: 'Saat sesi London dibuka, dua candle M15 Bearish mendorong harga turun menembus `2.649,00` (di bawah Midnight Open) hingga melakukan sweep **Asia Low `2.646,00`** sampai ke `2.642,80`. Trader breakout yang menjual di penembusan ini masuk tepat di ujung wick bawah.'
              },
              {
                label: '15:30 – 22:30 WITA (Fase 3 · Distribusi Menuju DOL)',
                detail: 'Setelah Liquidity bawah di `2.642,80` selesai diambil, harga berbalik naik dengan kuat menembus `NY Midnight Open 2.649,00`, mengambil `Asia High 2.652,00`, lalu melanjutkan ekspansi menuju `PDH 2.670,00`.'
              }
            ]
          }
        },
        {
          number: '15.4',
          heading: 'Pengecualian Lapangan: Kondisi Saat Pola AMD Tidak Muncul Rapi',
          paragraphs: [
            'Meskipun pola `Accumulation → Manipulation → Distribution` muncul pada sebagian besar hari perdagangan normal, pola ini tidak terjadi secara identik setiap hari. Ada dua pengecualian utama yang perlu diketahui:',
            '1. **Hari Tren Ekstrem (One-Sided Expansion):** Ketika dorongan fundamental atau arus order satu arah sangat kuat sejak sesi Asia, harga dapat langsung bergerak menuju DOL dengan fase manipulasi yang sangat dangkal atau hampir tidak terbentuk.',
            '2. **Hari Menjelang Berita Makro Besar (FOMC / NFP):** Pasar sering tertahan dalam konsolidasi sempit sepanjang sesi Asia dan London hingga menjelang rilis berita malam. Pada kondisi tersebut, fase manipulasi dan distribusi baru terjadi pada sesi New York.'
          ],
          callout: {
            tone: 'info',
            title: 'Latihan Observasi Chart Historis',
            body: 'Tandai waktu `00:00 NY` (`12:00 WITA` EDT / `13:00 WITA` EST) dengan garis vertikal dan horizontal pada 10 hari perdagangan terakhir di chart M15 XAU/USD. Amati seberapa sering titik terendah hari Bullish (atau titik tertinggi hari Bearish) terbentuk pada sesi London atau awal New York di sisi seberang garis NY Midnight Open.'
          }
        }
      ],
      keyTakeaways: [
        'Pembentukan satu candle harian normal mengikuti 3 fase **Power of Three (AMD)**: **Accumulation** (Asia) → **Manipulation / Judas Swing** (gerak awal berlawanan bias) → **Distribution** (ekspansi menuju DOL).',
        '**NY Midnight Open (`00:00 NY`)** = **`12:00 WITA` (EDT)** atau **`13:00 WITA` (EST)** menjadi patokan harian area murah dan mahal.',
        'Pada hari **Bullish**, cari peluang BUY **di bawah** NY Midnight Open; pada hari **Bearish**, cari peluang SELL **di atas** NY Midnight Open.',
        'Kenali pengecualian pada hari tren satu arah ekstrem dan hari pra-FOMC/NFP agar tidak memaksakan pola saat struktur belum mendukung.'
      ],
      bridgeNext: 'Setelah memahami bagaimana siklus harian AMD bekerja di sekitar garis NY Midnight Open, langkah berikutnya adalah mengetahui jendela waktu spesifik saat volume institusi aktif mengeksekusi order. Pembahasan jadwal lengkap tersebut ada pada **Bab 16: Waktu Institusional: Killzone, Silver Bullet & Macro 20 Menit (Panduan WITA)**.',
      conceptBlocks: [
        {
          heading: 'Power of Three (AMD), NY Midnight Open & Judas Swing',
          paragraphs: [
            'Satu candle harian umumnya melewati tiga fase: Accumulation (Asia), Manipulation/Judas Swing (gerakan awal berlawanan arah pada London/awal NY), dan Distribution (ekspansi arah utama).',
            'NY Midnight Open (00:00 NY = 12:00 WITA EDT / 13:00 WITA EST) memisahkan zona murah dan mahal harian: Buy di bawah Midnight Open pada hari Bullish, Sell di atas Midnight Open pada hari Bearish.'
          ]
        }
      ],
      mappingSteps: [
        'Tarik garis horizontal NY Midnight Open tepat pukul 00:00 NY (12:00 WITA EDT / 13:00 WITA EST).',
        'Tandai rentang Accumulation Asia (08:00–12:00 WITA EDT / 09:00–13:00 WITA EST) dan arah Daily Bias hari tersebut.',
        'Tunggu fase Manipulation (Judas Swing) melewati Midnight Open serta sweep ujung Asia ke arah berlawanan bias sebelum mencari konfirmasi fase Distribution.'
      ],
      decisionTree: [
        {
          condition: 'Daily Bias Bullish dan harga baru turun menembus NY Midnight Open serta sweep Asia Low pada awal sesi London.',
          action: 'Fase Manipulation (Judas Swing) berpotensi selesai — pantau konfirmasi pembalikan arah untuk mengikuti fase Distribution ke atas.'
        },
        {
          condition: 'Daily Bias Bullish, tetapi harga sudah naik +$22 di atas NY Midnight Open tanpa koreksi.',
          action: 'Hindari mengejar posisi BUY di area Premium harian; tunggu retracement sehat atau sesi New York berikutnya.'
        }
      ],
      failedCase: {
        context: 'Pada hari Bullish, trader langsung klik SELL saat melihat 2 candle merah pembukaan London menembus ke bawah Asia Low.',
        whyFailed: 'Penurunan awal sesi tersebut adalah Judas Swing (fase Manipulation) untuk mengambil Liquidity di bawah NY Midnight Open sebelum fase Distribution naik dimulai.'
      },
      validRules: [
        'Gunakan NY Midnight Open sebagai acuan harian: Buy di bawah Midnight Open pada hari Bullish, Sell di atas Midnight Open pada hari Bearish.',
        'Evaluasi pergerakan tajam pertama saat pembukaan London sebagai potensi Judas Swing sebelum mengambil keputusan.'
      ],
      invalidRules: [
        'Mengejar breakout awal pembukaan sesi ke arah berlawanan Daily Bias.',
        'Memaksakan pola AMD selesai di sesi London pada hari pra-FOMC yang bergerak datar hingga malam.'
      ],
      xauScenario: {
        context: 'Hari Bullish XAU/USD (EDT): NY Midnight Open 2.649,00, Asia Range 2.646,00–2.652,00.',
        steps: [
          'Pukul 14:30 WITA Judas Swing turun ke 2.642,80 (di bawah Midnight Open & sweep Asia Low).',
          'Setelah konfirmasi balik arah, fase Distribution mendorong harga menembus 2.649,00 → 2.652,00 → PDH 2.670,00.'
        ]
      },
      goldenRules: [
        'Gerakan tajam pertama pada pembukaan sesi sering merupakan fase Manipulation (Judas Swing); tunggu sweep selesai dan konfirmasi arah sebelum masuk pasar.'
      ],
      practiceCta: {
        label: 'Latih Deteksi Judas Swing di 100 Kasus ICT',
        description: 'Uji ketepatan membaca perbedaan gerakan tipuan Judas Swing dari kelanjutan tren pada skenario chart Gold.',
        href: 'trading-practice/index.html'
      },
      quiz: [
        {
          question: 'Apa urutan 3 fase yang membentuk satu candle harian normal dalam konsep **ICT Power of Three (AMD)**?',
          options: [
            'Distribution → Manipulation → Accumulation',
            'Accumulation (Asia) → Manipulation / Judas Swing (awal sesi) → Distribution (ekspansi arah utama)',
            'Breakout → Averaging → Cut Loss',
            'Sideways → Rollover → Akhir Pekan'
          ],
          answerIndex: 1,
          explanation: 'Power of Three berjalan berurutan: akumulasi order, manipulasi ke arah berlawanan (Judas Swing), lalu distribusi harga menuju target DOL.'
        },
        {
          question: 'Pukul berapakah garis **NY Midnight Open (`00:00 NY`)** terbentuk dalam standar waktu **WITA (UTC+8)**?',
          options: [
            '00:00 WITA sepanjang tahun',
            '**12:00 WITA** saat Musim Panas AS (EDT, +12 jam) dan **13:00 WITA** saat Musim Dingin AS (EST, +13 jam)',
            '06:00 WITA saat EDT dan 07:00 WITA saat EST',
            '20:00 WITA setiap hari'
          ],
          answerIndex: 1,
          explanation: '00:00 NY ditambah 12 jam (EDT) = 12:00 WITA; ditambah 13 jam (EST) = 13:00 WITA.'
        },
        {
          question: 'Daily Bias XAU/USD hari ini adalah **BEARISH**. Menurut aturan NY Midnight Open, di area manakah lokasi paling ideal untuk mencari peluang **SELL**?',
          options: [
            'Jauh di bawah NY Midnight Open setelah harga sudah turun -$25',
            'Di **atas** garis NY Midnight Open setelah terjadi manipulasi naik (Judas Swing) sweep Liquidity atas',
            'Tepat di titik terendah pekan lalu',
            'Di jam rollover ketika spread melebar'
          ],
          answerIndex: 1,
          explanation: 'Pada hari Bearish, menjual di atas NY Midnight Open menempatkan posisi pada area Premium harian setelah Judas Swing terbentuk.'
        },
        {
          question: 'Pada hari menjelang rilis suku bunga besar seperti **FOMC** atau **NFP**, mengapa pola AMD tidak boleh dipaksakan pasti selesai di pagi/siang hari?',
          options: [
            'Karena pasar tutup total di hari berita besar',
            'Karena institusi sering menahan harga datar dalam konsolidasi hingga jam rilis berita malam, sehingga fase manipulasi dan distribusi baru terjadi saat sesi NY',
            'Karena NY Midnight Open tidak berlaku di bulan genap',
            'Karena Gold berhenti mengikuti USD saat berita besar'
          ],
          answerIndex: 1,
          explanation: 'Pada hari katalis makro besar, pasar kerap tertahan dalam konsolidasi panjang hingga rilis berita memicu repricing dan distribusi.'
        }
      ]
    },

    // =========================================================================
    // BAB 16 (BAGIAN III) — WAKTU INSTITUSIONAL: KILLZONE, SILVER BULLET & MACRO WITA
    // =========================================================================
    {
      id: 'jadwal-killzone-wita-silver-bullet',
      number: 16,
      levelId: 2,
      bookFormat: true,
      title: 'Waktu Institusional: Killzone, Silver Bullet & Macro 20 Menit (Panduan WITA)',
      subtitle: 'Penerapan prinsip "Time > Price" dalam ICT: jadwal eksak Killzone, jendela 60 menit Silver Bullet, dan jendela waktu 20 menit ICT Macros dalam standar WITA EDT serta EST.',
      readMinutes: 10,
      diagramId: 'killzones-wita-timeline',
      diagramAfterSection: 1,
      summary: 'Prinsip Time > Price, jadwal lengkap Killzone ICT, Silver Bullet 60 menit (London, NY AM, NY PM), ICT Macros 20 menit dalam konversi eksak WITA EDT (+12 jam) & EST (+13 jam), serta strategi memilih satu sesi fokus.',
      bookSections: [
        {
          number: '16.1',
          heading: 'Prinsip "Time > Price" dalam Metodologi ICT',
          paragraphs: [
            'Pada Bab 06, kamu sudah mengenal tiga sesi utama pasar global (Asia, London, dan New York) beserta karakter volatilitasnya. Pada bab ini, waktu trading dipersempit lagi ke jendela spesifik tempat volume transaksi institusi paling terkonsentrasi.',
            'Dalam ajaran ICT terdapat prinsip dasar **"Time first, then Price"** (periksa waktunya terlebih dahulu, baru analisis pola harganya). Alasan teknisnya sangat jelas:',
            '1. **Di luar jam aktif (seperti `11:30 WITA` atau `18:30 WITA`):** Likuiditas tipis sehingga pola teknikal yang tampak rapi sering bergerak lambat, berbalik acak (*choppy*), dan menyentuh Stop Loss tanpa dorongan lanjutan.',
            '2. **Di dalam Killzone atau Silver Bullet:** Volume order bank, dana lindung nilai, dan pelaku institusi masuk secara bersamaan sehingga pergerakan menuju target DOL berlangsung jauh lebih cepat dan terarah (sering tuntas dalam 15–45 menit).',
            'Dengan membatasi transaksi hanya pada jendela waktu yang tepat, sebagian besar sinyal palsu tersaring secara otomatis sebelum kamu masuk pasar.'
          ]
        },
        {
          number: '16.2',
          heading: 'Jadwal Lengkap Killzone dan Silver Bullet ICT (NY ke WITA)',
          paragraphs: [
            'Gunakan tabel berikut sebagai acuan jadwal harian XAU/USD. Seluruh waktu telah dikonversi dari jam **New York** ke **WITA (UTC+8)** untuk **Musim Panas AS (`EDT`, Mar–Nov, +12 jam)** dan **Musim Dingin AS (`EST`, Nov–Mar, +13 jam)**:'
          ],
          table: {
            caption: 'Jadwal Killzone & Silver Bullet ICT untuk XAU/USD (NY ↔ WITA)',
            headers: ['Jendela Waktu ICT', 'Waktu New York', 'WITA Musim Panas (EDT · Mar–Nov)', 'WITA Musim Dingin (EST · Nov–Mar)', 'Karakter & Fungsi Utama'],
            rows: [
              ['Asia Range', '`20:00 – 00:00 NY`', '`08:00 – 12:00 WITA`', '`09:00 – 13:00 WITA`', 'Fase Akumulasi; tandai Asia High/Low, hindari overtrade di tengah kotak'],
              ['London Killzone', '`02:00 – 05:00 NY`', '`14:00 – 17:00 WITA`', '`15:00 – 18:00 WITA`', 'Jendela utama Judas Swing & pembentukan High/Low harian Gold'],
              ['London Silver Bullet', '`03:00 – 04:00 NY`', '`15:00 – 16:00 WITA`', '`16:00 – 17:00 WITA`', 'Jendela fokus 60 menit mencari 1 dorongan bersih pasca pembukaan London'],
              ['NY AM Killzone', '`07:00 – 10:00 NY` (ext `11:00`)', '`19:00 – 22:00` (ext `23:00`) WITA', '`20:00 – 23:00` (ext `00:00`) WITA', 'Volume puncak harian, rilis data ekonomi USD (`08:30 NY`), & ekspansi utama'],
              ['NY AM Silver Bullet', '`10:00 – 11:00 NY`', '`22:00 – 23:00 WITA`', '`23:00 – 00:00 WITA`', 'Jendela 60 menit paling bersih setelah volatilitas berita `08:30` & buka saham `09:30 NY` mereda'],
              ['London Close', '`10:00 – 12:00 NY`', '`22:00 – 00:00 WITA`', '`23:00 – 01:00 WITA`', 'Penutupan transaksi bank Eropa; sering terjadi *profit-taking* atau koreksi balik'],
              ['NY PM Silver Bullet', '`14:00 – 15:00 NY`', '`02:00 – 03:00 WITA` (dini hari)', '`03:00 – 04:00 WITA` (dini hari)', 'Sesi sore NY; kurang praktis untuk trader WITA karena bertepatan dengan dini hari']
            ]
          }
        },
        {
          number: '16.3',
          heading: 'ICT Macros: Jendela Algoritma 20 Menit (xx:50 – xx:10)',
          paragraphs: [
            'Di dalam durasi Killzone yang berlangsung 3 jam, akselerasi repricing dan Liquidity Sweep paling sering terkonsentrasi pada **jendela pendek 20 menit** yang disebut **ICT Macros**, yakni mulai **10 menit sebelum pergantian jam hingga 10 menit sesudahnya (`xx:50 – xx:10 NY`)** serta momen spesifik pembukaan sesi:',
            '1. **Macro London:** `02:33–03:00 NY` (`14:33–15:00 WITA` EDT) dan `04:03–04:23 NY` (`16:03–16:23 WITA` EDT).',
            '2. **Macro NY AM Utama:** `08:50–09:10 NY` (`20:50–21:10 WITA` EDT, setelah data 08:30 NY), **`09:50–10:10 NY` (`21:50–22:10 WITA` EDT, pemicu utama NY AM Silver Bullet)**, dan `10:50–11:10 NY` (`22:50–23:10 WITA` EDT).',
            'Cara penggunaan ICT Macro yang benar adalah sebagai **filter kewaspadaan waktu**, bukan pemicu transaksi tanpa konfirmasi. Apabila harga sedang mendekati area pantau yang searah dengan DOL tepat ketika Macro `21:50–22:10 WITA` dimulai, probabilitas terjadinya sweep cepat yang diikuti pergerakan terarah menjadi jauh lebih tinggi.'
          ]
        },
        {
          number: '16.4',
          heading: 'Strategi Memilih Satu Sesi Fokus untuk Trader WITA',
          paragraphs: [
            'Salah satu penyebab utama pelanggaran rencana trading adalah **kelelahan mengambil keputusan (*decision fatigue*)** akibat memantau grafik terus-menerus dari pagi hingga larut malam. Trader yang konsisten cukup memilih **satu jendela utama** berdurasi 2–3 jam yang sesuai dengan jadwal hariannya:'
          ],
          exampleBox: {
            title: 'Dua Pilihan Jadwal Fokus untuk Trader WITA',
            rows: [
              {
                label: 'Opsi A — Fokus London Killzone (14:00–17:00 WITA EDT / 15:00–18:00 EST)',
                detail: 'Cocok jika waktu luang tersedia pada sore hari. Fokus memantau sweep `Asia High/Low` dan mengambil maksimal 1 setup tervalidasi, lalu tutup grafik setelah pukul 17:00/18:00 WITA.'
              },
              {
                label: 'Opsi B — Fokus NY AM & Silver Bullet (20:30–23:00 WITA EDT / 21:30–00:00 EST)',
                detail: 'Ideal bagi pekerja atau mahasiswa. Biarkan rilis data `20:30 WITA` (EDT) stabil terlebih dahulu, amati struktur sesi London, lalu fokus pada jendela **21:30–23:00 WITA** (mencakup Macro `21:50–22:10` dan Silver Bullet `22:00–23:00`).'
              }
            ]
          },
          callout: {
            tone: 'warn',
            title: 'Jam Tidak Ideal (Dead Zone & Rollover) yang Wajib Dihindari',
            body: 'Hindari membuka posisi baru pada **jeda London Lunch (`17:30–19:00 WITA` EDT)** karena volume menyusut menjadi pergerakan acak bolak-balik, serta hentikan seluruh aktivitas transaksi saat **Rollover Harian (`04:00–07:00 WITA`)** ketika spread XAU/USD melebar tajam.'
          }
        }
      ],
      keyTakeaways: [
        'Prinsip **Time > Price**: transaksi diprioritaskan hanya pada jendela likuiditas puncak (**Killzone**, **Silver Bullet**, dan **Macro 20 menit**).',
        'Dua jendela paling efektif untuk trader WITA adalah **London Killzone** (`14:00–17:00 WITA` EDT / `15:00–18:00` EST) dan **NY AM Silver Bullet** (`22:00–23:00 WITA` EDT / `23:00–00:00` EST).',
        '**ICT Macro 20 menit (`xx:50 – xx:10`)** — terutama `09:50–10:10 NY` (`21:50–22:10 WITA` EDT) — berfungsi sebagai jendela penguat waktu saat harga mendekati area pantau.',
        'Pilih **1 sesi fokus** per hari (2–3 jam) guna mencegah kelelahan mental dan overtrading.'
      ],
      bridgeNext: 'Setelah menguasai peta waktu institusional (`Killzone`, `Silver Bullet`, dan `Macro`), masih ada satu faktor eksternal pada sesi New York yang dapat merusak eksekusi dalam hitungan detik bila tidak dibatasi dengan aturan proteksi, yaitu jadwal rilis data ekonomi AS. Bagian III ditutup dengan pembahasan **Bab 17: Berita Ekonomi USD (CPI, NFP, FOMC) & Protokol News Lock**.',
      conceptBlocks: [
        {
          heading: 'Killzone, Silver Bullet & ICT Macros 20 Menit (Standar WITA)',
          paragraphs: [
            'Time > Price: eksekusi paling bersih terjadi di dalam London Killzone (02:00–05:00 NY), NY AM Killzone (07:00–10:00 NY), dan jendela 60 menit Silver Bullet (03:00–04:00 NY & 10:00–11:00 NY).',
            'ICT Macros 20 menit (seperti 09:50–10:10 NY) menandai jendela sempit saat algoritma sering melakukan Liquidity Sweep dan ekspansi menuju DOL.'
          ]
        }
      ],
      mappingSteps: [
        'Pastikan apakah Amerika Serikat sedang menerapkan Musim Panas (EDT, NY +12 jam) atau Musim Dingin (EST, NY +13 jam).',
        'Tentukan 1 sesi fokus harian (London Killzone atau NY AM + Silver Bullet) dan hindari membuka posisi di luar jam tersebut.',
        'Gunakan jendela Macro 20 menit (misalnya 09:50–10:10 NY) sebagai penguat kewaspadaan ketika harga sudah tiba di area pantau.'
      ],
      decisionTree: [
        {
          condition: 'Muncul pola menarik pukul 18:15 WITA (EDT) pada jam sepi jeda London Lunch sebelum sesi NY dibuka.',
          action: 'Abaikan / Skip — tunggu sesi NY AM Killzone dan rilis data 20:30 selesai agar tidak terjebak pergerakan acak.'
        },
        {
          condition: 'Pukul 22:05 WITA (EDT · NY AM Silver Bullet) harga sweep low M5 setelah berita 20:30 mereda dan searah DOL.',
          action: 'Syarat waktu terpenuhi — pantau konfirmasi entry sesuai rencana risiko.'
        }
      ],
      failedCase: {
        context: 'Trader memaksakan 4 transaksi di luar Killzone (11:30–13:30 WITA) karena tidak sabar menunggu sesi London.',
        whyFailed: 'Di luar Killzone, volatilitas sempit dan bolak-balik membuat Stop Loss tersentuh berulang kali sebelum pergerakan utama sesi London dimulai.'
      },
      validRules: [
        'Fokus pada 1 jendela Killzone atau Silver Bullet yang konsisten setiap hari.',
        'Sesuaikan jam WITA terhadap perubahan DST Amerika Serikat (+12 jam EDT vs +13 jam EST).'
      ],
      invalidRules: [
        'Memantau chart sepanjang hari hingga kelelahan dan memaksa entry pada Dead Zone.',
        'Masuk transaksi semata-mata karena jam menunjukkan Macro tanpa struktur atau DOL yang jelas.'
      ],
      xauScenario: {
        context: 'Jadwal fokus NY AM Silver Bullet (EDT): berita 20:30 WITA selesai, bursa saham AS buka 21:30 WITA.',
        steps: [
          'Pukul 21:50–22:10 WITA (Macro 09:50–10:10 NY): harga melakukan pullback sweep swing low M5.',
          'Pukul 22:15 WITA (di dalam Silver Bullet 22:00–23:00 WITA): konfirmasi arah muncul menuju DOL harian.'
        ]
      },
      goldenRules: [
        'Dua jam fokus di dalam Killzone jauh lebih efektif dibanding dua belas jam memantau grafik tanpa filter waktu.'
      ],
      practiceCta: {
        label: 'Pantau Status Killzone Live di Cockpit Mapping',
        description: 'Cek otomatis apakah jam sekarang sedang berada di Asia, London KZ, NY AM KZ, atau Dead Zone langsung di header Mapping.',
        href: '../mapping/index.html'
      },
      quiz: [
        {
          question: 'Jam berapakah jendela **NY AM Silver Bullet (`10:00–11:00 NY`)** jika dikonversi secara eksak ke waktu **WITA (UTC+8)**?',
          options: [
            '10:00–11:00 WITA sepanjang tahun',
            '**22:00–23:00 WITA** saat Musim Panas (EDT, +12 jam) dan **23:00–00:00 WITA** saat Musim Dingin (EST, +13 jam)',
            '14:00–15:00 WITA saat EDT',
            '08:00–09:00 WITA setiap pagi'
          ],
          answerIndex: 1,
          explanation: '10:00–11:00 NY + 12 jam (EDT) = 22:00–23:00 WITA; + 13 jam (EST) = 23:00–00:00 WITA.'
        },
        {
          question: 'Mengapa jendela **NY AM Silver Bullet (`10:00–11:00 NY`)** menjadi salah satu waktu utama scalper XAU/USD?',
          options: [
            'Karena spread selalu 0,00 di seluruh dunia',
            'Karena terjadi setelah volatilitas berita `08:30 NY` dan pembukaan bursa saham AS `09:30 NY` mereda, sehingga arah ekspansi jauh lebih bersih',
            'Karena pasar berhenti bergerak sehingga bebas risiko',
            'Karena broker melarang kerugian pada jam tersebut'
          ],
          answerIndex: 1,
          explanation: 'Setelah guncangan awal data 08:30 NY dan pembukaan bursa saham AS 09:30 NY selesai, arah dominan institusi biasanya sudah lebih jelas pada 10:00–11:00 NY.'
        },
        {
          question: 'Bagaimana cara yang tepat menggunakan **ICT Macro 20 Menit** (seperti `09:50–10:10 NY` / `21:50–22:10 WITA` EDT)?',
          options: [
            'Langsung klik BUY atau SELL setiap kali jam menunjukkan menit `:50` tanpa melihat struktur',
            'Sebagai filter kewaspadaan waktu saat harga sedang mendekati area pantau dan searah DOL, karena algoritma sering memicu sweep/ekspansi di jendela 20 menit tersebut',
            'Untuk menggandakan ukuran lot menjadi 5% risiko',
            'Sebagai pengingat untuk trading di akhir pekan'
          ],
          answerIndex: 1,
          explanation: 'Macro adalah jendela penguat waktu (timing catalyst) yang digabungkan dengan DOL dan struktur — bukan sinyal tekan tombol tanpa konfirmasi.'
        },
        {
          question: 'Mengapa prinsip ICT menempatkan **"Time > Price"** dan menyarankan fokus pada 1 sesi utama per hari?',
          options: [
            'Agar trader tidak mengalami kelelahan keputusan (*decision fatigue*) dan terhindar dari setup palsu di luar jam likuiditas puncak (Dead Zone)',
            'Karena chart harga tidak ada gunanya sama sekali',
            'Karena akun MT5 otomatis logout setelah 3 jam',
            'Karena emas hanya diperdagangkan 1 jam per minggu'
          ],
          answerIndex: 0,
          explanation: 'Fokus 2–3 jam pada jendela Killzone/Silver Bullet menjaga kualitas keputusan dan menyaring mayoritas sinyal palsu di jam sepi.'
        }
      ]
    },

    // =========================================================================
    // BAB 17 (BAGIAN III) — BERITA EKONOMI USD & PROTOKOL NEWS LOCK
    // =========================================================================
    {
      id: 'protokol-news-lock-usd',
      number: 17,
      levelId: 2,
      bookFormat: true,
      title: 'Berita Ekonomi USD (CPI, NFP, FOMC) & Protokol News Lock',
      subtitle: 'Penjelasan mengapa rilis data makro AS dapat melampaui Stop Loss dalam hitungan detik, daftar 4 berita berdampak tinggi pada XAU/USD, dan aturan perlindungan modal melalui News Lock.',
      readMinutes: 9,
      diagramId: 'news-lock-shield',
      diagramAfterSection: 2,
      summary: 'Pengaruh data ekonomi AS terhadap XAU/USD, jadwal baku 4 berita High Impact USD (CPI, NFP, FOMC, Core PCE/Jobless Claims) dalam WITA EDT/EST, risiko spread spike/slippage/whipsaw, serta Protokol News Lock -15m s.d. +30m.',
      bookSections: [
        {
          number: '17.1',
          heading: 'Hubungan Data Ekonomi Amerika Serikat dengan Pergerakan XAU/USD',
          paragraphs: [
            'Sebagaimana dibahas di Bab 01, instrumen **XAU/USD** adalah nilai tukar emas terhadap **Dolar Amerika Serikat (`USD`)**. Ketika pemerintah AS atau bank sentral AS (**The Federal Reserve / The Fed**) merilis data ekonomi utama yang memengaruhi proyeksi suku bunga Dolar, institusi keuangan global langsung menyesuaikan harga USD secara serentak dalam hitungan detik.',
            'Secara fundamental dasar:',
            '1. Data inflasi atau ketenagakerjaan AS yang **lebih kuat dari perkiraan** cenderung mendorong The Fed mempertahankan suku bunga tinggi → **USD menguat** → **XAU/USD cenderung tertekan turun**.',
            '2. Data ekonomi AS yang **lebih lemah dari perkiraan** atau sinyal pemangkasan suku bunga cenderung melemahkan **USD** → **XAU/USD cenderung menguat naik**.',
            'Meskipun demikian, **jangan menebak arah transaksi hanya dari angka rilis berita**. Pasar kerap sudah mengantisipasi data sebelumnya (*priced-in*) atau terlebih dahulu melakukan sweep tajam ke arah berlawanan sebelum bergerak mengikuti arah sebenarnya.'
          ]
        },
        {
          number: '17.2',
          heading: 'Empat Berita Berdampak Tinggi (Red Folder USD) untuk XAU/USD',
          paragraphs: [
            'Kamu tidak perlu memantau puluhan rilis ekonomi dari berbagai negara. Untuk perdagangan XAU/USD, cukup catat **4 kelompok berita High Impact USD** berikut setiap awal pekan:'
          ],
          table: {
            caption: '4 Katalis Berita High Impact USD Utama pada XAU/USD (Standar WITA)',
            headers: ['Nama Berita', 'Indikator yang Diukur', 'Jam Rilis Baku NY', 'Jam WITA (EDT / EST)', 'Karakter Volatilitas di Gold'],
            rows: [
              ['US CPI (Inflasi)', 'Laju kenaikan harga barang dan jasa konsumen AS', '`08:30 NY` (pertengahan bulan)', '`20:30` (EDT) / `21:30` (EST)', 'Sangat tajam; kerap melakukan sweep dua arah `$15–$30` dalam 5 menit pertama'],
              ['US NFP (Tenaga Kerja)', 'Pertambahan lapangan kerja non-pertanian & tingkat pengangguran AS', '`08:30 NY` (Jumat pekan ke-1)', '`20:30` (EDT) / `21:30` (EST)', 'Volatilitas bulanan tertinggi; rawan whipsaw cepat dan pelebaran spread ekstrem'],
              ['FOMC & Konferensi Pers', 'Keputusan suku bunga The Fed & keterangan Ketua The Fed', '`14:00 & 14:30 NY`', '`02:00 & 02:30` (EDT) / `03:00 & 03:30` (EST)', 'Dua gelombang: reaksi pertama saat angka suku bunga (`14:00`), potensi balik arah saat pidato (`14:30`)'],
              ['Core PCE / Jobless Claims / ISM', 'Indikator inflasi acuan Fed, klaim pengangguran mingguan, & indeks bisnis', '`08:30` atau `10:00 NY`', '`20:30/22:00` (EDT) / `21:30/23:00` (EST)', 'Katalis rutin yang sering memicu sweep likuiditas awal sesi New York']
            ]
          }
        },
        {
          number: '17.3',
          heading: 'Tiga Risiko Teknis Saat Detik Rilis Berita: Spread Spike, Slippage & Whipsaw',
          paragraphs: [
            'Sebagian pemula menganggap memasang Stop Loss `$4` sudah cukup aman untuk menahan transaksi melewati rilis CPI atau NFP. Secara teknis mekanisme eksekusi pasar, anggapan tersebut keliru. Pada detik rilis berita besar, penyedia likuiditas menarik sementara antrean order sehingga timbul tiga risiko sekaligus:',
            '1. **Spread Spike:** Spread normal XAU/USD sebesar `$0,20–$0,35` dapat melebar mendadak menjadi **`$2,00 – $5,00` (20–50 pips)** sehingga Stop Loss dapat tersentuh oleh pelebaran spread sebelum harga bid/ask chart mencapai level tersebut.',
            '2. **Slippage (Lompatan Harga Eksekusi):** Apabila Stop Loss dipasang di `2.650,00` dengan rencana rugi `$10`, tetapi harga melompat langsung dari `2.654,00` ke `2.642,00` tanpa likuiditas di antaranya, order penutupan dieksekusi di harga tersedia berikutnya (`2.642,00`). Akibatnya, kerugian nyata membengkak **2 hingga 3 kali lipat** dari rencana awal.',
            '3. **Whipsaw Dua Arah:** Memasang order pending berlawanan (`Buy Stop` di atas dan `Sell Stop` di bawah) sebelum rilis sangat berisiko: lonjakan awal menyentuh satu sisi lalu berbalik tajam dalam hitungan detik menyentuh sisi lainnya, sehingga kedua posisi terkena Stop Loss bersamaan.'
          ]
        },
        {
          number: '17.4',
          heading: 'Protokol News Lock (-15 Menit s.d. +30 Menit) & Eksekusi Pasca-Berita',
          paragraphs: [
            'Untuk melindungi akun dari tiga risiko di atas sekaligus tetap memanfaatkan tren bersih yang lahir sesudah berita, terapkan **Protokol News Lock** dalam 3 tahapan baku:'
          ],
          exampleBox: {
            title: 'SOP 3 Tahap Menghadapi Berita High Impact USD (Contoh CPI 20:30 WITA EDT)',
            rows: [
              {
                label: 'Tahap 1 — 15 Menit Sebelum Rilis (20:15 WITA · NEWS LOCK AKTIF)',
                detail: '**Tidak membuka posisi baru.** Jika masih memiliki posisi aktif yang sudah profit dari sesi London, amankan sebagian besar keuntungan (`Partial 70%–100%`) atau tutup seluruhnya sebelum rilis.'
              },
              {
                label: 'Tahap 2 — Detik Rilis s.d. +30 Menit (20:30 – 21:00 WITA · OBSERVASI)',
                detail: 'Hindari transaksi saat spread melebar dan harga berayun dua arah. Fokus mengamati **Liquidity Pool mana (`London High/Low`, `PDH/PDL`) yang baru di-sweep** oleh lonjakan berita.'
              },
              {
                label: 'Tahap 3 — Sesudah +30 Menit (21:00+ WITA · EKSEKUSI TERUKUR)',
                detail: 'Setelah spread kembali normal (`$0,20–$0,35`) dan arah struktur pasca-berita terbentuk jelas, lanjutkan pemantauan peluang entry yang searah dengan DOL menuju sesi NY AM Silver Bullet (`22:00 WITA`).'
              }
            ]
          },
          callout: {
            tone: 'info',
            title: 'Ringkasan Pencapaian Bagian III (Kompas Arah)',
            body: 'Dengan selesainya Bab 13–17, seluruh komponen penentu arah dan waktu ICT sudah lengkap: **Draw on Liquidity (Bab 13)**, **Daily Bias dan Garis Invalidasi (Bab 14)**, **Power of Three & NY Midnight Open (Bab 15)**, **Jadwal Killzone, Silver Bullet & Macro WITA (Bab 16)**, serta **Protokol News Lock (Bab 17)**. Pada Bagian IV berikutnya, seluruh kompas ini dihubungkan dengan mekanisme zona entry teknikal ICT.'
          }
        }
      ],
      keyTakeaways: [
        'Periksa Kalender Ekonomi setiap pagi untuk 4 berita High Impact USD utama: **US CPI**, **US NFP**, **FOMC**, dan **Core PCE / Jobless Claims / ISM**.',
        'Hindari menahan posisi berisiko ketat atau memasang `Buy Stop + Sell Stop` saat detik rilis karena bahaya **Spread Spike**, **Slippage**, dan **Whipsaw**.',
        'Terapkan **Protokol News Lock**: **tidak ada entry baru dari -15 menit sebelum hingga +30 menit sesudah** rilis berita High Impact USD (untuk FOMC, tunggu hingga konferensi pers selesai).',
        'Manfaatkan berita sebagai katalis pembentuk Liquidity, lalu eksekusi setelah volatilitas awal reda dan spread kembali normal.'
      ],
      bridgeNext: 'Seluruh kerangka penentuan arah dan waktu di **Bagian III (Bab 13–17)** telah selesai. Tahap berikutnya adalah mempelajari cara menentukan titik masuk (*entry*) yang presisi di **Bagian IV**, dimulai dari **Bab 18: Displacement: Mengenali Jejak Dorongan Institusi yang Sah**.',
      conceptBlocks: [
        {
          heading: 'Protokol News Lock (-15m s.d. +30m) & Katalis High Impact USD',
          paragraphs: [
            'Berita High Impact USD (CPI, NFP, FOMC, Core PCE) memicu spread spike, slippage, dan whipsaw dua arah yang dapat membuat kerugian melampaui batas Stop Loss rencana.',
            'Terapkan News Lock (-15 menit hingga +30 menit rilis berita), amankan posisi profit pra-berita, dan pantau pergerakan terarah setelah spread kembali normal.'
          ]
        }
      ],
      mappingSteps: [
        'Cek tab Kalender Ekonomi di modul Market Intel setiap pagi sebelum menyusun rencana sesi.',
        'Tandai jam rilis berita High Impact USD (CPI, NFP, FOMC, Core PCE) dalam waktu WITA dan aktifkan aturan News Lock -15m s.d. +30m.',
        'Setelah +30 menit pasca rilis dan spread kembali normal, amati Liquidity Pool yang kena sweep berita untuk menyusun rencana entry.'
      ],
      decisionTree: [
        {
          condition: 'Tersisa 12 menit menuju rilis US CPI (20:30 WITA EDT) dan muncul setup M5 yang tampak rapi.',
          action: 'STOP — News Lock aktif (-15m). Jangan membuka posisi baru; tunggu hingga 21:00 WITA.'
        },
        {
          condition: 'Sudah memiliki posisi BUY profit +$12 dari sesi London, dan 20 menit lagi NFP akan rilis.',
          action: 'Amankan minimal 70%–100% profit atau tutup penuh sebelum NFP agar keuntungan tidak tergerus whipsaw dan slippage.'
        }
      ],
      failedCase: {
        context: 'Trader memasang Buy Stop +$3 dan Sell Stop -$3 satu menit sebelum rilis NFP dengan SL ketat $3.',
        whyFailed: 'Whipsaw 15 detik pertama menyapu kedua sisi disertai spread spike $3 — kedua order aktif dan keduanya terkena SL dengan slippage.'
      },
      validRules: [
        'Cek Kalender Ekonomi Market Intel setiap pagi sebelum membuka chart.',
        'Patuhi News Lock -15 menit sebelum hingga +30 menit sesudah rilis Red Folder USD.'
      ],
      invalidRules: [
        'Menahan posisi scalping dengan SL ketat melewati detik rilis CPI, NFP, atau FOMC.',
        'Memasang perangkap Buy Stop & Sell Stop bersamaan tepat sebelum rilis berita.'
      ],
      xauScenario: {
        context: 'Rabu malam EDT: rilis US CPI pukul 20:30 WITA.',
        steps: [
          '20:15–21:00 WITA: News Lock aktif — tidak membuka posisi saat volatilitas whipsaw terjadi.',
          '21:00+ WITA: Spread kembali normal dan arah dorongan pasca-CPI lebih jelas menuju DOL untuk dipantau di sesi NY.'
        ]
      },
      goldenRules: [
        'Tunggu lonjakan berita selesai mengambil Liquidity dan spread kembali normal sebelum mengambil risiko eksekusi.'
      ],
      practiceCta: {
        label: 'Buka Kalender Ekonomi & News Lock',
        description: 'Cek jadwal berita merah USD hari ini dan status News Lock otomatis pada modul Market Intel.',
        href: '../market-intel/index.html'
      },
      quiz: [
        {
          question: 'Berapa rentang waktu baku **Protokol News Lock** di Amy FX Pro untuk berita ekonomi High Impact (Red Folder) USD?',
          options: [
            '1 menit sebelum sampai 1 menit sesudah rilis',
            '**15 menit sebelum hingga 30 menit sesudah** rilis berita (khusus FOMC tunggu sampai konferensi pers usai)',
            'Hanya 5 detik tepat saat angka keluar',
            'Tidak perlu menunggu berita selama sudah memakai Stop Loss'
          ],
          answerIndex: 1,
          explanation: 'Rentang -15 menit hingga +30 menit melindungi modal dari pelebaran spread pra-rilis, slippage, dan whipsaw pasca-rilis.'
        },
        {
          question: 'Mengapa memasang Stop Loss `$4` **tidak menjamin** kerugian terbatas di `$4` jika menahan posisi melewati detik rilis NFP atau CPI?',
          options: [
            'Karena broker menghapus tombol SL saat NFP',
            'Karena **Slippage** & **Spread Spike**: harga dapat melompat langsung melewati level SL tanpa antrean likuiditas, sehingga rugi nyata jauh lebih besar dari rencana',
            'Karena NFP hanya memengaruhi mata uang Yen Jepang',
            'Karena SL otomatis berubah menjadi Take Profit'
          ],
          answerIndex: 1,
          explanation: 'Saat likuiditas menipis pada detik rilis berita besar, order SL tereksekusi di harga pasar tersedia berikutnya (slippage), sehingga kerugian dapat berlipat.'
        },
        {
          question: 'Jika kamu sudah memegang posisi BUY dari sesi London yang sedang profit `+$12`, lalu 20 menit lagi berita besar **US CPI (`20:30 WITA` EDT)** akan rilis, apa tindakan paling profesional?',
          options: [
            'Menambah lot 2 kali lipat supaya profit membesar saat CPI',
            'Mengamankan sebagian besar profit (`Partial 70%–100%`) atau menutup posisi penuh sebelum News Lock agar keuntungan tidak dipertaruhkan pada volatilitas acak',
            'Menghapus Stop Loss agar tidak tersentuh whipsaw',
            'Memasang Sell Stop berjarak $1 dari harga sekarang'
          ],
          answerIndex: 1,
          explanation: 'Trader profesional melindungi keuntungan yang sudah diperoleh daripada mempertaruhkannya pada volatilitas acak detik rilis CPI.'
        },
        {
          question: 'Kapan saat terbaik bagi trader ICT untuk memanfaatkan hari yang memiliki berita High Impact USD seperti CPI atau NFP?',
          options: [
            'Menebak arah 30 detik sebelum berita keluar',
            'Menunggu 15–30 menit setelah rilis sampai whipsaw mereda dan spread kembali normal, lalu mengikuti struktur arah bersih pasca-berita menuju DOL',
            'Menutup akun sepanjang bulan tersebut',
            'Masuk posisi tanpa Stop Loss tepat pada menit rilis'
          ],
          answerIndex: 1,
          explanation: 'Setelah volatilitas awal mereda dan Liquidity tersapu, pergerakan pasca-berita sering menghasilkan tren intraday yang lebih bersih.'
        }
      ]
    },

    // =========================================================================
    // BAB 14 (BAGIAN III) — MENENTUKAN DAILY BIAS & NEXT-DAY EXPANSION
    // =========================================================================
    {
      id: 'daily-bias-draw-on-liquidity',
      number: 14,
      levelId: 2,
      bookFormat: true,
      title: 'Menentukan Daily Bias & Membaca Arah Candle Harian (Next-Day Expansion)',
      subtitle: 'Metode objektif menyusun arah prioritas harian menggunakan pola penutupan candle Daily kemarin, filter korelasi DXY, dan satu garis invalidasi yang tegas.',
      readMinutes: 9,
      diagramId: 'daily-bias-dol',
      diagramAfterSection: 1,
      summary: 'Cara membaca 4 pola penutupan candle Daily kemarin (Next-Day Expansion ICT) untuk menetapkan Daily Bias Bullish, Bearish, atau Netral, menyaring dengan DXY, serta memasang satu garis Invalidasi Bias.',
      bookSections: [
        {
          number: '14.1',
          heading: 'Pengertian Daily Bias dan Batasannya',
          paragraphs: [
            'Setelah memahami cara menetapkan target tujuan harga (**DOL**) di Bab 13, langkah berikutnya adalah menyusun arah prioritas untuk satu hari perdagangan penuh yang disebut **Daily Bias**.',
            '**Daily Bias adalah arah prioritas transaksi harian (Bullish, Bearish, atau Netral)** berdasarkan struktur timeframe Daily dan target DOL terdekat — **bukan ramalan mutlak** bahwa candle hari ini pasti ditutup hijau atau merah.',
            'Fungsi utama Daily Bias ada dua:',
            '1. **Memfokuskan seleksi setup:** Jika Daily Bias Bullish, kamu memprioritaskan peluang BUY menuju target DOL atas dan menghindari posisi SELL spekulatif yang melawan arus.',
            '2. **Menyediakan titik koreksi cepat:** Apabila harga ternyata berbalik menembus level invalidasi yang sudah ditentukan sejak pagi, Daily Bias dibatalkan secara objektif tanpa mempertahankan ego prediksi.'
          ]
        },
        {
          number: '14.2',
          heading: 'Empat Pola Penutupan Candle Daily (Model Next-Day Expansion ICT)',
          paragraphs: [
            'Cara paling objektif untuk menyusun Daily Bias setiap pagi dalam waktu singkat adalah membuka chart **Daily (`D1`)** XAU/USD, lalu melihat **bagaimana candle kemarin ditutup terhadap titik High dan Low dari candle 2 hari lalu**:'
          ],
          table: {
            caption: '4 Pola Objektif Membaca Arah Candle Harian Berikutnya (Next-Day Expansion)',
            headers: ['Pola Penutupan Candle Daily Kemarin', 'Makna Pergerakan Harga', 'Daily Bias Hari Ini', 'Target DOL Awal Hari Ini'],
            rows: [
              ['1. Body Close di Atas High 2 Hari Lalu', 'Pembeli menerima harga lebih tinggi dan mempertahankan momentum ekspansi', '**BULLISH** (lanjut naik)', 'Menembus **PDH kemarin** menuju `BSL` / Swing High atas berikutnya'],
              ['2. Wick Sweep High 2 Hari Lalu, lalu Body Close Kembali di Bawahnya', 'Penolakan di atas; Liquidity atas baru di-sweep (`Origin atas`) dan harga kembali masuk range', '**BEARISH** (potensi balik turun)', 'Menuju **PDL kemarin** atau area Imbalance (`FVG`) di bawah'],
              ['3. Wick Sweep Low 2 Hari Lalu, lalu Body Close Kembali di Atasnya', 'Penolakan di bawah; Liquidity bawah baru di-sweep (`Origin bawah`) dan harga kembali masuk range', '**BULLISH** (potensi balik naik)', 'Menuju **PDH kemarin** atau area Imbalance (`FVG`) di atas'],
              ['4. Inside Bar (High & Low Kemarin di Dalam Rentang Candle Sebelumnya)', 'Pasar sedang berkonsolidasi menunggu katalis sesi atau berita ekonomi', '**NETRAL (WAIT)**', 'Jangan menebak; tunggu sesi London atau NY menembus salah satu sisi terlebih dahulu']
            ]
          },
          paragraphsAfter: [
            'Prinsip pada tabel tersebut konsisten dengan **Bab 09 (BOS vs Sweep)** dan **Bab 13 (Origin → DOL)**: pada skala Daily sekalipun, **Body Close** di luar level lama menunjukkan penerimaan kelanjutan arah, sedangkan **Wick-Only Sweep** diikuti penutupan kembali di dalam range menunjukkan pengambilan Liquidity dan potensi pembalikan arah.'
          ]
        },
        {
          number: '14.3',
          heading: 'Filter Pendukung: Korelasi Terbalik US Dollar Index (DXY)',
          paragraphs: [
            'Karena XAU/USD dipasangkan terhadap Dolar AS, trader emas dapat menggunakan grafik **DXY (US Dollar Index)** pada timeframe `Daily` dan `H1` sebagai filter konfirmasi tambahan setiap pagi.',
            'Secara historis, DXY dan XAU/USD cenderung bergerak **berlawanan arah (korelasi negatif)**:',
            '1. Ketika DXY mengalami penolakan di area atas dan mengarah turun menuju `SSL`-nya, kondisi tersebut mendukung **Daily Bias Bullish** pada XAU/USD.',
            '2. Ketika DXY menembus naik menuju `BSL` atasnya dengan kuat, berhati-hatilah sebelum memaksakan transaksi BUY pada XAU/USD.',
            'Catatan penting: gunakan DXY hanya sebagai **konfirmasi pendukung**, bukan pemicu utama. Pada kondisi ketegangan geopolitik tertentu, emas dan Dolar AS dapat sama-sama menguat sebagai aset lindung nilai (*safe haven*). Fakta struktur pada chart XAU/USD tetap menjadi acuan utama.'
          ]
        },
        {
          number: '14.4',
          heading: 'Mencegah Narrative Bias dengan Aturan 1 Garis Invalidasi',
          paragraphs: [
            'Kesalahan psikologis yang paling sering muncul saat memakai Daily Bias adalah **Narrative Bias** — yaitu sikap terpaku pada skenario pagi dan mengabaikan fakta bahwa struktur intraday sudah berbalik arah.',
            'Cara mencegahnya bersifat mekanis: **tuliskan Daily Bias setiap pagi dalam format satu kalimat baku yang wajib memuat 1 Garis Batal (`Invalidation Line`) pada timeframe H1**.'
          ],
          exampleBox: {
            title: 'Template Catatan Daily Bias Pagi dengan Garis Invalidasi',
            rows: [
              {
                label: 'Fakta Daily & H1 (08:30 WITA)',
                detail: 'Candle Daily kemarin melakukan sweep Low 2 hari lalu dengan wick panjang lalu ditutup Bullish. Struktur `H1` membentuk `HH–HL` dengan Strong Low di `2.640,00`. `PDH` masih Fresh di `2.672,00`, sementara DXY melemah menuju SSL.'
              },
              {
                label: 'Rumusan Bias Resmi Hari Ini',
                detail: '**"Bias hari ini BULLISH menuju DOL PDH `2.672,00`. Skenario ini BATAL jika candle H1 menutup body di bawah `2.640,00`."**'
              },
              {
                label: 'Tindakan Saat Garis Batal Ditembus',
                detail: 'Jika pada sesi London candle H1 ditutup di `2.637,00`, skenario Bullish langsung dihentikan. Trader berhenti mencari posisi BUY dan mengevaluasi ulang struktur pasar secara objektif.'
              }
            ]
          },
          callout: {
            tone: 'tip',
            title: 'Bias Netral adalah Keputusan yang Sah',
            body: 'Tidak setiap hari perdagangan memiliki arah pagi yang jelas. Saat candle Daily kemarin membentuk **Inside Bar** atau menjelang rilis berita besar seperti FOMC, menetapkan **Bias NETRAL (WAIT)** hingga sesi London atau New York membentuk arah adalah sikap yang disiplin.'
          }
        }
      ],
      keyTakeaways: [
        '**Daily Bias** adalah arah prioritas harian (bukan ramalan pasti) yang dibangun dari pola candle Daily kemarin dan peta **DOL**.',
        'Aturan **Next-Day Expansion**: Body Close melewati High/Low lama = condong **lanjut arah**; Wick-Only Sweep + close balik = condong **berbalik ke sisi lawan**; Inside Bar = **Netral / Wait**.',
        'Gunakan **DXY** sebagai filter konfirmasi korelasi terbalik, tetapi tetap utamakan fakta struktur pada chart XAU/USD.',
        'Sertakan selalu **1 Garis Batal (`Invalidation Line`)** pada setiap kalimat Daily Bias guna mencegah *Narrative Bias*.'
      ],
      bridgeNext: 'Setelah mampu menyusun kalimat Daily Bias lengkap beserta target DOL dan garis invalidasinya setiap pagi, pertanyaan berikutnya adalah bagaimana pergerakan satu hari penuh tersebut terbentuk dari sesi Asia hingga New York. Pola harian tersebut dibahas pada **Bab 15: Siklus Harian ICT: Power of Three (AMD), NY Midnight Open & Judas Swing**.',
      conceptBlocks: [
        {
          heading: 'Model Next-Day Expansion, DXY Filter & Garis Batal Daily Bias',
          paragraphs: [
            'Daily Bias dibaca objektif dari penutupan candle Daily kemarin: Body Close melewati High/Low lama mendukung kelanjutan, Wick Sweep mendukung reversal ke sisi lawan, dan Inside Bar menandakan Bias Netral.',
            'Lengkapi Daily Bias dengan filter korelasi terbalik DXY serta satu garis Invalidasi H1 yang tegas untuk mencegah Narrative Bias.'
          ]
        }
      ],
      mappingSteps: [
        'Buka chart Daily (D1) XAU/USD tiap pagi dan klasifikasikan candle kemarin: Continuation Close, Wick Sweep, atau Inside Bar.',
        'Cocokkan dengan peta DOL terdekat yang masih Fresh dan cek apakah DXY mendukung arah tersebut.',
        'Tuliskan 1 kalimat Daily Bias lengkap beserta 1 harga Invalidasi H1 (garis batal) sebelum sesi London dibuka.'
      ],
      decisionTree: [
        {
          condition: 'Candle Daily kemarin berupa Inside Bar (terjepit penuh di dalam High–Low candle sebelumnya).',
          action: 'Tetapkan Bias NETRAL (WAIT) — jangan memaksakan posisi sampai sesi London/NY menembus arah secara jelas.'
        },
        {
          condition: 'Daily Bias pagi hari Bullish dengan garis batal H1 di 2.640, lalu pukul 16:00 WITA H1 menutup body di 2.637.',
          action: 'Batalkan bias Bullish seketika. Berhenti mencari setup BUY dan evaluasi ulang struktur secara netral/Bearish.'
        }
      ],
      failedCase: {
        context: 'Trader menetapkan Bias Bullish di pagi hari tanpa menulis garis batal, lalu terus memaksa membuka posisi BUY sebanyak 3 kali meski H1 sudah mencetak Bearish BOS.',
        whyFailed: 'Terjebak Narrative Bias karena tidak memasang titik invalidasi objektif sehingga skenario pagi mengalahkan fakta struktur pasar live.'
      },
      validRules: [
        'Tentukan Daily Bias objektif dari penutupan candle Daily + peta DOL terdekat.',
        'Selalu tulis 1 level Invalidasi H1 pada setiap rencana bias harian.'
      ],
      invalidRules: [
        'Memaksakan opini arah pada hari Inside Bar yang tidak jelas.',
        'Terus melawan fakta pasar setelah garis invalidasi H1 ditembus oleh body close.'
      ],
      xauScenario: {
        context: 'Pagi 08:30 WITA: candle Daily kemarin sweep Low 2 hari lalu lalu close hijau kuat; PDH Fresh di 2.672 dan Strong Low H1 di 2.640.',
        steps: [
          'Klasifikasi Daily = Sweep bawah + close kuat → Bias BULLISH.',
          'Rumusan 1 kalimat: "Bias Bullish menuju DOL PDH 2.672; batal jika H1 body close di bawah 2.640."'
        ]
      },
      goldenRules: [
        'Setiap Daily Bias wajib memiliki satu harga invalidasi yang jelas agar keputusan tetap objektif ketika pasar berbalik arah.'
      ],
      practiceCta: {
        label: 'Cek Bias H1 & Peta Harian di Cockpit Mapping',
        description: 'Cocokkan bacaan Daily Bias pagimu dengan panel arah H1/M15 dan level PDH/PDL live di Cockpit Mapping.',
        href: '../mapping/index.html'
      },
      quiz: [
        {
          question: 'Pada chart Daily (`D1`) XAU/USD, candle kemarin sempat menembus puncak 2 hari lalu hanya dengan **wick panjang** lalu ditutup (**body close**) kembali di bawahnya. Menurut model *Next-Day Expansion*, ke arah mana Daily Bias hari ini lebih condong?',
          options: [
            'Bullish sangat kuat karena sempat menyentuh harga tinggi',
            '**Bearish** (potensi berbalik turun menuju PDL / area bawah), karena Liquidity atas baru saja di-sweep dan harga menunjukkan penolakan',
            'Pasti sideways selama 1 bulan penuh',
            'Tidak bisa dibaca di chart Daily'
          ],
          answerIndex: 1,
          explanation: 'Wick Sweep pada puncak harian sebelumnya menandakan pengambilan Liquidity atas (Origin atas) dan memberi kecenderungan Bearish menuju Liquidity bawah (SSL).'
        },
        {
          question: 'Jika candle Daily kemarin membentuk **Inside Bar** (titik High dan Low-nya terjepit penuh di dalam rentang candle 2 hari lalu), sikap Daily Bias paling bijak adalah:',
          options: [
            'Memaksa mencari posisi BUY dengan lot 2 kali lebih besar',
            'Menetapkan **Bias NETRAL (WAIT)** dan membiarkan sesi London/NY membuka arah terlebih dahulu',
            'Langsung membuka posisi SELL di pembukaan sesi Asia',
            'Menghapus seluruh level PDH dan PDL'
          ],
          answerIndex: 1,
          explanation: 'Inside Bar mencerminkan konsolidasi harian; menetapkan Bias Netral melindungimu dari whipsaw di tengah range.'
        },
        {
          question: 'Bagaimana hubungan korelasi umum antara indeks Dolar AS (**DXY**) dengan **XAU/USD**, serta apa catatan pentingnya?',
          options: [
            'Selalu bergerak searah 100% setiap detik tanpa pengecualian',
            'Umumnya **berkorelasi terbalik** (pelemahan DXY mendukung kenaikan XAU/USD), namun tetap dipakai sebagai konfirmasi pendukung — struktur chart XAU/USD tetap nomor satu',
            'Tidak pernah berhubungan sama sekali',
            'Hanya berlaku pada hari Minggu'
          ],
          answerIndex: 1,
          explanation: 'Karena emas dihargai dalam USD, pelemahan DXY umumnya mendukung Bullish Gold; namun pada kondisi krisis geopolitik keduanya bisa bergerak searah sehingga struktur XAU tetap diutamakan.'
        },
        {
          question: 'Apa fungsi utama menuliskan **1 Garis Batal (`Invalidation Line`)** pada setiap kalimat Daily Bias pagi?',
          options: [
            'Untuk hiasan catatan jurnal agar terlihat panjang',
            'Mencegah *Narrative Bias*: menjadi batas objektif untuk berhenti memaksakan skenario pagi jika H1 ternyata close melewati level tersebut',
            'Untuk menggantikan Stop Loss di MT5',
            'Agar bisa membuka posisi tanpa batas setiap hari'
          ],
          answerIndex: 1,
          explanation: 'Garis invalidasi objektif memutus keterikatan emosional pada skenario pagi begitu fakta struktur H1 membuktikan arah berbalik.'
        }
      ]
    },
    {
      id: 'sop-playbook-harian-xauusd',
      number: 25,
      levelId: 5,
      title: 'SOP Playbook Harian XAU/USD (Dari Bangun Sampai Tutup)',
      readMinutes: 5,
      diagramId: 'daily-playbook-flow',
      summary: 'Scalper profesional itu membosankan — mereka mengulang SOP 4 langkah yang sama persis setiap hari sehingga tidak ada ruang bagi kepanikan atau keputusan impulsif.',
      conceptBlocks: [
        {
          heading: 'Ritual 4 Fase Harian Terintegrasi di Amy FX Pro',
          paragraphs: [
            'Berikut alur eksekusi harian yang menghubungkan seluruh modul di aplikasimu:',
            '• **Fase 1 — Peta Pagi (08:00–08:30 WITA, 10 menit):** Buka modul *Market Intel* cek berita merah USD. Buka modul *Mapping* tandai Daily Bias, Dealing Range H1, PDH/PDL, dan PWH/PWL. Tutup chart — jalani aktivitas normalmu.\n• **Fase 2 — London Killzone (15:00/16:00–18:30 WITA):** Tandai kotak Asia High/Low. Tunggu apakah muncul Judas Swing sweep satu sisi Asia + konfirmasi Model Utama di M5. Jika tidak rapi, SKIP tanpa penyesalan.\n• **Fase 3 — New York AM & Silver Bullet (20:00–23:30 WITA):** Patuhi News Lock (-15m/+30m). Tandai London High/Low, lalu buru 1 setup A+ bersih searah dorongan pasca-berita.\n• **Fase 4 — Tutup Hari & Jurnal (5 menit):** Maksimal 1–2 trade per hari (atau berhenti segera jika target harian tercapai / terkena 2x SL). Catat hasilnya di modul *Jurnal Trading* lengkap dengan sesi WITA, setup, dan catatan emosi.'
          ]
        }
      ],
      validRules: [
        'Batas maksimal 2 trade per hari (atau berhenti otomatis setelah 2x Loss beruntun).',
        'Setiap trade wajib lolos 4 gerbang: Waktu Killzone → Tidak News Lock → Arah/POI H1 → Konfirmasi Model M5.',
        'Wajib catat setiap eksekusi ke Jurnal di hari yang sama saat ingatan emosi masih segar.'
      ],
      invalidRules: [
        'Terus duduk memelototi chart setelah target harian sudah tercapai (rawan mengembalikan profit ke pasar).',
        'Masuk trade ke-4 dan ke-5 di malam hari untuk "balas dendam" kekalahan sesi London.',
        'Tidak mencatat trade yang rugi ke dalam Jurnal.'
      ],
      xauScenario: {
        context: 'Checklist 30 Detik Sebelum Klik Entry (Wajib 5x YA).',
        steps: [
          '1. Apakah sekarang di dalam Killzone WITA dan bebas News Lock? (YA)',
          '2. Apakah arah entry selaras dengan Bias H1 / tidak menabrak POI H1 lawan? (YA)',
          '3. Apakah sudah ada Sweep Liquidity nyata + konfirmasi Model Utama (MSS/CISD/FVG/IFVG)? (YA)',
          '4. Apakah Stop Loss berada di luar struktur + napas spread dan R:R ≥ 1:2? (YA)',
          '5. Apakah ukuran lot pas dengan batas risiko 0,5%–1% modal? (YA → Eksekusi!)'
        ]
      },
      goldenRules: [
        'Profesional dibayar karena mematuhi SOP yang membosankan, bukan karena sensasi adrenalin.',
        'Batas maksimal 2x SL per hari melindungi akunmu dari hari-hari pasar yang tidak ramah.'
      ],
      quiz: [
        {
          question: 'Apa tindakan paling disiplin jika kamu sudah mengalami 2 kali Stop Loss di hari yang sama?',
          options: [
            'Gunakan lot 2x lipat di trade ke-3 agar langsung impas',
            'Berhenti trading hari ini, catat di Jurnal, dan kembali besok dengan pikiran jernih',
            'Pindah ke strategi baru di YouTube malam itu juga',
            'Tunggu jam 03:00 subuh untuk balas dendam'
          ],
          answerIndex: 1,
          explanation: 'Batas harian (max 2 SL) memutus siklus revenge trading dan menjaga drawdown tetap dangkal.'
        },
        {
          question: 'Jika pada Checklist 30 Detik sebelum entry ada 4 jawaban YA dan 1 jawaban TIDAK (karena 10 menit lagi rilis NFP), apa keputusannya?',
          options: [
            'Tetap entry karena sudah 80% terpenuhi',
            'TIDAK ENTRY — semua syarat inti harus terpenuhi tanpa kompromi',
            'Entry setengah lot tanpa Stop Loss',
            'Geser jam HP agar tidak terlihat dekat NFP'
          ],
          answerIndex: 1,
          explanation: 'Satu pelanggaran besar (seperti News Lock) cukup untuk merusak seluruh keunggulan statistik setup.'
        },
        {
          question: 'Kapan waktu terbaik mencatat detail eksekusi dan kondisi emosi ke dalam Jurnal Trading?',
          options: [
            'Akhir tahun sebelum liburan',
            'Segera setelah trade selesai di hari yang sama saat alasan dan emosi masih segar',
            'Hanya mencatat trade yang Win saja agar grafik terlihat cantik',
            'Tidak perlu jurnal jika sudah hafal di kepala'
          ],
          answerIndex: 1,
          explanation: 'Mencatat segera memastikan data kesalahan dan emosi jujur serta akurat untuk Analitik Jurnal Pro.'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // LEVEL 6 — RISIKO, PSIKOLOGI & KONSISTENSI PROFIT
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'sizing-lot-xauusd-risiko',
      number: 26,
      levelId: 6,
      title: 'Sizing Lot XAU/USD & Aturan Risiko 0,5%–1%',
      readMinutes: 5,
      diagramId: 'lot-sizing-math',
      summary: 'Strategi sehebat apa pun akan bangkrut jika ukuran lot-nya ngawur. Pelajari rumus matematis penentuan lot XAU/USD agar setiap SL selalu bernilai sama persis.',
      conceptBlocks: [
        {
          heading: 'Rumus Wajib Lot XAU/USD (100% Objektif)',
          paragraphs: [
            'Jangan pernah memakai lot tetap (misal selalu 0,10 lot) untuk semua trade! Jika Trade A punya jarak SL $3 dan Trade B punya jarak SL $9, memakai lot sama berarti Trade B punya risiko 3 kali lipat lebih besar.',
            'Gunakan rumus standar XAU/USD (kontrak 100 oz per 1,00 lot, di mana gerak $1 = $100 untuk 1 lot, atau $1 untuk 0,01 lot):\n**Lot = Risiko Uang ($) ÷ (Jarak SL dalam Dolar × 100)**.\nContoh: Saldo $1.000, Risiko 1% = $10. Jarak SL struktural = $5 (50 pips). Maka Lot = $10 ÷ ($5 × 100) = **0,02 lot**. (Kamu juga bisa langsung menghitungnya di Kalkulator Lot modul Jurnal atau bertanya langsung ke Amy Live!).'
          ]
        },
        {
          heading: 'Matematika Drawdown: Kenapa Maksimal 0,5%–1%?',
          paragraphs: [
            'Jika kamu merisikokan 10% per trade dan mengalami 5 loss beruntun (hal yang wajar secara statistik), akunmu langsung anjlok -50% dan butuh profit +100% cuma untuk kembali modal! Dengan risiko **0,5%–1% per trade**, 5 loss beruntun hanya menyentuh drawdown -2,5% hingga -5% — emosi tetap tenang dan pemulihan sangat ringan.'
          ]
        }
      ],
      validRules: [
        'Risiko tetap 0,5% (akun prop firm / pemula) hingga maksimal 1% (akun pribadi) per trade.',
        'Hitung ulang lot setiap trade berdasarkan jarak SL struktural aktual — bukan lot tebak-tebakan.',
        'Jika modal kecil (misal <$200) sehingga 0,01 lot melebihi 2% risiko, gunakan akun Cent (XAUUSDc) agar persentase risiko tetap terjaga.'
      ],
      invalidRules: [
        'Memakai lot tetap (misal selalu 0,05 lot) tanpa peduli lebar jarak SL.',
        'Memperkecil jarak SL secara paksa hanya supaya bisa memakai lot besar.',
        'Merisikokan 5%–20% modal dalam satu kali klik ("all-in").'
      ],
      xauScenario: {
        context: 'Perbandingan 2 setup pada akun $500 dengan batas risiko disiplin 1% ($5).',
        steps: [
          'Setup 1 (M5 Sniper): Jarak SL = $2,50 → Lot = $5 ÷ ($2,50 × 100) = 0,02 lot. Jika SL kena = -$5; jika TP 1:2,5 = +$12,50.',
          'Setup 2 (M15 Normal): Jarak SL = $5,00 → Lot = $5 ÷ ($5,00 × 100) = 0,01 lot. Jika SL kena = tetap -$5!',
          'Hasil: Keduanya memiliki tekanan psikologis identik karena risiko nominal selalu terkunci di $5.'
        ]
      },
      goldenRules: [
        'Lebar SL ditentukan oleh struktur chart; ukuran Lot ditentukan oleh rumus risiko.',
        'Akun yang aman dari drawdown besar adalah akun yang pasti punya kesempatan untuk bertumbuh.'
      ],
      quiz: [
        {
          question: 'Saldo akun $1.000 dengan risiko 1% ($10). Jarak SL struktural XAU/USD adalah $4,00 (40 pips). Berapa ukuran lot standar yang benar?',
          options: [
            '0,25 lot',
            '0,025 lot (dibulatkan aman ke 0,02 lot)',
            '0,10 lot',
            '1,00 lot'
          ],
          answerIndex: 1,
          explanation: 'Lot = $10 ÷ ($4 × 100) = $10 ÷ 400 = 0,025 lot. Selalu bulatkan ke bawah (0,02 lot) agar risiko tidak melampaui 1%.'
        },
        {
          question: 'Jika sebuah akun kehilangan 50% modalnya akibat over-leverage, berapa persen keuntungan yang dibutuhkan hanya untuk kembali ke modal awal (BEP)?',
          options: [
            '50%',
            '75%',
            '100%',
            '25%'
          ],
          answerIndex: 2,
          explanation: 'Dari $500 kembali ke $1.000 membutuhkan kenaikan +$500, yaitu +100% dari saldo tersisa. Inilah mengapa mencegah drawdown dalam adalah kunci.'
        },
        {
          question: 'Bagaimana solusi paling bijak jika modal tradingmu masih $50–$100 tetapi ingin belajar XAU/USD dengan risiko ≤1%?',
          options: [
            'Tetap pakai 0,10 lot di akun standar',
            'Gunakan akun Demo atau akun Cent (XAUUSDc) agar ukuran lot tetap proporsional dengan batas risiko 1%',
            'Pasang SL 2 pips saja',
            'Hilangkan Stop Loss'
          ],
          answerIndex: 1,
          explanation: 'Akun Cent mengecilkan nilai per lot 100x sehingga modal kecil tetap bisa menerapkan manajemen risiko profesional.'
        }
      ]
    },
    // =========================================================================
    // BAGIAN V — BAB 28: STOP LOSS STRUKTURAL, NAPAS SPREAD & TARGET LIKUIDITAS
    // =========================================================================
    {
      id: 'sl-struktural-napas-spread-tp',
      number: 28,
      levelId: 4,
      title: 'Stop Loss Struktural, Buffer Spread & Target Liquidity Bertingkat (TP1/TP2)',
      readMinutes: 10,
      diagramId: 'sl-tp-engineering',
      bookFormat: true,
      diagramAfterSection: 1,
      summary: 'Prinsip penempatan Stop Loss pada titik invalidasi struktural ditambah buffer spread dan wick Gold (termasuk mekanisme Bid/Ask pada posisi SELL), serta pemetaan objektif TP1 dan TP2 berbasis Liquidity Pool.',
      bookSections: [
        {
          number: '28.1',
          heading: 'Mengapa Stop Loss Jarak Tetap ($2 / 20 Pips) Tidak Cocok untuk XAU/USD?',
          shortTitle: 'SL Struktural vs Jarak Tetap',
          paragraphs: [
            'Pada Bab 03 dibahas rumus ukuran posisi (`Lot = Risiko $ ÷ [Jarak SL $ × 100]`) agar setiap kerugian selalu terkunci pada batas `0,5%–1%` modal. Pertanyaan selanjutnya adalah bagaimana menentukan jarak Stop Loss yang sah pada grafik.',
            'Kesalahan yang paling sering terjadi adalah menentukan jarak SL secara arbitrer (misalnya selalu memasang SL tetap `$2,00` atau 20 pips di setiap transaksi agar dapat memakai lot lebih besar). Pada XAU/USD yang memiliki rentang wick lebar, SL tetap yang diletakkan di dalam area fluktuasi normal sangat mudah tersentuh sebelum harga bergerak menuju target.',
            'Prinsip baku manajemen risiko ICT adalah: **struktur grafik yang menentukan jarak Stop Loss, sedangkan rumus Lot yang menyesuaikan ukuran posisi agar nominal risiko tetap `0,5%–1%`**. Stop Loss wajib ditempatkan pada **Titik Invalidasi Struktural** — titik harga di mana apabila ditembus, skenario analisis secara objektif telah batal.'
          ]
        },
        {
          number: '28.2',
          heading: 'Penempatan SL Struktural + Buffer Spread dan Mekanisme Bid/Ask pada SELL',
          shortTitle: 'Buffer Spread & Bid/Ask',
          paragraphs: [
            'Meletakkan Stop Loss menempel tepat pada ujung wick sweep (`$0,00` buffer) tetap berisiko tersentuh oleh fluktuasi spread normal XAU/USD (`$0,20–$0,45`, dan dapat melebar hingga `$0,80+` saat pergantian sesi). Oleh karena itu, selalu tambahkan **buffer spread dan wick** di luar titik invalidasi struktur (`$0,60–$1,20` di luar ujung sweep/swing ekstrem, atau `$1,40–$3,00` bila jangkar hanya pada tepi kotak POI seperti yang diterapkan pada **Mapping Cockpit Amy FX Pro**).',
            'Khusus pada posisi **SELL**, perhatikan kembali mekanisme **Bid vs Ask (Bab 02)**: grafik standar MT5 hanya menggambar garis **Bid**, sementara SL dan TP posisi SELL dieksekusi pada harga **Ask (`Bid + Spread`)**.'
          ],
          table: {
            caption: 'Standar Penempatan SL dan TP pada Posisi BUY vs SELL di XAU/USD',
            headers: ['Arah Posisi', 'Jangkar SL Struktural', 'Penyesuaian Buffer Spread (Wajib)', 'Penyesuaian Garis TP'],
            rows: [
              ['**BUY**', 'Di bawah ujung wick terendah Sweep / Swing Low / OB', 'Kurangi **`$0,60 – $1,00`** di bawah ujung wick (SL Buy tereksekusi di garis Bid)', 'Tepat di bawah Liquidity Pool BSL / PDH (kurangi `$0,30–$0,50` agar tidak kurang beberapa tick)'],
              ['**SELL**', 'Di atas ujung wick tertinggi Sweep / Swing High / OB', 'Tambahkan **`$0,80 – $1,20`** di atas ujung wick untuk menampung garis **Ask**', 'Naikkan **`+$0,40 – $0,60`** di atas dasar SSL / PDL agar garis **Ask** benar-benar menyentuh TP']
            ]
          }
        },
        {
          number: '28.3',
          heading: 'Pemetaan Target Liquidity Bertingkat: TP1 (Internal) vs TP2 (DOL Eksternal)',
          shortTitle: 'Arsitektur TP1 & TP2',
          paragraphs: [
            'Sebagaimana Stop Loss, **Take Profit** ditentukan berdasarkan struktur pasar — bukan berdasarkan nominal target pribadi. Harga bergerak dari satu Liquidity Pool menuju Liquidity Pool berikutnya.',
            'Gunakan arsitektur **Target 2 Tingkat** berikut (selaras dengan Kartu Rencana Eksekusi pada Mapping Cockpit):',
            '1. **TP1 (Target Utama / Pengamanan Profit · minimal `1,5R – 2R`):** Ditempatkan tepat di depan **Liquidity Pool terdekat atau internal** (misalnya Swing High/Low M15 pertama, Asia High/Low, atau tepi HTF FVG). Pada level ini, mayoritas volume posisi diamankan melalui *Partial Close* (Bab 29).',
            '2. **TP2 (Target Lanjutan / DOL Utama · `3R – 5R+`):** Ditempatkan tepat di depan **Draw on Liquidity eksternal H1** (`PDH/PDL`, `PWH/PWL`, atau `EQH/EQL` utama), selama jaraknya masih berada dalam batas wajar rentang gerak harian Gold (**ADR 5 Hari**, umumnya `$25–$55`).'
          ]
        },
        {
          number: '28.4',
          heading: 'Studi Kasus Lengkap XAU/USD: Perhitungan SL, Buffer Spread, TP1, dan TP2',
          shortTitle: 'Studi Kasus SL & TP Gold',
          paragraphs: [
            'Berikut contoh penyusunan SL struktural, ukuran lot 1%, serta target TP1 dan TP2 pada skenario BUY XAU/USD M5:'
          ],
          exampleBox: {
            title: 'Perhitungan SL & TP1/TP2 — Bullish Setup XAU/USD M5 (Sesi London)',
            rows: [
              {
                label: 'Titik Entry & Jangkar Invalidasi',
                detail: 'Pasca-sweep Asia Low pada ujung wick **`2.642,00`** diikuti Bullish MSS dan Bullish FVG di zona Discount. **Buy Limit** tereksekusi di **`2.645,50`**.'
              },
              {
                label: 'Penempatan SL Struktural + Buffer Spread',
                detail: 'Ujung wick sweep `2.642,00` dikurangi buffer wick & spread **`$1,00`** → **SL di `2.641,00`**. Total jarak risiko = `2.645,50 - 2.641,00` = **`$4,50` (`1R`)**. Untuk modal `$1.000` dengan risiko `1% = $10`, ukuran lot = `$10 ÷ $450` = **`0,02 lot`**.'
              },
              {
                label: 'Pemetaan TP1 & TP2 Berbasis Liquidity',
                detail: '1. **TP1 (Di bawah Asia High `2.655,00`):** Ditempatkan di **`2.654,50`** (`+$9,00` = **`2,00R`**) untuk pengamanan profit.\n2. **TP2 (Di bawah DOL PDH `2.664,00`):** Ditempatkan di **`2.663,50`** (`+$18,00` = **`4,00R`**) untuk sisa posisi.'
              }
            ]
          },
          callout: {
            tone: 'warn',
            kicker: 'Aturan Mutlak Manajemen Risiko',
            title: 'Jangan Pernah Menggeser Stop Loss Menjauh Saat Harga Mendekat',
            body: 'Stop Loss yang tersentuh pada titik invalidasi berfungsi membatasi kerugian tepat pada `-1R` sesuai rencana. Menggeser SL menjauh untuk menghindari kerugian kecil merusak seluruh perhitungan manajemen risiko dan berpotensi mengubah rugi `-1R` menjadi drawdown besar `-5R` hingga Margin Call.'
          }
        }
      ],
      keyTakeaways: [
        '**Struktur grafik menentukan jarak SL (di luar titik invalidasi), sedangkan rumus Lot menyesuaikan ukuran posisi** agar risiko tetap terkunci di `0,5%–1%` modal.',
        'Tambahkan **Buffer Spread & Wick** (`$0,60–$1,20` di luar ujung sweep/swing ekstrem); khusus posisi **SELL**, perhitungkan garis **Ask** baik pada SL maupun TP.',
        'Petakan target secara objektif: **TP1** di depan Liquidity Pool terdekat (`≥ 1,5R–2R`) dan **TP2** di depan DOL H1 (`PDH/PDL`) yang masih sesuai rentang ADR harian.',
        'Dilarang menggeser Stop Loss menjauh ketika harga mendekati titik invalidasi.'
      ],
      bridgeNext: 'Setelah titik Entry, Stop Loss struktural, dan target TP1/TP2 tersusun rapi, tahap selanjutnya adalah mengelola posisi saat sudah aktif berjalan — kapan mengambil Partial Close, kapan memindahkan SL ke Breakeven, dan kapan menghentikan transaksi harian — yang dibahas pada **Bab 29: Manajemen Posisi Aktif: Partial Close, Breakeven (BEP) & Batas Berhenti Harian**.',
      practiceCta: {
        label: 'Lihat Rencana SL/TP1/TP2 Live di Mapping',
        description: 'Amati perhitungan otomatis SL struktural + buffer spread Gold, TP1, dan TP2 DOL pada Kartu Rencana Eksekusi Mapping Cockpit.',
        href: '../mapping/index.html'
      },
      conceptBlocks: [
        {
          heading: 'Stop Loss Struktural, Buffer Spread & TP1/TP2 Berbasis Liquidity',
          paragraphs: [
            'SL ditempatkan di luar titik invalidasi struktural ditambah buffer spread/wick (dengan penyesuaian garis Ask untuk posisi SELL), sedangkan TP1 dan TP2 diarahkan ke Liquidity Pool nyata (internal ≥1,5R–2R dan DOL H1).'
          ]
        }
      ],
      mappingSteps: [
        'Tentukan titik invalidasi struktural (ujung wick Sweep / Swing ekstrem) dan tambahkan buffer spread ($0,60–$1,20).',
        'Hitung ukuran lot dari jarak SL aktual tersebut agar risiko tetap 0,5%–1% modal.',
        'Pasang TP1 tepat di depan Liquidity Pool terdekat (minimal 1,5R–2R) dan TP2 di depan DOL H1 (PDH/PDL), dengan penyesuaian garis Ask untuk posisi SELL.'
      ],
      decisionTree: [
        {
          condition: 'Jarak SL struktural pada setup M15 adalah $6,00, dua kali lebih lebar dari rata-rata ($3,00).',
          action: 'Turunkan ukuran lot menjadi setengahnya sesuai rumus Lot agar nominal risiko tetap 1% — jangan mempersempit SL ke dalam area fluktuasi normal.'
        },
        {
          condition: 'Harga hampir menyentuh garis SL struktural dan muncul keinginan menggeser SL $5 lebih jauh.',
          action: 'Jangan menggeser SL — biarkan SL bekerja sesuai batas invalidasi awal dan terima kerugian -1R.'
        }
      ],
      validRules: [
        'SL ditempatkan di luar ujung wick sweep/swing invalidasi ditambah buffer spread.',
        'TP1 diarahkan ke Liquidity Pool terdekat (minimal 1,5R–2R) dan TP2 ke DOL H1 (PDH/PDL).'
      ],
      invalidRules: [
        'Memasang SL menempel tepat di ujung wick tanpa buffer spread.',
        'Menggeser SL menjauh ketika posisi mendekati titik invalidasi.'
      ],
      xauScenario: {
        context: 'Setup Buy XAU/USD M5 setelah sweep Asia Low 2.642,00; Entry FVG di 2.645,50.',
        steps: [
          'SL Struktural + Buffer Spread: 2.642,00 - $1,00 = 2.641,00 (risiko $4,50 = 1R).',
          'TP1 di 2.654,50 (+$9,00 / 2,00R) dan TP2 di 2.663,50 (+$18,00 / 4,00R).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: SL Jarak Tetap $2 Tanpa Dasar Struktur',
        context: 'Trader memaksakan SL $2,00 di tengah kotak FVG agar dapat menggunakan ukuran lot lebih besar.',
        whyFailed: 'Wick retracement normal XAU/USD menyentuh SL sebelum harga bergerak naik +$15 menuju target awal.'
      },
      goldenRules: [
        'SL yang tersentuh di titik invalidasi melindungi akun dari kerugian yang jauh lebih besar.',
        'Struktur grafik menentukan jarak SL; rumus risiko 1% yang menentukan ukuran Lot.'
      ],
      quiz: [
        {
          question: 'Pada setup **BUY** pasca-sweep Asia Low dengan ujung wick terendah di `2.642,00`, di mana penempatan Stop Loss paling tepat?',
          options: [
            'Selalu berjarak tepat `$1,50` dari titik entry tanpa melihat wick',
            '**Di bawah ujung wick terendah `2.642,00` ditambah buffer spread** (misalnya `2.641,00`)',
            'Tepat di garis 50% FVG agar lot bisa 3× lebih besar',
            'Di bawah harga terendah 6 bulan lalu'
          ],
          answerIndex: 1,
          explanation: 'Ujung wick sweep adalah titik invalidasi struktural; penambahan buffer spread/wick melindungi posisi dari fluktuasi spread normal.'
        },
        {
          question: 'Mengapa pada posisi **SELL** di XAU/USD kamu wajib menaikkan garis TP sedikit di atas dasar Liquidity Pool (`+$0,40 – $0,60`) dan menambah buffer lebih pada SL?',
          options: [
            'Karena broker hanya membuka pasar untuk posisi BUY',
            'Karena chart standar hanya menampilkan garis **Bid**, padahal SL dan TP posisi **SELL** tereksekusi saat harga **Ask (`Bid + Spread`)** menyentuhnya',
            'Supaya grafik terlihat lebih simetris',
            'Karena spread tidak berlaku pada posisi SELL'
          ],
          answerIndex: 1,
          explanation: 'Posisi Sell ditutup dengan membeli kembali pada harga Ask; tanpa penyesuaian spread Ask, TP Sell dapat gagal tereksekusi meski garis Bid sudah menyentuhnya.'
        },
        {
          question: 'Bagaimana prinsip objektif menentukan jarak **TP1** dan **TP2** di XAU/USD?',
          options: [
            'Sesuai nominal uang yang sedang dibutuhkan hari ini',
            '**TP1** di depan Liquidity Pool terdekat (`≥ 1,5R–2R`) untuk mengamankan profit, dan **TP2** di depan **DOL H1** (`PDH/PDL`) yang masih realistis dalam rentang ADR',
            'Selalu pasang TP 500 pips di semua kondisi pasar',
            'Tutup acak begitu melihat angka hijau +$1'
          ],
          answerIndex: 1,
          explanation: 'Menempatkan TP1 dan TP2 pada Liquidity Pool nyata menyelaraskan titik keluar dengan area tujuan arus order institusi.'
        },
        {
          question: 'Harga bergerak mendekati garis Stop Loss strukturalmu. Tindakan mana yang **dilarang** dilakukan?',
          options: [
            'Membiarkan SL bekerja sesuai rencana awal dan menerima risiko `-1R`',
            '**Menggeser Stop Loss menjauh** sambil berharap harga berbalik',
            'Mencatat hasil transaksi di Jurnal setelah posisi tertutup',
            'Beristirahat sejenak untuk menjaga objektivitas analisis'
          ],
          answerIndex: 1,
          explanation: 'Menggeser SL menjauh merusak konsistensi manajemen risiko dan mengubah rugi kecil terukur menjadi drawdown besar.'
        }
      ]
    },
    // =========================================================================
    // BAGIAN V — BAB 29: MANAJEMEN POSISI AKTIF (PARTIAL, BEP & BATAS HARIAN)
    // =========================================================================
    {
      id: 'manajemen-trade-partial-bep-notrade',
      number: 29,
      levelId: 4,
      title: 'Manajemen Posisi Aktif: Partial Close, Breakeven (BEP) & Batas Berhenti Harian',
      readMinutes: 10,
      diagramId: 'trade-management-scale',
      bookFormat: true,
      diagramAfterSection: 1,
      summary: 'Aturan mekanis mengelola posisi yang sedang berjalan: prosedur Partial Close 60%–75% di TP1, syarat sah memindahkan SL ke BEP+, Daily Loss Guard maksimal 2× SL/hari, serta 3 kondisi No-Trade Days.',
      bookSections: [
        {
          number: '29.1',
          heading: 'Dua Kesalahan Umum Saat Mengelola Posisi Aktif di XAU/USD',
          shortTitle: '2 Kesalahan Trade Aktif',
          paragraphs: [
            'Kualitas analisis entry tidak akan menghasilkan pertumbuhan akun apabila manajemen saat posisi sedang terbuka (*running*) dilakukan secara emosional. Dua kesalahan yang paling sering mengurangi profitabilitas adalah:',
            '1. **Membiarkan Profit `+2R` Berbalik Menjadi `-1R`:** Harga telah mencapai Liquidity Pool pertama (`+2R`), tetapi trader tidak mengambil sebagian profit sama sekali demi menunggu `+5R`. Ketika harga berbalik arah, posisi yang semula profit penuh berakhir menyentuh Stop Loss awal.',
            '2. **Memindahkan SL ke Breakeven Terlalu Cepat (`+0,5R`):** Baru memperoleh floating profit tipis, trader langsung menggeser SL ke harga entry (*Break Even*) karena takut rugi. Retracement normal XAU/USD segera menyentuh BEP (`$0`), lalu harga melanjutkan pergerakan ke TP2 tanpa posisi trader.'
          ]
        },
        {
          number: '29.2',
          heading: 'Protokol Partial Close (60%–75%) & Syarat Sah Memindahkan SL ke BEP+',
          shortTitle: 'Protokol Partial & BEP',
          paragraphs: [
            'Untuk mencegah kedua kesalahan di atas, gunakan prosedur manajemen posisi berbasis struktur berikut:',
            '1. **Jangan Mengubah SL Sebelum Ada Konfirmasi Struktur Baru:** Selama posisi baru bergerak `+0,3R` hingga `+1,0R` di dalam ayunan yang sama, biarkan SL tetap pada posisi awal. Hindari pula **Trailing Stop otomatis ketat (`10–15 pips`)**, karena fluktuasi wick alami XAU/USD dengan mudah menyentuhnya sebelum tren berlanjut.',
            '2. **Ambil Partial Close `60%–75%` di TP1 (`≥ 1,5R – 2R`):** Saat harga mencapai **TP1** (Liquidity Pool terdekat) atau menembus struktur internal baru searah posisi, tutup `60%–75%` volume lot untuk merealisasikan sebagian besar profit ke saldo akun.',
            '3. **Pindahkan SL Sisa Posisi (`25%–40%`) ke `BEP+`:** Setelah Partial Close selesai, pindahkan SL sisa volume ke **harga entry ditambah buffer spread kecil (`BEP+`)**. Dengan demikian posisi menjadi bebas risiko (*risk-free*) sambil tetap memberi peluang mencapai TP2 DOL.'
          ]
        },
        {
          number: '29.3',
          heading: 'Daily Loss Guard & 3 Kondisi Wajib No-Trade Days',
          shortTitle: 'Daily Guard & No-Trade Days',
          paragraphs: [
            'Manajemen risiko aktif mencakup disiplin berhenti bertransaksi ketika batas harian tercapai atau kondisi pasar tidak mendukung. Modul **Jurnal Trading & Profil Amy FX Pro** menyediakan fitur **Daily Loss Guard** yang selaras dengan empat aturan perlindungan modal berikut:'
          ],
          table: {
            caption: 'Batas Pengaman Harian (Daily Loss Guard) & 3 Kondisi No-Trade Days',
            headers: ['Pengaman / Kondisi Pasar', 'Ciri Objektif', 'Tindakan Wajib', 'Tujuan Perlindungan Modal'],
            rows: [
              ['**Daily Loss Guard**', 'Tercapai **Maks 2× SL** atau rugi harian mencapai **`-2% s.d. -3%`**', '**Berhenti total** untuk hari tersebut, tutup platform, dan catat di Jurnal', 'Mencegah *revenge trading* agar 1 hari rugi tidak menghapus hasil beberapa minggu'],
              ['**US Bank Holiday**', 'Hari libur perbankan AS (mis. *Memorial Day, Independence Day, Thanksgiving*)', '**No-Trade** pada sesi New York', 'Volume institusi AS tutup sehingga harga cenderung datar dan rawan pergerakan tidak terarah'],
              ['**Pagi–Sore Pra-FOMC**', 'Hari pengumuman suku bunga **FOMC** (dini hari WITA)', '**No-Trade** atau kurangi risiko 50% hingga konferensi pers selesai', 'Pasar sering bergerak konsolidasi menyapu atas-bawah sambil menunggu keputusan The Fed'],
              ['**Profil Seek & Destroy**', 'Setelah hari ekspansi ekstrem (`> $60`), harga menyapu High lalu langsung menyapu Low berulang tanpa arah jelas', '**Berhenti bertransaksi** dan tunggu hari perdagangan berikutnya', 'Pergerakan dua arah cepat memicu SL baik pada trader tren maupun pembalikan']
            ]
          }
        },
        {
          number: '29.4',
          heading: 'Simulasi Perhitungan Lengkap: Manajemen Posisi 0,04 Lot XAU/USD',
          shortTitle: 'Simulasi Partial & BEP',
          paragraphs: [
            'Simulasi berikut menunjukkan hasil matematis dari penerapan Partial Close `75%` di TP1 dan pemindahan SL sisa lot ke `BEP+`:'
          ],
          exampleBox: {
            title: 'Simulasi Trade Aktif — BUY 0,04 Lot XAU/USD (Risiko 1R = $16,00)',
            rows: [
              {
                label: 'Posisi Awal (Entry `2.645,00` · SL `2.641,00` · Risiko `$4,00 = $16,00`)',
                detail: 'Rencana target: **TP1 `2.653,00`** (`+$8,00` = **`+2,0R`**) dan **TP2 `2.661,00`** (`+$16,00` = **`+4,0R`**).'
              },
              {
                label: 'Fase 1 — Harga di `2.648,00` (`+0,75R`)',
                detail: '**SL tidak diubah.** Biarkan posisi menghadapi fluktuasi normal tanpa memindahkan SL ke BEP terlalu awal.'
              },
              {
                label: 'Fase 2 — Harga Mencapai TP1 `2.653,00` (`+2,0R`)',
                detail: 'Tutup **Partial `0,03 lot` (`75%`)** → profit terealisasi **`+$24,00`** (`0,03 × $8,00 × 100`) masuk ke saldo akun. Pindahkan SL sisa **`0,01 lot`** ke **`2.645,50` (`BEP+`)**.'
              },
              {
                label: 'Fase 3 — Dua Skenario Akhir',
                detail: '1. **Mencapai TP2 (`2.661,00`):** Sisa `0,01 lot` menambah **`+$16,00`** → total profit bersih **`+$40,00` (`+2,50R`)**.\n2. **Berbalik ke `BEP+` (`2.645,50`):** Sisa `0,01 lot` menambah `+$0,50` → total profit bersih tetap **`+$24,50` (`+1,53R`)**.'
              }
            ]
          },
          callout: {
            tone: 'tip',
            kicker: 'Catatan Ukuran Posisi Minimum (0,01 Lot)',
            title: 'Solusi Bila Ukuran Posisi Hanya 0,01 Lot',
            body: 'Apabila saldo akun hanya memungkinkan membuka `0,01 Standard Lot` (tidak dapat dipecah untuk Partial Close), gunakan salah satu dari dua opsi: (1) tutup penuh `100%` volume pada **TP1 (`2R`)** secara konsisten, atau (2) gunakan **Akun Cent** (misalnya `0,10 Cent Lot`) agar teknik Partial Close `70%/30%` tetap dapat diterapkan dengan batas risiko `1%`.'
          }
        }
      ],
      keyTakeaways: [
        'Jangan menggeser SL ke BEP terlalu dini (`+0,5R`) dan hindari Trailing Stop ketat `10–15 pips`; tunggu hingga **TP1 (`≥ 1,5R–2R`)** atau terbentuk struktur baru searah posisi.',
        'Saat TP1 tercapai, lakukan **Partial Close `60%–75%`** untuk merealisasikan profit ke saldo, lalu pindahkan SL sisa lot ke **`BEP+`**.',
        'Patuhi **Daily Loss Guard (`Maks 2× SL` atau `-2% s.d. -3%/hari`)** untuk melindungi ekuitas dari keputusan emosional.',
        'Hindari bertransaksi pada **3 kondisi No-Trade Days**: **US Bank Holiday**, **Pagi–Sore Pra-FOMC**, dan pasar **Seek & Destroy**.'
      ],
      bridgeNext: 'Setelah seluruh aspek teknis dari analisis hingga manajemen posisi aktif lengkap, penutup Bagian V membahas pengelolaan faktor psikologis dan pembuktian kinerja secara statistik pada **Bab 30: Psikologi Eksekusi (Anti-FOMO/Revenge) & Protokol Jurnal 100 Sample**.',
      practiceCta: {
        label: 'Atur Daily Loss Guard di Jurnal & Profil',
        description: 'Aktifkan batas Maks SL & Maks Rugi Harian otomatis di Jurnal Trading dan praktikkan tombol Partial 50% + Set BE di Replay Lab.',
        href: '../journal/index.html'
      },
      conceptBlocks: [
        {
          heading: 'Partial Close, Syarat Sah BEP, Daily Loss Guard & No-Trade Days',
          paragraphs: [
            'Lakukan Partial Close 60%–75% di TP1 (≥1,5R–2R) sebelum menggeser sisa lot ke BEP+, patuhi Daily Loss Guard (maksimal 2× SL/hari), dan hindari US Bank Holiday, Pra-FOMC, serta Seek & Destroy.'
          ]
        }
      ],
      mappingSteps: [
        'Biarkan SL tetap di posisi awal sebelum TP1 (≥1,5R–2R) atau struktur searah baru terkonfirmasi.',
        'Saat TP1 tersentuh, tutup Partial 60%–75% lot dan pindahkan SL sisa posisi ke BEP+.',
        'Periksa status Daily Loss Guard dan kondisi No-Trade Days (Bank Holiday / Pra-FOMC / Seek & Destroy) sebelum mencari peluang baru.'
      ],
      decisionTree: [
        {
          condition: 'Posisi Buy baru floating profit +0,6R dan belum menembus struktur baru maupun TP1.',
          action: 'Biarkan SL tetap pada titik invalidasi awal — jangan menggeser BEP terlalu dini agar tidak tersentuh retracement normal Gold.'
        },
        {
          condition: 'Pasar pagi–sore menjelang FOMC menyapu High lalu langsung menyapu Low berulang kali.',
          action: 'Kondisi Seek & Destroy — tutup platform dan tetapkan sebagai No-Trade Day.'
        }
      ],
      validRules: [
        'Tutup 60%–75% posisi (Partial) di TP1 (≥1,5R–2R), lalu geser SL sisanya ke BEP+.',
        'Berhenti total untuk hari tersebut apabila batas Daily Loss Guard (2× SL) tercapai.'
      ],
      invalidRules: [
        'Menggeser SL ke BEP saat baru floating profit tipis (+0,5R) atau memakai trailing stop 10 pips.',
        'Membiarkan floating profit +2,5R berbalik penuh menjadi -1R tanpa pengamanan.'
      ],
      xauScenario: {
        context: 'Buy 0,04 lot XAU/USD di 2.645,00, SL 2.641,00 (-$16 / 1R), TP1 2.653,00 (+2R), TP2 2.661,00 (+4R).',
        steps: [
          'Saat +0,75R (2.648,00): SL tidak diubah.',
          'Saat TP1 (2.653,00): Partial 0,03 lot (+$24 terealisasi), geser SL sisa 0,01 lot ke BEP+ 2.645,50 (skenario TP2 total +$40; skenario BEP+ tetap +$24,50).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: BEP Terlalu Dini di +0,4R',
        context: 'Trader menggeser SL ke harga entry begitu floating profit mencapai +$1,80.',
        whyFailed: 'Retracement normal M5 menyentuh BEP tepat di titik entry sebelum harga melanjutkan kenaikan +$16 menuju TP2.'
      },
      goldenRules: [
        'Jangan biarkan posisi yang sudah mencapai +2R berakhir menjadi kerugian.',
        'Jangan memindahkan SL ke BEP sebelum struktur baru terbentuk atau TP1 tercapai.'
      ],
      quiz: [
        {
          question: 'Kapan waktu paling tepat memindahkan Stop Loss ke titik impas (**BEP+**) pada XAU/USD?',
          options: [
            'Segera setelah floating profit `+$1,00` (`+0,3R`)',
            '**Setelah harga menyentuh TP1 (`≥ 1,5R–2R`) atau mencetak break struktur searah baru**, idealnya disertai Partial Close `60%–75%`',
            'Sebelum harga menyentuh titik entry',
            'Tidak pernah mengamankan posisi meski sudah `+4R`'
          ],
          answerIndex: 1,
          explanation: 'Menunggu TP1 atau struktur baru memberi ruang bagi retracement normal Gold agar posisi tidak keluar terlalu awal.'
        },
        {
          question: 'Mengapa fitur **Trailing Stop otomatis ketat (`10–15 pips` / `$1,00–$1,50`)** kurang sesuai untuk XAU/USD?',
          options: [
            'Karena MT5 tidak memiliki fitur Trailing Stop',
            'Karena volatilitas dan **wick retracement alami XAU/USD** lebih lebar dari `$1,50` sehingga trailing ketat sangat mudah tersentuh sebelum tren berlanjut',
            'Karena trailing otomatis menggandakan ukuran lot',
            'Karena `$1,50` terlalu lebar untuk Gold'
          ],
          answerIndex: 1,
          explanation: 'Gunakan manajemen berbasis struktur (Partial Close di TP1 + BEP+), bukan trailing stop mekanis terlalu sempit pada Gold.'
        },
        {
          question: 'Dalam simulasi **Buy `0,04 lot` di `2.645,00`** (`SL 2.641,00`, `TP1 2.653,00`), kamu menutup **Partial `0,03 lot`** di TP1 (`+$24,00`) lalu menggeser sisa `0,01 lot` ke `BEP+ 2.645,50`. Jika harga berbalik menyentuh `BEP+`, berapa hasil bersih transaksi tersebut?',
          options: [
            'Rugi `-$16,00`',
            'Impas `$0,00`',
            '**Tetap profit bersih `+$24,50`** (`+$24,00` dari Partial TP1 + `+$0,50` dari sisa lot di BEP+)',
            'Rugi `-$8,00`'
          ],
          answerIndex: 2,
          explanation: 'Partial Close di TP1 langsung merealisasikan profit ke saldo akun sehingga pembalikan harga ke BEP+ tidak menghapus keuntungan tersebut.'
        },
        {
          question: 'Apa yang dimaksud kondisi pasar **"Seek & Destroy"** yang termasuk daftar wajib **No-Trade Days**?',
          options: [
            'Tren searah yang rapi pada sesi London',
            'Pasar yang **menyapu High lalu langsung menyapu Low berulang kali tanpa arah jelas** (sering muncul pra-FOMC atau sesudah hari ekspansi ekstrem `> $60`)',
            'Jendela Silver Bullet NY AM',
            'Hari ketika Daily Loss Guard aktif'
          ],
          answerIndex: 1,
          explanation: 'Profil Seek & Destroy memicu Stop Loss di kedua sisi pasar; langkah terbaik adalah tidak bertransaksi hingga arah struktur kembali jelas.'
        }
      ]
    },
    {
      id: 'psikologi-scalper-anti-fomo',
      number: 29,
      levelId: 6,
      title: 'Psikologi Scalper: Anti-FOMO, Revenge & Analysis Freeze',
      readMinutes: 5,
      diagramId: 'psychology-discipline-loop',
      summary: '80% kebocoran profit di Analitik Jurnal bukan berasal dari teknik yang salah — melainkan dari 4 virus emosi: FOMO, Revenge Trading, Overtrading, dan Analysis Freeze.',
      conceptBlocks: [
        {
          heading: '4 Virus Emosi Terbesar & Penawarnya',
          paragraphs: [
            '1. **FOMO (Takut Ketinggalan):** Muncul saat melihat candle besar melesat tanpa kamu. Penawar: ingat hukum bus — setiap minggu ada puluhan sesi London & NY; ketinggalan 1 trade saldo tetap 100% utuh, mengejar trade jelek saldo berkurang.\n2. **Revenge Trading (Balas Dendam):** Muncul tepat 5 menit setelah kena SL karena ego terluka. Penawar: aturan jeda paksa 30 menit pasca-SL + batas mutlak maks 2 SL/hari.\n3. **Analysis Freeze (Kebanyakan Mikir):** Setup A+ sudah jelas tapi takut klik karena mencari "1 konfirmasi tambahan lagi". Penawar: batasi checklist hanya 5 poin utama; jika 5 poin terpenuhi dan risiko 0,5%–1% aman, tekan tombol dan serahkan hasil ke probabilitas.\n4. **Euphoria (Terlalu Percaya Diri):** Setelah 3x Win beruntun lalu mendadak menaikkan lot 3x lipat. Penawar: risiko persentase selalu tetap sama baik saat habis menang maupun habis kalah.'
          ]
        }
      ],
      validRules: [
        'Gunakan kolom "Kesalahan" & "Emosi" di modul Jurnal Trading agar Detektor Kebocoran menghitung berapa dolar biaya riil FOMO/Revenge kamu.',
        'Terapkan jeda pendinginan 30 menit (jauhkan layar) setiap kali terkena Stop Loss.',
        'Lakukan review mingguan setiap akhir pekan untuk melihat pola emosi mana yang paling mahal.'
      ],
      invalidRules: [
        'Trading saat sedang marah, kurang tidur, dikejar tagihan mendesak, atau multitasking berat.',
        'Menaikkan ukuran lot setelah menang besar karena merasa "tak terkalahkan".',
        'Menyalahkan "bandar/broker" saat kena SL padahal diri sendiri melanggar checklist.'
      ],
      xauScenario: {
        context: 'Membaca kebocoran psikologi di Analitik Jurnal Pro Amy FX.',
        steps: [
          'Dari 20 trade bulan ini: 14 trade sesuai SOP menghasilkan +$180 (Win Rate 64%).',
          'Namun 6 trade berlabel kesalahan "FOMO" & "Revenge" menghabiskan -$135!',
          'Kesimpulan nyata: strategimu SUDAH profitabel; cukup hapus 2 kebiasaan FOMO & Revenge, maka profit bersihmu langsung melesat 4 kali lipat tanpa perlu belajar indikator baru!'
        ]
      },
      goldenRules: [
        'Satu kesalahan psikologi (FOMO/Revenge) bisa menghapus kerja keras 3 trade disiplin.',
        'Ukur keberhasilan harian dari skor disiplin SOP, bukan semata warna hijau/merah saldo hari itu.'
      ],
      quiz: [
        {
          question: 'Kamu baru saja terkena Stop Loss dan muncul dorongan kuat untuk langsung masuk posisi baru agar saldo hari ini kembali hijau. Virus emosi apakah ini?',
          options: [
            'Analysis Freeze',
            'Revenge Trading (Balas Dendam)',
            'Backtest Bias',
            'Disiplin SOP'
          ],
          answerIndex: 1,
          explanation: 'Keinginan impulsif segera membalikkan kerugian dalam sesi yang sama adalah ciri khas Revenge Trading.'
        },
        {
          question: 'Apa obat paling praktis untuk mengatasi Analysis Freeze (ragu klik meski setup sudah memenuhi seluruh syarat)?',
          options: [
            'Tambahkan 8 indikator lagi supaya lebih yakin',
            'Ringkas checklist ke 5 syarat inti, kecilkan risiko ke 0,5% agar tidak takut rugi, lalu eksekusi mekanis saat 5 syarat terpenuhi',
            'Tunggu sampai harga hampir menyentuh TP baru masuk',
            'Minta orang lain yang klik'
          ],
          answerIndex: 1,
          explanation: 'Analysis Freeze lahir dari terlalu banyak filter dan rasa takut rugi; checklist ringkas + risiko kecil meluruhkan keraguan.'
        },
        {
          question: 'Bagaimana sikap yang benar setelah mencatat 4 kali Win beruntun?',
          options: [
            'Langsung lipatgandakan lot menjadi 5% risiko karena sedang hoki',
            'Pertahankan persentase risiko 0,5%–1% dan standar checklist A+ yang persis sama — waspadai overconfidence',
            'Mulai entry di luar jam Killzone',
            'Berhenti menggunakan Stop Loss'
          ],
          answerIndex: 1,
          explanation: 'Euphoria pasca-win streak sering memicu over-leverage yang menghapus seluruh profit beruntun dalam 1 trade.'
        }
      ]
    },
    // =========================================================================
    // BAGIAN V — BAB 30: PSIKOLOGI EKSEKUSI & PROTOKOL JURNAL 100 SAMPLE
    // =========================================================================
    {
      id: 'protokol-100-sample-mandiri',
      number: 30,
      levelId: 4,
      title: 'Psikologi Eksekusi (Anti-FOMO/Revenge) & Protokol Jurnal 100 Sample',
      readMinutes: 11,
      diagramId: 'graduation-100-samples',
      bookFormat: true,
      diagramAfterSection: 2,
      summary: 'Empat bias psikologis utama dalam eksekusi (FOMO, Revenge Trading, Analysis Freeze, Euphoria) beserta aturan pengendaliannya, Protokol 100 Sample (50 Backtest + 30 Forward + 20 Live), serta 4 metrik kelulusan objektif di Analitik Jurnal Pro.',
      bookSections: [
        {
          number: '30.1',
          heading: 'Peran Psikologi Eksekusi terhadap Konsistensi Kinerja Akun',
          shortTitle: 'Psikologi Eksekusi',
          paragraphs: [
            'Ketika melakukan audit pada tab **Performa → Kebocoran** di modul **Jurnal Trading Amy FX Pro** setelah 30 transaksi, pola yang sering ditemukan adalah strategi yang sesuai SOP sebenarnya sudah menghasilkan ekspektansi positif — namun hasil akhir akun menjadi negatif karena 4 hingga 5 transaksi impulsif di luar rencana.',
            'Pengambilan keputusan dalam ketidakpastian dengan risiko uang riil secara alami memicu empat bias psikologis utama. Pengendaliannya tidak mengandalkan kemauan semata, melainkan melalui **aturan mekanis tertulis** yang membatasi tindakan sebelum tombol order ditekan.'
          ]
        },
        {
          number: '30.2',
          heading: 'Empat Bias Psikologis Eksekusi & Aturan Pengendalian Mekanisnya',
          shortTitle: '4 Bias & Pengendaliannya',
          paragraphs: [
            'Kenali pemicu dan dampak dari keempat pola kesalahan psikologis berikut beserta aturan pengendaliannya:'
          ],
          table: {
            caption: '4 Bias Psikologis Utama di XAU/USD & Aturan Pengendalian Mekanis',
            headers: ['Bias Psikologis', 'Pemicu & Perilaku Khas', 'Dampak terhadap Akun', 'Aturan Pengendalian Mekanis'],
            rows: [
              ['**1. FOMO** (*Fear of Missing Out*)', 'Melihat candle besar bergerak cepat tanpa posisi aktif lalu menekan Market Order di ujung candle', 'Jarak SL melebar, R:R jatuh di bawah `1:1`, rentan tersentuh retracement normal', 'Ingat probabilitas sesi: terdapat ratusan sesi London dan NY per tahun; melewatkan 1 peluang menjaga saldo tetap `100%` utuh'],
              ['**2. Revenge Trading**', 'Terjadi segera setelah terkena SL untuk memaksakan balik modal dalam sesi yang sama, sering dengan lot diperbesar', '1 kali kerugian `-1%` berkembang menjadi `-6%` hingga `-15%` dalam satu hari', 'Terapkan **Jeda Wajib 30 Menit** pasca-SL + **Daily Loss Guard Maks 2× SL/hari**'],
              ['**3. Analysis Freeze**', 'Setup memenuhi seluruh syarat, tetapi trader menunda eksekusi demi mencari konfirmasi tambahan hingga harga meninggalkan zona', 'Melewatkan setup valid dan cenderung masuk terlambat pada setup lemah', 'Gunakan **Checklist 5× YA** + turunkan risiko sementara ke **`0,5%`** hingga eksekusi terasa objektif'],
              ['**4. Euphoria / Overconfidence**', 'Mengalami `3–4× Win` beruntun lalu menaikkan risiko ke `3%–5%` atau melonggarkan filter sesi', '1 kali kerugian dengan lot besar menghapus keuntungan dari beberapa transaksi sebelumnya', 'Kunci risiko tetap di **`0,5%–1%`** dalam semua kondisi, baik setelah menang maupun kalah']
            ]
          }
        },
        {
          number: '30.3',
          heading: 'Protokol 100 Sample: Validasi Bertahap Sebelum Scaling Modal',
          shortTitle: 'Protokol 100 Sample',
          paragraphs: [
            'Keyakinan eksekusi harus dibangun dari bukti statistik, bukan asumsi setelah membaca teori. Jalankan **Protokol 100 Sample** secara berurutan melalui **3 tahap bertingkat** berikut:',
            '1. **Tahap 1 — 50 Sample Backtest Replay (Backtest Lab):** Kunci **1 Model Utama** (Bab 27). Jalankan **Candle Replay bar-by-bar** pada XAU/USD sesi London dan NY WITA tanpa melihat candle masa depan untuk menghindari *Hindsight Bias*. Catat seluruh transaksi (baik TP maupun SL) secara jujur.',
            '2. **Tahap 2 — 30 Sample Forward Test (Akun Demo / Cent):** Jalankan model yang sama di pasar live menggunakan Akun Demo atau Akun Cent dengan risiko tetap **`0,5%–1%`**. Catat setiap posisi beserta **Tag Disiplin** (`Sesuai Plan`, `FOMO`, `Revenge`, dan lainnya) pada **Jurnal Trading** (dapat menggunakan fitur **Scan SS MT5**).',
            '3. **Tahap 3 — 20 Sample Live Terukur & Scaling Bertahap:** Peningkatan modal ke akun riil atau scaling ukuran posisi dilakukan hanya setelah 30 transaksi Tahap 2 memenuhi keempat metrik evaluasi objektif di bawah ini.'
          ]
        },
        {
          number: '30.4',
          heading: '4 Metrik Kelulusan Objektif di Analitik Jurnal Pro',
          shortTitle: '4 Metrik Kelulusan Jurnal',
          paragraphs: [
            'Evaluasi kinerja secara rutin pada akhir pekan (Sabtu/Minggu saat pasar tutup) berdasarkan **4 metrik statistik** pada tab **Performa** Jurnal Trading:'
          ],
          exampleBox: {
            title: 'Contoh Rapor 30 Transaksi Forward Test yang Memenuhi Standar Scaling',
            rows: [
              {
                label: 'Ringkasan 30 Sample (Model ICT 2022 · Risiko Tetap 1% = 1R)',
                detail: '**15 Win** (rata-rata `+2,1R` = **`+31,5R`**) · **12 Loss** (`-1,0R` = **`-12,0R`**) · **3 BE** (`0R`). Dengan Win Rate **`50%`**, total hasil bersih mencapai **`+19,5R`**.'
              },
              {
                label: '4 Metrik Kelulusan Wajib di Analitik Jurnal Pro',
                detail: '1. **Profit Factor `≥ 1,40`:** Pada contoh ini `31,5R ÷ 12,0R` = **`2,62`** (Memenuhi).\n2. **Expectancy Positif (`> +0,25R/transaksi`):** Pada contoh ini `+19,5R ÷ 30` = **`+0,65R` per transaksi** (Memenuhi).\n3. **Max Drawdown Terkendali (`< 8%`):** Tidak ada transaksi yang melebihi batas risiko `1%`.\n4. **Tingkat Pelanggaran SOP `< 10%`:** Maksimal 2–3 kesalahan disiplin dari total 30 transaksi.'
              }
            ]
          },
          callout: {
            tone: 'tip',
            kicker: 'Ringkasan Bagian V',
            title: 'Sistem Eksekusi Inti XAU/USD (Bab 01–30) Telah Lengkap',
            body: 'Sampai Bab 30 ini, seluruh kerangka kerja utama telah tersusun lengkap: Fondasi (Bagian I), Struktur & Liquidity (Bagian II), Kompas Arah & Waktu (Bagian III), PD Arrays (Bagian IV), serta Model Entry, Manajemen SL/TP/Partial, Psikologi, dan Protokol 100 Sample (Bagian V). Bagian VI berikutnya membahas konsep **ICT Institusional Lanjutan** dan ditutup dengan **Capstone Mapping Mandiri**.'
          }
        }
      ],
      keyTakeaways: [
        'Kendalikan 4 bias psikologis dengan aturan mekanis: **Probabilitas Sesi (FOMO)**, **Jeda 30 Menit + Maks 2 SL (Revenge)**, **Checklist 5× YA + Risiko `0,5%` (Analysis Freeze)**, dan **Kunci Risiko Tetap (Euphoria)**.',
        'Jalankan **Protokol 100 Sample** secara jujur: **50 Backtest Replay** (tanpa *Hindsight Bias*) → **30 Forward Test (Demo/Cent)** → **20 Live Terukur**.',
        'Standar objektif sebelum scaling modal pada **Analitik Jurnal Pro**: **Profit Factor `≥ 1,40`**, **Expectancy positif**, **Max Drawdown `< 8%`**, dan **pelanggaran SOP `< 10%`**.',
        'Lakukan evaluasi jurnal rutin setiap akhir pekan untuk mengidentifikasi dan menghilangkan kebocoran disiplin.'
      ],
      bridgeNext: 'Setelah menuntaskan Bagian V (Bab 25–30), **Bagian VI: ICT Institusional Lanjutan & Mapping Mandiri (Bab 31–36)** membahas instrumen lanjutan tanpa mengulang materi dasar, dimulai dari **Bab 31: Balanced Price Range (BPR), Volume Imbalance & Gap Pembukaan (NWOG / NDOG)**.',
      practiceCta: {
        label: 'Mulai 50 Sample Backtest & Audit Jurnal Pro',
        description: 'Buka Backtest Replay Lab untuk mengumpulkan 50 sample bar-by-bar, lalu evaluasi Profit Factor & Kebocoran Emosi di Jurnal Trading.',
        href: 'trading-practice/candle-replay.html'
      },
      conceptBlocks: [
        {
          heading: '4 Bias Psikologis Eksekusi & Protokol 100 Sample Terukur',
          paragraphs: [
            'Terapkan aturan mekanis terhadap FOMO, Revenge Trading, Analysis Freeze, dan Euphoria, lalu validasi kinerja melalui Protokol 100 Sample (50 Backtest Replay → 30 Forward Test → 20 Live) dengan standar Profit Factor ≥ 1,40 dan Max Drawdown < 8%.'
          ]
        }
      ],
      mappingSteps: [
        'Selesaikan 50 sample Backtest Replay bar-by-bar pada 1 Model Utama tanpa melihat masa depan dan catat seluruh Win serta Loss.',
        'Lanjutkan 30 sample Forward Test (Demo/Cent) dengan risiko tetap 0,5%–1% dan pencatatan tag disiplin di Jurnal Trading.',
        'Audit 4 metrik di Analitik Jurnal Pro (Profit Factor ≥ 1,40, Expectancy positif, Max DD < 8%, pelanggaran SOP < 10%) sebelum scaling modal.'
      ],
      decisionTree: [
        {
          condition: 'Baru mengalami 4 kali Win beruntun dan muncul dorongan menaikkan risiko menjadi 4% per transaksi.',
          action: 'Kenali bias Euphoria / Overconfidence — pertahankan risiko tetap 0,5%–1% dan standar Checklist 5× YA yang sama.'
        },
        {
          condition: 'Dari 30 transaksi Forward Test, Profit Factor masih 0,95 dan terdapat 9 transaksi berlabel FOMO/Revenge.',
          action: 'Tunda kenaikan ke akun riil — perbaiki disiplin eksekusi pada Demo/Cent selama 30 sample tambahan hingga Profit Factor ≥ 1,40.'
        }
      ],
      validRules: [
        'Selesaikan minimal 50 sample Backtest + 30 sample Forward Test dengan 1 model utama sebelum scaling modal.',
        'Evaluasi performa melalui 4 metrik objektif di Analitik Jurnal Pro: Profit Factor, Expectancy, Max Drawdown, dan tingkat pelanggaran SOP.'
      ],
      invalidRules: [
        'Langsung menyetor modal besar di akun riil tanpa catatan data minimal 30 transaksi di Jurnal.',
        'Memanipulasi catatan backtest dengan hanya mencatat transaksi yang menyentuh TP dan menghapus yang menyentuh SL.'
      ],
      xauScenario: {
        context: 'Rapor 30 transaksi Forward Test Model ICT 2022: 15 Win (+2,1R), 12 Loss (-1R), 3 BE.',
        steps: [
          'Profit Factor = 31,5R ÷ 12,0R = 2,62 (≥ 1,40); Expectancy = +19,5R ÷ 30 = +0,65R/transaksi.',
          'Max Drawdown < 8% dan pelanggaran SOP < 10% → memenuhi syarat menuju tahap 20 Sample Live Terukur.'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: Backtest Tidak Objektif (Hindsight Bias)',
        context: 'Trader meninjau grafik yang sudah terbentuk penuh lalu hanya mencatat setup yang berhasil mencapai TP.',
        whyFailed: 'Data backtest yang tidak akurat tidak mencerminkan performa nyata di pasar live dan memicu kegagalan disiplin saat menghadapi drawdown.'
      },
      goldenRules: [
        'Data 100 sample memberikan dasar statistik objektif atas keunggulan suatu model.',
        'Konsistensi hasil berasal dari pengulangan eksekusi SOP yang terukur dan disiplin.'
      ],
      quiz: [
        {
          question: 'Bagaimana urutan resmi **Protokol 100 Sample** sebelum melakukan scaling modal di akun riil?',
          options: [
            'Langsung 100 transaksi di akun riil pada minggu pertama',
            '**50 Sample Backtest Replay → 30 Sample Forward Test (Demo/Cent) → 20 Sample Live Terukur**',
            '100 kali mengganti strategi setiap kali terkena 2 SL',
            '5 transaksi menang lalu langsung memakai leverage penuh'
          ],
          answerIndex: 1,
          explanation: 'Tahapan 50–30–20 menguji keunggulan statistik pada data historis sekaligus memvalidasi disiplin eksekusi live dengan risiko terkendali.'
        },
        {
          question: 'Setelah mengalami 1 kali SL, muncul dorongan kuat 5 menit kemudian untuk segera membuka posisi baru dengan **lot 2× lipat** agar kerugian cepat tertutup. Bias psikologis apa ini dan bagaimana pengendaliannya?',
          options: [
            'Analysis Freeze — pengendaliannya menambah 5 indikator',
            '**Revenge Trading** — pengendaliannya **Jeda Wajib 30 Menit pasca-SL** dan kepatuhan **Daily Loss Guard Maks 2× SL/hari**',
            'Disiplin SOP — pengendaliannya melanjutkan eksekusi',
            'Hindsight Bias — pengendaliannya mengganti broker'
          ],
          answerIndex: 1,
          explanation: 'Dorongan impulsif untuk segera menutup kerugian dalam sesi yang sama dengan lot lebih besar adalah ciri Revenge Trading.'
        },
        {
          question: 'Bagaimana sikap yang tepat setelah mencatat **4 kali Win beruntun**?',
          options: [
            'Langsung menaikkan risiko menjadi `5%` per transaksi',
            '**Mempertahankan persentase risiko tetap (`0,5%–1%`)** dan standar Checklist 5× YA yang sama — waspadai bias **Euphoria / Overconfidence**',
            'Mulai bertransaksi di luar jam Killzone agar target lebih cepat tercapai',
            'Berhenti mencatat transaksi ke Jurnal'
          ],
          answerIndex: 1,
          explanation: 'Euphoria setelah kemenangan beruntun sering memicu peningkatan lot berlebihan yang dapat menghapus profit sebelumnya dalam satu kerugian.'
        },
        {
          question: 'Manakah standar rapor **30 transaksi Forward Test** di Analitik Jurnal Pro yang memenuhi syarat untuk lanjut ke tahap live terukur?',
          options: [
            'Satu kali profit `+$500` dengan risiko `15%` tanpa Jurnal',
            '**Profit Factor `≥ 1,40`**, **Expectancy positif**, **Max Drawdown `< 8%`**, dan **tingkat pelanggaran SOP `< 10%`**',
            'Melakukan lebih dari 150 transaksi per minggu tanpa jeda',
            'Tidak pernah sekalipun mengalami Stop Loss'
          ],
          answerIndex: 1,
          explanation: 'Konsistensi diukur secara objektif dari Profit Factor, Expectancy, batas drawdown, dan tingkat kepatuhan terhadap SOP.'
        }
      ]
    }
  ];

  return { LEVELS, LESSONS };
});
