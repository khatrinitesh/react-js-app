import React from "react";

const HeaderMenuArea = () => {
  return (
    <>
      <div id="sticker" className="logo-menu-area header-area-2" style={{}}>
        <div className="container d-none d-md-block">
          <div className="row">
            <div className="col-lg-3 col-md-2">
              <div className="logo" style={{}}>
                <a href="index.html">
                  <img src="img/logo.webp" alt="" style={{}} />
                </a>
              </div>
            </div>
            <div className="col-lg-9 col-md-10" style={{}}>
              <div className="main-menu text-end">
                <nav>
                  <ul id="nav" style={{}}>
                    <li className="current">
                      <a href="#home" style={{}}>
                        Home
                      </a>
                    </li>
                    <li className="">
                      <a href="#about-event">About</a>
                    </li>
                    <li className="">
                      <a href="#happen">Happen</a>
                    </li>
                    <li className="">
                      <a href="#speakers">Speakers</a>
                    </li>
                    <li className="">
                      <a href="#news">News</a>
                    </li>
                    <li style={{}}>
                      <a href="event-schedule.html" style={{}}>
                        Schedule
                      </a>
                    </li>
                    <li className="">
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/* mobile-menu-area start */}
        <div className="mobile-menu-area">
          <div className="container">
            <div className="logo-02">
              <a href="index.html">
                <img src="img/logo-02.webp" alt="" />
              </a>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <nav id="dropdown" style={{ display: "block" }}>
                  <ul>
                    <li>
                      <a href="#home">Home</a>
                    </li>
                    <li>
                      <a href="#about-event">About</a>
                    </li>
                    <li>
                      <a href="#happen">Happen</a>
                    </li>
                    <li>
                      <a href="#speakers">Speakers</a>
                    </li>
                    <li>
                      <a href="#news">News</a>
                    </li>
                    <li>
                      <a href="event-schedule.html">Schedule</a>
                    </li>
                    <li>
                      <a href="#contact">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*mobile menu area end*/}
      </div>
    </>
  );
};

export default HeaderMenuArea;
