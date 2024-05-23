import React,{useState,useEffect} from "react";
import Banner from "../components/banner";

export default function Service() {
    const [users,setUsers] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState('')


    const fetchData = async () => {
        setLoading(true)
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            if(!response.ok){
                throw new Error('sorry something went wrong')
            }
            const data = await response.json()
            setUsers(data)
            setLoading(false)
        }
        catch(error){
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[]);

    const btnRemove = (id) => {
        const newData = users.filter((val) => val.id !== id)
        setUsers(newData)
      }

    if(loading){
        return(
            <div>loading...</div>
        )
    }
    if(error){
        return(
            <div>{error}</div>
        )
    }
    return(
        <>
         <div className='content'>
        <Banner title="Service" desc="Lorem Ipsum"/>
        {users.map((val,id) => {
            return(
            <div key={id}>
                <h3>{val.title}</h3>
                <p>{val.body}</p>
                <button onClick={() => btnRemove(val.id)}>&times;</button>
            </div>
            )
        })}
        </div>
        </>
    )
}
