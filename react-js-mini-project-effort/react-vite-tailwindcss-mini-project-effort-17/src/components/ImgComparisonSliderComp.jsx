import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ImgComparisonSliderComp = () => {
  return (
    <>
       <h1>Image Comparison Slider</h1>
      <ImageComparisonSlider
        image1="https://via.placeholder.com/600x300/ff7b7b/000000?text=Before"
        image2="https://via.placeholder.com/600x300/7bff7b/000000?text=After"
      />
    </>
  );
}

export default ImgComparisonSliderComp;


// Styled Components for the Image Comparison Slider
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Slider = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  cursor: ew-resize;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const ImageComparisonSlider = ({ image1, image2 }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
  
    const handleMouseMove = (e) => {
      const containerWidth = e.target.getBoundingClientRect().width;
      const newPosition = ((e.clientX / containerWidth) * 100).toFixed(2);
      setSliderPosition(Math.min(Math.max(newPosition, 0), 100)); // Restrict between 0 and 100
    };
  
    return (
      <SliderContainer
        onMouseMove={handleMouseMove}
        onTouchMove={(e) => handleMouseMove(e.touches[0])}
      >
        <ImageWrapper>
          <Image src={image1} alt="Image 1" />
          <Image
            src={image2}
            alt="Image 2"
            style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, // Clip the second image based on slider position
            }}
          />
        </ImageWrapper>
        <Slider
          drag="x"
          dragConstraints={{ left: 0, right: "100%" }}
          dragElastic={0.2}
          style={{ x: `${sliderPosition}%` }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </SliderContainer>
    );
  };

