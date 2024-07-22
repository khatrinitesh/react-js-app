import React, { useEffect, useState } from 'react'

const SplashLoading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate content loading for 2 seconds (adjust as needed)
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
    
        return () => clearTimeout(timer);
      }, []);

      if (loading) {
        return (
          <div className="splash-loading">
            <div className="spinner"></div>
          </div>
        );
      }
    
      return null; // Render nothing once loading is complete
}

export default SplashLoading