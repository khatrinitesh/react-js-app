import React,{useState,useEffect} from 'react'
import Banner from '../components/banner';

export default function Service() {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const fetchData = async() => {
        setLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error('srry something went wrong')
            }
            const data = await response.json();
            setData(data);
            setLoading(false)
        }
        catch(error){
            setError(error);
            setLoading(false);
        }
    }

    const btnDel  = (id) => {
        const finalData = data.filter((val) => val.id !== id)
        setData(finalData);
    }

   w

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    if(error){
        return(
            <div>{error.message}</div>
        )
    }
  return (
    <div className='content'>
      <Banner title="Service" desc="lorem ipsum"/>
      {data.map((val,index) => {
        const {title,body,id} = val
        return(
            <div key={index}>
                <h3>{title}</h3>
                <p>{body}</p>
                <button onClick={() => btnDel(id)}>&times;</button>
            </div>
        )
      })}
    </div>
  )
}
