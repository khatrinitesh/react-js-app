import React, { useEffect, useState } from 'react';
import {Routes,Route} from 'react-router-dom';

import Example from './Example';
import ExampleList from './ExampleList';

const CustomApp = () => {
    const examples = import.meta.env.VITE_API_COMMENTS
    const [data,setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(examples)
                const result = await response.json()
                setData(result)
                console.log(result)
            }
            catch(error){
                console.log(`Error,${error}`)
            }
        }
        fetchData()
    },[])

    const handleDel = (id) => {
        // Perform deletion logic, for now, let's filter out the example to be deleted
        const updatedData = data.filter((example) => example.id !== id)
        setData(updatedData)
    }

  return (
    <>
       <>
        <Routes>
            <Route path="/example/:exampleId" element={<Example examples={data}/>}></Route>
            <Route path="/" element={<ExampleList examples={data} onDelete={handleDel}/>}></Route>
        </Routes>   
        </>
    </>
  )
}

export default CustomApp
