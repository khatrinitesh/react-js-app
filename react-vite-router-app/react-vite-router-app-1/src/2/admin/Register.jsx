import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        {/* Register form */}
        <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register
        </Link>
        <p className="mt-4">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
      </div>
    </div>
  )
}

export default Register
