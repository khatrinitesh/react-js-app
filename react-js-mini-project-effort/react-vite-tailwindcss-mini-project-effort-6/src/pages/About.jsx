import React from 'react'
import Banner from '../layout/Banner'
import PassingProps from '../components/passingpropstoacomponent/1'

const About = () => {
  return (
    <div className='content'>
      <Banner title="About" desc="Ullamco qui nisi minim do ea cillum incididunt aliquip."/>
      <PassingProps/>
    </div>
  )
}

export default About
