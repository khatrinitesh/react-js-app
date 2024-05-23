import React,{useEffect} from 'react'
import Banner from '../components/banner';
import { useNavigate } from 'react-router-dom';

export default function Error() {

    const navigate = useNavigate();

    const btnBack = () => {
        navigate("/")
    }

    useEffect(() => {
        document.title = `Error page`;
    },[])
  return (
    <div className='error_content'>
      <Banner title="404 page not found" desc="lorem ipsum"/>
      <button onClick={btnBack}>Go Back</button>
    </div>
  )
}
