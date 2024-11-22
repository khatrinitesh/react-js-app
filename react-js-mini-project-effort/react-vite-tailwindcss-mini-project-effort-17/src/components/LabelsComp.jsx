import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const LabelsComp = () => {
  return (
    <>
      <AnimatedInputForm/>
    </>
  );
}

export default LabelsComp;


// Styled components for form input and label
const FormWrapper = styled.div`
  margin: 20px;
  max-width: 400px;
  width: 100%;
`;

const Label = styled(motion.label)`
  font-size: 16px;
  color: #aaa;
  position: absolute;
  left: 10px;
  top: 12px;
  transition: all 0.3s ease;
`;

const InputFieldWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 16px 12px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  background-color: transparent;
  color: #333;

  &:focus {
    border-color: #4caf50;
  }

  &:focus + ${Label}, 
  &:not(:placeholder-shown) + ${Label} {
    font-size: 12px;
    top: -8px;
    color: #4caf50;
  }
`;

const AnimatedLabel = ({ htmlFor, labelText, isFocused }) => (
    <Label
      htmlFor={htmlFor}
      initial={{ top: '12px', fontSize: '16px', opacity: 0.7 }}
      animate={{
        top: isFocused || labelText.length > 0 ? '-8px' : '12px',
        fontSize: isFocused || labelText.length > 0 ? '12px' : '16px',
        opacity: isFocused || labelText.length > 0 ? 1 : 0.7,
      }}
      transition={{ duration: 0.3 }}
    >
      {labelText}
    </Label>
  );


  const AnimatedInputForm = () => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
  
    return (
      <FormWrapper>
        <InputFieldWrapper>
          <InputField
            id="input"
            type="text"
            placeholder=" "
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <AnimatedLabel htmlFor="input" labelText={inputValue} isFocused={isFocused} />
        </InputFieldWrapper>
      </FormWrapper>
    );
  };
  
  




