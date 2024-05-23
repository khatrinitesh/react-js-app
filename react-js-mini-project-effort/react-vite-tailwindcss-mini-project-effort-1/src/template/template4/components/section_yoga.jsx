import React from 'react';
import SectionTitle  from './sectiontitle';
import {YogaBlock} from './data';

export default function SectionYoga() {
  return (
    <>
    <div class="yogaPlace-section">
        <SectionTitle headTitle="Our Yoga Classes" para="At solmen li esser necessi uniform grammatica, pronunciation"/>
        <div class="inside-container ">
          <div class="row yogaPlace-col">
            {YogaBlock.map((val,i) => {
                const {thumb,subtitle,desc} = val;
                return(
                        <div class="col-lg-3" key={i}>
                            <div class="yogaPlace-img">
                                <img src={thumb} className="yogaPlace-in-img"/>
                            </div>
                            <a href="#"><h3 class="yogaPlace-title">{subtitle}</h3></a>
                            <p class="yogaPlace-desc">{desc}</p>
                        </div>
                )
            })}
            </div>
        </div>
    </div>
    </>
  )
}
