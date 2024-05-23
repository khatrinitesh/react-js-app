import React from 'react'

const ChangeBulletColorOfListsApp = () => {
  return (
    <>
     <MyList/> 
    </>
  )
}

export default ChangeBulletColorOfListsApp

const MyList = () => {
    const listStyle = {
      listStyleType: 'none', // Remove default bullet style
      paddingLeft: '20px',   // Add some padding for the custom bullets
    };
  
    const listItemStyle = {
      position: 'relative',
      paddingLeft: '30px',    // Adjust the padding for the bullet
    };
  
    const bulletStyle = {
      content: '""',
      position: 'absolute',
      left: '10px',           // Adjust the position of the bullet
      top: '50%',             // Center the bullet vertically
      transform: 'translateY(-50%)',
      width: '10px',
      height: '10px',
      backgroundColor: 'red', // Change the color of the bullet
      borderRadius: '50%',
      display: 'inline-block',
    };
  
    return (
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <span style={bulletStyle}></span> Item 1
        </li>
        <li style={listItemStyle}>
          <span style={bulletStyle}></span> Item 2
        </li>
        <li style={listItemStyle}>
          <span style={bulletStyle}></span> Item 3
        </li>
      </ul>
    );
  };
