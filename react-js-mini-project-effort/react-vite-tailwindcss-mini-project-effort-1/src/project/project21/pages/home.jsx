import React,{useEffect} from 'react'
import Banner from '../components/banner';
import ContextApi from '../components/contextapi/1';
import Reducer from '../components/reducer/1';

export default function Home() {
    

    useEffect(() => {
        document.title = `Home`;
    },[])
  return (
    <div className='content'>
      <Banner title="Home" desc="lorem ipsum"/>
      <Reducer/>
      <ContextApi/>
    </div>
  )
}
