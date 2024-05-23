import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const nav = useNavigate();

    const btnBack  = () => {
        nav('/')
    }
  return (
    <div>
      Error - page not found 
      <button onClick={btnBack}>Return to homepage</button>
    </div>
  )
}
