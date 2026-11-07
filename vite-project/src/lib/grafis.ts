import { createContext, useContext } from "react";

/**
 * True pada tingkat grafik Ringan dan Dasar (lihat lib/perangkat.ts). Komponen dekoratif membacanya untuk mematikan
 * animasi dan efek yang mahal di ponsel lemah, tanpa harus meneruskan prop lewat banyak lapisan.
 */
export const GrafisHematContext = createContext(false);

export const useGrafisHemat = (): boolean => useContext(GrafisHematContext);
