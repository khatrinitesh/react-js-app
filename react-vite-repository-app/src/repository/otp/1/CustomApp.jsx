import React, { useState } from 'react';

const CustomApp = () => {
  return(
    <>
        <OTPInput/>
    </>
  )
}

export default CustomApp


const OTPInput = ({ length = 6 }) => {
    const [otp, setOtp] = useState('');
  
    const handleChange = (e) => {
      const value = e.target.value;
      
      // Allow only numeric input
      if (/^\d*$/.test(value)) {
        if (value.length <= length) {
          setOtp(value);
        }
      }
    };
  
    const handleKeyDown = (e) => {
      // Allow only number keys, backspace, and arrow keys
      if (!/[\d\bArrowLeftArrowRight]/.test(e.key)) {
        e.preventDefault();
      }
    };
  
    return (
      <input
        type="text"
        value={otp}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        maxLength={length} // Limits the length of input
        pattern="[0-9]*" // HTML pattern to limit input to numbers
        inputMode="numeric" // Hints the mobile keyboard to show numeric input
        placeholder={`Enter ${length} digit OTP`}
      />
    );
  };