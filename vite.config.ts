import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import checker from "vite-plugin-checker";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: {
        // disable type errors failing the build
        enable: true,
        tsconfigPath: "./tsconfig.json",
      },
    }),
    tailwindcss(),
  ],
  build: {
    // ignore TS errors during production build
    target: "esnext",
    minify: "esbuild",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
