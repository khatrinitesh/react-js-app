import React, { useState, useEffect } from 'react';

const ResponsiveIframeApp = () => {
    const youtubeVideoSrc = 'https://www.youtube.com/watch?v=jR03XdT-CB0&ab_channel=REALCRICKET';
  return (
    <>
      <ResponsiveIframe src={youtubeVideoSrc} title="Your Video Title" aspectRatio={16 / 9} />
    </>
  )
}

export default ResponsiveIframeApp

const ResponsiveIframe = ({ src, title, aspectRatio }) => {
    const [containerStyle, setContainerStyle] = useState({});
  
    useEffect(() => {
      const updateContainerStyle = () => {
        const containerWidth = window.innerWidth;
        const containerHeight = containerWidth / aspectRatio;
        setContainerStyle({
          position: 'relative',
          width: '100%',
          height: `${containerHeight}px`,
          overflow: 'hidden',
        });
      };
  
      // Initial update
      updateContainerStyle();
  
      // Event listener for window resize
      window.addEventListener('resize', updateContainerStyle);
  
      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener('resize', updateContainerStyle);
      };
    }, [aspectRatio]);
  
    const iframeStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
    };
  
    return (
      <div style={containerStyle}>
        <iframe
          title={title}
          src={src}
          style={iframeStyle}
          allowFullScreen
          frameBorder="0"
        ></iframe>
      </div>
    );
  };
  
