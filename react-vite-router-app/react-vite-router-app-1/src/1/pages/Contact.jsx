import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const btnPrev = () => {
        navigate('/about')
    }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>This is the contact page content.</p>
      <div className="btnBlock flex items-center justify-center">
        <button onClick={btnPrev} className="bg-blue-600 text-white rounded p-[5px]">Go to about page</button>
      </div>
    </div>
  )
}

export default Contact
