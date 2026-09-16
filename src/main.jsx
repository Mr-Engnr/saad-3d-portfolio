import "./index.css";
import { initializeNavigation } from "./navigation";

// React authors the page and renders it at build time. Production only needs
// the native menu enhancement; it does not download or hydrate React.
if (import.meta.env.DEV) {
  import("./development.jsx");
} else {
  initializeNavigation();
}
