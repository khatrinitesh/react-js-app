import React, { useState, useEffect } from 'react';
import './style.css';

const SnackbarApp = () => {

    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleSnackbar = () => {
      // Show the snackbar
      setShowSnackbar(true);
  
      // After 3 seconds, hide the snackbar
      setTimeout(() => {
        setShowSnackbar(false);
      }, 3000);
    };
  return (
    <div>
      <button onClick={handleSnackbar}>Show Snackbar</button>
      <div id="snackbar" className={showSnackbar ? 'show' : ''}>
        {/* Snackbar content goes here */}
        Snackbar Content...
      </div>
    </div>
  )
}

export default SnackbarApp
