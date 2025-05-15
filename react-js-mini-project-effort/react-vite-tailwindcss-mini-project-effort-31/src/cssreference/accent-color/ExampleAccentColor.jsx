import React, { useState } from "react";
import styled from "styled-components";

const ExampleAccentColor = () => {
  return (
    <>
      <ExampleFour />
    </>
  );
};

export default ExampleAccentColor;

const StyledCheckbox = styled.input`
  accent-color: ${(props) => props.color || "#4caf50"};
`;


function ExampleFour(){
    return(
        <>
            <StyledCheckbox type="checkbox" color="#ff5722"/>
        </>
    )
}

function ExampleThree(){
    return(
        <>
         <div className="space-y-4">
      <label className="block">
        <input type="checkbox" className="accent-blue-500" />
        Blue Checkbox
      </label>

      <label className="block">
        <input type="checkbox" className="accent-pink-600" />
        Pink Checkbox
      </label>
    </div>
        </>
    )
}

function ExampleTwo() {
  const [accent, setAccent] = useState("#3a86ff");
  return (
    <>
      <div>
        <select value={accent} onChange={(e) => setAccent(e.target.value)}>
          <option value="#3a86ff">Blue</option>
          <option value="#ff006e">Pink</option>
          <option value="#8338ec">Purple</option>
        </select>

        <div className="mt-4">
          <label>
            <input type="checkbox" style={{ accentColor: accent }} />
            Accent Checkbox
          </label>
        </div>
      </div>
    </>
  );
}

function ExampleOne() {
  return (
    <>
      <div>
        <label>
          <input type="checkbox" style={{ accentColor: "#e63946" }} />
          Red Accent
        </label>
      </div>
    </>
  );
}
