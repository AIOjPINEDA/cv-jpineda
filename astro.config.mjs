// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://aiojpineda.github.io',
  base: '/cv-jpineda',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});

