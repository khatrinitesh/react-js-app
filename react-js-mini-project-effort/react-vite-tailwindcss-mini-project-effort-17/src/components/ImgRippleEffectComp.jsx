import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ImgRippleEffectComp = () => {
  return (
    <>
      <RippleButton/>
    </>
  );
}

export default ImgRippleEffectComp;

const RippleWrapper = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 8px; /* Rounded corners */
  background-color: #6200ea; /* Background color */
  padding: 10px 20px;
  cursor: pointer;
`;

const RippleEffect = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  transform: scale(0);
  pointer-events: none;
`;

const RippleButton = () => {
    const [ripples, setRipples] = useState([]);
  
    const handleClick = (e) => {
      const button = e.target.getBoundingClientRect();
      const size = Math.max(button.width, button.height);
      const x = e.clientX - button.left - size / 2;
      const y = e.clientY - button.top - size / 2;
  
      const newRipple = {
        x,
        y,
        size,
      };
  
      setRipples([...ripples, newRipple]);
  
      // Remove ripple after animation duration
      setTimeout(() => {
        setRipples((prevRipples) => prevRipples.slice(1));
      }, 600);
    };
  
    return (
      <RippleWrapper onClick={handleClick}>
        {ripples.map((ripple, index) => (
          <RippleEffect
            key={index}
            style={{
              width: ripple.size,
              height: ripple.size,
              top: ripple.y,
              left: ripple.x,
            }}
            initial={{ scale: 0 }}
            animate={{ scale: 4, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "ease-out",
            }}
          />
        ))}
        Click Me
      </RippleWrapper>
    );
  };
