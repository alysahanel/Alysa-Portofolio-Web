import { spawn } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("--- Starting Local Demo Environment (V2) ---");

function startProcess(command, args, name, cwd, envVars = {}) {
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

// 1. Start GAMS Server (Port 3001)
startProcess("node", ["server.js"], "GAMS", path.join(__dirname, "gams"), { PORT: "3001" });

// 2. Start Legal Server (Port 3009)
startProcess("node", ["backend/server.js"], "LEGAL", path.join(__dirname, "legal"), { PORT: "3009" });

// 3. Start CashTracking Server (Port 5000)
const pythonCmd = process.platform === "win32" ? "python" : "python3";
startProcess(pythonCmd, ["backend/app.py"], "CASH", path.join(__dirname, "CashTracking"), {
  PORT: "5000",
  RENDER: "true",
});

// 4. Start Local Proxy Server (Port 3000)
setTimeout(() => {
  console.log("--- Starting Proxy Server ---");
  startProcess("node", ["local-server.js"], "PROXY", __dirname, { PORT: "3000" });
  console.log(">>> ACCESS LOCAL DEMO AT: http://localhost:3000 <<<");
}, 2000);
