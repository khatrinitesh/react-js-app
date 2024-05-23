import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/")
    }
  return (
    <div className='content'>
      <Banner title="Error Page" desc="Aliquip sint sit qui cupidatat laborum nulla laborum anim qui nostrud labore culpa cillum. Sint ea elit incididunt est velit. Proident id occaecat id consectetur cupidatat consequat adipisicing magna est veniam."/>
      <button onClick={btnBack}>Go Back</button>
    </div>
  )
}
