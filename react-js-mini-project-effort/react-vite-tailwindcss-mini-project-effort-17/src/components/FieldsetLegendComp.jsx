import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FieldsetLegendComp = () => {
  return (
    <>
    <FieldSetLegend/>
    </>
  )
};

export default FieldsetLegendComp;

const FieldSetLegend = () => {
  const [isFieldsetExpanded, setIsFieldsetExpanded] = useState(false);

  const toggleFieldset = () => {
    setIsFieldsetExpanded(!isFieldsetExpanded);
  };
  return (
    <>
      <FormContainer>
        <Form>
          <Fieldset
            as={motion.fieldset}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Legend>Personal Information</Legend>
            <InputContainer>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Enter your name" />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </InputContainer>

            <AnimateExpandButton onClick={toggleFieldset}>
              {isFieldsetExpanded ? "Collapse" : "Expand"} Fieldset
            </AnimateExpandButton>

            <ExpandedContent
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isFieldsetExpanded ? "auto" : 0,
                opacity: isFieldsetExpanded ? 1 : 0,
              }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <InputContainer>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </InputContainer>
              <InputContainer>
                <Label htmlFor="address">Address</Label>
                <Input
                  type="text"
                  id="address"
                  placeholder="Enter your address"
                />
              </InputContainer>
            </ExpandedContent>
          </Fieldset>
        </Form>
      </FormContainer>
    </>
  );
};

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f4f8;
`;

const Form = styled.form`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;

const Fieldset = styled(motion.fieldset)`
  border: 2px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  padding-bottom: 40px; // More padding at the bottom for expanded content
  margin-bottom: 20px;
  background-color: #fafafa;
  transition: all 0.3s ease;
`;

const Legend = styled.legend`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 0 10px;
  color: #333;
`;

const InputContainer = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background-color: #fff;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const AnimateExpandButton = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ExpandedContent = styled(motion.div)`
  margin-top: 20px;
  padding: 10px 0;
  border-top: 2px dashed #ddd;
  opacity: 0;
  overflow: hidden;
`;
