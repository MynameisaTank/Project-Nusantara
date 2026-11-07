import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import type { KategoriId, SejarahEvent } from "../types";
import { EVENTS } from "../data/events";
import { EVENTS2 } from "../data/events2";
import { EVENTS3 } from "../data/events3";
import { RELASI, type Relasi } from "../data/sebabAkibat";
import { Icon } from "./Icon";
import Lightfall from "./reactbits/Lightfall";
import { CardBody, CardContainer, CardItem } from "./Card3D";
import { GAMBAR_NODE } from "../data/gambarNode";
import "../styles/exam-review.css";

interface Props {
  onBack: () => void;
}

type EraFilter = "semua" | 1 | 2 | 3;
type KategoriFilter = "semua" | KategoriId;
type LevelBahasa = 1 | 2 | 3;
type FacetJenis = "ringkasan" | "sebab" | "akibat" | "detail";
type KartuJenis = "sebab" | "ringkasan" | "akibat";

interface Node {
  ev: SejarahEvent;
  era: 1 | 2 | 3;
}

interface Titik {
  x: number;
  y: number;
}

/** Keadaan graf yang tumbuh: peristiwa yang sudah dimunculkan, posisinya (tetap), dan asal kemunculannya. */
interface Graf {
  terbuka: string[];
  pos: Record<string, Titik>;
  asal: Record<string, string>;
}

/** Satu "sesi" cabang internal milik sebuah node: cabang keluar saat node dibuka, menarik diri saat node lain dibuka. */
interface Sesi {
  id: string;
  menutup: boolean;
  kunci: number;
}

const KATEGORI_LABEL: Record<KategoriId, string> = {
  politik: "Politik",
  perang: "Perang",
  perdagangan: "Perdagangan",
  budaya: "Budaya",
  agama: "Agama",
  diplomasi: "Diplomasi",
};

const KATEGORI_WARNA: Record<KategoriId, string> = {
  politik: "#7fc4bf",
  perang: "#d9625a",
  perdagangan: "#e8b04a",
  budaya: "#b08fd8",
  agama: "#8fcf8a",
  diplomasi: "#6fa8e0",
};

const WARNA_ERA = { 1: "#7fc4bf", 2: "#e8803a" } as const;
const LEVEL_LABEL: Record<LevelBahasa, string> = { 1: "Dasar", 2: "Menengah", 3: "Lanjut" };
const FACET_LABEL: Record<FacetJenis, string> = { ringkasan: "Ringkasan", sebab: "Penyebab", akibat: "Akibat", detail: "Detail" };
const URUT_KARTU: KartuJenis[] = ["sebab", "ringkasan", "akibat"];

// ukuran tata letak (piksel)
const R = 34; // jari-jari lingkaran peristiwa (berisi gambar)
const LABEL_W = 116;
const JARAK = 176; // jarak awal peristiwa baru dari peristiwa asalnya (dibuat dekat)
const MIN_JARAK = 140; // jarak minimum antar pusat peristiwa agar label tidak bertumpuk
const PAD = 470; // ruang kosong di sekeliling graf (muat cabang dan kartu di tepi)
const TAU = Math.PI * 2;

const ZOOM_MIN = 0.5;
const ZOOM_MAX = 1.6;


/** Tahun untuk urutan dan lingkaran: empat angka pertama pada teks tahun, atau awal rentang tampil. */
function tahunNilai(ev: SejarahEvent): number {
  const m = ev.tahun.match(/\d{4}/);
  return m ? Number(m[0]) : ev.mulai;
}

/**
 * Munculkan peristiwa `baru` di sekitar `id`, dekat dan tanpa menggeser yang sudah ada.
 * Posisi dipilih di sisi yang menjauh dari peristiwa yang sudah terlihat, dan ditarik mendekat ke peristiwa
 * terhubung lain yang sudah muncul supaya garisnya tidak panjang.
 */
function bukaTetangga(graf: Graf, id: string, edges: Relasi[], tahunDari: (id: string) => number, baruAsli: string[]): Graf {
  const asal = graf.pos[id];
  if (!asal) return graf;
  const sudahAda = new Set(graf.terbuka);
  const baru = baruAsli.filter((n) => !sudahAda.has(n)).sort((a, b) => tahunDari(a) - tahunDari(b));
  if (baru.length === 0) return graf;

  const terhubung = [...new Set(edges.flatMap((e) => (e.dari === id ? [e.ke] : e.ke === id ? [e.dari] : [])))];
  const arahAda: number[] = [];
  for (const n of terhubung) {
    const p = graf.pos[n];
    if (p) arahAda.push(Math.atan2(p.y - asal.y, p.x - asal.x));
  }

  const k = baru.length;
  let sudut: number[];
  if (arahAda.length === 0) {
    sudut = baru.map((_, i) => -Math.PI / 2 + (i * TAU) / k);
  } else {
    const sx = arahAda.reduce((s, a) => s + Math.cos(a), 0);
    const sy = arahAda.reduce((s, a) => s + Math.sin(a), 0);
    const tengah = Math.atan2(sy, sx) + Math.PI;
    const renggang = k > 1 ? Math.min(Math.PI / 3, (Math.PI * 1.3) / (k - 1)) : 0;
    sudut = baru.map((_, i) => tengah + (i - (k - 1) / 2) * renggang);
  }

  const pos: Record<string, Titik> = { ...graf.pos };
  const asalBaru: Record<string, string> = { ...graf.asal };
  const GESER = [0, Math.PI / 12, -Math.PI / 12, Math.PI / 6, -Math.PI / 6, Math.PI / 4, -Math.PI / 4, Math.PI / 3, -Math.PI / 3, Math.PI / 2, -Math.PI / 2];
  baru.forEach((n, i) => {
    const dasar = sudut[i] ?? 0;
    const lain = [...new Set(edges.flatMap((e) => (e.dari === n ? [e.ke] : e.ke === n ? [e.dari] : [])))].filter((x) => x !== id && pos[x]);
    let terbaik: Titik | null = null;
    let skorTerbaik = Infinity;
    for (let lapis = 0; lapis < 3; lapis++) {
      for (const geser of GESER) {
        const jarak = JARAK + lapis * 40;
        const kandidat = { x: asal.x + jarak * Math.cos(dasar + geser), y: asal.y + jarak * Math.sin(dasar + geser) };
        if (Object.values(pos).some((p) => Math.hypot(p.x - kandidat.x, p.y - kandidat.y) < MIN_JARAK)) continue;
        const keLain = lain.reduce((s, x) => {
          const p = pos[x];
          return p ? s + Math.hypot(p.x - kandidat.x, p.y - kandidat.y) : s;
        }, 0);
        const skor = keLain + Math.abs(geser) * 20 + lapis * 40;
        if (skor < skorTerbaik) {
          skorTerbaik = skor;
          terbaik = kandidat;
        }
      }
      if (terbaik && lain.length === 0) break;
    }
    pos[n] = terbaik ?? { x: asal.x + JARAK * 3 * Math.cos(dasar), y: asal.y + JARAK * 3 * Math.sin(dasar) };
    asalBaru[n] = id;
  });

  return { terbuka: [...graf.terbuka, ...baru], pos, asal: asalBaru };
}

/**
 * Buka semua peristiwa `ids` sekaligus. Setiap peristiwa diletakkan lewat `bukaTetangga` dari tetangganya yang
 * sudah terbuka. Komponen yang tidak terhubung ke graf yang ada diletakkan di sisi kanan graf.
 */
function bukaSemuaGraf(awal: Graf, ids: string[], edges: Relasi[], tahunDari: (id: string) => number): Graf {
  let g = awal;
  let sisa = ids.filter((id) => !g.terbuka.includes(id));
  while (sisa.length > 0) {
    let maju = false;
    for (const id of sisa) {
      const induk = edges.flatMap((e) => (e.dari === id ? [e.ke] : e.ke === id ? [e.dari] : [])).find((x) => g.pos[x]);
      if (induk) {
        g = bukaTetangga(g, induk, edges, tahunDari, [id]);
        maju = true;
        break;
      }
    }
    if (!maju) {
      const id = sisa[0]!; // `sisa` tidak kosong di dalam loop ini
      const xs = Object.values(g.pos).map((p) => p.x);
      const x = xs.length ? Math.max(...xs) + JARAK * 2 : 0;
      g = { terbuka: [...g.terbuka, id], pos: { ...g.pos, [id]: { x, y: 0 } }, asal: g.asal };
    }
    sisa = sisa.filter((id) => !g.terbuka.includes(id));
  }
  return g;
}

/** Garis dari penyebab ke akibat: dipotong di tepi lingkaran agar panah terlihat, sedikit melengkung. */
function jalurGaris(a: Titik, b: Titik): string {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const sx = a.x + ux * (R + 4);
  const sy = a.y + uy * (R + 4);
  const ex = b.x - ux * (R + 9);
  const ey = b.y - uy * (R + 9);
  const bend = Math.min(26, len * 0.1);
  const cx = (sx + ex) / 2 - uy * bend;
  const cy = (sy + ey) / 2 + ux * bend;
  return `M ${sx} ${sy} Q ${cx} ${cy} ${ex} ${ey}`;
}

/**
 * Jalur terpendek dari peristiwa awal ke peristiwa tujuan. Lebih dulu mengikuti arah sebab → akibat; bila tidak ada
 * jalur searah, boleh melewati hubungan secara mundur (akibat → sebab) supaya semua peristiwa tetap terjangkau.
 */
function cariJalur(dari: string, ke: string, edges: Relasi[]): string[] {
  if (dari === ke) return [dari];
  for (const searah of [true, false]) {
    const tetangga = new Map<string, string[]>();
    for (const e of edges) {
      tetangga.set(e.dari, [...(tetangga.get(e.dari) ?? []), e.ke]);
      if (!searah) tetangga.set(e.ke, [...(tetangga.get(e.ke) ?? []), e.dari]);
    }
    const induk = new Map<string, string>([[dari, ""]]);
    const antre: string[] = [dari];
    while (antre.length > 0) {
      const cur = antre.shift();
      if (cur === undefined) break;
      for (const n of tetangga.get(cur) ?? []) {
        if (induk.has(n)) continue;
        induk.set(n, cur);
        if (n === ke) {
          const jalur = [ke];
          let x = ke;
          while (x !== dari) {
            x = induk.get(x) ?? dari;
            jalur.push(x);
          }
          return jalur.reverse();
        }
        antre.push(n);
      }
    }
  }
  return [];
}

interface NodeViewProps {
  id: string;
  n: Node;
  left: number;
  top: number;
  dx: number;
  dy: number;
  aktif: boolean;
  mundur: boolean;
  redup: boolean;
  dijalur: boolean;
  cocok: boolean;
  masihAda: boolean;
  gambar?: string;
  onKlik: (id: string) => void;
}

/** Satu node (lingkaran + tahun + judul). Di-memo agar tidak dirender ulang saat bagian lain halaman berubah. */
const NodeView = memo(function NodeView({ id, n, left, top, dx, dy, aktif, mundur, redup, dijalur, cocok, masihAda, gambar, onKlik }: NodeViewProps) {
  return (
    <button
      id={`node-${id}`}
      type="button"
      className={`exam-node exam-node--era${n.era}${aktif ? " is-active" : ""}${mundur ? " is-mundur" : ""}${redup ? " is-dim" : ""}${dijalur ? " is-jalur" : ""}${cocok ? " is-cocok" : ""}${masihAda ? " has-more" : ""}`}
      style={{ left, top, width: LABEL_W, ["--dx" as string]: `${dx}px`, ["--dy" as string]: `${dy}px` }}
      aria-pressed={aktif}
      aria-label={`${n.ev.judul}, ${n.ev.tahun}`}
      title={n.ev.judul}
      onClick={() => onKlik(id)}
    >
      <span className="exam-node-circle" style={{ width: R * 2, height: R * 2 }}>
        <span className="exam-node-photo">
          <span className="exam-node-icon" style={{ color: KATEGORI_WARNA[n.ev.kategori] }}>
            <Icon name={n.ev.kategori} size={28} />
          </span>
          {gambar && (
            <img
              className="exam-node-img"
              src={gambar}
              alt=""
              loading="lazy"
              decoding="async"
              draggable={false}
              referrerPolicy="no-referrer"
              onError={(event) => { event.currentTarget.style.display = "none"; }}
            />
          )}
        </span>
        <span className="exam-node-dot" style={{ background: KATEGORI_WARNA[n.ev.kategori] }} aria-hidden="true" />
      </span>
      <span className="exam-node-year">{tahunNilai(n.ev)}</span>
      <span className="exam-node-title">{n.ev.judul}</span>
    </button>
  );
});

export function ExamReview({ onBack }: Props) {
  const [eraFilter, setEraFilter] = useState<EraFilter>("semua");
  const [kategori, setKategori] = useState<KategoriFilter>("semua");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [sebelumId, setSebelumId] = useState<string | null>(null);
  const [sesi, setSesi] = useState<Sesi[]>([]);
  const [pusat, setPusat] = useState<KartuJenis>("ringkasan");
  const [panelBuka, setPanelBuka] = useState(false);
  const [level, setLevel] = useState<LevelBahasa>(2);
  const [latarGagal, setLatarGagal] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [menggeser, setMenggeser] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [viewport, setViewport] = useState({ w: 1000, h: 600 });
  const kameraRef = useRef(0); // id requestAnimationFrame kamera yang sedang berjalan
  const kameraData = useRef<{ pos: Record<string, Titik>; offX: number; offY: number; zoom: number; w: number; h: number }>({ pos: {}, offX: 0, offY: 0, zoom: 1, w: 1000, h: 600 });
  const geserRef = useRef<{ x: number; y: number; kiri: number; atas: number } | null>(null);
  const offsetRef = useRef<Titik | null>(null);
  const kunciRef = useRef(0);
  const tourRef = useRef(0); // naik setiap kali penelusuran jalur dibatalkan/diganti
  const [kata, setKata] = useState("");
  const [kataAktif, setKataAktif] = useState("");
  const [jalur, setJalur] = useState<string[]>([]);
  const [langkah, setLangkah] = useState(-1);
  const [tourAktif, setTourAktif] = useState(false); // penelusuran sedang berjalan (tombol "Lewati animasi" tampil)
  const [sorot, setSorot] = useState(false); // seluruh jalur disorot saat kamera sudah memperkecil tampilan
  const tourInfoRef = useRef<{ path: string[]; target: string; zoomAwal: number } | null>(null);

  // peristiwa yang punya hubungan sebab-akibat, dari kedua era
  const semua = useMemo(() => {
    const peta = new Map<string, Node>();
    for (const ev of EVENTS) peta.set(ev.id, { ev, era: 1 });
    for (const ev of EVENTS2) peta.set(ev.id, { ev, era: 2 });
    for (const ev of EVENTS3) peta.set(ev.id, { ev, era: 3 });
    return peta;
  }, []);

  const nodes = useMemo(() => {
    const idTerhubung = new Set(RELASI.flatMap((r) => [r.dari, r.ke]));
    return [...idTerhubung]
      .map((id) => semua.get(id))
      .filter((n): n is Node => n !== undefined)
      .filter((n) => (eraFilter === "semua" || n.era === eraFilter) && (kategori === "semua" || n.ev.kategori === kategori));
  }, [semua, eraFilter, kategori]);

  const nodeById = useMemo(() => new Map(nodes.map((n) => [n.ev.id, n])), [nodes]);
  const edges = useMemo(() => RELASI.filter((r) => nodeById.has(r.dari) && nodeById.has(r.ke)), [nodeById]);

  const tahunDari = (id: string) => {
    const n = nodeById.get(id);
    return n ? tahunNilai(n.ev) : 0;
  };

  // peristiwa awal (node 1): yang paling awal waktunya di antara yang tampil
  const akarId = useMemo(() => {
    const urut = [...nodes].sort((a, b) => tahunNilai(a.ev) - tahunNilai(b.ev) || a.ev.id.localeCompare(b.ev.id));
    return urut[0]?.ev.id ?? null;
  }, [nodes]);

  const [graf, setGraf] = useState<Graf>({ terbuka: [], pos: {}, asal: {} });

  // pencarian kata kunci: semua kata harus ada pada judul, lokasi, ringkasan, kategori, atau tahun
  const cocokUntuk = (kunci: string): Node[] => {
    const kata = kunci.trim().toLocaleLowerCase("id").split(/\s+/).filter(Boolean);
    if (kata.length === 0) return [];
    return nodes
      .filter((n) => {
        const teks = `${n.ev.judul} ${n.ev.lokasi.nama} ${n.ev.ringkas} ${KATEGORI_LABEL[n.ev.kategori]} ${n.ev.tahun}`.toLocaleLowerCase("id");
        return kata.every((k) => teks.includes(k));
      })
      .sort((a, b) => tahunNilai(a.ev) - tahunNilai(b.ev) || a.ev.id.localeCompare(b.ev.id));
  };
  const hasilCari = useMemo(() => cocokUntuk(kataAktif), [nodes, kataAktif]); // eslint-disable-line react-hooks/exhaustive-deps
  const cocokSet = useMemo(() => new Set(hasilCari.map((n) => n.ev.id)), [hasilCari]);

  /** Buka cabang internal sebuah node; cabang node yang sedang terbuka menarik diri ke dalam node itu. */
  const mulaiSesi = (id: string) => {
    const kunci = ++kunciRef.current;
    setSesi((s) => [...s.map((x) => ({ ...x, menutup: true })), { id, menutup: false, kunci }]);
    window.setTimeout(() => setSesi((s) => s.filter((x) => !x.menutup)), 520);
  };

  /** Hentikan penelusuran yang sedang berjalan (timer, zoom, kamera, dan sorotan). */
  const hentikanTur = () => {
    tourRef.current++;
    tourInfoRef.current = null;
    cancelAnimationFrame(kameraRef.current);
    setTourAktif(false);
    setSorot(false);
  };

  const tutupSemua = () => {
    hentikanTur();
    setSesi((s) => s.map((x) => ({ ...x, menutup: true })));
    window.setTimeout(() => setSesi((s) => s.filter((x) => !x.menutup)), 520);
    setSebelumId(null);
    setSelectedId(null);
    setPanelBuka(false);
  };

  /** Buka semua peristiwa yang tampil (sesuai filter era dan kategori), lalu perkecil zoom agar seluruh graf terlihat. */
  const bukaSemua = () => {
    hentikanTur();
    const g = bukaSemuaGraf(graf, nodes.map((n) => n.ev.id), edges, tahunDari);
    setGraf(g);
    const xs = Object.values(g.pos).map((p) => p.x);
    const ys = Object.values(g.pos).map((p) => p.y);
    if (xs.length > 0) {
      const lebar = Math.max(...xs) - Math.min(...xs) + 2 * (R + LABEL_W);
      const tinggi = Math.max(...ys) - Math.min(...ys) + 2 * (R + 60);
      const muat = Math.min(viewport.w / lebar, viewport.h / tinggi, 1);
      setZoom(Math.max(ZOOM_MIN, Math.round(muat * 100) / 100));
    }
  };

  // mulai (atau mulai ulang) dengan hanya satu peristiwa di pusat, cabang internalnya langsung terbuka
  const mulaiUlang = () => {
    hentikanTur();
    setJalur([]);
    setLangkah(-1);
    offsetRef.current = null;
    setPanelBuka(false);
    setSebelumId(null);
    setSesi([]);
    if (akarId) {
      setGraf({ terbuka: [akarId], pos: { [akarId]: { x: 0, y: 0 } }, asal: {} });
      setSelectedId(akarId);
      setPusat("ringkasan");
      mulaiSesi(akarId);
    } else {
      setGraf({ terbuka: [], pos: {}, asal: {} });
      setSelectedId(null);
    }
  };
  useEffect(() => {
    mulaiUlang();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [akarId]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") tutupSemua();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ukuran area gulir (berubah saat jendela atau panel detail berubah)
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const ukur = () => setViewport((v) => (v.w === el.clientWidth && v.h === el.clientHeight ? v : { w: el.clientWidth, h: el.clientHeight }));
    ukur();
    const observer = new ResizeObserver(ukur);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ruang kosong di sekeliling graf: minimal PAD, dan cukup lebar agar node di tepi pun bisa dipusatkan
  const padX = Math.max(PAD, viewport.w / (2 * zoom));
  const padY = Math.max(PAD, viewport.h / (2 * zoom));

  // batas graf dan geseran agar semua koordinat positif
  const batas = useMemo(() => {
    const titik = Object.values(graf.pos);
    if (titik.length === 0) return { minX: 0, minY: 0, lebar: 2 * padX, tinggi: 2 * padY };
    const xs = titik.map((p) => p.x);
    const ys = titik.map((p) => p.y);
    const minX = Math.min(...xs);
    const minY = Math.min(...ys);
    return { minX, minY, lebar: Math.max(...xs) - minX + 2 * padX, tinggi: Math.max(...ys) - minY + 2 * padY };
  }, [graf.pos, padX, padY]);

  const offX = padX - batas.minX;
  const offY = padY - batas.minY;
  kameraData.current = { pos: graf.pos, offX, offY, zoom, w: viewport.w, h: viewport.h };
  const layar = (p: Titik): Titik => ({ x: p.x + offX, y: p.y + offY });

  // jaga posisi gulir saat graf tumbuh ke kiri atau atas; pusatkan pada peristiwa awal saat mulai
  useLayoutEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const prev = offsetRef.current;
    if (prev === null) {
      const akar = akarId ? graf.pos[akarId] : undefined;
      if (akar) {
        const p = layar(akar);
        el.scrollLeft = Math.max(0, p.x * zoom - el.clientWidth / 2);
        el.scrollTop = Math.max(0, p.y * zoom - el.clientHeight / 2);
      }
    } else {
      el.scrollLeft += (offX - prev.x) * zoom;
      el.scrollTop += (offY - prev.y) * zoom;
    }
    offsetRef.current = { x: offX, y: offY };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offX, offY, akarId]);

  const terbukaSet = useMemo(() => new Set(graf.terbuka), [graf.terbuka]);
  const edgeTampil = useMemo(() => edges.filter((e) => terbukaSet.has(e.dari) && terbukaSet.has(e.ke)), [edges, terbukaSet]);

  const selected = selectedId ? nodeById.get(selectedId) : undefined;
  const sebab = selectedId ? edges.filter((e) => e.ke === selectedId) : [];
  const akibat = selectedId ? edges.filter((e) => e.dari === selectedId) : [];
  const tetangga = useMemo(
    () => new Set<string>(selectedId ? [selectedId, ...edgeTampil.filter((e) => e.dari === selectedId || e.ke === selectedId).flatMap((e) => [e.dari, e.ke])] : []),
    [selectedId, edgeTampil],
  );

  // bagian jalur yang sudah ditempuh kamera: node dan garis di antaranya menyala
  const jalurAktif = jalur.length > 0;
  const jalurSet = useMemo(() => new Set(jalur.slice(0, Math.max(0, langkah) + 1)), [jalur, langkah]);
  const jalurEdge = useMemo(() => {
    const hasil = new Set<string>();
    for (let i = 0; i < Math.min(langkah, jalur.length - 1); i++) {
      const a = jalur[i];
      const b = jalur[i + 1];
      if (a && b) {
        hasil.add(`${a}>${b}`);
        hasil.add(`${b}>${a}`);
      }
    }
    return hasil;
  }, [jalur, langkah]);

  // dua garis jalur terbaru (yang baru saja ditempuh kamera) saja yang diberi animasi aliran
  const jalurBaru = useMemo(() => {
    const hasil = new Set<string>();
    for (let i = Math.max(0, langkah - 2); i < Math.min(langkah, jalur.length - 1); i++) {
      const a = jalur[i];
      const b = jalur[i + 1];
      if (a && b) {
        hasil.add(`${a}>${b}`);
        hasil.add(`${b}>${a}`);
      }
    }
    return hasil;
  }, [jalur, langkah]);

  /**
   * Geser kamera sampai node berada tepat di tengah area gulir. Target dihitung ulang tiap frame dari data posisi
   * (bukan dari DOM), jadi tetap akurat walau graf tumbuh atau panel detail mengubah ukuran area gulir,
   * dan tidak memaksa browser menghitung layout berulang kali.
   */
  const pusatkan = (id: string) => {
    cancelAnimationFrame(kameraRef.current);
    const mulai = performance.now();
    let terakhir = mulai;
    let tenang = 0;
    const langkahFrame = (now: number) => {
      const el = scrollerRef.current;
      const k = kameraData.current;
      const p = k.pos[id];
      const dt = Math.min(0.05, (now - terakhir) / 1000);
      terakhir = now;
      if (el && p) {
        const dx = (p.x + k.offX) * k.zoom - k.w / 2 - el.scrollLeft;
        const dy = (p.y + k.offY) * k.zoom - k.h / 2 - el.scrollTop;
        const ikut = 1 - Math.exp(-dt * 7);
        el.scrollLeft += dx * ikut;
        el.scrollTop += dy * ikut;
        tenang = Math.abs(dx) < 1 && Math.abs(dy) < 1 ? tenang + 1 : 0;
      }
      // berhenti bila sudah di tengah (stabil beberapa frame) atau terlalu lama (node belum ada / mentok di tepi)
      if (tenang < 6 && now - mulai < 2500) kameraRef.current = requestAnimationFrame(langkahFrame);
    };
    kameraRef.current = requestAnimationFrame(langkahFrame);
  };

  // klik node: node sebelumnya mundur, cabang internal node ini terbuka
  const klik = (id: string) => {
    hentikanTur();
    if (id === selectedId) {
      tutupSemua();
      return;
    }
    setSebelumId(selectedId);
    setSelectedId(id);
    setPusat("ringkasan");
    mulaiSesi(id);
    pusatkan(id);
  };

  useEffect(() => {
    if (selectedId) pusatkan(selectedId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [panelBuka, zoom]);

  useEffect(() => () => cancelAnimationFrame(kameraRef.current), []);

  // callback stabil agar NodeView yang di-memo tidak dirender ulang hanya karena fungsi klik dibuat ulang
  const klikRef = useRef(klik);
  klikRef.current = klik;
  const onKlik = useCallback((id: string) => klikRef.current(id), []);

  /** Peristiwa yang terhubung langsung dengan `id` tetapi bukan bagian jalur: cabang terdekat, ikut dimuat tanpa disorot. */
  const cabangLuar = (id: string, jalurSet: Set<string>) =>
    [...new Set(edges.flatMap((e) => (e.dari === id ? [e.ke] : e.ke === id ? [e.dari] : [])))].filter((x) => !jalurSet.has(x));

  /** Satu langkah tur: `id` muncul dari `dari`, bersama cabang terdekat keduanya. */
  const tambahLangkah = (g: typeof graf, dari: string, id: string, path: string[]) => {
    const jalurSet = new Set(path);
    const hasil = bukaTetangga(g, dari, edges, tahunDari, [id, ...cabangLuar(dari, jalurSet)]);
    return bukaTetangga(hasil, id, edges, tahunDari, cabangLuar(id, jalurSet));
  };

  /** Keadaan awal tur: peristiwa pusat beserta cabang terdekatnya. */
  const grafAwal = (path: string[]) => {
    const akar = path[0] ?? "";
    const jalurSet = new Set(path);
    const g = { terbuka: [akar], pos: { [akar]: { x: 0, y: 0 } }, asal: {} } as typeof graf;
    return bukaTetangga(g, akar, edges, tahunDari, cabangLuar(akar, jalurSet));
  };

  /** Graf lengkap untuk satu jalur (dipakai saat tur dilewati, dan untuk menghitung zoom saat jalur disorot). */
  const grafJalur = (path: string[]) => {
    let g = grafAwal(path);
    for (let i = 0; i < path.length - 1; i++) {
      const dari = path[i];
      const ke = path[i + 1];
      if (dari && ke) g = tambahLangkah(g, dari, ke, path);
    }
    return g;
  };

  /** Zoom yang pas untuk seluruh jalur di area tampilan, beserta titik tengahnya (koordinat graf). */
  const zoomPasJalur = (g: typeof graf, path: string[]) => {
    const titik = path.map((id) => g.pos[id]).filter((p): p is Titik => !!p);
    const xs = titik.map((p) => p.x);
    const ys = titik.map((p) => p.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
    const lebar = maxX - minX + LABEL_W + 120;
    const tinggi = maxY - minY + 2 * R + 140;
    const fit = Math.min(viewport.w / lebar, viewport.h / tinggi);
    return { zoom: Math.max(ZOOM_MIN, Math.min(ZOOM_MAX, fit)), cx: (minX + maxX) / 2, cy: (minY + maxY) / 2 };
  };

  /** Ubah zoom perlahan dari `dari` ke `ke`; berhenti bila tur sudah dibatalkan. */
  const aniZoom = (dari: number, ke: number, ms: number, kunci: number, selesai: () => void) => {
    const mulai = performance.now();
    const frame = (now: number) => {
      if (tourRef.current !== kunci) return;
      const t = Math.min(1, (now - mulai) / ms);
      const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      setZoom(dari + (ke - dari) * e);
      if (t < 1) requestAnimationFrame(frame);
      else selesai();
    };
    requestAnimationFrame(frame);
  };

  /** Kamera mengikuti sebuah titik (bukan node) sampai tur dibatalkan atau fasenya diganti. */
  const ikutiTitik = (getTitik: () => Titik, kunci: number) => {
    cancelAnimationFrame(kameraRef.current);
    let terakhir = performance.now();
    const frame = (now: number) => {
      if (tourRef.current !== kunci) return;
      const el = scrollerRef.current;
      const k = kameraData.current;
      const p = getTitik();
      const dt = Math.min(0.05, (now - terakhir) / 1000);
      terakhir = now;
      if (el) {
        const dx = (p.x + k.offX) * k.zoom - k.w / 2 - el.scrollLeft;
        const dy = (p.y + k.offY) * k.zoom - k.h / 2 - el.scrollTop;
        const ikut = 1 - Math.exp(-dt * 7);
        el.scrollLeft += dx * ikut;
        el.scrollTop += dy * ikut;
      }
      kameraRef.current = requestAnimationFrame(frame);
    };
    kameraRef.current = requestAnimationFrame(frame);
  };

  /** Telusuri jalur dari peristiwa awal (pusat) ke tujuan: node muncul satu per satu, lalu seluruh jalur disorot
   *  sambil kamera memperkecil tampilan, dan terakhir kamera kembali memperbesar ke tujuan. */
  const jalankanTur = (targetId: string) => {
    if (!akarId) return;
    const path = cariJalur(akarId, targetId, edges);
    hentikanTur();
    const kunci = tourRef.current;
    offsetRef.current = null;
    setPanelBuka(false);
    setSebelumId(null);
    setSelectedId(null);
    setSesi([]);
    setGraf(path.length ? grafAwal(path) : { terbuka: [akarId], pos: { [akarId]: { x: 0, y: 0 } }, asal: {} });
    if (path.length === 0) {
      setJalur([]);
      setLangkah(-1);
      return;
    }
    setJalur(path);
    setLangkah(0);
    setTourAktif(true);
    const zoomAwal = zoom;
    tourInfoRef.current = { path, target: targetId, zoomAwal };
    pusatkan(akarId);
    const buka = (id: string) => {
      tourInfoRef.current = null;
      setTourAktif(false);
      setSorot(false);
      setSebelumId(null);
      setSelectedId(id);
      setPusat("ringkasan");
      mulaiSesi(id);
      pusatkan(id);
    };
    // fase akhir: perkecil ke seluruh jalur, sorot, lalu perbesar kembali ke tujuan dan buka cabangnya
    const faseAkhir = () => {
      if (tourRef.current !== kunci) return;
      const { zoom: kecil, cx, cy } = zoomPasJalur(grafJalur(path), path);
      const ke = Math.min(zoomAwal, kecil);
      ikutiTitik(() => ({ x: cx, y: cy }), kunci);
      aniZoom(zoomAwal, ke, 1100, kunci, () => {
        if (tourRef.current !== kunci) return;
        setSorot(true);
        window.setTimeout(() => {
          if (tourRef.current !== kunci) return;
          buka(targetId);
          aniZoom(ke, zoomAwal, 1100, kunci, () => {});
        }, 1600);
      });
    };
    if (path.length === 1) {
      window.setTimeout(() => { if (tourRef.current === kunci) buka(targetId); }, 700);
      return;
    }
    path.slice(1).forEach((id, i) => {
      window.setTimeout(() => {
        if (tourRef.current !== kunci) return;
        const dari = path[i];
        if (dari) setGraf((g) => tambahLangkah(g, dari, id, path));
        setLangkah(i + 1);
        pusatkan(id);
        if (i === path.length - 2) window.setTimeout(faseAkhir, 700);
      }, 800 + 1150 * (i + 1));
    });
  };

  /** Lewati animasi tur: langsung ke keadaan akhir (jalur lengkap, kamera di tujuan, cabang terbuka). */
  const lewatiTur = () => {
    const info = tourInfoRef.current;
    if (!info) return;
    hentikanTur();
    offsetRef.current = null;
    setGraf(grafJalur(info.path));
    setJalur(info.path);
    setLangkah(info.path.length - 1);
    setZoom(info.zoomAwal);
    setSebelumId(null);
    setSelectedId(info.target);
    setPusat("ringkasan");
    mulaiSesi(info.target);
    pusatkan(info.target);
  };

  const kirimCari = () => {
    const k = kata.trim();
    setKataAktif(k);
    if (!k) {
      batalkanCari();
      return;
    }
    const hasil = cocokUntuk(k);
    if (hasil[0]) jalankanTur(hasil[0].ev.id);
    else {
      hentikanTur();
      setJalur([]);
      setLangkah(-1);
    }
  };

  const batalkanCari = () => {
    hentikanTur();
    setKata("");
    setKataAktif("");
    setJalur([]);
    setLangkah(-1);
  };

  /** Munculkan peristiwa tujuan (terbang keluar dari peristiwa yang terhubung dengannya), lalu pilih. */
  const bukaDanPilih = (targetId: string) => {
    if (!terbukaSet.has(targetId)) {
      const sumber =
        selectedId && edges.some((e) => (e.dari === selectedId && e.ke === targetId) || (e.ke === selectedId && e.dari === targetId))
          ? selectedId
          : graf.terbuka.find((t) => edges.some((e) => (e.dari === t && e.ke === targetId) || (e.ke === t && e.dari === targetId)));
      if (sumber) setGraf((g) => bukaTetangga(g, sumber, edges, tahunDari, [targetId]));
    }
    klik(targetId);
  };

  /** Munculkan semua peristiwa pada satu sisi (penyebab atau akibat) dari node yang dibuka. */
  const munculkanSemua = (id: string, sisi: "sebab" | "akibat") => {
    const target = sisi === "sebab" ? edges.filter((e) => e.ke === id).map((e) => e.dari) : edges.filter((e) => e.dari === id).map((e) => e.ke);
    setGraf((g) => bukaTetangga(g, id, edges, tahunDari, target));
  };

  const mulaiGeser = (event: ReactPointerEvent<HTMLDivElement>) => {
    const t = event.target as HTMLElement;
    if (t.closest(".exam-node") || t.closest(".exam-kar")) return;
    const el = scrollerRef.current;
    if (!el) return;
    geserRef.current = { x: event.clientX, y: event.clientY, kiri: el.scrollLeft, atas: el.scrollTop };
    el.setPointerCapture(event.pointerId);
    setMenggeser(true);
  };
  const gerakGeser = (event: ReactPointerEvent<HTMLDivElement>) => {
    const g = geserRef.current;
    const el = scrollerRef.current;
    if (!g || !el) return;
    el.scrollLeft = g.kiri - (event.clientX - g.x);
    el.scrollTop = g.atas - (event.clientY - g.y);
  };
  const akhiriGeser = () => {
    geserRef.current = null;
    setMenggeser(false);
  };

  const ubahZoom = (delta: number) => setZoom((z) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, Math.round((z + delta) * 100) / 100)));

  const jumlahTerbuka = graf.terbuka.length;

  // karusel 3D cabang internal tiap sesi: di bawah node, atau di atas bila sisi bawah lebih ramai
  const grupKar = sesi.map((s) => {
    const p0 = graf.pos[s.id];
    const node = nodeById.get(s.id);
    if (!p0 || !node) return null;
    const sebabE = edges.filter((e) => e.ke === s.id);
    const akibatE = edges.filter((e) => e.dari === s.id);
    const hitung = (arah: 1 | -1) =>
      Object.entries(graf.pos).filter(([k, p]) => k !== s.id && Math.abs(p.x - p0.x) < 360 && (arah === 1 ? p.y > p0.y && p.y - p0.y < 360 : p.y < p0.y && p0.y - p.y < 360)).length;
    const bawah = hitung(1) <= hitung(-1);
    return { sesi: s, node, p0, sebabE, akibatE, bawah };
  });

  return (
    <main className={"exam-page" + (selected && panelBuka ? " has-detail" : "")}>
      <div className="exam-bg" aria-hidden="true">
        {!latarGagal && <Lightfall
          onError={(error) => {
            console.error("[Materi Evaluasi] Latar Lightfall gagal dimuat, latar dimatikan:", error);
            setLatarGagal(true);
          }}
          colors={["#9fe0d9", "#7fc4bf", "#e8f6f3", "#3a8f88"]}
          backgroundColor="#1d5a55"
          colorCycle={[
            ["#9fe0d9", "#7fc4bf", "#e8f6f3", "#3a8f88"], // toska
            ["#9cc4ff", "#6fa8e0", "#e6f0ff", "#3a6fc4"], // biru
            ["#cdb2ff", "#a78bdc", "#f1e8ff", "#6a4cc4"], // ungu
            ["#ff9c94", "#e0625a", "#ffe6e3", "#b8342d"], // merah
            ["#ffc08a", "#ee9450", "#fff0e0", "#d46a24"], // oranye
          ]}
          backgroundCycle={["#1d5a55", "#1d3f7a", "#3d2a7a", "#7a2a28", "#7a4318"]}
          cycleSeconds={75}
          dpr={1}
          speed={0.35}
          streakCount={3}
          streakWidth={0.9}
          twinkle={0.5}
          backgroundGlow={0.12}
          headGlow={0.5}
          bloom={0.4}
          glow={0.8}
          depth={0.6}
          opacity={0.75}
          mouseInteraction
          mouseStrength={0.3}
          mouseRadius={0.2}
          holdToWarp={false}
          intro
          fade={0.05}
        />}
      </div>
      <header className="exam-header">
        <button type="button" className="exam-back" onClick={onBack}>← Menu</button>
        <div className="exam-heading">
          <h1>Materi Evaluasi</h1>
        </div>
      </header>

      <section className="exam-controls" aria-label="Filter materi">
        <div className="exam-chip-row" role="group" aria-label="Era">
          {([["semua", "Gabungan"], [1, "Era 1 (1200–1617)"], [2, "Era 2 (1600–1800)"], [3, "Era 3 (1800–2026)"]] as [EraFilter, string][]).map(([nilai, label]) => (
            <button
              key={String(nilai)}
              type="button"
              className={"exam-chip" + (eraFilter === nilai ? " is-on" : "")}
              aria-pressed={eraFilter === nilai}
              onClick={() => setEraFilter(nilai)}
            >{label}</button>
          ))}
        </div>
        <select
          className="exam-select"
          value={kategori}
          aria-label="Kategori"
          onChange={(event) => setKategori(event.target.value as KategoriFilter)}
        >
          <option value="semua">Semua kategori</option>
          {(Object.keys(KATEGORI_LABEL) as KategoriId[]).map((k) => (
            <option key={k} value={k}>{KATEGORI_LABEL[k]}</option>
          ))}
        </select>
        <button type="button" className="exam-chip" onClick={mulaiUlang}>Mulai ulang</button>
        <button type="button" className="exam-chip" onClick={bukaSemua} disabled={jumlahTerbuka >= nodes.length}>Buka semua</button>
        <div className="exam-zoom" role="group" aria-label="Zoom">
          <button type="button" className="exam-chip" onClick={() => ubahZoom(-0.15)} aria-label="Perkecil">−</button>
          <button type="button" className="exam-chip" onClick={() => setZoom(1)} aria-label="Zoom 100 persen">{Math.round(zoom * 100)}%</button>
          <button type="button" className="exam-chip" onClick={() => ubahZoom(0.15)} aria-label="Perbesar">+</button>
        </div>
        <form
          className="exam-cari"
          role="search"
          onSubmit={(event) => {
            event.preventDefault();
            kirimCari();
          }}
        >
          <input
            className="exam-cari-input"
            type="search"
            value={kata}
            onChange={(event) => setKata(event.target.value)}
            placeholder="Cari kata kunci: Portugis, Majapahit, Aceh…"
            aria-label="Cari peristiwa dengan kata kunci"
          />
          <button type="submit" className="exam-chip is-on">Cari</button>
          {tourAktif && <button type="button" className="exam-chip" onClick={lewatiTur}>Lewati animasi</button>}
          {(kata || kataAktif) && <button type="button" className="exam-chip" onClick={batalkanCari}>Hapus</button>}
        </form>
        <p className="exam-count">{jumlahTerbuka} dari {nodes.length} peristiwa dimunculkan</p>
      </section>

      {kataAktif && (
        <section className="exam-hasil" aria-live="polite">
          {hasilCari.length === 0 ? (
            <p className="exam-hasil-info">Tidak ada peristiwa yang cocok dengan “{kataAktif}”.</p>
          ) : (
            <>
              <p className="exam-hasil-info">
                {hasilCari.length} hasil untuk “{kataAktif}”.
                {jalur.length > 1 ? ` Menelusuri jalur dari awal: langkah ${Math.min(Math.max(langkah, 0), jalur.length - 1)} dari ${jalur.length - 1}.` : jalur.length === 1 ? " Hasil ini adalah peristiwa awal." : " Tidak ada jalur dari peristiwa awal."}
              </p>
              <div className="exam-hasil-daftar">
                {hasilCari.slice(0, 14).map((n) => (
                  <button
                    key={n.ev.id}
                    type="button"
                    className={"exam-chip" + (jalur[jalur.length - 1] === n.ev.id ? " is-on" : "")}
                    onClick={() => jalankanTur(n.ev.id)}
                    title={n.ev.judul}
                  >
                    {tahunNilai(n.ev)} · {n.ev.judul.length > 34 ? `${n.ev.judul.slice(0, 33)}…` : n.ev.judul}
                  </button>
                ))}
                {jalur.length > 0 && (
                  <button type="button" className="exam-chip" onClick={() => { const akhir = jalur[jalur.length - 1]; if (akhir) jalankanTur(akhir); }}>
                    Putar ulang
                  </button>
                )}
              </div>
            </>
          )}
        </section>
      )}

      <div
        className={"exam-scroller" + (menggeser ? " is-dragging" : "")}
        ref={scrollerRef}
        onPointerDown={mulaiGeser}
        onPointerMove={gerakGeser}
        onPointerUp={akhiriGeser}
        onPointerCancel={akhiriGeser}
      >
        <div className="exam-zoomwrap" style={{ width: batas.lebar * zoom, height: batas.tinggi * zoom }}>
          <div className={"exam-stage" + (edgeTampil.length > 10 ? " exam-stage--banyak" : "") + (sorot ? " exam-stage--sorot" : "")} style={{ width: batas.lebar, height: batas.tinggi, transform: `scale(${zoom})` }}>
            <svg className="exam-lines" width={batas.lebar} height={batas.tinggi} viewBox={`0 0 ${batas.lebar} ${batas.tinggi}`} aria-hidden="true">
              <defs>
                {([1, 2] as const).map((era) => (
                  <marker key={era} id={`exam-arrow-${era}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
                    <path d="M 0 0 L 10 5 L 0 10 z" fill={WARNA_ERA[era]} />
                  </marker>
                ))}
              </defs>
              {edgeTampil.map((e) => {
                const a = graf.pos[e.dari];
                const b = graf.pos[e.ke];
                const nodeB = nodeById.get(e.ke);
                if (!a || !b || !nodeB) return null;
                const d = jalurGaris(layar(a), layar(b));
                const lit = selectedId !== null && (e.dari === selectedId || e.ke === selectedId);
                const dijalur = jalurEdge.has(`${e.dari}>${e.ke}`);
                const baru = jalurBaru.has(`${e.dari}>${e.ke}`);
                const redup = !dijalur && ((selectedId !== null && !lit) || (jalurAktif && selectedId === null));
                return (
                  <g
                    key={`${e.dari}>${e.ke}`}
                    className={`exam-edge exam-edge--era${nodeB.era}${lit ? " is-lit" : ""}${dijalur ? " is-jalur" : ""}${baru ? " is-jalur-baru" : ""}${redup ? " is-dim" : ""}`}
                  >
                    <path className="exam-edge-base" d={d} pathLength={1} markerEnd={`url(#exam-arrow-${nodeB.era})`} />
                    <path className="exam-edge-flow" d={d} />
                  </g>
                );
              })}

              {/* garis dari node ke karusel cabang internalnya */}
              {grupKar.map((g) => {
                if (!g) return null;
                const pn = layar(g.p0);
                const arah = g.bawah ? 1 : -1;
                return (
                  <g key={`garis-${g.sesi.kunci}`} className={"exam-grup-garis" + (g.sesi.menutup ? " is-menutup" : "")}>
                    <path
                      className="exam-facet-line exam-facet-line--ringkasan"
                      d={`M ${pn.x} ${pn.y + arah * (R + 3)} L ${pn.x} ${pn.y + arah * (R + (g.bawah ? 70 : 22))}`}
                      pathLength={1}
                    />
                  </g>
                );
              })}
            </svg>

            {graf.terbuka.map((id) => {
              const n = nodeById.get(id);
              const p0 = graf.pos[id];
              if (!n || !p0) return null;
              const p = layar(p0);
              const aktif = id === selectedId;
              const dijalur = jalurSet.has(id);
              const asalId = graf.asal[id];
              const pa = asalId ? graf.pos[asalId] : undefined;
              return (
                <NodeView
                  key={id}
                  id={id}
                  n={n}
                  left={p.x - LABEL_W / 2}
                  top={p.y - R}
                  dx={pa ? pa.x - p0.x : 0}
                  dy={pa ? pa.y - p0.y : 0}
                  aktif={aktif}
                  mundur={selectedId !== null && id === sebelumId && !aktif}
                  redup={!dijalur && ((selectedId !== null && !tetangga.has(id)) || (jalurAktif && selectedId === null))}
                  dijalur={dijalur}
                  cocok={cocokSet.has(id)}
                  masihAda={edges.some((e) => (e.dari === id && !terbukaSet.has(e.ke)) || (e.ke === id && !terbukaSet.has(e.dari)))}
                  gambar={GAMBAR_NODE[id]?.url}
                  onKlik={onKlik}
                />
              );
            })}

            {/* karusel 3D cabang internal: satu kartu di tengah, dua kartu serong di kiri dan kanan */}
            {grupKar.map((g) => {
              if (!g) return null;
              const pn = layar(g.p0);
              const idxPusat = URUT_KARTU.indexOf(pusat);
              const awalY = g.bawah ? -(R + 70) : R + 22;
              return (
                <div
                  key={`kar-${g.sesi.kunci}`}
                  className={"exam-kar" + (g.sesi.menutup ? " is-menutup" : "") + (g.bawah ? " is-bawah" : " is-atas")}
                  style={{ left: pn.x, top: g.bawah ? pn.y + R + 70 : pn.y - R - 22, ["--fy" as string]: `${awalY}px` }}
                >
                  <div className="exam-kar-pos">
                    <div className="exam-kar-anim">
                      <div className="exam-kar-panggung">
                        {URUT_KARTU.map((jenis, i) => {
                          const posisi = jenis === pusat ? "tengah" : i === (idxPusat + 1) % 3 ? "kanan" : "kiri";
                          const tautan = jenis === "sebab" ? g.sebabE : g.akibatE;
                          const sisa = tautan.filter((e) => !terbukaSet.has(jenis === "sebab" ? e.dari : e.ke)).length;
                          return (
                            <div
                              key={jenis}
                              className={`exam-kar-kartu is-${posisi}`}
                              onClick={(event) => {
                                // klik pada bagian kosong kartu samping membawanya ke tengah; tombol di dalamnya tetap berfungsi sendiri
                                if (posisi !== "tengah" && !(event.target as HTMLElement).closest("button, a")) setPusat(jenis);
                              }}
                              role={posisi === "tengah" ? undefined : "button"}
                              tabIndex={posisi === "tengah" ? undefined : 0}
                              aria-label={posisi === "tengah" ? undefined : `Tampilkan ${FACET_LABEL[jenis]}`}
                              onKeyDown={(event) => { if (posisi !== "tengah" && (event.key === "Enter" || event.key === " ")) setPusat(jenis); }}
                            >
                              <CardContainer containerClassName="exam-c3d">
                                <CardBody className={`exam-kartu exam-kartu--${jenis}`}>
                                  <CardItem as="h4" translateZ={55} className="c3d-item--full">
                                    {FACET_LABEL[jenis]}{jenis === "ringkasan" ? "" : ` · ${tautan.length}`}
                                  </CardItem>
                                  {jenis === "ringkasan" && (
                                    <>
                                      <CardItem as="p" translateZ={40} className="exam-kartu-meta c3d-item--full">{g.node.ev.tahun} · {g.node.ev.lokasi.nama}</CardItem>
                                      <CardItem as="p" translateZ={75} className="c3d-item--full">{g.node.ev.ringkas}</CardItem>
                                      <CardItem as="button" translateZ={50} type="button" className="exam-kartu-semua" onClick={() => setPanelBuka(true)}>
                                        Detail lengkap ›
                                      </CardItem>
                                    </>
                                  )}
                                  {jenis !== "ringkasan" && tautan.length === 0 && (
                                    <CardItem as="p" translateZ={60} className="exam-kartu-kosong c3d-item--full">
                                      {jenis === "sebab" ? "Awal rantai: tidak ada penyebab lain di peta ini." : "Ujung rantai: tidak ada kelanjutan di peta ini."}
                                    </CardItem>
                                  )}
                                  {jenis !== "ringkasan" && tautan.length > 0 && (
                                    <>
                                      <CardItem translateZ={65} className="c3d-item--full">
                                        <ul className="exam-kartu-daftar">
                                          {tautan.map((e) => {
                                            const tujuan = jenis === "sebab" ? e.dari : e.ke;
                                            const tn = nodeById.get(tujuan);
                                            return (
                                              <li key={tujuan}>
                                                <button type="button" onClick={() => bukaDanPilih(tujuan)}>
                                                  <strong>{tn?.ev.judul ?? tujuan}</strong>
                                                  <span>{tn?.ev.tahun}{terbukaSet.has(tujuan) ? "" : " · baru"}</span>
                                                </button>
                                                <small>{e.label}</small>
                                              </li>
                                            );
                                          })}
                                        </ul>
                                      </CardItem>
                                      {sisa > 1 && (
                                        <CardItem as="button" translateZ={45} type="button" className="exam-kartu-semua" onClick={() => munculkanSemua(g.sesi.id, jenis)}>
                                          Munculkan semua ({sisa})
                                        </CardItem>
                                      )}
                                    </>
                                  )}
                                </CardBody>
                              </CardContainer>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {nodes.length === 0 && <p className="exam-empty">Tidak ada peristiwa untuk filter ini.</p>}
          </div>
        </div>
      </div>

      {selected && panelBuka && (
        <Detail
          key={selected.ev.id}
          node={selected}
          level={level}
          onLevel={setLevel}
          sebab={sebab.map((e) => ({ id: e.dari, label: e.label, node: nodeById.get(e.dari), muncul: terbukaSet.has(e.dari) }))}
          akibat={akibat.map((e) => ({ id: e.ke, label: e.label, node: nodeById.get(e.ke), muncul: terbukaSet.has(e.ke) }))}
          onPick={bukaDanPilih}
          onClose={() => setPanelBuka(false)}
        />
      )}
    </main>
  );
}

interface Tautan {
  id: string;
  label: string;
  node?: Node;
  muncul: boolean;
}

interface DetailProps {
  node: Node;
  level: LevelBahasa;
  onLevel: (level: LevelBahasa) => void;
  sebab: Tautan[];
  akibat: Tautan[];
  onPick: (id: string) => void;
  onClose: () => void;
}

function Detail({ node, level, onLevel, sebab, akibat, onPick, onClose }: DetailProps) {
  const ev = node.ev;
  const [jawab, setJawab] = useState<number | null>(null);
  const kunci = `L${level}` as "L1" | "L2" | "L3";
  const benar = ev.kuis.benar;

  const daftar = (judul: string, items: Tautan[], kosong: string) => (
    <section className="exam-block exam-rel">
      <h3>{judul}</h3>
      {items.length === 0 ? (
        <p className="exam-rel-kosong">{kosong}</p>
      ) : (
        <ul>
          {items.map((t) => (
            <li key={t.id}>
              <button type="button" onClick={() => onPick(t.id)}>
                <strong>{t.node?.ev.judul ?? t.id}</strong>
                <span>{t.node?.ev.tahun}{t.muncul ? "" : " · baru"}</span>
              </button>
              <small>{t.label}</small>
            </li>
          ))}
        </ul>
      )}
    </section>
  );

  return (
    <aside className="exam-detail" aria-label={`Detail ${ev.judul}`}>
      <button type="button" className="exam-detail-close" onClick={onClose} aria-label="Tutup">×</button>

      <div className="exam-detail-tags">
        <span className={`exam-tag exam-tag--era${node.era}`}>Era {node.era}</span>
        <span className="exam-tag" style={{ borderColor: KATEGORI_WARNA[ev.kategori], color: KATEGORI_WARNA[ev.kategori] }}>
          {KATEGORI_LABEL[ev.kategori]}
        </span>
      </div>
      <h2>{ev.judul}</h2>
      <p className="exam-detail-meta">{ev.tahun} · {ev.lokasi.nama}</p>
      <p className="exam-detail-ringkas">{ev.ringkas}</p>

      {daftar("Penyebab / pendahulu", sebab, "Awal rantai: tidak ada penyebab lain yang tercatat di peta ini.")}
      {daftar("Akibat / kelanjutan", akibat, "Ujung rantai: tidak ada kelanjutan yang tercatat di peta ini.")}

      <div className="exam-level" role="group" aria-label="Tingkat bahasa">
        {([1, 2, 3] as LevelBahasa[]).map((l) => (
          <button key={l} type="button" className={"exam-chip" + (level === l ? " is-on" : "")} aria-pressed={level === l} onClick={() => onLevel(l)}>
            {LEVEL_LABEL[l]}
          </button>
        ))}
      </div>
      <p className="exam-detail-body">{ev.cerita[kunci]}</p>

      <section className="exam-block">
        <h3>Hasil historis</h3>
        <p>{ev.keputusan.hasilHistoris}</p>
      </section>

      <section className="exam-block exam-quiz">
        <h3>Uji diri</h3>
        <p className="exam-quiz-q">{ev.kuis.tanya}</p>
        <div className="exam-quiz-options">
          {ev.kuis.pilihan.map((p, i) => {
            const terjawab = jawab !== null;
            const klas = terjawab ? (i === benar ? " is-correct" : i === jawab ? " is-wrong" : "") : "";
            return (
              <button key={i} type="button" className={`exam-option${klas}`} disabled={terjawab} onClick={() => setJawab(i)}>{p}</button>
            );
          })}
        </div>
        {jawab !== null && (
          <p className={`exam-quiz-result ${jawab === benar ? "is-correct" : "is-wrong"}`}>
            {jawab === benar ? "Benar. " : "Belum tepat. "}{ev.kuis.penjelasan}
          </p>
        )}
      </section>

      {ev.catatan && (
        <section className="exam-block">
          <h3>Catatan</h3>
          <p>{ev.catatan}</p>
        </section>
      )}

      {ev.sumber.length > 0 && (
        <section className="exam-block">
          <h3>Sumber</h3>
          <ul>{ev.sumber.map((s, i) => <li key={i}>{s}</li>)}</ul>
        </section>
      )}
    </aside>
  );
}
