import React, { useState } from 'react'

const CurlyBracesComp = () => {
    // const [toggle,setToggle] = useState(false);
    // const handleClick=() => {
    //     setToggle(!toggle);
    // }
    
  return (
    <>
      <Counter/>
    </>
  )
}

export default CurlyBracesComp

// 

// handling events
const Counter = () => {
    const [count,setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1)
    }
    return(
        <>
        {count}
        <button onClick={handleCount}>Click</button>
        </>
    )
}

// functions in jsx 
const getGreeting = (name) => `Hello, ${name}!`;

const GreetingComp = ({ name }) => {
  return (
    <div>
      {getGreeting(name)}
    </div>
  );
};


// lists and iteration 
const ItemList = ({items}) => {
    return(
        <>
         <ul>
            {items.map((val,index) => (
                <li key={index}>
                    {val}
                </li>
            ))}
         </ul>
        </>
    )
}

// conditional rendering = logical && operator
const ShowMessage = ({show}) => {
    return(
        <>
         {show && <p>this message is shown because `show` is true.</p>}
        </>
    )
}

// conditional rendering = ternary operator
const UserStatus =({isLoggedIn,onClick}) => {
   
    return(
        <>
        <button onClick={onClick}>{isLoggedIn ? 'logout' : 'login'}</button>
        <br/>
         {isLoggedIn ? (<>welcome back</>) : (<>please log in</>)}
        </>
    )
}

// performing calculations
const MathExample = () => {
    const a =5;
    const b =10;
    return(
        <>
        The sum of {a} + {b} is {a+b}
        </>
    )
}

// using variables 
const DisplayNumber = () => {
    const number = 42;
    return(
        <>
         The number is: {number}
        </>
    )
}


// embeeding expresions
const Greeting = ({ name }) => {
    return (
      <div>
        Hello, {name}!
      </div>
    );
  };
  
