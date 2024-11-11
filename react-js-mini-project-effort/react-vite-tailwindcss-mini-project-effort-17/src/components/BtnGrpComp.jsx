import React, { useState, useRef } from 'react';
import { btngrpData } from '../constants/btngrpData';

const BtnGrpComp = () => {
  return (
    <>
      <BtnGroupComp/>
    </>
  );
}

export default BtnGrpComp;

const BtnGroupComp = () => {

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (id) => {
        setSelectedButton(id);
      };
   
  
    return (
        <>
             <div className="button-group grid gap-[20px]">
      {btngrpData.map((button) => (
        <button
          key={button.id}
          className={`btn ${selectedButton === button.id ? 'selected' : ''}`}
          onClick={() => handleButtonClick(button.id)}
        >
          {button.label}
        </button>
      ))}
    </div>
        </>
    );
  };
  
