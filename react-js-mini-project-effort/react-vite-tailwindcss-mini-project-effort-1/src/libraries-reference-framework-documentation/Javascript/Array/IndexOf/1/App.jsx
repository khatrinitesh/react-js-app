import React, { useState } from 'react';

const CustomApp = () => {

    // initial the array 
    const [fruits,setFruits] = useState(['apple', 'banana', 'cherry', 'date'])


    // function to find the index of a fruit 
    const handleFindIndex = () => {
        const fruitToFind = 'cherry';
        const index = fruits.indexOf(fruitToFind)
        if(index !== -1){
            console.log(`${fruitToFind} found at index: ${index}`);
        } 
        else{
            console.log(`${fruitToFind} not found`);
        }
    }

    // render the component
  return (
    <div>
      <p>Fruits: {JSON.stringify(fruits)}</p>
      <button onClick={handleFindIndex}>Find index of 'cherry'</button>
    </div>
  )
}

export default CustomApp
