import React from 'react'

export default function CustomApp() {
    const arr = ['A', 'B', 'C', 'D'];
  return (
    <div>
      <Books first={arr[0]} second={arr[1]}/>
    </div>
  )
}


function Books({first,second}){
    return(
        <>
         <div>{first} - {second}</div>
        </>
    )
}