import React, { useEffect, useState } from "react";

const list = () => {
  const [listdata, setListdata] = useState([]);

  const url =
    "https://os-sports-perform.p.rapidapi.com/v1/calendar/categories?timezone=6&sport_id=1&date=2022-05-06";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f",
      "X-RapidAPI-Host": "os-sports-perform.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setListdata(result.data || []);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {listdata &&
        listdata.map((val, index) => (
          <div key={index}>
            <h2 className="font-bold text-[red]">{val?.category?.name}</h2>
            <p className="desc">
              {val?.category?.sport?.name || "Sport Name Not Available"}
            </p>
          </div>
        ))}
    </>
  );
};

export default list;
