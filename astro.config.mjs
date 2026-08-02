import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const base = process.env.ASTRO_BASE || '/cnarchkg/';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://www.cnarchkg.cn',
  base: base.endsWith('/') ? base : `${base}/`,
});
