import React from "react";

const MainSlider = () => {
  return (
    <>
      <div id="mainSlider" className="nivoSlider slider-image">
        <img
          src="img/slider/slider1.webp"
          alt="main slider"
          title="#htmlcaption1"
          style={{ display: "none", width: 1903 }}
        />
        <img
          src="img/slider/slider2.webp"
          alt="main slider"
          title="#htmlcaption2"
          style={{ width: 1903, visibility: "hidden" }}
        />
        <img
          className="nivo-main-image"
          src="img/slider/slider2.webp"
          style={{ width: 1903, height: "auto" }}
        />
        <div className="nivo-caption" style={{ display: "block" }}>
          <div className="container">
            <div className="slide1-text">
              <div className="middle-text slide-def">
                <div
                  className="cap-dec wow fadeInUp  animated"
                  data-wow-duration=".9s"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: "visible",
                    animationDuration: "0.9s",
                    animationDelay: "0.8s",
                    animationName: "fadeInUp",
                  }}
                >
                  <p>All Over The worlds</p>
                </div>
                <div
                  className="cap-title wow fadeInUp  animated"
                  data-wow-duration=".9s"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: "visible",
                    animationDuration: "0.9s",
                    animationDelay: "0.8s",
                    animationName: "fadeInUp",
                  }}
                >
                  <h1>Biggest Designers Meet Up</h1>
                </div>
                <div
                  className="date-address wow fadeInUp  animated"
                  data-wow-duration=".9s"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: "visible",
                    animationDuration: "0.9s",
                    animationDelay: "0.8s",
                    animationName: "fadeInUp",
                  }}
                >
                  <div className="event-date">
                    {" "}
                    <i className="zmdi zmdi-calendar-note" />
                    Sep 13, 2021{" "}
                  </div>
                  <div className="event-location">
                    {" "}
                    <i className="zmdi zmdi-pin" />
                    1080 Layman Court, New York
                  </div>
                </div>
                <div
                  className="slider-btn wow fadeInDown  animated"
                  data-wow-duration=".9s"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: "visible",
                    animationDuration: "0.9s",
                    animationDelay: "0.8s",
                    animationName: "fadeInDown",
                  }}
                >
                  {" "}
                  <a className="btn-def" href="#">
                    Buy Tickets
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSlider;
