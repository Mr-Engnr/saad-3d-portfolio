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
  document.addEventListener("click", closeOnLink);
  document.addEventListener("keydown", closeOnEscape);
  return () => {
    document.removeEventListener("click", closeOnLink);
    document.removeEventListener("keydown", closeOnEscape);
  };
}
