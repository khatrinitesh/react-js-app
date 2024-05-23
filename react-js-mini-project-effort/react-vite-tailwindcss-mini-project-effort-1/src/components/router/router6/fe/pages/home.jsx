import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const nav = useNavigate();

  const btnGoPage = () => {
    nav('/admin')
  }
  return (
    <div>
      Home
      <button onClick={btnGoPage}>Next</button>
    </div>
  )
}
