import React, { useState } from "react";

const CustomApp = () => {
  const [sharedData, setSharedData] = useState("adasd");
  return (
    <>
      <ParentComp sharedData={sharedData} setSharedData={setSharedData} />
    </>
  );
};

export default CustomApp;

const ParentComp = ({ sharedData, setSharedData }) => {
  return (
    <>
      <h2 className="font-bold text=[30px]">Parent Component</h2>
      <p>Data from Grandparent: {sharedData}</p>
      <ChildComp sharedData={sharedData} setSharedData={setSharedData} />
    </>
  );
};

const ChildComp = ({ sharedData, setSharedData }) => {
  const handleClick = () => {
    const updatedData = sharedData + "- updated in child component";
    setSharedData(updatedData);
  };

  return (
    <>
      <h3 className="font-bold text=[30px]">Child Component</h3>
      <p>Data from Parent: {sharedData}</p>
      <button onClick={handleClick}>Update Data</button>
    </>
  );
};
