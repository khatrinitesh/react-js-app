import React, { useState } from 'react';

const CustomApp = () => {

    // initial array of objects 
    const [users,setUsers] = useState([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' },
    ]);

    // function to find the index of a user by name
    const handleFindIndex = () => {
        const userNameToFind = 'Alice'
        const userIndex = users.findIndex((val)=> val.users === userNameToFind)

        if(userIndex !== -1){
            console.log('User found at index:', userIndex);
        } else {
          console.log('User not found');
        }
    }

   

    // render the component
  return (
    <>
      <p>Users: {JSON.stringify(users)}</p>
      <button onClick={handleFindIndex}>Find index of user by name</button>
    </>
  )
}

export default CustomApp
