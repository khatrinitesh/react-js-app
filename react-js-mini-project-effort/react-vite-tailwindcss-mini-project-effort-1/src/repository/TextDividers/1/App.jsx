import React from 'react'

const TextDividersApp = () => {
  return (
    <>
      <TextDividerExample/>
    </>
  )
}

export default TextDividersApp


const TextDividerExample = () => {
    const containerStyle = {
      display: 'flex',
      alignItems: 'center',
    };
  
    const dividerStyle = {
      flex: '1',
      borderBottom: '1px solid #ccc',
      margin: '0 10px',
    };
  
    return (
      <div style={containerStyle}>
        <span style={dividerStyle}></span>
        <p>Text Section 1</p>
        <span style={dividerStyle}></span>
        <p>Text Section 2</p>
        <span style={dividerStyle}></span>
        <p>Text Section 3</p>
        <span style={dividerStyle}></span>
        <p>Text Section 4</p>
        <span style={dividerStyle}></span>
        <p>Text Section 5</p>
        <span style={dividerStyle}></span>
        <p>Text Section 6</p>
        <span style={dividerStyle}></span>
      </div>
    );
  };