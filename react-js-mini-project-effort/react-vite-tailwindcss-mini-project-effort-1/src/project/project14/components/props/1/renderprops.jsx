import React from 'react'
import { useState } from 'react'

export default function RenderProps(props) {
    let [count,setCount] = useState(0);
    let increment = () => {
        setCount(++count)
    }
  return (
    <div>
      {props.render(increment,count)}
    </div>
  )
}
