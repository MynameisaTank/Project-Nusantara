import type { DetailPenguasa } from "./penguasaDetail";

/* Kepala negara dan pemerintahan modern, Brunei, Sarawak, dan pemerintahan peralihan. Belum ditinjau sejarawan. */
export const PENGUASA_MODERN: Record<string, DetailPenguasa> = {
  // ——— Indonesia ———
  "indonesia|Sukarno": {
    gelar: "Bung Karno, Proklamator",
    tentang: [
      "Presiden pertama Indonesia yang bersama Mohammad Hatta membacakan Proklamasi Kemerdekaan pada 17 Agustus 1945. Sebelumnya ia dikenal sebagai pendiri PNI dan orator pergerakan yang beberapa kali dipenjara dan dibuang oleh Belanda.",
      "Pada masa Demokrasi Terpimpin (1959–1965) kekuasaannya sangat besar dan ia gencar menyuarakan politik antikolonial di dunia internasional. Setelah peristiwa 1965 kedudukannya melemah, dan pada 1967 MPRS mencabut mandatnya.",
    ],
    sorotan: [
      "Merumuskan Pancasila dalam pidato 1 Juni 1945",
      "Menjadi tuan rumah Konferensi Asia Afrika 1955 di Bandung",
      "Memimpin Demokrasi Terpimpin dan politik konfrontasi",
    ],
  },
  "indonesia|Soeharto": {
    gelar: "Presiden kedua",
    tentang: [
      "Perwira Angkatan Darat yang naik ke puncak kekuasaan setelah peristiwa 1965 dan menerima Supersemar pada 1966. Ia menjadi presiden pada 1967 dan memimpin pemerintahan Orde Baru selama sekitar tiga puluh tahun.",
      "Masa pemerintahannya ditandai pembangunan ekonomi, swasembada beras pada 1984, dan stabilitas politik yang dijaga dengan ketat. Kekerasan 1965–1966, pembatasan kebebasan politik, dan korupsi menjadi sisi gelap yang terus diperdebatkan. Ia mundur pada Mei 1998 di tengah krisis ekonomi dan gelombang protes.",
    ],
    sorotan: [
      "Menjalankan Repelita (rencana pembangunan lima tahunan)",
      "Mundur pada 21 Mei 1998 setelah krisis moneter",
    ],
  },
  "indonesia|B.J. Habibie": {
    gelar: "Presiden ketiga",
    tentang: [
      "Insinyur pesawat terbang lulusan Jerman yang lama memimpin industri strategis di bawah Orde Baru, lalu menjadi wakil presiden pada 1998. Ia naik menjadi presiden ketika Soeharto mundur.",
      "Masa jabatannya singkat tetapi penting bagi Reformasi: kebebasan pers dibuka, tahanan politik dibebaskan, dan pemilu bebas 1999 digelar. Referendum Timor Timur pada 1999 juga terjadi pada masa ini.",
    ],
    sorotan: [
      "Membuka kebebasan pers dan partai politik",
      "Menyetujui referendum Timor Timur 1999",
    ],
  },
  "indonesia|Abdurrahman Wahid": {
    gelar: "Gus Dur",
    tentang: [
      "Ulama dan cendekiawan yang lama memimpin Nahdlatul Ulama sebelum terpilih menjadi presiden oleh MPR pada 1999. Ia dikenal sebagai pembela pluralisme dan hak kelompok minoritas.",
      "Ia mencabut larangan perayaan budaya Tionghoa dan berusaha mengurangi peran militer dalam politik. Konflik dengan parlemen membuat MPR memberhentikannya pada 2001.",
    ],
    sorotan: [
      "Mencabut pembatasan perayaan Imlek",
      "Diberhentikan MPR pada Juli 2001",
    ],
  },
  "indonesia|Megawati Soekarnoputri": {
    gelar: "Presiden kelima",
    tentang: [
      "Putri Sukarno yang memimpin PDI Perjuangan dan menjadi simbol perlawanan terhadap Orde Baru setelah peristiwa 27 Juli 1996. Ia menjadi wakil presiden pada 1999, lalu presiden setelah Abdurrahman Wahid diberhentikan.",
      "Ia menjadi presiden perempuan pertama Indonesia. Pada masanya dibentuk Komisi Pemberantasan Korupsi dan digelar pemilihan presiden langsung pertama pada 2004.",
    ],
    sorotan: [
      "Presiden perempuan pertama Indonesia",
      "KPK dibentuk pada 2002, di masa pemerintahannya",
    ],
  },
  "indonesia|Susilo Bambang Yudhoyono": {
    gelar: "SBY",
    tentang: [
      "Pensiunan jenderal yang menjadi presiden pertama hasil pemilihan langsung pada 2004 dan terpilih kembali pada 2009.",
      "Masa pemerintahannya mencakup penanganan tsunami Aceh 2004 dan perjanjian damai Helsinki dengan GAM pada 2005, serta pertumbuhan ekonomi yang relatif stabil.",
    ],
    sorotan: [
      "Presiden pertama hasil pemilihan langsung",
      "Perdamaian Aceh melalui perjanjian Helsinki 2005",
    ],
  },
  "indonesia|Joko Widodo": {
    gelar: "Jokowi",
    tentang: [
      "Mantan Wali Kota Surakarta dan Gubernur DKI Jakarta yang terpilih menjadi presiden pada 2014 dan 2019. Ia presiden pertama yang tidak berasal dari elite politik atau militer lama.",
      "Pemerintahannya menonjolkan pembangunan infrastruktur seperti jalan tol, bendungan, dan bandara, serta rencana pemindahan ibu kota ke Kalimantan Timur.",
    ],
    sorotan: [
      "Pembangunan infrastruktur berskala besar",
      "Memulai pembangunan Ibu Kota Nusantara",
    ],
  },
  "indonesia|Prabowo Subianto": {
    gelar: "Presiden kedelapan",
    tentang: [
      "Mantan perwira Komando Pasukan Khusus yang kemudian mendirikan Partai Gerindra. Ia tiga kali gagal dalam pemilihan presiden sebelum menjabat Menteri Pertahanan pada 2019.",
      "Ia terpilih menjadi presiden pada pemilu 2024 dan dilantik pada Oktober 2024.",
    ],
    sorotan: [
      "Menteri Pertahanan 2019–2024",
      "Dilantik sebagai presiden pada 20 Oktober 2024",
    ],
  },

  // ——— Peralihan ———
  "nica|Hubertus van Mook": {
    gelar: "Letnan Gubernur Jenderal",
    tentang: [
      "Pejabat Belanda yang memimpin pemerintahan Hindia Belanda di masa revolusi. Ia berusaha memulihkan kekuasaan Belanda lewat gagasan negara federal dan membentuk negara-negara bagian di luar wilayah Republik.",
      "Perundingan Linggarjati dan Renville serta Agresi Militer pertama terjadi pada masa jabatannya.",
    ],
    sorotan: [
      "Penggagas sistem federal untuk Indonesia",
      "Memimpin pemerintahan Belanda di masa Agresi Militer I",
    ],
  },
  "nica|Antonius Hermanus Johannes Lovink": {
    gelar: "Wakil Tinggi Mahkota",
    tentang: [
      "Diplomat Belanda yang menjadi wakil tertinggi Belanda di Indonesia pada tahap akhir revolusi, menggantikan jabatan gubernur jenderal.",
      "Ia menjabat ketika Konferensi Meja Bundar menghasilkan pengakuan kedaulatan pada Desember 1949.",
    ],
    sorotan: ["Pejabat tertinggi Belanda terakhir di Indonesia"],
  },
  "untea|Djalal Abdoh": {
    gelar: "Administrator UNTEA",
    tentang: [
      "Diplomat Iran yang memimpin Otoritas Eksekutif Sementara PBB (UNTEA) di Papua bagian barat pada 1962–1963, setelah Perjanjian New York.",
      "Pemerintahan itu menjadi jembatan peralihan dari Belanda ke Indonesia pada 1 Mei 1963.",
    ],
    sorotan: ["Memimpin peralihan Papua bagian barat dari Belanda ke Indonesia"],
  },
  "untaet|Sérgio Vieira de Mello": {
    gelar: "Administrator Transisi PBB",
    tentang: [
      "Diplomat Brasil yang memimpin pemerintahan transisi PBB di Timor Timur setelah referendum 1999 sampai kemerdekaan pada 2002.",
      "Ia kemudian menjadi Komisaris Tinggi HAM PBB dan tewas dalam serangan bom di markas PBB di Baghdad pada 2003.",
    ],
    sorotan: ["Menyiapkan lembaga negara Timor Leste sebelum merdeka"],
  },

  // ——— Malaysia ———
  "malaysia|Tunku Abdul Rahman": {
    gelar: "Bapak Kemerdekaan",
    tentang: [
      "Pangeran Kedah yang memimpin UMNO dan merundingkan kemerdekaan Malaya dari Inggris pada 1957. Ia menjadi perdana menteri pertama Malaya, lalu Malaysia.",
      "Pembentukan Malaysia pada 1963 memicu Konfrontasi dengan Indonesia. Ia mundur setelah kerusuhan 13 Mei 1969.",
    ],
    sorotan: ["Memproklamasikan kemerdekaan Malaya 1957", "Membentuk Malaysia pada 1963"],
  },
  "malaysia|Abdul Razak Hussein": {
    gelar: "Bapak Pembangunan",
    tentang: [
      "Perdana menteri kedua Malaysia yang memperkenalkan Dasar Ekonomi Baru untuk mengurangi kesenjangan ekonomi antarkelompok.",
      "Ia juga mendorong pembentukan Barisan Nasional dan menjalin hubungan diplomatik dengan Tiongkok.",
    ],
    sorotan: ["Memperkenalkan Dasar Ekonomi Baru (1971)"],
  },
  "malaysia|Hussein Onn": {
    gelar: "Bapak Persatuan",
    tentang: [
      "Perdana menteri ketiga Malaysia yang naik setelah Abdul Razak wafat. Masa jabatannya relatif tenang dan berfokus pada persatuan nasional.",
    ],
    sorotan: ["Mundur karena alasan kesehatan pada 1981"],
  },
  "malaysia|Mahathir Mohamad": {
    gelar: "Perdana menteri keempat",
    tentang: [
      "Dokter yang menjadi perdana menteri terlama Malaysia (1981–2003). Pemerintahannya mendorong industrialisasi, proyek besar seperti Menara Petronas, dan kebijakan Pandang ke Timur.",
      "Saat krisis keuangan Asia 1997–1998 ia menolak bantuan IMF dan menerapkan kontrol modal.",
    ],
    sorotan: ["Perdana menteri terlama Malaysia", "Menolak program IMF pada krisis 1998"],
  },
  "malaysia|Abdullah Ahmad Badawi": {
    gelar: "Pak Lah",
    tentang: [
      "Penerus Mahathir yang menjanjikan pemerintahan yang lebih bersih dan memperkenalkan konsep Islam Hadhari.",
      "Hasil buruk Barisan Nasional dalam pemilu 2008 mendorongnya mundur pada 2009.",
    ],
    sorotan: ["Memperkenalkan konsep Islam Hadhari"],
  },
  "malaysia|Najib Razak": {
    gelar: "Perdana menteri keenam",
    tentang: [
      "Putra Abdul Razak yang menjabat perdana menteri pada 2009–2018. Masa jabatannya dibayangi skandal dana investasi 1MDB.",
      "Barisan Nasional kalah dalam pemilu 2018 untuk pertama kalinya sejak kemerdekaan, dan ia kemudian dihukum penjara.",
    ],
    sorotan: ["Skandal 1MDB", "Kekalahan pertama Barisan Nasional pada 2018"],
  },
  "malaysia|Mahathir Mohamad (kedua)": {
    gelar: "Perdana menteri ketujuh",
    tentang: [
      "Kembali menjadi perdana menteri pada usia 92 tahun setelah memimpin koalisi Pakatan Harapan mengalahkan Barisan Nasional pada 2018.",
      "Koalisinya pecah pada awal 2020 dan ia mengundurkan diri.",
    ],
    sorotan: ["Kepala pemerintahan tertua di dunia saat dilantik"],
  },
  "malaysia|Muhyiddin Yassin": {
    gelar: "Perdana menteri kedelapan",
    tentang: [
      "Naik menjadi perdana menteri pada 2020 setelah koalisi Pakatan Harapan runtuh. Masa jabatannya didominasi penanganan pandemi COVID-19.",
    ],
    sorotan: ["Memimpin di masa awal pandemi COVID-19"],
  },
  "malaysia|Ismail Sabri Yaakob": {
    gelar: "Perdana menteri kesembilan",
    tentang: ["Menjabat sekitar setahun pada 2021–2022 hingga pemilu dipercepat digelar pada November 2022."],
    sorotan: ["Memimpin pemulihan setelah pandemi"],
  },
  "malaysia|Anwar Ibrahim": {
    gelar: "Perdana menteri kesepuluh",
    tentang: [
      "Mantan wakil perdana menteri yang dipecat dan dipenjara pada 1998, lalu memimpin gerakan Reformasi di Malaysia.",
      "Ia menjadi perdana menteri setelah pemilu 2022 melalui pemerintahan koalisi.",
    ],
    sorotan: ["Tokoh gerakan Reformasi Malaysia"],
  },

  // ——— Singapura ———
  "singapura|Lee Kuan Yew": {
    gelar: "Perdana menteri pertama",
    tentang: [
      "Pemimpin Partai Aksi Rakyat yang memimpin Singapura sejak berpemerintahan sendiri pada 1959, melewati masa bergabung dengan Malaysia, sampai berdiri sendiri pada 1965.",
      "Di bawah kepemimpinannya Singapura berkembang menjadi pusat perdagangan dan keuangan, dengan pemerintahan yang sangat terkendali.",
    ],
    sorotan: ["Memimpin Singapura saat berpisah dari Malaysia (1965)"],
  },
  "singapura|Goh Chok Tong": {
    gelar: "Perdana menteri kedua",
    tentang: ["Penerus Lee Kuan Yew yang memimpin Singapura pada 1990–2004 dengan gaya yang lebih konsultatif."],
    sorotan: ["Memimpin saat krisis keuangan Asia dan wabah SARS"],
  },
  "singapura|Lee Hsien Loong": {
    gelar: "Perdana menteri ketiga",
    tentang: ["Putra Lee Kuan Yew yang memimpin Singapura selama dua dekade, dari 2004 sampai 2024."],
    sorotan: ["Memimpin saat krisis keuangan 2008 dan pandemi COVID-19"],
  },
  "singapura|Lawrence Wong": {
    gelar: "Perdana menteri keempat",
    tentang: ["Mantan menteri keuangan yang menjadi perdana menteri pada Mei 2024."],
    sorotan: ["Memimpin tim penanganan COVID-19 sebelum menjadi perdana menteri"],
  },
  "singapura|Ong Teng Cheong (presiden)": {
    gelar: "Presiden",
    tentang: ["Presiden pertama Singapura yang dipilih langsung oleh rakyat, menjabat 1993–1999."],
    sorotan: ["Presiden pertama hasil pemilihan langsung"],
  },
  "singapura|S.R. Nathan (presiden)": {
    gelar: "Presiden",
    tentang: ["Mantan diplomat dan pejabat keamanan yang menjadi presiden terlama Singapura (1999–2011)."],
    sorotan: ["Presiden terlama Singapura"],
  },
  "singapura|Tony Tan Keng Yam (presiden)": {
    gelar: "Presiden",
    tentang: ["Mantan wakil perdana menteri yang menang tipis dalam pemilihan presiden 2011."],
    sorotan: ["Menjabat 2011–2017"],
  },
  "singapura|Halimah Yacob (presiden)": {
    gelar: "Presiden",
    tentang: ["Mantan ketua parlemen yang menjadi presiden perempuan pertama Singapura pada 2017."],
    sorotan: ["Presiden perempuan pertama Singapura"],
  },
  "singapura|Tharman Shanmugaratnam (presiden)": {
    gelar: "Presiden",
    tentang: ["Ekonom dan mantan wakil perdana menteri yang terpilih menjadi presiden pada 2023."],
    sorotan: ["Terpilih dengan suara mayoritas besar pada 2023"],
  },

  // ——— Timor Leste ———
  "timor-leste|Xanana Gusmão": {
    gelar: "Presiden pertama",
    tentang: [
      "Pemimpin perlawanan Fretilin dan Falintil melawan pendudukan Indonesia yang ditangkap pada 1992. Setelah referendum 1999 ia dibebaskan dan menjadi presiden pertama Timor Leste merdeka.",
    ],
    sorotan: ["Pemimpin gerilya yang menjadi presiden pertama", "Kemudian menjabat perdana menteri"],
  },
  "timor-leste|José Ramos-Horta": {
    gelar: "Presiden",
    tentang: [
      "Diplomat perlawanan yang memperjuangkan kemerdekaan Timor Timur di dunia internasional dan menerima Hadiah Nobel Perdamaian 1996.",
      "Ia selamat dari percobaan pembunuhan pada 2008, saat menjabat presiden.",
    ],
    sorotan: ["Peraih Nobel Perdamaian 1996"],
  },
  "timor-leste|Taur Matan Ruak": {
    gelar: "Presiden",
    tentang: ["Mantan komandan Falintil dan panglima angkatan bersenjata yang menjabat presiden pada 2012–2017."],
    sorotan: ["Kemudian menjadi perdana menteri"],
  },
  "timor-leste|Francisco Guterres Lú-Olo": {
    gelar: "Presiden",
    tentang: ["Tokoh Fretilin dan bekas pejuang gerilya yang menjabat presiden pada 2017–2022."],
    sorotan: ["Ketua Fretilin"],
  },
  "timor-leste|José Ramos-Horta (kedua)": {
    gelar: "Presiden",
    tentang: ["Kembali terpilih sebagai presiden pada pemilu 2022."],
    sorotan: ["Masa jabatan kedua sebagai presiden"],
  },

  // ——— Sarawak (Rajah Putih) ———
  "sarawak-brooke|James Brooke": {
    gelar: "Rajah Putih pertama",
    tentang: [
      "Petualang Inggris yang membantu Kesultanan Brunei memadamkan pemberontakan dan sebagai imbalannya diangkat menjadi Rajah Sarawak pada 1841.",
      "Ia mendirikan dinasti keluarga Brooke yang memerintah Sarawak selama sekitar seratus tahun.",
    ],
    sorotan: ["Mendirikan kerajaan keluarga Brooke di Sarawak"],
  },
  "sarawak-brooke|Charles Brooke": {
    gelar: "Rajah Sarawak kedua",
    tentang: ["Keponakan James Brooke yang memperluas wilayah Sarawak dengan mengambil daerah-daerah dari Brunei."],
    sorotan: ["Sarawak menjadi protektorat Inggris pada 1888"],
  },
  "sarawak-brooke|Charles Vyner Brooke": {
    gelar: "Rajah Sarawak ketiga",
    tentang: [
      "Rajah terakhir keluarga Brooke. Setelah pendudukan Jepang, ia menyerahkan Sarawak kepada Inggris sebagai koloni mahkota pada 1946.",
    ],
    sorotan: ["Menyerahkan Sarawak kepada Inggris pada 1946"],
  },

  // ——— Brunei ———
  "brunei|Sultan Omar Ali Saifuddin I": {
    tentang: ["Sultan Brunei pada awal abad ke-19. Pada masanya Sarawak lepas dari Brunei dan diserahkan kepada James Brooke."],
    sorotan: ["Sarawak diserahkan kepada James Brooke (1841)"],
  },
  "brunei|Sultan Muhammad Jamalul Alam I": {
    tentang: ["Sultan Brunei pada pertengahan abad ke-19 yang menghadapi tekanan perluasan Sarawak dan kehadiran Inggris."],
    sorotan: ["Wilayah Brunei terus menyusut"],
  },
  "brunei|Sultan Hashim Jalilul Alam Aqamaddin": {
    tentang: ["Sultan yang menandatangani perjanjian protektorat dengan Inggris pada 1888 untuk mempertahankan sisa wilayah Brunei."],
    sorotan: ["Brunei menjadi protektorat Inggris (1888)"],
  },
  "brunei|Sultan Muhammad Jamalul Alam II": {
    tentang: ["Sultan pada awal abad ke-20, ketika Inggris menempatkan residen di Brunei."],
    sorotan: ["Masa sistem residen Inggris"],
  },
  "brunei|Sultan Ahmad Tajuddin": {
    tentang: ["Memerintah ketika minyak mulai ditemukan dan dieksploitasi di Brunei, termasuk melewati pendudukan Jepang."],
    sorotan: ["Masa awal industri minyak Brunei"],
  },
  "brunei|Sultan Omar Ali Saifuddin III": {
    gelar: "Bapak Kemerdekaan Brunei",
    tentang: ["Sultan yang memberlakukan konstitusi pertama Brunei pada 1959 dan memilih tidak bergabung dengan Malaysia pada 1963."],
    sorotan: ["Konstitusi Brunei 1959", "Brunei tidak masuk Malaysia"],
  },
  "brunei|Sultan Hassanal Bolkiah": {
    tentang: [
      "Sultan Brunei sejak 1967 yang memimpin Brunei hingga merdeka penuh dari Inggris pada 1984. Ia juga menjabat perdana menteri.",
    ],
    sorotan: ["Brunei merdeka penuh pada 1984", "Salah satu raja yang paling lama bertakhta"],
  },
};
