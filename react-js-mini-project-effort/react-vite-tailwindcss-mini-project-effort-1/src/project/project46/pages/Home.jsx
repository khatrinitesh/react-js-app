import React, { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  // const [item, setItem] = useState([]);
  // const [itemCat,setItemCat] = useState([])
  // const [itemEntries,setItemEntries] = useState([])
  // const [itemCoin,setItemCoin] = useState([]);
  // const [itemActivity,setItemActivity] = useState([])
  // const [itemNational,setItemNational] = useState([])
  // const [itemPopulation,setItemPopulation] = useState([])
  // const [itemJoke,setItemJoke] = useState([]);
  const [itemGermany,setItemGermany] = useState([]);

  const [itemFootballPrediction,setItemFootballPrediction] = useState([]);
  const [error,setError] = useState(null)
  const [loading, setLoading] = useState(false)
  

  // const baseurl = 'https://api.publicapis.org/entries';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'b33c73dbf3msh6cf91065eab6867p177a37jsnbeffe3c0615f',
  //     'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  //   }
  // };
  

  // ITEM
// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await fetch(baseurl);
//       const result = await response.json();
//       console.log(result);
//       setItem(result?.entries)
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchData();

//   // CAT
//   const fetchCat = async() => {
//     try{
//       const response = await fetch('https://catfact.ninja/fact')
//       const result = await response.json();
//       setItemCat(result.fact);
//       console.log(result);
//     }
//     catch(error){
//       console.log(error,'error')
//     }
//   }

//   fetchCat();
// }, []);

// ENTRIES
// useEffect(() => {
//   const fetchEntries = async () => {
//     try{
//       const response = await fetch(import.meta.env.VITE_API_ENTRIES)
//       if(!response.ok){
//         throw new Error('sorry something went wrong')
//       }
//       const data = await response.json()
//       setItemEntries(data.entries);
//     }
//     catch(error){
//       console.log('Error',error)
//     }
//   }
//   fetchEntries()
// },[])

// COIN DESK
// useEffect(() => {

//   const fetchCoin = async () => {
//     try{
//       const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//       if(!response.ok){
//         throw new Error(`HTTP status error: ${response.status}`)
//       }
//       const result = await response.json()
//       setItemCoin(result);
//       console.log(result);
//     }
//     catch(error){
//       console.log('Error',error)
//       setError(`Error,${error}`);
//     }
//   }
//   fetchCoin()
// },[]);

// // destructure the required data directly in the render
// const { bpi: { USD: { code } } } = itemCoin;


// useEffect(() => {

//   const fetchActivity = async () => {
//     try{
//       const response = await fetch(import.meta.env.VITE_API_ACTIVITY)
//       if(!response.ok){
//         throw new Error('sorry something went wrong')
//       }
//       const data = await response.json()
//       setItemActivity(data.activity)
//       console.log(data.activity)
//     }
//   catch(error){
//     setError(`Error`,error)
//   }
// }

//   fetchActivity()
// },[])

// NATIONAL
// useEffect(() => {
//   const fetchNational = async () => {
//     try {
//       const response = await fetch(import.meta.env.VITE_API_NATIONAL);

//       if (!response.ok) {
//         throw new Error('Resource not found.');
//       }

//       const result = await response.json();
//       setItemNational(result.country);
//       console.log(result.country);
//     } catch (error) {
//       setError(`Resource not found.`);
//     }
//   };

//   fetchNational();
// }, []);

// POPULATION
// useEffect(() => {
//   const fetchPopulation = async () => {
//     try{
//       const response = await fetch(import.meta.env.VITE_API_POPUPLATION);
//       const result = await response.json()
//       setItemPopulation(result.data);
//       console.log(result)
//     }
//     catch(error){
//       setError(`something went wrong`)
//     }
//   }
//   fetchPopulation();
// },[])

// JOKE 
// useEffect(() => {
//   const fetchJoke = async () => {
//     try{
//       const response = await fetch(import.meta.env.VITE_API_JOKE)
//       const result = await response.json();
//       setItemJoke(result)
//       console.log(result)
//     }
//     catch(error){
//       setError('something went wrongadd')
//     }
//   }
//   fetchJoke()
// },[])

// MLK GERMANY 

const apiUrl = import.meta.env.VITE_LYRICS_ENDPOINT
const username = import.meta.env.VITE_USERNAME
const password = import.meta.env.VITE_PASSWORD
const fetchMilka =  async (body) => {
  try {
    setLoading(true)
    const response = await axios.post(
      apiUrl,
      {
        variables: body,
      },
      {
        auth: {
          username: username,
          password: password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    console.log(response.data.choices[0].message.content);
    setItemGermany(response.data.choices[0].message.content);
    return response.data
  } 
  catch (error) {
    throw error
  }
  finally{
    setLoading(false)
  }
}
const body = {
  "occasion": "thank you",
  "receiver_name": "Minakshi",
  "d1": "Wife",
  "gender": "She/Her",
  "q1": "She is not special",
  "q2": "alone",
  "q3": "butterflies",
  "q4": "cooking",
  "q5": "me",
  "q6": "can not disclose that is private "
}

// const btnDel =(index) => {
//   const updated = [...itemPopulation];
//   updated.splice(index,1)
//   setItemPopulation(updated)
// }

  return (
    <>
     <h2 className='font-bold text-[40px] text-[red]'>Home</h2> 
     <button onClick={() => fetchMilka(body)}>button</button>
     <p>{loading ? 'loading...' :itemGermany}</p>
     {/* {item && item.map((val,index) => {      const {Description,Category,API,Link} = val
      return(
        <>
          <div key={index}>
            <h1>{Description}</h1>
            <p>{Category}</p>
            <p>{API}</p>
            <a href={`${Link}`}><strong>{Link}</strong></a>
          </div>
          </>
        )
      })}
     <hr/>
     {itemCat}
     <hr/> */}
     {/* {itemEntries && itemEntries.map((val,index) => {
      const {API,Description, Category} = val
      return(
        <div key={index}>
          <h3 className='text-[orange]'>{API}</h3>
          <h3 className='text-[blue]'>{Description}</h3>
          <h3 className='text-[red]'>{Category}</h3>
        </div>
      )
     })} */}
     {/* {error ? (<>
      {itemCoin.map((val,index) => {
      return(
        <div key={index}>
          <h3>{val}</h3>
        </div>
      )
     })}</>) : (<p>NO erro...</p>)}
     */}
     {/* {Object.entries(itemCoin.bpi).map(([currencyCode, currencyData], index) => (
        <div key={index}>
          <h3>{currencyData.code}</h3>
        </div>
      ))} */}

      {/* {error ? (<p>{error}</p>) : (<>{itemNational.map((val,index) => {
        const {country_id,probability} = val
        return(
          <div key={index}>
            <h3>{country_id} - {probability}</h3>
            <button onClick={() => btnDel(index)}>Delet</button>
          </div>
        )
      })}</>) 
    } */}

{/* {error ? (<p>{error}</p>) : (<>{itemPopulation.map((val,index) => {
        const {Population,Nation} = val
        return(
          <div key={index}>
            <h3>{Population} - {Nation}</h3>
            <button onClick={() => btnDel(index)}>Delet</button>
          </div>
        )
      })}</>) 
    } */}

{/* {error ? (<p>{error}</p>) : (<>{itemJoke && <><h3>{itemJoke.setup}</h3><h3>{itemJoke.punchline}</h3></>}</>) 
    } */}
    
    </>
  )
}

export default Home
