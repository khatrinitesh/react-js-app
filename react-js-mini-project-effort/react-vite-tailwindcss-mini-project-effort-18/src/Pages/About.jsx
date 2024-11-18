import React from 'react'
// layout
import Banner from "../Layout/Banner"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='content'>
      <Banner bannerTitle="About" bannerDesc="Laboris anim duis esse ullamco magna est."/>
      <Link to="/">Go to home page</Link>
    </div>
  )
}

export default About
