import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ImageBurstComp = () => {
  return (
    <>
      <ImageBurst/>
    </>
  );
}

export default ImageBurstComp;

// Styled Components
const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  display: inline-block;
`;

const BurstPiece = styled(motion.div)`
  position: absolute;
  width: 30%;
  height: 30%;
  top: 0;
  left: 0;
  background-image: url(${(props) => props.image});
  background-size: 300% 300%;
  background-position: ${(props) => props.position};
  background-repeat: no-repeat;
`;

const ImageBurst = () => {
    const [hovered, setHovered] = useState(false);
    const imageSrc = "https://via.placeholder.com/300"; // Replace with your image URL
  
    // Calculate positions for the burst pieces
    const positions = [
      { x: "0%", y: "0%" },
      { x: "100%", y: "0%" },
      { x: "200%", y: "0%" },
      { x: "0%", y: "100%" },
      { x: "100%", y: "100%" },
      { x: "200%", y: "100%" },
      { x: "0%", y: "200%" },
      { x: "100%", y: "200%" },
      { x: "200%", y: "200%" },
    ];
  
    // Animation variants
    const burstVariants = {
      initial: {
        opacity: 1,
        x: 0,
        y: 0,
      },
      burst: {
        opacity: 0.7,
        x: () => (Math.random() - 0.5) * 300,
        y: () => (Math.random() - 0.5) * 300,
        rotate: 180,
        scale: 0.5,
        transition: { duration: 0.5 },
      },
      return: {
        opacity: 1,
        x: 0,
        y: 0,
        rotate: 0,
        scale: 1,
        transition: { duration: 0.5 },
      },
    };
  
    return (
      <ImageContainer
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {positions.map((position, index) => (
          <BurstPiece
            key={index}
            image={imageSrc}
            position={`${position.x} ${position.y}`}
            variants={burstVariants}
            initial="initial"
            animate={hovered ? "burst" : "return"}
          />
        ))}
      </ImageContainer>
    );
  };

