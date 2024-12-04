import React, { useState } from 'react';

const HooksUseState = () => {
  return (
    <>
      <UseStateExample/>
    </>
  );
}

export default HooksUseState;

const UseStateExample = () => {

    const [num,setNum] = useState(0);

    const btnCount= () => {
        setNum((prev) => prev + 1)
    }
    return(
        <>
        <p>Number: {num}</p>
        <button onClick={btnCount}>Click</button>
        </>
    )
}
