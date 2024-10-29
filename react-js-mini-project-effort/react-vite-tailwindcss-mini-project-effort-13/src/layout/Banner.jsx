import React from "react";

const Banner = ({ bannerStyle, title, description }) => {
  return (
    <div className={`${bannerStyle} bannerContent bg-cyan-400 py-[100px]`}>
      <div className="container mx-auto">
        <h3 className="text-[32px]">{title}</h3>
        <p className="text-[15px]">{description}</p>
      </div>
    </div>
  );
};

export default Banner;
