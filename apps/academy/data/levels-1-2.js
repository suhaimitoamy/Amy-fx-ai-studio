/* Amy FX Academy — Bagian II: Struktur Pasar & Peta Likuiditas (Bab 07–12)
 * Format Buku Trading Interaktif (Single-Flow Textbook · Nol Skip · Nol Duplikasi)
 * Catatan: Entri `level-likuiditas-kunci-xauusd` tetap dipertahankan sementara di akhir file
 * untuk Bab 13 (Bagian III) sampai penulisan ulang Tahap 3.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.AmyAcademyPart1 = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : window, function () {
  'use strict';

  const LEVELS = [
    {
      id: 1,
      code: 'Bagian II',
      title: 'Struktur Pasar & Peta Liquidity',
      tagline: 'Membaca struktur harga murni tanpa indikator, menyatukan H4/H1/M15/M5, membedakan BOS valid vs sweep palsu, Dealing Range, peta BSL/SSL, hingga Liquidity Sweep vs Liquidity Run.'
    }
  ];

  const LESSONS = [
    // =========================================================================
    // BAB 07 — STRUKTUR PASAR MURNI
    // =========================================================================
    {
      id: 'struktur-pasar-dasar',
      number: 7,
      levelId: 1,
      bookFormat: true,
      title: 'Struktur Pasar Murni: Swing High/Low, Tren Naik, Tren Turun & Konsolidasi',
      subtitle: 'Cara membaca kerangka pergerakan harga langsung dari candlestick tanpa indikator: definisi mekanis 3-Candle Swing, klasifikasi tiga kondisi pasar, serta perbedaan Strong vs Weak Point.',
      readMinutes: 10,
      diagramId: 'market-structure-basic',
      diagramAfterSection: 1,
      summary: 'Pahami cara menentukan Swing High/Low secara objektif (aturan 3-candle fraktal), membedakan tren naik (HH–HL), tren turun (LH–LL), dan konsolidasi, serta mengenali Strong vs Weak High/Low di XAU/USD.',
      bookSections: [
        {
          number: '7.1',
          heading: 'Pengertian Struktur Pasar dan Definisi Objektif Swing (Aturan 3-Candle)',
          paragraphs: [
            '**Struktur Pasar (*Market Structure*)** adalah susunan puncak dan lembah harga yang menunjukkan arah dominasi pasar dari waktu ke waktu. Harga di pasar keuangan tidak bergerak dalam satu garis lurus, melainkan membentuk rangkaian ayunan naik menuju puncak (**Swing High**) dan ayunan turun menuju lembah (**Swing Low**).',
            'Agar penandaan puncak dan lembah tidak berdasarkan perkiraan subjektif, metodologi ICT menggunakan **Aturan Mekanis 3-Candle Fraktal** (standar Larry Williams) yang memiliki kriteria objektif:'
          ],
          exampleBox: {
            title: 'Definisi Mekanis 3-Candle Fraktal',
            rows: [
              {
                label: 'Swing High Valid',
                detail: 'Satu candle tengah memiliki titik **High lebih tinggi** daripada candle tepat di sebelah kiri **dan** candle tepat di sebelah kanannya. Kondisi ini menandakan tekanan beli sempat mencapai puncak lalu gagal dilanjutkan pada candle ketiga.'
              },
              {
                label: 'Swing Low Valid',
                detail: 'Satu candle tengah memiliki titik **Low lebih rendah** daripada candle tepat di sebelah kiri **dan** candle tepat di sebelah kanannya. Kondisi ini menandakan tekanan jual sempat mencapai titik terendah lalu gagal dilanjutkan pada candle ketiga.'
              },
              {
                label: 'Syarat Konfirmasi',
                detail: 'Swing High atau Swing Low baru dinyatakan sah **setelah candle ke-3 selesai ditutup (*Candle Close*)**. Candle yang masih berjalan belum boleh dilabeli sebagai swing resmi.'
              }
            ]
          }
        },
        {
          number: '7.2',
          heading: 'Tiga Kondisi Struktur Pasar: Bullish, Bearish, dan Konsolidasi',
          paragraphs: [
            'Dengan menghubungkan urutan Swing High dan Swing Low dari kiri ke kanan, pergerakan harga pada seluruh instrumen — termasuk Gold (`XAU/USD`) — terbagi menjadi tiga kondisi struktur:',
            '1. **Tren Naik (*Bullish Structure*):** Harga secara konsisten membentuk puncak lebih tinggi (**Higher High / HH**) diikuti lembah koreksi yang lebih tinggi daripada lembah sebelumnya (**Higher Low / HL**). 2. **Tren Turun (*Bearish Structure*):** Harga membentuk puncak pantulan lebih rendah (**Lower High / LH**) diikuti penembusan ke lembah baru yang lebih rendah (**Lower Low / LL**). 3. **Konsolidasi (*Sideways / Range*):** Harga bergerak mendatar di dalam rentang atas dan bawah yang relatif sejajar tanpa mencetak `HH` maupun `LL` baru. Di Gold, fase ini paling sering muncul pada **Sesi Asia** sebelum volume Eropa dan AS masuk.'
          ],
          table: {
            caption: 'Klasifikasi 3 Kondisi Struktur Pasar pada XAU/USD',
            headers: ['Kondisi Pasar', 'Urutan Swing', 'Dominasi Pasar', 'Prioritas Keputusan Trader'],
            rows: [
              ['Tren Naik (Bullish)', 'HH → HL → HH → HL', 'Pembeli mengendalikan arah; penurunan bersifat koreksi', 'Prioritaskan peluang BUY saat harga koreksi ke area Discount'],
              ['Tren Turun (Bearish)', 'LH → LL → LH → LL', 'Penjual mengendalikan arah; kenaikan bersifat koreksi', 'Prioritaskan peluang SELL saat harga koreksi ke area Premium'],
              ['Konsolidasi (Sideways)', 'High & Low sejajar', 'Akumulasi order; belum ada pihak yang menguasai arah', 'Hindari entry di tengah range; tunggu tembusan valid atau sweep batas luar']
            ]
          }
        },
        {
          number: '7.3',
          heading: 'Perbedaan Strong High/Low dan Weak High/Low',
          paragraphs: [
            'Dalam sebuah tren yang sedang berjalan, tidak setiap puncak dan lembah memiliki fungsi yang sama. Membedakan titik kuat (*Strong*) dan titik lemah (*Weak*) sangat penting untuk menentukan batas validitas struktur dan target harga:',
            '1. **Pada Tren Naik (`HH → HL → HH`):** Titik **Higher Low (`HL`)** yang menjadi asal dorongan hingga berhasil menembus puncak sebelumnya disebut **Strong Low** — titik ini melindungi kelanjutan tren naik dan menjadi batas invalidasi struktur. Sebaliknya, puncak terbaru (**Higher High / HH**) disebut **Weak High** karena dalam arus Bullish titik tersebut berprobabilitas tinggi untuk ditembus kembali oleh dorongan berikutnya. 2. **Pada Tren Turun (`LH → LL → LH`):** Titik **Lower High (`LH`)** yang menjadi asal penurunan hingga berhasil menembus lembah sebelumnya disebut **Strong High** (batas invalidasi tren turun), sedangkan lembah terbaru (**Lower Low / LL**) disebut **Weak Low** (target kelanjutan penurunan).'
          ],
          exampleBox: {
            title: 'Contoh Penentuan Strong Low dan Weak High di M15 XAU/USD',
            rows: [
              {
                label: 'Gelombang 1',
                detail: 'Gold naik dari `2.640,00` (Swing Low awal) ke `2.655,00` (Swing High pertama), lalu terkoreksi ke `2.646,00`.'
              },
              {
                label: 'Gelombang 2 (Terbentuknya Strong Low)',
                detail: 'Dari `2.646,00`, dorongan beli menembus dan menutup candle di `2.662,00` (melewati `2.655,00`). Titik **`2.646,00` resmi menjadi Strong Low**, sedangkan **`2.662,00` menjadi Weak High**.'
              },
              {
                label: 'Implikasi Analisis',
                detail: 'Selama harga bertahan di atas `2.646,00`, struktur tetap sah **Bullish**. Penurunan setelah `2.662,00` dibaca sebagai koreksi dengan target kelanjutan menembus Weak High `2.662,00`.'
              }
            ]
          }
        },
        {
          number: '7.4',
          heading: 'Menghindari Over-Labeling pada Koreksi Minor',
          paragraphs: [
            'Kesalahan umum saat mulai memetakan struktur adalah melabeli setiap 1–2 candle koreksi kecil sebagai perubahan arah tren. Akibatnya, chart dipenuhi label `HH/HL/LH/LL` yang saling bertentangan.',
            'Bedakan secara tegas antara **swing struktural utama** (gelombang yang benar-benar menghasilkan penembusan High atau Low sebelumnya) dengan **koreksi minor** di tengah perjalanan harga. Pada **Bab 08** kita akan menyatukan struktur ini lintas timeframe (`H4/H1`, `M15`, `M5`), lalu pada **Bab 10** kita akan membingkainya ke dalam *Dealing Range* agar struktur selalu terbaca rapi.'
          ],
          callout: {
            tone: 'info',
            title: 'Latihan Praktis Pemetaan Struktur',
            body: 'Buka chart XAU/USD timeframe M15 atau H1 tanpa indikator tambahan. Tandai 5 Swing High dan 5 Swing Low utama yang memenuhi aturan 3-candle, lalu klasifikasikan apakah rangkaiannya membentuk tren Bullish (`HH–HL`), Bearish (`LH–LL`), atau Konsolidasi.'
          }
        }
      ],
      keyTakeaways: [
        '**Swing High** valid = 1 candle tengah dengan `High` lebih tinggi dari candle kiri & kanan; **Swing Low** valid = 1 candle tengah dengan `Low` lebih rendah dari kiri & kanan (wajib menunggu candle ke-3 close).',
        'Struktur pasar terbagi menjadi 3 kondisi: **Bullish (`HH–HL`)**, **Bearish (`LH–LL`)**, dan **Konsolidasi** (High & Low sejajar).',
        '**Strong Low** (tren naik) atau **Strong High** (tren turun) adalah titik asal dorongan yang menembus struktur lama dan menjadi batas validitas tren, sedangkan **Weak High/Low** menjadi target kelanjutan.',
        'Fokus pada swing struktural utama yang menciptakan break struktur, bukan pada setiap 1–2 candle koreksi minor.'
      ],
      bridgeNext: 'Setelah mampu membaca struktur `HH–HL` dan `LH–LL` pada satu timeframe, tantangan berikutnya muncul ketika arah di `H1` tampak berbeda dari `M5`. Di **Bab 08**, kita mempelajari **Analisis Multi-Timeframe (Top-Down)** untuk menyatukan `H4/H1`, `M15`, dan `M5` secara terukur.',
      conceptBlocks: [
        {
          heading: 'Aturan 3-Candle Swing, HH/HL vs LH/LL & Strong/Weak Point',
          paragraphs: [
            'Swing High valid memiliki High lebih tinggi daripada candle kiri dan kanannya; Swing Low valid memiliki Low lebih rendah daripada kiri dan kanannya.',
            'Tren Naik membentuk HH–HL (Strong Low dilindungi, Weak High ditargetkan); Tren Turun membentuk LH–LL (Strong High dilindungi, Weak Low ditargetkan); Konsolidasi bergerak mendatar dalam range.'
          ]
        }
      ],
      mappingSteps: [
        'Buka chart XAU/USD bersih tanpa indikator agar gelombang harga terlihat jelas.',
        'Tandai Swing High dan Swing Low yang memenuhi aturan mekanis 3-candle fraktal.',
        'Identifikasi kondisi tren aktif (HH–HL Bullish, LH–LL Bearish, atau Sideways) lalu tandai Strong Point terakhir sebagai batas validitas struktur.'
      ],
      decisionTree: [
        {
          condition: 'Harga mencetak HH baru lalu terkoreksi, tetapi masih bertahan di atas Strong Low (HL) sebelumnya.',
          action: 'Struktur masih sah Bullish; perlakukan penurunan sebagai koreksi (pullback), bukan perubahan tren.'
        },
        {
          condition: 'Harga bergerak bolak-balik di antara batas atas dan bawah yang sejajar tanpa mencetak HH maupun LL baru.',
          action: 'Klasifikasikan sebagai Konsolidasi (Sideways) dan hindari membuka posisi di tengah range.'
        }
      ],
      failedCase: {
        context: 'Trader langsung membuka SELL hanya karena muncul 2 candle merah kecil di tengah tren naik M15 yang masih jauh di atas Strong Low.',
        whyFailed: 'Menganggap koreksi minor sebagai perubahan tren membuat trader melawan arus pembeli utama.'
      },
      validRules: [
        'Tunggu candle ke-3 selesai ditutup untuk mengonfirmasi Swing High/Low 3-candle.',
        'Gunakan Strong Low (tren naik) atau Strong High (tren turun) sebagai batas validitas struktur.'
      ],
      invalidRules: [
        'Melabeli candle yang masih berjalan (belum close) sebagai swing resmi.',
        'Menganggap setiap 1–2 candle koreksi sebagai tanda reversal tren penuh.'
      ],
      xauScenario: {
        context: 'Chart M15 XAU/USD naik dari 2.640 → 2.655 → koreksi 2.646 → tembus dan close di 2.662.',
        steps: [
          'Titik 2.646 menjadi Strong Low karena berhasil meluncurkan harga menembus puncak 2.655.',
          'Titik 2.662 menjadi Weak High yang menjadi target kelanjutan setelah koreksi selesai.'
        ]
      },
      goldenRules: [
        'Struktur pasar adalah dasar objektif pertama sebelum menerapkan konsep ICT lanjutan.'
      ],
      practiceCta: {
        label: 'Latih Baca Struktur di Simulator 100 Kasus',
        description: 'Uji ketepatan membedakan tren naik, tren turun, dan konsolidasi pada chart latihan XAU/USD.',
        href: 'trading-practice/index.html'
      },
      quiz: [
        {
          question: 'Menurut aturan mekanis 3-candle fraktal, kapan sebuah **Swing High** dinyatakan sah terbentuk?',
          options: [
            'Saat satu candle hijau terlihat panjang meskipun belum selesai ditutup',
            'Saat 1 candle tengah memiliki High lebih tinggi daripada candle tepat di kiri dan kanannya, dan candle ke-3 sudah selesai close',
            'Saat harga berada di atas garis Moving Average 200',
            'Setiap kali muncul satu candle merah kecil di M1'
          ],
          answerIndex: 1,
          explanation: 'Aturan 3-candle fraktal mensyaratkan High candle tengah tertinggi dibanding kiri & kanannya, serta terkonfirmasi setelah candle ke-3 close.'
        },
        {
          question: 'Pada struktur tren naik Gold (`2.640 → 2.655 → koreksi 2.646 → tembus 2.662`), titik harga `2.646` disebut sebagai apa?',
          options: [
            'Weak Low yang pasti segera ditembus ke bawah',
            'Strong Low — titik lembah kuat asal dorongan yang menembus puncak lama dan menjadi batas validitas tren naik',
            'Konsolidasi akhir pekan',
            'Area spread rollover'
          ],
          answerIndex: 1,
          explanation: 'Karena dorongan dari 2.646 berhasil menembus puncak lama 2.655, maka 2.646 berstatus Strong Low yang melindungi tren naik.'
        },
        {
          question: 'Dalam tren naik yang sehat (`HH–HL`), mengapa puncak terbaru (`HH`) disebut **Weak High**?',
          options: [
            'Karena harganya pasti langsung jatuh ke nol',
            'Karena dalam arus tren naik, puncak tersebut cenderung kembali ditembus oleh gelombang naik berikutnya setelah koreksi selesai',
            'Karena candle puncaknya selalu berwarna merah',
            'Karena tidak boleh dijadikan target Take Profit'
          ],
          answerIndex: 1,
          explanation: 'Weak High berarti puncak tersebut tidak menahan arus tren utama dan secara probabilitas tinggi ditargetkan untuk ditembus kembali.'
        },
        {
          question: 'Ketika harga XAU/USD terus bergerak bolak-balik di antara `2.646` dan `2.654` tanpa mencetak puncak lebih tinggi maupun lembah lebih rendah, kondisi apa yang sedang terjadi?',
          options: [
            'Tren Naik (Bullish HH–HL)',
            'Tren Turun (Bearish LH–LL)',
            'Konsolidasi (Sideways / Range) — pasar sedang akumulasi tanpa arah tren jelas',
            'Sinyal wajib membuka 5 posisi sekaligus di tengah range'
          ],
          answerIndex: 2,
          explanation: 'Puncak dan lembah yang sejajar dalam satu rentang menunjukkan konsolidasi; trader disiplin menunggu arah keluar atau sweep batas luar.'
        }
      ]
    },

    // =========================================================================
    // BAB 08 — MULTI-TIMEFRAME (TOP-DOWN)
    // =========================================================================
    {
      id: 'multi-timeframe-h1-m15-m5',
      number: 8,
      levelId: 1,
      bookFormat: true,
      title: 'Multi-Timeframe (Top-Down): Menyatukan H4/H1, M15, dan M5 Tanpa Bingung',
      subtitle: 'Memahami sifat fraktal pasar lintas timeframe, pembagian tugas tegas tiga layar Top-Down, serta matriks keputusan saat timeframe besar dan kecil berbeda arah.',
      readMinutes: 10,
      diagramId: 'mtf-alignment',
      diagramAfterSection: 2,
      summary: 'Kuasai analisis Top-Down (H4/H1 sebagai peta arah, M15 sebagai struktur kerja, M5 sebagai konfirmasi presisi), sifat fraktal pasar, dan matriks sinkronisasi 3 timeframe.',
      bookSections: [
        {
          number: '8.1',
          heading: 'Mengapa Analisis Membutuhkan Multi-Timeframe (Top-Down Analysis)',
          paragraphs: [
            'Pada Bab 05 telah dijelaskan bahwa 1 candle `H1` tersusun dari 4 candle `M15` dan 12 candle `M5`. Dalam pengambilan keputusan trading, mengandalkan satu timeframe saja selalu menimbulkan keterbatasan struktural:',
            '1. **Hanya melihat timeframe kecil (`M5` / `M1`):** Detail pergerakan jangka pendek terlihat jelas, tetapi arah tren utama dan level penahanan besar di `H1/H4` tidak tampak sehingga mudah terjebak membuka posisi melawan arus besar. 2. **Hanya melihat timeframe besar (`D1` / `H4`):** Arah utama terlihat jelas, tetapi jarak Stop Loss struktural terlalu lebar (`$15–$30` di Gold) untuk eksekusi intraday.',
            'Solusi bakunya adalah **Top-Down Analysis**: selalu mulai membaca struktur dari **timeframe besar terlebih dahulu** untuk menetapkan arah dan target, lalu turun bertahap ke **timeframe lebih kecil** untuk mencari zona tunggu dan titik eksekusi yang presisi.'
          ]
        },
        {
          number: '8.2',
          heading: 'Sifat Fraktal Pasar: Perbedaan Tampilan Koreksi di H1 vs M5',
          paragraphs: [
            'Pasar keuangan bersifat **fraktal**, artinya struktur `HH–HL` dan `LH–LL` berulang di setiap skala waktu. Konsekuensi langsungnya: **satu fase koreksi sehat pada timeframe besar selalu tersusun dari satu tren mini lengkap pada timeframe kecil.**',
            'Perhatikan contoh perbandingan satu pergerakan Gold (`XAU/USD`) yang sama pada dua layar berbeda berikut:'
          ],
          exampleBox: {
            title: 'Satu Pergerakan Harga yang Sama di H1 vs M5 (XAU/USD)',
            rows: [
              {
                label: 'Tampilan di Layar H1 (Arah Utama)',
                detail: 'Gold naik kuat dari `2.640,00` ke `2.680,00` (`+$40`). Selanjutnya harga terkoreksi selama 2 jam menuju `2.658,00` — masih jauh di atas Strong Low `2.640,00`. Struktur H1 tetap **100% Bullish**.'
              },
              {
                label: 'Tampilan di Layar M5 (Detail Internal)',
                detail: 'Penurunan koreksi `$22` (`2.680 → 2.658`) selama 2 jam tersebut terdiri dari **24 batang candle M5** yang membentuk struktur turun rapi (`LH → LL → LH → LL`). Trader yang hanya memantau M5 keliru menganggap pasar sedang tren turun kuat lalu membuka SELL tepat di dasar koreksi H1.'
              },
              {
                label: 'Kelanjutan Pergerakan',
                detail: 'Saat harga menyentuh zona permintaan H1 di `2.658,00`, tekanan beli institusi kembali masuk dan mendorong harga naik ke `2.685,00`, menyapu seluruh posisi SELL counter-trend M5.'
              }
            ]
          },
          paragraphsAfter: [
            'Prinsip operasionalnya jelas: **ketika timeframe kecil (`M5`) bergerak berlawanan dengan timeframe besar (`H1/M15`), perlakukan gerak `M5` sebagai fase koreksi, bukan sinyal untuk melawan arus utama.** Tunggu hingga `M5` selesai terkoreksi di area kerja dan kembali berbalik searah dengan `H1/M15`.'
          ]
        },
        {
          number: '8.3',
          heading: 'Protokol 3-Layar Top-Down untuk Trading Intraday & Scalping Gold',
          paragraphs: [
            'Membuka terlalu banyak timeframe sekaligus dari `Monthly` hingga `M1` justru menghasilkan sinyal saling bertabrakan (*analysis paralysis*). Untuk trading intraday dan scalping XAU/USD (sejalan dengan panel 3-TF pada Cockpit Mapping Amy FX Pro), bagi peran secara tegas pada **tiga lapisan timeframe**:'
          ],
          table: {
            caption: 'Pembagian Peran 3 Lapisan Timeframe Top-Down XAU/USD',
            headers: ['Lapisan', 'Timeframe', 'Tugas Utama', 'Hal yang Dihindari'],
            rows: [
              ['1. Peta Besar (HTF)', 'H4 / H1', 'Menentukan arah arus utama (Bullish/Bearish) dan target Liquidity besar (PDH/PDL, Swing H1/H4)', 'Mencari titik entry langsung di H4 karena jarak Stop Loss terlalu lebar ($15–$30)'],
              ['2. Struktur Kerja (MTF)', 'M15', 'Membaca struktur intraday aktif, membingkai Dealing Range, dan menandai zona tunggu (POI)', 'Masuk posisi di tengah range sebelum harga mencapai zona POI atau saat M15 belum selaras'],
              ['3. Eksekusi Presisi (LTF)', 'M5', 'Mengamati reaksi harga di zona M15/H1 dan menunggu konfirmasi balik arah searah arus utama', 'Melawan arah H1/M15 hanya berdasarkan 2–3 candle cepat di M5']
            ]
          }
        },
        {
          number: '8.4',
          heading: 'Matriks Sinkronisasi: Kapan Eksekusi Penuh vs Kapan Wajib WAIT',
          paragraphs: [
            'Sebelum mengambil keputusan transaksi, cocokkan hubungan arah antara `H1`, `M15`, dan `M5` menggunakan tiga skenario objektif berikut:'
          ],
          exampleBox: {
            title: '3 Skenario Sinkronisasi H1 · M15 · M5',
            rows: [
              {
                label: 'Skenario 1: H1 Bullish + M15 Bullish + M5 Bullish (Selaras 3/3)',
                detail: '**Kualitas Tertinggi (A+).** Arus besar, struktur kerja, dan momentum eksekusi mendukung satu arah yang sama. Layak eksekusi penuh dengan risiko baku (0,5%–1%).'
              },
              {
                label: 'Skenario 2: H1 Bullish + M15 Bullish + M5 Bearish (Fase Koreksi)',
                detail: '**Status: SIAGA / TUNGGU.** Jangan membuka SELL melawan arah di M5. Biarkan M5 menyelesaikan penurunan menuju area Discount M15, lalu cari BUY setelah M5 berbalik kembali menjadi Bullish.'
              },
              {
                label: 'Skenario 3: H1 Bullish + M15 Bearish (Konflik Arah Utama)',
                detail: '**Status: WAIT.** H1 sedang mengalami koreksi dalam (*deep pullback*) atau melemah. Tunggu hingga M15 kembali selaras dengan H1, atau hingga H1 resmi mengonfirmasi perubahan struktur.'
              }
            ]
          },
          callout: {
            tone: 'warn',
            title: 'Risiko Melawan Arus Utama (Counter-Trend) di Gold',
            body: 'Pada instrumen bervolatilitas tinggi seperti Gold, posisi counter-trend di M5 yang melawan arah H1/M15 sangat rentan. Ketika aliran order institusi H1 kembali aktif, satu candle M5 dapat melompat $8 hingga $15 dalam beberapa menit dan langsung menembus Stop Loss.'
          }
        }
      ],
      keyTakeaways: [
        'Gunakan **Top-Down Analysis** berurutan: **H4/H1** (peta arah) → **M15** (struktur & zona kerja) → **M5** (konfirmasi eksekusi).',
        'Karena pasar bersifat **fraktal**, koreksi normal pada `H1` tampil sebagai tren penuh pada `M5` — hindari membuka posisi melawan arah HTF.',
        'Peluang kualitas tertinggi muncul saat **M5 menyelesaikan koreksi lalu berbalik selaras** dengan `H1` dan `M15` (sinkronisasi 3/3).',
        'Jika `H1` dan `M15` saling bertabrakan arah, keputusan paling rasional adalah **WAIT** sampai struktur kembali selaras.'
      ],
      bridgeNext: 'Setelah memahami penyelarasan `H4/H1`, `M15`, dan `M5`, langkah krusial berikutnya adalah memastikan apakah penembusan sebuah Swing High atau Swing Low benar-benar valid atau sekadar jebakan. Di **Bab 09**, kita membedah aturan mekanis **Break of Structure (BOS) Valid vs Liquidity Sweep**.',
      conceptBlocks: [
        {
          heading: 'Alur Top-Down H4/H1 → M15 → M5 & Sifat Fraktal Pasar',
          paragraphs: [
            'H4/H1 menentukan arah arus utama dan target besar, M15 membingkai struktur kerja dan zona tunggu, sedangkan M5 bertugas mencari konfirmasi saat harga tiba di zona M15.',
            'Koreksi pada H1 selalu terlihat seperti tren penuh pada M5; trader disiplin menunggu M5 berbalik kembali searah H1/M15 daripada melawan arus utama.'
          ]
        }
      ],
      mappingSteps: [
        'Buka H4/H1 terlebih dahulu untuk menentukan apakah arus besar sedang Bullish, Bearish, atau Range.',
        'Turun ke M15 untuk membaca struktur kerja aktif dan menandai area tunggu searah H1.',
        'Turun ke M5 hanya saat harga sudah menyentuh area M15 untuk menunggu konfirmasi searah H1/M15.'
      ],
      decisionTree: [
        {
          condition: 'H1 Bullish dan M15 Bullish, tetapi M5 sedang turun membentuk LH–LL menuju area M15.',
          action: 'Hindari SELL counter-trend di M5. Tunggu M5 selesai terkoreksi di area M15 lalu berbalik Bullish untuk mencari BUY.'
        },
        {
          condition: 'H1 dan M15 saling berlawanan arah tanpa struktur jelas.',
          action: 'Pilih WAIT hingga M15 kembali selaras dengan arah H1 atau H1 resmi berpindah struktur.'
        }
      ],
      failedCase: {
        context: 'Trader hanya memantau layar M5, melihat penurunan $18 selama 1,5 jam, lalu membuka SELL tepat saat harga menyentuh zona beli H1.',
        whyFailed: 'Tidak mengecek H1 bahwa penurunan M5 tersebut hanyalah koreksi dalam tren naik H1; saat pembeli H1 masuk kembali, posisi SELL langsung terkena SL.'
      },
      validRules: [
        'Selalu baca chart dari timeframe besar ke kecil (Top-Down) sebelum mengambil keputusan.',
        'Prioritaskan setup ketika H1, M15, dan M5 kembali selaras ke satu arah.'
      ],
      invalidRules: [
        'Menentukan arah utama hanya dari chart M5 atau M1.',
        'Melawan arus M15/H1 di M5 saat koreksi mendekati zona permintaan HTF.'
      ],
      xauScenario: {
        context: 'H1 Gold naik 2.640 → 2.680 lalu koreksi ke 2.658; di M5 koreksi tampil sebagai tren turun.',
        steps: [
          'Pertahankan bias H1 Bullish selama harga berada di atas Strong Low 2.640.',
          'Pantau M5 saat harga tiba di 2.658: tunggu M5 berhenti mencetak LL dan berbalik naik sebelum membuka BUY.'
        ]
      },
      goldenRules: [
        'Timeframe besar menetapkan arah utama; timeframe kecil menyediakan presisi eksekusi searah timeframe besar.'
      ],
      practiceCta: {
        label: 'Bandingkan H1, M15 & M5 di Cockpit Mapping',
        description: 'Amati bagaimana panel 3-TF (H1, M15, M5) menyelaraskan arah Gold secara real-time.',
        href: '../mapping/index.html'
      },
      quiz: [
        {
          question: 'Mengapa penurunan koreksi `$22` di chart `H1` yang masih Bullish sering membuat trader pemula keliru membuka SELL?',
          options: [
            'Karena broker menonaktifkan chart H1',
            'Karena sifat fraktal pasar: koreksi 2 jam di H1 tampil sebagai tren turun rapi (`LH–LL`) sepanjang 24 candle di layar M5',
            'Karena M5 selalu lebih dominan daripada H1',
            'Karena Gold tidak pernah mengalami koreksi'
          ],
          answerIndex: 1,
          explanation: 'Satu fase koreksi pada HTF (H1) tersusun dari tren mini pada LTF (M5). Tanpa mengecek H1, trader M5 rawan menjual tepat di dasar koreksi.'
        },
        {
          question: 'Dalam protokol 3-layar Top-Down (`H4/H1 → M15 → M5`), apa tugas utama timeframe **M5**?',
          options: [
            'Menentukan arah tren mingguan dan bulanan',
            'Mengamati reaksi harga dan menunggu konfirmasi balik arah saat harga sudah tiba di area kerja M15/H1',
            'Menggantikan seluruh analisis H1 dan M15',
            'Menentukan jadwal tutup akhir pekan'
          ],
          answerIndex: 1,
          explanation: 'H4/H1 menetapkan arah utama, M15 membingkai struktur & area tunggu, dan M5 digunakan untuk konfirmasi presisi di area tersebut.'
        },
        {
          question: 'Kondisi layar menunjukkan: **H1 Bullish**, **M15 Bullish**, namun **M5 sedang turun (Bearish)** mendekati zona tunggu M15. Apa tindakan paling tepat?',
          options: [
            'Segera buka SELL besar di M5 karena candle merah sedang kuat',
            'SIAGA / TUNGGU: biarkan M5 menyelesaikan koreksinya ke area M15, lalu cari peluang BUY setelah M5 berbalik naik searah H1/M15',
            'Menutup akun trading',
            'Membuka BUY dan SELL bersamaan pada harga yang sama'
          ],
          answerIndex: 1,
          explanation: 'M5 yang turun dalam arus H1/M15 Bullish adalah koreksi sehat. Tunggu M5 kembali selaras Bullish untuk setup probabilitas tinggi.'
        },
        {
          question: 'Manakah kondisi sinkronisasi Multi-Timeframe yang memberikan kualitas setup tertinggi (A+)?',
          options: [
            'H1 Bullish, M15 Bearish, M5 Sideways',
            'H1, M15, dan M5 ketiganya selaras ke satu arah yang sama',
            'Hanya melihat M1 tanpa memperhatikan H1 maupun M15',
            'Saat H1 dan M15 saling bertabrakan menjelang rilis data CPI'
          ],
          answerIndex: 1,
          explanation: 'Keselarasan 3/3 (H1 + M15 + M5 searah) memastikan arus besar, struktur kerja, dan momentum eksekusi saling mendukung.'
        }
      ]
    },

    // =========================================================================
    // BAB 09 — BOS VALID VS LIQUIDITY SWEEP
    // =========================================================================
    {
      id: 'bos-valid-vs-sweep-palsu',
      number: 9,
      levelId: 1,
      bookFormat: true,
      title: 'Break of Structure (BOS) Valid vs Liquidity Sweep (Breakout Palsu)',
      subtitle: 'Kriteria objektif ICT untuk membedakan penembusan struktur yang valid (Body Close) dari Liquidity Sweep (Wick-Only) beserta cara menangani kasus transisi di XAU/USD.',
      readMinutes: 10,
      diagramId: 'bos-vs-sweep',
      diagramAfterSection: 1,
      summary: 'Pahami perbedaan tegas Break of Structure (Body Close penuh melewati swing) vs Liquidity Sweep (hanya Wick menembus lalu Body Close kembali di dalam), penanganan kasus transisi, dan studi kasus XAU/USD.',
      bookSections: [
        {
          number: '9.1',
          heading: 'Mekanika Breakout Palsu pada Level Swing High dan Swing Low',
          paragraphs: [
            'Di pasar Gold (`XAU/USD`), harga sering menembus sedikit di atas Swing High (misalnya `2.660,00` hingga `2.662,50`), lalu berbalik turun tajam beberapa menit kemudian dan hanya meninggalkan wick panjang di atas level tersebut.',
            'Peristiwa ini terjadi karena **mekanika kumpulan order di luar level penting**. Di atas puncak `2.660,00`, berkumpul dua jenis pesanan beli dari trader ritel: **Stop Loss** milik trader posisi SELL (yang secara teknis adalah perintah BUY) dan **Buy Stop** milik trader breakout.',
            'Ketika pelaku pasar institusional ingin mengeksekusi order jual berukuran besar, mereka membutuhkan volume pembeli dalam jumlah besar sebagai lawan transaksi. Harga didorong melewati `2.660,00` untuk memicu kumpulan order beli tersebut, menyerap likuiditasnya, lalu berbalik turun. Mekanisme penembusan sementara untuk menyerap order lalu kembali ke dalam range inilah yang disebut **Liquidity Sweep**.'
          ]
        },
        {
          number: '9.2',
          heading: 'Kriteria Objektif ICT: Body Close (BOS Valid) vs Wick-Only (Liquidity Sweep)',
          paragraphs: [
            'Untuk memisahkan penembusan struktur asli dari breakout palsu secara objektif, ICT menetapkan satu patokan mekanis: **evaluasi posisi penutupan Body candle (*Candle Close*), bukan titik terjauh yang disentuh Wick.**'
          ],
          table: {
            caption: 'Perbandingan Objektif: Break of Structure (BOS) vs Liquidity Sweep',
            headers: ['Parameter Evaluasi', 'BOS Valid (Break of Structure)', 'Liquidity Sweep (Breakout Palsu)'],
            rows: [
              ['Posisi Penutupan Candle (Close)', 'Body candle **ditutup penuh** melewati Swing High atau Swing Low sebelumnya', 'Hanya **Wick** yang menembus level; **Body Close kembali di dalam** level swing lama'],
              ['Makna Pergerakan Order', 'Institusi menerima area harga baru (*acceptance*) dan melanjutkan tren', 'Institusi menyerap kumpulan Stop Loss/breakout order lalu menolak harga lebih tinggi/rendah'],
              ['Waktu Konfirmasi', 'Wajib menunggu durasi candle berakhir (`00:00` / resmi close)', 'Wajib menunggu candle selesai close sehingga wick penolakan terkonfirmasi'],
              ['Tindakan Trader ICT', 'Ikuti arah struktur baru; tunggu koreksi sehat untuk entry searah BOS', 'Jangan mengejar breakout; bersiap memantau konfirmasi pembalikan arah']
            ]
          }
        },
        {
          number: '9.3',
          heading: 'Menangani Dua Kondisi Transisi pada Chart Live',
          paragraphs: [
            'Pada grafik live XAU/USD, terdapat dua kondisi transisi yang perlu dipahami agar tidak salah mengklasifikasikan BOS dan Sweep:',
            '1. **Candle ke-1 Wick Sweep, lalu Candle ke-2 Body Close di luar level:** Jika candle pertama hanya menyapu level dengan wick, namun candle kedua mendorong kuat dan menutup **Body Close tegas** melewati titik tertinggi candle pertama, maka statusnya berubah dari Sweep menjadi **BOS Valid**. Sebaliknya, jika candle kedua langsung bergerak menjauh kembali ke dalam range, candle pertama terkonfirmasi murni sebagai **Liquidity Sweep**. 2. **Weak Break (Penutupan Body Terlalu Tipis):** Pada Gold, jika Body candle hanya ditutup tipis melewati level (`< $0,30` atau `< 3 pips`) disertai wick penolakan yang jauh lebih panjang dari body-nya, kekuatan penerimaan harga tergolong lemah. Tunggu 1 candle berikutnya untuk memastikan apakah harga benar-benar diterima di luar level atau ditarik balik.'
          ],
          callout: {
            tone: 'warn',
            title: 'Larangan Menyimpulkan BOS Sebelum Candle Close',
            body: 'Pada timeframe M15, candle yang tampak menembus `+$4,00` di atas Swing High pada menit ke-10 masih dapat berbalik total sebelum menit ke-15 berakhir hingga tersisa wick atas panjang. **Tidak pernah ada BOS Valid sebelum candle resmi ditutup.**'
          }
        },
        {
          number: '9.4',
          heading: 'Studi Kasus Komparatif XAU/USD pada Level Swing High 2.660,00',
          paragraphs: [
            'Perhatikan bagaimana satu level Swing High yang sama (`2.660,00`) menghasilkan dua keputusan berlawanan berdasarkan cara penutupan candle M15:'
          ],
          exampleBox: {
            title: 'Dua Hasil Berbeda di Level Swing High 2.660,00 (M15 Gold)',
            rows: [
              {
                label: 'Skenario A — BOS Valid (Kelanjutan Tren Naik)',
                detail: 'Candle M15 naik melewati `2.660,00` dan **ditutup (Close) pada `2.663,80`** dengan Body solid di atas level. Penerimaan harga terkonfirmasi. **Tindakan:** Struktur Bullish berlanjut; hindari mengejar di puncak dan tunggu koreksi sehat untuk mencari BUY.'
              },
              {
                label: 'Skenario B — Liquidity Sweep (Penolakan / Reversal)',
                detail: 'Candle M15 sempat naik ke High `2.662,90`, lalu tekanan jual menekan harga hingga **ditutup (Close) pada `2.658,40`** (di bawah `2.660,00`, menyisakan Wick atas `$4,50`). **Tindakan:** Hindari BUY breakout; amati konfirmasi pembalikan arah turun pada timeframe eksekusi.'
              }
            ]
          }
        }
      ],
      keyTakeaways: [
        '**BOS Valid** mensyaratkan **Body candle ditutup penuh** melewati Swing High atau Swing Low sebelumnya setelah candle resmi close.',
        '**Liquidity Sweep** terjadi ketika hanya **Wick** yang menembus level sementara Body ditutup kembali di dalam range.',
        'Keputusan BOS atau Sweep tidak pernah boleh diambil sebelum durasi candle selesai ditutup (`Candle Close`).',
        'Penutupan body tipis (`< $0,30` di Gold) dengan wick penolakan panjang merupakan *weak break* yang memerlukan konfirmasi 1 candle tambahan.'
      ],
      bridgeNext: 'Setelah mampu membedakan penembusan valid (`BOS`) dari jebakan (`Liquidity Sweep`), langkah berikutnya adalah membingkai rentang harga aktif pasca-BOS agar peta koreksi dan target selalu terukur. Di **Bab 10**, kita mempelajari **Dealing Range: Arena Eksternal (ERL) vs Internal (IRL)**.',
      conceptBlocks: [
        {
          heading: 'Body Close (BOS Valid) vs Wick-Only (Liquidity Sweep)',
          paragraphs: [
            'BOS Valid membutuhkan body candle ditutup penuh melewati Swing High atau Swing Low sebelumnya setelah candle selesai close.',
            'Liquidity Sweep hanya menembus level dengan wick lalu body ditutup kembali di dalam range, menandakan penyerapan Stop Loss dan potensi reversal.'
          ]
        }
      ],
      mappingSteps: [
        'Tarik garis horizontal presisi pada titik Swing High atau Swing Low yang diuji.',
        'Tunggu timer candle berakhir (candle resmi close) sebelum menentukan status penembusan.',
        'Periksa posisi Close: Body di luar swing = BOS Valid; hanya Wick di luar dan Body kembali di dalam = Liquidity Sweep.'
      ],
      decisionTree: [
        {
          condition: 'Candle M15 menembus Swing High dengan wick $3 lalu close kembali di bawah Swing High.',
          action: 'Klasifikasikan sebagai Liquidity Sweep (bukan BOS). Hindari BUY breakout dan pantau konfirmasi reversal.'
        },
        {
          condition: 'Candle M15 menutup body penuh $3,50 di atas Swing High sebelumnya.',
          action: 'Klasifikasikan sebagai Bullish BOS Valid. Tandai Strong Low baru dan tunggu koreksi searah tren.'
        }
      ],
      failedCase: {
        context: 'Trader langsung membuka BUY pada menit ke-9 candle M15 karena harga sedang berada di atas Swing High 2.660,00.',
        whyFailed: 'Saat menit ke-15 berakhir, candle ditutup di 2.658,00 (Liquidity Sweep); posisi BUY terbuka tepat pada ujung wick penolakan.'
      },
      validRules: [
        'Selalu tunggu Candle Close untuk membedakan BOS Valid dan Liquidity Sweep.',
        'Akui BOS Valid jika Body Close tegas melewati level swing sebelumnya.'
      ],
      invalidRules: [
        'Menyebut penembusan wick-only sebagai Break of Structure.',
        'Mengejar breakout saat candle masih berjalan sebelum tutup.'
      ],
      xauScenario: {
        context: 'Swing High M15 Gold berada di 2.660,00.',
        steps: [
          'Jika candle close di 2.663,80 (Body di atas 2.660,00) → BOS Valid Bullish.',
          'Jika candle sempat ke 2.662,90 lalu close di 2.658,40 → Liquidity Sweep, hindari BUY.'
        ]
      },
      goldenRules: [
        'Wick menyerap likuiditas; penutupan Body menunjukkan penerimaan harga sebenarnya.'
      ],
      practiceCta: {
        label: 'Uji Mata: BOS Valid vs Sweep di Latihan Kasus',
        description: 'Latih ketepatan membedakan Body Close BOS dan Wick Sweep pada skenario chart Gold nyata.',
        href: 'trading-practice/index.html'
      },
      quiz: [
        {
          question: 'Apa syarat mekanis utama agar penembusan Swing High diakui sebagai **Break of Structure (BOS) Valid**?',
          options: [
            'Cukup ujung wick menyentuh $0,50 di atas Swing High',
            'Body candle harus selesai ditutup (Close) di atas Swing High sebelumnya',
            'Harga bergerak cepat di menit ke-3 meski belum close',
            'Indikator RSI melewati angka 70'
          ],
          answerIndex: 1,
          explanation: 'Dalam ICT, BOS hanya sah apabila Body candle ditutup melewati titik swing lama setelah candle resmi close.'
        },
        {
          question: 'Swing High M15 XAU/USD berada di `2.660,00`. Candle M15 sempat naik ke `2.663,20`, namun saat menit ke-15 selesai candle ditutup di `2.658,70`. Peristiwa apa ini?',
          options: [
            'Bullish BOS Valid yang sangat kuat',
            'Liquidity Sweep (breakout palsu) karena hanya wick yang melewati 2.660 sementara body close kembali di dalam',
            'Konsolidasi pasar tutup',
            'Sinyal wajib BUY tanpa Stop Loss'
          ],
          answerIndex: 1,
          explanation: 'Hanya wick yang menembus 2.660 sementara body ditutup di 2.658,70 — ini adalah definisi baku Liquidity Sweep.'
        },
        {
          question: 'Mengapa sebuah pergerakan dilarang dinyatakan sebagai BOS pada menit ke-10 candle M15?',
          options: [
            'Karena MT5 melarang eksekusi di menit ke-10',
            'Karena sebelum candle resmi ditutup, dorongan harga masih dapat berbalik menjadi wick Sweep di menit-menit terakhir',
            'Karena menit ke-10 tidak memiliki spread',
            'Karena BOS hanya berlaku pada hari Jumat'
          ],
          answerIndex: 1,
          explanation: 'Status BOS atau Sweep hanya sah ditentukan dari harga Close resmi; candle yang tampak menembus di menit ke-10 sering berbalik sebelum penutupan.'
        },
        {
          question: 'Jika candle ke-1 hanya menyapu Swing High dengan wick, lalu candle ke-2 mendorong kuat dan **body close** tegas di atas puncak candle ke-1, bagaimana statusnya?',
          options: [
            'Tetap Sweep selamanya walaupun harga naik $30',
            'Harga diterima di luar level — statusnya terkonfirmasi berubah menjadi BOS Valid',
            'Chart sedang error dan perlu dimulai ulang',
            'Pasar otomatis masuk mode sideways'
          ],
          answerIndex: 1,
          explanation: 'Jika candle berikutnya menutup body secara tegas melampaui puncak sweep pertama, penerimaan harga terjadi dan struktur sah berlanjut (BOS).'
        }
      ]
    },

    // =========================================================================
    // BAB 10 — DEALING RANGE (ERL VS IRL)
    // =========================================================================
    {
      id: 'internal-external-dealing-range',
      number: 10,
      levelId: 1,
      bookFormat: true,
      title: 'Dealing Range: Membaca Arena Eksternal (ERL) vs Internal (IRL)',
      subtitle: 'Cara menentukan batas Dealing Range aktif setelah BOS Valid, membedakan External Range Liquidity (ERL) vs Internal Range Liquidity (IRL), serta siklus pergerakan ERL ↔ IRL.',
      readMinutes: 10,
      diagramId: 'dealing-range-ie',
      diagramAfterSection: 2,
      summary: 'Pahami cara membingkai Dealing Range aktif pasca-BOS, perbedaan External Range Liquidity (ERL) vs Internal Range Liquidity (IRL), siklus ERL → IRL → ERL, dan kapan Dealing Range wajib diperbarui.',
      bookSections: [
        {
          number: '10.1',
          heading: 'Definisi dan Cara Menentukan Dealing Range Aktif',
          paragraphs: [
            '**Dealing Range** adalah rentang harga aktif antara dua titik ekstrem terbaru tempat pergerakan koreksi dan ekspansi berlangsung. Konsep ini membantu menyaring seluruh struktur chart menjadi satu bingkai kerja yang terukur.',
            'Secara mekanis, Dealing Range aktif selalu dibentuk setelah terjadi **BOS Valid**: 1. **Pada Struktur Bullish:** Batas bawah ditarik dari **Strong Low** (titik asal dorongan yang mencetak BOS Valid), sedangkan batas atas ditarik pada **Weak High** (puncak tertinggi gelombang tersebut sebelum harga mulai terkoreksi). 2. **Pada Struktur Bearish:** Batas atas ditarik dari **Strong High** (titik asal penurunan yang mencetak BOS Valid), sedangkan batas bawah ditarik pada **Weak Low** (titik terendah sebelum harga mulai memantul).'
          ]
        },
        {
          number: '10.2',
          heading: 'Perbedaan External Range Liquidity (ERL) dan Internal Range Liquidity (IRL)',
          paragraphs: [
            'Setelah batas atas dan bawah Dealing Range ditentukan, seluruh ruang pergerakan harga di dalamnya terbagi menjadi dua wilayah utama dengan fungsi berbeda:'
          ],
          table: {
            caption: 'Perbandingan External Range Liquidity (ERL) vs Internal Range Liquidity (IRL)',
            headers: ['Istilah ICT', 'Lokasi pada Dealing Range', 'Komponen Utama', 'Fungsi dalam Pergerakan Harga'],
            rows: [
              ['ERL (External Range Liquidity)', 'Pada **batas luar atas dan bawah** Dealing Range', 'Swing High utama (`Old High`) dan Swing Low utama (`Old Low`) tempat berkumpulnya Stop Loss', 'Target ekspansi luar atau titik sweep sebelum harga kembali masuk ke dalam range'],
              ['IRL (Internal Range Liquidity)', 'Di **bagian dalam** antara batas bawah dan batas atas Dealing Range', 'Area Imbalance (*Fair Value Gap*), *Order Block*, dan swing koreksi minor di dalam range', 'Area tujuan koreksi (*retrace*) untuk menyeimbangkan harga sebelum kembali mengarah ke ERL']
            ]
          },
          paragraphsAfter: [
            '*(Detail mekanis Fair Value Gap dan Order Block dibahas terpisah pada Bagian IV. Pada tahap ini, cukup pahami bahwa seluruh zona di dalam batas kotak disebut **IRL**, sedangkan ujung batas atas dan bawah kotak disebut **ERL**.)*'
          ]
        },
        {
          number: '10.3',
          heading: 'Siklus Pergerakan Harga ICT: ERL → IRL → ERL',
          paragraphs: [
            'Dalam kerangka pengiriman harga ICT, pergerakan pasar berlangsung dalam siklus dua fase yang saling bergantian secara teratur:',
            '1. **Fase ERL → IRL (Koreksi / Rebalance):** Setelah harga menyentuh atau menembus batas luar (`ERL`), kumpulan order eksternal baru saja terserap. Harga cenderung bergerak kembali masuk ke dalam range menuju area `IRL` untuk menyeimbangkan Imbalance. 2. **Fase IRL → ERL (Ekspansi):** Setelah harga mencapai dan bereaksi dari area `IRL` di dalam range, pesanan searah tren kembali masuk mendorong harga menuju batas luar (`ERL`) di sisi berlawanan.',
            'Implikasi praktisnya sangat penting: membuka posisi searah tepat setelah harga baru saja menembus `ERL` sejauh `$20` adalah titik masuk dengan risiko terburuk, karena secara siklus harga justru berpotensi terkoreksi terlebih dahulu menuju `IRL`.'
          ]
        },
        {
          number: '10.4',
          heading: 'Studi Kasus Siklus Dealing Range XAU/USD & Aturan Pembaruan',
          paragraphs: [
            'Perhatikan contoh siklus satu Dealing Range lengkap pada chart M15 XAU/USD berikut, termasuk momen ketika Dealing Range lama harus diganti:'
          ],
          exampleBox: {
            title: 'Siklus Dealing Range M15 XAU/USD',
            rows: [
              {
                label: 'Tahap 1 — Pembentukan Dealing Range',
                detail: 'Gold naik dari Strong Low `2.640,00` (**ERL Bawah**) dan mencetak BOS Valid hingga puncak `2.664,00` (**ERL Atas**). Terbentuk Dealing Range aktif selebar `$24` (`2.640,00 – 2.664,00`).'
              },
              {
                label: 'Tahap 2 — Fase Koreksi (ERL → IRL)',
                detail: 'Pasca menyentuh ERL Atas `2.664,00`, harga terkoreksi masuk ke dalam range menuju zona **IRL** di sekitar `2.649,00`. Trader tidak mengejar BUY di `2.664,00`, melainkan menunggu reaksi di dalam range.'
              },
              {
                label: 'Tahap 3 — Fase Ekspansi (IRL → ERL)',
                detail: 'Dari area `2.649,00` (IRL), tekanan beli kembali masuk mendorong harga naik menembus dan **Body Close** di atas `2.664,00` (ERL Atas) hingga mencetak puncak baru `2.676,00`.'
              },
              {
                label: 'Tahap 4 — Pembaruan Dealing Range',
                detail: 'Setelah `2.664,00` ditembus dengan BOS Valid, **Dealing Range lama (`2.640–2.664`) tidak lagi berlaku**. Dealing Range aktif yang baru kini bergeser menjadi **`2.649,00` (Strong Low baru) hingga `2.676,00` (Weak High baru)**.'
              }
            ]
          },
          callout: {
            tone: 'warn',
            title: 'Kesalahan Mempertahankan Dealing Range Lama',
            body: 'Setiap kali terjadi **BOS Valid** baru yang menembus batas range sebelumnya, Dealing Range wajib segera diperbarui mengikuti kaki dorongan terakhir. Menggunakan kotak lama dari beberapa hari lalu menyebabkan zona tunggu menjadi tidak relevan terhadap harga aktif.'
          }
        }
      ],
      keyTakeaways: [
        '**Dealing Range** dibingkai dari **Strong Point** (asal dorongan BOS Valid) hingga **Weak Point** (ujung gelombang sebelum koreksi).',
        '**ERL** adalah batas luar atas dan bawah Dealing Range, sedangkan **IRL** adalah zona Imbalance dan struktur koreksi di dalam range.',
        'Harga bergerak dalam siklus bergantian **`ERL → IRL → ERL`** — hindari mengejar entry searah tepat setelah harga menghantam ERL.',
        'Perbarui Dealing Range setiap kali terjadi **BOS Valid** baru agar bingkai analisis selalu relevan.'
      ],
      bridgeNext: 'Setelah memahami bingkai Dealing Range serta siklus `ERL ↔ IRL`, langkah selanjutnya adalah mengenali level-level batas luar mana saja yang menyimpan konsentrasi order terbesar di pasar Gold. Di **Bab 11**, kita memetakan seluruh **Liquidity Pool Utama XAU/USD (`BSL/SSL`, `EQH/EQL`, `PDH/PDL`, `PWH/PWL`, dan `Asia Range`)**.',
      conceptBlocks: [
        {
          heading: 'Dealing Range Aktif & Siklus ERL ↔ IRL',
          paragraphs: [
            'Dealing Range dibingkai dari titik asal dorongan (Strong Point) ke ujung gelombang (Weak Point) setelah BOS Valid terjadi.',
            'Pergerakan harga bergantian antara batas luar (ERL) masuk ke area internal (IRL), lalu kembali menargetkan batas luar (ERL) baru.'
          ]
        }
      ],
      mappingSteps: [
        'Identifikasi BOS Valid terakhir pada timeframe kerja (M15/H1).',
        'Tarik batas Dealing Range dari titik asal dorongan (Strong Point) hingga ujung gelombang sebelum koreksi (Weak Point).',
        'Amati fase aktif harga: jika baru menyentuh ERL, tunggu retrace ke IRL; jika baru bereaksi dari IRL, bidik ERL di sisi seberangnya.'
      ],
      decisionTree: [
        {
          condition: 'Harga baru saja menembus ERL atas setelah naik panjang $20 tanpa koreksi.',
          action: 'Hindari mengejar BUY di batas luar; tunggu harga terkoreksi masuk menuju IRL di dalam range.'
        },
        {
          condition: 'Harga mencetak BOS Valid baru melampaui batas atas Dealing Range lama.',
          action: 'Hapus kotak lama dan perbarui Dealing Range mengikuti titik asal dorongan terbaru hingga puncak baru.'
        }
      ],
      failedCase: {
        context: 'Trader tetap menggunakan Dealing Range 2 hari lalu (2.610–2.630) padahal Gold sudah mencetak dua kali BOS baru hingga 2.668.',
        whyFailed: 'Dealing Range yang sudah usang membuat trader menunggu harga kembali ke area lama yang tidak relevan atau melawan tren aktif.'
      },
      validRules: [
        'Bingkai Dealing Range dari kaki dorongan yang menghasilkan BOS Valid terakhir.',
        'Gunakan siklus ERL → IRL → ERL untuk membedakan fase koreksi dan fase ekspansi.'
      ],
      invalidRules: [
        'Mempertahankan Dealing Range lama yang batasnya sudah ditembus BOS baru.',
        'Mengejar posisi searah tepat pada batas luar ERL.'
      ],
      xauScenario: {
        context: 'Gold M15 membentuk Dealing Range 2.640 (ERL Bawah) hingga 2.664 (ERL Atas).',
        steps: [
          'Harga terkoreksi dari ERL Atas 2.664 masuk ke IRL di 2.649.',
          'Dari IRL 2.649, harga berekspansi menembus ERL Atas 2.664 ke 2.676; Dealing Range aktif bergeser ke 2.649–2.676.'
        ]
      },
      goldenRules: [
        'Pergerakan harga selalu bergantian antara batas luar (ERL) menuju dalam (IRL), dan dari dalam (IRL) kembali menuju batas luar (ERL).'
      ],
      practiceCta: {
        label: 'Lihat Dealing Range Live di Cockpit Mapping',
        description: 'Amati tampilan Dealing Range aktif dan posisi harga live secara langsung di Chart Gold.',
        href: '../mapping/index.html'
      },
      quiz: [
        {
          question: 'Bagaimana cara mekanis menentukan batas bawah dan batas atas sebuah **Dealing Range Bullish** yang aktif?',
          options: [
            'Mengambil harga pembukaan bulan lalu dan harga penutupan tahun lalu',
            'Dari Strong Low (titik asal dorongan yang menghasilkan BOS Valid) hingga Weak High (puncak gelombang sebelum harga mulai koreksi)',
            'Dari 2 candle M1 acak yang sedang berjalan',
            'Dari garis indikator Bollinger Bands'
          ],
          answerIndex: 1,
          explanation: 'Dealing Range aktif selalu membingkai kaki dorongan sah terakhir: dari Strong Point asal BOS hingga Weak Point ujung gelombang.'
        },
        {
          question: 'Dalam siklus pergerakan ICT, jika harga XAU/USD baru saja bereaksi kuat dari area **IRL** di dalam Dealing Range Bullish, ke mana arah tujuan paling logis selanjutnya?',
          options: [
            'Berhenti bergerak selama seminggu',
            'Menuju batas luar atas (**ERL Atas** / Weak High) di seberang range',
            'Langsung menembus ke bawah nol',
            'Kembali ke harga pembukaan tahun lalu'
          ],
          answerIndex: 1,
          explanation: 'Setelah bereaksi dari IRL di dalam range, harga cenderung melanjutkan fase ekspansi menuju batas luar ERL di seberangnya.'
        },
        {
          question: 'Mengapa mengejar BUY tepat ketika harga baru saja menembus **ERL Atas** setelah lari panjang `$20` berisiko tinggi?',
          options: [
            'Karena setelah mengambil ERL luar, harga cenderung terkoreksi masuk lebih dulu menuju IRL sehingga pembeli di puncak rawan terseret floating minus',
            'Karena tombol BUY dinonaktifkan broker di atas ERL',
            'Karena ERL berarti pasar sedang tutup',
            'Karena spread otomatis berubah menjadi $100 di atas ERL'
          ],
          answerIndex: 0,
          explanation: 'Pasca menyentuh ERL, harga cenderung mengalami fase retrace ke IRL; masuk di puncak ERL menghasilkan titik entry buruk dengan SL lebar.'
        },
        {
          question: 'Kapan sebuah Dealing Range lama dinyatakan tidak relevan dan wajib diperbarui?',
          options: [
            'Setiap 5 menit sekali walaupun harga tidak bergerak',
            'Ketika harga mencetak BOS Valid baru yang menembus batas range lama dan membentuk kaki dorongan baru',
            'Hanya setiap tanggal 1 awal bulan',
            'Tidak pernah diperbarui selamanya'
          ],
          answerIndex: 1,
          explanation: 'Begitu BOS Valid baru terjadi, arena pergerakan aktif telah berpindah ke kaki dorongan terakhir sehingga Dealing Range wajib digeser.'
        }
      ]
    },

    // =========================================================================
    // BAB 11 — PETA LIKUIDITAS GOLD (BSL/SSL, EQH/EQL, PDH/PDL, PWH/PWL, ASIA)
    // =========================================================================
    {
      id: 'bsl-dan-ssl-liquidity',
      number: 11,
      levelId: 1,
      bookFormat: true,
      title: 'Peta Liquidity Gold: BSL/SSL, EQH/EQL, PDH/PDL, PWH/PWL & Asia Range',
      subtitle: 'Definisi teknis Liquidity di mesin bursa, klasifikasi BSL vs SSL dan EQH/EQL, hierarki 5 Liquidity Pool utama XAU/USD (WITA), serta pemisahan status Fresh vs Taken.',
      readMinutes: 11,
      diagramId: 'bsl-ssl-pools',
      diagramAfterSection: 1,
      summary: 'Pahami mekanika Liquidity (Stop Loss sebagai order lawan), perbedaan BSL vs SSL, karakter EQH/EQL, hierarki 5 Liquidity Pool utama XAU/USD (PWH/PWL, PDH/PDL, Asia Range WITA, Session H/L, EQH/EQL), dan status Fresh vs Taken.',
      bookSections: [
        {
          number: '11.1',
          heading: 'Definisi Teknis Liquidity dan Mekanika Stop Loss sebagai Order Lawan',
          paragraphs: [
            '**Liquidity** adalah ketersediaan volume order lawan pada suatu tingkat harga tertentu. Setiap transaksi pembelian mensyaratkan adanya penjual dengan volume setara pada harga yang sama, dan sebaliknya.',
            'Trader ritel dengan ukuran `0.01` hingga `0.10 lot` dapat masuk pasar kapan saja tanpa kesulitan mencari lawan transaksi. Namun, institusi besar (bank, *hedge fund*, dan penyedia likuiditas) yang mengeksekusi ribuan lot membutuhkan area dengan konsentrasi order lawan yang padat agar pesanan mereka terisi tanpa menyebabkan pergeseran harga (*slippage*) yang merugikan.',
            'Secara struktural, konsentrasi order terbesar selalu berkumpul di area **Stop Loss** dan **pending order breakout** trader ritel: 1. **Stop Loss posisi SELL** (di atas puncak/Resistance) secara teknis dieksekusi oleh sistem bursa sebagai **order BUY**. 2. **Stop Loss posisi BUY** (di bawah lembah/Support) secara teknis dieksekusi sebagai **order SELL**. Kumpulan order terpusat pada level-level inilah yang disebut **Liquidity Pool**.'
          ]
        },
        {
          number: '11.2',
          heading: 'Buy-Side Liquidity (BSL), Sell-Side Liquidity (SSL), dan EQH/EQL',
          paragraphs: [
            'Berdasarkan posisi harganya terhadap harga berjalan, Liquidity Pool dibagi menjadi dua sisi utama beserta satu pola konsentrasi ganda yang sangat sering muncul di Gold:'
          ],
          exampleBox: {
            title: 'Klasifikasi Sisi Liquidity Pool pada XAU/USD',
            rows: [
              {
                label: 'BSL (Buy-Side Liquidity)',
                detail: 'Terletak **di atas** Swing High, Resistance, atau puncak sesi lama. Berisi kumpulan **Stop Loss trader SELL** dan **Buy Stop trader breakout**. Harga bergerak ke BSL ketika institusi membutuhkan likuiditas beli untuk mengisi posisi jual besar atau sebagai target kenaikan.'
              },
              {
                label: 'SSL (Sell-Side Liquidity)',
                detail: 'Terletak **di bawah** Swing Low, Support, atau dasar sesi lama. Berisi kumpulan **Stop Loss trader BUY** dan **Sell Stop trader breakout**. Harga bergerak ke SSL ketika institusi membutuhkan likuiditas jual untuk mengisi posisi beli besar atau sebagai target penurunan.'
              },
              {
                label: 'EQH & EQL (Equal Highs / Equal Lows)',
                detail: 'Dua atau lebih puncak sejajar (**EQH**, sering disebut *Double Top* pada analisis klasik) atau dua lembah sejajar (**EQL**, *Double Bottom*). Dalam sudut pandang ICT, level sejajar seperti ini bukan batas tahan yang sulit ditembus, melainkan area penumpukan Stop Loss ganda yang berprobabilitas tinggi untuk di-sweep.'
              }
            ]
          }
        },
        {
          number: '11.3',
          heading: 'Hierarki 5 Liquidity Pool Utama di Pasar Gold (XAU/USD)',
          paragraphs: [
            'Tidak semua puncak dan lembah kecil perlu ditandai di chart. Untuk menjaga analisis tetap bersih dan objektif (sejalan dengan pemetaan pada Cockpit Mapping Amy FX Pro), fokuskan penandaan pada **5 tingkat Liquidity Pool utama** berikut dari skala makro hingga intraday:'
          ],
          table: {
            caption: 'Hierarki 5 Liquidity Pool Utama pada XAU/USD',
            headers: ['Peringkat & Level', 'Definisi Eksak', 'Acuan Waktu (WITA)', 'Peran dalam Analisis'],
            rows: [
              ['1. PWH / PWL', 'Previous Week High / Low (Puncak & Dasar Pekan Lalu)', 'Ditutup Jumat 17:00 NY', 'Target makro utama dan area potensi reversal skala mingguan'],
              ['2. PDH / PDL', 'Previous Day High / Low (Puncak & Dasar Kemarin)', 'Reset harian 17:00 NY (05:00 WITA EDT / 06:00 WITA EST)', 'Target harian paling rutin diburu pada Sesi London dan New York'],
              ['3. Asia High / Low', 'Batas atas & bawah rentang Sesi Asia (`20:00–00:00 NY`)', '**08:00–12:00 WITA** (EDT) / **09:00–13:00 WITA** (EST)', 'Salah satu sisinya paling sering di-sweep saat pembukaan Sesi London'],
              ['4. Session High / Low', 'Puncak & dasar Sesi London (`02:00–05:00 NY`) atau NY AM', 'London: 14:00–17:00 WITA (EDT) / 15:00–18:00 WITA (EST)', 'Target intraday utama saat transisi antara Sesi London dan New York'],
              ['5. EQH / EQL', 'Dua puncak atau lembah sejajar pada M15/H1', 'Dapat terbentuk di semua sesi', 'Target sweep cepat akibat akumulasi Stop Loss ritel ganda']
            ]
          }
        },
        {
          number: '11.4',
          heading: 'Membedakan Status Liquidity Pool: Fresh vs Taken (Swept)',
          paragraphs: [
            'Setiap level Liquidity yang sudah ditandai wajib dipantau statusnya agar target analisis tidak mengarah ke area yang likuiditasnya sudah habis terserap:',
            '1. **Status FRESH (Utuh):** Level belum tersentuh atau ditembus oleh harga hari ini. Kumpulan Stop Loss di balik level tersebut masih utuh sehingga tetap sah dijadikan acuan target atau area pengamatan sweep. 2. **Status TAKEN / SWEPT (Sudah Terambil):** Harga sudah melampaui level tersebut. Contohnya, jika `PDH` kemarin berada di `2.670,00` lalu pada pukul 16:00 WITA harga menyentuh `2.672,50`, maka `PDH 2.670,00` langsung berstatus **TAKEN**. Hapus level tersebut dari daftar target atas yang segar, lalu evaluasi apakah harga akan berbalik turun atau lanjut menuju level fresh berikutnya seperti `PWH`.'
          ],
          callout: {
            tone: 'info',
            title: 'Rutinitas Pemetaan Harian Sebelum Sesi London',
            body: 'Setiap hari sekitar pukul 13:30–14:30 WITA menjelang Sesi London, tandai tiga pasang level utama di chart XAU/USD: **PWH/PWL**, **PDH/PDL**, dan **Asia High/Low**. Tandai langsung setiap level yang berubah status menjadi **TAKEN** agar fokus hanya tertuju pada Liquidity Pool yang masih **FRESH**.'
          }
        }
      ],
      keyTakeaways: [
        '**Liquidity** adalah ketersediaan order lawan pada suatu level harga — terutama terkumpul di area Stop Loss dan pending order breakout ritel.',
        '**BSL** berada di atas puncak (SL posisi SELL + Buy Stop); **SSL** berada di bawah lembah (SL posisi BUY + Sell Stop).',
        '**EQH/EQL** (Double Top/Bottom sejajar) merupakan area konsentrasi Stop Loss ganda yang berprobabilitas tinggi untuk di-sweep.',
        'Petakan 5 Liquidity Pool utama (**PWH/PWL**, **PDH/PDL**, **Asia High/Low**, **Session H/L**, **EQH/EQL**) dan selalu pisahkan status **Fresh** vs **Taken**.'
      ],
      bridgeNext: 'Setelah mampu memetakan seluruh Liquidity Pool utama (`BSL/SSL`, `EQH/EQL`, `PDH/PDL`, `PWH/PWL`, `Asia Range`), pertanyaan kritis berikutnya adalah bagaimana membedakan tembusan level yang akan berbalik arah (**Liquidity Sweep**) dari tembusan yang terus melanjutkan tren (**Liquidity Run**). Pembahasan lengkapnya ada di **Bab 12**.',
      conceptBlocks: [
        {
          heading: 'BSL/SSL, EQH/EQL & 5 Liquidity Pool Utama XAU/USD',
          paragraphs: [
            'BSL menumpuk di atas puncak (SL trader SELL + Buy Stop) dan SSL menumpuk di bawah lembah (SL trader BUY + Sell Stop). EQH/EQL menjadi target sweep prioritas karena menumpuk Stop Loss ganda.',
            'Lima Liquidity Pool utama yang wajib dipetakan adalah PWH/PWL, PDH/PDL, Asia Range (20:00–00:00 NY), Session H/L, dan EQH/EQL dengan selalu memisahkan status Fresh vs Taken.'
          ]
        }
      ],
      mappingSteps: [
        'Tandai PWH/PWL dan PDH/PDL pada timeframe H1/Daily.',
        'Gambar rentang Asia High/Low (08:00–12:00 WITA EDT / 09:00–13:00 WITA EST) serta tandai EQH/EQL jelas di M15.',
        'Beri status TAKEN pada level yang sudah ditembus harga hari ini agar target tetap mengarah ke Liquidity Pool yang masih Fresh.'
      ],
      decisionTree: [
        {
          condition: 'Terdapat dua puncak sejajar (EQH) di M15 tepat di bawah PDH yang masih Fresh.',
          action: 'Perlakukan EQH sebagai area BSL padat; hindari memasang SL SELL terlalu rapat tepat di atasnya.'
        },
        {
          condition: 'Harga live sudah menembus melewati PDH hari ini.',
          action: 'Ubah status PDH menjadi TAKEN; jangan lagi menjadikannya target Buy segar dan evaluasi potensi sweep-reversal atau kelanjutan ke PWH.'
        }
      ],
      failedCase: {
        context: 'Trader melihat pola Double Top (EQH) di 2.665,00, langsung membuka SELL tanpa konfirmasi dan menaruh SL rapat di 2.666,50.',
        whyFailed: 'EQH menyimpan konsentrasi BSL tebal; harga menyapu 2.667,00 untuk menyerap Stop Loss ritel sebelum berbalik turun.'
      },
      validRules: [
        'Selalu pisahkan Liquidity Pool yang masih Fresh dari yang sudah Taken/Swept.',
        'Jadikan Liquidity Pool BSL/SSL yang masih Fresh sebagai acuan target rasional.'
      ],
      invalidRules: [
        'Menganggap Double Top (EQH) atau Double Bottom (EQL) sebagai batas anti-tembus untuk meletakkan SL tipis.',
        'Tetap menjadikan PDH sebagai target Buy segar padahal sudah ditembus sebelumnya.'
      ],
      xauScenario: {
        context: 'Pukul 14:30 WITA (EDT), Gold di 2.651,00 dengan Asia High 2.654,00, Asia Low 2.646,00, dan PDH Fresh di 2.670,00.',
        steps: [
          'Tandai Asia High/Low sebagai Liquidity Pool intraday pertama dan PDH 2.670,00 sebagai target harian utama.',
          'Jika pembukaan London menyapu Asia Low 2.646,00 lalu berbalik naik, target alami mengarah ke Asia High (Fresh) lalu PDH 2.670,00.'
        ]
      },
      goldenRules: [
        'Harga bergerak dari satu Liquidity Pool ke Liquidity Pool berikutnya — kenali lokasi konsentrasi Stop Loss sebelum menentukan posisi SL dan TP.'
      ],
      practiceCta: {
        label: 'Amati PDH/PDL & Asia High/Low di Chart Gold',
        description: 'Lihat garis PWH/PWL, PDH/PDL, dan Asia Range yang terpetakan otomatis pada Cockpit Mapping.',
        href: '../mapping/index.html'
      },
      quiz: [
        {
          question: 'Secara mekanis di sistem bursa, mengapa kumpulan Stop Loss milik para trader **BUY** di bawah sebuah Swing Low disebut **Sell-Side Liquidity (SSL)**?',
          options: [
            'Karena hanya berlaku pada sesi Asia',
            'Karena ketika Stop Loss posisi BUY tersentuh, perintah yang tereksekusi adalah order **SELL** — menjadi pasokan jual bagi institusi yang ingin membeli dalam volume besar',
            'Karena semua trader BUY wajib menutup akunnya',
            'Karena SSL selalu berada di atas puncak tertinggi tahunan'
          ],
          answerIndex: 1,
          explanation: 'Menutup posisi BUY secara otomatis mengeksekusi order SELL. Kumpulan Stop Loss BUY di bawah lembah membentuk Liquidity Pool pesanan jual (SSL).'
        },
        {
          question: 'Dalam kerangka ICT, bagaimana seharusnya trader memperlakukan dua puncak yang sejajar (**Equal Highs / EQH**) pada chart Gold?',
          options: [
            'Sebagai batas tahan yang mustahil ditembus sehingga aman menaruh SL SELL $0,50 di atasnya',
            'Sebagai area konsentrasi BSL padat yang berprobabilitas tinggi untuk di-sweep guna menyerap tumpukan Stop Loss ritel',
            'Sebagai tanda pasar akhir pekan',
            'Sebagai garis batas margin call'
          ],
          answerIndex: 1,
          explanation: 'EQH/EQL menarik banyak trader ritel memasang SL rapat tepat di baliknya, sehingga menjadi salah satu target sweep utama algoritma.'
        },
        {
          question: 'Jam berapakah rentang baku **Asia Range (`20:00–00:00 NY`)** jika dikonversi ke waktu **WITA**?',
          options: [
            '00:00–04:00 WITA sepanjang tahun',
            '**08:00–12:00 WITA** saat Musim Panas (EDT, +12 jam) dan **09:00–13:00 WITA** saat Musim Dingin (EST, +13 jam)',
            '19:00–23:00 WITA sepanjang tahun',
            '14:00–18:00 WITA setiap hari Jumat saja'
          ],
          answerIndex: 1,
          explanation: 'Pada waktu WITA (UTC+8): saat EDT (+12 jam) 20:00–00:00 NY = 08:00–12:00 WITA; saat EST (+13 jam) = 09:00–13:00 WITA.'
        },
        {
          question: 'PDH kemarin berada di `2.670,00`. Pada pukul 15:30 WITA hari ini, harga Gold sudah sempat naik ke `2.673,00` lalu turun ke `2.668,00`. Bagaimana status level `PDH 2.670,00` sekarang?',
          options: [
            'Masih Fresh dan menjadi target BUY paling segar',
            'Sudah **TAKEN / SWEPT** — Liquidity Pool di atas PDH sudah terambil sehingga tidak lagi diperlakukan sebagai target segar',
            'Otomatis berubah menjadi PWL',
            'Tidak valid karena terjadi pada hari kerja'
          ],
          answerIndex: 1,
          explanation: 'Begitu harga melampaui PDH, likuiditas di atasnya sudah terambil (TAKEN/SWEPT). Evaluasi arah selanjutnya alih-alih tetap menargetkan level tersebut.'
        }
      ]
    },

    // =========================================================================
    // BAB 12 — LIQUIDITY SWEEP (PURGE & REVERT) VS LIQUIDITY RUN (EXPANSION)
    // =========================================================================
    {
      id: 'inducement-idm-umpan-ritel',
      number: 12,
      levelId: 1,
      bookFormat: true,
      title: 'Liquidity Sweep vs Liquidity Run: Stop Hunt, Purge & Revert vs Ekspansi',
      subtitle: 'Empat parameter objektif ICT untuk membedakan tembusan Liquidity Pool yang akan berbalik arah (Purge & Revert) dari tembusan yang terus melanjutkan ekspansi (Liquidity Run).',
      readMinutes: 11,
      diagramId: 'inducement-trap',
      diagramAfterSection: 1,
      summary: 'Pahami perbedaan mekanis ICT antara Liquidity Sweep (Stop Hunt / Purge & Revert) dan Liquidity Run (Expansion), 4 parameter objektif (Konteks HTF & DOL, Body Close vs Wick, Aftermath 1–3 Candle, dan Waktu Killzone), studi kasus komparatif XAU/USD, serta protokol observasi reaksi.',
      bookSections: [
        {
          number: '12.1',
          heading: 'Dua Fungsi Penembusan Level Liquidity: Sweep vs Liquidity Run',
          shortTitle: 'Sweep vs Liquidity Run',
          paragraphs: [
            'Setelah memetakan 5 Liquidity Pool utama di Bab 11 (`PWH/PWL`, `PDH/PDL`, `Asia High/Low`, `Session H/L`, dan `EQH/EQL`), tantangan paling menentukan di chart live adalah membaca kelanjutan saat salah satu level tersebut ditembus: apakah harga akan berbalik arah atau terus melanjutkan ekspansi?',
            'Dalam kerangka murni ICT, setiap penembusan Old High (`BSL`) atau Old Low (`SSL`) menjalankan satu dari dua fungsi algoritma berikut: 1. **Liquidity Sweep (Stop Hunt / Purge & Revert):** Harga didorong melewati level Liquidity semata untuk menyerap Stop Loss dan order breakout, lalu segera ditarik kembali ke dalam range dan berbalik menuju Liquidity Pool di sisi berlawanan. 2. **Liquidity Run (Expansion / Continuation):** Harga menembus level Liquidity bukan untuk berbalik, melainkan karena struktur HTF dan target utama (*Draw on Liquidity / DOL*) masih berada lebih jauh di arah yang sama. Level pertama yang ditembus hanya menjadi titik lintasan menuju target berikutnya (misalnya menembus Asia High lalu langsung melaju menuju PDH dan PWH).',
            'Menganggap seluruh penembusan Liquidity Pool otomatis berakhir reversal menyebabkan trader sering melawan **Liquidity Run** pada hari ekspansi kuat. Sebaliknya, mengejar setiap breakout tanpa verifikasi membuat trader terjebak pada ujung **Liquidity Sweep**.'
          ]
        },
        {
          number: '12.2',
          heading: '4 Parameter Objektif ICT Membedakan Liquidity Sweep vs Liquidity Run',
          shortTitle: '4 Parameter Objektif ICT',
          paragraphs: [
            'Evaluasi setiap penembusan Liquidity Pool secara berurutan menggunakan **4 parameter objektif** berikut langsung pada candlestick polos:'
          ],
          table: {
            caption: 'Matriks Evaluasi ICT: Liquidity Sweep (Purge & Revert) vs Liquidity Run (Expansion)',
            headers: ['Parameter Uji', 'Liquidity Sweep (Purge & Revert)', 'Liquidity Run (Expansion)', 'Implikasi Eksekusi'],
            rows: [
              [
                '**1. Konteks HTF & DOL**',
                'Tembusan terjadi **melawan** HTF Bias / berada di sisi Discount (saat HTF Bullish) atau Premium (saat HTF Bearish), atau menyentuh HTF PD Array (FVG/OB H1–H4)',
                'Tembusan terjadi **searah** HTF Bias menuju target DOL yang lebih besar dan masih Fresh (mis. menembus Asia High menuju PDH/PWH pada hari Bullish)',
                'Hindari melawan arah Liquidity Run yang masih memiliki ruang lebar menuju DOL HTF'
              ],
              [
                '**2. Body Close vs Wick**',
                'Candle M15/H1 menusuk melewati level dengan **Wick panjang**, lalu **Body Close kembali di dalam range** (*Bodies tell the story, wicks do the damage*)',
                'Candle M15/H1 mencetak **Body Close penuh dan solid di luar level** dengan wick penolakan sangat kecil',
                'Wick-only rejection adalah sinyal awal Sweep; Body Close solid di luar level menunjukkan penerimaan (*acceptance*)'
              ],
              [
                '**3. Reaksi 1–3 Candle Berikutnya (Aftermath)**',
                'Dalam 1–3 candle M5/M15 langsung muncul **Displacement berlawanan**, meninggalkan **FVG lawan**, dan mematahkan struktur internal (**CISD / MSS**) atau menginversi FVG terakhir (**iFVG**)',
                'Harga bertahan (*hold*) di luar level, koreksi dangkal hanya mengisi FVG searah tembusan, lalu mencetak ekstensi baru tanpa mematahkan swing lawan',
                '**Kunci keputusan utama:** tunggu bukti 1–3 candle aftermath, bukan menebak pada detik sentuhan pertama'
              ],
              [
                '**4. Waktu & Sesi (Killzone)**',
                'Terjadi pada pembukaan **London Killzone** (`14:00–17:00 WITA` EDT) atau **NY AM Killzone** (`19:00–22:00 WITA` EDT) / jendela **Macro 20 menit** sebagai *Judas Swing*',
                'Terjadi pada fase **Distribution** setelah sisi berlawanan sudah lebih dulu di-sweep di awal sesi',
                'Jika sisi bawah (SSL) sudah di-sweep pada awal sesi, tembusan sisi atas (BSL) setelahnya lebih condong menjadi Liquidity Run'
              ]
            ]
          },
          paragraphsAfter: [
            'Perhatikan parameter ke-3 (**Reaksi 1–3 Candle Aftermath**). Apabila satu candle M15 sempat menutup body tipis di luar Asia Low, namun 1–2 candle berikutnya langsung berbalik naik dengan Displacement kuat dan menutup di atas candle turun terakhir (*CISD*), penembusan tersebut tetap terkonfirmasi sebagai **Stop Hunt / Purge & Revert**. Sebaliknya, tanpa adanya Displacement balik, jangan memaksakan skenario pembalikan arah.'
          ]
        },
        {
          number: '12.3',
          heading: 'Studi Kasus Komparatif XAU/USD: Sweep di Asia Low vs Liquidity Run di Asia High',
          shortTitle: 'Studi Kasus Sweep vs Run',
          paragraphs: [
            'Bandingkan dua penembusan Liquidity yang terjadi pada hari yang sama di chart M15/M5 XAU/USD berikut:'
          ],
          exampleBox: {
            title: 'Satu Hari Trading XAU/USD (Daily Bias: BULLISH · DOL: PDH 2.670,00)',
            rows: [
              {
                label: 'Kejadian A — 14:35 WITA (London Open) · Asia Low 2.646,00 Ditembus',
                detail: 'Harga turun menyentuh `2.643,20` (melewati Asia Low `2.646,00` sebesar `$2,80`) masuk ke H1 Discount FVG. Candle M15 tutup di `2.647,40` (**Body Close kembali di atas Asia Low** dengan wick bawah panjang). Dua candle M5 berikutnya mencetak Displacement naik meninggalkan Bullish FVG dan mematahkan swing turun terakhir (MSS). **Kesimpulan:** 4 dari 4 parameter terpenuhi → **Liquidity Sweep (Purge & Revert) valid** untuk mencari BUY.'
              },
              {
                label: 'Kejadian B — 15:45 WITA (London Expansion) · Asia High 2.654,00 Ditembus',
                detail: 'Harga menembus Asia High `2.654,00`. Empat fakta objektif menunjukkan: (1) Daily Bias sedang **Bullish** dengan DOL masih jauh di PDH `2.670,00`, (2) SSL Asia Low sudah selesai di-sweep 1 jam sebelumnya, (3) M15 menutup **Body Close penuh di `2.657,80`** tanpa wick penolakan, dan (4) 3 candle berikutnya hanya koreksi tipis ke `2.655,50` lalu melanjutkan kenaikan ke `2.669,50`. **Kesimpulan:** Ini adalah **Liquidity Run (Expansion)** — melawan arus dengan SELL di sini memiliki risiko kegagalan sangat tinggi.'
              },
              {
                label: 'Kesimpulan Teknis Kejadian A & B',
                detail: 'Penembusan level yang **melawan Bias pada awal sesi** (Asia Low saat hari Bullish) adalah kandidat kuat **Liquidity Sweep (Purge & Revert)**. Penembusan level **searah Bias menuju DOL yang lebih jauh** (Asia High menuju PDH) adalah **Liquidity Run** — perlakukan sebagai target profit (TP1) atau kelanjutan tren, bukan area counter-trend.'
              }
            ]
          }
        },
        {
          number: '12.4',
          heading: 'Protokol Observasi Reaksi di Level Liquidity',
          shortTitle: 'Protokol Observasi Reaksi',
          paragraphs: [
            'Aturan baku saat harga mencapai level Liquidity (`PDH/PDL`, `Asia H/L`, `EQH/EQL`): **perlakukan level tersebut sebagai area observasi reaksi, bukan tombol eksekusi refleks pada detik sentuhan pertama.**',
            'Sebelum mengeksekusi posisi pembalikan arah pasca-penembusan level, pastikan dua syarat minimum terpenuhi: 1. **Konteks mendukung:** Penembusan terjadi melawan HTF Bias atau tepat menyentuh HTF POI / batas Dealing Range. 2. **Konfirmasi perpindahan kendali:** Muncul **Displacement balik + CISD / MSS** pada timeframe eksekusi, bukan sekadar satu wick tipis di tengah tren kuat.',
            'Dengan selesainya Bab 12, seluruh materi **Bagian II: Struktur Pasar & Peta Liquidity** telah lengkap: struktur mekanis 3-candle (Bab 07), integrasi Top-Down `H4/H1 → M15 → M5` (Bab 08), pembedaan `BOS Valid vs Sweep` (Bab 09), bingkai `Dealing Range ERL ↔ IRL` (Bab 10), pemetaan 5 Liquidity Pool utama (Bab 11), serta klasifikasi objektif **Liquidity Sweep vs Liquidity Run** (Bab 12).'
          ],
          callout: {
            tone: 'info',
            title: 'Lanjutan ke Bagian III: Kompas Arah dan Waktu Institusional',
            body: 'Parameter #1 pembeda **Liquidity Sweep** dari **Liquidity Run** adalah **Draw on Liquidity (DOL) & Daily Bias**, sedangkan Parameter #4 adalah **Waktu Sesi (Killzone & Macro)**. Kedua pilar tersebut akan dibahas berurutan pada **Bagian III (Bab 13–17)**.'
          }
        }
      ],
      keyTakeaways: [
        'Tidak semua penembusan Liquidity Pool berakhir reversal: dalam ICT murni, penembusan terbagi dua fungsi — **Liquidity Sweep (Stop Hunt / Purge & Revert)** vs **Liquidity Run (Expansion)**.',
        'Uji setiap penembusan dengan **4 Parameter Objektif**: (1) keselarasan HTF Bias & ruang menuju DOL, (2) **Body Close vs Wick Rejection**, (3) **Aftermath 1–3 candle** (Displacement balik + CISD/MSS vs acceptance), dan (4) waktu sesi (Killzone / Macro).',
        'Penembusan level yang **berlawanan dengan HTF Bias di awal sesi** (mis. Asia Low pada hari Bullish) condong menjadi **Purge & Revert**; penembusan level **searah HTF Bias menuju DOL jauh** condong menjadi **Liquidity Run**.',
        'Hindari entry counter-trend pada detik pertama level disentuh: tunggu konfirmasi **Displacement balik + CISD/MSS** agar tidak melawan Liquidity Run.'
      ],
      bridgeNext: 'Seluruh fondasi **Bagian II (Bab 07–12)** telah tuntas. Di **Bagian III: Kompas Arah**, kita langsung membedah Parameter #1 penentu arah harian: **Bab 13 — Draw on Liquidity (DOL) Tuntas: Cara Menemukan Magnet Harga Langkah demi Langkah**.',
      conceptBlocks: [
        {
          heading: 'Mekanisme Murni ICT: Liquidity Sweep (Purge & Revert) vs Liquidity Run (Expansion)',
          paragraphs: [
            'Liquidity Sweep (Stop Hunt / Purge & Revert) menembus level BSL/SSL untuk menyerap likuiditas lalu segera berbalik dengan Displacement + CISD/MSS menuju sisi lawan.',
            'Liquidity Run menembus level searah HTF Bias dan bertahan di luar level (acceptance) karena Draw on Liquidity (DOL) utama masih berada lebih jauh di arah yang sama.'
          ]
        }
      ],
      mappingSteps: [
        'Sebelum level disentuh, catat apakah level tersebut berlawanan dengan HTF Bias (kandidat Purge & Revert) atau searah menuju DOL lebih jauh (kandidat Liquidity Run).',
        'Saat harga menembus level (Asia H/L, PDH/PDL, EQH/EQL), amati penutupan candle M15/H1: Wick-only rejection kembali ke range vs Body Close penuh di luar level.',
        'Tunggu 1–3 candle aftermath di M5: hanya eksekusi pembalikan arah jika muncul Displacement balik + CISD/MSS (atau iFVG); jika harga bertahan di luar level, perlakukan sebagai Liquidity Run.'
      ],
      decisionTree: [
        {
          condition: 'Daily & H1 Bullish menuju PDH, lalu London Open menembus Asia Low hanya dengan wick dan M5 langsung mencetak Displacement naik + CISD.',
          action: 'Terverifikasi sebagai Liquidity Sweep (Purge & Revert) — valid mencari setup BUY menuju Asia High dan PDH.'
        },
        {
          condition: 'Daily & H1 Bullish menuju PDH (masih $15 di atas), lalu Asia High ditembus oleh Body Close M15 penuh tanpa penolakan.',
          action: 'Liquidity Run (Expansion) searah tren — hindari melawan arah dengan SELL; tunggu pullback searah atau jadikan Asia High sebagai TP1.'
        }
      ],
      failedCase: {
        context: 'Pada hari Bullish (DOL PDH 2.670) setelah Asia Low sudah di-sweep, trader langsung SELL saat harga menembus Asia High 2.654 hanya karena level BSL disentuh.',
        whyFailed: 'Gagal membedakan Sweep vs Liquidity Run: tidak ada wick rejection, tidak ada CISD/MSS turun, dan DOL utama masih $16 lebih tinggi di PDH 2.670.'
      },
      validRules: [
        'Selalu kombinasikan 4 parameter: konteks HTF/DOL, Body Close vs Wick, aftermath 1–3 candle (CISD/MSS), dan jendela Killzone.',
        'Perlakukan level Liquidity sebagai area observasi reaksi, bukan tombol eksekusi refleks tanpa konfirmasi.'
      ],
      invalidRules: [
        'Menganggap setiap penembusan Old High / Old Low pasti langsung berbalik arah (counter-trend tanpa konfirmasi di tengah Liquidity Run).',
        'Masuk posisi reversal sebelum ada bukti Displacement balik dan CISD/MSS pada timeframe eksekusi.'
      ],
      xauScenario: {
        context: 'XAU/USD Daily Bullish (DOL PDH 2.670), Asia Range 2.646–2.654. Pukul 14:35 WITA London Open menyapu 2.643,20 lalu close balik di 2.647,40.',
        steps: [
          'Konfirmasi Asia Low 2.646 sebagai Liquidity Sweep setelah M5 mencetak Displacement naik + MSS (cari Buy menuju Asia High & PDH).',
          'Saat Asia High 2.654 ditembus Body Close penuh pukul 15:45 WITA, kenali sebagai Liquidity Run menuju PDH 2.670 dan hindari Sell melawan tren.'
        ]
      },
      goldenRules: [
        'Penembusan melawan HTF Bias + Wick Rejection + CISD balik = Liquidity Sweep (Purge & Revert); penembusan searah HTF Bias + Body Close acceptance menuju DOL jauh = Liquidity Run.'
      ],
      practiceCta: {
        label: 'Latih Deteksi Stop Hunt & Sweep di 100 Kasus',
        description: 'Uji ketepatan membedakan Liquidity Sweep (Purge & Revert) valid dari jebakan penembusan dan Liquidity Run pada kasus XAU/USD.',
        href: 'trading-practice/index.html'
      },
      quiz: [
        {
          question: 'Pada hari dengan Daily & H1 **Bullish** (DOL masih jauh di `PDH 2.670`), harga baru saja selesai sweep Asia Low pukul `14:35 WITA`, lalu pukul `15:45 WITA` menembus **Asia High `2.654`** dengan **Body Close M15 penuh** di `2.657,80` tanpa wick penolakan. Secara mekanis ICT, penembusan Asia High ini paling tepat dibaca sebagai...',
          options: [
            'Sinyal wajib langsung SELL counter-trend karena BSL Asia High sudah tersentuh',
            '**Liquidity Run (Expansion)** searah HTF Bias menuju DOL PDH `2.670` — bukan area melawan tren',
            'Tanda pasar memasuki sesi akhir pekan',
            'Bukti bahwa Daily Bias otomatis berubah menjadi Bearish'
          ],
          answerIndex: 1,
          explanation: 'Karena penembusan searah HTF Bias menuju DOL PDH yang masih jauh, SSL bawah sudah terambil, dan M15 menutup body penuh di luar level, itu adalah Liquidity Run (Expansion).'
        },
        {
          question: 'Manakah kombinasi bukti **aftermath 1–3 candle** yang paling kuat mengonfirmasi bahwa penembusan di bawah `PDL / Asia Low` adalah **Liquidity Sweep (Purge & Revert)** dan bukan awal Liquidity Run turun?',
          options: [
            'Harga terus bertahan di bawah level selama 6 candle dengan body merah penuh',
            'Candle segera kembali masuk ke dalam range diikuti **Displacement naik** yang meninggalkan **Bullish FVG** dan mematahkan struktur internal (**CISD / MSS**)',
            'Spread melebar selama 2 menit di tengah jam sepi Asia',
            'Muncul 1 candle doji kecil tanpa ada perubahan struktur sama sekali'
          ],
          answerIndex: 1,
          explanation: 'Konfirmasi objektif Purge & Revert adalah perpindahan kendali nyata: harga kembali masuk range disertai Displacement berlawanan, FVG baru, dan patah struktur internal (CISD/MSS).'
        },
        {
          question: 'Dalam ajaran murni ICT, apa makna praktis prinsip **"Bodies tell the story, wicks do the damage"** saat mengevaluasi penembusan sebuah Liquidity Pool (`PDH/PDL` atau `Asia H/L`)?',
          options: [
            'Wick panjang di luar level tidak boleh dilihat di chart',
            'Menusuk level hanya dengan **wick** lalu **Body Close kembali di dalam range** menandakan penyerapan Liquidity (*Stop Hunt / Sweep*), sedangkan **Body Close tebal di luar level** menandakan penerimaan (*acceptance / Liquidity Run*)',
            'Semua candle yang memiliki wick wajib diabaikan saat menentukan tren',
            'Body candle hanya berlaku pada timeframe M1, bukan M15 atau H1'
          ],
          answerIndex: 1,
          explanation: 'Wick di luar level menunjukkan pengambilan Liquidity/Stop Loss (*damage*), sementara posisi Body Close menunjukkan ke mana harga sebenarnya diterima (*the story*).'
        },
        {
          question: 'Harga XAU/USD baru saja menyentuh `PDH 2.670,00` pada pukul `20:55 WITA` (NY AM Macro). Belum ada candle yang selesai close. Tindakan paling disiplin sesuai protokol ICT adalah...',
          options: [
            'Langsung klik SELL Market detik itu juga agar mendapat harga puncak tertinggi',
            'Langsung klik BUY Breakout tanpa melihat Daily Bias',
            'Menjadikan `PDH 2.670,00` sebagai **area observasi** — tunggu penutupan candle dan bukti 1–3 candle aftermath (Body Close vs Wick + CISD/MSS) sebelum menyimpulkan Sweep atau Liquidity Run',
            'Melepas Stop Loss agar posisi tahan ke dua arah'
          ],
          answerIndex: 2,
          explanation: 'Level Liquidity adalah titik pengamatan reaksi, bukan tombol eksekusi refleks. Menunggu candle close dan konfirmasi aftermath mencegah melawan Liquidity Run.'
        }
      ]
    },

    // =========================================================================
    // BAB 13 (BAGIAN III) — DRAW ON LIQUIDITY (DOL)
    // =========================================================================
    {
      id: 'level-likuiditas-kunci-xauusd',
      number: 13,
      levelId: 2,
      bookFormat: true,
      title: 'Draw on Liquidity (DOL): Cara Menentukan Tujuan Utama Pergerakan Harga',
      subtitle: 'Di atas harga terdapat Liquidity Pool BSL dan di bawah harga terdapat Liquidity Pool SSL. Bab ini membahas protokol objektif untuk menentukan satu target tujuan utama (DOL) tanpa menebak.',
      readMinutes: 10,
      diagramId: 'key-liquidity-levels',
      diagramAfterSection: 1,
      summary: 'Definisi Draw on Liquidity (DOL), dua target pergerakan harga dalam ICT (External Liquidity vs Internal Imbalance), protokol 4 langkah menentukan DOL, penanganan kondisi tengah range, dan studi kasus XAU/USD.',
      bookSections: [
        {
          number: '13.1',
          heading: 'Pengertian Draw on Liquidity (DOL) dan Dua Target Pergerakan Harga',
          paragraphs: [
            'Pada Bab 11, kamu sudah memetakan lokasi Liquidity Pool utama seperti `PWH/PWL`, `PDH/PDL`, `Asia High/Low`, serta `EQH/EQL`. Persoalan berikutnya yang paling sering muncul adalah: ketika di atas harga ada `BSL` dan di bawah harga ada `SSL`, bagaimana cara mengetahui sisi mana yang sedang dituju harga lebih dulu?',
            'Dalam metodologi ICT, konsep untuk menjawab pertanyaan tersebut adalah **Draw on Liquidity (DOL)**. Istilah *Draw* berarti tarikan atau tujuan. **Draw on Liquidity adalah level harga spesifik yang sedang menjadi target utama pergerakan pasar pada sesi atau hari tersebut.**',
            'Dalam kerangka ICT, pergerakan harga pada setiap timeframe hanya bergerak menuju salah satu dari **dua jenis target berikut**:',
            '1. **External Range Liquidity (ERL / Liquidity Pool Eksternal):** Harga bergerak menuju tumpukan order di luar range, seperti `Old High`, `EQH`, `PDH`, `PWH` (`BSL`) atau `Old Low`, `EQL`, `PDL`, `PWL` (`SSL`) yang berstatus masih **Fresh** (belum ditembus).',
            '2. **Internal Range Liquidity (IRL / Area Imbalance Internal):** Harga bergerak masuk kembali ke dalam *Dealing Range* untuk mengisi celah ketidakseimbangan harga (*Imbalance / Fair Value Gap* pada timeframe H1 atau H4) sebelum melanjutkan pergerakan ke Liquidity eksternal.'
          ]
        },
        {
          number: '13.2',
          heading: 'Protokol 4 Langkah Menentukan DOL di XAU/USD',
          paragraphs: [
            'Penentuan DOL tidak dilakukan berdasarkan perkiraan subjektif mengenai harga sudah terlalu tinggi atau terlalu rendah. Gunakan **4 langkah berurutan** berikut sebelum menyusun rencana transaksi pada sesi London atau New York:'
          ],
          table: {
            caption: 'Protokol 4 Langkah Menentukan Draw on Liquidity (DOL)',
            headers: ['Langkah', 'Pertanyaan Kunci di Chart', 'Fakta Harga yang Diamati', 'Keputusan yang Dihasilkan'],
            rows: [
              ['1. Cek Origin (Titik Asal Reaksi)', 'Liquidity Pool atau zona mana yang baru saja di-sweep atau menolak harga?', 'Harga baru saja melakukan sweep pada `SSL` (`PDL` atau `Asia Low`) lalu ditutup kembali ke dalam range', 'Target DOL aktif berpindah ke sisi berlawanan (**atas / BSL**)'],
              ['2. Cek Keselarasan HTF (H4 & H1)', 'Apakah arah struktur timeframe besar mendukung arah reaksi tersebut?', 'Struktur H1 membentuk `HH–HL` (Bullish) dan reaksi terjadi di atas Strong Low', 'Target ke atas (**BSL**) searah dengan arus utama pasar'],
              ['3. Pilih Target Terdekat yang Fresh', 'Liquidity Pool mana di arah tujuan yang masih bersih dan belum berstatus `TAKEN`?', 'Urutan prioritas intraday: `Asia H/L` → `Session H/L` → `EQH/EQL` → `PDH/PDL` → `PWH/PWL`', 'Tetapkan **DOL 1** (target terdekat / TP1) dan **DOL 2** (target utama / TP2)'],
              ['4. Tetapkan Batas Invalidasi', 'Apakah jarak menuju DOL memadai dan di mana titik batal skenario?', 'Pastikan jarak ke DOL memberi ruang risiko-imbalan minimal `1:2` dan tandai titik ekstrem Origin', 'Jika candle timeframe kerja **body close** menembus titik Origin → DOL lama dinyatakan **BATAL**']
            ]
          },
          paragraphsAfter: [
            'Langkah 1 (**Origin**) merupakan dasar dari tiga langkah lainnya. Dalam siklus pengiriman harga ICT, pergerakan menuju satu sisi Liquidity umumnya dimulai setelah sisi Liquidity lawannya atau area Imbalance HTF disentuh lebih dulu. Tanpa mengetahui titik **Origin** yang baru bereaksi, penentuan **DOL** tidak memiliki dasar objektif.'
          ]
        },
        {
          number: '13.3',
          heading: 'Penanganan Kondisi Harga di Tengah Range (Wait for First Sweep)',
          paragraphs: [
            'Salah satu kondisi yang sering memicu kesalahan analisis adalah saat harga XAU/USD berada tepat di tengah rentang harian (sekitar 50% antara `PDH` dan `PDL`), sementara `Asia High` maupun `Asia Low` sama-sama belum di-sweep.',
            'Pada posisi tersebut, **Origin belum terbentuk sehingga DOL belum terkonfirmasi**. Memilih arah beli atau jual di tengah range sama dengan menebak tanpa keunggulan probabilitas.',
            'Aturan bakunya adalah **Wait for First Sweep (Tunggu Sweep Pertama)**: biarkan pembukaan sesi London atau New York mengambil salah satu ujung kotak terlebih dahulu.',
            '1. Jika harga turun lebih dulu melakukan sweep `Asia Low` atau `PDL`, lalu ditutup kembali ke dalam range dengan penolakan yang jelas, maka **Origin berada di bawah** dan **DOL terkunci ke atas (`Asia High` → `PDH`)**.',
            '2. Jika harga naik lebih dulu melakukan sweep `Asia High` atau `PDH`, lalu ditutup kembali di bawahnya, maka **Origin berada di atas** dan **DOL terkunci ke bawah (`Asia Low` → `PDL`)**.'
          ],
          callout: {
            tone: 'warn',
            title: 'Kesalahan Umum dalam Memilih Target DOL',
            body: 'Hindari menetapkan target yang terlalu jauh bagi gaya intraday (misalnya menargetkan `PWH` berjarak `$65` saat masih ada `EQH` dan `PDH` berjarak `$14` di depan harga). Selain itu, jangan lagi memakai level yang sudah berstatus **TAKEN** sebagai DOL utama — alihkan target ke Liquidity Pool **Fresh** berikutnya.'
          }
        },
        {
          number: '13.4',
          heading: 'Studi Kasus XAU/USD: Menentukan DOL 2 Tahap dari Chart Kosong',
          paragraphs: [
            'Berikut penerapan 4 langkah penentuan DOL pada skenario nyata XAU/USD menjelang pembukaan sesi London (waktu WITA Musim Panas / EDT):'
          ],
          exampleBox: {
            title: 'Studi Kasus Penentuan DOL 2 Tahap pada XAU/USD',
            rows: [
              {
                label: 'Kondisi Awal (14:45 WITA)',
                detail: 'Struktur `H1` Bullish (`HH–HL`, Strong Low di `2.636,00`). `PDH` Fresh di `2.672,00` dan `PDL` Fresh di `2.638,00`. Kotak Asia berada di `2.646,00` (`Asia Low`) hingga `2.654,00` (`Asia High`). Harga berada di tengah kotak pada `2.650,00` — status masih menunggu sweep pertama.'
              },
              {
                label: 'Terbentuknya Origin (15:15 WITA)',
                detail: 'Saat sesi London aktif, XAU/USD turun cepat ke `2.643,50` melakukan sweep `Asia Low 2.646,00` dengan wick panjang, lalu candle M15 ditutup kembali di atas `2.647,50`. Sweep valid dan **Origin bawah** resmi terbentuk.'
              },
              {
                label: 'Penetapan DOL 1 dan DOL 2',
                detail: '**DOL 1 (Target Terdekat / TP1):** `Asia High 2.654,00` (Fresh, jarak `+$6,50`). **DOL 2 (Target Utama / TP2):** `PDH 2.672,00` (Fresh, searah dengan tren Bullish H1).'
              },
              {
                label: 'Batas Invalidasi DOL',
                detail: 'Skenario DOL ke atas dinyatakan **batal** apabila candle M15 atau H1 berbalik dan menutup **body** di bawah `2.643,50` (titik terendah sweep). Jika itu terjadi, arah DOL berpindah ke `PDL 2.638,00`.'
              }
            ]
          }
        }
      ],
      keyTakeaways: [
        '**Draw on Liquidity (DOL)** adalah target spesifik yang sedang dituju pasar: **External Range Liquidity (BSL/SSL Fresh)** atau **Internal Range Liquidity (Imbalance/FVG HTF)**.',
        'Tentukan DOL secara objektif lewat **4 langkah**: identifikasi **Origin** (level yang baru di-sweep), konfirmasi arah **HTF**, pilih target **Fresh** terdekat (**DOL 1 & DOL 2**), dan tetapkan **batas invalidasi**.',
        'Ketika harga berada di tengah range tanpa sweep Origin, terapkan aturan **Wait for First Sweep** daripada menebak arah.',
        'Setelah target DOL utama tercapai dan berstatus `TAKEN`, hindari mengejar lanjutan harga tanpa struktur dan target baru yang jelas.'
      ],
      bridgeNext: 'Setelah memahami cara menentukan target tujuan harga (**Draw on Liquidity**), langkah berikutnya adalah menggabungkannya dengan struktur penutupan candle harian agar arah prioritas setiap hari dapat disusun secara cepat dan terukur. Materi tersebut dibahas pada **Bab 14: Menentukan Daily Bias dan Membaca Arah Candle Harian (Next-Day Expansion)**.',
      conceptBlocks: [
        {
          heading: 'Protokol 4 Langkah Menentukan Draw on Liquidity (DOL)',
          paragraphs: [
            'Draw on Liquidity adalah satu target utama (External BSL/SSL Fresh atau Internal Imbalance HTF) yang menjadi tujuan pergerakan harga.',
            'Tentukan DOL melalui 4 langkah: identifikasi Origin sweep/pantulan terbaru, cek keselarasan HTF, tetapkan target Fresh terdekat (DOL 1 & DOL 2), serta pasang batas invalidasi jika titik Origin ditembus body close.'
          ]
        }
      ],
      mappingSteps: [
        'Identifikasi Origin terbaru: Liquidity Pool atau zona Imbalance HTF mana yang baru saja di-sweep atau menolak harga.',
        'Pastikan arah pantulan dari Origin tersebut selaras dengan struktur H4/H1.',
        'Tetapkan DOL 1 (target intraday terdekat yang Fresh seperti Asia H/L atau EQH/EQL), DOL 2 (target harian seperti PDH/PDL), serta batas invalidasinya.'
      ],
      decisionTree: [
        {
          condition: 'Harga berada di tengah (50%) antara PDH dan PDL serta belum melakukan sweep Asia High maupun Asia Low.',
          action: 'Jangan menebak arah DOL. Terapkan Wait for First Sweep hingga salah satu ujung kotak Asia di-sweep lebih dulu.'
        },
        {
          condition: 'Harga baru saja sweep Asia Low dengan penolakan tegas sementara struktur H1 Bullish dan PDH masih Fresh.',
          action: 'Tetapkan DOL ke atas: Asia High sebagai DOL 1 (TP1) dan PDH sebagai DOL 2 (TP2), dengan batas invalidasi di bawah ujung sweep.'
        }
      ],
      failedCase: {
        context: 'Trader memilih PDH sebagai target DOL Buy padahal harga baru saja sweep PDH 30 menit sebelumnya dan ditutup kembali di bawahnya dengan wick panjang.',
        whyFailed: 'PDH sudah berubah status menjadi TAKEN sekaligus berfungsi sebagai Origin sweep atas, sehingga arah DOL justru berpotensi berpindah ke bawah.'
      },
      validRules: [
        'Selalu hubungkan Origin (sisi yang baru di-sweep) dengan DOL (Liquidity Pool Fresh di sisi berlawanan).',
        'Pisahkan DOL 1 (target terdekat/TP1) dan DOL 2 (target harian utama/TP2).'
      ],
      invalidRules: [
        'Menebak arah DOL ketika harga berada di tengah range tanpa sweep Origin.',
        'Tetap menargetkan level Liquidity yang sudah berstatus TAKEN sebagai DOL baru.'
      ],
      xauScenario: {
        context: 'Pukul 15:15 WITA, struktur H1 Bullish, XAU/USD sweep Asia Low 2.646,00 hingga 2.643,50 lalu close kembali di atas 2.647,50.',
        steps: [
          'Origin terkonfirmasi = Sweep Asia Low.',
          'DOL 1 ditetapkan pada Asia High 2.654,00 dan DOL 2 pada PDH Fresh 2.672,00; skenario batal jika body close di bawah 2.643,50.'
        ]
      },
      goldenRules: [
        'Penentuan tujuan harga (DOL) harus selalu berangkat dari bukti titik asal reaksi (Origin), bukan dari perkiraan subjektif.'
      ],
      practiceCta: {
        label: 'Lihat Target DOL Live di Cockpit Mapping',
        description: 'Bandingkan langsung target DOL aktif, Liquidity Pool BSL/SSL Fresh, dan status Dealing Range Gold di Cockpit Mapping.',
        href: '../mapping/index.html'
      },
      quiz: [
        {
          question: 'Dalam kerangka ICT, hanya ada **dua jenis target** yang menjadi tujuan pergerakan harga (**Draw on Liquidity**). Apa saja keduanya?',
          options: [
            'Mengejar garis Moving Average 50 dan menunggu indikator RSI jenuh',
            'Menuju Liquidity Pool eksternal yang masih Fresh (Old High/Low, PDH/PDL, EQH/EQL) atau menuju area Imbalance internal (FVG/Imbalance HTF)',
            'Naik setiap hari Senin dan turun setiap hari Jumat',
            'Hanya bergerak saat spread melebar di jam rollover'
          ],
          answerIndex: 1,
          explanation: 'Pergerakan harga dalam ICT mengarah ke salah satu dari dua tujuan: Liquidity Pool eksternal (ERL) atau area Imbalance internal (IRL).'
        },
        {
          question: 'Struktur H1 Gold sedang Bullish, `PDH 2.672` masih Fresh, dan saat pembukaan London harga turun melakukan sweep **Asia Low `2.646`** dengan wick lalu close kembali di atasnya. Ke manakah **DOL 1 dan DOL 2** yang paling rasional?',
          options: [
            'Menuju bawah ke `2.600` karena tadi sempat muncul wick turun',
            'DOL 1 ke `Asia High` (Liquidity Pool Fresh terdekat di sisi lawan) dan DOL 2 ke `PDH 2.672`',
            'Tidak ada target sama sekali karena Asia Low sudah hilang',
            'Menuju PWL 3 bulan lalu dalam 15 menit'
          ],
          answerIndex: 1,
          explanation: 'Setelah Origin sweep bawah (Asia Low) terbentuk selaras tren H1 Bullish, target DOL berpindah ke Liquidity Pool Fresh di atas: Asia High (DOL 1) lalu PDH (DOL 2).'
        },
        {
          question: 'Pukul 13:30 WITA, harga Gold berada tepat di tengah antara PDH dan PDL, serta belum melakukan sweep Asia High maupun Asia Low. Apa aturan paling disiplin untuk menentukan DOL?',
          options: [
            'Langsung buka BUY dan SELL bersamaan supaya pasti kena salah satu',
            'Menerapkan aturan **Wait for First Sweep** — tidak menebak arah sampai pasar sweep salah satu ujung kotak lebih dulu untuk memberi Origin jelas',
            'Menebak turun karena merasa harga sudah mahal',
            'Memperbesar lot 3 kali lipat di tengah kotak'
          ],
          answerIndex: 1,
          explanation: 'Di tengah range tanpa Origin, arah DOL belum terkonfirmasi. Menunggu sweep pertama memberi fakta objektif ke sisi mana target berpindah.'
        },
        {
          question: 'Kapan skenario DOL ke atas pasca sweep Asia Low `2.643,50` dinyatakan **resmi BATAL**?',
          options: [
            'Saat muncul 1 candle merah kecil di M1',
            'Saat candle timeframe kerja (M15/H1) berbalik dan **body close** menembus ke bawah titik asal sweep `2.643,50`',
            'Saat harga baru naik $2 menuju Asia High',
            'Saat spread berada di angka normal $0,25'
          ],
          answerIndex: 1,
          explanation: 'Jika titik ekstrem Origin ditembus oleh body close, penolakan awal dinyatakan gagal dan target DOL beralih ke Liquidity Pool bawah berikutnya.'
        }
      ]
    }
  ];

  return { LEVELS, LESSONS };
});
