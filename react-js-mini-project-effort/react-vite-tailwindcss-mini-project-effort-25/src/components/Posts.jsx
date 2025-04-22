import React, { useEffect } from "react";
import usePostStore from "../store/usePostStore";

const Posts = () => {
  const { posts, loading, error, fetchPosts } = usePostStore();

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="p-4 bg-gray-100 rounded">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-700">{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Posts;
