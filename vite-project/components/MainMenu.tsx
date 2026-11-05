import FlexCarousel, { type FlexCarouselItem } from "./reactbits/FlexCarousel";
interface Props { onStart: () => void; onChooseEra: () => void; }

const historicalItems: FlexCarouselItem[] = [
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Siddharta_Gautama_Borobudur.jpg', alt: 'Relief Candi Borobudur dari masa Wangsa Syailendra', title: 'Warisan Hindu-Buddha', subtitle: 'Abad ke-8 hingga ke-13' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Avalokite%C3%A7vara,_Malayu_Srivijaya_style.jpg', alt: 'Arca Avalokiteshvara bergaya Melayu dari masa Sriwijaya', title: 'Sriwijaya', subtitle: 'Jaringan maritim Sumatra' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Prajnaparamita_Java.jpg', alt: 'Arca Prajnaparamita dari Jawa masa Singhasari', title: 'Singhasari', subtitle: 'Jawa Timur · abad ke-13' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Majapahit,_Piggy_Bank.jpg', alt: 'Artefak terakota dari masa Majapahit', title: 'Majapahit', subtitle: 'Jawa Timur · abad ke-13–15' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Borobudur_ship.JPG', alt: 'Relief kapal pada Candi Borobudur', title: 'Jalur Rempah', subtitle: 'Perdagangan antarpulau dan samudra' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/COLLECTIE_TROPENMUSEUM_Batavia_met_het_Kasteel_anno_1681_TMnr_5681-1.jpg', alt: 'Peta Batavia dan kastil pada 1681', title: 'Kolonialisme', subtitle: 'Batavia · 1681' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indonesia_declaration_of_independence_17_August_1945.jpg', alt: 'Soekarno dan Mohammad Hatta membacakan Proklamasi Kemerdekaan', title: 'Proklamasi', subtitle: '17 Agustus 1945' },
  { src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Indonesian_flag_raised_17_August_1945.jpg', alt: 'Pengibaran bendera Merah Putih pada 17 Agustus 1945', title: 'Indonesia Merdeka', subtitle: 'Lahirnya sebuah republik' }
];

export function MainMenu({onStart,onChooseEra}:Props){return <main className="landing-screen landing-screen--centered landing-scroll-page"><header className="menu-hero-top">
      <span className="menu-wordmark">Nusantara Bersamaan</span>
      <span className="menu-top-note">Atlas sejarah interaktif</span>
    </header>
    <section className="menu-hero" aria-labelledby="menu-judul">
      <div className="menu-hero-copy">
        <h1 id="menu-judul">Ketika peristiwa-peristiwa sejarah bertemu dalam satu masa.</h1>
        <p className="menu-hero-desc">Kerajaan, pelabuhan, jalur rempah, dan keputusan yang membentuk sejarah kepulauan. Masuki peta interaktif dan temukan bagaimana setiap pilihan mengubah perjalanan.</p>
        <div className="menu-hero-actions">
          <button type="button" className="menu-btn" onClick={onStart}>Mulai menjelajah</button>
          <button type="button" className="menu-link" onClick={onChooseEra}>Pilih era</button>
        </div>
        <p className="menu-hero-era">Era pertama tersedia · <b>1200—1617 M</b></p>
      </div>
      <figure className="menu-hero-figure">
        <img src="/spiral/route-3.svg" alt="Ilustrasi jalur sejarah kepulauan Nusantara" />
        <figcaption>Jalur sejarah kepulauan Nusantara</figcaption>
      </figure>
      <a className="menu-scroll" href="#jejak">Jejak panjang Nusantara ↓</a>
    </section><section id="jejak" className="landing-below-fold landing-history-section"><div className="landing-history-heading"><div className="landing-below-copy"><p className="landing-eyebrow"><span/> ATLAS SEJARAH INTERAKTIF</p><h2>Jejak panjang <em>Nusantara.</em></h2><p>Dari kerajaan maritim dan pusat perdagangan hingga lahirnya republik. Geser galeri untuk melintasi zaman, lalu pilih era untuk memainkan kembali keputusan-keputusan yang membentuk sejarah.</p></div><button className="jelly-button jelly-button--primary" onClick={onChooseEra}>Pilih era <span>↗</span></button></div><FlexCarousel items={historicalItems} intro="rise" cardHeight={0.72} gap={18} radius={3} squeeze={0.18} focusOnClick captions /></section><footer className="landing-footer"><span>SEJARAH NUSANTARA, DILIHAT DARI BANYAK ARAH</span><span>GULIR WAKTU · BUKA PERISTIWA · AMBIL KEPUTUSAN</span></footer></main>}
