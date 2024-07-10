import React from "react";
import PortfolioData from "./PortfolioData";

const Portfolio = () => {
  return (
    <div className="container mx-auto py-16 md:py-20" id="portfolio">
      <h2 className="text-center font-raleway text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my Portfolio
      </h2>
      <h3 className="pt-6 text-center font-ralewayM text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I have done with the past
      </h3>
      <PortfolioData/>
    </div>
  );
};

export default Portfolio;
