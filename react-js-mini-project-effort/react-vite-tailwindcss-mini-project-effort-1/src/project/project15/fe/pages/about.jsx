import React,{useState} from 'react'
import { useCallback } from 'react';

export default function About() {

  const [count,setCount] = useState(0);
  const [toggle,setToggle] = useState(false);

  const btnInc = useCallback(() => {
    setCount(c => c + 1)
  })
  const btnDec = useCallback(() => {
    setCount(c => c - 1)
  })
  const btnRes = useCallback(() => {
    setCount(0)
  })

  const btnShow = () => {
    setToggle(true)
  }
  const btnHide = () => {
    setToggle(false)
  }

  const btnToggle = () => {
    setToggle(!toggle)
  }
  return (
    <div>
      About
      {count}
      <button onClick={btnInc}>+</button>
      <button onClick={btnDec}>-</button>
      <button onClick={btnRes}>Reset</button>

      <button onClick={btnShow}>Show</button>
      <button onClick={btnHide}>Hide</button>
      <button onClick={btnToggle}>Toggle</button>
      {toggle ? 'true' : null}
    </div>
  )
}
