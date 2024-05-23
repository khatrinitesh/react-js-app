import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const CustomApp = () => {

    const [listdata,setListData] = useState([]);
    const baseurl = 'https://api.dictionaryapi.dev/api/v2/entries/en/happy'

    const fetchData = async () => {
        try {
            const response = await fetch(baseurl);
            const result = await response.json();
            console.log(result)
            if(result){
                setListData(result)
            }
            
        } catch (error) {
            console.error("Fetching data failed:", error);
        }
    }

    useEffect(() => {
        fetchData()
    },[])
  return (
    <div>
         {listdata.length> 0 ? (
            <>
             <ul className=''>
               {listdata.map((val,index) => {
                return(
                    <li key={index}>
                        <span>{val.word}</span>
                        {val.meanings && val.meanings.map((meaning,meaningIndex) => {
                            return(
                                <div key={meaningIndex}>
                                    <p>{meaning.partOfSpeech}</p>
                                    {meaning.definition.map((definition,defIndex) => {
                                        return(
                                            <>
                                            
                                            <div key={defIndex}>
                                                <p>{definition.definition}</p>
                                            </div>
                                            </>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                )
               })}
            </ul>
            </>
        ) : (
            <>
            <p>No data found</p></>
        )}
    </div>
  )
}

export default CustomApp
