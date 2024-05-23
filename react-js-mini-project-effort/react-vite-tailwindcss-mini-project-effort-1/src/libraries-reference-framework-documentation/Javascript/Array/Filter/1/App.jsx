import React, { useState } from 'react';

const CustomApp = () => {
    // Initial array
  const [numberArray, setNumberArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const handleFilter = () => {
    const newFilter = numberArray.filter((val) => val % 2 === 0)
    console.log('filterd array',newFilter)
  }
  return (
    <div>
      <p>Number Array: {JSON.stringify(numberArray)}</p>
      <button onClick={handleFilter}>Click</button>
    </div>
  )
}

export default CustomApp
