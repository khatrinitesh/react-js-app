import React,{useState,useEffect} from 'react';

// custom hook to fetch and manage table data
const UseTable = () => {
    // Custom hook to fetch and manage table data
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                // replace this with your actual api endpoint
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const result = await response.json()
                console.log(result)
                setData(result);
            } catch (error) {
                setError(error)
                console.error(error)
            }
            finally{
                setLoading(false);
            }
        }

        fetchData();


        // cleanup function
        return () => {} // cleanup code if needed
    },[]);
  return {data,loading,error}
}

export default UseTable
