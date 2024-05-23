import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomApp = () => {
  const [item, setItem] = useState([]);

  const options = {
    method: "GET",
    url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete",
    params: {
      q: "tesla",
      region: "US",
    },
    headers: {
      "X-RapidAPI-Key": "b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f",
      "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setItem(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="box">
          <h3 className="font-bold text-[25px] underline">Quotes Map List</h3>
          {item?.quotes?.map((val, index) => {
            const {
              exchange,
              shortname,
              quoteType,
              symbol,
              score,
              typeDisp,
              longname,
              exchDisp,
              sector,
              sectorDisp,
              industry,
              industryDisp,
              dispSecIndFlag,
              isYahooFinance,
            } = val;
            return (
              <div key={index}>
                <h3>exchange: {exchange}</h3>
                <h3>shortname: {shortname}</h3>
                <h3>quoteType: {quoteType}</h3>
                <h3>symbol: {symbol}</h3>
                <h3>index: {index}</h3>
                <h3>score: {score}</h3>
                <h3>typeDisp: {typeDisp}</h3>
                <h3>longname: {longname}</h3>
                <h3>exchDisp: {exchDisp}</h3>
                <h3>sector: {sector}</h3>
                <h3>sectorDisp: {sectorDisp}</h3>
                <h3>industry: {industry}</h3>
                <h3>industryDisp: {industryDisp}</h3>
                <h3>dispSecIndFlag: {dispSecIndFlag}</h3>
                <h3>isYahooFinance: {isYahooFinance}</h3>
              </div>
            );
          })}
        </div>

        <div className="box">
          <h3 className="font-bold text-[25px] underline">News Map List</h3>
          {item?.news?.map((val, index) => {
            const {
              title,
              uuid,
              publisher,
              link,
              providerPublishTime,
              type
            } = val;
            return (
              <div key={index}>
                <h3>title: {title}</h3>
                <h3>uuid: {uuid}</h3>
                <h3>publisher: {publisher}</h3>
                <h3>link: {link}</h3>
                <h3>index: {index}</h3>
                <h3>providerPublishTime: {providerPublishTime}</h3>
                <h3>type: {type}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CustomApp;
