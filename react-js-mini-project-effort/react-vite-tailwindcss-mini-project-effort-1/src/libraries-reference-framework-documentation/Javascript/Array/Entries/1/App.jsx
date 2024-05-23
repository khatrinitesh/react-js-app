import React, { useState } from 'react';

const CustomApp = () => {
    // Initial array
  const [originalArray, setOriginalArray] = useState(['apple', 'banana', 'cherry']);

  // function to demonstrate the use of entries()
  const handleEntries = () => {
    const iterator = originalArray.entries();
    const resultArray = Array.from(iterator)
    console.log(resultArray)
  }
  return (
    <div>
      <p>Original Array: {JSON.stringify(originalArray)}</p>
      <button onClick={handleEntries}>Get entries of the array</button>
    </div>
  )
}

export default CustomApp
