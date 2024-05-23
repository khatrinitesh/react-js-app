import { setIn } from 'formik';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function HooksApp() {

    const [count,setCount] = useState(0);

    useEffect(() => {
        setInterval(() => {
            console.log('Interval function running...')
            setCount(count + 1);
    },[])
    })
    
  return (
    <>
    <p>Count is: {count}</p>
    </>
  )
}
