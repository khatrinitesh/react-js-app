import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const List = () => {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [data,setData] = useState([]);

    const APIDummy = 'https://dummyjson.com/products';

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
            <h2 className='text-2xl font-bold mb-4'>Product Dummy list</h2>
                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                    {data.map((val) => {
                        const { id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = val;
                        return (
                            <Link to={`/list/${id}`} key={id}>
                            <div key={id} className='bg-white rounded-lg shadow-lg overflow-hidden'>
                                <img src={thumbnail} alt={title} className='w-full h-40 object-cover' />
                                <div className='p-4'>
                                    <h2 className='text-lg font-semibold mb-2'>{title}</h2>
                                    <p className='text-gray-600 mb-4'>{description}</p>
                                    <span className='text-gray-600 mb-4 block'><strong>Rating</strong>: {rating}</span>
                                    <span className='text-gray-600 mb-4 block'><strong>Stock</strong>: {stock}</span>
                                    <span className='text-gray-600 mb-4 block'><strong>Brand</strong>: {brand}</span>
                                    <span className='text-gray-600 mb-4 block'><strong>Category</strong>: {category}</span>
                                    <div className="flex gap-4 mb-2">
                                        {images.map((val,index) => (
                                            <img src={val} key={index} alt="" className='w-[30px] h-[30px]]'/>
                                        ))}
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-gray-800 font-bold'>{price}</span>
                                        <span className='text-gray-600'>{discountPercentage}% off</span>
                                    </div>
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