import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom.css";

const CustomApp = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 3,
    focusOnSelect: false,
    dots: false,
  };

  return (
    <>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <Slider {...settings}>
          <div>
            <h3>item 1</h3>
          </div>
          <div>
            <h3>item 2</h3>
          </div>
          <div>
            <h3>item 3</h3>
          </div>
          <div>
            <h3>item 4</h3>
          </div>
          <div>
            <h3>item 5</h3>
          </div>
          <div>
            <h3>item 6</h3>
          </div>
          <div>
            <h3>item 1</h3>
          </div>
          <div>
            <h3>item 2</h3>
          </div>
          <div>
            <h3>item 3</h3>
          </div>
          <div>
            <h3>item 4</h3>
          </div>
          <div>
            <h3>item 5</h3>
          </div>
          <div>
            <h3>item 6</h3>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default CustomApp;
