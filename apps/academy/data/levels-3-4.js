/* Amy FX Academy — Level 3 & Level 4 (Pelajaran 11–20)
 * Kurikulum Zero to Scalper ICT XAU/USD (Standar Waktu WITA)
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.AmyAcademyPart2 = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : window, function () {
  'use strict';

  const LEVELS = [
    {
      id: 3,
      code: 'Level 03',
      title: 'Mesin Pengiriman Harga ICT (PD Array)',
      tagline: 'Kuasai jejak algoritma sejati: Displacement, FVG + 50% CE, Order Block + Mean Threshold, CISD vs MSS, dan Premium/Discount.'
    },
    {
      id: 4,
      code: 'Level 04',
      title: '4 Model Entry Scalper A+',
      tagline: 'Ubah teori jadi eksekusi presisi dengan 4 playbook utama: Sweep-FVG, Order Block Sniper, Inversion FVG, dan Turtle Soup.'
    }
  ];

  const LESSONS = [
    // ═══════════════════════════════════════════════════════════════
    // BAGIAN IV — MESIN ZONA ENTRY ICT (PD ARRAYS): BAB 18, 19, 21, 23, 24
    // (Bab 20 berada di bawah dalam file ini; Bab 22 ada di mastery-advanced.js)
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'displacement-jejak-institusi',
      number: 18,
      levelId: 3,
      title: 'Displacement: Mengenali Jejak Dorongan Institusi yang Sah',
      readMinutes: 9,
      diagramId: 'displacement-signature',
      bookFormat: true,
      diagramAfterSection: 1,
      summary: 'Definisi Displacement sebagai syarat sah FVG, Order Block, dan MSS, tiga parameter visual pembeda Displacement dari gerakan lemah, alasan menunggu retracement, serta tiga pengecualian candle besar.',
      bookSections: [
        {
          number: '18.1',
          heading: 'Pengertian Displacement dan Fungsinya dalam Struktur Zona ICT',
          shortTitle: 'Pengertian Displacement',
          paragraphs: [
            'Pada Bagian II dan III, kamu sudah mempelajari struktur pasar, pemetaan Liquidity, Draw on Liquidity (DOL), Daily Bias, siklus AMD, serta jadwal Killzone WITA. Pada Bagian IV ini, kita membedah komponen penentu area entry dalam ICT (**PD Arrays**), dimulai dari syarat utamanya: **Displacement**.',
            '**Displacement** adalah pergerakan harga yang cepat, tegas, dan satu arah yang dibentuk oleh 1 hingga 3 batang candlestick berbadan besar (*strong body*) dengan sedikit perlawanan, yang **menembus level struktur penting** serta **meninggalkan celah Imbalance (Fair Value Gap)**.',
            'Tanpa Displacement, penembusan level struktur atau pantulan harga cenderung lemah dan mudah gagal. Oleh karena itu, dalam metodologi ICT, keberadaan Displacement menjadi syarat awal sebelum menandai FVG, iFVG, Order Block, Breaker Block, maupun MSS.'
          ]
        },
        {
          number: '18.2',
          heading: 'Empat Parameter Objektif: Displacement Valid vs Pergerakan Lemah',
          shortTitle: 'Parameter Displacement Valid',
          paragraphs: [
            'Agar tidak menandai sembarang candle panjang sebagai Displacement, gunakan **4 parameter objektif** berikut untuk membedakan dorongan institusi dari pergerakan merayap:'
          ],
          table: {
            caption: 'Perbandingan Objektif: Displacement Valid vs Pergerakan Lemah (Skip)',
            headers: ['Parameter Evaluasi', 'Displacement Valid', 'Pergerakan Lemah / Merayap (Skip)', 'Makna Teknis'],
            rows: [
              ['Proporsi Body Candle', 'Body dominan (`≥ 65%` dari total tinggi candle) dan `1,5×–2×` lebih besar daripada candle konsolidasi sebelumnya', 'Deretan 5–8 candle kecil saling bertumpuk dengan banyak wick atas-bawah', 'Menunjukkan masuknya volume order besar secara serentak, bukan transaksi ragu-ragu'],
              ['Celah Harga (FVG)', 'Wajib meninggalkan celah kosong (**Fair Value Gap** — dibahas di Bab 19) di belakangnya', 'Tidak meninggalkan celah; setiap candle langsung ditutup oleh candle berikutnya', 'Kecepatan perubahan harga terlalu tinggi sehingga sisi lawan tidak terisi penuh'],
              ['Dampak Struktur', 'Langsung memecah Swing High/Low (`BOS` / `MSS`) atau harga Open rangkaian candle lawan (`CISD` — Bab 23)', 'Bergerak bolak-balik di dalam rentang lama tanpa memecahkan level penting', 'Membuktikan komitmen nyata untuk menggeser harga menuju DOL'],
              ['Konteks Lokasi & Waktu', 'Muncul setelah **Liquidity Sweep** atau sentuhan **POI HTF** di dalam jam **Killzone**', 'Muncul acak di tengah konsolidasi sepi (Asia Range) tanpa pemicu Liquidity', 'Likuiditas lawan sudah terserap sebelum ekspansi dijalankan']
            ]
          }
        },
        {
          number: '18.3',
          heading: 'Alasan Teknis Tidak Mengejar Ujung Candle Displacement',
          shortTitle: 'Risiko Mengejar Ujung Candle',
          paragraphs: [
            'Kesalahan yang paling sering dilakukan setelah mengenali Displacement adalah langsung membuka **Market Order** di ujung candle besar yang sudah bergerak `$7–$10` karena khawatir tertinggal pergerakan.',
            'Prinsip baku ICT adalah: **Displacement mengonfirmasi arah, sedangkan retracement (koreksi kembali ke FVG/OB) memberikan harga masuk dan rasio Risk-to-Reward (`R:R`) yang sehat.** Perhatikan perbandingan angkanya pada XAU/USD berikut:'
          ],
          exampleBox: {
            title: 'Perbandingan Angka XAU/USD: Market Entry di Ujung Candle vs Buy Limit di FVG',
            rows: [
              {
                label: 'Kondisi Chart (M5 Sesi London · 15:20 WITA)',
                detail: 'XAU/USD melakukan sweep Asia Low di `2.642,00`. Muncul 2 candle bullish M5 tebal naik dari `2.642,00` ke `2.649,00` (`+$7,00` dalam 10 menit), memecah Swing High `2.646,50` dan mencetak Bullish FVG di `2.644,00 – 2.646,50`. Target DOL berada di Asia High `2.656,00`.'
              },
              {
                label: 'Trader A (Market Buy di Ujung Candle 2.649,00)',
                detail: 'Masuk di `2.649,00` dengan SL struktural di bawah titik sweep `2.641,50` → jarak risiko **`$7,50`**. Jarak ke target `2.656,00` tersisa **`$7,00`** → R:R turun menjadi **1 : 0,93** (risiko lebih besar daripada potensi keuntungan).'
              },
              {
                label: 'Trader B (Buy Limit di Area FVG 2.645,50)',
                detail: 'Memasang Buy Limit di tengah FVG `2.645,50` dengan SL yang sama di `2.641,50` → jarak risiko hanya **`$4,00`**. Jarak ke target `2.656,00` menjadi **`+$10,50`** → R:R meningkat menjadi **1 : 2,62**.'
              }
            ]
          }
        },
        {
          number: '18.4',
          heading: 'Tiga Pengecualian: Candle Besar yang Bukan Sinyal Entry Displacement',
          shortTitle: '3 Pengecualian Candle Besar',
          paragraphs: [
            'Tidak setiap candle berukuran besar layak dijadikan pemicu transaksi. Saring terlebih dahulu **tiga kondisi pengecualian** berikut pada XAU/USD:',
            '1. **Candle Detik Rilis Berita High Impact USD (CPI / NFP / FOMC):** Lonjakan `$15` dalam 1 menit saat rilis berita dipicu kekosongan likuiditas sesaat (*whipsaw* dan *spread spike*). Patuhi **Protokol News Lock** dari Bab 17: tunggu 15–30 menit hingga volatilitas dan spread kembali normal.',
            '2. **Candle Tunggal di Tengah Konsolidasi Asia Tanpa Sweep:** Satu candle agak panjang pada jam sepi (misalnya `10:30 WITA`) tanpa didahului sweep Liquidity dan tanpa konteks HTF sering langsung kehilangan momentum.',
            '3. **Exhaustion Move (Dorongan Akhir Tepat Menabrak Target DOL):** Jika harga sudah bergerak satu arah sejauh `$25` sepanjang sesi lalu mencetak satu candle besar yang langsung menyentuh target `PDH/PWH`, pergerakan tersebut cenderung menandai akhir fase distribusi dan rawan diikuti pembalikan arah.'
          ],
          callout: {
            tone: 'warn',
            kicker: 'Aturan Inti Bagian IV',
            title: 'Tidak Ada Displacement = Tidak Ada Zona Entry Berkualitas',
            body: 'Jadikan Displacement sebagai filter pertama pada seluruh materi Bagian IV. Sebelum menandai FVG, iFVG, Order Block, Breaker Block, atau MSS, pastikan selalu: **apakah zona tersebut terbentuk dari Displacement yang bersih?**'
          }
        }
      ],
      keyTakeaways: [
        '**Displacement** adalah dorongan agresif 1–3 candle berbadan dominan (`≥ 65%` body) yang memecah level struktur dan wajib meninggalkan **Fair Value Gap (FVG)**.',
        'Pergerakan merayap (banyak candle kecil bertumpuk tanpa FVG) menunjukkan lemahnya komitmen institusi dan sebaiknya dilewati.',
        '**Jangan mengejar ujung candle Displacement:** tunggu koreksi (*retracement*) ke area FVG/OB agar jarak SL ringkas dan R:R tetap minimal `1:2`.',
        'Bedakan Displacement valid dari lonjakan whipsaw rilis berita merah USD maupun exhaustion move di ujung target DOL.'
      ],
      bridgeNext: 'Syarat paling spesifik dari Displacement yang sah adalah celah harga tiga candle yang tertinggal di belakangnya. Mekanisme dan cara mengukur celah tersebut dibahas tuntas pada **Bab 19: Fair Value Gap (BISI/SIBI), 50% Consequent Encroachment & Memilih Multi-FVG**.',
      practiceCta: {
        label: 'Amati Displacement Live di Chart Gold',
        description: 'Buka Chart Gold M5/M15 di Mapping Cockpit dan bedakan candle dorongan tebal yang mencetak FVG dari deretan candle merayap.',
        href: '../mapping/index.html'
      },
      conceptBlocks: [
        {
          heading: 'Displacement Sebagai Syarat Validasi Zona ICT',
          paragraphs: [
            'Displacement adalah lonjakan 1–3 candle berbadan dominan yang memecah struktur dan meninggalkan Fair Value Gap (FVG) pasca-sweep Liquidity.'
          ]
        }
      ],
      mappingSteps: [
        'Pastikan harga baru saja sweep Liquidity (Asia/PDH/PDL) atau menyentuh POI HTF di dalam Killzone.',
        'Cari 1–3 candle berbadan dominan (≥65% body) yang menembus struktur terdekat dan mencetak celah FVG.',
        'Jangan kejar ujung candle; tandai FVG/OB yang lahir di belakang Displacement untuk rencana pullback.'
      ],
      decisionTree: [
        {
          condition: 'Harga menembus Swing High dengan 6 candle kecil saling tumpang tindih tanpa FVG.',
          action: 'SKIP — tidak ada Displacement sejati; break merayap sangat rentan gagal.'
        },
        {
          condition: 'Muncul candle besar $15 tepat pada menit rilis US CPI 20:30 WITA.',
          action: 'Patuhi News Lock (-15m s.d. +30m); jangan langsung menganggap spike berita sebagai Displacement untuk dikejar.'
        }
      ],
      validRules: [
        'Body dominan ≥65% dan 1,5×–2× lebih besar dari candle konsolidasi sebelumnya.',
        'Meninggalkan Fair Value Gap (FVG) bersih dan memecahkan struktur (BOS/MSS/CISD).'
      ],
      invalidRules: [
        'Break merayap tanpa FVG atau di tengah konsolidasi Asia tanpa sweep.',
        'Mengejar Market Order di ujung candle Displacement yang sudah bergerak jauh.'
      ],
      xauScenario: {
        context: 'Sweep Asia Low 2.642,00 diikuti 2 candle M5 bullish tebal ke 2.649,00 mencetak FVG 2.644,00–2.646,50.',
        steps: [
          'Konfirmasi 3 pilar Displacement terpenuhi (body tebal, pecah swing 2.646,50, lahir FVG).',
          'Pasang Buy Limit di 2.645,50 dengan SL 2.641,50 ($4,00) menuju target 2.656,00 (R:R 1:2,62).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: Entry di Ujung Candle Displacement',
        context: 'Trader membuka Market Buy di 2.649,00 tepat di ujung candle Displacement.',
        whyFailed: 'SL melebar menjadi $7,50 sementara target tinggal $7,00 (R:R < 1:1) dan posisi langsung terkena floating minus saat harga melakukan pullback normal ke FVG.'
      },
      goldenRules: [
        'Tidak ada Displacement = Tidak ada FVG berkualitas = Tidak ada Entry.',
        'Displacement mengonfirmasi arah; retracement memberikan harga entry yang terukur.'
      ],
      quiz: [
        {
          question: 'Manakah 3 pilar visual wajib yang membuktikan sebuah pergerakan memiliki **Displacement** institusi yang sah?',
          options: [
            'Deretan 6 candle doji kecil + banyak wick + di luar Killzone',
            'Candle berbadan dominan (`≥ 65%` body) + meninggalkan celah **Fair Value Gap (FVG)** + memecah level struktur (BOS/MSS/CISD)',
            'Satu candle warna hijau di sesi Asia meskipun tidak ada FVG',
            'Indikator RSI menyentuh angka 70'
          ],
          answerIndex: 1,
          explanation: 'Displacement asli selalu meninggalkan tiga jejak serentak: body candle dominan, celah Imbalance (FVG), dan pematahan struktur.'
        },
        {
          question: 'Harga XAU/USD menembus Swing High M5 dengan 7 candle kecil merayap yang saling bertumpuk tanpa meninggalkan FVG. Apa keputusan scalper ICT?',
          options: [
            'Langsung Market Buy karena sudah tembus',
            'Melewati setup (*Skip*) karena gerakan merayap tanpa Displacement menunjukkan lemahnya komitmen institusi dan rawan berbalik',
            'Menambah ukuran lot 2 kali lipat',
            'Menghapus Stop Loss agar tidak tersentuh'
          ],
          answerIndex: 1,
          explanation: 'Tanpa Displacement dan FVG, break merayap adalah ciri dorongan lemah yang mudah gagal.'
        },
        {
          question: 'Setelah sweep Asia Low `2.642,00`, XAU/USD naik dengan Displacement ke `2.649,00` (FVG di `2.644,00–2.646,50`, target Asia High `2.656,00`). Mengapa kita menunggu pullback ke FVG alih-alih mengejar Market Buy di `2.649,00`?',
          options: [
            'Karena MT5 melarang tombol Market Buy di sesi London',
            'Karena mengejar di ujung candle memperlebar jarak SL menjadi `$7,50` dan merusak R:R (< 1:1), sedangkan menunggu pullback ke FVG menekan risiko menjadi `$4,00` dengan R:R > 1:2,5',
            'Karena harga tidak pernah bergerak naik lagi setelah Displacement',
            'Karena FVG hanya berlaku di hari Jumat'
          ],
          answerIndex: 1,
          explanation: 'Displacement mengonfirmasi arah institusi, sementara retracement ke FVG/OB memberikan titik entry berisiko sempit dengan R:R jauh lebih sehat.'
        },
        {
          question: 'Manakah candle besar berikut yang **TIDAK** boleh langsung diperlakukan sebagai sinyal Displacement entry normal?',
          options: [
            'Dorongan M5 tebal pasca-sweep Asia Low di sesi London yang mencetak MSS + FVG',
            'Lonjakan `$15` yang muncul tepat pada menit rilis berita merah **US CPI / NFP** (whipsaw berita) atau dorongan akhir yang tepat menabrak target `PDH/PWH`',
            'Dorongan M15 bersih setelah harga menyentuh H1 Order Block di NY AM Killzone',
            'Dorongan 2 candle tebal pasca-sweep PDL pada jendela Silver Bullet'
          ],
          answerIndex: 1,
          explanation: 'Lonjakan detik rilis berita merah USD berada dalam zona News Lock (rawan whipsaw/slippage), dan dorongan di ujung target DOL sering berupa exhaustion move.'
        }
      ]
    },
    {
      id: 'fvg-bisi-sibi-ce-50',
      number: 19,
      levelId: 3,
      title: 'Fair Value Gap (BISI/SIBI), 50% Consequent Encroachment & Memilih Multi-FVG',
      readMinutes: 10,
      diagramId: 'fvg-ce-anatomy',
      bookFormat: true,
      diagramAfterSection: 1,
      summary: 'Anatomi 3-candle BISI & SIBI, pengukuran presisi 50% Consequent Encroachment (CE), perbedaan Breakaway, Measuring, dan Exhaustion Gap, serta aturan memilih 1 FVG terbaik saat muncul Multi-FVG.',
      bookSections: [
        {
          number: '19.1',
          heading: 'Pengertian Fair Value Gap (FVG) dan Anatomi 3 Candle (BISI & SIBI)',
          shortTitle: 'Anatomi BISI & SIBI',
          paragraphs: [
            '**Fair Value Gap (FVG)** adalah celah ketidakseimbangan harga (*Imbalance*) yang terbentuk ketika pergerakan Displacement berlangsung terlalu cepat ke satu arah, sehingga hanya satu sisi transaksi (beli saja atau jual saja) yang terisi pada rentang harga tersebut.',
            'Secara mekanis, Fair Value Gap selalu diidentifikasi menggunakan **3 batang candlestick berurutan** (`Candle 1`, `Candle 2` sebagai candle Displacement tengah, dan `Candle 3`):',
            '1. **Bullish FVG — BISI** (*Buyside Imbalance, Sellside Inefficiency*): Terbentuk saat dorongan naik agresif. Celah diukur dari **High (ujung wick atas) Candle 1** hingga **Low (ujung wick bawah) Candle 3**. Saat harga terkoreksi turun kembali ke celah ini, BISI berpotensi menjadi area penopang untuk kelanjutan naik.',
            '2. **Bearish FVG — SIBI** (*Sellside Imbalance, Buyside Inefficiency*): Terbentuk saat dorongan turun agresif. Celah diukur dari **Low (ujung wick bawah) Candle 1** hingga **High (ujung wick atas) Candle 3**. Saat harga terkoreksi naik ke celah ini, SIBI berpotensi menjadi area penolakan untuk kelanjutan turun.'
          ]
        },
        {
          number: '19.2',
          heading: 'Garis 50% Consequent Encroachment (CE): Mengukur Validitas Reaksi FVG',
          shortTitle: 'Garis 50% CE FVG',
          paragraphs: [
            'Untuk menilai secara objektif apakah sebuah kotak FVG masih **dihormati** atau mulai **gagal**, metodologi ICT menggunakan garis titik tengah `50%` dari tinggi kotak FVG yang disebut **Consequent Encroachment (CE)**.',
            '**Rumus Eksak CE:** `CE = (Batas Atas FVG + Batas Bawah FVG) ÷ 2`. Sebagai contoh, jika sebuah Bullish FVG (BISI) memiliki batas bawah `2.644,00` (`High C1`) dan batas atas `2.648,00` (`Low C3`), maka garis **50% CE** berada tepat di **`2.646,00`**.',
            '**Aturan Membaca Reaksi CE:** Pada FVG yang sehat, **wick** candle boleh masuk menyentuh atau sedikit melewati garis 50% CE, tetapi **Body Close candle tidak boleh ditutup jauh melewati garis CE** — terlebih lagi ditutup menembus penuh sisi belakang kotak FVG. Jika Body Close menembus penuh keluar dari kotak FVG, fungsi awal FVG dinyatakan **gagal** dan berpotensi berbalik peran menjadi *Inversion FVG* (dibahas di Bab 20).'
          ]
        },
        {
          number: '19.3',
          heading: 'Klasifikasi Peran FVG dan Aturan Memilih Saat Muncul Multi-FVG',
          shortTitle: 'Jenis FVG & Multi-FVG',
          paragraphs: [
            'Dalam satu kaki dorongan XAU/USD, sering terbentuk 2 hingga 3 kotak FVG sekaligus (atas, tengah, dan bawah). Agar tidak bingung memilih kotak mana yang menjadi prioritas antre order, pahami **4 klasifikasi FVG** beserta aturan pemilihannya pada tabel berikut:'
          ],
          table: {
            caption: 'Klasifikasi Peran FVG dan Prioritas Pemilihan Multi-FVG',
            headers: ['Jenis / Posisi FVG', 'Lokasi pada Kaki Dorongan', 'Karakter Reaksi di XAU/USD', 'Keputusan Teknis'],
            rows: [
              ['Breakaway Gap', 'FVG pertama yang keluar langsung dari area sweep atau konsolidasi awal', 'Sering **tidak diisi penuh**; harga kadang hanya menyentuh tepi depannya lalu melanjutkan ekspansi', 'Jika momentum sangat kuat, pantau reaksi pada tepi depan tanpa memaksakan pengisian 100%'],
              ['Measuring Gap (Mid-Leg)', 'FVG yang berada di sekitar **pertengahan (40%–60%)** jarak menuju DOL', 'Berfungsi sebagai titik tengah proyeksi dorongan; sering dihormati pada tepi atau garis 50% CE', 'Valid dipertimbangkan bila masih berada di sisi **Discount** (Buy) atau **Premium** (Sell)'],
              ['Discount / Origin FVG (Multi-FVG)', 'FVG terdalam di bawah 50% (**Discount** untuk Buy) atau di atas 50% (**Premium** untuk Sell) dekat OB/OTE', 'Memberikan harga masuk paling optimal dengan jarak SL terpendek dan R:R tertinggi', '**Prioritas #1** saat muncul 2–3 FVG. FVG dangkal di zona salah (misal FVG Buy di 75% Premium) rawan ditembus saat koreksi ke Discount'],
              ['Exhaustion Gap', 'FVG yang baru terbentuk saat harga hampir menyentuh target DOL akhir (`PDH/PDL`)', 'Sering langsung ditembus balik (*gagal*) karena ruang ekspansi menuju target hampir habis', '**SKIP** — hindari entry pada FVG yang terlalu dekat dengan target akhir']
            ]
          }
        },
        {
          number: '19.4',
          heading: 'Studi Kasus XAU/USD: Memilih 1 dari 2 Bullish FVG Bertumpuk',
          shortTitle: 'Studi Kasus Multi-FVG',
          paragraphs: [
            'Berikut contoh penerapan aturan Multi-FVG pada satu kaki dorongan naik M5 XAU/USD di sesi London:'
          ],
          exampleBox: {
            title: 'Pemilihan FVG #1 (Premium) vs FVG #2 (Discount) pada XAU/USD M5',
            rows: [
              {
                label: 'Peta Dorongan',
                detail: 'Pasca-sweep Asia Low `2.640,00`, harga naik mencetak MSS ke `2.652,00` (rentang `$12,00`, titik 50% Equilibrium = `2.646,00`). Terbentuk **2 Bullish FVG**: **FVG #1 (Atas)** di `2.648,50 – 2.650,00` (berada di area **Premium 75%**) dan **FVG #2 (Bawah)** di `2.643,00 – 2.645,00` (berada di area **Discount 33%**, tepat di atas OB).'
              },
              {
                label: 'Alasan Menghindari FVG #1 (Atas)',
                detail: 'Posisi FVG #1 masih di atas garis Equilibrium `2.646,00` (area mahal untuk Buy). Memasang Buy Limit di `2.649,00` berisiko besar terkena Stop Loss ketika harga melakukan koreksi wajar turun ke area Discount.'
              },
              {
                label: 'Eksekusi pada FVG #2 (Discount)',
                detail: 'Prioritas ditetapkan pada **FVG #2 (`2.643,00 – 2.645,00`)** dengan garis **50% CE = `2.644,00`**. Buy Limit dipasang di `2.644,50`, SL struktural di bawah sweep `2.639,20` (risiko `$5,30`), target Asia High `2.656,00` (`+$11,50` → **R:R 1 : 2,17**).'
              }
            ]
          },
          callout: {
            tone: 'tip',
            kicker: 'Aturan Sentuhan Pertama (Fresh FVG)',
            title: 'Utamakan FVG yang Masih Fresh (Belum Pernah Diuji)',
            body: 'Pada Chart Gold Mapping Cockpit Amy FX Pro, setiap kotak FVG menampilkan status `FRESH`, `1×`, hingga `2× CE`. Semakin sering sebuah FVG diuji ulang, sisa order institusi di dalamnya semakin berkurang. Probabilitas terbaik selalu berada pada **pengujian pertama (Fresh)**.'
          }
        }
      ],
      keyTakeaways: [
        '**BISI (Bullish FVG)** = celah antara `High Candle 1` dan `Low Candle 3`; **SIBI (Bearish FVG)** = celah antara `Low Candle 1` dan `High Candle 3`.',
        '**Consequent Encroachment (CE)** adalah titik tengah `50%` kotak FVG: Wick boleh menyentuh CE, tetapi **Body Close** harus tetap menghormatinya.',
        'Saat muncul **Multi-FVG** dalam satu kaki dorongan, abaikan FVG dangkal di zona mahal/murah yang salah dan prioritaskan FVG **Fresh** pada sisi **Discount (Buy) / Premium (Sell)**.',
        'Hindari **Exhaustion Gap** yang terbentuk tepat di depan target DOL akhir karena ruang profitnya sudah sempit.'
      ],
      bridgeNext: 'Jika pada bagian 19.2 sebuah FVG ternyata tidak dihormati melainkan ditembus penuh oleh Body Close candle lawan, kegagalan tersebut tidak selalu berarti kekacauan. Dalam ICT, FVG yang gagal dapat berbalik peran menjadi pemicu entry baru yang dibahas pada **Bab 20: Inversion Fair Value Gap (iFVG): Saat FVG Gagal Berubah Jadi Peluang**.',
      practiceCta: {
        label: 'Latih Deteksi FVG & 50% CE di Backtest',
        description: 'Uji ketepatan membedakan BISI/SIBI valid, 50% CE, dan jebakan FVG mahal di 100 Studi Kasus ICT.',
        href: 'trading-practice/index.html'
      },
      conceptBlocks: [
        {
          heading: 'Anatomi BISI, SIBI & 50% Consequent Encroachment',
          paragraphs: [
            'Bullish FVG (BISI) diukur dari High C1 ke Low C3; Bearish FVG (SIBI) dari Low C1 ke High C3, dengan garis 50% CE sebagai batas validitas reaksi body candle.'
          ]
        }
      ],
      mappingSteps: [
        'Tandai celah 3-candle hasil Displacement: High C1–Low C3 (BISI) atau Low C1–High C3 (SIBI).',
        'Tarik garis tengah 50% Consequent Encroachment (CE) tepat di tengah kotak FVG.',
        'Jika muncul Multi-FVG, pilih FVG Fresh yang berada di sisi Discount (Buy) atau Premium (Sell) dan jauh dari target DOL akhir.'
      ],
      decisionTree: [
        {
          condition: 'Ada 2 Bullish FVG dalam 1 kaki naik: FVG atas di 75% Premium, FVG bawah di 33% Discount.',
          action: 'Prioritaskan FVG bawah (Discount); FVG atas di area Premium rawan ditembus saat harga melakukan retracement ke Discount.'
        },
        {
          condition: 'Body candle M5 ditutup penuh menembus sisi belakang kotak FVG.',
          action: 'FVG asal resmi gagal; jangan memaksakan entry searah FVG lama — pantau potensi flip menjadi iFVG.'
        }
      ],
      validRules: [
        'FVG masih Fresh, lahir dari Displacement pasca-sweep, dan berada di sisi Discount/Premium yang benar.',
        'Body candle menghormati batas kotak atau garis 50% CE saat pullback.'
      ],
      invalidRules: [
        'FVG mikro di tengah sideways tanpa Displacement atau sudah berkali-kali ditembus.',
        'Exhaustion FVG yang muncul terlalu dekat dengan target akhir DOL.'
      ],
      xauScenario: {
        context: 'Setelah MSS Bullish M5 dari 2.640 ke 2.652, terbentuk FVG #1 di 2.648,50–2.650,00 (Premium) dan FVG #2 di 2.643,00–2.645,00 (Discount).',
        steps: [
          'Abaikan FVG #1 yang berada di area Premium.',
          'Tandai 50% CE FVG #2 di 2.644,00 dan pasang Buy Limit di 2.644,50 dengan SL 2.639,20 menuju 2.656,00 (R:R 1:2,17).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: Entry di FVG Dangkal Area Premium',
        context: 'Trader memasang Buy Limit di FVG #1 (2.649,00) padahal di bawahnya ada FVG #2 di Discount.',
        whyFailed: 'FVG #1 masih berada di sisi mahal (Premium 75%); harga menembus FVG #1 untuk mengisi FVG #2 di Discount sebelum melanjutkan kenaikan.'
      },
      goldenRules: [
        'Hanya ambil FVG yang lahir dari Sweep + Displacement di lokasi Discount/Premium yang tepat.',
        'Hormati garis 50% CE: wick boleh menyentuh, body close harus tetap menghormati.'
      ],
      quiz: [
        {
          question: 'Pada pola 3 candle **Bullish FVG (BISI)**, celah kosong diukur dari titik mana ke titik mana?',
          options: [
            'Dari Low Candle 1 ke High Candle 3',
            'Dari **High (ujung wick atas) Candle 1** ke **Low (ujung wick bawah) Candle 3**',
            'Dari Open Candle 2 ke Close Candle 2 saja',
            'Dari High hari kemarin ke Low hari ini'
          ],
          answerIndex: 1,
          explanation: 'Pada BISI (dorongan naik), ruang Imbalance berada di antara puncak (High) Candle 1 dan dasar (Low) Candle 3.'
        },
        {
          question: 'Sebuah Bullish FVG XAU/USD memiliki batas bawah `2.644,00` dan batas atas `2.648,00`. Di harga berapa garis **50% Consequent Encroachment (CE)** berada, dan bagaimana syarat sehatnya?',
          options: [
            'Di `2.646,00` — wick boleh menyentuh CE, tetapi **Body Close** harus tetap menghormatinya dan tidak tutup menembus keluar kotak',
            'Di `2.642,00` — body wajib menutup di bawah `2.640,00`',
            'Di `2.648,00` — wick tidak boleh menyentuh kotak sama sekali',
            'Di `2.650,00` — semakin sering ditembus bolak-balik semakin bagus'
          ],
          answerIndex: 0,
          explanation: 'CE = `(2.644 + 2.648) ÷ 2 = 2.646,00`. FVG yang kuat mempertahankan penutupan body tetap menghormati garis 50% CE.'
        },
        {
          question: 'Dalam satu kaki dorongan naik XAU/USD dari `2.640` ke `2.652`, muncul 2 Bullish FVG: FVG #1 di `2.648,50–2.650,00` (Premium 75%) dan FVG #2 di `2.643,00–2.645,00` (Discount 33%). Mana prioritas utama trader ICT?',
          options: [
            'FVG #1 karena paling dekat dengan harga sekarang',
            'Membuka Buy di keduanya dengan lot penuh sekaligus',
            '**FVG #2 (Discount 33%)** — karena FVG #1 di area mahal (Premium) rawan ditembus saat harga retracement menuju FVG Discount',
            'Menunggu sampai kedua FVG ditembus turun lalu baru Buy'
          ],
          answerIndex: 2,
          explanation: 'Saat Multi-FVG muncul, prioritaskan FVG Fresh di area Discount (untuk Buy) atau Premium (untuk Sell) agar R:R tajam dan tidak terjebak di area mahal.'
        },
        {
          question: 'Apa bahaya terbesar dari **Exhaustion Gap (FVG Kelelahan)** yang baru terbentuk ketika harga tinggal `$2` lagi menyentuh target akhir DOL (`PDH/PWH`)?',
          options: [
            'Spread otomatis berubah menjadi nol',
            'Ruang ekspansi menuju target hampir habis sehingga FVG tersebut sangat rawan langsung ditembus balik',
            'FVG tersebut akan bertahan selama 3 minggu',
            'Broker tidak mengizinkan pemasangan Take Profit'
          ],
          answerIndex: 1,
          explanation: 'Begitu harga mendekati atau menyentuh target DOL akhir, institusi mulai merealisasikan profit dan membalik arah — bukan memulai tren baru.'
        }
      ]
    },
    {
      id: 'order-block-valid-mean-threshold',
      number: 21,
      levelId: 3,
      title: 'Order Block (OB) Bermutu Tinggi vs Trap OB & 50% Mean Threshold',
      readMinutes: 10,
      diagramId: 'order-block-mt',
      bookFormat: true,
      diagramAfterSection: 1,
      summary: 'Definisi mekanis Order Block (single dan consecutive candles), 4 syarat pembeda High-Probability OB vs Trap OB, rumus 50% Mean Threshold (body OB) vs 50% CE (FVG), serta perbandingan entry Open OB vs 50% MT.',
      bookSections: [
        {
          number: '21.1',
          heading: 'Definisi Mekanis Order Block (OB) dalam ICT',
          shortTitle: 'Definisi Order Block',
          paragraphs: [
            '**Order Block (OB)** adalah salah satu konsep ICT yang paling sering disalahgunakan. Banyak pemula menandai setiap candle merah sebelum candle hijau sebagai Bullish Order Block, sehingga grafik penuh dengan zona lemah yang mudah ditembus.',
            'Secara institusional, pelaku pasar bermodal besar tidak selalu dapat membeli seluruh volume kontrak dalam satu level harga tanpa menggerakkan pasar. Oleh karena itu, harga sering didorong turun terlebih dahulu untuk memicu Stop Loss dan order jual ritel, lalu seluruh likuiditas tersebut diserap sebelum harga didorong naik dengan cepat. Jejak candle tempat penyerapan order tersebut terjadi disebut **Order Block**:',
            '1. **Bullish Order Block (`+OB`):** Satu candle turun (*down-close*) atau **rangkaian 2–3 candle turun berurutan** tepat sebelum dorongan **Displacement naik** yang agresif.',
            '2. **Bearish Order Block (`-OB`):** Satu candle naik (*up-close*) atau **rangkaian 2–3 candle naik berurutan** tepat sebelum dorongan **Displacement turun** yang agresif.',
            '*Aturan Rangkaian Candle:* Apabila tepat sebelum Displacement naik terdapat 2 atau 3 candle turun berurutan tanpa diselingi candle naik, **seluruh rangkaian candle tersebut dihitung sebagai satu Order Block**, dengan batas atas diambil dari **Open candle turun pertama**.'
          ]
        },
        {
          number: '21.2',
          heading: 'Filter Ketat: High-Probability OB vs Trap OB (Low-Probability)',
          shortTitle: 'High-Prob OB vs Trap OB',
          paragraphs: [
            'Untuk menyaring Order Block yang layak ditransaksikan dari OB lemah (**Trap OB**), evaluasi setiap calon Order Block dengan **4 kriteria wajib** berikut:'
          ],
          table: {
            caption: 'Perbandingan Kriteria: High-Probability Order Block vs Trap OB',
            headers: ['Kriteria Uji', 'High-Probability OB (Valid)', 'Trap OB / Low-Probability (Skip)', 'Alasan Institusional'],
            rows: [
              ['1. Pemicu Liquidity', 'Candle OB **baru saja melakukan sweep Liquidity** (`Asia H/L`, `PDH/PDL`, `Swing`) atau terbentuk di dalam **POI HTF**', 'Terbentuk di ruang kosong tengah range tanpa sweep apa pun', 'Tanpa sweep atau POI HTF, tidak ada bukti penyerapan likuiditas lawan'],
              ['2. Displacement + FVG', 'Langsung diikuti **Displacement tegas yang mencetak FVG** keluar dari OB', 'Keluar perlahan tanpa FVG, atau candle saling bertumpuk merayap', 'FVG menjadi bukti objektif adanya injeksi volume institusi dari OB tersebut'],
              ['3. Dampak Struktur', 'Dorongan keluarnya **mematahkan struktur (`BOS` / `MSS`)** atau level kunci', 'Gagal menembus swing penting mana pun', 'Membuktikan OB memiliki kekuatan untuk menggeser kendali pasar'],
              ['4. Kesegaran & Ukuran', 'Masih **Fresh** (belum diuji ulang) dan lebarnya proporsional (`≤ $6–$8` pada M5/M15 Gold)', 'Sudah disentuh berkali-kali atau terlalu besar (`> $12` di M5)', 'OB terlalu lebar memaksa jarak SL terlalu besar sehingga merusak R:R']
            ]
          }
        },
        {
          number: '21.3',
          heading: 'Garis 50% Mean Threshold (MT) dan Perbedaannya dengan 50% CE FVG',
          shortTitle: '50% Mean Threshold vs CE',
          paragraphs: [
            'Dalam ICT terdapat dua titik tengah `50%` yang berbeda alat ukurnya: pada Bab 19, **50% Consequent Encroachment (CE)** diukur dari **kotak FVG** (antar-wick). Khusus pada **Order Block**, titik tengah `50%` disebut **Mean Threshold (MT)**.',
            '**Cara Mengukur Mean Threshold (MT):** Ukur titik tengah **50% hanya dari BODY** (*Open ke Close*) candle Order Block — bukan dari ujung wick terjauh. **Rumusnya:** `MT = (Open OB + Close OB) ÷ 2`.',
            'Sebagai contoh, sebuah Bullish OB M15 memiliki `Open = 2.646,00`, `Close = 2.642,00`, dan `Low` (ujung wick) di `2.640,00`. Maka garis **50% Mean Threshold** berada tepat di **`(2.646,00 + 2.642,00) ÷ 2 = 2.644,00`**.',
            '**Aturan Validitas MT:** Saat harga kembali menguji Bullish OB, **wick boleh menyentuh Mean Threshold (`2.644,00`)**, tetapi **Body Close candle harus tetap bertahan di atas Mean Threshold**. Jika Body Close menembus jauh di bawah 50% MT hingga keluar di bawah OB, Order Block dinyatakan gagal dan berpotensi berubah fungsi menjadi **Breaker Block** (Bab 22).'
          ]
        },
        {
          number: '21.4',
          heading: 'Dua Pilihan Entry pada Order Block: Open OB vs 50% Mean Threshold',
          shortTitle: 'Open OB vs 50% MT Entry',
          paragraphs: [
            'Setelah sebuah High-Probability OB terverifikasi (Sweep + Displacement/FVG + MSS), terdapat **dua pilihan penempatan Limit Order** dengan karakteristik risiko-imbalan yang berbeda:'
          ],
          exampleBox: {
            title: 'Perbandingan Entry XAU/USD: Bullish OB (Open 2.646,00 · Close 2.642,00 · Wick Low 2.640,00)',
            rows: [
              {
                label: 'Opsi 1 — Entry di Open OB (`2.646,00` · Konservatif)',
                detail: 'Pasang Buy Limit pada batas atas body OB (`2.646,00`). SL struktural di bawah wick sweep (`2.639,20` → risiko **`$6,80`**). Target Asia High `2.660,00` (`+$14,00` → **R:R 1 : 2,06**). **Kelebihan:** Probabilitas order terjemput lebih tinggi.'
              },
              {
                label: 'Opsi 2 — Entry di 50% Mean Threshold (`2.644,00` · Presisi)',
                detail: 'Pasang Buy Limit lebih dalam pada garis MT (`2.644,00`). SL sama di `2.639,20` → risiko mengecil menjadi **`$4,80`**. Target sama di `2.660,00` (`+$16,00` → **R:R meningkat menjadi 1 : 3,33**). **Konsekuensi:** Order bisa terlewat jika harga langsung memantul dari Open OB.'
              },
              {
                label: 'Panduan Pemilihan Praktis',
                detail: 'Jika lebar body OB ringkas (`≤ $3,50`), pilih **Open OB** agar tingkat keterjemputan tinggi. Jika body OB lebih lebar (`$4–$6`), gunakan **50% Mean Threshold** agar jarak SL tetap terukur dan R:R minimal `1:2` terjaga.'
              }
            ]
          }
        }
      ],
      keyTakeaways: [
        '**Bullish OB** adalah 1 atau rangkaian candle turun terakhir sebelum Displacement naik; **Bearish OB** adalah 1 atau rangkaian candle naik terakhir sebelum Displacement turun.',
        'Order Block bermutu tinggi wajib memenuhi 3 bukti: **sweep Liquidity / POI HTF**, **melahirkan Displacement + FVG**, dan **mematahkan struktur (BOS/MSS)**.',
        '**50% Mean Threshold (MT)** diukur dari **body (Open–Close)** OB — berbeda dengan **50% CE** yang diukur dari kotak FVG.',
        'Gunakan **Open OB** saat body OB ringkas untuk peluang terjemput lebih tinggi, atau **50% MT** saat body OB lebar untuk menjaga R:R minimal `1:2`.'
      ],
      bridgeNext: 'Apabila sebuah Order Block yang terbentuk pasca-sweep justru ditembus penuh oleh Displacement berlawanan, zona tersebut tidak selalu kehilangan fungsi — melainkan dapat berbalik kutub menjadi area pantulan kuat. Mekanisme tersebut dibahas lengkap pada **Bab 22: Breaker Block (BB), Mitigation Block & ICT Unicorn Model**.',
      practiceCta: {
        label: 'Pantau OB & 50% MT di Chart Gold',
        description: 'Nyalakan layer Order Block di Chart Gold Mapping Cockpit untuk melihat zona OB aktif, garis 50%, dan jejak sentuhannya secara langsung.',
        href: '../mapping/index.html'
      },
      conceptBlocks: [
        {
          heading: 'High-Probability OB & 50% Mean Threshold',
          paragraphs: [
            'Order Block valid adalah candle/rangkaian candle berlawanan terakhir yang sweep Liquidity dan langsung melahirkan Displacement + FVG, dengan 50% Mean Threshold pada badannya sebagai batas uji validitas.'
          ]
        }
      ],
      mappingSteps: [
        'Tandai candle atau rangkaian 2–3 candle berlawanan terakhir tepat di ujung Sweep Liquidity sebelum Displacement.',
        'Verifikasi ada celah FVG yang langsung lahir keluar dari OB dan memecah struktur.',
        'Tarik garis 50% Mean Threshold di tengah body (Open–Close) OB dan tempatkan SL di luar ujung wick OB.'
      ],
      decisionTree: [
        {
          condition: 'Ada candle merah sebelum candle hijau, tetapi tidak sweep Liquidity dan tidak mencetak FVG.',
          action: 'SKIP — itu Low-Probability / Trap OB (tanpa Sweep dan tanpa FVG), bukan High-Probability Order Block.'
        },
        {
          condition: 'Body OB terlalu lebar ($5–$6 di M5 Gold) sehingga entry di Open OB membuat R:R di bawah 1:2.',
          action: 'Gunakan titik 50% Mean Threshold (MT) sebagai batas entry atau tunggu konfirmasi M5 di dalam OB.'
        }
      ],
      validRules: [
        'OB sweep Liquidity atau berada di POI HTF, diikuti Displacement + FVG, dan memecah struktur.',
        'Body candle menghormati batas Open OB atau garis 50% Mean Threshold saat diuji ulang.'
      ],
      invalidRules: [
        'Menandai sembarang candle terakhir di tengah konsolidasi tanpa Sweep dan tanpa FVG.',
        'Memakai OB yang sudah disentuh berulang kali atau lebarnya terlalu ekstrem.'
      ],
      xauScenario: {
        context: 'Bullish OB M15 XAU/USD pasca-sweep Asia Low: Open 2.646,00, Close 2.642,00, Wick Low 2.640,00 diikuti Displacement + FVG.',
        steps: [
          'Hitung 50% Mean Threshold = (2.646 + 2.642) ÷ 2 = 2.644,00.',
          'Entry pada 2.644,00 dengan SL di 2.639,20 ($4,80) menuju target 2.660,00 (+$16,00, R:R 1:3,33).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: Entry di Trap OB Tanpa Sweep & FVG',
        context: 'Trader menandai candle merah biasa di tengah tren tanpa sweep dan tanpa FVG.',
        whyFailed: 'OB tersebut tidak lahir dari Sweep Liquidity dan tidak meninggalkan FVG; harga langsung menembusnya menuju Liquidity dan OB valid di bawahnya.'
      },
      goldenRules: [
        'Tanpa Sweep dan tanpa FVG setelahnya, sebuah candle bukanlah High-Probability Order Block.',
        'Bedakan dua titik 50%: CE untuk kotak FVG, Mean Threshold untuk body Order Block.'
      ],
      quiz: [
        {
          question: 'Kombinasi syarat manakah yang membedakan **High-Probability Order Block** dari **Trap OB**?',
          options: [
            'Candle kecil di tengah sesi Asia tanpa FVG dan tanpa break struktur',
            '**Sweep Liquidity / menyentuh POI HTF** + langsung diikuti **Displacement yang mencetak FVG** + **mematahkan struktur (BOS/MSS)**',
            'Sudah diuji harga sebanyak 4 kali di hari yang sama',
            'Memiliki tinggi body lebih dari $15 di M5'
          ],
          answerIndex: 1,
          explanation: 'Tiga bukti institusional (Sweep + Displacement/FVG + Structural Break) menyaring sebagian besar Order Block palsu.'
        },
        {
          question: 'Sebuah candle Bullish Order Block M15 XAU/USD memiliki `Open = 2.650,00`, `Close = 2.646,00`, dan ujung wick bawah (`Low`) = `2.643,00`. Di harga berapakah garis **50% Mean Threshold (MT)** berada?',
          options: [
            '`2.646,50` (tengah dari Open ke Wick Low)',
            '**`2.648,00`** — yaitu titik tengah `50%` dari **body (Open ke Close)**: `(2.650 + 2.646) ÷ 2`',
            '`2.644,50` (tengah dari Close ke Wick Low)',
            '`2.652,00` (di atas Open)'
          ],
          answerIndex: 1,
          explanation: 'Mean Threshold diukur tepat di 50% body (Open ke Close) candle Order Block, bukan termasuk ujung wick.'
        },
        {
          question: 'Jika tepat sebelum Displacement naik terdapat **3 candle merah berurutan** tanpa diselingi candle hijau, bagaimana cara menandai Bullish Order Block yang benar dalam ICT?',
          options: [
            'Hanya candle merah paling kecil yang dipakai',
            'Dianggap tidak ada Order Block sama sekali',
            'Keseluruhan **rangkaian 3 candle merah berurutan** itu dihitung sebagai **satu blok Order Block** dengan batas atas dari Open candle merah pertama',
            'Dibagi menjadi 3 transaksi terpisah secara acak'
          ],
          answerIndex: 2,
          explanation: 'Dalam ICT, rangkaian candle berlawanan berurutan sebelum Displacement diperlakukan sebagai satu kesatuan blok akumulasi institusi.'
        },
        {
          question: 'Apa konsekuensi paling langsung jika sebuah Bullish Order Block ditembus penuh oleh **Body Close** candle bearish jauh melewati 50% Mean Threshold dan sisi bawahnya?',
          options: [
            'Bullish OB menjadi dua kali lebih kuat untuk Buy',
            'Bullish OB tersebut **resmi gagal (Failed OB)** dan berpotensi berubah fungsi menjadi **Bearish Breaker Block**',
            'Otomatis mengaktifkan Take Profit',
            'Menandakan pasar libur akhir pekan'
          ],
          answerIndex: 1,
          explanation: 'Penutupan body yang menembus penuh OB menandakan arus order telah berbalik dan membuka skenario Breaker Block.'
        }
      ]
    },
    {
      id: 'cisd-vs-mss-sinyal-awal',
      number: 23,
      levelId: 3,
      title: 'CISD vs Market Structure Shift (MSS): Dua Tingkat Konfirmasi Pembalikan Arah',
      readMinutes: 10,
      diagramId: 'cisd-vs-mss',
      bookFormat: true,
      diagramAfterSection: 1,
      summary: 'Perbedaan mekanis antara Change in State of Delivery (CISD) pada level rangkaian candle dan Market Structure Shift (MSS) pada level struktur swing, syarat validasi Body Close, serta cara menggabungkan keduanya di XAU/USD.',
      bookSections: [
        {
          number: '23.1',
          heading: 'Mengapa Menunggu Swing Struktur Jauh Sering Mengurangi Rasio Risk-to-Reward?',
          shortTitle: 'Fungsi CISD di XAU/USD',
          paragraphs: [
            'Pada grafik M5 XAU/USD, sering terjadi kondisi ketika harga turun melakukan sweep `PDL`, lalu Swing High struktural terdekat berada cukup jauh (misalnya `$10–$12` di atas titik terendah). Jika trader menunggu Swing High tersebut ditembus untuk konfirmasi **MSS**, harga terkadang sudah bergerak mendekati target sebelum sempat memberi koreksi yang memadai.',
            'Untuk mengatasi jeda tersebut, metodologi ICT membedakan dua tingkat konfirmasi pembalikan arah yang saling melengkapi:',
            '1. **CISD (*Change in State of Delivery*):** Konfirmasi perubahan kendali pengiriman harga lebih awal pada level rangkaian candle.',
            '2. **MSS (*Market Structure Shift*):** Konfirmasi pembalikan tren yang lebih ketat pada level struktur swing disertai Displacement dan FVG.'
          ]
        },
        {
          number: '23.2',
          heading: 'Aturan Mekanis Membaca Change in State of Delivery (CISD)',
          shortTitle: 'Aturan Mekanis CISD',
          paragraphs: [
            'Istilah *State of Delivery* merujuk pada arah pengiriman harga yang sedang dominan — rangkaian candle bearish (*down-close*) menandakan pengiriman ke bawah, sedangkan rangkaian candle bullish (*up-close*) menandakan pengiriman ke atas. **CISD** terjadi ketika kendali pengiriman tersebut berpindah ke sisi lawan sebelum Swing struktural utama ditembus.',
            'Validasi CISD dilakukan melalui 3 langkah objektif berikut:',
            '1. **Syarat Konteks (Wajib):** Harga baru saja melakukan sweep Liquidity kunci (`BSL/SSL`, `PDH/PDL`, `Asia High/Low`) atau menyentuh **POI HTF** (Order Block / FVG H1–H4).',
            '2. **Tandai Harga Open Rangkaian Candle Terakhir:** Untuk **Bullish CISD**, identifikasi rangkaian candle bearish berurutan terakhir yang mendorong harga ke titik terendah sweep, lalu tarik garis horizontal tepat pada **Harga Open candle bearish pertama** di rangkaian tersebut. Untuk **Bearish CISD**, tarik garis pada **Harga Open candle bullish pertama** dari rangkaian naik yang melakukan sweep puncak.',
            '3. **Tunggu Body Close Melewati Garis Open:** CISD dinyatakan sah hanya jika candle lawan menutup **Body Close** penuh melewati garis Open tersebut. Penembusan yang hanya berupa wick belum mengonfirmasi CISD.'
          ]
        },
        {
          number: '23.3',
          heading: 'Perbandingan Langsung: CISD vs Market Structure Shift (MSS)',
          shortTitle: 'Perbandingan CISD vs MSS',
          paragraphs: [
            'Berbeda dari CISD yang mengukur perubahan pada level rangkaian candle, **Market Structure Shift (MSS)** menuntut pematahan **Swing High atau Swing Low struktural** menggunakan **Displacement** (Body Close tegas yang disertai pembentukan FVG). Tabel berikut merangkum perbedaan keduanya:'
          ],
          table: {
            caption: 'Perbandingan Mekanis: CISD vs Market Structure Shift (MSS)',
            headers: ['Aspek', 'CISD (Level Rangkaian Candle)', 'MSS (Level Struktur Swing)', 'Kombinasi Keduanya'],
            rows: [
              ['Acuan yang Ditembus', '**Harga Open** candle pertama dari rangkaian searah terakhir yang melakukan sweep', '**Swing High / Swing Low** struktural yang jelas (pola 3 candle)', 'CISD terbentuk lebih dulu lalu segera dikonfirmasi oleh MSS + FVG searah'],
              ['Syarat Validasi', 'Wajib **Body Close** melewati garis Open pasca-Sweep atau POI HTF', 'Wajib **Body Close + Displacement (FVG)** pasca-Sweep atau POI HTF', 'Keduanya menolak penembusan yang hanya berupa wick'],
              ['Kecepatan & Jarak SL', '**Lebih awal** — titik masuk lebih dekat ke ekstrem sweep sehingga jarak SL lebih ringkas', 'Lebih lambat, tetapi struktur tren pada timeframe tersebut sudah sah patah', 'Memberi ketepatan posisi awal sekaligus konfirmasi struktur penuh'],
              ['Tingkat Keamanan', 'Sedang hingga Tinggi (rentan gagal jika dipakai di tengah range tanpa Sweep HTF)', '**Tinggi** — standar konfirmasi paling aman untuk pemula hingga menengah', 'Standar konfirmasi utama pada sesi London dan NY AM']
            ]
          }
        },
        {
          number: '23.4',
          heading: 'Studi Kasus XAU/USD M5: Urutan Bullish CISD Diikuti Bullish MSS',
          shortTitle: 'Studi Kasus CISD + MSS',
          paragraphs: [
            'Berikut urutan pembacaan CISD dan MSS secara berurutan pada grafik M5 XAU/USD setelah harga melakukan sweep `PDL`:'
          ],
          exampleBox: {
            title: 'Urutan Teknis XAU/USD M5 Pasca-Sweep PDL 2.638,00',
            rows: [
              {
                label: 'Tahap 1 — Sweep & Titik Acuan',
                detail: 'XAU/USD turun melakukan sweep `PDL 2.638,00` dengan rangkaian **2 candle bearish berurutan** yang dimulai dari **`Open = 2.641,50`**. Sementara itu, Swing High struktural M5 terdekat berada di **`2.645,00`**.'
              },
              {
                label: 'Tahap 2 — Konfirmasi Bullish CISD',
                detail: 'Candle bullish M5 menutup **Body Close** di **`2.642,80`** (di atas Open `2.641,50`). **Bullish CISD sah terkonfirmasi** — kendali pengiriman harga berpindah ke pembeli dan area `2.638,00–2.641,50` dapat ditandai sebagai kandidat Bullish Order Block.'
              },
              {
                label: 'Tahap 3 — Konfirmasi Bullish MSS + FVG',
                detail: 'Candle M5 berikutnya mendorong naik dan menutup **Body Close** di **`2.646,50`** (menembus Swing High `2.645,00` sambil membentuk Bullish FVG pada `2.642,00–2.644,50`). **Bullish MSS sah terkonfirmasi**, memberi acuan rencana Buy Limit dengan SL struktural di bawah `2.637,40`.'
              }
            ]
          },
          callout: {
            tone: 'tip',
            kicker: 'Panduan Pengalaman Eksekusi',
            title: 'Prioritaskan MSS + FVG pada 30–50 Transaksi Pertama',
            body: 'Selama membangun konsistensi awal, gunakan **Sweep + MSS + Displacement + FVG** sebagai syarat wajib sebelum mengambil posisi. Setelah terbiasa membaca kualitas Sweep dan POI HTF secara akurat, CISD dapat dipakai sebagai konfirmasi tambahan ketika jarak Swing struktural terlalu jauh.'
          }
        }
      ],
      keyTakeaways: [
        '**CISD** (*Change in State of Delivery*) sah ketika **Body Close** menembus **Harga Open** candle pertama dari rangkaian searah terakhir yang melakukan sweep Liquidity.',
        '**MSS** (*Market Structure Shift*) sah ketika **Body Close + Displacement (FVG)** menembus **Swing High/Low struktural**.',
        'Baik CISD maupun MSS **wajib didahului Sweep Liquidity atau sentuhan POI HTF**; di tengah konsolidasi tanpa konteks, keduanya tidak valid sebagai sinyal reversal.',
        'Urutan konfirmasi paling kuat adalah **CISD muncul lebih awal** lalu segera diikuti oleh **MSS + FVG** searah.'
      ],
      bridgeNext: 'Seluruh komponen PD Array dan konfirmasi pembalikan arah telah dibahas: Displacement (Bab 18), FVG + 50% CE (Bab 19), iFVG (Bab 20), Order Block + 50% MT (Bab 21), Breaker/Mitigation/Unicorn (Bab 22), serta CISD vs MSS (Bab 23). Langkah penutup Bagian IV membahas filter lokasi harga dan urutan prioritas zona pada **Bab 24: Premium, Discount, Equilibrium (50%), OTE (62%–79%) & Hierarki PD Array**.',
      practiceCta: {
        label: 'Latih Bedakan CISD vs MSS di 100 Kasus',
        description: 'Buka Latihan 100 Kasus pilar Market Structure untuk melatih ketajaman membaca CISD dan MSS pada chart Gold.',
        href: 'trading-practice/index.html'
      },
      conceptBlocks: [
        {
          heading: 'CISD vs MSS',
          paragraphs: [
            'CISD membaca perubahan kendali pengiriman harga di level Open rangkaian candle lawan terakhir, sedangkan MSS menuntut penembusan Swing struktural dengan Body Close, Displacement, dan FVG.'
          ]
        }
      ],
      mappingSteps: [
        'Tunggu Sweep Liquidity (PDH/PDL/Asia) atau sentuhan POI HTF terlebih dahulu.',
        'Tandai garis Open rangkaian candle terakhir menuju ekstrem sweep (acuan CISD) dan Swing terdekat (acuan MSS).',
        'Tunggu Body Close sah menembus acuan tersebut sebelum menyiapkan rencana retracement ke FVG/OB.'
      ],
      decisionTree: [
        {
          condition: 'Ada candle bullish menutup di atas 1 candle bearish di tengah konsolidasi Asia tanpa Sweep atau POI HTF.',
          action: 'SKIP — bukan CISD valid karena tidak didahului Sweep Liquidity atau sentuhan POI HTF.'
        },
        {
          condition: 'Masih berada pada 30 transaksi pertama dan muncul CISD tipis tanpa MSS.',
          action: 'Tunggu konfirmasi penuh MSS + Displacement + FVG agar risiko sinyal palsu lebih terkendali.'
        }
      ],
      validRules: [
        'CISD dan MSS sama-sama mensyaratkan Body Close penuh, bukan sekadar penembusan wick.',
        'Wajib didahului Sweep Liquidity atau sentuhan POI timeframe besar (H1/H4).'
      ],
      invalidRules: [
        'Menganggap setiap candle yang menembus Open candle sebelumnya di tengah range sebagai CISD.',
        'Masuk posisi sebelum candle pemicu CISD atau MSS selesai tutup (close).'
      ],
      xauScenario: {
        context: 'Sweep PDL 2.638,00 dengan 2 candle bearish dimulai dari Open 2.641,50; Swing High M5 terdekat di 2.645,00.',
        steps: [
          'Body Close M5 di 2.642,80 mengonfirmasi Bullish CISD lebih awal.',
          'Body Close M5 berikutnya di 2.646,50 disertai FVG mengonfirmasi Bullish MSS penuh.'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: CISD Tanpa Konteks HTF',
        context: 'Trader mengeksekusi CISD M5 di tengah Dealing Range tanpa Sweep Liquidity dan melawan arah tren H1.',
        whyFailed: 'Tanpa Sweep Liquidity atau POI HTF, pantulan harga cepat melemah dan tren utama H1 berlanjut menyentuh SL.'
      },
      goldenRules: [
        'CISD mengonfirmasi perubahan kendali pada level rangkaian candle; MSS mengonfirmasi pematahan struktur pada level swing.',
        'Tanpa Sweep Liquidity atau sentuhan POI HTF, CISD maupun MSS tidak memiliki konteks probabilitas tinggi.'
      ],
      quiz: [
        {
          question: 'Secara mekanis, titik harga manakah yang harus ditembus oleh **Body Close** agar **Bullish CISD** sah terkonfirmasi setelah harga sweep `PDL`?',
          options: [
            'Ujung ekor bawah candle paling rendah',
            '**Harga Open** dari candle turun (*down-close*) pertama pada rangkaian candle bearish terakhir yang mendorong sweep `PDL`',
            'Harga penutupan pekan lalu',
            'Titik tertinggi sesi Asia 3 hari yang lalu'
          ],
          answerIndex: 1,
          explanation: 'Bullish CISD sah ketika Body Close candle bullish ditutup di atas harga Open candle pertama dari rangkaian candle bearish terakhir yang melakukan sweep.'
        },
        {
          question: 'Apa perbedaan kecepatan dan tingkat validasi utama antara **CISD** dan **MSS**?',
          options: [
            'MSS selalu muncul lebih dulu daripada CISD',
            '**CISD** muncul lebih awal karena mengukur penutupan melewati Open rangkaian candle, sedangkan **MSS** lebih lambat tetapi memberi validasi struktur lebih kuat karena mematahkan Swing dengan Displacement + FVG',
            'CISD cukup pakai wick sedangkan MSS tidak perlu candle close',
            'Keduanya hanya berlaku di timeframe Bulanan'
          ],
          answerIndex: 1,
          explanation: 'CISD mendeteksi perubahan kendali pengiriman di level candle lebih awal; MSS mengonfirmasi pematahan struktur pada level swing.'
        },
        {
          question: 'Harga sweep `PDL 2.638,00` dengan 2 candle bearish (Open awal `2.641,50`), lalu candle bullish M5 sempat menyentuh `2.643,00` tetapi **ditutup (Close) di `2.640,80`**. Apakah Bullish CISD sudah valid?',
          options: [
            'Sudah valid karena wick-nya sempat naik ke `2.643,00`',
            '**Belum valid** — karena CISD mensyaratkan **Body Close** di atas `2.641,50`, bukan sekadar tusukan wick',
            'Sudah valid dan langsung pasang lot 2× lipat',
            'Otomatis berubah menjadi Bearish MSS'
          ],
          answerIndex: 1,
          explanation: 'Sama seperti BOS dan MSS, CISD mewajibkan Body Close melewati garis Open, bukan sekadar ekor candle.'
        },
        {
          question: 'Untuk trader yang sedang membangun konsistensi di 30–50 transaksi pertamanya, standar konfirmasi reversal mana yang paling aman digunakan?',
          options: [
            'Masuk sebelum candle selesai tutup',
            'Menjadikan **Sweep + MSS + Displacement + FVG** sebagai standar wajib sebelum menggunakan CISD secara mandiri',
            'Menggunakan CISD di tengah konsolidasi Asia tanpa melihat HTF',
            'Mengabaikan struktur dan menebak puncak atau dasar'
          ],
          answerIndex: 1,
          explanation: 'MSS disertai Displacement dan FVG pasca-sweep memberikan validasi struktur yang paling jelas dan mengurangi sinyal palsu.'
        }
      ]
    },
    {
      id: 'premium-discount-equilibrium',
      number: 24,
      levelId: 3,
      title: 'Premium, Discount, Equilibrium (50%), OTE (62%–79%) & Hierarki PD Array',
      readMinutes: 10,
      diagramId: 'premium-discount-ote',
      bookFormat: true,
      diagramAfterSection: 1,
      summary: 'Filter lokasi harga matematis pada Dealing Range: pembagian zona Discount (<50%) dan Premium (>50%), perhitungan zona Optimal Trade Entry (61,8%–78,6% dengan titik tengah 70,5%), serta urutan Hierarki PD Array.',
      bookSections: [
        {
          number: '24.1',
          heading: 'Filter Lokasi Harga: Premium, Discount, dan Equilibrium (50%)',
          shortTitle: 'Premium vs Discount',
          paragraphs: [
            'Pada Bab 10 dibahas cara menandai **Dealing Range** dari Swing Low ke Swing High pada satu gelombang impulsif yang jelas. Langkah berikutnya adalah membagi rentang harga tersebut untuk memastikan posisi diambil pada harga yang efisien secara rasio risiko-imbal hasil — tidak membeli saat harga sudah terlalu tinggi dan tidak menjual saat harga sudah terlalu rendah.',
            'Tarik alat **Fibonacci Retracement** dari awal hingga ujung gelombang impulsif di H1 atau M15, lalu aktifkan hanya level utama berikut: **`0%`**, **`50%` (Equilibrium)**, **`61,8% / 70,5% / 78,6%` (Zona OTE)**, dan **`100%`**.',
            'Aturan pemilihan lokasi transaksi bersifat baku:',
            '1. **Skenario BUY:** Hanya pertimbangkan PD Array (FVG, Order Block, Breaker, atau iFVG) yang berada di bawah garis `50%` (**Zona Discount**).',
            '2. **Skenario SELL:** Hanya pertimbangkan PD Array yang berada di atas garis `50%` (**Zona Premium**).',
            '3. **Area Equilibrium (`45%–55%`):** Area tengah rentang umumnya memiliki rasio Risk-to-Reward sempit menuju ujung range; hindari entry di area ini kecuali terdapat konfluensi struktur HTF yang jelas.'
          ]
        },
        {
          number: '24.2',
          heading: 'Zona Optimal Trade Entry (OTE): 61,8% – 78,6% dan Titik 70,5%',
          shortTitle: 'Zona OTE (62%–79%)',
          paragraphs: [
            'Di dalam zona Discount (untuk Buy) atau Premium (untuk Sell), metodologi ICT mendefinisikan rentang retracement mendalam **`61,8%` hingga `78,6%`** sebagai **Optimal Trade Entry (OTE)**, dengan titik tengah tepat di **`70,5%`**.',
            'Pada kedalaman koreksi `61,8%–78,6%`, posisi Stop Loss di balik pangkal gelombang (`100%`) menjadi lebih dekat sedangkan jarak menuju ujung gelombang lama (`0%`) cukup lebar untuk menghasilkan **R:R minimal `1:2` hingga `1:3`** tanpa perlu mengandalkan penembusan harga ekstrem baru.',
            'Penting dipahami bahwa **OTE bukan pemicu entry tunggal**. Garis `70,5%` di ruang kosong tanpa FVG, Order Block, atau Breaker Block tidak layak dieksekusi. Probabilitas tinggi hanya muncul ketika sebuah **PD Array valid berhimpitan tepat di dalam zona OTE `61,8%–78,6%`**.',
            '**Pengaturan Baku Fibonacci OTE di MT5 & TradingView:** Hapus level bawaan yang tidak digunakan (`23,6%`, `38,2%`, `161,8%`, dan lainnya) agar tampilan grafik bersih. Sisakan **6 level berikut** — untuk **BUY** tarik dari **Swing Low (`1`) ke Swing High (`0`)**, dan untuk **SELL** tarik dari **Swing High (`1`) ke Swing Low (`0`)**:'
          ],
          table: {
            caption: 'Setting Angka Baku Fibonacci OTE (MT5 & TradingView)',
            headers: ['Angka Level', 'Label Disarankan', 'Fungsi di Chart XAU/USD'],
            rows: [
              ['`0`', 'Target (0%)', 'Ujung gelombang impulsif (titik TP konservatif pertama)'],
              ['`0.5`', 'Equilibrium (50%)', 'Garis batas Discount (bawah) vs Premium (atas)'],
              ['`0.618`', 'OTE Atas (61,8%)', 'Batas awal zona retracement OTE'],
              ['`0.705`', 'Titik Tengah OTE (70,5%)', 'Titik tengah zona OTE — prioritas utama jika berhimpitan dengan FVG/OB'],
              ['`0.786`', 'OTE Dalam (78,6%)', 'Batas terdalam retracement sehat sebelum mendekati invalidasi'],
              ['`1`', 'Invalidation (100%)', 'Pangkal gelombang — batas batal struktur (SL struktural ditempatkan di luar garis ini)']
            ]
          }
        },
        {
          number: '24.3',
          heading: 'Hierarki PD Array (PD Array Matrix): Urutan Prioritas Zona',
          shortTitle: 'Hierarki PD Array',
          paragraphs: [
            'Pada praktik analisis XAU/USD, sering kali muncul lebih dari satu PD Array secara bersamaan di dalam zona Discount atau Premium — misalnya terdapat FVG, Order Block, dan Breaker Block dalam satu kaki gelombang.',
            'Untuk menentukan zona yang paling diprioritaskan, gunakan **Hierarki PD Array** berikut (urutan prioritas yang sama dengan yang diterapkan pada **Mapping Cockpit Amy FX Pro**):'
          ],
          table: {
            caption: 'Urutan Prioritas PD Array (PD Array Matrix · Dari Terkuat ke Standar)',
            headers: ['Peringkat', 'Jenis PD Array', 'Dasar Kekuatan Teknis', 'Catatan Eksekusi XAU/USD'],
            rows: [
              ['#1 (S+)', '**ICT Unicorn (Breaker + FVG)**', 'Konfluensi dua zona sekaligus: mitigasi bekas OB gagal (Breaker) beririsan dengan celah Imbalance (FVG)', 'Prioritas tertinggi bila berada di Discount/Premium dan searah DOL'],
              ['#2 (A+)', '**Breaker Block (BB)**', 'Terbentuk dari Sweep Liquidity dan penembusan balik tegas; reaksi penolakan biasanya lebih cepat dari OB standar', 'Ditandai label `+BB` / `-BB` pada Chart Gold Mapping'],
              ['#3 (A+)', '**Inversion FVG (iFVG)**', 'Membuktikan kegagalan zona lawan pasca-Sweep atau sentuhan POI HTF', 'Efektif pada momentum cepat sesi NY AM ketika koreksi dangkal'],
              ['#4 (A)', '**Order Block Valid + FVG**', 'Jejak akumulasi order di pangkal dorongan yang langsung dikonfirmasi oleh celah FVG', 'Gunakan Open OB (candle ringkas) atau 50% Mean Threshold (candle lebar)'],
              ['#5 (A-)', '**Fair Value Gap (FVG) Fresh**', 'Celah 3-candle yang belum pernah diuji; paling sering muncul di Model ICT 2022 & Silver Bullet', 'Wajib di zona Discount/Premium yang benar dan menghormati 50% CE'],
              ['#6 (B+)', '**Mitigation Block (MB)**', 'Terbentuk tanpa sweep di swing sebelumnya sehingga likuiditas yang diserap lebih sedikit dibanding Breaker', 'Hanya digunakan jika beririsan dengan FVG dan searah penuh dengan Bias H1']
            ]
          }
        },
        {
          number: '24.4',
          heading: 'Studi Kasus XAU/USD M15: Menggabungkan Dealing Range, OTE, dan FVG',
          shortTitle: 'Studi Kasus Lengkap OTE',
          paragraphs: [
            'Berikut contoh perhitungan matematis penggabungan Dealing Range, garis Equilibrium, zona OTE, dan Bullish FVG pada grafik M15 XAU/USD:'
          ],
          exampleBox: {
            title: 'Hitungan Presisi OTE + Bullish FVG di XAU/USD M15 (Gelombang $20)',
            rows: [
              {
                label: 'Gelombang Impulsif (Dealing Range)',
                detail: 'XAU/USD M15 mencetak Displacement naik dari Swing Low **`2.640,00`** menuju Swing High **`2.660,00`** (total rentang gelombang = **`$20,00`**).'
              },
              {
                label: 'Perhitungan Garis Equilibrium & OTE',
                detail: '1. **50% Equilibrium:** `2.660,00 - (50% × $20)` = **`2.650,00`** (batas atas area Buy).\n2. **61,8% (Batas Awal OTE):** `2.660,00 - $12,36` = **`2.647,64`**.\n3. **70,5% (Titik Tengah OTE):** `2.660,00 - $14,10` = **`2.645,90`**.\n4. **78,6% (Batas Dalam OTE):** `2.660,00 - $15,72` = **`2.644,28`**.'
              },
              {
                label: 'Konfluensi PD Array & Eksekusi',
                detail: 'Pada rentang `2.645,00 – 2.647,00` terdapat **Bullish FVG Fresh** yang berhimpitan tepat dengan titik `70,5%` OTE (`2.645,90`). Rencana posisi: Buy Limit di **`2.646,00`**, SL di bawah Swing Low **`2.639,50`** (risiko **`$6,50`**), TP konservatif di puncak lama **`2.660,00`** (`+$14,00` → **R:R 1 : 2,15**).'
              }
            ]
          },
          callout: {
            tone: 'tip',
            kicker: 'Ringkasan Bagian IV',
            title: 'Seluruh Komponen PD Array (Bab 18–24) Telah Lengkap',
            body: 'Bagian IV mencakup seluruh alat zona entry ICT: **Displacement, FVG + 50% CE, iFVG, Order Block + 50% MT, Breaker/Mitigation/Unicorn, CISD vs MSS, serta OTE & Hierarki PD Array**. Pada Bagian V, seluruh komponen tersebut disusun menjadi prosedur eksekusi terpadu, filter pembatalan, dan manajemen risiko.'
          }
        }
      ],
      keyTakeaways: [
        '**Aturan Lokasi:** Cari **BUY** hanya di zona **Discount (`< 50%`)** dan cari **SELL** hanya di zona **Premium (`> 50%`)** pada Dealing Range impulsif.',
        '**Zona OTE** (*Optimal Trade Entry*) berada pada retracement **`61,8% – 78,6%`** dengan titik tengah **`70,5%`**, dan wajib berhimpitan dengan PD Array valid.',
        '**Hierarki PD Array:** `ICT Unicorn (BB+FVG) > Breaker Block > iFVG > Order Block + FVG > FVG Fresh > Mitigation Block`.',
        'Apabila harga tidak terkoreksi masuk ke zona Discount/Premium yang sesuai, lewati peluang tersebut agar rasio Risk-to-Reward tetap terjaga.'
      ],
      bridgeNext: 'Setelah menyelesaikan seluruh komponen zona entry pada Bagian IV (Bab 18–24), Bagian V menggabungkan analisis konteks HTF dan PD Array ke dalam prosedur eksekusi langkah demi langkah, dimulai dari **Bab 25: Model Entry Utama (ICT 2022): Merakit Sweep → MSS/CISD → FVG/OB dari Nol**.',
      practiceCta: {
        label: 'Cek Posisi Premium/Discount Live di Mapping',
        description: 'Lihat persentase Dealing Range live dan prioritas zona BB/iFVG/OB/FVG di Mapping Cockpit Amy FX Pro.',
        href: '../mapping/index.html'
      },
      conceptBlocks: [
        {
          heading: 'Premium, Discount, OTE & Hierarki PD Array',
          paragraphs: [
            'Buy hanya dilakukan di bawah 50% (Discount) dan Sell hanya di atas 50% (Premium), dengan fokus konfluensi PD Array di zona OTE (61,8%–78,6%, titik tengah 70,5%) mengikuti urutan prioritas Unicorn > BB > iFVG > OB+FVG > FVG > MB.'
          ]
        }
      ],
      mappingSteps: [
        'Tarik Fibonacci dari awal hingga ujung gelombang impulsif (Dealing Range) dengan level 0%, 50%, 61,8%–78,6% (70,5%), dan 100%.',
        'Saring hanya PD Array yang berada di Discount (<50% untuk Buy) atau Premium (>50% untuk Sell).',
        'Apabila muncul beberapa PD Array bersamaan, pilih berdasarkan Hierarki: Unicorn > Breaker > iFVG > OB+FVG > FVG > Mitigation.'
      ],
      decisionTree: [
        {
          condition: 'Muncul Bullish FVG rapi di 70% Premium saat tren naik.',
          action: 'SKIP — posisi terlalu tinggi (Premium); tunggu koreksi ke bawah 50% Discount atau lewati setup.'
        },
        {
          condition: 'Harga menyentuh garis 70,5% OTE, tetapi di titik tersebut tidak ada FVG, OB, maupun Breaker.',
          action: 'Jangan langsung entry — OTE adalah filter lokasi, tetap wajib ada PD Array dan konfirmasi struktur.'
        }
      ],
      validRules: [
        'Buy hanya di zona Discount (<50%) dan Sell hanya di zona Premium (>50%), idealnya berhimpitan dengan OTE 61,8%–78,6%.',
        'Mengutamakan PD Array dengan peringkat hierarki lebih tinggi (Unicorn, Breaker, iFVG, atau OB+FVG).'
      ],
      invalidRules: [
        'Membeli pada area > 50% (Premium) atau menjual pada area < 50% (Discount).',
        'Menggunakan garis Fibonacci 70,5% sebagai sinyal tunggal tanpa kehadiran PD Array.'
      ],
      xauScenario: {
        context: 'Gelombang naik XAU/USD M15 dari 2.640,00 ke 2.660,00 ($20).',
        steps: [
          'Equilibrium 50% = 2.650,00; Zona OTE 61,8%–78,6% = 2.647,64 – 2.644,28 (titik tengah 70,5% = 2.645,90).',
          'Bullish FVG Fresh di 2.645–2.647 → Buy Limit 2.646,00, SL 2.639,50 ($6,50), TP 2.660,00 (+$14,00, R:R 1:2,15).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: Entry di Fibonacci Tanpa PD Array',
        context: 'Trader memasang Sell Limit tepat di garis 70,5% padahal tidak terdapat FVG/OB dan struktur M5 belum berbalik.',
        whyFailed: 'Tanpa PD Array dan konfirmasi struktur, harga menembus level 70,5% melanjutkan tren sebelumnya.'
      },
      goldenRules: [
        'Jika harga tidak memberi area Discount/Premium yang sah, lewati setup tersebut daripada memaksakan R:R sempit.',
        'Pertemuan PD Array bermutu tinggi di dalam zona OTE (61,8%–78,6%) memberikan efisiensi risiko-imbal hasil terbaik.'
      ],
      quiz: [
        {
          question: 'XAU/USD mencetak gelombang Displacement naik dari `2.600,00` ke `2.640,00`. Di area harga berapakah kamu boleh mencari PD Array (FVG/OB) untuk **BUY**?',
          options: [
            'Di atas `2.630,00` (Premium)',
            '**Di bawah `2.620,00` (Zona Discount `< 50%` Equilibrium)**',
            'Tepat di puncak `2.640,00`',
            'Di mana saja asalkan muncul candle bullish'
          ],
          answerIndex: 1,
          explanation: 'Titik 50% Equilibrium berada di `2.620,00`; seluruh area di bawah `2.620,00` adalah Discount yang sah untuk mencari Buy.'
        },
        {
          question: 'Berapakah rentang persentase resmi **Zona Optimal Trade Entry (OTE)** beserta titik tengahnya dalam metodologi ICT?',
          options: [
            '`10% – 25%` (titik tengah `15%`)',
            '**`61,8% – 78,6%`** dengan titik tengah **`70,5%`**',
            '`45% – 55%` saja',
            '`90% – 100%`'
          ],
          answerIndex: 1,
          explanation: 'Zona OTE terletak pada koreksi mendalam 61,8% hingga 78,6% dengan titik tengah 70,5%.'
        },
        {
          question: 'Menurut **Hierarki PD Array (PD Array Matrix)** yang juga digunakan di Mapping Cockpit Amy FX Pro, manakah urutan kekuatan yang benar dari terkuat ke standar?',
          options: [
            'Mitigation Block > FVG Tunggal > ICT Unicorn',
            '**ICT Unicorn (Breaker + FVG) > Breaker Block > iFVG > Order Block + FVG > FVG Fresh > Mitigation Block**',
            'Semua PD Array kekuatannya sama persis sehingga tinggal pilih acak',
            'Indikator RSI > Breaker Block > Order Block'
          ],
          answerIndex: 1,
          explanation: 'Konfluensi ganda Unicorn (BB+FVG) dan zona balik kutub (Breaker & iFVG) menempati hierarki teratas dibanding zona tunggal maupun Mitigation Block tanpa sweep.'
        },
        {
          question: 'Harga XAU/USD menyentuh tepat garis `70,5%` OTE, tetapi di sekitar titik tersebut **tidak ada FVG, Order Block, ataupun Breaker Block**. Apa tindakan yang benar?',
          options: [
            'Langsung Market Order karena `70,5%` pasti memantul 100%',
            '**Tidak langsung entry** — karena OTE hanyalah filter lokasi Discount/Premium; tetap wajib ada PD Array dan konfirmasi struktur yang valid',
            'Menggandakan ukuran lot agar cepat balik modal',
            'Memindahkan Fibonacci ke candle acak agar cocok'
          ],
          answerIndex: 1,
          explanation: 'Fibonacci OTE adalah alat ukur lokasi, bukan pemicu entry tunggal tanpa kehadiran PD Array institusional.'
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════
    // BAGIAN V — MODEL EKSEKUSI, FILTER GAGAL & MANAJEMEN TRADE: BAB 25, 26, 27
    // ═══════════════════════════════════════════════════════════════
    {
      id: 'model-sweep-mss-fvg',
      number: 25,
      levelId: 4,
      title: 'Model Entry Utama (ICT 2022): Merakit Sweep → MSS/CISD → FVG/OB dari Nol',
      readMinutes: 10,
      diagramId: 'model-sweep-fvg',
      bookFormat: true,
      diagramAfterSection: 1,
      summary: 'Prosedur mekanis 4 tahap Model ICT 2022 (Sweep Liquidity → Displacement + MSS/CISD → Retracement Discount/Premium ke FVG/OB → SL struktural & target DOL), aturan pembatalan pending order (Cancel Rule), serta studi kasus XAU/USD.',
      bookSections: [
        {
          number: '25.1',
          heading: 'Struktur Dasar Model ICT 2022 pada XAU/USD',
          shortTitle: 'Dasar Model ICT 2022',
          paragraphs: [
            'Bagian V menyatukan seluruh materi struktur pasar (Bagian II), konteks arah & sesi (Bagian III), serta PD Array (Bagian IV) ke dalam prosedur eksekusi yang siap dijalankan secara konsisten.',
            '**Model ICT 2022** menjadi model eksekusi utama bagi trader ICT karena urutan validasinya sepenuhnya objektif dan berbasis sebab-akibat. Trader tidak perlu menebak puncak atau dasar harga secara spekulatif — sebaliknya, trader menunggu bukti nyata berupa **Liquidity Sweep** diikuti **Displacement + MSS/CISD**, lalu masuk secara terukur ketika harga terkoreksi kembali ke **FVG atau Order Block** di zona Discount/Premium.',
            'Keunggulan praktis dari model ini adalah kejelasan keputusan: apabila **salah satu** dari keempat tahap wajibnya tidak muncul di grafik, tidak ada alasan untuk mengambil transaksi.'
          ]
        },
        {
          number: '25.2',
          heading: 'Prosedur 4 Tahap Mekanis ICT 2022 (H1 → M15 → M5)',
          shortTitle: 'Prosedur 4 Tahap',
          paragraphs: [
            'Jalankan 4 tahap berikut secara berurutan dari atas ke bawah. Jangan melompati satu tahap pun karena setiap tahap memvalidasi tahap berikutnya:'
          ],
          table: {
            caption: 'Rantai Eksekusi Mekanis Model Utama ICT 2022 (XAU/USD · H1 → M15 → M5)',
            headers: ['Tahap', 'Timeframe & Fokus', 'Syarat Wajib Terpenuhi', 'Keputusan Jika Tidak Ada'],
            rows: [
              ['**1. Konteks & Liquidity Sweep**', 'H1 / M15 (Killzone WITA)', 'Daily Bias & DOL teridentifikasi + terjadi **Liquidity Sweep** nyata pada level kunci (`Asia H/L`, `London H/L`, `PDH/PDL`, `EQH/EQL`) atau sentuhan **POI HTF**', '**TUNGGU.** Tanpa Sweep atau POI HTF, sinyal M5 memiliki probabilitas rendah'],
              ['**2. Konfirmasi Balik Arah**', 'M5 (atau M15)', 'Muncul **Displacement** (`≥ 65%` body) yang menutup **Body Close** mematahkan Swing (**MSS**) atau Open rangkaian sweep (**CISD**) dan **mencetak FVG segar**', '**SKIP.** Pergerakan lambat tanpa Displacement + FVG tidak memenuhi syarat'],
              ['**3. Zona Entry Discount/Premium**', 'M5 (Dealing Range Kaki MSS)', 'Tarik Fibonacci pada kaki dorongan → pastikan **FVG / OB** berada di sisi **Discount (`< 50%`)** untuk Buy atau **Premium (`> 50%`)** untuk Sell (ideal di OTE `61,8%–78,6%`). Pasang Limit Order pada tepi FVG atau `50% CE`', 'Jika FVG hanya terbentuk di area mahal (`> 50%` untuk Buy), **lewati setup**'],
              ['**4. Proteksi & Target**', 'M5 → H1 DOL', 'SL di luar ujung wick ekstrem sweep (+ buffer spread) · TP1 di Liquidity Pool terdekat (`≥ 1,5R–2R`) · TP2 di target DOL utama (`PDH/PDL` / H1 Pool)', 'Jika R:R ke target realistis `< 1:2`, **batalkan setup**']
            ]
          }
        },
        {
          number: '25.3',
          heading: 'Aturan Pembatalan Pending Order (Cancel Rule)',
          shortTitle: 'Aturan Batal Limit Order',
          paragraphs: [
            'Kesalahan umum pada penerapan Model ICT 2022 adalah membiarkan `Limit Order` tetap aktif meskipun harga sudah bergerak cepat menyentuh target Liquidity (`TP1/DOL`) tanpa sempat menjemput order tersebut. Ketika harga kemudian memantul balik dan mengenai Limit Order lama itu, posisi justru masuk saat fase pembalikan baru sehingga mudah menyentuh Stop Loss.',
            'Hal ini terjadi karena tujuan pergerakan harga (Draw on Liquidity) sudah selesai terpenuhi. Terapkan **3 Aturan Wajib Pembatalan Pending Order** berikut:',
            '1. **Target Liquidity Tercapai Lebih Dulu:** Apabila harga sudah mencapai `80%–100%` jarak menuju TP1/DOL sebelum menjemput Limit Order → **segera batalkan (`Cancel`) pending order**.',
            '2. **Berakhirnya Killzone atau Masuk News Lock:** Apabila Limit Order belum tereksekusi hingga jendela Killzone berakhir atau tersisa 15 menit menuju rilis berita berdampak tinggi USD (CPI/NFP/FOMC) → **segera batalkan**.',
            '3. **Terbentuk Struktur Berlawanan:** Apabila sebelum menjemput order, harga membentuk MSS berlawanan arah yang mematahkan titik invalidasi → **segera batalkan**.'
          ]
        },
        {
          number: '25.4',
          heading: 'Studi Kasus Lengkap XAU/USD: Bearish ICT 2022 di NY AM Killzone',
          shortTitle: 'Studi Kasus ICT 2022 Gold',
          paragraphs: [
            'Berikut penerapan lengkap keempat tahap Model ICT 2022 beserta perhitungan risiko dan target pada grafik M5 XAU/USD:'
          ],
          exampleBox: {
            title: 'Eksekusi Model ICT 2022 — Bearish Setup XAU/USD M5 (NY AM · 20:45 WITA EDT)',
            rows: [
              {
                label: 'Tahap 1 — Konteks & Sweep Liquidity',
                detail: 'Daily Bias & H1 **Bearish** menuju target DOL **`PDL 2.632,00`**, di luar jendela News Lock. Pukul `20:35 WITA`, harga naik melakukan sweep **London High `2.652,50`** hingga ujung wick **`2.654,00`** lalu berbalik turun.'
              },
              {
                label: 'Tahap 2 — Displacement + MSS + FVG',
                detail: 'Dua candle bearish M5 berbadan penuh menutup **Body Close** di bawah Swing Low **`2.649,00`**, mengonfirmasi **Bearish MSS** dan membentuk **Bearish FVG (`SIBI`)** segar pada **`2.650,00 – 2.652,00`**. Pada rentang penurunan `2.654,00 → 2.646,00` (Equilibrium `2.650,00`), kotak SIBI tersebut berada di zona **Premium (`> 50%`)**.'
              },
              {
                label: 'Tahap 3 & 4 — Limit Order, SL Struktural & Target Bertingkat',
                detail: 'Pasang **Sell Limit** di **`2.650,50`** (tepi bawah SIBI di zona Premium). **SL** ditempatkan di atas ujung wick sweep **`2.654,80`** (risiko **`$4,30`**, termasuk buffer spread `$0,80`). **TP1** di Liquidity Pool SSL internal **`2.641,50`** (`+$9,00` → **2,09R**), dan **TP2** di **`PDL 2.632,50`** (`+$18,00` → **4,19R**).'
              }
            ]
          },
          callout: {
            tone: 'tip',
            kicker: 'Rekomendasi Implementasi',
            title: 'Uji Model ICT 2022 Minimal 30 Transaksi Sebelum Menambah Model Lain',
            body: 'Model ICT 2022 telah mencakup seluruh prinsip inti ICT secara lengkap. Fokuslah menjalankan dan mencatat minimal 30 transaksi menggunakan alur **Sweep → MSS/CISD → FVG/OB** ini sebelum menambahkan variasi model alternatif.'
          }
        }
      ],
      keyTakeaways: [
        '**Model ICT 2022** terdiri dari 4 tahap berurutan: **Konteks/Sweep di Killzone → Displacement + MSS/CISD + FVG → Retracement Discount/Premium ke FVG/OB → SL di luar Sweep + TP ke DOL**.',
        'Jika salah satu syarat wajib tidak terpenuhi (tidak ada Sweep, tidak ada Displacement/FVG, atau posisi di luar Discount/Premium), keputusan mekanisnya adalah **SKIP**.',
        '**Cancel Rule:** Segera hapus Pending Limit Order jika target TP1/DOL tercapai lebih dulu, menjelang News Lock, atau saat Killzone berakhir.',
        'Pastikan rasio Risk-to-Reward menuju Liquidity Pool realistis minimal **`1:2`** sebelum menempatkan order.'
      ],
      bridgeNext: 'Model ICT 2022 mencakup sebagian besar kondisi pasar harian yang terstruktur. Namun pada kondisi momentum cepat di XAU/USD ketika harga tidak memberi retracement dalam ke FVG baru, atau saat terjadi pembalikan tajam di level ekstrem mingguan, terdapat 3 variasi eksekusi pelengkap yang dibahas di **Bab 26: Model Entry Alternatif: iFVG Entry, Unicorn Setup & Turtle Soup (SMR)**.',
      practiceCta: {
        label: 'Latih Model ICT 2022 di Replay Lab',
        description: 'Praktikkan alur Sweep → MSS → FVG bar-by-bar di Backtest Replay Lab XAU/USD pada sesi London & NY WITA.',
        href: 'trading-practice/candle-replay.html'
      },
      conceptBlocks: [
        {
          heading: 'Prosedur 4 Tahap Mekanis Model ICT 2022',
          paragraphs: [
            'Model ICT 2022 menggabungkan Liquidity Sweep di Killzone → Displacement + MSS/CISD + FVG → Retracement Discount/Premium → SL di luar ujung Sweep dan TP ke DOL terdekat (minimal R:R 1:2), dilengkapi Cancel Rule bila target tercapai lebih dulu.'
          ]
        }
      ],
      mappingSteps: [
        'Tunggu Sweep Liquidity nyata (Asia/London/PDH/PDL) atau sentuhan POI HTF di dalam Killzone WITA.',
        'Konfirmasi Displacement + Body Close MSS/CISD di M5 yang meninggalkan FVG segar.',
        'Pasang Limit Order pada FVG/OB di zona Discount (Buy) atau Premium (Sell) dengan SL di balik ujung Sweep (+ buffer spread) dan TP minimal 1:2.',
        'Segera Cancel Limit Order jika harga terlanjur menyentuh target TP1/DOL sebelum order terjemput.'
      ],
      decisionTree: [
        {
          condition: 'Sell Limit di Bearish FVG belum terjemput, tetapi harga sudah langsung turun menyentuh TP1/DOL.',
          action: 'Segera CANCEL Sell Limit — target Liquidity sudah tercapai sehingga order lama tidak lagi valid.'
        },
        {
          condition: 'Muncul FVG M5 rapi, tetapi sebelumnya tidak ada Sweep Liquidity maupun sentuhan POI HTF.',
          action: 'SKIP — syarat tahap 1 Model ICT 2022 tidak terpenuhi.'
        }
      ],
      validRules: [
        'Wajib ada Sweep Liquidity nyata (Asia High/Low, PDH/PDL, atau EQH/EQL) atau sentuhan POI HTF sebelum MSS.',
        'MSS terjadi dengan candle Displacement tegas yang menciptakan FVG segar di dalam Killzone WITA.'
      ],
      invalidRules: [
        'Membiarkan pending Limit Order aktif setelah harga sudah mencapai target Liquidity (DOL).',
        'Masuk pada setup dengan R:R ke Liquidity Pool terdekat kurang dari 1:2.'
      ],
      xauScenario: {
        context: 'Sesi NY AM (20:45 WITA EDT), Bias H1 Bearish menuju PDL 2.632,00.',
        steps: [
          'Sweep London High 2.652,50 hingga 2.654,00 → MSS M5 menembus 2.649,00 dan mencetak SIBI 2.650,00–2.652,00.',
          'Sell Limit 2.650,50, SL 2.654,80 ($4,30), TP1 2.641,50 (+$9,00 / 2,09R), TP2 PDL 2.632,50 (+$18,00 / 4,19R).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: Tidak Membatalkan Limit Order Kadaluarsa',
        context: 'Trader membiarkan Sell Limit aktif padahal harga sudah lebih dulu menyapu PDL target dan mulai berbalik naik.',
        whyFailed: 'Order terjemput ketika fase pembalikan baru sedang berlangsung sehingga langsung mengenai Stop Loss.'
      },
      goldenRules: [
        'Apabila harga menyentuh target Liquidity sebelum menjemput Limit Order, segera batalkan order tersebut.',
        'Kuasai Model ICT 2022 minimal 30 transaksi sebelum beralih mempelajari variasi model lain.'
      ],
      quiz: [
        {
          question: 'Manakah urutan 4 tahap mekanis yang benar pada **Model Entry Utama (ICT 2022)**?',
          options: [
            'Pasang Limit dulu → baru tunggu Sweep → baru cek News',
            '**Konteks/Sweep Liquidity di Killzone → Displacement + MSS/CISD + FVG → Retracement ke FVG/OB di Discount/Premium → SL di luar Sweep + TP di DOL**',
            'Cari 5 indikator oversold → langsung Market Order di sesi Asia',
            'Tunggu berita CPI → pasang Buy Stop dan Sell Stop bersamaan'
          ],
          answerIndex: 1,
          explanation: 'Model ICT 2022 menunggu Liquidity Sweep, bukti niat institusi (Displacement + MSS + FVG), lalu masuk pada area Discount/Premium dengan SL struktural dan target DOL.'
        },
        {
          question: 'Kamu sudah memasang `Sell Limit` di Bearish FVG `2.650,50`, tetapi harga langsung turun mencapai target `TP1 / PDL` tanpa sempat naik menjemput ordermu. Apa tindakan wajib sesuai **Cancel Rule**?',
          options: [
            'Biarkan `Sell Limit` tetap aktif sampai besok malam',
            '**Segera hapus (`Cancel`) Sell Limit tersebut** karena target DOL sudah selesai tercapai',
            'Langsung klik Market Sell di dasar bawah',
            'Mengganti SL menjadi lebih lebar'
          ],
          answerIndex: 1,
          explanation: 'Setelah target Draw on Liquidity tercapai sebelum pullback, setup lama tidak lagi valid dan berisiko terkena pembalikan arah.'
        },
        {
          question: 'Dalam studi kasus Bearish ICT 2022 (`Sell Limit 2.650,50`, ujung wick sweep `2.654,00`, SL `2.654,80` = risiko `$4,30`), mengapa SL diletakkan di `2.654,80` bukan tepat di `2.654,00`?',
          options: [
            'Supaya angka belakangnya genap',
            'Untuk memberi **buffer spread** (`+$0,80`) di luar titik invalidasi struktural ujung wick sweep agar tidak mudah tersentuh pelebaran spread Ask',
            'Karena broker melarang angka bulat `.00`',
            'Supaya jarak SL menjadi $20'
          ],
          answerIndex: 1,
          explanation: 'Menambahkan buffer spread di luar ujung ekstrem sweep melindungi posisi Sell dari pelebaran spread Ask tanpa mengubah batas invalidasi struktur.'
        },
        {
          question: 'Terjadi Sweep Asia Low + MSS M5 + Bullish FVG, namun jarak dari titik entry ke Liquidity Pool lawan terdekat hanya menghasilkan **R:R `1 : 1,2`**. Apa keputusan mekanis yang benar?',
          options: [
            'Tetap masuk dengan lot 2× lebih besar',
            '**Batalkan / Skip setup** karena R:R di bawah standar minimal `1:2` — ruang profit terlalu sempit dibanding risikonya',
            'Geser TP jauh melampaui ADR harian tanpa dasar Liquidity',
            'Geser SL masuk ke tengah kotak FVG agar R:R terlihat besar'
          ],
          answerIndex: 1,
          explanation: 'Jangan memanipulasi SL atau TP demi memaksakan R:R; jika ruang menuju Liquidity aktual di bawah 1:2, lewati setup tersebut.'
        }
      ]
    },
    {
      id: 'model-order-block-sniper',
      number: 17,
      levelId: 4,
      title: 'Model 2: Order Block + Mean Threshold Sniper',
      readMinutes: 5,
      diagramId: 'model-ob-sniper',
      summary: 'Saat Displacement begitu cepat sehingga FVG sangat tipis atau harga menembus FVG lebih dalam, Order Block + 50% Mean Threshold adalah benteng masuk presisi tinggi.',
      conceptBlocks: [
        {
          heading: 'Kapan Memakai Model Order Block Dibanding FVG?',
          paragraphs: [
            'Sering kali pada XAU/USD, harga sweep Liquidity lalu melesat dengan FVG kecil yang berada di atas OB, atau harga melakukan koreksi sedikit lebih dalam menembus FVG untuk menjemput Order Block di pangkal dorongan.',
            'Model 2 membidik reaksi di Open Order Block atau tepat di garis 50% Mean Threshold (MT) dari body OB. Karena posisinya lebih dalam ke arah ekstrem, jarak Stop Loss jauh lebih ketat — menghasilkan R:R 1:3 hingga 1:5.'
          ]
        },
        {
          heading: 'Filter Wajib: OB Harus Punya FVG & Sweep',
          paragraphs: [
            'Order Block yang berdiri sendirian tanpa FVG tepat di atas/bawahnya adalah OB lemah. Pada Model 2, kita mencari keselarasan "OB + FVG berdempetan": FVG membuktikan kecepatan, sedangkan OB di pangkalnya menjadi lantai pijakan terakhir institusi.'
          ]
        }
      ],
      validRules: [
        'OB adalah candle berlawanan terakhir yang langsung sweep Liquidity sebelum Displacement.',
        'Terdapat FVG yang terbentuk persis keluar dari OB tersebut.',
        'Entry di Open OB (konservatif) atau 50% Mean Threshold (sniper) dengan SL di luar wick OB.'
      ],
      invalidRules: [
        'Memakai OB di tengah-tengah jalan (continuation OB) yang sudah pernah disentuh.',
        'Memaksa entry di Mean Threshold jika harga sudah memantul kuat dari Open OB dan mencetak struktur baru.',
        'Ukuran candle OB terlalu raksasa (misal >$10 di M5) sehingga risiko terlalu besar.'
      ],
      xauScenario: {
        context: 'Sesi London (16:15 WITA), XAU/USD sweep PDL 2.635 dengan 1 candle bearish M5 (Open 2.638,50, Close 2.636,00, Wick Low 2.634,50) lalu meledak naik mencetak MSS + FVG.',
        steps: [
          'Tandai Bullish OB: Open 2.638,50, Mean Threshold (50% body) = 2.637,25.',
          'Saat harga turun mengisi FVG dan menusuk masuk ke 2.637,50 (dekat MT) dengan ekor penolakan, Buy Limit terjemput.',
          'SL di 2.633,80 ($3,70 risiko). Target Asia High 2.651,00 (+$13,50) menghasilkan R:R 1:3,6.'
        ]
      },
      goldenRules: [
        'OB terbaik selalu menjadi "pelaku" yang sweep Liquidity dan melahirkan FVG.',
        'Gunakan Open OB jika ingin peluang terjemput lebih tinggi; gunakan 50% MT jika ingin R:R lebih tajam.'
      ],
      quiz: [
        {
          question: 'Apa keuntungan utama menaruh entry di 50% Mean Threshold dibanding Open Order Block?',
          options: [
            'Pasti terjemput 100% di setiap trade',
            'Jarak ke Stop Loss lebih sempit sehingga rasio Risk:Reward (R:R) jauh lebih besar',
            'Tidak perlu memasang Stop Loss',
            'Bisa melawan tren H1 dengan aman'
          ],
          answerIndex: 1,
          explanation: 'Masuk lebih dalam di 50% MT memperkecil jarak SL dan memperlebar jarak TP, dengan kompromi sesekali tertinggal jika harga hanya menyentuh Open OB.'
        },
        {
          question: 'Ciri apa yang wajib menyertai sebuah Order Block pada Model 2 agar tidak terjebak OB palsu?',
          options: [
            'OB tersebut sweep Liquidity dan langsung melahirkan Displacement + FVG',
            'OB berada di atas 80% Premium untuk posisi Buy',
            'OB sudah pernah diuji 3 kali sebelumnya',
            'OB terbentuk saat spread rollover subuh'
          ],
          answerIndex: 0,
          explanation: 'Sweep + FVG membuktikan adanya injeksi order institusional nyata di candle OB tersebut.'
        },
        {
          question: 'Jika candle M5 pada Bullish OB memiliki Open 2.650 dan Close 2.646, di harga berapa garis 50% Mean Threshold-nya?',
          options: [
            '2.649',
            '2.648',
            '2.644',
            '2.652'
          ],
          answerIndex: 1,
          explanation: 'Titik tengah antara Open 2.650 dan Close 2.646 adalah (2.650 + 2.646) / 2 = 2.648.'
        }
      ]
    },
    {
      id: 'model-ifvg-inversion',
      number: 20,
      levelId: 3,
      title: 'Inversion Fair Value Gap (iFVG): Saat FVG Gagal Berubah Jadi Peluang',
      readMinutes: 9,
      diagramId: 'model-ifvg-flip',
      bookFormat: true,
      diagramAfterSection: 1,
      summary: 'Mekanisme balik kutub Inversion Fair Value Gap (+iFVG dan -iFVG) saat FVG lawan ditembus penuh oleh Body Close pasca-sweep Liquidity, syarat validasinya, serta studi kasus XAU/USD pada sesi NY AM.',
      bookSections: [
        {
          number: '20.1',
          heading: 'Mekanisme Balik Kutub Inversion Fair Value Gap (iFVG)',
          shortTitle: 'Mekanisme iFVG',
          paragraphs: [
            'Pada Bab 19 dibahas bahwa sebuah **Bearish FVG (`SIBI`)** berfungsi sebagai area penolakan turun. Namun, perhatikan kondisi ketika XAU/USD baru saja melakukan sweep `Asia Low` atau `PDL` sambil meninggalkan sebuah Bearish FVG di kaki penurunan terakhirnya.',
            'Apabila dominasi penjual masih berlanjut, Bearish FVG tersebut seharusnya menahan kenaikan harga. Sebaliknya, jika muncul candle bullish yang menutup **Body Close menembus penuh di atas seluruh kotak Bearish FVG tersebut**, hal itu membuktikan bahwa pertahanan penjual telah gagal dan kendali arus order berpindah ke pihak pembeli.',
            'Pada saat itulah Bearish FVG yang gagal berbalik fungsi menjadi **Bullish Inversion Fair Value Gap (`+iFVG`)** — area yang semula menolak harga turun kini menjadi tumpuan untuk kenaikan. Sebaliknya, Bullish FVG (`BISI`) yang ditembus penuh ke bawah oleh Body Close berubah menjadi **Bearish Inversion Fair Value Gap (`-iFVG`)**. *(Pada Chart Gold Mapping Cockpit Amy FX Pro, zona ini ditandai sebagai `+iFVG` ungu untuk Buy dan `-iFVG` amber untuk Sell.)*'
          ]
        },
        {
          number: '20.2',
          heading: 'Syarat Mutlak iFVG Valid vs FVG Tertembus di Tengah Konsolidasi',
          shortTitle: 'Syarat Mutlak iFVG',
          paragraphs: [
            'Kesalahan yang paling sering terjadi saat menggunakan iFVG adalah menandai **setiap** FVG yang tertembus di pasar datar (*sideways*) sebagai sinyal balik arah. Tanpa konteks Liquidity, FVG di tengah konsolidasi memang akan sering ditembus bolak-balik. Gunakan kriteria berikut untuk menyaringnya:'
          ],
          table: {
            caption: 'Kriteria Validasi +iFVG (Bullish) dan -iFVG (Bearish)',
            headers: ['Jenis iFVG', 'Asal Zona', 'Syarat Sah Perubahan Kutub (Wajib)', 'Konteks Wajib di Latar Belakang'],
            rows: [
              ['**Bullish `+iFVG`**', 'Bekas **Bearish FVG (SIBI)** pada kaki turun terakhir', 'Candle bullish menutup **Body Close** penuh di atas batas atas SIBI (bukan sekadar wick)', 'Terbentuk sesudah **Sweep SSL** (`Asia Low`, `PDL`, `EQL`) atau menyentuh **POI Bullish HTF**'],
              ['**Bearish `-iFVG`**', 'Bekas **Bullish FVG (BISI)** pada kaki naik terakhir', 'Candle bearish menutup **Body Close** penuh di bawah batas bawah BISI (bukan sekadar wick)', 'Terbentuk sesudah **Sweep BSL** (`Asia High`, `PDH`, `EQH`) atau menyentuh **POI Bearish HTF**'],
              ['Bukan iFVG (Skip)', 'FVG yang hanya ditembus **wick** lalu body kembali tutup di dalam kotak', 'Belum terjadi perubahan kutub — FVG asal masih aktif', 'Tunggu penutupan candle selesai sebelum mengambil keputusan']
            ]
          }
        },
        {
          number: '20.3',
          heading: 'Kapan iFVG Efektif Digunakan pada XAU/USD?',
          shortTitle: 'Waktu Efektif iFVG',
          paragraphs: [
            'Pada **NY AM Killzone (`19:00–22:00 WITA` EDT / `20:00–23:00 WITA` EST)** dan **NY AM Silver Bullet**, momentum XAU/USD sering bergerak sangat cepat setelah sweep Liquidity sehingga harga tidak selalu melakukan koreksi dalam menuju Order Block di ujung bawah/atas.',
            'Dalam kondisi momentum cepat tersebut, **iFVG** memberikan konfirmasi perubahan *order flow* lebih awal dibandingkan menunggu pematahan Swing struktur yang jauh. Retest singkat pada sisi luar kotak iFVG (atau garis `50% CE`-nya) dapat dimanfaatkan sebagai titik masuk yang terukur tanpa harus mengejar harga secara impulsif.'
          ]
        },
        {
          number: '20.4',
          heading: 'Studi Kasus XAU/USD: Bullish +iFVG Pasca-Sweep Asia Low',
          shortTitle: 'Studi Kasus +iFVG Gold',
          paragraphs: [
            'Berikut urutan langkah dan perhitungan risiko pada skenario Bullish `+iFVG` di sesi New York:'
          ],
          exampleBox: {
            title: 'Eksekusi +iFVG M5 XAU/USD (NY AM · 21:10 WITA EDT)',
            rows: [
              {
                label: 'Tahap 1 — Sweep & FVG Lawan',
                detail: 'Bias H1 Bullish menuju target NY High `2.658,50`. Harga turun melakukan sweep **Asia Low `2.644,00`** (wick mencapai `2.643,80`) sambil meninggalkan **Bearish FVG (`SIBI`)** pada **`2.646,50 – 2.648,00`**.'
              },
              {
                label: 'Tahap 2 — Penembusan SIBI oleh Body Close',
                detail: 'Harga menolak melanjutkan penurunan; muncul candle bullish M5 tebal yang menutup **Body Close** di **`2.649,20`**, menembus penuh seluruh kotak SIBI `2.646,50 – 2.648,00`. Zona tersebut resmi berubah menjadi **Bullish `+iFVG`**.'
              },
              {
                label: 'Tahap 3 — Retest & Perhitungan Risiko',
                detail: 'Candle M5 berikutnya terkoreksi singkat menguji batas atas `+iFVG` di **`2.648,00`**. Eksekusi Buy di `2.648,00`, SL struktural di bawah ujung sweep **`2.643,40`** (risiko **`$4,60`**), target NY High **`2.658,50`** (`+$10,50` → **R:R 1 : 2,28**).'
              }
            ]
          },
          callout: {
            tone: 'warn',
            kicker: 'Filter Wajib iFVG',
            title: 'iFVG Tanpa Sweep Liquidity atau POI HTF Memiliki Probabilitas Rendah',
            body: 'Jangan mengeksekusi iFVG hanya karena melihat kotak FVG tertembus di tengah konsolidasi. Pastikan selalu ada **Sweep Liquidity (BSL/SSL)** atau sentuhan **POI H1/H4** sebagai pemicu utama perubahan arah.'
          }
        }
      ],
      keyTakeaways: [
        '**Inversion FVG (iFVG)** terjadi ketika sebuah FVG lawan gagal menahan harga dan ditembus penuh oleh **Body Close** (bukan sekadar wick).',
        'Bekas **Bearish FVG (SIBI)** yang ditembus Body Close ke atas berubah menjadi **Bullish `+iFVG`**; bekas **Bullish FVG (BISI)** yang ditembus Body Close ke bawah berubah menjadi **Bearish `-iFVG`**.',
        'Syarat mutlak iFVG berkualitas tinggi adalah **terjadi tepat setelah Sweep Liquidity (BSL/SSL) atau sentuhan POI HTF**.',
        'iFVG efektif digunakan saat momentum XAU/USD di sesi NY AM bergerak cepat dan tidak memberi retracement dalam ke zona awal.'
      ],
      bridgeNext: 'Setelah memahami FVG normal (Bab 19) dan FVG yang berbalik kutub menjadi iFVG (Bab 20), pembahasan berikutnya mundur satu langkah ke pangkal dorongan tempat akumulasi order institusi terjadi sebelum FVG terbentuk, yakni **Bab 21: Order Block (OB) Bermutu Tinggi vs Trap OB & 50% Mean Threshold**.',
      practiceCta: {
        label: 'Pantau Zona +iFVG / -iFVG di Chart Gold',
        description: 'Buka Chart Gold di Mapping Cockpit untuk melihat zona +iFVG (ungu) dan -iFVG (amber) beserta garis 50% CE secara otomatis.',
        href: '../mapping/index.html'
      },
      conceptBlocks: [
        {
          heading: 'Mekanisme Balik Kutub Inversion FVG (iFVG)',
          paragraphs: [
            'Saat FVG lawan ditembus penuh oleh Body Close pasca-sweep Liquidity atau sentuhan POI HTF, fungsinya berbalik kutub menjadi Inversion FVG (+iFVG atau -iFVG).'
          ]
        }
      ],
      mappingSteps: [
        'Pastikan harga baru saja sweep Liquidity Pool (BSL/SSL) atau menyentuh POI HTF.',
        'Tandai FVG lawan terakhir di kaki sweep, lalu tunggu candle menutup Body Close menembus penuh seluruh kotak FVG tersebut.',
        'Gunakan retest ke sisi luar kotak iFVG (atau 50% CE) sebagai titik entry dengan SL di balik ujung sweep.'
      ],
      decisionTree: [
        {
          condition: 'Wick candle menembus Bearish FVG, tetapi Body Close kembali di dalam kotak.',
          action: 'Belum menjadi iFVG — jangan entry dulu; tunggu Body Close menembus penuh.'
        },
        {
          condition: 'FVG tertembus penuh di tengah konsolidasi Asia tanpa ada Sweep atau POI HTF.',
          action: 'SKIP — tanpa konteks Liquidity, iFVG di area choppy sangat rawan whipsaw.'
        }
      ],
      validRules: [
        'Didahului Sweep Liquidity atau sentuhan POI H1/M15.',
        'FVG lawan ditembus penuh oleh Body Close (bukan sekadar wick).'
      ],
      invalidRules: [
        'Mengambil iFVG di tengah pasar choppy tanpa konteks Sweep/POI HTF.',
        'Masuk sebelum candle penembus FVG selesai tutup (close).'
      ],
      xauScenario: {
        context: 'NY AM 21:10 WITA: Sweep Asia Low 2.644,00 meninggalkan Bearish FVG 2.646,50–2.648,00.',
        steps: [
          'Candle bullish M5 menutup body di 2.649,20 menembus penuh Bearish FVG → sah menjadi Bullish +iFVG.',
          'Retest ke 2.648,00: Buy dengan SL 2.643,40 ($4,60) dan target NY High 2.658,50 (+$10,50, R:R 1:2,28).'
        ]
      },
      failedCase: {
        title: 'Kasus Gagal: iFVG di Tengah Konsolidasi',
        context: 'Trader mengambil iFVG M5 di jam sepi Asia tanpa sweep dan tanpa arah H1.',
        whyFailed: 'Di pasar sideways, FVG sering ditembus bolak-balik tanpa komitmen institusi.'
      },
      goldenRules: [
        'FVG lawan yang ditembus penuh Body Close pasca-sweep membuktikan perubahan kontrol arus order.',
        'Wajib menunggu Body Close penuh keluar kotak FVG — bukan sekadar wick.'
      ],
      quiz: [
        {
          question: 'Bagaimana syarat mutlak agar sebuah **Bearish FVG (SIBI)** sah berubah kutub menjadi **Bullish Inversion FVG (`+iFVG`)**?',
          options: [
            'Harga naik menyentuh kotak SIBI lalu jatuh lagi',
            'Setelah **Sweep SSL / sentuhan POI HTF**, candle bullish menutup **Body Close** menembus penuh di atas seluruh kotak SIBI',
            'Hanya ujung wick atas yang menyentuh garis 50% CE',
            'Terbentuk 3 candle merah baru di bawahnya'
          ],
          answerIndex: 1,
          explanation: 'Perubahan kutub iFVG mewajibkan Body Close menembus penuh sisi seberang kotak FVG lawan pasca-Sweep/POI.'
        },
        {
          question: 'Mengapa **iFVG** sering digunakan scalper XAU/USD pada sesi NY AM / Silver Bullet?',
          options: [
            'Karena tidak membutuhkan Stop Loss',
            'Karena memberi konfirmasi perubahan order flow lebih cepat saat Gold bergerak kencang tanpa sempat pullback dalam ke FVG baru',
            'Karena bisa dipakai saat pasar tutup akhir pekan',
            'Karena akurasinya selalu 100% tanpa pernah kena SL'
          ],
          answerIndex: 1,
          explanation: 'Pada momentum cepat XAU/USD, iFVG menangkap perubahan order flow pasca-sweep lebih awal dibanding menunggu MSS jauh.'
        },
        {
          question: 'Kapan sebuah FVG yang tertembus penuh **TIDAK BOLEH** dieksekusi sebagai sinyal iFVG?',
          options: [
            'Saat muncul tepat setelah sweep Asia Low di NY AM Killzone',
            'Saat muncul di tengah pasar sideways/choppy tanpa latar belakang **Sweep Liquidity** maupun **POI HTF**',
            'Saat searah dengan Daily Bias dan R:R di atas 1:2',
            'Saat terjadi retest bersih di tepi luar kotak iFVG'
          ],
          answerIndex: 1,
          explanation: 'Tanpa Sweep Liquidity atau POI HTF, FVG di area choppy memang sering ditembus bolak-balik tanpa arah institusional.'
        },
        {
          question: 'Dalam studi kasus XAU/USD di atas (`+iFVG` di `2.646,50–2.648,00` pasca-sweep Asia Low `2.643,80`), di mana penempatan Stop Loss paling logis saat masuk Buy di retest `2.648,00`?',
          options: [
            'Di `2.647,90` (jarak `$0,10`)',
            '**Di bawah ujung ekstrem wick sweep** (misal `2.643,40`, memberi ruang buffer di bawah `2.643,80`)',
            'Di atas target NY High `2.658,50`',
            'Tidak perlu memasang Stop Loss'
          ],
          answerIndex: 1,
          explanation: 'Ujung ekstrem sweep adalah batas invalidasi struktural sejati — jika harga kembali menembusnya, skenario reversal resmi batal.'
        }
      ]
    },
    // =========================================================================
    // BAB 26 (BAGIAN V) — MODEL ENTRY ALTERNATIF: iFVG, UNICORN & TURTLE SOUP
    // =========================================================================
    {
      id: 'model-turtle-soup-smr',
      number: 26,
      levelId: 4,
      bookFormat: true,
      title: 'Model Entry Alternatif: iFVG Entry, Unicorn Setup & Turtle Soup (SMR)',
      subtitle: 'Tiga model eksekusi pelengkap ketika pasar bergerak terlalu cepat untuk retracement FVG biasa atau berbalik langsung dari level Liquidity ekstrem.',
      readMinutes: 10,
      diagramId: 'model-turtle-soup',
      diagramAfterSection: 1,
      summary: 'Kapan menggunakan 3 model pelengkap di luar ICT 2022 (iFVG Momentum, ICT Unicorn, dan Turtle Soup / Smart Money Reversal), tabel perbandingan kondisi ideal & profil risiko, 3 syarat pengaman Turtle Soup, serta studi kasus XAU/USD.',
      bookSections: [
        {
          number: '26.1',
          heading: 'Peran 3 Model Entry Alternatif di Luar ICT 2022',
          shortTitle: '3 Model Alternatif',
          paragraphs: [
            'Model Utama ICT 2022 (`Sweep → MSS/CISD → Retracement FVG/OB` pada Bab 25) mencakup sebagian besar skenario harian. Namun pada XAU/USD, sering muncul kondisi ketika harga setelah sweep Liquidity bergerak terlalu cepat sehingga tidak sempat terkoreksi dalam ke FVG baru, atau justru membentuk konfluensi khusus di level ekstrem.',
            'Dalam kondisi tersebut, terdapat **3 Model Entry Alternatif** yang tetap menggunakan fondasi konteks yang sama (**Killzone + HTF Bias + Sweep Liquidity**), tetapi berbeda pada pemicu eksekusinya di timeframe M5:',
            '1. **iFVG Momentum Entry:** Memanfaatkan kegagalan FVG lawan yang ditembus penuh oleh *Body Close* (Bab 20) sebagai konfirmasi perubahan *order flow* lebih awal.',
            '2. **ICT Unicorn Setup:** Memanfaatkan irisan tumpang-tindih antara **Breaker Block** (Bab 22) dan **Fair Value Gap** (Bab 19) pada satu pita harga sempit.',
            '3. **Turtle Soup / Smart Money Reversal (SMR):** Memanfaatkan pembalikan tajam tepat setelah sweep level Liquidity besar (**PWH/PWL, PDH/PDL, Asia High/Low**) yang berhimpitan dengan POI H1/H4.'
          ]
        },
        {
          number: '26.2',
          heading: 'Perbandingan Mekanis: iFVG, ICT Unicorn, dan Turtle Soup (SMR)',
          shortTitle: 'Perbandingan 3 Model',
          paragraphs: [
            'Setiap model alternatif dirancang untuk kondisi pasar yang berbeda. Tabel berikut merangkum kondisi ideal, pemicu eksekusi, risiko utama, dan kisaran R:R dari ketiganya:'
          ],
          table: {
            caption: 'Perbandingan Teknis 3 Model Entry Alternatif ICT (XAU/USD)',
            headers: ['Model Alternatif', 'Kondisi Pasar Ideal', 'Pemicu Entry (Trigger M5)', 'Risiko Utama', 'Kisaran R:R'],
            rows: [
              [
                '**iFVG Momentum Entry**',
                'Momentum cepat pada NY AM / Silver Bullet ketika retracement dangkal',
                'Sweep/POI HTF → FVG lawan ditembus penuh **Body Close** (menjadi `+iFVG`/`-iFVG`) → entry di close atau retest tipis',
                'Sinyal palsu jika digunakan di tengah range konsolidasi tanpa Sweep',
                '`1:2` s.d. `1:3`'
              ],
              [
                '**ICT Unicorn Setup**',
                'Retracement terstruktur pasca-Sweep & MSS pada London atau NY AM Killzone',
                '**Breaker Block** dan **FVG** saling beririsan pada satu pita harga → pasang Limit Order pada tepi zona irisan',
                'Frekuensi kemunculan lebih jarang; rawan memaksakan Breaker yang tidak valid',
                '`1:2,5` s.d. `1:4+`'
              ],
              [
                '**Turtle Soup (SMR)**',
                'Harga menyapu level ekstrem **PWH/PWL/PDH/PDL** yang berhimpitan langsung dengan POI H1/H4',
                'Sweep ekstrem → **Absorption Wick** + gagal Body Close di luar level → konfirmasi **CISD M5** masuk kembali ke range',
                'Kerugian beruntun jika melawan candle ekspansi besar tanpa menunggu penolakan',
                '`1:3` s.d. `1:5+`'
              ]
            ]
          }
        },
        {
          number: '26.3',
          heading: 'Aturan Disiplin Turtle Soup (SMR): 3 Syarat Pengaman Mutlak',
          shortTitle: '3 Syarat Turtle Soup',
          paragraphs: [
            'Istilah **Turtle Soup** merujuk pada pola pembalikan terhadap strategi breakout klasik (*Turtle Traders*). Dalam kerangka ICT, **Smart Money Reversal (SMR)** terjadi ketika harga menembus High atau Low signifikan untuk menyerap likuiditas order breakout (*buy-stop* atau *sell-stop*), lalu segera berbalik menuju sisi range seberangnya.',
            'Kesalahan yang paling sering terjadi pada pemula adalah langsung masuk melawan arah candle impulsif yang masih bergerak kuat menembus level. Agar eksekusi Turtle Soup tetap objektif dan terukur, wajib penuhi **3 syarat pengaman berikut**:',
            '1. **Lokasi Level HTF Saja:** Hanya jalankan Turtle Soup pada level Liquidity utama (**PWH/PWL**, **PDH/PDL**, atau **Asia High/Low**) yang **berhimpitan langsung dengan POI H1/H4** (OB atau FVG HTF). Jangan gunakan pada swing internal kecil di tengah range.',
            '2. **Bukti Penyerapan Nyata (Absorption + CISD):** Wajib menunggu penutupan candle yang menunjukkan ekor penolakan jelas (*Absorption Wick*), gagal menutup body di luar level ekstrem, serta diikuti konfirmasi **CISD M5** yang mengembalikan kendali ke dalam range.',
            '3. **Batas Maksimal 1 Percobaan (*One Attempt Rule*):** Untuk setiap level ekstrem, hanya diperbolehkan melakukan **maksimal 1 kali eksekusi**. Apabila Stop Loss tersentuh karena harga benar-benar melanjutkan ekspansi tren, hentikan percobaan reversal di level tersebut dan jangan melakukan re-entry berulang.'
          ]
        },
        {
          number: '26.4',
          heading: 'Studi Kasus XAU/USD: Turtle Soup (SMR) di PWL 2.618,00 + H4 Bullish OB',
          shortTitle: 'Studi Kasus Turtle Soup',
          paragraphs: [
            'Berikut rincian angka nyata penerapan Turtle Soup (SMR) pada XAU/USD saat pembukaan **London Silver Bullet (`15:00 WITA` EDT / `16:00 WITA` EST)** dalam konteks **H4 Bullish**:'
          ],
          exampleBox: {
            title: 'Eksekusi Turtle Soup (SMR) XAU/USD — Risiko 1% Terukur',
            rows: [
              {
                label: '1. Validasi Lokasi (Syarat 1)',
                detail: 'PWL (*Previous Week Low*) berada di `2.618,00` dan berhimpitan tepat di dalam **H4 Bullish Order Block** (`2.614,50–2.618,50`). Tidak ada berita berdampak tinggi USD dalam 60 menit ke depan.'
              },
              {
                label: '2. Sweep & Penolakan (Syarat 2)',
                detail: 'Pukul `15:05 WITA`, harga menembus ke `2.616,00` (`$2,00` di bawah PWL), menyerap likuiditas sell-stop, lalu berbalik naik meninggalkan ekor bawah panjang dan menutup body M5 di `2.619,80` (kembali di atas PWL).'
              },
              {
                label: '3. Konfirmasi CISD & Entry',
                detail: 'Candle M5 berikutnya mengonfirmasi **Bullish CISD** (Body Close di atas Open candle sweep). Posisi **Buy** dibuka di **`2.619,50`**.'
              },
              {
                label: '4. Stop Loss & Target Bertingkat',
                detail: 'SL struktural ditempatkan di `2.615,20` (buffer `$0,80` di bawah ujung wick `2.616,00`) → jarak risiko = **`$4,30`**. Target **TP1 Asia High `2.630,00`** = **`+$10,50` (`+2,44R`)**. Target **TP2 PDH `2.642,00`** = **`+$22,50` (`+5,23R`)**.'
              }
            ]
          },
          callout: {
            tone: 'warn',
            title: 'Batas Pembatalan Skenario Turtle Soup',
            body: 'Model alternatif (**iFVG**, **Unicorn**, dan **Turtle Soup**) dipelajari sebagai pelengkap setelah Model ICT 2022 dikuasai. Jika candle M15 menutup **Body Close penuh dan tebal** jauh di luar PDH/PDL tanpa ekor penolakan, hal tersebut menandakan ekspansi tren lanjutan — skenario Turtle Soup resmi batal.'
          }
        }
      ],
      keyTakeaways: [
        '**iFVG Momentum** digunakan saat momentum cepat tanpa koreksi dalam; **ICT Unicorn** memanfaatkan irisan **Breaker Block + FVG**; **Turtle Soup (SMR)** menangkap pembalikan di level Liquidity ekstrem HTF.',
        'Turtle Soup yang valid wajib memenuhi **3 syarat pengaman**: lokasi level besar + POI H1/H4, bukti penyerapan (*Absorption Wick* + gagal Body Close di luar + CISD M5), dan maksimal 1 percobaan per level.',
        'Penutupan body candle M15 yang penuh di luar level Liquidity menandakan kelanjutan tren sehingga skenario Turtle Soup harus dibatalkan.'
      ],
      bridgeNext: 'Setelah memahami keempat model eksekusi (ICT 2022, iFVG, Unicorn, dan Turtle Soup), langkah paling menentukan untuk menjaga konsistensi statistik adalah memilih **1 Model Fokus** dan menerapkan filter penolakan ketat terhadap setup berkualitas rendah di **Bab 27: Filter Setup Gagal (5 Bendera Merah Auto-Skip) & Memilih 1 Model Fokus**.',
      conceptBlocks: [
        {
          heading: '3 Model Alternatif: iFVG, Unicorn & Turtle Soup (SMR)',
          paragraphs: [
            'Selain Model Utama ICT 2022, trader dapat memakai iFVG saat momentum terlalu cepat untuk retracement dalam, ICT Unicorn saat Breaker Block dan FVG beririsan, atau Turtle Soup (SMR) di level Liquidity ekstrem (PWH/PWL/PDH/PDL + POI H1/H4).',
            'Turtle Soup wajib menunggu bukti penolakan nyata (Absorption Wick + gagal Body Close di luar + CISD M5) dan dibatasi maksimal 1 percobaan per level ekstrem.'
          ]
        }
      ],
      validRules: [
        'Hanya mengeksekusi Turtle Soup di level ekstrem (PWH/PWL, PDH/PDL, Asia High/Low) yang berhimpitan dengan POI H1/H4.',
        'Wajib melihat Absorption Wick + gagal Body Close di luar level + konfirmasi CISD M5 sebelum entry.',
        'Untuk ICT Unicorn, pastikan Breaker Block dan FVG benar-benar saling beririsan pada satu pita harga.'
      ],
      invalidRules: [
        'Langsung melawan candle impulsif penuh yang menutup body jauh di luar PDH/PDL.',
        'Menjalankan Turtle Soup tepat saat rilis berita berdampak tinggi CPI/NFP/FOMC.',
        'Melakukan re-entry berulang di level yang sama setelah percobaan pertama menyentuh SL.'
      ],
      xauScenario: {
        context: 'XAU/USD sweep PWL 2.618,00 yang berhimpitan dengan H4 Bullish OB pada London Silver Bullet (15:00 WITA EDT).',
        steps: [
          'Harga menembus ke 2.616,00 lalu berbalik membentuk ekor bawah panjang dan menutup body M5 di 2.619,80.',
          'Candle M5 berikutnya mengonfirmasi Bullish CISD; Buy di 2.619,50, SL 2.615,20 ($4,30 risiko).',
          'TP1 Asia High 2.630,00 (+$10,50 / +2,44R) dan TP2 PDH 2.642,00 (+$22,50 / +5,23R).'
        ]
      },
      goldenRules: [
        'Turtle Soup mensyaratkan bukti kegagalan breakout dan CISD, bukan menebak pembalikan saat candle masih bergerak kuat.',
        'Batasi maksimal 1 percobaan per level ekstrem — jika ditembus, terima kelanjutan tren.'
      ],
      practiceCta: {
        label: 'Latih Pola iFVG, Unicorn & Turtle Soup di Practice Arena',
        description: 'Uji ketepatan membedakan pembalikan SMR valid melawan breakout kuat pada skenario XAU/USD interaktif.',
        href: 'trading-practice/index.html'
      },
      quiz: [
        {
          question: 'Apa komposisi persis dari **ICT Unicorn Setup** yang membuatnya memiliki presisi retracement tinggi?',
          options: [
            'Persilangan dua garis Moving Average di timeframe M1',
            'Pertemuan tumpang-tindih antara **Breaker Block** dan **Fair Value Gap (FVG)** pada satu pita harga yang sama pasca-Sweep & MSS',
            'Tiga candle Doji berturut-turut di sesi Asia siang',
            'Entry acak 5 menit sebelum berita FOMC'
          ],
          answerIndex: 1,
          explanation: 'Unicorn Setup memadukan dua PD Array kuat — Breaker Block dan FVG — yang saling beririsan pada satu pita harga.'
        },
        {
          question: 'Apa perbedaan paling tegas antara **Turtle Soup (SMR)** yang terukur dengan entry spekulatif melawan tren kuat?',
          options: [
            'Turtle Soup memakai ukuran lot 10× lebih besar',
            'Turtle Soup hanya dilakukan di level Liquidity besar + POI H1/H4 dengan bukti penyerapan (**Absorption Wick** + gagal Body Close + **CISD M5**) dan maksimal 1 percobaan',
            'Turtle Soup tidak memerlukan Stop Loss',
            'Turtle Soup dilakukan di tengah range sideways setiap 10 menit'
          ],
          answerIndex: 1,
          explanation: 'Lokasi POI HTF, bukti penyerapan + CISD, serta batas 1 percobaan memisahkan pembalikan institusional dari sekadar menebak puncak atau dasar.'
        },
        {
          question: 'Harga XAU/USD menembus PDH lalu menutup **body candle M15 penuh dan tebal** jauh di atas PDH tanpa ekor penolakan. Apakah ini sinyal Turtle Soup Sell?',
          options: [
            'Ya, langsung Sell sekarang juga karena sudah terlalu mahal',
            'Bukan — penutupan body kuat menandakan ekspansi lanjutan, sehingga skenario Turtle Soup resmi **BATAL**',
            'Ya, cukup tambah buffer SL $25',
            'Pasang Buy dan Sell bersamaan agar aman'
          ],
          answerIndex: 1,
          explanation: 'Turtle Soup mensyaratkan kegagalan mempertahankan breakout; body close tegas di luar level justru membuktikan kelanjutan tren.'
        },
        {
          question: 'Dalam studi kasus Turtle Soup di PWL `2.618,00` (Buy `2.619,50`, SL `2.615,20` = risiko `$4,30`), berapakah rasio **R:R** ketika harga mencapai **TP1 Asia High `2.630,00`** (`+$10,50`)?',
          options: [
            '`+1,00R`',
            '`+2,44R` (`$10,50 ÷ $4,30`)',
            '`+0,50R`',
            '`+8,00R`'
          ],
          answerIndex: 1,
          explanation: 'Jarak profit $10,50 dibagi jarak risiko $4,30 menghasilkan +2,44R — melampaui batas minimum 1:2.'
        }
      ]
    },

    // =========================================================================
    // BAB 27 (BAGIAN V) — FILTER SETUP GAGAL & MEMILIH 1 MODEL FOKUS
    // =========================================================================
    {
      id: 'memilih-1-model-dan-filter-gagal',
      number: 27,
      levelId: 4,
      bookFormat: true,
      title: 'Filter Setup Gagal (5 Bendera Merah Auto-Skip) & Memilih 1 Model Fokus',
      subtitle: 'Menentukan 1 model utama untuk 30–50 transaksi pertama agar data statistik valid dan menyaring setup probabilitas rendah sebelum eksekusi.',
      readMinutes: 9,
      diagramId: 'model-selection-matrix',
      diagramAfterSection: 1,
      summary: 'Dampak buruk System Hopping, prinsip fokus 1 Model Utama (30–50 transaksi), matriks pemilihan model berdasarkan jadwal WITA, 5 Bendera Merah (Auto-Skip), audit perbandingan Grade A+ vs Grade D, dan Checklist 30 Detik (5× YA).',
      bookSections: [
        {
          number: '27.1',
          heading: 'Dampak System Hopping & Prinsip 1 Model Utama (30–50 Transaksi)',
          shortTitle: 'Prinsip 1 Model Utama',
          paragraphs: [
            'Setelah mempelajari empat model eksekusi (ICT 2022, iFVG, Unicorn, dan Turtle Soup), kesalahan yang paling sering menghambat konsistensi trader adalah **System Hopping** — kebiasaan berpindah-pindah model setiap kali mengalami 1 atau 2 kali Stop Loss.',
            'Dampak langsung dari System Hopping adalah rusaknya kualitas data evaluasi di jurnal transaksi. Ketika empat model dicampur tanpa sampel yang cukup, trader tidak dapat mengetahui secara objektif apakah kerugian disebabkan oleh aturan model, pemilihan sesi, atau sekadar varians probabilitas normal.',
            'Terapkan **Prinsip 1 Model Utama**: tetapkan **satu model saja** dan jalankan secara konsisten untuk **30 hingga 50 transaksi pertama** (diawali di akun Demo atau Cent). Setelah sampel tersebut terkumpul bersih, baru lakukan evaluasi *Win Rate* dan *Expectancy*, lalu putuskan apakah perlu menambah maksimal **1 model pelengkap**.'
          ]
        },
        {
          number: '27.2',
          heading: 'Matriks Pemilihan 1 Model Fokus Sesuai Jadwal & Karakter Trader',
          shortTitle: 'Matriks Pemilihan Model',
          paragraphs: [
            'Gunakan matriks berikut untuk memilih **1 Model Utama** yang paling selaras dengan ketersediaan waktu (WITA) dan tingkat pengalamanmu:'
          ],
          table: {
            caption: 'Matriks Pemilihan Model Fokus ICT (XAU/USD · Zona Waktu WITA)',
            headers: ['Model Eksekusi', 'Karakter Trader yang Cocok', 'Frekuensi Sinyal', 'Jendela Ideal (WITA)', 'Rekomendasi Peran'],
            rows: [
              [
                '**ICT 2022** (`Sweep → MSS → FVG`)',
                'Menyukai aturan paling terstruktur, visual jelas, dan mudah dievaluasi di jurnal',
                'Sedang (`3–5×` / minggu)',
                'London KZ (`14:00–17:00` EDT / `15:00–18:00` EST) & NY AM (`19:00–22:00` EDT / `20:00–23:00` EST)',
                '**Model Utama Terbaik** bagi sebagian besar pemula hingga menengah'
              ],
              [
                '**iFVG Momentum**',
                'Responsif pada pergerakan cepat sesi New York ketika koreksi dangkal',
                'Sedang–Tinggi (`4–6×` / minggu)',
                'NY AM Silver Bullet (`22:00–23:00` EDT / `23:00–00:00` EST)',
                'Model pelengkap #1 bila sering tertinggal retracement FVG'
              ],
              [
                '**ICT Unicorn** (`Breaker + FVG`)',
                'Sangat selektif dan bersedia menunggu konfluensi ganda yang lebih jarang muncul',
                'Rendah (`1–3×` / minggu)',
                'London KZ & NY AM KZ',
                'Variasi presisi dari ICT 2022 saat Breaker dan FVG beririsan'
              ],
              [
                '**Turtle Soup (SMR)**',
                'Berpengalaman, disiplin penuh pada batas 1 percobaan di level HTF ekstrem',
                'Rendah (`1–2×` / minggu)',
                'Pembukaan London & NY pada **PWH/PWL/PDH/PDL**',
                'Tahap lanjutan (setelah menyelesaikan minimal 50 transaksi Model Utama)'
              ]
            ]
          }
        },
        {
          number: '27.3',
          heading: '5 Bendera Merah (Auto-Skip) yang Membatalkan Setup Seketika',
          shortTitle: '5 Bendera Merah Auto-Skip',
          paragraphs: [
            'Kinerja jangka panjang sangat ditentukan oleh kemampuan menolak setup probabilitas rendah. Sebelum membuka posisi pada model mana pun, periksa **5 Bendera Merah** berikut. Apabila **satu saja** kondisi di bawah terpenuhi, batalkan rencana transaksi tanpa pengecualian:',
            '1. **Bendera Merah 1 — Harga di Tengah Range (`40%–60%` Equilibrium) Tanpa Sweep:** Tidak ada pengambilan Liquidity baru sebagai pemicu arah; pergerakan di tengah range rentan berbalik dua arah.',
            '2. **Bendera Merah 2 — Arah Entry Berhadapan Langsung dengan POI H1/H4 Lawan:** Contohnya mengambil posisi Buy M5 tepat di bawah H4 Bearish Order Block atau PDH. Ruang gerak searah menjadi sangat terbatas.',
            '3. **Bendera Merah 3 — Di Dalam Jendela News Lock (`-15 menit` s.d. `+30 menit`):** Menjelang dan sesaat setelah rilis data ekonomi berdampak tinggi USD (CPI, NFP, FOMC — Bab 17), pelebaran spread dan slippage dapat melampaui batas risiko.',
            '4. **Bendera Merah 4 — R:R ke Target Liquidity Terdekat `< 1:1,8`:** Potensi imbal hasil tidak sebanding dengan risiko struktural yang ditanggung (Bab 04).',
            '5. **Bendera Merah 5 — Batas Rugi Harian (`2× SL` atau `-2%`) Sudah Tercapai:** Melanjutkan transaksi setelah batas harian tercapai berisiko memicu keputusan emosional (*revenge trading*). Hentikan aktivitas trading hingga sesi hari berikutnya.'
          ]
        },
        {
          number: '27.4',
          heading: 'Audit Perbandingan Grade A+ vs Grade D dan Checklist 30 Detik',
          shortTitle: 'Audit Setup & Checklist',
          paragraphs: [
            'Bandingkan dua contoh evaluasi setup XAU/USD berikut, lalu gunakan **Checklist 30 Detik (`5× YA`)** sebelum setiap eksekusi:'
          ],
          exampleBox: {
            title: 'Perbandingan Audit Setup: Grade A+ (Eksekusi) vs Grade D (Auto-Skip)',
            rows: [
              {
                label: 'Kasus A — Grade A+ (EKSEKUSI)',
                detail: 'Pukul `15:20 WITA` (London KZ) · Bias H1 Bullish · Terjadi Sweep Asia Low + MSS M5 + Bullish FVG bersih di zona Discount · Di luar jendela News Lock · Target ke PDH menghasilkan R:R `1:2,6` → **5× YA, eksekusi dengan risiko 1%**.'
              },
              {
                label: 'Kasus B — Grade D (AUTO-SKIP)',
                detail: 'Terdapat FVG M5 yang terlihat rapi, tetapi posisinya di tengah range (`52%`), tidak didahului Sweep, 10 menit lagi rilis CPI USD, dan ruang menuju resistance terdekat hanya memberi R:R `1:1,1` → **3 Bendera Merah aktif; catat "NO SETUP" dan lewati**.'
              },
              {
                label: 'Checklist 30 Detik (Wajib 5× YA)',
                detail: '(1) Berada di dalam Killzone & bebas News Lock? (2) Searah Bias/DOL HTF & tidak berhadapan langsung dengan POI lawan? (3) Sudah ada Sweep nyata (bukan tengah range)? (4) Pemicu model utama valid & R:R ≥ `1:2`? (5) Belum mencapai batas `2× SL` hari ini? → **Satu jawaban "TIDAK" berarti BATAL**.'
              }
            ]
          },
          callout: {
            tone: 'tip',
            title: 'Mencatat "NO SETUP" Adalah Bagian dari Disiplin Eksekusi',
            body: 'Tidak mengambil transaksi pada hari tanpa setup valid bukanlah kegagalan. Kemampuan menyaring dan menolak setup Grade C/D melindungi ekuitas akun agar tetap optimal ketika setup Grade A+ muncul.'
          }
        }
      ],
      keyTakeaways: [
        'Hindari **System Hopping** — kunci **1 Model Utama** (disarankan **ICT 2022**) selama **30–50 transaksi** agar data Win Rate dan Expectancy di jurnal murni dan dapat dievaluasi secara objektif.',
        'Terapkan **5 Bendera Merah (Auto-Skip)**: tengah range tanpa sweep, berhadapan langsung dengan POI H1/H4 lawan, dalam jendela News Lock (`-15m/+30m`), R:R `< 1:1,8`, atau batas `2× SL` harian sudah tercapai.',
        'Jalankan **Checklist 30 Detik (`5× YA`)** sebelum eksekusi — satu jawaban "TIDAK" cukup untuk membatalkan setup.'
      ],
      bridgeNext: 'Setelah menentukan 1 Model Fokus dan menyaring setup gagal melalui 5 Bendera Merah, langkah berikutnya adalah mengatur proteksi risiko dan target secara terukur pada **Bab 28: Stop Loss Struktural, Napas Spread & Target Liquidity Bertingkat (TP1/TP2)**.',
      conceptBlocks: [
        {
          heading: '1 Model Fokus & 5 Bendera Merah (Auto-Skip)',
          paragraphs: [
            'Tetapkan 1 Model Utama (disarankan ICT 2022) untuk 30–50 transaksi pertama agar statistik jurnal murni dan terhindar dari System Hopping.',
            'Batalkan setup seketika apabila muncul salah satu dari 5 Bendera Merah: tengah range tanpa sweep, berhadapan dengan POI H1/H4 lawan, dalam jendela News Lock, R:R < 1:1,8, atau batas 2× SL harian sudah tercapai.'
          ]
        }
      ],
      validRules: [
        'Tetapkan 1 Model Utama untuk 30–50 transaksi pertama agar data statistik di jurnal murni.',
        'Pastikan seluruh Checklist 30 Detik (5× YA) terpenuhi sebelum membuka posisi.',
        'Catat "NO SETUP" di jurnal saat kondisi pasar tidak memenuhi kriteria.'
      ],
      invalidRules: [
        'Mengganti model setiap kali mengalami 1–2 kali Stop Loss (System Hopping).',
        'Memaksakan validasi dengan mencocok-cocokkan istilah ICT agar tetap bisa masuk posisi.',
        'Membuka posisi pada setup Grade C/D karena bosan menunggu.'
      ],
      xauScenario: {
        context: 'Perbandingan cepat audit setup Grade A+ vs Grade D pada XAU/USD.',
        steps: [
          'Kasus A: Sweep Asia Low + MSS M5 + FVG bersih di Discount + H1 Bullish + bebas news + R:R 1:2,6 → Grade A+ (Eksekusi).',
          'Kasus B: FVG M5 di tengah range 52%, tanpa sweep, 10 menit sebelum CPI, R:R 1:1,1 → Grade D (AUTO-SKIP).'
        ]
      },
      goldenRules: [
        'Satu model yang dikuasai dan terukur secara statistik jauh lebih efektif daripada banyak model tanpa sampel data yang jelas.',
        'Kualitas manajemen risiko tercermin dari seberapa disiplin trader menolak setup berkualitas rendah.'
      ],
      practiceCta: {
        label: 'Uji Filter 5 Bendera Merah di Cockpit Mapping',
        description: 'Gunakan Cockpit Mapping untuk menyaring kondisi sesi, News Lock, dan POI HTF secara otomatis sebelum mengambil keputusan entry.',
        href: '../mapping/index.html'
      },
      quiz: [
        {
          question: 'Mengapa kamu diwajibkan mengunci **1 Model Utama** minimal **30–50 transaksi** sebelum menilai atau menggantinya?',
          options: [
            'Karena aturan broker melarang mengganti indikator sebelum 30 hari',
            'Agar data statistik **Win Rate** dan **Expectancy** murni serta valid secara probabilitas, bebas dari bias *System Hopping* akibat 1–2 kali loss',
            'Supaya bisa menghafal semua warna candle di chart',
            'Karena model lain hanya bekerja di hari Jumat'
          ],
          answerIndex: 1,
          explanation: 'Keunggulan statistik baru terlihat pada ukuran sampel yang memadai; berpindah model setiap terkena 2 SL merusak objektivitas data.'
        },
        {
          question: 'Manakah kondisi berikut yang memicu **Bendera Merah (AUTO-SKIP)** meskipun ada kotak FVG M5 yang terlihat rapi?',
          options: [
            'Muncul di London Killzone setelah sweep Asia Low searah Bias H1',
            'Muncul **10 menit sebelum rilis CPI USD**, berada di tengah range tanpa sweep, dan R:R ke target terdekat hanya `1:1,1`',
            'Berada di zona Discount OTE dengan ruang R:R `1:2,5`',
            'Memiliki Stop Loss struktural yang rapi di bawah wick sweep'
          ],
          answerIndex: 1,
          explanation: 'Jendela News Lock, posisi tengah range tanpa sweep, dan R:R < 1:1,8 adalah bendera merah mutlak.'
        },
        {
          question: 'Jika kamu sering tertinggal retracement FVG saat momentum **NY AM Silver Bullet** bergerak cepat, model pelengkap mana yang paling tepat dipelajari setelah lulus Model Utama?',
          options: [
            '**iFVG Momentum Entry** pasca-sweep',
            'Averaging martingale tanpa Stop Loss',
            'Trading acak saat jam rollover subuh',
            'Menebak puncak melawan candle berita NFP'
          ],
          answerIndex: 0,
          explanation: 'iFVG Momentum dirancang untuk menangkap perubahan order flow pada momentum cepat tanpa menunggu koreksi dalam.'
        },
        {
          question: 'Saat menjalankan **Checklist 30 Detik (`5× YA`)**, ternyata 4 poin menjawab YA tetapi 1 poin menjawab **TIDAK** (entry berhadapan langsung dengan H4 Bearish Order Block). Keputusan yang tepat adalah...',
          options: [
            'Tetap masuk dengan lot setengahnya karena sudah 4 dari 5 syarat terpenuhi',
            '**SKIP / BATAL** — satu bendera merah atau satu jawaban "TIDAK" cukup untuk membatalkan setup tanpa kompromi',
            'Tetap masuk lalu menghapus Stop Loss agar tidak tersentuh',
            'Membalikkan posisi menjadi Sell secara spontan tanpa analisis'
          ],
          answerIndex: 1,
          explanation: 'Checklist bersifat gerbang wajib (semua harus YA); berhadapan langsung dengan POI HTF lawan merupakan setup probabilitas rendah.'
        }
      ]
    }
  ];

  return { LEVELS, LESSONS };
});
