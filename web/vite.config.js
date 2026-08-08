import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const page = (p) => resolve(root, p);

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        home: page("index.html"),
        whatsapp: page("whatsapp-ai-agent/index.html"),
        instagram: page("instagram-ai-agent/index.html"),
        messenger: page("messenger-ai-agent/index.html"),
        website: page("website-chatbot/index.html"),
        pricing: page("pricing/index.html"),
        contact: page("contact/index.html")
      }
    }
  }
});
