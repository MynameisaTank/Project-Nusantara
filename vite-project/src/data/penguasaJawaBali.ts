import type { DetailPenguasa } from "./penguasaDetail";

/* Penguasa kerajaan di Jawa dan Bali. Belum ditinjau sejarawan; kisah dari babad ditandai "menurut babad". */
export const PENGUASA_JAWA_BALI: Record<string, DetailPenguasa> = {
  // ——— Mataram Islam ———
  "mataram|Amangkurat I": {
    tentang: [
      "Putra Sultan Agung yang memindahkan istana ke Plered. Pemerintahannya dikenal keras: ia menghukum mati banyak bangsawan dan ulama yang dianggap mengancam, dan berdamai dengan VOC.",
      "Pemberontakan Trunajaya merebut Plered pada 1677. Amangkurat I melarikan diri dan wafat dalam pelarian, lalu dimakamkan di Tegalarum.",
    ],
    sorotan: ["Perjanjian damai dengan VOC (1646)", "Plered jatuh ke Trunajaya (1677)"],
  },
  "mataram|Amangkurat II": {
    tentang: [
      "Mengalahkan Trunajaya dengan bantuan VOC dan mendirikan istana baru di Kartasura. Bantuan itu dibayar mahal dengan penyerahan wilayah dan hak dagang kepada VOC.",
      "Ia juga berhadapan dengan Untung Surapati, bekas budak yang memberontak terhadap VOC dan kemudian berkuasa di Jawa Timur.",
    ],
    sorotan: ["Mendirikan Kartasura", "Bergantung pada bantuan VOC"],
  },
  "mataram|Amangkurat III": {
    tentang: ["Bertakhta singkat sebelum digulingkan pamannya, Pakubuwana I, yang didukung VOC. Ia kemudian dibuang ke Sri Lanka."],
    sorotan: ["Perang Suksesi Jawa pertama", "Dibuang ke Sri Lanka"],
  },
  "mataram|Pakubuwana I": {
    tentang: ["Naik takhta lewat Perang Suksesi Jawa pertama dengan bantuan VOC, dan sebagai gantinya menyerahkan lebih banyak wilayah dan hak kepada VOC."],
    sorotan: ["Perang Suksesi Jawa pertama (1704–1708)"],
  },
  "mataram|Amangkurat IV": {
    tentang: ["Pemerintahannya diwarnai Perang Suksesi Jawa kedua (1719–1723) melawan saudara-saudaranya, yang lagi-lagi dimenangkan dengan bantuan VOC."],
    sorotan: ["Perang Suksesi Jawa kedua"],
  },
  "mataram|Pakubuwana II": {
    tentang: [
      "Sempat mendukung pemberontak Tionghoa setelah Geger Pecinan, lalu berbalik ke VOC. Kartasura jatuh pada 1742 dan ia memindahkan istana ke Surakarta pada 1745.",
      "Menjelang wafat pada 1749 ia menyerahkan kedaulatan Mataram kepada VOC.",
    ],
    sorotan: ["Kartasura jatuh (1742)", "Menyerahkan Mataram kepada VOC (1749)"],
  },

  // ——— Kasunanan Surakarta ———
  "surakarta|Pakubuwana II": {
    tentang: ["Memindahkan istana dari Kartasura yang hancur ke Desa Sala pada 1745, yang kemudian berkembang menjadi Surakarta."],
    sorotan: ["Mendirikan Keraton Surakarta (1745)"],
  },
  "surakarta|Pakubuwana III": {
    tentang: ["Pada masanya Mataram dibagi dua lewat Perjanjian Giyanti (1755), lalu wilayahnya berkurang lagi lewat Perjanjian Salatiga (1757) untuk Mangkunegara I."],
    sorotan: ["Perjanjian Giyanti (1755)", "Perjanjian Salatiga (1757)"],
  },
  "surakarta|Pakubuwana IV": {
    tentang: ["Raja yang dikenal saleh dan pujangga. Ia menulis Serat Wulangreh, kumpulan ajaran budi pekerti dalam bentuk tembang."],
    sorotan: ["Penulis Serat Wulangreh"],
  },
  "surakarta|Pakubuwana V": {
    tentang: ["Semasa menjadi putra mahkota, ia memprakarsai penyusunan Serat Centhini, karya sastra Jawa yang sangat panjang tentang pengetahuan dan kehidupan Jawa."],
    sorotan: ["Prakarsa Serat Centhini"],
  },
  "surakarta|Pakubuwana VI": {
    tentang: ["Dikenal bersimpati kepada Pangeran Diponegoro. Setelah Perang Jawa, Belanda membuangnya ke Ambon pada 1830. Ia diakui sebagai Pahlawan Nasional."],
    sorotan: ["Dibuang ke Ambon (1830)", "Pahlawan Nasional"],
  },
  "surakarta|Pakubuwana VII": {
    tentang: ["Pemerintahannya relatif damai setelah Perang Jawa. Pada masanya pujangga Ranggawarsita banyak berkarya."],
    sorotan: ["Masa keemasan sastra Ranggawarsita"],
  },
  "surakarta|Pakubuwana VIII": {
    tentang: ["Bertakhta singkat pada usia lanjut, dari 1858 sampai 1861."],
    sorotan: ["Masa pemerintahan singkat"],
  },
  "surakarta|Pakubuwana IX": {
    tentang: ["Putra Pakubuwana VI. Ia memerintah lebih dari tiga puluh tahun di masa ketika kekuasaan nyata makin dipegang pemerintah kolonial."],
    sorotan: ["Putra Pakubuwana VI"],
  },
  "surakarta|Pakubuwana X": {
    tentang: [
      "Raja yang sangat kaya dan berpengaruh, dengan masa pemerintahan terpanjang di Surakarta. Ia mendukung modernisasi kota dan berbagai organisasi pergerakan.",
      "Ia diakui sebagai Pahlawan Nasional.",
    ],
    sorotan: ["Bertakhta 46 tahun", "Pahlawan Nasional"],
  },
  "surakarta|Pakubuwana XI": {
    tentang: ["Bertakhta pada masa akhir Hindia Belanda dan pendudukan Jepang."],
    sorotan: ["Masa pendudukan Jepang"],
  },
  "surakarta|Pakubuwana XII": {
    tentang: ["Naik takhta muda pada 1945 dan menyatakan dukungan kepada Republik. Gerakan antiswapraja pada 1946 membuat Surakarta kehilangan status daerah istimewanya."],
    sorotan: ["Status istimewa Surakarta dihapus (1946)", "Bertakhta hampir 60 tahun"],
  },

  // ——— Kesultanan Yogyakarta ———
  "yogyakarta|Hamengkubuwana I": {
    gelar: "Pangeran Mangkubumi",
    tentang: [
      "Pangeran Mataram yang berperang melawan VOC dan saudaranya sampai Perjanjian Giyanti (1755) memberinya separuh Mataram. Ia mendirikan Keraton Yogyakarta.",
      "Ia diakui sebagai Pahlawan Nasional.",
    ],
    sorotan: ["Mendirikan Yogyakarta (1755)", "Pahlawan Nasional"],
  },
  "yogyakarta|Hamengkubuwana II": {
    tentang: [
      "Menentang campur tangan Daendels dan Raffles. Setelah Inggris menyerbu keraton dalam Geger Sepehi (1812), ia diturunkan dan dibuang ke Penang.",
      "Belanda sempat mengembalikannya ke takhta pada masa Perang Jawa.",
    ],
    sorotan: ["Geger Sepehi (1812)", "Dibuang ke Penang"],
  },
  "yogyakarta|Hamengkubuwana III": {
    tentang: ["Diangkat Inggris setelah Geger Sepehi. Ia adalah ayah Pangeran Diponegoro."],
    sorotan: ["Ayah Pangeran Diponegoro"],
  },
  "yogyakarta|Hamengkubuwana IV": {
    tentang: ["Naik takhta saat masih anak-anak dan wafat mendadak pada 1823, ketika ketegangan di istana menjelang Perang Jawa meningkat."],
    sorotan: ["Bertakhta saat masih anak-anak"],
  },
  "yogyakarta|Hamengkubuwana V": {
    tentang: ["Bertakhta sejak bayi di bawah perwalian, termasuk Diponegoro. Perang Jawa (1825–1830) meletus di awal masa pemerintahannya."],
    sorotan: ["Perang Jawa (1825–1830)"],
  },
  "yogyakarta|Hamengkubuwana VI": {
    tentang: ["Pada masanya gempa besar 1867 merusak bangunan di Yogyakarta, termasuk Tugu yang kemudian dibangun ulang dalam bentuk berbeda."],
    sorotan: ["Gempa Yogyakarta 1867"],
  },
  "yogyakarta|Hamengkubuwana VII": {
    tentang: ["Memerintah ketika industri gula berkembang pesat dan kas keraton makin makmur. Muhammadiyah didirikan di Yogyakarta pada masanya (1912)."],
    sorotan: ["Masa kejayaan pabrik gula", "Berdirinya Muhammadiyah (1912)"],
  },
  "yogyakarta|Hamengkubuwana VIII": {
    tentang: ["Mendorong modernisasi keraton dan menyekolahkan putra-putranya ke sekolah Belanda, termasuk calon Hamengkubuwana IX."],
    sorotan: ["Modernisasi keraton"],
  },
  "yogyakarta|Hamengkubuwana IX": {
    tentang: [
      "Segera mendukung Republik setelah Proklamasi. Yogyakarta menjadi ibu kota Republik pada 1946–1949, dan ia berperan dalam Serangan Umum 1 Maret 1949.",
      "Ia kemudian menjabat menteri di beberapa kabinet dan wakil presiden pada 1973–1978.",
    ],
    sorotan: ["Yogyakarta menjadi ibu kota Republik", "Wakil Presiden 1973–1978"],
  },
  "yogyakarta|Hamengkubuwana X": {
    tentang: ["Sultan Yogyakarta sejak 1989 yang juga menjabat Gubernur Daerah Istimewa Yogyakarta."],
    sorotan: ["Gubernur DIY"],
  },

  // ——— Demak, Banten, Cirebon ———
  "demak|Sunan Prawoto": {
    tentang: ["Putra Sultan Trenggana yang bertakhta setelah ayahnya wafat. Ia dibunuh atas suruhan Arya Penangsang dalam perebutan takhta, dan Demak pun pecah."],
    sorotan: ["Dibunuh dalam perebutan takhta (1549)"],
  },
  "banten|Maulana Muhammad": {
    tentang: ["Sultan muda yang tewas saat memimpin serangan ke Palembang pada 1596, tahun yang sama dengan kedatangan kapal Belanda pertama di Banten."],
    sorotan: ["Tewas dalam serangan ke Palembang (1596)"],
  },
  "banten|Sultan Abu'l-Mafakhir Mahmud Abdulkadir": {
    tentang: ["Bertakhta sejak kecil dan memerintah lebih dari lima puluh tahun. Ia penguasa Banten pertama yang mendapat gelar sultan dari Makkah (1638)."],
    sorotan: ["Gelar sultan dari Makkah (1638)"],
  },
  "banten|Sultan Ageng Tirtayasa": {
    tentang: [
      "Membawa Banten ke puncak kejayaan sebagai bandar dagang internasional dan gigih menentang monopoli VOC.",
      "Konflik dengan putranya, Sultan Haji, yang didukung VOC berujung pada kekalahannya. Ia ditangkap pada 1683 dan diakui sebagai Pahlawan Nasional.",
    ],
    sorotan: ["Puncak kejayaan Banten", "Pahlawan Nasional"],
  },
  "banten|Sultan Haji": {
    gelar: "Abu Nashar Abdul Qahhar",
    tentang: ["Putra Sultan Ageng Tirtayasa yang merebut takhta dengan bantuan VOC. Sebagai imbalannya VOC memperoleh monopoli perdagangan di Banten."],
    sorotan: ["Bersekutu dengan VOC melawan ayahnya", "Banten kehilangan kebebasan dagang"],
  },
  "banten|Sultan Abu Nasr Abdul Qahhar": {
    tentang: [
      "Penguasa Banten pada 1687–1690. Gelar Abu Nashar Abdul Qahhar dalam banyak sumber merujuk pada Sultan Haji sendiri; penguasa pada tahun-tahun ini umumnya disebut Sultan Abu Fadhl Muhammad Yahya. Nama di daftar ini perlu dicek ulang.",
    ],
    sorotan: ["Nama dan urutan berbeda antarsumber"],
  },
  "banten|Sultan Zainul Arifin": {
    tentang: [
      "Penguasa Banten pada awal abad ke-18, ketika Banten sudah berada di bawah pengaruh VOC. Banyak sumber menyebut penguasa 1690–1733 sebagai Sultan Zainul Abidin, sedangkan Zainul Arifin bertakhta sesudahnya.",
    ],
    sorotan: ["Nama dan tahun berbeda antarsumber"],
  },
  "cirebon|Pangeran Pasarean": {
    tentang: ["Putra Sunan Gunung Jati. Banyak sumber menyebut ia wafat sebelum ayahnya, sehingga tahun pemerintahannya di daftar ini masih perlu dicek."],
    sorotan: ["Putra Sunan Gunung Jati"],
  },
  "cirebon|Panembahan Ratu I": {
    tentang: ["Penerus Sunan Gunung Jati yang memerintah sangat lama dan lebih dikenal sebagai pemimpin keagamaan. Cirebon pada masanya berada di bawah bayang-bayang Mataram."],
    sorotan: ["Pemerintahan panjang dan damai"],
  },
  "cirebon|Panembahan Girilaya": {
    tentang: ["Wafat di Mataram saat berkunjung ke istana Amangkurat I dan dimakamkan di Girilaya. Sepeninggalnya Cirebon terbagi menjadi Kasepuhan dan Kanoman."],
    sorotan: ["Cirebon terbagi setelah wafatnya"],
  },

  // ——— Sunda (Pajajaran) ———
  "pajajaran|Ratu Saksi": {
    tentang: ["Penguasa Sunda pada pertengahan abad ke-16. Keterangan tentangnya terutama berasal dari Carita Parahyangan, dan nama serta urutan raja di masa ini berbeda antarsumber."],
    sorotan: ["Sumber utama: Carita Parahyangan"],
  },
  "pajajaran|Tohaan": {
    tentang: ["Raja Sunda menurut Carita Parahyangan pada masa kerajaan makin terdesak oleh Banten dan Cirebon. Rinciannya sangat terbatas."],
    sorotan: ["Masa Sunda terdesak"],
  },
  "pajajaran|Nilakendra": {
    tentang: ["Menurut Carita Parahyangan, pada masanya Pakuan diserang dan raja meninggalkan ibu kota. Kekuatan Sunda terus menurun."],
    sorotan: ["Pakuan makin terdesak"],
  },
  "pajajaran|Raga Mulya": {
    gelar: "Prabu Suryakancana",
    tentang: ["Raja Sunda terakhir. Pakuan jatuh ke pasukan Banten pada 1579, dan batu penobatan Palangka Sriman Sriwacana dibawa ke Banten sebagai tanda berakhirnya kerajaan."],
    sorotan: ["Runtuhnya Pakuan (1579)"],
  },

  // ——— Madura dan Blambangan ———
  "madura|Cakraningrat I": {
    tentang: ["Bangsawan Madura yang diangkat Sultan Agung setelah Mataram menaklukkan Madura pada 1624. Ia wafat dalam pertempuran saat membela Mataram."],
    sorotan: ["Penguasa Madura di bawah Mataram"],
  },
  "madura|Trunajaya": {
    tentang: [
      "Bangsawan Madura yang memberontak terhadap Amangkurat I dan berhasil merebut ibu kota Plered pada 1677.",
      "Ia akhirnya dikalahkan Amangkurat II dengan bantuan VOC, ditangkap pada 1679, lalu dihukum mati.",
    ],
    sorotan: ["Merebut Plered (1677)", "Ditangkap pada 1679"],
  },
  "madura|Cakraningrat IV": {
    tentang: ["Berusaha melepaskan Madura dari Mataram dengan bersekutu dengan VOC, lalu berbalik melawan VOC. Ia ditangkap dan dibuang ke Tanjung Harapan."],
    sorotan: ["Dibuang ke Tanjung Harapan (1746)"],
  },
  "blambangan|Tawang Alun I": {
    tentang: ["Menurut tradisi, Prabu Tawang Alun membawa Blambangan ke masa jaya dengan pusat di Macan Putih. Nama, urutan, dan tahun penguasa Blambangan berbeda antarsumber."],
    sorotan: ["Pusat kerajaan di Macan Putih"],
  },
  "blambangan|Tawang Alun II": {
    tentang: ["Penguasa Blambangan pada awal abad ke-18, ketika kerajaan ini terjepit di antara Mataram, Bali, dan VOC. Rinciannya terbatas."],
    sorotan: ["Terjepit di antara kekuatan besar"],
  },
  "blambangan|Mas Alit": {
    tentang: ["Tokoh Blambangan di masa VOC menguasai ujung timur Jawa. Penamaan dan tahun pemerintahannya berbeda antarsumber dan perlu dicek ulang."],
    sorotan: ["Masa penaklukan VOC atas Blambangan"],
  },

  // ——— Kadiri ———
  "kadiri|Sri Jayabhaya": {
    tentang: [
      "Raja Kadiri yang paling terkenal. Pada masanya Mpu Sedah dan Mpu Panuluh menggubah Kakawin Bharatayuddha (1157).",
      "Ramalan Jangka Jayabaya yang terkenal di Jawa dikaitkan dengan namanya oleh tradisi yang jauh lebih kemudian.",
    ],
    sorotan: ["Kakawin Bharatayuddha (1157)", "Dikaitkan dengan Jangka Jayabaya"],
  },
  "kadiri|Sarweswara": {
    tentang: ["Raja Kadiri yang dikenal dari prasasti. Keterangan tentang pemerintahannya sangat terbatas."],
    sorotan: ["Dikenal dari prasasti"],
  },
  "kadiri|Aryeswara": {
    tentang: ["Raja Kadiri yang namanya tercatat dalam prasasti dari paruh kedua abad ke-12."],
    sorotan: ["Dikenal dari prasasti"],
  },
  "kadiri|Kroncharyadipa": {
    gelar: "Sri Gandra",
    tentang: ["Raja Kadiri yang dikenal dari Prasasti Jaring (1181), yang mencatat pejabat-pejabat bergelar nama hewan."],
    sorotan: ["Prasasti Jaring (1181)"],
  },
  "kadiri|Kameswara": {
    tentang: ["Pada masanya Mpu Dharmaja menggubah Kakawin Smaradahana. Namanya sering dikaitkan dengan tokoh dalam cerita Panji."],
    sorotan: ["Kakawin Smaradahana", "Dikaitkan dengan cerita Panji"],
  },
  "kadiri|Kertajaya": {
    tentang: ["Raja Kadiri terakhir. Menurut Pararaton ia berselisih dengan kaum brahmana, yang kemudian berpihak pada Ken Arok. Ia kalah dalam pertempuran Ganter pada 1222."],
    sorotan: ["Kalah dari Ken Arok di Ganter (1222)"],
  },
  "kadiri|Jayakatwang": {
    tentang: [
      "Penguasa Kadiri (Gelang-gelang) di bawah Singhasari yang memberontak dan membunuh Kertanagara pada 1292. Setahun kemudian ia dikalahkan Raden Wijaya yang memanfaatkan pasukan Mongol.",
      "Tahun di daftar ini mencakup masa Kadiri sebagai bawahan Singhasari, bukan masa pemerintahan Jayakatwang sendiri.",
    ],
    sorotan: ["Menjatuhkan Singhasari (1292)", "Dikalahkan Raden Wijaya (1293)"],
  },

  // ——— Bali ———
  "gelgel|Dalem Sri Smara Kepakisan": {
    tentang: ["Menurut babad, keturunan dinasti Kepakisan yang ditempatkan Majapahit di Bali setelah penaklukan 1343. Tahun dan silsilahnya berbeda antarsumber."],
    sorotan: ["Dinasti Kepakisan (menurut babad)"],
  },
  "gelgel|Dalem Batu Renggong": {
    gelar: "Dalem Waturenggong",
    tentang: ["Masa keemasan Gelgel. Menurut babad, kekuasaannya meluas ke Lombok, Sumbawa, dan Blambangan, dan pendeta Dang Hyang Nirartha datang ke Bali pada masanya."],
    sorotan: ["Masa keemasan Gelgel", "Kedatangan Dang Hyang Nirartha"],
  },
  "gelgel|Dalem Di Made": {
    tentang: ["Penguasa Gelgel menjelang akhir abad ke-16, ketika pelaut Belanda pertama kali singgah di Bali (1597)."],
    sorotan: ["Kunjungan Belanda pertama ke Bali"],
  },
  "gelgel|Dalem Anom Ing Sagening": {
    tentang: ["Penguasa Gelgel pada abad ke-17 menurut babad. Rinciannya berbeda antarsumber; menjelang akhir masa ini Gelgel jatuh ke tangan Gusti Agung Maruti."],
    sorotan: ["Rincian berbeda antarsumber"],
  },
  "klungkung|Dewa Agung Jambe I": {
    tentang: ["Mengalahkan Gusti Agung Maruti dan memindahkan pusat kerajaan dari Gelgel ke Klungkung (Semarapura) sekitar 1686."],
    sorotan: ["Mendirikan Klungkung"],
  },
  "klungkung|Dewa Agung Jambe II": {
    tentang: ["Raja Klungkung terakhir. Ia gugur bersama keluarga dan pengikutnya dalam Puputan Klungkung melawan Belanda pada 28 April 1908."],
    sorotan: ["Puputan Klungkung (1908)"],
  },
};
