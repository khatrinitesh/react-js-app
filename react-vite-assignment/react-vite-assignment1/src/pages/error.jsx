import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from "react-router-dom";

const Error = () => {

  const navigate = useNavigate();

  const btnBack = () => {
    navigate('/')
  }
  return (
    <div className='errorContent'>
      <Banner bannerStyle='bg-[orange]' title="404 page not found" desc="Cupidatat ullamco officia eu labore amet incididunt magna."/>
      <button onClick={btnBack}>Go Back</button>
    </div>
  )
}

export default Error
