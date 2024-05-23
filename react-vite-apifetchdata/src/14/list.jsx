import React, { useState, useEffect } from "react";

const list = () => {
  const [listdata, setListdata] = useState([]);

  const baseurl =
    "https://bet365-api-inplay.p.rapidapi.com/bet365/get_sport_events/soccer";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f",
      "X-RapidAPI-Host": "bet365-api-inplay.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseurl, options);
        const result = await response.json();
        console.log(result);
        setListdata(result)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return <>{listdata.map((val,index) => {
        const {sport,sets,score,timer,liga} = val
        return(
            <div key={index} className="mb-3">
                1- {sport}
                <br />
                2- {sets}
                <br />
                3- {score}
                <br />
                4- {timer}
                <br />
                5- {liga}
            </div>
        )
    })
  }</>;
};

export default list;
