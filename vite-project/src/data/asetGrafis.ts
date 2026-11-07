/**
 * Gambar untuk menu utama dan unduhan awal (lihat lib/persiapan.ts).
 * Semua alamat adalah thumbnail resmi Wikimedia Commons yang diturunkan lewat API Commons dan diperiksa satu per satu,
 * bukan berkas asli yang bisa berukuran belasan megabyte. Berkas ini dibuat oleh skrip; jangan diedit manual.
 */

/** Galeri menu utama (thumbnail 960px), dipakai MainMenu.tsx. */
export const GALERI_MENU = {
  borobudur: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Siddharta_Gautama_Borobudur.jpg/960px-Siddharta_Gautama_Borobudur.jpg",
  sriwijaya: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Avalokite%C3%A7vara%2C_Malayu_Srivijaya_style.jpg/960px-Avalokite%C3%A7vara%2C_Malayu_Srivijaya_style.jpg",
  singhasari: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Prajnaparamita_Java.jpg/500px-Prajnaparamita_Java.jpg",
  majapahit: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Candi_Bajangratu_Majapahit_%2838451474292%29.jpg/960px-Candi_Bajangratu_Majapahit_%2838451474292%29.jpg",
  rempah: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Wringin_Lawang%2C_Trowulan.jpg/500px-Wringin_Lawang%2C_Trowulan.jpg",
  kolonial: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/COLLECTIE_TROPENMUSEUM_Batavia_met_het_Kasteel_anno_1681_TMnr_5681-1.jpg/500px-COLLECTIE_TROPENMUSEUM_Batavia_met_het_Kasteel_anno_1681_TMnr_5681-1.jpg",
  proklamasi: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Indonesia_declaration_of_independence_17_August_1945.jpg/960px-Indonesia_declaration_of_independence_17_August_1945.jpg",
  merdeka: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Indonesian_flag_raised_17_August_1945.jpg/960px-Indonesian_flag_raised_17_August_1945.jpg",
} as const;

export const GAMBAR_GALERI_MENU: string[] = Object.values(GALERI_MENU);

/** Latar menu (thumbnail 500px). Urutannya sudah diacak supaya MARQUEE_RINGAN gambar pertama tetap beragam. */
export const GAMBAR_MARQUEE: string[] = [
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Prajnaparamita_Java.jpg/500px-Prajnaparamita_Java.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f4/Lukisan_Iskandar_muda_Sultan_of_Aceh_from_1607_to1636.jpg/500px-Lukisan_Iskandar_muda_Sultan_of_Aceh_from_1607_to1636.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b7/AMH-2652-NA_Fort_Oranje_and_the_eastern_coast_of_Ternate.jpg/500px-AMH-2652-NA_Fort_Oranje_and_the_eastern_coast_of_Ternate.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Makam_Sultan_Baabullah.jpg/500px-Makam_Sultan_Baabullah.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/COLLECTIE_TROPENMUSEUM_Olieverfschilderij_voorstellende_het_Kasteel_Batavia_gezien_van_Kali_Besar_west_met_op_de_voorgrond_de_vismarkt_TMnr_118-167.jpg/500px-COLLECTIE_TROPENMUSEUM_Olieverfschilderij_voorstellende_het_Kasteel_Batavia_gezien_van_Kali_Besar_west_met_op_de_voorgrond_de_vismarkt_TMnr_118-167.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/A_Famosa_Fortress_Melaka_2.jpg/500px-A_Famosa_Fortress_Melaka_2.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/96/Monumen_9_November_1945_Banjarmasin_001.jpg/500px-Monumen_9_November_1945_Banjarmasin_001.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/COLLECTIE_TROPENMUSEUM_Batavia_met_het_Kasteel_anno_1681_TMnr_5681-1.jpg/500px-COLLECTIE_TROPENMUSEUM_Batavia_met_het_Kasteel_anno_1681_TMnr_5681-1.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/AMH-6165-NA_Bird%27s_eye_view_of_Bandanaira.jpg/500px-AMH-6165-NA_Bird%27s_eye_view_of_Bandanaira.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Candi_Tikus_%2834799972236%29.jpg/500px-Candi_Tikus_%2834799972236%29.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/TC_223_Majapahit_terracotta_head_of_Gajah_Mada.JPG/500px-TC_223_Majapahit_terracotta_head_of_Gajah_Mada.JPG",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Collectie_NMvWereldculturen%2C_TM-20028100%2C_Dia%2C_%27Buginese_prauwen_in_de_haven_Sunda_Kelapa%27%2C_fotograaf_Henk_van_Rinsum%2C_1980.jpg/500px-Collectie_NMvWereldculturen%2C_TM-20028100%2C_Dia%2C_%27Buginese_prauwen_in_de_haven_Sunda_Kelapa%27%2C_fotograaf_Henk_van_Rinsum%2C_1980.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/MUS_Koin_Kesultanan_Samudera_Pasai%3B_2.jpg/500px-MUS_Koin_Kesultanan_Samudera_Pasai%3B_2.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/Borobudur_ship.JPG/500px-Borobudur_ship.JPG",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Indonesian_flag_raised_17_August_1945.jpg/500px-Indonesian_flag_raised_17_August_1945.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a7/COLLECTIE_TROPENMUSEUM_Rivier_Kali_Mas_Surabaya_TMnr_10020881.jpg/500px-COLLECTIE_TROPENMUSEUM_Rivier_Kali_Mas_Surabaya_TMnr_10020881.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Avalokite%C3%A7vara%2C_Malayu_Srivijaya_style.jpg/500px-Avalokite%C3%A7vara%2C_Malayu_Srivijaya_style.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Indonesia_declaration_of_independence_17_August_1945.jpg/500px-Indonesia_declaration_of_independence_17_August_1945.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Benteng_Kastela_di_Kastela%2C_Ternate_7.jpg/500px-Benteng_Kastela_di_Kastela%2C_Ternate_7.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Kedaton_Kutai_Kartanegara_%282%29.jpg/500px-Kedaton_Kutai_Kartanegara_%282%29.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Makam_Pahlawan_Nasional_Sultan_Agung_Hanyokrokusumo_%26_Jend_TNI_GPH_Djatikusumo._Imogiri%2C_Bantul%2C_Yogyakarta.jpg/500px-Makam_Pahlawan_Nasional_Sultan_Agung_Hanyokrokusumo_%26_Jend_TNI_GPH_Djatikusumo._Imogiri%2C_Bantul%2C_Yogyakarta.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Istana_Pagaruyung_17.jpg/500px-Istana_Pagaruyung_17.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/25/Cannon_at_Fort_Marlborough%2C_Bengkulu_2015-04-19_04.jpg/500px-Cannon_at_Fort_Marlborough%2C_Bengkulu_2015-04-19_04.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a2/De_handelsloge_van_de_VOC_in_Hougly_in_Bengalen_Rijksmuseum_SK-A-4282.jpeg/500px-De_handelsloge_van_de_VOC_in_Hougly_in_Bengalen_Rijksmuseum_SK-A-4282.jpeg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Relief%2C_Candi_Jabung%2C_Paiton%2C_Probolinggo%2C_East_Java%2C_2017-09-14_02.jpg/500px-Relief%2C_Candi_Jabung%2C_Paiton%2C_Probolinggo%2C_East_Java%2C_2017-09-14_02.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Sultanah_Safiatuddin.jpg/500px-Sultanah_Safiatuddin.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Majapahit%2C_Piggy_Bank.jpg/500px-Majapahit%2C_Piggy_Bank.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Masjid_Agung_Demak_DiKab.Demak_Jateng_Indonesia.jpg/500px-Masjid_Agung_Demak_DiKab.Demak_Jateng_Indonesia.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Building_in_Keraton_Kasepuhan.jpg/500px-Building_in_Keraton_Kasepuhan.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Wringin_Lawang%2C_Trowulan.jpg/500px-Wringin_Lawang%2C_Trowulan.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Singhasari_Temple.jpg/500px-Singhasari_Temple.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1b/Masjid_Raya_Baiturrahman_di_Banda_Aceh.jpg/500px-Masjid_Raya_Baiturrahman_di_Banda_Aceh.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Candi_Bajangratu_Majapahit_%2838451474292%29.jpg/500px-Candi_Bajangratu_Majapahit_%2838451474292%29.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Siddharta_Gautama_Borobudur.jpg/500px-Siddharta_Gautama_Borobudur.jpg",
  "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Masjid_agung_banten_lama.jpg/500px-Masjid_agung_banten_lama.jpg",
];

/** Jumlah gambar latar di layar sempit (ponsel), supaya lebih ringan. */
export const MARQUEE_RINGAN = 20;
