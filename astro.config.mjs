import { defineConfig } from 'astro/config';
import vue from "@astrojs/vue";

import cloudflare from "@astrojs/cloudflare";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  // output: 'server',
  integrations: [vue()],
  // adapter: cloudflare(),
  adapter: node()
});