import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const navigator = useNavigate();
    const btnBack = () => {
        navigator('/')
    }
  return (
    <div>404 page not found
        <button onClick={btnBack}>Go Back</button>
    </div>
  )
}
