import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function CustomApp() {
    return(
        <>
            <UseWindowSize/>
        </>
    )
}

const UseWindowSize = () => {
    const [size,setSize] = useState({
        width:window.innerWidth,
        height:window.innerHeight,
    })
    
    useEffect(() => {
        const handleResize = () => {
            setSize({ width:window.innerWidth, height:window.innerHeight });
          };
      
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    },[])
  return (
    <>
     W - {size.width} x H - {size.height}
    </>
  )
}