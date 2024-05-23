import React from 'react';

const RoundBtnApp = () => {
    const handleClick = () => {
        console.log('Button clicked!');
      };
  return (
    <div>
      <RoundButton label='click' onClick={handleClick}/>
    </div>
  )
}

export default RoundBtnApp

const RoundButton = ({ label, onClick }) => {
    return (
      <button className="round-button" onClick={onClick}>
        {label}
      </button>
    );
  };
