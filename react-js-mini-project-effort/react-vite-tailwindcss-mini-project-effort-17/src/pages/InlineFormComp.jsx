import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InlineFormComp = () => {
  return (
    <>
      <InlineForm/>
    </>
  );
}

export default InlineFormComp;

// Styled components for form and elements
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f4;
`;

const FormContainer = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const InputField = styled(motion.input)`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #6200ea;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 12px;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #3700b3;
  }
`;

const InlineForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Form submitted with name: ${formData.name} and email: ${formData.email}`);
    };
  
    return (
      <FormWrapper>
        <FormContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#6200ea' }}>Contact Us</h2>
  
          <InputField
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <InputField
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          <SubmitButton
            type="submit"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 120, delay: 0.4 }}
          >
            Submit
          </SubmitButton>
        </FormContainer>
      </FormWrapper>
    );
  };


