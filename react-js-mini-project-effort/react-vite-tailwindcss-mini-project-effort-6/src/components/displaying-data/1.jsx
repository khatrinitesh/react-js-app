import React, { useEffect, useState } from 'react'

const DisplayData = () => {
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        // fetch data from an API
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(final => {
            setPosts(final);
            setLoading(false);
        })
        .catch(error => {
            console.error('error fetching data',error);
            setLoading(false);
        })
    },[]);


    if(loading){
        return(
            <div>Loading...</div>
        )
    }
  return (
    <div className='container mx-auto'>
       <h1 className='font-bold text-[32px]'>Posts</h1>
       <ul>
        {posts.map((val) => (
            <div key={val.id}>
                <h3>{val.title}</h3>
            </div>
        ))}
       </ul>
    </div>
  )
}

export default DisplayData
