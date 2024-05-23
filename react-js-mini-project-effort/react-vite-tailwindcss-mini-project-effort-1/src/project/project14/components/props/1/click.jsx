import React from 'react'

export default function Click(props) {
  return (
    <div>
      <button onClick={props.increment}>click on {props.count}</button>
    </div>
  )
}
