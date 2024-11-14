import React, { useState } from 'react';

const CustomCheckboxComp = () => {
    const [isChecked,setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked)
    }
  return (
    <>
      <input type="checkbox" value={isChecked} onChange={handleToggle} />
      {isChecked ? 'checked' : 'unchecked'}
    </> 
  );
}

export default CustomCheckboxComp;
