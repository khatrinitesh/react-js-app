import React from 'react'

export default function CustomApp() {

    const arr = ['A', 'B', 'C', 'D'];
  return (
    <div>
      <Books arr={arr}/>
    </div>
  )
}

function Books({arr}){
    console.log(arr);
    return(
        <div>
            {arr.map((title) => {
                return(
                    <div key={title}>{title}</div>
                )
            })}
        </div>
    )
}