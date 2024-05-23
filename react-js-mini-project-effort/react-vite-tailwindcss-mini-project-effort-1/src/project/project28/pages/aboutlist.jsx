import React from 'react';
import { AboutData } from '../data/data';

export default function AboutList() {
  return (
    <div className='content'>
      <h3>About List</h3>
      {AboutData.map((val,index) => {
        const {name,age}= val;
        return(
          <div key={index}>
            <h3>{name}</h3>
            <p>{age}</p>
          </div>
        )
      })}
    </div>
  )
}
