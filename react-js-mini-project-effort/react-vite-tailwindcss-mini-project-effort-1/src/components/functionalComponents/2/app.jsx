import { set } from 'lodash';
import React from 'react'
import { useState } from 'react'

export default function CustomApp() {
    const [msg,setMsg] = useState('');

    const showMsg = (e) => {
        console.log(msg)
    }

    const handleChange  =(e) => {
        setMsg(e.target.value)
    }
  return (
    <div>
        <input type='text' onChange={handleChange} value={msg}/>
        <button onClick={showMsg}>Click to log message</button>
    </div>
  )
}
