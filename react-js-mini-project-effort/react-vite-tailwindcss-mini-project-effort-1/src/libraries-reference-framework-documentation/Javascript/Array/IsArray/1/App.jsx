import React from 'react'

const CustomApp = () => {

    const btnCheckArray = (val) => {
        if(Array.isArray(val)){
            console.log('yes it is an array')
        }
        else{
            console.log('yes it is not there an array')
        }
    }

     // Examples of values to check
    const arrayValue = [1, 2, 3];
    const stringValue = 'Hello, world!';
    const objectValue = { key: 'value' };
    const booleanValue = true

  return (
    <div>
      <p>Example Values:</p>
      <pre>{JSON.stringify(arrayValue)}</pre>
      <pre>{JSON.stringify(stringValue)}</pre>
      <pre>{JSON.stringify(objectValue)}</pre>

      <button onClick={() => btnCheckArray(arrayValue)}>Click (Array)</button>
      <br/>
      <button onClick={() => btnCheckArray(stringValue)}>Click (String)</button>
      <br/>
      <button onClick={() => btnCheckArray(objectValue)}>Click (Object)</button>
      <br/>
      <button onClick={() => btnCheckArray(booleanValue)}>Click (booleanValue)</button>
    </div>
  )
}

export default CustomApp
