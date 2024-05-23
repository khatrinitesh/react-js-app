import React, { useState } from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  width: 200px;
  background-color: #333;
  color: white;
`;

const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;

const VerticalMenu = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(item);
      // Add logic to handle menu item click
    };

  return (
    <>
      <MenuContainer>
      <MenuItem onClick={() => handleItemClick('Item 1')} style={{ backgroundColor: selectedItem === 'Item 1' ? '#666' : '',color:selectedItem === 'Item 1' ? 'powderblue' : "green"}}>
        Item 1
      </MenuItem>
      <MenuItem onClick={() => handleItemClick('Item 2')} style={{ backgroundColor: selectedItem === 'Item 2' ? '#666' : '',color:selectedItem === 'Item 2' ? 'powderblue' : "green"}}>
        Item 2
      </MenuItem>
      <MenuItem onClick={() => handleItemClick('Item 3')} style={{ backgroundColor: selectedItem === 'Item 3' ? '#666' : '',color:selectedItem === 'Item 3' ? 'powderblue' : "green"}}>
        Item 3
      </MenuItem>
      <MenuItem onClick={() => handleItemClick('Item 4')} style={{ backgroundColor: selectedItem === 'Item 4' ? '#666' : '',color:selectedItem === 'Item 4' ? 'powderblue' : "green"}}>
        Item 4
      </MenuItem>
      <MenuItem onClick={() => handleItemClick('Item 5')} style={{ backgroundColor: selectedItem === 'Item 5' ? '#666' : '',color:selectedItem === 'Item 5' ? 'powderblue' : "green"}}>
        Item 5
      </MenuItem>
    </MenuContainer>
    </>
  )
}

export default VerticalMenu
