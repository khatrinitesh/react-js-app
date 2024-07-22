import React from 'react'


const ApplicantsItem = ({applicants}) => {
  return (
    <div>
        {applicants.map(function(val) {
            return(
                <div className='shadow mb-2' key={val.id}>
                    Applicant name: {val.name}
                    <br />
                    {val.work}
                    <br />
                    {val.blogs}
                    <br />
                    {val.hackathons}
                    <br />
                    {val.location}
                    <br />
                    {val.website}
                </div>
            )
        })}
    </div>
  )
}

export default ApplicantsItem