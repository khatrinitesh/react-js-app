import React, { useState } from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MaterialInputComp = () => {
  return (
    <>
      <AnimatedInput/>
    </>
  );
}

export default MaterialInputComp;

// Styled component for the container
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`;

// Framer Motion component for animating the input field
const MotionTextField = motion(TextField);


const AnimatedInput = () => {
    const [focus, setFocus] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const handleFocus = () => setFocus(true);
    const handleBlur = () => setFocus(false);
    const handleChange = (e) => setInputValue(e.target.value);
  
    return (
      <InputContainer>
        <h2>Animated Material UI Input</h2>
        <MotionTextField
          label="Your Name"
          variant="outlined"
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          // Apply Framer Motion animation
          animate={{
            scale: focus ? 1.05 : 1, // Slightly scale up on focus
            boxShadow: focus ? '0px 4px 15px rgba(0, 0, 0, 0.2)' : '0px 4px 10px rgba(0, 0, 0, 0.1)', // Shadow effect on focus
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          // Style customization with Styled Components
          sx={{
            width: '300px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '8px', // Rounded corners
            },
            '& .MuiInputLabel-root': {
              color: focus ? '#6200ea' : '#000', // Change label color on focus
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: focus ? '#6200ea' : '#ccc', // Border color on focus
            },
          }}
        />
      </InputContainer>
    );
  };