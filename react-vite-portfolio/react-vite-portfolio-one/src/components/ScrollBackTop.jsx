import React, { useState, useEffect } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the scroll-to-top button when the user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`fixed bottom-4 right-4 p-3 bg-primary text-white rounded-full ${isVisible ? 'visible' : 'invisible'}`}
      onClick={scrollToTop}
    >
      <FaAngleDoubleUp />
    </button>
  );
};

export default ScrollToTopButton;
