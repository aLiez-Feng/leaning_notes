import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
const mdPlugin = require("vite-plugin-markdown");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    mdPlugin.plugin({
      mode: ["html", "vue"],
    }),
  ],
});
