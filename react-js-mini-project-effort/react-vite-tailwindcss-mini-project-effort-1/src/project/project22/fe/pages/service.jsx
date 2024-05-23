import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';


export default function Service() {

  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const [posts,setPosts] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      if(!response.ok){
        throw new Error('sorry something went wrong')
      }
      const result = await response.json();
      setPosts(result);
      setLoading(false);
    }
    catch(error){
      setError(error.msg)
      setLoading(false);
    }
  }

  const btnDel  =(id) => {
    const newData = posts.filter((val) => val.id !== id)
    setPosts(newData);
  }

  useEffect(() => {
    fetchData();
  },[])

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
      <Banner title="Service" desc="Lorem Ipsum"/>
      <div className='row'>
        {posts.map((val) => {
          const {name,username,email,id,address:{city,geo:{lat,lng}}} = val;
          return(
            <div key={id} className='card col-4'>
              <h3>{name} - {email}</h3>
              <p>{username}</p>
              <p>{city}</p>
              <p>{lat} - {lng}</p>
              <button onClick={() => btnDel(id)}>Remove</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
