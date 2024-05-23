import React from 'react';

export default function ComponentsPure() {
  return (
    <>
    <Cup guest={1}/>
    <Cup guest={2}/>
    <Cup guest={3}/>
    </>
  )
}

function Cup({guest}){
    return(
        <>
         <h2>Tea cup for guest ${guest}</h2>
        </>
    )
}

// let guest = 0;
// function Cup(){
//     guest = guest + 1
//     return(
//         <>
//         <h2>Tea cup for guest #{guest}</h2></>
//     )
// }