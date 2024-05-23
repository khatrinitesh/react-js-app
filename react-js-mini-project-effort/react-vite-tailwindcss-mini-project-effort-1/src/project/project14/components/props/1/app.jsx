import React, { useState } from 'react';
import Click from './click';
import Hover from './hover';
import RenderProps from './renderprops';

export default function PropsCustom() {

 
  return (
    <div>
      <RenderProps render={(increment,count) => <Click increment={increment} count={count}/>}/>
      <RenderProps render={(increment,count) => <Hover increment={increment} count={count}/>}/>
      <hr/>
    </div>
  )
}
