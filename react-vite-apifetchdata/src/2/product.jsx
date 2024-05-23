import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
    const [listdata,setListData] = useState([]);

    const baseurl = 'https://reqres.in/api/users/'

    const fetchData = async () => {
        try {
            const response = await fetch(baseurl);
            const result = await response.json();
            console.log(result.data)
            setListData(result.data)
        } catch (error) {
            console.error("Fetching data failed:", error);
        }
    }

    useEffect(() => {
        fetchData()
    },[])

  return (
    <div>
        {listdata.length> 0 ? (
            <>
             <ul className=''>
               {listdata.map((val,index) => {
                return(
                    <li className={`bg-slate-400 ${index !== listdata.length - 1 ? 'mb-4' : ''}`}>
                        <Link key={index} to={`/product/${val.id}`}>View Detail - <strong>{val.id}</strong></Link>
                    </li>
                )
               })}
            </ul>
            </>
        ) : (
            <>
            <p>No data found</p></>
        )}
    </div>
  )
}

export default Product
