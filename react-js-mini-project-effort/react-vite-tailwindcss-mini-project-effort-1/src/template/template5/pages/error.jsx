import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ErrorPage() {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/')
    }
  return (
    <div className='error_content'>
        <h3>404 page not found</h3>
        <button onClick={btnBack}>Go Back</button>
    </div>
  )
}
