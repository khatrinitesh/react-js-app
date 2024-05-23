import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();

  const btnBack = () => {
      navigate('/')
  }
  return (
    <div className='errorContent h-screen flex justify-center items-center flex-col'>
        <h3 className='font-bold text-[30px] text-cyan-400'>Error 404 page not found</h3>
      <p>Mollit laboris do sit laboris irure esse labore sit.</p>
      <button onClick={btnBack} className='bg-pink-500 text-white rounded p-[5px]'>GoBack Home</button>
    </div>
  )
}

export default Error
