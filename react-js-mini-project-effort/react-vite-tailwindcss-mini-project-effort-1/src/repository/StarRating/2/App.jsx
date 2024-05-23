import React, { useState } from 'react';

const CustomApp = () => {
    const handleRatingChange = (newRating) => {
        console.log(`Selected rating: ${newRating}`);
        // You can perform additional actions when the rating changes
      };

  return (
    <>
       <h1>Rate this product:</h1>
      <StarRating initialRating={0} onRatingChange={handleRatingChange} />  
    </>
  )
}

export default CustomApp

const StarRating = ({ initialRating, onRatingChange }) => {
    const [rating, setRating] = useState(initialRating || 0);
  
    const handleStarClick = (newRating) => {
      setRating(newRating);
      onRatingChange(newRating);
    };
  
    return (
      <div>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            onClick={() => handleStarClick(index + 1)}
            style={{ cursor: 'pointer', color: index < rating ? 'gold' : 'gray' }}
          >
            &#9733;
          </span>
        ))}
      </div>
    );
  };
