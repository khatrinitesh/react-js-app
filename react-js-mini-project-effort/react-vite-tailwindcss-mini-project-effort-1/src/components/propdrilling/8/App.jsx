import React from "react";

const CustomApp = () => {
  return (
    <>
      <TopLevel />
    </>
  );
};

export default CustomApp;

const TopLevel = () => {
  const dataToPass = "Hello from Top Level Parent";
  return (
    <>
      <ChildLevelOne dataFromParent={dataToPass} />
    </>
  );
};

const ChildLevelOne = ({ dataFromParent }) => {
  return (
    <>
      <h2>Child Level One</h2>
      <p>Data from parent: {dataFromParent}</p>
      <ChildLevelTwo dataFromParent={dataFromParent} />
    </>
  );
};
const ChildLevelTwo = ({ dataFromParent }) => {
  return (
    <>
      <h2>Child Level Two</h2>
      <p>Data from parent: {dataFromParent}</p>
      <ChildLevelThree dataFromParent={dataFromParent} />
    </>
  );
};
const ChildLevelThree = ({ dataFromParent }) => {
  return (
    <div>
      <h4>Child Level Three</h4>
      <p>Data from parent: {dataFromParent}</p>
    </div>
  );
};
