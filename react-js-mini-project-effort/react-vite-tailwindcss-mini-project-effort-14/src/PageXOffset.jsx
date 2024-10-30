import React, { useEffect, useState } from 'react';

const PageXOffsetComp = () => {
    const [scrollX, setScrollX] = useState(0);

    const handleScroll = () => {
        setScrollX(window.pageXOffset);
      };

      useEffect(() => {
        // Set initial scroll position
        handleScroll();
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
    <>
    <div className="horizontalBlock">
       <h1>Scroll Position</h1>
       <p>Horizontal Scroll Position: {scrollX}px</p>
       </div>
    </>
  );
}

export default PageXOffsetComp;
