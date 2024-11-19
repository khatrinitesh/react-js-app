import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HoverCardsComp = () => {
  return (
    <>
      <HoverCard/>
    </>
  );
}

export default HoverCardsComp;

// Styled Component for the card container
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  flex-wrap: wrap;
`;

// Styled Component for individual cards
const Card = styled(motion.div)`
  width: 250px;
  height: 350px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  /* Add a nice image background */
  background-image: url('https://via.placeholder.com/250x200');
  background-size: cover;
  background-position: center;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px);
  }
`;

// Card Title Styling
const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
  padding: 0 10px;
  background-color: rgba(0, 0, 0, 0.5); /* Add background to text for contrast */
`;


// HoverCard Component with Framer Motion Animations
const HoverCard = () => {
    return (
      <CardContainer>
        {/* Create Multiple Cards */}
        {['Card 1', 'Card 2', 'Card 3'].map((title, index) => (
          <Card
            key={index}
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          >
            <Title>{title}</Title>
          </Card>
        ))}
      </CardContainer>
    );
  };
  
