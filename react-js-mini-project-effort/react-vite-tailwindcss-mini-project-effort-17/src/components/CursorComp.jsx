import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CursorComp = () => {
  return (
    <>
    <CustomCursor/>
    </>
  );
}

export default CursorComp;

const CustomCursor = () => {
    const [cursorType, setCursorType] = useState('default'); // default or hover
  
    // Handle mouse movement
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    const updateMousePosition = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
  
    const handleMouseEnter = () => {
      setCursorType('hover');
    };
  
    const handleMouseLeave = () => {
      setCursorType('default');
    };
  
    useEffect(() => {
      window.addEventListener('mousemove', updateMousePosition);
      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);
  
    return (
      <Container>
        {/* Custom cursor element */}
        <motion.div
          className={`cursor ${cursorType}`}
          style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
          transition={{ type: 'spring', stiffness: 200 }}
        ></motion.div>
  
        <Content>
          <h1>Interactive Custom Cursor</h1>
          <p
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="hover-target"
          >
            Hover over this text to change the cursor.
          </p>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Hover over this button as well.
          </button>
        </Content>
      </Container>
    );
  };

const Container = styled.div`
  position: relative;
  height: 100vh;
  background-color: #f4f6f9;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    margin: 10px 0;
    color: #555;
    transition: color 0.3s ease;
    &:hover {
      color: #3498db;
    }
  }

  button {
    padding: 10px 20px;
    font-size: 1.1rem;
    border: 2px solid #3498db;
    background-color: transparent;
    color: #3498db;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: #3498db;
      color: white;
    }
  }

  .hover-target {
    transition: color 0.3s ease;
  }
`;

const CursorStyles = `
  .cursor {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #3498db;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.2s ease;
  }

  .cursor.hover {
    width: 30px;
    height: 30px;
    background-color: #e74c3c;
    transform: translate(-50%, -50%) scale(1.5);
  }
`;

const Cursor = styled.div`
  ${CursorStyles}
`;

