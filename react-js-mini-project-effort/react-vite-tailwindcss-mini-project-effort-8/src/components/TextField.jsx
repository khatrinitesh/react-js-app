import React from 'react';

const TextField = ({
    id,
    name,
    value,
    onChange,
    error,
    placeholder,
    maxLength,
    spellCheck = false
  }) => {
    return (
      <div className="textarea-container">
        <textarea
          id={id}
          name={name}
          value={value} 
          onChange={onChange}
          placeholder={placeholder}
          maxLength={maxLength}
          spellCheck={spellCheck}
          className={`mt-1 block px-2 h-10 outline-none w-full border border-gray-300 rounded-md shadow-sm overflow-hidden resize-none textarea ${error ? 'textarea-error' : ''}`}
        />
        {error && <span className="text-red-600 text-sm error-message">{error}</span>}
      </div>
    );
  };

export default TextField;
