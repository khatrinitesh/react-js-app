import React,{useState,useEffect} from 'react';
import {useParams,useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const [listdata,setListData] = useState([]);

    const baseurl = 'https://reqres.in/api/users/'
    const navigate = useNavigate();
    const {id} = useParams ();

    const btnBack = () => {
      navigate('/')
    }

    const fetchData = async () => {
        if(id){
            try {
                const response = await fetch(`${baseurl}${id}`);
                const result = await response.json();
                console.log(result.data)
                setListData(result.data)
            } catch (error) {
                console.error("Fetching data failed:", error);
            }
        }
    }

    useEffect(() => {
        fetchData()
    },[])

  return (
    <ul className='list-item'>
      <li className='font-bold text-[red] mb-2'>Id: {listdata.id}</li> 
      <br />
      <li className='font-bold text-[red] mb-2'>Email: {listdata.email}</li>
      <br />
      <li className='font-bold text-[red] mb-2'>First Name: {listdata.first_name}</li>
      <br />
      <li className='font-bold text-[red] mb-0'>Last Name: {listdata.last_name}</li>
      <br />
      <img src={listdata.avatar} alt="" />
      <button onClick={btnBack}>Go Back</button>
    </ul>
  )
}

export default ProductDetail
