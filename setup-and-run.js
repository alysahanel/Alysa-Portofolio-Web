import { spawn, execSync } from "child_process";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("--- Setting up and Starting Local Demo Environment (V2) ---");

function installDeps(dir, name) {
  if (fs.existsSync(path.join(dir, "package.json")) && !fs.existsSync(path.join(dir, "node_modules"))) {
    console.log(`[${name}] Installing Node dependencies...`);
    try {
      execSync("npm install", { cwd: dir, stdio: "inherit" });
      console.log(`[${name}] Dependencies installed.`);
    } catch (e) {
      console.error(`[${name}] Failed to install dependencies:`, e.message);
    }
  } else {
    console.log(`[${name}] Dependencies already installed (node_modules exists).`);
  }
}

function installPythonDeps(dir, name) {
  const rootReq = path.join(__dirname, "requirements.txt");
  const reqFile = fs.existsSync(rootReq) ? rootReq : path.join(dir, "requirements.txt");
  if (fs.existsSync(reqFile)) {
    console.log(`[${name}] Installing Python dependencies from ${path.basename(reqFile)}...`);
    try {
      const pythonCmd = process.platform === "win32" ? "python" : "python3";
      execSync(`${pythonCmd} -m pip install -r "${reqFile}"`, { cwd: dir, stdio: "inherit" });
      console.log(`[${name}] Python dependencies installed.`);
    } catch (e) {
      console.error(`[${name}] Failed to install Python dependencies (pip might be missing):`, e.message);
    }
  }
}

function ensureBuiltDist() {
  const distIndex = path.join(__dirname, "dist", "index.html");
  if (!fs.existsSync(distIndex)) {
    console.log("[ROOT] Building Vite production bundle (dist/)...");
    execSync("npm run build", { cwd: __dirname, stdio: "inherit" });
  }
}

function startProcess(command, args, name, cwd, envVars = {}) {
  console.log(`[${name}] Starting server...`);
  const proc = spawn(command, args, {
    cwd,
    shell: true,
    stdio: "pipe",
    env: { ...process.env, ...envVars },
  });

  proc.stdout.on("data", (data) => {
    const lines = data.toString().trim().split("\n");
    lines.forEach((line) => console.log(`[${name}] ${line}`));
  });

  proc.stderr.on("data", (data) => {
    const lines = data.toString().trim().split("\n");
    lines.forEach((line) => console.error(`[${name}] ERROR: ${line}`));
  });

  proc.on("close", (code) => {
    console.log(`[${name}] exited with code ${code}`);
  });

  return proc;
}

// 1. Install Dependencies & Ensure Portfolio Bundle
installDeps(__dirname, "ROOT");
ensureBuiltDist();
installDeps(path.join(__dirname, "gams"), "GAMS");
installDeps(path.join(__dirname, "legal", "backend"), "LEGAL");
installPythonDeps(path.join(__dirname, "CashTracking", "backend"), "CASH");

// 2. Start Servers
startProcess("node", ["server.js"], "GAMS", path.join(__dirname, "gams"), { PORT: "3001" });
startProcess("node", ["backend/server.js"], "LEGAL", path.join(__dirname, "legal"), { PORT: "3009" });

const pythonCmd = process.platform === "win32" ? "python" : "python3";
startProcess(pythonCmd, ["backend/app.py"], "CASH", path.join(__dirname, "CashTracking"), {
  PORT: "5000",
  RENDER: "true",
});

// 3. Start Proxy + Portfolio Server (Port 3000)
setTimeout(() => {
  console.log("--- Starting Proxy Server ---");
  startProcess("node", ["local-server.js"], "PROXY", __dirname, { PORT: "3000" });
  console.log(">>> ACCESS LOCAL DEMO AT: http://localhost:3000 <<<");
}, 3000);
