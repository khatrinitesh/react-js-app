import React from 'react';
import Banner from '../components/banner';
import {useNavigate} from 'react-router-dom';

export default function Error() {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/")
    }
  return (
    <div className='errorContent'>
        <Banner title="404 page not found" desc="Veniam est ea in excepteur sint cillum enim id laboris culpa consequat."/>
        <button onClick={btnBack}>Go Back</button>
    </div>
  )
}
