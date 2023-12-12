// Review.jsx
import React from 'react';

function Review({ review }) {
  return (
    <div className="review-item">
      <img src={review.avatar} alt={`${review.name}'s Avatar`} className="review-avatar" />
      <div className="review-details">
        <h3>{review.name}</h3>
        <p>{review.review}</p>
      </div>
    </div>
  );
}

export default Review;
