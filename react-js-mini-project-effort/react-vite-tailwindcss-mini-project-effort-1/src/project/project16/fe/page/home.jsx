import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import ContextApi from '../component/contextapi/3/app';
import PropsCustom from '../component/props/1/app';

export default function Home() {

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState('');
  const [filteredData,setFilteredData] = useState(data);

  const nav = useNavigate();

  const btnAdmin = () => {
    nav('/admin') 
  }

  const fetchData = async () => {
    setLoading(true)
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      if(!response.ok){
        throw new Error('sorry something went wrong')
      }
      const data = await response.json()
      setData(data);
      setFilteredData(data);
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

  const btnRemove = (id) => {
    const newData = data.filter((val) => val.id !== id)
    setData(newData)
  }

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = data.filter((example) => {
    return example.title.search(value) != -1;
    });
    setFilteredData(result);
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
      Home
      <ContextApi/>
      <PropsCustom/>
      <hr/>
      <button onClick={btnAdmin}>Click Admin</button>
      <input type="text" onChange={(event) =>handleSearch(event)} />
      {filteredData.map((val) => {
        return(
          <div key={val.id}>
            <h3>{val.title}</h3>
            <p>{val.body}</p>
            <button onClick={() => btnRemove(val.id)}>&times;</button>
          </div>
        )
      })}
    </div>
  )
}
