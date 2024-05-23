import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomApp = () => {
    const [item, setItem] = useState();

    const options = {
      method: 'GET',
      url: 'https://hargrimm-wikihow-v1.p.rapidapi.com/steps',
      params: {count: '3'},
      headers: {
        'X-RapidAPI-Key': 'b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f',
        'X-RapidAPI-Host': 'hargrimm-wikihow-v1.p.rapidapi.com'
      }
    };
    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.request(options);
          setItem([response?.data])
        } 
        catch (error) {
          console.error(error);
        }
      }
      fetchData()
  },[]);
  

  return (
    <div>
      {JSON.stringify(item)}
    </div>
  )
}

export default CustomApp
