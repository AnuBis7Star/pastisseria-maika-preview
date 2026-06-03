// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://anubis7star.github.io",

  // GitHub Pages project previews are served from /pastisseria-maika-preview/.
  // Remove this value for root hosting, or change it when deploying under a
  // different subpath or custom domain.
  base: "/pastisseria-maika-preview/",
});
