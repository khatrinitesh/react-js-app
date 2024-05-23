import React from 'react'
import { useState } from 'react'

export default function CustomApp() {
    const [person,setPerson] = useState({name:'nitesh',age:34})

    const updateChange = () => {
        setPerson({...person,name:'sameet',age:41})
    }
  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={updateChange}>Click</button>
    </div>
  )
}
