// Progressive enhancement for [data-carousel] (see components/Carousel.jsx).
// Without this script the slides still scroll and snap; with it, the
// prev/next buttons, the "2 / 5" counter, and arrow keys work.
export function initializeCarousels() {
  const cleanups = [...document.querySelectorAll("[data-carousel]")].map(
    (carousel) => {
      const viewport = carousel.querySelector(".carousel-viewport");
      const slides = [...carousel.querySelectorAll(".carousel-slide")];
      const prev = carousel.querySelector("[data-carousel-prev]");
      const next = carousel.querySelector("[data-carousel-next]");
      const current = carousel.querySelector("[data-carousel-current]");
      if (!viewport || slides.length === 0) return () => {};

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );
      let index = 0;
      // Slide a button/key asked for while a smooth scroll is still running,
      // so quick repeated presses advance one slide each.
      let pending = null;
      let frame = 0;

      const update = () => {
        frame = 0;
        const width = viewport.clientWidth || 1;
        if (pending !== null) {
          if (Math.abs(viewport.scrollLeft - pending * width) > 2) return;
          pending = null;
        }
        index = Math.min(
          slides.length - 1,
          Math.max(0, Math.round(viewport.scrollLeft / width)),
        );
        render(index);
      };
      const render = (shown) => {
        current.textContent = String(shown + 1);
        prev.disabled = shown === 0;
        next.disabled = shown === slides.length - 1;
      };
      const go = (target) => {
        const clamped = Math.min(slides.length - 1, Math.max(0, target));
        pending = reduceMotion.matches ? null : clamped;
        index = clamped;
        render(clamped);
        viewport.scrollTo({
          left: clamped * viewport.clientWidth,
          behavior: reduceMotion.matches ? "auto" : "smooth",
        });
      };
      const onScroll = () => {
        if (!frame) frame = requestAnimationFrame(update);
      };
      // A swipe or wheel takes over from a button scroll; scrollend settles it.
      const releasePending = () => {
        pending = null;
        onScroll();
      };
      // A width change (resize, rotation) can leave the track between slides.
      const onResize = () => {
        pending = null;
        viewport.scrollTo({
          left: index * viewport.clientWidth,
          behavior: "auto",
        });
        onScroll();
      };
      const onPrev = () => go(index - 1);
      const onNext = () => go(index + 1);
      const onKey = (event) => {
        const moves = { ArrowLeft: -1, ArrowRight: 1 };
        if (event.key in moves) {
          event.preventDefault();
          go(index + moves[event.key]);
        } else if (event.key === "Home" || event.key === "End") {
          event.preventDefault();
          go(event.key === "Home" ? 0 : slides.length - 1);
        }
      };

      viewport.addEventListener("scroll", onScroll, { passive: true });
      viewport.addEventListener("scrollend", releasePending);
      viewport.addEventListener("pointerdown", releasePending);
      viewport.addEventListener("wheel", releasePending, { passive: true });
      window.addEventListener("resize", onResize);
      prev.addEventListener("click", onPrev);
      next.addEventListener("click", onNext);
      carousel.addEventListener("keydown", onKey);
      carousel.classList.add("is-ready");
      update();

      return () => {
        cancelAnimationFrame(frame);
        viewport.removeEventListener("scroll", onScroll);
        viewport.removeEventListener("scrollend", releasePending);
        viewport.removeEventListener("pointerdown", releasePending);
        viewport.removeEventListener("wheel", releasePending);
        window.removeEventListener("resize", onResize);
        prev.removeEventListener("click", onPrev);
        next.removeEventListener("click", onNext);
        carousel.removeEventListener("keydown", onKey);
        carousel.classList.remove("is-ready");
      };
    },
  );
  return () => cleanups.forEach((cleanup) => cleanup());
}
