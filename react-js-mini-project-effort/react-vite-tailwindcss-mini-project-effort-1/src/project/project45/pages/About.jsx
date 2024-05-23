import React, { useEffect,useState } from 'react';
import Banner from '../components/Banner';

const About = ({mainStyle}) => {
  const [disName,setDisName] = useState(['a','b','c','d'])
  const [data1,setData1] = useState([]);
  const [wdata,sWdata] = useState([])
  const [data2,setData2] = useState([]);
  const [data3,setData3] = useState([]);
  const [data4,setData4] = useState([]);
  const [error,setError] = useState(null)
  // // declare state variables
  // const [timerId,setTimerId] = useState([]);
  // const [timeLeft,setTimeLeft] = useState(10); // set initial time in seconds 

  // // define the function to start the timer
  // const startTimer = () => {
  //   const id = setTimeout(() => {
  //     setTimeLeft((prevTime) => prevTime - 1);
  //   },1000)
  //   setTimerId(id);
  // };

  // // use useEffect to start the timer on component mount 
  // useEffect(() => {
  //   startTimer();

  //   // clean up the timer on component unmount - death 
  //   return () => {
  //     if(timerId){
  //       clearTimeout(timerId)
  //     }
  //   }
  // },[timerId])

  
  const apiEndpoint1 = import.meta.env.VITE_API_ENDPOINT1
  const apiEndpoint2 = import.meta.env.VITE_API_ENDPOINT2
  const apiEndpoint3 = import.meta.env.VITE_API_ENDPOINT3
  const apiEndpoint4 = import.meta.env.VITE_API_ENDPOINT4
  const apiEndpoint5 = import.meta.env.VITE_API_ENDPOINTWEATHER

  useEffect(() => {

    // FETCH DATA 1
    const fetchData1 = async () => {
      try{
        const response = await fetch(`${apiEndpoint1}`)
        if(!response.ok){
          throw new Error(`Http status: ${response.status}`)
        }
        const val = await response.json()
        setData1(val)
      }
      catch(error){
        setError(`${error}`)
      }
    }
    
    // FETCH DATA 3
    const fetchData3 = async () => {
      try{
        const response = await fetch(`${apiEndpoint3}`)
        if(response.status < 0 || response.status >= 300){
          throw new Error(`Http status: ${response.status}`)
        }
        const val = await response.json()
        setData3(val)
      }
      catch(error){
        console.error(`Error`,error)
      }
    }
    // FETCH DATA 4
    const fetchData4 = async () => {
      try{
        const response = await fetch(`${apiEndpoint4}`)
        if(response.status < 0 || response.status >= 300){
          throw new Error(`Http status: ${response.status}`)
        }
        const val = await response.json()
        setData4(val)
      }
      catch(error){
        console.error(`Error`,error)
      }
    }

    fetchData1()
    fetchData3()
    fetchData4()
  },[])
 

  const btnAdd = () => {
    setDisName((p) => [...p,"individualName"])
  }

  useEffect(() => {
    
    const weatherData = async () => {
      try {
        const response = await fetch(
          `${apiEndpoint2}`
        );

        if (!response.ok) {
          throw new Error(`HTTP Error! Status ${response.status}`)
        }

        const data = await response.json();
        sWdata(data);
      } catch (error) {
        setError(error.message);
      }
    };
    // FETCH DATA 2
    const fetchData2 = async () => {
      try{
        const response = await fetch(`${apiEndpoint2}`);
        if(!response.ok){
          throw new Error(`Http Error! Status ${response.status}`)
        }
        const val = await response.json()
        setData2(val)
      }
      catch(error){
        setError(error.message)
      }
    }
  weatherData()
  fetchData2()
  },[])



  return (
    <div className={`${mainStyle} mainContent`}>
        <Banner title="About" desc="Lorem Ipsum"/>
        <h1>data - {apiEndpoint5}</h1>
    {error ? (
        <p>Error: {error}</p>
      ) : wdata ? (
        <div>
          <h2>{wdata?.location?.name}</h2>
          <p>Temperature: {wdata?.current?.temp_c}°C</p>
          <p>Condition: {wdata?.current?.condition.text}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <hr/>
        <h2>{apiEndpoint1}</h2>
        <h2>{apiEndpoint2}</h2>
        <h2>{apiEndpoint3}</h2>
        <h2>{apiEndpoint4}</h2>
        {/* <p>Time Left: {timeLeft} seconds</p> */}
        {disName.map((val,index) => {
          return(
            <div key={index}>{val} 
            </div>
          )
        })}
        <button onClick={btnAdd}>Add</button>
        <div className='cardBlock bg-black text-white'>
        <h2 className='font-bold text-[30px]'>Api endpoint 2</h2>
{error ? (
        <p>Error: {error}</p>
      ) : data2 ? (
        <div>
          {data2.map((val,index) => {
  return(
    <div key={index}>{val.title}</div>
  )
})}
        </div>
      ) : (
        <p>Loading...</p>
      )}
<hr/>
{/* {data2 ? (
          // Render your component with the fetched data
          <div>Data2: {data2 && data2.map((val,index) => {
            const {title} = val
          return(
            <div key={index}>{title}</div>
          )
        })}</div>
        ) : (
          // Render loading or error message
          <div>{error ? `Error: ${error}` : 'Loading...'}</div>
        )}
<hr/>
{data3 ? (
          // Render your component with the fetched data
          <div>Data3: {data3 && data3.map((val,index) => {
            const {email} = val
          return(
            <div key={index}>{email}</div>
          )
        })}</div>
        ) : (
          // Render loading or error message
          <div>{error ? `Error: ${error}` : 'Loading...'}</div>
        )}
<hr/>
{data4 ? (
          // Render your component with the fetched data
          <div>Data4: {data4 && data4.map((val,index) => {
            const {username} = val
          return(
            <div key={index}>{username}</div>
          )
        })}</div>
        ) : (
          // Render loading or error message
          <div>{error ? `Error: ${error}` : 'Loading...'}</div>
        )} */}
        
        </div>
    </div>
  )
}

export default About;
