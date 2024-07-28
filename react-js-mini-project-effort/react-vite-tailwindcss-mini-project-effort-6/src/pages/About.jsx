import React from 'react'
import Banner from '../layout/Banner'
import ConditionalRendering from '../components/conditional-rendering/5'

const About = () => {
  return (
    <div className='content'>
      <Banner title="About" desc="Ullamco qui nisi minim do ea cillum incididunt aliquip."/>
      <ConditionalRendering/>
    </div>
  )
}

export default About
