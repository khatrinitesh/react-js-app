import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaCheckCircle, FaExclamationCircle } from "react-icons/fa"; 

const FormWithIconsComp = () => {
  return (
    <>
      <Form/>
    </>
  );
}

export default FormWithIconsComp;

// Styled components
const FormWrapper = styled.div`
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px 35px 10px 10px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid ${props => (props.error ? "red" : "#ccc")};
  outline: none;
  font-size: 16px;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  color: ${props => (props.error ? "red" : "#ccc")};
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
          <InputWrapper>
            <IconWrapper error={errors.email}><FaEnvelope /></IconWrapper>
            <InputField
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </InputWrapper>
          
          <InputWrapper>
            <IconWrapper error={errors.password}><FaLock /></IconWrapper>
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
              maxLength={6}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
          </InputWrapper>
          
          <SubmitButton type="submit" disabled={Object.keys(errors).length > 0}>
            Submit
          </SubmitButton>
        </form>
      </FormWrapper>
    );
  };
  

