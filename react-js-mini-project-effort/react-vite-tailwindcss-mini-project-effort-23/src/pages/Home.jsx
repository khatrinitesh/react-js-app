import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';

const Home = () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Failed to fetch posts. Status: ' + response.status);
                }

                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []); 

      if(loading){
        return(
            <div>Loading...</div>
        )
      }

      if(error){
        return(
            <div>Error: {error}</div>
        )
      }
  return (
    <div className='content'>
         <div className="container mx-auto">
      <Banner title='Home' description='Ex irure consequat tempor ea.'/>
      {posts.map(post => (
                        <li key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
      </div>
    </div>
  );
}

export default Home;
