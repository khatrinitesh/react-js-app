import React from "react"
import { useNavigate } from "react-router-dom"

const Back = ({ title }) => {
  const location = useNavigate()

  return (
    <>
      <section className='back'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back