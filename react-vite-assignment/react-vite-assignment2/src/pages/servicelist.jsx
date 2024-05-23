import React from 'react';
import {useState,useEffect} from 'react';

const Service = () => {

  const [listdata,setListdata] = useState([])

  const baseurl = 'https://api.apis.guru/v2/specs/1forge.com/0.0.1/swagger.json'

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseurl}`)
      const result = await response.json()
      // Assuming result is an array or contains an array you want to display
      // Update this logic based on the actual structure of your data
      console.log(result)
      setListdata(result || []);
    } catch (error) {
      console.error('error',error);
    }
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div>
      <h3 className='text-[30px]'>Service</h3>
      {info?.contact?.email}
    </div>
  )
}

export default Service
