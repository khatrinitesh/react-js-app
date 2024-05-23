import React, { useState } from 'react';

const CustomApp = () => {

    // initial array of strings 
    const [stringArray,setStringArray] = useState(['apple', 'banana', 'cherry']);

    const handleJoinArray = () => {
        const joinedString = stringArray.join(', ')
        console.log('Joined String:',joinedString)
    }
  return (
    <>
      <p>String Array: {JSON.stringify(stringArray)}</p>
      <button onClick={handleJoinArray}>Join array elements into a string</button>
    </>
  )
}

export default CustomApp
