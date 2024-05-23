import React from 'react'

export default function Parent() {
  return (
    <div>
      <Child name='nitesh' age={34}/>
    </div>
  )
}

function Child(props){
    return(
        <>
         <h1>{props.name} - {props.age}</h1>
        </>
    )
}
