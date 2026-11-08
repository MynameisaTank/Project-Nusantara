export interface Kerajaan {
  id: string;
  nama: string;
  warna: string;
  /** Satu atau lebih potongan wilayah (kasar). Dipisah kalau kekuasaannya terpisah laut, mis. Melaka. */
  wilayah: [number, number][][];
  /** [tahun, kekuatan 0..1][] urut naik; di luar rentangnya wilayah tidak tampil */
  kekuatan: [number, number][];
  /** wajib diisi kalau wilayahnya lebih dari satu potongan */
  labelPoint?: [number, number];
  /** "kolonial" = pos atau benteng Eropa: digambar kecil dan boleh tumpang tindih dengan kerajaan lokal */
  jenis?: "kerajaan" | "kolonial";
  /** kunci detail bersama, untuk era 3 saat satu kekuasaan digambar jadi banyak potongan */
  grup?: string;
  tanpaLabel?: boolean;
  /** tampil di panel sebagai "Di wilayah ini" */
  catatan?: string;
  chip?: string;
}

/*
 * Kerajaan era 1 (1200–1617). Bentuknya dari provinsi modern (Natural Earth) yang dipotong ke area historisnya,
 * jadi hanya perkiraan. Kerajaan yang berurutan di tempat sama (Kadiri, Singhasari, Majapahit) memakai bentuk yang sama.
 * Brunei, Ternate, dan Tidore masih memakai bentuk manual.
 */
export const KERAJAAN_ERA1: Kerajaan[] = [
  // --- Sumatra ---
  {
    id: "aceh",
    nama: "Aceh Darussalam",
    warna: "#9e3a2f",
    // Aceh modern, dipotong supaya tidak menutupi Pasai (1496–1524).
    wilayah: [[
      [2.189, 98.101], [2.281, 97.744], [2.866, 97.603], [3.682, 96.884], [3.779, 96.480],
      [4.638, 95.565], [5.573, 95.213], [5.627, 95.612], [4.8, 95.9], [4.2, 96.5],
      [4.2, 97.8], [4.365, 98.282], [3.736, 97.778], [2.189, 98.101]
    ]],
    // Berdiri 1496, merebut Pasai 1524, meluas di bawah Iskandar Muda (1607). Puncaknya setelah 1617.
    kekuatan: [[1496, 0.1], [1524, 0.35], [1570, 0.5], [1607, 0.7], [1617, 0.85]]
  },
  {
    id: "pasai",
    nama: "Samudra Pasai",
    warna: "#3f7a5a",
    wilayah: [[
      [5.217, 96.407], [5.252, 97.497], [4.890, 97.909], [4.4, 97.6], [4.4, 96.7], [5.0, 96.2]
    ]],
    // Berdiri sekitar 1267, ramai abad ke-14, meredup saat Melaka naik, direbut Aceh 1524.
    kekuatan: [[1267, 0.2], [1340, 0.7], [1400, 0.6], [1430, 0.4], [1480, 0.3], [1511, 0.2], [1524, 0]]
  },
  {
    id: "sriwijaya",
    nama: "Sriwijaya",
    warna: "#3f8f8a",
    wilayah: [[
      [-1.734, 104.532], [-1.936, 104.497], [-2.126, 104.883], [-2.773, 104.531], [-2.289, 104.863],
      [-2.402, 105.624], [-3.047, 106.054], [-3.673, 105.820], [-3.869, 105.953], [-4.150, 105.709],
      [-3.752, 105.316], [-4.169, 105.009], [-4.440, 104.309], [-4.888, 104.303], [-4.934, 103.889],
      [-4.390, 103.603], [-3.827, 102.636], [-3.408, 102.999], [-3.344, 102.563], [-2.782, 102.067],
      [-2.710, 102.596], [-2.179, 103.233], [-2.402, 103.457], [-1.979, 103.520], [-1.795, 103.886]
    ]],
    // Puncaknya jauh sebelum 1200; di sini tinggal sisa pengaruh sampai sekitar 1377.
    kekuatan: [[1200, 0.35], [1275, 0.15], [1377, 0]]
  },
  {
    id: "pagaruyung",
    nama: "Pagaruyung (Minangkabau)",
    warna: "#5a3f8a",
    wilayah: [[
      [-2.480, 101.027], [-0.816, 100.301], [0.081, 99.633], [0.252, 99.151], [0.563, 99.564],
      [0.504, 99.908], [0.887, 99.707], [0.1, 100.45], [-0.4, 100.6], [-1.148, 101.841],
      [-1.702, 101.476], [-1.705, 101.114], [-2.297, 101.336]
    ]],
    // Didirikan Adityawarman sekitar 1347; lebih sebagai pusat adat daripada penakluk.
    kekuatan: [[1347, 0.25], [1500, 0.3], [1600, 0.35], [1617, 0.35]]
  },

  // --- Semenanjung & Kalimantan ---
  {
    id: "melaka",
    nama: "Kesultanan Melaka",
    warna: "#6b4f9e",
    // Dua potongan (semenanjung dan pesisir timur Sumatra) supaya Selat Melaka tidak ikut berwarna.
    wilayah: [
      [
        [3.843, 100.841], [2.850, 101.286], [2.391, 101.988], [1.270, 103.516], [1.367, 104.277],
        [1.648, 103.966], [2.446, 103.619], [3.037, 101.965], [3.669, 101.772]
      ],
      [
        [2.555, 100.314], [1.835, 100.923], [2.209, 100.800], [2.291, 101.050], [1.709, 101.427],
        [1.387, 102.118], [0.804, 102.425], [0.676, 102.954], [0.442, 103.075], [0.239, 102.440],
        [0.536, 103.362], [0.293, 103.730], [-0.007, 103.802], [-0.258, 103.271], [-0.437, 103.598],
        [-0.449, 103.373], [-0.746, 103.439], [-0.793, 102.804], [-1.085, 102.541], [-0.856, 102.189],
        [-1.038, 101.770], [-0.322, 100.856], [0.200, 100.838], [0.648, 100.163], [1.379, 100.067],
        [1.616, 100.444]
      ]
    ],
    labelPoint: [2.2, 102.3],
    // Berdiri sekitar 1403, puncak di bawah Mansur Syah (1459–1477), jatuh ke Portugis 1511.
    kekuatan: [[1403, 0.1], [1414, 0.35], [1459, 0.75], [1477, 0.95], [1511, 0.95], [1512, 0]]
  },
  {
    id: "brunei",
    nama: "Brunei",
    warna: "#2f5a7a",
    // Bentuk manual, diperbesar dari Brunei modern untuk mencakup pesisir utara Kalimantan masa Bolkiah.
    wilayah: [[
      [1.5, 109.8], [2.2, 111.2], [3.3, 112.8], [4.4, 113.9], [5.0, 114.6],
      [5.9, 115.6], [6.9, 116.8], [7.2, 117.3], [6.3, 117.1], [5.3, 115.9],
      [4.5, 114.9], [3.8, 113.5], [2.6, 112.3], [1.6, 110.4]
    ]],
    // Kesultanan sejak sekitar 1368, puncak di bawah Bolkiah (1485–1524), sedikit surut setelah 1578.
    kekuatan: [[1368, 0.15], [1450, 0.4], [1485, 0.7], [1524, 0.75], [1578, 0.5], [1617, 0.45]]
  },
  {
    id: "kutai",
    nama: "Kutai Kartanegara",
    warna: "#6b5a3f",
    // Muara Mahakam saja; Berau bukan wilayah Kutai pada masa ini.
    wilayah: [[
      [0.976, 119.012], [0.805, 118.384], [1.113, 117.894], [0.800, 118.033], [0.741, 117.743],
      [0.109, 117.470], [-0.782, 117.623], [-0.809, 117.282], [-1.240, 116.958], [-1.025, 116.743]
    ]],
    // Berdiri sekitar 1300; masa jayanya baru setelah 1635.
    kekuatan: [[1300, 0.1], [1450, 0.2], [1600, 0.35], [1617, 0.4]]
  },
  {
    id: "banjar",
    nama: "Banjarmasin",
    warna: "#4f6b5a",
    wilayah: [[
      [-2.363, 116.573], [-2.526, 116.304], [-2.987, 116.288], [-2.823, 116.138], [-3.137, 116.265],
      [-3.609, 115.968], [-4.171, 114.625], [-3.348, 114.550], [-3.434, 114.311], [-2.275, 114.880],
      [-2.037, 115.330], [-1.443, 115.417], [-1.368, 115.686]
    ]],
    // Berdiri sekitar 1526; masa jayanya setelah 1617.
    kekuatan: [[1520, 0.1], [1595, 0.35], [1617, 0.45]]
  },

  // --- Jawa, dari barat ke timur ---
  {
    id: "banten",
    nama: "Banten",
    warna: "#4a6b9e",
    wilayah: [[
      [-6.991, 106.405], [-6.772, 105.217], [-6.512, 105.782], [-5.886, 106.085], [-6.048, 106.729],
      [-6.370, 106.766], [-6.370, 106.421]
    ]],
    // Berdiri 1526; puncaknya setelah 1617.
    kekuatan: [[1526, 0.1], [1570, 0.3], [1600, 0.5], [1617, 0.6]]
  },
  {
    id: "pajajaran",
    nama: "Sunda (Pajajaran)",
    warna: "#7a9c3f",
    // Jawa Barat modern, dipotong supaya tidak menutupi Cirebon (1430–1579).
    wilayah: [[
      [-6.079, 106.988], [-5.914, 107.044], [-6.238, 107.678], [-6.5, 108.0], [-7.279, 108.547],
      [-7.665, 108.799], [-7.817, 108.327], [-7.378, 106.398], [-6.370, 106.421], [-6.374, 106.941]
    ]],
    // Tidak pernah ditaklukkan Majapahit; naik setelah 1482, berakhir saat Pakuan direbut Banten 1579.
    kekuatan: [[1200, 0.35], [1400, 0.4], [1482, 0.5], [1570, 0.45], [1579, 0]]
  },
  {
    id: "cirebon",
    nama: "Cirebon",
    warna: "#a67a3f",
    wilayah: [[
      [-6.238, 107.678], [-6.246, 108.360], [-6.762, 108.605], [-6.814, 108.895], [-7.0, 108.6], [-6.5, 108.0]
    ]],
    // Kesultanan sekitar 1430, berkembang di bawah Sunan Gunung Jati (1479–1568).
    kekuatan: [[1430, 0.15], [1479, 0.4], [1568, 0.55], [1617, 0.5]]
  },
  {
    id: "demak",
    nama: "Demak",
    warna: "#c2703f",
    // Bentuknya dipakai juga oleh Mataram; keduanya tidak pernah berdiri bersamaan.
    wilayah: [[
      [-6.814, 108.895], [-6.976, 110.381], [-6.404, 110.925], [-6.692, 111.144], [-6.734, 111.673],
      [-7.154, 111.608], [-7.267, 111.203], [-7.838, 111.308], [-8.226, 110.944], [-7.560, 110.438],
      [-7.889, 110.043], [-7.665, 108.799], [-7.279, 108.547]
    ]],
    // Naik saat Majapahit runtuh, puncak di bawah Trenggana (1521–1546), lalu pecah.
    kekuatan: [[1478, 0.1], [1500, 0.4], [1521, 0.75], [1546, 0.85], [1554, 0.2], [1568, 0]]
  },
  {
    id: "mataram",
    nama: "Mataram Islam",
    warna: "#7a2f4f",
    // Bentuk sama dengan Demak; berdiri lama setelah Demak bubar.
    wilayah: [[
      [-6.814, 108.895], [-6.976, 110.381], [-6.404, 110.925], [-6.692, 111.144], [-6.734, 111.673],
      [-7.154, 111.608], [-7.267, 111.203], [-7.838, 111.308], [-8.226, 110.944], [-7.560, 110.438],
      [-7.889, 110.043], [-7.665, 108.799], [-7.279, 108.547]
    ]],
    // Berdiri sekitar 1587; Sultan Agung naik 1613. Puncaknya (1628–1629) di luar era ini.
    kekuatan: [[1587, 0.1], [1613, 0.35], [1617, 0.45]]
  },
  {
    id: "kadiri",
    nama: "Kadiri",
    warna: "#9c6b2e",
    // Bentuk sama dengan Singhasari dan Majapahit; tidak pernah berdiri bersamaan.
    wilayah: [[
      [-6.734, 111.673], [-6.871, 112.583], [-7.531, 112.761], [-7.728, 113.133], [-7.9, 113.5],
      [-8.35, 113.5], [-8.281, 113.241], [-8.447, 112.673], [-8.226, 110.944], [-7.838, 111.308],
      [-7.267, 111.203], [-7.154, 111.608]
    ]],
    kekuatan: [[1200, 0.5], [1222, 0]]
  },
  {
    id: "singhasari",
    nama: "Singhasari",
    warna: "#b4502f",
    wilayah: [[
      [-6.734, 111.673], [-6.871, 112.583], [-7.531, 112.761], [-7.728, 113.133], [-7.9, 113.5],
      [-8.35, 113.5], [-8.281, 113.241], [-8.447, 112.673], [-8.226, 110.944], [-7.838, 111.308],
      [-7.267, 111.203], [-7.154, 111.608]
    ]],
    // Berdiri 1222, puncak di bawah Kertanagara (1268–1292), runtuh 1292–1293.
    kekuatan: [[1222, 0.15], [1268, 0.85], [1292, 0.9], [1293, 0]]
  },
  {
    id: "majapahit",
    nama: "Majapahit",
    warna: "#caa23a",
    wilayah: [[
      [-6.734, 111.673], [-6.871, 112.583], [-7.531, 112.761], [-7.728, 113.133], [-7.9, 113.5],
      [-8.35, 113.5], [-8.281, 113.241], [-8.447, 112.673], [-8.226, 110.944], [-7.838, 111.308],
      [-7.267, 111.203], [-7.154, 111.608]
    ]],
    // Tidak mencakup Sunda dan Blambangan. Berdiri 1293, puncak 1350–1389, menurun setelah Paregreg, nyaris habis 1478.
    kekuatan: [
      [1293, 0.2], [1350, 0.95], [1389, 1], [1400, 0.8], [1406, 0.6],
      [1450, 0.35], [1478, 0.12], [1500, 0.04], [1527, 0]
    ]
  },
  {
    id: "blambangan",
    nama: "Blambangan",
    warna: "#7a4f3a",
    // Ujung timur Jawa Timur (Banyuwangi).
    wilayah: [[
      [-7.728, 113.133], [-7.612, 114.046], [-7.795, 114.446], [-8.519, 114.377], [-8.741, 114.625],
      [-8.281, 113.241], [-8.35, 113.5], [-7.9, 113.5]
    ]],
    // Kerajaan Hindu yang relatif mandiri sepanjang periode ini.
    kekuatan: [[1200, 0.25], [1617, 0.3]]
  },

  // --- Nusa Tenggara, Maluku & Sulawesi ---
  {
    id: "lombok",
    nama: "Selaparang (Lombok)",
    warna: "#2f8a6b",
    wilayah: [[
      [-8.275, 116.633], [-8.392, 116.70], [-8.896, 116.565], [-8.817, 115.839], [-8.737, 116.088],
      [-8.445, 116.028], [-8.236, 116.286]
    ]],
    // Kerajaan-kerajaan Sasak, umumnya mandiri sampai tekanan Gowa-Tallo menjelang 1617.
    kekuatan: [[1200, 0.25], [1550, 0.25], [1605, 0.2], [1617, 0.18]]
  },
  {
    id: "bima",
    nama: "Bima",
    warna: "#8a7a3f",
    wilayah: [[
      [-8.611, 119.204], [-8.748, 118.702], [-8.851, 118.908], [-8.854, 118.414], [-8.583, 118.415],
      [-8.868, 118.158], [-9.054, 117.389], [-8.963, 116.728], [-8.508, 116.838], [-8.358, 117.195],
      [-8.720, 117.805], [-8.642, 118.282], [-8.241, 117.712], [-8.086, 117.918], [-8.371, 118.312],
      [-8.289, 118.647], [-8.547, 118.667], [-8.302, 118.973]
    ]],
    // Masuk pengaruh Gowa-Tallo menjelang 1617; kesultanan penuh pada 1620-an.
    kekuatan: [[1300, 0.1], [1500, 0.2], [1605, 0.3], [1617, 0.35]]
  },
  {
    id: "ternate",
    nama: "Ternate",
    warna: "#b23a5a",
    // Bentuk manual, karena pulaunya terlalu kecil untuk data provinsi.
    wilayah: [[
      [1.2, 127.1], [1.15, 127.55], [0.75, 127.85], [0.55, 127.5], [0.65, 127.15], [0.95, 126.95]
    ]],
    // Menurut tradisi berdiri 1257; puncak di bawah Baabullah setelah mengusir Portugis 1575.
    kekuatan: [[1257, 0.1], [1400, 0.25], [1500, 0.4], [1550, 0.55], [1575, 0.8], [1600, 0.85], [1617, 0.75]]
  },
  {
    id: "tidore",
    nama: "Tidore",
    warna: "#8a6b9e",
    wilayah: [[
      [0.5, 127.2], [0.45, 127.75], [0.0, 128.1], [-0.35, 127.75], [-0.2, 127.3], [0.15, 127.1]
    ]],
    // Pesaing Ternate, bersekutu dengan Spanyol sejak 1521.
    kekuatan: [[1300, 0.1], [1450, 0.2], [1521, 0.35], [1575, 0.4], [1617, 0.4]]
  },
  {
    id: "gowa-tallo",
    nama: "Gowa-Tallo (Makassar)",
    warna: "#2f6f5a",
    // Sulawesi Selatan, dipotong supaya tidak menutupi pesisir Teluk Bone.
    wilayah: [[
      [-2.910, 121.086], [-2.615, 120.776], [-2.958, 120.203], [-3.256, 120.426], [-4.0, 119.9],
      [-5.0, 119.5], [-5.588, 119.433], [-3.978, 119.647], [-3.215, 119.412], [-3.121, 119.639],
      [-2.759, 119.515], [-2.687, 119.787], [-2.194, 119.635], [-1.847, 120.427], [-2.647, 121.777],
      [-3.018, 121.515]
    ]],
    // Menguat setelah memeluk Islam (1605); puncaknya di bawah Hasanuddin, setelah era ini.
    kekuatan: [[1300, 0.1], [1500, 0.2], [1605, 0.45], [1617, 0.55]]
  },
  {
    id: "bone",
    nama: "Bone",
    warna: "#8a5a3a",
    wilayah: [[
      [-3.256, 120.426], [-5.150, 120.264], [-5.620, 120.464], [-5.0, 119.5], [-4.0, 119.9]
    ]],
    // Kuat dan mandiri pada abad ke-16, dipaksa tunduk Gowa-Tallo sekitar 1611.
    kekuatan: [[1300, 0.3], [1500, 0.5], [1560, 0.55], [1611, 0.2], [1617, 0.15]]
  },
  {
    id: "madura",
    nama: "Madura",
    warna: "#8a9e6b",
    // Terpisah dari Jawa oleh Selat Madura, jadi tidak tumpang tindih dengan Majapahit.
    wilayah: [[
      [-6.915, 114.046], [-6.982, 114.125], [-7.248, 113.513], [-7.159, 112.726],
      [-7.059, 112.693], [-6.892, 112.915]
    ]],
    // Kadipaten-kadipaten yang bergantian di bawah pengaruh Majapahit, Demak, dan Mataram.
    kekuatan: [[1200, 0.3], [1600, 0.3], [1617, 0.32]]
  },
  {
    id: "sukadana",
    nama: "Tanjungpura (Sukadana)",
    warna: "#3a8a7a",
    // Selatan Kalimantan Barat (Ketapang); Sambas dan Pontianak baru berdiri setelah era ini.
    wilayah: [[
      [-0.667, 109.263], [-0.854, 109.273], [-0.871, 109.764], [-1.346, 110.061], [-1.826, 109.904],
      [-2.518, 110.281], [-2.973, 110.240], [-2.877, 110.589], [-3.081, 110.662], [-2.698, 111.161],
      [-1.604, 110.927], [-0.716, 109.507]
    ]],
    // Kerajaan Hindu yang menjadi Kesultanan Sukadana sekitar akhir 1500-an.
    kekuatan: [[1300, 0.2], [1590, 0.25], [1617, 0.3]]
  },
  {
    id: "jambi",
    nama: "Jambi (Melayu)",
    warna: "#9e5a7a",
    // Sengaja lebih kecil dari Jambi modern supaya tidak menutupi Sriwijaya, Pagaruyung, dan Melaka.
    wilayah: [[
      [-1.2, 103.3], [-1.3, 103.6], [-1.6, 103.4], [-1.9, 103.0], [-1.8, 102.5],
      [-1.5, 102.1], [-1.3, 102.0], [-1.3, 102.4], [-1.25, 102.9]
    ]],
    // Sering di bawah bayang-bayang kekuatan lain; diakui sebagai kesultanan sekitar 1615.
    kekuatan: [[1200, 0.2], [1500, 0.22], [1615, 0.3], [1617, 0.32]]
  }
];

/** Pos dan benteng Eropa di era 1. Digambar kecil dan boleh tumpang tindih dengan kerajaan lokal, tapi tidak dengan pos Eropa lain. */
export const KOLONIAL_ERA1: Kerajaan[] = [
  {
    id: "melaka-portugis",
    nama: "Melaka (Portugis)",
    warna: "#6b1f2e",
    jenis: "kolonial",
    wilayah: [[
      [2.23, 102.21], [2.23, 102.29], [2.15, 102.29], [2.15, 102.21]
    ]],
    // Direbut dari Melaka 1511, direbut VOC 1641.
    kekuatan: [[1511, 0.85], [1512, 0.95], [1617, 0.95]]
  },
  {
    id: "ternate-portugis",
    nama: "Ternate (Portugis)",
    warna: "#6b1f2e",
    jenis: "kolonial",
    wilayah: [[
      [0.84, 127.34], [0.84, 127.42], [0.74, 127.42], [0.74, 127.34]
    ]],
    // Benteng Kastela dibangun 1522, menyerah ke Baabullah 1575.
    kekuatan: [[1522, 0.7], [1530, 0.85], [1570, 0.75], [1575, 0]]
  },
  {
    id: "ambon-portugis",
    nama: "Ambon (Portugis)",
    warna: "#6b1f2e",
    jenis: "kolonial",
    wilayah: [[
      [-3.65, 128.14], [-3.65, 128.22], [-3.75, 128.22], [-3.75, 128.14]
    ]],
    // Direbut VOC 1605.
    kekuatan: [[1512, 0.6], [1550, 0.75], [1600, 0.7], [1605, 0]]
  },
  {
    id: "solor-portugis",
    nama: "Solor (Portugis)",
    warna: "#6b1f2e",
    jenis: "kolonial",
    wilayah: [[
      [-8.35, 123.2], [-8.35, 123.32], [-8.45, 123.32], [-8.45, 123.2]
    ]],
    // Benteng Solor dibangun 1566, direbut VOC 1613.
    kekuatan: [[1566, 0.6], [1600, 0.65], [1613, 0]]
  },
  {
    id: "ternate-spanyol",
    nama: "Ternate (Spanyol)",
    warna: "#b8862e",
    jenis: "kolonial",
    wilayah: [[
      [0.84, 127.34], [0.84, 127.42], [0.74, 127.42], [0.74, 127.34]
    ]],
    // Spanyol merebut benteng Ternate 1606 dan bertahan sampai 1663.
    kekuatan: [[1606, 0.6], [1610, 0.75], [1617, 0.8]]
  },
  {
    id: "ambon-voc",
    nama: "Ambon (VOC)",
    warna: "#cc7a1f",
    jenis: "kolonial",
    wilayah: [[
      [-3.65, 128.14], [-3.65, 128.22], [-3.75, 128.22], [-3.75, 128.14]
    ]],
    // Direbut VOC dari Portugis 1605.
    kekuatan: [[1605, 0.3], [1610, 0.6], [1617, 0.75]]
  },
  {
    id: "banda-voc",
    nama: "Banda (VOC)",
    warna: "#cc7a1f",
    jenis: "kolonial",
    wilayah: [[
      [-4.48, 129.86], [-4.48, 129.94], [-4.58, 129.94], [-4.58, 129.86]
    ]],
    // Pos VOC sejak 1609, sebelum penaklukan 1621.
    kekuatan: [[1609, 0.2], [1617, 0.35]]
  },
  {
    id: "larantuka",
    nama: "Larantuka (Topasses)",
    warna: "#6b1f2e",
    jenis: "kolonial",
    wilayah: [[
      [-8.3, 122.95], [-8.3, 123.05], [-8.4, 123.05], [-8.4, 122.95]
    ]],
    // Komunitas Portugis pindah ke Larantuka setelah Solor jatuh (1613).
    kekuatan: [[1613, 0.3], [1617, 0.45]]
  }
];
