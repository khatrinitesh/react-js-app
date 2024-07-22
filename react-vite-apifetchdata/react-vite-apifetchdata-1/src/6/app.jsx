import React,{useState,useEffect} from 'react';


const CustomApp = () => {

    const [listdata,setListdata] = useState([]);
    const baseurl  = 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'

    const fetchData = async () => {
        try {
            const response = await fetch(baseurl)
            const result = await response.json()
            console.log(result)
            if(result && result.meals){
                   setListdata(result.meals) 
            }
            else{
                console.log('No data found')
            }
            
        } catch (error) {
            console.log('Fetching data failed:',error)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);
  return (
    <div>
        {listdata.length > 0 ? (
            <ul>
                {listdata.map((meal, index) => (
                    <li key={index}>
                        <h2>{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <p>{meal.strCategory}</p>
                        <p>{meal.strArea}</p>
                        <p>{meal.strIngredient1}</p>
                        <p>{meal.strIngredient2}</p>
                        <p>{meal.strIngredient3}</p>
                        <p>{meal.strIngredient4}</p>
                        <p>{meal.strIngredient5}</p>
                        <p>{meal.strIngredient6}</p>
                        <p>{meal.strIngredient7}</p>
                        <p>{meal.strIngredient8}</p>
                        <p>{meal.strIngredient9}</p>
                        <p>{meal.strIngredient10}</p>
                        <p>{meal.strIngredient11}</p>
                        <p>{meal.strIngredient12}</p>
                        <p>{meal.strIngredient13}</p>
                        <p>{meal.strIngredient14}</p>
                        <p>{meal.strIngredient15}</p>
                    </li>
                ))}
            </ul>
        ) : (
            <p>No data found</p>
        )}
    </div>
  )
}

export default CustomApp
