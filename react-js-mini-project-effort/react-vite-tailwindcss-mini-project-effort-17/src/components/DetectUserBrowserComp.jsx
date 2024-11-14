import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

const DetectUserBrowserComp = () => {
  return (
    <>
      <BrowserDetector/>
    </>
  );
}

export default DetectUserBrowserComp;

const BrowserDetector = () => {
    const userAgent = navigator.userAgent;
  
    // Detecting browser based on user agent string
    let browser = 'Unknown';
    if (userAgent.indexOf('Chrome') > -1) {
      browser = 'Chrome';
    } else if (userAgent.indexOf('Firefox') > -1) {
      browser = 'Firefox';
    } else if (userAgent.indexOf('Safari') > -1) {
      browser = 'Safari';
    } else if (userAgent.indexOf('Edge') > -1) {
      browser = 'Edge';
    } else if (userAgent.indexOf('MSIE') > -1 || userAgent.indexOf('Trident') > -1) {
      browser = 'Internet Explorer';
    }
  
    return (
      <Wrapper>
        <MessageContainer>
          <BrowserName>Detected Browser:</BrowserName>
          <h3>{browser}</h3>
  
          {/* Conditional animation for browser detection */}
          {browser === 'Internet Explorer' && (
            <WarningMessage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Warning: Internet Explorer is not supported
            </WarningMessage>
          )}
          
          {browser === 'Safari' && (
            <WarningMessage
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              Safari detected! Some features may not work properly.
            </WarningMessage>
          )}
        </MessageContainer>
      </Wrapper>
    );
  };
  

// Styled components for UI
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const MessageContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const BrowserName = styled.h2`
  font-size: 24px;
  color: #333;
`;

const WarningMessage = styled(motion.div)`
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #ffcc00;
  color: #333;
  font-weight: bold;
  border-radius: 5px;
  display: inline-block;
  text-align: center;
`;





