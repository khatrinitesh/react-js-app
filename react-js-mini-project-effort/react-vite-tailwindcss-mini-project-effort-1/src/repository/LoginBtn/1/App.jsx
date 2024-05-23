import React from 'react'

const LoginBtnApp = () => {

    const handleClick = () => {
        console.log('asdsaddadad')
    }
  return (
    <>
      <LoginButton onClick={handleClick}/>
    </>
  )
}

export default LoginBtnApp

const LoginButton = ({ onClick }) => {
    return (
      <button className="login-button" onClick={onClick}>
        Login
      </button>
    );
  };
