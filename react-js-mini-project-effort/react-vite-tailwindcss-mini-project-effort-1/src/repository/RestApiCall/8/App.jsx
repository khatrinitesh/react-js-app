import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RestApiCallApp = () => {

    const [post,setPost] = useState([]);

    const baseurl = 'https://jsonplaceholder.typicode.com/users'

    const fetcData = () => {
        return axios.get(baseurl)
        .then((response) => {
            setPost(response.data)
        })
    }

    useEffect(() => {
        fetcData()
    },[])
  return (
    <>
      {post.map((val) => {
        const {name,id,address:{street}} = val
        return(
            <div key={id}>
                <h3>{name}</h3>
                <p><strong>{street}</strong></p>
                <hr/>
            </div>
        )
      })}
    </>
  )
}

export default RestApiCallApp
