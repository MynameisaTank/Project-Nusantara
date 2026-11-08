import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tailwind.css";
import "./styles/style.css";
import "./styles/noise-frames.css";
import App from "./App";
import "./styles/mobile.css";
import "./styles/ringan.css";
import { pasangPenangkapGalat } from "./lib/clientLog";
import { mulaiPwa } from "./lib/pwa";
import { pasangLayarPenuhOtomatis } from "./lib/layarPenuh";
import { mulaiSuara } from "./lib/suara";

pasangPenangkapGalat();
mulaiPwa();
pasangLayarPenuhOtomatis();
mulaiSuara();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
