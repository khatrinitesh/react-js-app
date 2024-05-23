import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();

    const btnPrev = () => {
        navigate('/')
    }

    const btnNext = () => {
        navigate('/contact')
    }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p>This is the about page content.</p>
      <div className="btnBlock flex items-center justify-between">
        <button onClick={btnPrev} className="bg-blue-600 text-white rounded p-[5px]">Go to home page</button>
        <button onClick={btnNext} className="bg-blue-600 text-white rounded p-[5px]">Go to contact page</button>
      </div>
    </div>
  );
};

export default About;
