import React from 'react';
import { Trainers } from './data';
import SectionTitle from './sectiontitle';

export default function SectionExpertTrainers() {
  return (
    <div className='trainer-section'>
      <SectionTitle headTitle="Expert Trainers" para="At solmen li esser necessi uniform grammatica, pronunciation"/>
      <div class="inside-container ">
          <div class="row trainer-col">
            {Trainers.map((val,i) => {
                const {thumb,subtitle,desc} = val;
                return(
                        <div class="col-lg-3" key={i}>
                            <div class="trainer-img">
                                <img src={thumb} className="trainer-in-img"/>
                            </div>
                            <a href="#"><h3 class="yogaPlace-title">{subtitle}</h3></a>
                            <p class="yogaPlace-desc">{desc}</p>
                        </div>
                )
            })}
            </div>
        </div>
    </div>
  )
}
