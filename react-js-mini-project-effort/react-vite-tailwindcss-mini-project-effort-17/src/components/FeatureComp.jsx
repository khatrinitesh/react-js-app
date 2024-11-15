import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FeatureComp = () => {
  return (
    <>
    <ExampleApp/>
    </>
  )
};

export default FeatureComp;

const ExampleApp = () => {
  return (
    <>
      <Container>
        <Title>Our Features</Title>
        <FeaturesWrapper>
          <FeatureCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Icon>🔧</Icon>
            <FeatureTitle>Feature 1</FeatureTitle>
            <Description>
              This is a description for feature 1. It will appear with an
              animation!
            </Description>
          </FeatureCard>

          <FeatureCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Icon>🚀</Icon>
            <FeatureTitle>Feature 2</FeatureTitle>
            <Description>
              This is a description for feature 2. It will also appear with a
              slight delay.
            </Description>
          </FeatureCard>

          <FeatureCard
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Icon>🌟</Icon>
            <FeatureTitle>Feature 3</FeatureTitle>
            <Description>
              This is a description for feature 3. It has an animation that
              fades in.
            </Description>
          </FeatureCard>
        </FeaturesWrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 50px;
  background-color: #f7f7f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  text-align: center;
`;

const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1000px;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const Icon = styled.div`
  font-size: 50px;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
`;