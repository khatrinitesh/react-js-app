import React from 'react';
import Admin from './layout/admin';
import { useNavigate } from 'react-router-dom';

export default function BackEnd() {

  const nav = useNavigate();

  const btnBack = () => {
    nav("/fe");
  }
  return (
    <div>
      <div className='d-flex'>
        <h2>BackEnd</h2>
       <button onClick={btnBack}>Back to FE</button>
      </div>
      <Admin/>
    </div>
  )
}
