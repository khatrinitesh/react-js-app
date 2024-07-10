import React from 'react'
import { FaArrowUp  } from "react-icons/fa";


const ScrollTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
  return (
    <>
    <a id="scrollUp" href="#top" style={{ position: 'fixed', zIndex: 999 }} onClick={scrollToTop}>
      <FaArrowUp />
    </a>
    </>
  )
}

export default ScrollTop