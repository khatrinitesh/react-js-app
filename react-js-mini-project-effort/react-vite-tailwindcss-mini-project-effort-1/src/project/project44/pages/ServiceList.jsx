import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from "../components/Banner";

const Service = ({ style }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const baseurl = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(baseurl)
                if (!response.ok) {
                    throw new Error('sorry something went wrong')
                }
                const data = await response.json();
                setData(data);
                setLoading(false)
            }
            catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData();
    }, [])

    const btnDel = (id) => {
        const newData = data.filter((val) => val.id !== id)
        setData(newData)
    }

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
    if (error) {
        return (
            <div>{error}</div>
        )
    }
    return (
        <div className={`${style} content w-full`}>
            <Banner title="Service list" desc="Lorem Ipsum" />
            {data.map((val, index) => {
                return (
                    <div key={index}>
                        <h3 className='text-[30px] font-bold'>{val.title}</h3>
                        <Link to={`/service/${val.id}`}>Click</Link>
                        <p className='font-italic'>{val.body}</p>
                        <button className={`${style} bg-[orange] px-[10px] py-[5px] rounded-[3px] text-white`} onClick={() => btnDel(val.id)}>&times;</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Service
