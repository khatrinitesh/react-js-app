import React, { useState } from 'react';

const CustomApp = () => {

    // initial array 
    const [fruits,setFruits] = useState(['apple','banana','grape']);

    // function to use forEach to log each fruit 
    const handleForEach = () => {
        console.log('fruits:')
        fruits.forEach((f) => console.log(f))
    }

    // render the component
  return (
    <div>
      <p>Fruits: {JSON.stringify(fruits)}</p>
      <button onClick={handleForEach}>use foreach to log each fruit</button>
    </div>
  )
}

export default CustomApp
