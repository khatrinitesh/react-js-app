import React,{useState,useEffect} from 'react'

const CustomApp = () => {
    const [item,setItem] = useState([]);

    const url = 'https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=2018-12-01&federation=UEFA'; // api url

    // api key and api host
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
                setItem(result.data);
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    },[])
  return (
    <>
    {item.map((val,index) => {
        const {home_team,competition_name,competition_cluster } = val
        return(
            <div key={index}>
                <h3 className='text-[red]'>{home_team}</h3>
                <h3 className='bg-[orange]'>{competition_cluster}</h3>
                <p>{competition_name}</p>
            </div>
        )
    })}
    </>
  )
}

export default CustomApp;
