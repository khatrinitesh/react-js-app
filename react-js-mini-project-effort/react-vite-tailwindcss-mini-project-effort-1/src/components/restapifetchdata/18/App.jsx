import React, { useEffect, useState } from 'react';

const CustomApp = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const baseurl = import.meta.env.VITE_API_ENDPOINT

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(baseurl)
                if (!response.ok) {
                    throw new Error('sorry something went wrong')
                }
                const jsonData = await response.json();
                setData(jsonData.products)
            }
            catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])


    return (
        <>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data.map((val, index) => {
                const { title, images, price } = val
                return (
                    <div key={index}>
                        <h3>{title}</h3>
                        <p>{price}</p>
                        <img src={images} />
                    </div>
                )
            })}
        </>
    )
}

export default CustomApp
