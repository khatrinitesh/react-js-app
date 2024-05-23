import React from 'react'

const VerticalLineApp = () => {
    
  return (
    <>
      <p>Some content before the vertical line</p>
      <VerticalLine />
      <p>Some content after the vertical line</p>
    </>
  )
}

export default VerticalLineApp

const VerticalLine = () => {
    const lineStyle = {
      borderLeft: '1px solid #000', // Change the color or width as needed
      height: '100px', // Adjust the height as needed
      margin: '0 20px', // Optional margin
    };
  
    return (
      <div style={lineStyle}></div>
    );
  };
