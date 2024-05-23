import React, { useState, useEffect } from 'react';

export default function CustomApp() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data));
    },[])
  return (
    <div>
        {users.map((val,id) => {
            const {name,email} = val
            return(
                <div key={id}>
                    <h3>{name}</h3>
                    <a href={`mailto:${email}`}>{email}</a>
                </div>
            )
        })}
    </div>
  )
}
