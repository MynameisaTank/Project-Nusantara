import AccordionGallery from "./reactbits/AccordionGallery";
import GradientASCII from "./reactbits/GradientASCII";

interface Props {
  onBack: () => void;
  onSelectEra: (id: string) => void;
}

const eras = [
  {
    id: "era-1",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Candi_Bajangratu_Majapahit_%2838451474292%29.jpg?width=1400",
    label: "Dari Majapahit ke Perdagangan Global",
    description: "1200—1617 M",
    available: true,
  },
  {
    id: "era-2",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/COLLECTIE_TROPENMUSEUM_Batavia_met_het_Kasteel_anno_1681_TMnr_5681-1.jpg?width=1400",
    label: "Perdagangan dan Kekuasaan Kolonial",
    description: "1600—1800 M · Peristiwa hingga 1700",
    available: true,
  },
  {
    id: "era-3",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Indonesia_declaration_of_independence_17_August_1945.jpg?width=1400",
    label: "Kolonialisme dan Zaman Modern",
    description: "1800—2000 M",
    available: false,
  },
];

export function EraSelect({ onBack, onSelectEra }: Props) {
  return (
    <main className="era-select-screen era-select-screen--tunnel">
      <div className="era-ascii-bg" aria-hidden="true">
        <GradientASCII
          shape="eclipse"
          colors={["#5a3d22", "#d8b78c", "#f4eddd"]}
          characters=" ░▒▓█"
          cellSize={15}
          density={0.8}
          glow={0.25}
          flow={0.4}
          speed={0.8}
          scrambleRadius={0.08}
        />
      </div>
      <div className="landing-grain" aria-hidden="true" />
      <header className="era-select-nav">
        <button type="button" className="back-link" onClick={onBack}>
          <span>←</span> Menu utama
        </button>
        <div className="landing-brand-copy">
          <strong>NUSANTARA</strong>
          <span>ATLAS SEJARAH INTERAKTIF</span>
        </div>
        <span className="era-nav-label">PILIH PERJALANAN</span>
      </header>
      <section className="era-select-content era-select-content--gallery">
        <div className="era-select-intro">
          <p className="landing-eyebrow"><span /> PILIH BABAK SEJARAH</p>
          <h1>Lintasi waktu.<br /><em>Pilih kisahmu.</em></h1>
        </div>
        <AccordionGallery
          items={eras}
          defaultIndex={0}
          onSelect={(index) => {
            const selectedEra = eras[index];
            if (selectedEra?.available) onSelectEra(selectedEra.id);
          }}
        />
        <p className="era-select-note">
          Peta kedua mencakup linimasa hingga 1800; rangkaian event dan keputusan yang tersedia saat ini sampai 1700.
        </p>
      </section>
    </main>
  );
}
