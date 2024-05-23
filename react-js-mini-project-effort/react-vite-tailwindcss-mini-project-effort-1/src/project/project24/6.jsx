import React,{useState} from 'react'
import { useEffect } from 'react';

const PRICE_PER_ITEM = 5;

export default function HooksApp() {
    const [qty,setQty] = useState(1);
    const totalPrice = qty * PRICE_PER_ITEM;

    const handleClick = () => {
        setQty(qty + 1)
    }

    // useEffect(() => {
    //     setTotalPrice(qty * PRICE_PER_ITEM)
    // },[qty])
  return (
    <div>
      <button onClick={handleClick}>Add 1 items</button>
      <span>Total Price: {totalPrice}</span>
    </div>
  )
}
