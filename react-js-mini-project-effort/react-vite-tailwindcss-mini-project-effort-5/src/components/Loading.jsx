import React, { useState,useEffect } from 'react'

const Loading = () => {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false); // Set loading state to false after 2000ms (2 seconds)
        }, 2000);
    
        // Clean-up function to clear the timer if component unmounts before timeout
        return () => clearTimeout(timer);
      }, []);

      
  return (
    <div>
        {loading ? 'Loading...' : 'Loaded!'}
    </div>
  )
}

export default Loading