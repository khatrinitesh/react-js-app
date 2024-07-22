import React from 'react'
import FruitsWise from './FruitsWise';
import { fruits } from '../constants/constants';

const FruitsWiseComp = () => {

    const  resultFruit = fruits.filter((val) => val !== 'Apple').join(', ')
    const  resultFruitReverse = fruits.filter((val) => val !== 'Apple').join(', ').split('').reverse().join(''); // Join the reversed array back into a string
  return (
    <div>
        <h2>FruitsWise</h2>
        <span style={{color:'darkorange'}} className=''>{resultFruit} </span>
        <br />
        <span style={{color:'blue'}} className=''>{resultFruitReverse}</span>
        </div>
  )
}

export default FruitsWiseComp