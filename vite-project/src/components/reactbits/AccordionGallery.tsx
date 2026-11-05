import { useState } from "react";
import "./AccordionGallery.css";
export interface GalleryItem { image: string; label: string; alt?: string; description?: string; available?: boolean; onSelect?: () => void; }
export default function AccordionGallery({items, defaultIndex=0, onSelect}:{items:GalleryItem[];defaultIndex?:number;onSelect?:(index:number)=>void}) {
 const [active,setActive]=useState(defaultIndex);
 return <div className="accordion-gallery" role="list" aria-label="Galeri pilihan era">{items.map((item,i)=><button type="button" key={item.label} role="listitem" className={`ag-panel ${active===i?'ag-panel--active':''}`} onMouseEnter={()=>setActive(i)} onFocus={()=>setActive(i)} onClick={()=>{setActive(i);onSelect?.(i);item.onSelect?.()}} aria-pressed={active===i} style={{backgroundImage:`linear-gradient(0deg,#050606f0,#050606a8 34%,#05060626 72%),url("${item.image}")`}}><span className="ag-panel__number">0{i+1}</span><span className="ag-panel__label">{item.available===false&&<small>SEGERA HADIR</small>}<strong>{item.label}</strong><span>{item.description}</span>{active===i&&item.available!==false&&<b>BUKA ERA ↗</b>}</span></button>)}</div>
}
