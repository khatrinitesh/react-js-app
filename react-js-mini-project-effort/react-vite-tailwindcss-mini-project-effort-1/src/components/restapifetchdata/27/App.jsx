import React, { useState, useEffect } from 'react';

const CustomApp = () => {
    const [data,setData] = useState([])
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false);

    const baseurl = 'https://jsonplaceholder.typicode.com/todos/1'

    useEffect(() => {
        // function to fetch data asynchronously
        const fetchData = async () => {
            try{
                setLoading(true)
                // simulate an api call using a promise
                const response = await fetch(`${baseurl}`);
                const result = await response.json();
                // update state with the fetched data 
                setData(result)
                console.log(result)
            }
            catch(error){
                // handle errors and update the error state
                setError(error.message || 'an error occured')
            }
            finally{
                // set loading t ofalse once the operation is complete
                setLoading(false)
            }
        }

        // call the asynchronous function
        fetchData();
    },[]) // Empty dependency array ensures the effect runs only once, similar to componentDidMount

    // display loading spinner while fetching data
    if(loading){
        return(
            <div>Loading...</div>
        )
    }
    // display error message if an error occured.
    if(error){
        return(
            <>Eror: {error}</>
        )
    }
    // display the fetched data
  return (
    <div>
      <h2 className='text-[30px] font-bold'>Async Example</h2>
      <div>
        {data.title} - {data.id}
      </div>
    </div>
  )
}

export default CustomApp
