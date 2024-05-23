import React,{useState} from 'react'
import { useEffect } from 'react'

export default function HooksApp() {
    console.log('component rendering..')
    const [price,setPrice] = useState({
        number:100,
        totalPrice:true,
    })

    const handleClick = () => {
        setPrice({
            number:0,
            totalPrice:true
        })
    }

    useEffect(() => {

    },[price.number]);
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}
