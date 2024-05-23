import React from 'react';
import { ServiceData } from './data';

export default function ServiceSection() {
  return (
    <>
        <section className="service_section layout_padding">
          <div className="container">
            {ServiceData.map((item, index) => (
              <div key={index}>
                <div className="heading_container">
                  <h2>{item.title} <img src={item.icon} alt="" /></h2>
              </div>
                <div className="service_container">
                {item.groupdata.map((c, i) => (
                  <div className="box">
                    <div className="img-box">
                      <img src={c.iconthumb} className="img1" alt="" />
                    </div>
                    <div className="detail-box">
                      <h5>Equipment installation</h5>
                      <p>There are many variations of passages of Lorem Ipsum available,</p>
                    </div>
                  </div>
                  ))}
                </div>
                <div className="btn-box">
                      <a href="">Read More</a>
                    </div>
            </div>
            ))}
        </div>
        
      </section>

    </>
  )
}
