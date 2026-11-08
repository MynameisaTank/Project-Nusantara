import { KERAJAAN_ERA1, KOLONIAL_ERA1, type Kerajaan } from "./kerajaan";
import { TIMOR_LESTE_RINGS } from "./wilayahGeo";
import { KERAJAAN_BARU } from "./kerajaanBaru";

/* Wilayah era 2 (1600–1800). Bentuknya dipakai ulang dari era 1; hanya perkiraan kasar. */
type Timeline = [number, number][];

const TIMELINE: Record<string, Timeline> = {
  // kerajaan lokal
  aceh: [[1600, 0.85], [1636, 0.9], [1700, 0.55], [1800, 0.35]],
  banten: [[1600, 0.6], [1650, 0.85], [1682, 0.5], [1700, 0.35], [1800, 0.1]],
  mataram: [[1600, 0.6], [1613, 0.9], [1645, 1], [1677, 0.7], [1700, 0.5], [1755, 0.35], [1756, 0]],
  "gowa-tallo": [[1600, 0.6], [1640, 0.85], [1667, 0.7], [1669, 0.1], [1670, 0]],
  bone: [[1600, 0.4], [1669, 0.6], [1700, 0.5], [1800, 0.4]],
  ternate: [[1600, 0.8], [1650, 0.7], [1700, 0.55], [1800, 0.4]],
  tidore: [[1600, 0.45], [1700, 0.4], [1800, 0.35]],
  banjar: [[1600, 0.5], [1700, 0.55], [1800, 0.5]],
  cirebon: [[1600, 0.5], [1700, 0.4], [1800, 0.3]],
  madura: [[1600, 0.35], [1624, 0.5], [1747, 0.5], [1800, 0.35]],
  brunei: [[1600, 0.45], [1700, 0.4], [1800, 0.35]],
  jambi: [[1600, 0.35], [1700, 0.3], [1800, 0.25]],
  pagaruyung: [[1600, 0.35], [1700, 0.35], [1800, 0.3]],
  sukadana: [[1600, 0.3], [1700, 0.2], [1800, 0.15]],
  lombok: [[1600, 0.18], [1700, 0.25], [1800, 0.25]],
  bima: [[1600, 0.35], [1700, 0.3], [1800, 0.3]],
  blambangan: [[1600, 0.3], [1767, 0.3], [1768, 0]],
  kutai: [[1600, 0.4], [1800, 0.35]],
  // pos dan wilayah kolonial (jenis "kolonial", boleh tumpang tindih)
  "melaka-portugis": [[1600, 0.95], [1641, 0.95], [1642, 0]],
  "solor-portugis": [[1600, 0.65], [1613, 0]],
  "ternate-spanyol": [[1600, 0.6], [1606, 0.6], [1663, 0.6], [1664, 0]],
  "ambon-voc": [[1605, 0.3], [1610, 0.6], [1700, 0.75], [1800, 0.8]],
  "banda-voc": [[1609, 0.2], [1621, 0.6], [1800, 0.6]],
  larantuka: [[1613, 0.3], [1800, 0.35]],
};

const BASE = [...KERAJAAN_ERA1, ...KOLONIAL_ERA1];
const fromEra1 = (id: string, timeline: Timeline): Kerajaan[] => {
  const base = BASE.find((k) => k.id === id);
  return base ? [{ ...base, kekuatan: timeline }] : [];
};

const POS_BARU: Kerajaan[] = [
  {
    id: "melaka-voc",
    nama: "Melaka (VOC)",
    warna: "#f2a65a",
    jenis: "kolonial",
    wilayah: BASE.find((k) => k.id === "melaka-portugis")?.wilayah ?? [],
    kekuatan: [[1641, 0.9], [1800, 0.9]],
  },
  {
    id: "batavia-voc",
    nama: "Batavia (VOC)",
    warna: "#e8803a",
    jenis: "kolonial",
    labelPoint: [-6.13, 106.81],
    wilayah: [[[-6.22, 106.75], [-6.22, 106.92], [-6.03, 106.92], [-6.03, 106.75]]],
    kekuatan: [[1619, 0.8], [1800, 0.9]],
  },
  {
    id: "semarang-voc",
    nama: "Semarang (VOC)",
    warna: "#d9893f",
    jenis: "kolonial",
    labelPoint: [-6.97, 110.42],
    wilayah: [[[-7.05, 110.36], [-7.05, 110.52], [-6.9, 110.52], [-6.9, 110.36]]],
    kekuatan: [[1743, 0.7], [1800, 0.7]],
  },
  {
    id: "priangan-voc",
    nama: "Priangan (VOC)",
    warna: "#c97a3a",
    jenis: "kolonial",
    labelPoint: [-7.0, 107.6],
    wilayah: [[[-7.2, 107.4], [-7.2, 107.8], [-6.85, 107.8], [-6.85, 107.4]]],
    kekuatan: [[1720, 0.5], [1800, 0.5]],
  },
  {
    id: "timor-portugis",
    nama: "Timor Portugis (Portugal)",
    warna: "#4a90c8",
    jenis: "kolonial",
    labelPoint: [-8.8, 126.0],
    wilayah: TIMOR_LESTE_RINGS,
    kekuatan: [[1640, 0.4], [1800, 0.6]],
  },
  {
    id: "tidore-spanyol",
    nama: "Tidore (Spanyol)",
    warna: "#c0392b",
    jenis: "kolonial",
    labelPoint: [0.68, 127.4],
    wilayah: BASE.find((k) => k.id === "tidore")?.wilayah ?? [],
    kekuatan: [[1606, 0.55], [1663, 0.55], [1664, 0]],
  },
  {
    id: "banten-inggris",
    nama: "Banten (Inggris)",
    warna: "#7d5fb8",
    jenis: "kolonial",
    labelPoint: [-6.04, 106.16],
    wilayah: [[[-6.07, 106.13], [-6.07, 106.19], [-6.01, 106.19], [-6.01, 106.13]]],
    kekuatan: [[1602, 0.3], [1682, 0.3], [1683, 0]],
  },
  {
    id: "bengkulu-inggris",
    nama: "Bengkulu (Inggris)",
    warna: "#7d5fb8",
    jenis: "kolonial",
    labelPoint: [-3.8, 102.27],
    wilayah: [[[-3.9, 102.2], [-3.9, 102.35], [-3.75, 102.35], [-3.75, 102.2]]],
    kekuatan: [[1685, 0.5], [1800, 0.5]],
  },
  {
    id: "ambon-inggris",
    nama: "Ambon (Inggris)",
    warna: "#7d5fb8",
    jenis: "kolonial",
    labelPoint: [-3.7, 128.18],
    wilayah: BASE.find((k) => k.id === "ambon-voc")?.wilayah ?? [],
    kekuatan: [[1796, 0.6], [1802, 0]],
  },
];

// Belanda oranye, Portugis biru, Spanyol merah, Inggris ungu. Bawahan VOC oranye muda.
const WARNA_PER_ID: Record<string, string> = {
  "melaka-voc": "#e8803a",
  "batavia-voc": "#e8803a",
  "semarang-voc": "#e8803a",
  "priangan-voc": "#e8803a",
  "ambon-voc": "#e8803a",
  "banda-voc": "#e8803a",
  "melaka-portugis": "#4a90c8",
  "solor-portugis": "#4a90c8",
  larantuka: "#4a90c8",
  "ternate-spanyol": "#c0392b",
};

const BONEKA_BELANDA = ["banten", "cirebon", "mataram", "madura", "bone", "banjar", "bima", "ternate"];
const WARNA_BONEKA = "#ec9a5c";

export const WILAYAH_ERA2: Kerajaan[] = [
  ...Object.entries(TIMELINE).flatMap(([id, timeline]) => fromEra1(id, timeline)),
  ...POS_BARU,
  ...KERAJAAN_BARU,
].map((k) => ({
  ...k,
  warna: BONEKA_BELANDA.includes(k.id) ? WARNA_BONEKA : (WARNA_PER_ID[k.id] ?? k.warna),
}));
