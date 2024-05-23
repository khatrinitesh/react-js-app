import React from 'react';
import {NaturalYoga} from './data';
import SectionTitle from './sectiontitle';

export default function SectionService() {
  return (
    <>
     <div className="inside-container service-section">
        <SectionTitle headTitle="Your Natural of Yoga" para="Yoga is a mind and body practice with origins in ancient Indian philosophy"/>
        <div className="row sections-detail">
        {NaturalYoga.map((item,i) => {
            const {icon,title,desc}= item
            return(
                <div key={i} className="col-lg-4">
                    <img src={icon}/>
                    <a href="#"><h3 className="service-title">{title}</h3></a>
                    <p className="service-desc">{desc}</p>
                </div>
            )
        })}
            </div> 
        </div>
    </>
  )
}
