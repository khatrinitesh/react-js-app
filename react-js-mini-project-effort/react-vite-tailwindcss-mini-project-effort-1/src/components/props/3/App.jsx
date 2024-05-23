import React from 'react'

const CustomApp = () => {
  return (
    <div>
      <ParentComponent/>
    </div>
  )
}

export default CustomApp

// Parent Component
const ParentComponent = () => {
    const result = [
        {
            id:1,name:'test1'
        },
        {
            id:2,name:'test2'
        },
        {
            id:3,name:'test3'
        },
    ]
    return(
        <>
        {result.map((val,index) => {
            return(
                <>
                 <ChildComponent key={index} {...val}/>
                </>
            )
        })}
        </>
    )
}

// Child Component
const ChildComponent = (props) => {
    return(
        <>
         <p>Data from parent - ID: <strong>{props.name} - {props.id}</strong></p>
        </>
    )
}
