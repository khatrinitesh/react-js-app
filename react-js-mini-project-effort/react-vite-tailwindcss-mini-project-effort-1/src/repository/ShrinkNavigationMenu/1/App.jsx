import React, { useState, useEffect } from 'react';


const ShrinkNavigationMenu = () => {
    const [isShrunk, setShrunk] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        setShrunk(scrollY > 100);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <>
    <div className={`navbar ${isShrunk ? 'shrink' : ''}`}>
        <p>Your Navbar Content</p>
    </div>
    </>
  )
}

export default ShrinkNavigationMenu
