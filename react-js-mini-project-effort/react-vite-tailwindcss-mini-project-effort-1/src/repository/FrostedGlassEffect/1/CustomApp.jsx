import React from 'react';
import './custom.css';

const CustomApp = () => {
  return (
    <>
     <FrostedGlassEffect/> 
    </>
  );
}

export default CustomApp;

const FrostedGlassEffect = () => {
    return (
      <div className="container">
        <div className="frosted-glass">
          <h2>Frosted Glass Effect</h2>
          <p>This is a frosted glass effect using React and CSS.</p>
        </div>
      </div>
    );
  };
