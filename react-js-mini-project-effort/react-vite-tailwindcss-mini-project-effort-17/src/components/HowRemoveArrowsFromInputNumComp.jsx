import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HowRemoveArrowsFromInputNumComp = () => {
  return (
    <>
     <NumberInput/> 
    </>
  );
}

export default HowRemoveArrowsFromInputNumComp;

// Styled Component for the input
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledInput = styled(motion.input)`
  width: 200px;
  padding: 10px;
  font-size: 18px;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 8px;
  
  /* Remove the number input arrows for different browsers */
  
  /* For Chrome, Safari, Edge, and Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* For Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  /* Optional: Additional styling for the input focus */
  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const NumberInput = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputContainer>
      <StyledInput
        type="number"
        value={value}
        onChange={handleChange}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </InputContainer>
  );
};


