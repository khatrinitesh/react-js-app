import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import FetchExample from '../components/fetch/2';

export default function Service() {
   
  return (
    <div className='content'>
      <Banner title="Service Page" desc="Aliquip sint sit qui cupidatat laborum nulla laborum anim qui nostrud labore culpa cillum. Sint ea elit incididunt est velit. Proident id occaecat id consectetur cupidatat consequat adipisicing magna est veniam."/>
      <FetchExample/>
    </div>
  )
}
