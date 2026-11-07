export interface Penguasa {
  nama: string;
  mulai: number;
  akhir: number;
  /** true jika tahun berkuasa hanya perkiraan atau sumber masih berselisih. */
  perkiraan?: boolean;
}

export interface DetailKerajaan {
  /** Teks tahun berdiri; bisa berupa perkiraan atau "menurut tradisi". */
  tahunDidirikan?: string;
  ringkasan: string;
  /** Status sebagai negara boneka/bawahan VOC, ditampilkan di panel. */
  negaraBoneka?: string;
  /** Daftar penguasa yang tercatat; kosong berarti belum dilengkapi, bukan berarti tidak ada. */
  penguasa: Penguasa[];
}

/**
 * Detail kerajaan untuk panel info. Daftar penguasa hanya diisi untuk raja-raja yang
 * tanggal naik takhtanya cukup dikenal; celah di antaranya ditampilkan apa adanya sebagai
 * "tidak tercatat". Bendera tidak disertakan untuk kerajaan pra-modern kecuali ada sumber yang
 * dapat dipastikan - sebagian besar kerajaan ini tidak memiliki bendera terdokumentasi.
 */
export const DETAIL_KERAJAAN: Record<string, DetailKerajaan> = {
  singhasari: {
    tahunDidirikan: "1222",
    ringkasan: "Didirikan Ken Arok setelah mengalahkan Kertajaya dari Kadiri. Mencapai puncak kekuasaannya di bawah Kertanagara yang memperluas pengaruh hingga Sumatra dan Bali, sebelum runtuh pada 1292-1293.",
    penguasa: [
      { nama: "Ken Arok", mulai: 1222, akhir: 1227 },
      { nama: "Anusapati", mulai: 1227, akhir: 1248 },
      { nama: "Wisnuwardhana", mulai: 1248, akhir: 1268 },
      { nama: "Kertanagara", mulai: 1268, akhir: 1292 }
    ]
  },
  majapahit: {
    tahunDidirikan: "1293",
    ringkasan: "Didirikan Raden Wijaya setelah Mongol menyerbu Jawa. Mencapai masa keemasan di bawah Hayam Wuruk dengan Gajah Mada sebagai mahapatih, lalu melemah sepeninggal keduanya dan akibat perang saudara.",
    penguasa: [
      { nama: "Kertarajasa Jayawardhana", mulai: 1293, akhir: 1309 },
      { nama: "Jayanegara", mulai: 1309, akhir: 1328 },
      { nama: "Tribhuwana Tunggadewi", mulai: 1328, akhir: 1350 },
      { nama: "Hayam Wuruk", mulai: 1350, akhir: 1389 },
      { nama: "Wikramawardhana", mulai: 1389, akhir: 1429 },
      { nama: "Suhita", mulai: 1429, akhir: 1447 },
      { nama: "Kertawijaya", mulai: 1447, akhir: 1451 }
    ]
  },
  kadiri: {
    tahunDidirikan: "sekitar 1042 (menurut tradisi)",
    ringkasan: "Kerajaan Jawa Timur yang kuat sebelum Singhasari. Runtuh pada 1222 setelah dikalahkan Ken Arok. Daftar penguasanya tidak tercatat lengkap dalam sumber yang tersedia.",
    penguasa: []
  },
  melaka: {
    tahunDidirikan: "sekitar 1400",
    ringkasan: "Dikenal sebagai pelabuhan dagang utama Selat Melaka. Menjadi kesultanan setelah memeluk Islam, dan runtuh ke Portugis pada 1511.",
    penguasa: [
      { nama: "Parameswara", mulai: 1400, akhir: 1414 },
      { nama: "Megat Iskandar Shah", mulai: 1414, akhir: 1424 },
      { nama: "Muhammad Shah", mulai: 1424, akhir: 1444 },
      { nama: "Muzaffar Shah", mulai: 1446, akhir: 1459 },
      { nama: "Mansur Shah", mulai: 1459, akhir: 1477 },
      { nama: "Alauddin Riayat Shah", mulai: 1477, akhir: 1488 },
      { nama: "Mahmud Shah", mulai: 1488, akhir: 1511 }
    ]
  },
  demak: {
    tahunDidirikan: "1478",
    ringkasan: "Kesultanan pesisir utara Jawa yang berkembang setelah Majapahit melemah. Mencapai puncak di bawah Sultan Trenggana, lalu pecah setelah krisis suksesi.",
    penguasa: [
      { nama: "Raden Patah", mulai: 1478, akhir: 1518 },
      { nama: "Pati Unus", mulai: 1518, akhir: 1521 },
      { nama: "Sultan Trenggana", mulai: 1521, akhir: 1546 }
    ]
  },
  aceh: {
    tahunDidirikan: "1496",
    ringkasan: "Kesultanan di ujung utara Sumatra. Merebut Pasai pada 1524 dan mencapai puncak kekuasaannya di bawah Iskandar Muda (1607-1636).",
    penguasa: [
      { nama: "Ali Mughayat Syah", mulai: 1496, akhir: 1530 },
      { nama: "Salahuddin", mulai: 1530, akhir: 1537 },
      { nama: "Alauddin Riayat Syah al-Kahhar", mulai: 1537, akhir: 1568 },
      { nama: "Iskandar Muda", mulai: 1607, akhir: 1636 }
    ]
  },
  banten: {
    negaraBoneka: "Sejak 1684, setelah perang saudara Sultan Ageng Tirtayasa dengan putranya Sultan Haji yang didukung VOC, Banten berada dalam pengaruh perusahaan. VOC ikut menentukan urusan dagang dan takhta, sehingga kemandirian politik Banten melemah.",
    tahunDidirikan: "1526",
    ringkasan: "Kesultanan di ujung barat Jawa yang tumbuh dari pengaruh Demak dan jalur dagang lada. Menjadi kekuatan utama di Selat Sunda hingga menjelang akhir abad ke-17.",
    penguasa: [
      { nama: "Hasanuddin", mulai: 1526, akhir: 1570 },
      { nama: "Maulana Yusuf", mulai: 1570, akhir: 1580 }
    ]
  },
  mataram: {
    negaraBoneka: "Sejak Perang Suksesi Jawa I (1704-1708), Mataram bergantung pada VOC. Pakubuwono I menyerahkan hak dagang dan Semarang sebagai imbalan dukungan, dan setelah Giyanti (1755) kekuasaan istana makin dibatasi pengaruh perusahaan.",
    tahunDidirikan: "1587",
    ringkasan: "Kerajaan Islam pedalaman Jawa yang didirikan Panembahan Senopati. Mencapai puncak di bawah Sultan Agung, yang berhadapan langsung dengan VOC di Batavia.",
    penguasa: [
      { nama: "Panembahan Senopati", mulai: 1587, akhir: 1601 },
      { nama: "Mas Jolang", mulai: 1601, akhir: 1613 },
      { nama: "Sultan Agung", mulai: 1613, akhir: 1645 }
    ]
  },
  ternate: {
    negaraBoneka: "Setelah Spanyol meninggalkan Ternate pada 1663, VOC menjadi kekuatan utama di Maluku Utara. Kesultanan Ternate menjadi sekutu bawahan perusahaan dan kerap berselisih dengan Tidore, termasuk dalam perlawanan Sultan Nuku.",
    tahunDidirikan: "1257 (menurut tradisi)",
    ringkasan: "Kerajaan rempah di Maluku Utara. Di bawah Sultan Baabullah, Portugis diusir dari benteng Kastela pada 1575.",
    penguasa: [
      { nama: "Khairun", mulai: 1534, akhir: 1570 },
      { nama: "Baabullah", mulai: 1570, akhir: 1583 }
    ]
  },
  pajajaran: {
    tahunDidirikan: "1482 sebagai Pajajaran (kerajaan Sunda jauh lebih tua)",
    ringkasan: "Kerajaan Sunda dengan pusat di Pakuan. Tamat ketika Pakuan direbut pasukan Banten pada 1579.",
    penguasa: [
      { nama: "Sri Baduga Maharaja", mulai: 1482, akhir: 1521 },
      { nama: "Surawisesa", mulai: 1521, akhir: 1535 }
    ]
  },
  "gowa-tallo": {
    tahunDidirikan: "sekitar 1300 (menurut tradisi)",
    ringkasan: "Kerajaan kembar Gowa dan Tallo di Sulawesi Selatan. Memeluk Islam pada 1605 dan menjadi pusat perdagangan rempah di timur Nusantara.",
    penguasa: [
      { nama: "Tunipalangga", mulai: 1546, akhir: 1565 },
      { nama: "Tunijallo", mulai: 1565, akhir: 1590 },
      { nama: "Alauddin", mulai: 1593, akhir: 1639 }
    ]
  },
  brunei: {
    tahunDidirikan: "sekitar 1368",
    ringkasan: "Kesultanan di pesisir utara Kalimantan. Mencapai puncak di bawah Sultan Bolkiah dengan wilayah yang meliputi sebagian besar pesisir utara Borneo.",
    penguasa: [
      { nama: "Sultan Bolkiah", mulai: 1485, akhir: 1524 }
    ]
  },
  cirebon: {
    negaraBoneka: "Sejak 1677, Kesultanan Cirebon menerima perlindungan VOC melalui kontrak. Keamanan yang diberikan perusahaan disertai kewajiban politik dan dagang, dan keputusan penting kesultanan dipengaruhi Batavia.",
    tahunDidirikan: "sekitar 1430",
    ringkasan: "Kesultanan pesisir Jawa Barat yang berkembang sebagai simpul dagang dan dakwah di bawah Sunan Gunung Jati.",
    penguasa: [
      { nama: "Sunan Gunung Jati", mulai: 1479, akhir: 1568 }
    ]
  },
  banjar: {
    negaraBoneka: "Sejak kontrak dengan VOC pada 13 Agustus 1787, Kesultanan Banjar terikat kewajiban dagang dan politik. Sumber arsip mencatat penyerahan kedaulatan dalam praktik, meski takhta sultan tetap dipertahankan.",
    tahunDidirikan: "1526",
    ringkasan: "Kesultanan Islam pertama di Kalimantan Selatan, berkembang dari perdagangan lada dan intan di delta Barito.",
    penguasa: [
      { nama: "Suriansyah", mulai: 1526, akhir: 1546, perkiraan: true },
      { nama: "Rahmatullah", mulai: 1546, akhir: 1570, perkiraan: true },
      { nama: "Hidayatullah I", mulai: 1570, akhir: 1595 },
      { nama: "Mustain Billah", mulai: 1595, akhir: 1642, perkiraan: true },
      { nama: "Inayatullah", mulai: 1642, akhir: 1645, perkiraan: true }
    ]
  },
  pasai: {
    tahunDidirikan: "sekitar 1267",
    ringkasan: "Bandar dan pusat Islam awal di pesisir utara Sumatra. Mulai meredup setelah Melaka naik, dan direbut Aceh pada 1524.",
    penguasa: [
      { nama: "Malik al-Saleh (Meurah Silu)", mulai: 1267, akhir: 1297, perkiraan: true },
      { nama: "Muhammad Malik az-Zahir", mulai: 1297, akhir: 1326, perkiraan: true }
    ]
  },
  sriwijaya: {
    tahunDidirikan: "abad ke-7",
    ringkasan: "Kerajaan maritim di Sumatra Selatan yang dulu mengendalikan jalur Selat Malaka. Pada periode ini sudah meredup dan masuk orbit Majapahit sekitar 1377.",
    penguasa: [
      { nama: "Dapunta Hyang Sri Jayanasa", mulai: 682, akhir: 702, perkiraan: true },
      { nama: "Balaputra", mulai: 835, akhir: 856, perkiraan: true }
    ]
  },
  pagaruyung: {
    tahunDidirikan: "1347",
    ringkasan: "Pusat adat dan budaya Minangkabau di pedalaman Sumatra Barat, didirikan keturunan Majapahit, Adityawarman.",
    penguasa: []
  },
  kutai: {
    tahunDidirikan: "sekitar 1300",
    ringkasan: "Kerajaan di muara Mahakam yang tumbuh dari perdagangan lada dan hasil hutan. Masa jayanya sebagai kesultanan baru datang setelah 1617.",
    penguasa: [
      { nama: "Aji Batara Agung Dewa Sakti", mulai: 1300, akhir: 1325, perkiraan: true },
      { nama: "Aji Muhammad Idris", mulai: 1732, akhir: 1739, perkiraan: true },
      { nama: "Aji Muhammad Muslihuddin", mulai: 1739, akhir: 1782, perkiraan: true },
      { nama: "Aji Muhammad Sulaiman", mulai: 1845, akhir: 1899, perkiraan: true }
    ]
  },
  blambangan: {
    ringkasan: "Kerajaan Hindu di ujung timur Jawa yang bertahan relatif mandiri di antara kekuatan Majapahit dan Islam di sekitarnya.",
    penguasa: []
  },
  madura: {
    negaraBoneka: "Setelah VOC menyingkirkan Cakraningrat IV pada 1745-1746, Madura terikat kontrak dengan perusahaan dan berada dalam pengaruhnya. Kedudukan penguasa Madura sejak itu bergantung pada kesepakatan dengan Batavia.",
    ringkasan: "Kadipaten-kadipaten di Pulau Madura yang bergantian berada di bawah Majapahit, Demak, dan Mataram.",
    penguasa: []
  },
  bone: {
    negaraBoneka: "Setelah Perjanjian Bongaya (1667) dan dukungan Arung Palakka, Bone menjadi sekutu VOC di Sulawesi Selatan. Hubungannya dengan perusahaan membuat Bone berperan dalam urusan politik Makassar, tetapi tetap berstatus sekutu, bukan wilayah langsung.",
    ringkasan: "Kerajaan Bugis di pesisir Teluk Bone. Dipaksa tunduk oleh Gowa-Tallo sekitar 1611, dan bangkit kembali di bawah Arung Palakka setelah bersekutu dengan VOC.",
    penguasa: []
  },
  bima: {
    negaraBoneka: "Sejak perjanjian 1669 dan pembaruan 1701, Bima terikat VOC sebagai sekutu bawahan. Seorang posthouder Belanda ditempatkan dekat istana sultan, dan perjanjian kolektif 1765 memperkuat posisi VOC di Sumbawa.",
    ringkasan: "Kerajaan di timur Sumbawa yang berangsur masuk pengaruh dagang dan dakwah Islam dari Gowa-Tallo menjelang akhir periode ini.",
    penguasa: [
      { nama: "Abdul Kahir", mulai: 1620, akhir: 1640, perkiraan: true },
      { nama: "Abu'l-Khair Sirajuddin", mulai: 1640, akhir: 1682, perkiraan: true }
    ]
  },
  lombok: {
    ringkasan: "Kerajaan Sasak di Pulau Lombok, dengan Selaparang sebagai yang paling menonjol.",
    penguasa: []
  },
  sukadana: {
    tahunDidirikan: "akhir abad ke-16",
    ringkasan: "Kerajaan di Kalimantan Barat bagian selatan yang beralih ke Islam dan hidup dari perdagangan intan dan lada.",
    penguasa: []
  },
  jambi: {
    tahunDidirikan: "sekitar 1615 sebagai kesultanan",
    ringkasan: "Kerajaan Melayu di muara Batanghari. Sering berada dalam bayang-bayang kekuatan yang lebih besar sebelum diakui sebagai kesultanan tersendiri.",
    penguasa: []
  },
  tidore: {
    tahunDidirikan: "1081 (menurut tradisi)",
    ringkasan: "Pesaing Ternate di Maluku Utara. Bersekutu dengan Spanyol sejak 1521 dan selalu lebih kecil pengaruhnya dibanding Ternate pada periode ini.",
    penguasa: [
      { nama: "Saidi", mulai: 1640, akhir: 1657, perkiraan: true },
      { nama: "Saifuddin", mulai: 1657, akhir: 1687, perkiraan: true }
    ]
  }
};

export function penguasaPadaTahun(detail: DetailKerajaan | undefined, tahun: number): Penguasa | null {
  if (!detail) return null;
  return detail.penguasa.find((p) => tahun >= p.mulai && tahun <= p.akhir) ?? null;
}

/** Deskripsi singkat untuk wilayah/pos kolonial (tampil di panel saat diklik). */
export const KOLONIAL_RINGKAS: Record<string, string> = {
  "melaka-portugis": "Portugis merebut Melaka pada 1511 dan menguasainya sebagai pos dagang dan benteng sampai 1641, ketika VOC bersama Johor merebutnya.",
  "ternate-portugis": "Portugis membangun kehadiran di Ternate sejak 1522 dan berselisih dengan kesultanan hingga pengusiran pada 1575.",
  "ambon-portugis": "Portugis menguasai benteng di Ambon sampai direbut VOC dan sekutu lokalnya sekitar 1605.",
  "solor-portugis": "Portugis dan kelompok Topasses berpusat di Solor. Pengaruh mereka melemah setelah VOC mengusir Portugis dari Solor sekitar 1613.",
  larantuka: "Pusat kelompok Topasses di Flores Timur yang bersaing dengan VOC dan Portugis untuk perdagangan cendana.",
  "ternate-spanyol": "Spanyol mendirikan benteng di Ternate pada awal abad ke-17 dan meninggalkan Ternate pada 1663 setelah tekanan VOC.",
  "tidore-spanyol": "Spanyol berpengaruh di Tidore dalam persaingan dengan Ternate dan VOC, sampai meninggalkan kawasan itu pada 1663.",
  "ambon-voc": "Benteng dan pos VOC di Ambon, pusat monopoli cengkih dan kontrol pelabuhan Maluku Tengah.",
  "banda-voc": "VOC menguasai Kepulauan Banda setelah penaklukan 1621 dan mengendalikan produksi pala.",
  "melaka-voc": "VOC menguasai Melaka sejak 1641 bersama Johor dan memakainya sebagai pos dagang dan pertahanan di Selat Malaka.",
  "batavia-voc": "Pusat pemerintahan VOC di Asia, didirikan setelah Jayakarta direbut pada 1619.",
  "semarang-voc": "Pelabuhan pesisir utara Jawa yang berada di bawah VOC melalui perjanjian dengan Mataram pada 1705 dan 1743.",
  "priangan-voc": "Dataran tinggi Priangan dikendalikan VOC melalui bupati, dengan sistem penanaman kopi wajib.",
  "timor-portugis": "Timor bagian timur berada di bawah Portugal dengan pusat di Dili. Wilayah ini tetap menjadi koloni Portugal sampai abad ke-20.",
  "banten-inggris": "Pos dagang Inggris di Banten sejak awal abad ke-17, yang bersaing dengan VOC di pelabuhan lada itu.",
  "bengkulu-inggris": "Inggris mendirikan benteng di Bengkulu pada 1685 dan menjadikannya pusat perdagangan lada di pesisir barat Sumatra.",
  "ambon-inggris": "Inggris menduduki Ambon selama perang Eropa pada 1796 sampai 1802.",
};

/** Detail untuk kerajaan tambahan (lihat kerajaanBaru.ts). */
Object.assign(DETAIL_KERAJAAN, {
  gelgel: { tahunDidirikan: "perkiraan abad ke-15", ringkasan: "Kerajaan Hindu-Bali yang berpusat di Gelgel dan menjadi kekuatan utama Bali sebelum runtuh pada 1686 setelah rajanya tewas.", penguasa: [] },
  palembang: { ringkasan: "Pusat politik Sumatra Selatan yang meneruskan tradisi Sriwijaya. Palembang menguasai jalur sungai Musi dan perdagangan lada serta timah.", penguasa: [] },
  johor: { ringkasan: "Kesultanan Melayu penerus Melaka setelah 1511. Pusatnya berpindah antara Johor dan Riau, dan pengaruhnya meluas di Selat Malaka.", penguasa: [] },
  buton: { ringkasan: "Kesultanan di Pulau Buton yang dikenal dengan pemerintahan dan hukum adatnya di Sulawesi Tenggara.", penguasa: [] },
  lampung: { ringkasan: "Kawasan Lampung dengan kerajaan adat Skala Brak dan jaringan perdagangan lada di pantai barat Sumatra.", penguasa: [] },
  klungkung: { tahunDidirikan: "1686", ringkasan: "Penerus Gelgel sebagai pusat kerajaan Bali setelah 1686. Rajanya memakai gelar Dewa Agung dan diakui sebagai penguasa tertinggi di Bali.", penguasa: [] },
  siak: { tahunDidirikan: "1723", ringkasan: "Kesultanan Melayu di tepi Sungai Siak yang berdiri pada 1723 dan tumbuh lewat perdagangan sungai.", penguasa: [] },
  deli: { tahunDidirikan: "sekitar 1632", ringkasan: "Kesultanan di pesisir timur Sumatra yang berkembang dari perdagangan dan kemudian tembakau. Gocah Pahlawan sering disebut sebagai penguasa pertamanya.", penguasa: [] },
  pontianak: { tahunDidirikan: "1771", ringkasan: "Kesultanan di muara Sungai Kapuas yang berdiri pada 1771 dan tumbuh sebagai pusat dagang Kalimantan Barat.", penguasa: [] },
});

/** Detail tambahan dari sumber provinsi yang sama. */
Object.assign(DETAIL_KERAJAAN, {
  "sumbawa": { ringkasan: "Kesultanan Sumbawa di Pulau Sumbawa. Hubungannya dengan VOC melalui perjanjian kolektif 1765 membuat kedudukannya sebagai sekutu bawahan perusahaan.", penguasa: [] },
  "nusa-tenggara-timur": { ringkasan: "Kumpulan kerajaan kecil di Flores, Sumba, Timor, dan Alor. Persaingan Portugis, Topasses, dan VOC membentuk pola kekuasaan di wilayah ini.", penguasa: [] },
  "papua-barat": { ringkasan: "Kawasan kepulauan Raja Ampat dan pesisir Papua Barat. Kesultanan Tidore mengklaim pengaruh atas wilayah ini, sementara penduduk lokal memiliki jaringan dagang sendiri.", penguasa: [] },
  "mandar": { ringkasan: "Kawasan pelaut Mandar di pesisir barat Sulawesi. Perahu dan pelayaran Mandar terkenal dalam jaringan perdagangan antarpulau.", penguasa: [] },
  "bolaang": { ringkasan: "Kerajaan di semenanjung utara Sulawesi, berdekatan dengan Minahasa dan Ternate. Bolaang Mongondow terlibat dalam perdagangan dan perjanjian dengan VOC.", penguasa: [] },
  "gorontalo": { ringkasan: "Kerajaan Limboto dan Gorontalo di Sulawesi bagian utara. Wilayah ini menjadi jalur antara Ternate, Makassar, dan Manado.", penguasa: [] },
  "kotawaringin": { ringkasan: "Kerajaan di pesisir barat daya Kalimantan Tengah yang berpusat di sekitar Sungai Mentaya dan Sampit, dengan perdagangan lada dan hasil hutan.", penguasa: [] },
  "hitu": { ringkasan: "Persekutuan Hitu di utara Ambon yang menguasai perdagangan cengkih dan pernah memberontak terhadap VOC pada 1643-1646.", penguasa: [] },
  "batak": { ringkasan: "Kawasan Batak di dataran tinggi Sumatra Utara, dengan struktur adat dan kekuasaan raja-raja urung yang tidak terpusat.", penguasa: [] },
  "bengkulu-lokal": { ringkasan: "Kawasan pesisir Bengkulu dengan kekuasaan lokal yang dikenal sebagai Sungai Lemau. Kedatangan Inggris pada 1685 mengubah jaringan lada di kawasan ini.", penguasa: [] },
});

/**
 * Detail kekuasaan era 3 (1800-2026). Kuncinya dipakai lewat `grup` di wilayahEra3.ts, sehingga semua potongan
 * wilayah satu kekuasaan berbagi ringkasan dan daftar pemimpin yang sama. Daftar pemimpin disusun dari
 * pengetahuan umum dan belum dicek satu per satu dengan sumber.
 */
Object.assign(DETAIL_KERAJAAN, {
  "hindia-belanda": {
    tahunDidirikan: "1800 (setelah VOC dibubarkan)",
    ringkasan: "Koloni negara Belanda yang menggantikan wilayah VOC. Kekuasaannya meluas bertahap lewat perang dan perjanjian sepanjang abad ke-19, dan baru mencakup hampir seluruh kepulauan sekitar 1910. Pemerintahan dipimpin Gubernur Jenderal di Batavia sampai Jepang datang pada 1942.",
    penguasa: [
      { nama: "Pieter Gerardus van Overstraten", mulai: 1796, akhir: 1801 },
      { nama: "Johannes Siberg", mulai: 1801, akhir: 1805 },
      { nama: "Albertus Henricus Wiese", mulai: 1805, akhir: 1808 },
      { nama: "Herman Willem Daendels", mulai: 1808, akhir: 1811 },
      { nama: "Jan Willem Janssens", mulai: 1811, akhir: 1811 },
      { nama: "Godert van der Capellen", mulai: 1816, akhir: 1826 },
      { nama: "Leonard du Bus de Gisignies", mulai: 1826, akhir: 1830 },
      { nama: "Johannes van den Bosch", mulai: 1830, akhir: 1833 },
      { nama: "Jean Chrétien Baud", mulai: 1833, akhir: 1836 },
      { nama: "Dominique Jacques de Eerens", mulai: 1836, akhir: 1840 },
      { nama: "Pieter Merkus", mulai: 1841, akhir: 1844 },
      { nama: "Jan Jacob Rochussen", mulai: 1845, akhir: 1851 },
      { nama: "Albertus Jacobus Duymaer van Twist", mulai: 1851, akhir: 1856 },
      { nama: "Charles Ferdinand Pahud", mulai: 1856, akhir: 1861 },
      { nama: "Ludolph Anne Jan Wilt Sloet van de Beele", mulai: 1861, akhir: 1866 },
      { nama: "Pieter Mijer", mulai: 1866, akhir: 1872 },
      { nama: "James Loudon", mulai: 1872, akhir: 1875 },
      { nama: "Johan Wilhelm van Lansberge", mulai: 1875, akhir: 1881 },
      { nama: "Frederik s'Jacob", mulai: 1881, akhir: 1884 },
      { nama: "Otto van Rees", mulai: 1884, akhir: 1888 },
      { nama: "Cornelis Pijnacker Hordijk", mulai: 1888, akhir: 1893 },
      { nama: "Carel Herman Aart van der Wijck", mulai: 1893, akhir: 1899 },
      { nama: "Willem Rooseboom", mulai: 1899, akhir: 1904 },
      { nama: "Joannes Benedictus van Heutsz", mulai: 1904, akhir: 1909 },
      { nama: "Alexander Willem Frederik Idenburg", mulai: 1909, akhir: 1916 },
      { nama: "Johan Paul van Limburg Stirum", mulai: 1916, akhir: 1921 },
      { nama: "Dirk Fock", mulai: 1921, akhir: 1926 },
      { nama: "Andries Cornelis Dirk de Graeff", mulai: 1926, akhir: 1931 },
      { nama: "Bonifacius Cornelis de Jonge", mulai: 1931, akhir: 1936 },
      { nama: "Alidius Tjarda van Starkenborgh Stachouwer", mulai: 1936, akhir: 1942 },
    ],
  },
  "inggris-jawa": {
    tahunDidirikan: "1811",
    ringkasan: "Pemerintahan Inggris (East India Company) atas Jawa dan pulau sekitarnya selama Perang Napoleon. Raffles memperkenalkan pajak tanah dan menulis The History of Java, sebelum Jawa dikembalikan kepada Belanda pada 1816.",
    penguasa: [
      { nama: "Thomas Stamford Raffles", mulai: 1811, akhir: 1816 },
      { nama: "John Fendall", mulai: 1816, akhir: 1816 },
    ],
  },
  "inggris-maluku": {
    ringkasan: "Pendudukan Inggris atas pos-pos Belanda di Maluku selama perang di Eropa. Inggris mengambil bibit cengkih dan pala untuk ditanam di koloninya sendiri, sehingga monopoli rempah Maluku berakhir.",
    penguasa: [],
  },
  "bengkulu-inggris": {
    tahunDidirikan: "1685",
    ringkasan: "Pos Inggris di pesisir barat Sumatra untuk perdagangan lada. Benteng Marlborough menjadi pusatnya. Inggris menukarnya dengan Melaka dalam Traktat London 1824.",
    penguasa: [{ nama: "Thomas Stamford Raffles", mulai: 1818, akhir: 1824 }],
  },
  "riau-lingga": {
    tahunDidirikan: "1824 (dipisah dari Johor)",
    ringkasan: "Kesultanan Melayu di kepulauan Riau dan Lingga, pecahan Johor-Riau setelah Traktat London. Penyengat menjadi pusat kesusastraan Melayu, tempat Raja Ali Haji menulis Gurindam Dua Belas.",
    penguasa: [],
  },
  "sulawesi-tengah": {
    ringkasan: "Kerajaan-kerajaan di Sulawesi Tengah seperti Banggai, Kaili, Poso, dan Tojo. Sebagian berada dalam lingkup pengaruh Ternate, sebagian lain berhubungan dengan kerajaan Bugis.",
    penguasa: [],
  },
  surakarta: {
    tahunDidirikan: "1745",
    ringkasan: "Kasunanan Surakarta, pecahan Mataram setelah Perjanjian Giyanti 1755, bersama Kadipaten Mangkunegaran (1757). Keduanya bertahan sebagai kerajaan di bawah kekuasaan kolonial.",
    penguasa: [
      { nama: "Pakubuwana X", mulai: 1893, akhir: 1939 },
      { nama: "Pakubuwana XI", mulai: 1939, akhir: 1945 },
      { nama: "Pakubuwana XII", mulai: 1945, akhir: 2004 },
    ],
  },
  yogyakarta: {
    tahunDidirikan: "1755",
    ringkasan: "Kesultanan Yogyakarta lahir dari Perjanjian Giyanti 1755. Keraton ini bertahan di bawah Belanda, Inggris, dan Jepang, lalu bergabung dengan Republik Indonesia dan menjadi Daerah Istimewa Yogyakarta.",
    penguasa: [
      { nama: "Hamengkubuwana VIII", mulai: 1921, akhir: 1939 },
      { nama: "Hamengkubuwana IX", mulai: 1940, akhir: 1988 },
      { nama: "Hamengkubuwana X", mulai: 1989, akhir: 2026 },
    ],
  },
  jepang: {
    tahunDidirikan: "1942",
    ringkasan: "Pendudukan militer Jepang atas Hindia Belanda dan Asia Tenggara selama Perang Pasifik. Jepang menggerakkan rakyat untuk perang lewat romusha, PETA, dan organisasi massa, lalu menyerah kepada Sekutu pada 15 Agustus 1945.",
    penguasa: [],
  },
  indonesia: {
    tahunDidirikan: "17 Agustus 1945",
    ringkasan: "Negara yang diproklamasikan Sukarno dan Hatta pada 17 Agustus 1945. Kedaulatannya diakui Belanda pada 27 Desember 1949, dan negara kesatuan terbentuk kembali pada 17 Agustus 1950.",
    penguasa: [
      { nama: "Sukarno", mulai: 1945, akhir: 1967 },
      { nama: "Soeharto", mulai: 1967, akhir: 1998 },
      { nama: "B.J. Habibie", mulai: 1998, akhir: 1999 },
      { nama: "Abdurrahman Wahid", mulai: 1999, akhir: 2001 },
      { nama: "Megawati Soekarnoputri", mulai: 2001, akhir: 2004 },
      { nama: "Susilo Bambang Yudhoyono", mulai: 2004, akhir: 2014 },
      { nama: "Joko Widodo", mulai: 2014, akhir: 2024 },
      { nama: "Prabowo Subianto", mulai: 2024, akhir: 2026 },
    ],
  },
  nica: {
    tahunDidirikan: "1945–1946",
    ringkasan: "Pemerintahan sipil Belanda (Netherlands Indies Civil Administration) yang kembali bersama pasukan Sekutu setelah Jepang menyerah. Belanda membentuk negara-negara bagian untuk menyaingi Republik dalam rancangan negara federal.",
    penguasa: [
      { nama: "Hubertus van Mook", mulai: 1945, akhir: 1948 },
      { nama: "Antonius Hermanus Johannes Lovink", mulai: 1948, akhir: 1949 },
    ],
  },
  "nugini-belanda": {
    ringkasan: "Papua bagian barat yang tetap dikuasai Belanda setelah 1949. Sengketa atas wilayah ini berujung pada operasi militer Trikora dan Perjanjian New York 1962.",
    penguasa: [],
  },
  untea: {
    tahunDidirikan: "1962",
    ringkasan: "Otoritas Eksekutif Sementara PBB (United Nations Temporary Executive Authority) yang memerintah Irian Barat selama peralihan dari Belanda ke Indonesia.",
    penguasa: [{ nama: "Djalal Abdoh", mulai: 1962, akhir: 1963 }],
  },
  untaet: {
    tahunDidirikan: "1999",
    ringkasan: "Pemerintahan Transisi PBB di Timor Timur (United Nations Transitional Administration in East Timor) yang menyiapkan kemerdekaan Timor-Leste setelah referendum 1999.",
    penguasa: [{ nama: "Sérgio Vieira de Mello", mulai: 1999, akhir: 2002 }],
  },
  "timor-portugis": {
    ringkasan: "Timor bagian timur di bawah Portugal dengan pusat di Dili. Setelah Revolusi Anyelir di Portugal (1974), koloni ini ditinggalkan dan pecah perang saudara sebelum Indonesia menyerbu pada 1975.",
    penguasa: [],
  },
  "melaka-inggris": {
    ringkasan: "Inggris menduduki Melaka milik Belanda selama perang di Eropa supaya kota itu tidak jatuh ke tangan Prancis.",
    penguasa: [],
  },
  "melaka-belanda": {
    ringkasan: "Masa singkat Melaka kembali ke tangan Belanda sebelum ditukar dengan Bengkulu dalam Traktat London 1824.",
    penguasa: [],
  },
  "malaya-inggris": {
    ringkasan: "Kekuasaan Inggris di Semenanjung Malaya dan Borneo: Negeri-Negeri Selat (Penang, Melaka, Singapura), negeri Melayu yang diberi residen Inggris, dan koloni-koloni setelah Perang Dunia II.",
    penguasa: [],
  },
  malaysia: {
    tahunDidirikan: "1957 (Malaya), 1963 (Malaysia)",
    ringkasan: "Federasi Malaya merdeka pada 1957 dan diperluas menjadi Malaysia pada 1963. Indonesia menentang pembentukannya lewat Konfrontasi sampai 1966.",
    penguasa: [
      { nama: "Tunku Abdul Rahman", mulai: 1957, akhir: 1970 },
      { nama: "Abdul Razak Hussein", mulai: 1970, akhir: 1976 },
      { nama: "Hussein Onn", mulai: 1976, akhir: 1981 },
      { nama: "Mahathir Mohamad", mulai: 1981, akhir: 2003 },
      { nama: "Abdullah Ahmad Badawi", mulai: 2003, akhir: 2009 },
      { nama: "Najib Razak", mulai: 2009, akhir: 2018 },
      { nama: "Mahathir Mohamad (kedua)", mulai: 2018, akhir: 2020 },
      { nama: "Muhyiddin Yassin", mulai: 2020, akhir: 2021 },
      { nama: "Ismail Sabri Yaakob", mulai: 2021, akhir: 2022 },
      { nama: "Anwar Ibrahim", mulai: 2022, akhir: 2026 },
    ],
  },
  singapura: {
    tahunDidirikan: "1819 (pos Inggris), 1965 (negara)",
    ringkasan: "Pelabuhan yang didirikan Raffles pada 1819 dan tumbuh menjadi pusat dagang Asia Tenggara. Singapura sempat bergabung dengan Malaysia (1963–1965) lalu merdeka.",
    penguasa: [
      { nama: "Lee Kuan Yew", mulai: 1959, akhir: 1990 },
      { nama: "Goh Chok Tong", mulai: 1990, akhir: 2004 },
      { nama: "Lee Hsien Loong", mulai: 2004, akhir: 2024 },
      { nama: "Lawrence Wong", mulai: 2024, akhir: 2026 },
      { nama: "Ong Teng Cheong (presiden)", mulai: 1993, akhir: 1999 },
      { nama: "S.R. Nathan (presiden)", mulai: 1999, akhir: 2011 },
      { nama: "Tony Tan Keng Yam (presiden)", mulai: 2011, akhir: 2017 },
      { nama: "Halimah Yacob (presiden)", mulai: 2017, akhir: 2023 },
      { nama: "Tharman Shanmugaratnam (presiden)", mulai: 2023, akhir: 2026 },
    ],
  },
  "sarawak-brooke": {
    tahunDidirikan: "1841",
    ringkasan: "Sarawak di bawah dinasti Brooke, keluarga Inggris yang memerintah sebagai raja (Rajah Putih) setelah Kesultanan Brunei menyerahkan wilayah itu kepada James Brooke.",
    penguasa: [
      { nama: "James Brooke", mulai: 1841, akhir: 1868 },
      { nama: "Charles Brooke", mulai: 1868, akhir: 1917 },
      { nama: "Charles Vyner Brooke", mulai: 1917, akhir: 1946 },
    ],
  },
  "borneo-utara-inggris": {
    tahunDidirikan: "1881",
    ringkasan: "Borneo Utara (sekarang Sabah) diperintah Perusahaan Borneo Utara Inggris sejak 1881, lalu menjadi koloni Inggris setelah Perang Dunia II dan bergabung dengan Malaysia pada 1963.",
    penguasa: [],
  },
});

/**
 * Daftar penguasa lengkap untuk wilayah era 1–3. Tuple: [nama, mulai, akhir, perkiraan?].
 * Mengganti daftar penguasa wilayah yang disebut; wilayah yang belum punya detail dibuatkan entri baru.
 * Tanggal yang belum pasti dari sumber ditandai perkiraan. Daftar ini disusun dari pengetahuan umum
 * dan belum diverifikasi satu per satu dengan sumber primer.
 */
type TuplePenguasa = [string, number, number, boolean?];
function isiPenguasa(id: string, daftar: TuplePenguasa[]): void {
  const penguasa: Penguasa[] = daftar.map(([nama, mulai, akhir, perkiraan]) =>
    perkiraan ? { nama, mulai, akhir, perkiraan: true } : { nama, mulai, akhir },
  );
  const ada = DETAIL_KERAJAAN[id];
  if (ada) ada.penguasa = penguasa;
  else DETAIL_KERAJAAN[id] = { ringkasan: KOLONIAL_RINGKAS[id] ?? "", penguasa };
}

// Mataram Islam
isiPenguasa("mataram", [
  ["Panembahan Senopati", 1587, 1601],
  ["Mas Jolang", 1601, 1613],
  ["Sultan Agung", 1613, 1645],
  ["Amangkurat I", 1645, 1677],
  ["Amangkurat II", 1677, 1703],
  ["Amangkurat III", 1703, 1705, true],
  ["Pakubuwana I", 1705, 1719, true],
  ["Amangkurat IV", 1719, 1727, true],
  ["Pakubuwana II", 1727, 1749, true],
]);

// Kesultanan Yogyakarta (1755–)
isiPenguasa("yogyakarta", [
  ["Hamengkubuwana I", 1755, 1792],
  ["Hamengkubuwana II", 1792, 1812],
  ["Hamengkubuwana III", 1812, 1814, true],
  ["Hamengkubuwana IV", 1814, 1823, true],
  ["Hamengkubuwana V", 1823, 1855, true],
  ["Hamengkubuwana VI", 1855, 1877, true],
  ["Hamengkubuwana VII", 1877, 1921, true],
  ["Hamengkubuwana VIII", 1921, 1939],
  ["Hamengkubuwana IX", 1940, 1988],
  ["Hamengkubuwana X", 1989, 2026],
]);

// Kasunanan Surakarta (1745–)
isiPenguasa("surakarta", [
  ["Pakubuwana II", 1745, 1749, true],
  ["Pakubuwana III", 1749, 1788, true],
  ["Pakubuwana IV", 1788, 1820, true],
  ["Pakubuwana V", 1820, 1823],
  ["Pakubuwana VI", 1823, 1830],
  ["Pakubuwana VII", 1830, 1858],
  ["Pakubuwana VIII", 1858, 1861],
  ["Pakubuwana IX", 1861, 1893],
  ["Pakubuwana X", 1893, 1939],
  ["Pakubuwana XI", 1939, 1945],
  ["Pakubuwana XII", 1945, 2004],
]);

// Demak
isiPenguasa("demak", [
  ["Raden Patah", 1478, 1518],
  ["Pati Unus", 1518, 1521],
  ["Sultan Trenggana", 1521, 1546],
  ["Sunan Prawoto", 1546, 1549, true],
]);

// Banten
isiPenguasa("banten", [
  ["Hasanuddin", 1526, 1570],
  ["Maulana Yusuf", 1570, 1580],
  ["Maulana Muhammad", 1580, 1596],
  ["Sultan Abu'l-Mafakhir Mahmud Abdulkadir", 1596, 1651, true],
  ["Sultan Ageng Tirtayasa", 1651, 1683],
  ["Sultan Haji", 1683, 1687],
  ["Sultan Abu Nasr Abdul Qahhar", 1687, 1690, true],
  ["Sultan Zainul Arifin", 1690, 1733, true],
]);

// Cirebon
isiPenguasa("cirebon", [
  ["Sunan Gunung Jati", 1479, 1568],
  ["Pangeran Pasarean", 1568, 1570, true],
  ["Panembahan Ratu I", 1570, 1649, true],
  ["Panembahan Girilaya", 1649, 1666, true],
]);

// Kesultanan Aceh
isiPenguasa("aceh", [
  ["Ali Mughayat Syah", 1496, 1530, true],
  ["Salahuddin", 1530, 1537],
  ["Alauddin Riayat Syah al-Kahhar", 1537, 1568],
  ["Sayyid al-Mukammil", 1589, 1604, true],
  ["Iskandar Muda", 1607, 1636],
  ["Iskandar Thani", 1636, 1641, true],
  ["Taj al-Alam Safiyyat al-Din", 1641, 1675, true],
  ["Nurul Alam", 1675, 1678, true],
  ["Inayat Syah", 1678, 1688, true],
  ["Kamalat Syah", 1688, 1699, true],
  ["Sultan Mahmud Syah", 1870, 1874, true],
  ["Muhammad Daud Syah", 1874, 1903, true],
]);

// Pajajaran (Sunda)
isiPenguasa("pajajaran", [
  ["Sri Baduga Maharaja", 1482, 1521],
  ["Surawisesa", 1521, 1535],
  ["Ratu Saksi", 1535, 1543, true],
  ["Tohaan", 1543, 1551, true],
  ["Nilakendra", 1551, 1567, true],
  ["Raga Mulya", 1567, 1579, true],
]);

// Gowa-Tallo
isiPenguasa("gowa-tallo", [
  ["Tunipalangga", 1546, 1565],
  ["Tunijallo", 1565, 1590],
  ["Alauddin", 1593, 1639],
  ["Muhammad Said", 1639, 1653, true],
  ["Sultan Hasanuddin", 1653, 1669, true],
]);

// Bone
isiPenguasa("bone", [
  ["Arung Palakka", 1672, 1696],
]);

// Madura
isiPenguasa("madura", [
  ["Cakraningrat I", 1624, 1648, true],
  ["Trunajaya", 1671, 1679, true],
  ["Cakraningrat IV", 1718, 1746, true],
]);

// Blambangan
isiPenguasa("blambangan", [
  ["Tawang Alun I", 1655, 1691, true],
  ["Tawang Alun II", 1691, 1736, true],
  ["Mas Alit", 1736, 1767, true],
]);

// Kadiri
isiPenguasa("kadiri", [
  ["Sri Jayabhaya", 1135, 1157, true],
  ["Sarweswara", 1159, 1169, true],
  ["Aryeswara", 1169, 1181, true],
  ["Kroncharyadipa", 1181, 1185, true],
  ["Kameswara", 1185, 1190, true],
  ["Kertajaya", 1190, 1222, true],
  ["Jayakatwang", 1222, 1292, true],
]);

// Pagaruyung (Minangkabau)
isiPenguasa("pagaruyung", [
  ["Adityawarman", 1347, 1375, true],
  ["Ananggawarman", 1375, 1417, true],
]);

// Gelgel dan Klungkung (Bali)
isiPenguasa("gelgel", [
  ["Dalem Sri Smara Kepakisan", 1380, 1420, true],
  ["Dalem Batu Renggong", 1460, 1550, true],
  ["Dalem Di Made", 1580, 1600, true],
  ["Dalem Anom Ing Sagening", 1665, 1686, true],
]);
isiPenguasa("klungkung", [
  ["Dewa Agung Jambe I", 1686, 1719, true],
  ["Dewa Agung Jambe II", 1900, 1908, true],
]);

// Palembang
isiPenguasa("palembang", [
  ["Sultan Abdurrahman", 1659, 1706, true],
  ["Sultan Mahmud Badaruddin I", 1724, 1757, true],
  ["Sultan Ahmad Najamuddin I", 1757, 1776, true],
  ["Sultan Muhammad Bahauddin", 1776, 1803, true],
  ["Sultan Mahmud Badaruddin II", 1803, 1821],
  ["Sultan Ahmad Najamuddin II", 1821, 1823, true],
]);

// Johor-Riau
isiPenguasa("johor", [
  ["Sultan Mahmud Syah", 1511, 1528, true],
  ["Sultan Alauddin Riayat Syah II", 1528, 1564, true],
  ["Sultan Muzaffar Syah", 1564, 1570, true],
  ["Sultan Alauddin Riayat Syah III", 1571, 1597, true],
  ["Sultan Abdul Jalil Syah III", 1623, 1677, true],
  ["Sultan Mahmud Syah II", 1685, 1699, true],
  ["Sultan Abdul Jalil Syah IV", 1699, 1718, true],
  ["Sultan Sulaiman", 1722, 1760, true],
  ["Sultan Mahmud Syah III", 1761, 1812, true],
  ["Sultan Hussein", 1819, 1835, true],
  ["Sultan Ali", 1835, 1862, true],
  ["Sultan Abu Bakar", 1862, 1895, true],
]);

// Siak Sri Indrapura
isiPenguasa("siak", [
  ["Sultan Abdul Jalil Rahmat Syah", 1723, 1746, true],
  ["Sultan Muhammad Ali", 1746, 1765, true],
  ["Sultan Syarif Kasim I", 1780, 1810, true],
  ["Sultan Ismail", 1810, 1864, true],
  ["Sultan Syarif Hasyim", 1864, 1889, true],
  ["Sultan Syarif Kasim II", 1889, 1945],
]);

// Deli
isiPenguasa("deli", [
  ["Gocah Pahlawan", 1632, 1669, true],
  ["Sultan Mahmud Perkasa Alam", 1854, 1873, true],
  ["Sultan Ma'mun Al Rasyid Perkasa Alam", 1873, 1924, true],
  ["Sultan Amaluddin Al Sani", 1924, 1946, true],
]);

// Pontianak
isiPenguasa("pontianak", [
  ["Sultan Syarif Abdurrahman Alqadrie", 1771, 1808],
  ["Sultan Syarif Kasim", 1808, 1819, true],
  ["Sultan Syarif Usman", 1819, 1855, true],
  ["Sultan Syarif Hamid", 1855, 1872, true],
]);

// Jambi
isiPenguasa("jambi", [
  ["Orang Kayo Hitam", 1615, 1620, true],
  ["Sultan Thaha Saifuddin", 1855, 1904, true],
]);

// Brunei
isiPenguasa("brunei", [
  ["Sultan Bolkiah", 1485, 1524],
  ["Sultan Omar Ali Saifuddin I", 1829, 1852, true],
  ["Sultan Muhammad Jamalul Alam I", 1852, 1885, true],
  ["Sultan Hashim Jalilul Alam Aqamaddin", 1885, 1906, true],
  ["Sultan Muhammad Jamalul Alam II", 1906, 1924, true],
  ["Sultan Ahmad Tajuddin", 1924, 1950, true],
  ["Sultan Omar Ali Saifuddin III", 1950, 1967],
  ["Sultan Hassanal Bolkiah", 1967, 2026],
]);

// Tidore
isiPenguasa("tidore", [
  ["Saidi", 1640, 1657, true],
  ["Saifuddin", 1657, 1687, true],
  ["Sultan Nuku", 1780, 1805],
]);

// Batavia VOC: Gubernur Jenderal
isiPenguasa("batavia-voc", [
  ["Jan Pieterszoon Coen", 1619, 1623],
  ["Pieter de Carpentier", 1623, 1627],
  ["Jan Pieterszoon Coen (kedua)", 1627, 1629],
  ["Jacques Specx", 1629, 1632],
  ["Hendrik Brouwer", 1632, 1636],
  ["Antonio van Diemen", 1636, 1645],
  ["Cornelis van der Lijn", 1646, 1650],
  ["Carel Reyniersz", 1650, 1653],
  ["Joan Maetsuycker", 1653, 1678],
  ["Rijcklof van Goens", 1678, 1681],
  ["Cornelis Speelman", 1681, 1684],
  ["Johannes Camphuys", 1684, 1691],
  ["Willem van Outhoorn", 1691, 1704],
  ["Joan van Hoorn", 1704, 1709],
  ["Abraham van Riebeeck", 1709, 1713],
  ["Christoffel van Swoll", 1713, 1718],
  ["Hendrick Zwaardecroon", 1718, 1725],
  ["Diederik Durven", 1725, 1729],
  ["Dirk van Cloon", 1732, 1735],
  ["Gustaaf Willem van Imhoff", 1743, 1750],
  ["Jacob Mossel", 1750, 1761],
  ["Petrus Albertus van der Parra", 1761, 1775],
  ["Reinier de Klerk", 1777, 1780],
  ["Willem Alting", 1780, 1797],
]);

// Timor-Leste (2002–2026): daftar presiden. Daftar perdana menteri belum dimasukkan.
isiPenguasa("timor-leste", [
  ["Xanana Gusmão", 2002, 2007],
  ["José Ramos-Horta", 2007, 2012],
  ["Taur Matan Ruak", 2012, 2017],
  ["Francisco Guterres Lú-Olo", 2017, 2022],
  ["José Ramos-Horta (kedua)", 2022, 2026],
]);
const detailTimorLeste = DETAIL_KERAJAAN["timor-leste"];
if (detailTimorLeste) detailTimorLeste.ringkasan = "Negara merdeka pada 20 Mei 2002 setelah masa pemerintahan transisi PBB (UNTAET). Xanana Gusmão, pemimpin gerilya Falintil, menjadi presiden pertama dan Timor-Leste menjadi anggota PBB pada 2002.";
