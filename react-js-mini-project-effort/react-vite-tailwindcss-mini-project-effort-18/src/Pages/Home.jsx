import React from 'react';
import Banner from "../Layout/Banner"
import ApiFecthData from '../Api/Api';
import { Link } from 'react-router-dom';

const Home = () => {
  const {apiData,isLoading,error,deleteItem} = ApiFecthData()

  if(isLoading) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>
  return (
    <div className='content'>
      <Banner bannerTitle="Home" bannerDesc="Laboris anim duis esse ullamco magna est."/>
      <ul>
      {apiData && apiData.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => deleteItem(post.id)}>Delete</button>
        </li>
      ))}
      </ul>
      <Link to="/about">Go to about page</Link>
    </div>
  )
}

export default Home
