import React, { useState } from 'react';

const Example = () => {
  return (
    <>
    <ToggleVisiBility/>
    </>
  );
}

export default Example;

const ToggleVisiBility = () =>{
    const [isVisible,setIsVisible] = useState(false);

    const btnToggle = () => {
        setIsVisible(!isVisible)
    }
    return(
        <>
        <button onClick={btnToggle}>{isVisible ? 'hidden' : 'visible'}</button>
        {isVisible ? (<><p>This is visible</p></>) : (<><p>This is hidden</p></>)}
        </>
    )
}

