import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { lightboximgData } from './../constants/lightboximgData';

const LightboxComp = () => {
  return (
    <>
      <Lightbox/>
    </>
  );
}

export default LightboxComp;


// Styled components for lightbox overlay, modal, and close button
const Overlay = styled(motion.div)`
  position: fixed;
  inset:0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled(motion.div)`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 10px;
  font-size: 16px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #cc0000;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
`;


const Lightbox = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
  
    const openLightbox = (image) => {
      setSelectedImage(image);
      setIsOpen(true);
    };
  
    const closeLightbox = () => {
      setIsOpen(false);
    };
  
    return (
      <div>
        <div>
          {lightboximgData.map((image, index) => (
            <Thumbnail key={index} src={image} alt={`thumbnail-${index}`} onClick={() => openLightbox(image)} />
          ))}
        </div>
  
        {isOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
          >
            <Modal
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <CloseButton onClick={closeLightbox}>X</CloseButton>
              <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
            </Modal>
          </Overlay>
        )}
      </div>
    );
  };