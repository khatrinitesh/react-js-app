import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContactSectionComp = () => {
  return (
    <>
      <ContactSection/>
    </>
  );
}

export default ContactSectionComp;

// Form submission handler (simulating form submission)
const handleSubmit = (e, formData) => {
    e.preventDefault();
    alert(`Form submitted with data:\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
  };

  const ContactSection = () => {
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
  
    // Validate form before submission
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
  
    return (
      <SectionContainer>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader>
            <h2>Contact Us</h2>
            <p>If you have any questions or feedback, feel free to reach out to us using the form below.</p>
          </SectionHeader>
        </motion.div>
  
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleFormSubmit}
        >
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
      </SectionContainer>
    );
  };

  // Styled Components

const SectionContainer = styled.div`
padding: 60px 20px;
background-color: #f4f6f9;
display: flex;
flex-direction: column;
align-items: center;
`;

const SectionHeader = styled.div`
text-align: center;
margin-bottom: 40px;

h2 {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

p {
  font-size: 1.1rem;
  color: #555;
  margin-top: 10px;
}
`;

const FormGroup = styled.div`
margin-bottom: 20px;
display: flex;
flex-direction: column;
`;

const StyledInput = styled.input`
padding: 12px;
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
padding: 12px;
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

