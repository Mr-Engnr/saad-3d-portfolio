import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { initializeNavigation } from "./navigation";
function DevelopmentApp() {
  useEffect(initializeNavigation, []);
  return <App />;
}
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DevelopmentApp />
  </React.StrictMode>,
);
