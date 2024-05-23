import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';
export default function Error() {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/');
    }
  return (
    <div className='errorContent'>
        <Banner title="404 page not found" desc="Lorem Ipsum Lorem Ipsum"/>
        <a href="javascript:void(0)" onClick={btnBack}>Go Back</a>
    </div>
  )
}
