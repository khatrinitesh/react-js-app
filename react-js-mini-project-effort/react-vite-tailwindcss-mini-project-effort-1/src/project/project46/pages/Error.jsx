import React from 'react';
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/')
    }
  return (
    <>
      <h2 className='font-bold text-[40px] text-[red]'>Error</h2> 
      <button onClick={btnBack}>Go Back</button>
    </>
  )
}

export default Error
