import FlexCarousel, { type FlexCarouselItem } from "./reactbits/FlexCarousel";
import { useState } from "react";
import AeroShards from "./reactbits/AeroShards";
import "../styles/menu-aero.css";
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

export function MainMenu({onStart,onChooseEra}:Props){const [shardsOk, setShardsOk] = useState(true); return <main className="landing-screen landing-screen--centered landing-scroll-page"><div className="landing-grain" aria-hidden="true"/><header className="landing-nav landing-nav--center"><div className="landing-brand-mark">N</div><span className="landing-nav-note">SEJARAH · PILIHAN · AKIBAT</span></header>
    <section className="menu-aero">
      <div className="menu-aero-bg" aria-hidden="true">
        {shardsOk && (
          <AeroShards
            shardColor="#8f6a3a"
            accentColor="#d8b78c"
            placement="full"
            material="glass"
            markers="plus"
            count={1100}
            depthOfField={0.75}
            glow={0.3}
            vignette={0.35}
            dpr={1.5}
            mouseInteraction
            pulseOnClick
            holdToGather
            onError={() => setShardsOk(false)}
          />
        )}
      </div>
      <div className="menu-aero-content">
        <h1 className="menu-aero-title">NUSANTARA</h1>
        <h2>Jelajahi <em>lintas zaman.</em></h2>
        <div className="landing-actions landing-actions--center"><button className="jelly-button jelly-button--primary" onClick={onStart}>Click to start <span>↗</span></button><button className="jelly-button" onClick={onChooseEra}>Pilih era <span>⌁</span></button></div>
      </div>
      <a className="menu-aero-hint" href="#jejak">Gulir untuk membuka perjalanan ↓</a>
    </section><section id="jejak" className="landing-below-fold landing-history-section"><div className="landing-history-heading"><div className="landing-below-copy"><p className="landing-eyebrow"><span/> ATLAS SEJARAH INTERAKTIF</p><h2>Jejak panjang <em>Nusantara.</em></h2><p>Dari kerajaan maritim dan pusat perdagangan hingga lahirnya republik. Geser galeri untuk melintasi zaman, lalu pilih era untuk memainkan kembali keputusan-keputusan yang membentuk sejarah.</p></div><button className="jelly-button jelly-button--primary" onClick={onChooseEra}>Pilih era <span>↗</span></button></div><FlexCarousel items={historicalItems} intro="rise" cardHeight={0.72} gap={18} radius={3} squeeze={0.18} focusOnClick captions /></section><footer className="landing-footer"><span>SEJARAH NUSANTARA, DILIHAT DARI BANYAK ARAH</span><span>GULIR WAKTU · BUKA PERISTIWA · AMBIL KEPUTUSAN</span></footer></main>}
