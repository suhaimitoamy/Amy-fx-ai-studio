# Amy FX AI Studio

Amy FX AI Studio adalah **cloud prototyping, testing, dan AI-assisted refinement workspace** untuk ekosistem Amy FX. Repositori ini dirancang khusus agar berjalan optimal di dalam lingkungan **Google AI Studio** dengan kuota file yang hemat dan efisien.

---

## 📌 Status Workspace

| Properti | Nilai |
|---|---|
| **Source Branch** | `main` |
| **Baseline Versi** | `2.0.0-pro.458` |
| **Tracked Files** | **511 File** (Batas Kuota AI Studio: 1.000 File) |
| **Sisa Slot Kuota** | **489 Slot Kosong** |
| **Fokus Utama** | Web UI prototyping, penyempurnaan materi Academy, dan riset formula |
| **Runtime** | Web Browser Preview + Node.js Verification |

---

## 🎯 Peran & Tujuan Workspace Ini

1. **Eksperimen Kilat Tanpa Beban Build APK:**
   Seluruh modul web (Mapping, Jurnal, Market Intel, Academy) dapat diuji dan dikembangkan langsung di Google AI Studio tanpa memerlukan kompiler Android Studio / Gradle.
2. **Penyempurnaan Materi Edukasi (Academy Markdown Modules):**
   Materi 581 bab pelajaran ICT dibundel rapi ke dalam **36 file Markdown tematik** di folder [`apps/academy/modul/`](file:///root/Amy-fx-ai-studio/apps/academy/modul), memungkinkan Sayang atau Gemini AI untuk langsung membaca, mengedit narasi, memperbaiki contoh chart, dan menambah studi kasus tanpa memakan kuota file.
3. **Penyelarasan Logika Dua Arah:**
   Fitur-fitur baru yang diuji di AI Studio (seperti Central Journal Analytics SVG atau TwelveData Key Pool) dapat disinkronkan langsung ke repositori produksi `Amy-fx-pro`.

---

## 📂 Struktur Direktori AI Studio

```text
Amy-fx-ai-studio/
├── apps/
│   ├── academy/                 # Portal Academy & Modul Markdown
│   │   ├── index.html           # Portal navigasi 36 modul
│   │   ├── README.md            # Panduan edit materi
│   │   └── modul/               # 36 Modul Tematik (.md) editable
│   ├── journal/                 # UI Modul Jurnal Trading
│   ├── mapping/                 # Cockpit Peta Konteks Gold ICT
│   ├── market-intel/            # News, Liquidity Heatmap, BSL/SSL
│   ├── practice/                # Candle Replay & Practice interface
│   └── shared/                  # Central Journal Analytics Pro, Theme, Live Bridge
├── api/                         # Vercel serverless functions (Twelvedata, Scalper Setups)
├── lib/
│   └── twelvedata-key-pool.mjs  # TwelveData Multi-Key Pool & 429 Failover engine
├── tests/                       # Targeted unit tests (Journal Analytics, Key Pool)
├── tools/                       # Server preview & utilities
├── feature_list.json            # Single source of truth fitur (Harness Primitive)
├── session-handoff.md           # Catatan estafet antar-sesi developer/AI
├── clean-state-checklist.md     # SOP kebersihan kode sebelum commit
├── BLUEPRINT_PAGI.md            # Master blueprint arsitektur sistem
├── init.sh                      # Skrip inisialisasi & verifikasi cepat (0.3s)
├── index.html                   # Beranda utama Amy FX
└── app.js                       # Logika routing & inisialisasi web
```

---

## 🔄 Alur Sinkronisasi Dua Arah (AI Studio ⇄ Amy FX Pro)

### 1. Dari AI Studio ke Amy FX Pro:
Setelah Sayang menyempurnakan modul Markdown di Google AI Studio atau menambahkan fitur baru:
1. Commit dan push perubahan di branch `main` GitHub `Amy-fx-ai-studio`.
2. Di Termux Amy FX Pro, jalankan otomatis:
   ```bash
   # Ekstrak materi markdown kembali ke 581 HTML chapters di Pro:
   python3 tools/sync-academy-modules.py import
   ```

### 2. Dari Amy FX Pro ke AI Studio:
Jika ada pembaruan bab HTML baru di Pro yang ingin dimasukkan ke AI Studio:
```bash
python3 tools/sync-academy-modules.py export
```

---

## ⚡ Verifikasi Kilat (Fast Baseline Check)

Jalankan skrip harness verification di terminal AI Studio untuk memastikan kode bersih:
```bash
./init.sh
```
*Output yang diharapkan (0.3 detik):*
* Syntax check `app.js`, `apps/shared/journal-analytics-pro.js`, `lib/twelvedata-key-pool.mjs` clean (0 errors).
* Targeted tests lolos 6/6 pass.

---

**Amy FX AI Studio** — *Lightweight, modular, and AI-optimized web workspace for rapid trading tech innovation.*
