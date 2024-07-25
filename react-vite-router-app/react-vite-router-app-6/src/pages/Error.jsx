import React from 'react'
import BannerContent from '../layout/Banner'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();

  const btnBack = () => {
    navigate("/");
  }
  return (
    <div>
       <BannerContent title="error" desc="Est qui reprehenderit minim exercitation nisi quis dolor mollit."/>
       <button onClick={btnBack}>Return homepage</button>
    </div>
  )
}

export default Error
