import React from 'react';
import Banner from '../components/banner';
import {useNavigate} from 'react-router-dom';

const Error = () => {

    const navigate = useNavigate();
    const btnBack = () => {
        navigate("/")
    }
  return (
    <div className='content'>
      <Banner title="Error" desc="Officia excepteur excepteur Lorem est sit amet est magna amet fugiat Lorem duis. Lorem ut aliqua amet est laboris consequat est minim laboris nulla aute adipisicing. Tempor duis ea et commodo consequat incididunt nisi veniam est dolore dolor voluptate fugiat labore. Exercitation pariatur qui velit Lorem aliqua qui ex proident. Nostrud ex mollit ea culpa do anim sit deserunt. Ullamco occaecat commodo sunt velit quis aute duis. Amet consectetur officia tempor ullamco minim Lorem laboris tempor reprehenderit fugiat."/>
      <button onClick={btnBack}>Go Back</button>
    </div>
  )
}

export default Error
