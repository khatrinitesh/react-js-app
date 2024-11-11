import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BrowserWindowComp = () => {
  return (
    <>
      <BrowserWindow/>
    </>
  );
}

export default BrowserWindowComp;

const BrowserWindow = () => {
    // State to control whether the window is opened or closed
    const [isOpen, setIsOpen] = useState(true);
  
    // Toggle the browser window state (open/close)
    const toggleWindow = () => {
      setIsOpen(prevState => !prevState);
    };
  
    return (
      <div className="browser-container">
        <motion.div
          className="browser-window"
          initial={{ width: 0, height: 0, opacity: 0 }} // Initial closed state
          animate={{
            width: isOpen ? '80vw' : 0, // Width expands when open, contracts when closed
            height: isOpen ? '60vh' : 0, // Height expands when open, contracts when closed
            opacity: isOpen ? 1 : 0, // Fade-in when opened, fade-out when closed
          }}
          transition={{
            duration: 0.6, // Duration of the animation
            ease: 'easeInOut', // Easing for smooth transition
          }}
          style={{
            background: 'lightgray', // Background color of the browser window
            borderRadius: '10px', // Rounded corners
            overflow: 'hidden', // Prevent overflow when resized
            position: 'relative', // Relative position for the window content
          }}
        >
          {/* Window Header (simulating browser title bar) */}
          <motion.div
            className="window-header"
            style={{
              background: '#444',
              color: '#fff',
              padding: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: '2px solid #333',
              cursor: 'pointer',
            }}
            onClick={toggleWindow} // Click to toggle window open/close
          >
            <div className="title">My Browser Window</div>
            <button style={{ background: 'red', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>
              {isOpen ? 'Close' : 'Open'}
            </button>
          </motion.div>
  
          {/* Window Content */}
          {isOpen && (
            <motion.div
              className="window-content"
              initial={{ opacity: 0 }} // Initial state for content (invisible at start)
              animate={{ opacity: 1 }} // Fade-in when content appears
              transition={{ delay: 0.2, duration: 0.5 }} // Delay for content fade-in
              style={{
                padding: '20px',
                background: '#f0f0f0',
                height: 'calc(100% - 50px)', // Adjust height considering header
                overflowY: 'auto',
              }}
            >
              <h3>Welcome to the Browser Window!</h3>
              <p>This is the content inside the browser window. You can add anything here, like text, images, or other components.</p>
              <p>
                Click the close button in the title bar to collapse the window, and click it again to reopen.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    );
  };
