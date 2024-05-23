import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const nav = useNavigate();

    const btnBack = () => {
        nav("/")
    }
  return (
    <div className='error_content'>
        <h3>Page not found</h3>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
