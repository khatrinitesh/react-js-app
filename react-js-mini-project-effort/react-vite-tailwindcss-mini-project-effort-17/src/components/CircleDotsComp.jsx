import React, { useState } from 'react';
import { steps } from './../constants/circledotsData';

const CircleDotsComp = () => {
  return (
    <>
     <CircleDots/> 
    </>
  );
}

export default CircleDotsComp;

const CircleDots = () => {
    const [activeStep, setActiveStep] = useState(0); // Active step (dot)

    // Handle dot click to change the active step
 const handleDotClick= (index) => {
    setActiveStep(index);
 }

    return(
        <>

<div className="circle-dots-container">
      <div className="dot-navigation">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`dot ${activeStep === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      {/* Display active step content */}
      <div className="step-content">
        <h2>{steps[activeStep]}</h2>
      </div>
    </div>
        </>
    )
}

