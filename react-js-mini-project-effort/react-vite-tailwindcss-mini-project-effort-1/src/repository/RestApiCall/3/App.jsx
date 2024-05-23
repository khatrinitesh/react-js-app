import axios from 'axios';
import React, { useState } from 'react';


const RestApiCall = () => {
    return (
        <>
            <Example />
        </>
    )
}

export default RestApiCall

const Example = () => {

    const baseurl = 'https://api.quotable.io/random'
    const [post, setPost] = useState([])
    const getQuote = () => {
        axios.get(baseurl)
            .then((res) => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <button onClick={getQuote}>Click Random</button>
            <hr />
            <div className=''>
                {post.content} <br />
                {post.author} <br />
                {post.tags} <br />
                {post.authorSlug} <br />
                {post.dateAdded} <br />
                {post.dateModified}
            </div>
        </div>
    )
}