import React,{useState} from 'react';
import Banner from '../components/banner';
import CustomClasses from '../components/classComponents/2';
import FunctionalCompo from '../components/functionalComponents/2';

export default function Home() {
  const [count, setCount] = useState(0);
  const update = () => setCount(count + 1);

  const asyncUpdate = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 500);
  };

  return (
    <div className='content'>
        <Banner title="Home" desc="Velit Lorem pariatur ex aute."/>
        <span>Count: {count}</span>
       <button onClick={update}>Add +1</button>
       <button onClick={asyncUpdate}>Add +1 later</button>
       <CustomClasses/>
       <FunctionalCompo/>
    </div>
  )
}
