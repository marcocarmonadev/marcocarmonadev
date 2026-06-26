import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://marcocarmona.dev",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
