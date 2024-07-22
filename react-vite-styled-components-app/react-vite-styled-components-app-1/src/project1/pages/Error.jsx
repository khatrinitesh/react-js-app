import React from 'react';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';

const Error = () => {
  const navigate = useNavigate();
  const btnBack = () => {
    navigate('/')
  }
  return (
    <div className='content'>
      <Banner title="Error" desc="Mollit ipsum quis enim ut aliqua elit irure do magna."/>
      <button onClick={btnBack}>Back</button>
    </div>
  )
}

export default Error
