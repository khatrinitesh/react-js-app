import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../components/banner';


export default function Error() {
    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/")
    }
  return (
    <div className='errorContent'>
        <Banner title="404 page not found" desc="Lorem Ipsum"/>
        <button onClick={btnBack}>Go Back</button>
    </div>
  )
}
