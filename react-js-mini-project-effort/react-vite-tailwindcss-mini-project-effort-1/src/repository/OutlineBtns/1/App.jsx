import React from 'react'

const OutlineBtnsApp = () => {

    const buttonStyle = {
        backgroundColor: 'transparent',
        color: '#3498db', // Adjust the outline color
        border: '2px solid #3498db', // Adjust the outline color
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        margin: '5px',
        outline: 'none',
      };
  return (
    <>
       <button style={buttonStyle}>Outline Button</button>
    </>
  )
}

export default OutlineBtnsApp




