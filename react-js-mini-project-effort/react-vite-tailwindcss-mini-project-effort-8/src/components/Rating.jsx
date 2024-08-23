import React, { useState } from 'react';
import { EMPTY_STAR_ICON, MAX_RATING, MIN_RATING, RATING_LABELS, STAR_ICON } from '../constants/constants';

const Rating = ({ initialRating = MIN_RATING }) => {
    const [rating, setRating] = useState(initialRating);

    const handleRatingChange = (newRating) => {
        if (newRating >= MIN_RATING && newRating <= MAX_RATING) {
          setRating(newRating);
        }
      };
  return (
    <>
      <div className='bg-purple-400 p-2 rounded-[5px]'>
        <h3 className='font-bold text-[20px]'>Rating</h3>
        {Array.from({ length: MAX_RATING }, (_, index) => {
          const currentRating = index + 1;
          return (
            <span
              key={currentRating}
              onClick={() => handleRatingChange(currentRating)}
              style={{ cursor: 'pointer', fontSize: '24px' }}
            >
              {rating >= currentRating ? STAR_ICON : EMPTY_STAR_ICON}
            </span>
          );
        })}
      </div>
      <p>{RATING_LABELS[Math.round(rating)]}</p>
    </>
  );
}

export default Rating;
