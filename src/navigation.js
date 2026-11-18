// Small progressive enhancement. The native disclosure works without JavaScript.
export function initializeNavigation() {
  const menu = document.querySelector(".mobile-navigation");
  if (!menu) return () => {};
  const closeOnLink = (event) => {
    if (event.target.closest("a")) menu.open = false;
  };
  const closeOnEscape = (event) => {
    if (event.key === "Escape" && menu.open) {
      menu.open = false;
      menu.querySelector("summary").focus();
    }
  };
  // Deep links into a collapsed <details> (e.g. #black-rock-electric) open it.
  const openTargetDetails = () => {
    const id = decodeURIComponent(location.hash.slice(1));
    const target = id ? document.getElementById(id) : null;
    const details =
      target?.querySelector("details") || target?.closest("details");
    if (details) details.open = true;
  };
  openTargetDetails();
  document.addEventListener("click", closeOnLink);
  document.addEventListener("keydown", closeOnEscape);
  window.addEventListener("hashchange", openTargetDetails);
  return () => {
    document.removeEventListener("click", closeOnLink);
    document.removeEventListener("keydown", closeOnEscape);
    window.removeEventListener("hashchange", openTargetDetails);
  };
}
