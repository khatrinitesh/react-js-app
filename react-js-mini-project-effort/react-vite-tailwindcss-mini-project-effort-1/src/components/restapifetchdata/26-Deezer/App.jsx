import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomApp = () => {
    const [item, setItem] = useState();

    const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/infos',
        headers: {
          'X-RapidAPI-Key': 'b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.request(options);
            setItem(response.data);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <>
    {item?.ads?.audio?.default?.interval}
    <br />
    {item?.hosts?.images}
    <br />
    {item?.open}
    </>
  )
}

export default CustomApp
