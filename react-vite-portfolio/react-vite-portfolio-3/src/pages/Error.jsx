import React from 'react';
// library
import { useNavigate } from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/')
    }
  return (
    <div>
        <h3 className='font-bold font-poppinsR'>Error</h3>
        <button onClick={btnBack}>Go Back</button>
    </div>
  )
}

export default Error