import React from 'react'
import { useState } from 'react'

export default function PropsCustom() {
  return (
    <>
      <Parent/>
    </>
  )
}

const Parent = () => {
    const [user,setUser] = useState({
        name:'nitesh'
    });

    const handleChange = (e) => {
        e.preventDefault();
        setUser({
            ...user,
            name:e.target.value
        });
    }

    return(
        <>
         <h1>Parent</h1>
         <br/>
         <input onChange={handleChange} value={user.name}/> 
         <Child user={user}/>
        </>
    )
}


const Child = ({user}) => {
    return(
        <>
        <h2>Child</h2>
        <h1>{user.name}</h1>
        </>
    )
}

