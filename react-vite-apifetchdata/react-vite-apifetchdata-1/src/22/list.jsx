import React,{useState,useEffect} from 'react'

const API_URL = import.meta.env.VITE_APP_API1;

const App = () => {
  
  const [loading,setLoading] = useState(false);
  const [data,setData] = useState([]);
  const [error,setError] = useState(false);

  const fetchData = async() => {
    setLoading(true);
    try {
      const somecontent = await fetch(API_URL);
      if(!somecontent.ok) {
        throw new Error('sorry something went wrong');
      }
      const finaltresult = await somecontent.json();
      setData(finaltresult);
      console.log(finaltresult);
    } catch (error) {
      setError(error.message);
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  },[]);


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
    <>
    {import.meta.env.VITE_KEY}
      {data.map((val,id) => (
        <div key={id} className='mb-5 card border p-2 rounded'>
          <h3 className='font-bold'>{val.title}</h3>
          <p>{val.body}</p>
        </div>
      ))}
    </>
  )
}

export default App
