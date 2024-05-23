import React, { useState } from 'react';

const ZoomHoverApp = () => {
    const [isHovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!isHovered);
  };
  return (
    <>
       <div className={`zoom-container ${isHovered ? 'zoomed' : ''}`} onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <img src="https://wallpapers.com/images/featured/pattern-4u7ed6koskqhcez1.jpg" alt="Your Image" className="zoom-image" />
        </div>
    </>
  )
}

export default ZoomHoverApp
