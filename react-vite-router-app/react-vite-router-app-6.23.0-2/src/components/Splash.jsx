import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate(); // Corrected variable name

  useEffect(() => {
    const splashDuration = 3000; // Duration of splash page in milliseconds

    // Hide the splash after the specified duration
    const timeout = setTimeout(() => {
      setVisible(false);

      // Redirect to the home page after hiding the splash
      const redirectTimeout = setTimeout(() => {
        navigate('/'); // Corrected function name
      }, 500); // Delay before redirecting (optional)
      
      // Clean up the redirect timeout to avoid memory leaks
      return () => clearTimeout(redirectTimeout);
    }, splashDuration);

    // Clean up the splash timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [navigate]);

  // Render the splash component conditionally based on its visibility
  return visible ? (
    <div className="splash-container">
      <h1>Splash Page</h1>
      {/* Add any content you want to display on the splash screen */}
    </div>
  ) : null;
};

export default Splash