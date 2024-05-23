import React from 'react';
import Banner from '../components/banner';
import { useParams,useNavigate } from 'react-router-dom';

const ServiceDetail = () => {

  const {id} = useParams();  // Destructure to extract `id`
  const navigate = useNavigate();

  const btnBack = () => {
    navigate('/servicelist')
  }
  return (
    <div className='content'>
      <button onClick={btnBack}>Back</button>
      <Banner bannerStyle='bg-[orange]' title="ServiceDetail" desc="Sunt commodo fugiat aute aute elit et dolore excepteur."/>
      Display the extracted 'id' <p>ID: <strong>{id}</strong></p> 
    </div>
  )
}

export default ServiceDetail

