import React from 'react';
import BtnPrimary from '../components/BtnPrimary';
import { Link } from 'react-router-dom';

const Login = ({setIsRegistered,setActiveStep}) => {

  const handleSummit = () => {
    setActiveStep(3)
  }
  return (
    <>
     <form onSubmit={handleSummit}>
      Login mobile number
      <BtnPrimary>Submit OTP</BtnPrimary>
      </form>
      <Link onClick={() => setIsRegistered(null)}>New SignUp?</Link>
    </>
  );
}

export default Login;
