import React,{useState,useEffect} from 'react'

export default function FunctionalCompo() {

    const [color,setColor] = useState("blue")

    useEffect(() => {
        console.log('this component was also mounted!',[]);
    });

    useEffect(() => {
        console.log('the color changed ! just like componentDidUpdate',color)
    });

    const btnRed =() => {
        setColor('red')
    }
    const btnBlue =() => {
        setColor('blue')
    }
  return (
    <div>
        {color}
        <button onClick={btnRed}>Red</button>
        <button onClick={btnBlue}>Blue</button>
    </div>
  )
}
