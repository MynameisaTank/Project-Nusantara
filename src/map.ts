import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { KATEGORI } from "./data/era";
import { EVENTS } from "./data/events";
import { state } from "./state";
import type { SejarahEvent } from "./types";

const map = L.map("map", {
  zoomControl: false,
  minZoom: 4,
  maxZoom: 9,
  maxBounds: [[-18, 88], [14, 150]],
  maxBoundsViscosity: 0.7
});
L.control.zoom({ position: "bottomleft" }).addTo(map);
map.fitBounds([[-10.5, 95], [6, 141]]);

/* Peta dasar sementara: tile CARTO tanpa label (supaya tidak ada nama kota modern).
   Nanti bisa diganti GeoJSON sendiri untuk tampilan yang sepenuhnya khas. */
L.tileLayer("https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png", {
  subdomains: "abcd",
  maxZoom: 9,
  attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
}).addTo(map);

const layer = L.layerGroup().addTo(map);
const markers: Record<string, L.Marker> = {};

export function initMarkers(onSelect: (id: string) => void): void {
  for (const ev of EVENTS) {
    const k = KATEGORI[ev.kategori];
    const icon = L.divIcon({
      className: "pin",
      html: `<span class="pin-ic" style="border-color:${k.warna}">${k.ikon}</span>`,
      iconSize: [42, 42],
      iconAnchor: [21, 21]
    });
    const m = L.marker([ev.lokasi.lat, ev.lokasi.lng], {
      icon,
      title: `${ev.judul} (${ev.tahun})`,
      riseOnHover: true
    });
    m.on("click", () => onSelect(ev.id));
    markers[ev.id] = m;
  }
  window.addEventListener("load", () => map.invalidateSize());
}

function decorate(m: L.Marker, ev: SejarahEvent, year: number): void {
  const el = m.getElement();
  if (!el) return;
  const age = year - ev.mulai;
  el.classList.toggle("baru", age >= 0 && age <= 15);
  el.classList.toggle("selesai", !!state.done[ev.id]);
  el.classList.toggle("dipilih", state.selectedId === ev.id);
}

/** Tampilkan hanya penanda event aktif dan perbarui gayanya. */
export function syncMarkers(active: SejarahEvent[], year: number): void {
  const activeIds = new Set(active.map((e) => e.id));
  for (const ev of EVENTS) {
    const m = markers[ev.id];
    if (!m) continue;
    if (activeIds.has(ev.id)) {
      if (!layer.hasLayer(m)) layer.addLayer(m);
      decorate(m, ev, year);
    } else if (layer.hasLayer(m)) {
      layer.removeLayer(m);
    }
  }
}

/** Geser peta supaya penanda tidak tertutup panel. */
export function focusOn(ev: SejarahEvent): void {
  const z = Math.max(map.getZoom(), 6);
  const wide = window.innerWidth > 800;
  const offset = L.point(wide ? 195 : 0, wide ? 0 : window.innerHeight * 0.18);
  const target = map.project([ev.lokasi.lat, ev.lokasi.lng], z).add(offset);
  map.flyTo(map.unproject(target, z), z, { duration: 0.8 });
}
