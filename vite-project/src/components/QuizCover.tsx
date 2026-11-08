import { useEffect, useRef } from "react";
import gsap from "gsap";
import { NoiseBackground } from "./ui/noise-background";
import { amankan } from "../lib/clientLog";

const QC_FRAME_CTA = "block w-full rounded-md p-[3px] bg-[#0f1f1d] dark:bg-[#0f1f1d] shadow-none";
const QC_GLOW_CTA = ["#000000", "#0b1f1c", "#2dd4bf"];
import { jumlahTersedia, type EraKuis, type Kesulitan } from "../lib/kuis";
import "../styles/quiz-cover.css";
import "../styles/quiz-kinetic.css";

export const JUMLAH_OPSI = [5, 10, 15, 20];
export const WAKTU_OPSI = [
  { detik: 15, label: "15" },
  { detik: 20, label: "20" },
  { detik: 30, label: "30" },
  { detik: 0, label: "∞" },
];
export const ERA_OPSI: { nilai: EraKuis; judul: string; rentang: string; deskripsi: string; gambar: string }[] = [
  {
    nilai: "semua",
    judul: "Semua era",
    rentang: "1200–2026",
    deskripsi: "Seluruh periode dalam peta, dari Singhasari sampai Reformasi.",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Mendut_Java_Indonesia_Candi-Mendut-02.jpg/1280px-Mendut_Java_Indonesia_Candi-Mendut-02.jpg",
  },
  {
    nilai: 1,
    judul: "Era I",
    rentang: "1200–1617",
    deskripsi: "Dari Majapahit ke perdagangan global, dari pusat kerajaan sampai pelabuhan rempah.",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Candi_penataran.jpg/1280px-Candi_penataran.jpg",
  },
  {
    nilai: 2,
    judul: "Era II",
    rentang: "1600–1800",
    deskripsi: "Perdagangan dan kekuasaan kolonial: VOC, Mataram, dan persaingan di pesisir.",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Benteng_Fort_Rotterdam_Makassar.jpg/1280px-Benteng_Fort_Rotterdam_Makassar.jpg",
  },
  {
    nilai: 3,
    judul: "Era III",
    rentang: "1800–2026",
    deskripsi: "Kolonialisme dan zaman modern, dari Perang Padri dan Perang Jawa sampai kemerdekaan dan Reformasi.",
    gambar: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Gedung_Sate_Bandung.jpg/1280px-Gedung_Sate_Bandung.jpg",
  },
];
export const KESULITAN_OPSI: { nilai: Kesulitan; judul: string; catatan: string; deskripsi: string }[] = [
  { nilai: "mudah", judul: "Mudah", catatan: "Sampingan", deskripsi: "Peristiwa pendukung yang lebih sederhana." },
  { nilai: "campur", judul: "Campuran", catatan: "Semua", deskripsi: "Gabungan peristiwa utama dan sampingan." },
  { nilai: "sulit", judul: "Sulit", catatan: "Utama", deskripsi: "Peristiwa besar yang menentukan arah sejarah." },
];

interface Props {
  era: EraKuis;
  onEra: (era: EraKuis) => void;
  kesulitan: Kesulitan;
  onKesulitan: (k: Kesulitan) => void;
  jumlah: number;
  onJumlah: (n: number) => void;
  waktu: number;
  onWaktu: (detik: number) => void;
  onMulai: () => void;
  onBack: () => void;
}

/** Pilih era dan atur kuis, gaya "cover page" dari Codrops. */
export function QuizCover({ era, onEra, kesulitan, onKesulitan, jumlah, onJumlah, waktu, onWaktu, onMulai, onBack }: Props) {
  const gridRef = useRef<HTMLDivElement>(null);
  const pratinjauRef = useRef<HTMLElement>(null);
  const kinetikRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const terbukaRef = useRef(false);

  const tersedia = jumlahTersedia(era, kesulitan);
  const jumlahEfektif = Math.min(jumlah, tersedia);
  const eraAktif = ERA_OPSI.find((o) => o.nilai === era) ?? ERA_OPSI[0]!;

  const teksPratinjau = () => Array.from(pratinjauRef.current?.querySelectorAll<HTMLElement>(".qc-reveal") ?? []);

  const isiGaris = (judul: string) => {
    const teks = `${judul.toUpperCase()} · `.repeat(5);
    lineRefs.current.forEach((el) => {
      if (el) el.textContent = teks;
    });
  };

  const buka = (pilihan: EraKuis) => {
    const grid = gridRef.current;
    const pratinjau = pratinjauRef.current;
    if (!grid || !pratinjau) return;
    tlRef.current?.kill();
    onEra(pilihan);
    terbukaRef.current = true;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      grid.classList.add("is-hidden");
      pratinjau.classList.add("is-open");
      return;
    }

    const kin = kinetikRef.current as HTMLDivElement;
    const type = typeRef.current as HTMLDivElement;
    const garis = lineRefs.current.filter(Boolean);
    const kartu = Array.from(grid.querySelectorAll<HTMLElement>(".qc-item"));
    isiGaris(ERA_OPSI.find((o) => o.nilai === pilihan)?.judul ?? "");

    const tl = gsap.timeline();
    tl.set(kin, { opacity: 1 })
      .to(kartu, { duration: 0.8, ease: "power2.inOut", opacity: 0, y: (pos: number) => (pos % 2 ? "25%" : "-25%") }, 0)
      .to(type, { duration: 1.4, ease: "power2.inOut", scale: 2.7, rotate: -90 }, 0.3)
      .to(garis, { keyframes: [{ x: "20%", duration: 1, ease: "power1.inOut" }, { x: "-200%", duration: 1.5, ease: "power1.in" }], stagger: 0.04 }, 0.3)
      .to(garis, { keyframes: [{ opacity: 1, duration: 1, ease: "power1.in" }, { opacity: 0, duration: 1.5, ease: "power1.in" }], stagger: 0.04 }, 0.3)
      .add(() => {
        grid.classList.add("is-hidden");
        pratinjau.classList.add("is-open");
      }, 1.9)
      .fromTo(teksPratinjau(), { yPercent: 101 }, { yPercent: 0, duration: 1, ease: "expo", stagger: 0.05 }, 2.2)
      .set(type, { scale: 1, rotate: 0 }, 2.4)
      .set(kin, { opacity: 0 }, 2.6);
    tlRef.current = tl;
  };

  const tutup = () => {
    const grid = gridRef.current;
    const pratinjau = pratinjauRef.current;
    if (!grid || !pratinjau) return;
    tlRef.current?.kill();
    terbukaRef.current = false;

    const selesai = () => {
      pratinjau.classList.remove("is-open");
      grid.classList.remove("is-hidden");
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      selesai();
      return;
    }

    const kin = kinetikRef.current as HTMLDivElement;
    const type = typeRef.current as HTMLDivElement;
    const garis = lineRefs.current.filter(Boolean);
    const kartu = Array.from(grid.querySelectorAll<HTMLElement>(".qc-item"));
    const tl = gsap.timeline();
    tl.set(garis, { opacity: 0 })
      .set(type, { scale: 1, rotate: 0 })
      .set(kin, { opacity: 0, backgroundColor: "#5fd4cf" })
      .to(kin, { opacity: 1, duration: 0.35, ease: "power2.in" })
      .add(() => {
        selesai();
        gsap.set(kartu, { opacity: 1, y: "0%" });
      })
      .to(kin, { opacity: 0, duration: 0.6, ease: "power2.out" })
      .set(kin, { backgroundColor: "rgba(0,0,0,0)" });
    tlRef.current = tl;
  };

  const bukaAman = amankan("cover:buka-era", buka);
  const tutupAman = amankan("cover:tutup-era", tutup);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && terbukaRef.current) tutup();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      tlRef.current?.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="qc">
      <header className="qc-bar">
        <button type="button" className="qc-link" onClick={onBack}>← Menu</button>
        <span className="qc-brand">Mode kuis</span>
      </header>

      <div ref={gridRef} className="qc-grid-wrap">
        <div className="qc-intro">
          <h1 className="qc-title">Pilih era</h1>
        </div>
        <div className="qc-grid">
          {ERA_OPSI.map((o, i) => (
            <article className="qc-item" key={String(o.nilai)}>
              <div className="qc-item-img">
                <div className="qc-item-inner" style={{ backgroundImage: `url("${o.gambar}")` }} />
              </div>
              <div className="qc-item-meta">
                <span>{String(i + 1).padStart(2, "0")}</span>
                <span>{o.rentang}</span>
              </div>
              <h2 className="qc-item-judul">{o.judul}</h2>
              <p className="qc-item-desc">{o.deskripsi}</p>
              <button type="button" className="qc-item-link" onClick={() => bukaAman(o.nilai)}>Pilih era</button>
            </article>
          ))}
        </div>
      </div>

      <section ref={pratinjauRef} className="qc-preview" aria-label={`Konfigurasi ${eraAktif.judul}`}>
        <button type="button" className="qc-preview-back" onClick={tutupAman}>← Pilih era lain</button>
        <div className="qc-preview-img">
          <div className="qc-preview-img-inner" style={{ backgroundImage: `url("${eraAktif.gambar}")` }} />
        </div>

        <div className="qc-preview-judul">
          <div className="qc-oh"><h2 className="qc-reveal">{eraAktif.judul}</h2></div>
          <div className="qc-oh"><p className="qc-reveal qc-rentang">{eraAktif.rentang} · {eraAktif.deskripsi}</p></div>
        </div>

        <div className="qc-preview-kontrol">
          <div className="qc-baris">
            <div className="qc-oh"><div className="qc-reveal">
              <p className="qc-kicker">Jumlah pertanyaan</p>
              <div className="qc-seg">
                {JUMLAH_OPSI.map((n) => (
                  <button key={n} type="button" className={"qc-seg-btn" + (jumlah === n ? " is-on" : "")} aria-pressed={jumlah === n} onClick={() => onJumlah(n)}>
                    {String(n).padStart(2, "0")}
                  </button>
                ))}
              </div>
            </div></div>

            <div className="qc-oh"><div className="qc-reveal">
              <p className="qc-kicker">Batas waktu per pertanyaan</p>
              <div className="qc-seg">
                {WAKTU_OPSI.map((o) => (
                  <button key={o.detik} type="button" className={"qc-seg-btn" + (waktu === o.detik ? " is-on" : "")} aria-pressed={waktu === o.detik} aria-label={o.detik === 0 ? "Tanpa batas waktu" : `${o.detik} detik`} onClick={() => onWaktu(o.detik)}>
                    {o.label}
                    {o.detik > 0 && <span className="qc-seg-satuan">dtk</span>}
                  </button>
                ))}
              </div>
            </div></div>
          </div>

          <div className="qc-oh"><div className="qc-reveal">
            <p className="qc-kicker">Tingkat kesulitan</p>
            <div className="qc-tingkat">
              {KESULITAN_OPSI.map((o) => (
                <button key={o.nilai} type="button" data-tingkat={o.nilai} className={"qc-tingkat-btn" + (kesulitan === o.nilai ? " is-on" : "")} aria-pressed={kesulitan === o.nilai} onClick={() => onKesulitan(o.nilai)}>
                  <span className="qc-tingkat-judul">{o.judul} <small>{o.catatan}</small></span>
                  <span className="qc-tingkat-desk">{o.deskripsi}</span>
                </button>
              ))}
            </div>
          </div></div>

          <div className="qc-oh"><div className="qc-reveal qc-aksi">
            <NoiseBackground containerClassName={QC_FRAME_CTA} gradientColors={QC_GLOW_CTA} glow={2.4}>
            <button type="button" className="qc-cta" onClick={onMulai} disabled={tersedia === 0}>
              MULAI KUIS ({jumlahEfektif} SOAL) →
            </button>
            </NoiseBackground>
            {tersedia === 0 &&<p className="qc-catatan">Belum ada soal untuk era ini. Pilih era lain untuk mulai kuis.</p>}
          </div></div>
        </div>
      </section>

      <div ref={kinetikRef} className="qk" aria-hidden="true">
        <div ref={typeRef} className="qk-type">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="qk-line" ref={(el) => { if (el) lineRefs.current[i] = el; }} />
          ))}
        </div>
      </div>
    </main>
  );
}
