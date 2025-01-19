import MillionLint from "@million/lint";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    MillionLint.vite({
      enabled: true,
    }),
    react(),
  ],
  base: "/react-quiz/",
});
