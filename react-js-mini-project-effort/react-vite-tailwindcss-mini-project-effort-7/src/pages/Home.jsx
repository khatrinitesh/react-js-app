import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import BtnPrimary from '../components/Btn/BtnPrimary';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const deletePost = async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete post');
  }
  return id;
};

const Home = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, error, isLoading } = useQuery('posts', fetchPosts);

  const { mutate: handleDelete } = useMutation(deletePost, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('posts');
    },
    onError: (error) => {
      console.error('Error deleting post:', error);
    },
  });

  const btnNext = () => {
    navigate('/about');
  };

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h1>Home Page</h1>
      <BtnPrimary label="Next" onClick={btnNext} />
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <BtnPrimary label="Delete" onClick={() => handleDelete(post.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
