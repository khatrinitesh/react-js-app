import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const MegaMenuComp = () => {
  return (
    <>
      <MegaMenu/>
    </>
  );
}

export default MegaMenuComp;

// Styled Components for Mega Menu
const MenuContainer = styled.nav`
  background-color: #333;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.div`
  position: relative;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  
  &:hover {
    background-color: #444;
  }
`;

const MegaMenuWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: #222;
  padding: 20px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 10;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
`;

const CategoryTitle = styled.h4`
  color: #fff;
  margin-bottom: 10px;
`;

const CategoryItem = styled.a`
  color: #ccc;
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
    color: #fff;
  }
`;

const MegaMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <MenuContainer>
        <MenuItem onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
          Products
          <MegaMenuWrapper
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
            transition={{ duration: 0.3 }}
          >
            <Category>
              <CategoryTitle>Electronics</CategoryTitle>
              <CategoryItem href="#">Laptops</CategoryItem>
              <CategoryItem href="#">Phones</CategoryItem>
              <CategoryItem href="#">Cameras</CategoryItem>
            </Category>
            <Category>
              <CategoryTitle>Clothing</CategoryTitle>
              <CategoryItem href="#">Men</CategoryItem>
              <CategoryItem href="#">Women</CategoryItem>
              <CategoryItem href="#">Kids</CategoryItem>
            </Category>
            <Category>
              <CategoryTitle>Home</CategoryTitle>
              <CategoryItem href="#">Furniture</CategoryItem>
              <CategoryItem href="#">Appliances</CategoryItem>
              <CategoryItem href="#">Decor</CategoryItem>
            </Category>
            <Category>
              <CategoryTitle>Sports</CategoryTitle>
              <CategoryItem href="#">Gear</CategoryItem>
              <CategoryItem href="#">Fitness</CategoryItem>
              <CategoryItem href="#">Outdoor</CategoryItem>
            </Category>
          </MegaMenuWrapper>
        </MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuContainer>
    );
  };
