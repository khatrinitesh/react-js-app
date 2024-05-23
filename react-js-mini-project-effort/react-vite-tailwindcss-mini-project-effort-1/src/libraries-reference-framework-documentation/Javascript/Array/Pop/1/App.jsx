import React, { useState } from 'react';

const CustomApp = () => {

    // initial array 
    const [fruits,setFruits] = useState(['apple','banana','orange','grape'])

    // function to remove  the last fruit using pop 
    const handlePop = () => {
        const poppedFruit = fruits.pop();
        console.log('Popped fruits',poppedFruit);
        setFruits([...fruits])
    }
  return (
    <div>
      <p>Fruits: {JSON.stringify(fruits)}</p>
      <button onClick={handlePop}>Remove the last fruit</button>
    </div>  
  )
}

export default CustomApp
