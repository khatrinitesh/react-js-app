import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

const Home = ({mainStyle}) => {
  const [data2,setData2] = useState();
  const [images,setImages] = useState();

  const apiEndpoint1  = import.meta.env.VITE_API_ENDPOINT1
  const apiEndpoint2  = import.meta.env.VITE_API_ENDPOINT2
  const apiEndpoint3  = import.meta.env.VITE_API_ENDPOINT3
  const apiEndpoint4  = import.meta.env.VITE_API_ENDPOINT4

  useEffect(() => {
    fetch(`${apiEndpoint1}`)
    .then((res) => res.json())
    .then(json => {
      console.log(json)
      setImages(json)
    })

   
  },[])

  useEffect(() => {
    fetch(`${apiEndpoint2}`)
    .then((res) => res.json())
    .then(json => {
      console.log(json)
      setData2(json)
    })
  });
  const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
  const [uniqueArray, setUniqueArray] = useState([]);


  useEffect(() => {
      const resultArray  = arrayWithDuplicates.filter((val,index,self)=>{
        return self.indexOf(val) === index
      })
      setUniqueArray(resultArray)
    }, [])
  
  return (
    <div className={`${mainStyle} mainContent`}>
      <h2 className='text-[30px] font-bold'>{apiEndpoint1}</h2>
      <h2 className='text-[30px] font-bold'>{apiEndpoint2}</h2>
      <h2 className='text-[30px] font-bold'>{apiEndpoint3}</h2>
      <h2 className='text-[30px] font-bold'>{apiEndpoint4}</h2>
        <Banner title="Home" desc="Lorem Ipsum"/>
        <p>Original array - {arrayWithDuplicates}</p>
        <p>Unique array - {uniqueArray}</p>
        {data2 && data2.map((val) => {
          return(
            <>
            <h2>{val.title}</h2>
            </>
          )
        })}
        
        <br/><br/>
        {images && images.map((img) => {
          return(
            <>
            <Link to={img.url}>
              <img src={img.download_url}/>
            </Link>
            </>
          )
        })}
    </div>
  )
}

export default Home
