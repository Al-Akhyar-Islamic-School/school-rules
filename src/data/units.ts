// Data pusat situs Peraturan Sekolah — dipakai nav, grid bab, quick-facts,
// prev/next, dan sitemap. Sumber: 4 dokumen peraturan final TA 2026/2027
// (folder "Peraturan Sekolah") + data kontak dari alakhyar-web/src/data/site.ts.

export const site = {
  name: 'Peraturan Sekolah',
  sekolah: 'Sekolah Islam Al Akhyar',
  tagline: 'Unggul & Berakhlak',
  tahunAjaran: '2026/2027',
  description:
    'Peraturan dan tata tertib resmi Sekolah Islam Al Akhyar Makassar untuk jenjang TK/KB, SD, SMP, dan SMA — Tahun Ajaran 2026/2027. Mudah dibaca, lengkap, dan selalu diperbarui.',
  email: 'official@alakhyar.sch.id',
  phone: '0852-1516-1778',
  whatsapp: 'https://wa.me/6285215161778',
  address: 'Jl. Arung Teko No. 99, Sudiang, Biringkanaya, Makassar, Sulawesi Selatan',
  instagram: 'https://www.instagram.com/alakhyar_is',
  instagramHandle: '@alakhyar_is',
  webUrl: 'https://alakhyar.sch.id',
  kurikulumUrl: 'https://kurikulum.alakhyar.sch.id',
  dinarUrl: 'https://dinar.alakhyar.sch.id',
  driveUrl:
    'https://drive.google.com/drive/folders/1XrXf98q_w7fhUDVHiZ15T9edXXLpkTCX',
};

export type UnitSlug = 'tk' | 'sd' | 'smp' | 'sma';

// Registry kanonik halaman aturan. `units[].pages` memilih subset per unit.
export interface RulePage {
  slug: string;
  judul: string;
  chip: string; // label pendek untuk chip nav
  bagian: string; // nomor BAGIAN pada dokumen sumber
  desc: string;
  icon: string; // nama ikon Lucide di Icon.astro
}

export const RULE_PAGES: RulePage[] = [
  {
    slug: 'kehadiran-dan-seragam',
    judul: 'Kehadiran, Seragam & Barang Bawaan',
    chip: 'Kehadiran & Seragam',
    bagian: 'II',
    desc: 'Jam masuk, ketepatan waktu, jadwal seragam harian, dan barang yang boleh dibawa.',
    icon: 'shirt',
  },
  {
    slug: 'ibadah-dan-akhlak',
    judul: 'Ibadah, Akhlak & Adab',
    chip: 'Ibadah & Akhlak',
    bagian: 'III',
    desc: 'Kewajiban ibadah harian, target tahfidz, adab Islami, dan larangan terkait syariat.',
    icon: 'heart-handshake',
  },
  {
    slug: 'pembelajaran',
    judul: 'Pembelajaran & Akademik',
    chip: 'Pembelajaran',
    bagian: 'IV',
    desc: 'Pembiasaan pagi, kegiatan di kelas, penggunaan ponsel dan perangkat digital, serta ujian.',
    icon: 'book-open',
  },
  {
    slug: 'poinku',
    judul: 'Sistem Poinku',
    chip: 'Poinku',
    bagian: 'V',
    desc: 'Poin akhlak, lima kartu status, kategori pelanggaran, dan poin unggul (prestasi).',
    icon: 'star',
  },
  {
    slug: 'absensi-dan-izin',
    judul: 'Absensi Digital & Perizinan',
    chip: 'Absensi & Izin',
    bagian: 'VI',
    desc: 'Absensi lewat Dinar App, status kehadiran, batas ketidakhadiran, dan prosedur izin.',
    icon: 'calendar-check',
  },
  {
    slug: 'keuangan',
    judul: 'Keuangan & SPP',
    chip: 'Keuangan',
    bagian: 'VII',
    desc: 'Jenis biaya, cara pembayaran, jatuh tempo SPP, konsekuensi tunggakan, dan beasiswa.',
    icon: 'wallet',
  },
  {
    slug: 'fasilitas-dan-keamanan',
    judul: 'Lingkungan, Fasilitas & Keamanan',
    chip: 'Fasilitas',
    bagian: 'VIII',
    desc: 'Kebersihan, penggunaan fasilitas sekolah, keamanan siswa, dan ekstrakurikuler.',
    icon: 'shield',
  },
  {
    slug: 'orang-tua',
    judul: 'Kemitraan Orang Tua',
    chip: 'Orang Tua',
    bagian: 'IX',
    desc: 'Hak dan kewajiban orang tua, Dinar App, jam komunikasi, perlindungan guru, dan pengaduan.',
    icon: 'users',
  },
  {
    slug: 'apresiasi-dan-sanksi',
    judul: 'Apresiasi, Sanksi & Pembinaan',
    chip: 'Apresiasi & Sanksi',
    bagian: 'X',
    desc: 'Program apresiasi siswa, prinsip pembinaan, dan tahapan pembinaan bertahap.',
    icon: 'scale',
  },
  {
    slug: 'jadwal-dan-program',
    judul: 'Jadwal Harian & Program Khas',
    chip: 'Jadwal & Program',
    bagian: 'XI',
    desc: 'Jadwal kegiatan harian, program unggulan unit, mentoring, dan ketentuan kepulangan.',
    icon: 'clock',
  },
];

export interface Unit {
  slug: UnitSlug;
  nama: string; // "TK/KB Islam"
  lengkap: string; // "KB-TK Islam Al Akhyar"
  kelas: string;
  warna: string; // hex — konvensi jenjang design system
  kepala: string;
  foto: string;
  deskripsi: string;
  quickFacts: { label: string; nilai: string; icon: string }[];
  pages: string[]; // slug halaman yang berlaku untuk unit ini
}

export const units: Unit[] = [
  {
    slug: 'tk',
    nama: 'TK/KB Islam',
    lengkap: 'KB-TK Islam Al Akhyar',
    kelas: 'Usia 2–6 tahun',
    warna: '#ec2a6b',
    kepala: 'Amaliah Maisurah, S.K.M',
    foto: 'jenjang-tk',
    deskripsi:
      'Peraturan KB-TK Islam Al Akhyar: pembiasaan ibadah, kemandirian, dan kemitraan erat dengan orang tua untuk ananda usia dini.',
    quickFacts: [
      { label: 'Jam Kegiatan', nilai: '07.30–11.00 (TK) · 07.30–10.30 (KB)', icon: 'clock' },
      { label: 'Ponsel Siswa', nilai: 'Dilarang dibawa, tanpa pengecualian', icon: 'smartphone' },
      { label: 'SPP', nilai: 'Tanggal 1–25 via Virtual Account', icon: 'wallet' },
      { label: 'Tanpa Kabar (Alpha)', nilai: '3 hari → sekolah menghubungi orang tua', icon: 'calendar-check' },
    ],
    pages: [
      'kehadiran-dan-seragam',
      'ibadah-dan-akhlak',
      'pembelajaran',
      'absensi-dan-izin',
      'keuangan',
      'orang-tua',
      'apresiasi-dan-sanksi',
      'jadwal-dan-program',
    ],
  },
  {
    slug: 'sd',
    nama: 'SD Islam',
    lengkap: 'SD Islam Al Akhyar',
    kelas: 'Kelas 1–6',
    warna: '#006195',
    kepala: 'Nurmaladewi, S.E., Gr',
    foto: 'jenjang-sd',
    deskripsi:
      'Peraturan SD Islam Al Akhyar: kedisiplinan fullday school, sistem Poinku, tahfidz, dan pembinaan karakter kelas 1–6.',
    quickFacts: [
      { label: 'Jam Sekolah', nilai: '07.00–15.20', icon: 'clock' },
      { label: 'Ponsel Siswa', nilai: 'Dilarang, kecuali izin khusus orang tua & kepala sekolah', icon: 'smartphone' },
      { label: 'SPP', nilai: 'Jatuh tempo tanggal 5 setiap bulan', icon: 'wallet' },
      { label: 'Batas Alpha', nilai: 'Maksimal 10 hari per semester', icon: 'calendar-check' },
    ],
    pages: [
      'kehadiran-dan-seragam',
      'ibadah-dan-akhlak',
      'pembelajaran',
      'poinku',
      'absensi-dan-izin',
      'keuangan',
      'fasilitas-dan-keamanan',
      'orang-tua',
      'apresiasi-dan-sanksi',
      'jadwal-dan-program',
    ],
  },
  {
    slug: 'smp',
    nama: 'SMP Islam',
    lengkap: 'SMP Islam Al Akhyar',
    kelas: 'Kelas 7–9',
    warna: '#1b93c6',
    kepala: 'Baharuddin, Lc., S.H., Gr',
    foto: 'jenjang-smp',
    deskripsi:
      'Peraturan SMP Islam Al Akhyar: kemandirian remaja, sistem Poinku, ketentuan kendaraan, dan pembinaan organisasi kelas 7–9.',
    quickFacts: [
      { label: 'Jam Sekolah', nilai: '07.00–17.00 (toleransi 5 menit)', icon: 'clock' },
      { label: 'Ponsel Siswa', nilai: 'Dititipkan ke guru piket saat tiba', icon: 'smartphone' },
      { label: 'SPP', nilai: 'Jatuh tempo tanggal 25 setiap bulan', icon: 'wallet' },
      { label: 'Batas Alpha', nilai: 'Maksimal 15% hari efektif', icon: 'calendar-check' },
    ],
    pages: [
      'kehadiran-dan-seragam',
      'ibadah-dan-akhlak',
      'pembelajaran',
      'poinku',
      'absensi-dan-izin',
      'keuangan',
      'fasilitas-dan-keamanan',
      'orang-tua',
      'apresiasi-dan-sanksi',
      'jadwal-dan-program',
    ],
  },
  {
    slug: 'sma',
    nama: 'SMA Islam',
    lengkap: 'SMA Islam Al Akhyar',
    kelas: 'Kelas 10–12',
    warna: '#2fa97b',
    kepala: 'Nur Aeni HM, S.Si., M.Si., Gr',
    foto: 'jenjang-sma',
    deskripsi:
      'Peraturan SMA Islam Al Akhyar: tanggung jawab menuju dewasa, sistem Poinku, persiapan SNBT, dan ketentuan kendaraan kelas 10–12.',
    quickFacts: [
      { label: 'Jam Sekolah', nilai: '07.00–17.00 (toleransi 5 menit)', icon: 'clock' },
      { label: 'Ponsel Siswa', nilai: 'Dititipkan ke guru piket saat tiba', icon: 'smartphone' },
      { label: 'SPP', nilai: 'Jatuh tempo tanggal 25 setiap bulan', icon: 'wallet' },
      { label: 'Batas Alpha', nilai: 'Maksimal 15% hari efektif', icon: 'calendar-check' },
    ],
    pages: [
      'kehadiran-dan-seragam',
      'ibadah-dan-akhlak',
      'pembelajaran',
      'poinku',
      'absensi-dan-izin',
      'keuangan',
      'fasilitas-dan-keamanan',
      'orang-tua',
      'apresiasi-dan-sanksi',
      'jadwal-dan-program',
    ],
  },
];

export function getUnit(slug: string): Unit {
  const u = units.find((u) => u.slug === slug);
  if (!u) throw new Error(`Unit tidak dikenal: ${slug}`);
  return u;
}

// Daftar halaman (objek RulePage) milik satu unit, urut sesuai registry.
export function unitPages(unit: Unit): RulePage[] {
  return unit.pages
    .map((slug) => RULE_PAGES.find((p) => p.slug === slug))
    .filter((p): p is RulePage => Boolean(p));
}

// Prev/next untuk navigasi antarhalaman dalam satu unit.
export function prevNext(unit: Unit, slug: string) {
  const pages = unitPages(unit);
  const i = pages.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? pages[i - 1] : null,
    next: i >= 0 && i < pages.length - 1 ? pages[i + 1] : null,
  };
}
