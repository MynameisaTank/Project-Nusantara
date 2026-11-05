import type { Keputusan } from "../types";

/* Keputusan pemain untuk tiap event, dengan konsekuensi masing-masing pilihan.
   Aturan penulisan:
   - Tepat satu pilihan bertanda historis: true.
   - Konsekuensi pilihan non-historis adalah kemungkinan yang masuk akal (bukan fakta),
     jadi dibahasakan dengan "kemungkinan", "bisa jadi".
   - hasilHistoris hanya memuat apa yang dicatat sumber, dengan catatan jika tafsirannya diperdebatkan.
   Versi diperluas: situasi dan konsekuensi menjelaskan pertimbangan jangka pendek/panjang.
   Pilihan tanpa historis:true adalah skenario alternatif, bukan klaim bahwa tokoh benar-benar memilihnya. */

export const KEPUTUSAN: Record<string, Keputusan> = {
  "evt-001": {
    peran: "Ken Arok, penguasa Tumapel",
    situasi:
      "Tumapel masih berada di bawah Kadiri. Raja Kertajaya dikabarkan berselisih dengan para brahmana, dan sebagian dari mereka mencari perlindungan ke Tumapel. Kamu harus memutuskan sikap terhadap Kadiri. Perhatikan bahwa keputusanmu menyangkut dua hal sekaligus: perlindungan kelompok brahmana dan masa depan politik Tumapel. Kekuatan Kadiri, dukungan elite, serta kesiapan pasukan akan menentukan apakah perubahan kekuasaan mungkin berhasil.",
    pilihan: [
      {
        id: "a",
        teks: "Tetap setia pada Kadiri dan terus menyerahkan upeti.",
        konsekuensi:
          "Tumapel aman untuk sementara. Namun kamu tetap bawahan, dan kemungkinan tidak akan ada pusat kekuasaan baru di Jawa Timur selama Kadiri masih kuat. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Terima para brahmana yang mengungsi, kumpulkan pasukan, lalu lawan Kertajaya.",
        konsekuensi:
          "Berisiko besar karena Kadiri adalah kerajaan terkuat di wilayah itu. Jika berhasil, Tumapel naik menjadi pusat kekuasaan baru dengan dukungan para pemuka agama. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "c",
        teks: "Kirim utusan untuk meminta Kertajaya menjadikan Tumapel sekutu yang setara.",
        konsekuensi:
          "Bisa jadi Kertajaya menolak, sebab ia tidak punya alasan melepas kedudukannya sebagai penguasa tertinggi. Kamu kehilangan waktu dan Kadiri jadi tahu rencanamu. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Menurut Pararaton, Ken Arok menerima para brahmana yang meninggalkan Kadiri, lalu mengalahkan Kertajaya di Ganter pada 1222. Kadiri runtuh dan Singhasari berdiri. Rincian kisahnya bercampur legenda, tetapi garis besar peralihan kekuasaan itu diterima luas. Peristiwa ini menjadi titik awal bagi perubahan dinasti di Jawa Timur. Sumber naratif memberi gambaran tentang cara peralihan itu dikenang, tetapi rincian legenda harus dibedakan dari kronologi politik yang lebih dapat diterima."
  },

  "evt-002": {
    peran: "Kolano Ternate",
    situasi:
      "Cengkih hanya tumbuh di Maluku, dan pedagang dari jauh berdatangan membelinya. Kamu harus menentukan bagaimana Ternate memperlakukan para pedagang itu. Keputusan ini bukan hanya soal harga hari ini. Kamu juga perlu mempertimbangkan kepercayaan pedagang, hubungan dengan pulau penghasil rempah lain, keamanan pelabuhan, dan bagaimana menjaga keuntungan dalam jangka panjang.",
    pilihan: [
      {
        id: "a",
        teks: "Jual cengkih hanya kepada satu kelompok pedagang yang menawar paling tinggi.",
        konsekuensi:
          "Untung besar dalam jangka pendek. Tetapi Ternate jadi bergantung pada satu pembeli, dan pedagang lain bisa mencari rempah dari pulau tetangga. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Buka pelabuhan bagi pedagang dari mana pun dan jaga hubungan dengan kerajaan Maluku lainnya.",
        konsekuensi:
          "Pendapatan lebih stabil dan Ternate dikenal luas. Sebagai gantinya, persaingan dengan Tidore, Jailolo, dan Bacan bisa makin tajam karena semuanya berebut pembeli. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "c",
        teks: "Larang cengkih dijual keluar agar harganya naik.",
        konsekuensi:
          "Cengkih jadi langka dan mahal, tetapi pedagang akan berhenti datang. Ternate bisa terisolasi dan kehilangan hubungan dagang yang menopang kekuatannya. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Ternate dan Maluku dikenal sebagai sumber cengkih yang dibeli pedagang Jawa, Melayu, dan lainnya untuk dijual lebih jauh. Nagarakretagama (1365) juga menyebut daerah Maluku. Tahun 1257 hanya berasal dari tradisi lisan, jadi ini gambaran umum perdagangan masa itu, bukan satu keputusan tertentu yang tercatat. Perdagangan rempah berkembang selama beberapa generasi dan tidak dapat dijelaskan oleh satu keputusan penguasa. Tahun pendirian dan rincian awal kerajaan terutama berasal dari tradisi, sedangkan peran cengkih dalam jaringan dagang lebih luas terlihat dari sumber-sumber kemudian."
  },

  "evt-003": {
    peran: "Kertanagara, raja Singhasari",
    situasi:
      "Selat Malaka adalah jalur dagang yang ramai, dan kerajaan Melayu di Sumatra sedang berkembang. Kamu harus memutuskan apakah Singhasari perlu ikut berperan di sana. Ekspedisi jauh bisa membuka peluang baru, tetapi membuat perhatian dan sumber daya kerajaan terbagi. Kamu perlu menimbang keuntungan jalur dagang dengan risiko jika muncul ancaman di Jawa.",
    pilihan: [
      {
        id: "a",
        teks: "Fokus menjaga Jawa dan abaikan Sumatra.",
        konsekuensi:
          "Pasukan tetap di dalam negeri dan kas tidak terkuras. Namun jalur Selat Malaka dikuasai pihak lain, dan pengaruh dagang Singhasari terbatas di Jawa. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Kirim pasukan dan utusan ke Sumatra untuk menjalin ikatan dengan kerajaan Melayu.",
        konsekuensi:
          "Pengaruh Singhasari meluas ke jalur dagang penting. Harganya, sebagian kekuatan militer berada jauh dari Jawa, dan itu bisa menjadi kelemahan jika ada ancaman di dalam negeri. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "c",
        teks: "Kirim utusan diplomatik saja, tanpa pasukan.",
        konsekuensi:
          "Murah dan aman. Tetapi tanpa kekuatan di belakangnya, bujukanmu mudah diabaikan oleh penguasa Melayu. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Pamalayu dikirim pada 1275 menurut Pararaton. Pada 1286 Kertanagara mengirim arca Amoghapasa ke Dharmasraya, dan prasastinya menjadi bukti kuat hubungan kedua kerajaan. Pada 1292 Singhasari diserang Jayakatwang; sebagian sejarawan menduga kekuatan yang terbagi turut membuatnya rentan, meski hal ini masih diperdebatkan. Bukti prasasti memberi petunjuk nyata tentang hubungan antarkerajaan, tetapi tidak menjelaskan seluruh motif ekspedisi. Karena itu, Pamalayu dapat dipahami sebagai peristiwa yang memiliki dimensi strategis dan diplomatik sekaligus."
  },

  "evt-004": {
    peran: "Raden Wijaya, menantu Kertanagara",
    situasi:
      "Kertanagara sudah tewas diserang Jayakatwang. Pasukan kecilmu terdesak, lalu armada Mongol dari Dinasti Yuan tiba di Jawa. Kamu harus memutuskan bagaimana menghadapi dua kekuatan itu. Kamu tidak memiliki kekuatan yang cukup untuk mengalahkan kedua pihak sekaligus. Karena itu, waktu, informasi, dan kemampuan mengubah aliansi menjadi bagian utama dari keputusanmu.",
    pilihan: [
      {
        id: "a",
        teks: "Lawan Jayakatwang dan Mongol sekaligus.",
        konsekuensi:
          "Pasukanmu terlalu kecil. Kemungkinan besar kamu kalah dari dua arah dan tidak ada yang tersisa untuk membangun kerajaan baru. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Gabung dengan Mongol untuk menjatuhkan Jayakatwang, lalu usir mereka.",
        konsekuensi:
          "Berisiko karena Mongol bisa menyadari tipuanmu. Jika waktunya tepat, musuh terbesarmu jatuh dan pasukan asing yang kuat itu bisa dipaksa pergi. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "c",
        teks: "Tunduk kepada Mongol dan mengakui Kubilai Khan sebagai penguasa.",
        konsekuensi:
          "Kamu selamat dan Jayakatwang kalah. Tetapi Jawa bisa menjadi wilayah bawahan Yuan, dan kerajaan yang kamu cita-citakan tidak berdiri merdeka. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Raden Wijaya memakai bantuan pasukan Mongol untuk mengalahkan Jayakatwang, lalu menyerang mereka saat lengah sehingga mereka mundur dari Jawa. Ia kemudian mendirikan Majapahit. Catatan Tiongkok (Yuan Shi) dan naskah Jawa berbeda dalam sejumlah rincian, dan tanggal pasti berdirinya Majapahit masih diperdebatkan. Hasilnya bukan sekadar kemenangan militer, melainkan pembentukan pusat kekuasaan baru. Peristiwa tersebut memperlihatkan penggunaan aliansi secara pragmatis, meskipun urutan rinci kejadian berbeda menurut sumber yang dipakai."
  },

  "evt-005": {
    peran: "Penguasa Samudra Pasai",
    situasi:
      "Pasai berada di jalur Selat Malaka, tempat pedagang dari India, Arab, dan Tiongkok bertemu. Banyak di antara mereka beragama Islam. Kamu harus menentukan sikap kerajaan terhadap jaringan pedagang itu. Keputusan penguasa dapat memengaruhi hubungan dengan pedagang, ulama, dan masyarakat lokal, tetapi perubahan keyakinan biasanya berlangsung bertahap. Keamanan pelabuhan dan kepercayaan mitra dagang tetap sama pentingnya.",
    pilihan: [
      {
        id: "a",
        teks: "Pertahankan tradisi lama dan batasi pergaulan dengan pedagang Muslim.",
        konsekuensi:
          "Tatanan lama terjaga. Namun pedagang yang berjaringan luas bisa memilih pelabuhan lain yang lebih ramah, dan Pasai kehilangan peluang tumbuh. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Terima Islam dan buka pelabuhan bagi jaringan dagang Muslim.",
        konsekuensi:
          "Pasai terhubung dengan pedagang dan ulama dari seberang lautan. Konsekuensinya, kebiasaan istana dan masyarakat pelan-pelan berubah, dan tidak semua pihak di dalam negeri mungkin setuju. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "c",
        teks: "Netral: berdagang dengan semua orang tanpa memihak agama mana pun.",
        konsekuensi:
          "Pelabuhan tetap ramai dan tidak ada konflik soal agama. Tetapi kamu kehilangan ikatan khusus dengan jaringan pedagang Muslim yang sangat penting di Selat Malaka. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Nisan Sultan Malik al-Saleh bertarikh 696 Hijriah (1297 M) menunjukkan Pasai sudah menjadi kerajaan Islam. Pelancong Ibnu Battuta singgah di sana pada sekitar 1345 dan menggambarkannya sebagai pelabuhan yang dihormati. Kapan Islam pertama kali masuk Nusantara masih diperdebatkan, dan 1297 adalah tarikh nisan, belum tentu tahun berdirinya Pasai. Pasai kemudian dikenal sebagai simpul perdagangan dan pembelajaran Islam. Tarikh pada nisan adalah bukti penting untuk keberadaan penguasa Muslim, tetapi tidak menentukan awal seluruh proses Islamisasi di Nusantara."
  },

  "evt-006": {
    peran: "Mpu Prapanca, pujangga istana Majapahit",
    situasi:
      "Hayam Wuruk memerintah dan Majapahit berada di puncak kebesarannya. Kamu menguasai ilmu sastra dan ingin menuliskan apa yang kamu ketahui tentang kerajaan ini. Kamu harus memutuskan bagaimana menulisnya. Sebagai penulis di lingkungan istana, kamu harus mempertimbangkan tujuan sastra, hubungan dengan raja, dan apa yang mungkin diwariskan kepada pembaca masa depan. Catatan yang bertahan bisa menjadi sumber sejarah sekaligus mencerminkan kepentingan penulisnya.",
    pilihan: [
      {
        id: "a",
        teks: "Tulis catatan apa adanya, termasuk kekurangan istana dan kebijakan raja.",
        konsekuensi:
          "Catatanmu lebih jujur dan berguna bagi pembaca masa depan. Tetapi kemungkinan besar tulisanmu tidak disukai lingkungan istana, dan naskah itu bisa saja tidak pernah disalin. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Gubah puisi pujian (kakawin) yang memuliakan sang raja, sambil mencatat daerah-daerah yang berada di bawah pengaruhnya.",
        konsekuensi:
          "Karyamu diterima dan dihargai sebagai karya sastra. Sebagai gantinya, isinya cenderung membesar-besarkan kebesaran raja, sehingga pembaca kelak harus menimbang kebenarannya. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "c",
        teks: "Jangan menulis apa-apa dan biarkan kisah ini diwariskan lewat tradisi lisan.",
        konsekuensi:
          "Tidak ada risiko dari pihak istana. Namun kisah itu mudah berubah dari mulut ke mulut dan banyak rincian akan hilang. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Mpu Prapanca menulis Nagarakretagama pada 1365 dalam bentuk kakawin pujian untuk Hayam Wuruk. Naskahnya ditemukan kembali di Lombok pada 1894 dan menjadi salah satu sumber utama tentang Majapahit. Karena sifatnya yang memuji raja, daftar wilayahnya tidak otomatis berarti penguasaan langsung. Kitab ini sangat berguna jika dibaca bersama sumber lain dan dengan memperhatikan tujuan penulisannya. Pujian kepada raja adalah bagian dari bentuk karya tersebut, bukan alasan untuk mengabaikan seluruh informasinya."
  },

  "evt-007": {
    peran: "Jayakatwang, penguasa Kadiri yang menjadi bawahan Singhasari",
    situasi:
      "Kerajaan leluhurmu, Kadiri, pernah dikalahkan Ken Arok dan kini hanya bawahan Singhasari. Arya Wiraraja menyarankan agar kamu bertindak melawan Kertanagara. Kamu harus memutuskan bagaimana menyikapi Singhasari. Kamu perlu memutuskan bukan hanya apakah akan memberontak, tetapi bagaimana mengatasi pertahanan Singhasari. Kekuatan Kadiri, kejutan, dan kemampuan mengoordinasikan pasukan menentukan risiko setiap strategi.",
    pilihan: [
      {
        id: "a",
        teks: "Tetap menjadi bawahan setia Singhasari dan bersabar.",
        konsekuensi:
          "Hubungan tetap aman dan Kadiri tidak diserang. Namun kamu tetap berada di bawah Kertanagara, dan kemungkinan Kadiri tidak akan berdiri sendiri lagi. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Kerahkan seluruh pasukan menyerang ibu kota langsung dari satu arah.",
        konsekuensi:
          "Serangan seperti ini mudah terlihat dan bisa dihadang. Singhasari masih punya pasukan dan pemimpin yang bisa membalas, sehingga serangan bisa jadi kandas. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "c",
        teks: "Serang dari dua arah: satu pasukan menarik perhatian di utara, pasukan lain menyerbu ibu kota dari selatan.",
        konsekuensi:
          "Berisiko besar karena kamu harus mengatur dua pasukan sekaligus. Jika Kertanagara hanya menyadari satu arah serangan, ibu kotanya bisa jatuh sebelum ia sempat bersiap. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      }
    ],
    hasilHistoris:
      "Menurut naskah dan prasasti, Kadiri menyerang dari utara dan selatan sekaligus. Serangan utara dihalau pasukan Raden Wijaya, tetapi pasukan selatan menyerbu Kutaraja dan Kertanagara tewas. Jayakatwang lalu menghidupkan kembali Kadiri. Kekuasaannya singkat: pada 1293 ia dikalahkan Raden Wijaya yang dibantu pasukan Mongol. Sebagian rincian, termasuk saran Arya Wiraraja, bersumber dari naskah yang ditulis belakangan, dan catatan Tiongkok tidak selalu cocok dengan naskah Jawa. Kekuasaan Jayakatwang berakhir setelah serangan Raden Wijaya dan pasukan Yuan pada 1293. Rangkaian ini memperlihatkan bahwa kemenangan awal tidak menjamin stabilitas jika lawan masih memiliki sekutu dan kesempatan untuk kembali menyerang."
  },

  "evt-008": {
    peran: "Aji Batara Agung Dewa Sakti, pendiri Kutai Kartanegara (menurut tradisi)",
    situasi:
      "Kamu ingin mendirikan pusat kekuasaan di tepi Sungai Mahakam, jalur utama menuju pedalaman Kalimantan. Kamu harus memilih letak pusat dan cara kerajaan ini hidup. Pusat kerajaan perlu dekat dengan sumber pangan, jalur perjalanan, dan kelompok masyarakat yang dapat mendukungnya. Sungai Mahakam menghubungkan pedalaman dengan pesisir, sehingga letak dan cara mengelola hubungan menjadi pertimbangan penting.",
    pilihan: [
      {
        id: "a",
        teks: "Dirikan pusat di dekat muara agar bisa mengamati lalu lintas sungai dan laut serta menerima pedagang.",
        konsekuensi:
          "Kamu berada di pertemuan jalur sungai dan laut dan bisa mengambil keuntungan dari perdagangan. Sebagai gantinya, pusat kerajaan lebih mudah terlihat dan bisa jadi sasaran pihak yang menginginkan jalur itu. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "b",
        teks: "Dirikan pusat jauh di hulu sungai dan batasi hubungan dengan pelayaran luar.",
        konsekuensi:
          "Kamu lebih terlindung dari serangan lewat laut dan bisa hidup dari hasil hutan. Namun kemungkinan besar kamu terpisah dari jaringan dagang laut, sehingga kerajaan sulit menjadi kaya dan dikenal. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "c",
        teks: "Hidup berpindah-pindah mengikuti hasil hutan tanpa pusat kekuasaan tetap.",
        konsekuensi:
          "Cara ini fleksibel dan sulit ditaklukkan. Tetapi tanpa pusat tetap, kekuasaanmu mungkin sulit diwariskan, dan tidak ada kota yang bisa menjadi ibu kota kerajaan. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Menurut tradisi Kutai, kerajaan ini berpusat di sekitar Kutai Lama dekat muara Mahakam; istananya disebut berada di Jaitan Layar, lalu pindah ke Tepian Batu. Tahun 1300 dan sosok pendirinya berasal dari tradisi lisan, jadi ini lebih merupakan gambaran umum letak dan corak kerajaan daripada satu keputusan yang tercatat sumber sezaman. Tradisi lokal penting untuk memahami ingatan asal-usul, tetapi bukan pengganti dokumen sezaman. Perbedaan Kutai Kartanegara dan Kutai Martadipura harus dipertahankan agar dua sejarah yang berlainan tidak tercampur."
  },

  "evt-009": {
    peran: "Gajah Mada, perwira pengawal raja Majapahit",
    situasi:
      "Ra Kuti dan pasukannya menguasai istana. Raja Jayanegara masih hidup, tetapi pasukan pemberontak mencarinya. Kamu hanya punya sedikit pengawal. Kamu harus memutuskan apa yang dilakukan terhadap sang raja. Keselamatan Jayanegara dapat menentukan apakah pemerintahan masih punya pusat legitimasi. Namun, setiap gerakan berisiko membocorkan persembunyian dan membahayakan orang-orang yang membantu raja.",
    pilihan: [
      {
        id: "a",
        teks: "Bertahan dan lawan pasukan Ra Kuti langsung di istana.",
        konsekuensi:
          "Cara ini bisa menunjukkan kesetiaan, tetapi pengawalmu jauh lebih sedikit. Kemungkinan besar kalian kalah dan raja ikut tertangkap. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Bawa raja menjauh ke luar Jawa dan menunggu bantuan.",
        konsekuensi:
          "Raja aman dari pemberontak. Tetapi makin lama ia pergi, bisa jadi makin kuat cengkeraman Ra Kuti atas ibu kota, dan raja bisa dianggap telah meninggalkan takhtanya. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "c",
        teks: "Bawa raja ke tempat persembunyian, lalu kembali ke ibu kota untuk menilai siapa yang masih setia.",
        konsekuensi:
          "Raja selamat dan kamu mendapat gambaran nyata tentang dukungan untuk Ra Kuti. Risikonya, kamu kembali ke ibu kota yang dikuasai pemberontak, dan salah menilai orang bisa berakibat fatal. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      }
    ],
    hasilHistoris:
      "Menurut sumber yang dikaji sejarawan, Gajah Mada membawa Jayanegara bersembunyi di Badander, lalu kembali ke ibu kota untuk menilai keadaan. Ia mendapati pemberontakan itu tidak didukung para bangsawan dan rakyat, lalu memimpin perlawanan yang menumpas pasukan Ra Kuti. Jayanegara kembali ke takhta dan Gajah Mada naik jabatan. Rincian peristiwa disusun dari sumber yang ditulis lama sesudahnya, dan tidak ada catatan sezaman yang rinci. Kisah ini kemudian memperkuat citra Gajah Mada sebagai pejabat yang setia dan cakap. Karena narasi tersebut disampaikan melalui sumber sejarah yang terbatas, pembaca perlu membedakan pesan politik kisah dari detail yang dapat diverifikasi."
  },

  "evt-010": {
    peran: "Gajah Mada, mahapatih Majapahit",
    situasi:
      "Pemberontakan baru saja ditumpas dan kamu baru diangkat menjadi mahapatih. Kamu harus menentukan arah politik Majapahit terhadap pulau-pulau di luar Jawa. Ambisi memperluas pengaruh memerlukan sumber daya, dukungan pejabat, dan hubungan dengan daerah yang dituju. Tidak semua wilayah harus dikelola dengan cara yang sama, dan keberhasilan militer belum tentu berarti kendali langsung.",
    pilihan: [
      {
        id: "a",
        teks: "Umumkan sumpah untuk menundukkan wilayah-wilayah di luar Jawa, lalu susun ekspedisi satu per satu.",
        konsekuensi:
          "Majapahit bisa mengendalikan jalur laut dan menerima upeti dari banyak daerah. Namun biayanya besar, dan kamu bisa jadi ditertawakan pejabat yang menganggap sumpahmu mustahil. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "b",
        teks: "Fokus mengurus Jawa dan hindari urusan di luar pulau.",
        konsekuensi:
          "Majapahit lebih stabil di dalam negeri dan hemat biaya. Namun jalur dagang dan pelabuhan di luar Jawa kemungkinan dikuasai pihak lain, dan kerajaan-kerajaan di sana tumbuh tanpa pengaruh Majapahit. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "c",
        teks: "Bangun hubungan lewat perkawinan dan perjanjian dagang tanpa mengerahkan pasukan.",
        konsekuensi:
          "Cara ini murah dan jarang memicu perang. Tetapi daerah lain bisa saja mengabaikan perjanjian itu, dan Majapahit tidak punya cara memaksa mereka membayar upeti. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Menurut Pararaton, Gajah Mada bersumpah tidak akan menikmati palapa sebelum wilayah-wilayah lain dikalahkan, dan ia menyebut sejumlah nama tempat. Sebagian pejabat menertawakan sumpah itu. Ekspedisi Majapahit sesudahnya, misalnya ke Bali pada 1343, tampak mengikuti daftar itu. Bunyi sumpah, tahunnya, dan arti kata 'nusantara' di dalamnya masih diperdebatkan, dan Majapahit tidak menguasai semua wilayah itu secara langsung. Sumpah itu menjadi lambang ambisi ekspansi Majapahit, tetapi luas pengaruhnya perlu dipahami secara berlapis. Pengakuan simbolis, upeti, hubungan dagang, dan kendali administratif tidak selalu sama."
  },

  "evt-011": {
    peran: "Raja Bedahulu, penguasa Bali (menurut babad)",
    situasi:
      "Utusan Majapahit memintamu mengakui kekuasaan mereka. Kerajaanmu punya tradisi dan pasukan sendiri, tetapi Majapahit adalah kerajaan besar dengan armada laut. Kamu harus memutuskan jawabanmu. Bali memiliki pemimpin dan tradisi lokal sendiri, sedangkan Majapahit memiliki sumber daya militer yang lebih besar. Kamu perlu menimbang keselamatan rakyat, kemandirian politik, serta kemungkinan hubungan dengan kerajaan tetangga.",
    pilihan: [
      {
        id: "a",
        teks: "Terima kekuasaan Majapahit dan kirim upeti.",
        konsekuensi:
          "Kemungkinan perang bisa dihindari dan kerajaanmu tetap utuh. Namun kamu menjadi bawahan, dan pengaruh Jawa bisa masuk lewat pejabat dan upeti. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Tolak dan bersiap menghadapi pasukan Majapahit di Bali.",
        konsekuensi:
          "Kamu mempertahankan kehormatan dan kemerdekaan kerajaanmu. Tetapi menghadapi pasukan besar dari laut itu berat, dan kekalahan bisa mengakhiri kerajaanmu. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "c",
        teks: "Minta bantuan kerajaan lain di luar Bali.",
        konsekuensi:
          "Jika berhasil, kekuatanmu bertambah. Tetapi sekutu yang datang bisa menuntut imbalan, dan Majapahit bisa saja menyerang sebelum bantuan tiba. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Menurut tradisi, raja Bedahulu menolak tunduk dan Bali ditaklukkan Majapahit pada 1343. Setelah itu pengaruh Jawa menguat di Bali, dan menurut babad Majapahit menempatkan penguasa dari Jawa. Rincian perlawanan, termasuk kisah Kebo Iwa, bersumber dari babad yang banyak berisi legenda, dan sebagian kajian melihat masuknya pengaruh Majapahit sebagai proses bertahap, bukan satu peristiwa. Penaklukan perlu dipahami sebagai proses politik, bukan bukti bahwa seluruh kehidupan lokal berubah seketika. Sumber yang berbeda dapat menekankan kemenangan pusat atau kesinambungan tradisi setempat."
  },

  "evt-012": {
    peran: "Adityawarman, pejabat tinggi Majapahit berdarah Melayu",
    situasi:
      "Kamu memegang jabatan penting di Majapahit dan pernah memimpin perluasan kekuasaan ke Sumatra. Dari pihak ibu kamu berkerabat dengan keluarga raja Melayu, dan Sumatra tengah kaya akan emas. Kamu harus memutuskan masa depanmu. Kedudukanmu menghubungkan lingkungan Majapahit dengan wilayah Sumatra tengah. Kamu harus menimbang keamanan jabatan, kepentingan pusat, hubungan dengan elite setempat, dan kemungkinan membangun basis kekuasaan sendiri.",
    pilihan: [
      {
        id: "a",
        teks: "Tetap menjadi pejabat Majapahit di Jawa dan mengabdi kepada raja.",
        konsekuensi:
          "Kedudukanmu aman dan dekat pusat kekuasaan. Tetapi kamu tetap bawahan, dan peluang memimpin wilayah emas di Sumatra tengah bisa diambil orang lain. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Pergi ke Sumatra sebagai wakil Majapahit, tanpa gelar raja.",
        konsekuensi:
          "Majapahit kemungkinan puas dan kamu tidak memancing konflik. Tetapi kekuasaanmu terikat pada kemauan Jawa, dan penerusmu sulit mewarisi kedudukanmu. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "c",
        teks: "Pergi ke Sumatra tengah, bangun kerajaan sendiri, dan pakai gelar raja.",
        konsekuensi:
          "Kamu bisa memerintah dan menguasai perdagangan emas. Risikonya, Majapahit bisa menganggapmu pembelot, dan kamu harus pandai menjaga hubungan agar tidak diserang. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      }
    ],
    hasilHistoris:
      "Pada 1347, tulisan di punggung arca Amoghapasa menyebut Adityawarman sebagai maharajadiraja, penguasa Malayapura. Ia memerintah Sumatra tengah sampai sekitar 1375 dan digantikan putranya, Ananggawarman. Hubungannya dengan Majapahit tetap diperdebatkan: Nagarakretagama menyebut daerahnya membayar upeti, sementara ia memerintah seperti raja yang berdiri sendiri. Prasasti memberi dasar yang lebih kuat daripada cerita yang ditulis jauh kemudian, tetapi tafsir tentang kedudukan politik Adityawarman masih memerlukan perbandingan bukti. Ia menunjukkan bahwa hubungan pusat dan daerah dapat berubah dari waktu ke waktu."
  },

  "evt-013": {
    peran: "Prabu Linggabuana, raja Sunda (menurut kidung)",
    situasi:
      "Kamu datang ke Majapahit bersama keluarga untuk pernikahan putrimu, Dyah Pitaloka, dengan Hayam Wuruk. Di lapangan Bubat, Gajah Mada menuntut agar putrimu diserahkan sebagai tanda tunduk, bukan sebagai permaisuri. Pengawalmu jauh lebih kecil daripada pasukan Majapahit. Pertemuan ini menyangkut martabat keluarga, aturan pernikahan kerajaan, dan hubungan dua kekuasaan. Ketegangan meningkat karena pihak-pihak yang hadir menafsirkan kedudukan dan upacara dengan cara berbeda.",
    pilihan: [
      {
        id: "a",
        teks: "Terima tuntutan itu demi menjaga perdamaian.",
        konsekuensi:
          "Perang mungkin bisa dihindari, tetapi Sunda diperlakukan sebagai bawahan dan putrimu kehilangan kedudukan sebagai permaisuri. Bisa jadi rakyatmu menganggapmu merendahkan kehormatan kerajaan. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Tolak tuntutan, batalkan pernikahan, dan siap melawan jika diserang.",
        konsekuensi:
          "Kamu mempertahankan kehormatan Sunda. Namun pasukanmu kecil, sehingga kamu dan rombonganmu berisiko besar gugur jika Majapahit menyerang. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "c",
        teks: "Minta bertemu langsung dengan Hayam Wuruk untuk berunding sebelum memutuskan.",
        konsekuensi:
          "Mungkin ada jalan tengah jika sang raja sendiri turun tangan. Tetapi jika Gajah Mada menghalangi, kamu kehilangan waktu dan rombonganmu bisa terlanjur terkepung. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Menurut Kidung Sunda, Linggabuana menolak, rombongan Sunda melawan dan hampir semuanya gugur, termasuk sang raja, sementara sang putri dan perempuan Sunda lainnya mengakhiri hidup. Namun Nagarakretagama tidak menyebut peristiwa ini, dan sumber yang menceritakannya ditulis 150 tahun atau lebih sesudahnya. Banyak sejarawan menilai rinciannya tidak bisa dipastikan. Peristiwa Bubat menjadi ingatan penting dalam tradisi sejarah Sunda dan Jawa. Namun, rincian dialog, motif, dan urutan kejadian tidak seluruhnya dapat dipastikan hanya dari kisah sastra yang bertahan."
  },

  "evt-014": {
    peran: "Hayam Wuruk, raja Majapahit",
    situasi:
      "Majapahit sedang berada di masa kuat dan wilayahnya luas. Kamu harus memutuskan bagaimana menjaga hubungan dengan daerah-daerah bawahan di Jawa Timur. Daerah yang luas tidak cukup dijaga dengan perintah dari istana saja. Raja harus mengetahui kondisi daerah, mempertahankan hubungan dengan pejabat setempat, dan menunjukkan kehadiran simbolis agar kekuasaan tetap diakui.",
    pilihan: [
      {
        id: "a",
        teks: "Berangkat sendiri berkeliling bersama rombongan, mengunjungi desa, tempat suci, dan daerah bawahan.",
        konsekuensi:
          "Kamu melihat sendiri keadaan daerahmu dan bisa memperkuat kesetiaan setempat. Biayanya besar, istana ditinggal untuk sementara, dan rombongan besar bisa membebani tuan rumah. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "b",
        teks: "Tetap di istana dan kirim pejabat untuk memeriksa daerah.",
        konsekuensi:
          "Cara ini hemat waktu dan biaya, dan istana tetap berjalan. Namun hubunganmu dengan daerah hanya lewat perantara, dan laporan bisa saja tidak jujur. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "c",
        teks: "Serahkan seluruh urusan daerah kepada mahapatih tanpa kunjungan sama sekali.",
        konsekuensi:
          "Kamu punya waktu untuk urusan istana. Tetapi daerah mungkin merasa jauh dari rajanya, dan semua kesetiaan bisa jadi tertuju pada sang mahapatih, bukan padamu. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Menurut Nagarakretagama, Hayam Wuruk melakukan perjalanan keliling Jawa Timur pada 1359 dan perjalanan lain pada 1361, dengan rombongan yang disertai Mpu Prapanca. Catatan itu memberi kita banyak nama tempat dan gambaran tata kerajaan, tetapi ditulis sebagai pujian untuk raja sehingga perlu dibaca kritis. Catatan perjalanan membantu merekonstruksi geografi dan ritual kerajaan, tetapi tidak menggambarkan semua pengalaman penduduk daerah. Sumber pujian harus dibaca sebagai bukti sekaligus sebagai karya dengan tujuan politik."
  },

  "evt-015": {
    peran: "Mpu Tantular, pujangga Buddha di lingkungan istana Majapahit",
    situasi:
      "Di Majapahit, pemeluk Siwa dan Buddha hidup berdampingan dan istana menaungi keduanya. Kamu ingin menulis kakawin dari sudut pandang Buddha. Kamu harus memutuskan bagaimana menyikapi hubungan dua ajaran itu dalam karyamu. Kamu menulis dalam lingkungan yang mengenal lebih dari satu tradisi keagamaan. Pilihan kata dapat membantu pembaca melihat titik temu, tetapi juga harus sesuai dengan gagasan dan bentuk sastra pada zamannya.",
    pilihan: [
      {
        id: "a",
        teks: "Tegaskan bahwa ajaran Buddha lebih unggul dan ajaran Siwa tidak setara.",
        konsekuensi:
          "Penganut Buddha mungkin senang, tetapi pemeluk Siwa di istana bisa tersinggung, dan karyamu bisa dianggap memecah belah di kerajaan yang menaungi keduanya. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Hindari urusan agama dan tulis kisah petualangan saja.",
        konsekuensi:
          "Karyamu aman dari perdebatan. Tetapi ia mungkin kehilangan pesan yang membuatnya istimewa bagi pembaca zamanmu. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "c",
        teks: "Tulis kisah Bodhisattva dan nyatakan bahwa Buddha dan Siwa berbeda rupa tetapi pada hakikatnya satu.",
        konsekuensi:
          "Karyamu bisa diterima kedua pihak dan cocok dengan suasana istana. Namun sebagian penganut yang ketat mungkin menilainya terlalu longgar. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      }
    ],
    hasilHistoris:
      "Dalam Kakawin Sutasoma, Tantular menulis 'Bhinneka Tunggal Ika tan hana dharma mangrwa', yang menggambarkan Buddha dan Siwa sebagai satu kebenaran dengan dua rupa. Tahun penulisannya diperkirakan antara 1365 dan 1389. Kalimat itu kemudian dipilih menjadi semboyan negara Indonesia, dengan makna yang diperluas dari maksud aslinya. Frasa tersebut bertahan jauh melampaui konteks awalnya dan kemudian memperoleh makna kebangsaan. Memahami konteks asli dan sejarah pemakaiannya membantu menghindari anggapan bahwa arti sebuah ungkapan selalu tetap."
  },

  "evt-016": {
    peran: "Nambi, pejabat veteran pendiri Majapahit",
    situasi:
      "Ayahmu, Arya Wiraraja, baru saja meninggal di Lamajang. Saat kamu sedang melayat, beredar kabar bahwa pasukan istana dari Trowulan sedang bergerak mendatangi wilayahmu karena anggapan pemberontakan. Kamu sedang berduka dan jauh dari pusat pemerintahan, tetapi istana mungkin menafsirkan keterlambatan atau penolakan sebagai tanda pembangkangan. Setiap keputusan membawa risiko militer sekaligus risiko terhadap nama baik keluargamu.",
    pilihan: [
      {
        id: "a",
        teks: "Segera berangkat ke Trowulan sendirian tanpa pengawal untuk mengklarifikasi fitnah.",
        konsekuensi:
          "Bisa jadi kamu ditangkap atau dibunuh di tengah jalan oleh lawan politikmu sebelum sempat berbicara dengan raja. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Perkuat pertahanan benteng di Lamajang dan bertahan dari serangan pasukan raja.",
        konsekuensi:
          "Kamu mempertahankan kehormatan keluarga dan wilayahmu, tetapi tindakan ini makin menguatkan tuduhan pemberontakan di mata istana. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "c",
        teks: "Melarikan diri ke luar Jawa dan meminta bantuan dari kerajaan asing.",
        konsekuensi:
          "Kamu selamat dari pertempuran, tetapi pengikutmu di Lamajang kehilangan pemimpin dan wilayahmu langsung dikuasai istana. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Nambi memilih memperkuat benteng pertahanannya di Gending dan Datar (Lumajang). Pasukan Majapahit di bawah Jayanegara menyerbu dan membobol benteng tersebut. Nambi gugur dalam pertempuran pada 1316. Peristiwa ini mencerminkan ketegangan elite yang dapat muncul ketika kesetiaan pribadi, kepentingan daerah, dan kekuasaan pusat bertabrakan. Motif tepat tiap tokoh tidak seluruhnya bisa dipastikan dari sumber naratif."
  },

  "evt-017": {
    peran: "Ratu Tribhuwana Tunggadewi, penguasa Majapahit",
    situasi:
      "Wilayah Sadeng dan Keta membangkang. Di antara perwiramu terjadi perselisihan sengit soal siapa yang paling berhak memimpin pasukan penumpasan. Selain menghadapi pemberontak, kamu harus mengelola persaingan para perwira sendiri. Jika mereka tidak sepakat tentang komando, operasi bisa tertunda; jika ratu mengambil peran langsung, keberhasilan dapat memperkuat wibawa takhta.",
    pilihan: [
      {
        id: "a",
        teks: "Serahkan kepemimpinan penuh kepada perwira senior dan tetap di Trowulan.",
        konsekuensi:
          "Istana tetap aman. Namun perselisihan antar-perwira bisa memecah konsentrasi pasukan di medan pertempuran. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Turun langsung ke medan perang memimpin pasukan didampingi Gajah Mada.",
        konsekuensi:
          "Wibawa takhta menyatukan perselisihan para perwira. Kemenangan ini memperkuat kepemimpinanmu dan menegaskan posisi Gajah Mada. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "c",
        teks: "Berikan otonomi penuh pada Sadeng agar perang dapat dihindari.",
        konsekuensi:
          "Tidak ada pertumpahan darah. Tetapi wilayah lain bisa ikut membangkang karena melihat Majapahit lemah. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Ratu Tribhuwana Tunggadewi memimpin sendiri ekspedisi bersama Gajah Mada pada 1331. Sadeng dan Keta berhasil ditundukkan, dan Gajah Mada kemudian diangkat menjadi Mahapatih. Kemenangan memperkuat pemerintahan Tribhuwana dan posisi Gajah Mada, tetapi tidak berarti semua persaingan internal berakhir. Sumber yang tersedia menegaskan pentingnya peristiwa ini, sementara detail persaingan pejabat perlu dibaca hati-hati."
  },

  "evt-018": {
    peran: "Laksamana Mpu Nala, panglima armada laut Majapahit",
    situasi:
      "Kerajaan Dompu di Sumbawa menolak mengakui kedaulatan Majapahit. Kamu memimpin armada kapal perang besar menuju perairan timur. Operasi di seberang laut membutuhkan kapal, perbekalan, informasi lokal, dan koordinasi dengan pasukan darat. Kemenangan dapat memperluas pengaruh, tetapi biaya perang dan kemampuan mempertahankan hubungan setelahnya juga harus diperhitungkan.",
    pilihan: [
      {
        id: "a",
        teks: "Lakukan blokade laut total dan lancarkan serangan darat ke pusat benteng Dompu.",
        konsekuensi:
          "Pertempuran akan berlangsung sengit dan memakan korban, tetapi penguasaan penuh atas benteng strategis Sumbawa dapat dicapai. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "b",
        teks: "Hanya lakukan pemblokiran kapal dagang tanpa menyerang benteng darat.",
        konsekuensi:
          "Hemat pasukan, tetapi musuh bisa bertahan lama dengan pasokan dari dalam pulau dan ekspedisimu menggantung. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "c",
        teks: "Tarik mundur armada dan minta petunjuk ulang dari Trowulan.",
        konsekuensi:
          "Armada selamat, tetapi wibawa angkatan laut Majapahit jatuh di mata penguasa pulau-pulau timur. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Mpu Nala melancarkan operasi militer gabungan laut dan darat pada 1357. Benteng Dompu berhasil ditaklukkan dan Sumbawa masuk dalam lingkup pengaruh maritim Majapahit. Catatan tentang wilayah timur memperlihatkan jangkauan perhatian politik Majapahit, tetapi tidak otomatis membuktikan kendali langsung yang seragam. Penilaian atas ekspedisi perlu membedakan klaim kerajaan dari pengaruh yang benar-benar dapat dipertahankan."
  },

  "evt-019": {
    peran: "Raja Hayam Wuruk",
    situasi:
      "Mahapatih Gajah Mada baru saja wafat (1364). Tidak ada satu pun pejabat istana yang memiliki kecakapan komprehensif untuk menggantikan posisinya secara tunggal. Kematian Gajah Mada meninggalkan kekosongan kepemimpinan. Kamu harus menjaga kesinambungan pemerintahan tanpa menciptakan perebutan jabatan baru, sekaligus memastikan daerah tetap menerima keputusan pusat.",
    pilihan: [
      {
        id: "a",
        teks: "Tunjuk satu pejabat muda secara acak untuk menjadi Mahapatih tunggal baru.",
        konsekuensi:
          "Struktur organisasi lama tetap bertahan, tetapi pejabat baru yang belum berpengalaman rentan membuat kesalahan fatal atau ditolak pejabat senior. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Bagi wewenang dan tugas Mahapatih ke dalam dewan menteri (Manca Nagara).",
        konsekuensi:
          "Pemerintahan berjalan stabil dengan pembagian kerja, tetapi pengambilan keputusan penting menjadi lebih lambat dibanding masa Gajah Mada. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "c",
        teks: "Hapuskan seluruh jabatan menteri dan jalankan seluruh urusan kerajaan sendirian.",
        konsekuensi:
          "Beban kerja raja sangat berat dan administrasi daerah bawahan terancam terbengkalai. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Hayam Wuruk tidak mengangkat pengganti tunggal Gajah Mada, melainkan membentuk dewan menteri untuk membagi wewenang pemerintahan Majapahit. Pembagian wewenang membantu pemerintahan terus berjalan, tetapi perubahan ini tidak bisa dijadikan satu-satunya sebab perkembangan Majapahit kemudian. Sejarah kerajaan ditentukan oleh banyak faktor politik, ekonomi, dan regional."
  },

  "evt-020": {
    peran: "Parameswara, pangeran Palembang",
    situasi:
      "Upayamu melepaskan Palembang dari Majapahit gagal dan pasukannya terdesak. Kamu dan pengikut setiamu harus menentukan arah pelarian. Pelarian berarti kehilangan basis kekuasaan lama, tetapi juga membuka peluang membangun pusat baru. Keberhasilan bergantung pada lokasi, hubungan dengan penduduk, keamanan kapal, dan kemampuan menarik pedagang dari pelabuhan pesaing.",
    pilihan: [
      {
        id: "a",
        teks: "Menyerah kepada pasukan Majapahit dan memohon pengampunan.",
        konsekuensi:
          "Nyawamu mungkin diampuni, tetapi kamu akan menghabiskan sisa hidup sebagai tawanan politik di Jawa. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      },
      {
        id: "b",
        teks: "Melarikan diri ke utara Selat Malaka dan mendirikan kota pelabuhan baru di Melaka.",
        konsekuensi:
          "Kamu harus memulai dari awal di daerah baru, tetapi posisinya yang strategis berpeluang menjadi pusat perdagangan maritim baru. Dalam permainan, ini mewakili arah yang paling dekat dengan perkembangan yang dikenal dari sumber sejarah; sumber tidak mencatat keputusan persis dalam bentuk pilihan modern ini.",
        historis: true
      },
      {
        id: "c",
        teks: "Berlayar jauh ke arah timur menuju kepulauan Maluku.",
        konsekuensi:
          "Kamu berada jauh dari jangkauan Majapahit, tetapi kehilangan akses ke jalur dagang utama Selat Malaka. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut."
      }
    ],
    hasilHistoris:
      "Parameswara melarikan diri ke arah Semenanjung Malaya dan mendirikan Melaka sekitar tahun 1396-1400. Melaka berkembang menjadi Kesultanan maritim besar penyambung jalur perdagangan dunia. Melaka tumbuh menjadi pusat perdagangan penting pada abad berikutnya. Kisah awalnya menunjukkan bahwa kekuatan pelabuhan maritim bergantung pada gabungan lokasi strategis, diplomasi, keamanan, dan jaringan pedagang."
  },

  "evt-021": {
    peran: "Pengamat pelabuhan Lamreh",
    situasi: "Sebuah nisan bertarikh 1211 ditemukan di kawasan Lamreh dan dikaitkan dengan seorang penguasa Muslim. Kamu perlu menjelaskan arti bukti ini tanpa menyimpulkan lebih dari yang dapat didukung sumber.",
    pilihan: [
      { id: "a", teks: "Anggap nisan sebagai bukti bahwa seluruh penduduk Sumatra sudah Muslim.", konsekuensi: "Kesimpulan ini terlalu luas dan tidak didukung satu temuan. Bukti material menunjukkan keberadaan individu atau komunitas, bukan agama seluruh penduduk.", },
      { id: "b", teks: "Catat nisan sebagai bukti awal keberadaan Muslim, lalu bandingkan dengan sumber lain.", konsekuensi: "Kesimpulan menjadi lebih kuat karena membedakan bukti langsung dari gambaran proses islamisasi yang lebih luas.", historis: true },
      { id: "c", teks: "Abaikan nisan karena tidak menceritakan seluruh sejarah kerajaan.", konsekuensi: "Kamu kehilangan bukti penting. Sumber tidak harus menjelaskan semuanya agar berguna, asalkan keterbatasannya dicatat." }
    ],
    hasilHistoris: "Nisan bertarikh 1211 yang dikaitkan dengan Sultan Sulaiman menjadi petunjuk awal keberadaan Muslim di pesisir utara Sumatra. Identifikasi dan maknanya harus dibaca melalui kajian epigrafi, bukan dianggap bukti islamisasi menyeluruh."
  },
  "evt-022": {
    peran: "Penafsir catatan perdagangan Asia",
    situasi: "Teks Tiongkok sekitar 1225 menyebut Sanfoqi dalam konteks negeri-negeri dagang. Nama itu sering dihubungkan dengan Sriwijaya, tetapi cakupan wilayahnya tidak sepenuhnya pasti.",
    pilihan: [
      { id: "a", teks: "Gambarkan Sanfoqi sebagai negara modern dengan perbatasan tetap.", konsekuensi: "Peta itu akan menyesatkan karena nama asing dapat merujuk pada pusat atau jaringan pelabuhan yang berubah." },
      { id: "b", teks: "Bandingkan teks Tiongkok dengan sumber lokal dan perlakukan identifikasi sebagai tafsiran.", konsekuensi: "Kamu memperoleh gambaran lebih seimbang tentang perdagangan dan ketidakpastian nama politik dalam sumber lama.", historis: true },
      { id: "c", teks: "Gunakan satu sumber asing sebagai satu-satunya bukti sejarah Sumatra.", konsekuensi: "Kesimpulan menjadi sempit karena sumber luar juga memiliki tujuan, istilah, dan keterbatasannya sendiri." }
    ],
    hasilHistoris: "Zhu Fan Zhi karya Zhao Rugua sekitar 1225 memberi keterangan tentang jaringan dagang Asia dan Sanfoqi. Identifikasi Sanfoqi dengan Sriwijaya atau jaringan penerusnya lazim digunakan, tetapi cakupan politiknya masih perlu ditafsirkan."
  },
  "evt-023": {
    peran: "Penasihat Singhasari pada masa Kertanagara",
    situasi: "Singhasari ingin memperluas pengaruh ke Bali. Ekspedisi dapat memperkuat jalur laut, tetapi juga berisiko memicu perlawanan dan membutuhkan sumber daya.",
    pilihan: [
      { id: "a", teks: "Kirim ekspedisi tanpa mempertimbangkan keadaan politik lokal.", konsekuensi: "Operasi bisa menghadapi perlawanan dan menghasilkan kontrol yang rapuh." },
      { id: "b", teks: "Bangun hubungan dan siapkan ekspedisi untuk memperluas pengaruh ke Bali.", konsekuensi: "Pilihan ini paling dekat dengan tradisi sejarah tentang ekspedisi Singhasari ke Bali sekitar 1284, meskipun rincian dan hasilnya tidak sepenuhnya jelas.", historis: true },
      { id: "c", teks: "Hentikan seluruh hubungan dagang dengan Bali.", konsekuensi: "Langkah ini dapat mengurangi akses ke jalur laut dan tidak menyelesaikan persaingan politik." }
    ],
    hasilHistoris: "Ekspedisi Singhasari ke Bali sekitar 1284 dikaitkan dengan masa Kertanagara. Bentuk dan lamanya kontrol Singhasari di Bali tidak sepenuhnya diketahui, dan peristiwa ini berbeda dari kampanye Majapahit pada 1343."
  },
  "evt-024": {
    peran: "Penasihat Raja Kertanagara",
    situasi: "Utusan Yuan datang membawa tuntutan pengakuan politik. Menolak tuntutan dapat mempertahankan martabat kerajaan, tetapi memperbesar risiko konflik dengan kekuatan besar.",
    pilihan: [
      { id: "a", teks: "Terima semua tuntutan Yuan tanpa negosiasi.", konsekuensi: "Risiko serangan mungkin turun sementara, tetapi kedudukan mandiri Singhasari bisa melemah." },
      { id: "b", teks: "Tolak tuntutan dan pertahankan kedaulatan Singhasari.", konsekuensi: "Ini mencerminkan garis besar kisah penolakan Kertanagara, meski rincian perlakuan terhadap utusan dan sebab ekspedisi Yuan perlu dibaca kritis.", historis: true },
      { id: "c", teks: "Abaikan utusan tanpa menyiapkan pertahanan atau diplomasi lanjutan.", konsekuensi: "Kerajaan berisiko kehilangan kesempatan mengelola ketegangan secara terencana." }
    ],
    hasilHistoris: "Pada 1289, utusan Yuan menyampaikan tuntutan kepada Kertanagara. Tradisi menyebut penolakan keras dari pihak Singhasari. Ekspedisi Yuan tiba pada 1293 setelah perubahan politik di Jawa, sehingga penyebabnya tidak dapat disederhanakan menjadi satu insiden."
  },
  "evt-025": {
    peran: "Raden Wijaya, pendiri Majapahit",
    situasi: "Setelah krisis yang menjatuhkan Singhasari dan Kadiri, kamu harus mengubah kemenangan militer menjadi pemerintahan yang dapat bertahan.",
    pilihan: [
      { id: "a", teks: "Membalas semua bekas sekutu tanpa membangun pemerintahan.", konsekuensi: "Kamu dapat kehilangan dukungan elite yang dibutuhkan untuk menjaga kerajaan." },
      { id: "b", teks: "Bangun pusat pemerintahan, gunakan gelar raja, dan rangkul pendukung penting.", konsekuensi: "Langkah ini sesuai dengan konsolidasi Raden Wijaya sebagai Kertarajasa Jayawardhana dan membantu membentuk dinasti Majapahit.", historis: true },
      { id: "c", teks: "Meninggalkan Jawa tanpa mencoba membangun pusat kekuasaan.", konsekuensi: "Kamu menghindari sebagian konflik tetapi kehilangan kesempatan membangun pemerintahan baru." }
    ],
    hasilHistoris: "Raden Wijaya mendirikan Majapahit setelah krisis 1292–1293 dan dikenal dengan gelar Kertarajasa Jayawardhana. Tahun 1293 umum dipakai untuk pendirian kerajaan, sedangkan 1294 kadang digunakan untuk penobatan atau konsolidasi."
  },
  "evt-026": {
    peran: "Penasihat istana Jayanegara",
    situasi: "Raja baru naik takhta pada 1309. Elite yang membantu pendirian Majapahit memiliki kekuatan sendiri dan perlu diyakinkan agar tetap mendukung istana.",
    pilihan: [
      { id: "a", teks: "Bagikan jabatan hanya kepada keluarga dekat dan abaikan pejabat daerah.", konsekuensi: "Kebijakan ini dapat memperbesar rasa tersisih dan meningkatkan ketegangan." },
      { id: "b", teks: "Jaga dukungan elite, awasi daerah, dan tangani persaingan politik secara bertahap.", konsekuensi: "Ini merupakan pendekatan yang masuk akal untuk konsolidasi kerajaan, meski bukan catatan tentang satu keputusan khusus Jayanegara.", historis: true },
      { id: "c", teks: "Biarkan setiap pejabat membangun pasukan sendiri tanpa koordinasi.", konsekuensi: "Kekuasaan pusat bisa melemah dan persaingan elite semakin sulit dikendalikan." }
    ],
    hasilHistoris: "Jayanegara menggantikan Raden Wijaya pada 1309. Pemberontakan pada masa pemerintahannya menunjukkan bahwa Majapahit masih menghadapi persoalan konsolidasi dan rivalitas elite."
  },
  "evt-027": {
    peran: "Pejabat istana Majapahit pada masa suksesi",
    situasi: "Jayanegara wafat pada 1328 tanpa pewaris langsung. Istana harus menjaga legitimasi dan menghindari konflik saat memilih penerus.",
    pilihan: [
      { id: "a", teks: "Tunda keputusan suksesi tanpa batas waktu.", konsekuensi: "Ketidakpastian dapat memberi ruang bagi faksi elite untuk berebut pengaruh." },
      { id: "b", teks: "Dukung penerus dari garis dinasti yang memiliki legitimasi, yaitu Tribhuwana Tunggadewi.", konsekuensi: "Ini sejalan dengan pergantian pemerintahan yang tercatat setelah wafatnya Jayanegara.", historis: true },
      { id: "c", teks: "Menyerahkan takhta kepada penguasa asing tanpa proses politik lokal.", konsekuensi: "Langkah ini dapat menimbulkan krisis legitimasi dan tidak sesuai dengan perkembangan yang diketahui." }
    ],
    hasilHistoris: "Setelah Jayanegara wafat pada 1328, Tribhuwana Tunggadewi kemudian memerintah Majapahit. Kisah kematian Jayanegara dalam kronik perlu dibedakan dari fakta umum mengenai suksesi."
  },
  "evt-028": {
    peran: "Tribhuwana Tunggadewi, penguasa Majapahit",
    situasi: "Kamu memimpin setelah krisis suksesi. Beberapa daerah menentang pusat, sedangkan pejabat militer bersaing mendapatkan pengaruh.",
    pilihan: [
      { id: "a", teks: "Mengabaikan pemberontakan dan membiarkan hubungan pusat-daerah memburuk.", konsekuensi: "Kewibawaan istana dapat menurun dan konflik menyebar." },
      { id: "b", teks: "Perkuat otoritas pusat dan gunakan pejabat yang cakap untuk menangani konflik.", konsekuensi: "Pendekatan ini sejalan dengan gambaran umum konsolidasi pada masa Tribhuwana dan naiknya peran Gajah Mada.", historis: true },
      { id: "c", teks: "Membubarkan semua jabatan pemerintahan daerah sekaligus.", konsekuensi: "Perubahan mendadak dapat mengganggu administrasi dan membuat wilayah sulit dikelola." }
    ],
    hasilHistoris: "Pemerintahan Tribhuwana Tunggadewi (sekitar 1328–1350) menjadi masa konsolidasi Majapahit. Penumpasan Sadeng dan Keta pada 1331 berkaitan dengan menguatnya posisi Gajah Mada, meski detail politiknya terutama berasal dari kronik."
  },
  "evt-029": {
    peran: "Penasihat Hayam Wuruk",
    situasi: "Hayam Wuruk naik takhta pada 1350. Kerajaan memiliki jaringan hubungan yang luas, tetapi tiap daerah memiliki keadaan politik dan kepentingan berbeda.",
    pilihan: [
      { id: "a", teks: "Anggap semua daerah yang disebut dalam naskah sebagai wilayah yang dikelola langsung.", konsekuensi: "Gambaran ini terlalu sederhana dan mencampuradukkan pengaruh simbolis dengan pemerintahan langsung." },
      { id: "b", teks: "Perkuat hubungan diplomatik, perdagangan, dan tata kelola pusat sambil menilai tiap daerah secara berbeda.", konsekuensi: "Ini sejalan dengan gambaran umum strategi pemerintahan Majapahit pada masa Hayam Wuruk.", historis: true },
      { id: "c", teks: "Memutus hubungan dengan semua pelabuhan luar Jawa.", konsekuensi: "Langkah ini akan mengurangi akses ke perdagangan dan jaringan politik regional." }
    ],
    hasilHistoris: "Hayam Wuruk memerintah pada 1350–1389. Masa pemerintahannya sering dianggap puncak Majapahit, tetapi sifat hubungan dengan daerah luar berbeda-beda dan tidak selalu berarti administrasi langsung."
  },
  "evt-030": {
    peran: "Penguasa pelabuhan di Maluku",
    situasi: "Pedagang jarak jauh datang untuk memperoleh cengkih. Kamu perlu menjaga keuntungan perdagangan tanpa membuat pelabuhan terlalu bergantung pada satu kelompok.",
    pilihan: [
      { id: "a", teks: "Berikan seluruh perdagangan kepada satu pedagang dan larang yang lain.", konsekuensi: "Keuntungan jangka pendek mungkin besar, tetapi ketergantungan pada satu pembeli dapat melemahkan posisi tawar." },
      { id: "b", teks: "Jaga keamanan pelabuhan dan bangun hubungan dengan beragam jaringan pedagang.", konsekuensi: "Pilihan ini sesuai dengan logika umum perdagangan maritim, meskipun tidak mewakili satu keputusan khusus yang tercatat.", historis: true },
      { id: "c", teks: "Hentikan pertukaran rempah dan tutup pelabuhan.", konsekuensi: "Komunitas kehilangan peluang pertukaran barang dan hubungan antarpulau." }
    ],
    hasilHistoris: "Cengkih Maluku merupakan komoditas penting dalam jaringan perdagangan Asia. Jaringan ini dibentuk banyak produsen dan perantara, bukan hanya satu kerajaan atau satu pelabuhan."
  },
  "evt-031": {
    peran: "Pengelola pelabuhan Samudra Pasai",
    situasi: "Pasai berada dekat jalur Selat Malaka. Pedagang, pelaut, dan komunitas Muslim datang ke pelabuhan; stabilitas dan kepercayaan penting untuk menjaga perdagangan.",
    pilihan: [
      { id: "a", teks: "Melarang semua pedagang dari luar datang ke pelabuhan.", konsekuensi: "Pendapatan dan hubungan Pasai dengan jaringan regional bisa berkurang." },
      { id: "b", teks: "Jaga keamanan, dukung kegiatan pasar, dan pelihara hubungan dengan komunitas dagang.", konsekuensi: "Ini sejalan dengan fungsi Pasai sebagai simpul perdagangan dan kehidupan Islam di Selat Malaka.", historis: true },
      { id: "c", teks: "Mengabaikan keamanan kapal dan penyelesaian sengketa dagang.", konsekuensi: "Pedagang mungkin memilih pelabuhan lain yang dianggap lebih aman." }
    ],
    hasilHistoris: "Samudra Pasai berkembang sebagai pelabuhan penting di Selat Malaka. Nisan Malik al-Saleh bertarikh 1297 dan catatan Ibnu Battuta pada 1345 menjadi sumber penting untuk memahami kerajaan ini."
  },
  "evt-032": {
    peran: "Penasihat penguasa Sunda",
    situasi: "Kerajaan Sunda berada di Jawa Barat ketika Singhasari dan Majapahit tumbuh di Jawa Timur. Kamu harus menjaga kepentingan kerajaan tanpa menganggap hubungan dengan tetangga hanya soal perang.",
    pilihan: [
      { id: "a", teks: "Putus semua hubungan dengan kerajaan tetangga.", konsekuensi: "Kerajaan kehilangan peluang perdagangan, diplomasi, dan pertukaran budaya." },
      { id: "b", teks: "Pertahankan otonomi sambil mengelola perdagangan dan diplomasi regional.", konsekuensi: "Ini merupakan strategi yang masuk akal untuk kerajaan yang bertahan sebagai pusat politik tersendiri di Jawa Barat.", historis: true },
      { id: "c", teks: "Menganggap semua keputusan Majapahit otomatis berlaku di Sunda.", konsekuensi: "Pilihan ini mengabaikan kemandirian politik dan perbedaan sumber mengenai jangkauan pengaruh." }
    ],
    hasilHistoris: "Kerajaan Sunda tetap menjadi pusat politik di Jawa Barat pada abad ke-13 dan ke-14. Hubungannya dengan kerajaan lain harus dipahami berdasarkan bukti, bukan dianggap sebagai satu administrasi Jawa yang seragam."
  },
  "evt-033": {
    peran: "Pemimpin komunitas di muara Mahakam",
    situasi: "Muara Mahakam menghubungkan jalur sungai dari pedalaman dengan kapal yang datang dari pesisir. Pengelolaan pertukaran dan hubungan lokal penting bagi kemakmuran kawasan.",
    pilihan: [
      { id: "a", teks: "Hanya berdagang dengan pedalaman dan menutup akses ke laut.", konsekuensi: "Komunitas kehilangan akses ke jaringan maritim dan berbagai barang dari luar." },
      { id: "b", teks: "Gunakan posisi muara untuk menghubungkan perdagangan sungai dan laut.", konsekuensi: "Pilihan ini sesuai dengan keuntungan geografis kawasan Mahakam, tanpa mengklaim detail pemerintahan yang tidak tercatat.", historis: true },
      { id: "c", teks: "Mengabaikan jalur sungai sebagai sarana transportasi.", konsekuensi: "Pergerakan barang dan orang dari pedalaman menjadi lebih sulit." }
    ],
    hasilHistoris: "Sungai Mahakam merupakan penghubung penting antara pedalaman dan pesisir Kalimantan Timur. Tradisi awal Kutai Kartanegara ditulis kemudian, sehingga konteks geografis lebih pasti daripada detail pendirian kerajaan."
  },
  "evt-034": {
    peran: "Utusan kerajaan dalam jaringan Majapahit",
    situasi: "Naskah istana menyebut banyak daerah dalam lingkup Majapahit, tetapi hubungan tiap daerah tidak selalu sama. Kamu harus memilih cara membaca dan mengelola hubungan tersebut.",
    pilihan: [
      { id: "a", teks: "Menuntut tata pemerintahan yang sama di semua daerah tanpa melihat kondisi lokal.", konsekuensi: "Kebijakan ini dapat memicu penolakan karena hubungan dan kemampuan pusat berbeda-beda." },
      { id: "b", teks: "Gunakan diplomasi, perdagangan, upeti, dan kekuatan sesuai konteks tiap hubungan.", konsekuensi: "Ini paling sesuai dengan gambaran hubungan regional yang beragam, meskipun tidak satu keputusan tunggal yang tercatat.", historis: true },
      { id: "c", teks: "Menganggap naskah pujian istana sebagai peta administrasi yang lengkap.", konsekuensi: "Kesimpulan itu mengabaikan tujuan sastra dan politik naskah serta bukti lokal yang mungkin berbeda." }
    ],
    hasilHistoris: "Jangkauan Majapahit lebih tepat dipahami sebagai jaringan hubungan dengan beragam tingkat pengaruh. Nagarakretagama merupakan sumber penting, tetapi daftar daerahnya tidak otomatis berarti kontrol langsung yang seragam."
  },
  "evt-035": {
    peran: "Penasihat lokal di Bali setelah kampanye Majapahit",
    situasi: "Kampanye Majapahit sekitar 1343 mengubah hubungan politik. Pemimpin setempat harus menjaga kehidupan masyarakat dan menyesuaikan hubungan dengan kekuatan baru.",
    pilihan: [
      { id: "a", teks: "Menghapus semua adat dan praktik keagamaan lokal.", konsekuensi: "Langkah itu berisiko memicu penolakan dan tidak mencerminkan kesinambungan budaya yang diketahui." },
      { id: "b", teks: "Sesuaikan hubungan politik sambil menjaga tradisi dan kepemimpinan lokal yang berlanjut.", konsekuensi: "Ini menggambarkan bahwa perubahan kekuasaan tidak selalu menghapus budaya masyarakat setempat.", historis: true },
      { id: "c", teks: "Menolak semua hubungan dengan pulau-pulau tetangga.", konsekuensi: "Bali kehilangan peluang perdagangan dan diplomasi dalam jaringan regional." }
    ],
    hasilHistoris: "Kampanye Majapahit ke Bali sekitar 1343 mengubah hubungan politik Jawa–Bali, tetapi tidak menghapus seluruh tradisi lokal. Rincian integrasi politik dan budaya memerlukan pembacaan sumber Jawa dan Bali bersama-sama."
  },
  "evt-036": {
    peran: "Adityawarman, penguasa Sumatra tengah",
    situasi: "Kekuasaan di Sumatra tengah membutuhkan legitimasi. Prasasti dan hubungan dengan elite dari wilayah lain dapat memperkuat kedudukan, tetapi klaim harus disesuaikan dengan bukti.",
    pilihan: [
      { id: "a", teks: "Mengabaikan prasasti dan hanya mengandalkan cerita yang ditulis jauh kemudian.", konsekuensi: "Kamu mengesampingkan bukti material yang dapat membantu menilai gelar dan legitimasi." },
      { id: "b", teks: "Gunakan gelar dan ritual kerajaan sambil membangun hubungan dengan jaringan lokal dan lintas pulau.", konsekuensi: "Pilihan ini sejalan dengan cara penguasa abad pertengahan menegaskan legitimasi, meski detail praktiknya harus diteliti dari prasasti.", historis: true },
      { id: "c", teks: "Menyatakan seluruh Sumatra sebagai wilayah yang dikelola langsung tanpa bukti.", konsekuensi: "Klaim tersebut terlalu luas dan tidak dapat disimpulkan hanya dari gelar seorang raja." }
    ],
    hasilHistoris: "Adityawarman dikenal melalui prasasti abad ke-14 dan dikaitkan dengan pusat kekuasaan di Sumatra tengah. Hubungannya dengan Jawa dan Melayu menunjukkan jaringan elite, tetapi batas serta bentuk kekuasaannya masih dikaji."
  },
  "evt-037": {
    peran: "Penafsir hubungan Majapahit dan Dompu",
    situasi: "Sumber Majapahit menyebut wilayah di Nusa Tenggara, termasuk Dompu. Kamu harus membedakan klaim pengaruh, ekspedisi, dan pemerintahan sehari-hari.",
    pilihan: [
      { id: "a", teks: "Simpulkan bahwa setiap wilayah yang disebut pasti memiliki pejabat Majapahit tetap.", konsekuensi: "Kesimpulan ini melebih-lebihkan apa yang dapat dibuktikan dari daftar wilayah." },
      { id: "b", teks: "Bandingkan sumber istana dengan bukti dan tradisi lokal Dompu.", konsekuensi: "Pendekatan ini memberi ruang bagi sejarah lokal dan membantu menguji klaim pengaruh kerajaan besar.", historis: true },
      { id: "c", teks: "Abaikan semua sumber Jawa karena berasal dari istana.", konsekuensi: "Kamu kehilangan sumber penting; lebih baik menilai tujuan dan keterbatasannya daripada menolaknya seluruhnya." }
    ],
    hasilHistoris: "Dompu termasuk dalam pembahasan hubungan Majapahit dengan Nusa Tenggara. Sumber istana perlu dibaca bersama bukti lokal; daftar geografis tidak otomatis menunjukkan administrasi langsung."
  },
  "evt-038": {
    peran: "Penasihat Hayam Wuruk setelah wafatnya Gajah Mada",
    situasi: "Gajah Mada wafat pada 1364. Raja harus melanjutkan pemerintahan tanpa pejabat yang selama ini sangat dominan.",
    pilihan: [
      { id: "a", teks: "Hentikan semua urusan pemerintahan sampai ada tokoh yang persis sama kuatnya.", konsekuensi: "Penundaan akan melemahkan koordinasi dan membuka peluang persaingan elite." },
      { id: "b", teks: "Bagikan tugas kepada pejabat senior dan jaga koordinasi istana.", konsekuensi: "Ini sejalan dengan gambaran umum penyesuaian pemerintahan setelah Gajah Mada wafat.", historis: true },
      { id: "c", teks: "Serahkan semua wewenang kepada satu daerah jauh dari pusat.", konsekuensi: "Langkah ini dapat mengubah keseimbangan kekuasaan secara drastis tanpa dasar yang diketahui." }
    ],
    hasilHistoris: "Gajah Mada wafat pada 1364. Hayam Wuruk melanjutkan pemerintahan dengan pejabat senior; sumber tidak memberikan rincian lengkap mengenai setiap pembagian tugas atau penyebab kematian Gajah Mada."
  },
  "evt-039": {
    peran: "Penasihat istana setelah wafatnya Hayam Wuruk",
    situasi: "Hayam Wuruk wafat pada 1389. Keluarga kerajaan dan elite memiliki kepentingan yang berbeda, sehingga pergantian penguasa perlu dikelola dengan hati-hati.",
    pilihan: [
      { id: "a", teks: "Biarkan semua faksi bersaing tanpa aturan suksesi.", konsekuensi: "Persaingan dapat meningkat dan merusak kestabilan pemerintahan." },
      { id: "b", teks: "Bangun kesepakatan suksesi dan pertahankan komunikasi antarelite.", konsekuensi: "Ini merupakan pendekatan yang masuk akal dalam menghadapi pergantian dinasti, meski bukan catatan satu keputusan spesifik.", historis: true },
      { id: "c", teks: "Anggap wafatnya raja tidak akan mengubah keseimbangan politik.", konsekuensi: "Sikap ini mengabaikan dampak pergantian kepemimpinan dan kepentingan keluarga kerajaan." }
    ],
    hasilHistoris: "Hayam Wuruk wafat pada 1389. Periode berikutnya menghadapi persoalan suksesi dan perubahan keseimbangan elite; Perang Paregreg berlangsung pada 1404–1406, di luar rentang proyek ini."
  },
  "evt-040": {
    peran: "Pengelola jaringan pelabuhan Sumatra",
    situasi: "Jaringan lama yang dikaitkan dengan Sriwijaya menghadapi persaingan dan perubahan jalur perdagangan. Pelabuhan perlu beradaptasi agar tetap terhubung dengan pedagang.",
    pilihan: [
      { id: "a", teks: "Mengandalkan satu pusat lama dan menolak hubungan dengan pelabuhan lain.", konsekuensi: "Ketika arus perdagangan berubah, jaringan menjadi rentan dan kehilangan peluang baru." },
      { id: "b", teks: "Bangun hubungan dagang yang beragam dan sesuaikan diri dengan perubahan regional.", konsekuensi: "Pilihan ini sesuai dengan gambaran umum transformasi jaringan perdagangan, bukan satu keputusan historis yang tercatat.", historis: true },
      { id: "c", teks: "Menyatakan Sriwijaya runtuh pada satu tanggal pasti tanpa melihat bukti.", konsekuensi: "Penyederhanaan ini mengabaikan bahwa kemunduran politik dan ekonomi berlangsung bertahap." }
    ],
    hasilHistoris: "Pengaruh Sriwijaya berubah secara bertahap sepanjang abad ke-13 dan ke-14. Catatan asing, sumber lokal, dan perkembangan pelabuhan lain menunjukkan transformasi jaringan maritim; tanggal akhir yang tepat masih diperdebatkan."
  }

};
