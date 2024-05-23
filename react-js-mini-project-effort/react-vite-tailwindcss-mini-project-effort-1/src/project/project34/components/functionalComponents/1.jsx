import React,{useState} from 'react'

export default function FunctionalCompo() {

    const [num,setNumValue] = useState(0);

    function setNum(){
        setNumValue(num + 1)
    }
  return (
    <div>
        <p>{num}</p>
        <button onClick={setNum}>Add new day</button>
    </div>
  )
}
