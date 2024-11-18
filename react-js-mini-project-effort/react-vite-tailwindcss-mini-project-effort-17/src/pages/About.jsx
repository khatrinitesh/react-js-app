import React from "react";
import Banner from "../layout/Banner";
import GridTileComp from "./GridTileComp";

const About = () => {
  return (
    <div className="content">
      <Banner
        title="About"
        content="Culpa velit fugiat deserunt deserunt sint laborum adipisicing dolore."
      />
      <div className="container mx-auto">
        <GridTileComp />
      </div>
    </div>
  );
};

export default About;
