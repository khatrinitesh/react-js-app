import React, { useState } from 'react';
import './style.css';

const StarRatingApp = () => {
  return (
    <>
      <StarRating/>
    </>
  )
}

export default StarRatingApp

const StarRating = () => {
    const [rating, setRating] = useState(0);
  
    const handleStarClick = (clickedRating) => {
      setRating(clickedRating);
    };
  
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <span
            key={i}
            className={`star ${i <= rating ? 'filled' : ''}`}
            onClick={() => handleStarClick(i)}
          >
            &#9733;
          </span>
        );
      }
      return stars;
    };
  
    return (
      <div>
        <h2>Star Rating</h2>
        <div className="star-rating">{renderStars()}</div>
        <p>Selected rating: {rating}</p>
      </div>
    );
  };
