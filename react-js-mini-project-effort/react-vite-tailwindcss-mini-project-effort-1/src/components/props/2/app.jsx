import React from 'react';
import DataPage from './datapage';

export default function CustomApp() {

    const students = ['a','b','c']
    const players = ['d','e','f']
    const youth = ['g','h','i']

    const skills = [
      {
        skill:'eating',
        level:'advanced',
        color:'red'
      },
      {
        skill:'sleeping',
        level:'advanced',
        color:'orange'
      },
      {
        skill:'walking',
        level:'advanced',
        color:'purple'
      },
    ]
  return (
    <>
     {/* <DataPage data={students}/>
     <DataPage data={players}/>
     <DataPage data={youth}/> */}
     <DataPage data={skills}/>
    </>
  )
}
