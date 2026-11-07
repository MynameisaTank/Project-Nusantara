import type { CurtainPhase, CurtainVariant } from "../hooks/useScreenTransition";
import { PixelCurtain } from "./PixelCurtain";
import "../styles/screen-curtain.css";

export function ScreenCurtain({ phase, variant = "default" }: { phase: CurtainPhase; variant?: CurtainVariant }) {
  return (
    <>
      <PixelCurtain phase={phase} active={variant === "pixel"} color="#050606" />
      {variant !== "pixel" && <div className={`screen-curtain is-${phase}`} aria-hidden="true" />}
    </>
  );
}
