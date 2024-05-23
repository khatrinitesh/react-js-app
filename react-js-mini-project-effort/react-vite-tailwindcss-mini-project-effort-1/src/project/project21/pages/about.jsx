import React,{useEffect } from 'react'
import Banner from '../components/banner';

export default function About() {

    useEffect(() => {
        document.title = `About us`;
    },[])
  return (
    <div className='content'>
      <Banner title="About" desc="lorem ipsum"/>
    </div>
  )
}
