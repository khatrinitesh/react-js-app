import React from 'react'
import ApplicantsItem from './applicantsItem'
import { applicants } from './../constants/constants';

const Applicants = () => {
  return (
    <div>
        <ApplicantsItem applicants={applicants}/>
    </div>
  )
}

export default Applicants