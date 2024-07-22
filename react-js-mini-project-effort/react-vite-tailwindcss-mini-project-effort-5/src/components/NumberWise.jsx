import React from 'react'
import { numberswise } from './../constants/constants';

const NumberWiseComp = () => {
    const calc = numberswise.map(item => item * 2)
  return (
    <div>
        {calc}
    </div>
  )
}

export default NumberWiseComp