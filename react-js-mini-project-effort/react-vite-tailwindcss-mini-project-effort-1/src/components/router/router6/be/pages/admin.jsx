import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Admin() {

  const nav = useNavigate();

  const btnBack  =() => {
    nav('/');
  }
  return (
    <div>
      <button onClick={btnBack}>Back</button>
      Admin
    </div>
  )
}
