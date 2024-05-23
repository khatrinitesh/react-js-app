import React from "react";

const Banner = ({ bannerStyle, title, desc }) => {
  return (
    <div className={`${bannerStyle} py-[100px]`}>
      <div className="container mx-auto">
        <h3 className={`${title}`}>{title}</h3>
        <p className={`${desc}`}>{desc}</p>
      </div>
    </div>
  );
};

export default Banner;
