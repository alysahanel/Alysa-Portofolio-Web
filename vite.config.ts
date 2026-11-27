import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import express from "express";
import path from "path";
import { createRequire } from "module";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function integratedDemosPlugin(): Plugin {
  return {
    name: "integrated-demos-dev-middleware",
    async configureServer(server) {
      const demoRouter = express();

      // Mount Legal Mock API directly for `npm run dev`
      try {
        const legalModule = await import(
          pathToFileURL(path.join(__dirname, "legal/backend/server.js")).href
        );
        const legalApp = legalModule.default;
        demoRouter.use("/legal/api", (req, res, next) => {
          req.url = "/api" + req.url;
          legalApp(req, res, next);
        });
      } catch (err) {
        console.warn("[dev-demos] Legal API fallback disabled:", err);
      }

      // Mount GAMS Mock API directly for `npm run dev`
      try {
        const req = createRequire(import.meta.url);
        const gamsApp = req(path.join(__dirname, "gams/server.js"));
        demoRouter.use("/gams/api", (reqObj, res, next) => {
          reqObj.url = "/api" + reqObj.url;
          gamsApp(reqObj, res, next);
        });
      } catch (err) {
        console.warn("[dev-demos] GAMS API fallback disabled:", err);
      }

      // Static routes for Legal (including backend/public-assets JS)
      demoRouter.get(["/legal", "/legal/"], (_req, res) => {
        res.sendFile(path.join(__dirname, "legal/frontend/public/dashboard.html"));
      });
      demoRouter.use(
        "/legal/assets",
        express.static(path.join(__dirname, "legal/backend/public-assets"))
      );
      demoRouter.use(
        "/legal",
        express.static(path.join(__dirname, "legal/frontend/public"), { index: false })
      );
      demoRouter.use(
        "/assets",
        express.static(path.join(__dirname, "legal/backend/public-assets"))
      );
      demoRouter.use(
        "/assets",
        express.static(path.join(__dirname, "legal/frontend/public/assets"))
      );
      for (const page of [
        "license-permit",
        "regulatory",
        "elibrary",
        "operational",
        "company",
        "safety",
      ]) {
        demoRouter.get(`/legal/${page}`, (_req, res) => {
          res.sendFile(
            path.join(__dirname, "legal/frontend/public", `${page}.html`)
          );
        });
      }

      // Static routes for GAMS
      demoRouter.get(["/gams", "/gams/"], (_req, res) => {
        res.sendFile(path.join(__dirname, "gams/public/dashboard.html"));
      });
      demoRouter.use(
        "/gams",
        express.static(path.join(__dirname, "gams/public"), { index: false })
      );

      // Static routes for CashTracking frontend
      demoRouter.use(
        "/cashtracking",
        express.static(path.join(__dirname, "CashTracking/frontend/build"))
      );
      demoRouter.get(["/cashtracking", "/cashtracking/*"], (_req, res) => {
        res.sendFile(
          path.join(__dirname, "CashTracking/frontend/build/index.html")
        );
      });

      // Static routes for Healthcare Web
      demoRouter.use(
        "/healthcare-web",
        express.static(path.join(__dirname, "healthcare-web"))
      );
      demoRouter.get(["/healthcare-web", "/healthcare-web/"], (_req, res) => {
        res.sendFile(path.join(__dirname, "healthcare-web/index.html"));
      });

      server.middlewares.use((req, res, next) => {
        const url = req.url || "";
        if (/^\/(legal|gams|cashtracking|healthcare-web|assets)(\/|$|\?)/.test(url)) {
          return demoRouter(req as any, res as any, next);
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), integratedDemosPlugin()],
  server: {
    port: 5173,
    proxy: {
      "/cashtracking/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/cashtracking\/api/, ""),
      },
    },
  },
});
