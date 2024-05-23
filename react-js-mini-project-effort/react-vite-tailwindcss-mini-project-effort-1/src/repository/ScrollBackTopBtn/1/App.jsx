import React, { useState, useEffect } from 'react';

const ScrollBackTopBtnApp = () => {
  return (
    <>
      <ScrollToTopButton/>
    </>
  )
}

export default ScrollBackTopBtnApp

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 100);
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <button
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        Back to Top
      </button>
    );
  };
