import React, { useEffect } from 'react'
import UseStore from '../Store/Store';

const ApiFecthData = (url) => {

    const {fetchData,apiData,isLoading,error,deleteItem} = UseStore();

    useEffect(() => {
        fetchData(url)
    }, [fetchData,url])
    
  return  {apiData,isLoading,error,deleteItem}
}

export default ApiFecthData
