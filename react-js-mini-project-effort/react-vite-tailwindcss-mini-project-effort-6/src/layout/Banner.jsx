import React from "react";

const Banner = ({ title, desc }) => {
  return (
    <div className="bannercontent py-10 bg-slate-300">
      <div className="container mx-auto">
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

export default Banner;
