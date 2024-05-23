import React, { useState, useEffect } from "react";
import SmoothScroll from "smooth-scroll";

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";

import { Features } from "./pages/features";
import { About } from "./pages/about";
import { Services } from "./pages/services";
import { Gallery } from "./pages/gallery";
import { Testimonials } from "./pages/testimonials";
import { Team } from "./pages/Team";
import { Contact } from "./pages/contact";

import JsonData from "./data.json";

import './bootstrap.css';
import './custom.css';
import '../../../node_modules/fontawesome-4.7/css/font-awesome.min.css'; 

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const CustomApp = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default CustomApp;