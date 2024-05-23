import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const List = () => {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [data,setData] = useState([]);

    const APIDummy = 'https://dummyjson.com/products?limit=10&skip=10&select=title,price';

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(APIDummy);
                if(!response.ok){
                    throw new Error(`Http status {response.status}`)
                }
                const result = await response.json()
                setLoading(false)
                setData(result.products)
                console.log(result.products);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        }
        fetchData();
    },[]);

    if(loading){
        return(
            <div className='flex justify-center items-center h-screen'>
                <div className='text-center'>Loading...</div>
            </div>
        )
    }
    if(error){
        return(
            <div className='flex justify-center items-center h-screen'>
                <div className='text-center'>{error}</div>
            </div>
        )
    }
  return (
    <>
         <div className='container mx-auto p-4'>
            <h2 className='text-2xl font-bold mb-4'>Dummy list</h2>
                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {data.map((val) => {
                        const { id, title, price } = val;
                        return (
                            <Link to={`/list/${id}`} key={id}>
                            <div key={id} className='bg-white rounded-lg shadow-lg overflow-hidden'>
                                <div className='p-4'>
                                <h2 className='text-lg font-semibold mb-2'>{id}</h2>
                                    <h2 className='text-lg font-semibold mb-2'>{title}</h2>
                                    <span className='text-gray-600 mb-4 block'><strong>Price</strong>: {price}</span>
                                </div>
                            </div>
                        </Link>
                        );
                    })}
                </div>
        </div>
    </>
  )
}

export default List