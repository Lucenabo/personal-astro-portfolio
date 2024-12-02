// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://lucenabo.github.io",
  base: "lucenabo.github.io",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
  integrations: [tailwind(), react(), icon()],
});
