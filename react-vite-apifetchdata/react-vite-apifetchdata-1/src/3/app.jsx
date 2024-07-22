import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';


const CustomApp = () => {
    const [listdata,setListData] = useState([]);

    const baseurl = 'https://pokeapi.co/api/v2/pokemon?limit=10'

    const fetchData = async () => {
        try {
            const response = await fetch(baseurl)
            const result = await response.json()
            console.log(result.results)
            if (result.results) {
                setListData(result.results);
            } else {
                // Handle case where 'results' is not in response
                console.error("No 'results' key in response");
            }
        } catch (error) {
            console.error("Fetching data failed:", error);
        }
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>
      {listdata.length > 0 ? (
                listdata.map((item, index) => (
                    <div key={index}>
                        <h2 className='font-bold text-[red] text-[30px]'>{item.name}</h2>
                        <a href={item.url} target="_blank">View link</a>
                    </div>
                ))
            ) : (
                <p>No data found</p>
            )}
    </div>
  )
}

export default CustomApp
