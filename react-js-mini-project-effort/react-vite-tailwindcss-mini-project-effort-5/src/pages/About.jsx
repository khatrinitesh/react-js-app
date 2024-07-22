import React from 'react'
import NumberWiseComp from '../components/NumberWise'
import FruitsWiseComp from '../components/FruitsWise'
import ToDoList from '../components/ToDoList'

const About = () => {
  return (
    <div>About

      <NumberWiseComp/>
      <FruitsWiseComp/>
      <br />
      <hr />
      <ToDoList/>
    </div>
  )
}

export default About