import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

export default function AosCustom() {
  return (
    <>
        <AosExample/>
    </>
  )
}

function AosExample(){
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 2000);
      AOS.init({
        duration: 2000,
        once: true,
      });
    }, []);
    return(
        <>
          <section id="mission">
            <div className='container'>
                <div className="content">
                <h1
                    className="title"
                    data-aos="fade-right"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="30"
                    data-aos-duration="1000"
                >
                    our
                    <br /> mission
                </h1>
                <p
                    className="info"
                    data-aos="fade-down-left"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="500"
                    data-aos-duration="1000"
                >
                    LGR aim to make online social media a better place through inspiring
                    creators to curate authentic content. Regardless follower counts,
                    all online creators deserve to know they own worth and be seen by
                    the world. LGR is created to make that happen.
                </p>
                </div>
            </div>
        </section>
        <section id="importance">
            <div className="container">
                <h1 className="title">
                Why We Are
                <br /> Different
                </h1>
                <div
                className="first-left"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="370"
                data-aos-delay="10"
                >
                <h2 className="first-left-title">Help Creators Be Proactive</h2>
                <p className="first-left-info">
                    Our marketplace platform gives creators the ability to pick and
                    choose among all collaboration opportunities available out there. So
                    no more sit and wait!
                </p>
                </div>
                <div
                className="first-right"
                data-aos="fade-left"
                data-aos-anchor-placement="center-bottom"
                data-aos-delay="10"
                data-aos-duration="370"
                >
                <h2 className="first-right-title">Build a Community</h2>
                <div className="first-right-info">
                    Creators are able to share their personal experience and ask
                    questions through blog posts and Q&A panels. We want to help you
                    find friends and mentors :)
                </div>
                </div>
                <div
                className="second-left"
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="370"
                data-aos-delay="10"
                >
                <h2 className="second-left-title">Authenticity + Growth</h2>
                <p className="second-left-info">
                    Authenticity and growth can co-live! Each creator can see analytics
                    of personal growth and insights on how sponsored content is
                    affecting their audience.{" "}
                </p>
                </div>
            </div>
        </section>
        </>
    )
}
