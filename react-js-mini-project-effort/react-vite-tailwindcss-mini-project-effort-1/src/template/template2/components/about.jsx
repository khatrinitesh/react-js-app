import React from 'react';
import { AboutData } from './data';

export default function AboutSection() {
    const {title,desc,icon,thumb1,thumb2} = AboutData;
  return (
    <section className="about_section layout_padding">
        <div className="container">
            <div className="row">
            <div className="col-md-6">
                <div className="detail-box">
                <div className="heading_container">
                    <h2>{title}</h2>
                    <img src={icon} alt="" />
                </div>
                <p>
                    {desc}
                </p>
                <a href="">Read More</a>
                </div>  
            </div>
            <div className="col-md-6">
                <div className="img_container">
                <div className="img-box b1">
                    <img src={thumb1} alt="" />
                </div>
                <div className="img-box b2">
                    <img src={thumb2} alt="" />
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>

  )
}
