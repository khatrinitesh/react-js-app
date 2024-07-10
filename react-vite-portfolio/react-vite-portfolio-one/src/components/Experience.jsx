import React from "react";
import ExperienceData from "./ExperienceData";

const Experience = () => {
  return (
    <div className="container py-16 md:py-20" id="work">
      <h2 className="text-center font-ralewayM text-4xl  uppercase text-primary sm:text-5xl lg:text-6xl">
        My work experience
      </h2>
      <h3 className="pt-6 text-center font-ralewayM text-xl  text-black sm:text-2xl lg:text-3xl">
        Here's what I did before freelancing
      </h3>
      <ExperienceData/>
    </div>
  );
};

export default Experience;
