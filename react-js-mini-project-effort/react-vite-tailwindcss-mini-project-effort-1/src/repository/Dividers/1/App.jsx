import React from 'react'

const DividersApp = () => {
  return (
    <>
     <DividerExample/> 
    </>
  )
}

export default DividersApp


const DividerExample = () => {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    };
  
    const itemStyle = {
      borderRight: '1px solid #ccc',
      padding: '0 10px',
    };
  
    return (
      <div style={containerStyle}>
        <div style={itemStyle}>
          <p>Item 1</p>
        </div>
        <div style={itemStyle}>
          <p>Item 2</p>
        </div>
        <div style={itemStyle}>
          <p>Item 3</p>
        </div>
      </div>
    );
  };
