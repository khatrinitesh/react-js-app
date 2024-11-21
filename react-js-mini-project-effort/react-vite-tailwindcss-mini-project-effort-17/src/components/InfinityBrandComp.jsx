import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InfinityBrandComp = () => {
  return (
    <>
      <InfinityBrand/>
    </>
  );
}

export default InfinityBrandComp;

// Define the styles for the container and elements
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
  flex-direction: column;
  text-align: center;
`;

const LogoWrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: #6200ea;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled(motion.div)`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: #6200ea;
`;

const Text = styled.h1`
  font-size: 32px;
  color: #6200ea;
  margin: 0;
  font-family: 'Roboto', sans-serif;
`;

const InfinityBrand = () => {
    return (
      <Container>
        <LogoWrapper>
          {/* Create a continuous rotating effect */}
          <Logo
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: 'loop',
              duration: 4,
              ease: 'linear',
            }}
          >
            {/* Logo placeholder */}
            ∞
          </Logo>
        </LogoWrapper>
        <Text>Infinity Brand</Text>
        <p>Infinite possibilities await...</p>
      </Container>
    );
  };

