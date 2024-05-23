import React from 'react'

export default function CustomApp() {
    const Button = () => {
        return <button onClick={() => console.log('bobbyhadz.com')}>Click</button>;
    }
  return (
    <div>
      <Wrapper button={Button}/>
    </div>
  )
}


function Wrapper({button:Button}){
    return(
        <div style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',}}><Button/></div>
    )
}