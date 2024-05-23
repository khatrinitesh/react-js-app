import React, { useState } from 'react';

const CustomApp = () => {

    // initial array 
    const [num,setNum] = useState([1, 2, 3, 4, 2, 5, 2])

    // function to find the last index of the number 2 
    const handleLastIndex = () => {
        const lastIndex = num.lastIndexOf(2);

        if(lastIndex !== -1){
            console.log('Last index of 2:', lastIndex);
        }
        else{
            console.log('Element not found in the array');
        }
    }

    // Render the component
  return (
    <div>
      <p>Numbers: {JSON.stringify(num)}</p>
      <button onClick={handleLastIndex}>Click</button>
    </div>
  )
}

export default CustomApp
