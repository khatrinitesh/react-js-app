import React from 'react';
import Banner from '../components/banner';
import {  useNavigate } from 'react-router-dom';

export default function Error() {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/");
    }
  return (
    <div className='content'>
      <Banner title="Error" desc="Lorem Ipsum"/>
      <button onClick={btnBack}>Go Back</button>
    </div>
  )
}
