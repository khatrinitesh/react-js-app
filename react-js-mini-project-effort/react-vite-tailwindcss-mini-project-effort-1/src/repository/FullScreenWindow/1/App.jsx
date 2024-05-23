import React, { useState } from 'react';
import './style.css';

const FullScreenWindowApp = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const toggleFullScreen = () => {
        if (!isFullScreen) {
          // Enter fullscreen mode
          if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
          } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
          } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
            document.documentElement.webkitRequestFullscreen();
          } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
          }
        } else {
          // Exit fullscreen mode
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
          } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
          } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
          }
        }
    
        setIsFullScreen(!isFullScreen);
      };
  return (
    <>
     <div className={`fullscreen-container ${isFullScreen ? 'fullscreen' : ''}`}>
      <button onClick={toggleFullScreen}>
        {isFullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </button>
      <div>
        {/* Your content goes here */}
        <h1>Your Fullscreen Content</h1>
      </div>
    </div> 
    </>
  )
}

export default FullScreenWindowApp
