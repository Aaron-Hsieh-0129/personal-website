import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.ASTRO_SITE || "https://aaron-hsieh-0129.github.io",
  base: process.env.ASTRO_BASE || "/personal-website",
  trailingSlash: "always",
  devToolbar: {
    enabled: false
  }
});
