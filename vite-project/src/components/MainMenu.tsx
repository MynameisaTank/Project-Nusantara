import FlexCarousel, { type FlexCarouselItem } from "./reactbits/FlexCarousel";
import { lazy, Suspense, useEffect, useMemo, useState, type CSSProperties } from "react";
// AeroShards (sekitar 210 KB) hanya diunduh di perangkat yang memakainya.
const AeroShards = lazy(() => import("./reactbits/AeroShards"));
import { NoiseBackground } from "./ui/noise-background";
import { LABEL_TINGKAT, tingkatHemat, type ModeGrafis, type Tingkat } from "../lib/perangkat";
import { GALERI_MENU, GALERI_MENU_KECIL, GAMBAR_MARQUEE, GAMBAR_MARQUEE_KECIL, MARQUEE_RINGAN } from "../data/asetGrafis";
import { layarKecil, useLayarKecil } from "../lib/layar";
import { useMarquee } from "../lib/marquee";
import { pasangAplikasi, perluPetunjukIos, usePwa } from "../lib/pwa";
import { ThreeDMarquee } from "./ui/3d-marquee";
import { VerticalFlow } from "./ui/vertical-flow";
import { setEfek, setMusik, usePengaturanSuara } from "../lib/suara";
import "../styles/menu-latar.css";
import "../styles/menu-aero.css";
import "../styles/menu-bento.css";

const MENU_FRAME = "w-fit rounded-full p-[3px] bg-[#1b3b34] dark:bg-[#1b3b34] shadow-none";
const MENU_GLOW = ["#4ade80", "#2dd4bf", "#60a5fa"];
const MENU_GLOW_PRIMARY = ["#000000", "#0b1f1c", "#2dd4bf"];
const MENU_GLOW_STRENGTH = 2.4;
interface Props {
  onStart: () => void;
  /** `asal` dipakai untuk transisi clip di ponsel */
  onChooseEra: (asal?: DOMRect) => void;
  onOpenMateri?: (asal?: DOMRect) => void;
  onOpenKuis?: (asal: DOMRect) => void;
  tingkat: Tingkat;
  mode: ModeGrafis;
  terdeteksi: Tingkat;
  onModeChange: (mode: ModeGrafis) => void;
  diagnosis?: string;
}

const GALERI: { kunci: keyof typeof GALERI_MENU; alt: string; title: string; subtitle: string }[] = [
  { kunci: "borobudur", alt: 'Relief Candi Borobudur dari masa Wangsa Syailendra', title: 'Warisan Hindu-Buddha', subtitle: 'Abad ke-8 hingga ke-13' },
  { kunci: "sriwijaya", alt: 'Arca Avalokiteshvara bergaya Melayu dari masa Sriwijaya', title: 'Sriwijaya', subtitle: 'Jaringan maritim Sumatra' },
  { kunci: "singhasari", alt: 'Arca Prajnaparamita dari Jawa masa Singhasari', title: 'Singhasari', subtitle: 'Jawa Timur · abad ke-13' },
  { kunci: "majapahit", alt: 'Candi Bajangratu, peninggalan Majapahit di Trowulan', title: 'Majapahit', subtitle: 'Jawa Timur · abad ke-13–15' },
  { kunci: "rempah", alt: 'Gapura Wringin Lawang, Trowulan', title: 'Jalur Rempah', subtitle: 'Perdagangan antarpulau dan samudra' },
  { kunci: "kolonial", alt: 'Peta Batavia dan kastil pada 1681', title: 'Kolonialisme', subtitle: 'Batavia · 1681' },
  { kunci: "proklamasi", alt: 'Soekarno dan Mohammad Hatta membacakan Proklamasi Kemerdekaan', title: 'Proklamasi', subtitle: '17 Agustus 1945' },
  { kunci: "merdeka", alt: 'Pengibaran bendera Merah Putih pada 17 Agustus 1945', title: 'Indonesia Merdeka', subtitle: 'Lahirnya sebuah republik' }
];

const SHARD_TOTAL_KEY = "menu-shard-total";
const SHARD_TOTAL_DEFAULT = 1100;
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

export function MainMenu({onChooseEra, onOpenMateri, onOpenKuis, tingkat, mode, terdeteksi, onModeChange, diagnosis}:Props){
  const scrollToJejak = () => {
    const target = document.getElementById("jejak");
    if (!target) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    // yang bisa digulir di proyek ini adalah #root
    let scroller: HTMLElement | null = target.parentElement;
    while (scroller && scroller !== document.body && !(scroller.scrollHeight > scroller.clientHeight + 1 && /(auto|scroll)/.test(getComputedStyle(scroller).overflowY))) {
      scroller = scroller.parentElement;
    }
    const container: HTMLElement = scroller ?? (document.scrollingElement as HTMLElement);
    const start = container.scrollTop;
    const offset = target.getBoundingClientRect().top - container.getBoundingClientRect().top;
    const end = start + offset + 90;
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
  const pwa = usePwa();
  const suara = usePengaturanSuara();
  const marquee = useMarquee();
  const [penuh, setPenuh] = useState(() => typeof document !== "undefined" && !!document.fullscreenElement);
  useEffect(() => {
    const ubah = () => setPenuh(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", ubah);
    return () => document.removeEventListener("fullscreenchange", ubah);
  }, []);
  const layarPenuhDidukung = typeof document !== "undefined" && typeof document.documentElement.requestFullscreen === "function";
  const togglePenuh = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
    } catch {
      /* ditolak browser: tetap di tampilan biasa */
    }
  };
  // Ponsel dan perangkat lemah memakai gambar lebih kecil dan lebih sedikit.
  const hemat = tingkatHemat(tingkat);
  const ringkas = kecil || hemat;
  const gambarMarquee = useMemo(() => (ringkas ? GAMBAR_MARQUEE_KECIL.slice(0, MARQUEE_RINGAN) : GAMBAR_MARQUEE), [ringkas]);
  const historicalItems = useMemo<FlexCarouselItem[]>(
    () => GALERI.map(({ kunci, ...sisa }) => ({ ...sisa, src: (ringkas ? GALERI_MENU_KECIL : GALERI_MENU)[kunci] })),
    [ringkas],
  );
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
              <option value="ringan">Ringan (HP lama atau RAM kecil)</option>
              <option value="dasar">Dasar (tanpa WebGL)</option>
            </select>
          </label>
          <p className="menu-settings-hint">Pilihan yang melebihi kemampuan perangkat otomatis diturunkan.</p>
          {diagnosis && <p className="menu-settings-hint">Deteksi: {diagnosis}</p>}
          <h3 className="menu-settings-section">Suara</h3>
          <label className="menu-settings-row menu-settings-centang">
            <span>Musik</span>
            <input type="checkbox" checked={suara.musik} onChange={(event) => setMusik(event.target.checked)} />
          </label>
          <label className="menu-settings-row menu-settings-centang">
            <span>Efek suara tombol</span>
            <input type="checkbox" checked={suara.efek} onChange={(event) => setEfek(event.target.checked)} />
          </label>
          {layarPenuhDidukung && (
            <>
              <h3 className="menu-settings-section">Tampilan</h3>
              <div className="menu-settings-aplikasi">
                <button type="button" onClick={() => void togglePenuh()}>{penuh ? "Keluar layar penuh" : "Layar penuh"}</button>
              </div>
            </>
          )}
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
        <div className="menu-marquee">
          {/* Marquee 3D hanya untuk layar lebar di tingkat Tinggi; di layar tegak geraknya terlihat menyamping. */}
          {tingkat === "tinggi" && !kecil ? (
            <div
              className={"menu-marquee__isi" + (marquee.putar ? " is-putar" : "")}
              style={{ "--skala-marquee": marquee.skala, "--layar-lebar": `${marquee.lebar}px`, "--layar-tinggi": `${marquee.tinggi}px` } as CSSProperties}
            >
              <ThreeDMarquee images={gambarMarquee} className="h-full w-full rounded-none" reducedMotion={hemat ? "always" : "user"} />
            </div>
          ) : (
            <VerticalFlow images={gambarMarquee} kolom={kecil ? 4 : 6} beku={hemat} tinggiGambar={kecil ? 110 : 180} />
          )}
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
        <div className="menu-bento">
          <div className="menu-bento__kartu menu-bento__kartu--utama">
            <h1 className="menu-bento__judul">Project: Nusantara</h1>
            <p className="menu-bento__sub">Peta sejarah Nusantara yang interaktif, dari kerajaan maritim sampai republik.</p>
          </div>
          <button type="button" className="menu-bento__fitur" onClick={(e) => onChooseEra(e.currentTarget.getBoundingClientRect())}>
            <img src={GALERI_MENU_KECIL.majapahit} alt="" loading="lazy" decoding="async" />
            <span className="menu-bento__label">Pilih era</span>
          </button>
          <button type="button" className="menu-bento__fitur" onClick={scrollToJejak}>
            <img src={GALERI_MENU_KECIL.sriwijaya} alt="" loading="lazy" decoding="async" />
            <span className="menu-bento__label">Jejak panjang</span>
          </button>
          {onOpenMateri && (
            <button type="button" className="menu-bento__fitur" onClick={(e) => onOpenMateri(e.currentTarget.getBoundingClientRect())}>
              <img src={GALERI_MENU_KECIL.proklamasi} alt="" loading="lazy" decoding="async" />
              <span className="menu-bento__label">Materi ujian</span>
            </button>
          )}
          {onOpenKuis && (
            <button type="button" className="menu-bento__fitur" onClick={(e) => onOpenKuis(e.currentTarget.getBoundingClientRect())}>
              <img src={GALERI_MENU_KECIL.kolonial} alt="" loading="lazy" decoding="async" />
              <span className="menu-bento__label">Mode kuis</span>
            </button>
          )}
        </div>
        <div className="landing-actions landing-actions--center"><NoiseBackground containerClassName={MENU_FRAME} gradientColors={MENU_GLOW_PRIMARY} glow={MENU_GLOW_STRENGTH}><button className="jelly-button jelly-button--primary" onClick={scrollToJejak}>Mulai!</button></NoiseBackground><NoiseBackground containerClassName={MENU_FRAME} gradientColors={MENU_GLOW} glow={MENU_GLOW_STRENGTH}><button className="jelly-button" onClick={() => onChooseEra()}>Pilih era</button></NoiseBackground>{onOpenMateri && <NoiseBackground containerClassName={MENU_FRAME} gradientColors={MENU_GLOW} glow={MENU_GLOW_STRENGTH}><button type="button" className="jelly-button" onClick={() => onOpenMateri()}>Materi ujian</button></NoiseBackground>}{onOpenKuis && <NoiseBackground containerClassName={MENU_FRAME} gradientColors={MENU_GLOW} glow={MENU_GLOW_STRENGTH}><button type="button" className="jelly-button" onClick={(e) => onOpenKuis?.(e.currentTarget.getBoundingClientRect())}>Mode kuis</button></NoiseBackground>}</div>
      </div>
    </section><section id="jejak" className="landing-below-fold landing-history-section"><div className="landing-history-heading"><div className="landing-below-copy"><h2>Jejak panjang <em>Nusantara.</em></h2><p>Dari kerajaan maritim dan pusat perdagangan hingga lahirnya republik. Geser galeri untuk melintasi zaman, lalu pilih era untuk memainkan kembali keputusan-keputusan yang membentuk sejarah.</p></div></div><div className="menu-jejak-actions"><NoiseBackground containerClassName={MENU_FRAME} gradientColors={MENU_GLOW} glow={MENU_GLOW_STRENGTH}><button type="button" className="jelly-button" onClick={() => onChooseEra()}>Pilih era</button></NoiseBackground>{onOpenMateri && <NoiseBackground containerClassName={`${MENU_FRAME} ml-3`} gradientColors={MENU_GLOW} glow={MENU_GLOW_STRENGTH}><button type="button" className="jelly-button" onClick={() => onOpenMateri()}>Materi ujian</button></NoiseBackground>}</div><FlexCarousel items={historicalItems} intro="rise" cardHeight={0.72} gap={18} radius={3} squeeze={0.18} focusOnClick captions /></section></main>}
