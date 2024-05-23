import React, { useEffect, useState } from "react";

const list = () => {
    const [listdata, setListdata] = useState([]);
    const url = 'https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=2018-12-01&federation=UEFA';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f',
            'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result.data);
                setListdata(result.data); // Update state with fetched data
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
  return (
    <div>
       {listdata.map((val, index) => {
                return (
                    <div key={index}>
                        {/* Display the specific content you want from each item in the list */}
                        <p>{val.away_team}</p>
                        <p>{val.competition_name}</p>
                        {/* Add more properties as needed */}
                    </div>
                );
            })}
    </div>
  )
}

export default list
