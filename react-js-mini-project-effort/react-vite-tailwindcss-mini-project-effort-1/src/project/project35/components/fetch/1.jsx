import React,{useState,useEffect} from 'react';

export default function FetchExample() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setData(data))
    },[])
  return (
    <>
      {data.map((val,index) => {
        const {name,username,email} = val
        return(
            <div key={index} style={{borderBottom:'1px solid red'}}>
                <h3>{name}</h3>
                <h3>{username}</h3>
                <h3>{email}</h3>
            </div>
        )
      })}
    </>
  )
}
