import React, { useState } from 'react';

const Data = () => {

    // Initial array of data
  const [fruits, setFruits] = useState(['Apple', 'Banana', 'Orange', 'Grapes']);
  return (
    <>
      {fruits.map((val,index) => {
        return(
            <div key={index}>
                <h3>{val}</h3>
            </div>
        )
      })}
    </>
  )
}

export default Data
