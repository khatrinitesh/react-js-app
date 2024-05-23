import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Login</h1>
        {/* Login form */}
        <Link to="/dashboard" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </Link>
        <p className="mt-4">Don't have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
      </div>
    </div>
  )
}

export default Login
