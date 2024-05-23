import React, { useState } from 'react';

const SlideshowApp = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
      };
  return (
    <>
     <div className="slideshow">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slide">
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div> 
    </>
  )
}

export default SlideshowApp
