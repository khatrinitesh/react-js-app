import React,{useState,useEffect} from 'react';

const CustomApp = () => {
    const [listdata,setListData] = useState([]);

    const baseurl = 'https://api.dictionaryapi.dev/api/v2/entries/en/hello'

    const fetchData = async () => {
        try {
            const response = await fetch(baseurl)
            const result = await response.json()
            console.log(result)
            if (result) {
                setListData(result); //set the data to the state
            } else {
                // Handle case where 'results' is not in response
                console.error("No data found in response");
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
      {listdata.length > 0 ? (
                listdata.map((item, index) => (
                    <div key={index}>
                        <h2 className='font-bold text-[red] text-[30px]'>Word: {item.word}</h2>
                        {item.meanings.map((meaning, meaningIndex) => (
                            <div key={meaningIndex} className={`${meaningIndex !== item.meanings.length - 1 ? 'mb-4' : ''}`}>
                                <p>{meaning.partOfSpeech}</p>
                                {meaning.definitions.map((definition, defIndex) => (
                                    <div key={defIndex}>
                                        <p>Definition: {definition.definition}</p>
                                        <p>antonyms: {definition.antonyms}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                ))
            ) : (
                <p>No data found</p>
            )}
    </div>
  )
}

export default CustomApp
