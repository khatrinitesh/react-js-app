import React from 'react';
import BtnPrimary from '../components/BtnPrimary';

const Otp = ({setActiveStep}) => {

  const handleSummit = () => {
    setActiveStep(3);
  }
  return (
    <>
     <form onSubmit={handleSummit}>
      Enter OTP
      <BtnPrimary>Submit OTP</BtnPrimary>
      </form>
    </>
  );
}

export default Otp;
