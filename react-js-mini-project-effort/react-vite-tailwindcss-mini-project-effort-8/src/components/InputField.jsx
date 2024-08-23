import React from 'react';

const InputField = ({
    id,
    name,
    type,
    value,
    onChange,
    error,
    placeholder,
    maxLength,
    spellCheck = false // Add a prop to control spellCheck
}) => {
    return (
      <>
        <input
        spellCheck={spellCheck}  // Set spellCheck attribute
          id={id}
          maxLength={maxLength}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-1 block px-2 h-10 outline-none w-full border border-gray-300 rounded-md shadow-sm"
        />
        {error && <div className="text-red-600 text-sm">{error}</div>}
      </>
    );
};

export default InputField;
