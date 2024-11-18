import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { slidesData } from './../constants/framercarouselData';

const FramerCarouselComp = () => {
  return (
    <>
      <Carousel/>
    </>
  );
}

export default FramerCarouselComp;

// Styled Components
const CarouselWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`;

const CarouselContainer = styled(motion.div)`
  display: flex;
  transition: transform 0.5s ease-in-out;
`;

const CarouselSlide = styled.div`
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f3f3;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 8px;
  text-align: center;
`;

const CarouselControl = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`;

const ControlButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    const goToPreviousSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    };
  
    return (
      <CarouselWrapper>
        <CarouselContainer
          initial={{ x: "-100%" }}
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {slidesData.map((slide) => (
            <CarouselSlide key={slide.id}>
              <div>
                <h2>{slide.content}</h2>
                {slide.icon}
              </div>
            </CarouselSlide>
          ))}
        </CarouselContainer>
  
        <CarouselControl>
          <ControlButton onClick={goToPreviousSlide}>
            <FaArrowLeft size={20} />
          </ControlButton>
          <ControlButton onClick={goToNextSlide}>
            <FaArrowRight size={20} />
          </ControlButton>
        </CarouselControl>
      </CarouselWrapper>
    );
  };
  