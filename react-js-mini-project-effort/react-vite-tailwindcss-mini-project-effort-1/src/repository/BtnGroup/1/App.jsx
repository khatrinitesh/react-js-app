import React, { useState } from 'react';

const BtnGrpApp = () => {
  return (
    <>
      <ButtonGroup/>
    </>
  )
}

export default BtnGrpApp

const ButtonGroup = () => {
    // State to track the selected button
    const [selectedButton, setSelectedButton] = useState(null);
  
    // Handler for button click
    const handleButtonClick = (button) => {
      setSelectedButton(button);
      // Add your custom logic here for button click
      console.log(`Button ${button} clicked!`);
    };
  
    return (
      <div>
        <button
          onClick={() => handleButtonClick('Button 1')}
          className={selectedButton === 'Button 1' ? 'selected' : ''}
        >
          Button 1
        </button>
        <button
          onClick={() => handleButtonClick('Button 2')}
          className={selectedButton === 'Button 2' ? 'selected' : ''}
        >
          Button 2
        </button>
        <button
          onClick={() => handleButtonClick('Button 3')}
          className={selectedButton === 'Button 3' ? 'selected' : ''}
        >
          Button 3
        </button>
      </div>
    );
  };
  