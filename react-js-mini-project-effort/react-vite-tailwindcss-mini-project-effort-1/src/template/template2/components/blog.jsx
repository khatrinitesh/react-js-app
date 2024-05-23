import React from 'react';
import { BlogData } from './data';

export default function BlogSection() {
  return (
    <>
         <section className="blog_section layout_padding">
            <div className="container">
            {BlogData.map((val,index) => {
                    return(
                        <>
                            <div className="heading_container" key={index}>
                                <h2>{val.title}</h2>
                                <img src={val.icon} alt="" />
                            </div>
                            <div className="row">
                            {val.groupdata.map((item,index) => {
                                return(
                                    <>
                                    <div className="col-md-6" key={index}>
                                        <div className="box">
                                            <div className="img-box">
                                                <img src={item.iconthumb} alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <h5>{item.subtitle}</h5>
                                                <p>{item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })}
                            </div>
                        </>
                    )
                })}
            </div>
        </section>
      
     
    
    

    </>
  )
}
