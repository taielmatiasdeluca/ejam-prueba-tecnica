import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://taieldeluca.com.ar/prueba-tecnica/ejam/',
  base: '/prueba-tecnica/ejam',
  trailingSlash: "always"
  
});