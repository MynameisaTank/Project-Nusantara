import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import type { IncomingMessage, ServerResponse } from "node:http";
import { serviceWorkerPrecache } from "./vite-sw";

/** Dev saja: cetak galat browser di terminal. */
function logGalatKeTerminal(): Plugin {
  return {
    name: "log-galat-ke-terminal",
    apply: "serve",
    configureServer(server) {
      server.middlewares.use("/__client-log", (req: IncomingMessage, res: ServerResponse) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end();
          return;
        }
        let data = "";
        req.on("data", (chunk: Buffer) => {
          data += chunk.toString();
        });
        req.on("end", () => {
          try {
            const { level, pesan, stack, waktu } = JSON.parse(data) as {
              level?: string;
              pesan?: string;
              stack?: string;
              waktu?: string;
            };
            const warna = level === "warn" ? "\x1b[33m" : "\x1b[31m";
            const label = `${warna}[klien:${level ?? "error"}]\x1b[0m`;
            console.log(`${label} ${waktu ?? ""} ${pesan ?? "(tanpa pesan)"}`);
            if (stack) console.log(stack);
          } catch (err) {
            console.log("[klien] payload log tidak valid:", err);
          }
          res.statusCode = 204;
          res.end();
        });
      });
    },
  };
}

// Host terowongan HTTPS untuk mencoba di HP (Vite memblokir host asing secara bawaan).
const HOST_TEROWONGAN = [".trycloudflare.com", ".ngrok-free.app", ".ngrok-free.dev", ".ngrok.io", ".loca.lt", ".lhr.life", ".serveousercontent.com"];

export default defineConfig({
  plugins: [react(), tailwindcss(), logGalatKeTerminal(), serviceWorkerPrecache()],
  base: "./",
  server: { allowedHosts: HOST_TEROWONGAN },
  preview: { allowedHosts: HOST_TEROWONGAN },
});
