import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tailwind.css";
import "./styles/style.css";
import "./styles/noise-frames.css";
import App from "./App";
import "./styles/mobile.css";
import { pasangPenangkapGalat } from "./lib/clientLog";
import { mulaiPwa } from "./lib/pwa";

pasangPenangkapGalat();
mulaiPwa();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
