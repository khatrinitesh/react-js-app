import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

export default function Product() {
  
  const params = useParams();
  return (
    <div className='mainContent'>
      <h3>Product {params.id}</h3>
      <Outlet/>
    </div>
  )
}
