import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const List = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const APIDummy = "https://api.coinlore.net/api/tickers/";

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(APIDummy);
        if (!response.ok) {
          throw new Error(`Http status {response.status}`);
        }
        const result = await response.json();
        setLoading(false);
        setData(result.data);
        console.log(result.data);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">Loading...</div>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">{error}</div>
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Dummy list</h2>
        <div className="card grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((val) =>{
            const {id,name,symbol,nameid,rank,price_usd,percent_change_24h,percent_change_1h,percent_change_7d,price_btc,market_cap_usd,volume24,volume24a,csupply,tsupply,mupply} = val
            return(
                <>
                <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-[10px] rounded-[10px]" key={id}>
                    <span className="block text-[red]">{name}</span>
                    <span className="block text-[blue]">{symbol}</span>
                    <span className="block">{nameid}</span>
                    <span className="block">{rank}</span>
                    <span className="block">{price_usd}</span>
                    <span className="block">{percent_change_24h}</span>
                    <span className="block">{percent_change_1h}</span>
                    <span className="block">{percent_change_7d}</span>
                    <span className="block">{price_btc}</span>
                    <span className="block">{market_cap_usd}</span>
                    <span className="block">{volume24}</span>
                    <span className="block">{volume24a}</span>
                    <span className="block">{csupply}</span>
                    <span className="block">{tsupply}</span>
                    <span className="block">{mupply}</span>
                </div>
                </>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default List;
