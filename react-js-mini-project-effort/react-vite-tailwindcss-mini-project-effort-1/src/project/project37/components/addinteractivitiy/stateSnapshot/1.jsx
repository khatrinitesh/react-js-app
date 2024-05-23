import React,{ useState } from 'react';

export default function StateSnapShotApp(){
    return(
        <>
         <StateSnapShot/>
        </>
    )
}

function StateSnapShot() {

    const [to, setTo] = useState('Alice');
    const [message, setMessage] = useState('Hello');

    function handleSubmit(e){
        e.preventDefault();
        setTimeout(() => {
            alert(`You said ${message} to ${to}`)
        },0)
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>to: {'' }
         <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option value='A'>A</option>
            <option value='B'>B</option>
         </select>
        </label>
        <textarea placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type="submit">Send</button>
    </form>
    </>
  )
}


