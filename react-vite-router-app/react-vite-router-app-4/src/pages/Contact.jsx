import React from 'react'
import Banner from '../layout/Banner'
import { useNavigate } from 'react-router-dom';
import { Button } from '../assets/styles/styles';




const Contact = () => {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/about')
    }

    const btnNext = () => {
        navigate('/contact')
    }
  return (
    <div>
        <Banner title="Contact" desc="Labore nostrud sit ea minim voluptate do commodo consectetur."/>
        <div>
            <button onClick={btnBack} className='bg-cyan-300 rounded font-bold px-5 py-2'>Click Back</button>
        </div>
        <Button>Click button styled components</Button>
        
    </div>
  )
}

export default Contact