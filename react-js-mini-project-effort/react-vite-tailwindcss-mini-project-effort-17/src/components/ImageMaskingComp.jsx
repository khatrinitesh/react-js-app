import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import styled from 'styled-components';

const ImageMaskingComp = () => {
  return (
    <>
      <ParallaxEffect Chhatrapati Shivaji Maharaj International Airport Mumbai/>
    </>
  );
}

export default ImageMaskingComp;

const ParallaxSection = styled.section`
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const ParallaxImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: auto;
`;

const ParallaxEffect = () => {
    const { scrollYProgress } = useScroll();
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 200]); // Image moves as you scroll
  
    return (
      <ParallaxSection>
        <ParallaxImage
          src="https://via.placeholder.com/1200x800"
          alt="Parallax"
          style={{ y: yRange }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1>Scroll to See Parallax Effect</h1>
        </div>
      </ParallaxSection>
    );
  };
  

