
import React, { useEffect, useState } from 'react'

const RestApiCallApp = () => {

    // access the api endpoint
    const baseurl = 'https://jsonplaceholder.typicode.com/users';

    // set it to hold data
    const [post,setPost] = useState([]);

    // create a fetchinfo() callback functio to fetch and store data
    const fetchData = () => {
        return fetch(baseurl)
        .then((res) => res.json())
        .then((data) => setPost(data))
    }

    useEffect(() => {
        fetchData()
    },[])

  return (
    <>
      {post.map((val,index) => {
        const {name,email,address:{street,suite}} = val
        return(
            <div key={index} className='bg-[#c9c9c9] p-[10px] mb-[10px] rounded-[3px]'>
                <h3>{name}</h3>
                <p>{email}</p>
                <p>{street} - {suite}</p>
            </div>
        )
      })}
    </>
  )
}

export default RestApiCallApp
