import React from 'react';

const InputField = ({value, onChange, maxLength, placeholder }) => {
  return (
    <>
       <input
       className='shadow-[1px_10px_10px_#ddd] w-full outline-none h-[40px] px-[10px] rounded-[10px]'
         type="text"          // Input type is text
         value={value}        // Controlled value from parent
         onChange={onChange}  // Change handler passed as a prop
         maxLength={maxLength} // Max characters input can accept
         placeholder={placeholder} // Placeholder text
      />
    </>
  );
}

export default InputField;
