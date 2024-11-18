import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FormOnImageComp = () => {
  return (
    <>
      <FormOnImage/>
    </>
  );
}

export default FormOnImageComp;

// Container for the image and form
const FormContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('https://via.placeholder.com/1500x1000');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

// Styled form container
const FormWrapper = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  padding: 30px;
  border-radius: 8px;
  width: 350px;
  max-width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
`;

// Styled form input fields and button
const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #ccc;
  border-radius: 4px;
  background: #fff;
  color: #333;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #4CAF50;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

// Form component
const FormOnImage = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Form Submitted');
      // Handle form submission logic here
    };
  
    return (
      <FormContainer>
        <FormWrapper
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <InputField
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <InputField
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
        </FormWrapper>
      </FormContainer>
    );
  };
