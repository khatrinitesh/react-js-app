import React from 'react'
import Banner from '../layout/Banner'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    const btnNext = () => {
        navigate('/about')
    }

  return (
    <div>
        <Banner title="Home" desc="Labore nostrud sit ea minim voluptate do commodo consectetur."/>
        <button onClick={btnNext} className='bg-cyan-300 rounded font-bold px-5 py-2'>Click Next</button>
    </div>
  )
}

export default Home