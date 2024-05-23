import React, { useState } from 'react';


const DisplayElementOnHoverApp = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
      };

      const handleMouseOut = () => {
        setIsHovered(false);
      };
  return (
    <>
      <div>
      <div
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'lightblue',
          position: 'relative',
        }}
      >
        Hover me
      </div>
      {isHovered && (
        <div style={{ position: 'absolute', top: '110px', left: '0', backgroundColor: 'pink' }}>
          Displayed on hover
        </div>
      )}
    </div>
    </>
  )
}

export default DisplayElementOnHoverApp
