import React, { useEffect, useState } from 'react'

const RestApiCall = () => {
    return (
        <>
            <Example />
        </>
    )
}

export default RestApiCall

const Example = () => {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const baseurl = 'https://jsonplaceholder.typicode.com/posts'

    const fetchData = async () => {
        try {
            const response = await fetch(baseurl)
            if (!response.ok) {
                throw new Error('Network response was ok')
            }
            const data = await response.json()
            setPost(data)
            setLoading(false)
        }
        catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    const btnDel = (id) => {
        const newData = post.filter((val) => val.id !== id)
        setPost(newData)
    }



    return (
        <>
            {loading ? (
                <div>Loading....</div>
            ) : error ? (
                <div>Error: {error}</div>
            ) : (
                <>
                    {
                        post.map((val) => {
                            const { title, body, id } = val
                            return (
                                <div className='bg-[#c9c9c9] relative rounded-[3px] p-[10px] mb-[20px]' key={id}>
                                    <h3 className='font-bold'>{title}</h3>
                                    <p className='italic'>{body}</p>
                                    <button className='absolute top-[0] right-[5px]' onClick={() => btnDel(id)}>&times;</button>
                                </div>
                            )
                        })
                    }
                </>
            )}
        </>
    )
}
