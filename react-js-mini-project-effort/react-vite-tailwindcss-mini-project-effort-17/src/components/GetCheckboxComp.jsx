import React, { useState } from 'react';
import styled from 'styled-components';

const GetCheckboxComp = () => {
  return (
    <>
     <MyComponent/> 
    </>
  );
}

export default GetCheckboxComp;

// Styled Components for Checkbox and Label
const CheckboxWrapper = styled.div`
  margin: 10px 0;
`;

const Label = styled.label`
  margin-left: 8px;
`;

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 8px;
`;

const MyComponent = () => {
    // Use state to hold checkbox values
    const [checkboxes, setCheckboxes] = useState({
      option1: false,
      option2: false,
      option3: false,
    });
  
    // Handle checkbox change event
    const handleCheckboxChange = (e) => {
      const { name, checked } = e.target;
      setCheckboxes(prevState => ({
        ...prevState,
        [name]: checked,
      }));
    };
  
    const handleSubmit = () => {
      console.log('Selected Checkboxes:', checkboxes);
    };
  
    return (
      <div>
        <h3>Select options:</h3>
        <CheckboxWrapper>
          <Checkbox
            name="option1"
            checked={checkboxes.option1}
            onChange={handleCheckboxChange}
          />
          <Label htmlFor="option1">Option 1</Label>
        </CheckboxWrapper>
  
        <CheckboxWrapper>
          <Checkbox
            name="option2"
            checked={checkboxes.option2}
            onChange={handleCheckboxChange}
          />
          <Label htmlFor="option2">Option 2</Label>
        </CheckboxWrapper>
  
        <CheckboxWrapper>
          <Checkbox
            name="option3"
            checked={checkboxes.option3}
            onChange={handleCheckboxChange}
          />
          <Label htmlFor="option3">Option 3</Label>
        </CheckboxWrapper>
  
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };
  