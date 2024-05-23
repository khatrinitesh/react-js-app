import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomApp = () => {
    const [item, setItem] = useState([]);
    const [sortedItem, setSortedItem] = useState([]);


    const options = {
        method: 'GET',
        url: 'https://currency-exchange.p.rapidapi.com/listquotes',
        headers: {
          'X-RapidAPI-Key': 'b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f',
          'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
        }
      };

      
      useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.request(options);
                setItem(response.data)
                setSortedItem([...response.data])  // Copy the data for sorting
                console.log(response.data); 
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
      },[])

      const btnAsc = () => {
        const sortAsc = [...sortedItem].sort((a,b) => a.localeCompare(b));
        setSortedItem(sortAsc)
      }
      const btnDsc = () => {
        const sortDsc = [...sortedItem].sort((a,b) => b.localeCompare(a));
        setSortedItem(sortDsc)
      }
  return (
    <div>
        <button onClick={btnAsc}>Ascending</button>
        <button onClick={btnDsc}>Descending</button>
        {sortedItem.map((val,index) => {
            return(
                <div key={index}>{val}</div>
            )
        })}
    </div>
  )
}

export default CustomApp
