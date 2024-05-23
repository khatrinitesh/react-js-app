import React,{useState} from 'react'

export default function CustomApp() {
    const [message, setMessage] = useState('');

    function handleChange(e){
        setMessage(e.target.value)
    }
  return (
    <div>
      <Child handleChange={handleChange}/>

      <h2>Mesage is {message}</h2>
    </div>
  )
}


function Child({handleChange}){
    return(
        <>
         <input type="text" name="message" id="message" onChange={handleChange}/>
        </>
    )
}