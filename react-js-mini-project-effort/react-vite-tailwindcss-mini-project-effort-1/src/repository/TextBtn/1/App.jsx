import React from 'react'

const TextBtnApp = () => {
    const handleClick = () => {
        console.log('Button clicked!');
      };
  return (
    <>
      <TextButton label="Click me" onClick={handleClick}/>
    </>
  )
}

export default TextBtnApp

const TextButton = ({ label, onClick }) => {
    return (
      <button className="text-button" onClick={onClick}>
        {label}
      </button>
    );
  };
