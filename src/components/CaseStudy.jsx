import { blackRockCaseStudy as study } from "../constants";
import { asset } from "../site";
import { ExternalLink } from "./Shared";

// 01 / Flagship case study as a full-width "launch": a large title and one
// line, then the system itself as the control. The piece map is a native
// radio group (CSS :checked shows the matching screens), so it works in the
// static production build with no script. 3D rooms has no screens and is not
// selectable. Each screen links to its full-size image; src/zoom.js turns that
// link into an in-page lightbox when JavaScript runs.

const LAPTOP_SIZES =
  "(max-width: 767px) calc(100vw - 72px), (max-width: 1023px) calc(100vw - 120px), 780px";
const LAPTOP_PAIRED_SIZES =
  "(max-width: 767px) calc(70vw - 40px), (max-width: 1023px) 66vw, 600px";

function Screen({ screen, sizes, priority = false }) {
  const isPhone = screen.frame === "phone";
  const base = asset(`images/${screen.src}`);
  const full = isPhone ? `${base}-696.webp` : `${base}-1280.webp`;
  const image = isPhone ? (
    <img
      src={`${base}-348.webp`}
      srcSet={`${base}-348.webp 348w, ${base}-696.webp 696w`}
      sizes="(max-width: 767px) 26vw, 180px"
      width="348"
      height="756"
      alt={screen.alt}
      loading="lazy"
      decoding="async"
    />
  ) : (
    <img
      src={`${base}-800.webp`}
      srcSet={`${base}-640.webp 640w, ${base}-800.webp 800w, ${base}-1280.webp 1280w`}
      sizes={sizes}
      width="1280"
      height="800"
      alt={screen.alt}
      loading={priority ? "eager" : "lazy"}
      // React 18 passes the lowercase attribute through unchanged.
      fetchpriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
  return (
    <div className={isPhone ? "device device-phone" : "device device-laptop"}>
      <div className="device-screen">
        <a
          className="device-zoom"
          href={full}
          data-zoom
          aria-label={`Enlarge screenshot: ${screen.caption}`}
        >
          {image}
        </a>
      </div>
      {!isPhone && <div className="device-base" aria-hidden="true" />}
    </div>
  );
}

// Under the device: the piece's one-sentence detail, then its stack as
// chips. Only the selected piece's view is displayed, so only its stack shows.
function PieceInfo({ piece }) {
  return (
    <div className="view-info">
      <p className="view-detail">{piece.detail}</p>
      {piece.stack?.length > 0 && (
        <ul className="tags view-stack" aria-label={`${piece.name} stack`}>
          {piece.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

function PortalView({ piece }) {
  // Two screens with their own small switch (Schedule / Estimate).
  return (
    <div className="piece-view view-portal">
      {piece.screens.map((screen, index) => (
        <input
          key={screen.key}
          className="visually-hidden"
          type="radio"
          name="portal-screen"
          id={`screen-${screen.key}`}
          defaultChecked={index === 0}
          aria-label={`Show the ${screen.label.toLowerCase()} screen`}
        />
      ))}
      <div className="view-screens">
        {piece.screens.map((screen, index) => (
          <figure
            className={`view-screen screen-${screen.key}`}
            key={screen.key}
          >
            <Screen
              screen={screen}
              sizes={LAPTOP_SIZES}
              priority={index === 0}
            />
            <figcaption>{screen.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="screen-switch" aria-hidden="true">
        {piece.screens.map((screen) => (
          <label htmlFor={`screen-${screen.key}`} key={screen.key}>
            {screen.label}
          </label>
        ))}
      </div>
      <PieceInfo piece={piece} />
    </div>
  );
}

function PairedView({ piece }) {
  // Laptop and phone side by side (building monitoring).
  return (
    <div className={`piece-view view-${piece.key}`}>
      <figure className="view-pair">
        <div className="view-pair-devices">
          {piece.screens.map((screen) => (
            <Screen
              key={screen.key}
              screen={screen}
              sizes={LAPTOP_PAIRED_SIZES}
            />
          ))}
        </div>
        <figcaption>
          {piece.screens.map((screen) => screen.caption).join(" ")}
        </figcaption>
      </figure>
      <PieceInfo piece={piece} />
    </div>
  );
}

function SingleView({ piece }) {
  const [screen] = piece.screens;
  return (
    <div className={`piece-view view-${piece.key}`}>
      <figure className="view-screen">
        <Screen screen={screen} sizes={LAPTOP_SIZES} />
        <figcaption>{screen.caption}</figcaption>
      </figure>
      <PieceInfo piece={piece} />
    </div>
  );
}

function MapPiece({ piece }) {
  if (!piece.screens.length) {
    // Planned piece: shown in the map, never selectable.
    return (
      <div className="map-piece map-piece-planned">
        <span className="map-name">
          {piece.name}
          {piece.status && <span className="map-status">{piece.status}</span>}
        </span>
        <span className="map-line">{piece.line}</span>
      </div>
    );
  }
  return (
    <label className="map-piece" htmlFor={`piece-${piece.key}`}>
      <span className="map-name">{piece.name}</span>
      <span className="map-line">{piece.line}</span>
    </label>
  );
}

export default function CaseStudy() {
  const selectable = study.pieces.filter((piece) => piece.screens.length);
  const hosted = study.pieces.filter((piece) => piece.hosted);
  const others = study.pieces.filter((piece) => !piece.hosted);
  return (
    <section
      className="section launch"
      id={study.slug}
      aria-labelledby="case-title"
    >
      <header className="container launch-head" id="work">
        <p className="eyebrow">
          <span>01</span> / Flagship case study
        </p>
        <h2 id="case-title" className="launch-title">
          {study.name}
        </h2>
        <p className="launch-value">{study.summary}</p>
      </header>

      <div
        className="container launch-system"
        role="group"
        aria-labelledby="launch-system-label"
      >
        <p className="visually-hidden" id="launch-system-label">
          {study.name}: choose a piece of the system to see its screens
        </p>
        {selectable.map((piece, index) => (
          <input
            key={piece.key}
            className="visually-hidden"
            type="radio"
            name="launch-piece"
            id={`piece-${piece.key}`}
            defaultChecked={index === 0}
            aria-label={piece.name}
          />
        ))}

        <div className="piece-map">
          <div className="map-host">
            <p className="map-host-label">{study.hostingLabel}</p>
            <div className="map-host-items">
              {hosted.map((piece) => (
                <MapPiece piece={piece} key={piece.key} />
              ))}
            </div>
          </div>
          {others.map((piece) => (
            <MapPiece piece={piece} key={piece.key} />
          ))}
        </div>

        <div className="launch-stage">
          {selectable.map((piece) =>
            piece.key === "portal" ? (
              <PortalView piece={piece} key={piece.key} />
            ) : piece.screens.length > 1 ? (
              <PairedView piece={piece} key={piece.key} />
            ) : (
              <SingleView piece={piece} key={piece.key} />
            ),
          )}
        </div>
      </div>

      <div className="container launch-details">
        <dl className="launch-facts">
          <div>
            <dt>Role</dt>
            <dd>{study.role}</dd>
          </div>
          <div>
            <dt>Client</dt>
            <dd>An electrical contractor in Colorado.</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>
              <span className="status-badge">{study.status}</span>
            </dd>
          </div>
          <div className="launch-facts-link">
            <dt className="visually-hidden">Live site</dt>
            <dd>
              <ExternalLink
                href={study.url}
                label={`Visit the live website: ${study.name}`}
              >
                Visit the live website
              </ExternalLink>
            </dd>
          </div>
        </dl>

        <details className="case-details">
          <summary>
            <span className="label-closed">Read the full case study</span>
            <span className="label-open">Hide the case study</span>
            <svg
              className="case-chevron"
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
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div className="case-body">
            <section className="case-block" aria-labelledby="case-problem">
              <h3 id="case-problem">Problem</h3>
              <p className="case-lead">{study.problem}</p>
            </section>
            <section className="case-block" aria-labelledby="case-features">
              <h3 id="case-features">Key features</h3>
              <div className="case-features">
                {study.features.map((group) => (
                  <div key={group.group}>
                    <h4>{group.group}</h4>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
            <section className="case-block" aria-labelledby="case-hosting">
              <h3 id="case-hosting">Hosting</h3>
              <p className="case-lead">{study.hosting}</p>
            </section>
          </div>
        </details>
      </div>
    </section>
  );
}
