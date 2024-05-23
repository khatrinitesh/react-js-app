import React from 'react';
import Banner from '../components/banner';
import Nested from '../components/Nested';

export default function About() {
  return (
    <div className='content'>
      <Banner title="About" desc="Lorem Ipsum"/>
      <Nested/>
    </div>
  )
}
