import React from "react";
import ServiceData from "./ServiceData";

const Services = () => {
  return (
    <div className="container py-16 md:py-20" id="services">
      <h2 className="text-center font-raleway font-semibold text-4xl  uppercase text-primary sm:text-5xl lg:text-6xl">
        Here's what I'm good at
      </h2>
      <h3 className="pt-6 text-center font-ralewayM text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        These are the services Ioffer
      </h3>
      <ServiceData/>
    </div>
  );
};

export default Services;
