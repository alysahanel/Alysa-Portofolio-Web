import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    proxy: {
      "/gams/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/gams/, ""),
      },
      "/legal/api": {
        target: "http://localhost:3009",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/legal/, ""),
      },
      "/cashtracking/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/cashtracking\/api/, ""),
      },
      "/gams": { target: "http://localhost:3000", changeOrigin: true },
      "/legal": { target: "http://localhost:3000", changeOrigin: true },
      "/cashtracking": { target: "http://localhost:3000", changeOrigin: true },
      "/healthcare-web": { target: "http://localhost:3000", changeOrigin: true },
    },
  },
});
