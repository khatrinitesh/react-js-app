import React, { useState } from 'react';

const CustomApp = () => {
  return (
    <>
      <ParentComponent/>
    </>
  )
}

export default CustomApp


// parent component
const ParentComponent = () => {
    const [parentData,setParentData] = useState('Initial data');

    const handleDataChange  =() => {
        setParentData('Updated data')
    }
    return(
        <>
        <h2 className='text-[30px] font-bold'>Data Flow in React Example</h2>
        <button className='bg-[red] text-white' onClick={handleDataChange}>Update Data</button>
        <ChildComponent data={parentData}/>
        </>
    )
}
// child component
const ChildComponent = ({data}) => {
    return(
        <>
        <p>Data from parent: {data}</p>
        </>
    )
}