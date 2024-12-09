import React,{useEffect, useState} from 'react';

const HooksApp = () => {
    const apiurl = import.meta.env.VITE_APIURL

    const [data,setData] = useState([]);
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch(apiurl);
            if(!response.ok){
                throw new Error('sorry something went wrong')
            }
            const user = await response.json();
            setData(user)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error.message)
            console.error(error)
        }
    }

    useEffect(() => {
        fetchData()
    },[]);


    useEffect(() => {
        console.log('Component re-rendered');

        const timer = setTimeout(() => {
            console.log('timer expired')
          },1000)

          return () => {
            clearTimeout(timer);
          }
      }); // Runs on every render

      const btnDelete =(id) => {
        const newData = data.filter((val) => val.id !== id)
        setData(newData)
      }

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
    <div>
      <h3>Hello World</h3>

      <br/>
      <img src="img/wallpaper.jpg" alt="" className='img-fluid' />
      {data.map((val) => (
        <div key={val.id} className='bg-blue-300 p-[10px]'>
            <h3 className='font-bold text-[32px]'>{val.title}</h3>
            <p className='text-[20px] font-semibold'>{val.body}</p>
            <button onClick={() => btnDelete(val.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default HooksApp;
