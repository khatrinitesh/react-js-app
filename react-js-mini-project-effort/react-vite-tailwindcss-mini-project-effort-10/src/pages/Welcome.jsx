import React from 'react';
import BtnPrimaryBorder from '../components/BtnPrimaryBorder';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/details')
    }
  return (
    <div>
      Welcome
      <BtnPrimaryBorder onClick={handleClick}>Get started</BtnPrimaryBorder>
    </div>
  );
}

export default Welcome;
