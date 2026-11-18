import { aiProducts, fxTradingAgent } from "../constants";
import { BrowserPreview, ExternalLink, SectionHeading } from "./Shared";
import Carousel from "./Carousel";

function FxCaseStudy({ system }) {
  return (
    <article className="fx-case" id={system.slug} aria-labelledby="fx-title">
      <div className="fx-case-head">
        <div className="fx-case-copy">
          <p className="eyebrow">
            <span>Case study</span> / {system.category}
          </p>
          <h3 id="fx-title">{system.name}</h3>
          <p className="fx-case-summary">{system.summary}</p>
        </div>
        <dl className="fx-case-facts">
          <div>
            <dt>Engagement</dt>
            <dd>{system.engagement}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{system.role}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>
              <ul className="tags" aria-label="Technologies">
                {system.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
      <div className="fx-case-pipeline">
        <h4 className="eyebrow" id="pipeline-title">
          How an order moves
        </h4>
        <ol className="pipeline" aria-labelledby="pipeline-title">
          {system.stages.map((stage, index) => (
            <li
              key={stage.name}
              className={
                stage.gate ? "pipeline-stage pipeline-gate" : "pipeline-stage"
              }
            >
              <span className="pipeline-step" aria-hidden="true">
                {index + 1}
              </span>
              <span className="pipeline-name">
                {stage.name}
                {stage.gate && <span className="status-badge">Gate</span>}
              </span>
              <span className="pipeline-detail">{stage.detail}</span>
            </li>
          ))}
        </ol>
        <p className="pipeline-note">{system.safetyNote}</p>
      </div>
    </article>
  );
}

const FEATURE_MEDIA_SIZES =
  "(max-width: 767px) calc(100vw - 42px), (max-width: 1023px) calc(100vw - 58px), 668px";

function ProductMedia({ product }) {
  if (product.gallery?.length) {
    return (
      <Carousel
        slides={product.gallery}
        label={`${product.name} screenshots`}
        sizes={FEATURE_MEDIA_SIZES}
      />
    );
  }
  if (product.image && product.url) {
    return (
      <BrowserPreview
        project={{ ...product, slug: product.image }}
        sizes={FEATURE_MEDIA_SIZES}
      />
    );
  }
  return null;
}

// A product without screenshots: a typographic sheet with the same weight as
// the FX case study. Title + one-line value | contribution, stack chips, link;
// then the highlights band. Only fields that exist are rendered (no
// placeholders): a product with only a description shows just its head.
function ProductSheet({ product }) {
  const headingId = `${product.slug}-title`;
  const hasFacts = product.contribution || product.stack?.length || product.url;
  return (
    <article className="product-sheet" aria-labelledby={headingId}>
      <div
        className={
          hasFacts ? "product-sheet-head" : "product-sheet-head is-single"
        }
      >
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3 id={headingId}>{product.name}</h3>
          <p className="product-sheet-value">{product.description}</p>
          {product.status && <p className="status-badge">{product.status}</p>}
        </div>
        {hasFacts && (
          <dl className="fx-case-facts product-sheet-facts">
            {product.contribution && (
              <div>
                <dt>My contribution</dt>
                <dd>{product.contribution}</dd>
              </div>
            )}
            {product.stack?.length > 0 && (
              <div>
                <dt>Stack</dt>
                <dd>
                  <ul className="tags stack-chips" aria-label="Technologies">
                    {product.stack.map((item) => (
                      <li key={item.name}>
                        {item.name}
                        {item.detail && <span> {item.detail}</span>}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
            {product.url && (
              <div>
                <dt className="visually-hidden">Live site</dt>
                <dd>
                  <ExternalLink
                    href={product.url}
                    label={`Visit Live Site: ${product.name}`}
                  >
                    Visit Live Site
                  </ExternalLink>
                </dd>
              </div>
            )}
          </dl>
        )}
      </div>
      {product.highlights?.length > 0 && (
        <div className="product-sheet-band">
          <h4 className="eyebrow" id={`${product.slug}-highlights`}>
            Highlights
          </h4>
          <ul
            className="product-sheet-highlights"
            aria-labelledby={`${product.slug}-highlights`}
          >
            {product.highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

function ProductCard({ product }) {
  const media = ProductMedia({ product });
  if (!media) return <ProductSheet product={product} />;
  const headingId = `${product.slug}-title`;
  return (
    <article
      className="product-card product-feature"
      aria-labelledby={headingId}
    >
      <div className="product-main">
        {media && <div className="product-media">{media}</div>}
        <div className="product-copy">
          <div className="product-title">
            <p className="eyebrow">{product.category}</p>
            <h3 id={headingId}>{product.name}</h3>
            {product.status && <p className="status-badge">{product.status}</p>}
          </div>
          <div className="product-body">
            <p className="product-description">{product.description}</p>
            {product.highlights?.length > 0 && (
              <ul className="product-highlights">
                {product.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            )}
            {product.contribution && (
              <p className="client-contribution">
                <span>My contribution</span>
                {product.contribution}
              </p>
            )}
            {product.stack?.length > 0 && (
              <div className="product-stack">
                <h4 className="eyebrow">Stack</h4>
                <ul>
                  {product.stack.map((item) => (
                    <li key={item.name}>
                      <span>{item.name}</span>
                      {item.detail && <> {item.detail}</>}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {product.tags?.length > 0 && (
              <ul className="tags" aria-label="Technologies">
                {product.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            )}
            {product.url && (
              <ExternalLink
                href={product.url}
                label={`Visit Live Site: ${product.name}`}
              >
                Visit Live Site
              </ExternalLink>
            )}
          </div>
        </div>
      </div>
      {product.pieces?.length > 0 && (
        <div className="product-pieces">
          <h4 className="eyebrow" id={`${product.slug}-pieces`}>
            What’s in it
          </h4>
          <ul aria-labelledby={`${product.slug}-pieces`}>
            {product.pieces.map((piece) => (
              <li key={piece.name}>
                <p className="piece-name">
                  {piece.name}
                  {piece.status && (
                    <span className="status-badge">{piece.status}</span>
                  )}
                </p>
                <div>
                  <p className="piece-detail">{piece.detail}</p>
                  {piece.stack && (
                    <p className="piece-stack">
                      <span>Stack</span>
                      {piece.stack}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default function AISystems() {
  const products = aiProducts.filter((product) => product.published);
  return (
    <section className="section" id="ai-systems" aria-labelledby="ai-title">
      <div className="container">
        <SectionHeading number="02" title="AI Systems" id="ai-title">
          AI agents and products I’ve built, including a trading system
          delivered for a paying client.
        </SectionHeading>
        <FxCaseStudy system={fxTradingAgent} />
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
