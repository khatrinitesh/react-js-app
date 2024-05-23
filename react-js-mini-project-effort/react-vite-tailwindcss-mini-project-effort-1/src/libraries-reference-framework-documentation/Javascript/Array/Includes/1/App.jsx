import React, { useState } from 'react';

const CustomApp = () => {

    // initial array 
    const [fruits,setFruits] = useState(['apple', 'banana', 'orange', 'grape'])

    // function to check if banana is included in the array
    const handleCheckIncludes = () => {
        const isBananaIncluded = fruits.includes('banana')
        if(isBananaIncluded){
            console.log("the array includes 'banana'")
        }
        else{
            console.log("the array doesn't includes 'banana'.")
        }
    }

    // render the component
  return (
    <div>
      <p>Fruits: {JSON.stringify(fruits)}</p>
      <button onClick={handleCheckIncludes}>CLick</button>
    </div>
  )
}

export default CustomApp
