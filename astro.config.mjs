import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: 'https://calmassage.com.br',
  integrations: [tailwind(), sitemap(), robotsTxt()],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});