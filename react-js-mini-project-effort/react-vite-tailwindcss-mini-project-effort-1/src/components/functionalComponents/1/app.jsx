import React from 'react'

export default function CustomApp() {

    const showMsg = () => {
        alert('hi')
    }
  return (
    <div>
        <button onClick={showMsg}>Click me</button>
    </div>
  )
}
