import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DropmorphismComp = () => {
  return (
    <>
      <DropmorphismCard/>
    </>
  );
}

export default DropmorphismComp;

const DropmorphismCard = () => {
    return (
      <Container>
        <Card
          initial={{ scale: 1 }}
          whileHover={{
            scale: 1.05, // Slight zoom on hover
            boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.4)', // Deeper shadow on hover
          }}
          whileTap={{ scale: 0.95 }} // Slight shrink on click
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <Title>Dropmorphism Effect</Title>
          <Text>
            This is a soft, animated card with a dropmorphism style, combining blur, transparency, and smooth interactions.
          </Text>
        </Card>
      </Container>
    );
  };

// The container that holds the background and card
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('https://source.unsplash.com/random/1920x1080') center/cover no-repeat;
  filter: blur(10px);
  position: relative;
  overflow: hidden;
`;

// The actual dropmorphism card
const Card = styled(motion.div)`
  width: 300px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.2);  // Semi-transparent white
  backdrop-filter: blur(10px);  // The blur effect for the background behind the card
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);  // Soft shadow for the "floating" effect
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // Optional inner shadow for more depth
  background: rgba(255, 255, 255, 0.15);
`;

// Title inside the card
const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
`;

// A simple text paragraph
const Text = styled.p`
  font-size: 16px;
  color: white;
  text-align: center;
`;



