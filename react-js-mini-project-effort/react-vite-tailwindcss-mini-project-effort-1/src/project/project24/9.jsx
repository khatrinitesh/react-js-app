import React,{useState,useEffect} from 'react'

export default function HooksApp() {
    return(
        <>
         <UseWindowSize/>
        </>
    )
}

function UseWindowSize(){
    const [windowSize,setWindowSize] = useState(0);

    useEffect(() => {
        const handleWindowSize = () => {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener('resize',handleWindowSize)
        return () => {
            window.removeEventListener('resize',handleWindowSize)
        }
    },[])
  return windowSize
}