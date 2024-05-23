import React, { useState, useEffect } from "react";
import axios from "axios";

const CustomApp = () => {
    const [item, setItem] = useState();
    const options = {
        method: 'GET',
        url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/info',
        headers: {
          'X-RapidAPI-Key': 'b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f',
          'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
        }
      };

      const fetchData = async () => {
        try {
            const response = await axios.request(options);
            setItem(response.data)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
      }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>
    {/* classes */}
    <h2 className="font-bold text-[30px]">Classes</h2>
      {item?.classes?.map((val,index) => {
        return(
            <div key={index}>
                {val}
            </div>
        )
      })}

      {/* sets */}
      <h2 className="font-bold text-[30px]">Sets</h2>
      {item?.sets?.map((val,index) => {
        return(
            <div key={index}>
                {val}
            </div>
        )
      })}

      {/* standard */}
      <h2 className="font-bold text-[30px]">Standard</h2>
      {item?.standard?.map((val,index) => {
        return(
            <div key={index}>
                {val}
            </div>
        )
      })}

       {/* wild */}
       <h2 className="font-bold text-[30px]">Wild</h2>
      {item?.wild?.map((val,index) => {
        return(
            <div key={index}>
                {val}
            </div>
        )
      })}

      {/* types */}
      <h2 className="font-bold text-[30px]">Types</h2>
      {item?.types?.map((val,index) => {
        return(
            <div key={index}>
                {val}
            </div>
        )
      })}

      {/* factions */}
      <h2 className="font-bold text-[30px]">Factions</h2>
      {item?.factions?.map((val,index) => {
        return(
            <div key={index}>
                {val}
            </div>
        )
      })}

      {/* qualities */}
      <h2 className="font-bold text-[30px]">Qualities</h2>
      {item?.qualities?.map((val,index) => {
        return(
            <div key={index}>
                {val}
            </div>
        )
      })}

      {/* races */}
      <h2 className="font-bold text-[30px]">Races</h2>
      {item?.races?.map((val,index) => {
        return(
            <div key={index}>
                {val}
            </div>
        )
      })}

      {/* locales */}
      <h2 className="font-bold text-[30px]">Locales</h2>
      <ul className="listLocales list-unstyle">
        <li>
        {item?.locales?.DE_DE} 
        </li>
        <li>
        {item?.locales?.EN_GB} 
        </li>
        <li>
        {item?.locales?.EN_US} 
        </li>
        <li>
        {item?.locales?.ES_ES} 
        </li>
        <li>
          {item?.locales?.ES_MX} 
        </li>
        <li>
          {item?.locales?.FR_FR} 
        </li>
        <li>
          {item?.locales?.IT_IT} 
        </li>
        <li>
          {item?.locales?.KO_KR} 
        </li>
        <li>
          {item?.locales?.PL_PL} 
        </li>
        <li>
          {item?.locales?.PT_BR} 
        </li>
        <li>
          {item?.locales?.RU_RU} 
        </li>
        <li>
          {item?.locales?.ZH_CN} 
        </li>
        <li>
          {item?.locales?.ZH_TW} 
        </li>
        <li>
          {item?.locales?.JA_JP} 
        </li>
        <li>
          {item?.locales?.TH_TH} 
        </li>
      </ul>      
    </div>
  )
}

export default CustomApp
