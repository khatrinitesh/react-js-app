import React, { useState } from 'react';

const CustomApp = () => {

    const [parentState,setParentState] = useState({
        data:'data from parent',
        count:0
    })

    const updateParentState = () => {
        setParentState((prevState) => ({
            ...prevState,
            count:prevState.count + 1,
            data:'updated data from child'
        }));
    };
  return (
    <div>
      <h2 className='font-bold text-[24px]'>Parent Component</h2>
      <p>Data from parent: {parentState.data}</p>
      <p>Count: {parentState.count}</p>
      <button onClick={updateParentState}>Update parent state</button>
      <hr/>
      <ChildComp parentState={parentState}/>

    </div>
  )
}

export default CustomApp

const ChildComp = ({parentState}) => {
    return(
        <>
        <h3 className='font-bold text-[24px]'>Child Component</h3>
        <p>Data from parent: {parentState.data}</p>
        <p>Count from parent: {parentState.count}</p>
        </>
    )
}
