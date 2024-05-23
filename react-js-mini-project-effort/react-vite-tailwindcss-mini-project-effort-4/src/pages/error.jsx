import React from 'react';
import Banner from './../components/banner';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    const btnBack = () => {
        navigate('/')
    }
  return (
    <div className='errorContent'>
      <Banner bannerStyle="bg-[powderblue]" title="Error page not found" desc="Ad officia tempor exercitation adipisicing velit amet nostrud ad enim eiusmod consequat sint consequat."/>
      <button onClick={btnBack}>Go Back</button>
    </div>
  )
}

export default Error
