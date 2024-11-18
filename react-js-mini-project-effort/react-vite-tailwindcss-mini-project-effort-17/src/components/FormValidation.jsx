import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FormValidationComp = () => {
  return (
    <>
      <Form/>
    </>
  );
}

export default FormValidationComp;

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const validateForm = () => {
      let formErrors = {};
      if (!email) formErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = "Email is invalid";
  
      if (!password) formErrors.password = "Password is required";
      else if (password.length < 6) formErrors.password = "Password must be at least 6 characters";
  
      setErrors(formErrors);
      return Object.keys(formErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        setIsSubmitted(true);
        // Simulate a successful form submission, e.g., send data to an API
      }
    };
  
    return (
      <FormWrapper>
        <h2>Login Form</h2>
        {isSubmitted && (
          <SuccessMessage
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Form submitted successfully!
          </SuccessMessage>
        )}
        <form onSubmit={handleSubmit}>
          <div>
            <InputField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </div>
          <div>
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
          </div>
          <SubmitButton type="submit" disabled={Object.keys(errors).length > 0}>
            Submit
          </SubmitButton>
        </form>
      </FormWrapper>
    );
  };

  // Styled components
const FormWrapper = styled.div`
max-width: 400px;
margin: 50px auto;
padding: 20px;
border-radius: 8px;
background-color: #f9f9f9;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputField = styled.input`
width: 100%;
padding: 10px;
margin: 10px 0;
border-radius: 4px;
border: 1px solid ${props => (props.error ? "red" : "#ccc")};
outline: none;
font-size: 16px;
`;

const SubmitButton = styled.button`
width: 100%;
padding: 10px;
background-color: #007bff;
color: white;
border: none;
border-radius: 4px;
cursor: pointer;
font-size: 16px;
&:disabled {
  background-color: #ccc;
}
`;

const ErrorText = styled.p`
color: red;
font-size: 12px;
margin-top: -10px;
`;

const SuccessMessage = styled(motion.p)`
color: green;
font-size: 14px;
margin-top: 10px;
`;