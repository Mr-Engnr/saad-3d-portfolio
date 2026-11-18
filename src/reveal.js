// Scroll reveals: fade and rise (≈560–620ms, soft ease-out), once per element.
// Only elements that start below the first screen are hidden, so nothing in the
// first view ever flashes or waits. Off entirely under prefers-reduced-motion
// and when IntersectionObserver is missing; without this script everything is
// simply visible. The flagship device stage only rises (no fade), so it is
// never hidden even if the transition fails.
const FADE_TARGETS = [
  ".section-heading",
  ".launch-head",
  ".launch-details",
  ".fx-case",
  ".product-card",
  ".technical-card",
  ".additional-work",
  ".web-card",
  ".web-builds-cta",
  ".experience-row",
  ".review-summary",
  ".about-layout > *",
  ".contact-section > *",
];
const RISE_TARGETS = [".launch-stage", ".piece-map"];

export function initializeReveal() {
  const root = document.documentElement;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduce.matches || !("IntersectionObserver" in window)) return () => {};

  const fold = window.innerHeight;
  const below = (el) => el.getBoundingClientRect().top > fold * 0.92;
  const pick = (selectors, className) => {
    const query = selectors.join(",");
    const picked = [];
    // Document order puts parents before children, so the nesting check sees
    // classes added earlier in this loop.
    for (const el of document.querySelectorAll(query)) {
      if (!below(el)) continue;
      // Never nest reveals: a child of an already-revealed block moves with it.
      if (el.parentElement.closest(".reveal, .reveal-rise")) continue;
      // Stagger siblings that share a parent: 0, 70, 140… capped at 280ms.
      const siblings = [...el.parentElement.children].filter((child) =>
        child.matches(query),
      );
      const index = Math.min(siblings.indexOf(el), 4);
      el.style.setProperty("--reveal-delay", `${index * 70}ms`);
      el.classList.add(className);
      picked.push(el);
    }
    return picked;
  };

  const elements = [
    ...pick(FADE_TARGETS, "reveal"),
    ...pick(RISE_TARGETS, "reveal-rise"),
  ];
  if (!elements.length) return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
  );
  root.classList.add("reveal-ready");
  elements.forEach((el) => observer.observe(el));

  // Fast scrolls, scrollbar drags, the End key and hash jumps can skip past an
  // element without it ever intersecting. Anything at or above the viewport
  // is shown, so nothing the visitor has passed stays hidden.
  let pending = [...elements];
  let frame = 0;
  const settle = () => {
    frame = 0;
    pending = pending.filter((el) => {
      if (el.getBoundingClientRect().top >= window.innerHeight * 0.94) {
        return true;
      }
      el.classList.add("is-in");
      observer.unobserve(el);
      return false;
    });
    if (!pending.length) {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", settle);
    }
  };
  const onScroll = () => {
    if (!frame) frame = requestAnimationFrame(settle);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("hashchange", settle);

  return () => {
    observer.disconnect();
    cancelAnimationFrame(frame);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("hashchange", settle);
    root.classList.remove("reveal-ready");
    elements.forEach((el) => {
      el.classList.remove("reveal", "reveal-rise", "is-in");
      el.style.removeProperty("--reveal-delay");
    });
  };
}
