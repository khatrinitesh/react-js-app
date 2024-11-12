import React from 'react';

const CenterImgComp = () => {
  return (
    <>
      <CenteredButton/>
    </>
  );
}

export default CenterImgComp;

const CenteredButton = () => {
    return (
      <div className="center-container">
        <button className="center-button">Click Me</button>
      </div>
    );
  };
  
