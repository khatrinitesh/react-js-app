import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


const CopyTextClipboardComp = () => {

  return (
    <>
      <CopyToClipboard/>
    </>
  );
}

export default CopyTextClipboardComp;

const CopyToClipboard = () => {
    const [copied, setCopied] = useState(false);
    const [copiedText, setCopiedText] = useState('');
  
    const textToCopy = "This is some text to copy!adadad";
  
    const handleCopy = () => {
      navigator.clipboard.writeText(textToCopy)
        .then(() => {
          setCopied(true);
          setCopiedText(textToCopy);
          // Reset the copied state after 2 seconds
          setTimeout(() => {
            setCopied(false);
            setCopiedText('');
          }, 0);
        })
        .catch((err) => {
          console.error('Failed to copy: ', err);
        });
    };
  
    return (
      <Container>
        <TextBox>
          {textToCopy}
        </TextBox>
  
        <motion.button
          onClick={handleCopy}
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Copy Text
        </motion.button>
  
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
          >
            <SuccessMessage>Copied: "{copiedText}"</SuccessMessage>
          </motion.div>
        )}
      </Container>
    );
  };

  // Styled Components
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
background-color: #f0f4f8;
`;

const TextBox = styled.div`
padding: 20px;
width: 300px;
text-align: center;
border: 2px solid #ccc;
border-radius: 8px;
font-size: 18px;
background-color: white;
margin-bottom: 20px;
`;

const SuccessMessage = styled.div`
margin-top: 10px;
font-size: 16px;
color: #27ae60;
font-weight: bold;
text-align: center;
`;
