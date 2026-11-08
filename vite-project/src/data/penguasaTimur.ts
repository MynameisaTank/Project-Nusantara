import type { DetailPenguasa } from "./penguasaDetail";

/* Penguasa di Sulawesi, Maluku, dan Kalimantan Barat. Belum ditinjau sejarawan. */
export const PENGUASA_TIMUR: Record<string, DetailPenguasa> = {
  // ——— Gowa-Tallo ———
  "gowa-tallo|Tunipalangga": {
    tentang: ["Raja Gowa yang memperluas kekuasaan ke berbagai kerajaan di Sulawesi Selatan dan memperkuat angkatan perangnya."],
    sorotan: ["Perluasan wilayah Gowa"],
  },
  "gowa-tallo|Tunijallo": {
    tentang: ["Raja Gowa pada akhir abad ke-16 yang menjalin hubungan dagang dengan berbagai bangsa, menjadikan Makassar bandar yang ramai."],
    sorotan: ["Makassar menjadi bandar ramai"],
  },
  "gowa-tallo|Alauddin": {
    tentang: ["Raja Gowa pertama yang memeluk Islam (1605). Ia kemudian menyebarkan Islam ke kerajaan-kerajaan Bugis lewat serangkaian perang."],
    sorotan: ["Memeluk Islam (1605)", "Islamisasi kerajaan Bugis"],
  },
  "gowa-tallo|Muhammad Said": {
    tentang: ["Raja Gowa yang mempertahankan Makassar sebagai bandar bebas di tengah tekanan monopoli VOC."],
    sorotan: ["Makassar sebagai bandar bebas"],
  },
  "gowa-tallo|Sultan Hasanuddin": {
    gelar: "Ayam Jantan dari Timur",
    tentang: [
      "Memimpin Gowa melawan VOC dan sekutunya, Arung Palakka dari Bone. Setelah kalah, ia terpaksa menandatangani Perjanjian Bongaya (1667) yang sangat merugikan Gowa.",
      "Ia diakui sebagai Pahlawan Nasional.",
    ],
    sorotan: ["Perjanjian Bongaya (1667)", "Pahlawan Nasional"],
  },

  // ——— Bone dan Tidore ———
  "bone|Arung Palakka": {
    tentang: [
      "Pangeran Bugis yang bersekutu dengan VOC untuk membebaskan Bone dari kekuasaan Gowa. Bersama Cornelis Speelman ia mengalahkan Gowa pada 1667–1669.",
      "Ia kemudian menjadi penguasa paling berpengaruh di Sulawesi Selatan. Sosoknya dinilai berbeda-beda: pembebas bagi orang Bone, sekutu VOC bagi yang lain.",
    ],
    sorotan: ["Mengalahkan Gowa bersama VOC", "Penilaiannya diperdebatkan"],
  },
  "tidore|Sultan Nuku": {
    gelar: "Jou Barakati",
    tentang: [
      "Pangeran Tidore yang melawan VOC selama sekitar dua puluh tahun dari Seram dan Papua. Dengan bantuan Inggris ia merebut kembali Tidore pada 1797.",
      "Ia diakui sebagai Pahlawan Nasional.",
    ],
    sorotan: ["Merebut kembali Tidore (1797)", "Pahlawan Nasional"],
  },

  // ——— Pontianak ———
  "pontianak|Sultan Syarif Abdurrahman Alqadrie": {
    tentang: ["Putra ulama Arab dari Mempawah yang mendirikan Pontianak di pertemuan Sungai Kapuas dan Landak pada 1771."],
    sorotan: ["Mendirikan Pontianak (1771)"],
  },
  "pontianak|Sultan Syarif Kasim": {
    tentang: ["Putra pendiri Pontianak yang melanjutkan pemerintahan di bawah pengaruh Belanda."],
    sorotan: ["Menjabat 1808–1819"],
  },
  "pontianak|Sultan Syarif Usman": {
    tentang: ["Menyelesaikan pembangunan masjid jami kesultanan yang dinamai menurut ayahnya, Sultan Syarif Abdurrahman."],
    sorotan: ["Masjid Jami Sultan Syarif Abdurrahman"],
  },
  "pontianak|Sultan Syarif Hamid": {
    tentang: ["Penguasa Pontianak pada pertengahan abad ke-19, ketika Belanda makin mengatur urusan kesultanan."],
    sorotan: ["Menjabat 1855–1872"],
  },
};
