import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './style.css';

const SmoothScrollApp = () => {

    const scrollToTop = () => {
        scroll.scrollToTop({
          duration: 800,  // You can customize the scroll duration
          smooth: 'easeInOutQuart', // You can customize the easing function
        });
      };


  return (
    <>
     <div className="smooth-scroll-container">
      <nav>
        <Link to="section1" smooth={true} duration={800} offset={-50}>
          Section 1
        </Link>
        <Link to="section2" smooth={true} duration={800} offset={-50}>
          Section 2
        </Link>
        <Link to="section3" smooth={true} duration={800} offset={-50}>
          Section 3
        </Link>
        <Link to="section4" smooth={true} duration={800} offset={-50}>
          Section 4
        </Link>
      </nav>

      <div id="section1" className="section">
        Section 1 Content
      </div>
      <div id="section2" className="section">
        Section 2 Content
      </div>
      <div id="section3" className="section">
        Section 3 Content
      </div>
      <div id="section4" className="section">
        Section 4 Content
      </div>

      <button onClick={scrollToTop}>Scroll to Top</button>
    </div> 
    </>
  )
}

export default SmoothScrollApp
