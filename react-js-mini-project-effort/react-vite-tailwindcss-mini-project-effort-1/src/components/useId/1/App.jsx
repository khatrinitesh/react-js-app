import React, { useRef } from 'react';

const useId = () => {
    const idRef = useRef(0);
    return () => `id-${idRef.current++}`
}

const CustomApp = () => {

    const generateId = useId();

    const formFields = [
      { label: 'Username', type: 'text' },
      { label: 'Password', type: 'password' },
      { label: 'Email', type: 'email' },
    ];

    
  return (
    <>
        <form>
        {formFields.map((field) => (
            <div key={generateId()} className="form-group">
            <label htmlFor={generateId()}>{field.label}</label>
            <input
                type={field.type}
                id={generateId()}
                name={field.label.toLowerCase()}
            />
            </div>
        ))}
        <button className="bg-[red] text-white px-[10px] py-[5px]" type="submit">Submit</button>
        </form>
    </>
  )
}

export default CustomApp
