import React,{useState,useEffect} from 'react';
import Banner from '../components/banner';
import { Link } from 'react-router-dom';

const ServiceList = () => {

  const [listdata,setListdata] = useState([]);

  const baseurl = 'https://api.nasa.gov/neo/rest/v1/feed'
  const apiKey = 'ggWvK9B9LwH1XT12I0uls2DcTZFowY6nlguKb7cT'

  const fetchData = async () => {
    try {
     const response = await fetch(`${baseurl}?start_date=2015-09-07&end_date=2015-09-08&api_key=${apiKey}`) ;
     const result = await response.json()
     const resultallneos = Object.values(result.near_earth_objects).flat();
     console.log(resultallneos)
     setListdata(resultallneos)
    } catch (error) {
      
    }
  }

  useEffect(() =>{
    fetchData()
  },[])
  return (
    <div className='content'>
      <Banner bannerStyle='bg-[orange]' title="ServiceList" desc="Sunt commodo fugiat aute aute elit et dolore excepteur."/>
      {listdata.map((val,index) => {
        const {id} = val
        return(
          <>
            <Link key={index} to={`/servicedetail/${id}`}>view detail <strong>{id}</strong></Link><br />
          </>
        )
      })}
    </div>
  )
}

export default ServiceList
