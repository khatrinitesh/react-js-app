import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h2>About Page</h2>
        <p>Learn more about our app here.</p>
        
        <Link to="/">Click back</Link>
        <Link to="/contact">Click next</Link>
    </div>
  )
}

export default About