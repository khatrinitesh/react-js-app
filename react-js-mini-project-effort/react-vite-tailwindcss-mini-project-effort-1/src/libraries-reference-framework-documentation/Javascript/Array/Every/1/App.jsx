import React, { useState } from 'react';

const CustomApp = () => {

    // initial array 
    const [numberA,setNumberA] = useState([2,4,6,8,10]);

    // function to check if all numbers are even 
    const handleEvenClick = () => {
        const areAllEven = numbersA.every((val) => val % 2 === 0)
        if(areAllEven){
            console.log('yes it is even.')
        }
        else{
            console.log('yes it is not even.')
        }
    }

    // render the component
  return (
    <div>
        <p>Number Array: {JSON.stringify(numberA)}</p>
        <button onClick={handleEvenClick}>Check if all numbers are even</button>
    </div>
  )
}

export default CustomApp
