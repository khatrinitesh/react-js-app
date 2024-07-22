// LoadingComponent.jsx
import React from 'react';

const LoadingComponent = () => {
  return (
    <div style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}} className="loading  h-screen flex flex-col items-center justify-center">
      <span className="loader"></span>
    </div>
  );
};

export default LoadingComponent;
