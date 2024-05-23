import React, { useState } from 'react';

const ChangePlaceholderColorApp = () => {
     // State to manage the placeholder text
  const [placeholderText, setPlaceholderText] = useState('Enter your text');

   // Function to update the placeholder text
   const changePlaceholder = () => {
    setPlaceholderText('New placeholder text');
  };
  return (
    <div>
       {/* Input element with dynamic placeholder */}
       <input
        type="text"
        placeholder={placeholderText}
      />

      {/* Button to change the placeholder text */}
      <button onClick={changePlaceholder}>
        Change Placeholder
      </button>
    </div>
  )
}

export default ChangePlaceholderColorApp
