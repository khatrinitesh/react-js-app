import React, { useState } from 'react';

const UserRatingApp = () => {
  return (
    <>
      <UserRating/>
    </>
  )
}

export default UserRatingApp

const UserRating = () => {
    const [userRating, setUserRating] = useState(0);
  
    const handleStarClick = (clickedRating) => {
      setUserRating(clickedRating);
    };
  
    const renderStars = () => {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push(
          <span
            key={i}
            className={`star ${i <= userRating ? 'filled' : ''}`}
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
        <h2>User Rating</h2>
        <div className="user-rating">{renderStars()}</div>
        <p>Your rating: {userRating}</p>
      </div>
    );
  };
  
