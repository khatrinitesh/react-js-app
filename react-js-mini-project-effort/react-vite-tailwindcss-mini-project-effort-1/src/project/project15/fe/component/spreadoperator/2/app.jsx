import React, { useState } from 'react';

export default function SpreadOperator() {

    const [user,setUser] = useState({
        name:'nitesh',
        age:34,
        email:'nitesh.khatri88@gmail.com'
    });

    const btnChange = () => {
        setUser({...user,name:'sameet',age:41,email:'sameet210000@gmail.com'})
    }
  return (
    <div>
      <h3>{user.name}</h3>
      <h3>{user.age}</h3>
      <h3>{user.email}</h3>
      <button onClick={btnChange}>Click change</button>
    </div>
  )
}
