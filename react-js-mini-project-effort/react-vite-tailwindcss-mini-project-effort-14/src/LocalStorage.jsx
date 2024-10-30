import React, { useState, useEffect } from 'react';

const LocalStorage = () => {
  return (
    <>
      <Example/>
    </>
  );
}

export default LocalStorage;

const Example = () => {

    const [name,setName] = useState('name');

    useEffect(() => {
        const savedName = localStorage.getItem('name');
        if(savedName){
            setName(savedName);
        }
    },[]);

    const handleSave = () => {
        localStorage.setItem('name',name)
        alert('Name saved to localStorage!')
    }

    const handleRemove = () => {
        localStorage.removeItem('name',name)
        alert('Name removed from localStorage')
    }
    return( 
        <>
      <h1>LocalStorage Example</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={handleSave}>Save Name</button>
      <button onClick={handleRemove}>Remove Name</button>
      <p>Your saved name: {name}</p>
        </>
    )
}

