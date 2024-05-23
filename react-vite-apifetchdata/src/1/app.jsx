import React,{useState,useEffect} from 'react';

const CustomApp = () => {
    const [listdata,setListData] = useState([]);

    const baseurl = 'https://api.nettoolkit.com/v1/account/test-api-keys'

    const fetchData = async () => {
        try {
            const response = await fetch(baseurl)
            const result = await response.json()
            console.log(result)
            if (result.results) {
                setListData(result.results);
            } else {
                // Handle case where 'results' is not in response
                console.error("No 'results' key in response");
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
                        {item.created} - {item.id} - {item.ip} - {item.key} - {item.type}
                    </div>
                ))
            ) : (
                <p>No data found</p>
            )}
    </div>
  )
}

export default CustomApp
