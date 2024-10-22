import React from 'react';
import BtnPrimary from '../components/BtnPrimary';
import { Link } from 'react-router-dom';

const Register = ({setIsRegistered,setActiveStep}) => {

  const handleSubmit = () => {
    setActiveStep(2);
  }
  return (
    <div>
      Register
    <form onSubmit={handleSubmit}>
      <BtnPrimary>Submit</BtnPrimary>
      </form>
      <Link onClick={() => setIsRegistered(true)}>Already registered</Link>
    </div>
  );
}

export default Register;
