import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LinearModalComp = () => {
  return (
    <>
      <LinearModal/>
    </>
  );
}

export default LinearModalComp;

// Styled components for the modal, overlay, and button
const Overlay = styled(motion.div)`
  position: fixed;
  inset:0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  background-color: white;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  z-index: 1001;
`;

const CloseButton = styled.button`
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #cc0000;
  }
`;

const OpenModalButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;


const LinearModal = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
  
    return (
      <div>
        {/* Open Modal Button */}
        <OpenModalButton onClick={openModal}>Open Modal</OpenModalButton>
  
        {/* Modal Overlay and Content */}
        {isOpen && (
          <>
            <Overlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            />
            <ModalWrapper
              initial={{ x: '-100%' }}  // Initial position (off-screen to the left)
              animate={{ x: 0 }}  // Slide in to position
              exit={{ x: '100%' }}  // Slide out to the right
              transition={{ duration: 0.3 }}
            >
              <h2>Linear Sliding Modal</h2>
              <p>This modal slides in from the left.</p>
              <CloseButton onClick={closeModal}>Close</CloseButton>
            </ModalWrapper>
          </>
        )}
      </div>
    );
  };

