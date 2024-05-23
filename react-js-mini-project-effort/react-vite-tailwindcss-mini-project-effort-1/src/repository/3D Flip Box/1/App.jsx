import React,{useState } from 'react';
import './style.css';

const DFlipBoxApp = () => {

    const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <>
      <div className={`flip-box ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-box-inner">
        <div className="flip-box-front">
          <p>Front Content</p>
        </div>
        <div className="flip-box-back">
          <p>Back Content</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default DFlipBoxApp
