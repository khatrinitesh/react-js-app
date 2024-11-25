import React from "react";
import Banner from "../layout/Banner";
import MenuIconHamburgerComp from "../components/MenuIconHamburgerComp";

const About = () => {
  return (
    <div className="content">
      <Banner
        title="About"
        content="Culpa velit fugiat deserunt deserunt sint laborum adipisicing dolore."
      />
      <div className="container mx-auto">
        <MenuIconHamburgerComp />
      </div>
    </div>
  );
};

export default About;
