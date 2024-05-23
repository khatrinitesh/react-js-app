import React from 'react';
import { ColOne,ColTwo } from './data';
import SectionTitle from './sectiontitle';

export default function SectionAdvantage() {
  return (
    <>
        <div className="advantages-section">
            <div className='container'>
            <SectionTitle headTitle="Advantages of Yoga" para="At solmen li esser necessi uniform grammatica, pronunciation"/>
                        <div class="row advantages-detail">
                            <div class="col-lg-5">
                                {ColOne.map((item,i) => {
                                    const {icon,subtitle,subdesc} = item;
                                    return(
                                        <div key={i} className='row'>
                                            <div className='col-12'>
                                                <div className='advantages-detail-soul'>
                                                    <div className="advantages-detail-img">
                                                        <img src={icon}/>
                                                    </div>
                                                    <a href="#"><h3 class="advantages-detail-title">{subtitle}</h3></a>
                                                    <p class="advantages-detail-desc">{subdesc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div class="col-lg-2"></div>
                            <div class="col-lg-5">
                                {ColTwo.map((item,i) => {
                                    const {icon,subtitle,subdesc} = item;
                                    return(
                                        <div key={i} className='row'>
                                            <div className='col-12'>
                                                <div className='advantages-detail-energy'>
                                                    <div className="advantages-detail-img">
                                                        <img src={icon}/>
                                                    </div>
                                                    <a href="#"><h3 class="advantages-detail-title">{subtitle}</h3></a>
                                                    <p class="advantages-detail-desc">{subdesc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
 
    </>
  )
}
