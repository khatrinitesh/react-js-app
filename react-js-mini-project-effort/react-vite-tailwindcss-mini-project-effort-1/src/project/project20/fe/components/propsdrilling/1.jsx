import React from 'react'

export default function PropsDrilling() {

    const data = 'hello from app'
  return (
    <>

      <Child data={data}/>
    </>
  )
}

function Child({data}){
    return(
        <>
            <GrandChild data={data}/>
        </>
    )
}

function GrandChild({data}){
    return(
        <>
         <h4>Grandchild Component</h4>
         <p>{data}</p>
        </>
    )
}
