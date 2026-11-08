// Buka preview produksi ke internet lewat ngrok supaya bisa dicoba di HP dengan HTTPS.
// Pakai: npm run coba:https. Token ngrok: npx ngrok config add-authtoken <TOKEN>, atau NGROK_AUTHTOKEN.
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { join } from "node:path";
import ngrok from "ngrok";

const PORT = Number(process.env.PORT ?? 4173);
const akar = process.cwd();
const tidur = (ms) => new Promise((r) => setTimeout(r, ms));

if (!existsSync(join(akar, "dist", "index.html"))) {
  console.error("Folder dist belum ada. Jalankan `npm run build` dulu, atau pakai `npm run coba:https`.");
  process.exit(1);
}

const preview = spawn(process.execPath, [join(akar, "node_modules", "vite", "bin", "vite.js"), "preview", "--port", String(PORT), "--strictPort"], {
  cwd: akar,
  stdio: ["ignore", "ignore", "inherit"],
});

let selesai = false;
async function berhenti(kode) {
  if (selesai) return;
  selesai = true;
  try { await ngrok.kill(); } catch { /* terowongan belum terbuka */ }
  preview.kill();
  process.exit(kode);
}
process.on("SIGINT", () => void berhenti(0));
process.on("SIGTERM", () => void berhenti(0));
preview.on("exit", (kode) => {
  if (!selesai) {
    console.error(`Preview berhenti sendiri (kode ${kode}). Apakah port ${PORT} sedang dipakai program lain?`);
    void berhenti(1);
  }
});

let siap = false;
for (let i = 0; i < 40 && !siap; i++) {
  try { siap = (await fetch(`http://127.0.0.1:${PORT}/`)).ok; } catch { await tidur(500); }
}
if (!siap) {
  console.error("Preview tidak menjawab dalam 20 detik.");
  await berhenti(1);
}

try {
  const url = await ngrok.connect({ addr: PORT, authtoken: process.env.NGROK_AUTHTOKEN || undefined });
  console.log("\nAplikasi siap dicoba di perangkat lain (HTTPS):\n");
  console.log("  " + url + "\n");
  console.log("Buka alamat itu di browser ponsel. Ngrok versi gratis menampilkan halaman peringatan sekali; pilih \"Visit Site\".");
  console.log("Tekan Ctrl+C untuk berhenti.\n");
} catch (galat) {
  const pesan = String(galat?.message ?? galat?.msg ?? galat);
  console.error("\nTerowongan ngrok gagal dibuka:", pesan);
  if (/auth|token|4018|401/i.test(pesan)) {
    console.error("\nNgrok butuh token. Daftar gratis di https://dashboard.ngrok.com lalu jalankan sekali:");
    console.error("  npx ngrok config add-authtoken <TOKEN>");
  }
  await berhenti(1);
}
