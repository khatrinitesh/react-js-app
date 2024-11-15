import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FixedFooterComp = () => {
  return (
    <>
      <FixedFooter/>
    </>
  );
}

export default FixedFooterComp;

const FixedFooter = () => {
    return (
      <>
        {/* Main Content */}
        <ContentWrapper>
          <div>
            <h1>Scroll to see the fixed footer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            </p>
            <p>
              Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis
              turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet.
            </p>
          </div>
        </ContentWrapper>
  
        {/* Fixed Footer with Framer Motion animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start off-screen and invisible
          animate={{ opacity: 1, y: 0 }}   // Fade in and slide up into position
          exit={{ opacity: 0, y: 50 }}     // Fade out and slide down when removed
          transition={{ duration: 0.5 }}   // Duration of the transition
        >
          <FooterWrapper>
            <p>Fixed Footer - Scroll down to see me!</p>
          </FooterWrapper>
        </motion.div>
      </>
    );
  };

// Styled Components for the footer and content
const FooterWrapper = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 16px;
  z-index: 10;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const ContentWrapper = styled.div`
  min-height: 100vh;
  padding-bottom: 80px; /* Add padding to ensure content isn't hidden behind the fixed footer */
  display: flex;
  flex-direction: column;
`;

