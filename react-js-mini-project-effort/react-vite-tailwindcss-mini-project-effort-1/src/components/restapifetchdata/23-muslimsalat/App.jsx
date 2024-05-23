import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomApp = () => {

    
    const [item, setItem] = useState([]);

    const options = {
        method: 'GET',
        url: 'https://muslimsalat.p.rapidapi.com/london.json',
        headers: {
          'X-RapidAPI-Key': 'b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f',
          'X-RapidAPI-Host': 'muslimsalat.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                setItem(response?.data);
                console.log(response?.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    },[]);

  return (
    <div>
        {item.for}
        <br />
        {item.query}
        <br />
        {item.prayer_method_name}
        <br />
        {item.sealevel}
        <br />
        {item.qibla_direction}
        <br />
        <a className="font-bold underline" target="_blank" href={item.link}>link</a>
        <br />
        {item.today_weather.pressure}
        <br />
        {item.today_weather.temperature}
    </div>
  )
}

export default CustomApp
