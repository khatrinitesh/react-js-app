import React from 'react'

const CustomApp = () => {
  return (
    <>
     <Example/> 
    </>
  )
}

export default CustomApp


// const Example = () => {
//     const data = ['item1','item2','item3'];

//     const renderList  = () => {
//         return data.map((val,index) => {
//             return <li key={index}>{val}</li>
//     })}

//     return (
//         <>
//         <ul>{renderList()}</ul>
//         </>
//     )
// }


const Example = () => {
    const data = ['item1','item2','item3'];
    return(
        <>
        <h2 className='font-bold text-[30px] text-[red]'>List with React</h2>
        <ul>
            {data.map((val,index) => {
                return(
                    <li key={index}>{val}</li>
                )
            })}
        </ul>
        </>
    )
}