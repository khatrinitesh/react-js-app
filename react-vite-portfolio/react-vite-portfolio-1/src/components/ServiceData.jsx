import React from "react";
import { serviceContent } from "../constants/constants";

const ServiceData = () => {
  return (
    <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
      {serviceContent.map((service, index) => (
        <div
          key={index}
          className="group rounded px-8 py-12 shadow hover:bg-primary"
        >
          <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
            <div className="hidden group-hover:block">
              <img src={service.iconWhite} alt={`${service.name} icon`} />
            </div>
            <div className="block group-hover:hidden">
              <img src={service.iconBlack} alt={`${service.name} icon`} />
            </div>
          </div>
          <div className="text-center">
            <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
              {service.name}
            </h3>
            <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceData;
