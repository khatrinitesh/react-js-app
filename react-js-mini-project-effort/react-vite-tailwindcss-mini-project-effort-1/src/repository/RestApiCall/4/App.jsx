import React, { useEffect, useState } from 'react'

const RestApiCall = () => {
    return (
        <>
            <DataFetcher />
        </>
    )
}

export default RestApiCall

const DataFetcher = () => {
    const [post, setPost] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const baseUrl = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {

            const response = await fetch(baseUrl)
            if (!response.ok) {
                throw new Error('network response was ok.')
            }
            const data = await response.json();
            setPost(data);
            setLoading(false)
        }
        catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }
    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <ul>
                    {post.map((val) => {
                        const { title, body, id } = val
                        return (
                            <li key={id} className='border-b-[1px] border-solid border-[red] py-[10px]'>
                                <h3 className='font-bold'>{title}</h3>
                                <p className='italic'>{body}</p>
                                <button onClick={() => btnDel()}></button>
                            </li>
                        )
                    })}
                </ul>
            )}
        </>
    )
}