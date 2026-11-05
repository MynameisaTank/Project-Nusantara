import type { SejarahEvent } from "../types";
import { KEPUTUSAN } from "./keputusan";

/* Versi diperluas: teks L1/L2/L3 memiliki tingkat kedalaman berbeda. Tetap periksa fakta dan sumber
   sebelum dipakai murid; bagian interpretatif dan tradisi diberi penanda kehati-hatian.

   - mulai/akhir : rentang tahun event TAMPIL di peta (bukan hanya tahun kejadian); sebagian rentang diperpanjang untuk menjaga keterbacaan visual, bukan berarti peristiwa berlangsung terus-menerus.
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
      akhir: 1410,
      lokasi: { nama: "Jawa Barat", lat: -6.80, lng: 107.60 },
      kategori: "politik",
      jenis: "sampingan",
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
      akhir: 1410,
      lokasi: { nama: "Sumatra selatan dan Selat Malaka", lat: -2.99, lng: 104.76 },
      kategori: "perdagangan",
      jenis: "sampingan",
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
      jenis: "sampingan",
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
      jenis: "utama",
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
      jenis: "sampingan",
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
      akhir: 1410,
      lokasi: { nama: "Kepulauan Maluku", lat: 0.70, lng: 127.50 },
      kategori: "perdagangan",
      jenis: "sampingan",
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
      akhir: 1410,
      lokasi: { nama: "Muara Sungai Mahakam, Kalimantan Timur", lat: -0.55, lng: 117.25 },
      kategori: "perdagangan",
      jenis: "sampingan",
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
      akhir: 1410,
      lokasi: { nama: "Ternate, Maluku Utara", lat: 0.79, lng: 127.38 },
      kategori: "perdagangan",
      jenis: "sampingan",
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
      jenis: "utama",
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
      jenis: "utama",
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
      jenis: "utama",
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
      jenis: "sampingan",
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
      jenis: "utama",
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
      akhir: 1410,
      lokasi: { nama: "Tarik, Jawa Timur (perkiraan)", lat: -7.47, lng: 112.50 },
      kategori: "perang",
      jenis: "utama",
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
      jenis: "utama",
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
      akhir: 1410,
      lokasi: { nama: "Aceh Utara, Sumatra", lat: 5.18, lng: 97.04 },
      kategori: "budaya",
      jenis: "utama",
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
      akhir: 1410,
      lokasi: { nama: "Kutai Lama, muara Mahakam, Kalimantan Timur", lat: -0.55, lng: 117.25 },
      kategori: "politik",
      jenis: "utama",
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
      akhir: 1410,
      lokasi: { nama: "Nusantara", lat: -2.50, lng: 118.00 },
      kategori: "diplomasi",
      jenis: "sampingan",
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
      jenis: "utama",
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
      jenis: "utama",
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
      jenis: "utama",
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
      jenis: "utama",
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
      jenis: "sampingan",
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
      jenis: "utama",
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
      jenis: "utama",
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
      jenis: "utama",
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
      jenis: "sampingan",
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
      akhir: 1410,
      lokasi: { nama: "Pagaruyung (Tanah Datar), Sumatra Barat", lat: -0.46, lng: 100.60 },
      kategori: "politik",
      jenis: "utama",
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
      jenis: "sampingan",
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
      jenis: "utama",
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
      jenis: "utama",
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
      jenis: "utama",
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
      jenis: "sampingan",
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
      jenis: "sampingan",
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
      jenis: "utama",
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
      jenis: "sampingan",
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
      akhir: 1410,
      lokasi: { nama: "Keraton Majapahit, Trowulan", lat: -7.56, lng: 112.37 },
      kategori: "budaya",
      jenis: "sampingan",
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
      akhir: 1410,
      lokasi: { nama: "Lingkungan istana Majapahit (perkiraan)", lat: -7.47, lng: 112.43 },
      kategori: "budaya",
      jenis: "sampingan",
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
      jenis: "utama",
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
      akhir: 1410,
      lokasi: { nama: "Melaka, Semenanjung Malaya", lat: 2.19, lng: 102.25 },
      kategori: "politik",
      jenis: "utama",
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
    },
{
      id: "evt-041",
      judul: "Melaka tumbuh menjadi pelabuhan utama Selat Malaka",
      tahun: "1405",
      mulai: 1405,
      akhir: 1420,
      lokasi: { nama: "Melaka, Semenanjung Malaya", lat: 2.19, lng: 102.25 },
      kategori: "perdagangan",
      jenis: "sampingan",
      ringkas: "Pelabuhan Melaka menarik pedagang dari berbagai kawasan Samudra Hindia dan Asia Timur.",
      cerita: {
        L1: "Pada awal abad ke-15, Melaka berkembang menjadi pelabuhan penting. Letaknya membantu kapal singgah dan bertukar barang. Pedagang datang dari berbagai wilayah, sehingga kota ini menjadi tempat bertemunya bahasa, agama, dan kebiasaan.",
        L2: "Sumber sejarah menempatkan kebangkitan Melaka pada awal abad ke-15. Letaknya di Selat Malaka memudahkan penguasa menghubungkan pedagang dari India, Asia Barat, Tiongkok, dan kepulauan Nusantara. Keberhasilan pelabuhan juga bergantung pada keamanan, aturan perdagangan, dan hubungan diplomatik.",
        L3: "Kebangkitan Melaka menunjukkan bahwa posisi geografis tidak otomatis menghasilkan kejayaan. Penguasa pelabuhan harus membangun keamanan, menjalin hubungan dengan pedagang, dan mengatur komunitas multietnis. Tanggal dan kisah pendirian Melaka berbeda antartradisi, sehingga rentang awal abad ke-15 lebih aman daripada satu tanggal yang dianggap pasti."
      },
      catatan: "Melaka muncul sebagai pusat perdagangan pada awal abad ke-15; tanggal persis pendiriannya diperdebatkan.",
      sumber: ["Metropolitan Museum of Art, Southeast Asia 1400–1600",
        "Tomé Pires, Suma Oriental"],
      kuis: { tanya: "Apa yang membantu Melaka berkembang menjadi pelabuhan besar?", pilihan: ["Letaknya dan hubungan dagang yang luas",
          "Larangan semua kapal asing",
          "Tidak adanya penduduk pesisir",
          "Penghentian perdagangan rempah"], benar: 0, penjelasan: "Lokasi strategis, keamanan, dan hubungan dengan pedagang mendukung pertumbuhan Melaka." }
    },
{
      id: "evt-042",
      judul: "Hubungan Melaka dengan Dinasti Ming",
      tahun: "1414",
      mulai: 1414,
      akhir: 1433,
      lokasi: { nama: "Melaka, Semenanjung Malaya", lat: 2.19, lng: 102.25 },
      kategori: "perdagangan",
      jenis: "sampingan",
      ringkas: "Diplomasi Melaka dengan Tiongkok membantu memperkuat posisi pelabuhannya.",
      cerita: {
        L1: "Penguasa Melaka menjalin hubungan dengan Dinasti Ming di Tiongkok. Hubungan ini membantu Melaka dikenal di jaringan perdagangan yang lebih luas. Diplomasi juga dapat memberi perlindungan dan pengakuan bagi pelabuhan yang sedang berkembang.",
        L2: "Catatan hubungan diplomatik Melaka dengan Dinasti Ming memperlihatkan pentingnya utusan dan pengakuan antar-penguasa. Hubungan dengan Tiongkok bukan berarti Melaka menjadi provinsi Tiongkok; ia merupakan bagian dari diplomasi regional yang dipakai untuk memperkuat keamanan dan perdagangan.",
        L3: "Hubungan Melaka-Ming perlu dipahami dalam praktik diplomasi Asia Timur dan Asia Tenggara, ketika penguasa mengirim utusan, hadiah, dan permintaan pengakuan. Catatan Tiongkok memberi sudut pandang penting, tetapi tidak selalu menggambarkan kepentingan politik lokal secara lengkap."
      },
      catatan: "Hubungan diplomatik tercatat dalam sumber Tiongkok dan tradisi Melayu; rincian kronologi awal Melaka perlu dibaca hati-hati.",
      sumber: ["Catatan Dinasti Ming",
        "Tomé Pires, Suma Oriental"],
      kuis: { tanya: "Apa manfaat diplomasi bagi Melaka?", pilihan: ["Menghapus semua kerajaan tetangga",
          "Memperkuat pengakuan dan hubungan perdagangan",
          "Memindahkan Melaka ke Tiongkok",
          "Menghentikan pelayaran"], benar: 1, penjelasan: "Diplomasi dapat membantu penguasa memperkuat kedudukan dan jaringan dagang." }
    },
{
      id: "evt-043",
      judul: "Melaka menjadi simpul perdagangan regional",
      tahun: "1430",
      mulai: 1430,
      akhir: 1450,
      lokasi: { nama: "Melaka, Semenanjung Malaya", lat: 2.19, lng: 102.25 },
      kategori: "perdagangan",
      jenis: "sampingan",
      ringkas: "Kapal, pedagang, dan barang dari beragam kawasan bertemu di Melaka.",
      cerita: {
        L1: "Melaka makin ramai dikunjungi pedagang. Barang dari Asia Timur, India, dan kepulauan Nusantara berpindah melalui pelabuhannya. Perdagangan membawa kekayaan sekaligus membuat penguasa harus menjaga keamanan dan aturan pasar.",
        L2: "Pada abad ke-15, Melaka menjadi simpul penting jaringan maritim. Komunitas pedagang membutuhkan gudang, penerjemah, aturan pajak, dan penyelesaian sengketa. Peran pelabuhan tidak hanya ditentukan oleh barang yang dijual, tetapi juga kepercayaan pedagang terhadap penguasa.",
        L3: "Melaka memperlihatkan bagaimana negara pelabuhan membangun kekuasaan melalui jasa perdagangan, diplomasi, dan administrasi. Sumber Portugis kemudian menggambarkan jaringan dagangnya, tetapi ditulis dalam konteks ekspansi Eropa sehingga perlu dibandingkan dengan sumber Asia."
      },
      catatan: "Kebesaran Melaka berkembang bertahap dan didukung banyak komunitas dagang.",
      sumber: ["Tomé Pires, Suma Oriental",
        "Metropolitan Museum of Art, Southeast Asia 1400–1600"],
      kuis: { tanya: "Apa yang dibutuhkan pelabuhan internasional selain lokasi strategis?", pilihan: ["Aturan, keamanan, dan kepercayaan pedagang",
          "Larangan semua bahasa asing",
          "Satu jenis barang saja",
          "Tidak ada hubungan diplomatik"], benar: 0, penjelasan: "Pedagang memerlukan keamanan, aturan yang dapat diprediksi, dan penyelesaian sengketa." }
    },
{
      id: "evt-044",
      judul: "Perubahan kekuasaan di Majapahit",
      tahun: "1478",
      mulai: 1478,
      akhir: 1488,
      lokasi: { nama: "Trowulan, Jawa Timur", lat: -7.55, lng: 112.4 },
      kategori: "politik",
      jenis: "sampingan",
      ringkas: "Akhir kekuasaan Majapahit berlangsung melalui perubahan politik yang tanggal dan tahapnya diperdebatkan.",
      cerita: {
        L1: "Pada akhir abad ke-15, kekuasaan Majapahit melemah dan pusat-pusat politik lain semakin menonjol. Tahun 1478 sering disebut dalam cerita tradisional tentang perubahan kekuasaan, tetapi prosesnya tidak sesederhana satu peristiwa saja.",
        L2: "Kronologi akhir Majapahit berbeda menurut sumber dan penafsiran sejarawan. Tahun 1478 penting dalam tradisi babad dan historiografi populer, sedangkan perubahan politik serta kelangsungan beberapa elite berlangsung lebih kompleks. Karena itu, kejatuhan Majapahit sebaiknya dipahami sebagai proses.",
        L3: "Narasi tentang berakhirnya Majapahit menggabungkan prasasti, naskah Jawa, dan tradisi yang disusun kemudian. Tahun 1478 kerap dipakai sebagai penanda, tetapi tidak berarti seluruh lembaga dan jaringan Majapahit lenyap seketika. Transisi kekuasaan di Jawa melibatkan persaingan elite, perubahan jaringan pelabuhan, dan naiknya pusat-pusat Islam di pesisir."
      },
      catatan: "Tahun 1478 merupakan penanda tradisional yang diperdebatkan, bukan tanggal pasti berakhirnya semua unsur Majapahit.",
      sumber: ["Pararaton",
        "Babad Tanah Jawi",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Bagaimana sebaiknya memahami tahun 1478 dalam sejarah Majapahit?", pilihan: ["Tanggal pasti semua wilayah langsung kosong",
          "Penanda tradisional dalam proses perubahan politik yang lebih panjang",
          "Tahun berdirinya VOC",
          "Tahun Portugis menaklukkan Melaka"], benar: 1, penjelasan: "Sumber tentang akhir Majapahit berbeda-beda; perubahan kekuasaan berlangsung lebih kompleks daripada satu tanggal." }
    },
{
      id: "evt-045",
      judul: "Demak dan berkembangnya pusat kekuasaan Islam di Jawa",
      tahun: "1500",
      mulai: 1500,
      akhir: 1518,
      lokasi: { nama: "Demak, Jawa Tengah", lat: -6.89, lng: 110.64 },
      kategori: "agama",
      jenis: "sampingan",
      ringkas: "Demak muncul sebagai salah satu pusat politik dan perdagangan penting di pesisir utara Jawa.",
      cerita: {
        L1: "Di pesisir utara Jawa, Demak tumbuh menjadi pusat kekuasaan baru. Perdagangan laut dan hubungan dengan komunitas Muslim membantu kota ini berkembang. Demak juga terlibat dalam persaingan politik dengan pusat-pusat kekuasaan lain di Jawa.",
        L2: "Kesultanan Demak muncul pada peralihan abad ke-15 ke abad ke-16. Perannya berkaitan dengan perdagangan pesisir, jaringan ulama dan pedagang, serta perubahan politik setelah melemahnya Majapahit. Tanggal dan urutan beberapa peristiwa awal Demak masih diperdebatkan dalam sumber tradisional.",
        L3: "Demak merupakan contoh negara pesisir yang memadukan basis ekonomi maritim dengan legitimasi Islam. Babad dan tradisi lokal memberi narasi penting tentang pendiri serta ekspansinya, tetapi detail kronologis harus dibandingkan dengan bukti lain. Perubahan ini tidak berarti seluruh masyarakat Jawa berganti agama atau pemerintahan pada waktu yang sama."
      },
      catatan: "Kronologi awal Demak berbeda menurut sumber tradisional; proses islamisasi berlangsung bertahap dan tidak seragam.",
      sumber: ["Babad Tanah Jawi",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200",
        "Metropolitan Museum of Art, Southeast Asia 1400–1600"],
      kuis: { tanya: "Faktor apa yang mendukung pertumbuhan Demak?", pilihan: ["Perdagangan pesisir dan jaringan politik-keagamaan",
          "Penghentian semua pelayaran",
          "Kekuasaan VOC sejak abad ke-14",
          "Penguasaan seluruh Nusantara sejak awal"], benar: 0, penjelasan: "Demak berkembang melalui kombinasi perdagangan, jaringan masyarakat Muslim, dan persaingan politik regional." }
    },
{
      id: "evt-046",
      judul: "Portugis merebut Melaka",
      tahun: "1511",
      mulai: 1511,
      akhir: 1521,
      lokasi: { nama: "Melaka, Semenanjung Malaya", lat: 2.19, lng: 102.25 },
      kategori: "perang",
      jenis: "utama",
      ringkas: "Pasukan Portugis merebut Melaka dan mengubah persaingan perdagangan Selat Malaka.",
      cerita: {
        L1: "Pada 1511, Portugis menyerang dan merebut Melaka. Sultan Mahmud Shah melarikan diri dan perlawanan berlanjut dari wilayah lain. Perebutan ini mengubah siapa yang menguasai kota pelabuhan, tetapi tidak menghentikan perdagangan di seluruh kawasan.",
        L2: "Alfonso de Albuquerque memimpin serangan Portugis ke Melaka pada 1511. Portugis membangun benteng untuk mengamankan kota dan berusaha mengendalikan perdagangan strategis. Banyak jaringan dagang tetap berlanjut melalui pelabuhan lain, sehingga penguasaan kota tidak sama dengan kendali mutlak atas Selat Malaka.",
        L3: "Penaklukan Melaka merupakan upaya Portugis menguasai simpul perdagangan dan mengamankan akses ke rempah Asia. Namun jaringan komersial Asia tidak mudah dipusatkan oleh satu kekuatan: pedagang, penguasa lokal, dan pelabuhan alternatif terus membentuk arus perdagangan. Sumber Portugis sangat rinci tentang operasi militernya, tetapi perlu dibaca dari sudut kepentingan imperium."
      },
      catatan: "Portugis merebut kota Melaka pada 1511, tetapi jaringan perdagangan regional tetap berlanjut melalui pelabuhan lain.",
      sumber: ["Tomé Pires, Suma Oriental",
        "OpenStax, The Malacca Sultanate",
        "Metropolitan Museum of Art, Southeast Asia 1400–1600"],
      kuis: { tanya: "Apa akibat langsung penaklukan Portugis pada 1511?", pilihan: ["Portugis merebut kota dan membangun benteng",
          "Semua perdagangan Asia berhenti",
          "VOC dibentuk",
          "Majapahit berdiri"], benar: 0, penjelasan: "Portugis menguasai kota Melaka dan membangun benteng, tetapi perdagangan kawasan tidak berhenti seluruhnya." }
    },
{
      id: "evt-047",
      judul: "Armada Portugis mencapai Maluku",
      tahun: "1512",
      mulai: 1512,
      akhir: 1522,
      lokasi: { nama: "Ternate, Maluku Utara", lat: 0.79, lng: 127.38 },
      kategori: "diplomasi",
      jenis: "sampingan",
      ringkas: "Portugis memasuki jaringan rempah Maluku dan berusaha membangun perjanjian serta benteng.",
      cerita: {
        L1: "Setelah merebut Melaka, Portugis mengirim pelayaran ke Maluku untuk membeli cengkih. Mereka menjalin hubungan dengan penguasa setempat, tetapi persaingan dagang dan campur tangan politik juga menimbulkan ketegangan.",
        L2: "Kehadiran Portugis di Maluku sejak 1512 menghubungkan secara langsung kekuatan Eropa dengan pusat produksi cengkih. Penguasa Ternate dan Tidore berusaha memanfaatkan persaingan asing untuk kepentingan mereka sendiri. Hubungan ini berubah-ubah antara kerja sama, perjanjian, dan konflik.",
        L3: "Kehadiran Portugis tidak sekadar “menemukan” Maluku: pulau-pulau rempah telah lama terhubung dengan jaringan dagang Asia. Kedatangan mereka menambah aktor bersenjata yang mencoba mengamankan pasokan dan mempengaruhi suksesi serta rivalitas lokal. Sumber Portugis perlu dipadukan dengan perspektif kesultanan Maluku."
      },
      catatan: "Perdagangan rempah Maluku telah berlangsung sebelum kedatangan Portugis.",
      sumber: ["Tomé Pires, Suma Oriental",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200",
        "OpenStax, The Malacca Sultanate"],
      kuis: { tanya: "Apa yang berubah ketika Portugis tiba di Maluku?", pilihan: ["Mereka memasuki jaringan rempah yang telah ada",
          "Baru saat itu cengkih tumbuh di Maluku",
          "Semua penguasa lokal kehilangan peran seketika",
          "Perdagangan Asia berhenti"], benar: 0, penjelasan: "Portugis memasuki jaringan perdagangan rempah yang sudah ada dan mencoba memperkuat pengaruhnya." }
    },
{
      id: "evt-048",
      judul: "Ekspedisi Spanyol tiba di Tidore",
      tahun: "1521",
      mulai: 1521,
      akhir: 1531,
      lokasi: { nama: "Tidore, Maluku Utara", lat: 0.68, lng: 127.4 },
      kategori: "perdagangan",
      jenis: "utama",
      ringkas: "Kedatangan ekspedisi Spanyol memperuncing persaingan Iberia dalam perdagangan rempah.",
      cerita: {
        L1: "Pada 1521, kapal dari ekspedisi Spanyol mencapai kawasan Tidore. Spanyol ingin memperoleh rempah dan mencari jalur ke Asia melalui barat. Kehadirannya membuat persaingan dengan Portugis semakin kuat.",
        L2: "Ekspedisi Magellan-Elcano mencapai Filipina dan Maluku pada 1521. Setelah Magellan tewas di Filipina, awak yang tersisa melanjutkan perjalanan; sebagian kapal berhubungan dengan Tidore. Kedatangan Spanyol memperumit persaingan Portugis-Spanyol di wilayah penghasil cengkih.",
        L3: "Kehadiran Spanyol di Tidore berada dalam konteks persaingan kerajaan Iberia setelah pelayaran lintas samudra. Penguasa Tidore dan Ternate tidak hanya menjadi objek persaingan, tetapi juga menjalin aliansi untuk menyeimbangkan kekuatan. Narasi ekspedisi sering menonjolkan pelaut Eropa, sehingga peran politik lokal perlu dipulihkan dalam pembacaan sejarah."
      },
      catatan: "Ekspedisi Spanyol mencapai Maluku pada 1521; Magellan sendiri telah tewas di Filipina.",
      sumber: ["Antonio Pigafetta, catatan pelayaran",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Mengapa kedatangan Spanyol penting bagi Maluku?", pilihan: ["Menambah persaingan Portugis-Spanyol atas perdagangan rempah",
          "Mendirikan VOC",
          "Mengakhiri semua kerajaan Maluku",
          "Membuat cengkih tumbuh di Jawa"], benar: 0, penjelasan: "Spanyol menjadi pesaing Portugis dan bersekutu dengan penguasa lokal di Maluku." }
    },
{
      id: "evt-049",
      judul: "Perjanjian Sunda-Portugis",
      tahun: "1522",
      mulai: 1522,
      akhir: 1532,
      lokasi: { nama: "Sunda Kelapa, Jakarta", lat: -6.12, lng: 106.81 },
      kategori: "diplomasi",
      jenis: "utama",
      ringkas: "Kerajaan Sunda dan Portugis membuat kesepakatan yang berkaitan dengan perdagangan dan pertahanan.",
      cerita: {
        L1: "Pada 1522, penguasa Sunda membuat kesepakatan dengan Portugis. Kerajaan Sunda berharap hubungan itu membantu menghadapi saingan regional dan mendukung perdagangan. Kesepakatan ini menunjukkan bahwa penguasa lokal mengambil keputusan diplomatik sendiri.",
        L2: "Perjanjian Sunda-Portugis pada 1522 mencakup rencana pembangunan benteng dan hubungan dagang di Sunda Kelapa. Kesepakatan itu tidak terlaksana seperti direncanakan karena perubahan kekuasaan di pesisir utara Jawa beberapa tahun kemudian.",
        L3: "Perjanjian 1522 memperlihatkan diplomasi pragmatis Kerajaan Sunda dalam persaingan regional. Portugis mencari akses pelabuhan, sementara penguasa Sunda mencari mitra strategis. Perjanjian tertulis menjadi sumber penting, tetapi harus dibaca dalam konteks ketimpangan kekuatan dan perubahan cepat di pesisir Jawa."
      },
      catatan: "Kesepakatan dibuat pada 1522; rencana benteng Portugis di Sunda Kelapa tidak terwujud.",
      sumber: ["Prasasti/monumen perjanjian Sunda-Portugis",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Apa tujuan utama diplomasi Sunda dengan Portugis?", pilihan: ["Mencari mitra dagang dan pertahanan",
          "Membubarkan semua pelabuhan",
          "Menguasai Ternate",
          "Mendirikan VOC"], benar: 0, penjelasan: "Sunda berharap memperoleh dukungan dagang dan strategis melalui kesepakatan dengan Portugis." }
    },
{
      id: "evt-050",
      judul: "Sunda Kelapa beralih ke kekuasaan pesisir Islam",
      tahun: "1527",
      mulai: 1527,
      akhir: 1537,
      lokasi: { nama: "Sunda Kelapa, Jakarta", lat: -6.12, lng: 106.81 },
      kategori: "agama",
      jenis: "utama",
      ringkas: "Tradisi sejarah mengaitkan 1527 dengan perubahan kekuasaan Sunda Kelapa dan nama Jayakarta.",
      cerita: {
        L1: "Pada abad ke-16, persaingan di pesisir utara Jawa mengubah penguasa sejumlah pelabuhan. Tradisi menyebut tahun 1527 sebagai saat Sunda Kelapa direbut oleh pasukan yang bersekutu dengan Demak dan Cirebon, lalu dikenal sebagai Jayakarta.",
        L2: "Kisah penaklukan Sunda Kelapa dan penamaan Jayakarta dikaitkan dengan Fatahillah dalam tradisi lokal. Rincian tokoh, tanggal, dan perannya tidak selalu seragam dalam sumber, sehingga tahun 1527 lebih baik diperlakukan sebagai tanggal tradisional yang populer.",
        L3: "Peralihan Sunda Kelapa menggambarkan persaingan antara Kerajaan Sunda, pusat-pusat pesisir Islam, dan Portugis. Historiografi populer mengaitkannya dengan Fatahillah dan tahun 1527, namun identifikasi tokoh dan detail operasi masih diperdebatkan. Perubahan pelabuhan tersebut punya arti strategis karena menghubungkan Selat Sunda dan jaringan pesisir Jawa."
      },
      catatan: "Tahun 1527 dan kisah Fatahillah merupakan kronologi tradisional yang detailnya diperdebatkan.",
      sumber: ["Tradisi lokal Jayakarta",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Mengapa Sunda Kelapa penting secara strategis?", pilihan: ["Menghubungkan jaringan pelayaran di pesisir Jawa dan Selat Sunda",
          "Karena tidak memiliki pelabuhan",
          "Karena terletak di Maluku",
          "Karena menjadi ibu kota VOC pada 1400"], benar: 0, penjelasan: "Lokasi Sunda Kelapa penting bagi pelayaran dan perdagangan di bagian barat Jawa." }
    },
{
      id: "evt-051",
      judul: "Banten berkembang sebagai kesultanan pelabuhan",
      tahun: "1526",
      mulai: 1526,
      akhir: 1552,
      lokasi: { nama: "Banten Lama, Banten", lat: -6.04, lng: 106.15 },
      kategori: "perdagangan",
      jenis: "sampingan",
      ringkas: "Banten tumbuh sebagai pelabuhan alternatif di jalur Selat Sunda.",
      cerita: {
        L1: "Banten berkembang menjadi pelabuhan yang ramai. Letaknya di dekat Selat Sunda membuat kapal dapat singgah dan memperdagangkan lada serta barang lain. Pedagang dari berbagai wilayah datang, dan penguasa membangun hubungan untuk memperkuat kota.",
        L2: "Kesultanan Banten berkembang pada abad ke-16 dan menjadi pesaing penting bagi Melaka Portugis dalam jaringan perdagangan lada. Pelabuhan ini menarik pedagang Muslim Asia dan kemudian pedagang Eropa. Perkembangannya terkait perubahan jalur dagang setelah Portugis merebut Melaka.",
        L3: "Banten merupakan contoh pusat perdagangan yang memanfaatkan Selat Sunda untuk menghubungkan Samudra Hindia dengan Laut Jawa. Kebangkitannya menunjukkan bahwa perebutan satu pelabuhan tidak otomatis memonopoli jaringan maritim. Kronologi awal kesultanan dan hubungan tokoh-tokohnya bersumber dari tradisi lokal dan kajian kemudian, sehingga tanggal pendirian tertentu perlu dikualifikasi."
      },
      catatan: "Banten berkembang bertahap pada abad ke-16; tahun pendirian persis berbeda menurut sumber.",
      sumber: ["History of Indonesia: A Resource Book, Kemendikdasmen repository",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Apa keunggulan lokasi Banten?", pilihan: ["Dekat Selat Sunda dan jalur perdagangan",
          "Terletak di tengah pegunungan tanpa akses laut",
          "Menguasai seluruh cengkih dunia",
          "Tidak memiliki pesaing"], benar: 0, penjelasan: "Banten berada dekat Selat Sunda dan memanfaatkan perdagangan lada serta pelayaran regional." }
    },
{
      id: "evt-052",
      judul: "Sultan Khairun memerintah Ternate",
      tahun: "1535",
      mulai: 1535,
      akhir: 1570,
      lokasi: { nama: "Ternate, Maluku Utara", lat: 0.79, lng: 127.38 },
      kategori: "politik",
      jenis: "sampingan",
      ringkas: "Sultan Khairun berusaha menjaga kepentingan Ternate di tengah persaingan dengan Portugis.",
      cerita: {
        L1: "Sultan Khairun memerintah Ternate pada abad ke-16. Ternate berdagang cengkih dan bersaing dengan Tidore. Portugis menjadi mitra sekaligus ancaman karena berusaha memperkuat pengaruhnya atas perdagangan dan politik lokal.",
        L2: "Khairun menggunakan diplomasi dan persaingan antarkekuatan untuk menjaga posisi Ternate. Hubungan dengan Portugis memburuk ketika campur tangan mereka menyentuh agama, perdagangan, dan kekuasaan. Ketegangan ini menjadi latar konflik pada akhir pemerintahannya.",
        L3: "Pemerintahan Khairun memperlihatkan negosiasi rumit antara kesultanan lokal dan kekuatan asing bersenjata. Ternate tidak sekadar menerima atau menolak Portugis; penguasa berusaha memanfaatkan aliansi sambil mempertahankan otonomi. Persaingan dengan Tidore dan ketegangan internal juga mempengaruhi strategi politik."
      },
      catatan: "Khairun memerintah hingga dibunuh pada 1570; hubungan Ternate-Portugis berubah dari kerja sama menjadi konflik.",
      sumber: ["OpenStax, The Malacca Sultanate",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Apa tantangan utama Khairun?", pilihan: ["Menjaga otonomi Ternate sambil menghadapi persaingan dagang dan Portugis",
          "Mencari cengkih di Jawa",
          "Mengatur VOC yang sudah menguasai Banda",
          "Mengakhiri pelayaran di Maluku"], benar: 0, penjelasan: "Khairun harus menyeimbangkan perdagangan, persaingan antarkerajaan, dan campur tangan Portugis." }
    },
{
      id: "evt-053",
      judul: "Wafatnya Sultan Trenggana dan perubahan di Demak",
      tahun: "1546",
      mulai: 1546,
      akhir: 1556,
      lokasi: { nama: "Demak, Jawa Tengah", lat: -6.89, lng: 110.64 },
      kategori: "politik",
      jenis: "utama",
      ringkas: "Wafatnya Trenggana membuka persaingan suksesi dan melemahkan pengaruh Demak.",
      cerita: {
        L1: "Sultan Trenggana adalah salah satu penguasa penting Demak. Ia wafat pada 1546 ketika ekspedisi militer berlangsung. Setelah itu, persaingan suksesi ikut mengubah keseimbangan kekuasaan di Jawa.",
        L2: "Trenggana berperan dalam perluasan pengaruh Demak. Wafatnya pada 1546 diikuti konflik elite dan perubahan hubungan antara pusat-pusat kekuasaan Jawa. Keterangan rinci tentang ekspedisi terakhir dan suksesi berasal dari sumber yang tidak selalu sepakat.",
        L3: "Kematian Trenggana menunjukkan risiko politik dinasti ketika ekspansi bergantung pada kepemimpinan personal. Demak tidak lenyap seketika, tetapi suksesi dan pertumbuhan pusat-pusat regional mengubah struktur kekuasaan Jawa pada pertengahan abad ke-16."
      },
      catatan: "Tanggal 1546 umum dipakai untuk wafatnya Trenggana; detail kejadian terakhirnya tidak sepenuhnya pasti.",
      sumber: ["Babad Tanah Jawi",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Mengapa wafatnya Trenggana penting?", pilihan: ["Membuka persoalan suksesi dan mengubah keseimbangan politik",
          "Mendirikan VOC",
          "Mengakhiri semua kesultanan Jawa",
          "Menandai penaklukan Melaka oleh Portugis"], benar: 0, penjelasan: "Kematian penguasa membuka persaingan suksesi dan dapat mengubah aliansi politik." }
    },
{
      id: "evt-054",
      judul: "Sultan Khairun dibunuh di benteng Portugis",
      tahun: "1570",
      mulai: 1570,
      akhir: 1580,
      lokasi: { nama: "Ternate, Maluku Utara", lat: 0.79, lng: 127.38 },
      kategori: "perang",
      jenis: "utama",
      ringkas: "Pembunuhan Khairun memicu perlawanan terbuka Ternate terhadap Portugis.",
      cerita: {
        L1: "Pada 1570, Sultan Khairun dibunuh oleh pihak Portugis setelah perundingan di benteng mereka. Peristiwa ini membuat banyak orang Ternate marah dan memperkuat perlawanan terhadap Portugis.",
        L2: "Pembunuhan Khairun oleh Portugis menjadi titik balik hubungan kedua pihak. Putranya, Baabullah, memimpin perlawanan yang menggabungkan dukungan politik lokal dan tekanan militer terhadap benteng Portugis.",
        L3: "Peristiwa 1570 sering dipahami sebagai titik balik dalam konflik Ternate-Portugis. Kekerasan saat perundingan meruntuhkan kepercayaan dan memberi legitimasi bagi Baabullah untuk menyatukan perlawanan. Namun, keberhasilan Ternate juga bergantung pada jaringan dukungan antarpulau dan kemampuan menekan logistik Portugis."
      },
      catatan: "Sumber sejarah menyebut Khairun dibunuh oleh Portugis pada 1570; detail narasi berbeda menurut sumber.",
      sumber: ["OpenStax, The Malacca Sultanate",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Apa akibat politik pembunuhan Khairun?", pilihan: ["Memicu perlawanan Ternate yang dipimpin Baabullah",
          "Mendirikan Melaka",
          "Mengakhiri perdagangan cengkih",
          "Membentuk Demak"], benar: 0, penjelasan: "Pembunuhan Khairun memperkuat perlawanan dan mengantarkan Baabullah memimpin Ternate." }
    },
{
      id: "evt-055",
      judul: "Baabullah mengusir Portugis dari Ternate",
      tahun: "1575",
      mulai: 1575,
      akhir: 1585,
      lokasi: { nama: "Ternate, Maluku Utara", lat: 0.79, lng: 127.38 },
      kategori: "perang",
      jenis: "utama",
      ringkas: "Setelah pengepungan dan perlawanan, Portugis meninggalkan Ternate pada 1575.",
      cerita: {
        L1: "Baabullah melanjutkan perlawanan setelah ayahnya, Khairun, dibunuh. Pada 1575, Portugis meninggalkan benteng mereka di Ternate. Peristiwa ini menjadi kemenangan penting bagi kesultanan setempat.",
        L2: "Baabullah membangun dukungan antarpulau dan menekan posisi Portugis. Setelah pengepungan panjang, Portugis meninggalkan Ternate pada 1575, meski tetap bertahan di bagian lain Maluku. Kemenangan itu memperlihatkan kemampuan penguasa lokal memanfaatkan jaringan politik dan laut.",
        L3: "Keberhasilan Baabullah bukan hanya hasil pertempuran tunggal, melainkan strategi pengepungan, diplomasi, dan jaringan dukungan di Maluku. Pengusiran Portugis dari Ternate tidak mengakhiri persaingan Eropa di seluruh kawasan, tetapi mengubah keseimbangan regional dan memperkuat posisi Ternate."
      },
      catatan: "Portugis meninggalkan Ternate pada 1575; mereka masih bertahan di lokasi lain di kawasan Maluku.",
      sumber: ["OpenStax, The Malacca Sultanate",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Mengapa Baabullah berhasil menekan Portugis?", pilihan: ["Menggabungkan perlawanan, dukungan regional, dan pengepungan",
          "Karena tidak ada perdagangan di Maluku",
          "Karena VOC membantunya pada 1400",
          "Karena semua benteng Portugis di dunia runtuh"], benar: 0, penjelasan: "Baabullah memanfaatkan dukungan lokal dan tekanan berkelanjutan hingga Portugis meninggalkan Ternate." }
    },
{
      id: "evt-056",
      judul: "Pakuan Pajajaran jatuh dalam tradisi sejarah Sunda",
      tahun: "1579",
      mulai: 1579,
      akhir: 1589,
      lokasi: { nama: "Pakuan, Bogor, Jawa Barat", lat: -6.6, lng: 106.8 },
      kategori: "perang",
      jenis: "utama",
      ringkas: "Tradisi mengaitkan 1579 dengan berakhirnya pusat kerajaan Sunda di Pakuan.",
      cerita: {
        L1: "Pada akhir abad ke-16, pusat kerajaan Sunda di Pakuan tidak lagi menjadi pusat kekuasaan seperti sebelumnya. Tahun 1579 sering disebut sebagai penanda jatuhnya Pakuan, tetapi sumber dan penafsiran tentang tahap akhirnya perlu dibaca hati-hati.",
        L2: "Pakuan Pajajaran berhadapan dengan ekspansi kesultanan pesisir, terutama Banten. Tahun 1579 lazim dikaitkan dengan jatuhnya Pakuan dalam tradisi sejarah Sunda. Proses melemahnya kerajaan Sunda lebih panjang daripada satu serangan dan melibatkan perubahan jaringan politik serta perdagangan.",
        L3: "Akhir Pakuan Pajajaran menjadi salah satu transisi besar di Jawa Barat. Sumber-sumber Sunda dan tradisi kemudian memberikan kronologi yang tidak selalu sama, sehingga tahun 1579 sebaiknya disebut sebagai penanda tradisional. Peralihan itu juga tidak berarti penduduk Sunda atau identitas budayanya menghilang."
      },
      catatan: "Tahun 1579 lazim disebut sebagai penanda jatuhnya Pakuan; detail kronologi berasal dari tradisi yang perlu dikritisi.",
      sumber: ["Carita Parahyangan",
        "Tradisi sejarah Sunda",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Apa yang ditandai tahun 1579 dalam tradisi sejarah Sunda?", pilihan: ["Jatuhnya pusat Pakuan Pajajaran",
          "VOC berdiri",
          "Portugis merebut Melaka",
          "Singhasari didirikan"], benar: 0, penjelasan: "Tahun 1579 sering digunakan sebagai penanda jatuhnya Pakuan, walau kronologi detailnya perlu kehati-hatian." }
    },
{
      id: "evt-057",
      judul: "Mataram muncul sebagai kekuatan di Jawa Tengah",
      tahun: "1586",
      mulai: 1586,
      akhir: 1600,
      lokasi: { nama: "Kotagede, Yogyakarta", lat: -7.83, lng: 110.4 },
      kategori: "politik",
      jenis: "sampingan",
      ringkas: "Mataram berkembang dari basis pedalaman dan kemudian menjadi kekuatan besar di Jawa.",
      cerita: {
        L1: "Pada akhir abad ke-16, Mataram tumbuh di Jawa bagian tengah. Penguasanya memperluas pengaruh dari wilayah pedalaman dan bersaing dengan pusat-pusat pesisir. Mataram kemudian menjadi salah satu kerajaan besar di Jawa.",
        L2: "Sutawijaya atau Panembahan Senapati dikaitkan dengan pembentukan Mataram sekitar 1580-an. Kekuatannya bertumpu pada pertanian pedalaman dan ekspansi politik, berbeda dengan kerajaan pelabuhan yang bergantung pada perdagangan laut. Tanggal dan tahap awalnya bersumber dari tradisi Jawa yang perlu dibaca kritis.",
        L3: "Kebangkitan Mataram menunjukkan bahwa kekuasaan Jawa akhir abad ke-16 tidak hanya dibentuk oleh pelabuhan. Basis agraris, jaringan bangsawan, dan klaim legitimasi menjadi sumber daya bagi ekspansi. Babad memberikan narasi dinasti, tetapi rincian awal kerajaan perlu dibandingkan dengan sumber lain."
      },
      catatan: "Tahun 1586 sering dipakai sebagai penanda awal Mataram; kronologi tradisionalnya tidak sepenuhnya pasti.",
      sumber: ["Babad Tanah Jawi",
        "History of Indonesia: A Resource Book, Kemendikdasmen repository",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Apa yang membedakan basis kekuasaan Mataram dari kerajaan pelabuhan?", pilihan: ["Kekuatan pedalaman dan pertanian",
          "Tidak memiliki penduduk",
          "Bergantung sepenuhnya pada cengkih Maluku",
          "Dibentuk oleh VOC"], benar: 0, penjelasan: "Mataram tumbuh dari basis pedalaman agraris, meskipun tetap berhubungan dengan wilayah pesisir." }
    },
{
      id: "evt-058",
      judul: "Ekspedisi Belanda tiba di Banten",
      tahun: "1596",
      mulai: 1596,
      akhir: 1606,
      lokasi: { nama: "Banten Lama, Banten", lat: -6.04, lng: 106.15 },
      kategori: "perdagangan",
      jenis: "utama",
      ringkas: "Kedatangan armada Belanda membuka fase baru persaingan Eropa dalam perdagangan Asia.",
      cerita: {
        L1: "Pada 1596, armada Belanda yang dipimpin Cornelis de Houtman tiba di Banten. Mereka ingin membeli rempah langsung dari Asia. Kedatangan ini menambah pesaing Eropa, tetapi para penguasa dan pedagang setempat tetap menentukan banyak syarat perdagangan.",
        L2: "Ekspedisi Belanda pertama tiba di Banten pada 1596. Hubungan awalnya penuh ketegangan dan tidak langsung menghasilkan dominasi Belanda. Banten menjadi tempat penting bagi pedagang Eropa karena aksesnya ke lada dan jalur Selat Sunda.",
        L3: "Kedatangan Belanda merupakan bagian dari upaya perusahaan dagang Eropa menghindari perantara dan memperoleh rempah secara langsung. Namun mereka memasuki pasar yang sudah memiliki aturan, jaringan, dan penguasa berpengalaman. Hubungan awal yang sulit mengingatkan bahwa kehadiran kapal Eropa tidak otomatis berarti kontrol kolonial."
      },
      catatan: "Ekspedisi Belanda pertama tiba di Banten pada 1596; dominasi VOC berkembang kemudian.",
      sumber: ["Metropolitan Museum of Art, Southeast Asia 1400–1600",
        "Arsip Nasional Republik Indonesia, Sejarah Nusantara",
        "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
      kuis: { tanya: "Apa arti kedatangan Belanda pada 1596?", pilihan: ["Awal kontak dagang Belanda yang tercatat di Banten",
          "Awal berdirinya VOC pada 1596",
          "Akhir seluruh perdagangan Asia",
          "Penaklukan seluruh Jawa"], benar: 0, penjelasan: "Armada Belanda tiba untuk berdagang, tetapi belum langsung menguasai Banten atau Nusantara." }
    },
{
      id: "evt-059",
      judul: "Kapal Belanda menjangkau Kepulauan Banda",
      tahun: "1599",
      mulai: 1599,
      akhir: 1609,
      lokasi: { nama: "Banda Neira, Maluku", lat: -4.52, lng: 129.9 },
      kategori: "perdagangan",
      jenis: "sampingan",
      ringkas: "Pedagang Belanda mulai berhubungan langsung dengan penghasil pala dan fuli di Banda.",
      cerita: {
        L1: "Pada akhir abad ke-16, kapal Belanda datang ke Kepulauan Banda untuk membeli pala dan fuli. Penduduk Banda telah lama berdagang dengan berbagai jaringan Asia. Hubungan baru ini kemudian menimbulkan perebutan hak dagang dan tekanan monopoli.",
        L2: "Kontak Belanda dengan Banda terjadi pada 1599, sebelum VOC dibentuk. Pada 1602 dibuat perjanjian dagang dengan sebagian penguasa Banda, tetapi tuntutan monopoli memicu ketegangan dan akhirnya konflik lebih besar pada abad ke-17.",
        L3: "Banda memperlihatkan dampak langsung ekspansi perusahaan dagang terhadap masyarakat penghasil rempah. Penduduk dan penguasa lokal memiliki jaringan dagang sendiri, sementara perusahaan Eropa berupaya mengubah akses pasar menjadi monopoli. Konflik berikutnya menunjukkan bahwa kontrak dagang yang dibuat di bawah tekanan armada tidak selalu mencerminkan persetujuan setara."
      },
      catatan: "Kontak Belanda dengan Banda tercatat sejak 1599; konflik dan penaklukan besar terjadi pada abad ke-17.",
      sumber: ["Ardi Tri Yuwono & Gijs ter Braake, Journal of Indonesian History (2025)",
        "Arsip Nasional Republik Indonesia, Sejarah Nusantara"],
      kuis: { tanya: "Mengapa tuntutan monopoli menimbulkan ketegangan di Banda?", pilihan: ["Membatasi kebebasan penduduk berdagang dengan mitra lain",
          "Karena pala tidak tumbuh di Banda",
          "Karena Banda tidak memiliki jaringan dagang",
          "Karena VOC sudah ada sejak abad ke-14"], benar: 0, penjelasan: "Monopoli mengancam jaringan perdagangan yang telah dimiliki masyarakat Banda." }
    },
{
      id: "evt-060",
      judul: "Persaingan dagang Eropa makin intensif",
      tahun: "1600",
      mulai: 1600,
      akhir: 1610,
      lokasi: { nama: "Banten Lama, Banten", lat: -6.04, lng: 106.15 },
      kategori: "perdagangan",
      jenis: "sampingan",
      ringkas: "Armada Inggris dan Belanda ikut bersaing mendapatkan akses ke pasar rempah Asia.",
      cerita: {
        L1: "Sekitar 1600, lebih banyak perusahaan dan armada Eropa berusaha berdagang langsung di Asia. Mereka bersaing satu sama lain dan berunding dengan penguasa pelabuhan Nusantara. Persaingan ini belum berarti mereka langsung menguasai seluruh perdagangan.",
        L2: "Perusahaan dagang Inggris berdiri pada 1600, sementara perusahaan-perusahaan Belanda bergabung membentuk VOC pada 1602. Keduanya berusaha memperoleh rempah dan membuat perjanjian dengan penguasa lokal, yang tetap memiliki kepentingan sendiri.",
        L3: "Perubahan organisasi perusahaan Eropa pada awal abad ke-17 meningkatkan kemampuan menghimpun modal, armada, dan kekuatan bersenjata. Namun pengaruhnya tumbuh melalui perjanjian, konflik, dan aliansi yang berbeda-beda di setiap wilayah. Tidak tepat menyamakan kedatangan awal pedagang Eropa dengan kolonisasi penuh."
      },
      catatan: "Perusahaan Inggris dibentuk pada 1600 dan VOC pada 1602; kontrol mereka di Nusantara berkembang bertahap.",
      sumber: ["Arsip Nasional Republik Indonesia, Sejarah Nusantara",
        "Western Australian Museum, VOC"],
      kuis: { tanya: "Apa yang membedakan perusahaan dagang besar awal abad ke-17?", pilihan: ["Mereka menghimpun modal dan berusaha mengamankan akses dagang",
          "Mereka langsung menguasai seluruh Nusantara",
          "Mereka menghentikan persaingan",
          "Mereka hanya berdagang di darat"], benar: 0, penjelasan: "Perusahaan dagang menghimpun modal dan armada untuk bersaing, tetapi dominasi regional tumbuh bertahap." }
    },
{
      id: "evt-061",
      judul: "VOC dibentuk di Belanda",
      tahun: "1602",
      mulai: 1602,
      akhir: 1612,
      lokasi: { nama: "Amsterdam, Belanda / Nusantara", lat: -6.04, lng: 106.15 },
      kategori: "perdagangan",
      jenis: "utama",
      ringkas: "Penggabungan perusahaan Belanda membentuk VOC dengan hak dagang dan kewenangan khusus.",
      cerita: {
        L1: "Pada 1602, beberapa perusahaan dagang Belanda digabung menjadi VOC. Perusahaan ini mendapat hak khusus untuk berdagang di Asia dan dapat membangun benteng serta membuat perjanjian. Dampaknya di Nusantara berkembang selama beberapa generasi, bukan seketika.",
        L2: "VOC dibentuk pada 1602 untuk mengurangi persaingan antarkelompok pedagang Belanda dan memperkuat posisi mereka dalam perdagangan Asia. Perusahaan memperoleh kewenangan yang melampaui perusahaan biasa, termasuk membuat perjanjian dan menggunakan kekuatan militer.",
        L3: "Pembentukan VOC menggabungkan modal swasta dengan kewenangan publik dari negara Belanda. Di Nusantara, perusahaan itu berusaha mengubah hubungan dagang menjadi kontrol atas jalur dan komoditas tertentu. Prosesnya bertahap dan bergantung pada konflik lokal, aliansi, serta perlawanan masyarakat dan penguasa setempat."
      },
      catatan: "VOC berdiri pada 1602; kekuasaannya di Nusantara meluas bertahap dan tidak langsung mencakup seluruh wilayah.",
      sumber: ["Arsip Nasional Republik Indonesia, Sejarah Nusantara",
        "F.S. Gaastra, The Organization of the VOC",
        "Western Australian Museum, VOC"],
      kuis: { tanya: "Apa yang membuat VOC berbeda dari rombongan pedagang biasa?", pilihan: ["Memiliki hak khusus untuk membuat perjanjian dan menggunakan kekuatan",
          "Tidak memiliki kapal",
          "Hanya berdagang di Eropa",
          "Dibentuk oleh kerajaan Majapahit"], benar: 0, penjelasan: "VOC memperoleh hak khusus dari pemerintah Belanda, termasuk membuat perjanjian dan membangun benteng." }
    },
{
      id: "evt-062",
      judul: "VOC merebut benteng Portugis di Ambon",
      tahun: "1605",
      mulai: 1605,
      akhir: 1615,
      lokasi: { nama: "Ambon, Maluku", lat: -3.7, lng: 128.18 },
      kategori: "perang",
      jenis: "utama",
      ringkas: "Portugis menyerahkan benteng di Ambon kepada armada VOC.",
      cerita: {
        L1: "Pada 1605, armada VOC mengambil alih benteng Portugis di Ambon. Peristiwa ini menandai perubahan kekuatan Eropa di sebagian Maluku. Namun persaingan rempah dan peran kerajaan lokal tetap berlanjut.",
        L2: "Armada VOC pimpinan Steven van der Hagen menerima penyerahan benteng Portugis di Ambon pada 1605. VOC kemudian menjadikan Ambon sebagai salah satu pusat operasinya di kawasan rempah. Pengambilalihan benteng tidak berarti seluruh Maluku langsung berada di bawah kendali VOC.",
        L3: "Peristiwa Ambon menunjukkan bahwa persaingan perusahaan Eropa mulai mengambil bentuk militer langsung. Namun kendali atas benteng dan pelabuhan tidak identik dengan kedaulatan penuh atas pulau-pulau, masyarakat, atau seluruh jaringan perdagangan. Perusahaan harus terus bernegosiasi dan berkonflik dengan kekuatan lokal."
      },
      catatan: "VOC mengambil alih benteng Portugis di Ambon pada 1605; kontrol kawasan Maluku tetap diperebutkan.",
      sumber: ["Western Australian Museum, VOC",
        "Arsip Nasional Republik Indonesia, Sejarah Nusantara"],
      kuis: { tanya: "Apa makna pengambilalihan benteng Ambon pada 1605?", pilihan: ["Menandai meningkatnya persaingan militer VOC-Portugis",
          "Mengakhiri semua kerajaan Maluku",
          "Mendirikan Kesultanan Demak",
          "Membuat Portugis meninggalkan seluruh Asia"], benar: 0, penjelasan: "Pengambilalihan benteng menandai pergeseran kekuatan Eropa di Ambon, bukan penguasaan seluruh Maluku." }
    },
{
      id: "evt-063",
      judul: "Gowa-Talloq menerima Islam",
      tahun: "1605",
      mulai: 1605,
      akhir: 1615,
      lokasi: { nama: "Makassar, Sulawesi Selatan", lat: -5.14, lng: 119.41 },
      kategori: "agama",
      jenis: "utama",
      ringkas: "Penerimaan Islam oleh penguasa Gowa-Talloq memperkuat perubahan agama dan politik di Sulawesi Selatan.",
      cerita: {
        L1: "Pada awal abad ke-17, penguasa Gowa-Talloq menerima Islam. Dari pusat-pusat politik Sulawesi Selatan, Islam kemudian menyebar melalui hubungan kerajaan, perdagangan, dan ulama. Proses ini berlangsung bertahap dan tidak seragam bagi semua penduduk.",
        L2: "Konversi penguasa Gowa-Talloq pada sekitar 1605 menjadi tonggak penting dalam sejarah Sulawesi Selatan. Hubungan perdagangan Makassar yang luas membantu penyebaran Islam, sementara kerajaan-kerajaan setempat mempertahankan identitas dan struktur politik mereka.",
        L3: "Islamisasi Gowa-Talloq memperlihatkan hubungan timbal balik antara agama, diplomasi, dan pembentukan negara. Penerimaan Islam oleh elite tidak berarti semua penduduk langsung berubah keyakinan. Penyebaran berikutnya melibatkan jaringan ulama, perdagangan, konflik, dan kebijakan kerajaan."
      },
      catatan: "Tahun sekitar 1605 lazim dipakai untuk penerimaan Islam oleh penguasa Gowa-Talloq; proses masyarakat lebih bertahap.",
      sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200",
        "Kajian sejarah Sulawesi Selatan"],
      kuis: { tanya: "Apa yang dapat disimpulkan dari penerimaan Islam oleh Gowa-Talloq?", pilihan: ["Islamisasi berlangsung melalui kerajaan dan jaringan sosial secara bertahap",
          "Semua penduduk langsung berubah agama pada satu hari",
          "Perdagangan Makassar berhenti",
          "VOC mendirikan Gowa"], benar: 0, penjelasan: "Penerimaan Islam oleh elite menjadi tonggak penting, tetapi perubahan masyarakat berlangsung bertahap." }
    },
{
      id: "evt-064",
      judul: "Iskandar Muda naik takhta di Aceh",
      tahun: "1607",
      mulai: 1607,
      akhir: 1617,
      lokasi: { nama: "Banda Aceh, Aceh", lat: 5.55, lng: 95.32 },
      kategori: "politik",
      jenis: "utama",
      ringkas: "Awal pemerintahan Iskandar Muda menandai fase ekspansi Kesultanan Aceh pada abad ke-17.",
      cerita: {
        L1: "Pada 1607, Iskandar Muda menjadi sultan Aceh. Pada masa pemerintahannya, Aceh memperkuat armada, perdagangan, dan kekuasaan regional. Aceh menjadi salah satu pusat penting di bagian barat Nusantara.",
        L2: "Pemerintahan Iskandar Muda (1607–1636) membawa Aceh ke puncak kekuatan regional. Kesultanan berusaha menguasai jalur perdagangan dan menghadapi Portugis di Melaka. Perluasan kekuasaan juga melibatkan hubungan dengan wilayah pesisir Sumatra dan Semenanjung Malaya.",
        L3: "Naiknya Iskandar Muda menandai fase ekspansi Aceh dalam persaingan dengan Portugis dan pusat-pusat dagang Selat Malaka. Kekuasaan maritim Aceh bergantung pada armada, sumber daya, diplomasi, dan mobilisasi wilayah. Kebijakan ekspansinya juga membawa beban bagi daerah yang ditundukkan, sehingga keberhasilan militer perlu dibaca bersama dampak politiknya."
      },
      catatan: "Iskandar Muda memerintah 1607–1636; periode ekspansi utamanya berlanjut setelah batas era ini.",
      sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200",
        "Tomé Pires, Suma Oriental"],
      kuis: { tanya: "Apa yang menjadi ciri penting awal pemerintahan Iskandar Muda?", pilihan: ["Penguatan Aceh sebagai kekuatan regional dan maritim",
          "Pendirian Melaka",
          "Kekalahan Majapahit pada 1222",
          "Pembentukan VOC pada 1400"], benar: 0, penjelasan: "Aceh memperkuat armada dan pengaruh regional di bawah Iskandar Muda." }
    },
{
    id: "evt-065",
    judul: "Melaka tumbuh sebagai pelabuhan penghubung Selat Malaka",
    tahun: "sekitar 1400",
    mulai: 1400,
    akhir: 1415,
    lokasi: { nama: "Semenanjung Melayu", lat: 2.2, lng: 102.25 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Sekitar pergantian abad ke-15, Melaka berkembang di jalur sempit yang menghubungkan Samudra Hindia dan Laut Cina Selatan. Kapal dari berbagai wilayah membawa beras, kain, logam, ha",
    cerita: {
      L1: "Sekitar pergantian abad ke-15, Melaka berkembang di jalur sempit yang menghubungkan Samudra Hindia dan Laut Cina Selatan. Kapal dari berbagai wilayah membawa beras, kain, logam, hasil hutan, dan rempah. Keberhasilan pelabuhan ini bergantung pada kemampuan penguasa menjaga keamanan laut, menjalin hubungan dengan pedagang asing, dan bekerja sama dengan masyarakat pesisir termasuk Orang Laut.",
      L2: "Melaka memperoleh keuntungan dari letaknya di Selat Malaka, tetapi posisi strategis juga membuatnya rentan terhadap persaingan. Penguasa perlu mengatur bea, persediaan, penyelesaian sengketa, dan hubungan dengan jaringan niaga dari Sumatra, Jawa, India, serta Tiongkok. Kemakmuran pelabuhan bukan hasil satu faktor: keamanan pelayaran dan kepercayaan pedagang sama pentingnya dengan lokasi.",
      L3: "Kisah pendirian Melaka dikaitkan dengan Parameswara dan perpindahan kekuasaan setelah konflik di kawasan Singapura. Detail awalnya berasal dari tradisi dan sumber yang ditulis kemudian, sehingga tahun pendirian lazim diperkirakan sekitar 1400, bukan tanggal tunggal yang sepenuhnya pasti. Pertumbuhan Melaka memperlihatkan bagaimana pusat niaga baru dapat muncul saat jaringan regional berubah dan penguasa berhasil menyediakan perlindungan serta aturan perdagangan."
    },
    catatan: "Sumber sejarah berbeda dalam detail kronologi pendirian Melaka; sekitar 1400 merupakan perkiraan yang umum digunakan.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Apa yang membantu Melaka berkembang sebagai pelabuhan?", pilihan: ["Letaknya di jalur pelayaran dan kemampuan membangun jaringan dagang", "Menutup pelabuhan bagi semua pedagang", "Mengandalkan pertanian pedalaman saja", "Menghentikan hubungan dengan Sumatra"], benar: 0, penjelasan: "Letak strategis perlu didukung keamanan, aturan, dan kepercayaan pedagang." }
  },
{
    id: "evt-066",
    judul: "Perang Paregreg melemahkan kestabilan Majapahit",
    tahun: "1404–1406",
    mulai: 1404,
    akhir: 1416,
    lokasi: { nama: "Jawa Timur", lat: -7.55, lng: 112.35 },
    kategori: "perang",
      jenis: "utama",
    ringkas: "Majapahit mengalami konflik internal yang dikenal sebagai Perang Paregreg, melibatkan persaingan antara Wikramawardhana dan Bhre Wirabhumi. Konflik ini bukan sekadar pertarungan du",
    cerita: {
      L1: "Majapahit mengalami konflik internal yang dikenal sebagai Perang Paregreg, melibatkan persaingan antara Wikramawardhana dan Bhre Wirabhumi. Konflik ini bukan sekadar pertarungan dua tokoh, melainkan perselisihan elite yang memengaruhi kestabilan kerajaan. Perang menghabiskan tenaga dan sumber daya, sementara daerah-daerah yang terhubung dengan pusat harus menilai kembali hubungan politik mereka.",
      L2: "Perang Paregreg memperlihatkan bagaimana pembagian kekuasaan dan persaingan suksesi dapat mengganggu kerajaan yang luas. Ketika elite pusat berkonflik, kemampuan mengoordinasikan daerah, mengamankan jalur perdagangan, dan mengumpulkan sumber daya menjadi lebih sulit. Konflik ini tidak serta-merta mengakhiri Majapahit, tetapi menjadi bagian dari proses panjang perubahan politik pada abad ke-15.",
      L3: "Kronologi dan rincian Perang Paregreg terutama direkonstruksi dari sumber Jawa dan kajian historiografi. Perang tersebut biasanya ditempatkan pada 1404–1406 dan dipahami sebagai konflik internal yang menambah tekanan pada Majapahit, bukan sebagai satu-satunya penyebab kemunduran. Kelangsungan Majapahit setelahnya menunjukkan bahwa kemunduran politik berlangsung bertahap dan tidak dapat disederhanakan menjadi satu tanggal keruntuhan."
    },
    catatan: "Perang Paregreg lazim ditempatkan pada 1404–1406; dampak jangka panjangnya merupakan bagian dari proses yang lebih luas.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Apa dampak utama konflik elite bagi kerajaan?", pilihan: ["Mengganggu koordinasi dan menguras sumber daya", "Langsung menghapus semua jaringan perdagangan", "Membuat semua daerah otomatis merdeka", "Mengakhiri seluruh kebudayaan Jawa"], benar: 0, penjelasan: "Konflik pusat dapat melemahkan koordinasi, tetapi tidak otomatis mengakhiri seluruh kerajaan." }
  },
{
    id: "evt-067",
    judul: "Hubungan diplomatik Melaka dan Dinasti Ming memperkuat jaringan niaga",
    tahun: "1405–1411",
    mulai: 1405,
    akhir: 1420,
    lokasi: { nama: "Melaka", lat: 2.2, lng: 102.25 },
    kategori: "diplomasi",
      jenis: "sampingan",
    ringkas: "Pada awal abad ke-15, Melaka menjalin hubungan dengan Dinasti Ming di Tiongkok. Utusan dan pelayaran resmi memberi pengakuan diplomatik serta membantu memperluas jaringan perdagang",
    cerita: {
      L1: "Pada awal abad ke-15, Melaka menjalin hubungan dengan Dinasti Ming di Tiongkok. Utusan dan pelayaran resmi memberi pengakuan diplomatik serta membantu memperluas jaringan perdagangan. Hubungan ini berlangsung dalam dunia maritim yang saling terhubung, tempat penguasa pelabuhan mencari keamanan dan prestise, sementara pedagang mencari akses pasar dan kepastian perjalanan.",
      L2: "Hubungan dengan Ming dapat meningkatkan posisi Melaka di antara pesaing regional dan memberi sinyal bahwa pelabuhan tersebut memiliki mitra kuat. Namun, hubungan diplomatik juga menuntut pengiriman utusan, hadiah, dan kepatuhan pada tata cara istana. Diplomasi tidak menghilangkan persaingan di Selat Malaka; ia menambah perangkat yang dapat dipakai penguasa untuk mengelola risiko.",
      L3: "Catatan pelayaran dan misi diplomatik Tiongkok membantu menempatkan Melaka dalam jaringan politik Asia Timur dan Asia Tenggara. Hubungan ini perlu dibaca dalam kerangka diplomasi dan perdagangan, bukan sebagai bukti bahwa Melaka sepenuhnya berada di bawah kendali langsung Ming. Penguasa setempat tetap menjalankan kepentingannya sendiri sambil memanfaatkan pengakuan dan hubungan luar negeri."
    },
    catatan: "Misi Ming dan hubungan dengan Melaka tercatat dalam sumber Tiongkok; sifat hubungan harus dibedakan dari kolonisasi langsung.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Mengapa hubungan diplomatik dapat membantu pelabuhan?", pilihan: ["Meningkatkan pengakuan dan memperluas jaringan, meski tetap ada kewajiban", "Menghapus kebutuhan menjaga pelabuhan", "Menjamin tidak akan ada persaingan lagi", "Menghentikan perdagangan regional"], benar: 0, penjelasan: "Diplomasi dapat membuka peluang dan perlindungan, tetapi tidak menghapus semua risiko." }
  },
{
    id: "evt-068",
    judul: "Jaringan pelayaran Cheng Ho singgah di pelabuhan Jawa",
    tahun: "awal abad ke-15",
    mulai: 1405,
    akhir: 1425,
    lokasi: { nama: "Pantai utara Jawa", lat: -6.75, lng: 108.55 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Armada pelayaran yang dipimpin Zheng He atau Cheng Ho melintasi Asia Tenggara dalam rangka diplomasi, perdagangan, dan penegasan kehadiran Dinasti Ming. Pelabuhan-pelabuhan di pesi",
    cerita: {
      L1: "Armada pelayaran yang dipimpin Zheng He atau Cheng Ho melintasi Asia Tenggara dalam rangka diplomasi, perdagangan, dan penegasan kehadiran Dinasti Ming. Pelabuhan-pelabuhan di pesisir Jawa berada dalam jaringan yang lebih luas ini. Persinggahan armada asing dapat membawa pertukaran barang dan informasi, sekaligus mendorong penguasa pelabuhan memperhatikan keamanan serta hubungan diplomatik.",
      L2: "Kunjungan armada besar mengingatkan bahwa pelabuhan Nusantara tidak terisolasi. Penguasa pesisir perlu menyeimbangkan kesempatan dagang dengan risiko politik yang muncul ketika kekuatan asing datang dengan armada dan protokol resmi. Dampak kunjungan tidak selalu berupa perubahan pemerintahan; pertukaran informasi, barang, dan hubungan antarpelabuhan juga merupakan hasil penting.",
      L3: "Rincian lokasi persinggahan dan interaksi setempat dapat berbeda antarrekonstruksi. Secara lebih luas, ekspedisi Ming pada awal abad ke-15 memperlihatkan keterhubungan pelabuhan Nusantara dengan jaringan maritim Asia. Kehadiran armada tidak boleh otomatis dibaca sebagai penguasaan wilayah; hubungan dagang, diplomasi, dan kontrol politik merupakan hal yang berbeda."
    },
    catatan: "Catatan mengenai titik persinggahan armada perlu dibaca kritis karena sumber berbeda dalam detail lokasi.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Apa yang dapat dibawa oleh kunjungan armada asing?", pilihan: ["Peluang perdagangan dan diplomasi sekaligus tantangan keamanan", "Kepastian bahwa pelabuhan akan dikuasai asing", "Hilangnya semua jaringan lokal", "Penghentian perdagangan laut"], benar: 0, penjelasan: "Kunjungan armada dapat membawa peluang sekaligus risiko, tanpa selalu berarti penaklukan." }
  },
{
    id: "evt-069",
    judul: "Samudera Pasai bertahan sebagai simpul perdagangan dan Islam",
    tahun: "awal abad ke-15",
    mulai: 1400,
    akhir: 1425,
    lokasi: { nama: "Aceh Utara", lat: 5.15, lng: 97.15 },
    kategori: "agama",
      jenis: "sampingan",
    ringkas: "Samudera Pasai tetap penting dalam jaringan Selat Malaka pada awal abad ke-15. Pelabuhan ini menghubungkan pedagang dari berbagai wilayah dan menjadi salah satu pusat penting Islam",
    cerita: {
      L1: "Samudera Pasai tetap penting dalam jaringan Selat Malaka pada awal abad ke-15. Pelabuhan ini menghubungkan pedagang dari berbagai wilayah dan menjadi salah satu pusat penting Islam di Sumatra. Peran sebuah pelabuhan tidak hanya bergantung pada kekuatan raja, tetapi juga pada jaringan saudagar, ulama, mata uang, dan kemampuan menyediakan tempat singgah yang aman.",
      L2: "Pasai menghadapi persaingan dari pelabuhan lain, termasuk Melaka yang sedang tumbuh. Persaingan tersebut tidak selalu berarti hubungan dagang langsung berhenti; pedagang dapat berpindah rute, sementara jaringan agama dan keluarga tetap menghubungkan berbagai kota. Perubahan pusat perdagangan berlangsung bertahap, sehingga Pasai tetap relevan meski posisi regionalnya berubah.",
      L3: "Sumber tentang Pasai berasal dari catatan asing, tradisi lokal, dan bukti epigrafis yang tidak selalu memberi kronologi politik lengkap. Karena itu, periode ini lebih tepat dipahami sebagai masa perubahan jaringan dan persaingan antarpelabuhan daripada satu titik kejatuhan yang pasti. Peran Pasai dalam sejarah Islam dan perdagangan Sumatra tetap penting meskipun rincian suksesi penguasanya tidak seluruhnya jelas."
    },
    catatan: "Tanggal dan urutan penguasa Pasai pada abad ke-15 tidak seluruhnya dapat dipastikan dari sumber yang tersedia.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Mengapa sebuah pelabuhan bisa tetap penting saat pesaing tumbuh?", pilihan: ["Karena jaringan pedagang, agama, dan layanan pelabuhan dapat bertahan", "Karena pesaing pasti berhenti berdagang", "Karena lokasi membuat perang mustahil", "Karena pelabuhan tak memerlukan pengelolaan"], benar: 0, penjelasan: "Jaringan sosial dan dagang dapat bertahan meski persaingan mengubah posisi relatif." }
  },
{
    id: "evt-070",
    judul: "Kerajaan Sunda mempertahankan kekuasaan di Jawa Barat",
    tahun: "abad ke-15",
    mulai: 1400,
    akhir: 1500,
    lokasi: { nama: "Jawa Barat", lat: -6.8, lng: 107.6 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Sementara pusat-pusat baru berkembang di pesisir utara Jawa, Kerajaan Sunda tetap menjadi kekuatan politik di wilayah barat. Hubungan antara pedalaman, pelabuhan, dan jalur komodit",
    cerita: {
      L1: "Sementara pusat-pusat baru berkembang di pesisir utara Jawa, Kerajaan Sunda tetap menjadi kekuatan politik di wilayah barat. Hubungan antara pedalaman, pelabuhan, dan jalur komoditas membentuk dasar kekuasaannya. Perubahan politik di Jawa Timur tidak serta-merta menghapus kerajaan-kerajaan lain; Nusantara terdiri atas banyak pusat yang memiliki kepentingan dan jaringan masing-masing.",
      L2: "Keberlangsungan Sunda menunjukkan bahwa proses islamisasi pesisir dan perubahan Majapahit berlangsung tidak merata. Penguasa Sunda perlu mengelola hubungan dengan pelabuhan, komunitas pedagang, dan tetangga regional. Persaingan dapat muncul dalam bentuk diplomasi, kontrol jalur niaga, atau konflik, sementara pertukaran budaya tetap berjalan di antara kelompok yang berbeda.",
      L3: "Sumber mengenai Sunda abad ke-15 tidak selalu merinci semua perubahan administrasi dan batas wilayah. Prasasti, naskah, dan laporan asing perlu dibandingkan untuk menghindari gambaran bahwa satu kekuatan menguasai seluruh Jawa. Keberlanjutan Sunda menjadi pengingat bahwa pergeseran kekuasaan di Nusantara bersifat regional dan bertahap."
    },
    catatan: "Batas wilayah dan detail politik Sunda abad ke-15 direkonstruksi dari sumber yang tidak selalu lengkap.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Apa yang ditunjukkan oleh keberlanjutan Kerajaan Sunda?", pilihan: ["Nusantara memiliki beberapa pusat kekuasaan yang berkembang bersamaan", "Seluruh Jawa berada di bawah satu raja", "Perdagangan pesisir tidak berpengaruh", "Perubahan agama selalu langsung mengganti pemerintahan"], benar: 0, penjelasan: "Perubahan regional tidak berarti semua wilayah mengikuti jalur politik yang sama." }
  },
{
    id: "evt-071",
    judul: "Pergantian penguasa Majapahit memperlihatkan politik suksesi",
    tahun: "1429",
    mulai: 1429,
    akhir: 1440,
    lokasi: { nama: "Jawa Timur", lat: -7.55, lng: 112.35 },
    kategori: "perang",
      jenis: "sampingan",
    ringkas: "Pada 1429, Suhita naik sebagai penguasa Majapahit setelah Wikramawardhana. Pergantian penguasa berlangsung dalam lingkungan politik yang masih dibayangi konflik elite pada awal aba",
    cerita: {
      L1: "Pada 1429, Suhita naik sebagai penguasa Majapahit setelah Wikramawardhana. Pergantian penguasa berlangsung dalam lingkungan politik yang masih dibayangi konflik elite pada awal abad itu. Suksesi kerajaan bukan sekadar pergantian nama raja: ia menuntut pembentukan dukungan dari keluarga istana, pejabat, pemimpin daerah, dan kelompok yang mengendalikan sumber daya.",
      L2: "Pemerintahan Suhita berlangsung ketika Majapahit tetap memiliki prestise, tetapi harus mengelola warisan konflik dan jaringan daerah yang kompleks. Penguasa membutuhkan keseimbangan antara legitimasi keluarga, hubungan dengan elite, dan kemampuan menjaga stabilitas. Pergantian takhta tidak otomatis menghapus persoalan lama, namun juga tidak berarti kerajaan langsung runtuh.",
      L3: "Kronologi penguasa Majapahit disusun melalui perpaduan sumber Jawa dan kajian modern, dengan sejumlah perbedaan interpretasi. Suhita lazim ditempatkan sebagai penguasa sejak 1429. Memahami periode ini sebagai masa negosiasi ulang kekuasaan lebih tepat daripada menggambarkannya sebagai kemunduran yang sepenuhnya lurus dan tak terelakkan."
    },
    catatan: "Tahun naik takhta Suhita umumnya dicatat 1429, meski kronologi politik Majapahit memiliki perbedaan dalam sejumlah sumber.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Apa yang dibutuhkan penguasa setelah konflik suksesi?", pilihan: ["Membangun kembali dukungan elite dan kestabilan daerah", "Mengabaikan pejabat dan jaringan daerah", "Menghapus semua perdagangan", "Memindahkan semua penduduk"], benar: 0, penjelasan: "Legitimasi dan stabilitas memerlukan dukungan serta pengelolaan hubungan politik." }
  },
{
    id: "evt-072",
    judul: "Perdagangan pesisir utara Jawa menghubungkan banyak komunitas",
    tahun: "abad ke-15",
    mulai: 1420,
    akhir: 1500,
    lokasi: { nama: "Pantai utara Jawa", lat: -6.75, lng: 110.4 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Kota-kota pesisir utara Jawa menjadi bagian dari jalur perdagangan yang menghubungkan hasil pertanian pedalaman dengan kapal-kapal antarpulau. Beras, garam, kayu, kain, dan barang ",
    cerita: {
      L1: "Kota-kota pesisir utara Jawa menjadi bagian dari jalur perdagangan yang menghubungkan hasil pertanian pedalaman dengan kapal-kapal antarpulau. Beras, garam, kayu, kain, dan barang impor bergerak melalui jaringan pelabuhan. Para saudagar, penguasa lokal, pekerja pelabuhan, dan komunitas agama ikut membentuk kehidupan kota yang semakin beragam.",
      L2: "Perdagangan memperkuat sebagian penguasa pesisir, tetapi juga menciptakan ketergantungan pada musim, keamanan laut, dan hubungan dengan pedalaman. Kota pelabuhan memperoleh pengaruh bukan hanya lewat kekuatan militer, melainkan melalui kemampuan menyediakan gudang, pasar, perantara bahasa, dan aturan yang dipercaya pedagang. Jaringan ini menjadi latar bagi kemunculan pusat-pusat politik baru pada akhir abad ke-15.",
      L3: "Perubahan di pesisir utara Jawa tidak berlangsung seragam; tiap pelabuhan memiliki hubungan berbeda dengan kerajaan pedalaman dan jaringan luar. Islam berkembang melalui perdagangan, pendidikan, perkawinan, dan patronase, tetapi prosesnya tidak sama di semua tempat. Hubungan ekonomi dan perubahan agama saling berinteraksi tanpa harus berjalan dalam urutan tunggal."
    },
    catatan: "Perdagangan pesisir merupakan proses jangka panjang; tanggal tepat perubahan setiap pelabuhan tidak selalu tersedia.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Apa yang membuat kota pelabuhan berkembang?", pilihan: ["Hubungan antara pedalaman, pelayaran, pasar, dan komunitas", "Hanya kemenangan perang", "Larangan bagi pedagang asing", "Tidak adanya hubungan dengan desa"], benar: 0, penjelasan: "Pelabuhan berkembang karena jaringan produksi, distribusi, dan kepercayaan." }
  },
{
    id: "evt-073",
    judul: "Penyebaran Islam berlangsung melalui jaringan lokal di pesisir Jawa",
    tahun: "abad ke-15",
    mulai: 1420,
    akhir: 1500,
    lokasi: { nama: "Pesisir utara Jawa", lat: -6.9, lng: 109.7 },
    kategori: "agama",
      jenis: "sampingan",
    ringkas: "Pada abad ke-15, Islam semakin terlihat di sejumlah komunitas pesisir Jawa. Pedagang, ulama, keluarga penguasa, dan jaringan pelayaran menjadi penghubung penting. Perubahan keyakin",
    cerita: {
      L1: "Pada abad ke-15, Islam semakin terlihat di sejumlah komunitas pesisir Jawa. Pedagang, ulama, keluarga penguasa, dan jaringan pelayaran menjadi penghubung penting. Perubahan keyakinan tidak selalu terjadi serentak atau melalui penaklukan; masyarakat mengadopsi praktik dan lembaga baru dengan cara yang berbeda sesuai hubungan sosial dan kondisi setempat.",
      L2: "Islamisasi di pesisir berjalan berdampingan dengan tradisi lokal dan budaya istana yang telah berkembang sebelumnya. Para penguasa dapat memanfaatkan hubungan dengan ulama dan saudagar untuk memperkuat legitimasi, sementara komunitas lokal menafsirkan ajaran melalui bahasa, seni, dan adat. Proses ini menghasilkan variasi, bukan satu pola yang sama di seluruh Jawa.",
      L3: "Sumber mengenai tokoh-tokoh penyebar Islam mencampurkan bukti sejarah, tradisi lisan, dan kisah keagamaan yang ditulis kemudian. Karena itu, kisah Wali Songo dan kronologi tiap pusat perlu diperlakukan kritis. Yang lebih jelas adalah peran jaringan maritim dan komunitas dalam perubahan agama dan budaya, dengan proses yang panjang serta beragam."
    },
    catatan: "Kisah tokoh penyebar Islam memuat tradisi yang kronologi dan detailnya tidak selalu dapat diverifikasi secara independen.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Faktor apa yang membantu penyebaran agama di wilayah pesisir?", pilihan: ["Jaringan pedagang, ulama, keluarga, dan komunitas lokal", "Perintah tunggal yang langsung mengubah semua wilayah", "Terputusnya hubungan antarpulau", "Larangan penggunaan bahasa setempat"], benar: 0, penjelasan: "Penyebaran agama melibatkan hubungan sosial dan penyesuaian lokal." }
  },
{
    id: "evt-074",
    judul: "Bali mempertahankan tradisi kerajaan dan hubungan dengan Jawa",
    tahun: "abad ke-15",
    mulai: 1400,
    akhir: 1500,
    lokasi: { nama: "Bali", lat: -8.4, lng: 115.25 },
    kategori: "agama",
      jenis: "sampingan",
    ringkas: "Bali tetap menjadi wilayah penting dengan tradisi keagamaan, seni, dan struktur kerajaan yang berkembang dalam hubungan panjang dengan Jawa. Perubahan politik di Jawa tidak berarti",
    cerita: {
      L1: "Bali tetap menjadi wilayah penting dengan tradisi keagamaan, seni, dan struktur kerajaan yang berkembang dalam hubungan panjang dengan Jawa. Perubahan politik di Jawa tidak berarti budaya Jawa berhenti atau seluruh penduduk berpindah ke Bali. Seniman, pendeta, keluarga elite, dan pengrajin ikut memelihara serta mengubah tradisi melalui hubungan antarpulau.",
      L2: "Hubungan Bali dan Jawa melibatkan perpindahan manusia, pertukaran budaya, dan perubahan patronase kerajaan. Ketika pusat-pusat kekuasaan di Jawa mengalami persaingan, jaringan budaya dapat terus berjalan melalui keluarga, komunitas keagamaan, dan perdagangan. Bali bukan sekadar tempat pelarian budaya, melainkan masyarakat yang memiliki dinamika politik dan tradisinya sendiri.",
      L3: "Narasi tentang perpindahan elite Majapahit ke Bali sering muncul dalam tradisi kemudian dan tidak boleh dianggap menjelaskan seluruh perubahan sosial. Bukti sejarah menunjukkan hubungan yang kompleks, dengan kesinambungan sekaligus adaptasi. Menelaah Bali abad ke-15 berarti melihat agensi lokal dan hubungan regional secara bersamaan."
    },
    catatan: "Rincian perpindahan elite dan pengaruh Majapahit ke Bali dalam tradisi kemudian perlu dibedakan dari bukti sezaman.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Bagaimana tradisi budaya dapat bertahan ketika pusat politik berubah?", pilihan: ["Melalui komunitas, patronase, dan pertukaran antarpulau", "Hanya dengan mengisolasi seluruh wilayah", "Dengan menghentikan seni dan perdagangan", "Karena perubahan politik tak pernah memengaruhi budaya"], benar: 0, penjelasan: "Tradisi bertahan melalui adaptasi dan jaringan manusia, bukan hanya satu istana." }
  },
{
    id: "evt-075",
    judul: "Ternate dan Tidore bersaing sekaligus berdagang dalam jaringan rempah",
    tahun: "abad ke-15",
    mulai: 1400,
    akhir: 1500,
    lokasi: { nama: "Maluku Utara", lat: 0.78, lng: 127.37 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Di Maluku Utara, cengkih menghubungkan masyarakat pulau dengan pedagang dari kawasan yang lebih luas. Ternate dan Tidore berkembang sebagai pusat kekuasaan yang bersaing sekaligus ",
    cerita: {
      L1: "Di Maluku Utara, cengkih menghubungkan masyarakat pulau dengan pedagang dari kawasan yang lebih luas. Ternate dan Tidore berkembang sebagai pusat kekuasaan yang bersaing sekaligus berhubungan melalui perdagangan, perkawinan, dan diplomasi. Rempah memiliki nilai tinggi, tetapi produksi dan distribusinya bergantung pada kerja masyarakat setempat serta jalur pelayaran.",
      L2: "Penguasa pulau berusaha menjaga hubungan dengan pedagang dan mengatur akses ke komoditas. Persaingan dapat memberi keuntungan bagi pihak yang berhasil mengamankan mitra dagang, namun juga memicu konflik dan ketergantungan pada kekuatan luar. Pada abad ke-15, hubungan lokal dan regional sudah membentuk dasar persaingan yang kelak semakin intens ketika bangsa Eropa masuk.",
      L3: "Tanggal tepat perubahan kelembagaan dan proses islamisasi di masing-masing kerajaan Maluku tidak seluruhnya seragam dalam sumber. Karena itu, perkembangan Ternate dan Tidore lebih tepat dipahami sebagai proses bertahap. Kedua pusat ini memiliki kepentingan sendiri dan bukan sekadar objek perdagangan asing; mereka bernegosiasi, bersekutu, dan bersaing untuk mempertahankan posisi."
    },
    catatan: "Kronologi islamisasi dan pembentukan kesultanan di Maluku Utara berbeda menurut sumber; prosesnya bertahap.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Apa yang membuat cengkih penting dalam politik Maluku?", pilihan: ["Nilai dagang tinggi yang menghubungkan produksi lokal dan jaringan luar", "Karena tumbuh di semua pulau dengan jumlah sama", "Karena tidak membutuhkan pelayaran", "Karena tidak menarik pedagang asing"], benar: 0, penjelasan: "Rempah bernilai tinggi membentuk peluang sekaligus persaingan." }
  },
{
    id: "evt-076",
    judul: "Jaringan dagang Kalimantan menghubungkan sungai dan pesisir",
    tahun: "abad ke-15",
    mulai: 1400,
    akhir: 1500,
    lokasi: { nama: "Kalimantan", lat: -1.5, lng: 110.2 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Di Kalimantan, sungai menjadi jalur penting yang menghubungkan permukiman pedalaman dengan pesisir. Hasil hutan, bahan pangan, dan barang lokal bergerak melalui jaringan yang tidak",
    cerita: {
      L1: "Di Kalimantan, sungai menjadi jalur penting yang menghubungkan permukiman pedalaman dengan pesisir. Hasil hutan, bahan pangan, dan barang lokal bergerak melalui jaringan yang tidak selalu tercatat dalam kronik kerajaan besar. Pedagang dan pemimpin setempat menghubungkan masyarakat sungai dengan jalur maritim di Laut Jawa dan Laut Cina Selatan.",
      L2: "Kekuatan politik di Kalimantan tidak dapat dipahami hanya melalui daftar kerajaan atau tanggal pendirian. Kontrol atas muara, jalur sungai, dan hubungan dengan kelompok pedalaman dapat menjadi sumber pengaruh. Perdagangan juga melibatkan negosiasi dan pertukaran, sehingga pusat-pusat lokal tetap penting meski sumber tertulis dari abad ke-15 terbatas.",
      L3: "Sumber tertulis tentang banyak wilayah Kalimantan abad ke-15 relatif jarang dibanding Jawa atau Sumatra. Karena itu, gambaran jaringan sungai dan pesisir harus dibaca sebagai konteks regional, bukan klaim tentang satu negara yang menguasai seluruh pulau. Bukti arkeologi dan tradisi lokal membantu mengisi sebagian celah, tetapi kronologi rinci tetap perlu hati-hati."
    },
    catatan: "Bukti tertulis untuk struktur politik Kalimantan abad ke-15 terbatas; gambaran jaringan dagang bersifat regional.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Mengapa sungai penting bagi perdagangan Kalimantan?", pilihan: ["Menghubungkan produksi pedalaman dengan pelabuhan pesisir", "Menghalangi semua pertukaran barang", "Menggantikan seluruh jalur laut", "Menentukan batas kerajaan secara permanen"], benar: 0, penjelasan: "Sungai menghubungkan wilayah produksi dan pasar maritim." }
  },
{
    id: "evt-077",
    judul: "Komunitas Sulawesi Selatan membangun jaringan politik dan maritim",
    tahun: "abad ke-15",
    mulai: 1400,
    akhir: 1500,
    lokasi: { nama: "Sulawesi Selatan", lat: -5.15, lng: 119.45 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Di Sulawesi Selatan, komunitas dan pusat kekuasaan lokal berkembang dalam lingkungan yang terhubung oleh pelayaran dan perdagangan. Sebelum Gowa-Talloq tampil sebagai kekuatan besa",
    cerita: {
      L1: "Di Sulawesi Selatan, komunitas dan pusat kekuasaan lokal berkembang dalam lingkungan yang terhubung oleh pelayaran dan perdagangan. Sebelum Gowa-Talloq tampil sebagai kekuatan besar pada abad berikutnya, masyarakat Bugis dan Makassar telah membangun hubungan antarkawasan. Laut menjadi jalur pertukaran barang, orang, dan informasi sekaligus ruang persaingan.",
      L2: "Perkembangan politik di Sulawesi Selatan melibatkan persekutuan, persaingan, dan pembentukan lembaga lokal. Tidak semua perubahan dapat diberi satu tanggal yang pasti karena sumber tertulis yang lebih rinci banyak berasal dari masa kemudian. Namun, jaringan lokal ini penting untuk memahami mengapa pelabuhan dan kerajaan Sulawesi mampu memainkan peran besar dalam perdagangan regional pada abad ke-16 dan ke-17.",
      L3: "Sejarah awal kerajaan-kerajaan Sulawesi Selatan direkonstruksi dari tradisi lisan, naskah lontara yang disusun atau disalin kemudian, dan bukti lain. Narasi perlu menghindari memproyeksikan struktur abad ke-17 secara utuh ke abad ke-15. Lebih aman menekankan proses pembentukan jaringan dan lembaga lokal yang mendahului ekspansi politik kemudian."
    },
    catatan: "Kronologi awal pusat politik Sulawesi Selatan sebagian bergantung pada tradisi dan naskah yang lebih muda.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Apa yang penting untuk memahami politik Sulawesi Selatan sebelum abad ke-16?", pilihan: ["Jaringan lokal dan pelayaran sudah berkembang sebelum ekspansi kerajaan besar", "Tidak ada masyarakat terorganisasi sebelum kedatangan Eropa", "Semua komunitas dikendalikan Majapahit langsung", "Perdagangan laut belum ada"], benar: 0, penjelasan: "Jaringan lokal mendahului ekspansi kerajaan yang lebih dikenal dari sumber kemudian." }
  },
{
    id: "evt-078",
    judul: "Pagaruyung dan dataran tinggi Minangkabau terhubung dengan pesisir",
    tahun: "abad ke-15",
    mulai: 1400,
    akhir: 1500,
    lokasi: { nama: "Sumatra Barat", lat: -0.45, lng: 100.4 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Dataran tinggi Minangkabau dan wilayah pesisir Sumatra Barat terhubung melalui jalur perdagangan yang membawa hasil pertanian, emas, dan barang lain. Tradisi Pagaruyung mengingatka",
    cerita: {
      L1: "Dataran tinggi Minangkabau dan wilayah pesisir Sumatra Barat terhubung melalui jalur perdagangan yang membawa hasil pertanian, emas, dan barang lain. Tradisi Pagaruyung mengingatkan pada adanya pusat legitimasi politik di pedalaman, sementara pelabuhan dan jalur pesisir menghubungkan kawasan itu dengan jaringan Samudra Hindia. Hubungan pedalaman-pesisir membentuk kepentingan yang saling bergantung.",
      L2: "Kekuasaan di kawasan ini tidak hanya bertumpu pada penguasaan satu kota. Jalur lintas pegunungan, pertukaran komoditas, dan hubungan antara pemimpin lokal memengaruhi posisi politik. Perubahan pada pelabuhan dapat berdampak ke pedalaman, sementara kebutuhan pedagang terhadap hasil bumi membuat komunitas pedalaman tetap berperan dalam perdagangan maritim.",
      L3: "Kronologi dan bentuk institusi Pagaruyung pada abad ke-15 tidak sepenuhnya jelas, dan tradisi kerajaan berkembang dalam sumber yang disusun kemudian. Karena itu, peristiwa ini menekankan hubungan regional yang masuk akal dan penting secara historis, bukan mengklaim rincian pemerintahan tertentu yang tidak kuat didukung bukti sezaman."
    },
    catatan: "Detail kelembagaan Pagaruyung abad ke-15 tidak seluruhnya dapat dipastikan dari sumber sezaman.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Apa yang menghubungkan dataran tinggi dan pesisir Sumatra Barat?", pilihan: ["Jalur komoditas, pertukaran, dan hubungan antarpemimpin", "Larangan perjalanan antarwilayah", "Ketiadaan hasil bumi", "Penguasaan tunggal oleh pelabuhan asing"], benar: 0, penjelasan: "Pedalaman dan pesisir saling membutuhkan melalui perdagangan dan politik." }
  },
{
    id: "evt-079",
    judul: "Perubahan di Brunei memperkuat jaringan maritim Kalimantan utara",
    tahun: "abad ke-15",
    mulai: 1400,
    akhir: 1500,
    lokasi: { nama: "Brunei", lat: 4.9, lng: 114.95 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Brunei berkembang sebagai pusat politik dan perdagangan di Kalimantan utara, dengan hubungan maritim yang menjangkau kawasan Laut Cina Selatan. Posisi ini memungkinkan penguasa dan",
    cerita: {
      L1: "Brunei berkembang sebagai pusat politik dan perdagangan di Kalimantan utara, dengan hubungan maritim yang menjangkau kawasan Laut Cina Selatan. Posisi ini memungkinkan penguasa dan pedagang berhubungan dengan komunitas pesisir, pulau-pulau sekitar, serta jaringan Asia Tenggara. Pengaruh kerajaan dibentuk oleh perdagangan, diplomasi, dan kemampuan menghubungkan kelompok-kelompok yang tersebar.",
      L2: "Brunei berada di lingkungan perdagangan yang berubah, ketika pelabuhan dan penguasa mencari mitra untuk komoditas serta keamanan pelayaran. Hubungan maritim membawa kemakmuran dan prestise, tetapi juga membuat pusat niaga harus menanggapi persaingan dan perubahan rute. Perkembangan Brunei membantu memperlihatkan bahwa sejarah Nusantara utara tidak dapat direduksi menjadi dinamika Jawa saja.",
      L3: "Tanggal dan proses pembentukan institusi kesultanan Brunei memiliki variasi dalam sumber dan tradisi. Gambaran abad ke-15 sebaiknya dipahami sebagai perkembangan bertahap jaringan politik dan perdagangan, bukan satu peristiwa pendirian yang sepenuhnya terdokumentasi. Brunei juga terhubung dengan wilayah di luar batas Indonesia modern, menunjukkan bahwa Nusantara historis merupakan kawasan maritim yang luas."
    },
    catatan: "Kronologi awal Brunei menggabungkan tradisi lokal dan catatan luar yang tidak selalu sepakat.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Apa yang membantu Brunei menjadi pusat maritim?", pilihan: ["Hubungan pelayaran, diplomasi, dan komunitas pesisir", "Menghindari semua hubungan laut", "Hanya menguasai sawah pedalaman", "Memutus jaringan dengan pulau sekitar"], benar: 0, penjelasan: "Pusat maritim tumbuh dari jaringan lintas wilayah." }
  },
{
    id: "evt-080",
    judul: "Cirebon tumbuh sebagai simpul pesisir di antara Sunda dan Jawa",
    tahun: "abad ke-15",
    mulai: 1445,
    akhir: 1500,
    lokasi: { nama: "Cirebon", lat: -6.72, lng: 108.57 },
    kategori: "agama",
      jenis: "sampingan",
    ringkas: "Di pesisir utara Jawa bagian barat, Cirebon berkembang di kawasan pertemuan jalur laut dan pedalaman Sunda. Perdagangan, migrasi, hubungan keluarga, dan penyebaran Islam membentuk ",
    cerita: {
      L1: "Di pesisir utara Jawa bagian barat, Cirebon berkembang di kawasan pertemuan jalur laut dan pedalaman Sunda. Perdagangan, migrasi, hubungan keluarga, dan penyebaran Islam membentuk masyarakat pesisir yang beragam. Cirebon menjadi contoh bagaimana pusat lokal dapat tumbuh di antara kerajaan-kerajaan yang lebih besar dan mengembangkan identitas politik serta budaya sendiri.",
      L2: "Letak Cirebon menghubungkan hasil pedalaman dengan jaringan perdagangan pantai utara Jawa. Perubahan agama dan hubungan dengan tokoh-tokoh pesisir memberi bentuk baru pada legitimasi, tetapi prosesnya berlangsung bertahap. Hubungan dengan Sunda dan pusat-pusat Jawa lainnya dapat mencakup perdagangan, persekutuan, serta persaingan, bukan sekadar pergantian kekuasaan yang sederhana.",
      L3: "Kronologi awal Cirebon mengandung tradisi yang ditulis kemudian, termasuk kisah tokoh pendiri dan penyebar agama. Karena itu, tanggal spesifik dan rincian peran individu perlu diperlakukan dengan hati-hati. Yang dapat ditekankan ialah tumbuhnya pusat pesisir yang menghubungkan budaya Sunda, Jawa, Islam, dan perdagangan maritim."
    },
    catatan: "Tradisi tentang pendirian Cirebon dan tokoh-tokohnya tidak seluruhnya dapat diverifikasi sebagai catatan sezaman.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Mengapa Cirebon strategis?", pilihan: ["Menjadi penghubung pesisir, pedalaman, dan beberapa lingkungan budaya", "Karena terpisah dari semua jalur perdagangan", "Karena tidak berhubungan dengan Sunda atau Jawa", "Karena hanya berfungsi sebagai benteng"], benar: 0, penjelasan: "Lokasi pertemuan jaringan membantu membentuk pusat lokal baru." }
  },
{
    id: "evt-081",
    judul: "Demak muncul sebagai kekuatan pesisir menjelang akhir abad ke-15",
    tahun: "akhir abad ke-15",
    mulai: 1475,
    akhir: 1500,
    lokasi: { nama: "Demak", lat: -6.9, lng: 110.63 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Menjelang akhir abad ke-15, Demak muncul sebagai salah satu pusat politik pesisir utara Jawa. Perdagangan, hubungan dengan komunitas Muslim, dan perubahan keseimbangan kekuasaan di",
    cerita: {
      L1: "Menjelang akhir abad ke-15, Demak muncul sebagai salah satu pusat politik pesisir utara Jawa. Perdagangan, hubungan dengan komunitas Muslim, dan perubahan keseimbangan kekuasaan di Jawa memberi ruang bagi tumbuhnya pusat baru. Kemunculan Demak terjadi dalam lingkungan yang masih menyimpan warisan Majapahit dan memiliki banyak penguasa lokal dengan kepentingan sendiri.",
      L2: "Kekuatan Demak berkembang melalui gabungan jaringan perdagangan, dukungan elite, dan kemampuan memobilisasi sumber daya. Pertumbuhan pusat baru tidak berarti semua wilayah langsung berpindah kesetiaan. Perubahan politik di Jawa berlangsung melalui proses yang kompleks, termasuk persaingan antarpenguasa dan negosiasi dengan pelabuhan-pelabuhan lain.",
      L3: "Tanggal pendirian Demak dan urutan peristiwa awalnya berbeda menurut tradisi dan kajian. Sebagian kronologi menghubungkan kemunculannya dengan kemunduran Majapahit, tetapi hubungan ini tidak boleh disederhanakan menjadi konflik agama semata. Penguasaan perdagangan, legitimasi, dan persaingan regional juga penting untuk menjelaskan perubahan kekuasaan."
    },
    catatan: "Tanggal pendirian Demak tidak sepenuhnya pasti; kronologi akhir abad ke-15 merupakan perkiraan umum.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Faktor apa yang membantu pusat politik pesisir tumbuh?", pilihan: ["Jaringan dagang, dukungan elite, dan perubahan keseimbangan regional", "Satu sebab tunggal yang menjelaskan semua perubahan", "Hilangnya seluruh perdagangan laut", "Tidak adanya persaingan lokal"], benar: 0, penjelasan: "Kemunculan kekuatan baru biasanya melibatkan beberapa faktor yang saling berinteraksi." }
  },
{
    id: "evt-082",
    judul: "Perubahan politik Majapahit berlangsung bertahap, bukan satu tanggal tunggal",
    tahun: "sekitar 1478 dan sesudahnya",
    mulai: 1468,
    akhir: 1505,
    lokasi: { nama: "Jawa Timur", lat: -7.55, lng: 112.35 },
    kategori: "politik",
      jenis: "sampingan",
    ringkas: "Pada paruh kedua abad ke-15, persaingan elite dan perubahan dukungan daerah semakin memengaruhi Majapahit. Tahun 1478 sering dipakai dalam kronologi populer sebagai penanda seranga",
    cerita: {
      L1: "Pada paruh kedua abad ke-15, persaingan elite dan perubahan dukungan daerah semakin memengaruhi Majapahit. Tahun 1478 sering dipakai dalam kronologi populer sebagai penanda serangan dan perubahan pusat kekuasaan, tetapi kehidupan politik dan hubungan dagang tidak lenyap pada satu hari. Sisa-sisa kekuasaan dan jaringan lama masih memengaruhi politik Jawa pada masa berikutnya.",
      L2: "Perubahan Majapahit perlu dilihat sebagai proses yang melibatkan suksesi, persaingan wilayah, pergeseran perdagangan, dan tumbuhnya pusat-pusat pesisir. Peristiwa militer penting, namun tidak cukup untuk menjelaskan perubahan administrasi dan budaya secara keseluruhan. Penduduk, pengrajin, pedagang, dan elite dapat berpindah atau menyesuaikan hubungan ketika pusat kekuasaan bergeser.",
      L3: "Sumber mengenai akhir Majapahit berbeda dalam kronologi dan makna tahun 1478. Sebagian kajian menempatkan proses berakhirnya kekuasaan Majapahit lebih panjang, dengan kelanjutan pusat-pusat politik dan jaringan setelah penyerangan yang dikisahkan dalam tradisi. Karena itu, peristiwa ini sengaja ditulis sebagai transisi bertahap, bukan klaim bahwa semua institusi Majapahit hilang serentak pada 1478."
    },
    catatan: "Tahun 1478 merupakan penanda dalam sejumlah kronologi; proses akhir Majapahit diperdebatkan dan berlangsung lebih panjang.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Mengapa akhir sebuah kerajaan sulit diringkas menjadi satu tahun?", pilihan: ["Institusi, jaringan, dan kelompok elite dapat bertahan setelah pusatnya melemah", "Semua penduduk dan kebudayaan hilang sekaligus", "Sumber sejarah selalu memberi tanggal yang sama", "Perubahan politik tidak memengaruhi masyarakat"], benar: 0, penjelasan: "Keruntuhan pusat politik dan berakhirnya seluruh jaringan bukan hal yang sama." }
  },
{
    id: "evt-083",
    judul: "Jaringan perdagangan Nusantara menjelang 1500 semakin terhubung",
    tahun: "akhir abad ke-15",
    mulai: 1480,
    akhir: 1500,
    lokasi: { nama: "Kepulauan Nusantara", lat: -2.5, lng: 118.0 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Menjelang 1500, pelabuhan di Sumatra, Jawa, Kalimantan, Sulawesi, Bali, dan Maluku terhubung dalam jaringan perdagangan yang beragam. Tidak ada satu pusat yang mengendalikan semua ",
    cerita: {
      L1: "Menjelang 1500, pelabuhan di Sumatra, Jawa, Kalimantan, Sulawesi, Bali, dan Maluku terhubung dalam jaringan perdagangan yang beragam. Tidak ada satu pusat yang mengendalikan semua rute. Pedagang menyesuaikan perjalanan dengan musim, keamanan, permintaan, dan hubungan politik. Kain, beras, hasil hutan, logam, dan rempah berpindah melalui banyak perantara.",
      L2: "Jaringan maritim menghubungkan masyarakat yang berbeda bahasa, agama, dan struktur politik. Kekuatan pelabuhan ditentukan oleh kepercayaan, layanan, akses komoditas, serta kemampuan penguasa menengahi sengketa. Saat Melaka dan pusat-pusat pesisir tumbuh, wilayah lain tetap menjadi pemasok dan penghubung, sehingga perdagangan sebaiknya dipahami sebagai sistem multipusat.",
      L3: "Konsep jaringan regional membantu menghindari narasi bahwa sejarah Nusantara hanya bergerak dari satu kerajaan besar ke kerajaan berikutnya. Bukti untuk setiap rute dan komoditas berbeda-beda, tetapi catatan asing, arkeologi, dan sejarah lokal bersama-sama menunjukkan keterhubungan maritim yang kuat. Perubahan abad ke-16 kemudian terjadi di atas jaringan yang sudah terbentuk sebelum kedatangan Portugis ke Melaka pada 1511."
    },
    catatan: "Gambaran jaringan regional merupakan sintesis dari berbagai sumber; intensitas tiap rute tidak sama dan berubah dari waktu ke waktu.",
    sumber: ["M.C. Ricklefs, A History of Modern Indonesia since c.1200", "Sejarah Nusantara, ANRI", "Indonesia Travel — History"],
    kuis: { tanya: "Apa ciri perdagangan Nusantara menjelang 1500?", pilihan: ["Jaringan multipusat dengan banyak pelabuhan dan perantara", "Satu pelabuhan mengendalikan semua komoditas", "Semua wilayah berdagang secara terpisah", "Perdagangan baru dimulai setelah bangsa Eropa datang"], benar: 0, penjelasan: "Jaringan perdagangan Asia Tenggara telah berkembang sebelum kedatangan bangsa Eropa." }
  },
{
    id: "evt-084",
    judul: "Perdagangan Aceh mulai menguat di ujung utara Sumatra",
    tahun: "sekitar 1500",
    mulai: 1500,
    akhir: 1510,
    lokasi: { nama: "Aceh", lat: 5.55, lng: 95.32 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Pesisir Aceh terhubung dengan Selat Malaka dan jalur Samudra Hindia.",
    cerita: { L1: "Aceh tumbuh sebagai pusat pelabuhan ketika persaingan di Selat Malaka meningkat. Pedagang, ulama, dan pelaut membawa komoditas sekaligus pengetahuan. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Aceh tumbuh sebagai pusat pelabuhan ketika persaingan di Selat Malaka meningkat. Pedagang, ulama, dan pelaut membawa komoditas sekaligus pengetahuan. Kronologi awal kesultanan Aceh tidak seragam dalam sumber. Lebih aman melihat sekitar 1500 sebagai masa penguatan jaringan politik dan dagang, bukan satu tanggal pendirian yang pasti. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Kronologi awal kesultanan Aceh tidak seragam dalam sumber. Lebih aman melihat sekitar 1500 sebagai masa penguatan jaringan politik dan dagang, bukan satu tanggal pendirian yang pasti. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Kronologi awal kesultanan Aceh tidak seragam dalam sumber. Lebih aman melihat sekitar 1500 sebagai masa penguatan jaringan politik dan dagang, bukan satu tanggal pendirian yang pasti.",
    sumber: ["Sejarah Nusantara ANRI", "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Pesisir Aceh terhubung dengan Selat Malaka dan jalur Samudra Hindia.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-085",
    judul: "Portugis tiba di Melaka sebelum penaklukan",
    tahun: "1509–1511",
    mulai: 1509,
    akhir: 1514,
    lokasi: { nama: "Melaka", lat: 2.19, lng: 102.25 },
    kategori: "perang",
      jenis: "utama",
    ringkas: "Kedatangan Portugis mengubah persaingan di pelabuhan Selat Malaka.",
    cerita: { L1: "Armada Portugis menjajaki Melaka pada 1509. Kota ini merupakan simpul penting yang menghubungkan pedagang dari India, Tiongkok, Jawa, Sumatra, dan Maluku. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Armada Portugis menjajaki Melaka pada 1509. Kota ini merupakan simpul penting yang menghubungkan pedagang dari India, Tiongkok, Jawa, Sumatra, dan Maluku. Kontak awal tidak serta-merta berarti kontrol Portugis. Penaklukan baru terjadi pada 1511, dan sesudahnya jaringan dagang berpindah serta menyesuaikan diri. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Kontak awal tidak serta-merta berarti kontrol Portugis. Penaklukan baru terjadi pada 1511, dan sesudahnya jaringan dagang berpindah serta menyesuaikan diri. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Kontak awal tidak serta-merta berarti kontrol Portugis. Penaklukan baru terjadi pada 1511, dan sesudahnya jaringan dagang berpindah serta menyesuaikan diri.",
    sumber: ["History of Indonesia: A Resource Book, Kemendikbud", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Kedatangan Portugis mengubah persaingan di pelabuhan Selat Malaka.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-086",
    judul: "Portugis menaklukkan Melaka",
    tahun: "1511",
    mulai: 1511,
    akhir: 1516,
    lokasi: { nama: "Melaka", lat: 2.19, lng: 102.25 },
    kategori: "perang",
      jenis: "utama",
    ringkas: "Melaka jatuh ke Portugis, tetapi perdagangan regional tidak berhenti.",
    cerita: { L1: "Pada 1511, armada Portugis merebut Melaka. Perubahan ini mengguncang pusat politik dan perdagangan di Selat Malaka. Pedagang dan penguasa di kawasan lain merespons dengan mencari pelabuhan, sekutu, dan jalur alternatif. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada 1511, armada Portugis merebut Melaka. Perubahan ini mengguncang pusat politik dan perdagangan di Selat Malaka. Pedagang dan penguasa di kawasan lain merespons dengan mencari pelabuhan, sekutu, dan jalur alternatif. Penaklukan Melaka tidak membuat Portugis menguasai seluruh perdagangan Nusantara. Jaringan niaga tetap multipusat dan persaingan dengan kekuatan lokal terus berlangsung. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Penaklukan Melaka tidak membuat Portugis menguasai seluruh perdagangan Nusantara. Jaringan niaga tetap multipusat dan persaingan dengan kekuatan lokal terus berlangsung. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Penaklukan Melaka tidak membuat Portugis menguasai seluruh perdagangan Nusantara. Jaringan niaga tetap multipusat dan persaingan dengan kekuatan lokal terus berlangsung.",
    sumber: ["History of Indonesia: A Resource Book, Kemendikbud", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Melaka jatuh ke Portugis, tetapi perdagangan regional tidak berhenti.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-087",
    judul: "Ekspedisi Portugis mencapai Banda dan Maluku",
    tahun: "1512",
    mulai: 1512,
    akhir: 1517,
    lokasi: { nama: "Kepulauan Banda", lat: -4.53, lng: 129.9 },
    kategori: "perdagangan",
      jenis: "utama",
    ringkas: "Kapal Portugis datang untuk membangun akses langsung ke rempah-rempah.",
    cerita: { L1: "Setelah merebut Melaka, Portugis mengirim ekspedisi ke kepulauan penghasil rempah. Banda terkenal dengan pala, sementara Maluku menjadi sumber cengkih. Penguasa setempat menimbang peluang perdagangan dan risiko campur tangan asing. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Setelah merebut Melaka, Portugis mengirim ekspedisi ke kepulauan penghasil rempah. Banda terkenal dengan pala, sementara Maluku menjadi sumber cengkih. Penguasa setempat menimbang peluang perdagangan dan risiko campur tangan asing. Kontak awal berlangsung melalui negosiasi dan persaingan. Pengaruh Portugis berbeda-beda antar-pulau dan tidak boleh disamakan dengan penguasaan penuh atas seluruh Maluku. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Kontak awal berlangsung melalui negosiasi dan persaingan. Pengaruh Portugis berbeda-beda antar-pulau dan tidak boleh disamakan dengan penguasaan penuh atas seluruh Maluku. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Kontak awal berlangsung melalui negosiasi dan persaingan. Pengaruh Portugis berbeda-beda antar-pulau dan tidak boleh disamakan dengan penguasaan penuh atas seluruh Maluku.",
    sumber: ["History of Indonesia: A Resource Book, Kemendikbud", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Kapal Portugis datang untuk membangun akses langsung ke rempah-rempah.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-088",
    judul: "Pati Unus menyerang Melaka yang dikuasai Portugis",
    tahun: "1513",
    mulai: 1513,
    akhir: 1518,
    lokasi: { nama: "Melaka", lat: 2.19, lng: 102.25 },
    kategori: "perang",
      jenis: "utama",
    ringkas: "Serangan dari Jawa menunjukkan bahwa penguasa regional menentang kontrol Portugis.",
    cerita: { L1: "Pati Unus dari Demak memimpin serangan terhadap Melaka Portugis. Serangan ini tidak berhasil merebut kota, tetapi memperlihatkan bahwa perubahan di Selat Malaka berdampak pada kekuatan pesisir Jawa. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pati Unus dari Demak memimpin serangan terhadap Melaka Portugis. Serangan ini tidak berhasil merebut kota, tetapi memperlihatkan bahwa perubahan di Selat Malaka berdampak pada kekuatan pesisir Jawa. Rincian jumlah kapal dan jalannya serangan berbeda antar-sumber. Inti peristiwanya adalah upaya Demak menantang kedudukan Portugis di Melaka. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Rincian jumlah kapal dan jalannya serangan berbeda antar-sumber. Inti peristiwanya adalah upaya Demak menantang kedudukan Portugis di Melaka. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Rincian jumlah kapal dan jalannya serangan berbeda antar-sumber. Inti peristiwanya adalah upaya Demak menantang kedudukan Portugis di Melaka.",
    sumber: ["Kronologi Sejarah Nusantara", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Serangan dari Jawa menunjukkan bahwa penguasa regional menentang kontrol Portugis.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-089",
    judul: "Kesultanan Aceh mengonsolidasikan kekuasaan",
    tahun: "awal abad ke-16",
    mulai: 1514,
    akhir: 1524,
    lokasi: { nama: "Aceh", lat: 5.55, lng: 95.32 },
    kategori: "politik",
      jenis: "sampingan",
    ringkas: "Penguasa Aceh menguat di tengah perubahan politik Selat Malaka.",
    cerita: { L1: "Pada awal abad ke-16, Aceh semakin penting sebagai pusat politik dan perdagangan di ujung utara Sumatra. Penguasa berusaha mengonsolidasikan wilayah pesisir dan menarik pedagang Muslim yang mencari jalur selain Melaka Portugis. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada awal abad ke-16, Aceh semakin penting sebagai pusat politik dan perdagangan di ujung utara Sumatra. Penguasa berusaha mengonsolidasikan wilayah pesisir dan menarik pedagang Muslim yang mencari jalur selain Melaka Portugis. Tahun awal dan urutan penguasa Aceh bervariasi dalam kronologi. Peristiwa ini merangkum proses konsolidasi, bukan menyatakan satu tanggal pendirian yang mutlak. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Tahun awal dan urutan penguasa Aceh bervariasi dalam kronologi. Peristiwa ini merangkum proses konsolidasi, bukan menyatakan satu tanggal pendirian yang mutlak. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Tahun awal dan urutan penguasa Aceh bervariasi dalam kronologi. Peristiwa ini merangkum proses konsolidasi, bukan menyatakan satu tanggal pendirian yang mutlak.",
    sumber: ["Sejarah Nusantara ANRI", "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Penguasa Aceh menguat di tengah perubahan politik Selat Malaka.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-090",
    judul: "Ekspedisi Magellan melintasi perairan Nusa Tenggara",
    tahun: "1521",
    mulai: 1521,
    akhir: 1526,
    lokasi: { nama: "Lembata–Pantar", lat: -8.35, lng: 123.55 },
    kategori: "perdagangan",
      jenis: "utama",
    ringkas: "Kapal ekspedisi Eropa melintasi jalur kepulauan yang telah lama digunakan pelaut setempat.",
    cerita: { L1: "Sisa ekspedisi Magellan melintasi perairan antara pulau-pulau Nusa Tenggara pada 1521 dalam pelayaran keliling dunia. Catatan ekspedisi menambah dokumentasi Eropa tentang wilayah yang sudah terhubung melalui pelayaran regional. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Sisa ekspedisi Magellan melintasi perairan antara pulau-pulau Nusa Tenggara pada 1521 dalam pelayaran keliling dunia. Catatan ekspedisi menambah dokumentasi Eropa tentang wilayah yang sudah terhubung melalui pelayaran regional. Pelayaran Eropa bukan awal penjelajahan laut di kawasan ini. Pelaut lokal telah menguasai pengetahuan musim, selat, dan pelabuhan selama berabad-abad. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Pelayaran Eropa bukan awal penjelajahan laut di kawasan ini. Pelaut lokal telah menguasai pengetahuan musim, selat, dan pelabuhan selama berabad-abad. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Pelayaran Eropa bukan awal penjelajahan laut di kawasan ini. Pelaut lokal telah menguasai pengetahuan musim, selat, dan pelabuhan selama berabad-abad.",
    sumber: ["Sejarah Nusantara 1509–1602", "History of Indonesia: A Resource Book, Kemendikbud"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Kapal ekspedisi Eropa melintasi jalur kepulauan yang telah lama digunakan pelaut setempat.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-091",
    judul: "Portugis membangun benteng di Ternate",
    tahun: "1522",
    mulai: 1522,
    akhir: 1527,
    lokasi: { nama: "Ternate", lat: 0.79, lng: 127.38 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Hubungan dagang Portugis–Ternate disertai upaya membangun posisi militer.",
    cerita: { L1: "Pada 1522, Portugis membangun benteng di Ternate setelah menjalin hubungan dengan penguasa setempat. Benteng memberi perlindungan bagi perdagangan, tetapi juga memperkuat kemampuan Portugis ikut campur dalam politik dan persaingan antarpenguasa Maluku. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada 1522, Portugis membangun benteng di Ternate setelah menjalin hubungan dengan penguasa setempat. Benteng memberi perlindungan bagi perdagangan, tetapi juga memperkuat kemampuan Portugis ikut campur dalam politik dan persaingan antarpenguasa Maluku. Hubungan Ternate dan Portugis berubah dari waktu ke waktu; kerja sama awal tidak menghapus konflik yang kemudian berkembang. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Hubungan Ternate dan Portugis berubah dari waktu ke waktu; kerja sama awal tidak menghapus konflik yang kemudian berkembang. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Hubungan Ternate dan Portugis berubah dari waktu ke waktu; kerja sama awal tidak menghapus konflik yang kemudian berkembang.",
    sumber: ["History of Indonesia: A Resource Book, Kemendikbud", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Hubungan dagang Portugis–Ternate disertai upaya membangun posisi militer.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-092",
    judul: "Perjanjian Sunda–Portugis dan rencana pos di Sunda Kelapa",
    tahun: "1522",
    mulai: 1522,
    akhir: 1527,
    lokasi: { nama: "Sunda Kelapa", lat: -6.12, lng: 106.81 },
    kategori: "diplomasi",
      jenis: "utama",
    ringkas: "Sunda berusaha memperoleh dukungan Portugis di tengah persaingan regional.",
    cerita: { L1: "Penguasa Sunda membuat kesepakatan dengan Portugis pada 1522 yang berkaitan dengan perdagangan dan rencana pembangunan pos di Sunda Kelapa. Perjanjian ini menunjukkan bahwa kerajaan lokal melakukan diplomasi aktif, bukan sekadar menjadi sasaran kekuatan luar. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Penguasa Sunda membuat kesepakatan dengan Portugis pada 1522 yang berkaitan dengan perdagangan dan rencana pembangunan pos di Sunda Kelapa. Perjanjian ini menunjukkan bahwa kerajaan lokal melakukan diplomasi aktif, bukan sekadar menjadi sasaran kekuatan luar. Rencana Portugis tidak menghasilkan kendali permanen atas Sunda Kelapa. Perkembangan berikutnya dipengaruhi oleh kekuatan Demak dan Cirebon. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Rencana Portugis tidak menghasilkan kendali permanen atas Sunda Kelapa. Perkembangan berikutnya dipengaruhi oleh kekuatan Demak dan Cirebon. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Rencana Portugis tidak menghasilkan kendali permanen atas Sunda Kelapa. Perkembangan berikutnya dipengaruhi oleh kekuatan Demak dan Cirebon.",
    sumber: ["Sejarah Nusantara 1509–1602", "kronologi Portugis di Nusantara"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Sunda berusaha memperoleh dukungan Portugis di tengah persaingan regional.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-093",
    judul: "Sunda Kelapa direbut dan dikenal sebagai Jayakarta",
    tahun: "1527",
    mulai: 1527,
    akhir: 1532,
    lokasi: { nama: "Sunda Kelapa/Jakarta", lat: -6.12, lng: 106.81 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Pergantian kendali pelabuhan mengubah keseimbangan politik pesisir Jawa Barat.",
    cerita: { L1: "Pasukan yang berhubungan dengan Demak dan Cirebon merebut Sunda Kelapa pada 1527. Dalam tradisi sejarah, nama Jayakarta dikaitkan dengan perubahan ini. Pelabuhan tersebut tetap penting karena menghubungkan pedalaman Jawa Barat dengan perdagangan laut. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pasukan yang berhubungan dengan Demak dan Cirebon merebut Sunda Kelapa pada 1527. Dalam tradisi sejarah, nama Jayakarta dikaitkan dengan perubahan ini. Pelabuhan tersebut tetap penting karena menghubungkan pedalaman Jawa Barat dengan perdagangan laut. Rincian tokoh dan tanggal penamaan berbeda dalam sumber. Peristiwa ini menandai pergeseran kekuasaan, bukan hilangnya peran masyarakat dan jaringan dagang setempat. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Rincian tokoh dan tanggal penamaan berbeda dalam sumber. Peristiwa ini menandai pergeseran kekuasaan, bukan hilangnya peran masyarakat dan jaringan dagang setempat. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Rincian tokoh dan tanggal penamaan berbeda dalam sumber. Peristiwa ini menandai pergeseran kekuasaan, bukan hilangnya peran masyarakat dan jaringan dagang setempat.",
    sumber: ["Kronologi Sejarah Nusantara", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Pergantian kendali pelabuhan mengubah keseimbangan politik pesisir Jawa Barat.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-094",
    judul: "Banten berkembang sebagai kesultanan pesisir",
    tahun: "sekitar 1526–1550",
    mulai: 1526,
    akhir: 1531,
    lokasi: { nama: "Banten", lat: -6.03, lng: 106.16 },
    kategori: "politik",
      jenis: "sampingan",
    ringkas: "Banten menguat di ujung barat Jawa dan memanfaatkan posisi dekat Selat Sunda.",
    cerita: { L1: "Banten berkembang menjadi pusat politik dan perdagangan di ujung barat Jawa. Letaknya dekat Selat Sunda memberi akses pada jalur kapal, sementara lada dan hubungan dengan pedalaman membantu menopang ekonomi. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Banten berkembang menjadi pusat politik dan perdagangan di ujung barat Jawa. Letaknya dekat Selat Sunda memberi akses pada jalur kapal, sementara lada dan hubungan dengan pedalaman membantu menopang ekonomi. Tanggal pendirian dan proses islamisasi Banten tidak sepenuhnya seragam dalam sumber. Perubahan berlangsung bertahap melalui politik, perdagangan, dan jaringan keagamaan. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Tanggal pendirian dan proses islamisasi Banten tidak sepenuhnya seragam dalam sumber. Perubahan berlangsung bertahap melalui politik, perdagangan, dan jaringan keagamaan. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Tanggal pendirian dan proses islamisasi Banten tidak sepenuhnya seragam dalam sumber. Perubahan berlangsung bertahap melalui politik, perdagangan, dan jaringan keagamaan.",
    sumber: ["Sejarah Nusantara ANRI", "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Banten menguat di ujung barat Jawa dan memanfaatkan posisi dekat Selat Sunda.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-095",
    judul: "Banten dan Cirebon memperluas jaringan pesisir Jawa Barat",
    tahun: "abad ke-16",
    mulai: 1530,
    akhir: 1540,
    lokasi: { nama: "Banten–Cirebon", lat: -6.2, lng: 107.25 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Dua pusat pesisir menghubungkan perdagangan, agama, dan politik lokal.",
    cerita: { L1: "Pada abad ke-16, Banten dan Cirebon tumbuh sebagai pusat pesisir yang terhubung dengan jalur laut serta masyarakat pedalaman. Keduanya memiliki hubungan dan kepentingan masing-masing; tidak semua perubahan di Jawa Barat dikendalikan dari satu pusat. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada abad ke-16, Banten dan Cirebon tumbuh sebagai pusat pesisir yang terhubung dengan jalur laut serta masyarakat pedalaman. Keduanya memiliki hubungan dan kepentingan masing-masing; tidak semua perubahan di Jawa Barat dikendalikan dari satu pusat. Kronologi awal kedua kesultanan berisi tradisi yang ditulis kemudian. Rentang ini menggambarkan pertumbuhan kawasan, bukan tanggal peristiwa tunggal. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Kronologi awal kedua kesultanan berisi tradisi yang ditulis kemudian. Rentang ini menggambarkan pertumbuhan kawasan, bukan tanggal peristiwa tunggal. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Kronologi awal kedua kesultanan berisi tradisi yang ditulis kemudian. Rentang ini menggambarkan pertumbuhan kawasan, bukan tanggal peristiwa tunggal.",
    sumber: ["Sejarah Nusantara ANRI", "Ricklefs, A History of Modern Indonesia since c.1200"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Dua pusat pesisir menghubungkan perdagangan, agama, dan politik lokal.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-096",
    judul: "Aceh menantang dominasi Portugis di Selat Malaka",
    tahun: "1530-an–1560-an",
    mulai: 1530,
    akhir: 1540,
    lokasi: { nama: "Aceh–Selat Malaka", lat: 5.55, lng: 95.32 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Persaingan Aceh dan Portugis berkaitan dengan perdagangan dan kendali pelabuhan.",
    cerita: { L1: "Aceh berupaya memperkuat armada dan pengaruhnya di kawasan Selat Malaka. Persaingan dengan Portugis melibatkan serangan, diplomasi, dan hubungan yang berubah dengan kerajaan-kerajaan Melayu lainnya. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Aceh berupaya memperkuat armada dan pengaruhnya di kawasan Selat Malaka. Persaingan dengan Portugis melibatkan serangan, diplomasi, dan hubungan yang berubah dengan kerajaan-kerajaan Melayu lainnya. Konflik bukan perang tunggal yang berlangsung tanpa jeda; kekuatan dan persekutuan berubah sesuai kepentingan politik serta perdagangan. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Konflik bukan perang tunggal yang berlangsung tanpa jeda; kekuatan dan persekutuan berubah sesuai kepentingan politik serta perdagangan. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Konflik bukan perang tunggal yang berlangsung tanpa jeda; kekuatan dan persekutuan berubah sesuai kepentingan politik serta perdagangan.",
    sumber: ["Sejarah Nusantara ANRI", "Sejarah Nusantara 1509–1602"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Persaingan Aceh dan Portugis berkaitan dengan perdagangan dan kendali pelabuhan.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-097",
    judul: "Jaringan misi Katolik mencapai Maluku",
    tahun: "1546",
    mulai: 1546,
    akhir: 1551,
    lokasi: { nama: "Maluku", lat: 0.7, lng: 127.4 },
    kategori: "agama",
      jenis: "sampingan",
    ringkas: "Misi keagamaan Eropa hadir bersama jaringan pelayaran dan benteng dagang.",
    cerita: { L1: "Pada pertengahan abad ke-16, misionaris Katolik mengunjungi Maluku, termasuk Fransiskus Xaverius pada 1546. Penyebaran agama berlangsung dalam lingkungan yang juga ditandai persaingan penguasa lokal dan kekuatan Eropa. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada pertengahan abad ke-16, misionaris Katolik mengunjungi Maluku, termasuk Fransiskus Xaverius pada 1546. Penyebaran agama berlangsung dalam lingkungan yang juga ditandai persaingan penguasa lokal dan kekuatan Eropa. Penerimaan agama berbeda antar-komunitas dan tidak dapat digambarkan sebagai perubahan seragam seluruh kepulauan. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Penerimaan agama berbeda antar-komunitas dan tidak dapat digambarkan sebagai perubahan seragam seluruh kepulauan. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Penerimaan agama berbeda antar-komunitas dan tidak dapat digambarkan sebagai perubahan seragam seluruh kepulauan.",
    sumber: ["History of Indonesia: A Resource Book, Kemendikbud", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Misi keagamaan Eropa hadir bersama jaringan pelayaran dan benteng dagang.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-098",
    judul: "Kutai menerima Islam dalam jaringan perdagangan Kalimantan",
    tahun: "abad ke-16",
    mulai: 1565,
    akhir: 1575,
    lokasi: { nama: "Kutai, Kalimantan Timur", lat: -0.44, lng: 117.16 },
    kategori: "agama",
      jenis: "sampingan",
    ringkas: "Perdagangan sungai dan pesisir membawa hubungan keagamaan baru ke Kalimantan.",
    cerita: { L1: "Pada abad ke-16, Islam menyebar ke sejumlah pusat di Kalimantan melalui perdagangan, hubungan antarpenguasa, dan jaringan ulama. Kutai menjadi salah satu contoh perubahan keagamaan yang terkait dengan hubungan pesisir dan sungai. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada abad ke-16, Islam menyebar ke sejumlah pusat di Kalimantan melalui perdagangan, hubungan antarpenguasa, dan jaringan ulama. Kutai menjadi salah satu contoh perubahan keagamaan yang terkait dengan hubungan pesisir dan sungai. Tanggal dan tahapan islamisasi Kutai berbeda menurut sumber. Perubahan keagamaan tidak berarti semua penduduk berpindah keyakinan pada waktu yang sama. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Tanggal dan tahapan islamisasi Kutai berbeda menurut sumber. Perubahan keagamaan tidak berarti semua penduduk berpindah keyakinan pada waktu yang sama. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Tanggal dan tahapan islamisasi Kutai berbeda menurut sumber. Perubahan keagamaan tidak berarti semua penduduk berpindah keyakinan pada waktu yang sama.",
    sumber: ["Sejarah Nusantara 1509–1602", "kajian sejarah Islam di Kalimantan"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Perdagangan sungai dan pesisir membawa hubungan keagamaan baru ke Kalimantan.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-099",
    judul: "Perlawanan Ternate terhadap Portugis meningkat",
    tahun: "1565–1575",
    mulai: 1565,
    akhir: 1575,
    lokasi: { nama: "Ternate", lat: 0.79, lng: 127.38 },
    kategori: "perang",
      jenis: "sampingan",
    ringkas: "Ketegangan atas benteng dan campur tangan Portugis memicu perlawanan.",
    cerita: { L1: "Penguasa Ternate dan masyarakat setempat semakin menentang kehadiran Portugis. Perselisihan menyangkut kedaulatan, perdagangan cengkih, dan campur tangan dalam urusan istana. Perlawanan berlanjut hingga masa Sultan Baabullah. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Penguasa Ternate dan masyarakat setempat semakin menentang kehadiran Portugis. Perselisihan menyangkut kedaulatan, perdagangan cengkih, dan campur tangan dalam urusan istana. Perlawanan berlanjut hingga masa Sultan Baabullah. Perlawanan ini terdiri atas rangkaian tindakan dan persekutuan, bukan satu pertempuran tunggal. Dukungan dari pulau-pulau sekitar turut memengaruhi hasilnya. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Perlawanan ini terdiri atas rangkaian tindakan dan persekutuan, bukan satu pertempuran tunggal. Dukungan dari pulau-pulau sekitar turut memengaruhi hasilnya. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Perlawanan ini terdiri atas rangkaian tindakan dan persekutuan, bukan satu pertempuran tunggal. Dukungan dari pulau-pulau sekitar turut memengaruhi hasilnya.",
    sumber: ["Sejarah Nusantara ANRI", "History of Indonesia: A Resource Book, Kemendikbud"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Ketegangan atas benteng dan campur tangan Portugis memicu perlawanan.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-100",
    judul: "Sultan Khairun terbunuh dan konflik Ternate–Portugis membesar",
    tahun: "1570",
    mulai: 1570,
    akhir: 1575,
    lokasi: { nama: "Ternate", lat: 0.79, lng: 127.38 },
    kategori: "perang",
      jenis: "utama",
    ringkas: "Kematian Sultan Khairun memperburuk hubungan dengan Portugis.",
    cerita: { L1: "Sultan Khairun terbunuh pada 1570 setelah ketegangan dengan Portugis. Peristiwa itu memperkuat tekad penerusnya, Baabullah, untuk mengusir Portugis dari Ternate dan menjadi titik penting dalam konflik setempat. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Sultan Khairun terbunuh pada 1570 setelah ketegangan dengan Portugis. Peristiwa itu memperkuat tekad penerusnya, Baabullah, untuk mengusir Portugis dari Ternate dan menjadi titik penting dalam konflik setempat. Rincian peristiwa pembunuhan bersumber dari narasi sejarah yang perlu dibaca kritis. Akibat politiknya jelas: hubungan dengan Portugis memburuk dan perlawanan meluas. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Rincian peristiwa pembunuhan bersumber dari narasi sejarah yang perlu dibaca kritis. Akibat politiknya jelas: hubungan dengan Portugis memburuk dan perlawanan meluas. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Rincian peristiwa pembunuhan bersumber dari narasi sejarah yang perlu dibaca kritis. Akibat politiknya jelas: hubungan dengan Portugis memburuk dan perlawanan meluas.",
    sumber: ["History of Indonesia: A Resource Book, Kemendikbud", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Kematian Sultan Khairun memperburuk hubungan dengan Portugis.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-101",
    judul: "Baabullah mengusir Portugis dari Ternate",
    tahun: "1575",
    mulai: 1575,
    akhir: 1580,
    lokasi: { nama: "Ternate", lat: 0.79, lng: 127.38 },
    kategori: "perang",
      jenis: "utama",
    ringkas: "Kemenangan Ternate menunjukkan kemampuan politik dan militer lokal.",
    cerita: { L1: "Pada 1575, Sultan Baabullah berhasil memaksa Portugis meninggalkan benteng mereka di Ternate. Keberhasilan ini memperkuat pengaruh Ternate dalam perdagangan rempah dan memperlihatkan bahwa kekuatan Eropa tidak selalu mampu mempertahankan posisinya. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada 1575, Sultan Baabullah berhasil memaksa Portugis meninggalkan benteng mereka di Ternate. Keberhasilan ini memperkuat pengaruh Ternate dalam perdagangan rempah dan memperlihatkan bahwa kekuatan Eropa tidak selalu mampu mempertahankan posisinya. Portugis tetap bertahan di bagian lain kawasan timur, sehingga peristiwa ini bukan akhir kehadiran Eropa di Maluku. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Portugis tetap bertahan di bagian lain kawasan timur, sehingga peristiwa ini bukan akhir kehadiran Eropa di Maluku. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Portugis tetap bertahan di bagian lain kawasan timur, sehingga peristiwa ini bukan akhir kehadiran Eropa di Maluku.",
    sumber: ["History of Indonesia: A Resource Book, Kemendikbud", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Kemenangan Ternate menunjukkan kemampuan politik dan militer lokal.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-102",
    judul: "Portugis membangun benteng di Tidore",
    tahun: "1578",
    mulai: 1578,
    akhir: 1583,
    lokasi: { nama: "Tidore", lat: 0.69, lng: 127.4 },
    kategori: "politik",
      jenis: "sampingan",
    ringkas: "Persaingan Ternate–Tidore ikut membentuk pilihan aliansi dengan bangsa Eropa.",
    cerita: { L1: "Setelah kehilangan posisi di Ternate, Portugis membangun benteng di Tidore pada akhir abad ke-16. Persaingan antarkerajaan Maluku dan perebutan akses rempah membuat aliansi lokal dan Eropa berubah-ubah. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Setelah kehilangan posisi di Ternate, Portugis membangun benteng di Tidore pada akhir abad ke-16. Persaingan antarkerajaan Maluku dan perebutan akses rempah membuat aliansi lokal dan Eropa berubah-ubah. Tidak semua hubungan dapat dijelaskan sebagai pertentangan dua kubu tetap. Penguasa lokal memiliki tujuan sendiri dan dapat mengubah sekutu. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Tidak semua hubungan dapat dijelaskan sebagai pertentangan dua kubu tetap. Penguasa lokal memiliki tujuan sendiri dan dapat mengubah sekutu. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Tidak semua hubungan dapat dijelaskan sebagai pertentangan dua kubu tetap. Penguasa lokal memiliki tujuan sendiri dan dapat mengubah sekutu.",
    sumber: ["History of Indonesia: A Resource Book, Kemendikbud"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Persaingan Ternate–Tidore ikut membentuk pilihan aliansi dengan bangsa Eropa.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-103",
    judul: "Mataram tumbuh di pedalaman Jawa",
    tahun: "sekitar 1580-an",
    mulai: 1582,
    akhir: 1587,
    lokasi: { nama: "Kotagede, Yogyakarta", lat: -7.83, lng: 110.4 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Pusat kekuasaan baru tumbuh di pedalaman ketika kota-kota pesisir telah ramai berdagang.",
    cerita: { L1: "Pada akhir abad ke-16, Panembahan Senopati memperluas kekuasaan Mataram dari kawasan pedalaman Jawa. Pertumbuhannya mengubah hubungan antara pusat agraris, pelabuhan pesisir, dan kerajaan-kerajaan lain di Jawa. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada akhir abad ke-16, Panembahan Senopati memperluas kekuasaan Mataram dari kawasan pedalaman Jawa. Pertumbuhannya mengubah hubungan antara pusat agraris, pelabuhan pesisir, dan kerajaan-kerajaan lain di Jawa. Tahun berdiri Mataram sering ditulis 1582, tetapi konsolidasi kekuasaannya berlangsung bertahap dan kronologi rinci berbeda antarsumber. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Tahun berdiri Mataram sering ditulis 1582, tetapi konsolidasi kekuasaannya berlangsung bertahap dan kronologi rinci berbeda antarsumber. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Tahun berdiri Mataram sering ditulis 1582, tetapi konsolidasi kekuasaannya berlangsung bertahap dan kronologi rinci berbeda antarsumber.",
    sumber: ["Sejarah Nusantara ANRI", "M.C. Ricklefs, A History of Modern Indonesia since c.1200"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Pusat kekuasaan baru tumbuh di pedalaman ketika kota-kota pesisir telah ramai berdagang.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-104",
    judul: "Banjar menguat sebagai kesultanan di Kalimantan Selatan",
    tahun: "akhir abad ke-16",
    mulai: 1588,
    akhir: 1593,
    lokasi: { nama: "Banjarmasin", lat: -3.32, lng: 114.59 },
    kategori: "agama",
      jenis: "sampingan",
    ringkas: "Banjar berkembang melalui hubungan sungai, perdagangan, dan jaringan Islam.",
    cerita: { L1: "Kesultanan Banjar tumbuh di kawasan aliran sungai Kalimantan Selatan. Jaringan sungai menghubungkan pedalaman dengan pesisir dan mendukung perdagangan hasil hutan serta komoditas lain. Islam dan hubungan antarpenguasa turut membentuk legitimasi kerajaan. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Kesultanan Banjar tumbuh di kawasan aliran sungai Kalimantan Selatan. Jaringan sungai menghubungkan pedalaman dengan pesisir dan mendukung perdagangan hasil hutan serta komoditas lain. Islam dan hubungan antarpenguasa turut membentuk legitimasi kerajaan. Kronologi pendirian dan proses perubahan agama Banjar memiliki variasi dalam sumber. Perkembangan kerajaan berlangsung melalui beberapa tahap. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Kronologi pendirian dan proses perubahan agama Banjar memiliki variasi dalam sumber. Perkembangan kerajaan berlangsung melalui beberapa tahap. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Kronologi pendirian dan proses perubahan agama Banjar memiliki variasi dalam sumber. Perkembangan kerajaan berlangsung melalui beberapa tahap.",
    sumber: ["Kajian sejarah Banjar", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Banjar berkembang melalui hubungan sungai, perdagangan, dan jaringan Islam.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-105",
    judul: "Gowa–Tallo memperkuat Makassar sebagai pelabuhan terbuka",
    tahun: "akhir abad ke-16",
    mulai: 1593,
    akhir: 1598,
    lokasi: { nama: "Makassar, Sulawesi Selatan", lat: -5.14, lng: 119.41 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Makassar tumbuh sebagai tempat singgah pedagang lintas kawasan.",
    cerita: { L1: "Kerajaan Gowa–Tallo memperkuat posisi Makassar dalam jaringan perdagangan Indonesia timur. Pelabuhan ini menarik pedagang dari berbagai wilayah dan kemudian menjadi penting bagi perdagangan yang tidak hanya berpusat pada satu kekuatan. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Kerajaan Gowa–Tallo memperkuat posisi Makassar dalam jaringan perdagangan Indonesia timur. Pelabuhan ini menarik pedagang dari berbagai wilayah dan kemudian menjadi penting bagi perdagangan yang tidak hanya berpusat pada satu kekuatan. Tanggal dan urutan islamisasi serta konsolidasi Gowa–Tallo tidak selalu sama dalam sumber. Peran Makassar berkembang secara bertahap. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Tanggal dan urutan islamisasi serta konsolidasi Gowa–Tallo tidak selalu sama dalam sumber. Peran Makassar berkembang secara bertahap. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Tanggal dan urutan islamisasi serta konsolidasi Gowa–Tallo tidak selalu sama dalam sumber. Peran Makassar berkembang secara bertahap.",
    sumber: ["S.J. Villiers, The Rise and Fall of a Maritime Trading State", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Makassar tumbuh sebagai tempat singgah pedagang lintas kawasan.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-106",
    judul: "Armada Belanda tiba di Banten",
    tahun: "1596",
    mulai: 1596,
    akhir: 1601,
    lokasi: { nama: "Banten", lat: -6.03, lng: 106.16 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Kedatangan Belanda membuka babak baru persaingan dagang Eropa di Nusantara.",
    cerita: { L1: "Armada yang dipimpin Cornelis de Houtman tiba di Banten pada 1596 untuk mencari akses langsung ke perdagangan rempah. Kedatangan itu terjadi di kawasan yang telah memiliki penguasa, pedagang, dan jaringan internasional yang mapan. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Armada yang dipimpin Cornelis de Houtman tiba di Banten pada 1596 untuk mencari akses langsung ke perdagangan rempah. Kedatangan itu terjadi di kawasan yang telah memiliki penguasa, pedagang, dan jaringan internasional yang mapan. Ekspedisi awal Belanda mengalami konflik dan kesulitan. Kehadiran Belanda tidak langsung berarti kolonisasi atau kendali atas Nusantara. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Ekspedisi awal Belanda mengalami konflik dan kesulitan. Kehadiran Belanda tidak langsung berarti kolonisasi atau kendali atas Nusantara. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Ekspedisi awal Belanda mengalami konflik dan kesulitan. Kehadiran Belanda tidak langsung berarti kolonisasi atau kendali atas Nusantara.",
    sumber: ["Sejarah Nusantara ANRI", "History of Indonesia: A Resource Book, Kemendikbud"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Kedatangan Belanda membuka babak baru persaingan dagang Eropa di Nusantara.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-107",
    judul: "Ekspedisi Belanda mencapai Aceh",
    tahun: "1599",
    mulai: 1599,
    akhir: 1604,
    lokasi: { nama: "Aceh", lat: 5.55, lng: 95.32 },
    kategori: "perdagangan",
      jenis: "utama",
    ringkas: "Persaingan mencari rempah membawa kapal Eropa ke pelabuhan-pelabuhan Sumatra.",
    cerita: { L1: "Pada 1599, ekspedisi Belanda kembali mengunjungi Aceh. Para penguasa dan pedagang setempat menimbang hubungan dengan pendatang baru berdasarkan harga, keamanan, dan persaingan dengan kekuatan lain. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada 1599, ekspedisi Belanda kembali mengunjungi Aceh. Para penguasa dan pedagang setempat menimbang hubungan dengan pendatang baru berdasarkan harga, keamanan, dan persaingan dengan kekuatan lain. Hubungan dagang awal dapat berisi negosiasi maupun kekerasan. Kunjungan kapal tidak sama dengan penguasaan wilayah. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Hubungan dagang awal dapat berisi negosiasi maupun kekerasan. Kunjungan kapal tidak sama dengan penguasaan wilayah. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Hubungan dagang awal dapat berisi negosiasi maupun kekerasan. Kunjungan kapal tidak sama dengan penguasaan wilayah.",
    sumber: ["Timeline of Indonesian history", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Persaingan mencari rempah membawa kapal Eropa ke pelabuhan-pelabuhan Sumatra.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-108",
    judul: "Jaringan pelabuhan Nusantara menghadapi persaingan dagang baru",
    tahun: "sekitar 1600",
    mulai: 1600,
    akhir: 1610,
    lokasi: { nama: "Kepulauan Nusantara", lat: -2.5, lng: 118.0 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Pedagang lokal dan Asia terus berperan saat perusahaan Eropa memasuki persaingan.",
    cerita: { L1: "Menjelang 1600, perdagangan Nusantara melibatkan pelabuhan Aceh, Banten, Makassar, Maluku, dan banyak simpul kecil. Perusahaan Eropa berusaha membeli rempah langsung, tetapi tetap bergantung pada pengetahuan pelaut, pemasok, dan perantara setempat. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Menjelang 1600, perdagangan Nusantara melibatkan pelabuhan Aceh, Banten, Makassar, Maluku, dan banyak simpul kecil. Perusahaan Eropa berusaha membeli rempah langsung, tetapi tetap bergantung pada pengetahuan pelaut, pemasok, dan perantara setempat. Perubahan abad ke-17 bukan pergantian seketika dari perdagangan Asia menjadi perdagangan Eropa. Banyak jaringan lama bertahan sambil menyesuaikan diri terhadap persaingan baru. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Perubahan abad ke-17 bukan pergantian seketika dari perdagangan Asia menjadi perdagangan Eropa. Banyak jaringan lama bertahan sambil menyesuaikan diri terhadap persaingan baru. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Perubahan abad ke-17 bukan pergantian seketika dari perdagangan Asia menjadi perdagangan Eropa. Banyak jaringan lama bertahan sambil menyesuaikan diri terhadap persaingan baru.",
    sumber: ["Sejarah Nusantara ANRI, Era Perdagangan 1450–1680"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Pedagang lokal dan Asia terus berperan saat perusahaan Eropa memasuki persaingan.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-109",
    judul: "VOC dibentuk untuk menyatukan perusahaan dagang Belanda",
    tahun: "1602",
    mulai: 1602,
    akhir: 1607,
    lokasi: { nama: "Amsterdam–Nusantara", lat: -2.5, lng: 118.0 },
    kategori: "perdagangan",
      jenis: "utama",
    ringkas: "VOC memperoleh mandat untuk bersaing lebih terkoordinasi dalam perdagangan Asia.",
    cerita: { L1: "Pada 1602, sejumlah perusahaan dagang Belanda digabung menjadi Vereenigde Oostindische Compagnie (VOC). Perusahaan ini memiliki dukungan negara dan kemampuan membuat perjanjian serta menggunakan kekuatan bersenjata demi kepentingan dagangnya. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada 1602, sejumlah perusahaan dagang Belanda digabung menjadi Vereenigde Oostindische Compagnie (VOC). Perusahaan ini memiliki dukungan negara dan kemampuan membuat perjanjian serta menggunakan kekuatan bersenjata demi kepentingan dagangnya. Pembentukan VOC tidak berarti seluruh Nusantara langsung dikuasai. Pengaruhnya bertambah secara bertahap melalui perdagangan, perjanjian, benteng, dan konflik. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Pembentukan VOC tidak berarti seluruh Nusantara langsung dikuasai. Pengaruhnya bertambah secara bertahap melalui perdagangan, perjanjian, benteng, dan konflik. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Pembentukan VOC tidak berarti seluruh Nusantara langsung dikuasai. Pengaruhnya bertambah secara bertahap melalui perdagangan, perjanjian, benteng, dan konflik.",
    sumber: ["History of Indonesia: A Resource Book, Kemendikbud", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["VOC memperoleh mandat untuk bersaing lebih terkoordinasi dalam perdagangan Asia.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-110",
    judul: "Belanda mendirikan pos dagang permanen di Banten",
    tahun: "1603",
    mulai: 1603,
    akhir: 1608,
    lokasi: { nama: "Banten", lat: -6.03, lng: 106.16 },
    kategori: "perdagangan",
      jenis: "utama",
    ringkas: "Banten menjadi salah satu pusat awal kegiatan dagang Belanda di Asia Tenggara.",
    cerita: { L1: "Pada 1603, Belanda membangun pos dagang permanen di Banten. Mereka harus bernegosiasi dengan penguasa lokal dan bersaing dengan pedagang Asia serta bangsa Eropa lainnya untuk memperoleh lada dan komoditas lain. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada 1603, Belanda membangun pos dagang permanen di Banten. Mereka harus bernegosiasi dengan penguasa lokal dan bersaing dengan pedagang Asia serta bangsa Eropa lainnya untuk memperoleh lada dan komoditas lain. Pos dagang adalah pijakan komersial, bukan bukti bahwa Belanda telah menguasai Banten atau seluruh Jawa. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Pos dagang adalah pijakan komersial, bukan bukti bahwa Belanda telah menguasai Banten atau seluruh Jawa. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Pos dagang adalah pijakan komersial, bukan bukti bahwa Belanda telah menguasai Banten atau seluruh Jawa.",
    sumber: ["Timeline of Indonesian history", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Banten menjadi salah satu pusat awal kegiatan dagang Belanda di Asia Tenggara.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-111",
    judul: "VOC dan sekutu lokal merebut benteng Portugis di Ambon",
    tahun: "1605",
    mulai: 1605,
    akhir: 1610,
    lokasi: { nama: "Ambon", lat: -3.7, lng: 128.18 },
    kategori: "perang",
      jenis: "utama",
    ringkas: "Pergantian kendali benteng memengaruhi persaingan rempah di Maluku.",
    cerita: { L1: "Pada 1605, VOC dan sekutu lokal menekan Portugis di Ambon hingga benteng Portugis menyerah. Peristiwa ini memperlihatkan bahwa keberhasilan militer Eropa bergantung pula pada aliansi dengan kelompok lokal. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada 1605, VOC dan sekutu lokal menekan Portugis di Ambon hingga benteng Portugis menyerah. Peristiwa ini memperlihatkan bahwa keberhasilan militer Eropa bergantung pula pada aliansi dengan kelompok lokal. Penguasaan benteng tidak sama dengan kontrol penuh atas seluruh perdagangan rempah. Perlawanan dan persaingan berlanjut di pulau-pulau lain. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Penguasaan benteng tidak sama dengan kontrol penuh atas seluruh perdagangan rempah. Perlawanan dan persaingan berlanjut di pulau-pulau lain. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Penguasaan benteng tidak sama dengan kontrol penuh atas seluruh perdagangan rempah. Perlawanan dan persaingan berlanjut di pulau-pulau lain.",
    sumber: ["History of Indonesia: A Resource Book, Kemendikbud", "Timeline of Indonesian history"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Pergantian kendali benteng memengaruhi persaingan rempah di Maluku.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-112",
    judul: "Armada Spanyol menduduki Ternate dan Tidore",
    tahun: "1606",
    mulai: 1606,
    akhir: 1611,
    lokasi: { nama: "Ternate–Tidore", lat: 0.74, lng: 127.39 },
    kategori: "perdagangan",
      jenis: "utama",
    ringkas: "Kehadiran Spanyol memperumit persaingan Eropa dan politik Maluku.",
    cerita: { L1: "Pada 1606, armada Spanyol mengambil posisi di Ternate dan Tidore. Persaingan Eropa bertaut dengan persaingan lokal, sementara para penguasa Maluku tetap berusaha mempertahankan ruang gerak dan kendali atas perdagangan rempah. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada 1606, armada Spanyol mengambil posisi di Ternate dan Tidore. Persaingan Eropa bertaut dengan persaingan lokal, sementara para penguasa Maluku tetap berusaha mempertahankan ruang gerak dan kendali atas perdagangan rempah. Kedudukan Spanyol dan Portugis di kawasan berubah mengikuti konflik global dan aliansi setempat. Peta kekuasaan tidak stabil dan tidak mencakup semua pulau secara seragam. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Kedudukan Spanyol dan Portugis di kawasan berubah mengikuti konflik global dan aliansi setempat. Peta kekuasaan tidak stabil dan tidak mencakup semua pulau secara seragam. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Kedudukan Spanyol dan Portugis di kawasan berubah mengikuti konflik global dan aliansi setempat. Peta kekuasaan tidak stabil dan tidak mencakup semua pulau secara seragam.",
    sumber: ["Timeline of Indonesian history", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Kehadiran Spanyol memperumit persaingan Eropa dan politik Maluku.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-113",
    judul: "Aceh di bawah Iskandar Muda mulai memperluas pengaruh",
    tahun: "1608–1637",
    mulai: 1608,
    akhir: 1613,
    lokasi: { nama: "Aceh", lat: 5.55, lng: 95.32 },
    kategori: "politik",
      jenis: "sampingan",
    ringkas: "Aceh mengembangkan kekuatan laut dan memperluas pengaruh di pesisir Sumatra.",
    cerita: { L1: "Pada masa Iskandar Muda, Aceh menjadi kekuatan regional yang kuat. Armada dan kebijakan istana digunakan untuk memperluas pengaruh terhadap pelabuhan di Sumatra dan Semenanjung Melayu, sekaligus memperkuat posisi Aceh dalam perdagangan. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada masa Iskandar Muda, Aceh menjadi kekuatan regional yang kuat. Armada dan kebijakan istana digunakan untuk memperluas pengaruh terhadap pelabuhan di Sumatra dan Semenanjung Melayu, sekaligus memperkuat posisi Aceh dalam perdagangan. Ekspansi Aceh berlangsung melalui gabungan kampanye militer, diplomasi, dan pengaturan perdagangan. Dampaknya berbeda bagi setiap pelabuhan dan komunitas. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Ekspansi Aceh berlangsung melalui gabungan kampanye militer, diplomasi, dan pengaturan perdagangan. Dampaknya berbeda bagi setiap pelabuhan dan komunitas. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Ekspansi Aceh berlangsung melalui gabungan kampanye militer, diplomasi, dan pengaturan perdagangan. Dampaknya berbeda bagi setiap pelabuhan dan komunitas.",
    sumber: ["Sejarah Nusantara ANRI", "Timeline of Indonesian history"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Aceh mengembangkan kekuatan laut dan memperluas pengaruh di pesisir Sumatra.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-114",
    judul: "Pedagang Inggris membuka pos di sejumlah pelabuhan Nusantara",
    tahun: "1611",
    mulai: 1611,
    akhir: 1616,
    lokasi: { nama: "Banten–Makassar–Jambi", lat: -2.5, lng: 118.0 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Inggris memasuki persaingan dagang yang juga melibatkan Belanda dan Portugis.",
    cerita: { L1: "Pada awal abad ke-17, perusahaan Inggris membangun hubungan dagang dan pos di sejumlah pelabuhan, termasuk Banten, Makassar, dan Jambi. Penguasa lokal dapat menggunakan persaingan antarperusahaan untuk memperoleh harga atau dukungan yang lebih menguntungkan. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada awal abad ke-17, perusahaan Inggris membangun hubungan dagang dan pos di sejumlah pelabuhan, termasuk Banten, Makassar, dan Jambi. Penguasa lokal dapat menggunakan persaingan antarperusahaan untuk memperoleh harga atau dukungan yang lebih menguntungkan. Pos dagang Inggris tidak selalu bertahan lama dan tidak berarti penguasaan wilayah. Persaingan dagang melibatkan negosiasi, perubahan sekutu, dan konflik. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Pos dagang Inggris tidak selalu bertahan lama dan tidak berarti penguasaan wilayah. Persaingan dagang melibatkan negosiasi, perubahan sekutu, dan konflik. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Pos dagang Inggris tidak selalu bertahan lama dan tidak berarti penguasaan wilayah. Persaingan dagang melibatkan negosiasi, perubahan sekutu, dan konflik.",
    sumber: ["Timeline of Indonesian history", "Sejarah Nusantara ANRI"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Inggris memasuki persaingan dagang yang juga melibatkan Belanda dan Portugis.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-115",
    judul: "VOC mengusir Portugis dari benteng Solor",
    tahun: "1613",
    mulai: 1613,
    akhir: 1618,
    lokasi: { nama: "Solor, Nusa Tenggara Timur", lat: -8.45, lng: 123.0 },
    kategori: "perang",
      jenis: "utama",
    ringkas: "Persaingan benteng dagang meluas hingga jalur kepulauan Nusa Tenggara.",
    cerita: { L1: "Pada 1613, VOC mengambil alih benteng Portugis di Solor. Kepulauan Nusa Tenggara memiliki posisi strategis dalam jalur pelayaran dan perdagangan yang menghubungkan Maluku, Jawa, dan wilayah lebih jauh ke barat. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada 1613, VOC mengambil alih benteng Portugis di Solor. Kepulauan Nusa Tenggara memiliki posisi strategis dalam jalur pelayaran dan perdagangan yang menghubungkan Maluku, Jawa, dan wilayah lebih jauh ke barat. Pergantian benteng tidak menghapus peran masyarakat lokal atau menghentikan pelayaran regional. Kontrol atas titik tertentu tetap berbeda dari penguasaan seluruh kawasan. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Pergantian benteng tidak menghapus peran masyarakat lokal atau menghentikan pelayaran regional. Kontrol atas titik tertentu tetap berbeda dari penguasaan seluruh kawasan. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Pergantian benteng tidak menghapus peran masyarakat lokal atau menghentikan pelayaran regional. Kontrol atas titik tertentu tetap berbeda dari penguasaan seluruh kawasan.",
    sumber: ["Timeline of Indonesian history", "History of Indonesia: A Resource Book, Kemendikbud"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Persaingan benteng dagang meluas hingga jalur kepulauan Nusa Tenggara.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
  },
{
    id: "evt-116",
    judul: "Persaingan VOC dan penguasa lokal membentuk ulang jalur perdagangan",
    tahun: "sekitar 1617",
    mulai: 1617,
    akhir: 1627,
    lokasi: { nama: "Kepulauan Nusantara", lat: -2.5, lng: 118.0 },
    kategori: "perdagangan",
      jenis: "sampingan",
    ringkas: "Perusahaan Eropa berusaha mengendalikan perdagangan, sementara penguasa lokal tetap bernegosiasi dan melawan.",
    cerita: { L1: "Pada dasawarsa awal 1600-an, VOC berupaya mengarahkan perdagangan rempah melalui perjanjian, pos, dan kekuatan bersenjata. Namun, penguasa lokal, pedagang Asia, dan pelaut Nusantara tetap menjadi bagian penting jaringan regional. Perubahan ini terjadi di tengah jaringan lokal yang telah lama terbentuk.", L2: "Pada dasawarsa awal 1600-an, VOC berupaya mengarahkan perdagangan rempah melalui perjanjian, pos, dan kekuatan bersenjata. Namun, penguasa lokal, pedagang Asia, dan pelaut Nusantara tetap menjadi bagian penting jaringan regional. Proses monopoli berlangsung tidak merata dan menghadapi perlawanan. Menjelang 1617, belum ada satu kekuatan yang mengendalikan seluruh kepulauan. Karena itu, peristiwa ini perlu ditempatkan dalam konteks hubungan antarpelabuhan dan penguasa setempat.", L3: "Proses monopoli berlangsung tidak merata dan menghadapi perlawanan. Menjelang 1617, belum ada satu kekuatan yang mengendalikan seluruh kepulauan. Catatan kronologis dapat berbeda, sehingga perlu dibedakan antara tanggal yang relatif kuat dan tafsir atas dampak jangka panjang. Perdagangan dan politik Nusantara tetap melibatkan banyak pusat kekuasaan; kehadiran satu kekuatan tidak otomatis berarti kendali menyeluruh." },
    catatan: "Proses monopoli berlangsung tidak merata dan menghadapi perlawanan. Menjelang 1617, belum ada satu kekuatan yang mengendalikan seluruh kepulauan.",
    sumber: ["Sejarah Nusantara ANRI, Era Perdagangan 1450–1680", "History of Indonesia: A Resource Book, Kemendikbud"],
    kuis: { tanya: "Apa hal penting yang ditunjukkan peristiwa ini?", pilihan: ["Perusahaan Eropa berusaha mengendalikan perdagangan, sementara penguasa lokal tetap bernegosiasi dan melawan.", "Nusantara tidak memiliki jaringan perdagangan", "Semua kekuatan lokal langsung hilang"], benar: 0, penjelasan: "Peristiwa ini menunjukkan perubahan regional yang berlangsung melalui hubungan politik, perdagangan, dan respons masyarakat setempat." }
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
