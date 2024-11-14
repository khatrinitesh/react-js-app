import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const CutoutTextComp = () => {
  return (
    <>
      <NeumorphicCutoutText text='Aliquip ad eiusmod irure aliquip sit est veniam nostrud voluptate ex cupidatat ad in.'/>
    </>
  );
}

export default CutoutTextComp;

const NeumorphicCutoutText = ({ text }) => {
    return (
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CutoutTextWrapper text={text}>
            {text}
          </CutoutTextWrapper>
        </motion.div>
      </Container>
    );
  };

// Styled component for neumorphic container
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #e0e5ec;
  flex-direction: column;
  padding: 20px;
`;

const CutoutTextWrapper = styled.div`
  position: relative;
  display: inline-block;
  font-size: 50px;
  font-weight: 700;
  color: #e0e5ec;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  z-index: 1;

  /* Neumorphism Shadow */
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.1), -6px -6px 12px rgba(255, 255, 255, 0.7);

  background: linear-gradient(145deg, #e0e5ec, #f0f5fb);
  border-radius: 20px;
  padding: 30px 50px;
  user-select: none;
  
  &:after {
    content: '${(props) => props.text}';
    position: absolute;
    top: 0;
    left: 0;
    color: transparent;
    background-image: linear-gradient(145deg, #6e7f94, #92a7b4);
    -webkit-background-clip: text;
    background-clip: text;
    z-index: -1;
    filter: blur(3px);
    -webkit-mask-image: linear-gradient(white, white);
    mask-image: linear-gradient(white, white);
  }
`;