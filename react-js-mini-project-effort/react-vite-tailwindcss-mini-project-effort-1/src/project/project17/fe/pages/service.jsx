import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';

export default function Service() {

  const [user,setUser] = useState([]);
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('');

  const fetchData = async () => {
    setLoading(true)
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if(!response.ok){
        throw new Error('sorry something went wrong')
      }
      const data = await response.json()
      setUser(data)
      setLoading(false)
    }
    catch(error){
      setError(error.message)
      setLoading(false)
    }
  }

  const  btnDel  =(id) => {
    const newData = user.filter((val) => val.id !== id)
    setUser(newData);
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
      <Banner bannertitle="Service" bannerdesc="Amet nisi elit minim veniam adipisicing est irure fugiat consectetur elit laboris laborum incididunt duis. Mollit aliqua laborum occaecat occaecat consequat laborum voluptate commodo fugiat quis mollit amet. Ex excepteur et elit aute nostrud fugiat irure non officia laborum sit dolore."/>
      {user.map((val) => {
        return(
          <div key={val.id}>
            <h3>{val.title}</h3>
            <p>{val.title}</p>
            <button onClick={() => btnDel(val.id)}>&times;</button>
          </div>
        )
      })}
    </div>
  )
}
