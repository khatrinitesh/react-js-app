import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { data } from './../constants/filterelementData';

 // component implementation

const FilterElementComp = () => {
  return (
    <>
      <FilterableList/>
    </>
  );
}

export default FilterElementComp;

const FilterableList = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');
  
    const handleFilterChange = (filter) => {
      setSelectedFilter(filter);
    };
  
    // Filter the data based on the selected category
      const filteredData = selectedFilter === 'All' ? data : data.filter(item => item.category === selectedFilter)
  
    return (
      <Container>
        {/* Filter Button */}
        <FilterButtonContainer>
          <FilterButton onClick={() => handleFilterChange('All')}>All</FilterButton>
          <FilterButton onClick={() => handleFilterChange('Fruit')}>Fruit</FilterButton>
          <FilterButton onClick={() => handleFilterChange('Vegetable')}>Vegetable</FilterButton>
        </FilterButtonContainer>
  
        {/* Animated list of filtered items */}
        <ItemList>
          <AnimatePresence>
            {filteredData.map(item => (
              <Item
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {item.name}
              </Item>
            ))}
          </AnimatePresence>
        </ItemList>
      </Container>
    );
  };

  
  // Styled Components

const Container = styled.div`
width: 300px;
margin: 50px auto;
font-family: Arial, sans-serif;
padding: 20px;
border-radius: 8px;
background-color: #f9f9f9;
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const FilterButtonContainer = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 20px;
`;

const FilterButton = styled.button`
background-color: #007bff;
color: white;
border: none;
border-radius: 5px;
padding: 10px;
cursor: pointer;
font-size: 14px;

&:hover {
  background-color: #0056b3;
}

&:active {
  background-color: #004080;
}
`;

const ItemList = styled.div`
display: flex;
flex-direction: column;
`;

const Item = styled(motion.div)`
background-color: #ffffff;
padding: 10px;
margin-bottom: 10px;
border-radius: 5px;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
font-size: 16px;
font-weight: bold;

&:hover {
  background-color: #f1f1f1;
}
`;
