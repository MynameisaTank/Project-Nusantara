import { createContext, useContext } from "react";

/** True di tingkat Ringan dan Dasar, untuk mematikan animasi dekoratif. */
export const GrafisHematContext = createContext(false);

export const useGrafisHemat = (): boolean => useContext(GrafisHematContext);
