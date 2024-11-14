
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CustomRadioComp = () => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleChange = (value) => {
      setSelectedValue(value);
    };
  return (
    <>
       <div className="radio-group">
      <RadioButton
        label="Option 1"
        value="option1"
        selectedValue={selectedValue}
        onChange={handleChange}
      />
      <RadioButton
        label="Option 2"
        value="option2"
        selectedValue={selectedValue}
        onChange={handleChange}
      />
      <RadioButton
        label="Option 3"
        value="option3"
        selectedValue={selectedValue}
        onChange={handleChange}
      />
    </div>
    </>
  );
}

export default CustomRadioComp;


const RadioButton = ({ label, value, selectedValue, onChange }) => {
    const isSelected = selectedValue === value;
  
    return (
      <div className="radio-container">
        <label className="radio-label">
          <motion.div
            className={`radio-circle ${isSelected ? 'selected' : ''}`}
            initial={{ scale: 1 }}
            animate={{ scale: isSelected ? 1.5 : 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => onChange(value)}
          >
            {isSelected && (
              <motion.div
                className="inner-circle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </motion.div>
          {label}
        </label>
      </div>
    );
  };