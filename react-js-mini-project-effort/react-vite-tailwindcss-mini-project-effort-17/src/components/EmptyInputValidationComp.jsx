import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const EmptyInputValidationComp = () => {
  return (
    <>
    <FormInputEmptyValidation/>
    </>
  )
};

export default EmptyInputValidationComp;

const FormInputEmptyValidation = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      setError(true);
    } else {
      setError(false);
      alert("Form submitted successfully!");
      // You can handle the form submission logic here
      setInputValue(""); // reset input
    }
  };
  return (
    <>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="inputField">Enter something:</Label>
          <Input
            id="inputField"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type here"
          />
          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ErrorMessage>Please fill out this field</ErrorMessage>
            </motion.div>
          )}
          <Button type="submit">Submit</Button>
        </Form>
      </FormWrapper>
    </>
  );
};

// Styled Components
const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const Form = styled.form`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ErrorMessage = styled.div`
  color: #d9534f;
  font-size: 14px;
  font-weight: bold;
`;
