import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FadeInOutComp = () => {
  return (
    <>
      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Scroll Down to Fade In</h2>
          <p>This content will fade in as you scroll down.</p>
        </motion.div>
      </Section>

      <Section>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2>More Content</h2>
          <p>More content that fades in when in view!</p>
        </motion.div>
      </Section>
    </>
  );
}

export default FadeInOutComp;

const Section = styled.section`
  padding: 50px;
  margin-bottom: 50px;
  background-color: #f5f5f5;
  text-align: center;
`;


