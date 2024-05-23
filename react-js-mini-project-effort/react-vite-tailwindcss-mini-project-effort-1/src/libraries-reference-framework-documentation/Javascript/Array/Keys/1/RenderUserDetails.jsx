import React from 'react'

const RenderUserDetails = () => {

     // object with dynamic keys

     const user = {
        id:1,
        username:'test',
        email:'xyz@gmail.com'
    }

    const keys = Object.keys(user);

  return (
    <div>
      <ul>
        {keys.map((key) => (
          <li key={key}>
            <strong>{key}:</strong> {user[key]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RenderUserDetails
