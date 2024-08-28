import React, { useState } from 'react';

const Example = () => {
  return (
    <div>
      <Result user="niteshkhatri"/> 
    </div>
  );
}

export default Example;

const Result = ({user}) => {
    

    const username = user.name || 'guest'

    return(
        <>
         <h1>Welcome, {username}</h1>
            
        </>
    )
}
