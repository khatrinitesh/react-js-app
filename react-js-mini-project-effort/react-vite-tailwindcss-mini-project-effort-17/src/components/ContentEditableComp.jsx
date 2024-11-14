import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContentEditableComp = () => {
  return (
    <>
     <EditableText/> 
    </>
  );
}

export default ContentEditableComp;

const EditableText = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState("Click here to edit...");
  
    // Handle input change in contenteditable div
    const handleTextChange = (e) => {
      setText(e.target.innerText);
    };
  
    // Handle focus and blur
    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };
  
    return (
      <Container>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <EditableDiv
            contentEditable
            suppressContentEditableWarning={true}
            onInput={handleTextChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            isFocused={isFocused}
          >
            {text}
          </EditableDiv>
        </motion.div>
      </Container>
    );
  };

  
  // Styled Components

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #f4f6f9;
`;

const EditableDiv = styled.div`
padding: 20px;
width: 300px;
min-height: 150px;
border: 2px solid ${({ isFocused }) => (isFocused ? '#3498db' : '#ccc')};
border-radius: 8px;
font-size: 18px;
font-family: 'Arial', sans-serif;
background-color: #fff;
box-sizing: border-box;
transition: border-color 0.3s ease-in-out;

&:focus {
  outline: none;
}

&:empty:before {
  content: "Click here to edit...";
  color: #aaa;
}
`;
