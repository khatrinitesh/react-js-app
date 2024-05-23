import React,{useState} from 'react';
import Banner from '../components/banner';
import PropsDrilling from '../components/propsdrilling/1';
import ClassComponent from '../components/fetchrestapi/1';

export default function About() {

  const [count,setCount] = useState(0);

  const btnInc  =()=>{
    setCount(c => c + 1)
  }
  const btnDec  =()=>{
    setCount(c => c - 1)
  }
  const btnReset  =() =>{
    setCount(0);
  }
  return (
    <div className='content'>
      <Banner title="About" desc="Labore magna velit duis est fugiat consectetur ad ut magna est. Nisi ea ad aute non dolore commodo aliquip. Excepteur qui commodo officia proident incididunt mollit pariatur culpa adipisicing do Lorem. Dolor excepteur dolore do est magna consectetur occaecat aliquip aute ad."/>
      <ClassComponent/>
      <PropsDrilling/>
      <div className='count_block'>
        {count}
        <button onClick={btnInc}>+</button>
        <button onClick={btnDec}>-</button>
        <button onClick={btnReset}>Reset</button>
      </div>
    </div>
  )
}
