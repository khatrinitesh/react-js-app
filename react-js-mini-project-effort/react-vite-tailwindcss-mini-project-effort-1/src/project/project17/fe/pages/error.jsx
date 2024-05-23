import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

  const nav = useNavigate();

  const btnBack = () => {
    nav("/")
  }
  return (
    <div className='content'>
      <Banner bannertitle="Error" bannerdesc="Amet nisi elit minim veniam adipisicing est irure fugiat consectetur elit laboris laborum incididunt duis. Mollit aliqua laborum occaecat occaecat consequat laborum voluptate commodo fugiat quis mollit amet. Ex excepteur et elit aute nostrud fugiat irure non officia laborum sit dolore."/>
      <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
