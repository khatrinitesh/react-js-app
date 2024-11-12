import React, { useState } from 'react';

const CalculatorComp = () => {
  return (
    <>
      <DynamicCard/>
    </>
  );
}

export default CalculatorComp;

const DynamicCard = ({ width, height, isHighlighted }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const calculateCardStyles = () => {
      return {
        width: width || '200px', // Use passed prop or fallback to default
        height: height || '300px',
        backgroundColor: isHovered ? 'lightblue' : isHighlighted ? 'yellow' : 'white',
        boxShadow: isHovered ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : 'none',
        transition: 'all 0.3s ease',
        padding: '10px',
        borderRadius: '8px',
        cursor: 'pointer',
      };
    };
  
    return (
      <div
        style={calculateCardStyles()}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3>{isHovered ? 'Hovered!' : 'Hover me'}</h3>
        <p>Width: {width || '200px'}, Height: {height || '300px'}</p>
      </div>
    );
  };
  


