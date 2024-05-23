import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const nav = useNavigate();

    const btnBack = () => {
        nav("/");
    }
  return (
    <div className='content'>
        <Banner title="404 page not found" desc="Ea aliquip sunt ullamco consequat consectetur enim nostrud."/>
        <button onClick={btnBack}>Go Back</button>
    </div>
  )
}
