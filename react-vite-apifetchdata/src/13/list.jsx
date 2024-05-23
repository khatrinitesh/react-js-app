import React, { useState, useEffect } from "react";

const List = () => {
  const [listdata, setlistdata] = useState([]);

  const url =
    "https://live-golf-data.p.rapidapi.com/stats?year=2023&statId=186";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f",
      "X-RapidAPI-Host": "live-golf-data.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setlistdata(result)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return(
    <>
     <div>
      {listdata.name && <h1>{ listdata.name}</h1>}
      {listdata.rankings && listdata.rankings.map((val,index) => {
        return(
          <>
          {val.firstName} - {val.lastName} 
          <br />
          </>
        )
      })}
      </div>;
    </>
  )
};

export default List;
