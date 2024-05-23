import React from "react";
import ProjectsData from "./ProjectsData";

const Projects = () => {
  return (
    <div className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24 bg-coverpattern">
      <div className="container">
        <ProjectsData/>
      </div>
    </div>
  );
};

export default Projects;
