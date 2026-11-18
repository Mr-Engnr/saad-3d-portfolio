import { asset } from "../site";

function Chevron({ direction }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={direction === "prev" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

// Static markup. Swiping works through CSS scroll-snap alone; the buttons,
// counter, and arrow keys are wired by src/carousel.js, which adds `is-ready`.
// Images: public/images/<src>-{640,800,1280}.webp at 16:10.
export default function Carousel({ slides, label, sizes }) {
  return (
    <section
      className="carousel"
      aria-roledescription="carousel"
      aria-label={label}
      data-carousel
    >
      <div
        className="carousel-viewport"
        tabIndex={0}
        aria-label={`${label}. Use the arrow keys to move between screenshots.`}
      >
        <ul className="carousel-track">
          {slides.map((slide, index) => (
            <li
              className="carousel-slide"
              key={slide.src}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
            >
              <figure>
                <div className="carousel-frame">
                  <img
                    src={asset(`images/${slide.src}-1280.webp`)}
                    srcSet={`${asset(`images/${slide.src}-640.webp`)} 640w, ${asset(`images/${slide.src}-800.webp`)} 800w, ${asset(`images/${slide.src}-1280.webp`)} 1280w`}
                    sizes={sizes}
                    width="1280"
                    height="800"
                    alt={slide.alt}
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                  />
                </div>
                <figcaption>{slide.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </div>
      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-button"
          data-carousel-prev
          aria-label="Previous screenshot"
        >
          <Chevron direction="prev" />
        </button>
        <p className="carousel-counter" aria-live="polite" aria-atomic="true">
          <span className="visually-hidden">Screenshot </span>
          <span data-carousel-current>1</span> / {slides.length}
        </p>
        <button
          type="button"
          className="carousel-button"
          data-carousel-next
          aria-label="Next screenshot"
        >
          <Chevron direction="next" />
        </button>
      </div>
    </section>
  );
}
