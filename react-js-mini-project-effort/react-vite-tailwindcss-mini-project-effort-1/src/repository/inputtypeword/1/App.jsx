import React, { useState } from "react";

const WordInput = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    // Allow only letters and spaces
    const sanitizedValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");

    // Limit the length to 20 characters
    const truncatedValue = sanitizedValue.slice(0, 20);
    setInputValue(truncatedValue);
  };

  return (
    <div>
      <label htmlFor="wordInput">Enter Word (Max 20 characters):</label>
      <input
        type="text"
        id="wordInput"
        name="wordInput"
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default WordInput;
