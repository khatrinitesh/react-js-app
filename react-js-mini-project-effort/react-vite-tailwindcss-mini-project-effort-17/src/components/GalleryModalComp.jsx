import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';



const GalleryModalComp = () => {
  return (
    <>
      <GalleryModal/>
    </>
  );
}

export default GalleryModalComp;

const GalleryModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    // Images (with correct URLs for testing)
    const imagesWallpaper = [
      { 
        thumbnail: 'https://plus.unsplash.com/premium_photo-1668774097940-f36dfdaee149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D', 
        fullSize: 'https://plus.unsplash.com/premium_photo-1668774097940-f36dfdaee149?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D' 
      },
      { 
        thumbnail: 'https://images.unsplash.com/photo-1532630571098-79a3d222b00d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D', 
        fullSize: 'https://images.unsplash.com/photo-1532630571098-79a3d222b00d?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D' 
      },
      { 
        thumbnail: 'https://images.unsplash.com/photo-1582134534988-f8bcfc928273?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D', 
        fullSize: 'https://images.unsplash.com/photo-1582134534988-f8bcfc928273?w=2000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxhY2Vob2xkZXJ8ZW58MHx8MHx8fDA%3D' 
      },
    ];
  
    // Open modal and set the clicked image index
    const openModal = (index) => {
      setCurrentImageIndex(index);
      setIsModalOpen(true);
    };
  
    // Close modal
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    // Go to the next image
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesWallpaper.length);
    };
  
    // Go to the previous image
    const previousImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagesWallpaper.length) % imagesWallpaper.length);
    };
  
    return (
      <div>
        {/* Gallery */}
        <GalleryWrapper>
          {imagesWallpaper.map((image, index) => (
            <Thumbnail
              key={index}
              src={image.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => openModal(index)}
            />
          ))}
        </GalleryWrapper>
  
        {/* Fullscreen Modal with animations */}
        <AnimatePresence>
          {isModalOpen && (
            <ModalWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ModalContent
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Close button */}
                <CloseButton onClick={closeModal}>×</CloseButton>
  
                {/* Navigation buttons */}
                <PreviousButton onClick={previousImage}>‹</PreviousButton>
                <NextButton onClick={nextImage}>›</NextButton>
  
                {/* Image */}
                <ModalImage src={imagesWallpaper[currentImageIndex].fullSize} alt={`Image ${currentImageIndex + 1}`} />
              </ModalContent>
            </ModalWrapper>
          )}
        </AnimatePresence>
      </div>
    );
  };

// Styled components for the gallery
const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Thumbnail = styled.img`
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

// Fullscreen Modal Wrapper
const ModalWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Modal content to display the image
const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
`;

// Image in the modal
const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

// Close Button
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  padding: 10px;
`;

// Navigation Buttons (Previous/Next)
const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 20px;
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  z-index: 1000;
  opacity: 0.7;

  &:hover {
    opacity: 1;
  }
`;

const PreviousButton = styled(NavigationButton)`
  left: 20px;
`;

const NextButton = styled(NavigationButton)`
  right: 20px;
`;