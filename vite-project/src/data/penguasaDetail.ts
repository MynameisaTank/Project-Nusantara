/**
 * Biografi dan foto penguasa untuk panel detail di peta. Kunci: "<id kerajaan>|<nama penguasa>" (sama dengan data di
 * kerajaanDetail.ts). Penguasa yang belum tercantum di sini tetap tampil dengan tanggal dan kerajaannya saja.
 *
 * Catatan:
 * - Teks ditulis dari pengetahuan umum, belum diverifikasi satu per satu dengan sumber dan belum ditinjau sejarawan.
 *   Kisah dari babad, hikayat, Sejarah Melayu, atau Pararaton ditandai "menurut tradisi" atau "menurut babad".
 * - Foto hanya diisi jika berkasnya sudah dicek lisensinya di Wikimedia Commons. Foto yang berupa dugaan, lukisan
 *   modern, atau makam diberi keterangan jenisnya. Penguasa tanpa foto tampil dengan placeholder.
 */

/** Foto dari Wikimedia Commons, lengkap dengan keterangan lisensi. */
export interface FotoPenguasa {
  /** alamat langsung file gambar (upload.wikimedia.org) */
  src: string;
  /** halaman berkas di Commons, untuk sumber dan lisensi */
  halaman: string;
  /** apa yang tampak di gambar, termasuk jika itu hanya dugaan */
  keterangan: string;
  /** jenis gambar: membantu pembaca tahu ini potret, patung, lukisan, atau makam */
  jenis: "potret" | "patung" | "lukisan" | "makam";
  /** nama lisensi, misalnya CC BY-SA 4.0 */
  lisensi: string;
  /** nama pembuat atau pengunggah sesuai halaman berkas */
  penulis: string;
}

export interface DetailPenguasa {
  /** gelar atau nama lain yang umum dipakai */
  gelar?: string;
  /** dua sampai empat paragraf tentang tokoh dan masa pemerintahannya */
  tentang: string[];
  /** hal-hal penting yang dikaitkan dengan masa pemerintahannya */
  sorotan: string[];
  /** foto jika tersedia */
  foto?: FotoPenguasa;
}

const COMMONS = "https://commons.wikimedia.org/wiki/File:";

export const DETAIL_PENGUASA: Record<string, DetailPenguasa> = {
  // ——— Singhasari ———
  "singhasari|Ken Arok": {
    gelar: "Rajasa",
    tentang: [
      "Pendiri Singhasari yang naik takhta setelah mengalahkan Kertajaya dari Kadiri sekitar 1222. Kisahnya terutama diceritakan dalam Pararaton, yang memadukan sejarah dengan legenda, termasuk asal-usulnya dari kalangan rakyat biasa.",
      "Dalam Pararaton, Ken Arok digambarkan naik dari Tumapel dengan cara yang penuh intrik. Kisah keris Mpu Gandring yang dikaitkan dengan kematiannya juga termasuk legenda yang diwariskan dalam naskah itu.",
    ],
    sorotan: [
      "Pararaton mencatatnya sebagai pengambil alih Tumapel",
      "Menurut Pararaton, ia wafat dibunuh Anusapati, anak tirinya",
      "Kisah keris Mpu Gandring termasuk legenda dalam Pararaton",
    ],
  },
  "singhasari|Anusapati": {
    tentang: [
      "Putra Ken Arok dan Ken Dedes yang memerintah Singhasari sekitar 1227 hingga 1248. Pemerintahannya diwarnai ketegangan dengan keturunan Ken Arok yang lain, terutama Tohjaya.",
      "Dalam Pararaton, Anusapati digambarkan menyimpan dendam atas kematian ayahnya. Ia wafat dalam peristiwa yang juga dicatat sebagai pembunuhan, sehingga takhta berpindah ke tangan Tohjaya.",
    ],
    sorotan: [
      "Menurut Pararaton, wafat dibunuh Tohjaya sekitar 1248",
      "Kematiannya memicu perebutan takhta yang akhirnya dimenangkan Wisnuwardhana",
    ],
  },
  "singhasari|Wisnuwardhana": {
    gelar: "Ranggawuni",
    tentang: [
      "Naik takhta setelah menjatuhkan Tohjaya, lalu memerintah bersama Narasimhamurti. Pemerintahannya memulihkan stabilitas Singhasari setelah beberapa tahun pertumpahan darah.",
      "Ia dikenal sebagai raja yang membangun dan memelihara candi peringatan leluhur. Candi Jago di Jawa Timur diyakini sebagai candi pendharmaan (peringatan) baginya.",
    ],
    sorotan: [
      "Mengangkat Kertanagara sebagai raja muda (yuwaraja) pada 1254",
      "Candi Jago diyakini sebagai candi pendharmaan baginya",
    ],
  },
  "singhasari|Kertanagara": {
    tentang: [
      "Raja Singhasari terakhir yang terkenal ambisius. Ia memperluas pengaruh ke Sumatra dan Bali, dan menolak tuntutan pengakuan dari Kubilai Khan. Ia juga dikenal dengan kebijakan keagamaan Tantra dan Buddha yang kuat.",
      "Ekspedisi Pamalayu mengirim pasukan ke Sumatra, dan arca Amoghapasa dikirim sebagai tanda persahabatan kepada penguasa Dharmasraya. Pada 1289, utusan Kubilai Khan dipermalukan di istana Singhasari.",
      "Pada 1292 Singhasari diserang Jayakatwang dari Kadiri ketika Kertanagara sedang berpesta, dan ia tewas dalam serangan itu.",
    ],
    sorotan: [
      "Ekspedisi Pamalayu ke Sumatra (sekitar 1275–1292)",
      "Arca Joko Dolog di Surabaya dibuat pada 1289 dan diyakini menggambarkan dirinya",
      "Tewas dalam serangan Jayakatwang dari Kadiri pada 1292",
    ],
    foto: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Arca_Joko_Dolog.jpg/960px-Arca_Joko_Dolog.jpg",
      halaman: `${COMMONS}Arca_Joko_Dolog.jpg`,
      keterangan: "Arca Joko Dolog di Taman Apsari, Surabaya, yang diyakini menggambarkan Kertanagara sebagai Buddha Aksobhya.",
      jenis: "patung",
      lisensi: "CC BY-SA 4.0",
      penulis: "Afrinaldi Zulhen",
    },
  },

  // ——— Majapahit ———
  "majapahit|Kertarajasa Jayawardhana": {
    gelar: "Raden Wijaya",
    tentang: [
      "Pendiri Majapahit. Setelah Singhasari runtuh, ia sempat bekerja sama dengan pasukan Mongol untuk menjatuhkan Kadiri, lalu berbalik melawan mereka dan mendirikan kerajaan baru di Tarik, dekat Trowulan.",
      "Ia dinobatkan sebagai Kertarajasa Jayawardhana pada sekitar 1293. Dari dirinya lahir garis raja-raja Majapahit yang berlanjut hingga beberapa generasi.",
    ],
    sorotan: [
      "Dinobatkan sebagai Kertarajasa pada sekitar 1293",
      "Pasukan Mongol dipulangkan setelah berhasil diusir dari Jawa",
      "Harihara dari Candi Simping diyakini sebagai arca perwujudan anumertanya",
    ],
    foto: {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Harihara%2C_statue.jpg",
      halaman: `${COMMONS}Harihara,_statue.jpg`,
      keterangan: "Arca Harihara dari Candi Simping (Blitar), yang ditafsirkan sebagai perwujudan anumerta Kertarajasa. Ini dugaan berdasarkan penafsiran, bukan potret sezaman.",
      jenis: "patung",
      lisensi: "CC BY-SA 3.0 / GFDL",
      penulis: "Gunkarta (diunggah oleh Sentausa)",
    },
  },
  "majapahit|Jayanegara": {
    tentang: [
      "Raja Majapahit kedua yang menghadapi serangkaian pemberontakan, di antaranya Nambi dan Ra Kuti. Pemerintahannya diwarnai intrik di lingkungan istana.",
      "Pemberontakan Ra Kuti sekitar 1319 sempat membuatnya harus mengungsi. Gajah Mada tercatat berperan dalam pemulihan keadaan itu.",
    ],
    sorotan: [
      "Pemberontakan Ra Kuti (sekitar 1319)",
      "Wafat pada 1328, menurut Pararaton setelah dibunuh Tanca",
    ],
  },
  "majapahit|Tribhuwana Tunggadewi": {
    tentang: [
      "Ratu Majapahit yang memerintah 1328–1350. Ia menumpas pemberontakan Sadeng dengan dukungan Gajah Mada, dan dikenal membangun pemerintahan yang stabil.",
      "Pada masanya Gajah Mada diangkat sebagai patih dan mengucapkan Sumpah Palapa, menurut Pararaton sekitar 1334. Ia turun takhta pada 1350 dan digantikan putranya, Hayam Wuruk.",
    ],
    sorotan: [
      "Pemberontakan Sadeng dan Keta (sekitar 1331–1332)",
      "Sumpah Palapa Gajah Mada dicatat dalam Pararaton",
      "Turun takhta pada 1350 untuk digantikan Hayam Wuruk",
    ],
  },
  "majapahit|Hayam Wuruk": {
    gelar: "Rajasanagara",
    tentang: [
      "Raja Majapahit yang paling dikenal, memerintah 1350–1389. Pada masanya wilayah Majapahit luas, sebagaimana tercatat dalam Nagarakretagama yang disusun Prapanca pada 1365.",
      "Peristiwa Bubat pada 1357 merusak hubungan Majapahit dengan Sunda, ketika rombongan Raja Sunda yang datang untuk menikah dengan Hayam Wuruk diserang. Gajah Mada menjadi tokoh utama dalam kisah dan kebijakan kerajaan pada masa ini.",
    ],
    sorotan: [
      "Nagarakretagama (1365) memuji pemerintahannya",
      "Peristiwa Bubat (1357) memengaruhi hubungannya dengan Sunda",
      "Masa keemasan Majapahit menurut sumber-sumber Jawa",
    ],
  },
  "majapahit|Wikramawardhana": {
    tentang: [
      "Raja Majapahit setelah Hayam Wuruk, memerintah 1389–1429. Masanya ditandai perang saudara yang melemahkan kerajaan.",
      "Perang Paregreg melawan Bhre Wirabhumi pada 1404–1406 membuat pusat kerajaan rusak parah dan kekuasaannya terhadap wilayah pinggiran melemah.",
    ],
    sorotan: [
      "Perang Paregreg melawan Bhre Wirabhumi (1404–1406)",
      "Kekuasaan pusat melemah setelah perang",
    ],
  },
  "majapahit|Suhita": {
    tentang: [
      "Ratu Majapahit yang memerintah 1429–1447, putri Wikramawardhana. Sumber tentang masanya terbatas, sehingga penilaiannya sering berbeda-beda.",
      "Sebagian sejarawan membaca masanya sebagai periode pemulihan setelah perang saudara, tetapi bukti tertulisnya sangat sedikit.",
    ],
    sorotan: [
      "Sering dibaca sebagai masa pemulihan atau masa tertib sementara",
      "Bukti tertulis untuk masanya sangat sedikit",
    ],
  },
  "majapahit|Kertawijaya": {
    tentang: [
      "Raja Majapahit menurut daftar penguasa tradisional, memerintah sekitar 1447–1451. Rincian pemerintahannya belum banyak diketahui.",
    ],
    sorotan: ["Tanggal pemerintahannya berasal dari daftar tradisional"],
  },

  // ——— Melaka ———
  "melaka|Parameswara": {
    gelar: "Iskandar Syah",
    tentang: [
      "Pendiri Melaka menurut tradisi Melayu. Setelah meninggalkan Temasek (Singapura), ia membangun pelabuhan Melaka sekitar 1400 di tempat yang lebih aman dan strategis di Selat Malaka.",
      "Pada masanya Melaka mulai dikenal sebagai pusat perdagangan. Kisah pendiriannya, termasuk cerita kancil dan anjing yang diceritakan dalam Sejarah Melayu, bersifat legendaris.",
    ],
    sorotan: [
      "Kisah pendiriannya bersumber dari Sejarah Melayu",
      "Melaka kemudian diakui Dinasti Ming sebagai mitra dagang",
    ],
    foto: {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/09/Retrato_de_Parameswara.jpg",
      halaman: `${COMMONS}Retrato_de_Parameswara.jpg`,
      keterangan: "Lukisan Parameswara dari Wikipedia Inggris. Ini bukan potret sezaman dan tidak diketahui siapa pelukisnya.",
      jenis: "lukisan",
      lisensi: "Domain publik (PD-user)",
      penulis: "L joo (diunggah oleh Karshan)",
    },
  },
  "melaka|Megat Iskandar Shah": {
    tentang: [
      "Penerus Parameswara menurut daftar tradisional. Rincian pemerintahannya terbatas, tetapi Melaka terus berkembang sebagai pelabuhan.",
      "Sebagian besar kisah masanya tercatat dalam Sejarah Melayu yang bercampur dengan legenda.",
    ],
    sorotan: ["Tercantum dalam daftar penguasa Melaka menurut tradisi Melayu"],
  },
  "melaka|Muhammad Shah": {
    tentang: [
      "Sultan Melaka menurut daftar tradisional, memerintah sekitar 1424–1444. Tradisi Melayu menyebutnya sebagai sultan Muslim pertama Melaka.",
      "Masa awal hubungan Melaka dengan dunia Islam dan perdagangan dengan pedagang Arab, Persia, dan India berkembang pada periode ini menurut tradisi.",
    ],
    sorotan: [
      "Tradisi menyebut ia sebagai sultan Muslim pertama Melaka",
      "Masa awal hubungan Melaka dengan dunia Islam",
    ],
  },
  "melaka|Muzaffar Shah": {
    tentang: [
      "Sultan Melaka yang memerintah sekitar 1446–1459 menurut daftar tradisional. Tradisi mengaitkannya dengan penataan hukum dan pemerintahan kota.",
      "Dalam Sejarah Melayu, masanya dicatat sebagai periode ketika Melaka mulai memperluas kendali atas pesisir Semenanjung.",
    ],
    sorotan: [
      "Tercatat dalam tradisi sebagai penata hukum dan pemerintahan Melaka",
      "Dikaitkan dengan perluasan pengaruh di pesisir Semenanjung menurut Sejarah Melayu",
    ],
  },
  "melaka|Mansur Shah": {
    tentang: [
      "Sultan Melaka yang memerintah sekitar 1459–1477, masa ketika kesultanan mencapai puncak pengaruhnya di Selat Malaka. Ia menjalin hubungan dengan Tiongkok dan kerajaan-kerajaan lain.",
      "Menurut tradisi, ia menikah dengan putri dari Tiongkok bernama Hang Li Po. Masanya juga dikaitkan dengan tokoh Hang Tuah dalam Sejarah Melayu.",
    ],
    sorotan: [
      "Masa keemasan Melaka di Selat Malaka",
      "Dikaitkan dengan tokoh Hang Tuah dalam Sejarah Melayu",
      "Menurut tradisi menikah dengan Hang Li Po",
    ],
  },
  "melaka|Alauddin Riayat Shah": {
    tentang: [
      "Sultan Melaka yang memerintah sekitar 1477–1488, penerus Mansur Shah. Rincian masa pemerintahannya belum banyak tercatat.",
      "Pada masanya kota tetap menjadi pusat perdagangan yang ramai, sebelum kesultanan menghadapi ancaman dari Portugis di kemudian hari.",
    ],
    sorotan: ["Masa pemerintahannya singkat dan terdokumentasi terbatas"],
  },
  "melaka|Mahmud Shah": {
    tentang: [
      "Sultan Melaka terakhir sebelum Portugis merebut kota pada 1511. Ia melarikan diri dan terus melawan dari wilayah lain di Semenanjung dan Sumatra.",
      "Kesultanan kemudian berpindah ke Johor dan Bintan. Keturunannya memerintah kesultanan penerus, yaitu Johor dan Riau-Lingga.",
    ],
    sorotan: [
      "Melaka jatuh ke tangan Portugis pada 1511 di bawah Alfonso de Albuquerque",
      "Kesultanan berpindah ke Johor dan wilayah lain",
    ],
  },

  // ——— Demak ———
  "demak|Raden Patah": {
    tentang: [
      "Pendiri dan sultan pertama Demak menurut tradisi Jawa. Babad menyebutnya sebagai putra raja Majapahit, tetapi kisah asal-usulnya bersifat legendaris dan para sejarawan berbeda pendapat tentangnya.",
      "Di bawahnya, Demak tumbuh sebagai pusat Islam di pesisir Jawa, dan Masjid Agung Demak dikaitkan dengan masanya dalam tradisi lokal.",
    ],
    sorotan: [
      "Demak tumbuh sebagai pusat Islam di pesisir Jawa",
      "Kisah asal-usulnya bersumber dari babad",
      "Dimakamkan di kompleks Masjid Agung Demak menurut tradisi lokal",
    ],
  },
  "demak|Pati Unus": {
    gelar: "Pangeran Sabrang Lor",
    tentang: [
      "Sultan Demak yang memimpin serangan ke Melaka yang dikuasai Portugis pada sekitar 1513 dan 1521. Ia dikenal sebagai panglima yang berani, tetapi serangan itu tidak berhasil merebut kota.",
      "Pemerintahannya relatif singkat dan berakhir pada 1521, tahun serangan keduanya ke Melaka.",
    ],
    sorotan: [
      "Menyerang Melaka yang dikuasai Portugis",
      "Memerintah sekitar 1518–1521",
    ],
  },
  "demak|Sultan Trenggana": {
    tentang: [
      "Sultan Demak yang paling berpengaruh, memerintah sekitar 1521–1546. Ia memperluas kekuasaan ke Jawa Timur dan mendorong penyebaran Islam di Jawa.",
      "Pada masa ini Demak menjadi kekuatan besar di Jawa. Trenggana wafat pada 1546 saat berada dalam kampanye di Jawa Timur, sehingga memicu perebutan takhta di Demak.",
    ],
    sorotan: [
      "Perluasan kekuasaan hingga Jawa Timur",
      "Wafat pada 1546, memicu perebutan takhta Demak",
    ],
  },

  // ——— Aceh ———
  "aceh|Ali Mughayat Syah": {
    tentang: [
      "Pendiri Kesultanan Aceh menurut tradisi, memerintah sekitar 1496–1530. Ia membangun dasar pemerintahan kesultanan di pesisir utara Sumatra.",
      "Ia dikenal sebagai pemimpin yang menyatukan kawasan pesisir sekitar Aceh di bawah kekuasaan kesultanan. Tanggal pendiriannya masih diperdebatkan.",
    ],
    sorotan: [
      "Tanggal pendirian Aceh masih diperdebatkan",
      "Dasar pemerintahan kesultanan di pesisir utara Sumatra",
    ],
  },
  "aceh|Salahuddin": {
    tentang: [
      "Sultan Aceh yang memerintah sekitar 1530–1537, sebelum digantikan Alauddin Riayat Syah al-Kahhar.",
      "Rincian masa pemerintahannya belum banyak tercatat, sehingga tokoh ini sering hanya disebut dalam daftar penguasa.",
    ],
    sorotan: ["Masa pemerintahannya singkat dan rincian belum banyak tercatat"],
  },
  "aceh|Alauddin Riayat Syah al-Kahhar": {
    tentang: [
      "Sultan Aceh yang memerintah 1537–1568. Ia memperkuat armada untuk menghadapi Portugis di Selat Malaka dan memperluas pengaruh di pesisir Sumatra.",
      "Pada masanya Aceh terus berhadapan dengan Portugis di Selat Malaka. Gelar al-Kahhar yang dipakainya berarti Yang Maha Perkasa.",
    ],
    sorotan: [
      "Memperkuat armada melawan Portugis",
      "Memperluas pengaruh di pesisir Sumatra",
    ],
  },
  "aceh|Iskandar Muda": {
    tentang: [
      "Sultan Aceh terbesar, memerintah 1607–1636. Ia memperluas wilayah ke Semenanjung Malaya, menyerang Johor pada 1613 dan menaklukkan Pahang pada 1617.",
      "Pada 1629 ia menyerang Melaka yang dikuasai Portugis, tetapi serangan itu gagal. Setelah masanya Aceh mulai melemah, sehingga ia dikenang sebagai masa keemasan kesultanan.",
    ],
    sorotan: [
      "Serangan ke Melaka pada 1629 yang gagal",
      "Penaklukan Pahang (1617)",
      "Dikenang sebagai masa keemasan Aceh",
    ],
  },

  // ——— Banten ———
  "banten|Hasanuddin": {
    tentang: [
      "Pendiri Kesultanan Banten yang memisahkan diri dari Demak dan membangun pusat pemerintahan di Banten. Menurut tradisi, ia adalah putra Sunan Gunung Jati dari Cirebon.",
      "Banten kemudian berkembang sebagai pelabuhan lada yang penting dan menjadi pusat perdagangan internasional di Asia Tenggara.",
    ],
    sorotan: [
      "Banten menjadi pelabuhan lada yang penting",
      "Menurut tradisi, putra Sunan Gunung Jati",
    ],
  },
  "banten|Maulana Yusuf": {
    tentang: [
      "Sultan Banten yang memperluas pengaruh ke wilayah Sunda, termasuk Pakuan Pajajaran.",
      "Ia dikenal membangun kekuatan Islam di Banten, dan setelah masanya kesultanan terus berkembang sebagai pusat perdagangan.",
    ],
    sorotan: ["Penaklukan Pakuan Pajajaran sekitar 1579"],
  },

  // ——— Mataram ———
  "mataram|Panembahan Senopati": {
    tentang: [
      "Pendiri Mataram sebagai kekuatan politik di Jawa Tengah, memerintah 1587–1601. Ia berpusat di Kotagede dan membangun dasar kekuasaan yang diwarisi keturunannya.",
      "Menurut tradisi, ia menjalin hubungan dengan Ratu Kidul dari Laut Selatan. Kisah ini termasuk legenda yang berkembang dalam tradisi Mataram.",
    ],
    sorotan: [
      "Mataram berpusat di Kotagede",
      "Membangun kekuasaan setelah masa Pajang",
    ],
    foto: {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Panembahan_Senopati_Mataram.jpg",
      halaman: `${COMMONS}Panembahan_Senopati_Mataram.jpg`,
      keterangan: "Potret dada ke atas Panembahan Senopati. Teknik gambar tidak tercantum di halaman berkas, dan ini bukan potret sezaman.",
      jenis: "potret",
      lisensi: "CC BY-SA 4.0",
      penulis: "Idangmedia",
    },
  },
  "mataram|Mas Jolang": {
    gelar: "Panembahan Seda Krapyak",
    tentang: [
      "Putra Senopati yang memerintah Mataram 1601–1613. Ia wafat dalam perburuan, dan takhta diteruskan kepada Sultan Agung.",
      "Gelar Seda Krapyak berasal dari tempat dan peristiwa wafatnya di Krapyak, tempat perburuan kerajaan.",
    ],
    sorotan: ["Dikenal dengan gelar Seda Krapyak setelah wafat dalam perburuan"],
  },
  "mataram|Sultan Agung": {
    gelar: "Raden Mas Rangsang",
    tentang: [
      "Raja Mataram terbesar, memerintah 1613–1645. Ia menaklukkan Jawa Timur dan pesisir, menyerang Batavia pada 1628–1629, dan menetapkan kalender Jawa Islam pada 1633.",
      "Sultan Agung ditetapkan sebagai pahlawan nasional Indonesia melalui Keputusan Presiden Nomor 106/TK/1975. Makamnya berada di kompleks Imogiri di Bantul.",
    ],
    sorotan: [
      "Penaklukan Surabaya (1625)",
      "Penetapan kalender Jawa Islam (1633)",
      "Ditetapkan sebagai pahlawan nasional (1975)",
    ],
    foto: {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/71/Anyakrakusuma.jpg",
      halaman: `${COMMONS}Anyakrakusuma.jpg`,
      keterangan: "Gambar bergaya potret Sultan Agung. Halaman berkas tidak menyebutkan teknik gambarnya.",
      jenis: "potret",
      lisensi: "Domain publik di Indonesia (UU 28/2014 Pasal 43); juga CC BY-SA 3.0",
      penulis: "Direktorat K2KRS (diunggah oleh Inayubhagya)",
    },
  },

  // ——— Ternate ———
  "ternate|Khairun": {
    tentang: [
      "Sultan Ternate yang berusaha mengimbangi Portugis. Ia dibunuh di dalam benteng Portugis pada 1570, peristiwa yang memicu perlawanan besar.",
      "Ternate pada masanya menjadi pusat perdagangan cengkih yang sangat penting, dan Portugis berusaha menguasai perdagangan itu.",
    ],
    sorotan: [
      "Dibunuh Portugis di dalam benteng (1570)",
      "Pembunuhannya memicu perlawanan Baabullah",
    ],
  },
  "ternate|Baabullah": {
    tentang: [
      "Sultan Ternate yang memimpin perlawanan hingga Portugis diusir dari Ternate pada 1575. Wilayah pengaruhnya luas di Maluku dan sekitarnya.",
      "Ia dikenal sebagai salah satu sultan terbesar Ternate, dan masanya dicatat sebagai puncak kekuasaan kesultanan di kawasan timur Nusantara.",
    ],
    sorotan: [
      "Mengusir Portugis dari Ternate (1575)",
      "Dikenal sebagai salah satu sultan terbesar Ternate",
    ],
  },

  // ——— Pajajaran ———
  "pajajaran|Sri Baduga Maharaja": {
    gelar: "Jayadewata",
    tentang: [
      "Raja Sunda yang memerintah dari Pakuan Pajajaran sekitar 1482–1521. Namanya tercatat dalam Prasasti Batutulis, yang dibuat putranya pada 1533.",
      "Dalam tradisi Sunda ia dikenang dengan sebutan Prabu Siliwangi. Patungnya kini berdiri di Situ Buleud, Purwakarta.",
    ],
    sorotan: [
      "Prasasti Batutulis dibuat oleh Surawisesa pada 1533",
      "Dikenang dalam tradisi Sunda sebagai Prabu Siliwangi",
    ],
    foto: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Patung_Sri_Baduga_Maha_Raja_di_Situ_Buleud.jpg/960px-Patung_Sri_Baduga_Maha_Raja_di_Situ_Buleud.jpg",
      halaman: `${COMMONS}Patung_Sri_Baduga_Maha_Raja_di_Situ_Buleud.jpg`,
      keterangan: "Patung Sri Baduga Maha Raja di Situ Buleud, Purwakarta. Ini patung modern, bukan potret sezaman.",
      jenis: "patung",
      lisensi: "CC BY-SA 4.0",
      penulis: "Lany pirna",
    },
  },
  "pajajaran|Surawisesa": {
    tentang: [
      "Putra Sri Baduga yang memerintah sekitar 1521–1535. Pada masanya Sunda menjalin perjanjian dagang dengan Portugis.",
      "Ia juga membuat Prasasti Batutulis pada 1533 untuk mengenang ayahnya.",
    ],
    sorotan: [
      "Perjanjian dengan Portugis (1522)",
      "Membuat Prasasti Batutulis (1533) untuk mengenang ayahnya",
    ],
  },

  // ——— Brunei ———
  "brunei|Sultan Bolkiah": {
    tentang: [
      "Sultan Brunei yang memerintah 1485–1524 dan memperluas kekuasaan Brunei hingga ke wilayah Sulu dan Filipina bagian selatan.",
      "Masanya sering disebut sebagai masa keemasan Brunei, ketika kesultanan menguasai banyak pulau dan pesisir di Kalimantan dan sekitarnya.",
    ],
    sorotan: ["Perluasan kekuasaan hingga Sulu dan Filipina selatan"],
  },

  // ——— Cirebon ———
  "cirebon|Sunan Gunung Jati": {
    tentang: [
      "Tokoh penyebar Islam di Jawa Barat yang mendirikan Cirebon sebagai kesultanan pesisir. Ia dihormati sebagai salah satu Wali Songo.",
      "Makamnya di Gunung Jati menjadi tempat ziarah yang penting hingga kini.",
    ],
    sorotan: [
      "Dikaitkan dengan Wali Songo",
      "Cirebon berkembang sebagai pelabuhan dan pusat Islam",
    ],
    foto: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Entrance_to_Makam_Sunan_Gunung_Jati.jpg/960px-Entrance_to_Makam_Sunan_Gunung_Jati.jpg",
      halaman: `${COMMONS}Entrance_to_Makam_Sunan_Gunung_Jati.jpg`,
      keterangan: "Gerbang makam Sunan Gunung Jati di Cirebon. Ini foto makam, bukan potret tokohnya.",
      jenis: "makam",
      lisensi: "CC BY-SA 3.0 / GFDL",
      penulis: "Midori",
    },
  },

  // ——— Banjar ———
  "banjar|Suriansyah": {
    gelar: "Pangeran Samudra",
    tentang: [
      "Raja Banjar yang menurut tradisi memeluk Islam, memerintah sekitar 1526–1546. Kisahnya dikenal dari Hikayat Banjar.",
      "Menurut hikayat, Pangeran Samudra mengambil nama Suriansyah setelah masuk Islam, dan pusat kerajaan berada di Banjarmasin.",
    ],
    sorotan: [
      "Kisah Islamisasi Banjar dalam Hikayat Banjar",
      "Pusat kerajaan di Banjarmasin",
    ],
  },
  "banjar|Rahmatullah": {
    tentang: [
      "Raja Banjar sekitar 1546–1570 menurut daftar penguasa tradisional. Rincian pemerintahannya terbatas.",
    ],
    sorotan: ["Tercantum dalam daftar penguasa Banjar menurut tradisi"],
  },
  "banjar|Hidayatullah I": {
    tentang: [
      "Raja Banjar sekitar 1570–1595 yang mempertahankan kesultanan di tengah persaingan dengan kerajaan lain di Kalimantan.",
      "Masa pemerintahannya dikaitkan dengan penguatan Islam di Banjar dan perkembangan hukum kerajaan.",
    ],
    sorotan: ["Masa pemerintahannya dikaitkan dengan penguatan Islam di Banjar"],
  },
  "banjar|Mustain Billah": {
    tentang: [
      "Sultan Banjar sekitar 1595–1642 menurut daftar tradisional. Pada abad ke-17 Banjar berhubungan dengan VOC dan kerajaan-kerajaan lain.",
    ],
    sorotan: ["Hubungan dengan VOC pada abad ke-17"],
  },
  "banjar|Inayatullah": {
    tentang: [
      "Sultan Banjar sekitar 1642–1645 menurut daftar tradisional. Data pemerintahannya masih sedikit.",
    ],
    sorotan: ["Tercantum dalam daftar penguasa Banjar menurut tradisi"],
  },

  // ——— Samudra Pasai ———
  "pasai|Malik al-Saleh (Meurah Silu)": {
    tentang: [
      "Pendiri Kesultanan Samudra Pasai menurut tradisi, memerintah sekitar 1267–1297. Nisannya di Pasai yang bertarikh 1297 menjadi salah satu bukti awal Islam di Sumatra.",
      "Tradisi menyebut ia semula bernama Meurah Silu sebelum memeluk Islam dan mengambil nama Malik al-Saleh.",
    ],
    sorotan: [
      "Nisan bertarikh 1297 di Pasai",
      "Pasai menjadi pusat Islam dan perdagangan di Selat Malaka",
    ],
  },
  "pasai|Muhammad Malik az-Zahir": {
    tentang: [
      "Putra Malik al-Saleh yang memerintah sekitar 1297–1326. Ia dikenal dalam tradisi sebagai penguasa yang memajukan Pasai.",
    ],
    sorotan: ["Pasai berkembang sebagai pusat perdagangan"],
  },

  // ——— Sriwijaya ———
  "sriwijaya|Dapunta Hyang Sri Jayanasa": {
    tentang: [
      "Tokoh yang tercatat dalam Prasasti Kedukan Bukit (682 M) sebagai pemimpin ekspedisi dari Minanga. Ia diperkirakan memulai pemerintahan Sriwijaya pada masa itu.",
      "Prasasti-prasasti awal Sriwijaya menyebut perjalanan dan kemenangannya, dan ini menjadi salah satu sumber tertulis tertua tentang kerajaan itu.",
    ],
    sorotan: [
      "Prasasti Kedukan Bukit bertarikh 682 M",
      "Sriwijaya berkembang sebagai kekuatan maritim",
    ],
  },
  "sriwijaya|Balaputra": {
    tentang: [
      "Raja Sriwijaya sekitar 835–856 yang dikenal dari prasasti. Ia tercatat dalam prasasti Nalanda sebagai penguasa Suvarnadwipa.",
      "Hubungan Sriwijaya dengan dunia Buddhis di India dan Nalanda tercatat melalui kisah masanya.",
    ],
    sorotan: [
      "Tercatat dalam prasasti Nalanda",
      "Hubungan Sriwijaya dengan dunia Buddhis di India",
    ],
  },

  // ——— Kutai ———
  "kutai|Aji Batara Agung Dewa Sakti": {
    tentang: [
      "Raja Kutai Kartanegara menurut daftar tradisional, memerintah sekitar 1300–1325. Ia dikenal sebagai penguasa awal Kutai di muara Mahakam.",
      "Kisahnya tercatat dalam Salasilah Kutai, naskah tradisional yang sebagian isinya bercampur legenda.",
    ],
    sorotan: ["Tercantum dalam Salasilah Kutai menurut tradisi"],
  },
  "kutai|Aji Muhammad Idris": {
    tentang: [
      "Raja Kutai menurut daftar tradisional, memerintah 1732–1739. Pemerintahannya dicatat sebagai masa Islam yang semakin kuat.",
    ],
    sorotan: ["Tercantum dalam daftar penguasa Kutai menurut tradisi"],
  },
  "kutai|Aji Muhammad Muslihuddin": {
    tentang: [
      "Raja Kutai menurut daftar tradisional, memerintah 1739–1782. Masanya termasuk periode ketika Kutai menjalin hubungan dengan kekuatan dagang dari luar.",
    ],
    sorotan: ["Tercantum dalam daftar penguasa Kutai menurut tradisi"],
  },
  "kutai|Aji Muhammad Sulaiman": {
    tentang: [
      "Raja Kutai menurut daftar tradisional, memerintah 1845–1899, pada masa pengaruh kolonial Belanda semakin kuat di Kalimantan Timur.",
    ],
    sorotan: ["Masa pengaruh kolonial Belanda di Kalimantan Timur"],
  },

  // ——— Bima ———
  "bima|Abdul Kahir": {
    tentang: [
      "Sultan Bima menurut daftar tradisional, memerintah sekitar 1620–1640. Menurut tradisi, pada masanya Bima memeluk Islam sebagai kesultanan.",
    ],
    sorotan: [
      "Menurut tradisi, masa Islamisasi Bima",
      "Bima berhubungan dagang dengan Makassar dan VOC",
    ],
  },
  "bima|Abu'l-Khair Sirajuddin": {
    tentang: [
      "Sultan Bima menurut daftar tradisional, memerintah sekitar 1640–1682. Bima menjalin hubungan dengan VOC pada masa ini.",
    ],
    sorotan: ["Hubungan dengan VOC pada abad ke-17"],
  },

  // ——— Tidore ———
  "tidore|Saidi": {
    tentang: [
      "Sultan Tidore menurut daftar tradisional, memerintah sekitar 1640–1657.",
    ],
    sorotan: ["Tercantum dalam daftar penguasa Tidore menurut tradisi"],
  },
  "tidore|Saifuddin": {
    tentang: [
      "Sultan Tidore yang memerintah sekitar 1657–1687 dan menghadapi tekanan VOC di Maluku bagian utara.",
    ],
    sorotan: ["Menghadapi tekanan VOC di Maluku bagian utara"],
  },
};

/** Detail untuk satu penguasa, atau undefined jika belum ditulis. */
export function detailPenguasa(kerajaanId: string, nama: string): DetailPenguasa | undefined {
  return DETAIL_PENGUASA[`${kerajaanId}|${nama}`];
}

/** Inisial nama untuk placeholder foto, misalnya "Sultan Agung" menjadi "SA". */
export function inisialNama(nama: string): string {
  return nama
    .split(/[\s()-]+/)
    .filter((kata) => kata.length > 0 && /^[A-Za-z]/.test(kata))
    .slice(0, 2)
    .map((kata) => kata.charAt(0).toUpperCase())
    .join("");
}
