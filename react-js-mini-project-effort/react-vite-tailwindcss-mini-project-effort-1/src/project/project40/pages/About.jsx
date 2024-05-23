import React,{useState} from 'react';
import { useImmer } from "use-immer";

// BELOW COMPONENTS
import Searchbar from '../components/Searchbar';
import data from '../components/data';

export default function About() {
  const [myState,updateMyState] = useImmer({
    name:'nitesh',
    age:34,
    address:{
      city:'mumbai',
      country:'india'
    }
  })

  const updateName = (newName) => {
    updateMyState((draft) => {
      draft.name = newName
    })
  }

  const updateAddress = (newCity,newCountry) => {
    updateMyState((draft) => {
      draft.address.city = newCity
      draft.address.country = newCountry
    })
  }
  return (
    <div>
      About 1
      <hr/>
      Fruits
        <Searchbar data={data}/>

       <p>Name: {myState.name}</p>
       <p>Name: {myState.age}</p>
       <p>Name: {myState.address.city}</p>
       <p>Name: {myState.address.country}</p>

       <button onClick={() => updateName('sameet')}>Update name</button>
       <button onClick={() => updateAddress('san franciso','USA')}>Update address</button>
    </div>
  )
}
