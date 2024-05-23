import React, { useState } from 'react';

const CustomApp = () => {

    // initial array 
    const [numberA,setNumberA] = useState([1,2,3,4,5])

    // function to fill the array with a specific value 
    const handleFillArray = () => {
        const newArray = [...numberA]
        newArray.fill('happy')
        setNumberA(newArray)
    }
  return (
    <div>
      <p>{JSON.stringify(numberA)}</p>
      <button onClick={handleFillArray}>Click to fill array</button>
    </div>
  )
}

export default CustomApp
