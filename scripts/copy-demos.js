import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`[copy-demos] Skipped missing directory: ${path.relative(ROOT, src)}`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. GAMS -> dist/gams
const gamsDist = path.join(DIST, "gams");
copyDir(path.join(ROOT, "gams", "public"), gamsDist);
if (fs.existsSync(path.join(gamsDist, "dashboard.html"))) {
  fs.copyFileSync(path.join(gamsDist, "dashboard.html"), path.join(gamsDist, "index.html"));
}

// 2. Legal Web -> dist/legal (+ shared /assets referenced by legal pages)
const legalDist = path.join(DIST, "legal");
copyDir(path.join(ROOT, "legal", "frontend", "public"), legalDist);
copyDir(path.join(ROOT, "legal", "frontend", "public", "assets"), path.join(DIST, "assets"));
if (fs.existsSync(path.join(legalDist, "dashboard.html"))) {
  fs.copyFileSync(path.join(legalDist, "dashboard.html"), path.join(legalDist, "index.html"));
}

// 3. CashTracking -> dist/cashtracking
copyDir(path.join(ROOT, "CashTracking", "frontend", "build"), path.join(DIST, "cashtracking"));

// 4. Healthcare Web -> dist/healthcare-web
copyDir(path.join(ROOT, "healthcare-web"), path.join(DIST, "healthcare-web"));

console.log("[copy-demos] Copied gams, legal, cashtracking, and healthcare-web into dist/");
