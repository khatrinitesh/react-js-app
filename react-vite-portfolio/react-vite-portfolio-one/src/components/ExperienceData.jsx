import React from 'react'
import { jobHistoryData } from '../constants/constants'
import { FaCaretRight } from "react-icons/fa";


const ExperienceData = () => {
  return (
    <>
    <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
      {jobHistoryData.map((job, index) => (
        <div key={index}>
          <span className="left-[36.80%] absolute inset-y-0 ml-10 hidden w-0.5 bg-darkgrey md:block"></span>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img
                    src={job.companyLogo}
                    className="h-auto w-32"
                    alt="company logo"
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute left-3/5 inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-lightgrey"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute  top-1 hidden h-4 w-4  z-[9] rounded-full border-2 border-lightgrey bg-white md:block"></span>
                <div className="mt-1 flex">
                <FaCaretRight  className=" text-primary hidden md:block" />
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-opensans text-darkgrey">
                      {job.date}
                    </span>
                    <span className="block pt-2 font-ralewayM text-xl font-bold uppercase text-primary">
                      {job.position}
                    </span>
                    <div className="pt-2">
                      <span className="block font-opensans text-black">
                        {job.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default ExperienceData