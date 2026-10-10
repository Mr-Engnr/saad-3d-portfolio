import { reviews, reviewSummary } from "../constants";
import { site } from "../site";
import { Arrow } from "./Shared";

function Stars({ rating }) {
  return (
    <span className="stars" aria-label={`${rating} out of 5 stars`}>
      {"★★★★★".slice(0, rating)}
    </span>
  );
}
function ReviewCard({ review, hidden = false }) {
  return (
    <li className="review-card" aria-hidden={hidden || undefined}>
      <Stars rating={review.rating} />
      <blockquote>
        <p>{review.quote}</p>
      </blockquote>
      <footer>
        <span className="review-name">{review.name}</span>
        <span className="review-meta">
          {review.country} · {review.gig}
        </span>
      </footer>
    </li>
  );
}
export default function Testimonials() {
  return (
    <section
      className="section section-compact section-muted testimonials"
      id="reviews"
      aria-labelledby="reviews-title"
    >
      <div className="container testimonials-heading">
        <div>
          <p className="eyebrow">Client feedback</p>
          <h2 id="reviews-title">What clients say.</h2>
        </div>
        <p className="review-summary">
          {reviewSummary.average} average across {reviewSummary.count}{" "}
          {reviewSummary.platform} reviews.
          {site.fiverr && (
            <>
              {" "}
              <a
                className="text-link"
                href={site.fiverr}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View reviews on ${reviewSummary.platform} (opens in a new tab)`}
              >
                Verified on {reviewSummary.platform}
                <Arrow />
              </a>
            </>
          )}
        </p>
      </div>
      <div className="marquee" aria-label="Client reviews">
        <ul className="marquee-track">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
          {reviews.map((review, index) => (
            <ReviewCard key={`copy-${index}`} review={review} hidden />
          ))}
        </ul>
      </div>
    </section>
  );
}
