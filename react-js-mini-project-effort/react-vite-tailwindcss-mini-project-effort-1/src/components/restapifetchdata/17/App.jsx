import React, { useState, useEffect } from 'react'

const URL = 'https://api.weatherapi.com/v1/current.json?key=dea7ca9926d24f819ad50236243101&q=London&aqi=no'

const CustomApp = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL);
            result.json().then(json => {
                console.log(json);
                setData(json.current.temp_c)
            })
        }
        fetchData();
    }, []); // Empty dependency array means this effect runs only once on mount
    return (
        <div>
            <br />
            {data}
        </div>
    )
}

export default CustomApp
