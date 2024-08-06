import React from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from '../components/Btn/BtnPrimary';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if(!response.ok){
    throw new Error('network response was not ok')
  }
  return response.json();
}

const Home = () => {

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const btnNext = () => {
    navigate('/about');
  }
  const deletePost = async (id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete post');
    }
    return id;
  };

  const { mutate: handleDelete } = useMutation(deletePost, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('posts');
    },
    onError: (error) => {
      console.error('Error deleting post:', error);
    },
  });
 

  const {data,error,isLoading } = useQuery('',fetchPosts);


  if(isLoading ) return <div>Loading...</div>

  if(error) return <div>An error occured: {error.message}</div>

  return (
    <div>
      <h1>Home Page</h1>
      <BtnPrimary label="next" onClick={btnNext}/>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <BtnPrimary label="Delete" onClick={() => handleDelete(post.id)}/>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home