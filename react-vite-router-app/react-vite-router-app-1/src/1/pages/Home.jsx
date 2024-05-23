import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const btnNext = () => {
        navigate('/about')
    }
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
        <p>This is the home page content.</p>
        <button onClick={btnNext} className="bg-blue-600 text-white rounded p-[5px]">Go to about page</button>
      </div>
    </>
  );
};

export default Home;
