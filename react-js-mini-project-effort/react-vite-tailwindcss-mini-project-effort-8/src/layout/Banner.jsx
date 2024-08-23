import React from "react";
import { BannerData } from "../constants/constants";

const Banner = ({ title,description }) => {
 
  return (
    <div className="banner">
      <div className="container mx-auto">
        <h3 className="font-bold text-[24px]">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
