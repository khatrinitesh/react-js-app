import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/")
    }
  return (
    <div>Page not found
        <button onClick={btnBack}>Go Back</button>
    </div>
  )
}
