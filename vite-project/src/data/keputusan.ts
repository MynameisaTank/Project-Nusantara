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
"Tumapel aman untuk sementara. Namun kamu tetap bawahan, dan kemungkinan tidak akan ada pusat kekuasaan baru di Jawa Timur selama Kadiri masih kuat. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Terima para brahmana yang mengungsi, kumpulkan pasukan, lalu lawan Kertajaya.",
        konsekuensi:
"Berisiko besar karena Kadiri adalah kerajaan terkuat di wilayah itu. Jika berhasil, Tumapel naik menjadi pusat kekuasaan baru dengan dukungan para pemuka agama. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.",
        historis: true
      },
      {
        id: "c",
        teks: "Kirim utusan untuk meminta Kertajaya menjadikan Tumapel sekutu yang setara.",
        konsekuensi:
"Bisa jadi Kertajaya menolak, sebab ia tidak punya alasan melepas kedudukannya sebagai penguasa tertinggi. Kamu kehilangan waktu dan Kadiri jadi tahu rencanamu. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Untung besar dalam jangka pendek. Tetapi Ternate jadi bergantung pada satu pembeli, dan pedagang lain bisa mencari rempah dari pulau tetangga. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Buka pelabuhan bagi pedagang dari mana pun dan jaga hubungan dengan kerajaan Maluku lainnya.",
        konsekuensi:
"Pendapatan lebih stabil dan Ternate dikenal luas. Sebagai gantinya, persaingan dengan Tidore, Jailolo, dan Bacan bisa makin tajam karena semuanya berebut pembeli. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.",
        historis: true
      },
      {
        id: "c",
        teks: "Larang cengkih dijual keluar agar harganya naik.",
        konsekuensi:
"Cengkih jadi langka dan mahal, tetapi pedagang akan berhenti datang. Ternate bisa terisolasi dan kehilangan hubungan dagang yang menopang kekuatannya. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Pasukan tetap di dalam negeri dan kas tidak terkuras. Namun jalur Selat Malaka dikuasai pihak lain, dan pengaruh dagang Singhasari terbatas di Jawa. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Kirim pasukan dan utusan ke Sumatra untuk menjalin ikatan dengan kerajaan Melayu.",
        konsekuensi:
"Pengaruh Singhasari meluas ke jalur dagang penting. Harganya, sebagian kekuatan militer berada jauh dari Jawa, dan itu bisa menjadi kelemahan jika ada ancaman di dalam negeri. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.",
        historis: true
      },
      {
        id: "c",
        teks: "Kirim utusan diplomatik saja, tanpa pasukan.",
        konsekuensi:
"Murah dan aman. Tetapi tanpa kekuatan di belakangnya, bujukanmu mudah diabaikan oleh penguasa Melayu. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Pasukanmu terlalu kecil. Kemungkinan besar kamu kalah dari dua arah dan tidak ada yang tersisa untuk membangun kerajaan baru. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Gabung dengan Mongol untuk menjatuhkan Jayakatwang, lalu usir mereka.",
        konsekuensi:
"Berisiko karena Mongol bisa menyadari tipuanmu. Jika waktunya tepat, musuh terbesarmu jatuh dan pasukan asing yang kuat itu bisa dipaksa pergi. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.",
        historis: true
      },
      {
        id: "c",
        teks: "Tunduk kepada Mongol dan mengakui Kubilai Khan sebagai penguasa.",
        konsekuensi:
"Kamu selamat dan Jayakatwang kalah. Tetapi Jawa bisa menjadi wilayah bawahan Yuan, dan kerajaan yang kamu cita-citakan tidak berdiri merdeka. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Tatanan lama terjaga. Namun pedagang yang berjaringan luas bisa memilih pelabuhan lain yang lebih ramah, dan Pasai kehilangan peluang tumbuh. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Terima Islam dan buka pelabuhan bagi jaringan dagang Muslim.",
        konsekuensi:
"Pasai terhubung dengan pedagang dan ulama dari seberang lautan. Konsekuensinya, kebiasaan istana dan masyarakat pelan-pelan berubah, dan tidak semua pihak di dalam negeri mungkin setuju. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.",
        historis: true
      },
      {
        id: "c",
        teks: "Netral: berdagang dengan semua orang tanpa memihak agama mana pun.",
        konsekuensi:
"Pelabuhan tetap ramai dan tidak ada konflik soal agama. Tetapi kamu kehilangan ikatan khusus dengan jaringan pedagang Muslim yang sangat penting di Selat Malaka. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Catatanmu lebih jujur dan berguna bagi pembaca masa depan. Tetapi kemungkinan besar tulisanmu tidak disukai lingkungan istana, dan naskah itu bisa saja tidak pernah disalin. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Gubah puisi pujian (kakawin) yang memuliakan sang raja, sambil mencatat daerah-daerah yang berada di bawah pengaruhnya.",
        konsekuensi:
"Karyamu diterima dan dihargai sebagai karya sastra. Sebagai gantinya, isinya cenderung membesar-besarkan kebesaran raja, sehingga pembaca kelak harus menimbang kebenarannya. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.",
        historis: true
      },
      {
        id: "c",
        teks: "Jangan menulis apa-apa dan biarkan kisah ini diwariskan lewat tradisi lisan.",
        konsekuensi:
"Tidak ada risiko dari pihak istana. Namun kisah itu mudah berubah dari mulut ke mulut dan banyak rincian akan hilang. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Hubungan tetap aman dan Kadiri tidak diserang. Namun kamu tetap berada di bawah Kertanagara, dan kemungkinan Kadiri tidak akan berdiri sendiri lagi. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Kerahkan seluruh pasukan menyerang ibu kota langsung dari satu arah.",
        konsekuensi:
"Serangan seperti ini mudah terlihat dan bisa dihadang. Singhasari masih punya pasukan dan pemimpin yang bisa membalas, sehingga serangan bisa jadi kandas. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup."
      },
      {
        id: "c",
        teks: "Serang dari dua arah: satu pasukan menarik perhatian di utara, pasukan lain menyerbu ibu kota dari selatan.",
        konsekuensi:
"Berisiko besar karena kamu harus mengatur dua pasukan sekaligus. Jika Kertanagara hanya menyadari satu arah serangan, ibu kotanya bisa jatuh sebelum ia sempat bersiap. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil.",
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
"Kamu berada di pertemuan jalur sungai dan laut dan bisa mengambil keuntungan dari perdagangan. Sebagai gantinya, pusat kerajaan lebih mudah terlihat dan bisa jadi sasaran pihak yang menginginkan jalur itu. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat.",
        historis: true
      },
      {
        id: "b",
        teks: "Dirikan pusat jauh di hulu sungai dan batasi hubungan dengan pelayaran luar.",
        konsekuensi:
"Kamu lebih terlindung dari serangan lewat laut dan bisa hidup dari hasil hutan. Namun kemungkinan besar kamu terpisah dari jaringan dagang laut, sehingga kerajaan sulit menjadi kaya dan dikenal. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup."
      },
      {
        id: "c",
        teks: "Hidup berpindah-pindah mengikuti hasil hutan tanpa pusat kekuasaan tetap.",
        konsekuensi:
"Cara ini fleksibel dan sulit ditaklukkan. Tetapi tanpa pusat tetap, kekuasaanmu mungkin sulit diwariskan, dan tidak ada kota yang bisa menjadi ibu kota kerajaan. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Cara ini bisa menunjukkan kesetiaan, tetapi pengawalmu jauh lebih sedikit. Kemungkinan besar kalian kalah dan raja ikut tertangkap. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Bawa raja menjauh ke luar Jawa dan menunggu bantuan.",
        konsekuensi:
"Raja aman dari pemberontak. Tetapi makin lama ia pergi, bisa jadi makin kuat cengkeraman Ra Kuti atas ibu kota, dan raja bisa dianggap telah meninggalkan takhtanya. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup."
      },
      {
        id: "c",
        teks: "Bawa raja ke tempat persembunyian, lalu kembali ke ibu kota untuk menilai siapa yang masih setia.",
        konsekuensi:
"Raja selamat dan kamu mendapat gambaran nyata tentang dukungan untuk Ra Kuti. Risikonya, kamu kembali ke ibu kota yang dikuasai pemberontak, dan salah menilai orang bisa berakibat fatal. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil.",
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
"Majapahit bisa mengendalikan jalur laut dan menerima upeti dari banyak daerah. Namun biayanya besar, dan kamu bisa jadi ditertawakan pejabat yang menganggap sumpahmu mustahil. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat.",
        historis: true
      },
      {
        id: "b",
        teks: "Fokus mengurus Jawa dan hindari urusan di luar pulau.",
        konsekuensi:
"Majapahit lebih stabil di dalam negeri dan hemat biaya. Namun jalur dagang dan pelabuhan di luar Jawa kemungkinan dikuasai pihak lain, dan kerajaan-kerajaan di sana tumbuh tanpa pengaruh Majapahit. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup."
      },
      {
        id: "c",
        teks: "Bangun hubungan lewat perkawinan dan perjanjian dagang tanpa mengerahkan pasukan.",
        konsekuensi:
"Cara ini murah dan jarang memicu perang. Tetapi daerah lain bisa saja mengabaikan perjanjian itu, dan Majapahit tidak punya cara memaksa mereka membayar upeti. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Kemungkinan perang bisa dihindari dan kerajaanmu tetap utuh. Namun kamu menjadi bawahan, dan pengaruh Jawa bisa masuk lewat pejabat dan upeti. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Tolak dan bersiap menghadapi pasukan Majapahit di Bali.",
        konsekuensi:
"Kamu mempertahankan kehormatan dan kemerdekaan kerajaanmu. Tetapi menghadapi pasukan besar dari laut itu berat, dan kekalahan bisa mengakhiri kerajaanmu. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.",
        historis: true
      },
      {
        id: "c",
        teks: "Minta bantuan kerajaan lain di luar Bali.",
        konsekuensi:
"Jika berhasil, kekuatanmu bertambah. Tetapi sekutu yang datang bisa menuntut imbalan, dan Majapahit bisa saja menyerang sebelum bantuan tiba. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Kedudukanmu aman dan dekat pusat kekuasaan. Tetapi kamu tetap bawahan, dan peluang memimpin wilayah emas di Sumatra tengah bisa diambil orang lain. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Pergi ke Sumatra sebagai wakil Majapahit, tanpa gelar raja.",
        konsekuensi:
"Majapahit kemungkinan puas dan kamu tidak memancing konflik. Tetapi kekuasaanmu terikat pada kemauan Jawa, dan penerusmu sulit mewarisi kedudukanmu. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup."
      },
      {
        id: "c",
        teks: "Pergi ke Sumatra tengah, bangun kerajaan sendiri, dan pakai gelar raja.",
        konsekuensi:
"Kamu bisa memerintah dan menguasai perdagangan emas. Risikonya, Majapahit bisa menganggapmu pembelot, dan kamu harus pandai menjaga hubungan agar tidak diserang. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil.",
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
"Perang mungkin bisa dihindari, tetapi Sunda diperlakukan sebagai bawahan dan putrimu kehilangan kedudukan sebagai permaisuri. Bisa jadi rakyatmu menganggapmu merendahkan kehormatan kerajaan. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Tolak tuntutan, batalkan pernikahan, dan siap melawan jika diserang.",
        konsekuensi:
"Kamu mempertahankan kehormatan Sunda. Namun pasukanmu kecil, sehingga kamu dan rombonganmu berisiko besar gugur jika Majapahit menyerang. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.",
        historis: true
      },
      {
        id: "c",
        teks: "Minta bertemu langsung dengan Hayam Wuruk untuk berunding sebelum memutuskan.",
        konsekuensi:
"Mungkin ada jalan tengah jika sang raja sendiri turun tangan. Tetapi jika Gajah Mada menghalangi, kamu kehilangan waktu dan rombonganmu bisa terlanjur terkepung. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Kamu melihat sendiri keadaan daerahmu dan bisa memperkuat kesetiaan setempat. Biayanya besar, istana ditinggal untuk sementara, dan rombongan besar bisa membebani tuan rumah. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat.",
        historis: true
      },
      {
        id: "b",
        teks: "Tetap di istana dan kirim pejabat untuk memeriksa daerah.",
        konsekuensi:
"Cara ini hemat waktu dan biaya, dan istana tetap berjalan. Namun hubunganmu dengan daerah hanya lewat perantara, dan laporan bisa saja tidak jujur. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup."
      },
      {
        id: "c",
        teks: "Serahkan seluruh urusan daerah kepada mahapatih tanpa kunjungan sama sekali.",
        konsekuensi:
"Kamu punya waktu untuk urusan istana. Tetapi daerah mungkin merasa jauh dari rajanya, dan semua kesetiaan bisa jadi tertuju pada sang mahapatih, bukan padamu. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Penganut Buddha mungkin senang, tetapi pemeluk Siwa di istana bisa tersinggung, dan karyamu bisa dianggap memecah belah di kerajaan yang menaungi keduanya. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Hindari urusan agama dan tulis kisah petualangan saja.",
        konsekuensi:
"Karyamu aman dari perdebatan. Tetapi ia mungkin kehilangan pesan yang membuatnya istimewa bagi pembaca zamanmu. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup."
      },
      {
        id: "c",
        teks: "Tulis kisah Bodhisattva dan nyatakan bahwa Buddha dan Siwa berbeda rupa tetapi pada hakikatnya satu.",
        konsekuensi:
"Karyamu bisa diterima kedua pihak dan cocok dengan suasana istana. Namun sebagian penganut yang ketat mungkin menilainya terlalu longgar. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil.",
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
"Bisa jadi kamu ditangkap atau dibunuh di tengah jalan oleh lawan politikmu sebelum sempat berbicara dengan raja. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Perkuat pertahanan benteng di Lamajang dan bertahan dari serangan pasukan raja.",
        konsekuensi:
"Kamu mempertahankan kehormatan keluarga dan wilayahmu, tetapi tindakan ini makin menguatkan tuduhan pemberontakan di mata istana. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.",
        historis: true
      },
      {
        id: "c",
        teks: "Melarikan diri ke luar Jawa dan meminta bantuan dari kerajaan asing.",
        konsekuensi:
"Kamu selamat dari pertempuran, tetapi pengikutmu di Lamajang kehilangan pemimpin dan wilayahmu langsung dikuasai istana. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Istana tetap aman. Namun perselisihan antar-perwira bisa memecah konsentrasi pasukan di medan pertempuran. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Turun langsung ke medan perang memimpin pasukan didampingi Gajah Mada.",
        konsekuensi:
"Wibawa takhta menyatukan perselisihan para perwira. Kemenangan ini memperkuat kepemimpinanmu dan menegaskan posisi Gajah Mada. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.",
        historis: true
      },
      {
        id: "c",
        teks: "Berikan otonomi penuh pada Sadeng agar perang dapat dihindari.",
        konsekuensi:
"Tidak ada pertumpahan darah. Tetapi wilayah lain bisa ikut membangkang karena melihat Majapahit lemah. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Pertempuran akan berlangsung sengit dan memakan korban, tetapi penguasaan penuh atas benteng strategis Sumbawa dapat dicapai. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat.",
        historis: true
      },
      {
        id: "b",
        teks: "Hanya lakukan pemblokiran kapal dagang tanpa menyerang benteng darat.",
        konsekuensi:
"Hemat pasukan, tetapi musuh bisa bertahan lama dengan pasokan dari dalam pulau dan ekspedisimu menggantung. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup."
      },
      {
        id: "c",
        teks: "Tarik mundur armada dan minta petunjuk ulang dari Trowulan.",
        konsekuensi:
"Armada selamat, tetapi wibawa angkatan laut Majapahit jatuh di mata penguasa pulau-pulau timur. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Struktur organisasi lama tetap bertahan, tetapi pejabat baru yang belum berpengalaman rentan membuat kesalahan fatal atau ditolak pejabat senior. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Bagi wewenang dan tugas Mahapatih ke dalam dewan menteri (Manca Nagara).",
        konsekuensi:
"Pemerintahan berjalan stabil dengan pembagian kerja, tetapi pengambilan keputusan penting menjadi lebih lambat dibanding masa Gajah Mada. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.",
        historis: true
      },
      {
        id: "c",
        teks: "Hapuskan seluruh jabatan menteri dan jalankan seluruh urusan kerajaan sendirian.",
        konsekuensi:
"Beban kerja raja sangat berat dan administrasi daerah bawahan terancam terbengkalai. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
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
"Nyawamu mungkin diampuni, tetapi kamu akan menghabiskan sisa hidup sebagai tawanan politik di Jawa. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat."
      },
      {
        id: "b",
        teks: "Melarikan diri ke utara Selat Malaka dan mendirikan kota pelabuhan baru di Melaka.",
        konsekuensi:
"Kamu harus memulai dari awal di daerah baru, tetapi posisinya yang strategis berpeluang menjadi pusat perdagangan maritim baru. Pilihan ini dapat dibandingkan dengan arah perkembangan yang tercatat, tetapi sumber sejarah tidak mencatat keputusan dalam bentuk pilihan modern ini. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.",
        historis: true
      },
      {
        id: "c",
        teks: "Berlayar jauh ke arah timur menuju kepulauan Maluku.",
        konsekuensi:
"Kamu berada jauh dari jangkauan Majapahit, tetapi kehilangan akses ke jalur dagang utama Selat Malaka. Ini adalah skenario alternatif untuk membandingkan risiko, bukan keputusan yang diketahui benar-benar diambil tokoh tersebut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil."
      }
    ],
    hasilHistoris:
      "Parameswara melarikan diri ke arah Semenanjung Malaya dan mendirikan Melaka sekitar tahun 1396-1400. Melaka berkembang menjadi Kesultanan maritim besar penyambung jalur perdagangan dunia. Melaka tumbuh menjadi pusat perdagangan penting pada abad berikutnya. Kisah awalnya menunjukkan bahwa kekuatan pelabuhan maritim bergantung pada gabungan lokasi strategis, diplomasi, keamanan, dan jaringan pedagang."
  },

  "evt-021": {
    peran: "Pengamat pelabuhan Lamreh",
    situasi: "Sebuah nisan bertarikh 1211 ditemukan di kawasan Lamreh dan dikaitkan dengan seorang penguasa Muslim. Kamu perlu menjelaskan arti bukti ini tanpa menyimpulkan lebih dari yang dapat didukung sumber.",
    pilihan: [
      { id: "a", teks: "Anggap nisan sebagai bukti bahwa seluruh penduduk Sumatra sudah Muslim.", konsekuensi:
"Kesimpulan ini terlalu luas dan tidak didukung satu temuan. Bukti material menunjukkan keberadaan individu atau komunitas, bukan agama seluruh penduduk. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat.", },
      { id: "b", teks: "Catat nisan sebagai bukti awal keberadaan Muslim, lalu bandingkan dengan sumber lain.", konsekuensi:
"Kesimpulan menjadi lebih kuat karena membedakan bukti langsung dari gambaran proses islamisasi yang lebih luas. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Abaikan nisan karena tidak menceritakan seluruh sejarah kerajaan.", konsekuensi:
"Kamu kehilangan bukti penting. Sumber tidak harus menjelaskan semuanya agar berguna, asalkan keterbatasannya dicatat. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Nisan bertarikh 1211 yang dikaitkan dengan Sultan Sulaiman menjadi petunjuk awal keberadaan Muslim di pesisir utara Sumatra. Identifikasi dan maknanya harus dibaca melalui kajian epigrafi, bukan dianggap bukti islamisasi menyeluruh."
  },
  "evt-022": {
    peran: "Penafsir catatan perdagangan Asia",
    situasi: "Teks Tiongkok sekitar 1225 menyebut Sanfoqi dalam konteks negeri-negeri dagang. Nama itu sering dihubungkan dengan Sriwijaya, tetapi cakupan wilayahnya tidak sepenuhnya pasti.",
    pilihan: [
      { id: "a", teks: "Gambarkan Sanfoqi sebagai negara modern dengan perbatasan tetap.", konsekuensi:
"Peta itu akan menyesatkan karena nama asing dapat merujuk pada pusat atau jaringan pelabuhan yang berubah. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Bandingkan teks Tiongkok dengan sumber lokal dan perlakukan identifikasi sebagai tafsiran.", konsekuensi:
"Kamu memperoleh gambaran lebih seimbang tentang perdagangan dan ketidakpastian nama politik dalam sumber lama. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Gunakan satu sumber asing sebagai satu-satunya bukti sejarah Sumatra.", konsekuensi:
"Kesimpulan menjadi sempit karena sumber luar juga memiliki tujuan, istilah, dan keterbatasannya sendiri. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Zhu Fan Zhi karya Zhao Rugua sekitar 1225 memberi keterangan tentang jaringan dagang Asia dan Sanfoqi. Identifikasi Sanfoqi dengan Sriwijaya atau jaringan penerusnya lazim digunakan, tetapi cakupan politiknya masih perlu ditafsirkan."
  },
  "evt-023": {
    peran: "Penasihat Singhasari pada masa Kertanagara",
    situasi: "Singhasari ingin memperluas pengaruh ke Bali. Ekspedisi dapat memperkuat jalur laut, tetapi juga berisiko memicu perlawanan dan membutuhkan sumber daya.",
    pilihan: [
      { id: "a", teks: "Kirim ekspedisi tanpa mempertimbangkan keadaan politik lokal.", konsekuensi:
"Operasi bisa menghadapi perlawanan dan menghasilkan kontrol yang rapuh. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Bangun hubungan dan siapkan ekspedisi untuk memperluas pengaruh ke Bali.", konsekuensi:
"Pilihan ini paling dekat dengan tradisi sejarah tentang ekspedisi Singhasari ke Bali sekitar 1284, meskipun rincian dan hasilnya tidak sepenuhnya jelas. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Hentikan seluruh hubungan dagang dengan Bali.", konsekuensi:
"Langkah ini dapat mengurangi akses ke jalur laut dan tidak menyelesaikan persaingan politik. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Ekspedisi Singhasari ke Bali sekitar 1284 dikaitkan dengan masa Kertanagara. Bentuk dan lamanya kontrol Singhasari di Bali tidak sepenuhnya diketahui, dan peristiwa ini berbeda dari kampanye Majapahit pada 1343."
  },
  "evt-024": {
    peran: "Penasihat Raja Kertanagara",
    situasi: "Utusan Yuan datang membawa tuntutan pengakuan politik. Menolak tuntutan dapat mempertahankan martabat kerajaan, tetapi memperbesar risiko konflik dengan kekuatan besar.",
    pilihan: [
      { id: "a", teks: "Terima semua tuntutan Yuan tanpa negosiasi.", konsekuensi:
"Risiko serangan mungkin turun sementara, tetapi kedudukan mandiri Singhasari bisa melemah. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Tolak tuntutan dan pertahankan kedaulatan Singhasari.", konsekuensi:
"Ini mencerminkan garis besar kisah penolakan Kertanagara, meski rincian perlakuan terhadap utusan dan sebab ekspedisi Yuan perlu dibaca kritis. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Abaikan utusan tanpa menyiapkan pertahanan atau diplomasi lanjutan.", konsekuensi:
"Kerajaan berisiko kehilangan kesempatan mengelola ketegangan secara terencana. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Pada 1289, utusan Yuan menyampaikan tuntutan kepada Kertanagara. Tradisi menyebut penolakan keras dari pihak Singhasari. Ekspedisi Yuan tiba pada 1293 setelah perubahan politik di Jawa, sehingga penyebabnya tidak dapat disederhanakan menjadi satu insiden."
  },
  "evt-025": {
    peran: "Raden Wijaya, pendiri Majapahit",
    situasi: "Setelah krisis yang menjatuhkan Singhasari dan Kadiri, kamu harus mengubah kemenangan militer menjadi pemerintahan yang dapat bertahan.",
    pilihan: [
      { id: "a", teks: "Membalas semua bekas sekutu tanpa membangun pemerintahan.", konsekuensi:
"Kamu dapat kehilangan dukungan elite yang dibutuhkan untuk menjaga kerajaan. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Bangun pusat pemerintahan, gunakan gelar raja, dan rangkul pendukung penting.", konsekuensi:
"Langkah ini sesuai dengan konsolidasi Raden Wijaya sebagai Kertarajasa Jayawardhana dan membantu membentuk dinasti Majapahit. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Meninggalkan Jawa tanpa mencoba membangun pusat kekuasaan.", konsekuensi:
"Kamu menghindari sebagian konflik tetapi kehilangan kesempatan membangun pemerintahan baru. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Raden Wijaya mendirikan Majapahit setelah krisis 1292–1293 dan dikenal dengan gelar Kertarajasa Jayawardhana. Tahun 1293 umum dipakai untuk pendirian kerajaan, sedangkan 1294 kadang digunakan untuk penobatan atau konsolidasi."
  },
  "evt-026": {
    peran: "Penasihat istana Jayanegara",
    situasi: "Raja baru naik takhta pada 1309. Elite yang membantu pendirian Majapahit memiliki kekuatan sendiri dan perlu diyakinkan agar tetap mendukung istana.",
    pilihan: [
      { id: "a", teks: "Bagikan jabatan hanya kepada keluarga dekat dan abaikan pejabat daerah.", konsekuensi:
"Kebijakan ini dapat memperbesar rasa tersisih dan meningkatkan ketegangan. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Jaga dukungan elite, awasi daerah, dan tangani persaingan politik secara bertahap.", konsekuensi:
"Ini merupakan pendekatan yang masuk akal untuk konsolidasi kerajaan, meski bukan catatan tentang satu keputusan khusus Jayanegara. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Biarkan setiap pejabat membangun pasukan sendiri tanpa koordinasi.", konsekuensi:
"Kekuasaan pusat bisa melemah dan persaingan elite semakin sulit dikendalikan. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Jayanegara menggantikan Raden Wijaya pada 1309. Pemberontakan pada masa pemerintahannya menunjukkan bahwa Majapahit masih menghadapi persoalan konsolidasi dan rivalitas elite."
  },
  "evt-027": {
    peran: "Pejabat istana Majapahit pada masa suksesi",
    situasi: "Jayanegara wafat pada 1328 tanpa pewaris langsung. Istana harus menjaga legitimasi dan menghindari konflik saat memilih penerus.",
    pilihan: [
      { id: "a", teks: "Tunda keputusan suksesi tanpa batas waktu.", konsekuensi:
"Ketidakpastian dapat memberi ruang bagi faksi elite untuk berebut pengaruh. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Dukung penerus dari garis dinasti yang memiliki legitimasi, yaitu Tribhuwana Tunggadewi.", konsekuensi:
"Ini sejalan dengan pergantian pemerintahan yang tercatat setelah wafatnya Jayanegara. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Menyerahkan takhta kepada penguasa asing tanpa proses politik lokal.", konsekuensi:
"Langkah ini dapat menimbulkan krisis legitimasi dan tidak sesuai dengan perkembangan yang diketahui. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Setelah Jayanegara wafat pada 1328, Tribhuwana Tunggadewi kemudian memerintah Majapahit. Kisah kematian Jayanegara dalam kronik perlu dibedakan dari fakta umum mengenai suksesi."
  },
  "evt-028": {
    peran: "Tribhuwana Tunggadewi, penguasa Majapahit",
    situasi: "Kamu memimpin setelah krisis suksesi. Beberapa daerah menentang pusat, sedangkan pejabat militer bersaing mendapatkan pengaruh.",
    pilihan: [
      { id: "a", teks: "Mengabaikan pemberontakan dan membiarkan hubungan pusat-daerah memburuk.", konsekuensi:
"Kewibawaan istana dapat menurun dan konflik menyebar. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Perkuat otoritas pusat dan gunakan pejabat yang cakap untuk menangani konflik.", konsekuensi:
"Pendekatan ini sejalan dengan gambaran umum konsolidasi pada masa Tribhuwana dan naiknya peran Gajah Mada. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Membubarkan semua jabatan pemerintahan daerah sekaligus.", konsekuensi:
"Perubahan mendadak dapat mengganggu administrasi dan membuat wilayah sulit dikelola. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Pemerintahan Tribhuwana Tunggadewi (sekitar 1328–1350) menjadi masa konsolidasi Majapahit. Penumpasan Sadeng dan Keta pada 1331 berkaitan dengan menguatnya posisi Gajah Mada, meski detail politiknya terutama berasal dari kronik."
  },
  "evt-029": {
    peran: "Penasihat Hayam Wuruk",
    situasi: "Hayam Wuruk naik takhta pada 1350. Kerajaan memiliki jaringan hubungan yang luas, tetapi tiap daerah memiliki keadaan politik dan kepentingan berbeda.",
    pilihan: [
      { id: "a", teks: "Anggap semua daerah yang disebut dalam naskah sebagai wilayah yang dikelola langsung.", konsekuensi:
"Gambaran ini terlalu sederhana dan mencampuradukkan pengaruh simbolis dengan pemerintahan langsung. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Perkuat hubungan diplomatik, perdagangan, dan tata kelola pusat sambil menilai tiap daerah secara berbeda.", konsekuensi:
"Ini sejalan dengan gambaran umum strategi pemerintahan Majapahit pada masa Hayam Wuruk. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Memutus hubungan dengan semua pelabuhan luar Jawa.", konsekuensi:
"Langkah ini akan mengurangi akses ke perdagangan dan jaringan politik regional. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Hayam Wuruk memerintah pada 1350–1389. Masa pemerintahannya sering dianggap puncak Majapahit, tetapi sifat hubungan dengan daerah luar berbeda-beda dan tidak selalu berarti administrasi langsung."
  },
  "evt-030": {
    peran: "Penguasa pelabuhan di Maluku",
    situasi: "Pedagang jarak jauh datang untuk memperoleh cengkih. Kamu perlu menjaga keuntungan perdagangan tanpa membuat pelabuhan terlalu bergantung pada satu kelompok.",
    pilihan: [
      { id: "a", teks: "Berikan seluruh perdagangan kepada satu pedagang dan larang yang lain.", konsekuensi:
"Keuntungan jangka pendek mungkin besar, tetapi ketergantungan pada satu pembeli dapat melemahkan posisi tawar. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Jaga keamanan pelabuhan dan bangun hubungan dengan beragam jaringan pedagang.", konsekuensi:
"Pilihan ini sesuai dengan logika umum perdagangan maritim, meskipun tidak mewakili satu keputusan khusus yang tercatat. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Hentikan pertukaran rempah dan tutup pelabuhan.", konsekuensi:
"Komunitas kehilangan peluang pertukaran barang dan hubungan antarpulau. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Cengkih Maluku merupakan komoditas penting dalam jaringan perdagangan Asia. Jaringan ini dibentuk banyak produsen dan perantara, bukan hanya satu kerajaan atau satu pelabuhan."
  },
  "evt-031": {
    peran: "Pengelola pelabuhan Samudra Pasai",
    situasi: "Pasai berada dekat jalur Selat Malaka. Pedagang, pelaut, dan komunitas Muslim datang ke pelabuhan; stabilitas dan kepercayaan penting untuk menjaga perdagangan.",
    pilihan: [
      { id: "a", teks: "Melarang semua pedagang dari luar datang ke pelabuhan.", konsekuensi:
"Pendapatan dan hubungan Pasai dengan jaringan regional bisa berkurang. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Jaga keamanan, dukung kegiatan pasar, dan pelihara hubungan dengan komunitas dagang.", konsekuensi:
"Ini sejalan dengan fungsi Pasai sebagai simpul perdagangan dan kehidupan Islam di Selat Malaka. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Mengabaikan keamanan kapal dan penyelesaian sengketa dagang.", konsekuensi:
"Pedagang mungkin memilih pelabuhan lain yang dianggap lebih aman. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Samudra Pasai berkembang sebagai pelabuhan penting di Selat Malaka. Nisan Malik al-Saleh bertarikh 1297 dan catatan Ibnu Battuta pada 1345 menjadi sumber penting untuk memahami kerajaan ini."
  },
  "evt-032": {
    peran: "Penasihat penguasa Sunda",
    situasi: "Kerajaan Sunda berada di Jawa Barat ketika Singhasari dan Majapahit tumbuh di Jawa Timur. Kamu harus menjaga kepentingan kerajaan tanpa menganggap hubungan dengan tetangga hanya soal perang.",
    pilihan: [
      { id: "a", teks: "Putus semua hubungan dengan kerajaan tetangga.", konsekuensi:
"Kerajaan kehilangan peluang perdagangan, diplomasi, dan pertukaran budaya. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Pertahankan otonomi sambil mengelola perdagangan dan diplomasi regional.", konsekuensi:
"Ini merupakan strategi yang masuk akal untuk kerajaan yang bertahan sebagai pusat politik tersendiri di Jawa Barat. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Menganggap semua keputusan Majapahit otomatis berlaku di Sunda.", konsekuensi:
"Pilihan ini mengabaikan kemandirian politik dan perbedaan sumber mengenai jangkauan pengaruh. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Kerajaan Sunda tetap menjadi pusat politik di Jawa Barat pada abad ke-13 dan ke-14. Hubungannya dengan kerajaan lain harus dipahami berdasarkan bukti, bukan dianggap sebagai satu administrasi Jawa yang seragam."
  },
  "evt-033": {
    peran: "Pemimpin komunitas di muara Mahakam",
    situasi: "Muara Mahakam menghubungkan jalur sungai dari pedalaman dengan kapal yang datang dari pesisir. Pengelolaan pertukaran dan hubungan lokal penting bagi kemakmuran kawasan.",
    pilihan: [
      { id: "a", teks: "Hanya berdagang dengan pedalaman dan menutup akses ke laut.", konsekuensi:
"Komunitas kehilangan akses ke jaringan maritim dan berbagai barang dari luar. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Gunakan posisi muara untuk menghubungkan perdagangan sungai dan laut.", konsekuensi:
"Pilihan ini sesuai dengan keuntungan geografis kawasan Mahakam, tanpa mengklaim detail pemerintahan yang tidak tercatat. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Mengabaikan jalur sungai sebagai sarana transportasi.", konsekuensi:
"Pergerakan barang dan orang dari pedalaman menjadi lebih sulit. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Sungai Mahakam merupakan penghubung penting antara pedalaman dan pesisir Kalimantan Timur. Tradisi awal Kutai Kartanegara ditulis kemudian, sehingga konteks geografis lebih pasti daripada detail pendirian kerajaan."
  },
  "evt-034": {
    peran: "Utusan kerajaan dalam jaringan Majapahit",
    situasi: "Naskah istana menyebut banyak daerah dalam lingkup Majapahit, tetapi hubungan tiap daerah tidak selalu sama. Kamu harus memilih cara membaca dan mengelola hubungan tersebut.",
    pilihan: [
      { id: "a", teks: "Menuntut tata pemerintahan yang sama di semua daerah tanpa melihat kondisi lokal.", konsekuensi:
"Kebijakan ini dapat memicu penolakan karena hubungan dan kemampuan pusat berbeda-beda. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Gunakan diplomasi, perdagangan, upeti, dan kekuatan sesuai konteks tiap hubungan.", konsekuensi:
"Ini paling sesuai dengan gambaran hubungan regional yang beragam, meskipun tidak satu keputusan tunggal yang tercatat. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Menganggap naskah pujian istana sebagai peta administrasi yang lengkap.", konsekuensi:
"Kesimpulan itu mengabaikan tujuan sastra dan politik naskah serta bukti lokal yang mungkin berbeda. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Jangkauan Majapahit lebih tepat dipahami sebagai jaringan hubungan dengan beragam tingkat pengaruh. Nagarakretagama merupakan sumber penting, tetapi daftar daerahnya tidak otomatis berarti kontrol langsung yang seragam."
  },
  "evt-035": {
    peran: "Penasihat lokal di Bali setelah kampanye Majapahit",
    situasi: "Kampanye Majapahit sekitar 1343 mengubah hubungan politik. Pemimpin setempat harus menjaga kehidupan masyarakat dan menyesuaikan hubungan dengan kekuatan baru.",
    pilihan: [
      { id: "a", teks: "Menghapus semua adat dan praktik keagamaan lokal.", konsekuensi:
"Langkah itu berisiko memicu penolakan dan tidak mencerminkan kesinambungan budaya yang diketahui. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Sesuaikan hubungan politik sambil menjaga tradisi dan kepemimpinan lokal yang berlanjut.", konsekuensi:
"Ini menggambarkan bahwa perubahan kekuasaan tidak selalu menghapus budaya masyarakat setempat. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Menolak semua hubungan dengan pulau-pulau tetangga.", konsekuensi:
"Bali kehilangan peluang perdagangan dan diplomasi dalam jaringan regional. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Kampanye Majapahit ke Bali sekitar 1343 mengubah hubungan politik Jawa–Bali, tetapi tidak menghapus seluruh tradisi lokal. Rincian integrasi politik dan budaya memerlukan pembacaan sumber Jawa dan Bali bersama-sama."
  },
  "evt-036": {
    peran: "Adityawarman, penguasa Sumatra tengah",
    situasi: "Kekuasaan di Sumatra tengah membutuhkan legitimasi. Prasasti dan hubungan dengan elite dari wilayah lain dapat memperkuat kedudukan, tetapi klaim harus disesuaikan dengan bukti.",
    pilihan: [
      { id: "a", teks: "Mengabaikan prasasti dan hanya mengandalkan cerita yang ditulis jauh kemudian.", konsekuensi:
"Kamu mengesampingkan bukti material yang dapat membantu menilai gelar dan legitimasi. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Gunakan gelar dan ritual kerajaan sambil membangun hubungan dengan jaringan lokal dan lintas pulau.", konsekuensi:
"Pilihan ini sejalan dengan cara penguasa abad pertengahan menegaskan legitimasi, meski detail praktiknya harus diteliti dari prasasti. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Menyatakan seluruh Sumatra sebagai wilayah yang dikelola langsung tanpa bukti.", konsekuensi:
"Klaim tersebut terlalu luas dan tidak dapat disimpulkan hanya dari gelar seorang raja. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Adityawarman dikenal melalui prasasti abad ke-14 dan dikaitkan dengan pusat kekuasaan di Sumatra tengah. Hubungannya dengan Jawa dan Melayu menunjukkan jaringan elite, tetapi batas serta bentuk kekuasaannya masih dikaji."
  },
  "evt-037": {
    peran: "Penafsir hubungan Majapahit dan Dompu",
    situasi: "Sumber Majapahit menyebut wilayah di Nusa Tenggara, termasuk Dompu. Kamu harus membedakan klaim pengaruh, ekspedisi, dan pemerintahan sehari-hari.",
    pilihan: [
      { id: "a", teks: "Simpulkan bahwa setiap wilayah yang disebut pasti memiliki pejabat Majapahit tetap.", konsekuensi:
"Kesimpulan ini melebih-lebihkan apa yang dapat dibuktikan dari daftar wilayah. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Bandingkan sumber istana dengan bukti dan tradisi lokal Dompu.", konsekuensi:
"Pendekatan ini memberi ruang bagi sejarah lokal dan membantu menguji klaim pengaruh kerajaan besar. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Abaikan semua sumber Jawa karena berasal dari istana.", konsekuensi:
"Kamu kehilangan sumber penting; lebih baik menilai tujuan dan keterbatasannya daripada menolaknya seluruhnya. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Dompu termasuk dalam pembahasan hubungan Majapahit dengan Nusa Tenggara. Sumber istana perlu dibaca bersama bukti lokal; daftar geografis tidak otomatis menunjukkan administrasi langsung."
  },
  "evt-038": {
    peran: "Penasihat Hayam Wuruk setelah wafatnya Gajah Mada",
    situasi: "Gajah Mada wafat pada 1364. Raja harus melanjutkan pemerintahan tanpa pejabat yang selama ini sangat dominan.",
    pilihan: [
      { id: "a", teks: "Hentikan semua urusan pemerintahan sampai ada tokoh yang persis sama kuatnya.", konsekuensi:
"Penundaan akan melemahkan koordinasi dan membuka peluang persaingan elite. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Bagikan tugas kepada pejabat senior dan jaga koordinasi istana.", konsekuensi:
"Ini sejalan dengan gambaran umum penyesuaian pemerintahan setelah Gajah Mada wafat. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Serahkan semua wewenang kepada satu daerah jauh dari pusat.", konsekuensi:
"Langkah ini dapat mengubah keseimbangan kekuasaan secara drastis tanpa dasar yang diketahui. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Gajah Mada wafat pada 1364. Hayam Wuruk melanjutkan pemerintahan dengan pejabat senior; sumber tidak memberikan rincian lengkap mengenai setiap pembagian tugas atau penyebab kematian Gajah Mada."
  },
  "evt-039": {
    peran: "Penasihat istana setelah wafatnya Hayam Wuruk",
    situasi: "Hayam Wuruk wafat pada 1389. Keluarga kerajaan dan elite memiliki kepentingan yang berbeda, sehingga pergantian penguasa perlu dikelola dengan hati-hati.",
    pilihan: [
      { id: "a", teks: "Biarkan semua faksi bersaing tanpa aturan suksesi.", konsekuensi:
"Persaingan dapat meningkat dan merusak kestabilan pemerintahan. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Bangun kesepakatan suksesi dan pertahankan komunikasi antarelite.", konsekuensi:
"Ini merupakan pendekatan yang masuk akal dalam menghadapi pergantian dinasti, meski bukan catatan satu keputusan spesifik. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Anggap wafatnya raja tidak akan mengubah keseimbangan politik.", konsekuensi:
"Sikap ini mengabaikan dampak pergantian kepemimpinan dan kepentingan keluarga kerajaan. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Hayam Wuruk wafat pada 1389. Periode berikutnya menghadapi persoalan suksesi dan perubahan keseimbangan elite; Perang Paregreg berlangsung pada 1404–1406, di luar rentang proyek ini."
  },
  "evt-040": {
    peran: "Pengelola jaringan pelabuhan Sumatra",
    situasi: "Jaringan lama yang dikaitkan dengan Sriwijaya menghadapi persaingan dan perubahan jalur perdagangan. Pelabuhan perlu beradaptasi agar tetap terhubung dengan pedagang.",
    pilihan: [
      { id: "a", teks: "Mengandalkan satu pusat lama dan menolak hubungan dengan pelabuhan lain.", konsekuensi:
"Ketika arus perdagangan berubah, jaringan menjadi rentan dan kehilangan peluang baru. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
      { id: "b", teks: "Bangun hubungan dagang yang beragam dan sesuaikan diri dengan perubahan regional.", konsekuensi:
"Pilihan ini sesuai dengan gambaran umum transformasi jaringan perdagangan, bukan satu keputusan historis yang tercatat. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
      { id: "c", teks: "Menyatakan Sriwijaya runtuh pada satu tanggal pasti tanpa melihat bukti.", konsekuensi:
"Penyederhanaan ini mengabaikan bahwa kemunduran politik dan ekonomi berlangsung bertahap. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Pengaruh Sriwijaya berubah secara bertahap sepanjang abad ke-13 dan ke-14. Catatan asing, sumber lokal, dan perkembangan pelabuhan lain menunjukkan transformasi jaringan maritim; tanggal akhir yang tepat masih diperdebatkan."
  }
,
  "evt-041": {
    peran: "Penguasa Melaka",
    situasi: "Pelabuhanmu mulai didatangi pedagang dari banyak kawasan. Kamu perlu menentukan cara menjaga arus perdagangan tanpa kehilangan kendali politik.",
    pilihan: [
        { id: "a", teks: "Tutup pelabuhan bagi pedagang yang berbeda asal.", konsekuensi:
"Persaingan lokal mungkin berkurang sesaat, tetapi pedagang dapat memilih pelabuhan lain. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Bangun aturan pelabuhan dan jalin hubungan diplomatik dengan mitra dagang.", konsekuensi:
"Kebijakan ini mendukung pertumbuhan pelabuhan multietnis dan paling sesuai dengan perkembangan Melaka yang dikenal. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Serahkan semua pungutan kepada satu kelompok pedagang.", konsekuensi:
"Kelompok itu mungkin membantu keamanan, tetapi ketergantungan dapat mengurangi pendapatan dan kendali penguasa. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Melaka berkembang pada awal abad ke-15 sebagai pelabuhan internasional. Penguasa memanfaatkan letak strategis, aturan perdagangan, dan hubungan dengan berbagai jaringan dagang; detail pendirian awalnya tidak sepenuhnya disepakati."
  },
  "evt-042": {
    peran: "Utusan Melaka",
    situasi: "Melaka membutuhkan pengakuan dan hubungan aman dengan kekuatan besar di seberang laut.",
    pilihan: [
        { id: "a", teks: "Kirim utusan dan hadiah sambil mempertahankan kewenangan lokal.", konsekuensi:
"Hubungan diplomatik dapat membuka perdagangan dan pengakuan tanpa berarti menyerahkan kedaulatan. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Nyatakan Melaka sebagai bagian langsung dari Tiongkok.", konsekuensi:
"Dukungan mungkin tampak lebih kuat, tetapi klaim itu tidak sesuai dengan hubungan diplomatik yang tercatat. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Hentikan hubungan dan menolak semua utusan.", konsekuensi:
"Kemandirian formal tetap ada, tetapi peluang diplomatik dan perdagangan bisa berkurang. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Melaka menjalin hubungan diplomatik dengan Dinasti Ming pada awal abad ke-15. Hubungan tersebut merupakan diplomasi regional, bukan bukti bahwa Melaka menjadi bagian administratif Tiongkok."
  },
  "evt-043": {
    peran: "Syahbandar Melaka",
    situasi: "Kapal dari berbagai kawasan datang dengan barang dan kebiasaan berbeda. Kamu harus menjaga perdagangan tetap ramai dan tertib.",
    pilihan: [
        { id: "a", teks: "Buat aturan pelabuhan yang jelas dan perlakukan pedagang secara konsisten.", konsekuensi:
"Kepercayaan pedagang mungkin meningkat, walau pengawasan membutuhkan biaya. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Berikan hak dagang eksklusif kepada satu rombongan.", konsekuensi:
"Pendapatan sesaat bisa naik, tetapi pedagang lain mungkin pindah. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Biarkan sengketa diselesaikan dengan kekuatan masing-masing.", konsekuensi:
"Penguasa menghemat administrasi, tetapi kekerasan dan ketidakpastian dapat mengurangi perdagangan. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Melaka menjadi pusat perdagangan penting pada abad ke-15. Aturan pelabuhan dan jaringan diplomasi berperan dalam menarik pedagang dari berbagai kawasan."
  },
  "evt-044": {
    peran: "Pejabat istana Majapahit",
    situasi: "Persaingan elite dan perubahan jaringan perdagangan melemahkan pengaruh pusat. Kamu harus memikirkan cara menjaga stabilitas.",
    pilihan: [
        { id: "a", teks: "Cari kesepakatan dengan pusat-pusat daerah dan jaga jalur perdagangan.", konsekuensi:
"Kompromi dapat membantu stabilitas, meski kewenangan pusat mungkin berkurang. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Memaksakan kendali militer ke semua wilayah tanpa negosiasi.", konsekuensi:
"Bisa menunjukkan kekuatan, tetapi membutuhkan sumber daya besar dan dapat memperluas perlawanan. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Abaikan perubahan di pesisir.", konsekuensi:
"Pusat istana menghemat perhatian, tetapi berisiko kehilangan hubungan ekonomi dan politik. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Akhir Majapahit ditandai oleh proses perubahan politik yang kronologinya diperdebatkan. Tahun 1478 sering dipakai sebagai penanda tradisional, bukan bukti bahwa seluruh struktur hilang seketika."
  },
  "evt-045": {
    peran: "Penguasa Demak",
    situasi: "Demak berkembang di tengah persaingan pelabuhan dan kerajaan. Kamu perlu memperkuat basis ekonomi dan hubungan dengan wilayah sekitar.",
    pilihan: [
        { id: "a", teks: "Perkuat pelabuhan dan bangun aliansi dengan kota-kota pesisir.", konsekuensi:
"Jaringan dagang dan aliansi dapat meningkatkan pengaruh, meski perlu kompromi. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Alihkan seluruh sumber daya ke perang darat.", konsekuensi:
"Wilayah dapat bertambah, tetapi perdagangan dan pendapatan pelabuhan mungkin melemah. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Tutup hubungan dengan komunitas pedagang asing.", konsekuensi:
"Kontrol sosial mungkin lebih mudah, tetapi Demak berisiko kehilangan arus barang dan informasi. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Demak menjadi salah satu pusat politik Islam penting di pesisir utara Jawa pada peralihan abad ke-15 dan ke-16; detail awal dan tanggalnya tidak sepenuhnya pasti."
  },
  "evt-046": {
    peran: "Pemimpin pertahanan Melaka",
    situasi: "Armada Portugis menyerang kota dan menuntut kendali atas pelabuhan. Kamu harus menentukan cara menghadapi serangan.",
    pilihan: [
        { id: "a", teks: "Koordinasikan pertahanan kota dan upayakan bantuan sekutu regional.", konsekuensi:
"Pertahanan mungkin lebih terorganisasi, meski hasilnya bergantung pada kekuatan armada dan sekutu. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Serahkan kota tanpa syarat.", konsekuensi:
"Korban langsung mungkin berkurang, tetapi penguasa kehilangan kendali pelabuhan. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Pecah pasukan menjadi kelompok kecil tanpa koordinasi.", konsekuensi:
"Kelompok kecil dapat bertahan di beberapa tempat, tetapi kota dan gudang rentan jatuh. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Pada 1511 pasukan Portugis di bawah Afonso de Albuquerque merebut Melaka. Sultan Mahmud Shah melanjutkan perlawanan dari wilayah lain; perdagangan regional berpindah dan beradaptasi."
  },
  "evt-047": {
    peran: "Penguasa Ternate",
    situasi: "Pedagang Portugis menawarkan senjata dan hubungan dagang, tetapi mereka juga ingin memperoleh hak khusus atas rempah.",
    pilihan: [
        { id: "a", teks: "Berunding, tetapi hindari menyerahkan seluruh hak dagang kepada satu pihak.", konsekuensi:
"Kamu dapat memanfaatkan mitra baru sambil menjaga ruang gerak dengan pedagang lain. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Berikan monopoli penuh tanpa syarat.", konsekuensi:
"Dukungan militer mungkin datang, tetapi ketergantungan dan konflik dengan pedagang lain meningkat. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Usir semua pedagang asing tanpa negosiasi.", konsekuensi:
"Kemandirian dapat dijaga, tetapi akses pada pasar dan barang luar bisa berkurang. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Portugis mencapai Maluku pada awal abad ke-16 dan berusaha membangun hubungan dagang serta pengaruh politik. Penguasa lokal tetap menjadi aktor penting dan memanfaatkan persaingan."
  },
  "evt-048": {
    peran: "Penguasa Tidore",
    situasi: "Kedatangan kapal Spanyol membuka peluang dagang, tetapi dapat memicu konflik dengan Portugis dan tetangga.",
    pilihan: [
        { id: "a", teks: "Gunakan diplomasi untuk berdagang dengan Spanyol sambil menilai risikonya.", konsekuensi:
"Hubungan baru dapat menyeimbangkan Portugis, tetapi mungkin memicu balasan. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Serahkan kendali pelabuhan kepada Spanyol.", konsekuensi:
"Dukungan mereka mungkin meningkat, tetapi kendali lokal berkurang. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Menolak berhubungan dengan semua pihak luar.", konsekuensi:
"Risiko campur tangan mungkin berkurang, tetapi peluang dagang dan aliansi hilang. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Ekspedisi Spanyol mencapai Maluku pada 1521 dan berhubungan dengan Tidore, memperuncing persaingan Iberia di kawasan rempah."
  },
  "evt-049": {
    peran: "Utusan Kerajaan Sunda",
    situasi: "Kerajaan Sunda menghadapi persaingan di pesisir. Portugis menawarkan hubungan dagang dan bantuan pertahanan dengan syarat tertentu.",
    pilihan: [
        { id: "a", teks: "Buat kesepakatan tertulis sambil menjaga hubungan dengan mitra regional lain.", konsekuensi:
"Kesepakatan memberi peluang, tetapi tetap perlu mengantisipasi perubahan kekuatan. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Serahkan seluruh pelabuhan kepada Portugis.", konsekuensi:
"Dukungan mungkin lebih mudah didapat, tetapi kedaulatan dan pendapatan berkurang. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Tolak semua hubungan luar.", konsekuensi:
"Risiko ketergantungan menurun, tetapi peluang dagang dan bantuan juga hilang. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Kerajaan Sunda dan Portugis menandatangani kesepakatan pada 1522 yang terkait perdagangan dan rencana benteng di Sunda Kelapa; rencana itu tidak terwujud."
  },
  "evt-050": {
    peran: "Pemimpin pasukan pesisir",
    situasi: "Sunda Kelapa adalah pelabuhan strategis yang diperebutkan. Kamu harus menentukan cara mengamankan kota setelah perubahan kekuasaan.",
    pilihan: [
        { id: "a", teks: "Amankan pelabuhan dan jaga kegiatan dagang penduduk setempat.", konsekuensi:
"Pelabuhan dapat tetap menghasilkan pendapatan, tetapi perlu kompromi dengan komunitas lokal. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Hancurkan fasilitas pelabuhan agar lawan tak bisa memakainya.", konsekuensi:
"Lawan kehilangan fasilitas, tetapi penguasa baru juga kehilangan pendapatan. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Biarkan pasukan mengatur perdagangan tanpa aturan.", konsekuensi:
"Pasukan mungkin memperoleh keuntungan cepat, tetapi pedagang dapat kehilangan kepercayaan. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Tradisi mengaitkan tahun 1527 dengan perubahan kekuasaan Sunda Kelapa dan nama Jayakarta; rincian tokoh dan tanggal harus diperlakukan dengan kehati-hatian."
  },
  "evt-051": {
    peran: "Penguasa Banten",
    situasi: "Banten ingin menarik pedagang yang menghindari monopoli dan konflik di pelabuhan lain.",
    pilihan: [
        { id: "a", teks: "Buka pelabuhan bagi beragam pedagang dan jaga keamanan jalur masuk.", konsekuensi:
"Pendapatan dapat meningkat, meski persaingan dan kebutuhan pengawasan bertambah. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Batasi perdagangan hanya pada satu mitra asing.", konsekuensi:
"Hubungan khusus mungkin memberi keuntungan, tetapi membuat pelabuhan rentan. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Fokus pada pertanian saja dan abaikan pelabuhan.", konsekuensi:
"Pertanian tetap penting, tetapi peluang dagang maritim berkurang. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Banten tumbuh sebagai pelabuhan penting pada abad ke-16, memanfaatkan posisi dekat Selat Sunda dan perdagangan lada."
  },
  "evt-052": {
    peran: "Sultan Khairun",
    situasi: "Portugis menawarkan kerja sama, tetapi berusaha memperluas pengaruhnya di Ternate. Kamu perlu menjaga ruang gerak kesultanan.",
    pilihan: [
        { id: "a", teks: "Jalin kerja sama terbatas sambil mempertahankan kendali atas keputusan lokal.", konsekuensi:
"Kerja sama dapat memberi manfaat, tetapi perlu pengawasan dan kepercayaan yang rapuh. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Berikan hak monopoli penuh kepada Portugis.", konsekuensi:
"Dukungan militer mungkin bertambah, tetapi otonomi dan hubungan dagang lain terancam. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Putus semua hubungan tanpa menyiapkan pertahanan.", konsekuensi:
"Ketegasan terlihat jelas, tetapi risiko serangan dan isolasi meningkat. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Sultan Khairun memerintah Ternate hingga 1570. Hubungannya dengan Portugis memburuk sebelum ia dibunuh oleh pihak Portugis."
  },
  "evt-053": {
    peran: "Pejabat Demak",
    situasi: "Wafatnya sultan membuka persaingan elite. Kamu harus menjaga pemerintahan tetap berjalan di tengah klaim suksesi.",
    pilihan: [
        { id: "a", teks: "Dorong musyawarah elite dan jaga keamanan jalur perdagangan.", konsekuensi:
"Kesepakatan dapat mengurangi konflik, meski tidak semua pihak akan puas. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Dukung satu calon dengan kekuatan militer tanpa negosiasi.", konsekuensi:
"Keputusan cepat mungkin menang, tetapi risiko perang saudara meningkat. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Biarkan semua wilayah menentukan nasib sendiri.", konsekuensi:
"Konflik pusat mungkin berkurang, tetapi jaringan politik dapat terpecah. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Trenggana wafat pada 1546. Setelahnya, konflik suksesi dan perubahan aliansi berkontribusi pada berkurangnya dominasi Demak."
  },
  "evt-054": {
    peran: "Penasihat Baabullah",
    situasi: "Setelah Khairun dibunuh, masyarakat menuntut respons. Kamu harus memilih strategi untuk menghadapi benteng Portugis.",
    pilihan: [
        { id: "a", teks: "Bangun koalisi lokal dan tekan benteng serta jalur suplai Portugis.", konsekuensi:
"Koalisi memperbesar tekanan, tetapi membutuhkan koordinasi dan dukungan lama. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Serang benteng tanpa persiapan atau sekutu.", konsekuensi:
"Serangan cepat mungkin mengejutkan lawan, tetapi berisiko menimbulkan korban besar. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Abaikan pembunuhan demi menjaga perdagangan sesaat.", konsekuensi:
"Perdagangan mungkin berlanjut sementara, tetapi legitimasi penguasa bisa melemah. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Khairun dibunuh pada 1570 oleh pihak Portugis. Baabullah memimpin perlawanan yang akhirnya memaksa Portugis meninggalkan Ternate pada 1575."
  },
  "evt-055": {
    peran: "Sultan Baabullah",
    situasi: "Ternate memiliki dukungan untuk menekan Portugis, tetapi konflik panjang menguras sumber daya. Kamu perlu menentukan cara mempertahankan hasil kemenangan.",
    pilihan: [
        { id: "a", teks: "Pertahankan koalisi antarpulau dan pulihkan perdagangan dengan kendali lokal.", konsekuensi:
"Koalisi memperkuat posisi, tetapi memerlukan pembagian manfaat dan diplomasi. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Kejar semua lawan ke pulau lain tanpa jeda.", konsekuensi:
"Ekspansi dapat menambah pengaruh, tetapi berisiko melemahkan pertahanan Ternate. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Hentikan semua hubungan dengan tetangga.", konsekuensi:
"Ketergantungan berkurang, tetapi dukungan regional dan perdagangan ikut menyusut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Pada 1575, Portugis meninggalkan Ternate setelah perlawanan yang dipimpin Sultan Baabullah."
  },
  "evt-056": {
    peran: "Pemimpin Pakuan",
    situasi: "Pusat kerajaan menghadapi tekanan dan perubahan aliansi. Kamu perlu menentukan cara melindungi penduduk dan warisan politik.",
    pilihan: [
        { id: "a", teks: "Upayakan evakuasi penduduk dan negosiasi untuk menjaga komunitas lokal.", konsekuensi:
"Keselamatan warga dapat diprioritaskan, meski pusat kekuasaan mungkin hilang. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Bertahan tanpa mencari sekutu atau jalur keluar.", konsekuensi:
"Perlawanan dapat menunjukkan tekad, tetapi risiko korban dan isolasi meningkat. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Tinggalkan semua wilayah tanpa perundingan.", konsekuensi:
"Sebagian elite mungkin selamat, tetapi penduduk menghadapi ketidakpastian lebih besar. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Tahun 1579 lazim dipakai dalam tradisi sejarah sebagai penanda jatuhnya Pakuan Pajajaran, setelah proses panjang perubahan politik di Jawa Barat."
  },
  "evt-057": {
    peran: "Panembahan Senapati",
    situasi: "Mataram berkembang dari pedalaman sementara kota-kota pesisir memiliki kekayaan dagang. Kamu harus memilih strategi perluasan pengaruh.",
    pilihan: [
        { id: "a", teks: "Perkuat basis pertanian dan bangun aliansi dengan wilayah sekitar.", konsekuensi:
"Basis pangan dan aliansi dapat menopang kekuasaan, tetapi membutuhkan administrasi. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Hanya mengandalkan serangan tanpa membangun dukungan lokal.", konsekuensi:
"Wilayah mungkin direbut cepat, tetapi sulit dipertahankan. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Abaikan pesisir dan semua jalur perdagangan.", konsekuensi:
"Kemandirian pedalaman meningkat, tetapi sumber daya dan akses strategis terbatas. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Mataram muncul sebagai kekuatan pedalaman Jawa pada akhir abad ke-16; Panembahan Senapati sering dikaitkan dengan fase awalnya."
  },
  "evt-058": {
    peran: "Syahbandar Banten",
    situasi: "Armada Belanda meminta akses untuk membeli lada. Kamu perlu menilai peluang dagang dan risiko persaingan.",
    pilihan: [
        { id: "a", teks: "Izinkan perdagangan dengan aturan pelabuhan dan pungutan yang jelas.", konsekuensi:
"Banten dapat memperoleh manfaat dagang sambil menjaga kendali atas aturan. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Berikan monopoli permanen kepada pendatang baru.", konsekuensi:
"Mitra mungkin tertarik, tetapi pedagang lain dan penguasa kehilangan ruang gerak. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Tolak semua kapal asing tanpa pertimbangan.", konsekuensi:
"Risiko campur tangan bisa berkurang, tetapi peluang pendapatan dan informasi juga hilang. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Armada Belanda pimpinan Cornelis de Houtman tiba di Banten pada 1596 untuk berdagang; kedatangan itu tidak langsung membuat Belanda menguasai pelabuhan."
  },
  "evt-059": {
    peran: "Pemimpin masyarakat Banda",
    situasi: "Pedagang Belanda menawarkan perjanjian yang memberi mereka hak khusus atas pala. Kamu harus menilai dampaknya pada kemandirian dagang.",
    pilihan: [
        { id: "a", teks: "Negosiasikan perjanjian yang menjaga hak berdagang dengan mitra lain.", konsekuensi:
"Kebebasan dagang dapat dipertahankan, tetapi pihak asing mungkin menekan lebih keras. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Setujui monopoli penuh demi bantuan militer.", konsekuensi:
"Bantuan mungkin diperoleh, tetapi pilihan pasar dan kendali atas harga berkurang. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Putus hubungan dagang dengan semua pihak.", konsekuensi:
"Ketergantungan luar berkurang, tetapi pendapatan dan akses barang juga menyusut. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Pedagang Belanda berhubungan dengan Banda sejak 1599. Perjanjian monopoli pada 1602 menjadi awal ketegangan yang berkembang menjadi konflik besar pada abad ke-17."
  },
  "evt-060": {
    peran: "Penguasa pelabuhan",
    situasi: "Beberapa perusahaan asing bersaing meminta hak dagang. Kamu perlu mempertahankan kendali dan mencegah ketergantungan pada satu pihak.",
    pilihan: [
        { id: "a", teks: "Beri izin berdagang berdasarkan aturan yang sama dan evaluasi perjanjian.", konsekuensi:
"Persaingan antarpedagang dapat memberi ruang tawar, tetapi memerlukan pengawasan. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Berikan monopoli permanen kepada perusahaan yang pertama datang.", konsekuensi:
"Hubungan lebih sederhana, tetapi penguasa kehilangan pilihan mitra dan daya tawar. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Tolak semua pedagang asing tanpa pengecualian.", konsekuensi:
"Kemandirian bisa terjaga, tetapi pendapatan dan akses pasar menurun. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Perusahaan dagang Inggris berdiri pada 1600 dan VOC dibentuk pada 1602. Keduanya berusaha memperoleh akses rempah melalui perdagangan, perjanjian, dan persaingan."
  },
  "evt-061": {
    peran: "Penguasa Nusantara",
    situasi: "VOC menawarkan perjanjian yang menjanjikan perdagangan, tetapi meminta hak istimewa dan akses eksklusif.",
    pilihan: [
        { id: "a", teks: "Periksa syaratnya dan hindari menyerahkan hak monopoli tanpa batas.", konsekuensi:
"Negosiasi dapat menjaga ruang gerak, tetapi perusahaan mungkin menekan melalui armada. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Berikan hak eksklusif jangka panjang tanpa pengawasan.", konsekuensi:
"Mitra mungkin berinvestasi, tetapi penguasa kehilangan kontrol atas perdagangan. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Serang semua kapal VOC tanpa mencari dukungan.", konsekuensi:
"Perlawanan langsung mungkin memberi sinyal tegas, tetapi risiko militer dan ekonomi tinggi. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "VOC dibentuk pada 1602 dengan hak istimewa untuk berdagang dan membuat perjanjian di Asia. Pengaruhnya di Nusantara tumbuh bertahap melalui hubungan dagang, benteng, aliansi, dan konflik."
  },
  "evt-062": {
    peran: "Pemimpin lokal Ambon",
    situasi: "Dua kekuatan Eropa bersaing atas benteng dan perdagangan. Masyarakat setempat perlu mempertimbangkan keamanan dan kemandirian.",
    pilihan: [
        { id: "a", teks: "Utamakan keselamatan warga dan negosiasikan ruang dagang dengan penguasa setempat.", konsekuensi:
"Negosiasi dapat mengurangi risiko langsung, tetapi tidak menjamin pihak asing menepati janji. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Dukung satu pihak tanpa syarat.", konsekuensi:
"Bantuan militer mungkin datang, tetapi pihak lokal bisa kehilangan daya tawar. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Abaikan konflik dan biarkan benteng menguasai pelabuhan.", konsekuensi:
"Konflik mungkin tidak langsung meluas, tetapi kontrol dagang lokal dapat tergerus. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Pada 1605, VOC mengambil alih benteng Portugis di Ambon. Persaingan atas rempah dan hubungan dengan penguasa lokal berlanjut setelah peristiwa itu."
  },
  "evt-063": {
    peran: "Penguasa Gowa-Talloq",
    situasi: "Islam dikenal melalui jaringan dagang dan ulama. Keputusan kerajaan dapat memengaruhi hubungan regional dan kehidupan masyarakat.",
    pilihan: [
        { id: "a", teks: "Bangun hubungan dengan ulama dan pedagang sambil menjaga keteraturan masyarakat.", konsekuensi:
"Jaringan baru dapat memperkuat hubungan, tetapi perlu menghormati keragaman komunitas. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Paksa perubahan keyakinan secara serentak tanpa memperhatikan masyarakat.", konsekuensi:
"Perubahan cepat mungkin tampak efektif, tetapi dapat memicu penolakan dan konflik. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Putus hubungan dengan pedagang dan ulama luar.", konsekuensi:
"Pengaruh luar berkurang, tetapi kerajaan kehilangan akses pada jaringan dagang dan ilmu. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Penguasa Gowa-Talloq menerima Islam sekitar 1605. Penyebaran Islam di Sulawesi Selatan kemudian berlangsung melalui jaringan kerajaan, ulama, dan perdagangan."
  },
  "evt-064": {
    peran: "Sultan Iskandar Muda",
    situasi: "Aceh memiliki peluang memperkuat posisi di Selat Malaka, tetapi ekspansi membutuhkan sumber daya dan diplomasi.",
    pilihan: [
        { id: "a", teks: "Perkuat armada dan diplomasi sambil menghitung biaya ekspansi.", konsekuensi:
"Kekuatan maritim meningkat, tetapi perlu mengelola sumber daya dan hubungan dengan wilayah lain. Trade-off: pendekatan ini dapat menjaga kestabilan atau menghemat sumber daya dalam jangka pendek, tetapi mungkin membuat inisiatif jatuh ke tangan pihak lain. Pilihan ini paling masuk akal bila waktu dan sumber daya terbatas; risikonya meningkat bila lawan bergerak cepat." },
        { id: "b", teks: "Serang semua pelabuhan tanpa persiapan logistik.", konsekuensi:
"Serangan dapat mengejutkan lawan, tetapi berisiko gagal dan menguras perbendaharaan. Trade-off: tindakan langsung dapat membuka peluang perubahan yang nyata, tetapi biasanya membutuhkan dukungan, biaya, dan kesiapan lebih besar serta dapat memicu balasan. Hasilnya tidak otomatis berhasil; strategi ini lebih layak bila dukungan dan sumber daya cukup.", historis: true },
        { id: "c", teks: "Hindari seluruh perdagangan luar.", konsekuensi:
"Risiko persaingan laut berkurang, tetapi basis ekonomi dan pengaruh Aceh melemah. Trade-off: pendekatan ini menjaga ruang gerak dan memberi waktu untuk menimbang pilihan lain, tetapi proses bisa lebih lambat dan kesempatan dapat menyempit. Manfaatnya besar ketika informasi belum lengkap; risikonya meningkat jika keputusan harus segera diambil." }
    ],
    hasilHistoris: "Iskandar Muda naik takhta pada 1607 dan memimpin fase penguatan serta ekspansi Aceh yang berlanjut sepanjang abad ke-17."
  }
,
  "evt-065": {
    peran: "Penguasa pelabuhan Melaka",
    situasi: "Situasi: Melaka tumbuh sebagai pelabuhan penghubung Selat Malaka. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true },
      { id: "b", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." },
      { id: "c", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." }
    ],
    hasilHistoris: "Sumber sejarah berbeda dalam detail kronologi pendirian Melaka; sekitar 1400 merupakan perkiraan yang umum digunakan. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-066": {
    peran: "Penasihat istana Majapahit",
    situasi: "Situasi: Perang Paregreg melemahkan kestabilan Majapahit. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." },
      { id: "c", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true }
    ],
    hasilHistoris: "Perang Paregreg lazim ditempatkan pada 1404–1406; dampak jangka panjangnya merupakan bagian dari proses yang lebih luas. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-067": {
    peran: "Penasihat diplomatik Melaka",
    situasi: "Situasi: Hubungan diplomatik Melaka dan Dinasti Ming memperkuat jaringan niaga. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." },
      { id: "b", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true },
      { id: "c", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." }
    ],
    hasilHistoris: "Misi Ming dan hubungan dengan Melaka tercatat dalam sumber Tiongkok; sifat hubungan harus dibedakan dari kolonisasi langsung. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-068": {
    peran: "Pengelola pelabuhan pesisir Jawa",
    situasi: "Situasi: Jaringan pelayaran Cheng Ho singgah di pelabuhan Jawa. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true },
      { id: "b", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." },
      { id: "c", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." }
    ],
    hasilHistoris: "Catatan mengenai titik persinggahan armada perlu dibaca kritis karena sumber berbeda dalam detail lokasi. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-069": {
    peran: "Penasihat Samudera Pasai",
    situasi: "Situasi: Samudera Pasai bertahan sebagai simpul perdagangan dan Islam. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." },
      { id: "c", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true }
    ],
    hasilHistoris: "Tanggal dan urutan penguasa Pasai pada abad ke-15 tidak seluruhnya dapat dipastikan dari sumber yang tersedia. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-070": {
    peran: "Penasihat Kerajaan Sunda",
    situasi: "Situasi: Kerajaan Sunda mempertahankan kekuasaan di Jawa Barat. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." },
      { id: "b", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true },
      { id: "c", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." }
    ],
    hasilHistoris: "Batas wilayah dan detail politik Sunda abad ke-15 direkonstruksi dari sumber yang tidak selalu lengkap. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-071": {
    peran: "Penasihat istana Majapahit",
    situasi: "Situasi: Pergantian penguasa Majapahit memperlihatkan politik suksesi. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true },
      { id: "b", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." },
      { id: "c", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." }
    ],
    hasilHistoris: "Tahun naik takhta Suhita umumnya dicatat 1429, meski kronologi politik Majapahit memiliki perbedaan dalam sejumlah sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-072": {
    peran: "Pengelola pelabuhan Jawa",
    situasi: "Situasi: Perdagangan pesisir utara Jawa menghubungkan banyak komunitas. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." },
      { id: "c", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true }
    ],
    hasilHistoris: "Perdagangan pesisir merupakan proses jangka panjang; tanggal tepat perubahan setiap pelabuhan tidak selalu tersedia. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-073": {
    peran: "Pemimpin komunitas pesisir",
    situasi: "Situasi: Penyebaran Islam berlangsung melalui jaringan lokal di pesisir Jawa. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." },
      { id: "b", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true },
      { id: "c", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." }
    ],
    hasilHistoris: "Kisah tokoh penyebar Islam memuat tradisi yang kronologi dan detailnya tidak selalu dapat diverifikasi secara independen. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-074": {
    peran: "Penasihat kerajaan Bali",
    situasi: "Situasi: Bali mempertahankan tradisi kerajaan dan hubungan dengan Jawa. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true },
      { id: "b", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." },
      { id: "c", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." }
    ],
    hasilHistoris: "Rincian perpindahan elite dan pengaruh Majapahit ke Bali dalam tradisi kemudian perlu dibedakan dari bukti sezaman. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-075": {
    peran: "Penasihat penguasa Maluku",
    situasi: "Situasi: Ternate dan Tidore bersaing sekaligus berdagang dalam jaringan rempah. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." },
      { id: "c", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true }
    ],
    hasilHistoris: "Kronologi islamisasi dan pembentukan kesultanan di Maluku Utara berbeda menurut sumber; prosesnya bertahap. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-076": {
    peran: "Pemimpin jaringan dagang Kalimantan",
    situasi: "Situasi: Jaringan dagang Kalimantan menghubungkan sungai dan pesisir. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." },
      { id: "b", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true },
      { id: "c", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." }
    ],
    hasilHistoris: "Bukti tertulis untuk struktur politik Kalimantan abad ke-15 terbatas; gambaran jaringan dagang bersifat regional. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-077": {
    peran: "Penasihat pemimpin Sulawesi Selatan",
    situasi: "Situasi: Komunitas Sulawesi Selatan membangun jaringan politik dan maritim. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true },
      { id: "b", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." },
      { id: "c", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." }
    ],
    hasilHistoris: "Kronologi awal pusat politik Sulawesi Selatan sebagian bergantung pada tradisi dan naskah yang lebih muda. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-078": {
    peran: "Perantara pedalaman dan pesisir Minangkabau",
    situasi: "Situasi: Pagaruyung dan dataran tinggi Minangkabau terhubung dengan pesisir. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." },
      { id: "c", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true }
    ],
    hasilHistoris: "Detail kelembagaan Pagaruyung abad ke-15 tidak seluruhnya dapat dipastikan dari sumber sezaman. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-079": {
    peran: "Penasihat penguasa Brunei",
    situasi: "Situasi: Perubahan di Brunei memperkuat jaringan maritim Kalimantan utara. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." },
      { id: "b", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true },
      { id: "c", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." }
    ],
    hasilHistoris: "Kronologi awal Brunei menggabungkan tradisi lokal dan catatan luar yang tidak selalu sepakat. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-080": {
    peran: "Pemimpin komunitas Cirebon",
    situasi: "Situasi: Cirebon tumbuh sebagai simpul pesisir di antara Sunda dan Jawa. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true },
      { id: "b", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." },
      { id: "c", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." }
    ],
    hasilHistoris: "Tradisi tentang pendirian Cirebon dan tokoh-tokohnya tidak seluruhnya dapat diverifikasi sebagai catatan sezaman. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-081": {
    peran: "Penasihat Demak",
    situasi: "Situasi: Demak muncul sebagai kekuatan pesisir menjelang akhir abad ke-15. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." },
      { id: "c", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true }
    ],
    hasilHistoris: "Tanggal pendirian Demak tidak sepenuhnya pasti; kronologi akhir abad ke-15 merupakan perkiraan umum. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-082": {
    peran: "Penasihat elite Jawa",
    situasi: "Situasi: Perubahan politik Majapahit berlangsung bertahap, bukan satu tanggal tunggal. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." },
      { id: "b", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true },
      { id: "c", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." }
    ],
    hasilHistoris: "Tahun 1478 merupakan penanda dalam sejumlah kronologi; proses akhir Majapahit diperdebatkan dan berlangsung lebih panjang. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-083": {
    peran: "Saudagar Nusantara",
    situasi: "Situasi: Jaringan perdagangan Nusantara menjelang 1500 semakin terhubung. Kamu harus memilih pendekatan di tengah perubahan politik dan perdagangan. Tidak ada pilihan yang bebas biaya: keputusan perlu menimbang kestabilan, sumber daya, hubungan dengan mitra, dan risiko kehilangan kesempatan. Pertimbangkan dampak bagi kelompok lokal, bukan hanya keuntungan penguasa.",
    pilihan: [
      { id: "a", teks: "Mengutamakan kebijakan yang paling sesuai dengan praktik yang tercatat dalam konteks peristiwa ini.", konsekuensi: "Pendekatan ini mencerminkan jalur historis yang dikenal dari sumber, tetapi bukan berarti tanpa masalah. Kebijakan tersebut tetap menghadapi keterbatasan sumber daya, persaingan, dan kompromi politik. Hasil akhirnya dibentuk banyak faktor, sehingga keputusan tokoh tidak boleh dipahami sebagai solusi sempurna atau satu-satunya pilihan rasional.", historis: true },
      { id: "b", teks: "Memperkuat kerja sama dan perundingan dengan mitra regional.", konsekuensi: "Pendekatan ini dapat memperluas kepercayaan, akses informasi, dan pembagian risiko. Namun, perundingan memerlukan waktu, hadiah atau konsesi, dan kesediaan menerima kompromi. Mitra juga dapat mengubah sikap ketika kepentingannya bergeser. Pilihan ini cocok bila kestabilan jaringan lebih penting daripada hasil cepat." },
      { id: "c", teks: "Memusatkan sumber daya untuk mengamankan jalur dan titik strategis.", konsekuensi: "Pengamanan terarah dapat melindungi perdagangan dan meningkatkan daya tawar, tetapi membutuhkan biaya, tenaga, dan koordinasi. Jika terlalu berfokus pada titik tertentu, kebutuhan masyarakat atau jalur alternatif dapat terabaikan. Keberhasilannya bergantung pada dukungan lokal dan kemampuan menghindari konflik yang tidak perlu." }
    ],
    hasilHistoris: "Gambaran jaringan regional merupakan sintesis dari berbagai sumber; intensitas tiap rute tidak sama dan berubah dari waktu ke waktu. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-084": {
    peran: "Saudagar dan penasihat pelabuhan",
    situasi: "Aceh tumbuh sebagai pusat pelabuhan ketika persaingan di Selat Malaka meningkat. Pedagang, ulama, dan pelaut membawa komoditas sekaligus pengetahuan. Kronologi awal kesultanan Aceh tidak seragam dalam sumber. Lebih aman melihat sekitar 1500 sebagai masa penguatan jaringan politik dan dagang, bukan satu tanggal pendirian yang pasti. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Kronologi awal kesultanan Aceh tidak seragam dalam sumber. Lebih aman melihat sekitar 1500 sebagai masa penguatan jaringan politik dan dagang, bukan satu tanggal pendirian yang pasti. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-085": {
    peran: "Saudagar dan penasihat pelabuhan",
    situasi: "Armada Portugis menjajaki Melaka pada 1509. Kota ini merupakan simpul penting yang menghubungkan pedagang dari India, Tiongkok, Jawa, Sumatra, dan Maluku. Kontak awal tidak serta-merta berarti kontrol Portugis. Penaklukan baru terjadi pada 1511, dan sesudahnya jaringan dagang berpindah serta menyesuaikan diri. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true }
    ],
    hasilHistoris: "Kontak awal tidak serta-merta berarti kontrol Portugis. Penaklukan baru terjadi pada 1511, dan sesudahnya jaringan dagang berpindah serta menyesuaikan diri. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-086": {
    peran: "Panglima dan penasihat setempat",
    situasi: "Pada 1511, armada Portugis merebut Melaka. Perubahan ini mengguncang pusat politik dan perdagangan di Selat Malaka. Pedagang dan penguasa di kawasan lain merespons dengan mencari pelabuhan, sekutu, dan jalur alternatif. Penaklukan Melaka tidak membuat Portugis menguasai seluruh perdagangan Nusantara. Jaringan niaga tetap multipusat dan persaingan dengan kekuatan lokal terus berlangsung. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Penaklukan Melaka tidak membuat Portugis menguasai seluruh perdagangan Nusantara. Jaringan niaga tetap multipusat dan persaingan dengan kekuatan lokal terus berlangsung. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-087": {
    peran: "Saudagar dan penasihat pelabuhan",
    situasi: "Setelah merebut Melaka, Portugis mengirim ekspedisi ke kepulauan penghasil rempah. Banda terkenal dengan pala, sementara Maluku menjadi sumber cengkih. Penguasa setempat menimbang peluang perdagangan dan risiko campur tangan asing. Kontak awal berlangsung melalui negosiasi dan persaingan. Pengaruh Portugis berbeda-beda antar-pulau dan tidak boleh disamakan dengan penguasaan penuh atas seluruh Maluku. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Kontak awal berlangsung melalui negosiasi dan persaingan. Pengaruh Portugis berbeda-beda antar-pulau dan tidak boleh disamakan dengan penguasaan penuh atas seluruh Maluku. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-088": {
    peran: "Panglima dan penasihat setempat",
    situasi: "Pati Unus dari Demak memimpin serangan terhadap Melaka Portugis. Serangan ini tidak berhasil merebut kota, tetapi memperlihatkan bahwa perubahan di Selat Malaka berdampak pada kekuatan pesisir Jawa. Rincian jumlah kapal dan jalannya serangan berbeda antar-sumber. Inti peristiwanya adalah upaya Demak menantang kedudukan Portugis di Melaka. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Rincian jumlah kapal dan jalannya serangan berbeda antar-sumber. Inti peristiwanya adalah upaya Demak menantang kedudukan Portugis di Melaka. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-089": {
    peran: "Penasihat penguasa setempat",
    situasi: "Pada awal abad ke-16, Aceh semakin penting sebagai pusat politik dan perdagangan di ujung utara Sumatra. Penguasa berusaha mengonsolidasikan wilayah pesisir dan menarik pedagang Muslim yang mencari jalur selain Melaka Portugis. Tahun awal dan urutan penguasa Aceh bervariasi dalam kronologi. Peristiwa ini merangkum proses konsolidasi, bukan menyatakan satu tanggal pendirian yang mutlak. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Tahun awal dan urutan penguasa Aceh bervariasi dalam kronologi. Peristiwa ini merangkum proses konsolidasi, bukan menyatakan satu tanggal pendirian yang mutlak. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-090": {
    peran: "Saudagar dan penasihat pelabuhan",
    situasi: "Sisa ekspedisi Magellan melintasi perairan antara pulau-pulau Nusa Tenggara pada 1521 dalam pelayaran keliling dunia. Catatan ekspedisi menambah dokumentasi Eropa tentang wilayah yang sudah terhubung melalui pelayaran regional. Pelayaran Eropa bukan awal penjelajahan laut di kawasan ini. Pelaut lokal telah menguasai pengetahuan musim, selat, dan pelabuhan selama berabad-abad. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Pelayaran Eropa bukan awal penjelajahan laut di kawasan ini. Pelaut lokal telah menguasai pengetahuan musim, selat, dan pelabuhan selama berabad-abad. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-091": {
    peran: "Penasihat penguasa setempat",
    situasi: "Pada 1522, Portugis membangun benteng di Ternate setelah menjalin hubungan dengan penguasa setempat. Benteng memberi perlindungan bagi perdagangan, tetapi juga memperkuat kemampuan Portugis ikut campur dalam politik dan persaingan antarpenguasa Maluku. Hubungan Ternate dan Portugis berubah dari waktu ke waktu; kerja sama awal tidak menghapus konflik yang kemudian berkembang. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Hubungan Ternate dan Portugis berubah dari waktu ke waktu; kerja sama awal tidak menghapus konflik yang kemudian berkembang. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-092": {
    peran: "Penasihat penguasa setempat",
    situasi: "Penguasa Sunda membuat kesepakatan dengan Portugis pada 1522 yang berkaitan dengan perdagangan dan rencana pembangunan pos di Sunda Kelapa. Perjanjian ini menunjukkan bahwa kerajaan lokal melakukan diplomasi aktif, bukan sekadar menjadi sasaran kekuatan luar. Rencana Portugis tidak menghasilkan kendali permanen atas Sunda Kelapa. Perkembangan berikutnya dipengaruhi oleh kekuatan Demak dan Cirebon. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true }
    ],
    hasilHistoris: "Rencana Portugis tidak menghasilkan kendali permanen atas Sunda Kelapa. Perkembangan berikutnya dipengaruhi oleh kekuatan Demak dan Cirebon. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-093": {
    peran: "Panglima dan penasihat setempat",
    situasi: "Pasukan yang berhubungan dengan Demak dan Cirebon merebut Sunda Kelapa pada 1527. Dalam tradisi sejarah, nama Jayakarta dikaitkan dengan perubahan ini. Pelabuhan tersebut tetap penting karena menghubungkan pedalaman Jawa Barat dengan perdagangan laut. Rincian tokoh dan tanggal penamaan berbeda dalam sumber. Peristiwa ini menandai pergeseran kekuasaan, bukan hilangnya peran masyarakat dan jaringan dagang setempat. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Rincian tokoh dan tanggal penamaan berbeda dalam sumber. Peristiwa ini menandai pergeseran kekuasaan, bukan hilangnya peran masyarakat dan jaringan dagang setempat. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-094": {
    peran: "Penasihat penguasa setempat",
    situasi: "Banten berkembang menjadi pusat politik dan perdagangan di ujung barat Jawa. Letaknya dekat Selat Sunda memberi akses pada jalur kapal, sementara lada dan hubungan dengan pedalaman membantu menopang ekonomi. Tanggal pendirian dan proses islamisasi Banten tidak sepenuhnya seragam dalam sumber. Perubahan berlangsung bertahap melalui politik, perdagangan, dan jaringan keagamaan. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Tanggal pendirian dan proses islamisasi Banten tidak sepenuhnya seragam dalam sumber. Perubahan berlangsung bertahap melalui politik, perdagangan, dan jaringan keagamaan. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-095": {
    peran: "Saudagar dan penasihat pelabuhan",
    situasi: "Pada abad ke-16, Banten dan Cirebon tumbuh sebagai pusat pesisir yang terhubung dengan jalur laut serta masyarakat pedalaman. Keduanya memiliki hubungan dan kepentingan masing-masing; tidak semua perubahan di Jawa Barat dikendalikan dari satu pusat. Kronologi awal kedua kesultanan berisi tradisi yang ditulis kemudian. Rentang ini menggambarkan pertumbuhan kawasan, bukan tanggal peristiwa tunggal. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Kronologi awal kedua kesultanan berisi tradisi yang ditulis kemudian. Rentang ini menggambarkan pertumbuhan kawasan, bukan tanggal peristiwa tunggal. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-096": {
    peran: "Panglima dan penasihat setempat",
    situasi: "Aceh berupaya memperkuat armada dan pengaruhnya di kawasan Selat Malaka. Persaingan dengan Portugis melibatkan serangan, diplomasi, dan hubungan yang berubah dengan kerajaan-kerajaan Melayu lainnya. Konflik bukan perang tunggal yang berlangsung tanpa jeda; kekuatan dan persekutuan berubah sesuai kepentingan politik serta perdagangan. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Konflik bukan perang tunggal yang berlangsung tanpa jeda; kekuatan dan persekutuan berubah sesuai kepentingan politik serta perdagangan. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-097": {
    peran: "Penasihat komunitas setempat",
    situasi: "Pada pertengahan abad ke-16, misionaris Katolik mengunjungi Maluku, termasuk Fransiskus Xaverius pada 1546. Penyebaran agama berlangsung dalam lingkungan yang juga ditandai persaingan penguasa lokal dan kekuatan Eropa. Penerimaan agama berbeda antar-komunitas dan tidak dapat digambarkan sebagai perubahan seragam seluruh kepulauan. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Penerimaan agama berbeda antar-komunitas dan tidak dapat digambarkan sebagai perubahan seragam seluruh kepulauan. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-098": {
    peran: "Penasihat komunitas setempat",
    situasi: "Pada abad ke-16, Islam menyebar ke sejumlah pusat di Kalimantan melalui perdagangan, hubungan antarpenguasa, dan jaringan ulama. Kutai menjadi salah satu contoh perubahan keagamaan yang terkait dengan hubungan pesisir dan sungai. Tanggal dan tahapan islamisasi Kutai berbeda menurut sumber. Perubahan keagamaan tidak berarti semua penduduk berpindah keyakinan pada waktu yang sama. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Tanggal dan tahapan islamisasi Kutai berbeda menurut sumber. Perubahan keagamaan tidak berarti semua penduduk berpindah keyakinan pada waktu yang sama. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-099": {
    peran: "Panglima dan penasihat setempat",
    situasi: "Penguasa Ternate dan masyarakat setempat semakin menentang kehadiran Portugis. Perselisihan menyangkut kedaulatan, perdagangan cengkih, dan campur tangan dalam urusan istana. Perlawanan berlanjut hingga masa Sultan Baabullah. Perlawanan ini terdiri atas rangkaian tindakan dan persekutuan, bukan satu pertempuran tunggal. Dukungan dari pulau-pulau sekitar turut memengaruhi hasilnya. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true }
    ],
    hasilHistoris: "Perlawanan ini terdiri atas rangkaian tindakan dan persekutuan, bukan satu pertempuran tunggal. Dukungan dari pulau-pulau sekitar turut memengaruhi hasilnya. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-100": {
    peran: "Penasihat penguasa setempat",
    situasi: "Sultan Khairun terbunuh pada 1570 setelah ketegangan dengan Portugis. Peristiwa itu memperkuat tekad penerusnya, Baabullah, untuk mengusir Portugis dari Ternate dan menjadi titik penting dalam konflik setempat. Rincian peristiwa pembunuhan bersumber dari narasi sejarah yang perlu dibaca kritis. Akibat politiknya jelas: hubungan dengan Portugis memburuk dan perlawanan meluas. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Rincian peristiwa pembunuhan bersumber dari narasi sejarah yang perlu dibaca kritis. Akibat politiknya jelas: hubungan dengan Portugis memburuk dan perlawanan meluas. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-101": {
    peran: "Panglima dan penasihat setempat",
    situasi: "Pada 1575, Sultan Baabullah berhasil memaksa Portugis meninggalkan benteng mereka di Ternate. Keberhasilan ini memperkuat pengaruh Ternate dalam perdagangan rempah dan memperlihatkan bahwa kekuatan Eropa tidak selalu mampu mempertahankan posisinya. Portugis tetap bertahan di bagian lain kawasan timur, sehingga peristiwa ini bukan akhir kehadiran Eropa di Maluku. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Portugis tetap bertahan di bagian lain kawasan timur, sehingga peristiwa ini bukan akhir kehadiran Eropa di Maluku. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-102": {
    peran: "Penasihat penguasa setempat",
    situasi: "Setelah kehilangan posisi di Ternate, Portugis membangun benteng di Tidore pada akhir abad ke-16. Persaingan antarkerajaan Maluku dan perebutan akses rempah membuat aliansi lokal dan Eropa berubah-ubah. Tidak semua hubungan dapat dijelaskan sebagai pertentangan dua kubu tetap. Penguasa lokal memiliki tujuan sendiri dan dapat mengubah sekutu. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Tidak semua hubungan dapat dijelaskan sebagai pertentangan dua kubu tetap. Penguasa lokal memiliki tujuan sendiri dan dapat mengubah sekutu. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-103": {
    peran: "Penasihat penguasa setempat",
    situasi: "Pada akhir abad ke-16, Panembahan Senopati memperluas kekuasaan Mataram dari kawasan pedalaman Jawa. Pertumbuhannya mengubah hubungan antara pusat agraris, pelabuhan pesisir, dan kerajaan-kerajaan lain di Jawa. Tahun berdiri Mataram sering ditulis 1582, tetapi konsolidasi kekuasaannya berlangsung bertahap dan kronologi rinci berbeda antarsumber. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Tahun berdiri Mataram sering ditulis 1582, tetapi konsolidasi kekuasaannya berlangsung bertahap dan kronologi rinci berbeda antarsumber. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-104": {
    peran: "Penasihat penguasa setempat",
    situasi: "Kesultanan Banjar tumbuh di kawasan aliran sungai Kalimantan Selatan. Jaringan sungai menghubungkan pedalaman dengan pesisir dan mendukung perdagangan hasil hutan serta komoditas lain. Islam dan hubungan antarpenguasa turut membentuk legitimasi kerajaan. Kronologi pendirian dan proses perubahan agama Banjar memiliki variasi dalam sumber. Perkembangan kerajaan berlangsung melalui beberapa tahap. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true }
    ],
    hasilHistoris: "Kronologi pendirian dan proses perubahan agama Banjar memiliki variasi dalam sumber. Perkembangan kerajaan berlangsung melalui beberapa tahap. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-105": {
    peran: "Saudagar dan penasihat pelabuhan",
    situasi: "Kerajaan Gowa–Tallo memperkuat posisi Makassar dalam jaringan perdagangan Indonesia timur. Pelabuhan ini menarik pedagang dari berbagai wilayah dan kemudian menjadi penting bagi perdagangan yang tidak hanya berpusat pada satu kekuatan. Tanggal dan urutan islamisasi serta konsolidasi Gowa–Tallo tidak selalu sama dalam sumber. Peran Makassar berkembang secara bertahap. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Tanggal dan urutan islamisasi serta konsolidasi Gowa–Tallo tidak selalu sama dalam sumber. Peran Makassar berkembang secara bertahap. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-106": {
    peran: "Saudagar dan penasihat pelabuhan",
    situasi: "Armada yang dipimpin Cornelis de Houtman tiba di Banten pada 1596 untuk mencari akses langsung ke perdagangan rempah. Kedatangan itu terjadi di kawasan yang telah memiliki penguasa, pedagang, dan jaringan internasional yang mapan. Ekspedisi awal Belanda mengalami konflik dan kesulitan. Kehadiran Belanda tidak langsung berarti kolonisasi atau kendali atas Nusantara. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true }
    ],
    hasilHistoris: "Ekspedisi awal Belanda mengalami konflik dan kesulitan. Kehadiran Belanda tidak langsung berarti kolonisasi atau kendali atas Nusantara. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-107": {
    peran: "Saudagar dan penasihat pelabuhan",
    situasi: "Pada 1599, ekspedisi Belanda kembali mengunjungi Aceh. Para penguasa dan pedagang setempat menimbang hubungan dengan pendatang baru berdasarkan harga, keamanan, dan persaingan dengan kekuatan lain. Hubungan dagang awal dapat berisi negosiasi maupun kekerasan. Kunjungan kapal tidak sama dengan penguasaan wilayah. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Hubungan dagang awal dapat berisi negosiasi maupun kekerasan. Kunjungan kapal tidak sama dengan penguasaan wilayah. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-108": {
    peran: "Saudagar dan penasihat pelabuhan",
    situasi: "Menjelang 1600, perdagangan Nusantara melibatkan pelabuhan Aceh, Banten, Makassar, Maluku, dan banyak simpul kecil. Perusahaan Eropa berusaha membeli rempah langsung, tetapi tetap bergantung pada pengetahuan pelaut, pemasok, dan perantara setempat. Perubahan abad ke-17 bukan pergantian seketika dari perdagangan Asia menjadi perdagangan Eropa. Banyak jaringan lama bertahan sambil menyesuaikan diri terhadap persaingan baru. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Perubahan abad ke-17 bukan pergantian seketika dari perdagangan Asia menjadi perdagangan Eropa. Banyak jaringan lama bertahan sambil menyesuaikan diri terhadap persaingan baru. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-109": {
    peran: "Penasihat penguasa setempat",
    situasi: "Pada 1602, sejumlah perusahaan dagang Belanda digabung menjadi Vereenigde Oostindische Compagnie (VOC). Perusahaan ini memiliki dukungan negara dan kemampuan membuat perjanjian serta menggunakan kekuatan bersenjata demi kepentingan dagangnya. Pembentukan VOC tidak berarti seluruh Nusantara langsung dikuasai. Pengaruhnya bertambah secara bertahap melalui perdagangan, perjanjian, benteng, dan konflik. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true }
    ],
    hasilHistoris: "Pembentukan VOC tidak berarti seluruh Nusantara langsung dikuasai. Pengaruhnya bertambah secara bertahap melalui perdagangan, perjanjian, benteng, dan konflik. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-110": {
    peran: "Saudagar dan penasihat pelabuhan",
    situasi: "Pada 1603, Belanda membangun pos dagang permanen di Banten. Mereka harus bernegosiasi dengan penguasa lokal dan bersaing dengan pedagang Asia serta bangsa Eropa lainnya untuk memperoleh lada dan komoditas lain. Pos dagang adalah pijakan komersial, bukan bukti bahwa Belanda telah menguasai Banten atau seluruh Jawa. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true }
    ],
    hasilHistoris: "Pos dagang adalah pijakan komersial, bukan bukti bahwa Belanda telah menguasai Banten atau seluruh Jawa. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-111": {
    peran: "Panglima dan penasihat setempat",
    situasi: "Pada 1605, VOC dan sekutu lokal menekan Portugis di Ambon hingga benteng Portugis menyerah. Peristiwa ini memperlihatkan bahwa keberhasilan militer Eropa bergantung pula pada aliansi dengan kelompok lokal. Penguasaan benteng tidak sama dengan kontrol penuh atas seluruh perdagangan rempah. Perlawanan dan persaingan berlanjut di pulau-pulau lain. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Penguasaan benteng tidak sama dengan kontrol penuh atas seluruh perdagangan rempah. Perlawanan dan persaingan berlanjut di pulau-pulau lain. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-112": {
    peran: "Panglima dan penasihat setempat",
    situasi: "Pada 1606, armada Spanyol mengambil posisi di Ternate dan Tidore. Persaingan Eropa bertaut dengan persaingan lokal, sementara para penguasa Maluku tetap berusaha mempertahankan ruang gerak dan kendali atas perdagangan rempah. Kedudukan Spanyol dan Portugis di kawasan berubah mengikuti konflik global dan aliansi setempat. Peta kekuasaan tidak stabil dan tidak mencakup semua pulau secara seragam. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Kedudukan Spanyol dan Portugis di kawasan berubah mengikuti konflik global dan aliansi setempat. Peta kekuasaan tidak stabil dan tidak mencakup semua pulau secara seragam. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-113": {
    peran: "Penasihat penguasa setempat",
    situasi: "Pada masa Iskandar Muda, Aceh menjadi kekuatan regional yang kuat. Armada dan kebijakan istana digunakan untuk memperluas pengaruh terhadap pelabuhan di Sumatra dan Semenanjung Melayu, sekaligus memperkuat posisi Aceh dalam perdagangan. Ekspansi Aceh berlangsung melalui gabungan kampanye militer, diplomasi, dan pengaturan perdagangan. Dampaknya berbeda bagi setiap pelabuhan dan komunitas. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Ekspansi Aceh berlangsung melalui gabungan kampanye militer, diplomasi, dan pengaturan perdagangan. Dampaknya berbeda bagi setiap pelabuhan dan komunitas. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-114": {
    peran: "Saudagar dan penasihat pelabuhan",
    situasi: "Pada awal abad ke-17, perusahaan Inggris membangun hubungan dagang dan pos di sejumlah pelabuhan, termasuk Banten, Makassar, dan Jambi. Penguasa lokal dapat menggunakan persaingan antarperusahaan untuk memperoleh harga atau dukungan yang lebih menguntungkan. Pos dagang Inggris tidak selalu bertahan lama dan tidak berarti penguasaan wilayah. Persaingan dagang melibatkan negosiasi, perubahan sekutu, dan konflik. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Pos dagang Inggris tidak selalu bertahan lama dan tidak berarti penguasaan wilayah. Persaingan dagang melibatkan negosiasi, perubahan sekutu, dan konflik. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-115": {
    peran: "Panglima dan penasihat setempat",
    situasi: "Pada 1613, VOC mengambil alih benteng Portugis di Solor. Kepulauan Nusa Tenggara memiliki posisi strategis dalam jalur pelayaran dan perdagangan yang menghubungkan Maluku, Jawa, dan wilayah lebih jauh ke barat. Pergantian benteng tidak menghapus peran masyarakat lokal atau menghentikan pelayaran regional. Kontrol atas titik tertentu tetap berbeda dari penguasaan seluruh kawasan. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Pergantian benteng tidak menghapus peran masyarakat lokal atau menghentikan pelayaran regional. Kontrol atas titik tertentu tetap berbeda dari penguasaan seluruh kawasan. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  },
  "evt-116": {
    peran: "Saudagar dan penasihat pelabuhan",
    situasi: "Pada dasawarsa awal 1600-an, VOC berupaya mengarahkan perdagangan rempah melalui perjanjian, pos, dan kekuatan bersenjata. Namun, penguasa lokal, pedagang Asia, dan pelaut Nusantara tetap menjadi bagian penting jaringan regional. Proses monopoli berlangsung tidak merata dan menghadapi perlawanan. Menjelang 1617, belum ada satu kekuatan yang mengendalikan seluruh kepulauan. Kamu harus menimbang peluang dan biaya dari pilihan yang tersedia. Tidak ada strategi yang bebas risiko; pertimbangkan dampak jangka pendek, hubungan jangka panjang, dan kemampuan penguasa lokal.",
    pilihan: [
      { id: "a", teks: "Memperkuat perundingan dan kerja sama dengan mitra regional.", konsekuensi: "Kerja sama dapat menjaga akses informasi dan membuka perdagangan, tetapi membutuhkan kompromi serta kepercayaan. Mitra dapat mengubah sikap ketika kepentingannya berubah. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." },
      { id: "b", teks: "Memusatkan sumber daya untuk mengamankan pelabuhan dan jalur strategis.", konsekuensi: "Pengamanan dapat melindungi jalur dan meningkatkan daya tawar, tetapi mahal dan berisiko memicu konflik. Fokus berlebihan pada satu titik dapat mengabaikan kebutuhan wilayah lain. Ini mewakili arah perkembangan yang tercatat, tanpa menyiratkan bahwa pilihan tersebut tanpa biaya.", historis: true },
      { id: "c", teks: "Mengikuti pendekatan yang paling dekat dengan perkembangan yang tercatat dalam peristiwa ini.", konsekuensi: "Pendekatan ini sesuai dengan arah sejarah yang dikenal, tetapi bukan solusi sempurna. Hasilnya tetap dipengaruhi sumber daya, aliansi, persaingan, dan keputusan pihak lain. Skenario ini merupakan alternatif yang masuk akal, bukan catatan keputusan yang benar-benar tercatat." }
    ],
    hasilHistoris: "Proses monopoli berlangsung tidak merata dan menghadapi perlawanan. Menjelang 1617, belum ada satu kekuatan yang mengendalikan seluruh kepulauan. Rincian dan kronologi tertentu dapat berbeda menurut sumber. Peristiwa ini menunjukkan trade-off nyata, bukan pilihan yang sepenuhnya baik atau buruk."
  }
};
