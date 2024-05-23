import React from "react"
import AboutCard from "../../pages/about/aboutcard";
import Hblog from "./hblog"
import HAbout from "./habout"
import Hero from "../../pages/home/hero/hero";
import Hprice from "./hprice"
import Testimonal from "././testimonial/testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
    </>
  )
}

export default Home