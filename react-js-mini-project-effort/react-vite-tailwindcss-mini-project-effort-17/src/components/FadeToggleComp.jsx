import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FadeToggleComp = () => {
  return (
    <>
      <Example/>
    </>
  );
}

export default FadeToggleComp;

const Example = () => {
     // State to control the visibility of the element
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prev => !prev); // Toggle visibility on button click
  };
    return(
        <>
         <Container>
      <FadeToggleWrapper>
        <motion.div
          initial={{ opacity: 0 }}          // Start invisible
          animate={{ opacity: isVisible ? 1 : 0 }}  // Animate opacity based on state
          transition={{ duration: 1 }}      // Duration of the fade animation
        >
          <Content>
            <h2>This content fades in and out</h2>
            <p>Click the button below to toggle visibility.</p>
          </Content>
        </motion.div>
      </FadeToggleWrapper>

      <Button onClick={toggleVisibility}>
        {isVisible ? 'Hide Content' : 'Show Content'}
      </Button>
    </Container>
        </>
    )
}

// Styled Components for layout and styling

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const FadeToggleWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;


