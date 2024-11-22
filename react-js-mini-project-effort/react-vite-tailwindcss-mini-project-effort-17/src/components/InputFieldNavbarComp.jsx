import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InputFieldNavbarComp = () => {
  return (
    <>
      <NavbarComponent/>
    </>
  );
}

export default InputFieldNavbarComp;

const Navbar = styled.header`
    background-color:#333;
    padding:10px 20px;
    display: flex0;
    justify-content:space-between;
    align-items: center;
`

const NavList = styled.ul`
    display: flex;
    list-style-type: none;
    margin:0;
    padding: 0;
`

const NavItem = styled.li`
    margin:0 15px;
    color:#fff;
    font-size: 10px;
`

const InputWrapper = styled.div`
    position:relative;
`

const AnimatedInput = styled(motion.input)`
padding: 10px;
  font-size: 16px;
  border: 2px solid #fff;
  border-radius: 25px;
  outline: none;
  background-color: transparent;
  color: white;
  width: ${(props) => (props.isFocused ? '200px' : '120px')};
  transition: width 0.3s ease-in-out;

  ::placeholder {
    color: #ccc;
  }
`

const NavbarComponent = () => {

    const [isFocused,setIsFocused] = useState(false);
    return(
        <>
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
          isFocused={isFocused}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          initial={{ width: '120px' }} // initial state for animation
          animate={{ width: isFocused ? '200px' : '120px' }} // dynamic width change based on focus
          transition={{ duration: 0.3 }} // smooth transition for width change
        />
      </InputWrapper>
    </Navbar>
        </>
    )
}


