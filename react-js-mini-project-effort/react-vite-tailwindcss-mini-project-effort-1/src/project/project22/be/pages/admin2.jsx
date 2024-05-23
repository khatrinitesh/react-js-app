import React from 'react';
import { useNavigate } from 'react-router-dom'

export default function AdminTwo() {
  const back = useNavigate();

  const btnBack = () => {
    back("/admin")
  }
  return (
    <div>
      <button onClick={btnBack}>Back</button>
      Admin2 
    </div>
  )
}
