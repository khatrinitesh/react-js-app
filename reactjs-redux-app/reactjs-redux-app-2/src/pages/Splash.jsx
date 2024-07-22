import React, { useEffect, useState } from 'react'

const Splash = ({delay }) => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (loading) {
    return (
      <div className='fixed inset-0 h-screen w-full items-center justify-center flex flex-col' style={{backgroundColor:'rgba(50, 54, 253,.7)'}}>
        <div className="spinner"></div>
      </div>
    );
  }

  return null;
}

export default Splash