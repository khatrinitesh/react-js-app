import React from 'react'
import Banner from '../layout/Banner'
import { useNavigate } from 'react-router-dom'

const Error = () => {

  const navigate = useNavigate();

  const btnBack = () => {
    navigate("/");
  }
  return (
    <div className='content'>
      <Banner title="404 page not found" desc="Ullamco qui nisi minim do ea cillum incididunt aliquip."/>
      <button onClick={btnBack}>Return homepage</button>
    </div>
  )
}

export default Error
