import axios from 'axios'
import React, { useState } from 'react'

const RestApiCall = () => {
    return (
        <>
            <Example />
        </>
    )
}

export default RestApiCall

const Example = () => {
    const baseUrl = 'https://official-joke-api.appspot.com/random_joke'

    const [post, setPost] = useState([])

    axios.get(baseUrl)
        .then((res) => {
            setPost(res.data)
        })

    return (
        <>
            <h1>{post.type}</h1>
            <h1>{post.setup}</h1>
            <h1>{post.punchline}</h1>
            <h1>{post.id}</h1>
        </>
    )
}
