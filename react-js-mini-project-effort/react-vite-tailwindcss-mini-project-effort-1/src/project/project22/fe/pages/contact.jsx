import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Contact() {

  const goNext = useNavigate();

  const btnBackEnd = () => {
    goNext('/admin')
  }
  return (
    <div className='content'>
      <Banner title="Contact" desc="Lorem Ipsum"/>
      <button onClick={btnBackEnd}>Click backend</button>
    </div>
  )
}
