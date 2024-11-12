import React from 'react';

const CenterBtnDiv = () => {
  return (
    <>
      <CenteredButton/>
    </>
  );
}

export default CenterBtnDiv;

const CenteredButton = () => {
    return (
      <div className="center-container">
        <button className="center-button">Click Me</button>
      </div>
    );
  };
  
