import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { initializeNavigation } from "./navigation";
import { initializeCarousels } from "./carousel";
import { initializeReveal } from "./reveal";
import { initializeZoom } from "./zoom";
function DevelopmentApp() {
  useEffect(initializeNavigation, []);
  useEffect(initializeCarousels, []);
  useEffect(initializeReveal, []);
  useEffect(initializeZoom, []);
  return <App />;
}
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DevelopmentApp />
  </React.StrictMode>,
);
