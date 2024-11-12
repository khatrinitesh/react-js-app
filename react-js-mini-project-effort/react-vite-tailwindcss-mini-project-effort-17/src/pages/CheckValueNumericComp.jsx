import React, { useState } from 'react';

const CheckValueNumericComp = () => {
    const [inputValue, setInputValue] = useState('');
    const [isNumericValue, setIsNumericValue] = useState(null);
  
    // Function to check if value is numeric
    const isNumeric = (value) => {
      // Check if the value is a valid number
      return !isNaN(value) && value.trim() !== '';
    };
  
    // Handle input change
    const handleInputChange = (e) => {
      const value = e.target.value;
      setInputValue(value);
  
      // Check if the value is numeric and update state
      setIsNumericValue(isNumeric(value));
    };
  
  return (
    <>
      <div style={styles.container}>
      <h1>Check if Value is Numeric</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a value"
        style={styles.input}
      />
      {isNumericValue !== null && (
        <div style={styles.result}>
          {isNumericValue ? (
            <span style={styles.valid}>Valid Numeric Value</span>
          ) : (
            <span style={styles.invalid}>Invalid Value</span>
          )}
        </div>
      )}
    </div> 
    </>
  );
}

export default CheckValueNumericComp;

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f4f9',
      fontFamily: 'Arial, sans-serif',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      width: '200px',
      borderRadius: '10px',
      border: '1px solid #ccc',
      marginBottom: '10px',
      outline: 'none',
    },
    result: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    valid: {
      color: 'green',
    },
    invalid: {
      color: 'red',
    },
  };
  
