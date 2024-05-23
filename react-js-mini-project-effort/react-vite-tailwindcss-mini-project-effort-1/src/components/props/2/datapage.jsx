import React from 'react'

export default function DataPage({data}) {
    
  return (
    <ul style={{backgroundColor:'powderblue'}}>
     {data.map((value,index) => {
        return(
            <li key={index}>
              <h3 style={{color:value.color}}>{value.skill}</h3>
              <h4>{value.level}</h4>
              <h5>{value.color}</h5>
            <hr/>
              <p>{value.color} - {value.skill} - {value.level}</p>
            </li>
        )
     })}
    </ul>
  )
}
