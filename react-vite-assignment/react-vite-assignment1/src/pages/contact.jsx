import React, { useState } from 'react';
import Banner from '../components/banner';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    let isValid = true; // Declare isValid as true initially
    const errors = {}; // Declare errors as a local variable

    // Email validation
    if (!formData.email) {
      isValid = false;
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isValid = false;
      errors.email = 'Email is invalid';
    }

    // Password validation
    if (!formData.password) {
      isValid = false;
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      isValid = false;
      errors.password = 'Password must be at least 6 characters long';
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm(); // Ensure we are calling validateForm correctly and storing its result
    setSubmitSuccess(false);

    if (isValid) {
      console.log('Form data:', formData);
      // Here, you would usually send the form data to your server...
      setSubmitSuccess(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className='content'>
      <Banner bannerStyle='bg-[orange]' title="Contact" desc="Sunt commodo fugiat aute aute elit et dolore excepteur."/>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input maxLength={6}
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
      </div>
      <button type="submit">Submit</button>
      {submitSuccess && <p style={{color: 'green'}}>Form submitted successfully!</p>}
      </form>
    </div>
    
  )
}

export default Contact
