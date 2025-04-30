const apiurlposts = import.meta.env.VITE_API_URL_POSTS;
const apiurlusers = import.meta.env.VITE_API_URL_USERS;

// posts
export const fetchPosts = async () => {
  const res = await fetch(apiurlposts);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return await res.json();
};

// users
export const fetchUsers = async () => {
  const res = await fetch(apiurlusers);
  if (!res.ok) throw new Error("Failed to fetch users");
  return await res.json();
};