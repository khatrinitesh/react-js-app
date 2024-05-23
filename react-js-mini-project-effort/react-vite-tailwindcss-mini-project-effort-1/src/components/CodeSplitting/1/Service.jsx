import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const Service = ({services}) => {
  const {serviceId} = useParams();
  const service = services.find((val) => val.id === parseInt(serviceId))
  
  const navigate = useNavigate();
  const btnBack = () => {
      navigate('/service')
  }
  return (
    <div>
      <button className='bg-primarycolor text-white px-[10px]' onClick={btnBack}>Back</button>
      <h2>{service.name}</h2>
      <h2>{service.email}</h2>
      <p>{service.username}</p>
    </div>
  )
}

export default Service
