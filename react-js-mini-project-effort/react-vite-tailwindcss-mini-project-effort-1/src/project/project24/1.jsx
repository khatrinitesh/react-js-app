import React,{useState} from 'react'

export default function HooksApp() {

    const [count,setCount] = useState(0);

    const handleClick = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
    }
  return (
    <div>
      <button onClick={handleClick} className=''>Click me</button>
      {count}
    </div>
  )
}
