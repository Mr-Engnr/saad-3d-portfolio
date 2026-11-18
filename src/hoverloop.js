// Hover loop for [data-hover-video] frames (the 8K AI Films card). Desktop
// pointers only, never under prefers-reduced-motion; the video file is not
// requested until the first hover, so phones never download it. Without this
// script the frame simply shows its screenshot.
export function initializeHoverLoops() {
  const frames = [...document.querySelectorAll("[data-hover-video]")];
  const desktop = window.matchMedia(
    "(hover: hover) and (pointer: fine) and (min-width: 1024px)",
  );
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!frames.length) return () => {};

  const cleanups = frames.map((frame) => {
    let video = null;
    const enter = () => {
      if (!desktop.matches || reduce.matches) return;
      if (!video) {
        video = document.createElement("video");
        video.className = "web-loop";
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.preload = "auto";
        video.setAttribute("aria-hidden", "true");
        video.tabIndex = -1;
        video.src = frame.dataset.hoverVideo;
        video.addEventListener("playing", () =>
          frame.classList.add("is-playing"),
        );
        frame.querySelector("a")?.append(video);
      }
      video.play().catch(() => {});
    };
    const leave = () => {
      frame.classList.remove("is-playing");
      video?.pause();
    };
    frame.addEventListener("mouseenter", enter);
    frame.addEventListener("mouseleave", leave);
    return () => {
      frame.removeEventListener("mouseenter", enter);
      frame.removeEventListener("mouseleave", leave);
      video?.remove();
    };
  });
  return () => cleanups.forEach((cleanup) => cleanup());
}
