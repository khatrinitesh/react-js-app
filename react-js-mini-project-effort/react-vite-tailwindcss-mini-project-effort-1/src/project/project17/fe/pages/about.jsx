import React,{useState} from 'react';
import Banner from '../components/banner';
import VerticalTimeline from '../components/timeline/timeline';
import PropsCustom from '../components/props/1';

export default function About() {

  const [count,setCount] = useState(0);

  const btnInc =() => {
    setCount(count => count + 1)
  }
  const btnDec =() => {
    setCount(count => count - 1)
  }
  const btnRes =() => {
    setCount(0)
  }

  return (
    <div className='content'>
      <Banner bannertitle="About" bannerdesc="Amet nisi elit minim veniam adipisicing est irure fugiat consectetur elit laboris laborum incididunt duis. Mollit aliqua laborum occaecat occaecat consequat laborum voluptate commodo fugiat quis mollit amet. Ex excepteur et elit aute nostrud fugiat irure non officia laborum sit dolore."/>
      <PropsCustom/>
      <VerticalTimeline/>
      {count}
      <button onClick={btnInc}>+</button>
      <button onClick={btnDec}>-</button>
      <button onClick={btnRes}>Reset</button>
    </div>
  )
}
