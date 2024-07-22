import React from 'react'
import Splash from './Splash'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <Splash delay={1000}/>
        <h2>Home Page</h2>
        <p>Welcome to the home page!</p>
        <Link to="/about">Click next</Link>
    </div>
  )
}

export default Home