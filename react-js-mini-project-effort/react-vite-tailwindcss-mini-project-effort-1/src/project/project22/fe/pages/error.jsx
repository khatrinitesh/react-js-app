import React from 'react';
import {  useNavigate } from 'react-router-dom';
import Banner from '../components/banner';

export default function Error() {

    const navgiate = useNavigate();

    const btnBack = () => {
        navgiate("/")
    }
  return (
    <div className='error_content'>
      <Banner title="404 page not found" desc="Lorem Ipsum"/>
      <button onClick={btnBack}>Go Back Home</button>
    </div>
  )
}
