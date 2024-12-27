import React from "react";

const Banner = ({ title, description, bannerStyle }) => {
  return (
    <div className={`${bannerStyle} bannerContent`}>
      <div className="container mx-auto">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Banner;
