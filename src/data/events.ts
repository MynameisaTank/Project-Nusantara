import type { SejarahEvent } from "../types";
import { KEPUTUSAN } from "./keputusan";

/* Versi diperluas: teks L1/L2/L3 memiliki tingkat kedalaman berbeda. Tetap periksa fakta dan sumber
   sebelum dipakai murid; bagian interpretatif dan tradisi diberi penanda kehati-hatian.

   - mulai/akhir : rentang tahun event TAMPIL di peta (bukan hanya tahun kejadian).
   - tahun       : teks tahun yang ditampilkan ke pemain.
   - cerita      : tiga versi bahasa dengan fakta yang sama (L1 dasar, L2 menengah, L3 lanjut).
   - kuis        : "misi" sederhana. benar = indeks pilihan (mulai dari 0).
   - lokasi      : koordinat perkiraan. */
const DATA: Omit<SejarahEvent, "keputusan">[] = [
  {
      id: "evt-032",
      judul: "Kawasan Sunda tetap menjadi kekuatan politik di Jawa Barat",
      tahun: "abad ke-13–14",
      mulai: 1200,
      akhir: 1400,
      lokasi: { nama: "Jawa Barat", lat: -6.80, lng: 107.60 },
      kategori: "politik",
      ringkas: "Kerajaan Sunda mempertahankan identitas politik di barat Jawa di tengah perubahan regional.",
      cerita: {
        L1: "Di bagian barat Pulau Jawa, Kerajaan Sunda tetap menjadi kekuatan politik pada abad ke-13 dan ke-14. Wilayah ini memiliki hubungan dengan daerah pedalaman dan pesisir. Sunda tidak selalu berada di bawah kendali langsung kerajaan-kerajaan di Jawa Timur. Hubungan antarkerajaan dapat berupa perdagangan, pernikahan, persaingan, atau persekutuan.",
        L2: "Sumber sejarah menunjukkan bahwa Kerajaan Sunda bertahan sebagai kekuatan tersendiri di Jawa Barat selama periode ketika Singhasari dan Majapahit berkembang di Jawa Timur. Perbedaan pusat kekuasaan ini penting untuk menghindari anggapan bahwa seluruh Pulau Jawa selalu diperintah oleh satu kerajaan. Bukti untuk detail politik Sunda pada setiap dekade tidak merata, sehingga gambaran umum perlu dibedakan dari kisah-kisah khusus yang sumbernya lebih belakangan.",
        L3: "Keberlanjutan Kerajaan Sunda di Jawa Barat sepanjang abad ke-13–14 memperlihatkan bahwa Nusantara terdiri atas pusat-pusat politik yang berinteraksi, bukan satu negara tunggal. Sumber Majapahit dapat menyebut daerah luar sebagai bagian dari lingkup pengaruh, tetapi penyebutan semacam itu tidak selalu membuktikan administrasi langsung. Kajian Sunda harus memadukan prasasti, naskah lokal, dan sumber dari kerajaan tetangga; ketiadaan catatan rinci untuk suatu masa bukan bukti bahwa kehidupan politik berhenti."
      },
      catatan: "Ini adalah ringkasan proses politik jangka panjang; batas wilayah dan sifat hubungan Sunda dengan Majapahit tidak dapat disederhanakan menjadi kontrol langsung yang seragam.",
      sumber: ["Carita Parahyangan", "Nagarakretagama (1365)", "Poesponegoro & Notosusanto (ed.), Sejarah Nasional Indonesia II"],
      kuis: { tanya: "Apa pelajaran utama dari keberlanjutan Kerajaan Sunda?", pilihan: ["Seluruh Jawa selalu satu kerajaan", "Jawa memiliki beberapa pusat kekuasaan yang saling berhubungan", "Sunda terletak di Maluku", "Tidak ada perdagangan antarwilayah"], benar: 1, penjelasan: "Kerajaan Sunda tetap menjadi pusat politik di Jawa Barat, sementara kerajaan lain berkembang di bagian lain Jawa." }
    },
  {
      id: "evt-040",
      judul: "Kemunduran bertahap jaringan Sriwijaya",
      tahun: "abad ke-13–akhir abad ke-14",
      mulai: 1200,
      akhir: 1400,
      lokasi: { nama: "Sumatra selatan dan Selat Malaka", lat: -2.99, lng: 104.76 },
      kategori: "perdagangan",
      ringkas: "Jaringan pelabuhan lama berubah ketika pusat-pusat dagang baru menguat.",
      cerita: {
        L1: "Sriwijaya pernah menjadi kekuatan dagang besar di Sumatra. Pada abad ke-13 dan ke-14, pengaruh jaringan lamanya berubah. Pelabuhan lain semakin penting dan hubungan dagang tidak lagi bergantung pada satu pusat. Perubahan ini terjadi perlahan, bukan dalam satu hari atau satu pertempuran saja.",
        L2: "Kemunduran Sriwijaya merupakan proses panjang yang berkaitan dengan perubahan jalur perdagangan, persaingan pelabuhan, dan perubahan kekuasaan di sekitar Selat Malaka. Pada abad ke-13, istilah yang dikaitkan dengan Sriwijaya masih muncul dalam sumber luar, tetapi tidak selalu menunjuk kerajaan terpusat yang sama seperti pada masa sebelumnya. Pada akhir abad ke-14, pusat-pusat lain di Sumatra dan Semenanjung Malaya makin menonjol.",
        L3: "Akhir Sriwijaya tidak memiliki satu tanggal runtuh yang disepakati secara universal. Sejarawan menelusuri perubahan jaringan politik dan komersialnya melalui catatan Tiongkok, sumber lokal, serta kebangkitan pelabuhan lain. Kekalahan atau tekanan militer pada akhir abad ke-14 mungkin menjadi salah satu faktor, tetapi prosesnya juga terkait dengan fragmentasi otoritas dan persaingan ekonomi. Karena itu, lebih akurat berbicara tentang transformasi bertahap jaringan Sriwijaya daripada kejatuhan seketika satu negara dengan batas tetap."
      },
      catatan: "Kemunduran Sriwijaya berlangsung bertahap dan tanggal akhirnya diperdebatkan; hindari menyatakan satu tahun sebagai akhir mutlak tanpa kualifikasi.",
      sumber: ["O.W. Wolters, The Fall of Srivijaya in Malay History", "Zhao Rugua, Zhu Fan Zhi (1225)", "Library of Congress, Indonesia: A Country Study"],
      kuis: { tanya: "Apa penjelasan paling tepat untuk kemunduran Sriwijaya?", pilihan: ["Satu kejadian tunggal yang mengakhiri semua perdagangan", "Proses bertahap akibat perubahan politik dan jaringan perdagangan", "Karena cengkih hanya tumbuh di Jawa", "Karena Majapahit berdiri sebelum Sriwijaya"], benar: 1, penjelasan: "Kemunduran Sriwijaya dipahami sebagai proses panjang dengan banyak faktor, bukan satu tanggal runtuh yang pasti." }
    },
  {
      id: "evt-021",
      judul: "Lamreh dan bukti awal penguasa Muslim di Sumatra",
      tahun: "1211",
      mulai: 1211,
      akhir: 1225,
      lokasi: { nama: "Lamreh, Aceh Besar, Aceh", lat: 5.62, lng: 95.52 },
      kategori: "agama",
      ringkas: "Nisan bertarikh menjadi petunjuk awal Islam di pesisir utara Sumatra.",
      cerita: {
        L1: "Di pesisir utara Sumatra, orang-orang berdagang melalui pelabuhan. Sebuah nisan dari Lamreh mencatat tahun 1211 dan dikaitkan dengan seorang penguasa Muslim bernama Sultan Sulaiman. Benda seperti nisan membantu kita mengetahui bahwa Islam sudah dikenal di kawasan ini. Namun, satu nisan saja tidak menjelaskan kapan semua penduduk mulai memeluk Islam.",
        L2: "Nisan bertarikh 1211 di kawasan Lamreh, Aceh, sering disebut sebagai salah satu bukti awal keberadaan penguasa Muslim di Nusantara. Wilayah pesisir utara Sumatra terhubung dengan jaringan pelayaran yang membawa pedagang, barang, dan gagasan ke Selat Malaka. Bukti epigrafi seperti nisan memberi petunjuk lebih langsung daripada cerita yang baru ditulis berabad-abad kemudian, tetapi tidak cukup untuk menyimpulkan bahwa seluruh kawasan telah menjadi Muslim pada waktu yang sama.",
        L3: "Lamreh di Aceh Besar penting bagi kajian awal Islam di Nusantara karena temuan nisan bertarikh 1211 yang dikaitkan dengan Sultan Sulaiman. Temuan ini ditempatkan dalam konteks pelabuhan-pelabuhan di pesisir utara Sumatra yang terhubung dengan perdagangan lintas Samudra Hindia. Bukti material perlu dibaca secara terbatas: nisan dapat menguatkan keberadaan individu atau komunitas Muslim, tetapi tidak otomatis membuktikan tanggal berdirinya sebuah kesultanan ataupun proses islamisasi seluruh penduduk. Kajian sejarah membandingkan epigrafi, catatan perjalanan, dan tradisi lokal untuk menyusun gambaran yang lebih hati-hati."
      },
      catatan: "Tarikh nisan dan identifikasi tokohnya perlu diperiksa melalui kajian epigrafi; jangan menyamakan bukti keberadaan Muslim dengan islamisasi seluruh penduduk.",
      sumber: ["Indonesia: A Country Study, Library of Congress, tabel kronologi", "Kajian arkeologi dan epigrafi Lamreh, Aceh"],
      kuis: { tanya: "Apa yang paling aman disimpulkan dari nisan Muslim bertarikh 1211 di Lamreh?", pilihan: ["Seluruh Sumatra telah memeluk Islam", "Sudah ada bukti keberadaan Muslim di kawasan itu", "Majapahit sudah berdiri", "Perdagangan laut berhenti"], benar: 1, penjelasan: "Nisan merupakan bukti keberadaan seorang atau komunitas Muslim, bukan bukti bahwa seluruh penduduk sudah memeluk Islam." }
    },
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
        L1: "Dulu di Jawa Timur ada kerajaan besar bernama Kadiri. Seorang pemuda bernama Ken Arok melawan raja Kadiri, yaitu Kertajaya. Pada tahun 1222, Ken Arok menang. Lalu ia mendirikan kerajaan baru bernama Singhasari. Kerajaan ini kelak menjadi sangat kuat. Kemenangan itu juga mengubah siapa yang memimpin wilayah tersebut: kekuasaan berpindah dari istana Kadiri ke penguasa Tumapel. Nama Singhasari kemudian penting dalam sejarah Jawa, terutama karena raja-rajanya membangun hubungan politik dengan wilayah di luar Jawa.",
        L2: "Pada 1222, Ken Arok mengalahkan Kertajaya, raja Kadiri, dalam pertempuran di dekat Ganter. Kemenangan itu menjatuhkan Kadiri dari posisi kerajaan terkuat di Jawa Timur dan membuka jalan bagi berdirinya Singhasari, dengan pusat di sekitar Malang sekarang. Ken Arok kemudian bergelar Rajasa. Singhasari mencapai puncaknya di bawah Raja Kertanagara, yang memerintah dari 1268 sampai 1292. Dinasti yang dirintis Ken Arok kelak juga melahirkan raja-raja Majapahit. Pergantian kekuasaan ini bukan sekadar pergantian nama kerajaan. Ia mengubah keseimbangan politik Jawa Timur dan menjadi awal dinasti yang kelak terhubung dengan Majapahit. Namun, kisah tentang kehidupan pribadi Ken Arok tidak semuanya dapat diperlakukan sebagai fakta yang pasti.",
        L3: "Menurut Pararaton, Ken Arok, tokoh berlatar rakyat biasa yang naik menjadi penguasa Tumapel, menggulingkan Kertajaya (Dandang Gendis) dari Kadiri dalam pertempuran Ganter pada 1222 M. Peristiwa itu menandai lahirnya Singhasari sekaligus dinasti Rajasa, garis keturunan yang kelak berlanjut hingga para raja Majapahit. Kisah Ken Arok sarat unsur legenda, seperti Keris Mpu Gandring beserta kutukannya, sehingga sejarawan berusaha memisahkan kerangka peristiwa politik dari bumbu mitos yang ditambahkan para penulis naskah di kemudian hari. Pembacaan semacam ini, yaitu menimbang siapa yang menulis, kapan, dan untuk kepentingan apa, adalah inti kerja seorang sejarawan. Meski kerangka politiknya cukup dikenal, sumber yang tersedia tidak memberi gambaran netral seperti laporan modern. Pararaton ditulis jauh sesudah masa Ken Arok dan memadukan silsilah, ingatan politik, serta unsur sastra. Karena itu, keberadaan perubahan dinasti lebih kuat sebagai kesimpulan daripada setiap detail dramatis dalam kisahnya."
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
      id: "evt-022",
      judul: "Catatan Tiongkok tentang jaringan dagang Sanfoqi",
      tahun: "1225",
      mulai: 1225,
      akhir: 1230,
      lokasi: { nama: "Selat Malaka dan Sumatra bagian timur", lat: -0.95, lng: 103.65 },
      kategori: "perdagangan",
      ringkas: "Catatan asing memperlihatkan pentingnya pelabuhan Sumatra dalam perdagangan Asia.",
      cerita: {
        L1: "Pada abad ke-13, pedagang dari Tiongkok mengenal pelabuhan-pelabuhan di sekitar Selat Malaka. Catatan mereka menyebut nama Sanfoqi, yang biasanya dihubungkan dengan warisan jaringan Sriwijaya. Nama dan wilayah yang dimaksud tidak selalu sama persis dengan batas negara modern. Catatan ini membantu kita melihat bahwa perdagangan laut menghubungkan banyak pulau dan kerajaan.",
        L2: "Teks Tiongkok Zhu Fan Zhi yang disusun Zhao Rugua sekitar 1225 memuat keterangan tentang negeri-negeri dagang Asia, termasuk Sanfoqi. Istilah itu kerap dikaitkan dengan Sriwijaya atau jaringan politik dan pelabuhan yang mewarisi pengaruhnya. Informasi semacam ini menunjukkan bahwa kawasan Sumatra dan Selat Malaka masih penting dalam perdagangan regional, meskipun kekuasaan Sriwijaya tidak lagi selalu terpusat dan stabil seperti pada masa sebelumnya.",
        L3: "Zhu Fan Zhi karya Zhao Rugua, sekitar 1225, merupakan sumber eksternal untuk memahami geografi perdagangan Asia pada awal abad ke-13. Sebutan Sanfoqi lazim dihubungkan dengan Sriwijaya, tetapi identifikasi politik dan cakupan wilayahnya diperdebatkan karena nama asing dapat merujuk pada pusat, konfederasi pelabuhan, atau jaringan dagang yang berubah. Sumber ini tidak boleh dibaca sebagai peta batas negara modern. Nilainya terletak pada kesaksian bahwa pelabuhan-pelabuhan Sumatra dan Selat Malaka tetap terlibat dalam pertukaran barang dan diplomasi, ketika pusat kekuasaan maritim mengalami perubahan."
      },
      catatan: "Identifikasi Sanfoqi tidak selalu sederhana; sebutan dalam sumber Tiongkok tidak otomatis menunjuk satu wilayah dengan batas tetap.",
      sumber: ["Zhao Rugua, Zhu Fan Zhi (1225)", "O.W. Wolters, The Fall of Srivijaya in Malay History"],
      kuis: { tanya: "Mengapa catatan Tiongkok penting untuk mempelajari perdagangan Nusantara?", pilihan: ["Karena selalu memberi batas negara yang tepat", "Karena memberi kesaksian dari luar tentang pelabuhan dan jaringan dagang", "Karena menggantikan semua sumber lokal", "Karena membuktikan semua pulau dikuasai satu raja"], benar: 1, penjelasan: "Catatan asing dapat melengkapi sumber lokal, tetapi nama tempat dan cakupan politiknya tetap harus ditafsirkan dengan hati-hati." }
    },
  {
      id: "evt-030",
      judul: "Perdagangan rempah menghubungkan Maluku dengan pelabuhan jauh",
      tahun: "abad ke-13–14",
      mulai: 1250,
      akhir: 1400,
      lokasi: { nama: "Kepulauan Maluku", lat: 0.70, lng: 127.50 },
      kategori: "perdagangan",
      ringkas: "Cengkih menghubungkan pulau-pulau penghasil rempah dengan jaringan niaga Asia.",
      cerita: {
        L1: "Cengkih tumbuh di Maluku dan menjadi barang dagangan yang sangat berharga. Pedagang datang dengan kapal untuk membeli rempah dan membawa barang lain sebagai tukaran. Perdagangan membuat pulau-pulau kecil terhubung dengan pelabuhan besar. Kekayaan ini juga membuat para penguasa berusaha menjaga pelabuhan dan jalur laut.",
        L2: "Pada abad ke-13 dan ke-14, cengkih dari Maluku merupakan komoditas bernilai tinggi dalam jaringan perdagangan Asia. Pedagang dan perantara menghubungkan pulau penghasil rempah dengan pusat-pusat niaga yang lebih jauh. Hubungan ini tidak selalu dikendalikan satu kerajaan; pengaruh dibentuk oleh pelabuhan, jaringan keluarga, kesepakatan dagang, dan kemampuan menjaga keamanan pelayaran.",
        L3: "Perdagangan cengkih Maluku pada abad ke-13–14 perlu dipahami sebagai jaringan berlapis yang melibatkan produsen lokal, perantara antarpulau, dan pedagang jarak jauh. Nilai rempah mendorong pertukaran komoditas dan diplomasi, tetapi bukti untuk setiap rute dan volume perdagangan tidak sama lengkapnya. Sumber kemudian sering menonjolkan kerajaan tertentu, padahal jaringan perdagangan biasanya bergantung pada banyak komunitas pelaut. Peristiwa ini menggambarkan proses ekonomi jangka panjang, bukan satu penaklukan atau satu tanggal pendirian kerajaan."
      },
      catatan: "Ini merupakan peristiwa/proses sejarah jangka panjang, bukan kejadian tunggal; rincian jaringan niaga berbeda menurut periode dan sumber.",
      sumber: ["Leonard Y. Andaya, The World of Maluku (1993)", "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Komoditas apa yang membuat Maluku terkenal dalam perdagangan jarak jauh?", pilihan: ["Cengkih", "Kapas", "Teh", "Karet"], benar: 0, penjelasan: "Cengkih merupakan komoditas bernilai tinggi yang menghubungkan Maluku dengan jaringan perdagangan Asia." }
    },
  {
      id: "evt-033",
      judul: "Peran pelabuhan dan sungai di Kalimantan timur",
      tahun: "abad ke-13–14",
      mulai: 1250,
      akhir: 1400,
      lokasi: { nama: "Muara Sungai Mahakam, Kalimantan Timur", lat: -0.55, lng: 117.25 },
      kategori: "perdagangan",
      ringkas: "Sungai Mahakam menghubungkan pedalaman Kalimantan dengan pelayaran pesisir.",
      cerita: {
        L1: "Di Kalimantan Timur, Sungai Mahakam menjadi jalan penting bagi manusia dan barang. Perahu dapat bergerak dari daerah pesisir ke pedalaman. Kerajaan dan pemukiman di dekat muara bisa berdagang dengan wilayah hulu dan kapal yang datang dari laut. Untuk masa awal Kutai Kartanegara, banyak kisah berasal dari tradisi lisan yang ditulis kemudian.",
        L2: "Posisi muara Mahakam memberi keuntungan bagi komunitas dan penguasa lokal karena menghubungkan dua lingkungan ekonomi: pedalaman sungai dan jalur pelayaran pesisir. Tradisi Kutai Kartanegara menempatkan perkembangan kerajaan di kawasan ini sekitar abad ke-14, tetapi tanggal pendiriannya tidak didukung dokumen sezaman yang setara dengan prasasti. Karena itu, fungsi geografis sungai dapat dibahas lebih yakin daripada rincian kisah pendirian kerajaan.",
        L3: "Sejarah politik Kalimantan timur pada abad pertengahan sulit direkonstruksi karena sumber tertulis awal terbatas. Namun, geografi Mahakam memperlihatkan bagaimana muara sungai dapat menjadi penghubung antara sumber daya pedalaman dan perdagangan maritim. Tradisi silsilah Kutai Kartanegara menyimpan ingatan lokal, tetapi tanggal serta tokoh pendiri perlu dibedakan dari bukti sezaman. Pendekatan yang hati-hati menggabungkan tradisi lisan, arkeologi, dan konteks ekonomi tanpa mengubah dugaan menjadi fakta pasti."
      },
      catatan: "Bagian ini membahas konteks geografis dan ekonomi; tanggal awal Kutai Kartanegara tetap bersandar pada tradisi yang disusun belakangan.",
      sumber: ["Tradisi lisan dan silsilah Kutai", "Kajian sejarah lokal Kalimantan Timur"],
      kuis: { tanya: "Apa keuntungan letak permukiman di muara Mahakam?", pilihan: ["Menghubungkan jalur sungai dan laut", "Memutus hubungan dengan pedalaman", "Menghindari semua perdagangan", "Membuat kapal tidak bisa berlabuh"], benar: 0, penjelasan: "Muara menghubungkan lalu lintas dari pedalaman dengan jalur pelayaran di laut." }
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
        L1: "Di Maluku ada pulau kecil bernama Ternate. Pulau ini punya harta berharga, yaitu cengkih. Cengkih dipakai sebagai bumbu dan obat. Pedagang dari tempat yang sangat jauh datang untuk membelinya. Menurut cerita turun-temurun, Kerajaan Ternate berdiri pada tahun 1257. Karena cengkih tumbuh terbatas di wilayah ini, hasil panen kecil pun dapat menarik pedagang. Perdagangan membawa barang dan kabar dari luar, sehingga pulau yang kecil tetap terhubung dengan dunia yang luas.",
        L2: "Menurut tradisi lisan, Kerajaan Ternate berdiri pada 1257 dengan Baab Mashur Malamo sebagai raja pertama. Ternate menjadi salah satu dari empat kerajaan besar Maluku yang disebut Maluku Kie Raha, bersama Tidore, Jailolo, dan Bacan. Kekayaan utama wilayah ini adalah cengkih, rempah yang pada masa itu diburu pedagang sampai ke Asia Selatan, Timur Tengah, dan Eropa. Nilai cengkih tidak hanya berasal dari rasanya, tetapi juga dari kelangkaan dan jarak pengangkutannya. Penguasa pelabuhan perlu menjaga keamanan, hubungan dengan pemasok, dan kesepakatan dengan pedagang agar keuntungan tidak hanya dinikmati pesaing.",
        L3: "Tarikh 1257 bersumber dari tradisi lisan dan kronik lokal yang disusun jauh sesudahnya, yang menyebut Baab Mashur Malamo sebagai kolano pertama Ternate. Bersama Tidore, Jailolo, dan Bacan, Ternate membentuk Maluku Kie Raha, persekutuan yang kekayaannya bertumpu pada keadaan yang mendekati monopoli alami: cengkih saat itu hanya tumbuh di segelintir pulau kecil di Maluku. Jaringan perdagangan rempah inilah yang berabad-abad kemudian menarik Portugis, Spanyol, dan Belanda ke timur Nusantara. Keunggulan Ternate tumbuh dari gabungan kondisi alam dan jaringan manusia, bukan semata-mata kekuatan militernya. Tarikh pendirian yang berasal dari tradisi perlu dibedakan dari bukti sezaman; perkembangan perdagangan rempah lebih mudah dipahami sebagai proses panjang daripada satu peristiwa tunggal."
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
        L1: "Raja Singhasari bernama Kertanagara ingin kerajaannya makin kuat. Pada tahun 1275 ia mengirim kapal dan pasukan ke Sumatra, ke wilayah yang disebut Melayu. Di sana ia ingin punya sahabat dan pengaruh. Perjalanan ini disebut Pamalayu. Perjalanan ke Sumatra membutuhkan kapal, bekal, dan waktu yang panjang. Karena itu, keputusan ini menunjukkan bahwa raja ingin memikirkan hubungan antarpulau, bukan hanya urusan di pusat kerajaan.",
        L2: "Pada 1275, Singhasari mengirim ekspedisi Pamalayu ke Sumatra, ke wilayah kerajaan Melayu di sekitar Jambi dan Dharmasraya. Tujuannya memperluas pengaruh dan menguasai jalur pelayaran Selat Malaka yang ramai. Pada 1286, Kertanagara mengirim arca Amoghapasa ke Dharmasraya sebagai tanda hubungan kedua kerajaan. Pamalayu memperlihatkan pentingnya jalur laut bagi strategi Singhasari. Hubungan dengan Melayu dapat membuka akses dagang dan sekutu, tetapi ekspedisi jauh juga membutuhkan sumber daya serta koordinasi yang tidak sedikit.",
        L3: "Menurut Pararaton, Kertanagara mengirim ekspedisi Pamalayu ke Melayu di Sumatra pada 1275. Sejarawan berbeda pendapat soal sifatnya: sebagian menafsirkannya sebagai penaklukan untuk menguasai Selat Malaka, sebagian lain sebagai aliansi diplomatik untuk membendung ancaman Mongol-Yuan yang saat itu meluas di Asia. Prasasti pada arca Amoghapasa (1286), yang dikirim Kertanagara ke Dharmasraya, memperlihatkan hubungan yang erat dan bercorak Buddha antara kedua pihak. Perdebatan ini mengajarkan satu hal: peristiwa yang sama bisa ditafsirkan berbeda, tergantung bukti mana yang ditekankan. Tujuan Pamalayu tidak dapat disederhanakan menjadi satu motif yang pasti. Pararaton memberi kronologi ekspedisi, sedangkan prasasti Amoghapasa tahun 1286 memberi bukti hubungan dengan Dharmasraya. Perbedaan jenis sumber itu memungkinkan tafsir diplomatik dan militer sama-sama dibahas, tanpa menganggap salah satunya sudah mutlak terbukti."
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
      id: "evt-023",
      judul: "Singhasari memperluas pengaruh ke Bali",
      tahun: "1284",
      mulai: 1284,
      akhir: 1290,
      lokasi: { nama: "Bali, wilayah kerajaan Bali", lat: -8.41, lng: 115.19 },
      kategori: "perang",
      ringkas: "Ekspansi Singhasari menunjukkan bahwa politik Jawa dan Bali saling terhubung.",
      cerita: {
        L1: "Pada masa Raja Kertanagara, Singhasari memperluas pengaruhnya ke luar Jawa. Tradisi sejarah menyebut adanya ekspedisi ke Bali sekitar 1284. Hubungan Jawa dan Bali tidak hanya berupa perang, tetapi juga perdagangan, agama, dan hubungan antarkeluarga penguasa. Rincian penaklukan itu tidak semuanya diketahui dengan pasti.",
        L2: "Ekspedisi Singhasari ke Bali sekitar 1284 sering dikaitkan dengan kebijakan luar negeri Raja Kertanagara. Penguasaan atau pengaruh atas Bali dapat memperkuat posisi Singhasari di jalur laut antara Jawa dan kepulauan timur. Namun, istilah 'penaklukan' perlu digunakan hati-hati karena sumber yang tersedia tidak memberi gambaran lengkap mengenai administrasi, perlawanan lokal, dan lamanya kontrol Singhasari.",
        L3: "Ekspedisi ke Bali yang ditempatkan sekitar 1284 memperlihatkan ambisi regional Singhasari di bawah Kertanagara. Dalam historiografi, peristiwa ini kerap dipahami sebagai bagian dari strategi mengamankan jalur maritim dan membangun hegemoni di luar Jawa. Akan tetapi, sumber-sumber yang tersisa tidak menjelaskan secara rinci bentuk pemerintahan setelah ekspedisi atau tingkat kontrol langsung yang berhasil dibangun. Peristiwa ini juga harus dibedakan dari penaklukan Bali oleh Majapahit pada 1343, yang terjadi dalam konteks politik berbeda."
      },
      catatan: "Tanggal dan rincian kampanye Singhasari di Bali tidak sama kuatnya dengan bukti untuk peristiwa yang memiliki prasasti sezaman; bedakan dari ekspedisi Majapahit 1343.",
      sumber: ["Pararaton", "M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Kajian sejarah Bali abad pertengahan"],
      kuis: { tanya: "Siapa raja Singhasari yang kebijakannya dikaitkan dengan ekspedisi ke Bali sekitar 1284?", pilihan: ["Hayam Wuruk", "Kertanagara", "Jayakatwang", "Parameswara"], benar: 1, penjelasan: "Ekspedisi tersebut biasanya dikaitkan dengan perluasan pengaruh Singhasari pada masa Kertanagara." }
    },
  {
      id: "evt-024",
      judul: "Utusan Yuan menuntut pengakuan dari Kertanagara",
      tahun: "1289",
      mulai: 1289,
      akhir: 1290,
      lokasi: { nama: "Singhasari, Jawa Timur", lat: -7.89, lng: 112.66 },
      kategori: "diplomasi",
      ringkas: "Penolakan terhadap tuntutan Yuan memperuncing hubungan dengan kekuatan Asia Timur.",
      cerita: {
        L1: "Dinasti Yuan di Tiongkok ingin kerajaan lain mengakui kekuasaannya. Pada 1289, utusan Yuan datang ke Singhasari untuk menyampaikan tuntutan kepada Raja Kertanagara. Menurut kisah yang dikenal, Kertanagara menolak tuntutan itu dengan keras. Kejadian ini memperburuk hubungan, tetapi serangan Yuan baru datang setelah Singhasari runtuh.",
        L2: "Pada 1289, utusan Dinasti Yuan yang dipimpin Meng Qi membawa tuntutan agar Kertanagara mengakui kedudukan kaisar Yuan. Tradisi sejarah menyebut Kertanagara mempermalukan atau melukai utusan tersebut sebagai bentuk penolakan. Tindakan itu menjadi bagian dari latar ketegangan diplomatik sebelum armada Yuan tiba di Jawa pada 1293. Namun, ekspedisi militer Yuan juga harus dipahami dalam konteks kebijakan kekaisaran dan perubahan politik setelah kematian Kertanagara.",
        L3: "Kedatangan utusan Yuan pada 1289 menunjukkan benturan antara diplomasi kekaisaran Mongol-Yuan dan kedaulatan Singhasari di bawah Kertanagara. Kisah tentang perlakuan terhadap utusan muncul dalam narasi sejarah kemudian dan rincian dramatisnya harus dibaca secara kritis. Misi itu mendahului ekspedisi Yuan ke Jawa pada 1293, tetapi bukan satu-satunya penyebab: sebelum armada tiba, Kertanagara telah terbunuh dan tatanan politik Jawa berubah. Episode ini menegaskan bahwa diplomasi regional, legitimasi penguasa, dan pergantian dinasti dapat saling memengaruhi."
      },
      catatan: "Kisah rinci perlakuan Kertanagara terhadap utusan perlu dibaca bersama sumber historiografi; jangan menyederhanakan ekspedisi Yuan sebagai akibat satu kejadian saja.",
      sumber: ["Pararaton", "Slamet Muljana, Menuju Puncak Kemegahan (Sejarah Kerajaan Majapahit)", "Kajian sejarah Dinasti Yuan dan Jawa"],
      kuis: { tanya: "Apa inti ketegangan antara Yuan dan Singhasari pada 1289?", pilihan: ["Sengketa cengkih di Maluku", "Tuntutan pengakuan politik dari Yuan yang ditolak Kertanagara", "Persaingan untuk menguasai Bali setelah 1343", "Perebutan takhta Melaka"], benar: 1, penjelasan: "Utusan Yuan membawa tuntutan pengakuan, dan penolakan Kertanagara menjadi bagian dari ketegangan diplomatik sebelum ekspedisi 1293." }
    },
  {
      id: "evt-031",
      judul: "Pusat-pusat pelabuhan Pasai berkembang di Selat Malaka",
      tahun: "abad ke-13–14",
      mulai: 1290,
      akhir: 1345,
      lokasi: { nama: "Samudra Pasai, Aceh Utara", lat: 5.15, lng: 97.20 },
      kategori: "perdagangan",
      ringkas: "Pasai menjadi simpul dagang dan pembelajaran Islam di kawasan Selat Malaka.",
      cerita: {
        L1: "Samudra Pasai berada di dekat jalur kapal Selat Malaka. Pedagang datang untuk membeli dan menjual barang. Di sana juga berkembang komunitas Muslim. Batu nisan dan catatan perjalanan membantu sejarawan mempelajari kehidupan kerajaan ini, meskipun tidak semua hal tentang awal berdirinya diketahui.",
        L2: "Pada abad ke-13 dan ke-14, Samudra Pasai berkembang sebagai pelabuhan penting di Selat Malaka. Nisan Sultan Malik al-Saleh bertarikh 1297 menjadi bukti kuat keberadaan penguasa Muslim. Catatan perjalanan kemudian, termasuk keterangan Ibnu Battuta pada 1345, menggambarkan Pasai sebagai pusat perdagangan dan kehidupan keagamaan. Kedudukan pelabuhan membantu penyebaran Islam, tetapi prosesnya berlangsung bertahap dan melibatkan banyak jaringan.",
        L3: "Samudra Pasai merupakan salah satu pusat politik dan komersial penting di pesisir utara Sumatra. Bukti epigrafi Malik al-Saleh (696 H/1297 M) dan catatan Ibnu Battuta pada 1345 memberi sudut pandang berbeda: yang pertama merupakan bukti material bertarikh, sedangkan yang kedua adalah laporan perjalanan. Bersama-sama, keduanya menunjukkan keterkaitan perdagangan, patronase penguasa, dan praktik Islam. Meski demikian, sumber ini tidak menetapkan satu tanggal pasti bagi awal islamisasi seluruh Sumatra atau Nusantara."
      },
      catatan: "Tahun 1297 pada nisan Malik al-Saleh adalah bukti penting, tetapi bukan tanggal pasti masuknya Islam ke seluruh Nusantara.",
      sumber: ["Nisan Sultan Malik al-Saleh (696 H/1297 M)", "Ibnu Battuta, Rihlah", "Muhammad Gade Ismail, Pasai dalam Perjalanan Sejarah"],
      kuis: { tanya: "Apa yang membuat Pasai menjadi pelabuhan penting?", pilihan: ["Letaknya dekat Selat Malaka dan jaringan dagang", "Jauh dari semua jalur laut", "Hanya menghasilkan cengkih", "Tidak menerima pedagang asing"], benar: 0, penjelasan: "Posisi di dekat Selat Malaka menghubungkan Pasai dengan jaringan perdagangan regional dan internasional." }
    },
  {
      id: "evt-007",
      judul: "Jayakatwang menjatuhkan Singhasari",
      tahun: "1292",
      mulai: 1292,
      akhir: 1293,
      lokasi: { nama: "Kadiri (Daha), Jawa Timur", lat: -7.82, lng: 112.01 },
      kategori: "perang",
      ringkas: "Kadiri bangkit dan Singhasari runtuh.",
      cerita: {
        L1: "Kadiri dulu dikalahkan Ken Arok, lalu menjadi bawahan Singhasari. Pada tahun 1292, raja Kadiri yang bernama Jayakatwang memberontak. Pasukannya menyerang Singhasari dari dua arah. Raja Kertanagara tewas, dan Singhasari runtuh. Jayakatwang lalu menjadi raja di Kadiri. Runtuhnya Singhasari membuka jalan bagi perubahan besar, tetapi kemenangan Jayakatwang tidak berlangsung lama. Raden Wijaya masih bertahan dan kemudian memanfaatkan kedatangan pasukan Mongol.",
        L2: "Pada 1292, Jayakatwang, penguasa Kadiri yang menjadi bawahan Singhasari, memberontak terhadap Kertanagara. Pasukannya menyerang dari dua arah, utara dan selatan. Kertanagara hanya menyadari serangan dari utara, sehingga ia mengutus menantunya, Raden Wijaya, untuk menghadapinya. Serangan itu berhasil ditahan, tetapi pasukan dari selatan tidak terlihat dan menyerbu ibu kota yang tidak siap. Kertanagara tewas, Singhasari runtuh, dan Jayakatwang menghidupkan kembali Kadiri sebagai kerajaan. Raden Wijaya akhirnya menyerah, diampuni, dan diberi tanah di Tarik, tempat Majapahit kelak lahir. Sebagian ahli menduga dendam lama ikut berperan, sebab leluhur Jayakatwang, Kertajaya, dikalahkan Ken Arok pada 1222. Strategi dua arah memecah perhatian pertahanan Singhasari. Setelah Kertanagara tewas, Jayakatwang memang memulihkan Kadiri, tetapi ia tidak berhasil membangun kekuasaan yang bertahan lama karena ancaman baru segera muncul.",
        L3: "Kadiri, kerajaan yang ditaklukkan Ken Arok pada 1222, berada di bawah Singhasari ketika penguasanya, Jayakatwang, memberontak pada 1292 atas saran Arya Wiraraja. Ia menyerang dari dua arah: serangan dari utara menarik perhatian Kertanagara, yang hanya mengutus Raden Wijaya menghadapinya, sementara pasukan selatan di bawah Kebo Mundarang menyerbu ibu kota Kutaraja yang lengah. Prasasti Gajah Mada (1351) mencatat runtuhnya Singhasari pada bulan Jyestha 1214 Saka, kira-kira April sampai Juni 1292. Prasasti Kudadu mencatat bahwa Ardharaja, putra Jayakatwang yang tinggal di Singhasari, mula-mula bergabung dengan pasukan Wijaya lalu berpihak pada Kadiri setelah ibu kota jatuh. Peristiwa ini menunjukkan bahwa runtuhnya sebuah kerajaan besar sering bukan hanya soal kekuatan militer, tetapi juga soal perhitungan, kesetiaan yang berpindah, dan kelengahan, dan itulah yang membuka jalan bagi lahirnya Majapahit pada 1293. Kisah serangan dua arah terutama diketahui melalui tradisi tekstual yang harus dibandingkan secara kritis. Peristiwa ini menjelaskan kerentanan Singhasari ketika perhatian dan pasukannya terpecah, tetapi tidak cukup untuk menyimpulkan bahwa satu sebab saja menjatuhkan kerajaan. Konstelasi elite, strategi militer, dan aliansi setelah kematian Kertanagara turut menentukan hasil berikutnya."
      },
      catatan: "Rincian serangan bersumber dari naskah Jawa (Pararaton dan kidung) yang ditulis jauh sesudahnya, serta dari prasasti Kudadu dan prasasti Gajah Mada. Catatan Tiongkok (Yuan Shi) memberi urutan peristiwa yang tidak selalu cocok dengan naskah Jawa, dan nasib akhir Jayakatwang pun dicatat berbeda-beda.",
      sumber: [
        "Prasasti Gajah Mada (1351)",
        "Prasasti Kudadu (1294)",
        "Pararaton (naskah Jawa)",
        "Nagarakretagama (1365)",
        "Yuan Shi (sejarah resmi Dinasti Yuan)"
      ],
      kuis: {
        tanya: "Bagaimana pasukan Kadiri menyerang Singhasari pada 1292?",
        pilihan: [
          "Hanya dari laut, dengan armada besar",
          "Dari dua arah: serangan utara menarik perhatian, pasukan selatan menyerbu ibu kota",
          "Lewat perundingan, tanpa pertempuran",
          "Bersama pasukan Mongol dari Tiongkok"
        ],
        benar: 1,
        penjelasan: "Kadiri menyerang dari utara dan selatan. Kertanagara hanya menyadari serangan utara, sehingga pasukan selatan bisa menyerbu ibu kota yang tidak siap. Pasukan Mongol baru datang pada 1293, dan Jayakatwang justru menjadi sasaran mereka."
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
        L1: "Pada tahun 1293, banyak kapal dari negeri Tiongkok datang ke Jawa. Mereka adalah pasukan bangsa Mongol. Seorang bangsawan cerdik bernama Raden Wijaya memakai bantuan mereka lebih dulu, lalu mengusir mereka. Sesudah itu, Raden Wijaya mendirikan kerajaan baru bernama Majapahit. Setelah Jayakatwang kalah, Raden Wijaya tidak langsung menghadapi semua masalah dengan mudah. Ia harus memanfaatkan keadaan dan memastikan pasukan Mongol tidak menetap sebagai penguasa di Jawa.",
        L2: "Kaisar Mongol dari Dinasti Yuan, Kubilai Khan, mengirim armada besar ke Jawa pada awal 1293. Saat armada itu tiba, Kertanagara sudah tewas diserang Jayakatwang dari Kadiri. Raden Wijaya, menantu Kertanagara, mengajak pasukan Mongol mengalahkan Jayakatwang. Setelah itu ia berbalik menyerang sekutunya sehingga pasukan Mongol terpaksa pulang. Wijaya lalu mendirikan Majapahit di daerah Tarik, Jawa Timur. Menurut Pararaton, nama itu berasal dari buah maja yang rasanya pahit. Peristiwa ini memperlihatkan bahwa sekutu dalam perang belum tentu menjadi sekutu jangka panjang. Raden Wijaya menggunakan kepentingan Mongol untuk mengalahkan Jayakatwang, lalu mengubah keadaan ketika pasukan asing lengah.",
        L3: "Ekspedisi Mongol-Yuan 1293 semula dimaksudkan untuk menghukum Kertanagara, yang pada 1289 mempermalukan utusan Kubilai Khan, Meng Qi. Ketika armada itu tiba, Kertanagara telah gugur dalam pemberontakan Jayakatwang. Raden Wijaya memanfaatkan pasukan Yuan untuk menyingkirkan Jayakatwang, lalu menyerang balik sekutunya yang lengah dan memaksa mereka mundur. Majapahit lahir dari perhitungan politik ini: sebuah aliansi taktis yang berakhir dengan pengkhianatan. Tanggal tepat penobatan Wijaya diperdebatkan, tetapi tahun 1293 diterima luas. Lahirnya Majapahit merupakan hasil dari pergantian kekuasaan yang cepat: runtuhnya Singhasari, kemenangan singkat Jayakatwang, lalu mundurnya pasukan Yuan. Rincian jumlah pasukan, urutan taktis, dan tanggal tertentu perlu dibaca dengan membandingkan sumber Jawa dan Tiongkok, yang tidak selalu menyajikan cerita sama."
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
      id: "evt-025",
      judul: "Raden Wijaya dinobatkan sebagai Kertarajasa",
      tahun: "1294",
      mulai: 1294,
      akhir: 1300,
      lokasi: { nama: "Trowulan, Jawa Timur", lat: -7.56, lng: 112.37 },
      kategori: "politik",
      ringkas: "Penguasa baru mengubah kemenangan militer menjadi dinasti dan pemerintahan.",
      cerita: {
        L1: "Setelah mengalahkan pasukan Yuan dan menyingkirkan Jayakatwang, Raden Wijaya membangun kerajaan baru. Ia kemudian dikenal sebagai Kertarajasa Jayawardhana. Majapahit menjadi pusat kekuasaan baru di Jawa Timur. Mendirikan kerajaan bukan hanya soal menang perang; penguasa juga perlu mengatur wilayah dan mendapatkan dukungan pejabat.",
        L2: "Raden Wijaya mengubah keberhasilan politik dan militernya menjadi pemerintahan Majapahit pada awal 1290-an. Ia memakai gelar Kertarajasa Jayawardhana dan membangun legitimasi melalui hubungan keluarga, pembagian kedudukan kepada pendukung, serta penataan pusat kerajaan. Tahun pendirian Majapahit kadang disebut 1293 dan penobatan ditempatkan sekitar 1294, bergantung pada cara sumber ditafsirkan.",
        L3: "Konsolidasi Raden Wijaya setelah krisis 1292–1293 menandai peralihan dari koalisi perang menjadi dinasti baru. Gelar Kertarajasa Jayawardhana menyatakan legitimasi kerajaan, sedangkan dukungan elite lokal dan pengelolaan bekas jaringan Singhasari membantu Majapahit bertahan. Kronologi pendirian dan penobatan tidak selalu dituliskan seragam dalam sumber modern; karena itu, tahun 1293 lazim dipakai untuk lahirnya Majapahit dan 1294 kadang digunakan untuk penobatan atau penguatan pemerintahannya."
      },
      catatan: "Tahun berdirinya Majapahit sering disebut 1293; tahun 1294 dapat merujuk pada penobatan atau konsolidasi awal menurut kronologi yang digunakan.",
      sumber: ["Pararaton", "Nagarakretagama", "Poesponegoro & Notosusanto (ed.), Sejarah Nasional Indonesia II"],
      kuis: { tanya: "Apa gelar yang dipakai Raden Wijaya setelah menjadi raja Majapahit?", pilihan: ["Kertarajasa Jayawardhana", "Kertanagara", "Hayam Wuruk", "Adityawarman"], benar: 0, penjelasan: "Raden Wijaya dikenal sebagai Kertarajasa Jayawardhana setelah mendirikan dinasti Majapahit." }
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
        L1: "Di ujung utara Pulau Sumatra ada kerajaan bernama Samudra Pasai. Letaknya di jalur kapal antara India dan Tiongkok, jadi banyak pedagang singgah di sana. Rajanya, Malik al-Saleh, beragama Islam. Batu nisan di makamnya bertanggal tahun 1297. Karena itu Pasai dianggap salah satu kerajaan Islam pertama di Nusantara. Pelabuhan yang aman dan terbuka membuat pedagang punya alasan untuk singgah lagi. Dari pertemuan itu, agama, bahasa, pengetahuan, dan kebiasaan baru dapat menyebar secara bertahap.",
        L2: "Samudra Pasai berada di pesisir utara Sumatra, di wilayah Aceh sekarang. Nisan makam Sultan Malik al-Saleh bertarikh 696 Hijriah, atau 1297 Masehi, dan menjadi salah satu bukti tertulis tertua tentang kerajaan Islam di Nusantara. Pasai ramai karena terletak di jalur Selat Malaka, tempat pedagang dari India, Arab, dan Tiongkok bertemu. Di sinilah Islam menyebar bersama perdagangan. Islamisasi Pasai berkaitan erat dengan perdagangan, hubungan keluarga, dan kehadiran ulama. Perubahan agama penguasa dapat memperkuat hubungan dengan jaringan Muslim, tetapi proses di masyarakat tentu tidak terjadi sekaligus atau dengan cara yang sama bagi semua orang.",
        L3: "Nisan Malik al-Saleh bertarikh 696 H/1297 M menjadi penanda penting berdirinya kesultanan Islam Samudra Pasai. Marco Polo, yang singgah di pesisir utara Sumatra pada 1292, menyebut Ferlec (Perlak) sudah Muslim sementara Samara (diduga Samudra) belum, yang sering ditafsirkan sebagai tanda bahwa proses islamisasi sedang berlangsung di kawasan itu. Pada 1345, Ibnu Battuta mengunjungi Pasai dan menggambarkan istananya sebagai pusat kajian fikih mazhab Syafi'i. Pasai menjadi simpul perdagangan Selat Malaka sekaligus titik tolak penyebaran Islam ke wilayah lain di Nusantara. Bukti seperti nisan Malik al-Saleh membantu menetapkan bahwa Islam telah berakar di lingkungan penguasa Pasai pada akhir abad ke-13. Namun, satu nisan tidak membuktikan kapan seluruh penduduk memeluk Islam. Catatan pelancong kemudian memberi gambaran tambahan tentang kedudukan Pasai sebagai pusat perdagangan dan pembelajaran agama."
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
      id: "evt-008",
      judul: "Kutai Kartanegara berdiri di muara Mahakam",
      tahun: "1300 (menurut tradisi)",
      mulai: 1300,
      akhir: 1400,
      lokasi: { nama: "Kutai Lama, muara Mahakam, Kalimantan Timur", lat: -0.55, lng: 117.25 },
      kategori: "politik",
      ringkas: "Kerajaan sungai di pesisir timur Kalimantan.",
      cerita: {
        L1: "Di Pulau Kalimantan ada sungai besar bernama Mahakam. Di dekat muaranya berdiri Kerajaan Kutai Kartanegara. Menurut cerita turun-temurun, raja pertamanya adalah Aji Batara Agung Dewa Sakti, dan kerajaan itu berdiri pada tahun 1300. Sungai menjadi jalan utama untuk bepergian dan berdagang. Orang dapat menggunakan sungai untuk membawa hasil hutan, makanan, dan barang dagangan. Karena itu, letak dekat muara membantu penguasa berhubungan dengan penduduk pedalaman dan pedagang laut.",
        L2: "Menurut tradisi lisan Kutai, Kerajaan Kutai Kartanegara berdiri sekitar 1300 di Kutai Lama, dekat muara Sungai Mahakam di pesisir timur Kalimantan. Raja pertamanya adalah Aji Batara Agung Dewa Sakti, yang menurut tradisi dianggap memiliki kekuatan gaib sehingga dihormati masyarakat pesisir. Letak di muara memberi kerajaan ini dua jalur sekaligus: sungai yang menuju pedalaman dan laut yang menuju pelabuhan lain. Kutai Kartanegara bukan satu-satunya kerajaan di wilayah itu, sebab kerajaan Hindu yang lebih tua, Kutai Martadipura, sudah ada jauh sebelumnya. Kerajaan di muara dapat menjadi perantara antara komunitas pedalaman dan pasar pesisir. Keuntungan ini bergantung pada kemampuan menjaga jalur sungai, membangun hubungan dengan kelompok setempat, serta mengelola perdagangan yang bergerak mengikuti musim dan kondisi alam.",
        L3: "Tarikh 1300 dan kisah Aji Batara Agung Dewa Sakti berasal dari tradisi lisan dan silsilah Kutai yang disusun jauh sesudahnya, sehingga lebih tepat dibaca sebagai perkiraan, bukan bukti sezaman. Kutai Lama terletak di muara Mahakam, dan posisi inilah yang membuat kerajaan ini hidup dari lalu lintas sungai dan laut. Kutai Kartanegara berdampingan dengan Kutai Martadipura, kerajaan Hindu yang jauh lebih tua dan dikenal lewat prasasti yupa dari sekitar abad ke-4. Keduanya baru bersatu berabad-abad kemudian. Sebagian penafsir juga menghubungkan nama 'Tanjung Kute' dalam daftar wilayah Nagarakretagama (1365) dengan Kutai, tetapi identifikasi itu perlu diperiksa lagi. Kasus Kutai memperlihatkan masalah umum dalam sejarah Nusantara: wilayah yang sedikit meninggalkan naskah sezaman sering harus direkonstruksi dari tradisi lisan, dan itu perlu dibaca dengan hati-hati. Sejarah awal Kutai Kartanegara perlu dibedakan dari Kutai Martadipura yang lebih tua dan dikenal melalui prasasti yupa. Tarikh sekitar 1300 serta tokoh pendirinya berasal dari tradisi kemudian, sehingga rekonstruksi awal kerajaan harus menyatakan tingkat kepastian dan tidak mencampur dua entitas sejarah tersebut."
      },
      catatan: "Seluruh kisah awal Kutai Kartanegara bertumpu pada tradisi lisan dan silsilah yang disusun belakangan. Tahun 1300 dan sosok Aji Batara Agung Dewa Sakti tidak didukung dokumen sezaman. Kutai Kartanegara juga tidak sama dengan Kutai Martadipura yang jauh lebih tua.",
      sumber: [
        "Tradisi lisan dan silsilah Kutai",
        "Nagarakretagama (1365), daftar wilayah Kalimantan ('Tanjung Kute': identifikasi perlu diperiksa)",
        "Kajian sejarah lokal: 'Silsilah dan Perkembangan Kerajaan Kutai Kartanegara (1300-1732)', jurnal FKIP Universitas Mulawarman (periksa ulang)"
      ],
      kuis: {
        tanya: "Di dekat muara sungai apa Kutai Kartanegara berdiri?",
        pilihan: ["Sungai Kapuas", "Sungai Barito", "Sungai Mahakam", "Sungai Musi"],
        benar: 2,
        penjelasan: "Sungai Mahakam. Letak di muara memberi akses ke jalur sungai menuju pedalaman dan jalur laut. Tahun 1300 sendiri berasal dari tradisi lisan, bukan dokumen sezaman."
      }
    },
  {
      id: "evt-034",
      judul: "Hubungan antarpulau dalam jaringan pengaruh Majapahit",
      tahun: "abad ke-14",
      mulai: 1300,
      akhir: 1400,
      lokasi: { nama: "Nusantara", lat: -2.50, lng: 118.00 },
      kategori: "diplomasi",
      ringkas: "Pengaruh politik tersebar melalui pelayaran, upeti, persekutuan, dan hubungan elite.",
      cerita: {
        L1: "Pada abad ke-14, Majapahit menjalin hubungan dengan banyak wilayah di Nusantara. Hubungan itu tidak selalu berarti pasukan Majapahit tinggal dan memerintah di setiap tempat. Ada daerah yang berdagang, memberi upeti, atau menjadi sekutu. Kapal dan utusan membantu menghubungkan kerajaan yang berjauhan.",
        L2: "Sumber istana Majapahit menyebut banyak daerah di luar Jawa dalam lingkup pengaruhnya. Hubungan tersebut dapat berupa pengiriman barang, pengakuan simbolis, hubungan diplomatik, atau operasi militer. Bentuk hubungan berbeda-beda menurut wilayah dan waktu. Karena itu, daftar daerah dalam naskah tidak boleh langsung dibaca sebagai batas negara modern dengan birokrasi yang seragam.",
        L3: "Konsep jaringan kekuasaan Majapahit lebih tepat dipahami sebagai spektrum hubungan daripada teritori homogen. Nagarakretagama dan tradisi kronik menyajikan gambaran prestise kerajaan, tetapi perlu dibandingkan dengan bukti lokal dan konteks perdagangan. Beberapa wilayah mungkin terhubung melalui upeti atau diplomasi, sementara yang lain mengalami operasi militer atau berada di luar kontrol rutin. Membaca istilah 'bawahan' secara kritis membantu menghindari proyeksi model negara modern ke dunia politik abad ke-14."
      },
      catatan: "Ini merupakan ringkasan proses, bukan satu ekspedisi tertentu. Sifat hubungan setiap daerah harus diperiksa secara terpisah.",
      sumber: ["Nagarakretagama (1365)", "Pararaton", "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Apakah semua daerah yang disebut dalam lingkup Majapahit pasti diperintah langsung?", pilihan: ["Ya, selalu dengan birokrasi yang sama", "Tidak; hubungannya dapat berupa pengaruh, upeti, diplomasi, atau kendali", "Semua adalah koloni Eropa", "Tidak ada daerah luar Jawa yang disebut"], benar: 1, penjelasan: "Hubungan Majapahit dengan daerah lain beragam dan tidak selalu sama dengan pemerintahan langsung." }
    },
  {
      id: "evt-026",
      judul: "Jayanegara naik takhta Majapahit",
      tahun: "1309",
      mulai: 1309,
      akhir: 1316,
      lokasi: { nama: "Majapahit, Jawa Timur", lat: -7.56, lng: 112.37 },
      kategori: "politik",
      ringkas: "Pergantian raja menguji kesetiaan elite yang membantu pendirian Majapahit.",
      cerita: {
        L1: "Pada 1309, Jayanegara menggantikan ayahnya, Raden Wijaya, sebagai raja Majapahit. Ia masih muda ketika naik takhta. Para pejabat dan pemimpin daerah harus menerima penguasa baru. Masa pemerintahannya menghadapi beberapa pemberontakan, yang menunjukkan bahwa kerajaan baru belum sepenuhnya stabil.",
        L2: "Jayanegara menjadi raja setelah wafatnya Raden Wijaya pada 1309. Pergantian ini terjadi ketika Majapahit masih mengandalkan elite yang punya kekuatan dan kepentingan sendiri. Sejumlah pemberontakan pada masa pemerintahannya memperlihatkan ketegangan antara istana dan tokoh daerah maupun pejabat senior. Stabilitas kerajaan karena itu tidak hanya bergantung pada garis keturunan, tetapi juga pada kemampuan penguasa menjaga dukungan politik.",
        L3: "Pemerintahan Jayanegara (1309–1328) merupakan fase konsolidasi yang penuh konflik bagi Majapahit. Sebagai penerus pendiri kerajaan, ia harus mengelola jaringan elite yang sebelumnya berperan dalam kemenangan Raden Wijaya. Pemberontakan yang dicatat tradisi kronik dapat mencerminkan rivalitas, ketidakpuasan atas distribusi jabatan, dan persoalan legitimasi, meskipun rincian setiap episode tidak selalu dapat diverifikasi secara independen. Periode ini mengingatkan bahwa pembentukan kerajaan baru adalah proses yang berlangsung lama setelah kemenangan pendirian."
      },
      catatan: "Kisah konflik internal Jayanegara terutama diketahui melalui kronik yang ditulis kemudian; rincian motif tiap pemberontakan tidak selalu dapat dipastikan.",
      sumber: ["Pararaton", "Nagarakretagama", "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Siapa yang menggantikan Raden Wijaya sebagai raja Majapahit?", pilihan: ["Jayanegara", "Hayam Wuruk", "Kertanagara", "Gajah Mada"], benar: 0, penjelasan: "Jayanegara naik takhta setelah Raden Wijaya wafat pada 1309." }
    },
  {
      id: "evt-016",
      judul: "Pemberontakan Nambi di Lumajang",
      tahun: "1316",
      mulai: 1316,
      akhir: 1330,
      lokasi: { nama: "Lumajang, Jawa Timur", lat: -8.13, lng: 113.22 },
      kategori: "perang",
      ringkas: "Patih pertama Majapahit gugur akibat intrik politik istana.",
      cerita: {
        L1: "Nambi adalah pahlawan yang ikut mendirikan Majapahit. Suatu hari ayahnya meninggal, lalu Nambi pulang ke Lumajang. Di istana, ada pejabat jahat bernama Mahapati yang menyebar fitnah bahwa Nambi hendak memberontak. Raja Jayanegara percaya lalu mengirim pasukan. Nambi gugur dalam pertempuran di Lamajang (Lumajang). Nambi harus memilih antara memenuhi panggilan istana dan melindungi keluarga serta wilayahnya. Dalam keadaan seperti ini, setiap pilihan dapat dibaca sebagai tanda kesetiaan oleh satu pihak dan pembangkangan oleh pihak lain.",
        L2: "Pada 1316, Patih Nambi memohon izin pulang ke Lamajang (Lumajang) karena ayahnya, Arya Wiraraja, wafat. Kesempatan ini dimanfaatkan oleh tokoh pembisik istana, Mahapati, untuk memfitnah Nambi seolah-olah sedang menghimpun pasukan untuk memberontak kepada Raja Jayanegara. Terperdaya oleh asutan tersebut, Jayanegara memimpin armada pasukan menyerang benteng Nambi. Peristiwa ini mengakhiri hidup salah satu pengikut setia Raden Wijaya. Konflik Nambi memperlihatkan betapa rapuhnya hubungan elite Majapahit setelah pergantian raja. Kematian anggota keluarga, jarak dari pusat, dan kecurigaan politik dapat berubah menjadi konflik bersenjata ketika tidak ada penyelesaian yang dipercaya kedua pihak.",
        L3: "Menurut Pararaton, pemberontakan Nambi (1316) merupakan puncak intrik Mahapati, seorang pejabat istana yang secara sistematis menyingkirkan para pendiri Majapahit (seperti Ranggalawe, Sora, dan Nambi) demi mengincar jabatan patih. Nambi memperkuat benteng pertahanannya di Lamajang setelah mengabarkan duka kematian ayahnya, Arya Wiraraja. Pasukan kerajaan yang dikirim Jayanegara mengepung benteng Gending dan Datar, mengakhiri perlawanan Nambi. Kejadian ini mencerminkan kerapuhan konsolidasi politik Majapahit awal, di mana persaingan pahlawan veteran dan penguasa baru sering berujung pada pertumpahan darah. Pemberontakan Nambi terutama direkonstruksi melalui sumber naratif yang menempatkannya dalam rangkaian konflik elite awal Majapahit. Sumber tersebut membantu menyusun kronologi, tetapi motif pribadi dan detail strategi tidak selalu dapat diverifikasi secara independen; penjelasan sebaiknya membedakan apa yang diceritakan naskah dari tafsir tentang perebutan pengaruh."
      },
      catatan: "Kisah fitnah Mahapati terutama bersumber dari Pararaton. Sejarawan modern menilai perlawanan Nambi juga berakar pada ketegangan otonomi wilayah Lamajang Tigang Juru yang dulunya dihadiahkan Raden Wijaya kepada Arya Wiraraja.",
      sumber: [
        "Pararaton (naskah Jawa)",
        "Nagarakretagama (1365)",
        "Slamet Muljana, Menuju Puncak Kemegahan: Sejarah Kerajaan Majapahit"
      ],
      kuis: {
        tanya: "Apa yang memicu pertempuran antara pasukan Majapahit dan Nambi pada 1316?",
        pilihan: [
          "Nambi menyerang istana Trowulan secara mendadak",
          "Fitnah dari pejabat Mahapati bahwa Nambi berniat memberontak",
          "Nambi menolak membayar upeti cengkih",
          "Nambi bersekutu dengan pasukan Mongol"
        ],
        benar: 1,
        penjelasan: "Menurut Pararaton, Mahapati memfitnah Nambi yang sedang berada di Lumajang untuk melayat ayahnya, seolah-olah Nambi menyusun kekuatan untuk menumbangkan raja."
      }
    },
  {
      id: "evt-009",
      judul: "Pemberontakan Ra Kuti dan penyelamatan raja",
      tahun: "1319",
      mulai: 1319,
      akhir: 1330,
      lokasi: { nama: "Keraton Majapahit, Trowulan", lat: -7.56, lng: 112.37 },
      kategori: "perang",
      ringkas: "Seorang pengawal istana menyelamatkan raja.",
      cerita: {
        L1: "Pada tahun 1319, seorang bangsawan bernama Ra Kuti memberontak di Majapahit dan merebut istana. Raja Jayanegara hampir tertangkap. Seorang pengawal istana bernama Gajah Mada membawa sang raja bersembunyi di sebuah desa. Lalu Gajah Mada kembali ke ibu kota dan memimpin perlawanan sampai Ra Kuti kalah. Karena jasanya, Gajah Mada naik jabatan dan kelak menjadi tokoh penting Majapahit. Menyelamatkan raja penting karena pemberontak yang menguasai istana belum tentu menguasai seluruh kerajaan. Selama raja tetap hidup, masih ada peluang untuk mengumpulkan pendukung dan merebut kembali kekuasaan.",
        L2: "Pada 1319, Ra Kuti memberontak terhadap Raja Jayanegara dan merebut istana serta ibu kota Majapahit. Sang raja nyaris tertangkap, tetapi Gajah Mada, seorang perwira pengawal istana, membawanya keluar dan bersembunyi di desa Badander. Gajah Mada kemudian kembali ke ibu kota untuk menilai keadaan. Ia mendapati bahwa pemberontakan itu tidak didukung para bangsawan maupun rakyat, lalu memimpin perlawanan yang menghancurkan pasukan Ra Kuti. Jayanegara kembali ke takhta dan Gajah Mada dinaikkan jabatannya. Peristiwa inilah yang membuka jalan kariernya. Pemberontakan Ra Kuti menunjukkan bahwa penguasaan istana tidak otomatis berarti legitimasi penuh. Kesetiaan prajurit dan kemampuan menyembunyikan raja menjadi faktor penting dalam menentukan apakah pemerintahan dapat dipulihkan.",
        L3: "Pemberontakan Ra Kuti pada 1319 adalah salah satu krisis terberat pada masa pemerintahan Jayanegara. Ra Kuti merebut istana, dan sang raja lolos dengan bantuan Gajah Mada beserta pasukan pengawalnya, lalu bersembunyi di Badander. Gajah Mada kembali ke ibu kota untuk menilai suasana, menyimpulkan bahwa pemberontakan itu minim dukungan bangsawan dan rakyat, lalu memimpin perlawanan yang menumpas Ra Kuti. Setelah itu jabatannya dinaikkan. Kisah ini dikenal lewat naskah yang disusun belakangan dan kajian sejarawan modern, sehingga rincian tindakan Gajah Mada tidak bisa dipastikan. Perlu dicatat pula bahwa Jayanegara sendiri dibunuh pada 1328 oleh tabibnya, Tanca, yang langsung dihukum mati oleh Gajah Mada tanpa penyelidikan menyeluruh, sehingga motif pembunuhan itu masih diperdebatkan. Episode penyelamatan Jayanegara dikenal melalui tradisi kronik yang menonjolkan kecerdikan Gajah Mada. Cerita itu berguna untuk memahami bagaimana ingatan politik menghubungkan kesetiaan, keberanian, dan legitimasi raja, tetapi detail dramatisnya perlu dipisahkan dari bukti independen yang tersedia."
      },
      catatan: "Kisah Ra Kuti dan peran Gajah Mada terutama dikenal dari naskah Jawa seperti Pararaton dan dari kajian modern. Tidak ada catatan sezaman yang rinci, dan letak desa Badander belum dipastikan. Kematian Jayanegara pada 1328 juga masih diperdebatkan.",
      sumber: [
        "Pararaton (naskah Jawa)",
        "G. Coedès, The Indianized States of Southeast Asia",
        "Slamet Muljana, kajian sejarah Majapahit (periksa judul dan halaman)"
      ],
      kuis: {
        tanya: "Apa yang dilakukan Gajah Mada saat Ra Kuti merebut istana pada 1319?",
        pilihan: [
          "Ia bergabung dengan Ra Kuti",
          "Ia menyerahkan istana tanpa perlawanan",
          "Ia melarikan diri sendirian ke Sumatra",
          "Ia membawa raja bersembunyi, lalu kembali dan memimpin perlawanan"
        ],
        benar: 3,
        penjelasan: "Gajah Mada membawa Jayanegara bersembunyi, kembali ke ibu kota untuk menilai keadaan, lalu memimpin perlawanan yang mengalahkan Ra Kuti."
      }
    },
  {
      id: "evt-027",
      judul: "Wafatnya Jayanegara dan pergantian kekuasaan",
      tahun: "1328",
      mulai: 1328,
      akhir: 1330,
      lokasi: { nama: "Majapahit, Jawa Timur", lat: -7.56, lng: 112.37 },
      kategori: "politik",
      ringkas: "Kematian raja tanpa putra membuat suksesi Majapahit berubah arah.",
      cerita: {
        L1: "Jayanegara wafat pada 1328. Ia tidak meninggalkan putra yang dapat langsung menggantikannya. Setelah itu, Tribhuwana Tunggadewi, saudara perempuannya, kemudian memerintah Majapahit. Pergantian ini penting karena kerajaan harus menjaga ketertiban saat raja meninggal.",
        L2: "Kematian Jayanegara pada 1328 menimbulkan persoalan suksesi karena ia tidak meninggalkan pewaris laki-laki langsung. Pemerintahan kemudian beralih kepada Tribhuwana Tunggadewi, putri Raden Wijaya dan Gayatri Rajapatni. Peralihan tersebut menunjukkan peran perempuan dalam politik kerajaan Jawa, sekaligus memperlihatkan pentingnya legitimasi dinasti dan dukungan elite untuk menjaga kesinambungan Majapahit.",
        L3: "Jayanegara wafat pada 1328 tanpa keturunan langsung yang dapat meneruskan takhta. Tribhuwana Tunggadewi memerintah atas nama garis keturunan Raden Wijaya dan Gayatri Rajapatni, dalam konteks legitimasi dinasti yang rumit. Sumber kronik mengaitkan kematian Jayanegara dengan pembunuhan oleh tabib Tanca, tetapi rincian naratifnya perlu dibedakan dari fakta suksesi yang lebih luas. Pergantian ini membuka fase pemerintahan yang kemudian dikaitkan dengan penguatan pusat Majapahit dan karier Gajah Mada."
      },
      catatan: "Kematian Jayanegara sering dikisahkan sebagai pembunuhan oleh Tanca dalam Pararaton; detail kisah berasal dari kronik dan perlu dibaca kritis.",
      sumber: ["Pararaton", "Nagarakretagama", "Poesponegoro & Notosusanto (ed.), Sejarah Nasional Indonesia II"],
      kuis: { tanya: "Siapa yang kemudian memerintah Majapahit setelah Jayanegara wafat?", pilihan: ["Tribhuwana Tunggadewi", "Suhita", "Gayatri sebagai raja bergelar Kertarajasa", "Parameswara"], benar: 0, penjelasan: "Tribhuwana Tunggadewi naik sebagai penguasa setelah Jayanegara wafat tanpa pewaris langsung." }
    },
  {
      id: "evt-028",
      judul: "Tribhuwana Tunggadewi menguatkan pemerintahan Majapahit",
      tahun: "1328–1350",
      mulai: 1328,
      akhir: 1350,
      lokasi: { nama: "Majapahit, Jawa Timur", lat: -7.56, lng: 112.37 },
      kategori: "politik",
      ringkas: "Ratu Majapahit memimpin masa konsolidasi sebelum era Hayam Wuruk.",
      cerita: {
        L1: "Tribhuwana Tunggadewi memerintah Majapahit setelah Jayanegara. Ia menghadapi masalah dalam negeri dan harus menjaga agar daerah-daerah tetap mengikuti kerajaan. Pada masanya, Gajah Mada semakin terkenal karena tugas militer dan pemerintahannya. Masa ini menjadi jembatan menuju masa kejayaan Majapahit di bawah Hayam Wuruk.",
        L2: "Pemerintahan Tribhuwana Tunggadewi, yang biasanya ditempatkan dari 1328 hingga 1350, merupakan masa penguatan Majapahit. Penumpasan pemberontakan Sadeng dan Keta pada 1331 sering dihubungkan dengan konsolidasi kekuasaan ratu dan naiknya Gajah Mada. Pemerintahan ini menyiapkan kondisi politik bagi perluasan pengaruh Majapahit pada masa berikutnya, walaupun jangkauan kendali kerajaan atas wilayah luar Jawa tidak selalu sama dengan administrasi langsung.",
        L3: "Masa Tribhuwana Tunggadewi memperlihatkan konsolidasi dinasti pascakrisis suksesi Jayanegara. Catatan mengenai Sadeng dan Keta menempatkan ratu sebagai penguasa yang menegaskan otoritas pusat, sedangkan Gajah Mada muncul sebagai pejabat militer dan politik penting. Hubungan sebab-akibat antara kemenangan tertentu dan pengangkatan jabatan perlu ditarik hati-hati karena sumber kronik menggabungkan urutan peristiwa dengan penilaian politik. Secara umum, masa ini menjadi dasar bagi ekspansi Majapahit di bawah Hayam Wuruk, tetapi klaim pengaruh tidak selalu berarti kontrol birokratis seragam."
      },
      catatan: "Tanggal awal dan akhir pemerintahan mengikuti kronologi umum; rincian pembagian wewenang antara Tribhuwana dan Gayatri dalam sumber berbeda-beda.",
      sumber: ["Nagarakretagama", "Pararaton", "Poesponegoro & Notosusanto (ed.), Sejarah Nasional Indonesia II"],
      kuis: { tanya: "Mengapa masa Tribhuwana penting dalam sejarah Majapahit?", pilihan: ["Menandai konsolidasi sebelum masa Hayam Wuruk", "Mengakhiri semua perdagangan laut", "Memindahkan pusat kerajaan ke Maluku", "Mendirikan Kesultanan Melaka"], benar: 0, penjelasan: "Pemerintahannya menjadi masa konsolidasi politik dan meningkatnya peran Gajah Mada sebelum era Hayam Wuruk." }
    },
  {
      id: "evt-017",
      judul: "Pemberontakan Sadeng dan Keta",
      tahun: "1331",
      mulai: 1331,
      akhir: 1345,
      lokasi: { nama: "Sadeng (Puger, Jember), Jawa Timur", lat: -8.36, lng: 113.48 },
      kategori: "perang",
      ringkas: "Ujian pertama kepemimpinan Tribhuwana Tunggadewi dan Gajah Mada.",
      cerita: {
        L1: "Daerah Sadeng dan Keta di Jawa Timur memberontak kepada Majapahit pada 1331. Ratu Tribhuwana Tunggadewi memimpin sendiri pasukannya ke medan perang. Gajah Mada bertugas membantu menumpas pemberontakan itu. Keberhasilan ini membuat Gajah Mada diangkat menjadi Mahapatih. Pemberontakan ini menjadi ujian bagi pemerintahan baru. Selain menang di medan perang, ratu perlu memastikan bahwa para pejabat tidak terus bersaing hingga melemahkan kerajaan.",
        L2: "Pada 1331, daerah Sadeng dan Keta mengangkat senjata melawan Majapahit. Peristiwa ini terjadi di awal pemerintahan Ratu Tribhuwana Tunggadewi. Terdapat persaingan antara Gajah Mada dan pejabat lain (Kembar) mengenai siapa yang berhak memimpin pasukan. Ratu Tribhuwana akhirnya turun langsung ke lapangan didampingi Gajah Mada. Pemberontakan berhasil ditumpas, dan pencapaian ini melapangkan jalan bagi Gajah Mada untuk memangku jabatan Mahapatih Amangkubhumi. Konflik kepemimpinan di antara perwira memperlihatkan bahwa ancaman dari luar dapat berkelindan dengan persaingan di dalam istana. Keberhasilan ekspedisi membantu memperkuat posisi Tribhuwana dan membuka peluang bagi Gajah Mada untuk naik ke jabatan lebih tinggi.",
        L3: "Penumpasan Sadeng dan Keta (1331) dicatat dalam Pararaton dan Nagarakretagama. Peristiwa ini menandai konsolidasi kekuasaan Ratu Tribhuwana Tunggadewi setelah pembunuhan Jayanegara pada 1328. Persaingan ketat antara Gajah Mada dan Ra Kembar dalam mengepung Sadeng memperlihatkan rivalitas internal elite militer Majapahit. Keputusan Ratu untuk hadir langsung di garis depan menegaskan legitimasi garis keturunan Rajasa. Kemenangan ini menjadi prasyarat politik sebelum Gajah Mada mengucapkan Sumpah Palapa beberapa tahun kemudian. Pararaton dan Nagarakretagama memberi dasar untuk menempatkan Sadeng dan Keta dalam konsolidasi awal pemerintahan Tribhuwana. Meski peristiwa ini sering dihubungkan dengan kenaikan Gajah Mada, hubungan sebab-akibatnya perlu dirumuskan hati-hati: kemenangan militer memberi modal politik, tetapi promosi pejabat juga bergantung pada dinamika istana yang tidak seluruhnya terdokumentasi."
      },
      catatan: "Lokasi Sadeng diidentifikasi di daerah Puger, Jember saat ini, sedangkan Keta berada di pesisir Besuki, Situbondo. Peristiwa ini merupakan batu loncatan utama karier Gajah Mada.",
      sumber: [
        "Pararaton (naskah Jawa)",
        "Nagarakretagama (1365)",
        "Poesponegoro & Notosusanto (ed.), Sejarah Nasional Indonesia II"
      ],
      kuis: {
        tanya: "Apa dampak penting dari keberhasilan penumpasan pemberontakan Sadeng pada 1331?",
        pilihan: [
          "Majapahit memindahkan ibu kotanya ke Sumatra",
          "Gajah Mada dinaikkan kedudukannya hingga menjadi Mahapatih",
          "Kerajaan Kadiri berdiri kembali",
          "Ratu Tribhuwana Tunggadewi turun takhta"
        ],
        benar: 1,
        penjelasan: "Kemenangan menumpas Sadeng mengangkat reputasi Gajah Mada, membuka jalan pengangkatannya sebagai Mahapatih Majapahit."
      }
    },
  {
      id: "evt-010",
      judul: "Sumpah Palapa Gajah Mada",
      tahun: "sekitar 1334-1336",
      mulai: 1334,
      akhir: 1356,
      lokasi: { nama: "Keraton Majapahit, Trowulan", lat: -7.56, lng: 112.37 },
      kategori: "politik",
      ringkas: "Sumpah seorang mahapatih yang mengarahkan politik Majapahit.",
      cerita: {
        L1: "Gajah Mada menjadi mahapatih, yaitu pejabat tertinggi di bawah ratu Majapahit. Menurut naskah Pararaton, ia membuat sumpah yang disebut Sumpah Palapa. Ia berjanji tidak akan menikmati palapa, yaitu hidup tenang dan bersenang-senang, sebelum pulau-pulau lain dikalahkan. Ia menyebut nama wilayah seperti Bali, Sunda, Palembang, dan Tumasik (Singapura). Sebagian orang menertawakan sumpahnya. Sumpah itu menggambarkan ambisi menyatukan banyak daerah di bawah pengaruh Majapahit. Namun, janji yang besar juga dapat membuat pejabat lain khawatir tentang perang dan biaya yang harus ditanggung.",
        L2: "Setelah menumpas pemberontakan Keta dan Sadeng, Gajah Mada diangkat menjadi mahapatih, perdana menteri tertinggi, pada masa Ratu Tribhuwana Tunggadewi, sekitar 1334 sampai 1336. Menurut Pararaton, saat itu ia bersumpah tidak akan menikmati palapa sebelum 'nusantara' dikalahkan. Ia menyebut sejumlah wilayah, antara lain Gurun, Seram, Tanjungpura, Haru, Pahang, Dompo, Bali, Sunda, Palembang, dan Tumasik. Sebagian pejabat istana meragukan atau menertawakan sumpah itu. Dalam beberapa dekade berikutnya, Majapahit memang melancarkan ekspedisi laut, antara lain ke Bali pada 1343, dan banyak wilayah dalam daftar itu muncul sebagai daerah bawahan dalam Nagarakretagama. Sumpah Palapa sering dipahami sebagai program politik untuk memperluas pengaruh Majapahit ke kepulauan. Pengaruh tersebut tidak selalu berarti pemerintahan langsung; hubungan dengan daerah dapat berbentuk aliansi, pengakuan simbolis, atau kewajiban memberi upeti.",
        L3: "Teks sumpah ini hanya terdapat dalam Pararaton, yang disusun lama sesudah peristiwanya (abad ke-15 atau awal abad ke-16), sehingga bunyinya tidak bisa dipastikan sebagai kutipan langsung. Tahunnya pun berbeda-beda antar rujukan, sekitar 1334 pada sebagian dan 1336 pada yang lain. Daftar sasarannya sangat mirip dengan daftar daerah bawahan dalam Nagarakretagama (1365), dan beberapa ekspedisi, seperti ke Bali pada 1343, tampak mengikutinya. Makna katanya juga diperdebatkan: sebagian ahli membaca 'nusantara' dalam teks Jawa Kuno itu sebagai 'pulau-pulau lain' di luar Jawa, bukan 'menyatukan seluruh kepulauan' seperti tafsir populer masa kini. Majapahit pun tidak menguasai semua wilayah dalam daftar itu secara langsung. Kasus ini memperlihatkan bagaimana sebuah teks lama bisa dibaca ulang oleh generasi berikutnya sesuai kebutuhan zamannya. Pararaton menghubungkan Sumpah Palapa dengan cita-cita ekspansi Gajah Mada, tetapi daftar wilayah dan makna “menundukkan” tidak boleh disamakan begitu saja dengan batas negara modern. Bukti menunjukkan adanya klaim jaringan pengaruh yang luas, sedangkan kedalaman kontrol Majapahit berbeda menurut tempat dan masa."
      },
      catatan: "Sumpah ini hanya diketahui dari Pararaton. Tahunnya berbeda antar rujukan (sekitar 1334 sampai 1336), dan makna kata 'nusantara' di dalamnya diperdebatkan. Tidak semua wilayah dalam daftar sumpah benar-benar dikuasai Majapahit secara langsung.",
      sumber: [
        "Pararaton (naskah Jawa)",
        "Nagarakretagama (1365), daftar wilayah bawahan",
        "Prasasti Gajah Mada (1351)",
        "Artikel 'Was Majapahit really an empire?', New Mandala (artikel populer; periksa rujukan aslinya)",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"
      ],
      kuis: {
        tanya: "Apa isi pokok Sumpah Palapa menurut Pararaton?",
        pilihan: [
          "Gajah Mada berjanji menyerahkan Majapahit kepada Mongol",
          "Gajah Mada berjanji berhenti menjadi mahapatih",
          "Gajah Mada berjanji tidak akan menikmati palapa sebelum wilayah-wilayah lain dikalahkan",
          "Gajah Mada berjanji menjadi raja Sunda"
        ],
        benar: 2,
        penjelasan: "Menurut Pararaton, Gajah Mada bersumpah tidak akan menikmati palapa sebelum wilayah-wilayah lain, seperti Bali, Sunda, dan Palembang, dikalahkan. Bunyi dan tahun sumpah ini masih diperdebatkan."
      }
    },
  {
      id: "evt-011",
      judul: "Majapahit menundukkan Bali",
      tahun: "1343 (menurut tradisi)",
      mulai: 1343,
      akhir: 1380,
      lokasi: { nama: "Bedahulu (Pejeng), Bali", lat: -8.52, lng: 115.31 },
      kategori: "perang",
      ringkas: "Pulau Bali memasuki lingkup pengaruh Majapahit.",
      cerita: {
        L1: "Pulau Bali punya raja sendiri yang berpusat di Bedahulu, dekat Pejeng. Menurut cerita, raja Bali tidak mau tunduk kepada Majapahit. Pada tahun 1343, pasukan Majapahit di bawah Gajah Mada datang ke Bali dan menang. Sejak itu pengaruh Jawa makin kuat di Bali. Kisah lengkapnya banyak bercampur dongeng. Bali memiliki penguasa, adat, dan kekuatan lokal sendiri. Penaklukan dapat mengubah hubungan politik, tetapi tidak berarti semua kebiasaan masyarakat langsung hilang.",
        L2: "Menurut tradisi Majapahit dan babad Bali, pada 1343 pasukan Majapahit di bawah Gajah Mada menyeberang ke Bali dan menaklukkan kerajaan Bedahulu di sekitar Pejeng. Penaklukan ini dipandang sebagai kelanjutan Sumpah Palapa, karena Bali termasuk wilayah yang disebut dalam sumpah itu. Setelah itu, Majapahit menempatkan penguasa dari Jawa di Bali, dan menurut babad salah satunya adalah Sri Kresna Kepakisan. Pengaruh Jawa makin kuat dalam seni, pemerintahan, dan keagamaan di Bali. Kisah perlawanan tokoh Bali seperti Kebo Iwa banyak berasal dari babad dan bercampur dongeng. Ekspedisi ke Bali merupakan bagian dari upaya Majapahit memperluas pengaruh di kepulauan sekitar Jawa. Penguasa yang menang harus memikirkan bukan hanya kemenangan militer, tetapi juga cara mengatur wilayah dan berhubungan dengan elite lokal setelah pertempuran.",
        L3: "Tahun 1343 lazim dipakai untuk penaklukan Bali oleh Majapahit, dan peristiwa ini dianggap salah satu ekspedisi yang mengikuti daftar sasaran Sumpah Palapa. Rincian pertempurannya terutama berasal dari babad Bali yang disusun berabad-abad kemudian dan penuh unsur legenda, seperti kisah Kebo Iwa, sehingga sejarawan berusaha memisahkan kerangka politiknya dari bumbu ceritanya. Sebagian kajian menunjukkan bahwa masuknya pengaruh Majapahit ke Bali berlangsung bertahap, bukan satu pertempuran tunggal. Bali juga tercantum dalam daftar daerah bawahan Nagarakretagama (1365). Hubungan yang makin erat dengan Jawa pada masa ini ikut membentuk banyak ciri budaya Bali yang dikenal sekarang. Kisah penaklukan Bali banyak disampaikan melalui sumber Jawa dan tradisi lokal yang ditulis pada masa berbeda. Karena itu, narasi kemenangan perlu dibaca bersama pertanyaan tentang kesinambungan elite Bali, perubahan administrasi, dan cara ingatan lokal menjelaskan penaklukan tersebut."
      },
      catatan: "Tahun 1343 lazim disebut, tetapi rincian pertempuran, nama tokoh, dan urutan penguasa pengganti terutama berasal dari babad Bali yang ditulis jauh sesudahnya dan sarat legenda. Sebagian kajian menempatkan masuknya pengaruh Majapahit sebagai proses bertahap, bukan satu peristiwa.",
      sumber: [
        "Nagarakretagama (1365), daftar wilayah bawahan (Bali termasuk)",
        "Babad Bali (misalnya babad tentang Dalem Kresna Kepakisan; periksa edisi)",
        "Artikel 'Was Majapahit really an empire?', New Mandala (artikel populer; periksa rujukan aslinya)",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"
      ],
      kuis: {
        tanya: "Mengapa penaklukan Bali pada 1343 sering dikaitkan dengan Sumpah Palapa?",
        pilihan: [
          "Karena Bali termasuk wilayah yang disebut dalam sumpah itu",
          "Karena sumpah itu diucapkan di Bali",
          "Karena Bali menyerang Majapahit lebih dulu",
          "Karena Gajah Mada lahir di Bali"
        ],
        benar: 0,
        penjelasan: "Bali termasuk wilayah yang disebut dalam Sumpah Palapa menurut Pararaton, dan ekspedisi ke Bali tampak mengikuti daftar itu. Namun rincian pertempurannya terutama berasal dari babad yang banyak berisi legenda."
      }
    },
  {
      id: "evt-035",
      judul: "Perubahan pusat kekuasaan di Bali pada abad ke-14",
      tahun: "sekitar 1343",
      mulai: 1343,
      akhir: 1350,
      lokasi: { nama: "Bali, wilayah Pejeng dan sekitarnya", lat: -8.52, lng: 115.27 },
      kategori: "politik",
      ringkas: "Kampanye Majapahit mengubah hubungan politik Jawa dan Bali.",
      cerita: {
        L1: "Pada sekitar 1343, Majapahit melancarkan kampanye ke Bali. Tradisi sejarah menghubungkan peristiwa ini dengan Gajah Mada. Setelah itu, hubungan politik antara Bali dan Majapahit berubah. Namun, kehidupan masyarakat Bali tidak berhenti; adat, agama, dan pemimpin setempat tetap berperan.",
        L2: "Penaklukan Bali oleh Majapahit biasanya ditempatkan sekitar 1343 dan dikaitkan dengan ekspansi pada masa Tribhuwana Tunggadewi serta Gajah Mada. Peristiwa ini memengaruhi elite politik Bali dan hubungan antarpulau. Akan tetapi, perubahan penguasa tidak berarti seluruh praktik budaya lokal diganti. Tradisi, jaringan keagamaan, dan kepemimpinan setempat terus berkembang setelah kampanye tersebut.",
        L3: "Kampanye Majapahit ke Bali sekitar 1343 sering diperlakukan sebagai titik penting dalam hubungan Jawa–Bali. Namun, narasi penaklukan perlu dibedakan dari proses integrasi sosial dan budaya yang berlangsung lebih lama. Bukti mengenai struktur kekuasaan lokal setelah kampanye tidak sepenuhnya lengkap, dan tradisi Bali memiliki perspektif yang tidak selalu identik dengan kronik Jawa. Peristiwa ini memperlihatkan bahwa ekspansi politik dapat mengubah elite dan aliansi tanpa menghapus kontinuitas budaya setempat."
      },
      catatan: "Peristiwa ini berhubungan dengan evt-011 yang sudah ada; entri ini menyoroti dampak politik dan kesinambungan budaya, bukan mengklaim detail militer baru.",
      sumber: ["Pararaton", "Nagarakretagama", "Kajian sejarah Bali abad pertengahan"],
      kuis: { tanya: "Apa yang paling tepat dikatakan tentang Bali setelah kampanye Majapahit?", pilihan: ["Seluruh budaya lokal langsung hilang", "Hubungan politik berubah, tetapi tradisi lokal tetap berlanjut", "Bali pindah ke Sumatra", "Majapahit tidak pernah berhubungan dengan Bali"], benar: 1, penjelasan: "Perubahan politik tidak berarti budaya dan kepemimpinan lokal lenyap seluruhnya." }
    },
  {
      id: "evt-012",
      judul: "Adityawarman menjadi raja di Sumatra tengah",
      tahun: "1347",
      mulai: 1347,
      akhir: 1400,
      lokasi: { nama: "Pagaruyung (Tanah Datar), Sumatra Barat", lat: -0.46, lng: 100.60 },
      kategori: "politik",
      ringkas: "Pejabat Majapahit menjadi raja di tanah leluhur ibunya.",
      cerita: {
        L1: "Adityawarman adalah bangsawan Majapahit yang punya darah Melayu dari pihak ibu. Ia pernah memegang jabatan tinggi di Majapahit. Pada tahun 1347, ia tercatat sebagai raja di Sumatra tengah. Ia memerintah di sana sampai sekitar tahun 1375. Garis keturunannya dikenal sebagai cikal bakal raja-raja Minangkabau. Hubungan keluarga dan jabatan dapat membuka jalan bagi seseorang untuk memegang kekuasaan di wilayah baru. Namun, memerintah jauh dari pusat juga menuntut dukungan penduduk dan elite setempat.",
        L2: "Menurut Pararaton, Adityawarman lahir dari ayah bangsawan Majapahit dan ibu dari keluarga raja Melayu di Dharmasraya, sehingga ia masih saudara sepupu Raja Jayanegara. Di Majapahit ia menjabat wreddamantri, menteri senior, dan memimpin perluasan kekuasaan ke pesisir timur Sumatra. Namanya muncul di Jawa pada 1343, pada arca Manjusri di Candi Jago. Pada 1347 ia memahat tulisan di punggung arca Amoghapasa, arca yang dulu dikirim Kertanagara ke Sumatra, dan menyebut dirinya raja besar (maharajadiraja). Ia memerintah Sumatra tengah sampai sekitar 1375, menguasai perdagangan emas, dan dianggap pendiri garis raja Minangkabau di Pagaruyung. Adityawarman menunjukkan hubungan yang rumit antara pusat Majapahit dan politik Sumatra. Gelar serta prasasti yang berkaitan dengannya menjadi petunjuk penting, tetapi kedudukannya sebagai wakil, sekutu, atau penguasa yang mandiri perlu dilihat menurut periode dan bukti yang digunakan.",
        L3: "Menurut Pararaton, Adityawarman putra bangsawan Majapahit Adwayawarman dan Dara Jingga, putri Melayu dari Dharmasraya. Di Majapahit ia menjadi wreddamantri dan memimpin ekspansi ke pesisir timur Sumatra, dan namanya tercatat pada arca Manjusri bertarikh 1343 di Candi Jago. Pada 1347, prasasti yang ia pahatkan di punggung arca Amoghapasa menampilkannya sebagai penguasa Malayapura dengan gelar bercorak Sriwijaya-Melayu, termasuk 'Kanakamedinindra' (Penguasa Tanah Emas), dan sebagai penganut Buddha Tantrik. Ia memerintah sampai sekitar 1375 dan digantikan putranya, Ananggawarman. Status hubungannya dengan Majapahit diperdebatkan: Nagarakretagama menyebut kerajaannya sebagai daerah yang membayar upeti, tetapi tidak menyinggung bahwa ia memerintah seperti raja yang berdiri sendiri, sehingga sebagian sejarawan menilainya penguasa yang praktis mandiri. Kasus ini mengingatkan bahwa 'daftar wilayah' dalam sebuah sumber belum tentu mencerminkan kenyataan politik di lapangan. Prasasti pada arca Amoghapasa tahun 1347 merupakan bukti epigrafis utama untuk memahami Adityawarman. Gelar dan bahasa politik prasasti memberi informasi lebih langsung daripada legenda, tetapi tidak dengan sendirinya menjawab seluruh pertanyaan tentang tingkat ketergantungannya pada Majapahit atau proses pembentukan kekuasaan di Sumatra tengah."
      },
      catatan: "Tempat kelahiran Adityawarman (Jawa atau Sumatra) tidak pasti, dan status hubungannya dengan Majapahit diperdebatkan. Gelar dalam prasasti dan perannya sebagai pejabat Majapahit ditafsirkan berbeda oleh para ahli. Kronologi pemerintahannya hanya diketahui dari beberapa prasasti.",
      sumber: [
        "Prasasti Amoghapasa (1286 di bagian depan arca; 1347 di bagian punggung)",
        "Arca Manjusri, Candi Jago (1343)",
        "Pararaton (naskah Jawa)",
        "Nagarakretagama (1365)",
        "G. Coedès, The Indianized States of Southeast Asia"
      ],
      kuis: {
        tanya: "Garis keturunan Adityawarman dikenal sebagai cikal bakal raja-raja mana?",
        pilihan: ["Samudra Pasai", "Ternate", "Minangkabau", "Sunda"],
        benar: 2,
        penjelasan: "Adityawarman dianggap pendiri garis raja Minangkabau di Pagaruyung. Ia memerintah Sumatra tengah dari 1347 sampai sekitar 1375."
      }
    },
  {
      id: "evt-036",
      judul: "Adityawarman dan pusat politik di Sumatra tengah",
      tahun: "1347",
      mulai: 1347,
      akhir: 1375,
      lokasi: { nama: "Sumatra tengah, kawasan Pagaruyung", lat: -0.47, lng: 100.62 },
      kategori: "politik",
      ringkas: "Prasasti dan gelar raja membantu merekonstruksi kekuasaan di Sumatra tengah.",
      cerita: {
        L1: "Adityawarman menjadi tokoh penting di Sumatra tengah pada abad ke-14. Prasasti yang berkaitan dengannya menunjukkan bahwa ia memakai gelar raja dan membangun kekuasaan di wilayah tersebut. Hubungannya dengan Majapahit sering dibahas sejarawan, tetapi kerajaan di Sumatra tengah juga memiliki kepentingan dan perkembangan sendiri.",
        L2: "Adityawarman dikenal melalui prasasti-prasasti abad ke-14 dan dikaitkan dengan pembentukan pusat kekuasaan di Sumatra tengah, sering dihubungkan dengan Pagaruyung. Latar hubungan dinastiknya dengan Jawa dan Melayu menjadi bahan kajian. Bukti prasasti memberi pijakan yang lebih kuat daripada silsilah yang muncul kemudian, tetapi tidak semua klaim mengenai batas wilayah atau gelar politiknya dapat disepakati.",
        L3: "Adityawarman merupakan figur penting dalam sejarah politik Sumatra tengah karena meninggalkan prasasti yang memuat gelar dan pernyataan kekuasaan. Hubungannya dengan lingkungan Majapahit, Melayu, dan tradisi Buddhis memperlihatkan jaringan elite lintas pulau, tetapi tidak mengharuskan Sumatra tengah dipandang sekadar wilayah administratif Majapahit. Prasasti harus dibaca dalam konteks bahasa, ritual, dan legitimasi kerajaan; identifikasi lokasi serta batas kekuasaannya tetap menjadi persoalan penelitian."
      },
      catatan: "Tahun 1347 dan identifikasi Pagaruyung digunakan sebagai penanda umum; sejarah awal Minangkabau memuat perdebatan tentang lokasi, gelar, dan kesinambungan politik.",
      sumber: ["Prasasti-prasasti Adityawarman", "O.W. Wolters, The Fall of Srivijaya in Malay History", "Kajian sejarah Sumatra tengah"],
      kuis: { tanya: "Jenis sumber apa yang paling penting untuk mempelajari Adityawarman?", pilihan: ["Prasasti yang berkaitan dengannya", "Koran abad ke-20", "Surat kabar Eropa abad ke-19 saja", "Peta modern tanpa catatan"], benar: 0, penjelasan: "Prasasti memberikan bukti langsung tentang gelar dan pernyataan kekuasaan pada masa Adityawarman." }
    },
  {
      id: "evt-029",
      judul: "Hayam Wuruk naik takhta Majapahit",
      tahun: "1350",
      mulai: 1350,
      akhir: 1355,
      lokasi: { nama: "Majapahit, Jawa Timur", lat: -7.56, lng: 112.37 },
      kategori: "politik",
      ringkas: "Awal pemerintahan raja yang masa kekuasaannya sering dianggap puncak Majapahit.",
      cerita: {
        L1: "Pada 1350, Hayam Wuruk menjadi raja Majapahit. Ia memerintah ketika Gajah Mada menjadi pejabat penting. Pada masa mereka, Majapahit memperluas pengaruh dan membangun hubungan dengan banyak daerah. Namun, tidak semua wilayah yang disebut dalam naskah pasti diperintah langsung seperti daerah pusat.",
        L2: "Hayam Wuruk naik takhta pada 1350 dan memerintah hingga 1389. Bersama Mahapatih Gajah Mada, pemerintahannya sering disebut masa puncak Majapahit. Kerajaan mengembangkan hubungan politik, perdagangan, dan upeti dengan wilayah-wilayah di Nusantara. Istilah 'wilayah Majapahit' perlu dipahami berlapis: sebagian daerah mungkin berada di bawah kendali langsung, sedangkan yang lain terhubung melalui persekutuan, perdagangan, atau pengakuan simbolis.",
        L3: "Naiknya Hayam Wuruk pada 1350 membuka periode yang paling sering diasosiasikan dengan kejayaan Majapahit. Kolaborasi raja dan Gajah Mada tampak dalam ekspansi, kunjungan kerajaan, dan produksi teks istana seperti Nagarakretagama. Namun, konsep imperium Majapahit tidak sebaiknya dipetakan sebagai negara teritorial modern. Daftar daerah dalam teks dapat mencerminkan spektrum hubungan—dari kontrol hingga pengaruh dan kewajiban simbolis—dan harus ditafsirkan bersama bukti lokal serta prasasti."
      },
      catatan: "Masa Hayam Wuruk sering disebut puncak Majapahit, tetapi cakupan dan sifat kekuasaan atas setiap daerah masih menjadi bahan kajian.",
      sumber: ["Nagarakretagama (1365)", "Pararaton", "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Pada tahun berapa Hayam Wuruk naik takhta?", pilihan: ["1293", "1328", "1350", "1365"], benar: 2, penjelasan: "Hayam Wuruk mulai memerintah pada 1350 dan berkuasa hingga 1389." }
    },
  {
      id: "evt-013",
      judul: "Peristiwa Bubat",
      tahun: "1357 (diperdebatkan)",
      mulai: 1357,
      akhir: 1364,
      lokasi: { nama: "Lapangan Bubat, dekat Trowulan", lat: -7.50, lng: 112.38 },
      kategori: "perang",
      ringkas: "Pernikahan berubah menjadi pertempuran, menurut kidung.",
      cerita: {
        L1: "Raja Hayam Wuruk dari Majapahit ingin menikahi putri raja Sunda, Dyah Pitaloka. Raja Sunda datang bersama keluarganya dan berkemah di lapangan Bubat. Menurut kisah, Gajah Mada meminta sang putri diserahkan sebagai tanda tunduk. Raja Sunda menolak. Terjadi pertempuran, dan hampir seluruh rombongan Sunda gugur. Namun banyak sejarawan ragu kisah ini terjadi persis seperti itu. Peristiwa ini memperlihatkan bahwa pernikahan keluarga kerajaan juga dapat menjadi urusan kehormatan dan hubungan antarkerajaan. Ketika kedua pihak tidak sepakat tentang tata upacara dan kedudukan, pertemuan yang direncanakan damai berubah menjadi kekerasan.",
        L2: "Menurut Kidung Sunda dan teks sejenisnya, Hayam Wuruk ingin menikahi Dyah Pitaloka, putri Prabu Linggabuana dari Sunda. Sang raja datang ke Jawa bersama keluarganya dan berkemah di lapangan Bubat, di utara ibu kota Majapahit. Di sana Gajah Mada menuntut agar sang putri diserahkan sebagai tanda tunduk, bukan sebagai permaisuri. Linggabuana menolak. Pasukan Majapahit mengepung perkemahan, dan rombongan Sunda yang jauh lebih kecil melawan sampai hampir semuanya gugur, termasuk sang raja. Menurut kisah, sang putri dan perempuan Sunda lainnya mengakhiri hidup. Peristiwa ini disebut membuat hubungan Jawa dan Sunda tegang bertahun-tahun. Namun para sejarawan memperdebatkan apakah kejadiannya benar-benar seperti dalam kidung. Tragedi Bubat sering dijelaskan sebagai benturan antara gagasan pernikahan setara dan tuntutan politik istana Majapahit. Kisahnya juga dipengaruhi sumber sastra yang ditulis setelah peristiwa, sehingga rincian percakapan dan motif tokoh tidak semuanya dapat dipastikan.",
        L3: "Kisah Bubat bersumber terutama dari Kidung Sunda dan Kidung Sundayana, naskah Bali yang salinan tertuanya berasal dari sekitar pertengahan abad ke-16 (penggubahan awalnya mungkin lebih tua), serta disinggung singkat dalam Carita Parahyangan dan Pararaton. Nagarakretagama (1365), sumber utama sejarah Majapahit, tidak menyebutnya sama sekali. Sebagian sejarawan menduga Prapanca sengaja menghilangkan episode yang memalukan bagi Majapahit, sedangkan yang lain menilai kidung itu bercampur cerita rakyat atau bahkan sebagian besar fiksi. Karena sumber utamanya ditulis 150 sampai 200 tahun atau lebih sesudah peristiwa, kita sebenarnya tidak tahu persis apa yang terjadi. Bubat adalah contoh yang baik untuk pertanyaan inti ilmu sejarah: bagaimana menimbang kisah yang berpengaruh besar pada ingatan kolektif tetapi lemah bukti sezamannya, dan bagaimana kisah itu dipakai belakangan untuk membentuk cara dua kelompok memandang satu sama lain. Peristiwa Bubat perlu dibaca dengan membedakan ingatan sastra, tradisi politik Sunda, dan sumber yang lebih dekat pada zaman kejadian. Kidung Sunda menjadi sumber penting bagi narasi tragedi, tetapi tidak boleh diperlakukan seperti transkrip percakapan. Pengaruhnya kemudian meluas ke memori hubungan Sunda-Jawa, yang juga merupakan bagian dari sejarah penerimaan peristiwa tersebut."
      },
      catatan: "Ini peristiwa yang paling diperdebatkan di antara semua event era ini. Nagarakretagama tidak menyebutnya, dan sumber yang menceritakannya ditulis lama sesudahnya. Rincian tuntutan Gajah Mada, jalannya pertempuran, dan nasib sang putri tidak bisa dipastikan. Sajikan sebagai kisah yang diperdebatkan, bukan fakta mutlak, dan jangan dijadikan pembenaran prasangka antarkelompok.",
      sumber: [
        "Kidung Sunda dan Kidung Sundayana (naskah Bali; edisi C.C. Berg, 1927-1928)",
        "Carita Parahyangan (naskah Sunda, abad ke-16)",
        "Pararaton (naskah Jawa)",
        "Nagarakretagama (1365): tidak menyebut peristiwa ini"
      ],
      kuis: {
        tanya: "Mengapa sejarawan ragu bahwa peristiwa Bubat terjadi persis seperti dalam kisah?",
        pilihan: [
          "Karena lapangan Bubat tidak pernah ada",
          "Karena Nagarakretagama tidak menyebutnya dan kisah utamanya ditulis jauh sesudahnya",
          "Karena Hayam Wuruk tidak pernah menjadi raja",
          "Karena Gajah Mada belum lahir"
        ],
        benar: 1,
        penjelasan: "Nagarakretagama (1365) tidak menyebut Bubat, dan sumber yang menceritakannya ditulis 150 sampai 200 tahun atau lebih sesudahnya, sehingga rinciannya tidak bisa dipastikan."
      }
    },
  {
      id: "evt-018",
      judul: "Ekspedisi Majapahit ke Dompu",
      tahun: "1357",
      mulai: 1357,
      akhir: 1375,
      lokasi: { nama: "Dompu, Pulau Sumbawa", lat: -8.53, lng: 118.46 },
      kategori: "perang",
      ringkas: "Panglima Mpu Nala memperluas pengaruh Majapahit ke kepulauan timur.",
      cerita: {
        L1: "Majapahit mengirim armada laut besar ke Pulau Sumbawa untuk menundukkan daerah Dompu pada 1357. Pasukan dipimpin oleh panglima laut sakti bernama Mpu Nala. Setelah pertempuran sengit, Dompu menyerah dan menjadi bagian dari jaringan wilayah Majapahit. Mengirim armada ke Sumbawa membutuhkan perbekalan dan kerja sama pasukan laut dengan pasukan darat. Hasilnya dapat memperkuat pengaruh Majapahit, tetapi perang juga membawa biaya bagi kedua pihak.",
        L2: "Pada 1357, Majapahit melancarkan ekspedisi militer ke Dompu di Pulau Sumbawa. Ekspedisi ini dipimpin oleh Laksamana Mpu Nala, kepala armada laut Majapahit yang terkenal tangguh. Penaklukan Dompu penting karena posisi strategis Sumbawa dalam jalur perdagangan rempah kepulauan Nusa Tenggara. Peristiwa ini dicatat dalam Pararaton dan prasasti lokal. Letak Dompu penting bagi pelayaran antara Jawa dan kawasan timur Nusantara. Namun, penaklukan tidak serta-merta membuktikan bahwa semua jalur dagang dikendalikan sepenuhnya; pengaruh kerajaan maritim bergantung pada pelabuhan, hubungan lokal, dan kemampuan mempertahankan kehadiran di laut.",
        L3: "Ekspedisi ke Dompu (1357) merupakan bukti realisasi ekspansi militer Majapahit ke Kepulauan Nusa Tenggara. Peran penting dipegang oleh Laksamana Mpu Nala (Laksamana Nala), yang merancang kapal-kapal tempur Majapahit (Cangku) dengan kontruksi kuat. Penaklukan Dompu mengamankan jalur pelayaran timur yang menghubungkan Jawa dengan Maluku penghasil rempah. Keberhasilan ekspedisi militer ini memperkuat klaim jangkauan kekuasaan Majapahit sebagaimana termaktub dalam Nagarakretagama. Kisah ekspedisi Dompu berada dalam narasi lebih luas tentang klaim maritim Majapahit. Nama wilayah dalam teks istana merupakan bukti bahwa tempat itu dikenal dalam cakrawala politik kerajaan, tetapi tingkat kendali praktisnya harus ditelaah terpisah. Detail teknis armada atau operasi militer memerlukan bukti khusus dan tidak boleh disimpulkan hanya dari daftar wilayah."
      },
      catatan: "Dompu merupakan salah satu wilayah di Kepulauan Nusa Tenggara yang eksplisit disebutkan dalam Sumpah Palapa maupun Nagarakretagama.",
      sumber: [
        "Pararaton (naskah Jawa)",
        "Nagarakretagama (1365)",
        "Irawan Djoko Nugroho, Majapahit Peradaban Maritim"
      ],
      kuis: {
        tanya: "Siapakah panglima armada laut Majapahit yang memimpin penaklukan Dompu?",
        pilihan: ["Mpu Prapanca", "Mpu Nala", "Mpu Tantular", "Arya Wiraraja"],
        benar: 1,
        penjelasan: "Mpu Nala adalah laksamana/panglima armada laut Majapahit yang memimpin pertempuran dan strategi militer di Dompu."
      }
    },
  {
      id: "evt-037",
      judul: "Ekspedisi Majapahit ke Dompu dan jalur timur",
      tahun: "1357",
      mulai: 1357,
      akhir: 1365,
      lokasi: { nama: "Dompu, Pulau Sumbawa", lat: -8.53, lng: 118.46 },
      kategori: "perdagangan",
      ringkas: "Nusa Tenggara berada dalam jaringan pelayaran dan klaim pengaruh kerajaan besar.",
      cerita: {
        L1: "Dompu berada di Pulau Sumbawa, di antara jalur pelayaran menuju kepulauan timur. Sumber Majapahit menyebut berbagai wilayah di luar Jawa. Hal itu menunjukkan bahwa laut menghubungkan kerajaan dan komunitas yang berjauhan. Namun, penyebutan suatu daerah tidak selalu membuktikan bahwa Majapahit mengatur kehidupan sehari-hari di sana.",
        L2: "Dompu dan wilayah Nusa Tenggara penting dalam pembahasan jaringan maritim Majapahit. Daftar wilayah dalam Nagarakretagama menjadi salah satu sumber untuk memahami jangkauan klaim kerajaan, sementara tradisi lokal dan bukti arkeologis diperlukan untuk melihat sejarah daerah itu dari sisi setempat. Rincian ekspedisi, tokoh panglima, dan tanggal tertentu perlu diperiksa karena sumber tidak selalu memberikan data yang seragam.",
        L3: "Hubungan Majapahit dengan Dompu memperlihatkan tantangan dalam membedakan ekspedisi militer, klaim politik, dan integrasi ekonomi. Nagarakretagama memberi gambaran tentang prestise dan lingkup pengaruh kerajaan, tetapi daftar geografisnya tidak dapat diperlakukan sebagai laporan administratif lengkap. Untuk memahami Nusa Tenggara, sumber Jawa perlu dibandingkan dengan tradisi lokal, arkeologi, dan konteks jalur laut. Dengan demikian, Dompu tidak hanya tampil sebagai objek ekspansi, tetapi juga sebagai bagian dari jaringan regional yang memiliki sejarah sendiri."
      },
      catatan: "Entri ini melengkapi evt-018 dengan fokus pada interpretasi sumber dan jaringan kawasan; rincian operasi militer tertentu masih memerlukan verifikasi lebih lanjut.",
      sumber: ["Nagarakretagama (1365)", "Pararaton", "Kajian sejarah Nusa Tenggara"],
      kuis: { tanya: "Apa batasan utama ketika membaca daftar wilayah dalam Nagarakretagama?", pilihan: ["Daftar itu selalu sama dengan administrasi modern", "Daftar dapat mencerminkan klaim pengaruh, bukan kendali langsung", "Naskah itu tidak menyebut wilayah luar Jawa", "Semua nama tempat pasti dapat dipetakan tepat"], benar: 1, penjelasan: "Daftar dalam puisi istana perlu ditafsirkan sebagai klaim prestise dan pengaruh, bukan otomatis sebagai administrasi langsung." }
    },
  {
      id: "evt-014",
      judul: "Hayam Wuruk berkeliling Jawa Timur",
      tahun: "1359",
      mulai: 1359,
      akhir: 1364,
      lokasi: { nama: "Lumajang, Jawa Timur (salah satu daerah rute, perkiraan)", lat: -8.13, lng: 113.22 },
      kategori: "politik",
      ringkas: "Raja turun langsung menemui daerah-daerahnya.",
      cerita: {
        L1: "Raja Hayam Wuruk tidak hanya duduk di istana. Pada tahun 1359 ia berkeliling Jawa Timur, mengunjungi desa, tempat suci, dan daerah bawahan. Mpu Prapanca, penulis Nagarakretagama, ikut dalam rombongan dan mencatat perjalanan itu. Karena catatan itu, kita bisa mengenal banyak nama tempat di Jawa Timur pada masa itu. Perjalanan raja memberi kesempatan untuk melihat keadaan wilayah secara langsung dan memperlihatkan bahwa pusat kerajaan masih memperhatikan daerah. Rombongan juga membawa upacara dan tata istana ke tempat yang dikunjungi.",
        L2: "Nagarakretagama mencatat bahwa Hayam Wuruk berkeliling wilayah Jawa Timur dalam perjalanan resmi pada 1359, dan ada pula perjalanan lain pada 1361. Rombongan terdiri dari pejabat, pendeta, dan pengawal, dan Mpu Prapanca ikut menuliskannya. Mereka mengunjungi desa, tempat suci, dan daerah bawahan. Perjalanan semacam ini memungkinkan raja melihat sendiri daerahnya dan menegaskan bahwa kekuasaan Majapahit hadir sampai ke daerah. Peneliti Nigel Bullough mengidentifikasi sekitar 200 nama tempat sepanjang rute sekitar 900 kilometer. Kunjungan resmi dapat memperkuat hubungan antara raja, pejabat daerah, tempat suci, dan masyarakat. Selain fungsi pemerintahan, perjalanan itu juga memiliki fungsi simbolis: kehadiran raja menegaskan urutan kehormatan dan hubungan daerah dengan pusat.",
        L3: "Nagarakretagama (1365) memuat catatan terperinci tentang perjalanan keliling Hayam Wuruk pada 1359 dan perjalanan lain pada 1361 di bagian timur Jawa. Sebagai teks yang ditulis oleh seorang yang ikut dalam rombongan, bagian perjalanan ini jauh lebih bisa diandalkan untuk geografi dan tata kerajaan dibanding kisah yang ditulis belakangan. Nigel Bullough mengidentifikasi sekitar 200 nama tempat sepanjang rute sekitar 900 kilometer. Namun teks ini adalah puisi pujian untuk raja, sehingga gambaran sambutan dan kemakmuran daerah perlu dibaca sebagai bagian dari propaganda istana. Bagian ini juga dipakai sejarawan untuk memahami cara pusat kekuasaan menjangkau daerah: lewat kunjungan langsung, ritual, dan hubungan pribadi, bukan hanya lewat pemerintahan birokratis. Catatan perjalanan dalam Nagarakretagama membantu peneliti mengidentifikasi toponim dan geografi politik abad ke-14. Namun, karena Prapanca menulis dalam lingkungan istana, rincian perjalanan sekaligus mencerminkan agenda pujian. Identifikasi rute modern harus tetap dianggap sebagai rekonstruksi, bukan kepastian untuk setiap lokasi."
      },
      catatan: "Tahun 1359 dan 1361 untuk perjalanan ini berasal dari kajian atas Nagarakretagama; rute rinci dan identifikasi nama tempat masih dikaji dan sebagian diperdebatkan. Karena ditulis untuk memuji raja, gambaran sambutan dan kemakmuran daerah perlu dibaca kritis. Lumajang dipakai di sini sebagai penanda umum rute, bukan satu-satunya tujuan.",
      sumber: [
        "Nagarakretagama (Desawarnana, 1365), bagian perjalanan raja",
        "Th. G. Th. Pigeaud, Java in the 14th Century (1960-1963)",
        "Nigel Bullough (2005), dikutip dalam 'Nagarakertagama Manuscript As Historical Route in East Java Tourism Development', ICSS 2018 (periksa ulang)"
      ],
      kuis: {
        tanya: "Mengapa catatan perjalanan Hayam Wuruk berguna bagi sejarawan?",
        pilihan: [
          "Karena ditulis 300 tahun kemudian oleh orang Eropa",
          "Karena hanya berisi peta",
          "Karena ditulis oleh pedagang Tiongkok",
          "Karena ditulis oleh orang yang ikut rombongan dan memuat banyak nama tempat"
        ],
        benar: 3,
        penjelasan: "Mpu Prapanca ikut dalam rombongan dan mencatat banyak nama tempat. Namun karena ditulis untuk memuji raja, gambaran sambutannya tetap perlu dibaca kritis."
      }
    },
  {
      id: "evt-019",
      judul: "Wafatnya Mahapatih Gajah Mada",
      tahun: "1364",
      mulai: 1364,
      akhir: 1389,
      lokasi: { nama: "Keraton Majapahit, Trowulan", lat: -7.56, lng: 112.37 },
      kategori: "politik",
      ringkas: "Wafatnya sang Mahapatih membuat struktur pemerintahan diubah.",
      cerita: {
        L1: "Pada tahun 1364, Mahapatih Gajah Mada meninggal dunia. Selama hidupnya, ia memegang banyak tugas penting. Karena tidak ada yang bisa menggantikannya, Raja Hayam Wuruk membagi tugas Mahapatih kepada beberapa menteri senior. Setelah tokoh yang sangat berpengaruh wafat, raja harus menjaga agar para pejabat tidak berebut kekuasaan. Membagi tugas dapat membuat pemerintahan tetap berjalan meski keputusan tidak lagi berpusat pada satu orang.",
        L2: "Mahapatih Gajah Mada wafat pada 1364. Kehilangannya meninggalkan kekosongan besar di pusat pemerintahan Majapahit. Peran Gajah Mada yang begitu dominan membuat Hayam Wuruk kesulitan mencari pengganti sepadan. Raja akhirnya memutuskan tidak mengangkat Mahapatih tunggal baru, melainkan membagi wewenang pemerintahan kepada dewan menteri (Saptaprabhu/Manca Nagara). Tidak adanya pengganti tunggal memperlihatkan perubahan cara mengelola pemerintahan setelah masa Gajah Mada. Dewan menteri dapat membagi beban dan mengurangi ketergantungan pada satu tokoh, walaupun koordinasi dan kecepatan keputusan menjadi tantangan baru.",
        L3: "Nagarakretagama mencatat wafatnya Gajah Mada pada tahun 1286 Saka (1364 M). Kepergian Gajah Mada memicu krisis administratif karena selama berdekade ia memegang konsentrasi kekuasaan eksekutif, militer, dan kehakiman secara terpusat. Hayam Wuruk merestrukturisasi kabinet dengan membagi tanggung jawab Mahapatih kepada lima pejabat menteri (Manca Nagara). Peristiwa ini menandai awal transisi konsolidasi Majapahit dari kepemimpinan personalis tunggal menuju pembagian kekuasaan oligarkis dewan keluarga raja (Saptaprabhu). Wafatnya Gajah Mada pada 1364 sering dipakai sebagai penanda berakhirnya satu fase politik Majapahit, tetapi tidak berarti kerajaan langsung runtuh. Ketiadaan figur dengan otoritas serupa mendorong pembagian tugas di lingkungan istana; hubungan tepat antara perubahan administrasi dan perkembangan Majapahit sesudahnya tetap perlu dibaca dari sumber yang terbatas."
      },
      catatan: "Wafatnya Gajah Mada dicatat resmi dalam Nagarakretagama pupuh 71. Tidak ada rincian pasti mengenai penyebab kematiannya dalam sumber sejarah sezaman.",
      sumber: [
        "Nagarakretagama (1365)",
        "Hikayat Raja-raja Pasai",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"
      ],
      kuis: {
        tanya: "Bagaimana Raja Hayam Wuruk mengatur pemerintahan setelah Gajah Mada wafat pada 1364?",
        pilihan: [
          "Mengangkat anak Gajah Mada menjadi Mahapatih baru",
          "Membagi wewenang Mahapatih kepada dewan menteri",
          "Menyerahkan seluruh kekuasaan kepada Kerajaan Sunda",
          "Membubarkan angkatan laut Majapahit"
        ],
        benar: 1,
        penjelasan: "Karena tidak ada tokoh tunggal setara Gajah Mada, Hayam Wuruk membagi tugas dan wewenang Mahapatih kepada dewan menteri senior."
      }
    },
  {
      id: "evt-038",
      judul: "Wafatnya Gajah Mada dan perubahan tata pemerintahan",
      tahun: "1364",
      mulai: 1364,
      akhir: 1370,
      lokasi: { nama: "Majapahit, Jawa Timur", lat: -7.56, lng: 112.37 },
      kategori: "politik",
      ringkas: "Wafatnya mahapatih membuka fase baru bagi pemerintahan Hayam Wuruk.",
      cerita: {
        L1: "Gajah Mada wafat pada 1364. Ia dikenal sebagai pejabat penting yang membantu memperluas pengaruh Majapahit. Setelah ia meninggal, Hayam Wuruk harus mengatur pemerintahan tanpa tokoh yang sama kuat. Peristiwa ini menunjukkan bahwa kerajaan tidak hanya bergantung pada raja, tetapi juga pada pejabat dan jaringan politik.",
        L2: "Kematian Gajah Mada pada 1364 menandai perubahan dalam pemerintahan Hayam Wuruk. Gajah Mada telah menjadi tokoh utama dalam militer dan politik, tetapi setelah wafatnya tidak muncul satu pengganti yang memiliki kedudukan sama. Pembagian tugas di antara pejabat senior membantu kerajaan melanjutkan pemerintahan, meskipun perubahan kepemimpinan dapat mengurangi koordinasi dan momentum ekspansi.",
        L3: "Wafatnya Gajah Mada pada 1364 menjadi titik penting dalam sejarah politik Majapahit, tetapi tidak tepat jika seluruh perkembangan berikutnya dijelaskan hanya melalui kehilangan seorang tokoh. Pemerintahan tetap memiliki pejabat, kepentingan daerah, dan struktur istana yang lebih luas. Sumber kemudian menggambarkan perubahan pembagian wewenang setelah kematiannya; hal itu menunjukkan bagaimana sistem kerajaan beradaptasi ketika seorang pejabat yang dominan tidak lagi tersedia. Dampak jangka panjangnya harus ditimbang bersama faktor suksesi, ekonomi, dan hubungan regional."
      },
      catatan: "Tahun wafatnya Gajah Mada diterima luas; rincian penyebab kematian dan pengaturan jabatan setelahnya tidak sepenuhnya diketahui.",
      sumber: ["Nagarakretagama (1365)", "Pararaton", "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Apa tantangan politik setelah Gajah Mada wafat?", pilihan: ["Mencari cara membagi tugas pemerintahan tanpa tokoh yang sama dominan", "Mendirikan Singhasari", "Menghentikan semua pelayaran", "Memindahkan Majapahit ke Ternate"], benar: 0, penjelasan: "Hayam Wuruk perlu melanjutkan pemerintahan dengan pejabat senior setelah wafatnya Gajah Mada." }
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
        L1: "Pada tahun 1365 seorang pujangga bernama Mpu Prapanca menulis sebuah buku berbentuk puisi. Judulnya Nagarakretagama. Isinya cerita tentang Raja Hayam Wuruk dan kehebatan Majapahit. Dari buku inilah kita tahu banyak hal tentang Majapahit. Tulisan itu membantu menyimpan nama tempat, upacara, dan tokoh yang mungkin terlupakan. Namun, karena dibuat di lingkungan istana, ceritanya terutama menunjukkan bagaimana kerajaan ingin dikenang.",
        L2: "Mpu Prapanca menulis kakawin Nagarakretagama pada 1365, saat Hayam Wuruk menjadi raja Majapahit. Kitab ini menggambarkan kehidupan istana, perjalanan raja berkeliling wilayahnya, dan daftar daerah yang disebut berada di bawah pengaruh Majapahit, dari Sumatra sampai Maluku. Naskahnya ditemukan kembali di Lombok pada 1894. Kakawin adalah puisi berbahasa Jawa Kuno dengan aturan sastra tertentu. Nagarakretagama menjadi sumber penting, tetapi pembaca perlu mengingat bahwa karya pujian cenderung menonjolkan keberhasilan raja dan tidak selalu menjelaskan konflik atau kegagalan secara seimbang.",
        L3: "Nagarakretagama, juga dikenal sebagai Desawarnana, adalah kakawin berbahasa Jawa Kuno dalam 98 pupuh yang selesai ditulis Mpu Prapanca pada 1365 M (1287 Saka). Naskahnya ditemukan kembali di Cakranegara, Lombok, pada 1894 saat ekspedisi militer Belanda, lalu dikaji oleh J.L.A. Brandes. Daftar wilayah bawahan di dalamnya sering dipakai untuk menggambarkan luas kekuasaan Majapahit, namun sejarawan memperdebatkan apakah daftar itu menunjukkan kekuasaan langsung atau sekadar hubungan pengaruh dan upeti. Perlu dicatat pula bahwa semboyan Bhinneka Tunggal Ika berasal dari kitab lain, yaitu Kakawin Sutasoma karya Mpu Tantular. Nilai Nagarakretagama terletak pada rincian yang tidak banyak ditemukan dalam sumber lain, tetapi sifatnya sebagai puisi istana membatasi sudut pandangnya. Daftar wilayah dapat mencerminkan klaim, hubungan upeti, atau pengaruh budaya yang berbeda-beda; daftar itu tidak otomatis membuktikan administrasi langsung di setiap tempat."
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
    },
  {
      id: "evt-015",
      judul: "Kakawin Sutasoma dan 'Bhinneka Tunggal Ika'",
      tahun: "sekitar 1365-1389 (perkiraan)",
      mulai: 1389,
      akhir: 1400,
      lokasi: { nama: "Lingkungan istana Majapahit (perkiraan)", lat: -7.47, lng: 112.43 },
      kategori: "budaya",
      ringkas: "Asal-usul kalimat yang kini jadi semboyan negara.",
      cerita: {
        L1: "Mpu Tantular adalah pujangga pada masa Majapahit. Ia menulis kakawin, yaitu puisi panjang, bernama Sutasoma. Di dalamnya ada kalimat 'Bhinneka Tunggal Ika', yang kira-kira berarti 'berbeda-beda tetapi satu'. Kini kalimat itu menjadi semboyan negara Indonesia. Tahun penulisannya tidak diketahui pasti, tetapi diperkirakan antara 1365 dan 1389. Ungkapan itu mengingatkan pembaca bahwa perbedaan tidak selalu harus membuat orang bermusuhan. Gagasan tersebut muncul dalam karya sastra dan berkaitan dengan kehidupan keagamaan di lingkungan Majapahit.",
        L2: "Kakawin Sutasoma ditulis oleh Mpu Tantular pada masa Raja Hayam Wuruk, diperkirakan antara 1365 dan 1389. Ceritanya tentang Sutasoma, seorang pangeran yang meninggalkan takhta untuk menjadi pertapa dan akhirnya mengorbankan diri demi menyelamatkan orang lain. Dalam kitab ini muncul kalimat 'Bhinneka Tunggal Ika tan hana dharma mangrwa', yang menyatakan bahwa ajaran Buddha dan Siwa berbeda rupa tetapi pada hakikatnya satu. Pesan ini penting di Majapahit, tempat pemeluk Siwa dan Buddha hidup berdampingan. Kalimat itu kemudian dipilih menjadi semboyan negara Indonesia. Sebagian besar salinan naskahnya berasal dari Bali. Kakawin Sutasoma memakai kisah religius untuk membicarakan hubungan Siwa dan Buddha. Frasa Bhinneka Tunggal Ika kemudian dikenal luas sebagai semboyan Indonesia, tetapi makna modernnya berkembang melalui sejarah penerimaan yang berbeda dari konteks asli karya tersebut.",
        L3: "Kakawin Sutasoma karya Mpu Tantular diperkirakan ditulis antara 1365, ketika Nagarakretagama selesai, dan 1389, ketika Hayam Wuruk wafat. Pada tingkat cerita, kitab ini mengisahkan Bodhisattva yang lahir sebagai Sutasoma dan menaklukkan raja pemakan manusia, Purusada, bukan dengan kekuatan, melainkan dengan belas kasih dan pengorbanan diri. Pada tingkat gagasan, bait yang memuat 'Bhinneka Tunggal Ika tan hana dharma mangrwa' membahas hubungan Buddha dan Siwa, yang digambarkan sebagai satu kebenaran dengan dua rupa. Tafsir modern memperlakukan kalimat ini sebagai ungkapan toleransi, tetapi sebagian ahli mengingatkan bahwa maksud aslinya terutama menyangkut dua tradisi keagamaan di lingkungan istana Majapahit, bukan keberagaman suku dan bangsa seperti pemakaiannya di Indonesia modern. Hampir semua salinan naskahnya berasal dari Bali, sehingga teks yang kita baca sudah melalui penyalinan berkali-kali. Ini contoh bagaimana sebuah teks lama mendapat makna baru ketika diangkat menjadi simbol negara. Dalam konteks kakawin, ungkapan Bhinneka Tunggal Ika merujuk pada kesatuan di tengah perbedaan ajaran Siwa dan Buddha. Penggunaannya sebagai semboyan negara Indonesia merupakan penerimaan modern terhadap teks lama; penting untuk tidak memproyeksikan seluruh makna kebangsaan masa kini langsung ke dunia sastra abad ke-14."
      },
      catatan: "Tahun penulisan Sutasoma tidak diketahui pasti; kisaran 1365 sampai 1389 adalah perkiraan. Hampir semua salinan naskahnya berasal dari Bali. Makna 'Bhinneka Tunggal Ika' dalam teks (Buddha dan Siwa) berbeda dari makna modernnya sebagai persatuan bangsa, dan lokasi penulisannya hanya dapat diperkirakan di lingkungan istana Majapahit.",
      sumber: [
        "Kakawin Sutasoma (Mpu Tantular)",
        "Soewito Santoso, Sutasoma: A Study in Old Javanese Wajrayana (1975; periksa ulang)",
        "Kajian: 'The Kakawin Sutasoma: A Look at Bhinneka Tunggal Ika and Perceptions of the Text's Religious Implications', Inquiries Journal"
      ],
      kuis: {
        tanya: "Kalimat dari Kakawin Sutasoma mana yang kini menjadi semboyan negara Indonesia?",
        pilihan: ["Tut Wuri Handayani", "Bhinneka Tunggal Ika", "Gemah Ripah Loh Jinawi", "Sumpah Palapa"],
        benar: 1,
        penjelasan: "Bhinneka Tunggal Ika. Dalam kitab aslinya, kalimat itu membahas hubungan ajaran Buddha dan Siwa, lalu kemudian dipilih menjadi semboyan negara."
      }
    },
  {
      id: "evt-039",
      judul: "Wafatnya Hayam Wuruk dan persoalan suksesi",
      tahun: "1389",
      mulai: 1389,
      akhir: 1395,
      lokasi: { nama: "Majapahit, Jawa Timur", lat: -7.56, lng: 112.37 },
      kategori: "politik",
      ringkas: "Pergantian raja menguji hubungan keluarga dan elite Majapahit.",
      cerita: {
        L1: "Hayam Wuruk wafat pada 1389 setelah memerintah lama. Setelah itu, Majapahit menghadapi pergantian kekuasaan. Hubungan keluarga kerajaan dan persaingan para bangsawan menjadi semakin penting. Kerajaan masih bertahan, tetapi masa sesudah Hayam Wuruk tidak sama dengan masa sebelumnya.",
        L2: "Kematian Hayam Wuruk pada 1389 mengakhiri pemerintahan yang sering dianggap puncak Majapahit. Pergantian takhta membawa tantangan baru karena elite kerajaan dan garis keluarga memiliki kepentingan masing-masing. Perang Paregreg yang terkenal terjadi setelah rentang 1200–1400, sehingga untuk periode ini lebih tepat menyoroti awal perubahan politik daripada menganggap kemunduran langsung sebagai akibat tunggal kematian raja.",
        L3: "Wafatnya Hayam Wuruk pada 1389 mengubah keseimbangan dinasti Majapahit. Historiografi sering menjadikan tahun ini sebagai batas simbolis antara puncak kerajaan dan fase konflik berikutnya, tetapi perubahan tidak berlangsung secara otomatis atau seragam. Suksesi melibatkan hubungan keluarga, distribusi jabatan, dan kepentingan pusat maupun daerah. Konflik besar seperti Paregreg terjadi pada awal abad ke-15 dan berada di luar batas kronologis proyek ini, tetapi akar persoalan suksesi mulai relevan sejak akhir abad ke-14."
      },
      catatan: "Peristiwa suksesi akhir abad ke-14 harus dibedakan dari Perang Paregreg 1404–1406, yang berada di luar rentang 1200–1400.",
      sumber: ["Nagarakretagama", "Pararaton", "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Mengapa wafatnya Hayam Wuruk penting bagi sejarah Majapahit?", pilihan: ["Mengakhiri satu fase pemerintahan dan membuka tantangan suksesi", "Langsung mendirikan Kesultanan Demak", "Membuat seluruh Nusantara menjadi satu negara modern", "Menandai berdirinya Singhasari"], benar: 0, penjelasan: "Kematian raja membuka persoalan suksesi dan perubahan keseimbangan politik di istana." }
    },
  {
      id: "evt-020",
      judul: "Parameswara dan awal Kesultanan Melaka",
      tahun: "sekitar 1390-1400",
      mulai: 1390,
      akhir: 1400,
      lokasi: { nama: "Melaka, Semenanjung Malaya", lat: 2.19, lng: 102.25 },
      kategori: "politik",
      ringkas: "Pelarian pangeran Sumatra melahirkan pusat perdagangan baru Selat Malaka.",
      cerita: {
        L1: "Seorang pangeran dari Palembang bernama Parameswara melarikan diri karena konflik dengan Majapahit. Ia berkelana hingga tiba di sebuah desa nelayan di Semenanjung Malaya. Pada akhir abad ke-14, ia mendirikan kota baru bernama Melaka yang kelak menjadi pusat perdagangan Islam terbesar. Pelabuhan baru dapat tumbuh jika kapal merasa aman, tersedia barang untuk diperdagangkan, dan penguasa mampu membangun hubungan dengan penduduk setempat. Melaka memiliki posisi yang menarik karena berada di jalur pelayaran Selat Malaka.",
        L2: "Menjelang akhir abad ke-14 (sekitar 1390–1400), Parameswara, pangeran keturunan Sriwijaya dari Palembang, mencoba melepaskan diri dari naungan Majapahit. Setelah serangannya gagal, ia melarikan diri ke Temasek (Singapura) lalu bergeser ke utara dan mendirikan permukiman di Melaka. Melaka tumbuh cepat menjadi bandar pelabuhan internasional di Selat Malaka, mengambil alih peranan penting pelayaran yang dulunya dikuasai Srivijaya dan Samudra Pasai. Melaka berkembang bukan hanya karena letaknya, tetapi juga karena kemampuan penguasanya menarik pedagang dan membangun aturan pelabuhan. Perpindahan Parameswara dari Palembang ke Semenanjung Malaya merupakan bagian dari persaingan politik dan perdagangan yang lebih luas di kawasan tersebut.",
        L3: "Menurut Suma Oriental karya Tomé Pires dan Sejarah Melayu (Sulalatus Salatin), Parameswara menolak tunduk pada superioritas Majapahit atas Palembang pada akhir abad ke-14. Pelariannya membawa Parameswara membangun basis kekuasaan baru di Semenanjung Malaya sekitar tahun 1396-1400. Melaka memanfaatkan letak geografis di penyempitan Selat Malaka dan menjalin aliansi diplomatik dengan Dinasti Ming Tiongkok (lewat armada Laksamana Cheng Ho belakangan) untuk mengimbangi pengaruh Majapahit dan Ayutthaya. Berdirinya Melaka menjadi awal pergeseran poros maritim maritim maritim dan islamisasi di wilayah barat Nusantara. Riwayat Parameswara disusun dari tradisi Melayu dan sumber luar yang tidak selalu sepakat tentang nama, tanggal, serta tahapan awal Melaka. Karena itu, tanggal pendirian sebaiknya diperlakukan sebagai perkiraan. Kebangkitan Melaka kemudian menunjukkan bagaimana keamanan pelabuhan, diplomasi, dan jaringan dagang dapat mengubah tempat strategis menjadi pusat regional."
      },
      catatan: "Tahun pasti berdirinya Melaka diperdebatkan antara 1396 hingga 1400. Parameswara kelak memeluk Islam dan mengambil nama Sultan Iskandar Shah.",
      sumber: [
        "Tomé Pires, Suma Oriental (1512-1515)",
        "Sulalatus Salatin (Sejarah Melayu)",
        "O.W. Wolters, The Fall of Srivijaya in Malay History"
      ],
      kuis: {
        tanya: "Mengapa Parameswara melarikan diri dari Palembang hingga akhirnya mendirikan Melaka?",
        pilihan: [
          "Diusir oleh pedagang dari Tiongkok",
          "Mencoba melepaskan diri dari kekuasaan Majapahit namun gagal",
          "Diajak oleh Sultan Samudra Pasai",
          "Mencari tanaman cengkih di pulau lain"
        ],
        benar: 1,
        penjelasan: "Parameswara mencoba melepaskan Palembang dari pengaruh Majapahit, namun terdesak sehingga melarikan diri dan mendirikan pelabuhan Melaka."
      }
    }
];

export const EVENTS: SejarahEvent[] = [...DATA].sort((a, b) => a.mulai - b.mulai).map((ev) => {
  const keputusan = KEPUTUSAN[ev.id];
  if (!keputusan) throw new Error(`Keputusan untuk ${ev.id} belum ditulis di keputusan.ts`);
  if (keputusan.pilihan.filter((p) => p.historis).length !== 1) {
    throw new Error(`${ev.id}: harus ada tepat satu pilihan historis`);
  }
  return { ...ev, keputusan };
});
