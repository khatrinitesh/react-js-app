import React from 'react';
import { useNavigate } from 'react-router-dom';
import SpreadOperator from '../component/spreadoperator/3/app';
// import FetchData from '../component/restapidata/1/app';

export default function Home() {

  const nav = useNavigate('/admin');

  const btnNext = () => {
    nav('/admin')
  }
  return (
    <div>
      {/* <FetchData/> */}
      <SpreadOperator/>
      <button onClick={btnNext}>Click to go page</button>
    </div>
  )
}
