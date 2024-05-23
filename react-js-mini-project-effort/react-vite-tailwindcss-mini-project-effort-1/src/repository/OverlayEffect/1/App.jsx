import React, {  useState } from 'react';

import './style.css';

const OverlayEffectApp = () => {
  return (
    <>
      <OverlayExample/>
    </>
  )
}

export default OverlayEffectApp

const OverlayExample = () => {
    const [overlayVisible, setOverlayVisiable] = useState(false)

    const handleToggleOverlay = () => {
        setOverlayVisiable(!overlayVisible)
    }

    const btnClose = () => {
        setOverlayVisiable(false)
    }
    return(
        <>
        <button onClick={handleToggleOverlay}>Toggle overlay</button>
        {overlayVisible && (
            <div className="overlay" >
                <div className="overlay-content">
                <p>This is the overlay content.</p>
                <button onClick={handleToggleOverlay}>Close Overlay</button>
                </div>
          </div>
        )}
        </>
    )
}
