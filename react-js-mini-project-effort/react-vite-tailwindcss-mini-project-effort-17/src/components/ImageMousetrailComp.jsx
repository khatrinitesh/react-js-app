import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ImageMousetrailComp = () => {
  return (
    <>
      <MouseTrail/>
    </>
  );
}

export default ImageMousetrailComp;

// Styled Component for the container of the mouse trail
const MouseTrailContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  pointer-events: none; /* Disable interactions */
`;

// Styled Component for the individual particles in the mouse trail
const Particle = styled(motion.div)`
  position: absolute;
  background-color: rgba(255, 0, 0, 0.6); /* Particle color */
  border-radius: 50%;
  width: 10px;
  height: 10px;
  pointer-events: none; /* Prevent particles from interfering with other events */
`;

const MouseTrail = () => {
    const [particles, setParticles] = useState([]); // Store trail particles
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
    // Update mouse position when the mouse moves
    useEffect(() => {
      const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    // Create a new particle when the mouse moves
    useEffect(() => {
      if (mousePos.x !== 0 && mousePos.y !== 0) {
        setParticles((prevParticles) => [
          ...prevParticles,
          { x: mousePos.x, y: mousePos.y, id: Date.now() },
        ]);
      }
  
      // Remove particles after they move out of view
      const timer = setTimeout(() => {
        setParticles((prevParticles) => prevParticles.slice(1));
      }, 500);
  
      return () => clearTimeout(timer);
    }, [mousePos]);
  
    return (
      <MouseTrailContainer>
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            initial={{ x: mousePos.x - 5, y: mousePos.y - 5 }}
            animate={{
              x: particle.x - 5, // Center the particle
              y: particle.y - 5,
              opacity: 0, // Fade out the particle
            }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
            }}
          />
        ))}
      </MouseTrailContainer>
    );
  };


