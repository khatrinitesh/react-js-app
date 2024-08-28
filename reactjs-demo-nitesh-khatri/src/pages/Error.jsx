import React from "react";
import BtnPrimary from "../components/BtnPrimary";
import { useNavigate } from "react-router-dom";

const Error = () => {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/")
    }
  return (
    <div className="content h-screen text-center gap-4 flex flex-col items-center justify-center bg-sky-300">
      <div className="container mx-auto">
        <h3 className="font-bold text-[24px]">404 page not found</h3>
        <BtnPrimary onClick={handleBack} label="Return homepage"/>
      </div>
    </div>
  );
};

export default Error;
