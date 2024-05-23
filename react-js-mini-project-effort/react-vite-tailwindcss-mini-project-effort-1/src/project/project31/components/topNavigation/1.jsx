import React, { useState } from 'react';

export default function TopNavigation() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
      setIsOpen(!isOpen);
    };
  
    const navStyle = {
      display: isOpen ? 'block' : 'none',
      position: 'relative',
      top: '0',
      left: 0,
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#333',
      padding: '20px',
    };
  
    
  return (
    <>
     <nav className="top-nav">
      <div className="nav-toggle" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul style={navStyle} className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    </>
  )
}
