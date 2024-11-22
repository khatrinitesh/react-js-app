import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InputAutoFocusWidthComp = () => {
  return (
    <>
      <NavbarComponent/>
    </>
  );
}

export default InputAutoFocusWidthComp;

// Styled components for the navbar and input field
const Navbar = styled.header`
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 15px;
  color: white;
  font-size: 18px;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const AnimatedInput = styled(motion.input)`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #fff;
  border-radius: 25px;
  outline: none;
  background-color: transparent;
  color: white;
  width: auto;
  min-width: 120px; /* Minimum width before focus */
  max-width: 300px; /* Maximum width after expanding */
  transition: width 0.3s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  
  ::placeholder {
    color: #ccc;
  }
`;

const NavbarComponent = () => {
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
  
    return (
      <Navbar>
        <NavList>
          <NavItem>Home</NavItem>
          <NavItem>About</NavItem>
          <NavItem>Services</NavItem>
          <NavItem>Contact</NavItem>
        </NavList>
  
        <InputWrapper>
          <AnimatedInput
            type="text"
            placeholder="Search..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            isFocused={isFocused}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            initial={{ width: '120px' }}  // Initial width when not focused
            animate={{
              width: isFocused || inputValue.length > 0 ? 'auto' : '120px',  // Adjust to text content or focus
            }}
            transition={{ duration: 0.3 }} // Smooth transition for width change
          />
        </InputWrapper>
      </Navbar>
    );
  };
  

