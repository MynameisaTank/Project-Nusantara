import { useState } from "react";
import "./AccordionGallery.css";

export interface GalleryItem {
  image: string;
  label: string;
  alt?: string;
  description?: string;
  available?: boolean;
}

interface Props {
  items: GalleryItem[];
  defaultIndex?: number;
  onSelect?: (index: number) => void;
}

export default function AccordionGallery({
  items,
  defaultIndex = 0,
  onSelect,
}: Props) {
  const [active, setActive] = useState(defaultIndex);

  const selectItem = (index: number) => {
    setActive(index);
    onSelect?.(index);
  };

  return (
    <div className="accordion-gallery" role="group" aria-label="Galeri pilihan era">
      {items.map((item, index) => {
        const available = item.available !== false;
        return (
          <button
            type="button"
            key={item.label}
            className={`ag-panel ${active === index ? "ag-panel--active" : ""}`}
            onClick={() => selectItem(index)}
            onKeyDown={(event) => {
              if (available && (event.key === "Enter" || event.key === " ")) {
                event.preventDefault();
                selectItem(index);
              }
            }}
            aria-label={`${item.label}${available ? ", buka era" : ", segera hadir"}`}
            aria-disabled={!available}
            aria-pressed={active === index}
            style={{
              backgroundImage: `linear-gradient(0deg,#050606f0,#050606a8 34%,#05060626 72%),url("${item.image}")`,
            }}
          >
            <span className="ag-panel__number">0{index + 1}</span>
            <span className="ag-panel__label">
              {!available && <small>SEGERA HADIR</small>}
              <strong>{item.label}</strong>
              <span>{item.description}</span>
              {active === index && available && <b>BUKA ERA ↗</b>}
            </span>
          </button>
        );
      })}
    </div>
  );
}
