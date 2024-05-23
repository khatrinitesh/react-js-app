import React, { useRef, useEffect, useState } from 'react';

const AspectRatioApp = () => {

    
  return (
    <>
       <AspectRatioContainer aspectRatio={16 / 9}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOMOiY6P2BHB1D7PkdUKlJ3rir4mJIplV3H8IyafPug&s" alt="Your Image" style={{ width: '100%', height: '100%' }} />
        </AspectRatioContainer>
    </>
  )
}

export default AspectRatioApp

const AspectRatioContainer = ({ aspectRatio, children }) => {
    const containerRef = useRef(null);
    const [containerHeight, setContainerHeight] = useState(0);
  
    useEffect(() => {
      const updateContainerHeight = () => {
        if (containerRef.current) {
          const newHeight = containerRef.current.offsetWidth / aspectRatio;
          setContainerHeight(newHeight);
        }
      };
  
      // Initial update
      updateContainerHeight();
  
      // Event listener for window resize
      window.addEventListener('resize', updateContainerHeight);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', updateContainerHeight);
      };
    }, [aspectRatio]);
  
    const containerStyle = {
      position: 'relative',
      width: '100%',
      height: `${containerHeight}px`,
    };
  
    const contentStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
    };
  
    return (
      <div ref={containerRef} style={containerStyle}>
        <div style={contentStyle}>
          {children}
        </div>
      </div>
    );
  };


