import React, { useState } from 'react';

const CustomApp = () => {

    // Initial array
  const [originalArray, setOriginalArray] = useState([1, 2, 3, 4, 5]);
  const handleCopyWithin = () => {
    const newArray = [...originalArray];
    newArray.copyWithin(1,3,5)
    setOriginalArray(newArray);
  }
  return (
    <div>
       <p>Original Array: {JSON.stringify(originalArray)}</p>
       <button onClick={handleCopyWithin}>
        Copy elements within the array
      </button>
    </div>
  )
}

export default CustomApp
