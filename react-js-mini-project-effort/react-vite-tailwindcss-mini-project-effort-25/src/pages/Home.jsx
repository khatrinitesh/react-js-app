import React from 'react';
import HeadTitle from '../components/HeadTitle';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const btnNext = () => {
    navigate('about');
  }
  return (
    <>
      <div className="content">
        <div className="container mx-auto">
        <HeadTitle>Home</HeadTitle>
        <button onClick={btnNext}>Next</button>
        </div>
      </div>
    </>
  );
}

export default Home;
