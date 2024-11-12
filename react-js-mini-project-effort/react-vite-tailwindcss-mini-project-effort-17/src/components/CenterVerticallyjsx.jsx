import React from 'react';

const CenteredVerticalComp = () => {
  return (
    <>
      <CenteredVertically/>
    </>
  );
}

export default CenteredVerticalComp;

const CenteredVertically = () => {
    return (
        <div className="grid-container">
        <div className="grid-content">
          <h1>Hello, I'm vertically centered using Grid!</h1>
        </div>
      </div>
    );
  };
  
