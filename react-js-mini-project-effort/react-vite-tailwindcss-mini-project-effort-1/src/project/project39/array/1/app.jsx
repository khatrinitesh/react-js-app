import React from 'react'

export default function CustomApp() {
    // Sample array of strings
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  const fruitElements = fruits.map((fruit,index) => (
    <li key={index}>{fruit}</li>
  ))

  const joinedFruitElement = fruits.join(',')
  return (
    <div>
        <h2>List of fruits</h2>
        <ul>{fruitElements}</ul>
        <h2>Joined fruits:</h2>
        <p>{joinedFruitElement}</p>
    </div>
  )
}
