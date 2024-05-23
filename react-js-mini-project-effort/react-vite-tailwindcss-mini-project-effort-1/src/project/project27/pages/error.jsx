import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const navigate = useNavigate();
    const btnBack = () => {
        navigate("/")
    }
  return (
    <div>
        <h3>404 page not found</h3>
        <a href='javascript:void(0)' onClick={btnBack}>Go Back</a>
    </div>
  )
}
