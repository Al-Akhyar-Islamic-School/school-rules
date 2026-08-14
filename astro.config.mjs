// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://schoolrules.alakhyar.sch.id',
  // Jangan kompres whitespace HTML: kompresi menghapus spasi signifikan
  // di batas teks ↔ elemen inline (mis. "Dinar App adalah" → "Dinar Appadalah").
  compressHTML: false,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
