import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const List = () => {

    const [listdata,setListdata] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const baseurl = 'https://api-generator.retool.com/ikzsN3/data'

    const fetchdata = async () => {
        setLoading(true)
        try {
            const response = await fetch(baseurl);
            const result = await response.json();
            console.log(result)
            setListdata(result)
        } catch (error) {
            setError(error)
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchdata()
    },[])

    if(loading){
        return(
            <div>loading...</div>
        )
    }
    if(error){
        return(
            <div>{error.message}</div>
        )
    }
  return (
    <div>
      {listdata.map((val) => {
        const {id,'Column 1':col1} = val;
        return(
            <>
                <div className='flex'>
                    <h2 key={id}>{col1}</h2>
                    {' - '} <Link to={`list/${id}`}>{id}</Link>
                </div>
            </>
        )
      })}
    </div>
  )
}

export default List
