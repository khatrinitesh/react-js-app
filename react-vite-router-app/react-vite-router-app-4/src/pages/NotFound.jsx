import React from 'react'
import { useNavigate } from 'react-router-dom';
import Banner from '../layout/Banner';

const NotFound = () => {
    const navigate = useNavigate();

    const btnBack = () => {
        navigate('/')
    }
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center bg-sky-800 text-center'>
        <Banner title="Error" desc="Labore nostrud sit ea minim voluptate do commodo consectetur."/>
        <button onClick={btnBack} className='bg-cyan-300 rounded font-bold px-5 py-2'>Return homepage</button>
    </div>
  )
}

export default NotFound