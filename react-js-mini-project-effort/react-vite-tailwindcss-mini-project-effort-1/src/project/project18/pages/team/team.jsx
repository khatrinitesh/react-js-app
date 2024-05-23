import React from "react"
import Back from "../../components/common/back";
import TeamCard from "./teamcard";
import "./team.css"
import Awrapper from "../about/aboutwrapper";
import "../about/about.css";

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team