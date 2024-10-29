import React, { useEffect, useState } from "react";
import { fetchPosts } from "./../api/api";
import HeadTitle from "../components/HeadTitle";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const postsData = await fetchPosts();
      setPosts(postsData);
    };
    getPosts();
  }, []);
  return (
    <div className="content">
      <div className="container mx-auto">
        <div className="py-[50px]">
          <HeadTitle>Home page</HeadTitle>
          <ul className="gap-[15px] grid">
            {posts.map((post) => (
              <li key={post.id} className="">
                <h3 className="font-bold">{post.title}</h3>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
