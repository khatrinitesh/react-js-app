import React, { useState } from 'react';
import Banner from '../components/Banner';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from '../components/BtnPrimary';
import HooksApp from '../components/Hooks/Hooks1/HooksApp';
import InputField from '../components/InputField';

const About = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const navigate = useNavigate();
  const handleNext = () => {
    navigate('/service')
  }
  return (
    <div className='content'>
      <Banner title='About' desc='Consectetur proident in ipsum reprehenderit do esse ea ad quis.'/>
      <BtnPrimary onClick={handleNext}>Next</BtnPrimary>
      <br />
      <InputField
        value={value}
        onChange={handleChange}
        maxLength={10}
        placeholder="Enter text here"
      />
      <HooksApp/>
     
    </div>
  );
}

export default About;
