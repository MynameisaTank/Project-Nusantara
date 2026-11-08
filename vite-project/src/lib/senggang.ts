/** Jalankan saat browser senggang, paling lambat setelah `batas` ms. */
export function saatSenggang(fn: () => void, batas = 3000): void {
  if (typeof window.requestIdleCallback === "function") {
    window.requestIdleCallback(() => fn(), { timeout: batas });
  } else {
    window.setTimeout(fn, Math.min(batas, 1500));
  }
}
