import axios from 'axios';
import React, { useEffect, useState } from 'react';

const RestApiCallApp = () => {
    return (
        <>
            <GetJoke />
        </>
    )
}

export default RestApiCallApp

const GetJoke = () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

    const [post, setPost] = useState([])

    useEffect(() => {
        axios.get(baseUrl)
            .then((res) => {
                setPost(res.data)
            })
    }, [])


    return (
        <>
            {post.map((val, index) => {
                const { title, body } = val
                return (
                    <>
                        <div key={index} className='bg-[#f1f1f1] p-[10px] rounded-[10px] shadow-[5px_5px_10px_#ccc] flex gap-[14px] mb-[30px] flex-col '>
                            <h1 className='text-[32px] font-bold'>{title}</h1>
                            <p>{body}</p>
                        </div>
                    </>
                )
            })}

        </>
    )
}
