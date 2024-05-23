import React, { createContext }  from 'react';
import B from './b';

let Color = createContext();
let Size = createContext();
let Shape = createContext();

function A() {
  return (
    <div>
      <Color.Provider value="red">
        <Size.Provider value="circle">
            <Shape.Provider value="30">
                <B/>    
            </Shape.Provider>
        </Size.Provider>
      </Color.Provider>
    </div>
  )
}

export default A;
