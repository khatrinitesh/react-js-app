import React,{useContext} from 'react';
import {SnakeContext} from './snake';

export default function ContextApi() {
  return (
    <div>
      <Jungle/>
    </div>
  )
}

function Jungle(){
    const snake = {
        name: "Black Mamba",
        fangs: "6.5 mm",
        speed: "12.5 miles per hour",
        color: "#964B00", // dark brown
    }

    const info = {
        name:'nitesh',
        age:34
    }
    return(
        <SnakeContext.Provider value={{snake}}>
            <Header/>
            <Main/>
            <Content/>
        </SnakeContext.Provider>
    )

}

function Header(){
    const { color } = useContext(SnakeContext);
    return(
        <>
            <header style={{backgroundColor:color}}>
                <h1>Snake</h1>
            </header>
        </>
    )
}
function Main(){
    const { name, fangs, speed } = useContext(SnakeContext);
    return(
        <>
         <main>
            <p>
                Name: <span>{name}</span>
            </p>
            <p>
                Venom Fangs: <span>{fangs}</span>
            </p>
            <p>
                Speed: <span>{speed}</span>
            </p>
            </main>
        </>
    )
}
function Content(){
    const {name,age} = useContext(SnakeContext)
    return(
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
        </div>
    )
}