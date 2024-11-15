import React, { useState,useEffect,useRef  } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';

const FilterDropdownComp = () => {
  return (
    <>
      <FilterResult/>
    </>
  );
}

export default FilterDropdownComp;

const FilterResult = () => {

    const [isOpen, setIsOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('All');

  // Refs for the dropdown and filter button
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelectFilter = (filter) => {
    setSelectedFilter(filter);
    setIsOpen(false); // close dropdown after selecting
  };

  // Close dropdown if mouse leaves both the button and dropdown
  const handleMouseLeave = (event) => {
    if (
      dropdownRef.current && !dropdownRef.current.contains(event.relatedTarget) &&
      buttonRef.current && !buttonRef.current.contains(event.relatedTarget)
    ) {
      setIsOpen(false);
    }
  };

  // Close dropdown when clicked outside (using event listeners)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


    return(
        <>
          <Container>
      <FilterButton
        ref={buttonRef}
        onClick={toggleDropdown}
        onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves the button
      >
        <FaFilter size={20} />
        {selectedFilter}
      </FilterButton>

      <AnimatePresence>
        {isOpen && (
          <Dropdown
            ref={dropdownRef}
            as={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <DropdownItem onClick={() => handleSelectFilter('All')}>All</DropdownItem>
            <DropdownItem onClick={() => handleSelectFilter('Option 1')}>Option 1</DropdownItem>
            <DropdownItem onClick={() => handleSelectFilter('Option 2')}>Option 2</DropdownItem>
            <DropdownItem onClick={() => handleSelectFilter('Option 3')}>Option 3</DropdownItem>
          </Dropdown>
        )}
      </AnimatePresence>
    </Container>
        </>
    )
}

// Styled Components

const Container = styled.div`
  position: relative;
  display: inline-block;
  font-family: Arial, sans-serif;
`;

const FilterButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  overflow: hidden;
  z-index: 10;
`;

const DropdownItem = styled.div`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f1f1f1;
  }
`;