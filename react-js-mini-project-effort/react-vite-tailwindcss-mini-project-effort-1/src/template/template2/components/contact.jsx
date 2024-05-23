import React from 'react';
import { ContactData } from './data';

export default function ContactSection() {
  return (
    <>
    <section className="contact_section layout_padding">
        <div className="container ">
            {ContactData.map((val,index) => {
                return(
                    <>
                        <div className="heading_container">
                            <h2>{val.title}</h2>
                            <img src={val.icon} alt="" />
                        </div>
                    </>
                )
            })}
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form action="">
                            <div>
                                <input type="text" placeholder="Name" />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" />
                            </div>
                            <div>
                                <input type="text" placeholder="Phone Number" />
                            </div>
                            <div>
                                <input type="text" className="message-box" placeholder="Message" />
                            </div>
                            <div className="d-flex ">
                                <button>SEND</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-6">
                        <div className="map_container">
                        <div className="map-responsive">
                            <iframe
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                            width={600}
                            height={300}
                            style={{ border: 0, width: "100%", height: "100%" }}
                            allowFullScreen=""
                            />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>

  )
}
