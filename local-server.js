import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createProxyMiddleware } from "http-proxy-middleware";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_DIR = path.join(__dirname, "dist");

// --- GAMS Rewrites ---
app.use(
  "/gams/api",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
    pathRewrite: { "^/gams": "" },
    onError: (_err, _req, res) => {
      res.status(502).send("GAMS Backend (Port 3001) not running.");
    },
  })
);

app.use(
  "/api",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
    router: (req) => {
      const u = req.url || "";
      if (/^\/api\/(company|operational|safety|license-permit|regulatory|elibrary)/.test(u)) {
        return "http://localhost:3009";
      }
      return "http://localhost:3001";
    },
  })
);

app.use("/gams", express.static(path.join(__dirname, "gams/public")));
app.get(["/gams", "/gams/"], (_req, res) => {
  res.sendFile(path.join(__dirname, "gams/public", "dashboard.html"));
});

const gamsPages = ["login", "dashboard", "requests", "stock", "calendar", "accounts", "stock-report"];
gamsPages.forEach((p) => {
  app.get(`/${p}`, (_req, res) => {
    res.sendFile(path.join(__dirname, "gams/public", `${p}.html`));
  });
});
app.get("/dashboard.html", (_req, res) => {
  res.sendFile(path.join(__dirname, "legal/frontend/public", "dashboard.html"));
});

// --- Legal Web Rewrites ---
app.use(
  "/legal/api",
  createProxyMiddleware({
    target: "http://localhost:3009",
    changeOrigin: true,
    pathRewrite: { "^/legal": "" },
    onError: (_err, _req, res) => {
      res.status(502).send("Legal Web Backend (Port 3009) not running.");
    },
  })
);

app.use("/legal", express.static(path.join(__dirname, "legal/frontend/public")));
app.use("/assets", express.static(path.join(__dirname, "legal/frontend/public/assets")));
app.get(["/legal", "/legal/"], (_req, res) => {
  res.sendFile(path.join(__dirname, "legal/frontend/public", "dashboard.html"));
});

const legalPages = ["license-permit", "regulatory", "elibrary", "operational", "company", "safety"];
legalPages.forEach((p) => {
  app.get([`/legal/${p}`, `/${p}`, `/${p}.html`], (_req, res) => {
    res.sendFile(path.join(__dirname, "legal/frontend/public", `${p}.html`));
  });
});

// --- CashTracking Rewrites ---
app.use(
  "/cashtracking/api",
  createProxyMiddleware({
    target: "http://localhost:5000",
    changeOrigin: true,
    pathRewrite: { "^/cashtracking/api": "" },
    onError: (_err, _req, res) => {
      res.status(502).send("CashTracking Backend (Port 5000) not running.");
    },
  })
);

app.use("/cashtracking", express.static(path.join(__dirname, "CashTracking/frontend/build")));
app.get("/cashtracking/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "CashTracking/frontend/build/index.html"));
});

// --- Healthcare Web ---
app.use("/healthcare-web", express.static(path.join(__dirname, "healthcare-web")));

// --- Compiled Vite Portfolio (dist/) ---
app.use(express.static(DIST_DIR));
app.get("*", (_req, res) => {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`\nPortfolio V2 Server running at http://localhost:${PORT}`);
  console.log(`- GAMS:         http://localhost:${PORT}/gams/`);
  console.log(`- Legal:        http://localhost:${PORT}/legal/`);
  console.log(`- CashTracking: http://localhost:${PORT}/cashtracking/`);
  console.log(`- Healthcare:   http://localhost:${PORT}/healthcare-web/`);
});
