import React from 'react'
import { projectsData } from '../constants/constants'

const ProjectsData = () => {
  return (
    <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
    <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
      {projectsData.map((stat, index) => (
        <div key={index} className="flex flex-col items-center justify-center text-center md:flex-row md:text-left mt-6 lg:mt-0">
          <div>
            <img
              src={stat.icon}
              className="mx-auto h-12 w-auto md:h-20"
              alt={`icon ${stat.description}`}
            />
          </div>
          <div className="pt-5 md:pl-5 md:pt-0">
            <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">{stat.value}</h1>
            <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">{stat.description}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ProjectsData