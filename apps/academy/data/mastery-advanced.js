/* Amy FX Academy — Mastery ICT Lanjutan & Mapping Mandiri (Modul 37–43)
 * 100% Materi ICT Baru (0% Duplikasi dari Modul 01–36):
 * 37. Breaker Block, Mitigation Block & ICT Unicorn Model
 * 38. Balanced Price Range (BPR), Volume Imbalance (VI) & NWOG/NDOG
 * 39. SMT Divergence (XAU/USD vs XAG/USD Silver & DXY)
 * 40. Market Maker Buy & Sell Model (MMXM)
 * 41. ICT Macros (xx:50–xx:10), Weekly Profile (TGIF) & IPDA Lookback (20/40/60 Hari)
 * 42. Standard Deviation Projections (-1/-2/-2.5/-4) & Candle Range Theory (CRT / OHLC)
 * 43. Capstone: Protokol Mapping Mandiri dari Chart Kosong (Zero-Indicator)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.AmyAcademyPart4 = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : window, function () {
  'use strict';

  const LEVELS = [
    {
      id: 7,
      code: 'Fase 07',
      title: 'ICT Institusional Lanjutan & Mapping Mandiri',
      tagline: 'Materi ICT lanjutan yang melengkapi fondasi eksekusi, ditutup dengan protokol pemetaan mandiri dari chart kosong.'
    }
  ];

  const LESSONS = [
    {
      id: 'breaker-mitigation-unicorn',
      levelId: 3,
      number: 22,
      title: 'Breaker Block (BB), Mitigation Block & ICT Unicorn Model',
      readMinutes: 10,
      diagramId: 'breaker-mitigation-unicorn',
      bookFormat: true,
      diagramAfterSection: 1,
      summary: 'Mekanisme perubahan Order Block gagal menjadi Breaker Block (+BB/-BB), perbedaan struktural tegas antara Breaker Block dan Mitigation Block, konsep ICT Unicorn (irisan Breaker + FVG), serta studi kasus XAU/USD.',
      bookSections: [
        {
          number: '22.1',
          heading: 'Mekanisme Breaker Block: Ketika Order Block Gagal Berubah Fungsi',
          shortTitle: 'Mekanisme Breaker Block',
          paragraphs: [
            'Pada Bab 21 telah dibahas bagaimana Order Block yang valid mempertahankan arah harga. Pertanyaan berikutnya adalah: apa yang terjadi secara struktural ketika sebuah Order Block gagal menahan harga dan ditembus secara agresif oleh Displacement?',
            'Perhatikan urutan pergerakan pasar berikut pada skenario Bearish: harga bergerak naik membentuk rangkaian candle naik terakhir untuk melakukan **sweep Liquidity atas (`BSL`)** di atas puncak lama. Sesaat setelah `BSL` tersapu, harga berbalik turun dengan Displacement kuat hingga **menembus Swing Low sebelumnya dengan Body Close**.',
            'Rangkaian candle naik terakhir tepat sebelum puncak sweep tersebut — yang semula tampak seperti Bullish Order Block — kini gagal dan berubah fungsi menjadi **Bearish Breaker Block (`-BB`)**. Ketika harga terkoreksi naik kembali menyentuh area `-BB`, posisi beli sebelumnya yang terjebak ditutup pada titik impas (*breakeven*) bersamaan dengan masuknya order jual baru, sehingga sering memicu penolakan turun yang cepat. *(Pada Chart Gold Mapping Cockpit Amy FX Pro, zona ini ditampilkan otomatis sebagai `+BB` cyan untuk Buy dan `-BB` oranye untuk Sell.)*'
          ]
        },
        {
          number: '22.2',
          heading: 'Perbedaan Struktural: Breaker Block (BB) vs Mitigation Block (MB)',
          shortTitle: 'Breaker vs Mitigation',
          paragraphs: [
            'Secara sekilas, **Breaker Block** dan **Mitigation Block** memiliki bentuk zona yang serupa. Namun, keduanya memiliki **satu pembeda struktural mutlak** yang langsung memengaruhi probabilitasnya pada XAU/USD:'
          ],
          table: {
            caption: 'Perbandingan Struktural: Breaker Block (BB) vs Mitigation Block (MB)',
            headers: ['Pembeda Kunci', 'Breaker Block (BB)', 'Mitigation Block (MB)', 'Implikasi Eksekusi'],
            rows: [
              ['Syarat Sweep Liquidity', '**Wajib ada Sweep.** Harga mencetak High baru (mengambil `BSL`) untuk `-BB`, atau Low baru (mengambil `SSL`) untuk `+BB`', '**Tidak ada Sweep.** Harga gagal melampaui titik ekstrem lama (membentuk *Lower High* untuk `-MB`, atau *Higher Low* untuk `+MB`)', 'Breaker didukung pengambilan likuiditas penuh; Mitigation tidak'],
              ['Pematahan Struktur Balik', 'Ditembus balik dengan **Displacement (`Body Close`)** melewati Swing tengah', 'Ditembus balik dengan **Displacement (`Body Close`)** melewati Swing tengah', 'Keduanya wajib mematahkan Swing dengan Body Close'],
              ['Tingkat Probabilitas', '**Tinggi (Prioritas Utama)** pada Hierarki PD Array', '**Menengah** — daya tolak umumnya lebih lunak', 'Breaker dapat berdiri kuat; Mitigation wajib didukung FVG dan searah Bias H1'],
              ['Urutan Pola Bearish', 'Swing Low → **Sweep HH** → Tembus Swing Low', 'Swing Low → **Gagal HH (LH)** → Tembus Swing Low', 'Periksa apakah ujung ayunan melakukan sweep High/Low lama']
            ]
          }
        },
        {
          number: '22.3',
          heading: 'ICT Unicorn Model: Irisan Presisi Breaker Block + Fair Value Gap',
          shortTitle: 'ICT Unicorn Model',
          paragraphs: [
            '**ICT Unicorn Model** adalah pola konfluensi mekanis berupa **irisan tumpang tindih (*overlap*) antara kotak Breaker Block (`BB`) dan kotak Fair Value Gap (`FVG`)** yang lahir dari dorongan Displacement pematah struktur yang sama.',
            'Ada dua alasan utama mengapa model Unicorn sangat efektif pada XAU/USD:',
            '1. **Konfluensi dua PD Array dalam satu koordinat:** Area irisan menggabungkan zona mitigasi order pada Breaker Block sekaligus area ketidakseimbangan harga pada FVG.',
            '2. **Penyempitan area entry:** Jika kotak Breaker cukup lebar (`$5–$7`), irisan FVG di dalamnya mempersempit titik penempatan Limit Order sehingga jarak Stop Loss tetap ringkas dan rasio `R:R` minimal `1:2` hingga `1:4` lebih mudah tercapai.'
          ]
        },
        {
          number: '22.4',
          heading: 'Studi Kasus XAU/USD: Bearish Unicorn pada Sesi NY AM',
          shortTitle: 'Studi Kasus Unicorn Gold',
          paragraphs: [
            'Berikut langkah pemetaan dan perhitungan risiko **Bearish Unicorn** pada chart M5 XAU/USD:'
          ],
          exampleBox: {
            title: 'Eksekusi Bearish Unicorn M5 XAU/USD (NY Open · 20:35 WITA EDT)',
            rows: [
              {
                label: 'Tahap 1 — Sweep & Pematahan Struktur (MSS)',
                detail: 'Bias H1 Bearish menuju `PDL 2.632,00`. XAU/USD naik melakukan sweep **London High `2.654,50`** (syarat Sweep terpenuhi), lalu berbalik turun tegas menutup body menembus **Swing Low `2.648,00`**.'
              },
              {
                label: 'Tahap 2 — Menandai Breaker, FVG & Irisan Unicorn',
                detail: '• **Bearish Breaker Block (`-BB`):** Rangkaian candle bullish terakhir sebelum puncak sweep pada **`2.650,00 – 2.652,40`**.\n• **Bearish FVG (`SIBI`):** Celah hasil dorongan turun pada **`2.649,20 – 2.651,80`**.\n• **Zona ICT Unicorn (Irisan):** Rentang tumpang tindih keduanya di **`2.650,00 – 2.651,80`**.'
              },
              {
                label: 'Tahap 3 — Entry, SL & Target Bertingkat',
                detail: 'Harga terkoreksi naik ke `2.650,80` (di dalam irisan Unicorn) dan ditolak cepat. Eksekusi Sell di **`2.650,50`**, SL di atas puncak sweep **`2.655,00`** (risiko **`$4,50`** termasuk buffer spread). **TP1** di `2.641,50` (`+$9,00`, **R:R 1:2**) dan **TP2** di `PDL 2.632,50` (`+$18,00`, **R:R 1:4**).'
              }
            ]
          },
          callout: {
            tone: 'warn',
            kicker: 'Batas Invalidasi Mutlak',
            title: 'Body Close Menembus Keluar Kotak Breaker = Setup Batal',
            body: 'Apabila harga kembali ke Bearish Breaker lalu candle M5 menutup **Body Close** di atas batas atas kotak Breaker, skenario dinyatakan batal sepenuhnya. Jangan menggeser Stop Loss atau menambah posisi melawan struktur baru.'
          }
        }
      ],
      keyTakeaways: [
        '**Breaker Block (BB)** adalah Order Block yang ditembus balik secara agresif **setelah melakukan sweep Liquidity** (`HH` untuk Bearish BB, `LL` untuk Bullish BB).',
        '**Mitigation Block (MB)** tidak memiliki sweep di ujung ayunan (gagal mencetak High/Low baru) sehingga membutuhkan dukungan FVG serta arah Bias HTF.',
        '**ICT Unicorn Model** adalah irisan tumpang tindih (*overlap*) antara **Breaker Block** dan **Fair Value Gap (FVG)** dari dorongan Displacement yang sama.',
        'Stop Loss logis ditempatkan di luar puncak/dasar sweep (+ buffer spread); jika Body Close menembus keluar seluruh kotak Breaker, setup dinyatakan batal.'
      ],
      bridgeNext: 'Setelah menguasai empat zona entry utama ICT (`FVG`, `iFVG`, `Order Block`, dan `Breaker/Unicorn`), langkah berikutnya adalah memahami dua pemicu objektif yang mengonfirmasi perubahan arah harga pasca-sweep, yaitu pada **Bab 23: CISD vs Market Structure Shift (MSS): Sinyal Balik Arah Paling Presisi**.',
      practiceCta: {
        label: 'Pantau Zona +BB / -BB Live di Chart Gold',
        description: 'Buka Chart Gold di Mapping Cockpit untuk melihat deteksi otomatis Breaker Block (+BB cyan / -BB oranye) beserta prioritasnya.',
        href: '../mapping/index.html'
      },
      conceptBlocks: [
        {
          heading: 'Breaker Block, Mitigation Block & ICT Unicorn Model',
          paragraphs: [
            'Breaker Block wajib didahului Liquidity Sweep sebelum ditembus balik dengan Displacement; Mitigation Block tidak memiliki sweep; dan ICT Unicorn adalah irisan tumpang tindih Breaker Block + Fair Value Gap.'
          ]
        }
      ],
      mappingSteps: [
        'Tandai swing terakhir yang baru saja sweep Liquidity (ambil BSL/SSL) beserta Swing Lawan tepat di sebelahnya.',
        'Tunggu dorongan Displacement kuat yang menutup body menembus Swing Lawan tersebut (MSS).',
        'Tarik kotak pada rangkaian candle lawan terakhir sebelum puncak/dasar sweep sebagai Breaker Block, lalu cek apakah ada FVG yang bertumpuk membentuk Zona Unicorn.',
        'Eksekusi saat retrace ke tepi Breaker / irisan Unicorn dengan SL di luar puncak/dasar sweep (+ buffer spread).'
      ],
      decisionTree: [
        {
          condition: 'Harga menembus Swing dengan Displacement, tetapi puncak sebelumnya TIDAK sweep High lama (melainkan Lower High).',
          action: 'Itu Mitigation Block, bukan Breaker Block. Wajib ada FVG menumpuk dan searah Bias H1 — jika tidak, skip.'
        },
        {
          condition: 'Kotak Breaker lebar ($6–$8) dan ada FVG di tengahnya.',
          action: 'Fokuskan entry pada area irisan Unicorn (overlap Breaker + FVG) agar SL ringkas dan R:R ≥ 1:2.'
        },
        {
          condition: 'Candle M5 menutup body penuh menembus keluar sisi belakang kotak Breaker.',
          action: 'Setup BATAL — jangan menahan posisi atau melakukan averaging.'
        }
      ],
      validRules: [
        'Bearish Breaker wajib memiliki urutan: Swing Low → Sweep High baru (BSL) → Displacement menembus Swing Low dengan body close.',
        'Bullish Breaker wajib memiliki urutan: Swing High → Sweep Low baru (SSL) → Displacement menembus Swing High dengan body close.',
        'ICT Unicorn wajib memiliki overlap nyata antara kotak Breaker Block dan kotak FVG hasil Displacement.'
      ],
      invalidRules: [
        'Menyebut sembarang support/resistance tertembus sebagai Breaker tanpa Sweep dan tanpa Displacement.',
        'Memakai Mitigation Block tanpa FVG untuk melawan Bias H1.',
        'Menahan posisi ketika Body Close sudah menembus keluar kotak Breaker.'
      ],
      xauScenario: {
        context: 'NY Open 20:35 WITA, Bias H1 Bearish menuju PDL 2.632: XAU/USD sweep London High 2.654,50 lalu menembus Swing Low 2.648,00.',
        steps: [
          'Bearish Breaker Block di 2.650,00–2.652,40 beririsan dengan Bearish FVG 2.649,20–2.651,80 → Zona Unicorn 2.650,00–2.651,80.',
          'Sell di 2.650,50, SL di 2.655,00 ($4,50), TP1 2.641,50 (1:2) dan TP2 PDL 2.632,50 (1:4).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: Breaker Palsu di Tengah Asia Chop',
        context: 'Sesi Asia 10:15 WITA, harga menembus micro-low M5 tanpa sweep High sesi mana pun dan tanpa Displacement/FVG.',
        whyFailed: 'Tanpa sweep nyata, tanpa FVG (bukan Unicorn), dan di luar Killzone, sesi London langsung menyapu seluruh kotak Asia dan mengenai SL.'
      },
      goldenRules: [
        'Breaker Block = Sweep + Pematahan Struktur Agresif. Tanpa sweep di ujungnya, zona tersebut adalah Mitigation Block.',
        'ICT Unicorn (irisan Breaker + FVG) memberikan konfluensi dan efisiensi Stop Loss yang lebih tinggi.'
      ],
      quiz: [
        {
          question: 'Apa syarat struktur mutlak yang membedakan **Bearish Breaker Block** dari **Bearish Mitigation Block**?',
          options: [
            '**Breaker Block** wajib didahului **Sweep membuat High baru (ambil BSL)** sebelum menembus Swing Low, sedangkan **Mitigation Block** gagal membuat High baru (*Lower High*)',
            'Breaker Block hanya muncul di Daily, sedangkan Mitigation Block hanya di M1',
            'Mitigation Block tidak memerlukan Displacement, sedangkan Breaker tidak perlu break struktur',
            'Keduanya sama persis, hanya berbeda warna kotak'
          ],
          answerIndex: 0,
          explanation: 'Perbedaan inti ICT: Breaker selalu diawali Liquidity Sweep (HH atau LL baru) sebelum ditembus balik, sedangkan Mitigation gagal mencapai swing ekstrem sebelumnya.'
        },
        {
          question: 'Dalam **ICT Unicorn Model**, dua elemen apa yang wajib tumpang tindih (*overlap*) pada rentang harga yang sama?',
          options: [
            'RSI Oversold dan Moving Average 200',
            '**Breaker Block** dan **Fair Value Gap (FVG)** hasil dorongan Displacement',
            'Asia High dan Weekly Open saja',
            'Dua candlestick Doji yang bersebelahan'
          ],
          answerIndex: 1,
          explanation: 'ICT Unicorn adalah irisan tumpang tindih antara kotak Breaker Block dengan kotak FVG dari dorongan Displacement yang mematahkan struktur.'
        },
        {
          question: 'Harga membentuk Bullish Breaker di `2.640–2.642` (setelah sweep SSL `2.637` dan menembus Swing High `2.645`). Saat retrace, candle M5 menutup **Body Close penuh di `2.638,50`**. Apa keputusan mekanis yang benar?',
          options: [
            'Langsung Buy dua kali lipat karena harga makin murah',
            'Menunggu 5 candle lagi sambil menghapus Stop Loss',
            '**Setup Bullish Breaker batal total** karena Body Close sudah menembus keluar batas bawah Breaker — jangan entry Buy',
            'Pindah ke M1 untuk mencari alasan tetap Buy'
          ],
          answerIndex: 2,
          explanation: 'Body Close yang menembus keluar seluruh rentang Breaker Block menandakan institusi tidak lagi mempertahankan zona tersebut.'
        },
        {
          question: 'Kamu menemukan Bearish **Mitigation Block** (tanpa sweep di puncak) pada M5, namun tidak ada FVG yang menumpuk dan Bias H1 sedang Bullish kuat. Tindakan terbaik?',
          options: [
            'Tetap Sell karena Mitigation Block selalu akurat 90%',
            '**Skip setup** — Mitigation Block tanpa sweep, tanpa FVG, dan melawan Bias H1 memiliki probabilitas rendah',
            'Entry Sell dengan lot 2× lebih besar',
            'Menggeser garis supaya terlihat seperti Breaker Block'
          ],
          answerIndex: 1,
          explanation: 'Mitigation Block memiliki daya tolak lebih rendah daripada Breaker dan wajib didukung FVG serta searah HTF.'
        },
        {
          question: 'Di mana penempatan Stop Loss paling logis saat mengeksekusi **Bearish Unicorn** (Breaker `2.650–2.652,40` + FVG `2.649,20–2.651,80`, puncak sweep di `2.654,50`)?',
          options: [
            'Tepat di `2.651,90` supaya SL super tipis `$0,50`',
            '**Di atas puncak sweep** (misal `2.655,00` termasuk buffer spread) atau minimal di atas batas atas Breaker jika puncak terlalu jauh',
            'Tanpa SL karena Unicorn tidak mungkin gagal',
            'Di bawah harga entry saat ini'
          ],
          answerIndex: 1,
          explanation: 'Puncak sweep adalah titik invalidasi struktural sejati. Menempatkan SL di atas puncak sweep + buffer spread melindungi posisi dari retest wick agresif Gold.'
        }
      ]
    },
    // =========================================================================
    // BAGIAN VI — BAB 31: BALANCED PRICE RANGE (BPR), VOLUME IMBALANCE & NWOG/NDOG
    // =========================================================================
    {
      id: 'bpr-nwog-ndog-imbalance',
      levelId: 5,
      number: 31,
      bookFormat: true,
      title: 'Balanced Price Range (BPR), Volume Imbalance & Gap Pembukaan (NWOG / NDOG)',
      subtitle: 'Tiga bentuk ketidakseimbangan lanjutan di atas FVG standar yang berfungsi sebagai area reaksi presisi sekaligus level referensi target XAU/USD sepanjang minggu.',
      readMinutes: 10,
      diagramId: 'bpr-nwog-ndog',
      diagramAfterSection: 1,
      summary: 'Cara menghitung irisan Balanced Price Range (BPR), membedakan Volume Imbalance (VI) antar-body dari FVG standar, menandai level referensi NWOG dan NDOG (standar NY ke WITA), serta studi kasus XAU/USD.',
      bookSections: [
        {
          number: '31.1',
          heading: 'Balanced Price Range (BPR): Irisan Dua FVG Berlawanan Arah',
          shortTitle: 'Balanced Price Range (BPR)',
          paragraphs: [
            'Pada Bab 19 telah dibahas Fair Value Gap satu arah (`BISI` untuk kenaikan dan `SIBI` untuk penurunan). **Balanced Price Range (BPR)** terbentuk ketika harga bergerak impulsif ke satu arah hingga menciptakan FVG, lalu segera berbalik arah secara impulsif menembus rentang yang sama dan menciptakan FVG pada arah sebaliknya.',
            'Secara matematis, BPR adalah **area irisan (*overlap*) antara rentang `BISI` dan `SIBI`** tersebut. Contoh: jika penurunan menciptakan `SIBI` pada **`2.650,00 – 2.654,00`**, lalu pembalikan naik menciptakan `BISI` pada **`2.651,00 – 2.655,00`**, maka **Bullish BPR** terletak tepat di **`2.651,00 – 2.654,00`** (`batas bawah tertinggi` hingga `batas atas terendah`).',
            'Rentang irisan ini menunjukkan bahwa penawaran beli dan jual pada harga tersebut telah diseimbangkan dua kali, dengan dominasi berpindah ke impuls terakhir. Akibatnya, saat harga melakukan retracement kembali ke tepi BPR, respons pantulan umumnya lebih cepat dibandingkan FVG tunggal.'
          ]
        },
        {
          number: '31.2',
          heading: 'Perbandingan BPR, Volume Imbalance (VI), NWOG, dan NDOG',
          shortTitle: 'VI, NWOG & NDOG',
          paragraphs: [
            'Selain BPR, terdapat tiga bentuk celah harga lanjutan yang sering menjadi titik referensi maupun target pada XAU/USD: **Volume Imbalance (`VI`)**, **New Week Opening Gap (`NWOG`)**, dan **New Day Opening Gap (`NDOG`)**. Berikut perbandingan mekanis keempatnya:'
          ],
          table: {
            caption: 'Perbandingan 4 Ketidakseimbangan Lanjutan pada XAU/USD',
            headers: ['Konsep Lanjutan', 'Definisi Mekanis di Chart', 'Patokan Waktu / Syarat', 'Fungsi Utama'],
            rows: [
              [
                '**BPR** (*Balanced Price Range*)',
                'Irisan tumpang tindih antara **BISI** dan **SIBI** dari dua dorongan impulsif berlawanan arah',
                'Terbentuk pada pembalikan tajam berbentuk `"V"` atau `"Λ"` searah Bias HTF',
                'Area retracement presisi yang sering merespons lebih awal dibanding Order Block di belakangnya'
              ],
              [
                '**VI** (*Volume Imbalance*)',
                'Celah antara **Close candle 1** dan **Open candle 2**, meskipun Wick kedua candle masih saling bersentuhan',
                'Muncul di dalam kaki Displacement sesi aktif (bukan akibat gangguan feed broker)',
                'Level retracement mikro yang sering diuji di tepi body atau titik `50%`'
              ],
              [
                '**NWOG** (*New Week Opening Gap*)',
                'Celah antara **Close Jumat `17:00 NY`** (`Sabtu 05:00 WITA` EDT / `06:00 WITA` EST) dan **Open Minggu `18:00 NY`** (`Senin 06:00 WITA` EDT / `07:00 WITA` EST)',
                'Tandai rentang + garis `50% CE` setiap Senin pagi; tetap dipertahankan sepanjang minggu (hingga 3–4 minggu)',
                'Referensi harga mingguan: target DOL sekaligus area support/resistance institusional'
              ],
              [
                '**NDOG** (*New Day Opening Gap*)',
                'Celah antara **Close harian `17:00 NY`** dan **Open harian baru `18:00 NY`** (jeda rollover 1 jam Gold)',
                'Tandai setiap pagi Selasa–Jumat pukul `06:00–07:00 WITA`',
                'Target retracement intraday sebelum ekspansi sesi London atau NY AM'
              ]
            ]
          }
        },
        {
          number: '31.3',
          heading: 'Aturan Operasional NWOG, NDOG, dan BPR',
          shortTitle: 'Aturan NWOG & BPR',
          paragraphs: [
            'Kesalahan yang sering terjadi saat mempelajari NWOG adalah langsung membuka posisi melawan arah gap pada **Senin pukul `06:05 WITA`** dengan asumsi gap akan segera tertutup. Pada jam pembukaan Senin, spread XAU/USD umumnya melebar `5–10×` dari normal dan tren fundamental dapat berlanjut sejauh `$20–$30` sebelum kembali menguji NWOG di pertengahan minggu.',
            'Terapkan 3 aturan operasional berikut:',
            '1. **NWOG sebagai Target DOL, Bukan Sinyal Entry Otomatis:** Tunggu sesi London atau NY AM membentuk struktur yang jelas. Jadikan kotak NWOG (beserta garis `50% CE`) sebagai target **Draw on Liquidity (DOL)** hanya setelah LTF mencetak **Sweep + MSS/CISD** ke arah NWOG.',
            '2. **Batas Lebar Minimum NWOG di XAU/USD:** Jika selisih Close Jumat dan Open Senin kurang dari `$1,50` (misalnya `$0,30`), tandai cukup sebagai 1 garis referensi (*Weekly Open Anchor*). NWOG lebih efektif diperlakukan sebagai kotak reaksi apabila lebarnya **`≥ $1,50 – $2,00`**.',
            '3. **Pertahankan Garis NWOG Sepanjang Pekan:** Walaupun NWOG sudah tersentuh sekali pada hari Senin, jangan langsung dihapus karena level tersebut kerap diuji ulang sebagai area pantulan hingga hari Jumat.'
          ]
        },
        {
          number: '31.4',
          heading: 'Studi Kasus XAU/USD: Bearish BPR Menuju Target NWOG pada Sesi London',
          shortTitle: 'Studi Kasus BPR + NWOG',
          paragraphs: [
            'Berikut contoh kombinasi **Bearish BPR** sebagai area entry dan **NWOG** sebagai target DOL pada hari Senin sesi London:'
          ],
          exampleBox: {
            title: 'Eksekusi Bearish BPR → Target NWOG (Senin · 15:20 WITA EDT)',
            rows: [
              {
                label: '1. Pemetaan NWOG Senin Pagi',
                detail: 'Close Jumat `17:00 NY` di `2.656,00` dan Open Minggu `18:00 NY` di `2.660,00` → kotak **NWOG `2.656,00 – 2.660,00`** dengan garis **`50% CE = 2.658,00`**.'
              },
              {
                label: '2. Pembentukan Bearish BPR di London Killzone',
                detail: 'Harga naik impulsif meninggalkan `BISI 2.666,00 – 2.669,00`, lalu berbalik turun agresif mematahkan struktur dan meninggalkan `SIBI 2.665,00 – 2.668,00`. Irisan keduanya (**`2.666,00 – 2.668,00`**) membentuk **Bearish BPR**.'
              },
              {
                label: '3. Entry, SL Struktural & Target NWOG (Memperhitungkan Ask)',
                detail: 'Harga retrace ke `2.666,50` dan ditolak dengan wick atas → **Sell `2.666,50`**, SL di atas batas BPR **`2.670,00`** (risiko **`$3,50`**). **TP1** di `50% NWOG` (+`$0,50` buffer Ask) = **`2.658,50`** (**`+$8,00` / `2,29R`**). **TP2** di batas bawah NWOG (+`$0,50` buffer Ask) = **`2.656,50`** (**`+$10,00` / `2,86R`**).'
              }
            ]
          },
          callout: {
            tone: 'warn',
            kicker: 'Peringatan Pembukaan Pekan',
            title: 'Hindari Transaksi Menutup Gap pada 15 Menit Pertama Senin Pagi',
            body: 'Likuiditas pembukaan Senin (`05:00–07:00 WITA`) tipis dan spread cenderung melebar tajam. Tunggu konfirmasi struktur pada **London atau NY AM Killzone** sebelum menargetkan kotak NWOG sebagai DOL.'
          }
        }
      ],
      keyTakeaways: [
        '**Balanced Price Range (BPR)** adalah irisan tumpang tindih antara **BISI** dan **SIBI** dari dua gerakan impulsif berlawanan arah yang sering menghasilkan reaksi retracement cepat.',
        '**Volume Imbalance (VI)** adalah celah antara *Close candle 1* dan *Open candle 2* meskipun wick kedua candle masih bersentuhan.',
        '**NWOG** (`Close Jumat 17:00 NY → Open Minggu 18:00 NY`) dan **NDOG** (`Close 17:00 → Open 18:00 NY` harian) beserta garis `50% CE` berfungsi sebagai referensi target DOL sepanjang minggu, bukan sinyal entry langsung saat spread Senin pagi melebar.'
      ],
      bridgeNext: 'Setelah memahami ketiga bentuk ketidakseimbangan lanjutan pada satu chart XAU/USD (`BPR`, `VI`, `NWOG/NDOG`), langkah berikutnya adalah mempelajari konfirmasi antar-aset untuk mengidentifikasi manipulasi secara objektif pada **Bab 32: SMT Divergence: Membaca Jejak Manipulasi Gold vs Silver (XAG) & DXY**.',
      practiceCta: {
        label: 'Amati BPR & Level Pembukaan di Chart Gold Mapping',
        description: 'Buka Chart Gold di Cockpit Mapping untuk menandai kotak NWOG/NDOG pembukaan dan memantau reaksi BPR saat Killzone aktif.',
        href: '../mapping/index.html'
      },
      conceptBlocks: [
        {
          heading: 'BPR, Volume Imbalance & NWOG/NDOG',
          paragraphs: [
            'BPR adalah irisan dua FVG berlawanan (BISI + SIBI), Volume Imbalance adalah celah antar-body Close–Open, dan NWOG/NDOG adalah celah pembukaan minggu/hari (17:00 NY → 18:00 NY) yang berfungsi sebagai referensi target DOL sepanjang minggu.'
          ]
        }
      ],
      mappingSteps: [
        'Setiap Senin pagi (06:00–07:00 WITA), tandai NWOG (Close Jumat 17:00 NY → Open Minggu 18:00 NY) beserta garis 50% CE dan biarkan aktif sepanjang minggu.',
        'Setiap pagi Selasa–Jumat, tandai NDOG (Close 17:00 NY → Open 18:00 NY) sebagai referensi intraday.',
        'Saat terjadi pembalikan tajam berbentuk "V" atau "Λ", tandai irisan tumpang tindih BISI dan SIBI sebagai Balanced Price Range (BPR).',
        'Catat Volume Imbalance (celah Close–Open antar-body) di dalam leg Displacement sebagai titik retracement presisi.'
      ],
      decisionTree: [
        {
          condition: 'Senin 06:10 WITA muncul NWOG naik $12. Apakah langsung Sell untuk menutup gap?',
          action: 'Tidak. Tunggu Killzone London/NY membentuk Sweep + MSS Bearish baru jadikan NWOG sebagai target DOL.'
        },
        {
          condition: 'Ada BPR dan Order Block biasa berdekatan di zona Premium/Discount.',
          action: 'Amati reaksi tepi BPR terlebih dahulu karena BPR sering memantulkan harga lebih awal sebelum menyentuh Order Block.'
        }
      ],
      validRules: [
        'BPR wajib terbentuk dari dua dorongan impulsif berlawanan arah (BISI & SIBI) yang rentangnya saling beririsan.',
        'NWOG diukur dari Close Jumat 17:00 NY ke Open Minggu 18:00 NY beserta garis 50% CE.'
      ],
      invalidRules: [
        'Melakukan entry counter-trend saat pembukaan Senin pagi ketika spread melebar.',
        'Menghapus garis NWOG hanya karena sudah tersentuh satu kali di hari Senin.'
      ],
      xauScenario: {
        context: 'Senin London KZ: NWOG 2.656,00–2.660,00 (50% = 2.658,00), terbentuk Bearish BPR di 2.666,00–2.668,00.',
        steps: [
          'Retest Bearish BPR → Sell 2.666,50, SL 2.670,00 (risiko $3,50).',
          'TP1 di 2.658,50 (+$8,00 / 2,29R) dan TP2 di 2.656,50 (+$10,00 / 2,86R).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: Sell Counter-Trend Saat Pembukaan Senin Pagi',
        context: 'Senin 06:05 WITA muncul NWOG $15 ke atas; trader langsung Sell tanpa menunggu struktur sesi London.',
        whyFailed: 'Spread pembukaan melebar 5–10× dan harga terus naik $25 lagi sebelum baru kembali menguji NWOG pada hari Rabu.'
      },
      goldenRules: [
        'BPR terbentuk dari irisan dua FVG berlawanan arah dengan dominasi mengikuti impuls terakhir.',
        'Tandai NWOG setiap Senin pagi dan pertahankan hingga Jumat sebagai level referensi dan target DOL.'
      ],
      quiz: [
        {
          question: 'Bagaimana syarat mekanis terbentuknya **Balanced Price Range (BPR)** yang valid?',
          options: [
            'Satu candle bullish besar diikuti 5 candle sideways',
            '**Irisan tumpang tindih antara Bullish FVG (`BISI`) dan Bearish FVG (`SIBI`)** dari dua gerakan impulsif berlawanan arah',
            'Jarak antara Asia High dan Asia Low',
            'Selisih Bid dan Ask saat rilis CPI'
          ],
          answerIndex: 1,
          explanation: 'BPR adalah zona overlap antara BISI dan SIBI berlawanan arah yang menunjukkan area sudah diseimbangkan dua arah dan dikuasai impuls terakhir.'
        },
        {
          question: 'Apa perbedaan utama antara **Volume Imbalance (VI)** dan **Fair Value Gap (FVG)**?',
          options: [
            '**Volume Imbalance** adalah celah murni antar-body (*Close candle 1* ke *Open candle 2*) walau wick masih bersentuhan, sedangkan **FVG** adalah celah 3-candle tanpa tersentuh wick candle 1 dan 3',
            'Volume Imbalance hanya muncul di saham, tidak pernah di XAU/USD',
            'Volume Imbalance membutuhkan minimal 5 candle',
            'Tidak ada perbedaan sama sekali'
          ],
          answerIndex: 0,
          explanation: 'Volume Imbalance membaca celah antar-body Close–Open dua candle berurutan meskipun wick saling tumpang tindih.'
        },
        {
          question: 'Dari titik harga mana ke mana **NWOG (New Week Opening Gap)** diukur secara resmi?',
          options: [
            'Dari High hari Senin ke Low hari Jumat',
            'Dari **Close penutupan Jumat (`17:00 NY`)** ke **Open pembukaan Minggu malam (`18:00 NY`)**',
            'Dari pembukaan London ke pembukaan New York',
            'Dari penutupan H1 jam 00:00 WITA'
          ],
          answerIndex: 1,
          explanation: 'NWOG selalu diukur dari penutupan resmi pasar Jumat (17:00 NY) ke pembukaan resmi minggu baru (18:00 NY Minggu).'
        },
        {
          question: 'Senin pagi pukul `06:10 WITA`, Gold dibuka gap naik `$10` di atas Close Jumat (`NWOG`). Apa sikap paling disiplin?',
          options: [
            'Langsung Sell tanpa menunggu konfirmasi karena gap pasti tutup detik itu juga',
            'Tandai rentang **NWOG + garis `50% CE`** sebagai referensi target DOL lalu tunggu konfirmasi struktur di Killzone London atau NY',
            'Hapus NWOG setelah jam `08:00 WITA`',
            'Abaikan NWOG selamanya'
          ],
          answerIndex: 1,
          explanation: 'NWOG adalah level referensi & target DOL sepanjang minggu — bukan sinyal entry langsung saat spread pembukaan Senin melebar.'
        },
        {
          question: 'Harga turun cepat meninggalkan `SIBI` (`2.650–2.654`), lalu berbalik naik agresif meninggalkan `BISI` (`2.651–2.655`). Di rentang mana **Bullish BPR** berada?',
          options: [
            '`2.650 – 2.655` seluruhnya',
            '**`2.651 – 2.654`** (area irisan tumpang tindih antara kedua FVG)',
            'Di bawah `2.650` saja',
            'Di atas `2.655` saja'
          ],
          answerIndex: 1,
          explanation: 'BPR adalah irisan (intersection) kedua FVG: max(2.650, 2.651) = 2.651 hingga min(2.654, 2.655) = 2.654.'
        }
      ]
    },

    // =========================================================================
    // BAGIAN VI — BAB 32: SMT DIVERGENCE (XAU/USD VS SILVER XAG & DXY)
    // =========================================================================
    {
      id: 'smt-divergence-gold',
      levelId: 5,
      number: 32,
      bookFormat: true,
      title: 'SMT Divergence: Membaca Jejak Manipulasi Gold vs Silver (XAG) & DXY',
      subtitle: 'Konfirmasi antar-aset (*Smart Money Technique*) yang mendeteksi ketidaksinkronan korelasi Gold terhadap Silver dan DXY pada level Liquidity kunci di jam Killzone.',
      readMinutes: 10,
      diagramId: 'smt-divergence-gold',
      diagramAfterSection: 1,
      summary: 'Mekanisme SMT Divergence (Smart Money Technique), matriks polaritas XAU vs XAG (searah) dan XAU vs DXY (terbalik), 3 syarat validasi anti-noise, serta studi kasus konfluensi ganda XAU/USD di NY AM Killzone.',
      bookSections: [
        {
          number: '32.1',
          heading: 'Definisi Mekanis SMT Divergence (*Smart Money Technique*)',
          shortTitle: 'Logika SMT Divergence',
          paragraphs: [
            'Di pasar keuangan, instrumen yang memiliki korelasi makro kuat umumnya membentuk *Swing High* dan *Swing Low* secara bersamaan. **SMT Divergence (*Smart Money Technique*)** terjadi ketika pada **waktu (timestamp) yang sama persis** di dekat level Liquidity kunci (`PDH/PDL`, `London High/Low`, atau `HTF POI`), **satu instrumen menembus mencetak titik ekstrem baru (sweep Liquidity), sedangkan instrumen pembandingnya gagal menembus level yang sepadan**.',
            'Secara objektif, perbedaan struktur pada momen yang sama menunjukkan ketidaksinkronan aliran order. Jika sebuah penembusan benar-benar didorong arus fundamental serentak, Gold dan Silver sama-sama menembus puncak (sementara DXY menembus dasar). Ketika satu instrumen gagal ikut menembus, sweep yang terjadi pada instrumen pasangannya memiliki probabilitas tinggi sebagai **manipulasi ambil likuiditas** sebelum pembalikan arah.'
          ]
        },
        {
          number: '32.2',
          heading: 'Matriks Polaritas XAU/USD: Gold vs Silver (Searah) dan Gold vs DXY (Terbalik)',
          shortTitle: 'Polaritas XAG & DXY',
          paragraphs: [
            'Untuk menganalisis Gold (`XAU/USD`), cukup gunakan dua instrumen pembanding: **Silver (`XAG/USD`)** yang berkorelasi **positif (searah)**, serta **Indeks Dolar AS (`DXY`)** yang berkorelasi **negatif (terbalik)**. Berikut matriks pembacaan polaritasnya:'
          ],
          table: {
            caption: 'Matriks Pembacaan SMT Divergence untuk XAU/USD',
            headers: ['Sinyal SMT untuk Gold', 'Instrumen Pembanding', 'Pergerakan XAU/USD', 'Pergerakan Pembanding (Timestamp Sama)', 'Interpretasi Mekanis'],
            rows: [
              [
                '**Bullish SMT** (Potensi Naik)',
                '**XAG/USD** (*Searah*)',
                'Mencetak **Lower Low** (sweep SSL/PDL)',
                'XAG **gagal turun** — mencetak **Higher Low**',
                'Penurunan Gold mengindikasikan sweep beli (akumulasi)'
              ],
              [
                '**Bearish SMT** (Potensi Turun)',
                '**XAG/USD** (*Searah*)',
                'Mencetak **Higher High** (sweep BSL/PDH)',
                'XAG **gagal naik** — mencetak **Lower High**',
                'Kenaikan Gold mengindikasikan sweep jual (distribusi)'
              ],
              [
                '**Bullish SMT** (Potensi Naik)',
                '**DXY** (*Terbalik*)',
                'Mencetak **Lower Low** (sweep SSL/PDL)',
                'DXY **gagal cetak HH** — mencetak **Lower High**',
                'Penguatan Dolar melemah; Gold berpotensi berbalik naik'
              ],
              [
                '**Bearish SMT** (Potensi Turun)',
                '**DXY** (*Terbalik*)',
                'Mencetak **Higher High** (sweep BSL/PDH)',
                'DXY **gagal cetak LL** — mencetak **Higher Low**',
                'Pelemahan Dolar tertahan; Gold rawan berbalik turun'
              ]
            ]
          }
        },
        {
          number: '32.3',
          heading: '3 Syarat Validasi SMT agar Terhindar dari Noise',
          shortTitle: '3 Syarat Anti-Noise SMT',
          paragraphs: [
            'Perbedaan tinggi candle kecil pada M1 di luar jam aktif (misalnya pukul `11:30 WITA` saat sesi Asia tenang) bukan SMT Divergence yang valid, melainkan fluktuasi normal (*noise*). Pastikan seluruh 3 syarat berikut terpenuhi sebelum menggunakan SMT:',
            '1. **Timestamp dan Timeframe Identik:** Kedua titik swing yang dibandingkan wajib terbentuk pada **jam/candle yang sama** pada timeframe yang sama (`H1` atau `M15`). Jangan membandingkan puncak Gold hari Selasa dengan puncak Silver hari Kamis.',
            '2. **Lokasi Liquidity Kunci dan Jam Killzone (`Time & Price`):** SMT hanya valid jika terbentuk tepat di **level Liquidity penting** (`PDH/PDL`, `PWH/PWL`, `Asia/London High-Low`, atau `HTF PD Array`) di dalam **Killzone London atau NY AM**.',
            '3. **SMT sebagai Konfirmasi Konteks, Bukan Pemicu Entry Langsung:** Setelah SMT teridentifikasi, jangan langsung membuka Market Order. Turun ke `M5` dan tunggu pemicu eksekusi terukur berupa **CISD/MSS + PD Array (`FVG`/`OB`/`Unicorn`)**.'
          ]
        },
        {
          number: '32.4',
          heading: 'Studi Kasus XAU/USD: Konfluensi Ganda Bullish SMT (XAG + DXY) di NY AM',
          shortTitle: 'Studi Kasus SMT Gold',
          paragraphs: [
            'Berikut contoh penggunaan pengecekan cepat pada chart `XAG/USD` dan `DXY` untuk memvalidasi sweep pada XAU/USD di sesi NY AM:'
          ],
          exampleBox: {
            title: 'Eksekusi Bullish SMT Ganda — NY AM Killzone (20:45 WITA EDT)',
            rows: [
              {
                label: '1. Sweep di Level Kunci',
                detail: 'Pukul `20:45 WITA`, XAU/USD turun menembus **London Low `2.638,00`** dan sweep tipis ke **`2.636,50`** (Lower Low).'
              },
              {
                label: '2. Pengecekan XAG/USD & DXY (Timestamp Sama)',
                detail: '• Pada **`XAG/USD`** jam `20:45 WITA`: Silver tertahan di atas London Low-nya (membentuk **Higher Low**) → **Bullish SMT #1 valid**.\n• Pada **`DXY`** jam `20:45 WITA`: Indeks Dolar gagal menembus London High-nya (membentuk **Lower High**) → **Bullish SMT #2 valid**.'
              },
              {
                label: '3. Konfirmasi M5 & Eksekusi Terukur',
                detail: 'M5 XAU/USD mencetak **Bullish CISD** + `BISI` pada `2.638,20 – 2.640,00`. Entry **Buy `2.639,00`**, SL di **`2.635,50`** (buffer `$1,00` di bawah wick `2.636,50` → risiko **`$3,50`**). **TP1** di internal high **`2.646,00`** (**`+$7,00` / `2,00R`**), **TP2** di London High **`2.653,00`** (**`+$14,00` / `4,00R`**).'
              }
            ]
          },
          callout: {
            tone: 'tip',
            kicker: 'Catatan Praktis Harian',
            title: 'Salah Satu Konfirmasi (XAG atau DXY) Sudah Cukup Valid',
            body: 'Apabila XAU vs XAG sama-sama mencetak HH (tidak membentuk SMT), tetapi **XAU vs DXY** membentuk Bearish SMT (DXY gagal mencetak LL) tepat di PDH pada NY AM Killzone, sinyal SMT tetap dapat digunakan karena **DXY adalah acuan makro langsung bagi XAU/USD**.'
          }
        }
      ],
      keyTakeaways: [
        '**SMT Divergence** adalah ketidaksinkronan struktur pada timestamp identik di level Liquidity kunci, yang mengindikasikan bahwa sweep pada satu instrumen bersifat manipulasi.',
        'Polaritas baku untuk XAU/USD: **XAU vs XAG berkorelasi searah**, sedangkan **XAU vs DXY berkorelasi terbalik**.',
        'SMT tanpa **Key Level** dan di luar **Killzone** merupakan noise; eksekusi tetap wajib menunggu **CISD/MSS + PD Array** pada LTF M5.'
      ],
      bridgeNext: 'Setelah mampu mengonfirmasi titik pembalikan menggunakan SMT Divergence, langkah berikutnya adalah memahami peta siklus harga secara utuh dari awal hingga selesai pada **Bab 33: Market Maker Buy & Sell Model (MMXM): Peta Besar Perjalanan Harga**.',
      practiceCta: {
        label: 'Pantau Arah DXY & Kompas Fundamental Gold',
        description: 'Cek kekuatan Indeks Dolar AS (DXY) dan sentimen makro Gold di modul Market Intelligence sebagai pendamping konfirmasi SMT.',
        href: '../market-intel/index.html'
      },
      conceptBlocks: [
        {
          heading: 'SMT Divergence: XAU vs XAG & DXY',
          paragraphs: [
            'SMT terjadi saat satu instrumen sweep level Liquidity kunci sementara pasangan korelasinya gagal menembus pada timestamp sama. XAU–XAG searah; XAU–DXY terbalik. Wajib di Key Level + Killzone dan tetap dikonfirmasi CISD/MSS.'
          ]
        }
      ],
      mappingSteps: [
        'Buka chart pembanding XAG/USD (searah) dan DXY (terbalik) pada timeframe yang sama (H1/M15).',
        'Tunggu XAU/USD sweep level Liquidity penting (PDH/PDL, Asia/London H-L) di jam Killzone.',
        'Bandingkan titik puncak/dasar pada timestamp identik: jika satu sweep dan pasangannya gagal → SMT aktif.',
        'Turun ke M5 dan tunggu CISD/MSS + PD Array di XAU/USD sebelum menekan entry.'
      ],
      decisionTree: [
        {
          condition: 'SMT terlihat di tengah range jam 11:30 WITA tanpa menyentuh level Liquidity penting.',
          action: 'Abaikan (noise). SMT hanya valid di Key Level/HTF POI dalam jam Killzone.'
        },
        {
          condition: 'XAU vs XAG sama-sama HH, tetapi DXY gagal LL (cetak HL) tepat di PDH jam NY AM.',
          action: 'Valid sebagai Bearish SMT karena DXY penggerak makro langsung Gold — pantau CISD Bearish M5.'
        }
      ],
      validRules: [
        'Titik pembanding antar-aset wajib berada pada timestamp dan timeframe identik.',
        'SMT terjadi di level Liquidity kunci / HTF PD Array dalam jendela Killzone dan diikuti konfirmasi CISD/MSS.'
      ],
      invalidRules: [
        'Membandingkan swing dari dua waktu berbeda antar aset.',
        'Entry instan hanya karena SMT tanpa menunggu penutupan candle CISD/MSS.'
      ],
      xauScenario: {
        context: 'NY AM Killzone 20:45 WITA: XAU sweep London Low 2.638,00 ke 2.636,50, sementara XAG cetak HL dan DXY cetak LH.',
        steps: [
          'Konfluensi ganda Bullish SMT + M5 CISD + BISI 2.638,20–2.640,00.',
          'Buy 2.639,00, SL 2.635,50 ($3,50), TP1 2.646,00 (2,00R), TP2 London High 2.653,00 (4,00R).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: SMT Mikro pada Sesi Asia Tenang',
        context: 'Pukul 11:30 WITA di tengah range M5, Gold cetak titik sedikit lebih tinggi dari Silver; trader langsung Sell.',
        whyFailed: 'Di luar Killzone dan bukan di level Liquidity kunci — sesi London langsung mendorong keduanya naik menembus SL.'
      },
      goldenRules: [
        'SMT Divergence hanya valid pada Key Level dan sesi Killzone; di luar itu hanya noise.',
        'Polaritas baku: XAU vs XAG searah; XAU vs DXY terbalik.'
      ],
      quiz: [
        {
          question: 'Kondisi mana yang menunjukkan **Bullish SMT Divergence** antara `XAU/USD` (Gold) dan `DXY` (Indeks Dolar AS)?',
          options: [
            '**`XAU/USD` mencetak Lower Low (sweep SSL), sementara pada waktu sama `DXY` GAGAL mencetak Higher High (malah Lower High)**',
            '`XAU/USD` mencetak Lower Low dan `DXY` serempak mencetak Higher High sangat kuat',
            '`XAU/USD` mencetak Higher High dan `DXY` juga mencetak Higher High secara acak di sesi Asia',
            '`XAU/USD` diam sideways saat `DXY` tutup'
          ],
          answerIndex: 0,
          explanation: 'Karena korelasi Gold dan DXY terbalik, kegagalan DXY mencetak HH saat Gold mencetak LL menandakan momentum Dolar melemah dan Gold berpotensi berbalik naik.'
        },
        {
          question: 'Kondisi mana yang menunjukkan **Bearish SMT Divergence** antara `XAU/USD` dan `XAG/USD` (Silver)?',
          options: [
            '**`XAU/USD` mencetak Higher High sweep PDH, sementara di jam yang sama `XAG/USD` gagal menembus PDH-nya (`Lower High`)**',
            'Keduanya sama-sama menembus PDH dengan Displacement tebal',
            '`XAU/USD` mencetak Lower Low sementara `XAG/USD` mencetak Higher Low',
            '`XAU/USD` naik hari Senin dan `XAG/USD` turun hari Jumat'
          ],
          answerIndex: 0,
          explanation: 'Gold dan Silver berkorelasi searah; saat Gold sweep puncak (HH) namun Silver gagal (LH) di jam yang sama, muncul sinyal Bearish SMT.'
        },
        {
          question: 'Syarat wajib agar **SMT Divergence** tidak menjadi sinyal palsu (noise) adalah...',
          options: [
            'Cukup melihat chart M1 kapan saja',
            'Terjadi pada **timestamp yang sama persis**, tepat di **level Liquidity kunci / HTF PD Array**, dan di dalam **jam Killzone**',
            'Wajib ditambah indikator MACD dan Stochastic',
            'Hanya boleh dipakai pada hari Jumat malam'
          ],
          answerIndex: 1,
          explanation: 'SMT bekerja karena konteks Time & Price: waktu identik, lokasi Liquidity kunci, dan sesi institusional.'
        },
        {
          question: 'Setelah melihat **Bullish SMT** valid antara Gold dan Silver tepat di PDL pukul `20:45 WITA`, langkah eksekusi paling aman adalah...',
          options: [
            'Langsung tekan Buy Market detik itu juga tanpa menunggu candle tutup',
            'Turun ke `M5` dan tunggu konfirmasi perubahan arah (**`CISD`/`MSS` + `PD Array`**) di `XAU/USD` sebelum entry',
            'Tunggu sampai harga menembus PDH dulu baru Buy',
            'Langsung Sell karena Gold baru saja mencetak Lower Low'
          ],
          answerIndex: 1,
          explanation: 'SMT adalah konfirmasi konteks, bukan pemicu entry langsung — tetap wajib menunggu CISD/MSS di LTF untuk timing dan SL presisi.'
        },
        {
          question: 'Mengapa membandingkan Swing High Gold pukul `15:00 WITA` dengan Swing High Silver pukul `18:00 WITA` dianggap tidak valid?',
          options: [
            'Karena SMT wajib membandingkan titik swing pada **jendela waktu (timestamp) yang sama persis**',
            'Karena pukul `18:00 WITA` pasar Silver libur',
            'Karena Gold dan Silver tidak boleh dilihat di M15',
            'Karena hanya perbandingan 1 minggu penuh yang valid'
          ],
          answerIndex: 0,
          explanation: 'SMT mengukur perbedaan struktur harga pada momen yang sama; membandingkan dua waktu berbeda menghilangkan validitas korelasinya.'
        }
      ]
    },

    // =========================================================================
    // BAGIAN VI — BAB 33: MARKET MAKER BUY & SELL MODEL (MMXM)
    // =========================================================================
    {
      id: 'mmxm-market-maker-model',
      levelId: 5,
      number: 33,
      bookFormat: true,
      title: 'Market Maker Buy & Sell Model (MMXM): Peta Besar Perjalanan Harga',
      subtitle: 'Kerangka siklus lengkap yang menghubungkan seluruh elemen ICT dalam satu kurva terstruktur: dari Original Consolidation, Smart Money Reversal, hingga Low Resistance Liquidity Run menuju Terminus.',
      readMinutes: 10,
      diagramId: 'mmxm-market-maker-model',
      diagramAfterSection: 1,
      summary: 'Anatomi 4 tahap Market Maker Buy/Sell Model (MMBM/MMSM), prinsip Side of the Curve (alasan PD Array sisi kiri ditembus cepat sebagai LRLR), dua area entry utama (SMR dan Re-Accumulation/Redistribution), serta studi kasus XAU/USD.',
      bookSections: [
        {
          number: '33.1',
          heading: 'Konsep Kurva Siklus MMXM: Market Maker Buy Model & Sell Model',
          shortTitle: 'Peta Besar Kurva MMXM',
          paragraphs: [
            'Salah satu penyebab umum kegagalan saat menggunakan FVG atau Order Block adalah menganalisis zona tersebut secara terpisah tanpa melihat posisinya dalam siklus pergerakan harga. Sebuah Bearish FVG yang tampak rapi sering ditembus dengan mudah karena harga sebenarnya sedang berada pada fase pembalikan naik menuju target atas.',
            'Dalam kerangka ICT, siklus lengkap pergerakan harga intraday maupun swing XAU/USD dipetakan melalui **Market Maker Buy Model (`MMBM`)** untuk siklus beli berbentuk huruf **"V"**, dan **Market Maker Sell Model (`MMSM`)** untuk siklus jual berbentuk **"Λ"** — keduanya dirujuk bersama sebagai **MMXM**.',
            'Sisi kiri kurva adalah fase pembentukan deretan Liquidity (Swing High atau Swing Low) menuju HTF PD Array; titik ekstrem di HTF PD Array adalah area pembalikan institusional (**Smart Money Reversal / SMR**); dan sisi kanan kurva adalah fase ekspansi kembali menuju titik awal (**Terminus**).'
          ]
        },
        {
          number: '33.2',
          heading: '4 Tahap Kronologis Market Maker Buy Model (MMBM) & Sell Model (MMSM)',
          shortTitle: '4 Tahap Resmi MMXM',
          paragraphs: [
            'Keempat tahap berikut berjalan berurutan dan membantu Anda mengidentifikasi posisi harga saat ini sebelum memilih arah transaksi:'
          ],
          table: {
            caption: '4 Tahap Kronologis Market Maker Model (MMBM & MMSM)',
            headers: ['Tahap Siklus', 'Pada MMBM (Kurva Beli "V")', 'Pada MMSM (Kurva Jual "Λ")', 'Implikasi bagi Trader'],
            rows: [
              [
                '**1. Original Consolidation (OC)**',
                'Rentang konsolidasi awal (misalnya Asia Range / H1) sebelum harga bergerak turun keluar',
                'Rentang konsolidasi awal sebelum harga bergerak naik keluar',
                'Batas seberang OC menjadi **Target Akhir (Terminus)**'
              ],
              [
                '**2. Sisi Kiri Kurva** (*Engineering*)',
                'Harga turun bertahap menuju HTF POI sambil meninggalkan deretan **Swing High (BSL)**',
                'Harga naik bertahap menuju HTF POI sambil meninggalkan deretan **Swing Low (SSL)**',
                'Tandai setiap swing sisi kiri sebagai target bertahap pada sisi kanan'
              ],
              [
                '**3. Smart Money Reversal (SMR)**',
                'Menyentuh **HTF PD Array** (PDL / H1-H4 OB/FVG) → Sweep + (opsional SMT) + MSS Bullish',
                'Menyentuh **HTF PD Array** (PDH / H1-H4 OB/FVG) → Sweep + (opsional SMT) + MSS Bearish',
                '**Area Entry Tahap 1** dengan potensi R:R terbesar'
              ],
              [
                '**4. Sisi Kanan Kurva** (*LRLR → Terminus*)',
                'Naik cepat melalui `1–2×` jeda **Re-Accumulation** menembus deretan BSL hingga melewati batas atas OC',
                'Turun cepat melalui `1–2×` jeda **Redistribution** menembus deretan SSL hingga melewati batas bawah OC',
                '**Area Entry Tahap 2** (Re-Acc/Redist); **hentikan entry searah** setelah OC tersapu'
              ]
            ]
          }
        },
        {
          number: '33.3',
          heading: 'Prinsip Side of the Curve, LRLR vs HRLR, dan Batas Terminus',
          shortTitle: 'Side of the Curve & LRLR',
          paragraphs: [
            'Mengetahui sisi kurva tempat harga berada membuat penyaringan PD Array menjadi jauh lebih objektif:',
            '1. **Buy-Side of the Curve (Sisi Kanan MMBM):** Seluruh **Bullish PD Array** (`BISI`, Bullish OB, Bullish Breaker) berfungsi sebagai pijakan lanjutan naik, sedangkan **Bearish PD Array bekas sisi kiri** cenderung ditembus dengan cepat. Pergerakan cepat melewati deretan Liquidity sisi kiri ini disebut **Low Resistance Liquidity Run (`LRLR`)** — kebalikan dari **High Resistance Liquidity Run (`HRLR`)** yang bergerak lambat penuh hambatan.',
            '2. **Sell-Side of the Curve (Sisi Kanan MMSM):** Berlaku sebaliknya — seluruh Bearish PD Array dihormati sebagai pijakan turun, sementara Bullish PD Array bekas sisi kiri ditembus cepat menuju batas bawah Original Consolidation.',
            '3. **Akhir Siklus pada Terminus:** Begitu harga menyapu batas atas/bawah **Original Consolidation (Terminus)**, siklus MMXM dinyatakan selesai. Hindari membuka posisi searah baru di luar Terminus karena risiko pembalikan distribusi sangat tinggi.'
          ]
        },
        {
          number: '33.4',
          heading: 'Studi Kasus XAU/USD: Siklus MMBM Utuh dari Asia OC ke PDL hingga Terminus',
          shortTitle: 'Studi Kasus MMBM Gold',
          paragraphs: [
            'Berikut contoh rangkaian 4 tahap **MMBM** pada chart M15 XAU/USD dalam satu hari perdagangan:'
          ],
          exampleBox: {
            title: 'Peta Kurva MMBM M15 XAU/USD — Selasa Sesi London ke NY AM',
            rows: [
              {
                label: 'Tahap 1–2 — Original Consolidation & Sisi Kiri',
                detail: 'Konsolidasi Asia (**OC**) berada di `2.658,00 – 2.662,00`. Pukul `14:15 WITA`, Gold turun bertahap menuju **PDL + H1 Bullish OB di `2.642,00`** sambil meninggalkan dua Swing High bersih di `2.657,00` dan `2.651,00`.'
              },
              {
                label: 'Tahap 3 — Smart Money Reversal (SMR)',
                detail: 'Pada `2.641,50`, Gold melakukan sweep PDL sebesar `$0,50` lalu berbalik naik tegas mematahkan struktur (MSS Bullish) dan meninggalkan `BISI` M5 di `2.645,00 – 2.647,00`. Harga resmi memasuki **Buy-Side of the Curve**.'
              },
              {
                label: 'Tahap 4 — Eksekusi, Re-Accumulation & Terminus LRLR',
                detail: 'Entry **Buy `2.646,00`** (Tahap 1; atau pada jeda Re-Accumulation `2.650,00` sebagai Tahap 2), **SL `2.640,50`** (buffer `$1,00` di bawah `2.641,50` → risiko **`$5,50`**). Harga menembus Bearish FVG sisi kiri (`LRLR`) mencapai **TP1 Swing High `2.657,00`** (**`+$11,00` / `2,00R`**) dan **TP2 Terminus puncak OC `2.662,50`** (**`+$16,50` / `3,00R`**).'
              }
            ]
          },
          callout: {
            tone: 'warn',
            kicker: 'Dua Kesalahan Umum pada MMXM',
            title: 'Hindari Counter-Trend di Sisi Kanan dan Jangan Mengejar Setelah Terminus',
            body: 'Kesalahan yang paling sering merugikan di MMXM adalah: (1) membuka Sell pada Bearish FVG bekas sisi kiri saat harga sudah memasuki **Buy-Side** (`LRLR`), dan (2) membuka Buy baru setelah puncak **Original Consolidation (Terminus)** sudah tersapu penuh.'
          }
        }
      ],
      keyTakeaways: [
        '**MMXM (`MMBM`/`MMSM`)** memetakan siklus lengkap 4 tahap: **Original Consolidation (OC)** → **Engineering Sisi Kiri** → **Smart Money Reversal (SMR di HTF POI)** → **Re-Accumulation/Redistribution & LRLR menuju Terminus**.',
        'Prinsip **Side of the Curve**: pada sisi kanan MMBM, Bullish PD Array dihormati sedangkan Bearish PD Array bekas sisi kiri ditembus cepat (**LRLR**).',
        'Area entry terstruktur hanya pada **Tahap 1 (SMR)** atau **Tahap 2 (Re-Accumulation/Redistribution)** — begitu **Original Consolidation (Terminus)** tersapu, siklus selesai.'
      ],
      bridgeNext: 'Setelah memahami peta siklus MMXM pada skala intraday dan beberapa hari, langkah berikutnya adalah mempelajari peta waktu skala mingguan dan kuartalan pada **Bab 34: Weekly Profile (Classic Expansion, Midweek Reversal, TGIF) & IPDA 20/40/60**.',
      practiceCta: {
        label: 'Lacak Kurva MMBM/MMSM Bar-by-Bar di Candle Replay',
        description: 'Gunakan Candle Replay M15/H1 XAU/USD untuk melatih mata mengenali Original Consolidation, SMR, Re-Accumulation, dan Terminus secara langsung.',
        href: 'trading-practice/candle-replay.html'
      },
      conceptBlocks: [
        {
          heading: 'Market Maker Buy & Sell Model (MMXM)',
          paragraphs: [
            'MMXM merangkai 4 tahap: Original Consolidation (Terminus) → Engineering sisi kiri → Smart Money Reversal di HTF POI → Re-Accumulation/Redistribution & LRLR sweep Terminus.'
          ]
        }
      ],
      mappingSteps: [
        'Tandai Original Consolidation (OC) terakhir pada H1/M15.',
        'Amati sisi kiri kurva yang membentuk deretan Swing menuju HTF PD Array (PDH/PDL/H1 OB).',
        'Tunggu Smart Money Reversal (Sweep + Displacement + MSS) di HTF PD Array.',
        'Cari entry hanya di Tahap 1 (SMR) atau Tahap 2 (Re-Accumulation/Redistribution) dengan target akhir OC (Terminus).'
      ],
      decisionTree: [
        {
          condition: 'Ketinggalan entry di dasar SMR pada MMBM.',
          action: 'Tunggu jeda Tahap 2 (Re-Accumulation di FVG/OB sisi kanan) — jangan mengejar candle yang sudah melaju jauh.'
        },
        {
          condition: 'Harga sudah sweep penuh batas atas Original Consolidation (Terminus).',
          action: 'Siklus MMBM resmi selesai — kunci profit dan berhenti membuka Buy searah baru.'
        }
      ],
      validRules: [
        'SMR wajib bertumpu pada HTF PD Array nyata (PDH/PDL, H1/H4 OB/FVG).',
        'Target Terminus adalah sisi seberang Original Consolidation.'
      ],
      invalidRules: [
        'Melawan arus dengan memakai FVG bekas sisi kiri kurva saat sudah masuk LRLR.',
        'Terus membuka posisi searah setelah Original Consolidation sudah tersapu penuh.'
      ],
      xauScenario: {
        context: 'MMBM M15 XAU/USD: Asia OC 2.658–2.662, turun ke PDL + H1 OB 2.642, SMR di 2.641,50.',
        steps: [
          'Buy di BISI pasca-SMR 2.646,00, SL 2.640,50 ($5,50).',
          'LRLR menembus sisi kiri ke TP1 2.657,00 (2,00R) dan TP2 Terminus OC 2.662,50 (3,00R).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: Buy Terlambat di Atas Terminus',
        context: 'Setelah MMBM selesai sweep puncak OC 2.662–2.663, trader tetap Buy di FVG baru 2.661.',
        whyFailed: 'Siklus pengiriman MMBM sudah tuntas di Terminus; aksi distribusi jual langsung membalikkan harga mengenai SL.'
      },
      goldenRules: [
        'Tentukan Sisi Kurva (Buy-Side vs Sell-Side) sebelum memilih FVG atau Order Block.',
        'Masuk di Tahap 1 (SMR) atau Tahap 2 (Re-Acc/Redist) dan kunci profit saat Terminus tersapu.'
      ],
      quiz: [
        {
          question: 'Dalam **Market Maker Buy Model (MMBM)**, apa peran utama dari area **Original Consolidation (OC)** pada akhir siklus?',
          options: [
            'Sebagai area Stop Loss wajib',
            'Sebagai **Target Akhir (Terminus)** tempat kurva Buy-Side menyelesaikan pengirimannya',
            'Sebagai area yang tidak boleh disentuh selamanya',
            'Hanya penanda visual tanpa fungsi Liquidity'
          ],
          answerIndex: 1,
          explanation: 'Dalam MMXM, harga berawal dari Original Consolidation, menuju HTF PD Array untuk SMR, lalu menyapu sisi seberang OC sebagai Terminus.'
        },
        {
          question: 'Saat harga sudah resmi masuk ke **Buy-Side of the Curve** (pasca-SMR Bullish), apa yang biasanya terjadi pada Bearish FVG bekas sisi kiri kurva?',
          options: [
            'Bearish FVG sisi kiri akan menahan harga turun selama berhari-hari',
            'Bearish FVG sisi kiri cenderung **ditembus dengan mudah** karena arus bergerak cepat (**Low Resistance Liquidity Run / LRLR**) menuju Terminus',
            'Bearish FVG sisi kiri wajib dipakai untuk entry Sell besar',
            'Harga berhenti bergerak setiap menyentuhnya'
          ],
          answerIndex: 1,
          explanation: 'Prinsip Side of the Curve: pada Buy-Side, Bullish PD Array dihormati sedangkan Bearish PD Array sisi kiri ditembus cepat.'
        },
        {
          question: 'Jika Anda ketinggalan entry di dasar **Smart Money Reversal (SMR)** pada MMBM, di mana titik entry kedua yang paling terstruktur?',
          options: [
            'Mengejar Buy tepat di atas puncak Original Consolidation (Terminus)',
            'Menunggu fase **Re-Accumulation** (jeda retracement pertama di sisi kanan kurva ke Bullish FVG/OB baru)',
            'Langsung Sell melawan arah SMR',
            'Menunggu 1 bulan penuh'
          ],
          answerIndex: 1,
          explanation: 'Tahap 2 (Re-Accumulation pada MMBM / Redistribution pada MMSM) adalah titik entry lanjutan terbaik sebelum Terminus.'
        },
        {
          question: 'Di mana **Smart Money Reversal (SMR)** yang valid seharusnya terbentuk?',
          options: [
            'Di ruang kosong tanpa level referensi apa pun',
            'Tepat di sebuah **HTF PD Array atau Liquidity Pool kunci** (H1/H4 FVG, OB, atau PDH/PDL)',
            'Tepat di menit pertama pasar buka hari Senin',
            'Hanya saat indikator RSI menyentuh 50'
          ],
          answerIndex: 1,
          explanation: 'Tanpa pijakan HTF Key Level/PD Array, pembalikan LTF hanyalah koreksi sementara, bukan SMR sejati.'
        },
        {
          question: 'Apa tanda bahwa siklus **Market Maker Sell Model (MMSM)** sudah **selesai** sehingga Anda tidak perlu lagi mengejar Sell baru?',
          options: [
            'Saat candle pertama merah muncul',
            'Saat harga sudah jatuh **menembus dan sweep batas bawah Original Consolidation (Terminus)**',
            'Saat terjadi Redistribution tahap pertama',
            'Saat sesi London baru saja dimulai'
          ],
          answerIndex: 1,
          explanation: 'Begitu batas bawah Original Consolidation tersapu, target Liquidity MMSM sudah tuntas dan rawan pembalikan arah.'
        }
      ]
    },

    // =========================================================================
    // BAGIAN VI — BAB 34: WEEKLY PROFILE (CLASSIC, MIDWEEK, TGIF) & IPDA 20/40/60
    // =========================================================================
    {
      id: 'ict-macros-weekly-ipda',
      levelId: 5,
      number: 34,
      bookFormat: true,
      title: 'Weekly Profile (Classic Expansion, Midweek Reversal, TGIF) & IPDA 20/40/60',
      subtitle: 'Memetakan ritme 5 hari perdagangan Senin–Jumat melalui Weekly Profile dan batas memori Liquidity 20, 40, dan 60 hari perdagangan pada chart Daily.',
      readMinutes: 9,
      diagramId: 'ict-macros-weekly-ipda',
      diagramAfterSection: 0,
      summary: 'Tiga template mingguan utama XAU/USD (Classic Expansion, Midweek Reversal, Friday TGIF retracement 20%–30%), cara memetakan IPDA Data Range Lookback 20/40/60 hari perdagangan di Daily, serta kombinasi Weekly Profile dengan jendela Macro 20 menit (Bab 16).',
      bookSections: [
        {
          number: '34.1',
          heading: 'Hubungan Jadwal Harian dengan Struktur Mingguan (Weekly Profile)',
          shortTitle: 'Peta Waktu Mingguan',
          paragraphs: [
            'Pada **Bab 16** telah dibahas jendela waktu harian (**Killzone**, **Silver Bullet**, dan **ICT Macro 20 menit `xx:50–xx:10 NY`**). Untuk hasil yang konsisten, jendela waktu harian tersebut perlu dilihat di dalam konteks yang lebih besar: **posisi hari di dalam kalender mingguan dan seberapa jauh rentang minggu berjalan sudah terbentuk**.',
            'Sebagaimana satu hari memiliki siklus AMD (Akumulasi Asia → Manipulasi London → Ekspansi NY), **satu minggu perdagangan (Senin–Jumat) membentuk satu candle Weekly yang juga menjalankan siklus serupa**. Memahami *Weekly Profile* membantu mencegah dua kesalahan umum: memaksakan transaksi pada hari Senin yang sempit, serta mengejar breakout pada hari Jumat malam saat institusi merealisasikan keuntungan.'
          ]
        },
        {
          number: '34.2',
          heading: '3 Template Weekly Profile Utama pada XAU/USD',
          shortTitle: '3 Template Weekly Profile',
          paragraphs: [
            'Sebagian besar pergerakan mingguan XAU/USD dapat dikelompokkan ke dalam **3 template Weekly Profile** berikut:'
          ],
          table: {
            caption: '3 Template Weekly Profile Utama pada XAU/USD (Senin–Jumat)',
            headers: ['Weekly Profile', 'Pola Senin – Selasa', 'Pola Rabu – Kamis', 'Pola Jumat & Strategi'],
            rows: [
              [
                '**1. Classic Expansion** (*Paling Umum*)',
                '**Senin** konsolidasi pembukaan; **Selasa** (atau Rabu London) membentuk **Low/High of the Week** (*manipulasi mingguan*)',
                'Ekspansi penuh searah bias mingguan menuju DOL HTF (fase pergerakan paling bersih)',
                'Puncak rentang atau konsolidasi; fokus eksekusi utama pada **Selasa–Kamis**'
              ],
              [
                '**2. Midweek Reversal** (*Pekan CPI/FOMC*)',
                'Senin–Selasa bergerak satu arah mengambil Liquidity menuju HTF PD Array besar',
                '**Rabu** (umumnya bertepatan rilis data High Impact AS) terjadi **pembalikan arah utama**',
                'Kamis–Jumat melanjutkan arah baru; hindari melawan tren baru pasca-Rabu'
              ],
              [
                '**3. Friday TGIF** (*Thank God It’s Friday*)',
                'Senin–Kamis tren sudah menempuh rentang mingguan ekstrem (misalnya `+$80` s.d. `+$120` pada Gold)',
                'Target mingguan tercapai pada Kamis atau Jumat pagi',
                'Jumat NY sering melakukan **retracement `20%–30%`** rentang mingguan akibat *profit-taking*; **hentikan mengejar breakout**'
              ]
            ]
          }
        },
        {
          number: '34.3',
          heading: 'IPDA Data Range Lookback (20 / 40 / 60 Hari Perdagangan)',
          shortTitle: 'IPDA Lookback 20/40/60',
          paragraphs: [
            'Pada chart Daily XAU/USD terdapat banyak puncak dan dasar historis dari tahun-tahun sebelumnya. Untuk menentukan level makro yang paling relevan dengan aliran order berjalan (*Interbank Price Delivery Algorithm / IPDA*), ICT menggunakan acuan **IPDA Data Range Lookback** yang dihitung mundur berdasarkan **jumlah hari perdagangan** (*trading days*, bukan hari kalender):',
            '1. **20 Hari Perdagangan Terakhir (≈ 1 Bulan) — Prioritas #1:** High tertinggi dan Low terendah dalam 20 candle Daily terakhir adalah Liquidity Pool makro paling aktif dan paling sering diuji terlebih dahulu.',
            '2. **40 Hari Perdagangan Terakhir (≈ 2 Bulan) — Prioritas #2:** Digunakan sebagai target lanjutan apabila batas High/Low 20 hari sudah ditembus atau tersapu.',
            '3. **60 Hari Perdagangan Terakhir (≈ 1 Kuartal / 3 Bulan) — Prioritas #3:** Batas struktural kuartalan yang digunakan sebagai acuan makro jangka menengah.',
            'Dengan batasan ini, Anda tidak perlu menggambar garis support-resistance dari beberapa tahun lalu. Cukup tandai High dan Low dalam jendela `20/40/60` hari perdagangan setiap Minggu malam.'
          ]
        },
        {
          number: '34.4',
          heading: 'Studi Kasus XAU/USD: NY Macro pada Rabu Classic Expansion vs Jumat TGIF',
          shortTitle: 'Studi Kasus Weekly + Macro',
          paragraphs: [
            'Berikut perbandingan hasil penerapan **NY Macro (`21:50–22:10 WITA` EDT / `22:50–23:10 WITA` EST — Bab 16)** pada dua hari dengan konteks Weekly Profile berbeda:'
          ],
          exampleBox: {
            title: 'Perbandingan Konteks: Rabu Classic Expansion vs Jumat TGIF',
            rows: [
              {
                label: 'Kasus A — Rabu 21:50 WITA EDT (Classic Bullish Expansion)',
                detail: 'Selasa London sudah membentuk *Low of the Week* di PDL (menyentuh IPDA 20-day Low). Rabu `21:50 WITA` (NY Macro), harga di M15 Bullish FVG `2.655,00` melakukan sweep micro-low `2.654,20` lalu M5 CISD → **Buy `2.656,00`**, **SL `2.653,00`** (`$3,00`). **TP1 `2.662,00`** (**`+$6,00` / `2,00R`**) dan **TP2 High harian `2.668,00`** (**`+$12,00` / `4,00R`**) tercapai dalam 25 menit.'
              },
              {
                label: 'Kasus B — Jumat 21:50 WITA EDT (Setelah Reli +$90 Minggu Berjalan · TGIF)',
                detail: 'Gold telah naik `+$90` sejak Senin hingga Kamis. Membuka Buy breakout pada Macro Jumat malam bertabrakan dengan aksi *profit-taking* akhir pekan yang menarik harga retrace `-25%` dari rentang mingguan (**`-$22,50`**) dan mengenai Stop Loss.'
              }
            ]
          },
          callout: {
            tone: 'tip',
            kicker: 'Panduan Alokasi Fokus Mingguan',
            title: 'Senin Observasi · Selasa–Kamis Fokus Utama · Jumat Waspada TGIF',
            body: 'Apabila pergerakan hari Senin cenderung lambat dan bolak-balik, pasar sedang membentuk *Opening Range* mingguan. Fokuskan ekspektasi target utama pada **Selasa hingga Kamis**, dan kurangi ukuran target atau amankan profit lebih awal pada hari **Jumat**.'
          }
        }
      ],
      keyTakeaways: [
        '**Weekly Profile** mengelompokkan pola mingguan Gold ke dalam **Classic Expansion** (Selasa/Rabu membentuk ekstrem mingguan → Rabu–Kamis ekspansi), **Midweek Reversal** (pembalikan arah pada Rabu CPI/FOMC), dan **Friday TGIF** (retracement `20%–30%` rentang mingguan pada hari Jumat).',
        '**IPDA Lookback (`20 / 40 / 60` hari perdagangan Daily)** menyaring level makro aktif dalam 1 bulan, 2 bulan, dan 1 kuartal terakhir.',
        'Jendela **ICT Macro 20 menit** (Bab 16) bekerja paling efektif pada hari ekspansi (Selasa–Kamis), bukan untuk mengejar breakout ekstrem pada Jumat malam TGIF.'
      ],
      bridgeNext: 'Apabila XAU/USD menembus rekor tertinggi baru (**All-Time High**) sehingga tidak ada lagi Swing High historis di sebelah kiri pada jendela IPDA 20/40/60 hari, penentuan target Take Profit dilakukan secara matematis pada **Bab 35: Standard Deviation Projections (-1 / -2 / -2,5 / -4) & Candle Range Theory (CRT)**.',
      practiceCta: {
        label: 'Cek Jadwal Berita Mingguan untuk Deteksi Midweek Reversal',
        description: 'Buka Kalender Ekonomi di Market Intelligence setiap Minggu malam untuk menandai hari rilis CPI/FOMC pemicu Midweek Reversal.',
        href: '../market-intel/index.html'
      },
      conceptBlocks: [
        {
          heading: 'Weekly Profile & IPDA 20/40/60 Hari',
          paragraphs: [
            'Tiga profil mingguan utama Gold adalah Classic Expansion (Selasa/Rabu membentuk ekstrem mingguan), Midweek Reversal (pembalikan arah pada Rabu), dan Friday TGIF (retracement profit-taking 20–30%). IPDA Lookback memetakan High/Low makro aktif pada 20, 40, dan 60 hari perdagangan terakhir.'
          ]
        }
      ],
      mappingSteps: [
        'Setiap Minggu malam di Daily, tandai High & Low dari 20 hari perdagangan terakhir (IPDA #1), lalu 40 dan 60 hari jika harga mendekati batas 20 hari.',
        'Cek kalender berita High Impact hari Rabu/Kamis untuk mengantisipasi Classic Expansion vs Midweek Reversal.',
        'Fokuskan peluang utama pada Selasa–Kamis; pada hari Jumat setelah reli jauh, waspadai retracement TGIF 20%–30%.'
      ],
      decisionTree: [
        {
          condition: 'Hari Senin pagi chart lambat dan bolak-balik.',
          action: 'Kondisi normal (pembentukan Opening Range mingguan) — kecilkan target atau tunggu Selasa–Kamis.'
        },
        {
          condition: 'Jumat malam setelah Gold reli +$90 minggu ini, muncul dorongan untuk Buy breakout di puncak.',
          action: 'Hentikan entry breakout — area rawan Friday TGIF retracement 20%–30% dari rentang mingguan.'
        }
      ],
      validRules: [
        'Gunakan IPDA Lookback 20/40/60 hari perdagangan di chart Daily agar peta makro tetap terfokus.',
        'Selalu sesuaikan ekspektasi target dengan posisi hari pada Weekly Profile.'
      ],
      invalidRules: [
        'Mengejar breakout swing jauh pada Jumat malam setelah tren 4 hari sudah ekstrem.',
        'Menggambar puluhan garis historis lama di luar jendela IPDA 20/40/60 hari.'
      ],
      xauScenario: {
        context: 'Rabu 21:50 WITA (Classic Bullish Expansion pasca Low of the Week Selasa) di M15 FVG 2.655,00.',
        steps: [
          'NY Macro sweep micro-low 2.654,20 → CISD M5 → Buy 2.656,00, SL 2.653,00 ($3,00).',
          'TP1 2.662,00 (2,00R) dan TP2 High harian 2.668,00 (4,00R).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: Buy Breakout pada Puncak Jumat TGIF',
        context: 'Jumat 22:00 WITA setelah Gold reli +$90 sepanjang Senin–Kamis; trader membuka Buy breakout di puncak.',
        whyFailed: 'Aksi profit-taking akhir pekan (TGIF) menarik harga retrace 25% (-$22,50) dan mengenai SL.'
      },
      goldenRules: [
        'Senin observasi, Selasa–Kamis fokus ekspansi utama, Jumat waspada retracement TGIF.',
        'IPDA 20/40/60 hari perdagangan menjaga pemetaan Daily tetap bersih dan relevan.'
      ],
      quiz: [
        {
          question: 'Dalam **Classic Bullish Expansion Weekly Profile**, pada hari apa **Low of the Week** (titik manipulasi ke bawah sebelum ekspansi naik) paling sering terbentuk?',
          options: [
            'Jumat sore menjelang pasar tutup',
            '**Selasa** (atau paling lambat **Rabu sesi London**)',
            'Sabtu pagi',
            'Selalu tepat di menit pertama hari Senin'
          ],
          answerIndex: 1,
          explanation: 'Pola klasik mingguan ICT: Senin konsolidasi, Selasa atau Rabu pagi membentuk Low of the Week, lalu Rabu–Kamis ekspansi penuh.'
        },
        {
          question: 'Apa yang dimaksud dengan fenomena **TGIF (*Thank God It’s Friday*)** dalam Weekly Profile ICT?',
          options: [
            'Harga selalu mencetak rekor baru tanpa koreksi di Jumat malam',
            '**Retracement balik `20%–30%` dari rentang mingguan** pada hari Jumat setelah tren Senin–Kamis melaju jauh, akibat aksi *profit-taking* sebelum akhir pekan',
            'Aturan wajib membuka lot 3× lebih besar di hari Jumat',
            'Larangan melihat chart pada hari Selasa'
          ],
          answerIndex: 1,
          explanation: 'TGIF adalah pullback profit-taking di hari Jumat menuju 20%–30% rentang mingguan setelah ekspansi satu arah panjang.'
        },
        {
          question: 'Berapa jendela **hari perdagangan** yang digunakan **IPDA Data Range Lookback** di chart Daily untuk memetakan Liquidity makro paling relevan?',
          options: [
            '`3`, `5`, dan `7` hari',
            '**`20`, `40`, dan `60` hari perdagangan terakhir** (≈ 1 bulan, 2 bulan, dan 1 kuartal)',
            '`100`, `200`, dan `500` hari',
            'Hanya `1` hari kemarin saja'
          ],
          answerIndex: 1,
          explanation: 'IPDA Lookback meninjau High/Low signifikan dalam 20, 40, dan 60 hari perdagangan terakhir di chart Daily.'
        },
        {
          question: 'Pada pekan yang memiliki jadwal rilis berita High Impact AS di hari Rabu (seperti **CPI** atau **FOMC**), template Weekly Profile mana yang sering terjadi jika Senin–Selasa harga terus naik menuju HTF PD Array?',
          options: [
            '**Midweek Reversal** — Senin–Selasa mengambil Liquidity ke atas, lalu Rabu terjadi pembalikan arah besar menuju Kamis–Jumat',
            'Pasar otomatis libur sampai minggu depan',
            'Tidak mungkin ada perubahan arah sepanjang minggu',
            'Friday TGIF terjadi pada hari Senin pagi'
          ],
          answerIndex: 0,
          explanation: 'Berita besar pertengahan minggu (Rabu CPI/FOMC) sering menjadi katalis Midweek Reversal setelah Liquidity awal minggu tersapu.'
        },
        {
          question: 'Jumat pukul `21:50 WITA` (NY Macro), Gold sudah reli naik **`+$90`** sejak Senin. Trader ingin membuka Buy breakout di puncak minggu ini karena sedang jam Macro. Keputusan paling disiplin?',
          options: [
            'Tetap wajib Buy karena jam Macro tidak boleh dilewatkan',
            '**Skip Buy breakout** — area ekstrem hari Jumat rawan retracement **TGIF (`20%–30%` ≈ `$18–$27`)** akibat aksi ambil untung akhir pekan',
            'Naikkan lot menjadi 5% risiko agar cepat untung',
            'Hapus Stop Loss lalu biarkan sampai Senin depan'
          ],
          answerIndex: 1,
          explanation: 'Konteks Weekly Profile lebih utama dibanding sinyal timing sesaat; mengejar puncak di hari Jumat TGIF berisiko terkena retracement profit-taking.'
        }
      ]
    },

    // =========================================================================
    // BAGIAN VI — BAB 35: STANDARD DEVIATION PROJECTIONS & CANDLE RANGE THEORY (CRT)
    // =========================================================================
    {
      id: 'stdev-crt-profiling',
      levelId: 5,
      number: 35,
      bookFormat: true,
      title: 'Standard Deviation Projections (-1 / -2 / -2,5 / -4) & Candle Range Theory (CRT)',
      subtitle: 'Metode proyeksi target Take Profit matematis saat XAU/USD berada di All-Time High tanpa swing referensi di sebelah kiri, serta pembacaan anatomi candle H4 dan Daily (OLHC/OHLC & CRT).',
      readMinutes: 10,
      diagramId: 'stdev-crt-profiling',
      diagramAfterSection: 1,
      summary: 'Rumus dan cara penarikan Fibonacci Standard Deviation (-1, -2, -2,5, -4) dari Manipulation Leg saat Gold mencetak All-Time High, anatomi candle OLHC/OHLC, pola 3-candle CRT H4/Daily, serta studi kasus terhitung di atas 2.710,00.',
      bookSections: [
        {
          number: '35.1',
          heading: 'Menentukan Target Take Profit Saat XAU/USD di All-Time High',
          shortTitle: 'Target di All-Time High',
          paragraphs: [
            'XAU/USD sering menembus rekor harga tertinggi baru (**All-Time High / ATH**). Pada kondisi tersebut, tidak tersedia lagi referensi historis di sebelah kiri chart — tidak ada PDH lama, PWH, maupun IPDA 60-day High di atas harga. Tanpa metode proyeksi objektif, trader cenderung menutup posisi terlalu dini atau menahan tanpa target jelas hingga harga berbalik.',
            'Dalam metodologi ICT, jarak proyeksi ekspansi diukur dari **ukuran kaki manipulasi terakhir (*Manipulation Leg*)** sebelum terjadinya perubahan struktur (`MSS`/`CISD`), menggunakan **Fibonacci Standard Deviation**.'
          ]
        },
        {
          number: '35.2',
          heading: 'Pengaturan Level Fibonacci Standard Deviation (-1 / -2 / -2,5 / -4) & Cara Tarik',
          shortTitle: 'Level Std Dev & Cara Tarik',
          paragraphs: [
            'Aktifkan level berikut pada tool *Fibonacci Retracement*: **`0`**, **`1`**, **`-1`**, **`-1,5`**, **`-2`**, **`-2,5`**, dan **`-4`**. Tarik Fibonacci tepat pada **Manipulation Leg** (kaki sweep terakhir sebelum `MSS`/`CISD`) sehingga angka negatif memanjang ke arah target:',
            '1. **Proyeksi Target Naik (Bullish):** Letakkan `1,0` pada **Low terendah sweep** dan `0,0` pada **Origin Swing High** sebelum turun sweep → level `-1`, `-2`, `-2,5`, `-4` memproyeksi ke **atas**.',
            '2. **Proyeksi Target Turun (Bearish):** Letakkan `1,0` pada **High tertinggi sweep** dan `0,0` pada **Origin Swing Low** sebelum naik sweep → level negatif memproyeksi ke **bawah**.'
          ],
          table: {
            caption: 'Fungsi dan Tindakan Manajemen Posisi pada Level Standard Deviation XAU/USD',
            headers: ['Level Std Dev', 'Rumus Jarak dari Origin (0,0)', 'Karakter Pergerakan XAU/USD', 'Tindakan Manajemen Posisi'],
            rows: [
              ['**`-1,0` Std Dev**', '`Origin ± (1 × Leg)`', 'Area reaksi pertama; sering membentuk jeda **Re-Accumulation / Redistribution**', 'Ambil **Partial awal** atau evaluasi geser BEP (jika R:R sudah `≥ 1,5R`)'],
              ['**`-2,0` s.d. `-2,5` Std Dev**', '`Origin ± (2 s.d. 2,5 × Leg)`', '**Zona Target Utama (Terminus):** mayoritas ekspansi intraday (`70%+`) berakhir atau mulai koreksi di rentang ini', '**Tutup mayoritas posisi (`70%–100%`)** — perhatikan pertemuan angka bulat `.00`/`.50` Gold'],
              ['**`-4,0` Std Dev**', '`Origin ± (4 × Leg)`', 'Batas ekspansi ekstrem — umumnya hanya tercapai saat hari rilis CPI/NFP atau tren sangat kuat', 'Target tambahan khusus sisa runner kecil (`10%–20%`)']
            ]
          }
        },
        {
          number: '35.3',
          heading: 'Candle Range Theory (CRT) & Anatomi Candle H4/Daily (OLHC vs OHLC)',
          shortTitle: 'CRT & Profil OLHC/OHLC',
          paragraphs: [
            'Setiap satu candle **H4** atau **Daily** merepresentasikan satu siklus AMD lengkap dengan urutan pembentukan baku:',
            '1. **Candle Bullish Sehat (`O – L – H – C`):** Buka di *Open* → turun di bawah Open membentuk wick bawah (*Low* sebagai fase manipulasi) → naik mencetak *High* → tutup (*Close*) dekat atas. Oleh karena itu, saat bias Bullish, **area Buy bernilai tinggi berada di bawah atau dekat harga Open H4/Daily**, bukan jauh di atas harga Open.',
            '2. **Candle Bearish Sehat (`O – H – L – C`):** Buka di *Open* → naik di atas Open membentuk wick atas (*High* sebagai fase manipulasi) → turun mencetak *Low* → tutup dekat bawah. Area Sell optimal berada di atas atau dekat harga Open.',
            '3. **Pola 3-Candle CRT (*Candle Range Theory*) pada H4/Daily:** **Candle 1** membentuk rentang (*Range*) → **Candle 2** melakukan sweep High atau Low Candle 1 dengan wick lalu **wajib menutup body kembali di dalam rentang Candle 1** → **Candle 3** berekspansi menuju ujung seberang Candle 1. Apabila body Candle 2 justru menutup di luar rentang Candle 1, pola tersebut adalah ekspansi lanjutan — **bukan CRT**.'
          ]
        },
        {
          number: '35.4',
          heading: 'Studi Kasus XAU/USD All-Time High: Proyeksi Std Dev di Atas 2.710,00',
          shortTitle: 'Studi Kasus Std Dev ATH',
          paragraphs: [
            'Berikut contoh perhitungan proyeksi **Standard Deviation** saat XAU/USD menembus All-Time High tanpa referensi swing di sebelah kiri:'
          ],
          exampleBox: {
            title: 'Proyeksi Target All-Time High XAU/USD (Manipulation Leg = $8,00)',
            rows: [
              {
                label: '1. Mengukur Manipulation Leg',
                detail: 'Sebelum MSS Bullish, Gold turun dari **Origin `2.708,00` (`0,0`)** melakukan sweep SSL ke **Low Manipulasi `2.700,00` (`1,0`)** → panjang leg = **`$8,00`**.'
              },
              {
                label: '2. Proyeksi Standard Deviation ke Atas',
                detail: '• **`-1,0` Std Dev:** `2.708,00 + (1 × $8,00)` = **`2.716,00`**\n• **`-2,0` Std Dev:** `2.708,00 + (2 × $8,00)` = **`2.724,00`**\n• **`-2,5` Std Dev:** `2.708,00 + (2,5 × $8,00)` = **`2.728,00`** (*Zona Target Utama*)\n• **`-4,0` Std Dev:** `2.708,00 + (4 × $8,00)` = **`2.740,00`**'
              },
              {
                label: '3. Eksekusi & Realisasi Target Bertingkat',
                detail: 'Entry **Buy** di FVG **`2.706,50`**, **SL `2.699,00`** (buffer `$1,00` di bawah `2.700,00` → risiko **`$7,50`**). Partial awal pada `-1,0` (`2.716,00` = `+$9,50` / `1,27R`), lalu tutup mayoritas posisi pada zona **`-2,0` (`2.724,00` = `+$17,50` / `2,33R`)** hingga **`-2,5` (`2.728,00` = `+$21,50` / `2,87R`)**. Harga mencetak puncak harian di `2.727,60` sebelum mengalami koreksi.'
              }
            ]
          },
          callout: {
            tone: 'warn',
            kicker: 'Disiplin Penentuan Target',
            title: 'Hindari Menahan 100% Posisi hingga -4,0 Std Dev',
            body: 'Rentang **`-2,0` hingga `-2,5` Std Dev** adalah titik realisasi paling realistis pada XAU/USD. Menahan seluruh lot tanpa mengambil profit di `-2,0/-2,5` berisiko menghilangkan keuntungan besar saat harga mulai berbalik arah.'
          }
        }
      ],
      keyTakeaways: [
        'Saat XAU/USD mencetak **All-Time High** tanpa swing historis di sebelah kiri, tarik **Fibonacci Standard Deviation** dari **Manipulation Leg** (`1,0` di ujung sweep, `0,0` di Origin) memproyeksi ke arah target.',
        'Zona **`-2,0` s.d. `-2,5` Std Dev** adalah **Zona Target Utama** (`70%+` ekspansi harian selesai di sini); `-1,0` untuk evaluasi Partial/BEP; `-4,0` khusus sisa runner pada hari ekstrem.',
        'Anatomi candle H4/Daily: Bullish = **`O–L–H–C`** (beli di bawah/dekat Open), Bearish = **`O–H–L–C`** (jual di atas/dekat Open); pola **CRT** valid hanya jika body Candle 2 ditutup kembali di dalam rentang Candle 1.'
      ],
      bridgeNext: 'Setelah menyelesaikan seluruh materi fondasi hingga lanjutan dari Bab 01 hingga Bab 35, langkah terakhir adalah menyatukan semuanya ke dalam satu rutinitas kerja harian tanpa indikator pada **Bab 36: Ujian Praktik Akhir (Capstone): Protokol Mapping Mandiri dari Chart Kosong**.',
      practiceCta: {
        label: 'Uji Proyeksi Std Dev & CRT di Candle Replay',
        description: 'Latih penarikan Standard Deviation (-1/-2/-2,5) pada hari ekspansi Gold dan amati anatomi OLHC/OHLC candle H4 di Replay Lab.',
        href: 'trading-practice/candle-replay.html'
      },
      conceptBlocks: [
        {
          heading: 'Standard Deviation Projections & CRT / OLHC',
          paragraphs: [
            'Tarik Fib Standard Deviation dari Manipulation Leg ke arah target: -1,0 (Partial/BEP), -2,0 s.d. -2,5 (Zona Target Utama), -4,0 (ekstrem). Candle Bullish mengikuti OLHC (beli di bawah Open), Bearish OHLC, dan CRT valid jika Candle 2 sweep ujung Candle 1 lalu menutup body kembali di dalam range.'
          ]
        }
      ],
      mappingSteps: [
        'Tentukan Manipulation Leg (kaki sweep terakhir sebelum MSS/CISD).',
        'Tarik Fib (0, 1, -1, -2, -2.5, -4) sehingga angka negatif memanjang ke arah target.',
        'Tandai zona -2,0 s.d. -2,5 Std Dev sebagai TP Utama dan cek pertemuan angka bulat Gold.',
        'Di H4/Daily, tunggu harga membuat wick manipulasi di bawah Open (Bullish OLHC) atau atas Open (Bearish OHLC) sebelum turun ke M5.'
      ],
      decisionTree: [
        {
          condition: 'Harga bereaksi keras di -2,0/-2,5 Std Dev padahal TP dipasang di -4,0.',
          action: 'Amankan mayoritas profit (70%–80%) di zona -2,0 s.d. -2,5 Std Dev.'
        },
        {
          condition: 'Candle 2 H4 sweep Low Candle 1 tetapi body ditutup jauh di bawah Low Candle 1.',
          action: 'Bukan CRT Bullish — penutupan body di luar menandakan ekspansi turun lanjutan.'
        }
      ],
      validRules: [
        'Standard Deviation wajib ditarik dari Manipulation Leg sebelum MSS.',
        'CRT valid jika Candle 2 sweep ujung Candle 1 lalu menutup body kembali di dalam rentang Candle 1.'
      ],
      invalidRules: [
        'Menahan 100% posisi menunggu -4,0 Std Dev tanpa mengamankan profit di -2,0/-2,5.',
        'Mengejar Buy jauh di atas harga Open candle H4 Bullish.'
      ],
      xauScenario: {
        context: 'XAU/USD All-Time High di atas 2.710: Manipulation Leg $8 (Origin 2.708 → Low 2.700).',
        steps: [
          'Proyeksi: -1,0 = 2.716, -2,0 = 2.724, -2,5 = 2.728, -4,0 = 2.740.',
          'Buy FVG 2.706,50, SL 2.699,00 ($7,50); Partial di 2.716, tutup mayoritas di 2.724–2.728 (2,33R–2,87R).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: Tidak Memasang Proyeksi Target di All-Time High',
        context: 'Sudah profit +$20 tepat di -2,5 Std Dev (2.728), namun tidak menarik Std Dev dan menahan tanpa batas hingga 2.760.',
        whyFailed: 'Distribusi selesai pada -2,5 Std Dev lalu harga berbalik tajam menghapus seluruh profit berjalan.'
      },
      goldenRules: [
        'Saat Gold di All-Time High, zona -2,0 hingga -2,5 Std Dev dari Manipulation Leg adalah acuan target paling presisi.',
        'Bullish = O-L-H-C (beli di bawah Open); Bearish = O-H-L-C (jual di atas Open).'
      ],
      quiz: [
        {
          question: 'Dari bagian grafik mana proyeksi **Fibonacci Standard Deviation** ICT wajib ditarik untuk menghitung target TP?',
          options: [
            'Dari candle tertinggi tahun lalu ke terendah bulan ini',
            'Dari **Manipulation Leg** (kaki Liquidity Sweep terakhir tepat sebelum terjadi MSS/CISD balik arah)',
            'Dari lebar kotak Asia dikali 10',
            'Dari sembarang 2 candle berwarna sama di M1'
          ],
          answerIndex: 1,
          explanation: 'Skala proyeksi Standard Deviation ICT diukur dari panjang Manipulation Leg (kaki sweep sebelum perubahan struktur).'
        },
        {
          question: 'Rentang Standard Deviation manakah yang menjadi **Zona Target Utama (Terminus)** tempat `70%+` ekspansi harian XAU/USD berakhir atau berbalik?',
          options: [
            '`-0,25` hingga `-0,5`',
            '**`-2,0` hingga `-2,5` Standard Deviation**',
            '`-10,0` hingga `-12,0`',
            '`+0,5` saja'
          ],
          answerIndex: 1,
          explanation: 'Zona -2,0 hingga -2,5 Std Dev adalah zona realisasi utama tempat mayoritas ekspansi harian selesai.'
        },
        {
          question: 'Dalam profil candle **`OLHC`** (Candle H4/Daily Bullish yang sehat), di area mana entry Buy memiliki probabilitas dan R:R terbaik?',
          options: [
            'Jauh di atas harga Open setelah candle sudah naik panjang',
            '**Di bawah atau dekat harga Open** (saat candle sedang membentuk wick bawah / Low manipulasi)',
            'Tepat 1 menit sebelum candle tutup di puncak',
            'Harga Open tidak berpengaruh sama sekali'
          ],
          answerIndex: 1,
          explanation: 'Pada candle Bullish (O-L-H-C), fase turun di bawah Open membentuk wick bawah adalah area manipulasi beli sebelum ekspansi naik.'
        },
        {
          question: 'Apa syarat utama agar pola 3-candle **CRT (*Candle Range Theory*)** pada H4 valid sebagai sinyal pembalikan Bullish?',
          options: [
            '**Candle 2 sweep Low Candle 1 dengan wick lalu menutup body kembali di dalam rentang Candle 1**',
            'Candle 2 menutup body merah panjang jauh di bawah Low Candle 1',
            'Candle 1 dan Candle 2 sama-sama Doji tanpa menyentuh ujung mana pun',
            'Candle 2 menembus High Candle 1 lalu langsung turun'
          ],
          answerIndex: 0,
          explanation: 'Sweep diikuti penutupan body kembali di dalam rentang Candle 1 mengonfirmasi penolakan Liquidity bawah, memicu Candle 3 membidik High Candle 1.'
        },
        {
          question: 'XAU/USD mencetak All-Time High (tidak ada Swing High di kiri). Manipulation Leg turun berukuran **`$6,00`** (dari Origin `2.720,00` ke Low `2.714,00`) lalu berbalik MSS Bullish. Di mana proyeksi **`-2,0` Std Dev** berada?',
          options: [
            '`2.726,00`',
            '**`2.732,00`** (`2.720,00 + 2 × $6,00`)',
            '`2.714,00`',
            '`2.702,00`'
          ],
          answerIndex: 1,
          explanation: 'Ukuran leg = $6,00. Dari Origin 2.720,00 memproyeksi 2× ke atas: 2.720,00 + $12,00 = 2.732,00 (-2,5 Std Dev = 2.735,00).'
        }
      ]
    },

    // =========================================================================
    // BAGIAN VI — BAB 36 (CAPSTONE): PROTOKOL MAPPING MANDIRI DARI CHART KOSONG
    // =========================================================================
    {
      id: 'capstone-mapping-mandiri',
      levelId: 5,
      number: 36,
      bookFormat: true,
      title: 'Ujian Praktik Akhir (Capstone): Protokol Mapping Mandiri dari Chart Kosong',
      subtitle: 'Merangkai seluruh Bab 01 hingga Bab 35 ke dalam satu prosedur kerja Top-Down 10 menit di atas chart polos tanpa indikator — menghasilkan 1 Bias, 1 DOL, 1 POI, 1 Invalidasi, dan 1 Rencana Eksekusi.',
      readMinutes: 11,
      diagramId: 'capstone-blank-chart-mapping',
      diagramAfterSection: 1,
      summary: 'Tujuan pemetaan tanpa indikator, prosedur baku 6 langkah Top-Down 10 menit dari chart kosong (Weekly → Daily → H1 → M15 → M5 → Risiko ≤1%), aturan Chart Bersih maksimal 5 elemen + 4 kriteria memilih 1 POI, serta simulasi lengkap XAU/USD Rabu London.',
      bookSections: [
        {
          number: '36.1',
          heading: 'Mengapa Urutan Kerja Top-Down Menggantikan Ketergantungan Indikator',
          shortTitle: 'Urutan Kerja Tanpa Indikator',
          paragraphs: [
            'Ketika seluruh indikator otomatis dimatikan dari chart, kesalahan paling umum trader adalah langsung membuka timeframe `M5` dan menggambar terlalu banyak kotak FVG dari dua arah sekaligus. Akibatnya, arah bias menjadi kabur dan keputusan transaksi tidak konsisten.',
            'Bab penutup ini tidak menambahkan konsep teori baru, melainkan menyusun seluruh materi dari **Bab 01 sampai Bab 35** ke dalam **1 Prosedur Kerja 6 Langkah (10 Menit)**. Dengan prosedur ini, Anda dapat membaca chart XAU/USD yang benar-benar polos dan menentukan secara objektif: **arah tujuan harga (`DOL`), area tunggu (`POI`), batas batal (`Invalidasi`), dan titik eksekusi**.'
          ]
        },
        {
          number: '36.2',
          heading: 'Protokol Baku 6 Langkah Mapping Mandiri (10 Menit · Top-Down)',
          shortTitle: '6 Langkah Mapping 10 Menit',
          paragraphs: [
            'Jalankan enam langkah berikut secara **berurutan dari timeframe besar ke kecil** sebelum sesi London (`±13:30 WITA`) atau sebelum NY AM (`±19:00 WITA`). Jangan membalik urutannya dari M5 ke Daily:'
          ],
          table: {
            caption: 'Prosedur 10 Menit Mapping Mandiri dari Chart Kosong (Zero-Indicator)',
            headers: ['Langkah & Durasi', 'Timeframe / Modul', 'Tugas Mekanis Wajib', 'Output Tertulis'],
            rows: [
              [
                '**1. Berita & Weekly** (`1 menit`)',
                'Kalender Ekonomi & Weekly',
                'Cek jadwal berita Red Folder AS (CPI/NFP/FOMC → catat **News Lock** Bab 17) & cek posisi hari pada **Weekly Profile** (Bab 34)',
                'Jam larangan News Lock + konteks Senin / Selasa–Kamis / Jumat TGIF'
              ],
              [
                '**2. Peta Daily & IPDA** (`2 menit`)',
                'Daily (`D1`)',
                'Tandai **PDH/PDL**, **PWH/PWL**, **NWOG/NDOG**, & **IPDA 20 Hari**. Tentukan Origin kemarin → target **DOL** segar hari ini',
                '**1 Kalimat Bias** + **1 Target DOL** + **1 Garis Invalidasi**'
              ],
              [
                '**3. Peta H1 & MMXM** (`2 menit`)',
                'H1',
                'Tarik **Dealing Range H1** (`0%–50%–100%`), pastikan **Sisi Kurva MMXM**, lalu tandai maksimal **1–2 POI terkuat** di Discount/Premium',
                'Zona kerja sah (`<50%` untuk Buy, `>50%` untuk Sell)'
              ],
              [
                '**4. Peta M15 & Liquidity** (`2 menit`)',
                'M15',
                'Tandai **Asia High/Low**, `EQH/EQL`, dan **Short-Term High/Low (STH/STL)** di sekitar HTF POI pilihan Anda (Bab 11–12)',
                'Peta Liquidity Pool terdekat untuk observasi **Liquidity Sweep**'
              ],
              [
                '**5. Trigger M5 di KZ** (`2 menit`)',
                'M5 (Killzone / Macro)',
                'Hanya menunggu di **London KZ / NY AM / Silver Bullet**. Tunggu **Sweep + (opsional SMT XAG/DXY) + CISD/MSS + 1 Model Utama** (Bab 25–27)',
                'Verifikasi **5× YA** (atau catat **"NO SETUP"**)'
              ],
              [
                '**6. Risiko & Target** (`1 menit`)',
                'Kalkulator Lot & Jurnal',
                'Hitung lot **≤ `0,5%–1%` risiko**, SL struktural + buffer spread, TP1 internal (`≥1,5R–2R` Partial/BEP), TP2 DOL (atau `-2,0/-2,5` Std Dev di ATH)',
                'Order terpasang terukur + dicatat di **Jurnal Trading**'
              ]
            ]
          }
        },
        {
          number: '36.3',
          heading: 'Standar Chart Bersih (Maksimal 5 Elemen), 4 Saringan POI & Bias Netral',
          shortTitle: 'Chart Bersih & 4 Saringan POI',
          paragraphs: [
            'Terlalu banyak garis pada chart akan mengaburkan keputusan eksekusi. Setelah 10 menit mapping selesai, layar chart cukup menampilkan **maksimal 5 elemen bersih**: (1) `PDH/PDL` & `DOL`, (2) `Asia Range & STH/STL`, (3) `1–2 POI Utama`, (4) `1 Garis Invalidasi Bias`, dan (5) area pemicu `M5`.',
            '1. **4 Kriteria Penyaringan Saat Terdapat 3–4 FVG/OB Sekaligus:** Pangkas hingga tersisa **1 POI Utama** dengan memeriksa: (a) searah Bias & berada di Discount/Premium, (b) masih *Fresh*, (c) memiliki **Liquidity Pool (`Asia Low/High`, `EQL/EQH`, atau `STL/STH`) di depannya** yang berpotensi di-sweep, dan (d) memiliki konfluensi ganda (`OTE 62%–79%`, `Unicorn`, atau `BPR`). Hapus kotak lainnya.',
            '2. **Penetapan Bias Netral pada Kondisi Inside Bar:** Jika Daily dan H1 tidak menunjukkan arah dominan, tuliskan **Bias NETRAL** dan tunggu sesi London melakukan sweep Asia High atau Asia Low lebih dulu sebelum memilih arah.',
            '3. **Prioritas Mutlak Protokol News Lock:** Apabila seluruh 5 langkah teknikal sudah terpenuhi namun **kurang dari 15 menit lagi rilis CPI/NFP/FOMC**, **Protokol News Lock (`-15m s.d. +30m`) selalu diprioritaskan di atas seluruh sinyal teknikal**.'
          ]
        },
        {
          number: '36.4',
          heading: 'Simulasi 10 Menit dari Chart Polos XAU/USD (Rabu 13:40 WITA EDT)',
          shortTitle: 'Simulasi Capstone 10 Menit',
          paragraphs: [
            'Berikut simulasi penerapan lengkap 6 langkah dari chart kosong tanpa indikator dengan angka perhitungan eksak:'
          ],
          exampleBox: {
            title: 'Simulasi Mapping Mandiri 10 Menit — Rabu 13:40 WITA (EDT · Pra-London)',
            rows: [
              {
                label: 'Langkah 1–2 — Kalender & Daily (3 Menit)',
                detail: 'Tidak ada berita Red Folder AS hari ini; posisi hari = **Rabu Classic Bullish Expansion**. Kemarin Daily tutup bullish pasca-sweep PDL (`Origin = Sweep PDL`), sementara **PDH `2.674,00`** masih segar. **Narasi tertulis:** *"Bias BULLISH menuju DOL PDH `2.674,00`. Batal total jika H1 body close di bawah `2.650,00`."*'
              },
              {
                label: 'Langkah 3–4 — H1 Dealing Range & M15 Liquidity (4 Menit)',
                detail: 'Dealing Range H1 berada di `2.648,00 – 2.668,00` (`50% EQ = 2.658,00`). Di zona **Discount** terdapat 1 POI terkuat (H1/M15 Bullish FVG + OTE) pada **`2.654,00 – 2.656,50`**, dan tepat di atasnya terdapat **Asia Low (SSL)** pada **`2.657,00`**.'
              },
              {
                label: 'Langkah 5–6 — Trigger London Macro `14:35 WITA` & Risiko Eksak (3 Menit)',
                detail: 'Pukul `14:35 WITA` (London Macro `02:33–03:00 NY`), harga turun melakukan sweep Asia Low `2.657,00` → masuk POI `2.655,20` (didukung **Bullish SMT** pada XAG/USD) → M5 mencetak **CISD + BISI `2.656,00 – 2.657,50`**. Eksekusi **Buy `2.656,50`**, **SL `2.653,00`** (risiko **`$3,50`** = `0,75%` modal). **TP1** di internal high **`2.663,50`** (**`+$7,00` / `2,00R`** → Partial + BEP) dan **TP2 di DOL PDH `2.674,00`** (**`+$17,50` / `5,00R`**).'
              }
            ]
          },
          callout: {
            tone: 'tip',
            kicker: 'Penutup Kurikulum · 36 dari 36 Bab',
            title: 'Langkah Praktik Setelah Menuntaskan Seluruh Materi Academy',
            body: 'Seluruh rangkaian materi dari fondasi pasar dan risiko (**Bab 01–06**), struktur & Liquidity (**Bab 07–12**), Daily Bias & waktu WITA (**Bab 13–17**), PD Array (**Bab 18–24**), model entry & manajemen posisi (**Bab 25–30**), hingga konsep ICT lanjutan & mapping mandiri (**Bab 31–36**) telah tuntas. Tahap berikutnya adalah membangun konsistensi eksekusi melalui **Protokol 100 Sample dengan 1 Model Utama** menggunakan Cockpit Mapping, Candle Replay, dan Jurnal Trading.'
          }
        }
      ],
      keyTakeaways: [
        'Urutan baku **Top-Down 10 Menit** dari chart kosong: **Berita/Weekly → Daily (`PDH/PDL`, `Origin → DOL`, `Invalidasi`) → H1 (`Dealing Range` & `1–2 POI`) → M15 (`Asia Range & STH/STL`) → M5 (`Sweep + CISD/MSS` di Killzone) → Risiko `≤ 1%`**.',
        'Standar chart bersih cukup memuat **maksimal 5 elemen** — 1 Bias, 1 DOL, 1–2 POI terkuat hasil 4 saringan, 1 Garis Invalidasi tertulis, dan 1 Model Entry.',
        '**Bias NETRAL** dan **Protokol News Lock (`-15m/+30m`)** adalah bagian wajib dari disiplin operasional trader mandiri.'
      ],
      bridgeNext: 'Anda telah menyelesaikan seluruh **36 Bab Kurikulum Amy FX Academy**. Sebagai langkah praktik terstruktur, bandingkan hasil pemetaan mandiri Anda di **Cockpit Mapping**, selesaikan **Latihan 100 Kasus ICT**, kumpulkan **50 Sample di Candle Replay**, dan audit seluruh hasilnya di **Jurnal Trading**.',
      practiceCta: {
        label: 'Bandingkan Mapping Mandirimu di Cockpit Mapping',
        description: 'Uji hasil peta mandiri dari chart kosongmu melawan pembacaan struktur, POI, dan verifikasi live di Cockpit Mapping Amy FX Pro.',
        href: '../mapping/index.html'
      },
      conceptBlocks: [
        {
          heading: 'Protokol 6 Langkah Mapping Mandiri (Zero-Indicator)',
          paragraphs: [
            'Rangkuman seluruh Bab 01–35 dalam 6 langkah Top-Down 10 menit dari chart kosong: Berita/Weekly → Daily (Origin/DOL/Invalidasi) → H1 (Dealing Range & 1–2 POI) → M15 (Asia Range & STH/STL) → M5 (Sweep + CISD/MSS di Killzone) → Lot ≤1% & TP1/TP2.'
          ]
        }
      ],
      mappingSteps: [
        'Bersihkan chart XAU/USD dari semua indikator lalu cek Berita & Weekly Profile.',
        'Di Daily, tandai PDH/PDL, PWH/PWL, NWOG & tulis 1 Narasi Bias + DOL + 1 Garis Invalidasi.',
        'Di H1, tarik Dealing Range dan pangkas POI menjadi maksimal 1–2 zona terbaik di Discount/Premium.',
        'Di M15, tandai Asia Range & Short-Term Liquidity (STH/STL) di sekitar POI pilihan.',
        'Di M5 saat Killzone, tunggu Sweep + CISD/MSS sesuai 1 Model Utama lalu kunci risiko ≤1%.'
      ],
      decisionTree: [
        {
          condition: 'Daily & H1 sedang inside bar di tengah range tanpa arah jelas.',
          action: 'Tetapkan Bias NETRAL — tunggu sesi London melakukan sweep Asia High/Low untuk mengonfirmasi arah.'
        },
        {
          condition: 'Semua 5 langkah cocok tetapi 8 menit lagi rilis CPI/NFP.',
          action: 'Protokol News Lock (-15m/+30m) selalu diprioritaskan di atas semua sinyal teknikal — tahan entry.'
        }
      ],
      validRules: [
        'Chart mapping harian maksimal memuat 5 elemen bersih (DOL, Asia/SSL-BSL, 1–2 POI, Invalidasi, Trigger M5).',
        'Selalu bergerak Top-Down (Daily → H1 → M15 → M5) dengan 1 Garis Invalidasi tertulis.'
      ],
      invalidRules: [
        'Bottom-Up mapping (langsung membuka M5 di jam sepi tanpa mengecek Daily/H1).',
        'Mempertahankan bias lama meskipun garis Invalidasi H1 sudah ditembus body candle.'
      ],
      xauScenario: {
        context: 'Rabu 13:40 WITA (Chart Polos): Daily Origin Sweep PDL → DOL PDH 2.674,00; H1 Discount POI 2.654–2.656,50 + Asia Low (SSL) 2.657,00.',
        steps: [
          'London Macro 14:35 WITA: sweep Asia Low 2.657 → POI 2.655,20 (+ SMT XAG) → M5 CISD + BISI.',
          'Buy 2.656,50, SL 2.653,00 ($3,50), TP1 2.663,50 (+$7,00 / 2,00R), TP2 PDH 2.674,00 (+$17,50 / 5,00R).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: Bottom-Up Mapping dari M5',
        context: 'Trader langsung membuka M5 pukul 13:50 WITA tanpa melihat Daily/H1 lalu Sell mengejar micro-break tepat ke arah Asia Low 2.657.',
        whyFailed: 'Menjual tepat ke dalam area SSL Asia Low / Discount H1 yang menjadi target Sweep sebelum harga bergerak naik ke PDH 2.674.'
      },
      goldenRules: [
        'Chart bersih mendukung keputusan objektif: 1 Bias, 1 DOL, 1–2 POI, 1 Invalidasi, 1 Model Entry.',
        'Kemandirian trading terukur saat indikator dimatikan namun peta analisis tetap konsisten.'
      ],
      quiz: [
        {
          question: 'Urutan kerja **Top-Down Mapping Mandiri** yang benar dari layar chart kosong adalah...',
          options: [
            '`M1 → M5 → M15` → baru cek Daily setelah terkena SL',
            '**Berita/Weekly Profile → Daily (`PDH/PDL`, `Origin → DOL`, `Invalidasi`) → H1 (`Dealing Range` & `POI`) → M15 (`Asia Range & STH/STL`) → M5 (`Sweep + CISD/MSS` di Killzone)**',
            'Pasang 6 indikator oscillator dulu lalu baru gambar FVG',
            'Langsung tarik 15 kotak FVG di M5 lalu pilih yang paling dekat harga sekarang'
          ],
          answerIndex: 1,
          explanation: 'Top-Down Mapping selalu dimulai dari konteks makro & Liquidity besar sebelum turun mencari presisi pemicu di M15 dan M5.'
        },
        {
          question: 'Pukul `08:30 WITA` saat melakukan mapping Daily & H1, chart sedang *inside bar* di tengah range tanpa arah dominan. Keputusan paling profesional adalah...',
          options: [
            'Menebak salah satu arah secara acak agar tetap punya trade pagi ini',
            'Menetapkan **Bias NETRAL** dan menunggu sesi London melakukan sweep Asia High/Low terlebih dahulu untuk mengonfirmasi arah hari ini',
            'Memperbesar lot supaya profit cepat meski arah tidak jelas',
            'Membuka Buy dan Sell bersamaan di M5'
          ],
          answerIndex: 1,
          explanation: 'Bias Netral adalah bagian sah dari SOP profesional — mencegah overtrading saat struktur belum membuka arah.'
        },
        {
          question: 'Anda menemukan 3 Bullish FVG berbeda di H1/M15 dalam satu kenaikan. Saringan mana yang paling tepat untuk memilih **1 POI Utama**?',
          options: [
            'Pilih FVG yang paling tinggi di zona `90%` Premium',
            'Pilih FVG yang **masih Fresh, di zona Discount (`<50%`), punya Asia Low / SSL tepat di depannya untuk di-sweep, dan memiliki konfluensi** (`OTE` / `Unicorn` / `BPR`)',
            'Pasang Buy Limit serentak di ketiga FVG sekaligus',
            'Pilih FVG yang sudah disentuh 4 kali sebelumnya'
          ],
          answerIndex: 1,
          explanation: 'POI probabilitas tertinggi berada di lokasi Discount untuk Buy, masih segar, memiliki Liquidity Pool SSL/Asia Low di depannya untuk di-sweep, dan didukung konfluensi kuat.'
        },
        {
          question: 'Mengapa setiap peta mapping pagi wajib menyertakan **1 Garis Invalidasi Bias** secara tertulis?',
          options: [
            'Agar chart terlihat ramai dan penuh warna',
            'Untuk mencegah *Narrative Bias* (mempertahankan asumsi lama melawan pasar) — begitu H1 menutup body menembus garis tersebut, skenario lama langsung dibatalkan',
            'Sebagai tempat menggandakan lot (*martingale*) jika tersentuh',
            'Tidak wajib, hanya opsional untuk pemula'
          ],
          answerIndex: 1,
          explanation: 'Garis Invalidasi membuat analisis tetap objektif — Anda tahu persis kapan asumsi awal tidak lagi berlaku sebelum emosi mengambil alih.'
        },
        {
          question: 'Seluruh 5 langkah mapping (Bias, DOL, POI Discount, Asia Low SSL, Killzone) sudah sempurna, namun **8 menit lagi rilis data US CPI (High Impact)**. Langkah final yang benar adalah...',
          options: [
            'Segera entry sebelum berita agar mendapat harga awal',
            'Tahan entry sesuai **Protokol News Lock (`-15 menit` s.d. `+30 menit`)**, lalu evaluasi ulang setelah volatilitas dan spread kembali normal',
            'Lepas Stop Loss sementara lalu pasang lagi setelah rilis',
            'Pindah ke M1 untuk scalping detik rilis CPI'
          ],
          answerIndex: 1,
          explanation: 'Tidak ada setup teknikal yang kebal terhadap lonjakan spread dan slippage saat rilis CPI/NFP/FOMC; disiplin News Lock selalu diprioritaskan.'
        }
      ]
    }
  ];

  return Object.freeze({ LEVELS, LESSONS });
});
