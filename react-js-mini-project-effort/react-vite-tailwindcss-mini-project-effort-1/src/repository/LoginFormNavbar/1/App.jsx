import React, { useState } from 'react';

const LoginFormNavbarApp = () => {
    const [formData,setFormData] = useState({
        username:"",
        password:"",
    })

    const handleChangeData = (e) => {
        const {name,value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    };

    const handleLogin = () => {
        // Implement your login logic here
        console.log('Username:', formData.username);
        console.log('Password:', formData.password);
      };
  return (
    <>
       <nav>
      <div className="navbar-container">
        <div className="logo">Your Logo</div>
        <div className="login-container">
          <div className="login-form">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChangeData}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChangeData}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default LoginFormNavbarApp


