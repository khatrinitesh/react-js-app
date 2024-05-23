import React, { useState } from "react";

export default function CustomApp() {
  return (
    <>
        <A/>
    </>
  )
}

function A(){
    const [showB, setShowB] = useState(false);
    const [showC, setShowC] = useState(false);
    const [text, setText] = useState("");


    return(
        <>
         <input type="text" onChange={handleInputChange} />
         {showB && <B text={text} />}
         {showC && <C text={text} />}
        </>
    )
}

function B(props) {
    const { text } = props;
    return (
        <>
        <h1>Component B - {text.toUpperCase()}</h1>;
        </>
    )
}
  
function C(props) {
const { text } = props;
    return(
        <>
        <h1>Component C - {text.toLowerCase()}</h1>
        </>
    )
}