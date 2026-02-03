import './CustomerReviewLandingPage.css';
import { FaStar } from 'react-icons/fa';

function CustomerReviewLandingPage() {
  const reviews = [
    {
      initials: "SJ",
      name: "Sarah Jim",
      service: "Plumbing Service",
      review: "Excellent service! The plumber arrived on time and fixed my leaking pipe quickly. Very professional and affordable.",
      rating: 5
    },
    {
      initials: "SJ",
      name: "Sarah Jim",
      service: "Plumbing Service",
      review: "Excellent service! The plumber arrived on time and fixed my leaking pipe quickly. Very professional and affordable.",
      rating: 5
    },
    {
      initials: "SJ",
      name: "Sarah Jim",
      service: "Plumbing Service",
      review: "Excellent service! The plumber arrived on time and fixed my leaking pipe quickly. Very professional and affordable.",
      rating: 5
    }
  ];

  return (
    <div className="customer-review">
      <div className="review-header">
        <h2>What Our Customers Say</h2>
      </div>

      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-profile">
              <div className="review-avatar">{review.initials}</div>
              <div className="review-info">
                <h4>{review.name}</h4>
                <p>{review.service}</p>
              </div>
            </div>
            <p className="review-text">{review.review}</p>
            <div className="review-stars">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CustomerReviewLandingPage;
