import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DownloadsBtnComp = () => {
  return (
    <>
     <DownloadButton/> 
    </>
  );
}

export default DownloadsBtnComp;

const DownloadButton = ({ fileName, fileUrl }) => {
    // Handle file download
    const handleDownload = () => {
      // Create a hidden link element and trigger a click to start download
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  
    return (
      <Button
        onClick={handleDownload}
        whileHover={{ scale: 1.1 }} // Framer Motion: Scale on hover
        whileTap={{ scale: 0.95 }}  // Framer Motion: Scale on click
      >
        <DownloadIcon>⬇️</DownloadIcon>
        Download
      </Button>
    );
  };
  


// Styled Component for the button
const Button = styled(motion.button)`
  background: linear-gradient(135deg, #6a11cb, #2575fc); /* Gradient background */
  border: none;
  border-radius: 50px; /* Rounded corners */
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Soft shadow */
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); /* Hover shadow */
    transform: scale(1.05); /* Slight zoom effect on hover */
  }

  &:active {
    transform: scale(0.98); /* Shrink effect on click */
  }
`;

// SVG for the download icon
const DownloadIcon = styled.span`
  margin-right: 8px;
`;
