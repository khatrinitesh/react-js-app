import React from 'react'

const BlockBtnApp = () => {
    const handleClick = () => {
        console.log('Button clicked!');
      };
  return (
    <>
      <BlockButton label="Click me" onClick={handleClick}/>
    </>
  )
}

export default BlockBtnApp

const BlockButton = ({ label, onClick }) => {
    return (
      <button className="block-button" onClick={onClick}>
        {label}
      </button>
    );
  };
  
