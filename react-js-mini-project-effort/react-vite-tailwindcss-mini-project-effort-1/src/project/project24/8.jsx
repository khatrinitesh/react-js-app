import React,{useState,useEffect} from 'react'

export default function HooksApp() {

    const [post,setPost] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        fetch('https://dummyjson.com/posts/1')
        .then((res) => res.json())
        .then((data) => {
            setPost(data);
            setLoading(false);
        })
    },[])
  return (
    <div>
        { loading ? 
        ("loading...")  // true
        : 
        // false
        (
            <>
             <h1>{post.title}</h1>
             <p>{post.body}</p>
            </>
        )}
        
    </div>
  )
}
