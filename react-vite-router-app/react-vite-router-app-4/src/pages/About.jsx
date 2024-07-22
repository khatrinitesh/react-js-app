import React from 'react'
import Banner from '../layout/Banner'
import { useNavigate } from 'react-router-dom';
import { StyledButton } from '../assets/styles/styles';

const About = () => {
    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/')
    }

    const btnNext = () => {
        navigate('/contact')
    }

  return (
    <div>
        <Banner title="About" desc="Labore nostrud sit ea minim voluptate do commodo consectetur."/>
        <div>
        <button onClick={btnBack} className='bg-cyan-300 rounded font-bold px-5 py-2'>Click Back</button>
        <button onClick={btnNext} className='bg-cyan-300 rounded font-bold px-5 py-2'>Click Next</button>
        </div>
        <StyledButton>Default Button</StyledButton>
      <StyledButton variant="outline">Outline Button</StyledButton>
      <StyledButton disabled>Disabled Button</StyledButton>
    </div>
  )
}

export default About