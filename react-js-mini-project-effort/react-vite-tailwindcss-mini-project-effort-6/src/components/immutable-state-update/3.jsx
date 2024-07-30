import React, { useState } from 'react'

const Immutable = () => {
    const [state, setState] = useState({ name: 'John', age: 25 });
    const [newName,setNewName] = useState('');

    const updatedName =() => {
        setState((prevState) => ({
            ...prevState,
            name:newName
        }));
        setNewName('');
    }

    const handleChange = (e) => {
        setNewName(e.target.value)
    }
  return (
    <div>
          <h1>Name: {state.name}</h1>
          <h2>Age: {state.age}</h2>
          <input type="text" value={newName} onChange={handleChange}  placeholder="Enter new name"  />
        <button onClick={updatedName}>Update</button>
    </div>
  )
}

export default Immutable