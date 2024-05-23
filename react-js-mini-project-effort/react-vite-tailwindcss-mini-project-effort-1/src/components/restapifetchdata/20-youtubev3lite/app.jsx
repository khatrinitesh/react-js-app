import React, { useState,useEffect } from 'react';
import axios from 'axios';

const CustomApp = () => {
    
    const [item,setItem] = useState([])

    const options = {
        method: 'GET',
        url: 'https://youtube-v3-lite.p.rapidapi.com/videos',
        params: {
          chart: 'mostPopular',
          regionCode: 'US',
          part: 'id,snippet'
        },
        headers: {
          'X-RapidAPI-Key': 'b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f',
          'X-RapidAPI-Host': 'youtube-v3-lite.p.rapidapi.com'
        }
      };

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.request(options);
            setItem(response?.data?.items);
            console.log(response?.data?.items);
        } catch (error) {
            console.error(error);
        }
        }
        fetchData()
    },[])

    const btnDel = (index) => {
        const updatedData = [...item]
        updatedData.splice(index,1)
        setItem(updatedData)
    }

  return (
    <div>
        {item.map((val,index) => {
             const {
                id,
                kind,
                snippet: {
                  publishedAt,
                  channelId,
                  thumbnails: {
                    default: { url: defaultUrl, width: defaultWidth, height: defaultHeight },
                    medium: { url: mediumUrl, width: mediumWidth, height: mediumHeight },
                    high: { url: highUrl, width: highWidth, height: highHeight },
                  },
                },
              } = val;
            return(
                <div key={index}>
                    {id} - {kind} 
                    <h3>{publishedAt} - {channelId}</h3>
                    <h3 className='text-[red] font-bold'>Default: {defaultUrl} - {defaultWidth} - {defaultHeight}</h3>
                    <h3 className='text-[blue] font-bold'>Medium {mediumUrl}- {mediumWidth} - {mediumHeight}</h3>
                    <h3 className='text-[darkblue] font-bold'>High {highUrl}- {highWidth} - {highHeight}</h3>
                    <button onClick={() => btnDel(index)}>Delete</button>
                </div>
            )
        })}
    </div>
  )
}

export default CustomApp
