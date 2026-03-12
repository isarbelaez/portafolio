import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // FIX: Set the site and base for GitHub Pages deployment.
  // Change 'isarbelaez' to your actual GitHub username and 'portafolio' to your repo name.
  site: 'https://isarbelaez.github.io',
  base: '/portafolio',
  integrations: [react(), tailwind()],
});
