import React from "react";
import { socialMediaIcons } from "../constants/constants";
import { Link } from "react-router-dom";
import SkillBars from "./SkillBars";

const About = () => {
  return (
    <div className="bg-grey-50">
      <div
        className="container mx-auto flex flex-col items-center py-16 md:py-20 lg:flex-row"
       
      >
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-raleway text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-ralewayM text-xl  text-black sm:text-2xl lg:text-3xl">
            I'm Christy Smith, a Web Designer &amp; Photographer
          </h4>
          <p className="pt-6 font-opensans text-grey text-fs16">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-opensanssb  uppercase text-grey text-fs18">
                Connect with me
              </p>
              <div className="hidden sm:block">
                <i className="bx bx-chevron-right text-2xl text-primary" />
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
              {socialMediaIcons.map((item, index) => (
                <Link
                  key={index}
                  target="_blank"
                  to={item.link}
                  className={`font-opensans text-primary ${
                    index > 0 ? "pl-4" : "text-[yellow]"
                  }`}
                >
                  <item.icon />
                </Link>
              ))}
            </div>
          </div>
        </div>
        <SkillBars/>
      </div>
    </div>
  );
};

export default About;
