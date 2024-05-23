import React from "react"
import Back from "../../components/common/back";
import CoursesCard from "./coursecard";
import OnlineCourses from "./onlinecourses";

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
    </>
  )
}

export default CourseHome