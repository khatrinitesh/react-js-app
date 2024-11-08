import React, { useState } from "react";
import { motion } from "framer-motion";
import "./custom.css";

const carouselItems = [
    {
      image: 'https://via.placeholder.com/600x400/ff7f7f/333333?text=Slide+1',
      title: 'Slide 1',
    },
    {
      image: 'https://via.placeholder.com/600x400/7fffd4/333333?text=Slide+2',
      title: 'Slide 2',
    },
    {
      image: 'https://via.placeholder.com/600x400/ffb6c1/333333?text=Slide+3',
      title: 'Slide 3',
    },
  ];

const CustomApp = () => {
  return (
    <>
      <Carousel items={carouselItems} />
    </>
  );
};

export default CustomApp;

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <>
      <div className="carousel-container">
        {/* Previous Button */}
        <button className="carousel-btn prev" onClick={handlePrev}>
          &lt;
        </button>

        {/* Carousel Items */}
        <motion.div
          className="carousel-slider"
          key={currentIndex} // This key will trigger re-render on each slide change
          initial={{ x: "100%" }} // Start from the right side
          animate={{ x: 0 }} // Slide to the center
          exit={{ x: "-100%" }} // Exit to the left side when transitioning
          transition={{ type: "spring", stiffness: 300, damping: 30 }} // Smooth animation
        >
          <div className="carousel-item">
            <img
              src={items[currentIndex].image}
              alt={items[currentIndex].title}
            />
            <h3>{items[currentIndex].title}</h3>
          </div>
        </motion.div>

        {/* Next Button */}
        <button className="carousel-btn next" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </>
  );
};
