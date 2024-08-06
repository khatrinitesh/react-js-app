import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from '../components/Btn/BtnPrimary';

const fetchUser = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  if(!response.ok){
    throw new Error('net work response was not ok',response.statusText)
  }
  return response.json()
}

const About = () => {
  const navigate = useNavigate();
  const btnBack = () => {
    navigate('/')
  }

  const {data,error,isLoading} = useQuery('user',fetchUser)


  if(isLoading) return <div>LOading...</div>

  if(error) return <div>An error occured: {error}</div>
  return (
    <div>
        <h1>About Page</h1>
        <BtnPrimary label="back" onClick={btnBack}/>
        <h2>{data.name}</h2>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
    </div>
  )
}

export default About
