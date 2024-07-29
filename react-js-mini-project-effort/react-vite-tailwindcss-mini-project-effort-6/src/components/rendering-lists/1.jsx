import React from 'react'

const RenderingLists = () => {
    const users = [
        { id: 1, name: "Alice", age: 25 },
        { id: 2, name: "Bob", age: 30 },
        { id: 3, name: "Charlie", age: 35 },
      ];
    
  return (
    <div>
      <UserList users={users}/>
    </div>
  )
}

export default RenderingLists

const UserList = ({users}) => {
    return(
        <>
         <ul>
            {users.map((user => (
                <li key={user.id}>
                    {user.name} is {user.age} years old.
                </li>
            )))}
         </ul>
        </>
    )
}
