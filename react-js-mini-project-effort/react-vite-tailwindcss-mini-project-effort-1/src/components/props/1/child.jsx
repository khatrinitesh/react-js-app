import React from 'react'
import {Styles} from "./styles";

export default function ChildCompo({img,name,desc,price}) {
    const active = true;
  return (
    <div className={active ? 'red' : 'blue'}>
        <img src={img} alt="sneakers" />
        <h4 style={{color:'red',fontWeight:700}}>{name}</h4>
        <p style={{
            color:Styles?.color
        }}>{desc}</p>
        <h4>{price}</h4>
    </div>
  )
}
