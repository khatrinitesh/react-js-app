import React from 'react'
import { Link } from 'react-router-dom'
import FillForm from '../components/FillForm'

const Contact = () => {
  return (
    <div>
        <h2>Contact Page</h2>
        <p>Contact us here.</p>
        <Link to="/about">Click back</Link>
        <FillForm/>
    </div>
  )
}

export default Contact