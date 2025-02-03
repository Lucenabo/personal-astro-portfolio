// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import icon from "astro-icon";

import netlify from "@astrojs/netlify";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [
    tailwind(),
    react(),
    icon(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  output: "server",
  adapter: netlify({
    edgeMiddleware: true,
  }),
});
