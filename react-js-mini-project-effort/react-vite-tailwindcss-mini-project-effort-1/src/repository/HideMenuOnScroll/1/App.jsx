import React, { useState, useEffect } from 'react'

const HideMenuOnScroll = () => {
    const [isScrolled, setScrolled] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
  
        setScrolled(prevScrollPos < currentScrollPos && currentScrollPos > 100);
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);

  return (
    <>
    <div className={`navbar ${isScrolled ? 'hidden' : ''}`}>
        <p>Your Navbar Content</p>
    </div>
    </>
  )
}

export default HideMenuOnScroll
