/* ==========================================================================
   DATA SEJARAH — edit file ini untuk menambah atau mengubah event.

   Ditulis sebagai .js (bukan .json) supaya index.html bisa dibuka langsung
   dengan klik dua kali, tanpa perlu menjalankan server.

   PENTING: seluruh isi di bawah adalah DRAF AWAL untuk prototype. Periksa
   ulang fakta dan sumbernya sebelum dipakai murid.
   ========================================================================== */

const ERA = {
  id: "era-1",
  nama: "Dari Singhasari ke Majapahit",
  mulai: 1200,
  akhir: 1400,
  tahunAwal: 1280 // tahun yang tampil saat game dibuka
};

const KATEGORI = {
  politik:     { label: "Politik",     ikon: "🏛️", warna: "#8a5a2b" },
  perang:      { label: "Perang",      ikon: "⚔️", warna: "#a63d2f" },
  perdagangan: { label: "Perdagangan", ikon: "⛵", warna: "#2f6f8f" },
  budaya:      { label: "Budaya",      ikon: "📜", warna: "#6b4f9e" }
};

/* Istilah yang bisa diklik di level Menengah dan Lanjut.
   Kunci harus huruf kecil. Istilah otomatis ditandai di teks cerita. */
const GLOSARIUM = {
  "ekspedisi": "Perjalanan rombongan (pasukan, pedagang, atau peneliti) ke tempat yang jauh untuk tujuan tertentu.",
  "aliansi": "Persekutuan antara dua pihak atau lebih untuk saling membantu.",
  "diplomatik": "Berkaitan dengan hubungan dan perundingan antarnegara, bukan lewat perang.",
  "kakawin": "Puisi panjang berbahasa Jawa Kuno yang gayanya dipengaruhi puisi India.",
  "nisan": "Batu penanda makam.",
  "hijriah": "Penanggalan Islam yang dihitung sejak hijrah Nabi Muhammad ke Madinah pada 622 Masehi.",
  "upeti": "Barang atau hasil bumi yang diserahkan wilayah yang lebih lemah kepada penguasa yang lebih kuat.",
  "dinasti": "Garis keturunan raja-raja yang memerintah secara berurutan.",
  "tradisi lisan": "Cerita yang diwariskan dari mulut ke mulut dan belum tentu dicatat sejak awal.",
  "monopoli": "Keadaan ketika hanya satu pihak yang menguasai suatu barang atau perdagangan.",
  "islamisasi": "Proses masuk dan menyebarnya agama Islam di suatu wilayah.",
  "prasasti": "Tulisan kuno pada batu atau logam yang mencatat suatu peristiwa.",
  "kolano": "Gelar raja di Maluku Utara pada masa awal."
};

/* Catatan tiap event:
   - mulai/akhir : rentang tahun event TAMPIL di peta (bukan hanya tahun kejadian).
   - tahun       : teks tahun yang ditampilkan ke pemain.
   - cerita      : tiga versi bahasa dengan fakta yang sama (L1 dasar, L2 menengah, L3 lanjut).
   - kuis        : "misi" sederhana untuk prototype. Nanti bisa diganti misi yang lebih kaya.
   - lokasi      : koordinat perkiraan, cukup untuk menaruh penanda di peta. */
const EVENTS = [
  {
    id: "evt-001",
    judul: "Ken Arok mendirikan Singhasari",
    tahun: "1222",
    mulai: 1222,
    akhir: 1292,
    lokasi: { nama: "Malang, Jawa Timur", lat: -7.89, lng: 112.66 },
    kategori: "politik",
    ringkas: "Kadiri jatuh, Singhasari berdiri.",
    cerita: {
      L1: "Dulu di Jawa Timur ada kerajaan besar bernama Kadiri. Seorang pemuda bernama Ken Arok melawan raja Kadiri, yaitu Kertajaya. Pada tahun 1222, Ken Arok menang. Lalu ia mendirikan kerajaan baru bernama Singhasari. Kerajaan ini kelak menjadi sangat kuat.",
      L2: "Pada 1222, Ken Arok mengalahkan Kertajaya, raja Kadiri, dalam pertempuran di dekat Ganter. Kemenangan itu menjatuhkan Kadiri dari posisi kerajaan terkuat di Jawa Timur dan membuka jalan bagi berdirinya Singhasari, dengan pusat di sekitar Malang sekarang. Ken Arok kemudian bergelar Rajasa. Singhasari mencapai puncaknya di bawah Raja Kertanagara, yang memerintah dari 1268 sampai 1292. Dinasti yang dirintis Ken Arok kelak juga melahirkan raja-raja Majapahit.",
      L3: "Menurut Pararaton, Ken Arok, tokoh berlatar rakyat biasa yang naik menjadi penguasa Tumapel, menggulingkan Kertajaya (Dandang Gendis) dari Kadiri dalam pertempuran Ganter pada 1222 M. Peristiwa itu menandai lahirnya Singhasari sekaligus dinasti Rajasa, garis keturunan yang kelak berlanjut hingga para raja Majapahit. Kisah Ken Arok sarat unsur legenda, seperti Keris Mpu Gandring beserta kutukannya, sehingga sejarawan berusaha memisahkan kerangka peristiwa politik dari bumbu mitos yang ditambahkan para penulis naskah di kemudian hari. Pembacaan semacam ini, yaitu menimbang siapa yang menulis, kapan, dan untuk kepentingan apa, adalah inti kerja seorang sejarawan."
    },
    catatan: "Kisah Ken Arok terutama bersumber dari Pararaton, naskah yang disusun berabad-abad setelah peristiwanya, dan sebagian dari Nagarakretagama. Tahun 1222 diterima luas, tetapi asal-usul Ken Arok, kutukan keris, dan rincian pertempuran banyak bercampur legenda.",
    sumber: [
      "Pararaton (naskah Jawa)",
      "Nagarakretagama (1365)",
      "Poesponegoro & Notosusanto (ed.), Sejarah Nasional Indonesia II, Balai Pustaka",
      "M.C. Ricklefs, A History of Modern Indonesia since c.1200"
    ],
    kuis: {
      tanya: "Raja Kadiri yang mana yang dikalahkan Ken Arok pada 1222?",
      pilihan: ["Kertajaya", "Jayakatwang", "Kertanagara", "Hayam Wuruk"],
      benar: 0,
      penjelasan: "Ken Arok mengalahkan Kertajaya (Dandang Gendis) dari Kadiri. Jayakatwang adalah penguasa Kadiri yang muncul jauh kemudian, pada 1292."
    }
  },
  {
    id: "evt-002",
    judul: "Kerajaan Ternate dan harta bernama cengkih",
    tahun: "1257 (menurut tradisi)",
    mulai: 1257,
    akhir: 1400,
    lokasi: { nama: "Ternate, Maluku Utara", lat: 0.79, lng: 127.38 },
    kategori: "perdagangan",
    ringkas: "Pulau kecil dengan rempah yang diburu dunia.",
    cerita: {
      L1: "Di Maluku ada pulau kecil bernama Ternate. Pulau ini punya harta berharga, yaitu cengkih. Cengkih dipakai sebagai bumbu dan obat. Pedagang dari tempat yang sangat jauh datang untuk membelinya. Menurut cerita turun-temurun, Kerajaan Ternate berdiri pada tahun 1257.",
      L2: "Menurut tradisi lisan, Kerajaan Ternate berdiri pada 1257 dengan Baab Mashur Malamo sebagai raja pertama. Ternate menjadi salah satu dari empat kerajaan besar Maluku yang disebut Maluku Kie Raha, bersama Tidore, Jailolo, dan Bacan. Kekayaan utama wilayah ini adalah cengkih, rempah yang pada masa itu diburu pedagang sampai ke Asia Selatan, Timur Tengah, dan Eropa.",
      L3: "Tarikh 1257 bersumber dari tradisi lisan dan kronik lokal yang disusun jauh sesudahnya, yang menyebut Baab Mashur Malamo sebagai kolano pertama Ternate. Bersama Tidore, Jailolo, dan Bacan, Ternate membentuk Maluku Kie Raha, persekutuan yang kekayaannya bertumpu pada keadaan yang mendekati monopoli alami: cengkih saat itu hanya tumbuh di segelintir pulau kecil di Maluku. Jaringan perdagangan rempah inilah yang berabad-abad kemudian menarik Portugis, Spanyol, dan Belanda ke timur Nusantara."
    },
    catatan: "Tahun 1257 berasal dari tradisi lokal, bukan dokumen sezaman, sehingga sebaiknya dibaca sebagai perkiraan. Pada masa awal ini Ternate dipimpin seorang kolano; gelar sultan dan pengaruh Islam baru menguat belakangan, sekitar abad ke-15.",
    sumber: [
      "Tradisi lisan dan kronik Ternate",
      "Leonard Y. Andaya, The World of Maluku (1993)",
      "M.C. Ricklefs, A History of Modern Indonesia since c.1200"
    ],
    kuis: {
      tanya: "Hasil bumi apa yang membuat Ternate dan Maluku dicari pedagang dari tempat jauh?",
      pilihan: ["Kopi", "Teh", "Cengkih", "Karet"],
      benar: 2,
      penjelasan: "Cengkih. Pada masa itu tanaman ini hanya tumbuh di segelintir pulau kecil di Maluku, sehingga sangat berharga."
    }
  },
  {
    id: "evt-003",
    judul: "Ekspedisi Pamalayu",
    tahun: "1275",
    mulai: 1275,
    akhir: 1292,
    lokasi: { nama: "Dharmasraya, Sumatra", lat: -1.10, lng: 101.60 },
    kategori: "politik",
    ringkas: "Singhasari melebarkan pengaruh ke Sumatra.",
    cerita: {
      L1: "Raja Singhasari bernama Kertanagara ingin kerajaannya makin kuat. Pada tahun 1275 ia mengirim kapal dan pasukan ke Sumatra, ke wilayah yang disebut Melayu. Di sana ia ingin punya sahabat dan pengaruh. Perjalanan ini disebut Pamalayu.",
      L2: "Pada 1275, Singhasari mengirim ekspedisi Pamalayu ke Sumatra, ke wilayah kerajaan Melayu di sekitar Jambi dan Dharmasraya. Tujuannya memperluas pengaruh dan menguasai jalur pelayaran Selat Malaka yang ramai. Pada 1286, Kertanagara mengirim arca Amoghapasa ke Dharmasraya sebagai tanda hubungan kedua kerajaan.",
      L3: "Menurut Pararaton, Kertanagara mengirim ekspedisi Pamalayu ke Melayu di Sumatra pada 1275. Sejarawan berbeda pendapat soal sifatnya: sebagian menafsirkannya sebagai penaklukan untuk menguasai Selat Malaka, sebagian lain sebagai aliansi diplomatik untuk membendung ancaman Mongol-Yuan yang saat itu meluas di Asia. Prasasti pada arca Amoghapasa (1286), yang dikirim Kertanagara ke Dharmasraya, memperlihatkan hubungan yang erat dan bercorak Buddha antara kedua pihak. Perdebatan ini mengajarkan satu hal: peristiwa yang sama bisa ditafsirkan berbeda, tergantung bukti mana yang ditekankan."
    },
    catatan: "Tahun 1275 berasal dari Pararaton, sedangkan bukti sezaman yang paling kuat adalah prasasti pada arca Amoghapasa (1286). Apakah Pamalayu merupakan penaklukan atau persekutuan masih diperdebatkan.",
    sumber: [
      "Pararaton (naskah Jawa)",
      "Prasasti arca Amoghapasa (1286)",
      "G. Coedès, The Indianized States of Southeast Asia",
      "M.C. Ricklefs, A History of Modern Indonesia since c.1200"
    ],
    kuis: {
      tanya: "Ke pulau mana Kertanagara mengirim ekspedisi Pamalayu?",
      pilihan: ["Kalimantan", "Sumatra", "Sulawesi", "Papua"],
      benar: 1,
      penjelasan: "Sumatra, ke wilayah kerajaan Melayu. Tujuannya memperluas pengaruh dan menguasai jalur pelayaran Selat Malaka."
    }
  },
  {
    id: "evt-004",
    judul: "Pasukan Mongol datang, Majapahit lahir",
    tahun: "1293",
    mulai: 1293,
    akhir: 1400,
    lokasi: { nama: "Tarik, Jawa Timur (perkiraan)", lat: -7.47, lng: 112.50 },
    kategori: "perang",
    ringkas: "Siasat Raden Wijaya melahirkan kerajaan baru.",
    cerita: {
      L1: "Pada tahun 1293, banyak kapal dari negeri Tiongkok datang ke Jawa. Mereka adalah pasukan bangsa Mongol. Seorang bangsawan cerdik bernama Raden Wijaya memakai bantuan mereka lebih dulu, lalu mengusir mereka. Sesudah itu, Raden Wijaya mendirikan kerajaan baru bernama Majapahit.",
      L2: "Kaisar Mongol dari Dinasti Yuan, Kubilai Khan, mengirim armada besar ke Jawa pada awal 1293. Saat armada itu tiba, Kertanagara sudah tewas diserang Jayakatwang dari Kadiri. Raden Wijaya, menantu Kertanagara, mengajak pasukan Mongol mengalahkan Jayakatwang. Setelah itu ia berbalik menyerang sekutunya sehingga pasukan Mongol terpaksa pulang. Wijaya lalu mendirikan Majapahit di daerah Tarik, Jawa Timur. Menurut Pararaton, nama itu berasal dari buah maja yang rasanya pahit.",
      L3: "Ekspedisi Mongol-Yuan 1293 semula dimaksudkan untuk menghukum Kertanagara, yang pada 1289 mempermalukan utusan Kubilai Khan, Meng Qi. Ketika armada itu tiba, Kertanagara telah gugur dalam pemberontakan Jayakatwang. Raden Wijaya memanfaatkan pasukan Yuan untuk menyingkirkan Jayakatwang, lalu menyerang balik sekutunya yang lengah dan memaksa mereka mundur. Majapahit lahir dari perhitungan politik ini: sebuah aliansi taktis yang berakhir dengan pengkhianatan. Tanggal tepat penobatan Wijaya diperdebatkan, tetapi tahun 1293 diterima luas."
    },
    catatan: "Catatan Tiongkok (Yuan Shi) dan naskah Jawa (Pararaton, Nagarakretagama) tidak sepenuhnya cocok dalam rincian peristiwa. Asal-usul nama Majapahit dari buah maja adalah cerita dalam Pararaton, dan tanggal pasti berdirinya diperdebatkan.",
    sumber: [
      "Pararaton (naskah Jawa)",
      "Nagarakretagama (1365)",
      "Yuan Shi (sejarah resmi Dinasti Yuan)",
      "M.C. Ricklefs, A History of Modern Indonesia since c.1200"
    ],
    kuis: {
      tanya: "Bagaimana Raden Wijaya memanfaatkan pasukan Mongol?",
      pilihan: [
        "Ia menyerah dan menjadi pengikut Kubilai Khan",
        "Ia menolak bertemu dengan mereka sama sekali",
        "Ia membantu mereka menaklukkan seluruh Nusantara",
        "Ia memakai bantuan mereka lebih dulu, lalu mengusir mereka"
      ],
      benar: 3,
      penjelasan: "Wijaya memakai pasukan Mongol untuk mengalahkan Jayakatwang, lalu menyerang mereka saat lengah sehingga mereka harus pulang."
    }
  },
  {
    id: "evt-005",
    judul: "Samudra Pasai, kerajaan Islam di Selat Malaka",
    tahun: "1297",
    mulai: 1297,
    akhir: 1400,
    lokasi: { nama: "Aceh Utara, Sumatra", lat: 5.18, lng: 97.04 },
    kategori: "budaya",
    ringkas: "Nisan bertarikh 1297 menandai kesultanan Islam awal.",
    cerita: {
      L1: "Di ujung utara Pulau Sumatra ada kerajaan bernama Samudra Pasai. Letaknya di jalur kapal antara India dan Tiongkok, jadi banyak pedagang singgah di sana. Rajanya, Malik al-Saleh, beragama Islam. Batu nisan di makamnya bertanggal tahun 1297. Karena itu Pasai dianggap salah satu kerajaan Islam pertama di Nusantara.",
      L2: "Samudra Pasai berada di pesisir utara Sumatra, di wilayah Aceh sekarang. Nisan makam Sultan Malik al-Saleh bertarikh 696 Hijriah, atau 1297 Masehi, dan menjadi salah satu bukti tertulis tertua tentang kerajaan Islam di Nusantara. Pasai ramai karena terletak di jalur Selat Malaka, tempat pedagang dari India, Arab, dan Tiongkok bertemu. Di sinilah Islam menyebar bersama perdagangan.",
      L3: "Nisan Malik al-Saleh bertarikh 696 H/1297 M menjadi penanda penting berdirinya kesultanan Islam Samudra Pasai. Marco Polo, yang singgah di pesisir utara Sumatra pada 1292, menyebut Ferlec (Perlak) sudah Muslim sementara Samara (diduga Samudra) belum, yang sering ditafsirkan sebagai tanda bahwa proses islamisasi sedang berlangsung di kawasan itu. Pada 1345, Ibnu Battuta mengunjungi Pasai dan menggambarkan istananya sebagai pusat kajian fikih mazhab Syafi'i. Pasai menjadi simpul perdagangan Selat Malaka sekaligus titik tolak penyebaran Islam ke wilayah lain di Nusantara."
    },
    catatan: "Waktu pasti masuknya Islam ke Nusantara masih diperdebatkan; sejarawan menduga pedagang Muslim sudah singgah jauh sebelum 1297. Tahun 1297 adalah tarikh pada nisan, belum tentu tahun berdirinya Pasai. Identifikasi 'Samara' dalam catatan Marco Polo dengan Samudra juga berupa dugaan.",
    sumber: [
      "Nisan Sultan Malik al-Saleh (696 H)",
      "Catatan perjalanan Marco Polo (1292)",
      "Ibnu Battuta, Rihlah (1345)",
      "Hikayat Raja-raja Pasai"
    ],
    kuis: {
      tanya: "Apa bukti penting bahwa Pasai sudah menjadi kerajaan Islam pada 1297?",
      pilihan: [
        "Candi besar di pusat kota",
        "Batu nisan makam Sultan Malik al-Saleh",
        "Peta kuno buatan Tiongkok",
        "Uang emas milik Majapahit"
      ],
      benar: 1,
      penjelasan: "Nisan Malik al-Saleh bertarikh 696 H (1297 M) adalah salah satu bukti tertulis tertua tentang kerajaan Islam di Nusantara."
    }
  },
  {
    id: "evt-006",
    judul: "Nagarakretagama ditulis",
    tahun: "1365",
    mulai: 1365,
    akhir: 1400,
    lokasi: { nama: "Keraton Majapahit, Trowulan", lat: -7.56, lng: 112.37 },
    kategori: "budaya",
    ringkas: "Puisi pujian yang menjadi jendela menuju Majapahit.",
    cerita: {
      L1: "Pada tahun 1365 seorang pujangga bernama Mpu Prapanca menulis sebuah buku berbentuk puisi. Judulnya Nagarakretagama. Isinya cerita tentang Raja Hayam Wuruk dan kehebatan Majapahit. Dari buku inilah kita tahu banyak hal tentang Majapahit.",
      L2: "Mpu Prapanca menulis kakawin Nagarakretagama pada 1365, saat Hayam Wuruk menjadi raja Majapahit. Kitab ini menggambarkan kehidupan istana, perjalanan raja berkeliling wilayahnya, dan daftar daerah yang disebut berada di bawah pengaruh Majapahit, dari Sumatra sampai Maluku. Naskahnya ditemukan kembali di Lombok pada 1894.",
      L3: "Nagarakretagama, juga dikenal sebagai Desawarnana, adalah kakawin berbahasa Jawa Kuno dalam 98 pupuh yang selesai ditulis Mpu Prapanca pada 1365 M (1287 Saka). Naskahnya ditemukan kembali di Cakranegara, Lombok, pada 1894 saat ekspedisi militer Belanda, lalu dikaji oleh J.L.A. Brandes. Daftar wilayah bawahan di dalamnya sering dipakai untuk menggambarkan luas kekuasaan Majapahit, namun sejarawan memperdebatkan apakah daftar itu menunjukkan kekuasaan langsung atau sekadar hubungan pengaruh dan upeti. Perlu dicatat pula bahwa semboyan Bhinneka Tunggal Ika berasal dari kitab lain, yaitu Kakawin Sutasoma karya Mpu Tantular."
    },
    catatan: "Nagarakretagama adalah puisi pujian untuk raja, sehingga cenderung menonjolkan kebesaran Hayam Wuruk. Daftar wilayahnya bukan bukti penguasaan langsung, dan tidak semua sejarawan menafsirkannya dengan cara yang sama.",
    sumber: [
      "Nagarakretagama (Desawarnana)",
      "Th. G. Th. Pigeaud, Java in the 14th Century (1960-1963)",
      "Slamet Muljana, Tafsir Sejarah Nagarakretagama"
    ],
    kuis: {
      tanya: "Siapa penulis Nagarakretagama?",
      pilihan: ["Mpu Tantular", "Gajah Mada", "Mpu Prapanca", "Ken Arok"],
      benar: 2,
      penjelasan: "Mpu Prapanca menulisnya pada 1365. Mpu Tantular menulis kitab lain, yaitu Kakawin Sutasoma."
    }
  }
];
