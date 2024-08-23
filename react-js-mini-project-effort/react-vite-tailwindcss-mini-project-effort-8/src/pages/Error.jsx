import React from 'react';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from '../components/BtnPrimary';

const Error = () => {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/")
    }
  return (
    <div className='errorContent bg-gray-500 h-screen flex flex-col items-center justify-center'>
      <h3>404 page not found</h3>
      <BtnPrimary label="Return to homepage" onClick={btnBack}/>
    </div>
  );
}

export default Error;
