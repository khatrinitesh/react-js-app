import React, { useState } from 'react';

const RegisterFormApp = () => {

    const [formData,setFormdata] = useState({
        username:'',
        email:'',
        password:''
    })
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormdata({
            ...formData,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('registration data: ',formData)
    }

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
      };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
            username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} required/>
        </label>
        <label>
            password:
            <input type="password" name="password" value={formData.password} onChange={handleChange}  onClick={handleTogglePassword } required/>
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default RegisterFormApp
