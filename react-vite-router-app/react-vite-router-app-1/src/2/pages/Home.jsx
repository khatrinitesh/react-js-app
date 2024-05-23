import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Home</h1>
        <p className='mb-[10px]'>This is the home page content.</p>
        <Link to="/login" className='bg-blue-600 text-white rounded p-[5px]'>Login</Link>
      </div>
    </div>
  )
}

export default Home
