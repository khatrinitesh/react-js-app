import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Product() {

    const [user,setUser] = useState([])
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const fetchData = async () => {
        setLoading(true);
        try{
            const result = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!result.ok){
                throw new Error('sorry something went wrong')
            }
            const data = await result.json();
            setUser(data);
            setLoading(false)
        }
        catch(error){
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const btnDel  =(id) => {
        const newData = user.filter((val) => val.id !== id)
        setUser(newData)
    }

    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    if(error){
        return(
            <div>{error}</div>
        )
    }
  return (
    <div className='content'>
      <Banner title="Product" desc="Lorem Ipsum"/>
      {user.map((val,index) => {
        return(
            <div key={index}>
                <h3>{val.title}</h3>
                <p>{val.body}</p>
                <button onClick={() => btnDel(val.id)}>Delete</button>
            </div>
        )
      })}
    </div>
  )
}
