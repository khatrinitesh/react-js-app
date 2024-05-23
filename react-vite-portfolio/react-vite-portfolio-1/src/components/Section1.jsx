import React from 'react'
import ScrollSection from './ScrollSection'
import About from './About'

const Section1 = () => {
  return (
    <>
    <ScrollSection id="section1" actualCondition={true}>
        <About/>
      </ScrollSection>
    </>
  )
}

export default Section1