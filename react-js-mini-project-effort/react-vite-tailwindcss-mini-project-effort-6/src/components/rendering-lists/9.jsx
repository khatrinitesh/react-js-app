import React, { useState } from 'react'

// conditional rendering with multiple conditions
const ConditionalRendering = () => {

    const [user,setUsers] = useState('guest');

    const handleAdmin = () => {
        setUsers('admin')
    }
    const handleHappy = () => {
        setUsers('happy')
    }
    const handleGuest = () => {
        setUsers('guest')
    }
  return (
    <div>
      {user === 'admin' && <p>Welcome, admin</p>}
      {user === 'happy' && <p>Welcome, happy</p>}
      {user === 'guest' && <p>Welcome, guest</p>}
      <button onClick={handleAdmin}>set admin</button>
      <button onClick={handleHappy}>set happy</button>
      <button onClick={handleGuest}>set guest</button>
    </div>
  )
}

export default ConditionalRendering
