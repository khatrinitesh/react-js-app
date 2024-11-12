import React from "react";
import Banner from "../layout/Banner";
import CircleDotsComp from "./CircleDotsComp";

const About = () => {
  return (
    <div className="content">
      <Banner
        title="About"
        content="Culpa velit fugiat deserunt deserunt sint laborum adipisicing dolore."
      />
      <div className="container mx-auto">
        <CircleDotsComp />
      </div>
    </div>
  );
};

export default About;
