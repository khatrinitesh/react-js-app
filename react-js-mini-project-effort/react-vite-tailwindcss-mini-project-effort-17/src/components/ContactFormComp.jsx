import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContactFormComp = () => {
  return (
    <>
      <ContactForm/>
    </>
  );
}

export default ContactFormComp;

  
  
  const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
  
    // Handle input changes
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    // Validate form data before submitting
    const validateForm = () => {
      const newErrors = {};
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.message) newErrors.message = 'Message cannot be empty';
      return newErrors;
    };
  
    // Submit form
    const handleFormSubmit = (e) => {
      const newErrors = validateForm();
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }
      setErrors({});
      setSubmitted(true);
      handleSubmit(e, formData);
    };
  
    return(
        <>
         <FormContainer>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleFormSubmit}
      >
        <h2>Contact Us</h2>

        <FormGroup>
          <label htmlFor="name">Name</label>
          <StyledInput
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            isError={errors.name}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <label htmlFor="email">Email</label>
          <StyledInput
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            isError={errors.email}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>

        <FormGroup>
          <label htmlFor="message">Message</label>
          <StyledTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            isError={errors.message}
          />
          {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </FormGroup>

        <motion.button
          type="submit"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Submit
        </motion.button>

        {submitted && <SuccessMessage>Form submitted successfully!</SuccessMessage>}
      </motion.form>
    </FormContainer>
        </>
    )
}

// Styled Components

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f6f9;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid ${(props) => (props.isError ? '#e74c3c' : '#ccc')};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const StyledTextarea = styled.textarea`
  padding: 10px;
  margin-top: 5px;
  border: 1px solid ${(props) => (props.isError ? '#e74c3c' : '#ccc')};
  border-radius: 5px;
  font-size: 16px;
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #3498db;
    outline: none;
  }
`;

const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  color: #27ae60;
  font-size: 16px;
  font-weight: bold;
`;

