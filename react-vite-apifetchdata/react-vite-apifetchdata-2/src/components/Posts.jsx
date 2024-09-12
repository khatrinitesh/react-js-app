import React, { useEffect, useState } from "react";
import { deletePost, getPost } from "../api/PostApi";
import Form from "./Form";

const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi,setUpdateDataApi] = useState({});

  const getPostData = async () => {
    const res = await getPost();
    console.log(res);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  const handleDelPost = async (id) => {
      try {
        const res = await deletePost(id);
        if(res.status === 200){
            const newUpdatedPosts = data.filter((curPost) => {
                return curPost.id !== id;
            });
            setData(newUpdatedPosts)
        }
    } catch (error) {
        console.log(error)
    }
  };

    //handleUpdatePost
    const handleUpdatePost = (curElem) => setUpdateDataApi(curElem);
  return (
    <>
    <Form data={data} setData={setData} updateDataApi={updateDataApi} setUpdateDataApi={setUpdateDataApi}/>
      <section className="section-post">
        <ul>
          {data.map((curElem) => {
            const { id, title, body } = curElem;
            return (
              <li key={id}>
                <span>{id}</span>
                <h3>{title}</h3>
                <p>{body}</p>
                <div className="gap-4">
                  <button onClick={() => handleUpdatePost(curElem)}>Edit</button>
                  <button onClick={() => handleDelPost(id)}>Delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Posts;
