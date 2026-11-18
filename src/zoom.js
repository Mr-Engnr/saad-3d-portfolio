// Tap-to-enlarge for screenshots ([data-zoom] links). Without this script the
// link simply opens the full-size image. With it, the image opens in a native
// modal <dialog>: Escape, the close button, or a click outside closes it, and
// focus returns to the screenshot that opened it.
export function initializeZoom() {
  const links = [...document.querySelectorAll("a[data-zoom]")];
  if (!links.length || typeof HTMLDialogElement === "undefined") {
    return () => {};
  }

  const dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.setAttribute("aria-label", "Enlarged screenshot");
  dialog.innerHTML =
    '<button class="lightbox-close" type="button" aria-label="Close enlarged screenshot">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>' +
    "</button><img alt='' /><p></p>";
  document.body.append(dialog);
  const image = dialog.querySelector("img");
  const caption = dialog.querySelector("p");
  const close = dialog.querySelector("button");

  const onClick = (event) => {
    const link = event.target.closest("a[data-zoom]");
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();
    const thumb = link.querySelector("img");
    image.src = link.href;
    image.alt = thumb?.alt || "";
    caption.textContent =
      link.closest("figure")?.querySelector("figcaption")?.textContent || "";
    dialog.showModal();
    close.focus();
  };
  const onClose = () => dialog.close();
  const onBackdrop = (event) => {
    if (event.target === dialog) dialog.close();
  };

  document.addEventListener("click", onClick);
  close.addEventListener("click", onClose);
  dialog.addEventListener("click", onBackdrop);
  return () => {
    document.removeEventListener("click", onClick);
    close.removeEventListener("click", onClose);
    dialog.removeEventListener("click", onBackdrop);
    dialog.remove();
  };
}
