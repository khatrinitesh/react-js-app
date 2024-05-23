import React, { useState } from 'react';

const ToggleHSApp = () => {
  return (
    <>
      <HideShowToggle/>
    </>
  )
}

export default ToggleHSApp

const HideShowToggle = () => {
    const [isContentVisible, setContentVisibility] = useState(true);
  
    const handleToggle = () => {
      setContentVisibility(!isContentVisible);
    };
  
    return (
      <div>
        <button onClick={handleToggle}>
          {isContentVisible ? 'Hide' : 'Show'} Content
        </button>
  
        {isContentVisible && (
          <div>
            {/* Content to be hidden or shown */}
            <p>This is the content you can hide or show.</p>
          </div>
        )}
      </div>
    );
  };
  
