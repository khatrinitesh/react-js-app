import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Product = () => {

    const [listdata,setListdata] = useState([]);
    const baseurl  = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'

    const fetchData = async () => {
        try {
            const response = await fetch(baseurl)
            const result = await response.json()
            console.log(result.meals)
            setListdata(result.meals) 
            
        } catch (error) {
            console.log('Fetching data failed:',error)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);
  return (
    <div>
      <ul>
        {listdata.map((val,index) => {
            return(
                <li key={index}>
                    <Link to={`/product/${val.idMeal}`}>View details {val.idMeal}</Link>
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default Product
