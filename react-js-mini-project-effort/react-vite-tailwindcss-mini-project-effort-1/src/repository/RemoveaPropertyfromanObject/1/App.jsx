import React from 'react'

const RemovePropertyObjApp = () => {
  return (
    <>
     <RemoveProperty/> 
    </>
  )
}

export default RemovePropertyObjApp

const RemoveProperty = () => {
    const originalObject = {
        id:1,
        name:'nitesh',
        age:34,
        city:'mumbai'
    }

    const objectAfterDeletion = {...originalObject};
    delete objectAfterDeletion.age;

    const {age,...objectWithoutAge} = originalObject

    return(
        <>
          <h1>Remove Property Example</h1>
          <p>Original Object: {JSON.stringify(originalObject)}</p>
          <p>Object after deletion using delete: {JSON.stringify(objectAfterDeletion)}</p>
        <p>Object without the 'age' property: {JSON.stringify(objectWithoutAge)}</p>
        </>
    )
}
