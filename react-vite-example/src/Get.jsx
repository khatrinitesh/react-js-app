import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Example1 = () => {
    
    const [data,setData] = useState([]);
    const baseurl = 'https://jsonplaceholder.asdsad.com/posts';

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get(baseurl)
                if(response.status < 200 || response.status >= 300){
                    throw new Error(`Http status: ${response.status}`)
                }
                const val = response.data;
                setData(val)
                console.log(val)
            }
            catch(error){
                console.error('Error fetching data:', error);
            }
        }
        fetchData()
    },[])
  return (
    <div>
        <h3>{baseurl}</h3>
      {data.map((val) => {
        return(
            <div>{val.title}</div>
        )
      })}
    </div>
  )
}

export default Example1
