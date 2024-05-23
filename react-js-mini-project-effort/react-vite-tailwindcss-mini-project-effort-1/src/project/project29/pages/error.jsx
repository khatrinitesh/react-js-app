import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/banner';

export default function Error() {

    const nav = useNavigate();

    const btnBack = () => {
        nav("/")
    }
  return (
    <div className='content'>
        <Banner title="Error" desc="Lorem Ipsum"/>
        <button onClick={btnBack}>Go Back</button>
    </div>
  )
}
