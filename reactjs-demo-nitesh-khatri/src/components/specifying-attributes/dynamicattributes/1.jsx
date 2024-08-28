import React from 'react';

const DynamicAttributes = ({isActive}) => {
  return (
    <>
      <input
        type="checkbox"
        id="toggle"
        checked={isActive}
        aria-checked={isActive}
        style={{ transform: `scale(${isActive ? 1.2 : 1})` }}
      />
      <label htmlFor="toggle"></label>
    </>
  );
}

export default DynamicAttributes;
