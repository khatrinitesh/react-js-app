import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const btnNext = () => {
    navigate('/service')
  }
  return (
    <div>
      About
      <button className='bg-primarycolor text-white px-[10px]' onClick={btnNext}>Next</button>
    </div>
  )
}

export default About
