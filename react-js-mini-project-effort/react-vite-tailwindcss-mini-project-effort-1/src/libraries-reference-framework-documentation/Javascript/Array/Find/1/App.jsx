import React, { useState } from 'react';

const CustomApp = () => {

    // initial array of objects 
    const [users,setUsers] = useState([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' },
    ])

    // function to find a user by name 
    const handleFindUser = () => {
        const userNameToFind = 'Bob'
        const userIdToFind = 3
        const foundUser = users.find((val) => val.name === userNameToFind)
        const foundUserId = users.find((val) => val.id === userIdToFind)

        if(foundUser || foundUserId){
            console.log('User found:', foundUser,'User found ID:', foundUserId);
        } else {
          console.log('User not found');
        }
    }

    //  render the component
  return (
    <div>
      <p>Users: {JSON.stringify(users)}</p>
      <button onClick={handleFindUser}>Find user by name</button>
    </div>  
  )
}

export default CustomApp
