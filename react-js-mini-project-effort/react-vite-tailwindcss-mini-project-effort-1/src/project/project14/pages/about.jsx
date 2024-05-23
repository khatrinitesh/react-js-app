import React from 'react';
import Banner from '../components/banner';
import RenderConditon from '../components/renderconditional/1/app';
import StateFul from '../components/stateful/2';
// import RestApi from '../components/restapi/1';
import PropsCustom from '../components/props/1/app';
import ContextApi from '../components/contextapi/1/app';

export default function About() {
  return (
    <div className='content'>
      <Banner bannertitle="About" bannerdesc="Lorem Ipsum"/>
      <ContextApi/>
      <PropsCustom/>
      {/* <RestApi/> */}
      <StateFul/>
      <RenderConditon/> 
    </div>
  )
}
