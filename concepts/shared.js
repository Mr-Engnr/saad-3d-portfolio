// Tiny reveal script for the concepts: adds .is-in once an element enters.
// Without it (or under reduced motion) everything is simply visible.
(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window)) return;
  document.documentElement.classList.add("js");
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
  );
  document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));

  // Optional scroll progress for elements that opt in with [data-scrub]:
  // sets --p from 0 (entering) to 1 (centred). Transform-only consumers.
  const scrubs = [...document.querySelectorAll("[data-scrub]")];
  if (!scrubs.length) return;
  let frame = 0;
  const update = () => {
    frame = 0;
    const vh = window.innerHeight;
    for (const el of scrubs) {
      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.85)));
      el.style.setProperty("--p", p.toFixed(3));
    }
  };
  addEventListener("scroll", () => (frame ||= requestAnimationFrame(update)), {
    passive: true,
  });
  addEventListener("resize", update);
  update();
})();
