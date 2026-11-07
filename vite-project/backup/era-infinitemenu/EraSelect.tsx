import { useRef } from "react";
import GradientASCII from "./reactbits/GradientASCII";
import { SplitText } from "./SplitText";
import InfiniteMenu, { type InfiniteMenuHandle } from "./reactbits/InfiniteMenu";
import "../styles/era-carousel.css";

interface Props { onBack: () => void; onSelectEra: (id: string) => void; }

const eras = [
  { id: "era-1", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Candi_Bajangratu_Majapahit_%2838451474292%29.jpg/1920px-Candi_Bajangratu_Majapahit_%2838451474292%29.jpg", label: "Dari Majapahit ke Perdagangan Global", description: "1200—1617 M", available: true },
  { id: "era-2", image: "https://upload.wikimedia.org/wikipedia/commons/a/ae/COLLECTIE_TROPENMUSEUM_Batavia_met_het_Kasteel_anno_1681_TMnr_5681-1.jpg", label: "Perdagangan dan Kekuasaan Kolonial", description: "1600—1800 M", available: true },
  { id: "era-3", image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Indonesia_declaration_of_independence_17_August_1945.jpg/1920px-Indonesia_declaration_of_independence_17_August_1945.jpg", label: "Kolonialisme dan Zaman Modern", description: "1800—2000 M", available: false }
] as const;

const MENU_SOURCES = [
  { eraIndex: 0, image: eras[0].image },
  { eraIndex: 1, image: eras[1].image },
  { eraIndex: 2, image: eras[2].image },
  { eraIndex: 0, image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Prajnaparamita_Java.jpg" },
  { eraIndex: 0, image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Wringin_Lawang%2C_Trowulan.jpg" },
  { eraIndex: 2, image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Indonesian_flag_raised_17_August_1945.jpg" }
] as const;

const MENU_ITEMS = MENU_SOURCES.map(source => ({
  image: source.image,
  title: eras[source.eraIndex].label,
  description: eras[source.eraIndex].description
}));

export function EraSelect({ onBack, onSelectEra }: Props) {
  const menuRef = useRef<InfiniteMenuHandle>(null);

  return (
    <main className="era-select-screen era-select-screen--tunnel">
      <div className="era-ascii-bg" aria-hidden="true">
        <GradientASCII shape="rise"colors={["#5a3d22", "#d8b78c", "#f4eddd"]} characters=" ░▒▓█" cellSize={15} density={0.8} glow={0.25} flow={0.4} speed={0.8} scrambleRadius={0.08} />
      </div>
      <div className="landing-grain" aria-hidden="true" />
      <header className="era-select-nav">
        <button className="back-link" onClick={onBack}><span>←</span> Menu utama</button>
        <div className="landing-brand-copy"><strong><SplitText>NUSANTARA</SplitText></strong></div>
      </header>
      <section className="era-select-content era-select-content--gallery">
        <div className="era-carousel">
          <InfiniteMenu
            ref={menuRef}
            items={MENU_ITEMS}
            zoom={1.4}
            autoplay={0}
            grayscale
            dim={0.5}
            theme="dark"
            onItemClick={(_item, index) => {
              const source = MENU_SOURCES[index];
              const era = source ? eras[source.eraIndex] : undefined;
              if (era?.available) onSelectEra(era.id);
            }}
          />
          <button type="button" className="era-carousel__arrow era-carousel__arrow--left" aria-label="Era sebelumnya" onClick={() => menuRef.current?.step(-1)}>←</button>
          <button type="button" className="era-carousel__arrow era-carousel__arrow--right" aria-label="Era berikutnya" onClick={() => menuRef.current?.step(1)}>→</button>
        </div>
      </section>
    </main>
  );
}
