import React from 'react';
import HeadTitle from '../components/HeadTitle';
import Posts from '../components/Posts';
import {gsap} from 'gsap';

const About = () => {
  gsap.to( ".square", { rotate: 360 })
  return (
    <>
      <div className="content">
        <HeadTitle>About</HeadTitle>
        <div className="square">Hello World</div>
        <Posts/>
        
      </div>
    </>
  );
}

export default About;
