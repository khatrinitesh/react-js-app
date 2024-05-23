import React, { useState } from 'react';

const CustomApp = () => {

    // initial array of objects 
    const [users,setUsers] = useState([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
        { id: 4, name: 'David' },
        { id: 5, name: 'Bob' },
    ])

    // custom function to find the last user by name 
    const findLast = (array,condition) => {
        for(let i= array.length - 1;i>=0;i--){
            if(condition(array[i])){
                return array[i]
            }
        }
        return undefined;
    }

    // function to find the last user named 'Bob'
    const handleFindUser = () => {
        const userNameToFind = 'Bob'
        const lastBob = findLast(user((val) => val.name === userNameToFind))

        if(lastBob){
            console.log('Last user named Bob:', lastBob);
          } else {
            console.log('User not found');
          }
    };

    // render the component
  return (
    <div>
      <p>{JSON.stringify(users)}</p>
      <button onClick={handleFindUser}>Click</button>
    </div>
  )
}

export default CustomApp
