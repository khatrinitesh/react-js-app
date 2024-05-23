import React,{useEffect,useState} from 'react';
import Banner from '../components/banner';

const url = ''

export default function Service() {

    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');

    const fetchData = async () => {
        setLoading(true);
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error('sorry something went wrong')
            }
            const data = await response.json();
            setPosts(data);
            setLoading(false);
        }
        catch(error){
            setError(error.message)
            setLoading(false)
        }
    }

    const btnDel= (id) => {
        const newData = posts.filter((val) => val.id !== id)
        setPosts(newData)
    }

    useEffect(() => {
        fetchData();
        console.log("Use Effect!")
    },[])

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
        <Banner title="Service page" desc="Lorem Ipsum"/>
        {posts.map((val,index) => {
            const {title,body,id} = val;
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
