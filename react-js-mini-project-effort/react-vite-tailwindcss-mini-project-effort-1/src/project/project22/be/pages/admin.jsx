import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Admin() {

  const navigate = useNavigate();

  const btnBack = () => {
    navigate("/contact")
  }
  const btnNext = () => {
    navigate("/admin/admin2")
  }
  return (
    <div>
      <button onClick={btnBack}>Back</button>
      Admin
      <button onClick={btnNext}>Next to Admin2</button>
    </div>
  )
}
