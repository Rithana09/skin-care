import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Add base path for GitHub Pages
  base: "/skin-care/",
  build: {
    outDir: "dist",
  },
})
