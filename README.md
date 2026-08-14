# Peraturan Sekolah — Al Akhyar

Situs statis peraturan & tata tertib Sekolah Islam Al Akhyar (TK/KB, SD, SMP, SMA)
Tahun Ajaran 2026/2027. Mobile-first, mengikuti Al Akhyar Design System.

**Produksi:** https://schoolrules.alakhyar.sch.id (Netlify)

## Teknologi

- [Astro](https://astro.build) 7 + Tailwind CSS v4 (pola sama dengan repo `alakhyar-web`)
- Tanpa CMS — konten dikurasi langsung sebagai halaman `.astro`
- Deploy: Netlify (`npm run build` → `dist/`)

## Menjalankan lokal

```bash
npm install
npm run dev        # dev server
npm run build      # build produksi ke dist/
npm run preview    # pratinjau hasil build
```

## Struktur penting

| Path | Isi |
|------|-----|
| `src/data/units.ts` | Registry pusat: data unit (jam, SPP, warna, kepala sekolah) + daftar halaman. Menggerakkan nav, grid, quick-facts, prev/next |
| `src/pages/{tk,sd,smp,sma}/` | Halaman peraturan per unit (8–10 halaman per unit) |
| `src/components/shared/` | Blok konten yang identik antar unit (adab, perlindungan guru, Poinku, dll.) — ubah sekali, berlaku semua unit |
| `src/styles/global.css` | Token design system (`@theme`) + tema warna per unit (`data-unit`) + tabel responsif + gaya cetak |
| `content-reference/` | Ekstraksi teks 4 dokumen DOCX sumber (referensi, tidak di-build) |
| `NOTES-KONFIRMASI.md` | Temuan editorial dokumen sumber yang perlu keputusan |

## Mengubah konten

- **Angka per unit** (jam masuk, SPP, batas alpha): edit `src/data/units.ts` *dan* halaman terkait.
- **Aturan yang sama di semua unit**: edit komponen di `src/components/shared/`.
- **Aturan spesifik unit**: edit halaman di `src/pages/<unit>/`.
- **Menambah bab baru**: tambahkan entri di `RULE_PAGES` (`units.ts`), daftarkan slug-nya
  di `pages` unit terkait, lalu buat file `.astro`-nya.

## Warna unit (konvensi design system)

TK magenta `#EC2A6B` · SD biru brand `#006195` · SMP sky `#1B93C6` · SMA hijau `#2FA97B`

## Sumber resmi

Dokumen peraturan lengkap (versi ditandatangani):
[Google Drive resmi sekolah](https://drive.google.com/drive/folders/1XrXf98q_w7fhUDVHiZ15T9edXXLpkTCX)
