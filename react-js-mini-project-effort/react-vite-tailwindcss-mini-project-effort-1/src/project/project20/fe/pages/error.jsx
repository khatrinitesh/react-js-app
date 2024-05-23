import React from 'react';
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

  const navigate = useNavigate();

  const btnBack = () => {
    navigate('/');
  }
  return (
    <div className='content'>
      <Banner title="Error" desc="Labore magna velit duis est fugiat consectetur ad ut magna est. Nisi ea ad aute non dolore commodo aliquip. Excepteur qui commodo officia proident incididunt mollit pariatur culpa adipisicing do Lorem. Dolor excepteur dolore do est magna consectetur occaecat aliquip aute ad."/>
      <button onClick={btnBack}>Go Back</button>
    </div>
  )
}
