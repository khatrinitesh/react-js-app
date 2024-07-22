import React from 'react'

const CustomApp = () => {

    const user = {
        name:'title',
        age:24,
        isLoggedIn:true
    }
  return (
    <>
      <UserProfile user={user}/>
    </>
  )
}

export default CustomApp

function UserProfile({user}){
    const {name,age,isLoggedIn} = user
    return(
        <>
         {isLoggedIn ? (
            <div>
                <h2>{name}</h2>
                <p>{age}</p>
            </div>
         ) : (
            <p>Please log in to see the profile information.</p>
         )
         }
        </>
    )
}