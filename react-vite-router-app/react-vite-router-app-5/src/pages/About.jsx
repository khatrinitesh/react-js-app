import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>About<br />
    <Link to="/">Back</Link>
        <Link to="/contact">Next</Link>
    </div>
  )
}

export default About