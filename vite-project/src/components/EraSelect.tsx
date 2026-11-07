import { useEffect, useMemo, useRef } from "react";
import type { Tingkat } from "../lib/perangkat";
import { GALERI_MENU } from "../data/asetGrafis";
import { useLayarKecil } from "../lib/layar";
import GradientASCII from "./reactbits/GradientASCII";
import SphereGallery, { type SphereGalleryHandle } from "./reactbits/SphereGallery";
import { SplitText } from "./SplitText";
import { NoiseBackground } from "./ui/noise-background";
import "../styles/era-carousel.css";
import "../styles/sphere-gallery.css";

interface Props { onBack: () => void; onSelectEra: (id: string) => void; onReady?: () => void; tingkat?: Tingkat; }

const eras = [
  { id: "era-1", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Candi_Bajangratu_Majapahit_%2838451474292%29.jpg/960px-Candi_Bajangratu_Majapahit_%2838451474292%29.jpg", label: "Dari Majapahit ke Perdagangan Global", description: "1200—1617 M", available: true },
  { id: "era-2", image: GALERI_MENU.kolonial, label: "Perdagangan dan Kekuasaan Kolonial", description: "1600—1800 M", available: true },
  { id: "era-3", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Indonesia_declaration_of_independence_17_August_1945.jpg/960px-Indonesia_declaration_of_independence_17_August_1945.jpg", label: "Kolonialisme dan Zaman Modern", description: "1800—2026 M", available: true }
] as const;


// Setiap tile = satu tempat. `era` mengacu ke indeks di `eras`.
// Gambar disusun berselang-seling antar era agar era lain mudah dijangkau tanpa menggulir jauh.
// Setiap gambar dipilih dari tempat yang tanggalnya berada dalam rentang era tersebut.
const ERA_FRAME_NAV = "w-fit rounded-full p-[6px] bg-[#2a2219] dark:bg-[#2a2219] shadow-none";
const ERA_FRAME_ARROW = "w-fit rounded-full p-[2px] bg-[#111211] dark:bg-[#111211] shadow-none";
const ERA_GLOW = ["#f4a261", "#d8b78c", "#e76f51"];

const MENU_SOURCES = [
  { eraIndex: 0, place: "Candi Bajangratu, Trowulan", image: eras[0].image },
  { eraIndex: 1, place: "Batavia (Jakarta)", image: eras[1].image },
  { eraIndex: 0, place: "Candi Singhasari, Malang", image: `https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Singhasari_Temple.jpg/960px-Singhasari_Temple.jpg` },
  { eraIndex: 1, place: "Pelabuhan Sunda Kelapa, Jakarta", image: `https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Collectie_NMvWereldculturen%2C_TM-20028100%2C_Dia%2C_%27Buginese_prauwen_in_de_haven_Sunda_Kelapa%27%2C_fotograaf_Henk_van_Rinsum%2C_1980.jpg/960px-Collectie_NMvWereldculturen%2C_TM-20028100%2C_Dia%2C_%27Buginese_prauwen_in_de_haven_Sunda_Kelapa%27%2C_fotograaf_Henk_van_Rinsum%2C_1980.jpg` },
  { eraIndex: 0, place: "Masjid Agung Demak, Jawa Tengah", image: `https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Masjid_Agung_Demak_DiKab.Demak_Jateng_Indonesia.jpg/960px-Masjid_Agung_Demak_DiKab.Demak_Jateng_Indonesia.jpg` },
  { eraIndex: 1, place: "Banda Neira, Maluku", image: `https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/AMH-6165-NA_Bird%27s_eye_view_of_Bandanaira.jpg/960px-AMH-6165-NA_Bird%27s_eye_view_of_Bandanaira.jpg` },
  { eraIndex: 0, place: "Candi Jabung, Probolinggo", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Relief%2C_Candi_Jabung%2C_Paiton%2C_Probolinggo%2C_East_Java%2C_2017-09-14_02.jpg/960px-Relief%2C_Candi_Jabung%2C_Paiton%2C_Probolinggo%2C_East_Java%2C_2017-09-14_02.jpg" },
  { eraIndex: 1, place: "A Famosa, Melaka", image: `https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/A_Famosa_Fortress_Melaka_2.jpg/960px-A_Famosa_Fortress_Melaka_2.jpg` },
  { eraIndex: 2, place: "Proklamasi, Jakarta", image: eras[2].image },
  { eraIndex: 0, place: "Istana Pagaruyung, Sumatera Barat", image: `https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Istana_Pagaruyung_17.jpg/960px-Istana_Pagaruyung_17.jpg` },
  { eraIndex: 1, place: "Benteng Oranje, Ternate", image: `https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/AMH-2652-NA_Fort_Oranje_and_the_eastern_coast_of_Ternate.jpg/960px-AMH-2652-NA_Fort_Oranje_and_the_eastern_coast_of_Ternate.jpg` },
  { eraIndex: 0, place: "Benteng Kastela, Ternate", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Benteng_Kastela_di_Kastela%2C_Ternate_7.jpg/960px-Benteng_Kastela_di_Kastela%2C_Ternate_7.jpg" },
  { eraIndex: 1, place: "Masjid Agung Banten Lama, Banten", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Masjid_agung_banten_lama.jpg/960px-Masjid_agung_banten_lama.jpg" },
  { eraIndex: 0, place: "Gapura Wringin Lawang, Trowulan", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Wringin_Lawang%2C_Trowulan.jpg/500px-Wringin_Lawang%2C_Trowulan.jpg" },
  { eraIndex: 1, place: "Kali Mas, Surabaya", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/COLLECTIE_TROPENMUSEUM_Rivier_Kali_Mas_Surabaya_TMnr_10020881.jpg/500px-COLLECTIE_TROPENMUSEUM_Rivier_Kali_Mas_Surabaya_TMnr_10020881.jpg" },
  { eraIndex: 2, place: "Masjid Raya Baiturrahman, Aceh", image: `https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Masjid_Raya_Baiturrahman_di_Banda_Aceh.jpg/960px-Masjid_Raya_Baiturrahman_di_Banda_Aceh.jpg` },
  { eraIndex: 0, place: "Koin Samudera Pasai, Aceh Utara", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/MUS_Koin_Kesultanan_Samudera_Pasai%3B_2.jpg/960px-MUS_Koin_Kesultanan_Samudera_Pasai%3B_2.jpg" },
  { eraIndex: 1, place: "Lukisan Iskandar Muda, Aceh", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Lukisan_Iskandar_muda_Sultan_of_Aceh_from_1607_to1636.jpg/960px-Lukisan_Iskandar_muda_Sultan_of_Aceh_from_1607_to1636.jpg" },
  { eraIndex: 0, place: "Keraton Kasepuhan, Cirebon", image: `https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Building_in_Keraton_Kasepuhan.jpg/960px-Building_in_Keraton_Kasepuhan.jpg` },
  { eraIndex: 1, place: "Makam Sultan Agung, Imogiri", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Makam_Pahlawan_Nasional_Sultan_Agung_Hanyokrokusumo_%26_Jend_TNI_GPH_Djatikusumo._Imogiri%2C_Bantul%2C_Yogyakarta.jpg/960px-Makam_Pahlawan_Nasional_Sultan_Agung_Hanyokrokusumo_%26_Jend_TNI_GPH_Djatikusumo._Imogiri%2C_Bantul%2C_Yogyakarta.jpg" },
  { eraIndex: 0, place: "Candi Tikus, Trowulan", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Candi_Tikus_%2834799972236%29.jpg/960px-Candi_Tikus_%2834799972236%29.jpg" },
  { eraIndex: 1, place: "Sultanah Safiatuddin, Aceh", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Sultanah_Safiatuddin.jpg/960px-Sultanah_Safiatuddin.jpg" },
  { eraIndex: 2, place: "Tugu 9 November 1945, Banjarmasin", image: `https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Monumen_9_November_1945_Banjarmasin_001.jpg/960px-Monumen_9_November_1945_Banjarmasin_001.jpg` },
  { eraIndex: 1, place: "Benteng Fort Marlborough, Bengkulu", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Cannon_at_Fort_Marlborough%2C_Bengkulu_2015-04-19_04.jpg/960px-Cannon_at_Fort_Marlborough%2C_Bengkulu_2015-04-19_04.jpg" },
  { eraIndex: 0, place: "Makam Sultan Baabullah, Ternate", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Makam_Sultan_Baabullah.jpg/960px-Makam_Sultan_Baabullah.jpg" },
  { eraIndex: 1, place: "Kedaton Kutai Kartanegara, Tenggarong", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Kedaton_Kutai_Kartanegara_%282%29.jpg/960px-Kedaton_Kutai_Kartanegara_%282%29.jpg" },
] as const;

interface ItemEra { src: string; title: string; description: string }

const MENU_ITEMS: ItemEra[] = MENU_SOURCES.map(source => ({
  src: source.image,
  title: source.place,
  description: `${eras[source.eraIndex].label} · ${eras[source.eraIndex].description}`
}));

/** Pengganti galeri 3D untuk perangkat tanpa WebGL2: deretan gambar biasa yang tetap bisa dipilih. */
function EraGridFallback({ items, onItemClick, onReady }: { items: ItemEra[]; onItemClick: (index: number) => void; onReady?: () => void }) {
  useEffect(() => {
    onReady?.();
    // onReady hanya menandai layar siap; cukup dipanggil sekali saat komponen tampil.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ul className="era-grafis-grid">
      {items.map((item, index) => (
        <li key={item.src}>
          <button type="button" onClick={() => onItemClick(index)}>
            <img src={item.src} alt="" loading="lazy" decoding="async" />
            <span className="era-grafis-grid__judul">{item.title}</span>
            <small>{item.description}</small>
          </button>
        </li>
      ))}
    </ul>
  );
}

export function EraSelect({ onBack, onSelectEra, onReady, tingkat = "tinggi" }: Props) {
  const menuRef = useRef<SphereGalleryHandle>(null);
  // Tingkat Ringan (perangkat lemah): tanpa shader latar, bola 3D 1x tanpa antialias, dan hanya digambar saat bergerak.
  const ringan = tingkat === "ringan";
  // Di layar sempit tekstur galeri cukup berukuran 500px (hemat data dan memori GPU ponsel).
  const kecil = useLayarKecil();
  const items = useMemo(
    () => (kecil ? MENU_ITEMS.map((item) => ({ ...item, src: item.src.replace("/960px-", "/500px-") })) : MENU_ITEMS),
    [kecil],
  );
  const pilihItem = (index: number) => {
    const source = MENU_SOURCES[index];
    const era = source ? eras[source.eraIndex] : undefined;
    if (era?.available) onSelectEra(era.id);
  };

  return (
    <main className="era-select-screen era-select-screen--tunnel">
      {(tingkat === "dasar" || ringan) && <div className="era-grafis-fallback" aria-hidden="true" />}
      {(tingkat === "sedang" || tingkat === "tinggi") && <div className="era-ascii-bg" aria-hidden="true">
        <GradientASCII shape="rise" sunSize={0.7} colors={["#5a3d22", "#d8b78c", "#f4eddd"]} characters=" ░▒▓█" cellSize={15} density={0.8} glow={0.25} flow={0.4} speed={0.8} scrambleRadius={0.08} />
      </div>}
      <div className="landing-grain" aria-hidden="true" />
      <header className="era-select-nav">
        <NoiseBackground containerClassName={ERA_FRAME_NAV} gradientColors={ERA_GLOW} glow={2.6}><button className="back-link era-noise-pill" onClick={onBack}><span>←</span> Menu utama</button></NoiseBackground>
        <div className="landing-brand-copy"><strong><SplitText>NUSANTARA</SplitText></strong></div>
      </header>
      <section className="era-select-content era-select-content--gallery">
        {tingkat === "dasar" ? (
          <EraGridFallback items={items} onItemClick={pilihItem} onReady={onReady} />
        ) : (
        <div className="era-carousel">
          <SphereGallery
            ref={menuRef}
            onReady={onReady}
            items={items}
            onItemClick={(_item, index) => pilihItem(index)}
            autoSpin={!ringan}
            dpr={ringan ? 1 : [1, 2]}
            antialias={!ringan}
            sesuaiKebutuhan={ringan}
          />
          <NoiseBackground containerClassName={`${ERA_FRAME_ARROW} era-noise-arrow era-noise-arrow--left`} gradientColors={ERA_GLOW}><button type="button" className="era-carousel__arrow" aria-label="Era sebelumnya" onClick={() => menuRef.current?.step(-1)}>←</button></NoiseBackground>
          <NoiseBackground containerClassName={`${ERA_FRAME_ARROW} era-noise-arrow era-noise-arrow--right`} gradientColors={ERA_GLOW}><button type="button" className="era-carousel__arrow" aria-label="Era berikutnya" onClick={() => menuRef.current?.step(1)}>→</button></NoiseBackground>
        </div>
        )}
      </section>
    </main>
  );
}
