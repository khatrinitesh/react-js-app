import React from "react";

const Banner = ({ bannerStyle, bannerTitle, bannerDesc }) => {
  return (
    <div className={`${bannerStyle} bannerContent py-[50px] bg-yellow-300`}>
      <div className="container mx-auto">
        <h3 className="text-[32px] font-bold">{bannerTitle}</h3>
        <p>{bannerDesc}</p>
      </div>
    </div>
  );
};

export default Banner;
