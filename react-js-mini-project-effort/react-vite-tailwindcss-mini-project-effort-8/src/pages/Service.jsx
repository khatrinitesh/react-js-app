import React, { useEffect, useState } from "react";
import Banner from "../layout/Banner";
import BtnPrimary from "../components/BtnPrimary";

const Service = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const baseurlpost = import.meta.env.VITE_URL_POSTS
  const baseurlusers = import.meta.env.VITE_URL_USERS

  const fetchData = async () => {
    setLoading(true);
    try {
      const [postsResponse,usersResponse] = await Promise.all([
        fetch(baseurlpost),
        fetch(baseurlusers)
      ])

      if(!postsResponse.ok){
        throw new Error('Posts API error' + postsResponse.statusText)
      }
      if(!usersResponse.ok){
        throw new Error('USers API error' + usersResponse.statusText)
      }

      const postsData = await postsResponse.json();
      const usersData = await usersResponse.json();
      setPosts(postsData)
      setUsers(usersData)
      console.log(postsData);
      console.log(usersData);
      
    } catch (error) {
      setErrors(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  const btnDel = (id) => {
    // Example of how you might handle deletion
    const newPostData = posts.filter((val) => val.id !== id)
    setPosts(newPostData)

    const newUserData = users.filter((val) => val.id !== id)
    setUsers(newUserData)
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="banner">
      <Banner
        title="Service"
        description="Aute exercitation do sint cillum commodo eiusmod Lorem officia in do quis Lorem exercitation."
      />
      <div className="container mx-auto">
        {loading && <div>Loading...</div>}
        {errors && <div>{errors}</div>}

        <h3>Posts</h3>
        {posts && (
          <>
            {posts.map((post) => (
              <div key={post.id}>
                <h3 className="font-bold text-[20px]">{post.title}</h3>
                <p>{post.body}</p>
                <BtnPrimary label="Remove" onClick={() => btnDel(post.id)}/>
              </div>
            ))}
          </>
        )}
        <hr/>
        <h3>Users</h3>
        {users && (
          <>
          {users.map((user) => (
            <div key={user.id}>
              <h3>Name: {user.name}</h3>
              <p>Username: {user.username}</p>
              <BtnPrimary label="Remove" onClick={() => btnDel(user.id)}/>
            </div>
          ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Service;
