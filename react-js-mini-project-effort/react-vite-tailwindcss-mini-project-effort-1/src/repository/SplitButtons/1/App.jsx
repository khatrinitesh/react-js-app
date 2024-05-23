import React, { useState } from 'react';

const SplitbtnsApp = () => {
  return (
    <>
      <SplitButtonsApp/>
    </>
  )
}

export default SplitbtnsApp

const SplitButtonsApp = () => {
    const [mainButtonClicked, setMainButtonClicked] = useState(false);
  
    const handleMainButtonClick = () => {
      setMainButtonClicked(!mainButtonClicked);
    };
  
    const handleOptionClick = (option) => {
      alert(`Option ${option} clicked`);
      setMainButtonClicked(false);
    };
  
    return (
      <div className="split-buttons-app">
        <button
          className={`main-button ${mainButtonClicked ? 'active' : ''}`}
          onClick={handleMainButtonClick}
        >
          Main Button
        </button>
        {mainButtonClicked && (
          <div className="options">
            <button onClick={() => handleOptionClick(1)}>Option 1</button>
            <button onClick={() => handleOptionClick(2)}>Option 2</button>
            <button onClick={() => handleOptionClick(3)}>Option 3</button>
          </div>
        )}
      </div>
    );
  };
