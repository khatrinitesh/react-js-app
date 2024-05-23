import React,{useState} from 'react'

const StateApp = () => {
  return (
    <>
      <Hello/>
    </>
  )
}

export default StateApp

function Hello(props){
  const [name,setName] = useState('nitesh')
 
  function updateName(){
    let newName = prompt('what is your name')
    setName(newName)
  }

  return(
    <>
    <h1>{name}</h1>
    <button onClick={updateName}>Update name</button>
    </>
  )
}
