import React, { useState } from 'react';
 
 const CircleMenuMobileComp = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the circle menu state
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    
   return (
     <>
        <div className="circle-menu-container">
      <div
        className={`circle-menu ${isOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="circle-menu-item" id="center-btn">
          <span>+</span>
        </div>
      </div>

      <div className={`circle-items ${isOpen ? 'open' : ''}`}>
        <div className="circle-menu-item">
          <span>📝</span>
          <p>Notes</p>
        </div>
        <div className="circle-menu-item">
          <span>📦</span>
          <p>Orders</p>
        </div>
        <div className="circle-menu-item">
          <span>📅</span>
          <p>Calendar</p>
        </div>
        <div className="circle-menu-item">
          <span>⚙️</span>
          <p>Settings</p>
        </div>
      </div>
    </div>
     </>
   );
 }
 
 export default CircleMenuMobileComp;
 