import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();

  const btnNext = () => {
    navigate('/contact')
  }
  return (
    <div>
         <h1>About Page</h1>
         <p>Learn more about us!</p>
    </div>
  )
}

export default About