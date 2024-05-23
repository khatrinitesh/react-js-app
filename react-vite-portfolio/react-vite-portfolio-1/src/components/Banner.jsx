import React from "react";
import BlogAuthor from "../assets/img/blog-author.jpg";
import { Link } from "react-router-dom";
import { socialMediaIcons } from "../constants/constants";

const Banner = () => {
  return (
    <>
      <div className="relative bg-cover bg-center bg-no-repeat py-8 bgBanner bg-hero">
        <div className="opacity-[.9] absolute inset-0 z-20 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to bg-cover bg-center bg-no-repeat"></div>

        <div className="container mx-auto relative z-30 pt-20 pb-12 sm:pt-56 sm:pb-48 lg:pt-64 lg:pb-48">
          <div className="flex flex-col items-center justify-center lg:flex-row">
            <div className="rounded-full border-8 border-primary shadow-xl">
              <img
                src={BlogAuthor}
                className="h-48 rounded-full sm:h-56"
                alt="author"
              />
            </div>
            <div className="pt-8 sm:pt-10 lg:pl-8 lg:pt-0">
              <h1 className="text-center font-raleway text-4xl text-white sm:text-left sm:text-5xl md:text-6xl">
                Hello I'm Christy Smith!
              </h1>
              <div className="flex flex-col justify-center pt-3 sm:flex-row sm:pt-5 lg:justify-start">
                <div className="flex items-center justify-center pl-0 sm:justify-start md:pl-1">
                  <p className="font-opensans text-lg uppercase text-white">
                    Let's connect
                  </p>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  {socialMediaIcons.map((item, index) => (
                    <Link
                      key={index}
                      target="_blank"
                      to={item.link}
                      className={`font-opensans text-white ${index > 0 ? "pl-4" : "text-[yellow]"}`}
                    >
                      <item.icon />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
