import type { Kerajaan } from "./kerajaan";
import { GEO_ERA3 } from "./wilayahEra3Geo";

/*
 * Wilayah era 3 (1800–2026), dari provinsi modern sebagai perkiraan kasar.
 * Peralihan kekuasaan sering bertahap, jadi kerajaan lokal dan kolonial sengaja tumpang tindih selama perang.
 */

/** [mulai, akhir, kekuatan awal, kekuatan akhir (opsional)] */
type Segmen = [number, number, number, number?];

function garisWaktu(segmen: Segmen[]): [number, number][] {
  const hasil: [number, number][] = [];
  segmen.forEach(([mulai, akhir, awal, ujung = awal], i) => {
    const sebelum = segmen[i - 1];
    if (sebelum && mulai > sebelum[1] + 1) hasil.push([sebelum[1] + 1, 0], [mulai - 1, 0]);
    hasil.push([mulai, awal], [akhir, ujung]);
  });
  return hasil;
}

interface Fase {
  id: string;
  nama: string;
  warna: string;
  geo: string | [number, number][][];
  segmen: Segmen[];
  grup?: string;
  chip?: string;
  tanpaLabel?: boolean;
  labelPoint?: [number, number];
  catatan?: string;
}

const WARNA = {
  hindiaBelanda: "#e8803a",
  swapraja: "#ec9a5c",
  inggris: "#7d5fb8",
  portugis: "#4a90c8",
  jepang: "#3d3d4a",
  republik: "#cf3b3b",
  nica: "#d99a4e",
  pbb: "#5aa9e6",
};

const CHIP = {
  kolonial: "Wilayah kolonial",
  swapraja: "Kerajaan di bawah Hindia Belanda",
  jepang: "Pendudukan militer",
  negara: "Negara",
  pbb: "Pemerintahan sementara PBB",
};

/** Hanya potongan Jawa Barat yang diberi label supaya peta tidak penuh tulisan. */
function hindiaBelanda(daerah: string, namaDaerah: string, segmen: Segmen[], catatan: string): Fase {
  return {
    id: `hb-${daerah}`,
    nama: `Hindia Belanda (${namaDaerah})`,
    warna: WARNA.hindiaBelanda,
    geo: daerah,
    segmen,
    grup: "hindia-belanda",
    chip: CHIP.kolonial,
    tanpaLabel: true,
    catatan,
  };
}

/** Kotak kasar di sekitar Solo, karena provinsinya juga mencakup pesisir milik Belanda. */
const SURAKARTA: [number, number][][] = [[[-7.78, 110.62], [-7.78, 111.12], [-7.38, 111.12], [-7.38, 110.62], [-7.78, 110.62]]];

const FASE: Fase[] = [
  // ——— Sumatra ———
  {
    id: "e3-aceh", nama: "Kesultanan Aceh", warna: "#9e3a2f", geo: "aceh", grup: "aceh", labelPoint: [4.4, 96.9],
    segmen: [[1800, 1873, 0.45], [1874, 1903, 0.35, 0.08]],
    catatan: "Aceh tetap berdaulat dan berdagang lada dengan kapal Amerika, Inggris, dan Prancis sampai Belanda menyerang pada 1873. Kekuatannya menurun selama Perang Aceh.",
  },
  hindiaBelanda("aceh", "Aceh", [[1874, 1903, 0.25, 0.8], [1904, 1941, 0.85]],
    "Belanda menyatakan perang pada 1873 dan merebut Kutaraja pada 1874. Penguasaan dianggap selesai sekitar 1904, tetapi perlawanan gerilya masih berlanjut setelahnya."),
  {
    id: "e3-sumut", nama: "Deli dan Tanah Batak", warna: "#9a7fb5", geo: "sumut", grup: "deli", labelPoint: [2.4, 99.1],
    segmen: [[1800, 1862, 0.35], [1863, 1907, 0.3, 0.08]],
    catatan: "Kesultanan Deli di pesisir timur menerima perlindungan Belanda sekitar 1862. Tanah Batak di pedalaman baru dikuasai setelah Sisingamangaraja XII gugur pada 1907.",
  },
  hindiaBelanda("sumut", "Sumatra Timur dan Tapanuli", [[1863, 1907, 0.25, 0.8], [1908, 1941, 0.85]],
    "Sejak 1860-an pesisir timur berubah menjadi kawasan perkebunan tembakau dan karet dengan Medan sebagai pusatnya."),
  {
    id: "e3-sumbar", nama: "Minangkabau", warna: "#a35d3b", geo: "sumbar", grup: "pagaruyung", labelPoint: [-0.7, 100.6],
    segmen: [[1800, 1820, 0.4], [1821, 1837, 0.35, 0.1]],
    catatan: "Perang Padri (1803–1838) mempertemukan kaum Padri, kaum adat, dan Belanda. Belanda masuk pada 1821 setelah sebagian pemuka adat meminta bantuan.",
  },
  hindiaBelanda("sumbar", "Sumatra Barat", [[1821, 1837, 0.25, 0.8], [1838, 1941, 0.85]],
    "Benteng Bonjol jatuh pada 1837 dan Tuanku Imam Bonjol diasingkan. Setelah itu Belanda mewajibkan penanaman kopi di dataran tinggi Minangkabau."),
  {
    id: "e3-siak", nama: "Siak Sri Indrapura", warna: "#5f8fb0", geo: "riau", grup: "siak", labelPoint: [0.5, 101.6],
    segmen: [[1800, 1857, 0.4]],
    catatan: "Siak menguasai pesisir timur Sumatra bagian tengah dan jalur sungainya.",
  },
  {
    id: "e3-siak-swapraja", nama: "Siak (swapraja)", warna: WARNA.swapraja, geo: "riau", grup: "siak", chip: CHIP.swapraja, labelPoint: [0.5, 101.6],
    segmen: [[1858, 1941, 0.5]],
    catatan: "Lewat perjanjian 1858 Siak menjadi swapraja di bawah Hindia Belanda. Sultan terakhirnya, Syarif Kasim II, menyerahkan kerajaannya kepada Republik Indonesia setelah proklamasi.",
  },
  {
    id: "e3-riau-lingga", nama: "Riau-Lingga", warna: "#3f8f8a", geo: "kepri", grup: "riau-lingga", labelPoint: [0.2, 104.5],
    segmen: [[1800, 1823, 0.4]],
    catatan: "Riau-Lingga meneruskan tradisi Kesultanan Johor-Riau di kepulauan.",
  },
  {
    id: "e3-riau-lingga-swapraja", nama: "Riau-Lingga (swapraja)", warna: WARNA.swapraja, geo: "kepri", grup: "riau-lingga", chip: CHIP.swapraja, labelPoint: [0.2, 104.5],
    segmen: [[1824, 1910, 0.45]],
    catatan: "Traktat London 1824 memisahkan Riau-Lingga dari Johor. Belanda menurunkan sultannya pada 1911 dan menghapus kesultanan ini tak lama kemudian.",
  },
  hindiaBelanda("kepri", "Kepulauan Riau", [[1911, 1941, 0.8]],
    "Setelah kesultanan dihapus, kepulauan ini diperintah langsung oleh Belanda."),
  {
    id: "e3-jambi", nama: "Kesultanan Jambi", warna: "#8c7a3e", geo: "jambi", grup: "jambi", labelPoint: [-1.7, 103.0],
    segmen: [[1800, 1857, 0.35], [1858, 1904, 0.3, 0.08]],
    catatan: "Sultan Thaha Syaifuddin menolak perjanjian dengan Belanda dan memimpin perlawanan sampai gugur pada 1904.",
  },
  hindiaBelanda("jambi", "Jambi", [[1858, 1904, 0.3, 0.8], [1905, 1941, 0.85]],
    "Belanda menduduki kota Jambi pada 1858, tetapi pedalaman baru dikuasai setelah 1904."),
  {
    id: "e3-palembang", nama: "Kesultanan Palembang", warna: "#7a9e3c", geo: "sumsel", grup: "palembang", labelPoint: [-3.2, 104.2],
    segmen: [[1800, 1811, 0.45], [1812, 1821, 0.35, 0.15]],
    catatan: "Sultan Mahmud Badaruddin II melawan Inggris (1812) dan Belanda (1819–1821). Belanda menghapus kesultanan pada 1823.",
  },
  hindiaBelanda("sumsel", "Palembang", [[1821, 1941, 0.85]],
    "Setelah kesultanan dihapus, Palembang diperintah langsung dan kemudian tumbuh lewat perkebunan karet dan minyak bumi."),
  {
    id: "e3-bangka", nama: "Bangka-Belitung (Palembang)", warna: "#7a9e3c", geo: "babel", grup: "palembang", labelPoint: [-2.3, 106.3],
    segmen: [[1800, 1811, 0.35]],
    catatan: "Bangka dan Belitung, pulau penghasil timah, berada di bawah Kesultanan Palembang.",
  },
  {
    id: "e3-bangka-inggris", nama: "Bangka (Inggris)", warna: WARNA.inggris, geo: "babel", grup: "inggris-jawa", chip: CHIP.kolonial, labelPoint: [-2.3, 106.3],
    segmen: [[1812, 1816, 0.6]],
    catatan: "Inggris mengambil Bangka dari Palembang pada 1812 dan menyerahkannya kepada Belanda pada 1816.",
  },
  hindiaBelanda("babel", "Bangka-Belitung", [[1817, 1941, 0.85]],
    "Tambang timah Bangka dan Belitung menjadi salah satu sumber pendapatan utama Hindia Belanda."),
  {
    id: "e3-bengkulu-inggris", nama: "Bengkulu (Inggris)", warna: WARNA.inggris, geo: "bengkulu", grup: "bengkulu-inggris", chip: CHIP.kolonial, labelPoint: [-3.8, 102.4],
    segmen: [[1800, 1824, 0.55]],
    catatan: "Bengkulu (Bencoolen) adalah pos Inggris sejak 1685. Raffles menjabat Letnan Gubernur di sini pada 1818–1824.",
  },
  hindiaBelanda("bengkulu", "Bengkulu", [[1825, 1941, 0.8]],
    "Bengkulu diserahkan kepada Belanda berdasarkan Traktat London 1824. Sukarno diasingkan di sini pada 1938–1942."),
  {
    id: "e3-lampung", nama: "Lampung", warna: "#6e8f5a", geo: "lampung", grup: "lampung", labelPoint: [-4.9, 105.0],
    segmen: [[1800, 1856, 0.3, 0.12]],
    catatan: "Lampung lama terikat pada Banten. Perlawanan Raden Intan II berakhir dengan kematiannya pada 1856.",
  },
  hindiaBelanda("lampung", "Lampung", [[1808, 1855, 0.15, 0.5], [1856, 1941, 0.8]],
    "Belanda menguasai Lampung secara efektif setelah 1856. Sejak 1905 Lampung menjadi tujuan kolonisasi petani dari Jawa, cikal bakal transmigrasi."),

  // ——— Jawa ———
  {
    id: "e3-banten", nama: "Kesultanan Banten", warna: WARNA.swapraja, geo: "banten", grup: "banten", chip: CHIP.swapraja, labelPoint: [-6.4, 106.1],
    segmen: [[1800, 1808, 0.4]],
    catatan: "Daendels mengambil alih sebagian besar kekuasaan sultan pada 1808, dan Raffles menghapus kesultanan pada 1813.",
  },
  hindiaBelanda("banten", "Banten", [[1809, 1810, 0.75], [1816, 1941, 0.85]],
    "Banten diperintah sebagai keresidenan. Pemberontakan petani Cilegon pecah di sini pada 1888."),
  hindiaBelanda("jakarta", "Batavia", [[1800, 1810, 0.9], [1816, 1941, 0.9]],
    "Batavia menjadi ibu kota Hindia Belanda. Daendels memindahkan pusat pemerintahan ke Weltevreden yang lebih sehat di selatan kota lama."),
  {
    ...hindiaBelanda("jabar", "Jawa Barat", [[1800, 1810, 0.7], [1816, 1941, 0.85]],
      "Priangan menjadi pusat tanam wajib kopi sejak masa VOC, dan Bandung kemudian tumbuh sebagai kota kolonial. Kesultanan Cirebon kehilangan kekuasaan politiknya pada awal abad ke-19."),
    nama: "Hindia Belanda",
    tanpaLabel: false,
    labelPoint: [-6.95, 107.6],
  },
  hindiaBelanda("jateng", "Jawa Tengah", [[1800, 1810, 0.6], [1816, 1941, 0.85]],
    "Pesisir utara dan Semarang diperintah Belanda, sedangkan pedalaman sekitar Surakarta tetap wilayah kerajaan. Setelah Perang Jawa (1825–1830) Belanda mengambil alih banyak daerah mancanegara milik kerajaan."),
  {
    id: "e3-surakarta", nama: "Surakarta", warna: WARNA.swapraja, geo: SURAKARTA, grup: "surakarta", chip: CHIP.swapraja, labelPoint: [-7.57, 110.82],
    segmen: [[1800, 1941, 0.55]],
    catatan: "Kasunanan Surakarta dan Kadipaten Mangkunegaran tetap berdiri sebagai kerajaan di bawah kekuasaan kolonial. Status istimewanya berakhir pada 1946. Kotak ini hanya menandai pusat kerajaan.",
  },
  {
    id: "e3-yogyakarta", nama: "Yogyakarta", warna: WARNA.swapraja, geo: "yogya", grup: "yogyakarta", chip: CHIP.swapraja, labelPoint: [-7.85, 110.4],
    segmen: [[1800, 1941, 0.55]],
    catatan: "Kesultanan Yogyakarta dan Kadipaten Pakualaman (sejak 1812) berada di bawah kekuasaan kolonial. Pasukan Inggris menyerbu keraton pada 1812, dan Pangeran Diponegoro dari keraton ini memimpin Perang Jawa. Pada 1946–1949 Yogyakarta menjadi ibu kota Republik.",
  },
  hindiaBelanda("jatim", "Jawa Timur dan Madura", [[1800, 1810, 0.65], [1816, 1941, 0.85]],
    "Jawa Timur dan Madura diperintah langsung atau lewat bupati. Surabaya menjadi pelabuhan utama dan pusat industri gula."),
  {
    id: "e3-jawa-inggris", nama: "Jawa (Inggris)", warna: WARNA.inggris, geo: "g-jawa", grup: "inggris-jawa", chip: CHIP.kolonial, labelPoint: [-7.3, 110.0],
    segmen: [[1811, 1816, 0.8]],
    catatan: "Inggris merebut Jawa pada 1811 dan Raffles memerintah sebagai Letnan Gubernur. Jawa dikembalikan kepada Belanda pada 1816.",
  },

  // ——— Bali dan Nusa Tenggara ———
  {
    id: "e3-bali", nama: "Kerajaan-kerajaan Bali", warna: "#c0643f", geo: "bali", grup: "klungkung", labelPoint: [-8.4, 115.2],
    segmen: [[1800, 1848, 0.45], [1849, 1908, 0.4, 0.08]],
    catatan: "Klungkung, Badung, Buleleng, Karangasem, dan kerajaan Bali lain bertahan lebih lama. Buleleng dan Jembrana dikuasai Belanda pada 1849, sedangkan Badung dan Klungkung jatuh dalam puputan 1906 dan 1908.",
  },
  hindiaBelanda("bali", "Bali", [[1849, 1905, 0.2, 0.4], [1906, 1908, 0.5, 0.85], [1909, 1941, 0.85]],
    "Setelah 1908 seluruh Bali berada di bawah Hindia Belanda. Pemerintah kolonial kemudian mempromosikan Bali sebagai tujuan wisata."),
  {
    id: "e3-ntb", nama: "Lombok, Sumbawa, dan Bima", warna: "#d4a24c", geo: "ntb", grup: "lombok", labelPoint: [-8.6, 117.4],
    segmen: [[1800, 1893, 0.35], [1894, 1907, 0.2, 0.08]],
    catatan: "Lombok dikuasai dinasti Bali dari Karangasem, sedangkan Sumbawa dan Bima adalah kesultanan. Letusan Tambora (1815) menghapus Kerajaan Tambora dan Pekat.",
  },
  hindiaBelanda("ntb", "Lombok dan Sumbawa", [[1894, 1941, 0.6, 0.85]],
    "Belanda menaklukkan Lombok pada 1894. Bima dan Sumbawa tetap menjadi swapraja di bawah Hindia Belanda."),
  {
    id: "e3-ntt", nama: "Kerajaan-kerajaan Nusa Tenggara Timur", warna: "#a0785a", geo: "ntt", grup: "nusa-tenggara-timur", labelPoint: [-8.7, 121.0],
    segmen: [[1800, 1909, 0.3, 0.1]],
    catatan: "Flores, Sumba, Timor Barat, dan Alor terdiri dari banyak kerajaan kecil. Portugal menyerahkan Larantuka kepada Belanda lewat perjanjian 1859.",
  },
  hindiaBelanda("ntt", "Nusa Tenggara Timur", [[1800, 1906, 0.15, 0.35], [1907, 1941, 0.8]],
    "Kupang sudah menjadi pos Belanda sejak 1653. Penguasaan Flores dan pedalaman Timor baru tuntas sekitar 1907–1910."),

  // ——— Kalimantan ———
  {
    id: "e3-kalbar", nama: "Pontianak, Sambas, dan kongsi", warna: "#b07a5f", geo: "kalbar", grup: "pontianak", labelPoint: [-0.2, 111.0],
    segmen: [[1800, 1854, 0.4, 0.2]],
    catatan: "Kesultanan Pontianak, Sambas, dan kongsi penambang emas Tionghoa berbagi kekuasaan. Belanda memerangi sebagian kongsi pada 1850–1854 dan membubarkan kongsi Lanfang pada 1884.",
  },
  hindiaBelanda("kalbar", "Kalimantan Barat", [[1818, 1853, 0.2, 0.5], [1854, 1941, 0.8]],
    "Kontrak dengan Pontianak dan Sambas sekitar 1818–1819 menjadi dasar kehadiran Belanda di pesisir barat Kalimantan."),
  {
    id: "e3-kalteng", nama: "Kotawaringin dan tanah Dayak", warna: "#8a6f3c", geo: "kalteng", grup: "kotawaringin", labelPoint: [-1.6, 113.4],
    segmen: [[1800, 1905, 0.3, 0.1]],
    catatan: "Kesultanan Kotawaringin di pesisir dan masyarakat Dayak di pedalaman. Sebagian daerah ini ikut terlibat dalam Perang Banjar.",
  },
  hindiaBelanda("kalteng", "Kalimantan Tengah", [[1860, 1905, 0.2, 0.7], [1906, 1941, 0.8]],
    "Pos-pos Belanda baru menjangkau pedalaman pada akhir abad ke-19. Pertemuan damai Tumbang Anoi (1894) mengakhiri tradisi perang antarkelompok Dayak."),
  {
    id: "e3-banjar", nama: "Kesultanan Banjar", warna: "#5c7f4a", geo: "kalsel", grup: "banjar", labelPoint: [-2.9, 115.3],
    segmen: [[1800, 1859, 0.5, 0.4], [1860, 1905, 0.3, 0.05]],
    catatan: "Belanda menghapus kesultanan pada 1860 setelah Perang Banjar pecah. Pangeran Antasari dan para penerusnya melanjutkan perlawanan sampai 1905.",
  },
  hindiaBelanda("kalsel", "Kalimantan Selatan", [[1826, 1859, 0.2, 0.4], [1860, 1905, 0.5, 0.85], [1906, 1941, 0.85]],
    "Banjarmasin sudah menjadi pos Belanda sejak abad ke-18, dan kontrak 1826 dengan sultan memperluas kekuasaannya."),
  {
    id: "e3-kutai", nama: "Kutai dan Bulungan", warna: "#4f7f9a", geo: "kaltim", grup: "kutai", labelPoint: [1.0, 116.4],
    segmen: [[1800, 1843, 0.4]],
    catatan: "Kutai Kartanegara menguasai jalur Sungai Mahakam, sedangkan Bulungan dan Berau berada di utara.",
  },
  {
    id: "e3-kutai-swapraja", nama: "Kutai (swapraja)", warna: WARNA.swapraja, geo: "kaltim", grup: "kutai", chip: CHIP.swapraja, labelPoint: [1.0, 116.4],
    segmen: [[1844, 1941, 0.45]],
    catatan: "Kutai menandatangani perjanjian dengan Belanda pada 1844. Penemuan minyak di Balikpapan pada 1897 mengubah kawasan ini menjadi pusat industri minyak.",
  },

  // ——— Sulawesi ———
  hindiaBelanda("sulut", "Minahasa dan Manado", [[1800, 1809, 0.5], [1817, 1941, 0.8]],
    "Minahasa terikat kontrak dengan Belanda sejak abad ke-17. Pada abad ke-19 kawasan ini menjadi pusat sekolah zending dan perkebunan kopi."),
  {
    id: "e3-gorontalo", nama: "Gorontalo dan Limboto", warna: "#b87d8a", geo: "gorontalo", grup: "gorontalo", labelPoint: [0.6, 122.4],
    segmen: [[1800, 1888, 0.3]],
    catatan: "Limboto dan Gorontalo diperintah raja bersama dewan adat.",
  },
  hindiaBelanda("gorontalo", "Gorontalo", [[1889, 1941, 0.8]],
    "Belanda menghapus kerajaan dan memerintah langsung sejak 1889."),
  {
    id: "e3-sulteng", nama: "Kerajaan-kerajaan Sulawesi Tengah", warna: "#7a9a8a", geo: "sulteng", grup: "sulawesi-tengah", labelPoint: [-1.3, 121.0],
    segmen: [[1800, 1906, 0.3, 0.1]],
    catatan: "Banggai, Kaili, Poso, Tojo, dan kerajaan lain memiliki hubungan dengan Ternate dan Bone.",
  },
  hindiaBelanda("sulteng", "Sulawesi Tengah", [[1890, 1905, 0.15, 0.6], [1906, 1941, 0.8]],
    "Ekspedisi militer Belanda menaklukkan pedalaman Sulawesi Tengah pada 1905–1907."),
  {
    id: "e3-mandar", nama: "Mandar", warna: "#7b6fa8", geo: "sulbar", grup: "mandar", labelPoint: [-2.5, 119.3],
    segmen: [[1800, 1905, 0.3, 0.1]],
    catatan: "Persekutuan kerajaan Mandar di pesisir barat Sulawesi, terkenal dengan pelaut dan perahunya.",
  },
  hindiaBelanda("sulbar", "Mandar", [[1850, 1905, 0.15, 0.6], [1906, 1941, 0.8]],
    "Mandar dikuasai dalam rangkaian ekspedisi Belanda ke Sulawesi pada 1905–1906."),
  {
    id: "e3-bone", nama: "Bone, Gowa, dan kerajaan Bugis-Makassar", warna: "#8f4f6f", geo: "sulsel", grup: "bone", labelPoint: [-4.3, 120.0],
    segmen: [[1800, 1905, 0.5, 0.15]],
    catatan: "Bone berperang dengan Belanda pada 1824–1825 dan 1859–1860. Ekspedisi 1905 akhirnya menaklukkan Bone dan Gowa.",
  },
  hindiaBelanda("sulsel", "Makassar dan Sulawesi Selatan", [[1800, 1904, 0.25, 0.6], [1905, 1941, 0.85]],
    "Makassar dan Fort Rotterdam menjadi pusat kekuasaan Belanda sejak Perjanjian Bongaya 1667."),
  {
    id: "e3-buton", nama: "Buton dan Konawe", warna: "#8e6b3e", geo: "sultra", grup: "buton", labelPoint: [-4.1, 122.3],
    segmen: [[1800, 1906, 0.35, 0.15]],
    catatan: "Kesultanan Buton bersekutu dengan VOC sejak abad ke-17. Pada awal abad ke-20 Belanda memperketat kekuasaannya atas Buton dan Konawe lewat perjanjian dan ekspedisi militer.",
  },
  hindiaBelanda("sultra", "Sulawesi Tenggara", [[1906, 1941, 0.8]],
    "Setelah 1906 kesultanan dan kerajaan di Sulawesi Tenggara berada di bawah pengawasan langsung pejabat Belanda."),

  // ——— Maluku dan Papua ———
  {
    id: "e3-maluku-inggris", nama: "Maluku (Inggris)", warna: WARNA.inggris, geo: "maluku", grup: "inggris-maluku", chip: CHIP.kolonial, labelPoint: [-3.3, 129.5],
    segmen: [[1800, 1802, 0.6], [1810, 1816, 0.6]],
    catatan: "Inggris menduduki Ambon dan Banda pada 1796–1803 dan 1810–1817 selama perang di Eropa.",
  },
  hindiaBelanda("maluku", "Maluku", [[1803, 1809, 0.7], [1817, 1941, 0.85]],
    "Kembalinya Belanda pada 1817 memicu perlawanan Pattimura di Saparua. Ambon kemudian menjadi salah satu sumber utama serdadu KNIL."),
  {
    id: "e3-ternate-tidore", nama: "Ternate dan Tidore", warna: "#2f7a72", geo: "malut", grup: "ternate", labelPoint: [0.9, 127.8],
    segmen: [[1800, 1816, 0.45]],
    catatan: "Sultan Nuku dari Tidore melawan Belanda dengan dukungan Inggris sampai wafat pada 1805.",
  },
  {
    id: "e3-ternate-inggris", nama: "Ternate (Inggris)", warna: WARNA.inggris, geo: "malut", grup: "inggris-maluku", chip: CHIP.kolonial, tanpaLabel: true,
    segmen: [[1810, 1816, 0.4]],
    catatan: "Inggris juga menduduki Ternate dan Manado pada 1810–1817.",
  },
  {
    id: "e3-ternate-swapraja", nama: "Ternate dan Tidore (swapraja)", warna: WARNA.swapraja, geo: "malut", grup: "ternate", chip: CHIP.swapraja, labelPoint: [0.9, 127.8],
    segmen: [[1817, 1941, 0.45]],
    catatan: "Ternate dan Tidore tetap menjadi kesultanan di bawah Hindia Belanda. Tidore masih mengklaim pengaruh atas pesisir Papua.",
  },
  {
    id: "e3-papua", nama: "Papua", warna: "#4f8a6a", geo: "g-papua", grup: "papua-barat", labelPoint: [-4.0, 138.0],
    segmen: [[1800, 1897, 0.25], [1898, 1941, 0.15]],
    catatan: "Penduduk Papua hidup dalam ratusan kelompok adat dengan bahasa yang berbeda-beda. Kesultanan Tidore mengklaim pengaruh atas pesisir barat dan Raja Ampat.",
  },
  hindiaBelanda("papua", "Nugini", [[1828, 1897, 0.1], [1898, 1941, 0.3, 0.5]],
    "Belanda membangun Fort Du Bus (1828–1836), lalu pos tetap di Manokwari dan Fakfak pada 1898. Boven Digul menjadi kamp pengasingan tahanan politik sejak 1927."),

  // ——— Pendudukan Jepang (1942-1945) ———
  {
    id: "e3-jepang", nama: "Pendudukan Jepang", warna: WARNA.jepang, geo: "g-jepang", grup: "jepang", chip: CHIP.jepang, labelPoint: [0.6, 114.0],
    segmen: [[1942, 1945, 0.85]],
    catatan: "Jepang menguasai Hindia Belanda setelah Belanda menyerah di Kalijati pada 8 Maret 1942. Jawa diperintah Angkatan Darat ke-16, Sumatra oleh Angkatan Darat ke-25, dan wilayah timur oleh Angkatan Laut.",
  },
  {
    id: "e3-jepang-papua", nama: "Pendudukan Jepang (Papua)", warna: WARNA.jepang, geo: "g-papua", grup: "jepang", chip: CHIP.jepang, tanpaLabel: true,
    segmen: [[1942, 1944, 0.6]],
    catatan: "Jepang menduduki pesisir utara Papua pada 1942. Pasukan Sekutu merebut kembali Hollandia (Jayapura) pada April 1944.",
  },

  // ——— Revolusi dan Republik Indonesia ———
  {
    id: "e3-republik", nama: "Republik Indonesia", warna: WARNA.republik, geo: "g-republik", grup: "indonesia", chip: CHIP.negara, labelPoint: [-0.6, 101.5],
    segmen: [[1945, 2026, 0.8]],
    catatan: "Wilayah yang dikuasai Republik Indonesia setelah proklamasi 17 Agustus 1945. Agresi Militer Belanda 1947 dan 1948 merebut sebagian besar kota di Jawa dan Sumatra sebelum kedaulatan diakui pada 1949.",
  },
  {
    id: "e3-republik-lain", nama: "Republik Indonesia (Kalimantan dan wilayah timur)", warna: WARNA.republik, geo: "g-federal", grup: "indonesia", chip: CHIP.negara, tanpaLabel: true,
    segmen: [[1945, 1945, 0.6], [1950, 2026, 0.8]],
    catatan: "Proklamasi 1945 juga berlaku di wilayah ini, tetapi Belanda kembali menguasainya pada 1946. Setelah Republik Indonesia Serikat dibubarkan pada Agustus 1950, seluruh wilayah bergabung dalam negara kesatuan.",
  },
  {
    id: "e3-nica", nama: "Belanda (NICA) dan negara federal", warna: WARNA.nica, geo: "g-federal", grup: "nica", chip: CHIP.kolonial, labelPoint: [-2.0, 121.0],
    segmen: [[1946, 1949, 0.6]],
    catatan: "Belanda menguasai kembali Kalimantan dan Indonesia Timur, lalu membentuk negara bagian seperti Negara Indonesia Timur (1946). Di Sulawesi Selatan pasukan Westerling membunuh banyak warga sipil pada 1946–1947.",
  },
  {
    id: "e3-nugini-belanda", nama: "Nugini Belanda", warna: WARNA.hindiaBelanda, geo: "g-papua", grup: "nugini-belanda", chip: CHIP.kolonial, labelPoint: [-4.0, 138.0],
    segmen: [[1945, 1961, 0.6]],
    catatan: "Belanda mempertahankan Papua bagian barat setelah Konferensi Meja Bundar 1949 dan menyiapkannya sebagai wilayah terpisah dari Indonesia.",
  },
  {
    id: "e3-untea", nama: "UNTEA (PBB)", warna: WARNA.pbb, geo: "g-papua", grup: "untea", chip: CHIP.pbb, labelPoint: [-4.0, 138.0],
    segmen: [[1962, 1962, 0.6]],
    catatan: "Berdasarkan Perjanjian New York (Agustus 1962), PBB memerintah sementara Irian Barat dari Oktober 1962 sampai 1 Mei 1963.",
  },
  {
    id: "e3-irian", nama: "Irian Barat (Indonesia)", warna: WARNA.republik, geo: "g-papua", grup: "indonesia", chip: CHIP.negara, labelPoint: [-4.0, 138.0],
    segmen: [[1963, 2026, 0.8]],
    catatan: "Indonesia mengambil alih pemerintahan pada 1 Mei 1963. Penentuan Pendapat Rakyat (Pepera) 1969 mengesahkan integrasi, tetapi caranya masih diperdebatkan.",
  },

  // ——— Timor ———
  {
    id: "e3-timor-portugis", nama: "Timor Portugis", warna: WARNA.portugis, geo: "timor", grup: "timor-portugis", chip: CHIP.kolonial, labelPoint: [-8.8, 125.9],
    segmen: [[1800, 1941, 0.55], [1945, 1975, 0.55]],
    catatan: "Portugal mempertahankan Timor bagian timur dengan pusat di Dili. Batas dengan Timor milik Belanda ditetapkan lewat perjanjian 1859 dan putusan arbitrase 1914.",
  },
  {
    id: "e3-timor-timur", nama: "Timor Timur (Indonesia)", warna: WARNA.republik, geo: "timor", grup: "indonesia", chip: CHIP.negara, labelPoint: [-8.8, 125.9],
    segmen: [[1976, 1999, 0.7]],
    catatan: "Indonesia menyerbu pada Desember 1975 dan menjadikan Timor Timur provinsi ke-27 pada 1976. PBB tidak pernah mengakui penggabungan ini.",
  },
  {
    id: "e3-untaet", nama: "UNTAET (PBB)", warna: WARNA.pbb, geo: "timor", grup: "untaet", chip: CHIP.pbb, labelPoint: [-8.8, 125.9],
    segmen: [[1999, 2002, 0.6]],
    catatan: "Setelah referendum 1999, PBB membentuk UNTAET untuk memerintah sementara sampai Timor-Leste merdeka pada 2002.",
  },
  {
    id: "e3-timor-leste", nama: "Timor-Leste", warna: "#3d7ea6", geo: "timor", grup: "timor-leste", chip: CHIP.negara, labelPoint: [-8.8, 125.9],
    segmen: [[2002, 2026, 0.6]],
    catatan: "Timor-Leste merdeka pada 20 Mei 2002 setelah masa pemerintahan transisi PBB. Wilayahnya mencakup Timor bagian timur dan enklave Oecusse di Timor Barat.",
  },

  // ——— Semenanjung Malaya, Singapura, dan Borneo utara ———
  {
    id: "e3-melayu", nama: "Kesultanan-kesultanan Melayu", warna: "#3f8f8a", geo: "malaya", grup: "johor", labelPoint: [4.6, 102.3],
    segmen: [[1800, 1873, 0.4, 0.3], [1874, 1914, 0.25, 0.1]],
    catatan: "Johor, Pahang, Perak, Kedah, dan negeri Melayu lain berada di luar kekuasaan Belanda setelah Traktat London 1824. Sultan-sultannya tetap bertakhta di bawah pengawasan Inggris.",
  },
  {
    id: "e3-melaka-inggris", nama: "Melaka (Inggris)", warna: WARNA.inggris, geo: "melaka", grup: "melaka-inggris", chip: CHIP.kolonial, labelPoint: [2.25, 102.3],
    segmen: [[1800, 1817, 0.7]],
    catatan: "Inggris menduduki Melaka sejak 1795 selama perang di Eropa.",
  },
  {
    id: "e3-melaka-belanda", nama: "Melaka (Belanda)", warna: WARNA.hindiaBelanda, geo: "melaka", grup: "melaka-belanda", chip: CHIP.kolonial, labelPoint: [2.25, 102.3],
    segmen: [[1818, 1824, 0.7]],
    catatan: "Melaka dikembalikan kepada Belanda pada 1818, lalu diserahkan kepada Inggris berdasarkan Traktat London 1824.",
  },
  {
    id: "e3-malaya-inggris", nama: "Malaya (Inggris)", warna: WARNA.inggris, geo: "g-malaya", grup: "malaya-inggris", chip: CHIP.kolonial, labelPoint: [4.0, 101.6],
    segmen: [[1825, 1873, 0.2, 0.35], [1874, 1941, 0.5, 0.8], [1945, 1956, 0.7]],
    catatan: "Inggris menguasai Penang (1786), Singapura (1819), dan Melaka (1824), lalu menempatkan residen di negeri-negeri Melayu sejak Perjanjian Pangkor 1874.",
  },
  {
    id: "e3-federasi-malaya", nama: "Federasi Malaya", warna: "#2a9d8f", geo: "g-malaya", grup: "malaysia", chip: CHIP.negara, labelPoint: [4.0, 101.6],
    segmen: [[1957, 1962, 0.75]],
    catatan: "Malaya merdeka dari Inggris pada 31 Agustus 1957.",
  },
  {
    id: "e3-malaysia", nama: "Malaysia", warna: "#2a9d8f", geo: "g-malaysia", grup: "malaysia", chip: CHIP.negara, labelPoint: [4.0, 101.6],
    segmen: [[1963, 2026, 0.75]],
    catatan: "Malaysia dibentuk pada 16 September 1963 dari Malaya, Singapura, Sarawak, dan Sabah. Indonesia menentangnya lewat Konfrontasi (1963–1966).",
  },
  {
    id: "e3-singapura-inggris", nama: "Singapura (Inggris)", warna: WARNA.inggris, geo: "singapura", grup: "singapura", chip: CHIP.kolonial, tanpaLabel: true,
    segmen: [[1819, 1941, 0.8], [1945, 1962, 0.8]],
    catatan: "Raffles mendirikan pos dagang Inggris di Singapura pada 1819. Kota ini menjadi pelabuhan bebas utama di Asia Tenggara.",
  },
  {
    id: "e3-singapura-malaysia", nama: "Singapura (Malaysia)", warna: "#2a9d8f", geo: "singapura", grup: "singapura", chip: CHIP.negara, tanpaLabel: true,
    segmen: [[1963, 1964, 0.75]],
    catatan: "Singapura bergabung dengan Malaysia pada 1963 dan berpisah pada 9 Agustus 1965.",
  },
  {
    id: "e3-singapura", nama: "Singapura", warna: "#e07a5f", geo: "singapura", grup: "singapura", chip: CHIP.negara, labelPoint: [1.35, 103.82],
    segmen: [[1965, 2026, 0.8]],
    catatan: "Singapura menjadi negara merdeka pada 9 Agustus 1965.",
  },
  {
    id: "e3-sarawak-brunei", nama: "Sarawak (Brunei)", warna: "#c9a227", geo: "sarawak", grup: "brunei", tanpaLabel: true,
    segmen: [[1800, 1840, 0.3]],
    catatan: "Sarawak berada di bawah Kesultanan Brunei.",
  },
  {
    id: "e3-sarawak-brooke", nama: "Sarawak (Brooke)", warna: "#8d6e63", geo: "sarawak", grup: "sarawak-brooke", labelPoint: [2.6, 113.0],
    segmen: [[1841, 1941, 0.6]],
    catatan: "James Brooke menjadi Raja Sarawak pada 1841. Dinasti Brooke memerintah sampai menyerahkan Sarawak kepada Inggris pada 1946.",
  },
  {
    id: "e3-sarawak-inggris", nama: "Sarawak (Inggris)", warna: WARNA.inggris, geo: "sarawak", grup: "malaya-inggris", chip: CHIP.kolonial, tanpaLabel: true,
    segmen: [[1946, 1962, 0.7]],
    catatan: "Sarawak menjadi koloni Inggris pada 1946–1963.",
  },
  {
    id: "e3-sabah-lokal", nama: "Borneo Utara (Brunei dan Sulu)", warna: "#c9a227", geo: "sabah", grup: "brunei", tanpaLabel: true,
    segmen: [[1800, 1880, 0.25]],
    catatan: "Borneo Utara berada di bawah pengaruh Brunei dan Kesultanan Sulu.",
  },
  {
    id: "e3-sabah-inggris", nama: "Borneo Utara (Inggris)", warna: WARNA.inggris, geo: "sabah", grup: "borneo-utara-inggris", chip: CHIP.kolonial, labelPoint: [5.4, 117.0],
    segmen: [[1881, 1941, 0.6], [1946, 1962, 0.7]],
    catatan: "Perusahaan Borneo Utara Inggris memerintah wilayah ini sejak 1881. Setelah Perang Dunia II wilayah ini menjadi koloni Inggris.",
  },
  {
    id: "e3-brunei", nama: "Brunei", warna: "#c9a227", geo: "brunei", grup: "brunei", labelPoint: [4.6, 114.7],
    segmen: [[1800, 2026, 0.45]],
    catatan: "Brunei menyusut setelah kehilangan Sarawak dan Borneo Utara. Brunei menjadi protektorat Inggris pada 1888 dan merdeka penuh pada 1 Januari 1984.",
  },
];

export const WILAYAH_ERA3: Kerajaan[] = FASE.map((f) => ({
  id: f.id,
  nama: f.nama,
  warna: f.warna,
  wilayah: typeof f.geo === "string" ? (GEO_ERA3[f.geo] ?? []) : f.geo,
  kekuatan: garisWaktu(f.segmen),
  labelPoint: f.labelPoint,
  grup: f.grup,
  chip: f.chip,
  tanpaLabel: f.tanpaLabel,
  catatan: f.catatan,
}));
