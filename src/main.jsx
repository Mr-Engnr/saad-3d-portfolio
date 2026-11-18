import "./index.css";
import { initializeNavigation } from "./navigation";
import { initializeCarousels } from "./carousel";
import { initializeReveal } from "./reveal";
import { initializeZoom } from "./zoom";
import { initializeHoverLoops } from "./hoverloop";

// React authors the page and renders it at build time. Production only needs
// small plain-DOM enhancements (menu, carousel, scroll reveal, screenshot
// zoom, hover loop); it does not download or hydrate React.
if (import.meta.env.DEV) {
  import("./development.jsx");
} else {
  initializeNavigation();
  initializeCarousels();
  initializeReveal();
  initializeZoom();
  initializeHoverLoops();
}
