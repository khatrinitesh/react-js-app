import React,{useEffect} from 'react'
import Banner from '../components/banner';

export default function Contact() {

    useEffect(() => {
        document.title = `Contact us`;
    },[])
  return (
    <div className='content'>
      <Banner title="Contact" desc="lorem ipsum"/>
    </div>
  )
}
