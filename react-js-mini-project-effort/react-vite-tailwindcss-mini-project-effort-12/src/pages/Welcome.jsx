import React from 'react';
import BtnPrimary from './../components/BtnPrimary';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

    const navigate = useNavigate();

    const handleNextDetails = () => {
        navigate('/details')
    }
  return (
    <div className='WelContent'>
      Welcome
      <BtnPrimary onClick={handleNextDetails}>Get started</BtnPrimary>
    </div>
  );
}

export default Welcome;
