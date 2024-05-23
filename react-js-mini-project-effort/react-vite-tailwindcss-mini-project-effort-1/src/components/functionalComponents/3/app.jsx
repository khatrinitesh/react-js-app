import React, { useState,useEffect } from 'react'

export default function CustomApp() {
    const [person,setPerson] = useState({
        userName:'',
        firstName:'',
        lastName:''
    })


  const logName = () => {
    console.log(person.userName);
    console.log(person.firstName);
    console.log(person.lastName);
  };

  const handleChange = e => {
    setPerson(() => ({
        ...person,
        [e.target.name]:e.target.value
    }))
}

  return (
    <div>
      <h3>This is a Functional Component</h3>
      <h1 style={{ color: 'red' }}>A Functional Component</h1>
      <input
        type="text"
        onChange={handleChange} name='userName'
        value={person.userName}
        placeholder="Your Username"
      />
      <input
        type="text" name='firstName'
        onChange={handleChange}
        value={person.firstName}
        placeholder="Your First Name"
      />
      <input
        type="text" name='lastName'
        onChange={handleChange}
        value={person.lastName}
        placeholder="Your Last Name"
      />
      <button
        className="btn btn-large right"
        onClick={logName}
      >
        Log Names
      </button>
    </div>
  );
}
