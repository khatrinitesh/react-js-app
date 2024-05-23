import React from 'react';
import { useParams,useNavigate  } from 'react-router-dom';


const Example = ({examples}) => {
    const {exampleId} = useParams();
    const example = examples.find((example) => example.id === parseInt(exampleId))
    
    const navigate = useNavigate();
    const btnBack = () => {
        navigate('/')
    }
  return (
    <div>
        <button className='bg-primarycolor text-white px-[10px]' onClick={btnBack}>Back</button>
        <h2 className='font-bold text-[30px]'>{example.name}</h2>
        <p>{example.email}</p>
    </div>
  )
}

export default Example
