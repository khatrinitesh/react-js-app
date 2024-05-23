import React, { useState } from 'react';

const CustomApp = () => {

    // initial nested array 
    const [nestedArray,setNestedArray] = useState([1, [2, [3, 4, [5, 6]]], 7, 8])


    // function to flattern the array
    const handleFlattern = () => {
        const flattenedArray = nestedArray.flat();
        console.log(flattenedArray)
    }


    // render the component
  return (
    <div>
        <p>nested array: {JSON.stringify(nestedArray)}</p>
        <button onClick={handleFlattern}>Click</button>
    </div>
  )
}

export default CustomApp
