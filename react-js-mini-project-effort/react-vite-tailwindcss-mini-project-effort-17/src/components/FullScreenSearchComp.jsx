import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const FullScreenSearchComp = () => {
  return (
    <>
      <FullscreenSearch/>
    </>
  );
}

export default FullScreenSearchComp;

// Wrapper for the fullscreen search
const FullscreenSearchWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8); /* Dark background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it stays on top */
  opacity: 0; /* Hidden by default */
  visibility: hidden; /* Hidden by default */
`;

// Animated content inside the fullscreen search
const SearchContent = styled(motion.div)`
  width: 80%;
  max-width: 600px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

// Styled search input
const SearchInput = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  outline: none;
  
  &:focus {
    border-color: #3498db;
  }
`;

// Close button in the top right
const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: white;
  cursor: pointer;
`;

// Open search button (e.g. on your main page)
const OpenSearchButton = styled.button`
  font-size: 20px;
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: #2980b9;
  }
  
  svg {
    margin-right: 10px;
  }
`;


const FullscreenSearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
  
    const toggleSearch = () => setIsOpen(!isOpen);
  
    return (
      <div>
        {/* Open the fullscreen search */}
        <OpenSearchButton onClick={toggleSearch}>
          <FaSearch />
          Open Search
        </OpenSearchButton>
  
        {/* Fullscreen search overlay */}
        {isOpen && (
          <FullscreenSearchWrapper
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, visibility: 'visible' }}
            exit={{ opacity: 0, visibility: 'hidden' }}
            transition={{ duration: 0.3 }}
          >
            <SearchContent
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <CloseButton onClick={toggleSearch}>X</CloseButton>
              <h2>Search</h2>
              <SearchInput
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your search query..."
              />
            </SearchContent>
          </FullscreenSearchWrapper>
        )}
      </div>
    );
  };

