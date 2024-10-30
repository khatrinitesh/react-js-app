import React, { useEffect } from 'react';

const HandlEventsComp = () => {
    const handleResize = () => {
        console.log('Window resized to: ', window.innerWidth, 'x', window.innerHeight);
      };

      useEffect(() => {
        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
      },[])

  return (
    <div>
      <h1>Resize the Window</h1>
      <p>Open the console to see the window dimensions on resize.</p>
    </div>
  );
}

export default HandlEventsComp;
