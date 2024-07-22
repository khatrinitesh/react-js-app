import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/');
    }
  return (
    <div className='errorContent'>
        <h3>404 page not found</h3>
        <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}

export default Error