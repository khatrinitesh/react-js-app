import React, { useState } from 'react';

export default function CustomApp() {
    const [user, setUser] = useState({ name: '', age: 0 });

    

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        });
    }
  return (
    <>
        <div>
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={user.name}
                onChange={handleChange}
            />
            <input
                type="number"
                name="age"
                placeholder="Age"
                value={user.age}
                onChange={handleChange}
            />
            <h2>{user.name}, {user.age} years old</h2>
        </div>
    </>
  )
}
