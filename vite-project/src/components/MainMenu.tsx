import FlexCarousel, { type FlexCarouselItem } from "./reactbits/FlexCarousel";
import { lazy, Suspense, useMemo, useState, type CSSProperties } from "react";
// AeroShards (dan pustaka vgpu di belakangnya, sekitar 210 KB) hanya diunduh di perangkat yang menjalankannya.
const AeroShards = lazy(() => import("./reactbits/AeroShards"));
import StrokeText from "./reactbits/StrokeText";
import { NoiseBackground } from "./ui/noise-background";
import { LABEL_TINGKAT, type ModeGrafis, type Tingkat } from "../lib/perangkat";
import { GALERI_MENU, GAMBAR_MARQUEE, MARQUEE_RINGAN } from "../data/asetGrafis";
import { layarKecil, useLayarKecil } from "../lib/layar";
import { useMarquee } from "../lib/marquee";
import { pasangAplikasi, perluPetunjukIos, usePwa } from "../lib/pwa";
import { ThreeDMarquee } from "./ui/3d-marquee";
import "../styles/menu-latar.css";
import "../styles/menu-aero.css";

// Bingkai noise untuk tombol menu: warna cahaya diambil dari palet teal dan krem di latar menu
const MENU_FRAME = "w-fit rounded-full p-[3px] bg-[#1b3b34] dark:bg-[#1b3b34] shadow-none";
// border default: gradien hijau → teal → biru yang bergerak
const MENU_GLOW = ["#4ade80", "#2dd4bf", "#60a5fa"];
// tombol "Mulai!" sudah berwarna teal, jadi bordernya gradien hitam → teal
const MENU_GLOW_PRIMARY = ["#000000", "#0b1f1c", "#2dd4bf"];
const MENU_GLOW_STRENGTH = 2.4;
interface Props {
  onStart: () => void;
  onChooseEra: () => void;
  onOpenMateri?: () => void;
  onOpenKuis?: (asal: DOMRect) => void;
  /** tingkat grafik yang dipakai sekarang (sudah dibatasi kemampuan perangkat) */
  tingkat: Tingkat;
  /** pilihan pengguna di Pengaturan: otomatis atau tingkat tertentu */
  mode: ModeGrafis;
  /** tingkat yang dipilih otomatis untuk perangkat ini */
  terdeteksi: Tingkat;
  onModeChange: (mode: ModeGrafis) => void;
}

// Alamat gambar galeri ada di data/asetGrafis.ts (thumbnail 960px), supaya daftar unduhan awal dan tampilan selalu sama.
const historicalItems: FlexCarouselItem[] = [
  { src: GALERI_MENU.borobudur, alt: 'Relief Candi Borobudur dari masa Wangsa Syailendra', title: 'Warisan Hindu-Buddha', subtitle: 'Abad ke-8 hingga ke-13' },
  { src: GALERI_MENU.sriwijaya, alt: 'Arca Avalokiteshvara bergaya Melayu dari masa Sriwijaya', title: 'Sriwijaya', subtitle: 'Jaringan maritim Sumatra' },
  { src: GALERI_MENU.singhasari, alt: 'Arca Prajnaparamita dari Jawa masa Singhasari', title: 'Singhasari', subtitle: 'Jawa Timur · abad ke-13' },
  { src: GALERI_MENU.majapahit, alt: 'Candi Bajangratu, peninggalan Majapahit di Trowulan', title: 'Majapahit', subtitle: 'Jawa Timur · abad ke-13–15' },
  { src: GALERI_MENU.rempah, alt: 'Gapura Wringin Lawang, Trowulan', title: 'Jalur Rempah', subtitle: 'Perdagangan antarpulau dan samudra' },
  { src: GALERI_MENU.kolonial, alt: 'Peta Batavia dan kastil pada 1681', title: 'Kolonialisme', subtitle: 'Batavia · 1681' },
  { src: GALERI_MENU.proklamasi, alt: 'Soekarno dan Mohammad Hatta membacakan Proklamasi Kemerdekaan', title: 'Proklamasi', subtitle: '17 Agustus 1945' },
  { src: GALERI_MENU.merdeka, alt: 'Pengibaran bendera Merah Putih pada 17 Agustus 1945', title: 'Indonesia Merdeka', subtitle: 'Lahirnya sebuah republik' }
];

const SHARD_TOTAL_KEY = "menu-shard-total";
const SHARD_TOTAL_DEFAULT = 1100;
/** Default di layar sempit: lebih sedikit shard supaya ringan di GPU ponsel. */
const SHARD_TOTAL_DEFAULT_KECIL = 450;
const SHARD_TOTAL_MIN = 100;
const SHARD_TOTAL_MAX = 2000;
const HERO_SHARE = 500 / 1100;

function readShardTotal(): number {
  try {
    const saved = Number(window.localStorage.getItem(SHARD_TOTAL_KEY));
    if (Number.isFinite(saved) && saved >= SHARD_TOTAL_MIN && saved <= SHARD_TOTAL_MAX) return saved;
  } catch { /* localStorage tidak tersedia: pakai default */ }
  return layarKecil() ? SHARD_TOTAL_DEFAULT_KECIL : SHARD_TOTAL_DEFAULT;
}

function saveShardTotal(value: number) {
  try { window.localStorage.setItem(SHARD_TOTAL_KEY, String(value)); } catch { /* abaikan */ }
}

export function MainMenu({onChooseEra, onOpenMateri, onOpenKuis, tingkat, mode, terdeteksi, onModeChange}:Props){
  // Tombol "Mulai!" menggulir halus ke bagian Jejak panjang Nusantara
  const scrollToJejak = () => {
    const target = document.getElementById("jejak");
    if (!target) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    // cari wadah yang benar-benar bisa digulir (di proyek ini #root)
    let scroller: HTMLElement | null = target.parentElement;
    while (scroller && scroller !== document.body && !(scroller.scrollHeight > scroller.clientHeight + 1 && /(auto|scroll)/.test(getComputedStyle(scroller).overflowY))) {
      scroller = scroller.parentElement;
    }
    const container: HTMLElement = scroller ?? (document.scrollingElement as HTMLElement);
    const start = container.scrollTop;
    const offset = target.getBoundingClientRect().top - container.getBoundingClientRect().top;
    const end = start + offset + 90; // sedikit lebih jauh ke bawah dari batas atas Jejak panjang
    if (reduced) { container.scrollTop = end; return; }
    const duration = 1800;
    const t0 = performance.now();
    const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const step = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      container.scrollTop = start + (end - start) * ease(t);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const [shardsOk, setShardsOk] = useState(true);
  const [shardTotal, setShardTotal] = useState(readShardTotal);
  const [draft, setDraft] = useState(shardTotal);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const kecil = useLayarKecil();
  const marquee = useMarquee();
  const pwa = usePwa();
  // Layar sempit memakai lebih sedikit gambar latar dan rasio piksel lebih rendah supaya ringan di ponsel.
  const gambarMarquee = useMemo(() => (kecil ? GAMBAR_MARQUEE.slice(0, MARQUEE_RINGAN) : GAMBAR_MARQUEE), [kecil]);
  const dprShards = kecil ? 1 : 1.5;
  const heroCount = Math.round(shardTotal * HERO_SHARE);
  const commitShardTotal = () => {
    setShardTotal(draft);
    saveShardTotal(draft);
  };
  return <main className="landing-screen landing-screen--centered landing-scroll-page"><div className="landing-grain" aria-hidden="true"/><header className="landing-nav landing-nav--center"><div className="landing-brand-mark">N</div></header>
    <div className="menu-settings">
      <button type="button" className="menu-settings-toggle" aria-expanded={settingsOpen} onClick={() => { setDraft(shardTotal); setSettingsOpen(open => !open); }}>Pengaturan</button>
      {settingsOpen && (
        <aside className="menu-settings-panel" role="dialog" aria-label="Pengaturan">
          <div className="menu-settings-head">
            <strong>Pengaturan</strong>
            <button type="button" aria-label="Tutup" onClick={() => setSettingsOpen(false)}>×</button>
          </div>
          <h3 className="menu-settings-section">Grafik</h3>
          <label className="menu-settings-row">
            <span>Jumlah shards <em>{draft}</em></span>
            <input
              type="range"
              min={SHARD_TOTAL_MIN}
              max={SHARD_TOTAL_MAX}
              step={50}
              value={draft}
              onChange={(event) => setDraft(Number(event.target.value))}
              onPointerUp={commitShardTotal}
              onKeyUp={commitShardTotal}
              onBlur={commitShardTotal}
            />
          </label>
          <p className="menu-settings-hint">Diterapkan saat slider dilepas.</p>
          <label className="menu-settings-row">
            <span>Mode grafis <em>{LABEL_TINGKAT[tingkat]}</em></span>
            <select value={mode} onChange={(event) => onModeChange(event.target.value as ModeGrafis)}>
              <option value="otomatis">Otomatis (terdeteksi: {LABEL_TINGKAT[terdeteksi]})</option>
              <option value="tinggi">Tinggi (WebGPU dan WebGL2)</option>
              <option value="sedang">Sedang (WebGL2)</option>
              <option value="dasar">Dasar (tanpa WebGL)</option>
            </select>
          </label>
          <p className="menu-settings-hint">Pilihan yang melebihi kemampuan perangkat otomatis diturunkan.</p>
          {(pwa.bisaDipasang || pwa.terpasang || pwa.tersimpan || perluPetunjukIos()) && (
            <>
              <h3 className="menu-settings-section">Aplikasi</h3>
              <div className="menu-settings-aplikasi">
                {pwa.bisaDipasang && (
                  <button type="button" onClick={() => void pasangAplikasi()}>Pasang aplikasi</button>
                )}
                {pwa.terpasang && <p className="menu-settings-hint">Aplikasi sudah terpasang di perangkat ini.</p>}
                {!pwa.terpasang && perluPetunjukIos() && (
                  <p className="menu-settings-hint">Di iPhone atau iPad: ketuk Bagikan di Safari, lalu pilih “Tambahkan ke Layar Utama”.</p>
                )}
                {pwa.tersimpan && (
                  <p className="menu-settings-hint">Kode aplikasi sudah tersimpan di perangkat dan tetap terbuka tanpa internet. Peta dan sebagian gambar tetap butuh sambungan.</p>
                )}
              </div>
            </>
          )}
        </aside>
      )}
    </div>
    <div className="landing-shards-bg" aria-hidden="true">
        {/* Latar tetap sebesar layar (tidak ikut menggulir) supaya selalu menutupi seluruh layar. */}
        <div className="menu-marquee">
          <div
            className={"menu-marquee__isi" + (marquee.putar ? " is-putar" : "")}
            style={{ "--skala-marquee": marquee.skala, "--layar-lebar": `${marquee.lebar}px`, "--layar-tinggi": `${marquee.tinggi}px` } as CSSProperties}
          >
            <ThreeDMarquee images={gambarMarquee} className="h-full w-full rounded-none" />
          </div>
          <div className="menu-marquee-redup" />
        </div>
        {shardsOk && tingkat === "tinggi" && (
          <Suspense fallback={null}>
          <AeroShards
            shardColor="#3a6f6b"
            accentColor="#7fc4bf"
            placement="full"
            material="glass"
            markers="plus"
            key={`page-${shardTotal - heroCount}`}
            count={shardTotal - heroCount}
            depthOfField={0.75}
            glow={0.3}
            vignette={0.35}
            dpr={dprShards}
            mouseInteraction
            pulseOnClick
            holdToGather
            onError={(error: Error) => {
              console.error("[AeroShards] gagal dimuat:", error);
              setShardsOk(false);
            }}
          />
          </Suspense>
        )}
    </div>
    <div className="menu-aero-hero-shards" aria-hidden="true">
      {shardsOk && tingkat === "tinggi" && (
        <Suspense fallback={null}>
        <AeroShards
          shardColor="#3a6f6b"
          accentColor="#7fc4bf"
          placement="full"
          material="glass"
          markers="plus"
          key={`hero-${heroCount}`}
          count={heroCount}
          depthOfField={0.75}
          glow={0.3}
          vignette={0.35}
          dpr={dprShards}
          mouseInteraction
          pulseOnClick
          holdToGather
          onError={(error: Error) => {
            console.error("[AeroShards] gagal dimuat:", error);
            setShardsOk(false);
          }}
        />
        </Suspense>
      )}
    </div>
    <section className="menu-aero">
      <div className="menu-aero-content">
        <h1 className="menu-aero-title"><StrokeText text="Project: Nusantara" fillColor="#f4eddd" strokeColor="#7fc4bf" strokeWidth={1.2} fontFamily='"IM Fell English", Georgia, serif' fontWeight={400} fontSize={150} letterSpacing={-4} drawDuration={1.8} fillDelay={0.3} stagger={0.12} fillMode="wipe" wipeFrom="bottom" trigger="mount" /></h1>
        <div className="landing-actions landing-actions--center"><NoiseBackground containerClassName={MENU_FRAME} gradientColors={MENU_GLOW_PRIMARY} glow={MENU_GLOW_STRENGTH}><button className="jelly-button jelly-button--primary" onClick={scrollToJejak}>Mulai!</button></NoiseBackground><NoiseBackground containerClassName={MENU_FRAME} gradientColors={MENU_GLOW} glow={MENU_GLOW_STRENGTH}><button className="jelly-button" onClick={onChooseEra}>Pilih era</button></NoiseBackground>{onOpenMateri && <NoiseBackground containerClassName={MENU_FRAME} gradientColors={MENU_GLOW} glow={MENU_GLOW_STRENGTH}><button type="button" className="jelly-button" onClick={onOpenMateri}>Materi ujian</button></NoiseBackground>}{onOpenKuis && <NoiseBackground containerClassName={MENU_FRAME} gradientColors={MENU_GLOW} glow={MENU_GLOW_STRENGTH}><button type="button" className="jelly-button" onClick={(e) => onOpenKuis?.(e.currentTarget.getBoundingClientRect())}>Mode kuis</button></NoiseBackground>}</div>
      </div>
    </section><section id="jejak" className="landing-below-fold landing-history-section"><div className="landing-history-heading"><div className="landing-below-copy"><h2>Jejak panjang <em>Nusantara.</em></h2><p>Dari kerajaan maritim dan pusat perdagangan hingga lahirnya republik. Geser galeri untuk melintasi zaman, lalu pilih era untuk memainkan kembali keputusan-keputusan yang membentuk sejarah.</p></div></div><div className="menu-jejak-actions"><NoiseBackground containerClassName={MENU_FRAME} gradientColors={MENU_GLOW} glow={MENU_GLOW_STRENGTH}><button type="button" className="jelly-button" onClick={onChooseEra}>Pilih era</button></NoiseBackground>{onOpenMateri && <NoiseBackground containerClassName={`${MENU_FRAME} ml-3`} gradientColors={MENU_GLOW} glow={MENU_GLOW_STRENGTH}><button type="button" className="jelly-button" onClick={onOpenMateri}>Materi ujian</button></NoiseBackground>}</div><FlexCarousel items={historicalItems} intro="rise" cardHeight={0.72} gap={18} radius={3} squeeze={0.18} focusOnClick captions /></section></main>}
