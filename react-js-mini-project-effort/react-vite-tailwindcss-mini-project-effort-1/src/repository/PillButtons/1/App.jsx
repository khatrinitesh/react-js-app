import React from 'react'

const PillBtnApp = () => {
    const handleClick = () => {
        console.log('Button clicked!');
      };
  return (
    <>
       <button label="Click me" onClick={handleClick}>Click</button>
    </>
  )
}

export default PillBtnApp
