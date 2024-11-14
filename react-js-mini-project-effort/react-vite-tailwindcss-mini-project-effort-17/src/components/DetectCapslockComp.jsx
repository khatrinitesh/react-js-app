import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const DetectCapslockComp = () => {
  return (
    <>
      <CapsLockDetector/>
    </>
  );
}

export default DetectCapslockComp;

const CapsLockDetector = () => {
    const [isCapsLock, setIsCapsLock] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.getModifierState('CapsLock')) {
          setIsCapsLock(true);
        } else {
          setIsCapsLock(false);
        }
      };
  
      const handleKeyUp = (e) => {
        if (e.getModifierState('CapsLock')) {
          setIsCapsLock(true);
        } else {
          setIsCapsLock(false);
        }
      };
  
      // Listen for keydown and keyup events
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);
  
      // Clean up the event listeners when the component is unmounted
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };
    }, []);
  
    // Handle the input change
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <Wrapper>
        <InputContainer>
          <h2>Caps Lock Detector</h2>
          <InputField
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type something..."
          />
          {isCapsLock && (
            <CapsLockWarning
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              Caps Lock is ON
            </CapsLockWarning>
          )}
        </InputContainer>
      </Wrapper>
    );
  };

// styled components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
`;

const InputContainer = styled.div`
  text-align: center;
`;

const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 250px;
  margin-top: 20px;
  transition: border-color 0.3s ease;
  
  &:focus {
    border-color: #007bff;
  }
`;

const CapsLockWarning = styled(motion.div)`
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #ffcc00;
  color: #333;
  font-weight: bold;
  border-radius: 5px;
  display: inline-block;
`;




